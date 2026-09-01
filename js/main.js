    const _pog = { valueOf: () => "Pog", toString: () => "Pog" };
    const _get = { valueOf: () => "get!", toString: () => "get!" };
    ['pocket', 'Pocket', 'POCKET'].forEach(k => Object.defineProperty(window, k, { get: () => _pog }));
    ['widget', 'Widget', 'WIDGET'].forEach(k => Object.defineProperty(window, k, { get: () => _get }));

    const _log = console.log;
    console.log = function(...args) {
      if (args.length === 1 && typeof args[0] === 'string') {
        const str = args[0].toLowerCase().replace(/\s+/g, '');
        if (str === 'pocket+widget' || str === 'pocket+widget=') {
          return _log.call(this, 'Pogget!');
        }
      }
      _log.apply(this, args);
    };

    document.addEventListener("DOMContentLoaded", () => {
      // === 手风琴/折叠面板交互逻辑 ===
      const accordionHeaders = document.querySelectorAll('.accordion-header');
      accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          const isActive = item.classList.contains('active');
          
          document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
          });

          if (!isActive) {
            item.classList.add('active');
          }
        });
      });

      const topPill = document.querySelector('.top-text-pill');
      const giantText = document.querySelector('.giant-text');
      const subGiantText = document.querySelector('.sub-giant-text'); 
      const actionGroup = document.querySelector('.action-group'); 
      const textToType = "Pocket + Widget";
      let charIndex = 0;

      function typeWriter() {
        if (charIndex < textToType.length) {
          topPill.textContent += textToType.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 120); 
        } else {
          setTimeout(() => {
            giantText.classList.add('show-up');
            setTimeout(() => {
              subGiantText.classList.add('show-up');
              actionGroup.classList.add('show-up'); 
            }, 300); 
          }, 600); 
        }
      }

      setTimeout(typeWriter, 400);

      const arrowIcon = document.getElementById('scroll-arrow');
      const moreInfoSection = document.getElementById('more-info');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            arrowIcon.classList.add('rotated');
          } else {
            arrowIcon.classList.remove('rotated');
          }
        });
      }, {
        threshold: 0.1 
      });

      observer.observe(moreInfoSection);


      const togetherArrowIcon = document.getElementById('together-arrow');
      const togetherSection = document.getElementById('together');

      if (togetherArrowIcon && togetherSection) {
        const togetherObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              togetherArrowIcon.classList.add('rotated');
            } else {
              togetherArrowIcon.classList.remove('rotated');
            }
          });
        }, {
          threshold: 0.1 
        });

        togetherObserver.observe(togetherSection);
      }

      // 下载弹窗交互逻辑
      const downloadBtns = document.querySelectorAll('.js-download-btn');
      const backdrop = document.getElementById('download-backdrop');
      const card = document.getElementById('download-card');

      downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          
          let x = e.clientX;
          let y = e.clientY;
          

          if (x + 280 > window.innerWidth) { 
              x -= 280;
    
              card.style.transformOrigin = 'top right';
          } else {
              card.style.transformOrigin = 'top left';
          }

          if (y + 150 > window.innerHeight) { 
              card.style.transformOrigin = card.style.transformOrigin.replace('top', 'bottom');
          } else {
              card.style.transformOrigin = card.style.transformOrigin.replace('bottom', 'top');
          }
          
          card.style.left = `${x}px`;
          card.style.top = `${y}px`;
          
          backdrop.classList.add('show');
          card.classList.add('show');
        });
      });

      // 【这里是之前缺失的点击背景关闭弹窗的代码】
      if (backdrop && card) {
        backdrop.addEventListener('click', () => {
          backdrop.classList.remove('show');
          card.classList.remove('show');
        });
      }

      // ========== 窗口自动编组 ==========
      const windows = document.querySelectorAll('.pogget-window');
      if (windows.length >= 2) {
        const win1 = windows[0];
        const win2 = windows[1];

        // 注入默认同一编组颜色
        const defaultColor = '#B3D688'; 
        win1.querySelector('.pogget-color-tag').style.backgroundColor = defaultColor;
        win2.querySelector('.pogget-color-tag').style.backgroundColor = defaultColor;
        win1.querySelector('.pogget-color-tag').style.border = '1px solid rgba(0,0,0,0.1)';
        win2.querySelector('.pogget-color-tag').style.border = '1px solid rgba(0,0,0,0.1)';
      }

      // === 功能轮播：5 秒自动切换，支持分页与暂停 ===
      const featureCarousel = document.getElementById('featureCarousel');
      if (featureCarousel) {
        const slides = Array.from(featureCarousel.querySelectorAll('.feature-carousel-slide'));
        const dots = Array.from(featureCarousel.querySelectorAll('.feature-carousel-dot'));
        const toggle = featureCarousel.querySelector('.feature-carousel-toggle');
        let currentSlide = 0;
        let autoTimer = null;
        let isPlaying = true;
        let isTransitioning = false;
        let highlightAnimationFrame = null;
        const carouselDuration = 5000;

        const highlightCharsBySlide = slides.map((slide) => {
          const chars = [];
          const targets = slide.querySelectorAll('.more-info-title');

          targets.forEach((target) => {
            const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
            const textNodes = [];
            let node;
            while ((node = walker.nextNode())) textNodes.push(node);

            textNodes.forEach((textNode) => {
              const fragment = document.createDocumentFragment();
              Array.from(textNode.nodeValue).forEach((character) => {
                const charSpan = document.createElement('span');
                charSpan.className = 'feature-highlight-char';
                charSpan.textContent = character;
                fragment.appendChild(charSpan);
                if (!/\s/.test(character)) chars.push(charSpan);
              });
              textNode.parentNode.replaceChild(fragment, textNode);
            });
          });

          return chars;
        });

        const updateHighlight = (slideIndex, progress) => {
          const chars = highlightCharsBySlide[slideIndex] || [];
          if (!chars.length) return;
          const highlightIndex = Math.min(chars.length - 1, Math.floor(progress * chars.length));
          chars.forEach((char, charIndex) => {
            char.classList.toggle('is-highlighted', charIndex <= highlightIndex);
          });
        };

        const animateHighlight = (slideIndex) => {
          if (highlightAnimationFrame !== null) {
            window.cancelAnimationFrame(highlightAnimationFrame);
            highlightAnimationFrame = null;
          }
          const chars = highlightCharsBySlide[slideIndex] || [];
          if (!chars.length) return;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min(1, (now - startTime) / carouselDuration);
            updateHighlight(slideIndex, progress);
            if (progress < 1) {
              highlightAnimationFrame = window.requestAnimationFrame(tick);
            } else {
              highlightAnimationFrame = null;
            }
          };
          updateHighlight(slideIndex, 0);
          highlightAnimationFrame = window.requestAnimationFrame(tick);
        };

        const updateIndicators = () => {
          slides.forEach((slide, slideIndex) => {
            slide.setAttribute('aria-hidden', slideIndex === currentSlide ? 'false' : 'true');
          });
          dots.forEach((dot, dotIndex) => {
            const active = dotIndex === currentSlide;
            dot.classList.toggle('is-active', active);
            dot.setAttribute('aria-current', active ? 'true' : 'false');
          });
        };

        const updateSlide = (index, immediate = false) => {
          const nextSlide = (index + slides.length) % slides.length;

          if (immediate) {
            currentSlide = nextSlide;
            slides.forEach((slide, slideIndex) => {
              slide.classList.toggle('is-active', slideIndex === currentSlide);
              slide.classList.remove('is-fading-out');
            });
            updateIndicators();
            return;
          }

          if (nextSlide === currentSlide || isTransitioning) return;
          isTransitioning = true;
          animateHighlight(nextSlide);

          const outgoingSlide = slides[currentSlide];
          outgoingSlide.classList.add('is-fading-out');
          outgoingSlide.classList.remove('is-active');

          window.setTimeout(() => {
            outgoingSlide.classList.remove('is-fading-out');
            currentSlide = nextSlide;
            updateIndicators();

            const incomingSlide = slides[currentSlide];
            void incomingSlide.offsetWidth;
            incomingSlide.classList.add('is-active');

            window.setTimeout(() => {
              isTransitioning = false;
            }, 350);
          }, 350);
        };

        const stopAuto = () => {
          if (autoTimer !== null) {
            window.clearInterval(autoTimer);
            autoTimer = null;
          }
        };

        const startAuto = () => {
          stopAuto();
          autoTimer = window.setInterval(() => updateSlide(currentSlide + 1), carouselDuration);
        };

        dots.forEach((dot) => {
          dot.addEventListener('click', () => {
            updateSlide(Number(dot.dataset.slide) || 0);
            if (isPlaying) startAuto();
          });
        });

        if (toggle) {
          toggle.addEventListener('click', () => {
            isPlaying = !isPlaying;
            toggle.setAttribute('aria-pressed', isPlaying ? 'false' : 'true');
            toggle.setAttribute('aria-label', isPlaying ? '暂停轮播' : '播放轮播');
            toggle.innerHTML = `<i class="fa-solid fa-${isPlaying ? 'pause' : 'play'}" aria-hidden="true"></i>`;
            if (isPlaying) {
              animateHighlight(currentSlide);
              startAuto();
            } else {
              stopAuto();
              if (highlightAnimationFrame !== null) {
                window.cancelAnimationFrame(highlightAnimationFrame);
                highlightAnimationFrame = null;
              }
            }
          });
        }

        updateSlide(0, true);
        animateHighlight(0);
        startAuto();
      }

      // === 滚动监听控制图库透明度与位移动画 ===
      const footerTextElement = document.querySelector('.footer-text');
      const scrollGalleries = document.querySelectorAll('.more-info-gallery-col');

      if (footerTextElement && scrollGalleries.length) {
        const handleScroll = () => {
          const rect = footerTextElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // 刚出现（离底部等于屏幕高度）作为 0，滑动到屏幕 1/3 处时作为 1
          const startY = viewportHeight;
          const targetY = viewportHeight / 5;
          
          let progress = (startY - rect.top) / (startY - targetY);
          progress = Math.max(0, Math.min(1, progress));
          
          const translateY = 40 - (40 * progress);
          scrollGalleries.forEach((gallery) => {
            gallery.style.opacity = progress;
            gallery.style.transform = `translateY(${translateY}px)`;
          });
        };

        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
      }

      // === 手机端画廊鼠标拖拽事件 ===
      const gallerySliders = document.querySelectorAll('.masonry-layout');
      gallerySliders.forEach((gallerySlider) => {
        let isDown = false;
        let startX;
        let scrollLeft;

        gallerySlider.addEventListener('mousedown', (e) => {
          isDown = true;
          // 拖动时临时取消吸附，防止手感僵硬
          gallerySlider.style.scrollSnapType = 'none'; 
          startX = e.pageX - gallerySlider.offsetLeft;
          scrollLeft = gallerySlider.scrollLeft;
        });
        gallerySlider.addEventListener('mouseleave', () => {
          isDown = false;
          gallerySlider.style.scrollSnapType = 'x mandatory';
        });
        gallerySlider.addEventListener('mouseup', () => {
          isDown = false;
          gallerySlider.style.scrollSnapType = 'x mandatory';
        });
        gallerySlider.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - gallerySlider.offsetLeft;
          const walk = (x - startX) * 1.5; // 滑动速度倍率
          gallerySlider.scrollLeft = scrollLeft - walk;
        });
        
        // 新增：滚轮横向滑动逻辑 (适配电脑版小窗口测试或触摸板)
        gallerySlider.addEventListener('wheel', (e) => {
          // 仅在当前是横排滚动布局时生效
          if (window.getComputedStyle(gallerySlider).display === 'flex') {
            e.preventDefault(); // 阻止页面默认的上下滚动
            gallerySlider.scrollLeft += e.deltaY || e.deltaX;
          }
        }, { passive: false });
      });

      // === 精准生成居中组件交互 (终极强制展示修复版) ===
      const createBtn = document.getElementById('createWidgetBtn');
      if (createBtn) {
        createBtn.addEventListener('click', () => {
          if (windows.length >= 2) {
            const win1 = windows[0];
            const win2 = windows[1];
            
            // 【核心修复一：将组件直接追加到 body 尾部】
            // 脱离 .more-info-section 父级，防止被隐藏或影响排版流
            document.body.appendChild(win1);
            document.body.appendChild(win2);
            
            // 兼容原有移动端隐藏类，强制移除内联的 none，并拔高层级
            win1.classList.add('mobile-show');
            win2.classList.add('mobile-show');
            win1.style.setProperty('display', 'block', 'important');
            win2.style.setProperty('display', 'block', 'important');
            win1.style.visibility = 'visible';
            win2.style.visibility = 'visible';
            win1.style.opacity = '1';
            win2.style.opacity = '1';
            win1.style.zIndex = '9999';
            win2.style.zIndex = '9999';
            
            // 延迟 50ms 等待浏览器将组件挂载到 body 并在屏幕渲染后计算尺寸
            setTimeout(() => {
              const winWidth = win1.offsetWidth || 260;
              const win1Height = win1.offsetHeight || 150;
              const win2Height = win2.offsetHeight || 150;
              const totalHeight = win1Height + 15 + win2Height;
              
              // 强制赋予绝对定位（因为已经在 body 下，绝对定位坐标直接就是网页坐标）
              win1.style.setProperty('position', 'absolute', 'important');
              win2.style.setProperty('position', 'absolute', 'important');
              
              // 【核心修复二：纯粹的绝对坐标系中心计算】
              // X 居中 = 屏幕宽度的一半 - 组件宽度的一半
              // Y 居中 = 当前页面滚动距离 + 屏幕高度的一半 - 总高度的一半
              let targetX = (window.innerWidth / 2) - (winWidth / 2);
              let targetY = window.scrollY + (window.innerHeight / 2) - (totalHeight / 2);
              
              win1.style.left = targetX + "px";
              win1.style.top = targetY + "px"; 
              
              // 严格对齐第二个组件，确保排版一致
              win2.style.left = targetX + "px";
              win2.style.top = (targetY + win1Height + 15) + "px";
            }, 50);
            
            createBtn.style.display = 'none'; // 生成后隐藏按钮
          }
        });
      }
    });

    // === 核心逻辑提取：编组联动推挤 (适用于拖拽和尺寸改变) ===
      function applyGroupSnapping(srcWin, moveDL, moveDT, moveDR, moveDB) {
          let colorTag = srcWin.querySelector('.pogget-color-tag');
          let myColor = colorTag ? colorTag.style.backgroundColor : "";
          let isUnassigned = !myColor || myColor === 'transparent' || myColor === 'rgba(0, 0, 0, 0)';

          if (isUnassigned) return;

          let gap = 15;
          let detectRange = 40;
          let processed = new Set();
          processed.add(srcWin);
          let allWindows = Array.from(document.querySelectorAll('.pogget-window'));

          function ProcessChain(currWin, dL, dT, dR, dB) {
              let srcRc = {
                  left: currWin.offsetLeft,
                  top: currWin.offsetTop,
                  width: currWin.offsetWidth,
                  height: currWin.offsetHeight
              };
              srcRc.right = srcRc.left + srcRc.width;
              srcRc.bottom = srcRc.top + srcRc.height;

              for (let otherWin of allWindows) {
                  if (processed.has(otherWin)) continue;
                  let otherColorTag = otherWin.querySelector('.pogget-color-tag');
                  let otherColor = otherColorTag ? otherColorTag.style.backgroundColor : null;
                  if (otherColor !== myColor) continue;

                  let oRc = {
                      left: otherWin.offsetLeft,
                      top: otherWin.offsetTop,
                      width: otherWin.offsetWidth,
                      height: otherWin.offsetHeight
                  };
                  oRc.right = oRc.left + oRc.width;
                  oRc.bottom = oRc.top + oRc.height;

                  let lastSrcL = srcRc.left - dL;
                  let lastSrcT = srcRc.top - dT;
                  let lastSrcR = srcRc.right - dR;
                  let lastSrcB = srcRc.bottom - dB;

                  let distH = Math.max(0, Math.max(lastSrcL - oRc.right, oRc.left - lastSrcR));
                  let distV = Math.max(0, Math.max(lastSrcT - oRc.bottom, oRc.top - lastSrcB));
                  let dist = Math.sqrt(distH * distH + distV * distV);

                  if (dist < detectRange) {
                      let tx = oRc.left;
                      let ty = oRc.top;
                      let finalMoveX = 0;
                      let finalMoveY = 0;

                      if (lastSrcB <= oRc.top + 10) {
                          finalMoveY = dB;
                          if (ty + finalMoveY < srcRc.bottom + gap) finalMoveY = (srcRc.bottom + gap) - ty;
                      } else if (lastSrcT >= oRc.bottom - 10) {
                          finalMoveY = dT;
                          if (ty + finalMoveY + oRc.height > srcRc.top - gap) finalMoveY = (srcRc.top - gap - oRc.height) - ty;
                      } else {
                          finalMoveY = dT;
                      }

                      if (lastSrcR <= oRc.left + 10) {
                          finalMoveX = dR;
                          if (tx + finalMoveX < srcRc.right + gap) finalMoveX = (srcRc.right + gap) - tx;
                      } else if (lastSrcL >= oRc.right - 10) {
                          finalMoveX = dL;
                          if (tx + finalMoveX + oRc.width > srcRc.left - gap) finalMoveX = (srcRc.left - gap - oRc.width) - tx;
                      } else {
                          finalMoveX = dL;
                      }

                      processed.add(otherWin);

                      if (finalMoveX !== 0 || finalMoveY !== 0) {
                          otherWin.style.left = (tx + finalMoveX) + "px";
                          otherWin.style.top = (ty + finalMoveY) + "px";
                          // 目标窗口由于是被整体平移的，所以它的四向位移量都是相同的
                          ProcessChain(otherWin, finalMoveX, finalMoveY, finalMoveX, finalMoveY);
                      }
                  }
              }
          }
          ProcessChain(srcWin, moveDL, moveDT, moveDR, moveDB);
      }

      // === 拖拽逻辑 (改为调用公共推挤函数) ===
      function makeDraggable(element) {
        let pos3 = 0, pos4 = 0;
        const header = element.querySelector('.pogget-window-header');
        
        if (header) {
          header.onmousedown = dragMouseDown;
          header.ontouchstart = dragTouchStart; 
        } else {
          element.onmousedown = dragMouseDown;
          element.ontouchstart = dragTouchStart;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          if(e.target.closest('.fa-chevron-up') || e.target.closest('.fa-chevron-down') || e.target.closest('.fa-ellipsis') || e.target.closest('.pogget-color-tag')) {
              return; 
          }
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
          
          document.querySelectorAll('.pogget-window').forEach(w => w.style.zIndex = 50);
          element.style.zIndex = 51;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();

          let dx = e.clientX - pos3;
          let dy = e.clientY - pos4;
          pos3 = e.clientX;
          pos4 = e.clientY;

          element.style.left = (element.offsetLeft + dx) + "px";
          element.style.top = (element.offsetTop + dy) + "px";

          if (!e.ctrlKey) {
              applyGroupSnapping(element, dx, dy, dx, dy);
          }
        }

        // 兼容手机端触摸拖拽
        function dragTouchStart(e) {
          if(e.target.closest('.fa-chevron-up') || e.target.closest('.fa-chevron-down') || e.target.closest('.fa-ellipsis') || e.target.closest('.pogget-color-tag')) {
              return; 
          }
          const touch = e.touches[0];
          pos3 = touch.clientX;
          pos4 = touch.clientY;
          document.ontouchend = closeDragElement;
          document.ontouchmove = elementTouchDrag;
          
          document.querySelectorAll('.pogget-window').forEach(w => w.style.zIndex = 50);
          element.style.zIndex = 51;
        }

        function elementTouchDrag(e) {
          const touch = e.touches[0];
          let dx = touch.clientX - pos3;
          let dy = touch.clientY - pos4;
          pos3 = touch.clientX;
          pos4 = touch.clientY;

          element.style.left = (element.offsetLeft + dx) + "px";
          element.style.top = (element.offsetTop + dy) + "px";

          applyGroupSnapping(element, dx, dy, dx, dy);
        }

        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
          document.ontouchend = null;
          document.ontouchmove = null;
        }
      }
      // 初始化所有带 .pogget-window 类的元素以支持拖拽
      document.querySelectorAll('.pogget-window').forEach(makeDraggable);

      // ================= 调色板与面板逻辑（完整终极版） =================
      const paletteColors = [
        '#EE9D91', '#EFA97A', '#EDD17D', '#B3D688', '#91D2A4', 
        '#85BBE0', '#96A9DF', '#AB9AD4', '#C599CE', '#DF9EDB', 
        '#4A4D4E'
      ];

      // 记录当前操作的窗口，默认选中第一个
      let activeWindow = document.querySelector('.pogget-window');

      // 生成调色板 HTML 模板
      const paletteHTML = `
        <div class="palette-popup">
          <div class="palette-title">调色板</div>
          <div class="palette-colors">
            ${paletteColors.map(c => `<div class="color-circle" style="background-color: ${c};" data-color="${c}"></div>`).join('')}
            <div class="btn-ungroup">未编组</div>
          </div>
        </div>
      `;

      // 遍历所有窗口，注入DOM并绑定各类事件
      document.querySelectorAll('.pogget-window').forEach(win => {
        win.insertAdjacentHTML('beforeend', paletteHTML);
        
        const popup = win.querySelector('.palette-popup');
        const colorTag = win.querySelector('.pogget-color-tag');

        // 1. 颜色标签点击逻辑 (兼顾触摸屏 click)
        colorTag.addEventListener('click', (e) => {
          e.stopPropagation(); 
          document.querySelectorAll('.palette-popup').forEach(p => {
            if (p !== popup) p.classList.remove('show');
          });
          popup.classList.toggle('show');
          activeWindow = win; 
        });

        // 2. 折叠与展开逻辑
        const collapseBtn = win.querySelector('.fa-chevron-up, .fa-chevron-down');
        const contentArea = win.querySelector('.pogget-window-content');
        
        if (collapseBtn && contentArea) {
            collapseBtn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                
                let oldHeight = win.offsetHeight;
                
                contentArea.classList.toggle('collapsed');
                collapseBtn.classList.toggle('fa-chevron-up');
                collapseBtn.classList.toggle('fa-chevron-down');
                
                let newHeight = win.offsetHeight;
                let deltaY = newHeight - oldHeight;
                
                // 巧妙借用推挤计算：折叠只改变了底部位置
                if (!e.ctrlKey) { 
                    applyGroupSnapping(win, 0, 0, 0, deltaY);
                }
            });
        }

        // 3. 颜色圆点点击逻辑
        popup.querySelectorAll('.color-circle').forEach(circle => {
          circle.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedColor = circle.dataset.color;
            colorTag.style.backgroundColor = selectedColor;
            colorTag.style.border = '1px solid rgba(0,0,0,0.1)'; 
            popup.classList.remove('show');
          });
        });

        // 4. 未编组按钮点击逻辑
        popup.querySelector('.btn-ungroup').addEventListener('click', (e) => {
          e.stopPropagation();
          colorTag.style.backgroundColor = 'transparent';
          colorTag.style.border = '1px dashed #9ca3af'; 
          popup.classList.remove('show');
        });

        // 5. 防止点击面板自身时触发意外关闭
        popup.addEventListener('click', (e) => {
          e.stopPropagation();
        });
        
        // 6. 点击窗口任意位置更新 ActiveWindow
        win.addEventListener('mousedown', () => { activeWindow = win; });
        win.addEventListener('touchstart', () => { activeWindow = win; }, {passive: true});
      });

      // ================= 全局事件 =================

      // 7. L 键呼出对应窗口的调色板
      document.addEventListener('keydown', (e) => {
        if ((e.key === 'l' || e.key === 'L') && activeWindow) {
          const popup = activeWindow.querySelector('.palette-popup');
          if (popup) {
            // 关闭其他
            document.querySelectorAll('.palette-popup').forEach(p => {
                if (p !== popup) p.classList.remove('show');
            });
            // 切换当前
            popup.classList.toggle('show');
          }
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.palette-popup') && !e.target.closest('.pogget-color-tag')) {
          document.querySelectorAll('.palette-popup').forEach(p => p.classList.remove('show'));
        }
      });
