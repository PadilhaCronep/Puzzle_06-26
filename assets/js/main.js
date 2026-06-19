document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons Helper
    let lucideLoading = false;
    const renderIcons = () => {
        if (typeof window.lucide !== 'undefined') {
            window.lucide.createIcons();
        } else if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };

    const runWhenIdle = (callback, timeout = 900) => {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout });
        } else {
            window.setTimeout(callback, Math.min(timeout, 700));
        }
    };

    const loadLucideIcons = () => {
        if (!document.querySelector('[data-lucide]')) return;
        if (typeof window.lucide !== 'undefined' || lucideLoading) {
            renderIcons();
            return;
        }

        lucideLoading = true;
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/lucide@latest';
        script.async = true;
        script.onload = () => {
            lucideLoading = false;
            renderIcons();
        };
        script.onerror = () => {
            lucideLoading = false;
        };
        document.head.appendChild(script);
    };
    renderIcons();

    const mobilePerformanceMq = window.matchMedia('(max-width: 767px), (hover: none), (pointer: coarse)');
    const isMobilePerformanceMode = () => mobilePerformanceMq.matches;
    const syncMobilePerformanceMode = () => {
        document.body.classList.toggle('is-mobile-performance', isMobilePerformanceMode());
    };
    syncMobilePerformanceMode();
    mobilePerformanceMq.addEventListener?.('change', syncMobilePerformanceMode);

    // Shared footer normalization for every static page.
    const setupSharedFooter = () => {
        let footer = document.querySelector('footer');
        if (!footer) {
            footer = document.createElement('footer');
            document.body.insertBefore(footer, document.querySelector('script[type="module"]') || null);
        }

        footer.className = 'site-footer';
        footer.innerHTML = `
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute left-0 top-0 w-72 h-72 bg-puzzle-teal/8 blur-3xl rounded-full"></div>
                <div class="absolute right-0 bottom-0 w-80 h-80 bg-puzzle-pink/7 blur-3xl rounded-full"></div>
                <div class="puzzle-grid absolute inset-0 opacity-[0.06]"></div>
            </div>

            <div class="relative max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    <div class="site-footer-brand lg:col-span-5">
                        <a href="index.html" class="inline-flex items-center gap-3 group mb-6">
                            <div class="w-11 h-11 rounded-[1.25rem] bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-puzzle-teal/40 transition-colors">
                                <img loading="lazy" decoding="async" width="24" height="24" src="IMAGEM/IMAGEM/logom.png" alt="Puzzle Systems" class="w-6 h-6 object-contain" />
                            </div>
                            <div>
                                <span class="font-title text-2xl tracking-tighter text-white block leading-none">puzzle</span>
                                <span class="font-mono text-[8px] text-puzzle-teal uppercase tracking-[0.24em]">Systems</span>
                            </div>
                        </a>

                        <h2 class="font-title text-3xl md:text-4xl uppercase tracking-tighter leading-none max-w-md mb-4">
                            Operação em escala.
                        </h2>
                        <p class="font-subtitle text-sm text-white/45 leading-relaxed max-w-md mb-6">
                            Software, marketing e DOOH conectados por dados.
                        </p>

                        <a href="contato.html" class="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-puzzle-teal px-5 py-3 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-colors">
                            Diagnóstico
                            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </a>
                    </div>

                    <details class="site-footer-group lg:col-span-3" open>
                        <summary>
                            <h3 class="font-mono text-[10px] text-puzzle-teal uppercase tracking-widest mb-5 border-b border-white/5 pb-3">/ Serviços</h3>
                        </summary>
                        <ul class="grid gap-3 font-title text-sm uppercase text-white/62">
                            <li><a href="servicos-software.html" class="hover:text-puzzle-teal transition-colors">Software sob medida</a></li>
                            <li><a href="servicos-marketing.html" class="hover:text-puzzle-yellow transition-colors">Marketing de performance</a></li>
                            <li><a href="servicos-dooh.html" class="hover:text-puzzle-pink transition-colors">DOOH e mídia urbana</a></li>
                            <li><a href="portfolio.html" class="hover:text-puzzle-purple transition-colors">Portfólio e cases</a></li>
                            <li><a href="blog.html" class="hover:text-puzzle-teal transition-colors">Blog estratégico</a></li>
                        </ul>
                    </details>

                    <details class="site-footer-group lg:col-span-2" open>
                        <summary>
                            <h3 class="font-mono text-[10px] text-puzzle-yellow uppercase tracking-widest mb-5 border-b border-white/5 pb-3">/ Navegação</h3>
                        </summary>
                        <ul class="grid gap-3 font-title text-sm uppercase text-white/62">
                            <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                            <li><a href="portfolio.html" class="hover:text-white transition-colors">Cases</a></li>
                            <li><a href="blog.html" class="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="contato.html" class="hover:text-white transition-colors">Contato</a></li>
                            <li><a href="lgpd.html" class="hover:text-puzzle-teal transition-colors">Privacidade e LGPD</a></li>
                        </ul>
                    </details>

                    <details class="site-footer-group lg:col-span-2" open>
                        <summary>
                            <h3 class="font-mono text-[10px] text-puzzle-pink uppercase tracking-widest mb-5 border-b border-white/5 pb-3">/ Contato</h3>
                        </summary>
                        <ul class="grid gap-3 font-title text-sm uppercase text-white/62">
                            <li><a href="https://wa.me/5515996135084" target="_blank" rel="noopener" class="hover:text-puzzle-teal transition-colors">WhatsApp</a></li>
                            <li><a href="https://www.linkedin.com/company/puzzlems" target="_blank" rel="noopener" class="hover:text-[#0a66c2] transition-colors">LinkedIn</a></li>
                            <li><a href="contato.html" class="hover:text-puzzle-yellow transition-colors">Briefing</a></li>
                            <li><a href="contato.html" class="hover:text-puzzle-pink transition-colors">Comercial</a></li>
                        </ul>
                    </details>
                </div>

                <div class="mt-10 md:mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-white/35">
                    <span>© 2026 Puzzle Systems. Todos os direitos reservados.</span>
                    <div class="flex flex-wrap gap-3 md:gap-5">
                        <span class="text-puzzle-teal">Software</span>
                        <span class="text-puzzle-yellow">Marketing</span>
                        <span class="text-puzzle-pink">DOOH</span>
                        <a href="lgpd.html" class="hover:text-white transition-colors">LGPD</a>
                    </div>
                </div>
            </div>
        `;

        const footerMq = window.matchMedia('(max-width: 640px)');
        const footerGroups = Array.from(footer.querySelectorAll('.site-footer-group'));
        const syncFooterGroups = () => {
            footerGroups.forEach((group) => {
                group.open = !footerMq.matches;
            });
        };

        syncFooterGroups();
        footerMq.addEventListener?.('change', syncFooterGroups);
        renderIcons();
    };

    runWhenIdle(setupSharedFooter, isMobilePerformanceMode() ? 1800 : 900);

    const setupMobileUxCompacts = () => {
        const compactMq = window.matchMedia('(max-width: 767px)');
        const compactBlocks = Array.from(document.querySelectorAll('details.mobile-ux-compact'));
        if (!compactBlocks.length) return;

        const syncCompactBlocks = () => {
            compactBlocks.forEach((block) => {
                block.open = !compactMq.matches;
            });
        };

        syncCompactBlocks();
        compactMq.addEventListener?.('change', syncCompactBlocks);
    };

    setupMobileUxCompacts();

    const setupPrivacyCompliance = () => {
        const consentKey = 'puzzle_privacy_cookie_ack_v1';
        const existingConsent = localStorage.getItem(consentKey);

        if (!document.querySelector('style[data-privacy-compliance-css]')) {
            const privacyCss = document.createElement('style');
            privacyCss.dataset.privacyComplianceCss = 'true';
            privacyCss.textContent = `
                .privacy-consent-banner{position:fixed;right:1rem;bottom:1rem;z-index:99999;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:1rem;align-items:center;width:min(42rem,calc(100vw - 2rem));padding:1rem;border:1px solid rgba(255,255,255,.1);border-radius:1.25rem;background:rgba(9,9,11,.95);box-shadow:0 20px 60px rgba(0,0,0,.58);backdrop-filter:blur(20px);transition:opacity .24s ease,transform .24s ease}
                .privacy-consent-banner.is-hidden{opacity:0;transform:translateY(12px)}
                .privacy-consent-banner strong{display:block;margin-bottom:.25rem;font-family:Poppins,sans-serif;font-size:.95rem;text-transform:uppercase}
                .privacy-consent-banner p{margin:0;color:rgba(255,255,255,.6);font-size:.84rem;line-height:1.45}
                .privacy-consent-actions{display:flex;gap:.65rem;align-items:center}
                .privacy-consent-actions a,.privacy-consent-actions button{display:inline-flex;min-height:2.45rem;align-items:center;justify-content:center;border-radius:999px;padding:.7rem .9rem;font-family:"Space Mono",monospace;font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
                .privacy-consent-actions a{border:1px solid rgba(255,255,255,.13);color:#84d4d8}
                .privacy-consent-actions button{cursor:pointer;background:#fff;color:#09090b}
                .privacy-form-consent{display:grid;grid-template-columns:1.05rem minmax(0,1fr);gap:.65rem;align-items:start;margin:.8rem 0 1rem;border:1px solid rgba(255,255,255,.08);border-radius:1rem;background:rgba(255,255,255,.03);padding:.85rem;color:rgba(255,255,255,.62);font-family:Outfit,sans-serif;font-size:.78rem;line-height:1.4}
                .privacy-form-consent input{width:1.05rem;height:1.05rem;margin-top:.1rem;accent-color:#84d4d8}
                .privacy-form-consent a{color:#84d4d8;text-decoration:underline;text-underline-offset:3px}
                @media(max-width:767px){.privacy-consent-banner{right:.75rem;bottom:.75rem;left:.75rem;width:auto;grid-template-columns:1fr;border-radius:1rem;padding:.9rem}.privacy-consent-actions{justify-content:space-between}.privacy-consent-actions a,.privacy-consent-actions button{flex:1}}
            `;
            document.head.appendChild(privacyCss);
        }

        if (!existingConsent && !document.querySelector('.privacy-consent-banner')) {
            const banner = document.createElement('div');
            banner.className = 'privacy-consent-banner';
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-live', 'polite');
            banner.setAttribute('aria-label', 'Aviso de privacidade e cookies');
            banner.innerHTML = `
                <div>
                    <strong>Privacidade e LGPD</strong>
                    <p>Usamos cookies essenciais e dados enviados nos formulários para responder seu contato, registrar solicitações e melhorar a experiência do site.</p>
                </div>
                <div class="privacy-consent-actions">
                    <a href="lgpd.html">Ver política</a>
                    <button type="button">Entendi</button>
                </div>
            `;
            document.body.appendChild(banner);
            banner.querySelector('button')?.addEventListener('click', () => {
                localStorage.setItem(consentKey, new Date().toISOString());
                banner.classList.add('is-hidden');
                window.setTimeout(() => banner.remove(), 260);
            });
        }

        document.querySelectorAll('.whatsapp-form').forEach((form) => {
            if (form.querySelector('.privacy-form-consent')) return;
            const submitButton = form.querySelector('button[type="submit"]');
            if (!submitButton) return;

            const consent = document.createElement('label');
            consent.className = 'privacy-form-consent';
            consent.innerHTML = `
                <input type="checkbox" name="privacy_consent" required />
                <span>Li e aceito a <a href="lgpd.html" target="_blank" rel="noopener">Política de Privacidade e LGPD</a> e autorizo o uso dos dados para retorno comercial.</span>
            `;
            submitButton.parentNode?.insertBefore(consent, submitButton);
        });
    };

    setupPrivacyCompliance();

    // Browser-level image hints for older markup and injected portfolio cards.
    document.querySelectorAll('img').forEach((img, index) => {
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
        if (!img.hasAttribute('loading')) img.setAttribute('loading', index < 2 ? 'eager' : 'lazy');
        if (!img.hasAttribute('fetchpriority') && img.getAttribute('loading') === 'lazy') {
            img.setAttribute('fetchpriority', 'low');
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let navTicking = false;
        const syncNavbarState = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-zinc-950/90', 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]', 'backdrop-blur-xl', 'border-white/10');
                navbar.classList.remove('bg-transparent', 'border-transparent');
            } else {
                navbar.classList.remove('bg-zinc-950/90', 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]', 'backdrop-blur-xl', 'border-white/10');
                navbar.classList.add('bg-transparent', 'border-transparent');
            }
            navTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (navTicking) return;
            navTicking = true;
            window.requestAnimationFrame(syncNavbarState);
        }, { passive: true });

        syncNavbarState();
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
          loadLucideIcons();
          const menuIcons = mobileMenuBtn.querySelectorAll('svg');
          const isOpen = mobileMenu.classList.contains('translate-x-0');
          if (isOpen) {
              mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
              mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
              menuIcons[0]?.classList.remove('hidden');
              menuIcons[1]?.classList.add('hidden');
              document.body.style.overflow = '';
          } else {
              mobileMenu.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
              mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
              menuIcons[0]?.classList.add('hidden');
              menuIcons[1]?.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
          }
      });
    }

    // Scroll Reveal Interaction
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = isMobilePerformanceMode()
        ? {
            observe: (el) => {
                el.classList.add('active');
                el.style.transitionDelay = '0ms';
            },
            unobserve: () => {}
        }
        : new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // Smooth scroll for in-page CTAs.
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: (prefersReducedMotion || isMobilePerformanceMode()) ? 'auto' : 'smooth', block: 'start' });
    });

    // Shared interaction layer: scroll progress, staggered reveals, hover glow and tactile taps.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canUseHoverEffects = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const setupScrollProgress = () => {
        let scrollBar = document.getElementById('scroll-progress-bar');
        if (!scrollBar) {
            scrollBar = document.createElement('div');
            scrollBar.id = 'scroll-progress-bar';
            document.body.appendChild(scrollBar);
        }

        let ticking = false;
        let scrollTimeout = null;
        const update = () => {
            const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            const progress = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
            document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
            document.body.classList.add('is-scrolling');
            window.clearTimeout(scrollTimeout);
            scrollTimeout = window.setTimeout(() => document.body.classList.remove('is-scrolling'), 650);
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(update);
        }, { passive: true });

        update();
    };

    const setupMotionMode = () => {
        const desktopMq = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
        const syncMotionMode = () => {
            document.body.classList.toggle('is-desktop-motion', desktopMq.matches && !prefersReducedMotion);
            document.body.classList.remove('is-mobile-motion');
        };

        syncMotionMode();
        desktopMq.addEventListener?.('change', syncMotionMode);
    };

    const setupStaggeredReveal = () => {
        if (isMobilePerformanceMode() || prefersReducedMotion) {
            document.querySelectorAll('.reveal-up').forEach((el) => {
                el.classList.add('active');
                el.style.transitionDelay = '0ms';
            });
            return;
        }

        const groups = [
            '#cases-grid > *',
            '#portfolio-grid > *',
            '.site-footer .grid > *',
            '.validation-model > div',
            '.portfolio-kpi-card',
            '.brand-card',
            '.blog-card',
            '.blog-topic-strip > *',
            '.article-pill',
            '.article-aside-card',
            '.article-visual'
        ];

        groups.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                if (!el.style.transitionDelay) {
                    el.style.transitionDelay = `${Math.min(index * 55, 360)}ms`;
                }

                if (!el.classList.contains('reveal-up') && !prefersReducedMotion) {
                    el.classList.add('reveal-up');
                    observer.observe(el);
                }
            });
        });

        document.querySelectorAll('main > section').forEach(section => {
            const sectionObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('section-in-view', entry.isIntersecting);
                });
            }, { threshold: 0.22 });
            sectionObserver.observe(section);
        });
    };

    const setupPointerGlow = () => {
        if (isMobilePerformanceMode() || !canUseHoverEffects || prefersReducedMotion) return;

        const targets = document.querySelectorAll([
            '.glass-panel',
            '.glass-panel-dark',
            '.portfolio-item',
            '.portfolio-kpi-card',
            '.case-spotlight',
            '.validation-model > div',
            '.blog-hero-slim',
            '.blog-card',
            '.blog-topic-strip a',
            '.article-hero',
            '.article-visual',
            '.article-body',
            '.article-aside-card',
            '.article-cta'
        ].join(','));

        targets.forEach(target => {
            if (target.dataset.motionReady === 'true') return;
            target.dataset.motionReady = 'true';
            target.classList.add('motion-card');

            const hasGlow = Array.from(target.children).some(child => child.classList?.contains('micro-glow'));
            if (!hasGlow) {
                const glow = document.createElement('span');
                glow.className = 'micro-glow';
                glow.setAttribute('aria-hidden', 'true');
                target.prepend(glow);
            }

            target.addEventListener('pointermove', event => {
                const rect = target.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                target.style.setProperty('--pointer-x', `${x}%`);
                target.style.setProperty('--pointer-y', `${y}%`);
            });
        });
    };

    const setupTactileControls = () => {
        if (isMobilePerformanceMode()) return;

        const controls = document.querySelectorAll([
            '.tech-button',
            '.filter-btn',
            '.case-tab-btn',
            'button[type="submit"]',
            'button.next-step',
            'button.prev-step',
            'a.bg-white',
            'a[href].inline-flex',
            '.blog-card',
            '.blog-topic-strip a',
            '.blog-hero-panel a',
            '.article-button',
            '.article-aside-card a'
        ].join(','));

        controls.forEach(control => {
            control.classList.add('tap-ready');
            if (canUseHoverEffects && !prefersReducedMotion) {
                control.classList.add('magnetic-ready');
                control.addEventListener('pointermove', event => {
                    const rect = control.getBoundingClientRect();
                    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
                    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
                    control.style.setProperty('--magnetic-x', `${x}px`);
                    control.style.setProperty('--magnetic-y', `${y}px`);
                });
                control.addEventListener('pointerleave', () => {
                    control.style.setProperty('--magnetic-x', '0px');
                    control.style.setProperty('--magnetic-y', '0px');
                });
            }
        });

        document.addEventListener('pointerdown', event => {
            if (prefersReducedMotion || !canUseHoverEffects) return;
            const target = event.target.closest('.tap-ready');
            if (!target || target.disabled) return;

            const rect = target.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'tap-ripple';
            ripple.style.setProperty('--tap-x', `${event.clientX - rect.left}px`);
            ripple.style.setProperty('--tap-y', `${event.clientY - rect.top}px`);
            ripple.setAttribute('aria-hidden', 'true');
            target.appendChild(ripple);
            window.setTimeout(() => ripple.remove(), 620);
        }, { passive: true });
    };

    const setupCounterMotion = () => {
        if (prefersReducedMotion || window.matchMedia('(max-width: 767px)').matches) return;

        const numberTargets = Array.from(document.querySelectorAll('.portfolio-kpi-card .font-title, .case-spotlight strong'))
            .filter(el => /^[^\d]*[\d][\d.,]*\s*[a-zA-Z%+/. ]*$/u.test(el.textContent.trim()));

        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting || entry.target.dataset.counted === 'true') return;

                const el = entry.target;
                const original = el.textContent.trim();
                const match = original.match(/^([^\d]*)([\d][\d.,]*)(.*)$/u);
                if (!match) return;

                el.dataset.counted = 'true';
                el.classList.add('count-animating');

                const [, prefix, numeric, suffix] = match;
                const decimalPlaces = numeric.includes(',') || numeric.includes('.') ? 1 : 0;
                const finalValue = parseFloat(numeric.replace(',', '.'));
                const startTime = performance.now();
                const duration = 900;

                const tick = now => {
                    const t = Math.min(1, (now - startTime) / duration);
                    const eased = 1 - Math.pow(1 - t, 3);
                    const current = finalValue * eased;
                    const formatted = decimalPlaces
                        ? current.toFixed(decimalPlaces).replace('.', ',')
                        : Math.round(current).toString();
                    el.textContent = `${prefix}${formatted}${suffix}`;
                    if (t < 1) {
                        window.requestAnimationFrame(tick);
                    } else {
                        el.textContent = original;
                    }
                };

                window.requestAnimationFrame(tick);
            });
        }, { threshold: 0.45 });

        numberTargets.forEach(el => counterObserver.observe(el));
    };

    const setupDesktopScrollTheater = () => {
        const desktopMq = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
        if (prefersReducedMotion || !desktopMq.matches) return;

        const scrollItems = [];
        const register = (elements, depth = 1, direction = 1) => {
            elements.forEach((el, index) => {
                if (!el || el.dataset.scrollTheaterReady === 'true') return;
                el.dataset.scrollTheaterReady = 'true';
                el.classList.add('scroll-theater-item');
                el.style.setProperty('--scroll-index', String(index % 8));
                scrollItems.push({ el, depth, direction });
            });
        };

        const sections = Array.from(document.querySelectorAll('main > section, main > .max-w-7xl > div, .marketing-strategy-section, .marketing-system-section'))
            .filter((el) => el.getBoundingClientRect().height > 80)
            .slice(0, 36);

        sections.forEach((section) => {
            section.classList.add('scroll-stage');
            if (!section.querySelector(':scope > .section-scroll-line')) {
                const line = document.createElement('span');
                line.className = 'section-scroll-line';
                line.setAttribute('aria-hidden', 'true');
                section.prepend(line);
            }
        });

        register(sections, 0.65, 1);
        register(Array.from(document.querySelectorAll([
            '.portfolio-kpi-card',
            '.portfolio-item',
            '.case-spotlight',
            '.validation-model > div',
            '.marketing-decision-card',
            '.marketing-answer-card',
            '.marketing-process-card',
            '.dooh-image-card',
            '.dooh-impact-shell',
            '.software-mobile-compact',
            '.blog-hero-slim',
            '.blog-card',
            '.blog-topic-strip a',
            '.blog-final-band',
            '.article-hero',
            '.article-body',
            '.article-aside-card',
            '.article-cta'
        ].join(','))).slice(0, 72), 1.1, 1);
        register(Array.from(document.querySelectorAll([
            '.dooh-visual-frame',
            '.dooh-impact-visual',
            '.marketing-image-strip figure',
            '.case-media',
            '.portfolio-identity-card',
            '.blog-card-media',
            '.article-visual'
        ].join(','))).slice(0, 36), 1.45, -1);

        const stageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('scroll-stage-active', entry.isIntersecting);
            });
        }, { rootMargin: '-12% 0px -16%', threshold: 0.12 });

        sections.forEach((section) => stageObserver.observe(section));

        let ticking = false;
        const update = () => {
            const viewportHeight = Math.max(1, window.innerHeight);
            scrollItems.forEach(({ el, depth, direction }) => {
                const rect = el.getBoundingClientRect();
                if (rect.bottom < -viewportHeight * 0.25 || rect.top > viewportHeight * 1.25) return;

                const center = rect.top + rect.height / 2;
                const progress = (center - viewportHeight / 2) / viewportHeight;
                const clamped = Math.max(-1, Math.min(1, progress));
                const y = clamped * depth * direction * -22;
                const tilt = clamped * depth * direction * 0.7;
                const presence = 1 - Math.min(1, Math.abs(clamped));
                const shineX = `${((1 - presence) * -44).toFixed(2)}%`;
                const shineOpacity = (presence * 0.42).toFixed(3);
                const shadowAlpha = (0.2 + presence * 0.12).toFixed(3);
                const glowAlpha = (0.02 + presence * 0.045).toFixed(3);

                el.style.setProperty('--scroll-y', `${y.toFixed(2)}px`);
                el.style.setProperty('--scroll-tilt', `${tilt.toFixed(2)}deg`);
                el.style.setProperty('--scroll-presence', presence.toFixed(3));
                el.style.setProperty('--scroll-shine-x', shineX);
                el.style.setProperty('--scroll-shine-opacity', shineOpacity);
                el.style.setProperty('--scroll-shadow-alpha', shadowAlpha);
                el.style.setProperty('--scroll-glow-alpha', glowAlpha);
            });
            ticking = false;
        };

        const requestUpdate = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(update);
        };

        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate, { passive: true });
        update();
    };

    setupMotionMode();
    setupScrollProgress();
    setupStaggeredReveal();
    setupPointerGlow();
    setupTactileControls();
    setupCounterMotion();
    setupDesktopScrollTheater();
    runWhenIdle(loadLucideIcons, isMobilePerformanceMode() ? 1200 : 350);

    // 3D Card Hover Effect
    const cards = canUseHoverEffects ? document.querySelectorAll('.card-3d') : [];
    cards.forEach(card => {
        let frameId = null;
        let latestEvent = null;

        const applyHoverTransform = () => {
            if (!latestEvent) return;
            const rect = card.getBoundingClientRect();
            const x = latestEvent.clientX - rect.left;
            const y = latestEvent.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            frameId = null;
        };

        card.addEventListener('mousemove', e => {
            latestEvent = e;
            if (!frameId) frameId = window.requestAnimationFrame(applyHoverTransform);
        });
        
        card.addEventListener('mouseleave', () => {
            if (frameId) window.cancelAnimationFrame(frameId);
            frameId = null;
            latestEvent = null;
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
        });
    });

    // Modal logic
    const modal = document.getElementById('contact-modal');
    const openModalBtns = document.querySelectorAll('[data-open-modal]');
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');

    if (modal) {
      const openModal = () => {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden';
      };

      const closeModal = () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
      };

      openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
      closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));
    }

    // Handle WhatsApp forms
    const waForms = document.querySelectorAll('.whatsapp-form');
    waForms.forEach(form => {
        // Form step logic
        const steps = form.querySelectorAll('.form-step');
        const indicators = form.querySelectorAll('.step-dot');
        const nextBtns = form.querySelectorAll('.next-step');
        const prevBtns = form.querySelectorAll('.prev-step');
        let currentStep = 1;

        if (steps.length > 0) {
            const updateSteps = () => {
                steps.forEach(step => {
                    if (parseInt(step.dataset.step) === currentStep) {
                        step.classList.remove('hidden');
                        step.classList.add('block');
                        step.classList.toggle('animate-slide-in', !isMobilePerformanceMode());
                    } else {
                        step.classList.add('hidden');
                        step.classList.remove('block', 'animate-slide-in');
                    }
                });

                indicators.forEach(indicator => {
                    const target = parseInt(indicator.dataset.target);
                    if (target < currentStep) {
                        indicator.className = 'h-1 flex-1 rounded-full transition-colors duration-500 step-dot bg-puzzle-teal';
                    } else if (target === currentStep) {
                        indicator.className = 'h-1 flex-1 rounded-full transition-colors duration-500 step-dot bg-puzzle-teal shadow-[0_0_10px_#84d4d8]';
                    } else {
                        indicator.className = 'h-1 flex-1 rounded-full transition-colors duration-500 step-dot bg-zinc-900/10';
                    }
                });
            };

            const validateStep = (stepIndex) => {
                const step = form.querySelector(`.form-step[data-step="${stepIndex}"]`);
                if (!step) return true;
                
                const inputs = step.querySelectorAll('input[required], select[required], textarea[required]');
                let isValid = true;
                inputs.forEach(input => {
                    if (!input.checkValidity()) {
                        input.reportValidity();
                        isValid = false;
                    }
                });
                return isValid;
            };

            nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (validateStep(currentStep)) {
                        currentStep++;
                        if (currentStep > steps.length) currentStep = steps.length;
                        updateSteps();
                    }
                });
            });

            prevBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    currentStep--;
                    if (currentStep < 1) currentStep = 1;
                    updateSteps();
                });
            });
            
            // Initialization
            updateSteps();
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const formData = new FormData(form);
            const company = formData.get("company") || "";
            const name = formData.get("name") || "";
            const email = formData.get("email") || "";
            const whatsapp = formData.get("whatsapp") || "";
            const service = formData.get("service") || "";
            const budget = formData.get("budget") || "";
            const message = formData.get("message") || "";
            const page = window.location.pathname.split('/').pop() || 'index.html';
            const source = form.id || form.closest('[id]')?.id || 'site-form';

            let text = `Ola Puzzle! Segue meu diagnostico estrategico:\n`;
            if (company) text += `\n*Empresa:* ${company}`;
            if (name) text += `\n*Responsavel:* ${name}`;
            if (email) text += `\n*E-mail:* ${email}`;
            if (whatsapp) text += `\n*WhatsApp:* ${whatsapp}`;
            if (service) text += `\n*Interesse:* ${service}`;
            if (budget) text += `\n*Orcamento:* ${budget}`;
            if (message) text += `\n\n*Observacao:* ${message}`;

            const encodedText = encodeURIComponent(text);
            const googleSheetWebhookUrl = "https://script.google.com/macros/s/AKfycbwhCg__Lb_eFWQp6eBiajhOeEmFGqgE7XK0Pxf-GimkLwUimDdRzcToga7A2Am6lqR-/exec";
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn?.innerHTML || "";

            const sheetData = {
                company,
                name,
                email,
                whatsapp,
                service,
                budget,
                message,
                page,
                source,
                whatsapp_text: text,
                privacy_consent: formData.get("privacy_consent") ? "accepted" : "",
                privacy_policy_version: "2026-06-04",
                submitted_at: new Date().toISOString()
            };

            const payload = JSON.stringify(sheetData);

            const setSubmitting = (isSubmitting) => {
                if (!submitBtn) return;
                submitBtn.disabled = isSubmitting;
                submitBtn.innerHTML = isSubmitting
                    ? "Processando... <i data-lucide='loader' class='w-4 h-4 animate-spin'></i>"
                    : originalBtnText;
                renderIcons();
            };

            const showSuccess = () => {
                form.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-12 text-center animate-slide-in h-full min-h-[300px]">
                        <div class="w-16 h-16 bg-puzzle-teal/20 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-puzzle-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 class="font-title text-3xl uppercase tracking-tighter text-white mb-4">Dados enviados com sucesso.</h3>
                        <p class="font-mono text-sm text-white/60 max-w-sm mx-auto leading-relaxed">Sua operacao foi registrada. Em breve a equipe da Puzzle entra em contato pelo WhatsApp.</p>
                    </div>
                `;
            };

            setSubmitting(true);

            fetch(googleSheetWebhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                keepalive: true,
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8'
                },
                body: payload
            }).then(() => {
                setSubmitting(false);
                showSuccess();
            }).catch((error) => {
                console.error("Erro ao salvar no Google Sheets:", error);
                setSubmitting(false);
                const openWhatsApp = confirm("Nao foi possivel confirmar o envio para a planilha. Deseja enviar os dados pelo WhatsApp agora?");
                if (openWhatsApp) {
                    window.open(`https://wa.me/5515996135084?text=${encodedText}`, "_blank");
                }
            });
        });
    });

    // Mobile Accordion
    document.querySelectorAll('.mobile-accordion-title').forEach(title => {
        title.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                const content = title.nextElementSibling;
                if (!content) return;
                
                const isHidden = content.classList.contains('hidden') || content.style.display === 'none';
                
                if (isHidden) {
                    content.classList.remove('hidden');
                    content.style.display = 'block';
                    title.classList.add('is-open');
                } else {
                    content.classList.add('hidden');
                    content.style.display = 'none';
                    title.classList.remove('is-open');
                }
            }
        });
    });

    // ==========================================
    // FLUID NAV PROGRESS LOADER & TRANSITIONS (Melhoria de navegacao dinamica)
    // ==========================================
    const enableDesktopNavLoader = !prefersReducedMotion && window.matchMedia('(min-width: 768px)').matches;
    if (enableDesktopNavLoader) {
        const progressLoader = document.createElement('div');
        progressLoader.id = 'nav-progress-bar';
        progressLoader.className = 'fixed left-0 h-[2px] bg-gradient-to-r from-puzzle-teal via-puzzle-yellow to-puzzle-pink z-[99999] opacity-0 transition-all duration-300 pointer-events-none';
        progressLoader.style.top = '2px';
        progressLoader.style.width = '0%';
        document.body.appendChild(progressLoader);

        setTimeout(() => {
            progressLoader.style.opacity = '1';
            progressLoader.style.width = '100%';
            setTimeout(() => {
                progressLoader.style.opacity = '0';
                setTimeout(() => {
                    progressLoader.style.width = '0%';
                }, 300);
            }, 150);
        }, 50);

        document.addEventListener('click', (e) => {
            if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const link = e.target.closest('a');
            if (link && link.href && link.target !== '_blank') {
                const urlStr = link.getAttribute('href') || '';
                const isHash = urlStr.startsWith('#');
                const isDownload = link.hasAttribute('download');
                const targetUrl = new URL(link.href);
                const targetPath = targetUrl.pathname.split('/').pop() || 'index.html';
                const isInternal = window.location.host === targetUrl.host;
                const isStaticRoute = targetPath.endsWith('.html') || targetPath === 'index.html';

                if (isInternal && isStaticRoute && !isHash && !isDownload && !urlStr.startsWith('javascript:')) {
                    e.preventDefault();

                    progressLoader.style.opacity = '1';
                    progressLoader.style.width = '45%';

                    const mainContent = document.querySelector('main');
                    if (mainContent) {
                        mainContent.style.transition = 'opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1)';
                        mainContent.style.opacity = '0.35';
                    }

                    setTimeout(() => {
                        progressLoader.style.width = '85%';
                    }, 80);

                    setTimeout(() => {
                        window.location.href = link.href;
                    }, 220);
                }
            }
        });
    }

    // ==========================================
    // ACTIVE ROUTE HIGHLIGHTING (Navegacao dinamica)
    // ==========================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('#navbar a, #mobile-menu a');
    menuLinks.forEach(link => {
        const hf = link.getAttribute('href');
        if (hf) {
            const linkPath = hf === '/' ? 'index.html' : (new URL(hf, window.location.href).pathname.split('/').pop() || 'index.html');
            const isMatch = (linkPath === currentPath) || 
                            (currentPath === 'index.html' && (hf === '/' || hf === 'index.html')) || 
                            (currentPath === '' && hf === 'index.html');
            
            if (isMatch) {
                if (link.closest('#navbar')) {
                    link.classList.remove('text-white/50');
                    link.classList.add('font-bold');
                    if (linkPath.includes('software')) {
                        link.classList.add('text-puzzle-teal');
                        link.style.textShadow = '0 0 10px rgba(132, 212, 216, 0.35)';
                    } else if (linkPath.includes('marketing')) {
                        link.classList.add('text-puzzle-yellow');
                        link.style.textShadow = '0 0 10px rgba(253, 203, 93, 0.35)';
                    } else if (linkPath.includes('dooh')) {
                        link.classList.add('text-puzzle-pink');
                        link.style.textShadow = '0 0 10px rgba(240, 100, 101, 0.35)';
                    } else if (linkPath.includes('portfolio')) {
                        link.classList.add('text-puzzle-purple');
                        link.style.textShadow = '0 0 10px rgba(180, 137, 243, 0.35)';
                    } else if (linkPath.includes('blog')) {
                        link.classList.add('text-puzzle-teal');
                        link.style.textShadow = '0 0 10px rgba(132, 212, 216, 0.35)';
                    } else {
                        link.classList.add('text-white');
                    }
                } else if (link.closest('#mobile-menu')) {
                    link.classList.remove('text-white');
                    if (linkPath.includes('software')) {
                        link.classList.add('text-puzzle-teal', 'pl-3', 'border-l-4', 'border-puzzle-teal');
                    } else if (linkPath.includes('marketing')) {
                        link.classList.add('text-puzzle-yellow', 'pl-3', 'border-l-4', 'border-puzzle-yellow');
                    } else if (linkPath.includes('dooh')) {
                        link.classList.add('text-puzzle-pink', 'pl-3', 'border-l-4', 'border-puzzle-pink');
                    } else if (linkPath.includes('portfolio')) {
                        link.classList.add('text-puzzle-purple', 'pl-3', 'border-l-4', 'border-puzzle-purple');
                    } else if (linkPath.includes('blog')) {
                        link.classList.add('text-puzzle-teal', 'pl-3', 'border-l-4', 'border-puzzle-teal');
                    }
                }
            }
        }
    });

    // ==========================================
    // CASES SORTING FILTER MECHANISM
    // ==========================================
    const caseTabs = document.querySelectorAll('[data-case-filter]');
    const caseCards = document.querySelectorAll('#cases-grid > div');
    
    if (caseTabs.length > 0 && caseCards.length > 0) {
        caseTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                caseTabs.forEach(btn => {
                    btn.classList.remove('bg-zinc-950', 'text-white');
                    btn.classList.add('text-zinc-600', 'hover:text-zinc-950');
                });
                tab.classList.remove('text-zinc-600', 'hover:text-zinc-950');
                tab.classList.add('bg-zinc-950', 'text-white');
                
                const filterValue = tab.dataset.caseFilter;
                const useFilterMotion = !isMobilePerformanceMode() && !prefersReducedMotion;
                
                caseCards.forEach(card => {
                    card.style.transition = useFilterMotion ? 'opacity 0.25s ease, transform 0.25s ease' : 'none';
                    if (filterValue === 'all' || card.dataset.caseCategory === filterValue) {
                        card.style.display = 'flex';
                        if (!useFilterMotion) {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                            return;
                        }
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    } else {
                        if (!useFilterMotion) {
                            card.style.opacity = '1';
                            card.style.transform = 'none';
                            card.style.display = 'none';
                            return;
                        }
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(12px) scale(0.97)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }
});

