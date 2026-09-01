(() => {
  const SPONSORS_API_URL = 'https://api.vilinko.com/sponsors/all';
  const SPONSOR_PREVIEW_LIMIT = 32;
  const REQUEST_TIMEOUT = 10000;

  const createSponsorPill = (name) => {
    const pill = document.createElement('span');
    pill.className = 'sponsor-pill';
    pill.textContent = name;
    return pill;
  };

  const startSponsors = async () => {
    const sponsorStrip = document.getElementById('sponsor-strip');
    const marquee = document.getElementById('sponsor-marquee');
    const track = document.getElementById('sponsor-track');
    const count = document.getElementById('sponsor-count');
    if (!sponsorStrip || !marquee || !track || !count) return;

    let resizeFrame = null;

    const updateMotion = () => {
      const primaryGroup = track.querySelector('[data-sponsor-group="primary"]');
      const hasOverflow = primaryGroup
        && primaryGroup.scrollWidth > marquee.clientWidth + 4;
      marquee.classList.toggle('is-moving', Boolean(hasOverflow));
    };

    const renderSponsors = (names) => {
      const displayNames = names.length ? names : ['感谢每一份支持'];
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
      const visibleSponsors = [...new Set(
        allSponsors.filter((name) => !name.includes('爱发电'))
      )];
      const previewSponsors = visibleSponsors
        .slice(-SPONSOR_PREVIEW_LIMIT)
        .reverse();
      if (!previewSponsors.length) {
        throw new Error('没有可展示的赞助者名称');
      }

      renderSponsors(previewSponsors);
      count.textContent = `等 ${allSponsors.length} 位赞助者`;
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
