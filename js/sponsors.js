(() => {
  const t = (key, ...args) => window.PoggetI18n ? window.PoggetI18n.t(key, ...args) : key;
  const SPONSORS_API_URL = 'https://api.vilinko.com/sponsors/all';
  const SPONSOR_PREVIEW_LIMIT = 32;
  const REQUEST_TIMEOUT = 10000;

  const createSponsorPill = (name) => {
    const pill = document.createElement('span');
    pill.className = 'sponsor-pill';
    pill.textContent = name;
    return pill;
  };

  const sampleSponsors = (names, limit) => {
    const shuffled = [...names];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled.slice(0, limit);
  };

  const startSponsors = async () => {
    const sponsorStrip = document.getElementById('sponsor-strip');
    const marquee = document.getElementById('sponsor-marquee');
    const track = document.getElementById('sponsor-track');
    const count = document.getElementById('sponsor-count');
    const viewIndicator = document.getElementById('sponsor-view-indicator');
    const fullPanel = document.getElementById('sponsor-full-panel');
    const fullScroll = document.getElementById('sponsor-full-scroll');
    const fullList = document.getElementById('sponsor-full-list');
    if (!sponsorStrip || !marquee || !track || !count
      || !viewIndicator || !fullPanel || !fullScroll || !fullList) return;

    let resizeFrame = null;
    let fullSponsors = [];
    let fullListRendered = false;
    let fullListRendering = false;

    const updateMotion = () => {
      const primaryGroup = track.querySelector('[data-sponsor-group="primary"]');
      const canMove = primaryGroup && primaryGroup.childElementCount > 1;
      marquee.classList.toggle('is-moving', Boolean(canMove));
    };

    const renderSponsors = (names) => {
      const displayNames = names.length ? names : [t('thanks')];
      track.querySelectorAll('.sponsor-track-group').forEach((group) => {
        group.replaceChildren(...displayNames.map(createSponsorPill));
      });
      track.style.setProperty('--sponsor-duration', `${Math.max(26, displayNames.length * 3.2)}s`);
      window.requestAnimationFrame(updateMotion);
    };

    window.addEventListener('resize', () => {
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(updateMotion);
    });

    const scheduleBatch = (callback) => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback, { timeout: 300 });
      } else {
        window.setTimeout(() => callback({ timeRemaining: () => 8 }), 0);
      }
    };

    const renderFullSponsors = () => {
      if (fullListRendered || fullListRendering) return;
      fullListRendering = true;
      fullList.replaceChildren();

      let index = 0;
      const renderBatch = (deadline) => {
        const fragment = document.createDocumentFragment();
        let renderedThisBatch = 0;

        while (index < fullSponsors.length
          && renderedThisBatch < 36
          && (renderedThisBatch < 12 || deadline.timeRemaining() > 2)) {
          fragment.appendChild(createSponsorPill(fullSponsors[index]));
          index += 1;
          renderedThisBatch += 1;
        }
        fullList.appendChild(fragment);

        if (index < fullSponsors.length) {
          scheduleBatch(renderBatch);
          return;
        }

        fullListRendering = false;
        fullListRendered = true;
      };

      scheduleBatch(renderBatch);
    };

    const toggleFullPanel = () => {
      if (sponsorStrip.getAttribute('aria-disabled') === 'true') return;
      const willOpen = sponsorStrip.getAttribute('aria-expanded') !== 'true';
      sponsorStrip.setAttribute('aria-expanded', String(willOpen));
      fullPanel.classList.toggle('is-open', willOpen);
      fullPanel.setAttribute('aria-hidden', String(!willOpen));
      viewIndicator.querySelector('span').textContent = willOpen ? t('collapse') : t('view');
      if (willOpen) renderFullSponsors();
    };

    sponsorStrip.addEventListener('click', toggleFullPanel);
    sponsorStrip.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleFullPanel();
    });

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      const response = await fetch(SPONSORS_API_URL, {
        signal: controller.signal,
        cache: 'no-cache'
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const result = await response.json();
      if (result?.code !== 200 || !Array.isArray(result.data?.sponsors)) {
        throw new Error('赞助者 API 响应格式无效');
      }

      const allSponsors = result.data.sponsors
        .filter((name) => typeof name === 'string' && name.trim())
        .map((name) => name.trim());
      const namedSponsors = allSponsors.filter((name) => !name.includes('爱发电'));
      const afdianSponsors = allSponsors.filter((name) => name.includes('爱发电'));
      const visibleSponsors = [...new Set(namedSponsors)];
      const previewSponsors = sampleSponsors(visibleSponsors, SPONSOR_PREVIEW_LIMIT);
      if (!previewSponsors.length) {
        throw new Error('没有可展示的赞助者名称');
      }

      renderSponsors(previewSponsors);
      fullSponsors = [
        ...new Set(namedSponsors),
        ...new Set(afdianSponsors)
      ];
      count.textContent = t('sponsorCount', allSponsors.length);
      sponsorStrip.setAttribute('aria-disabled', 'false');
      sponsorStrip.classList.remove('is-unavailable');
      sponsorStrip.setAttribute('aria-hidden', 'false');
    } catch (error) {
      sponsorStrip.classList.add('is-unavailable');
      sponsorStrip.setAttribute('aria-hidden', 'true');
      console.error('赞助者名单加载失败:', error);
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  const observeSponsors = () => {
    const sponsorStrip = document.getElementById('sponsor-strip');
    if (!sponsorStrip || !('IntersectionObserver' in window)) {
      startSponsors();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      startSponsors();
    }, { rootMargin: '600px 0px' });
    observer.observe(sponsorStrip);
  };

  const scheduleSponsors = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(observeSponsors, { timeout: 2500 });
    } else {
      window.setTimeout(observeSponsors, 0);
    }
  };

  if (document.readyState === 'complete') {
    scheduleSponsors();
  } else {
    window.addEventListener('load', scheduleSponsors, { once: true });
  }
})();
