/**
 * SAIDEX 4.0 - Lógica Principal de la Aplicación y Controlador de Movimiento
 * Script ultraestable, de alto rendimiento y totalmente responsivo.
 * Cero bloqueo del hilo principal, cero saltos de diseño (layout thrashing) y sin congelamientos.
 */

(function () {
    'use strict';

    // =========================================================================
    // BLINDAJE DE SEGURIDAD MÁXIMO, ANTIFRAUDE, ANTI-XSS Y MOTOR ANTISPAM
    // =========================================================================

    // 1. Protección Anti-Clickjacking (Frame Buster Seguro)
    try {
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
    } catch (_) {}

    function escapeHTML(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function sanitizeForMessage(str, maxLen = 150) {
        if (!str) return '';
        return String(str).trim().replace(/[\r\n\x00-\x1F\x7F]/g, ' ').slice(0, maxLen);
    }

    const SecurityShield = {
        initTime: Date.now(),
        lastSubmission: 0,
        floodCooldownMs: 8000,

        isSpamBot(honeypotValue) {
            // Detección por trampa Honeypot (campo invisible que sólo los bots autocompletan)
            if (honeypotValue && String(honeypotValue).trim().length > 0) {
                console.warn('[SAIDEX Shield] Intento de bot bloqueado por trampa Honeypot.');
                return true;
            }

            // Detección por velocidad inhumana (< 1.2 segundos desde la carga)
            const timeElapsed = Date.now() - this.initTime;
            if (timeElapsed < 1200) {
                console.warn('[SAIDEX Shield] Envío ultrarrápido de bot bloqueado.');
                return true;
            }

            // Protección de saturación (Rate Limiting por cliente)
            const now = Date.now();
            if (now - this.lastSubmission < this.floodCooldownMs) {
                alert('Por favor, espere unos segundos antes de enviar una nueva solicitud.');
                return true;
            }

            return false;
        },

        containsSuspiciousPatterns(text) {
            if (!text) return false;
            const str = String(text).toLowerCase();
            const spamIndicators = [
                /<script/i,
                /javascript:/i,
                /data:text\/html/i,
                /onload\s*=/i,
                /onerror\s*=/i,
                /\[url=/i,
                /casino/i,
                /viagra/i,
                /crypto.*(investment|profit)/i,
                /seo-services/i
            ];
            for (let i = 0; i < spamIndicators.length; i++) {
                if (spamIndicators[i].test(str)) {
                    console.warn('[SAIDEX Shield] Contenido no permitido detectado.');
                    return true;
                }
            }
            return false;
        },

        recordSubmission() {
            this.lastSubmission = Date.now();
        }
    };

    // =========================================================================
    // 1. CONTROLADOR DE PRELOADER INTELIGENTE (Se ejecuta de inmediato sin esperas)
    // =========================================================================
    function initSmartPreloader() {
        const preloader = document.getElementById('saidex-preloader');
        if (!preloader) {
            document.body.classList.add('site-loaded');
            return;
        }

        const fill = document.getElementById('preloader-bar-fill');
        const percent = document.getElementById('preloader-percent');
        const status = document.getElementById('preloader-status');

        const statusMessages = [
            { threshold: 0, text: 'Iniciando protocolos domóticos SAIDEX...' },
            { threshold: 25, text: 'Sincronizando controladores KNX...' },
            { threshold: 52, text: 'Calibrando sensores inteligentes...' },
            { threshold: 78, text: 'Optimizando escenas y seguridad...' },
            { threshold: 92, text: 'Sistema SAIDEX 4.0 Activo...' }
        ];

        let currentProgress = 0;
        const startTime = performance.now();
        const minDuration = 900; // Carga ágil y fluida de 900ms
        let isWindowLoaded = document.readyState === 'complete';

        window.addEventListener('load', () => {
            isWindowLoaded = true;
        }, { once: true });

        // Temporizador estricto de seguridad: cierre garantizado tras 1.4s en cualquier circunstancia
        const safetyTimer = setTimeout(() => {
            dismissPreloader();
        }, 1400);

        function updateStatus(val) {
            if (!status) return;
            for (let i = statusMessages.length - 1; i >= 0; i--) {
                if (val >= statusMessages[i].threshold) {
                    if (status.innerText !== statusMessages[i].text) {
                        status.innerText = statusMessages[i].text;
                    }
                    break;
                }
            }
        }

        function dismissPreloader() {
            clearTimeout(safetyTimer);
            if (!preloader || preloader.classList.contains('is-loaded')) return;

            preloader.style.pointerEvents = 'none';
            if (fill) fill.style.width = '100%';
            if (percent) percent.innerText = '100%';
            if (status) status.innerText = 'Sistema SAIDEX 4.0 Activo...';

            preloader.classList.add('is-loaded');
            document.body.classList.add('site-loaded');

            setTimeout(() => {
                if (preloader) preloader.style.display = 'none';
            }, 600);
        }

        function step(now) {
            const elapsed = now - startTime;
            let targetProgress = Math.min((elapsed / minDuration) * 92, 95);
            if (isWindowLoaded && elapsed > 400) {
                targetProgress = 100;
            }

            if (currentProgress < targetProgress) {
                currentProgress += (targetProgress - currentProgress) * 0.22 + 0.8;
                if (currentProgress > 100) currentProgress = 100;
            }

            const rounded = Math.floor(currentProgress);
            if (fill) fill.style.width = `${rounded}%`;
            if (percent) percent.innerText = `${rounded}%`;
            updateStatus(rounded);

            if (rounded >= 100 || (isWindowLoaded && elapsed >= minDuration)) {
                dismissPreloader();
            } else {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    // Iniciar preloader lo antes posible
    initSmartPreloader();

    // =========================================================================
    // 2. MENÚ DE NAVEGACIÓN MÓVIL
    // =========================================================================
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobileMenu') || document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('navLinks');
        const navActions = document.querySelector('.nav-actions');

        // Asegurar que se retire el bloqueo de scroll al cargar
        document.body.classList.remove('no-scroll');

        function closeMobileMenu() {
            if (navLinks) navLinks.classList.remove('mobile-active');
            if (navActions) navActions.classList.remove('mobile-active');
            document.body.classList.remove('no-scroll');
            if (menuBtn) {
                menuBtn.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Abrir menú');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }

        function openMobileMenu() {
            if (navLinks) navLinks.classList.add('mobile-active');
            if (navActions) navActions.classList.add('mobile-active');
            document.body.classList.add('no-scroll');
            if (menuBtn) {
                menuBtn.classList.add('active');
                menuBtn.setAttribute('aria-expanded', 'true');
                menuBtn.setAttribute('aria-label', 'Cerrar menú');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                }
            }
        }

        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (menuBtn.classList.contains('active')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });
        }

        // Cerrar menú móvil al hacer clic en un enlace
        const mobileLinks = document.querySelectorAll('.nav-item, .nav-actions-mobile .btn, .dropdown-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1150) {
                    closeMobileMenu();
                }
            });
        });

        // Cerrar menú móvil al hacer clic fuera del mismo
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1150 && navLinks && navLinks.classList.contains('mobile-active')) {
                if (!navLinks.contains(e.target) && !menuBtn?.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        });

        // Cerrar menú móvil al presionar la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks && navLinks.classList.contains('mobile-active')) {
                closeMobileMenu();
            }
        });

        // Restablecer navegación móvil cuando la pantalla supera los 1150px
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1150) {
                closeMobileMenu();
            }
        }, { passive: true });
    }

    // =========================================================================
    // 3. LÓGICA DE TIENDA (Filtros por Categoría, Carrito y Animaciones)
    // =========================================================================
    function initStoreLogic() {
        // --- 3.1 Revelación Inicial y Filtros de Categoría con Animaciones Escalonadas ---
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        // Animación inicial escalonada para productos al cargar la página
        if (productCards.length > 0) {
            productCards.forEach((card, index) => {
                card.style.animationDelay = `${(index % 6) * 0.05}s`;
                card.classList.add('product-animate-in');
            });
        }

        if (filterBtns.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const filterValue = btn.getAttribute('data-filter') || '';
                    const normFilter = filterValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
                    let visibleIndex = 0;

                    productCards.forEach(card => {
                        let isMatch = false;
                        const cardCat = (card.getAttribute('data-category') || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
                        if (filterValue === 'all') {
                            isMatch = true;
                        } else if (filterValue === 'bestsellers') {
                            isMatch = card.hasAttribute('data-bestseller');
                        } else {
                            isMatch = cardCat === normFilter;
                        }

                        if (isMatch) {
                            card.style.display = 'flex';
                            card.classList.remove('product-animate-in');
                            card.style.animationDelay = `${visibleIndex * 0.04}s`;
                            void card.offsetWidth; // Forzar reflujo para reiniciar la animación limpiamente
                            card.classList.add('product-animate-in');
                            visibleIndex++;
                        } else {
                            card.style.display = 'none';
                            card.classList.remove('product-animate-in');
                        }
                    });
                });
            });
        }

        // --- 3.2 Estado del Carrito de Compras y Elementos del DOM ---
        let cart = [];
        const cartToggleBtn = document.getElementById('cart-btn');
        const closeCartBtn = document.getElementById('close-cart');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalPrice = document.getElementById('cart-total');

        function toggleCart() {
            if (cartSidebar) {
                cartSidebar.classList.toggle('active');
                if (cartOverlay) cartOverlay.classList.toggle('active');

                const cartFloatBtn = document.getElementById('cart-btn-float');
                if (cartFloatBtn) {
                    if (cartSidebar.classList.contains('active')) {
                        cartFloatBtn.style.opacity = '0';
                        cartFloatBtn.style.visibility = 'hidden';
                        cartFloatBtn.style.transform = 'scale(0.8)';
                    } else {
                        cartFloatBtn.style.opacity = '1';
                        cartFloatBtn.style.visibility = 'visible';
                        cartFloatBtn.style.transform = 'scale(1)';
                    }
                }
            }
        }

        if (cartToggleBtn) cartToggleBtn.addEventListener('click', toggleCart);
        const cartFloatBtn = document.getElementById('cart-btn-float');
        if (cartFloatBtn) cartFloatBtn.addEventListener('click', toggleCart);
        if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
        if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

        // --- 3.3 Retroalimentación de Impacto y Onda Expansiva del Carrito ---
        function triggerCartBump(targetElement) {
            const allCartButtons = document.querySelectorAll('#cart-btn, #cart-btn-float');
            allCartButtons.forEach(btn => {
                btn.classList.remove('cart-bump-active');
                void btn.offsetWidth;
                btn.classList.add('cart-bump-active');
                setTimeout(() => btn.classList.remove('cart-bump-active'), 600);
            });

            const badges = document.querySelectorAll('#cart-count, #cart-count-float');
            badges.forEach(badge => {
                badge.classList.remove('badge-pop-active');
                void badge.offsetWidth;
                badge.classList.add('badge-pop-active');
                setTimeout(() => badge.classList.remove('badge-pop-active'), 600);
            });

            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const shockwave = document.createElement('div');
                shockwave.className = 'cart-shockwave';
                shockwave.style.left = `${rect.left + rect.width / 2}px`;
                shockwave.style.top = `${rect.top + rect.height / 2}px`;
                document.body.appendChild(shockwave);
                setTimeout(() => shockwave.remove(), 600);
            }
        }

        // --- 3.4 Animación de Vuelo Parabólico al Carrito (Trayectoria Curva) ---
        function flyGhostToCart(sourceElement, targetElement, imageSrc, onComplete) {
            if (!sourceElement || !targetElement) {
                if (onComplete) onComplete();
                return;
            }

            const sourceRect = sourceElement.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();

            const ghost = document.createElement('div');
            ghost.className = 'flying-cart-ghost';

            if (imageSrc) {
                ghost.innerHTML = `<img src="${imageSrc}" alt="Producto" />`;
            } else {
                ghost.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
            }

            const startX = sourceRect.left + sourceRect.width / 2;
            const startY = sourceRect.top + sourceRect.height / 2;
            const endX = targetRect.left + targetRect.width / 2;
            const endY = targetRect.top + targetRect.height / 2;

            ghost.style.left = `${startX}px`;
            ghost.style.top = `${startY}px`;
            document.body.appendChild(ghost);

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Trayectoria parabólica curva mediante la Web Animations API
            if (typeof ghost.animate === 'function') {
                const keyframes = [
                    {
                        transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
                        opacity: 1,
                        offset: 0
                    },
                    {
                        transform: `translate(calc(-50% + ${deltaX * 0.45}px), calc(-50% + ${deltaY * 0.3 - 50}px)) scale(1.18) rotate(-10deg)`,
                        opacity: 0.95,
                        offset: 0.45
                    },
                    {
                        transform: `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) scale(0.2) rotate(20deg)`,
                        opacity: 0.2,
                        offset: 1
                    }
                ];

                const anim = ghost.animate(keyframes, {
                    duration: 680,
                    easing: 'cubic-bezier(0.25, 0.9, 0.25, 1)',
                    fill: 'forwards'
                });

                anim.onfinish = () => {
                    ghost.remove();
                    if (onComplete) onComplete();
                };
            } else {
                // Alternativa de respaldo para navegadores antiguos
                ghost.remove();
                if (onComplete) onComplete();
            }
        }

        // --- 3.5 Notificación Holográfica Flotante (Toast HUD) ---
        const toast = document.getElementById('shop-toast');
        const toastTitle = document.getElementById('toast-title');
        const toastPrice = document.getElementById('toast-price');
        const toastIconWrap = document.getElementById('toast-icon-wrap');
        const toastProgress = document.getElementById('toast-progress');
        const toastClose = document.getElementById('toast-close');
        const toastOpenCart = document.getElementById('toast-open-cart');
        let toastTimeout = null;

        function showShopToast(product) {
            if (!toast) return;

            if (toastTitle) toastTitle.textContent = product.name;
            if (toastPrice) toastPrice.textContent = `$${parseFloat(product.price).toFixed(2)}`;

            if (toastIconWrap) {
                if (product.image) {
                    toastIconWrap.innerHTML = `<img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" />`;
                } else {
                    toastIconWrap.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i>`;
                }
            }

            if (toastProgress) {
                toastProgress.style.transition = 'none';
                toastProgress.style.transform = 'scaleX(1)';
                void toastProgress.offsetWidth;
                toastProgress.style.transition = 'transform 3.4s linear';
                toastProgress.style.transform = 'scaleX(0)';
            }

            toast.classList.add('show');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }

        if (toastClose) {
            toastClose.addEventListener('click', () => {
                clearTimeout(toastTimeout);
                if (toast) toast.classList.remove('show');
            });
        }

        if (toastOpenCart) {
            toastOpenCart.addEventListener('click', () => {
                clearTimeout(toastTimeout);
                if (toast) toast.classList.remove('show');
                toggleCart();
            });
        }

        // --- 3.6 Botones para Agregar al Carrito con Efecto Visual y Vuelo ---
        const addBtns = document.querySelectorAll('.add-to-cart');
        addBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const price = parseFloat(btn.getAttribute('data-price')) || 0;

                // Extraer miniatura de la imagen del producto si está presente
                const card = btn.closest('.product-card');
                const imgEl = card ? card.querySelector('.product-image-container img') : null;
                const imageSrc = imgEl ? imgEl.getAttribute('src') : '';

                const existing = cart.find(item => item.id === id);
                if (existing) {
                    existing.quantity += 1;
                } else {
                    cart.push({ id, name, price, quantity: 1, image: imageSrc });
                }

                // 1. Efecto Ripple al hacer clic en el botón
                const rect = btn.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'btn-ripple';
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
                ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);

                // 2. Estado visual del botón (Checkmark y Resplandor Neón)
                if (!btn.dataset.originalContent) {
                    btn.dataset.originalContent = btn.innerHTML;
                }
                btn.classList.add('is-added');
                btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Agregado!';

                setTimeout(() => {
                    if (btn.dataset.originalContent) {
                        btn.innerHTML = btn.dataset.originalContent;
                    }
                    btn.classList.remove('is-added');
                }, 1200);

                // 3. Determinar el mejor icono de carrito como destino (Navbar o Botón Flotante)
                const isMobileOrScrolled = window.innerWidth <= 768 || window.scrollY > 150;
                let targetBtn = cartToggleBtn;
                if (cartFloatBtn && (isMobileOrScrolled || !cartToggleBtn)) {
                    targetBtn = cartFloatBtn;
                }

                // 4. Disparar animación parabólica de vuelo e impacto de onda
                flyGhostToCart(imgEl || btn, targetBtn, imageSrc, () => {
                    triggerCartBump(targetBtn);
                });

                // 5. Mostrar notificación HUD holográfica
                showShopToast({ name, price, image: imageSrc });

                // 6. Actualizar la interfaz del carrito resaltando este artículo
                updateCartUI(id);
            });
        });

        // --- 3.7 Renderizador de la Interfaz del Carrito (Animación Escalonada y Controles) ---
        function updateCartUI(highlightId = null) {
            if (!cartItemsContainer) return;

            cartItemsContainer.innerHTML = '';
            let totalItems = 0;
            let totalPrice = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío</div>';
            } else {
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    const itemSubtotal = item.price * item.quantity;
                    totalPrice += itemSubtotal;

                    const div = document.createElement('div');
                    div.className = 'cart-item' + (item.id === highlightId ? ' cart-item-highlight' : '');
                    div.style.animationDelay = `${index * 0.04}s`;

                    div.innerHTML = `
                        ${item.image ? `<div class="cart-item-thumb"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}"></div>` : ''}
                        <div class="cart-item-info">
                            <h4>${escapeHTML(item.name)}</h4>
                            <div class="cart-item-sub">
                                <span class="cart-item-price">$${Number(item.price).toFixed(2)}</span>
                                <span class="cart-item-qty">x ${Number(item.quantity)}</span>
                                <span class="cart-item-subtotal">($${itemSubtotal.toFixed(2)})</span>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <button class="cart-qty-btn qty-minus" data-id="${escapeHTML(item.id)}" title="Disminuir"><i class="fa-solid fa-minus"></i></button>
                            <span class="cart-qty-val">${Number(item.quantity)}</span>
                            <button class="cart-qty-btn qty-plus" data-id="${escapeHTML(item.id)}" title="Aumentar"><i class="fa-solid fa-plus"></i></button>
                            <button class="remove-item" data-index="${index}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(div);
                });

                // Limpiar resaltado después de 1.2s
                if (highlightId) {
                    setTimeout(() => {
                        const hlEl = cartItemsContainer.querySelector('.cart-item-highlight');
                        if (hlEl) hlEl.classList.remove('cart-item-highlight');
                    }, 1200);
                }
            }

            // Sincronizar contadores en insignias (badges)
            document.querySelectorAll('#cart-count, #cart-count-float').forEach(el => {
                el.innerText = totalItems;
            });

            // Microanimación de rebote (bump) en precio total
            if (cartTotalPrice) {
                cartTotalPrice.innerText = '$' + totalPrice.toFixed(2);
                cartTotalPrice.classList.remove('total-bump-active');
                void cartTotalPrice.offsetWidth;
                cartTotalPrice.classList.add('total-bump-active');
                setTimeout(() => cartTotalPrice.classList.remove('total-bump-active'), 400);
            }

            // Incremento de cantidad (+)
            cartItemsContainer.querySelectorAll('.qty-plus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    const targetItem = cart.find(it => it.id === id);
                    if (targetItem) {
                        targetItem.quantity += 1;
                        updateCartUI(id);
                    }
                });
            });

            // Decremento de cantidad (-)
            cartItemsContainer.querySelectorAll('.qty-minus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    const targetItem = cart.find(it => it.id === id);
                    if (targetItem) {
                        if (targetItem.quantity > 1) {
                            targetItem.quantity -= 1;
                            updateCartUI(id);
                        } else {
                            // Si es 1 y el usuario presiona menos, animar salida y eliminar
                            const row = btn.closest('.cart-item');
                            if (row) {
                                row.classList.add('cart-item-removing');
                                setTimeout(() => {
                                    cart = cart.filter(it => it.id !== id);
                                    updateCartUI();
                                }, 260);
                            } else {
                                cart = cart.filter(it => it.id !== id);
                                updateCartUI();
                            }
                        }
                    }
                });
            });

            // Eliminar elemento con animación fluida de salida
            cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.getAttribute('data-index'));
                    const row = btn.closest('.cart-item');
                    if (row) {
                        row.classList.add('cart-item-removing');
                        setTimeout(() => {
                            cart.splice(idx, 1);
                            updateCartUI();
                        }, 260);
                    } else {
                        cart.splice(idx, 1);
                        updateCartUI();
                    }
                });
            });
        }

        // --- 3.8 Modal de Checkout y Estado de Procesamiento ---
        const checkoutBtns = document.querySelectorAll('.btn-checkout');
        const checkoutModal = document.getElementById('checkout-modal');
        const closeCheckoutBtn = document.getElementById('close-checkout-modal');
        const checkoutForm = document.getElementById('checkout-form');

        if (checkoutBtns.length > 0) {
            checkoutBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (cart.length === 0) {
                        alert('El carrito está vacío');
                        return;
                    }
                    if (!checkoutModal) return;
                    checkoutModal.classList.add('active');
                    if (cartSidebar) cartSidebar.classList.remove('active');
                    if (cartOverlay) cartOverlay.classList.remove('active');
                });
            });

            if (closeCheckoutBtn && checkoutModal) {
                closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
            }

            window.addEventListener('click', (e) => {
                if (checkoutModal && e.target === checkoutModal) {
                    checkoutModal.classList.remove('active');
                }
            });

            if (checkoutForm) {
                checkoutForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const hpInput = document.getElementById('check-hp-field');
                    const hpVal = hpInput ? hpInput.value : '';

                    if (SecurityShield.isSpamBot(hpVal)) {
                        checkoutModal.classList.remove('active');
                        return;
                    }

                    const nameEl = document.getElementById('check-name');
                    const phoneEl = document.getElementById('check-phone');
                    const addressEl = document.getElementById('check-address');

                    const rawName = nameEl ? nameEl.value : '';
                    const rawPhone = phoneEl ? phoneEl.value : '';
                    const rawAddress = addressEl ? addressEl.value : '';

                    if (SecurityShield.containsSuspiciousPatterns(rawName) ||
                        SecurityShield.containsSuspiciousPatterns(rawAddress)) {
                        alert('Se han detectado caracteres o enlaces no válidos.');
                        return;
                    }

                    SecurityShield.recordSubmission();

                    const submitBtn = checkoutForm.querySelector('button[type="submit"]');
                    const originalContent = submitBtn ? submitBtn.innerHTML : '';

                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Procesando pedido...';
                    }

                    setTimeout(() => {
                        const userData = {
                            name: rawName,
                            phone: rawPhone,
                            address: rawAddress
                        };

                        const message = formatWhatsAppOrder(cart, userData);
                        sendToWhatsApp(message);

                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.innerHTML = originalContent;
                        }

                        checkoutModal.classList.remove('active');
                        cart = [];
                        updateCartUI();
                    }, 500);
                });
            }
        }
    }

    // =========================================================================
    // 4. LIENZO CANVAS DE CONSTELACIÓN DE PARTÍCULAS DE ALTO RENDIMIENTO (Sin lag ni bloqueos)
    // =========================================================================
    function initParticlesCanvas() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles = [];
        let pulses = [];
        let isCanvasVisible = true;
        let animationFrameId = null;

        const isMobile = window.innerWidth <= 768;
        const particleCount = isMobile ? 35 : 65;

        let mouse = { x: null, y: null, radius: isMobile ? 70 : 130 };
        let canvasRect = null;

        const updateCanvasRect = () => {
            if (canvas) canvasRect = canvas.getBoundingClientRect();
        };

        const updateMousePos = (e) => {
            if (!canvasRect) updateCanvasRect();
            mouse.x = e.clientX - canvasRect.left;
            mouse.y = e.clientY - canvasRect.top;
        };

        window.addEventListener('mousemove', updateMousePos, { passive: true });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        }, { passive: true });

        const resize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
                canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            updateCanvasRect();
            initParticles();
        };
        window.addEventListener('resize', resize, { passive: true });

        class Particle {
            constructor() {
                this.x = Math.random() * (canvas.width || 800);
                this.y = Math.random() * (canvas.height || 600);
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.baseSize = Math.random() * 2.2 + 1;
                this.size = this.baseSize;
                this.friction = 0.95;
                this.accX = 0;
                this.accY = 0;
            }

            update() {
                if (mouse.x !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distSq = dx * dx + dy * dy;
                    const radiusSq = mouse.radius * mouse.radius;

                    if (distSq < radiusSq && distSq > 0) {
                        const dist = Math.sqrt(distSq);
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.accX += (dx / dist) * force * 14;
                        this.accY += (dy / dist) * force * 14;
                        this.size = this.baseSize * 1.4;
                    } else {
                        this.size += (this.baseSize - this.size) * 0.08;
                    }
                } else {
                    this.size += (this.baseSize - this.size) * 0.05;
                }

                this.vx += this.accX;
                this.vy += this.accY;
                this.x += this.vx;
                this.y += this.vy;

                this.vx *= this.friction;
                this.vy *= this.friction;
                this.accX *= 0.35;
                this.accY *= 0.35;

                this.vx += (Math.random() - 0.5) * 0.03;
                this.vy += (Math.random() - 0.5) * 0.03;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
        }

        class CircuitPulse {
            constructor() {
                this.reset();
            }

            reset() {
                if (!particles || particles.length < 2) {
                    this.alive = false;
                    return;
                }
                this.p1 = particles[Math.floor(Math.random() * particles.length)];
                this.findTarget();
                this.progress = 0;
                this.speed = Math.random() * 0.02 + 0.012;
                this.hops = 0;
                this.maxHops = 3 + Math.floor(Math.random() * 2);
            }

            findTarget() {
                if (!this.p1 || !particles || particles.length < 2) {
                    this.alive = false;
                    this.p2 = null;
                    return;
                }
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    if (p === this.p1) continue;
                    const dx = p.x - this.p1.x;
                    const dy = p.y - this.p1.y;
                    if (dx * dx + dy * dy < 19600) {
                        this.p2 = p;
                        this.alive = true;
                        return;
                    }
                }
                this.alive = false;
                this.p2 = null;
            }

            update() {
                if (!this.alive || !this.p1 || !this.p2) {
                    this.reset();
                    return;
                }
                this.progress += this.speed;
                if (this.progress >= 1) {
                    this.p1 = this.p2;
                    this.progress = 0;
                    this.hops++;
                    if (this.hops >= this.maxHops) {
                        this.reset();
                    } else {
                        this.findTarget();
                    }
                }
            }

            draw() {
                if (!this.alive || !this.p1 || !this.p2) return;
                const x = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
                const y = this.p1.y + (this.p2.y - this.p1.y) * this.progress;

                ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(x, y, 1.8, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            pulses = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            const pulseCount = isMobile ? 3 : 7;
            for (let i = 0; i < pulseCount; i++) {
                pulses.push(new CircuitPulse());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // TRAZADO POR LOTES DE LÍNEAS DE CONSTELACIÓN (Una sola llamada stroke = 60fps garantizados)
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.14)';
            const pLen = particles.length;
            for (let i = 0; i < pLen; i++) {
                const pi = particles[i];
                for (let j = i + 1; j < pLen; j++) {
                    const pj = particles[j];
                    const dx = pi.x - pj.x;
                    const dy = pi.y - pj.y;
                    if (dx * dx + dy * dy < 18000) {
                        ctx.moveTo(pi.x, pi.y);
                        ctx.lineTo(pj.x, pj.y);
                    }
                }
            }
            ctx.stroke();

            // RENDERIZADO POR LOTES DE NODOS DE PARTÍCULAS (Una sola llamada fill)
            ctx.fillStyle = 'rgba(0, 229, 255, 0.55)';
            ctx.beginPath();
            for (let i = 0; i < pLen; i++) {
                const p = particles[i];
                p.update();
                ctx.moveTo(p.x + p.size, p.y);
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            }
            ctx.fill();

            // Pulsos de circuitos
            for (let i = 0; i < pulses.length; i++) {
                pulses[i].update();
                pulses[i].draw();
            }

            if (isCanvasVisible && !document.hidden) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                animationFrameId = null;
            }
        }

        resize();
        animationFrameId = requestAnimationFrame(animate);

        const heroSection = canvas.closest('.hero') || canvas;
        if ('IntersectionObserver' in window) {
            const canvasObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isCanvasVisible = entry.isIntersecting;
                    if (isCanvasVisible && !document.hidden && !animationFrameId) {
                        updateCanvasRect();
                        animationFrameId = requestAnimationFrame(animate);
                    } else if (!isCanvasVisible && animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                });
            }, { threshold: 0.05 });
            canvasObserver.observe(heroSection);
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            } else {
                if (isCanvasVisible && !animationFrameId) {
                    updateCanvasRect();
                    animationFrameId = requestAnimationFrame(animate);
                }
            }
        }, { passive: true });
    }

    // =========================================================================
    // 5. AUXILIARES DE WHATSAPP Y MODAL DE VISITA TÉCNICA
    // =========================================================================
    const WHATSAPP_PHONE = '51906681667';

    function formatWhatsAppOrder(cart, userDetails) {
        const safeName = sanitizeForMessage(userDetails.name, 80);
        const safePhone = sanitizeForMessage(userDetails.phone, 30);
        const safeAddress = sanitizeForMessage(userDetails.address, 150);

        let message = `🚀 *NUEVO PEDIDO SAIDEX 4.0*\n`;
        message += `---------------------------\n`;
        message += `👤 *Cliente:* ${safeName}\n`;
        message += `📞 *Teléfono:* ${safePhone}\n`;
        message += `📍 *Dirección:* ${safeAddress}\n\n`;
        message += `🛒 *PRODUCTOS:*\n`;

        let total = 0;
        cart.forEach(item => {
            const safeItemName = sanitizeForMessage(item.name, 80);
            const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
            const price = Math.max(0, parseFloat(item.price) || 0);
            const subtotal = price * qty;
            message += `- ${qty}x ${safeItemName} ... $${subtotal.toFixed(2)}\n`;
            total += subtotal;
        });

        message += `\n---------------------------\n`;
        message += `💰 *TOTAL A PAGAR:* $${total.toFixed(2)}\n`;
        message += `---------------------------\n`;
        message += `_Enviado desde la Tienda Inteligente_`;
        return encodeURIComponent(message);
    }

    function sendToWhatsApp(message) {
        const cleanMessage = String(message).replace(/[\r\n]/g, '');
        const targetUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${cleanMessage}`;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(2, 6, 23, 0.95); backdrop-filter: blur(10px);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 10000; color: #FFF; font-family: 'Inter', sans-serif;
        `;
        overlay.innerHTML = `
            <div class="loader-neon" style="width: 60px; height: 60px; border: 4px solid #00E5FF; border-radius: 50%; margin-bottom: 20px; box-shadow: 0 0 20px #00E5FF;"></div>
            <h3 style="letter-spacing: 2px; color: #00E5FF; text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);">CONECTANDO CON SAIDEX...</h3>
            <p style="margin-top: 10px; opacity: 0.7;">Sincronizando despacho por WhatsApp</p>
        `;
        document.body.appendChild(overlay);

        setTimeout(() => {
            const newTab = window.open(targetUrl, '_blank', 'noopener,noreferrer');
            if (newTab) {
                newTab.opener = null;
            } else {
                window.location.href = targetUrl;
            }
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 800);
    }

    function initWhatsAppAndModals() {
        const visitModal = document.getElementById('visit-modal');
        const openVisitBtns = document.querySelectorAll('#btn-agenda-visita, .btn-agenda-visita-card');
        const closeVisitBtn = document.getElementById('close-visit-modal');
        const visitForm = document.getElementById('visita-tecnica-form');
        const phoneInput = document.getElementById('visit-phone');
        const dateInput = document.getElementById('visit-date');

        if (visitModal) {
            // Abrir modal con cualquier botón correspondiente
            openVisitBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    visitModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });

            // Cerrar modal con botón X
            if (closeVisitBtn) {
                closeVisitBtn.addEventListener('click', () => {
                    visitModal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            // Cerrar modal al hacer clic en el fondo oscuro
            window.addEventListener('click', (e) => {
                if (e.target === visitModal) {
                    visitModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Cerrar modal con tecla Escape
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && visitModal.classList.contains('active')) {
                    visitModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Fecha mínima hoy en selector de fecha
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.setAttribute('min', today);
            }

            // Formato inteligente de teléfono (+51 900 000 000)
            if (phoneInput) {
                if (!phoneInput.value) phoneInput.value = '+51 ';

                phoneInput.addEventListener('input', () => {
                    let val = phoneInput.value;
                    let digits = val.replace(/\D/g, '');
                    if (digits.startsWith('51')) digits = digits.substring(2);
                    if (digits.length > 9) digits = digits.substring(0, 9);

                    let formatted = '';
                    for (let i = 0; i < digits.length; i++) {
                        if (i > 0 && i % 3 === 0) formatted += ' ';
                        formatted += digits[i];
                    }
                    phoneInput.value = '+51 ' + formatted;
                });

                phoneInput.addEventListener('keydown', (e) => {
                    if (phoneInput.selectionStart <= 4 && (e.key === 'Backspace' || e.key === 'Delete')) {
                        e.preventDefault();
                    }
                });
            }

            // Envío del formulario formateado hacia WhatsApp de SAIDEX
            if (visitForm) {
                visitForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const hpInput = document.getElementById('visit-hp-field');
                    const hpVal = hpInput ? hpInput.value : '';

                    if (SecurityShield.isSpamBot(hpVal)) {
                        visitForm.reset();
                        visitModal.classList.remove('active');
                        document.body.style.overflow = '';
                        return;
                    }

                    const nameInput = document.getElementById('visit-name') || visitForm.querySelector('input[type="text"]');
                    const telInput = document.getElementById('visit-phone') || visitForm.querySelector('input[type="tel"]');
                    const distritoInput = document.getElementById('visit-distrito');
                    const typeSelect = document.getElementById('visit-type') || visitForm.querySelector('select');
                    const fechaInput = document.getElementById('visit-date') || visitForm.querySelector('input[type="date"]');
                    const descTextarea = document.getElementById('visit-desc') || visitForm.querySelector('textarea');

                    const rawName = nameInput ? nameInput.value : '';
                    const rawPhone = telInput ? telInput.value : '';
                    const rawDistrito = distritoInput ? distritoInput.value : '';
                    const rawType = typeSelect ? typeSelect.value : '';
                    const rawDate = fechaInput ? fechaInput.value : '';
                    const rawDesc = descTextarea ? descTextarea.value : '';

                    if (SecurityShield.containsSuspiciousPatterns(rawName) ||
                        SecurityShield.containsSuspiciousPatterns(rawDesc) ||
                        SecurityShield.containsSuspiciousPatterns(rawDistrito)) {
                        alert('Se han detectado caracteres o enlaces no válidos en su solicitud.');
                        return;
                    }

                    SecurityShield.recordSubmission();

                    const name = sanitizeForMessage(rawName, 80);
                    const phone = sanitizeForMessage(rawPhone, 30);
                    const distrito = sanitizeForMessage(rawDistrito, 80);
                    const type = sanitizeForMessage(rawType, 60);
                    const date = sanitizeForMessage(rawDate, 20);
                    const desc = sanitizeForMessage(rawDesc, 250);

                    let waMsg = `🛠 *SOLICITUD DE VISITA TÉCNICA - SAIDEX 4.0*\n`;
                    waMsg += `---------------------------\n`;
                    waMsg += `👤 *Nombre:* ${name}\n`;
                    waMsg += `📞 *Teléfono:* ${phone}\n`;
                    if (distrito) waMsg += `📍 *Distrito / Ubicación:* ${distrito}\n`;
                    waMsg += `⚙️ *Tipo de Proyecto:* ${type}\n`;
                    waMsg += `📅 *Fecha Tentativa:* ${date}\n`;
                    waMsg += `📝 *Requerimientos:* ${desc || 'Evaluación integral'}\n`;
                    waMsg += `---------------------------\n`;
                    waMsg += `_Sincronizado vía SAIDEX Web Oficial_`;

                    sendToWhatsApp(encodeURIComponent(waMsg));
                    visitForm.reset();
                    if (phoneInput) phoneInput.value = '+51 ';
                    visitModal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
        }
    }

    // =========================================================================
    // 6. ANIMACIÓN DE CONTADORES ESTADÍSTICOS CON INTERSECTION OBSERVER
    // =========================================================================
    function initCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        if (counters.length === 0) return;

        const easeOutQuad = (t) => t * (2 - t);

        const animate = (counter) => {
            if (counter.dataset.animated === 'true') return;
            counter.dataset.animated = 'true';

            const target = +counter.getAttribute('data-target');
            if (isNaN(target)) return;
            const duration = 1400;
            const startTime = performance.now();

            const update = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeOutQuad(progress);
                const current = Math.floor(eased * target);

                counter.innerText = current;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };

            requestAnimationFrame(update);
        };

        if (!('IntersectionObserver' in window)) {
            counters.forEach(counter => animate(counter));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });

        counters.forEach(counter => observer.observe(counter));
    }

    // =========================================================================
    // 7. EFECTO DE DESPLAZAMIENTO EN BARRA DE NAVEGACIÓN (NAVBAR)
    // =========================================================================
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let isScrolled = false;
        window.addEventListener('scroll', () => {
            const scrolledNow = window.scrollY > 40;
            if (scrolledNow !== isScrolled) {
                isScrolled = scrolledNow;
                navbar.classList.toggle('scrolled', isScrolled);
            }
        }, { passive: true });
    }

    // =========================================================================
    // 8. ANIMACIONES DE APARICIÓN AL DESPLAZAR (SCROLL REVEAL)
    // =========================================================================
    function initScrollReveal() {
        const revealEls = document.querySelectorAll('.scroll-bounce');
        if (revealEls.length === 0) return;

        if (!('IntersectionObserver' in window)) {
            revealEls.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(el => observer.observe(el));
    }

    // =========================================================================
    // 9. INCLINACIÓN 3D DE TARJETAS (Cálculo optimizado, cero reflow y fluidez)
    // =========================================================================
    function init3DCardTilt() {
        if (window.innerWidth <= 768) return;

        const tiltCards = document.querySelectorAll(
            '.stat-item'
        );

        tiltCards.forEach(card => {
            let isHovered = false;
            let ticking = false;
            let mouseX = 0;
            let mouseY = 0;
            let rect = null;

            card.addEventListener('mouseenter', (e) => {
                isHovered = true;
                rect = card.getBoundingClientRect();
                card.style.transition = 'transform 0.16s ease-out, box-shadow 0.28s ease, border-color 0.28s ease';
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)';
            }, { passive: true });

            card.addEventListener('mousemove', (e) => {
                if (!rect) rect = card.getBoundingClientRect();
                mouseX = e.clientX;
                mouseY = e.clientY;

                if (!ticking) {
                    ticking = true;
                    requestAnimationFrame(() => {
                        if (isHovered && rect) {
                            const x = mouseX - rect.left;
                            const y = mouseY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;

                            const rotateX = ((y - centerY) / centerY) * -5.5;
                            const rotateY = ((x - centerX) / centerX) * 5.5;

                            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
                        }
                        ticking = false;
                    });
                }
            }, { passive: true });

            card.addEventListener('mouseleave', () => {
                isHovered = false;
                rect = null;
                card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease';
                card.style.transform = '';
            }, { passive: true });
        });
    }

    // =========================================================================
    // 10. DESPACHADOR DEL CICLO DE VIDA (Inicialización garantizada en todos los navegadores)
    // =========================================================================
    function initAll() {
        initMobileMenu();
        initStoreLogic();
        initParticlesCanvas();
        initWhatsAppAndModals();
        initCounterAnimations();
        initNavbarScroll();
        initScrollReveal();
        init3DCardTilt();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
