    const POGGET_I18N = (() => {
      const locales = {
        'zh-CN': {
          pageTitle: 'Pogget | 轻量强大的文件收纳管理工具', subHero: '一款完全免费、由每一个用户支持的轻量文件交互效率工具。',
          metaDescription: '这里是 Pogget 的官方网站，欢迎探索 Pogget！这是一款完全免费、轻量、强大且由每一个用户支持的文件交互管理工具，专注于以高灵活性提升工作效率。',
          navParticipate: '用户参与', download: '下载', sponsor: '赞助', explore: '探索更多 Pogget',
          scrollMore: '向下滚动了解更多', together: '与我们一起共建 Pogget', changelog: 'Pogget 更新日志',
          demo: '本窗口仅作为 DEMO 演示', pressL: '按下', setGroup: '来设置编组', grouped: '编组后可按住',
          temporarilyUngroup: '临时解除编组', unnamed: '未命名', palette: '调色板', ungroup: '未编组',
          featureLabel: 'Pogget 功能介绍', powerful: '强大、灵活、高效。', mapped: '映射收纳盒', mappedDesc: '不搬运文件。只建立连接。把藏在电脑各处的常用文件拖进来，就能直接在桌面打开。不占额外空间，用完随时清空，轻盈而无负担。',
          regular: '普通收纳盒', regularDesc: '桌面的小抽屉，为日常工作准备。文件会被真实地移入其中，你可以在这里重命名、删除或归档。把今天需要处理的资料统统放进来，安稳又踏实。',
          target: '目标收纳盒', targetDesc: '类似普通收纳盒，但将收纳盒与硬盘的现有文件夹直接绑定。你在收纳盒上怎么拖拽、怎么整理，真实的文件夹里就怎么变化。不用来回切窗口，双向同步，所见即所得。',
          magnet: '磁力访问窗', magnetDesc: '当打开/保存对话框触发时会立刻吸附在窗口旁边。访问窗的内容与收纳盒完全一致且互通。当拿不定主意或者文件仅需临时存放时，还可以创建隐身收纳盒作为临时工作区，随时访问。',
          quick: '快速面板', quickDesc: '所有收纳盒的内容都会出现在这里。可以在需要的时候快速按下快捷键触发，告别繁琐的文件查找操作。同时还可以拆分面板，如浏览器一般管理文件。', createWidget: '创建组件',
          groupingTitle: '同色编组，便捷管理。', sameGroup: '同色编组', sameGroupDesc: '相同标签颜色的收纳盒会进行吸附并一起移动，提供更加连续的文件管理体验。', merge: '合并同色收纳盒', mergeDesc: '相同标签颜色的收纳盒可以合并为一个大收纳盒以标签或分组的形式展示，随时合并与拆分还原。', groupKey: '编组键', groupKeyDesc: '相同颜色标签的收纳盒可作为一个临时工作区，使用特定快捷键置顶、合并或者还原，随时召唤收纳盒。',
          freedomTitle: '高度自由，随你所想。', customSort: '自定义排序方式', customSortDesc: '支持列表、网格等布局模式，可以自由排序，也可按文件名、大小、时间进行排列。', customLayout: '自定义布局', customLayoutDesc: '自定义的图标间隔、大小、行列数量，并可按您的需求决定分页方式。', personalization: '个性化', personalizationDesc: '可以为全部收纳盒或单独收纳盒设置你喜欢背景、元素以及交互行为。', themes: '色彩主题', themesDesc: 'Pogget 内置多种色彩主题，选择一个你喜爱的主题，开启舒适的收纳体验！',
          contributeText: '🎉你好呀！遇见你是我们最开心的事情！<br>"Pogget" 由 Pocket 和 Widget 的读音构成，意在为您提供能放进口袋般轻量、灵活的实用组件。<br>Pogget 的理念是以用户为本，由每一位用户共同支持。<br>若可以的话，感谢您为创作的旅途点亮的一盏盏的灯火！也可以积极向咱们提出您的灵感以及在使用过程中遇到的问题~',
          submitIssue: '提交 ISSUE', channel: '我们的腾讯频道', support: '服务支持', follow: '追踪B站', sponsorDev: '赞助开发',
          sponsorList: '查看完整赞助者名单', sponsorPreview: '赞助者名单滚动预览', thanks: '感谢', loadingSponsors: '名单加载中', sponsorCount: n => `等 ${n} 位赞助者`, view: '查看', collapse: '收起',
          fullSponsors: '完整赞助者名单，可纵向滚动', loadSponsors: '点击查看后加载完整名单', loadingLogs: '正在加载日志...', expandLogs: '展开日志', collapseLogs: '收起日志', updateAvailable: '发现新版本！',
          logsError: '无法加载更新日志，请稍后重试。', latest: '已经是最新版本！', latestBody: n => `您当前的版本 (Build ${n}) 已是最新版本啦！`, newVersion: v => `发现新版本：${v}`, close: '关闭', downloadNow: '立即下载',
          windowsRecommended: 'Pogget Windows x64 (推荐)', windowsArm: 'Pogget Windows ARM64', pdbDebug: 'Pogget PDB x64 (DEBUG)', downloadLogs: '查看更新日志',
          carouselControl: '轮播控制', showPage: n => `显示第 ${n} 页`, pause: '暂停轮播', play: '播放轮播',
          altShare: 'Pogget 预览', altComponent1: 'Pogget 组件 1', altComponent2: 'Pogget 组件 2', altMerged: '同色收纳盒合并示意', altTag: '标签管理示意', altSettings: 'Pogget 个性化设置面板', altList: 'Pogget 列表布局', altGrid: 'Pogget 自由网格布局', altPaged: 'Pogget 分页网格布局'
        },
        'zh-TW': {
          pageTitle: 'Pogget｜輕量強大的檔案收納管理工具', subHero: '一款完全免費、由每位使用者支持的輕量檔案互動效率工具。', metaDescription: '這裡是 Pogget 的官方網站，歡迎探索 Pogget！這是一款完全免費、輕量、強大且由每位使用者支持的檔案互動管理工具，專注以高靈活性提升工作效率。',
          navParticipate: '使用者參與', download: '下載', sponsor: '贊助', explore: '探索更多 Pogget', scrollMore: '向下捲動了解更多', together: '與我們一起共建 Pogget', changelog: 'Pogget 更新日誌', demo: '本視窗僅作為 DEMO 示範', pressL: '按下', setGroup: '來設定編組', grouped: '編組後可按住', temporarilyUngroup: '暫時解除編組', unnamed: '未命名', palette: '調色盤', ungroup: '未編組', featureLabel: 'Pogget 功能介紹', powerful: '強大、靈活、高效。', mapped: '映射收納盒', mappedDesc: '不搬運檔案，只建立連結。把散落在電腦各處的常用檔案拖進來，就能直接在桌面開啟。不佔額外空間，用完隨時清空，輕盈無負擔。', regular: '一般收納盒', regularDesc: '桌面上的小抽屜，為日常工作準備。檔案會實際移入其中，你可以在這裡重新命名、刪除或封存。把今天要處理的資料都放進來，安穩又踏實。', target: '目標收納盒', targetDesc: '類似一般收納盒，但會直接綁定硬碟上的現有資料夾。你在收納盒上如何拖曳、整理，實際資料夾就如何變化。雙向同步，所見即所得。', magnet: '磁力存取窗', magnetDesc: '開啟或儲存對話框觸發時，會立即吸附在視窗旁。存取窗內容與收納盒完全一致並互通，也能建立隱形收納盒作為臨時工作區。', quick: '快速面板', quickDesc: '所有收納盒的內容都會出現在這裡。需要時按下快捷鍵即可快速喚出，告別繁瑣的檔案搜尋，也能像瀏覽器一樣拆分面板管理檔案。', createWidget: '建立元件', groupingTitle: '同色編組，便利管理', sameGroup: '同色編組', sameGroupDesc: '標籤顏色相同的收納盒會彼此吸附並一起移動，帶來更連貫的檔案管理體驗。', merge: '合併同色收納盒', mergeDesc: '標籤顏色相同的收納盒可合併成一個大收納盒，以標籤或群組形式呈現，隨時合併、拆分與還原。', groupKey: '編組鍵', groupKeyDesc: '相同顏色標籤的收納盒可作為臨時工作區，使用指定快捷鍵置頂、合併或還原。', freedomTitle: '高度自由，隨心所想', customSort: '自訂排序方式', customSortDesc: '支援清單、網格等版面模式，可自由排序，也能依檔名、大小或時間排列。', customLayout: '自訂版面', customLayoutDesc: '自訂圖示間距、大小與行列數量，並依需求決定分頁方式。', personalization: '個人化', personalizationDesc: '可為全部或個別收納盒設定喜愛的背景、元素與互動行為。', themes: '色彩主題', themesDesc: 'Pogget 內建多種色彩主題，選擇喜愛的主題，享受舒適的收納體驗！', contributeText: '🎉你好呀！遇見你是我們最開心的事！<br>「Pogget」由 Pocket 和 Widget 的讀音組成，希望提供如口袋般輕量、靈活的實用元件。<br>Pogget 以使用者為本，由每一位使用者共同支持。<br>感謝你為創作旅程點亮一盞盞燈火，也歡迎分享靈感與使用時遇到的問題～', submitIssue: '提交 ISSUE', channel: '我們的騰訊頻道', support: '服務支援', follow: '追蹤 B 站', sponsorDev: '贊助開發', sponsorList: '查看完整贊助者名單', sponsorPreview: '贊助者名單滾動預覽', thanks: '感謝', loadingSponsors: '名單載入中', sponsorCount: n => `共 ${n} 位贊助者`, view: '查看', collapse: '收起', fullSponsors: '完整贊助者名單，可垂直捲動', loadSponsors: '點擊查看後載入完整名單', loadingLogs: '正在載入日誌…', expandLogs: '展開日誌', collapseLogs: '收起日誌', logsError: '無法載入更新日誌，請稍後再試。', latest: '已是最新版本！', latestBody: n => `你目前的版本（Build ${n}）已是最新版本。`, newVersion: v => `發現新版本：${v}`, close: '關閉', downloadNow: '立即下載', windowsRecommended: 'Pogget Windows x64（推薦）', windowsArm: 'Pogget Windows ARM64', pdbDebug: 'Pogget PDB x64（DEBUG）', downloadLogs: '查看更新日誌', carouselControl: '輪播控制', showPage: n => `顯示第 ${n} 頁`, pause: '暫停輪播', play: '播放輪播', altShare: 'Pogget 預覽', altComponent1: 'Pogget 元件 1', altComponent2: 'Pogget 元件 2', altMerged: '同色收納盒合併示意', altTag: '標籤管理示意', altSettings: 'Pogget 個人化設定面板', altList: 'Pogget 清單版面', altGrid: 'Pogget 自由網格版面', altPaged: 'Pogget 分頁網格版面'
        },
        'en-US': {
          pageTitle: 'Pogget | A Lightweight, Powerful File Organizer', subHero: 'A free, lightweight file interaction tool supported by every user.', metaDescription: 'Welcome to the official Pogget website. Pogget is a free, lightweight and powerful file interaction tool shaped by its community, built to make everyday work more flexible and efficient.', navParticipate: 'Get Involved', download: 'Download', sponsor: 'Sponsor', explore: 'Explore More Pogget', scrollMore: 'Scroll down to learn more', together: 'Build Pogget With Us', changelog: 'Pogget Changelog', demo: 'This window is for DEMO purposes only', pressL: 'Press', setGroup: 'to set a group', grouped: 'After grouping, hold', temporarilyUngroup: 'to temporarily ungroup', unnamed: 'Unnamed', palette: 'Palette', ungroup: 'Ungroup', featureLabel: 'Pogget features', powerful: 'Powerful, flexible, efficient.', mapped: 'Linked Box', mappedDesc: 'Files stay where they are. Pogget creates a link, so you can drag frequently used files from anywhere on your PC and open them right from the desktop. No extra storage, no clutter.', regular: 'Regular Box', regularDesc: 'A small desktop drawer for everyday work. Files are moved here for real, ready to be renamed, deleted or archived when you need them.', target: 'Folder Box', targetDesc: 'Like a regular box, but linked directly to an existing folder on your drive. Organize it here and the real folder updates in sync, both ways.', magnet: 'Magnet Access Window', magnetDesc: 'It snaps beside open/save dialogs as soon as they appear. Its contents stay in sync with your boxes, and hidden boxes make handy temporary workspaces.', quick: 'Quick Panel', quickDesc: 'Every box is available here. Trigger it with a shortcut when you need it, skip tedious file hunting, and split panels to manage files like you would in a browser.', createWidget: 'Create Widgets', groupingTitle: 'Color Groups, Easier Management', sameGroup: 'Color Groups', sameGroupDesc: 'Boxes with the same tag color stick together and move as one for a smoother file-management flow.', merge: 'Merge Color Boxes', mergeDesc: 'Boxes sharing a tag color can become one larger box, shown as a tag or group, and restored whenever you need.', groupKey: 'Group Shortcut', groupKeyDesc: 'Use same-colored boxes as a temporary workspace. A dedicated shortcut lets you bring them forward, merge them or restore them.', freedomTitle: 'Make It Yours', customSort: 'Custom Sorting', customSortDesc: 'Choose list, grid and other layouts. Sort freely by name, size or time.', customLayout: 'Custom Layout', customLayoutDesc: 'Set icon spacing, size and row/column counts, then choose the pagination that fits your workflow.', personalization: 'Personalization', personalizationDesc: 'Set the background, elements and interaction style for every box or just one.', themes: 'Color Themes', themesDesc: 'Pogget includes a range of color themes. Pick one you like and settle into a more comfortable workspace.', contributeText: '🎉Hello! Meeting you is the best part of what we do.<br>“Pogget” blends the sounds of Pocket and Widget: lightweight, flexible tools that fit right into your workflow.<br>Pogget is built around its users and supported by every member of the community.<br>Thanks for lighting the way with your ideas, feedback and support.', submitIssue: 'Submit an ISSUE', channel: 'Tencent Channel', support: 'Support', follow: 'Follow on Bilibili', sponsorDev: 'Support Development', sponsorList: 'View the full sponsor list', sponsorPreview: 'Scrolling sponsor preview', thanks: 'Thanks', loadingSponsors: 'Loading sponsors', sponsorCount: n => `${n} sponsors`, view: 'View', collapse: 'Collapse', fullSponsors: 'Full sponsor list, scroll vertically', loadSponsors: 'Click to load the full list', loadingLogs: 'Loading changelog…', expandLogs: 'Show more', collapseLogs: 'Show less', logsError: 'Unable to load the changelog. Please try again later.', latest: 'You are up to date!', latestBody: n => `Your current version (Build ${n}) is the latest.`, newVersion: v => `New version: ${v}`, close: 'Close', downloadNow: 'Download now', windowsRecommended: 'Pogget Windows x64 (Recommended)', windowsArm: 'Pogget Windows ARM64', pdbDebug: 'Pogget PDB x64 (DEBUG)', downloadLogs: 'View changelog', carouselControl: 'Carousel controls', showPage: n => `Show page ${n}`, pause: 'Pause carousel', play: 'Play carousel', altShare: 'Pogget preview', altComponent1: 'Pogget component 1', altComponent2: 'Pogget component 2', altMerged: 'Color-box merge preview', altTag: 'Tag management preview', altSettings: 'Pogget personalization panel', altList: 'Pogget list layout', altGrid: 'Pogget free grid layout', altPaged: 'Pogget paged grid layout'
        }
      };
      const languageOverride = new URLSearchParams(window.location.search).get('lang');
      const language = (languageOverride || navigator.language || '').toLowerCase();
      const locale = language.startsWith('zh-cn') || language.startsWith('zh-hans') || language === 'zh' || language.startsWith('zh-sg') ? 'zh-CN' : language.startsWith('zh-tw') || language.startsWith('zh-hant') || language.startsWith('zh-hk') || language.startsWith('zh-mo') ? 'zh-TW' : 'en-US';
      const t = (key, ...args) => { const value = locales[locale][key] ?? locales['en-US'][key] ?? key; return typeof value === 'function' ? value(...args) : value; };
      const setText = (selector, key) => document.querySelectorAll(selector).forEach(el => { el.textContent = t(key); });
      const setLabel = (selector, key) => document.querySelectorAll(selector).forEach(el => {
        const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        const textNode = textNodes[textNodes.length - 1];
        textNodes.slice(0, -1).forEach(node => { if (!node.nodeValue.trim()) node.nodeValue = ''; });
        if (textNode) {
          const leadingSpace = textNode.previousSibling && textNode.previousSibling.nodeType === Node.ELEMENT_NODE ? ' ' : '';
          const trailingSpace = textNode.nextSibling && textNode.nextSibling.nodeType === Node.ELEMENT_NODE ? ' ' : '';
          textNode.nodeValue = `${leadingSpace}${t(key)}${trailingSpace}`;
        } else {
          el.append(` ${t(key)}`);
        }
      });
      const setHTML = (selector, key) => document.querySelectorAll(selector).forEach(el => { el.innerHTML = t(key); });
      const apply = () => {
        document.documentElement.lang = locale;
        document.title = t('pageTitle');
        const description = document.querySelector('meta[name="description"]'); if (description) description.content = t('metaDescription');
        document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(el => { el.content = t('pageTitle'); }); document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach(el => { el.content = t('metaDescription'); });
        setText('.header-right > .vilinko-control[href="#together"]', 'navParticipate'); setText('.header-right .js-download-btn', 'download'); setText('.action-group .js-download-btn', 'download'); setLabel('.pageTitleDes', 'sponsor'); setText('.hero-section .footer-text', 'explore'); setText('.more-info-section .footer-content .footer-text', 'together'); setText('.together-changelog-link .footer-text', 'changelog');
        setText('.sub-giant-text', 'subHero'); setText('.together-title', 'together'); setHTML('.together-content', 'contributeText'); setText('.together-changelog-link .footer-text', 'changelog'); setText('.changelog-title', 'changelog');
        setText('.pogget-title-pill span', 'unnamed'); setText('.pogget-window-content p:nth-child(1)', 'demo');
        document.querySelectorAll('.pogget-window-content p:nth-child(2)').forEach(el => { el.innerHTML = `${t('pressL')} <span class="vilinko-control key-btn">L</span> ${t('setGroup')}`; });
        document.querySelectorAll('.pogget-window-content p:nth-child(3)').forEach(el => { el.innerHTML = `${t('grouped')} <span class="vilinko-control key-btn">CTRL</span> ${t('temporarilyUngroup')}`; });
        const slideTitles = ['powerful', 'groupingTitle', 'freedomTitle']; document.querySelectorAll('.more-info-title').forEach((el, i) => el.textContent = t(slideTitles[i])); const titles = ['mapped','regular','target','magnet','quick','sameGroup','merge','groupKey','customSort','customLayout','personalization','themes']; document.querySelectorAll('.accordion-header > span').forEach((el, i) => el.textContent = t(titles[i]));
        const descs = ['mappedDesc','regularDesc','targetDesc','magnetDesc','quickDesc','sameGroupDesc','mergeDesc','groupKeyDesc','customSortDesc','customLayoutDesc','personalizationDesc','themesDesc']; document.querySelectorAll('.accordion-content p').forEach((el, i) => el.textContent = t(descs[i]));
        setLabel('#createWidgetBtn', 'createWidget'); setLabel('.together-btn:nth-child(1)', 'submitIssue'); setLabel('.together-btn:nth-child(2)', 'channel'); setLabel('.together-btn:nth-child(3)', 'support'); setLabel('.together-btn:nth-child(4)', 'follow'); setLabel('.together-btn:nth-child(5)', 'sponsorDev');
        const attrs = [['#featureCarousel','aria-label','featureLabel'],['.feature-carousel-controls','aria-label','carouselControl'],['.sponsor-strip','aria-label','sponsorList'],['#sponsor-marquee','aria-label','sponsorPreview'],['#sponsor-full-scroll','aria-label','fullSponsors'],['#sponsor-view-indicator span','data-i18n','view']]; attrs.forEach(([selector, attr, key]) => document.querySelectorAll(selector).forEach(el => attr === 'data-i18n' ? el.textContent = t(key) : el.setAttribute(attr, t(key))));
        document.querySelectorAll('a[href="#more-info"]').forEach(el => el.setAttribute('aria-label', t('scrollMore'))); document.querySelectorAll('a[href="#together"]').forEach(el => el.setAttribute('aria-label', t('scrollMore'))); document.querySelectorAll('a[href="#changelog"]').forEach(el => el.setAttribute('aria-label', t('scrollMore')));
        const tooltips = document.querySelectorAll('.nav-capsule-item[data-tooltip]'); if (tooltips[0]) tooltips[0].setAttribute('data-tooltip', locale === 'en-US' ? 'Open the PoggetCore repository\nIssues and ideas are welcome' : locale === 'zh-TW' ? '查看 PoggetCore 儲存庫\n歡迎提交 issue～' : '查看 PoggetCore 的仓库\n欢迎提交 issue～'); if (tooltips[1]) tooltips[1].setAttribute('data-tooltip', locale === 'en-US' ? 'Read the feature guide' : locale === 'zh-TW' ? '查看功能說明' : '查看功能说明');
        document.querySelectorAll('.feature-carousel-dot').forEach((el, i) => el.setAttribute('aria-label', t('showPage', i + 1))); const toggle = document.querySelector('.feature-carousel-toggle'); if (toggle) toggle.setAttribute('aria-label', t('pause'));
        setText('.sponsor-strip-label-full', 'thanks'); setText('.sponsor-pill', 'loadingSponsors'); setText('.sponsor-full-status', 'loadSponsors'); setText('#log-container > p', 'loadingLogs'); setText('.download-log-link', 'downloadLogs'); const updateTitle = document.querySelector('#update-title'); if (updateTitle) updateTitle.textContent = locale === 'en-US' ? 'New version available!' : locale === 'zh-TW' ? '發現新版本！' : '发现新版本！'; setText('#update-close', 'close'); setText('#update-download-btn', 'downloadNow');
        const options = ['windowsRecommended','windowsArm','pdbDebug']; document.querySelectorAll('.download-option').forEach((el, i) => { const icon = el.querySelector('i'); el.textContent = ''; if (icon) el.append(icon); el.append(` ${t(options[i])}`); });
        const altKeys = ['altShare','altComponent1','altComponent2','altMerged','altTag','altSettings','altList','altGrid','altPaged']; document.querySelectorAll('img').forEach(img => { const src = img.getAttribute('src') || ''; const index = ['pogget_share.png','pogget_com1.png','pogget_com2.png','pg_merged_tab.png','pg_tag_mgr.png','pg_u_main.png','pg_u_1.png','pg_u_2.png','pg_u_3.png'].findIndex(name => src.endsWith(name)); if (index >= 0) img.alt = t(altKeys[index]); });
      };
      return { locale, t, apply };
    })();

    window.PoggetI18n = POGGET_I18N;
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
      POGGET_I18N.apply();
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
          if (window.innerWidth <= 600) {
            const margin = 12;
            const cardWidth = Math.min(300, window.innerWidth - margin * 2);
            x = Math.max(margin, Math.min(x, window.innerWidth - cardWidth - margin));
            y = Math.max(margin, Math.min(y, window.innerHeight - 180));
          }
          

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
            toggle.setAttribute('aria-label', isPlaying ? POGGET_I18N.t('pause') : POGGET_I18N.t('play'));
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
          <div class="palette-title">${POGGET_I18N.t('palette')}</div>
          <div class="palette-colors">
            ${paletteColors.map(c => `<div class="color-circle" style="background-color: ${c};" data-color="${c}"></div>`).join('')}
            <div class="btn-ungroup">${POGGET_I18N.t('ungroup')}</div>
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
