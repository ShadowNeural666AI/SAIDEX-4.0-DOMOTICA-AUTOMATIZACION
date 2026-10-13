/**
 * SAIDEX 4.0 - Efectos de Tarjetas Eléctricas 3D de Ultra Alto Rendimiento
 * Dispara descarga eléctrica interactiva e inclinación 3D (tilt) exclusivamente al pasar el cursor (hover / mouseenter) y al interactuar de forma táctil.
 * Estado en reposo: Estética limpia y en reposo sin consumo innecesario.
 * Estado activo (Hover/Touch): Perspectiva e inclinación 3D con descarga eléctrica reactiva.
 * Aceleración total por hardware en GPU, sin congelamientos ni bloqueo del hilo principal.
 */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    function initInteractiveCard(card) {
        let rect = null;
        let ticking = false;
        let currentX = 0;
        let currentY = 0;
        let touchTimer = null;
        let rafId = null;
        let touchStartX = 0;
        let touchStartY = 0;
        let isScrolling = false;

        function updateTilt() {
            if (!rect) {
                ticking = false;
                return;
            }
            const xPct = (currentX / rect.width) - 0.5;
            const yPct = (currentY / rect.height) - 0.5;

            // Ángulo espacial 3D sutil y elegante hacia el cursor (acelerado por GPU con translate3d)
            const rotateX = (-yPct * 6.5).toFixed(1);
            const rotateY = (xPct * 6.5).toFixed(1);

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -8px, 0)`;
            ticking = false;
        }

        // En dispositivos móviles y táctiles, el efecto eléctrico se ejecuta al 100% en GPU vía CSS
        if (isTouchOnly || window.innerWidth <= 992) {
            card.addEventListener('touchstart', function () {
                card.classList.add('electric-active');
            }, { passive: true });

            card.addEventListener('touchend', function () {
                setTimeout(() => card.classList.remove('electric-active'), 250);
            }, { passive: true });

            card.addEventListener('touchcancel', function () {
                card.classList.remove('electric-active');
            }, { passive: true });

            return; // No añadir listeners de mouse ni tilt 3D que consuman CPU en móvil
        }

        // --- Eventos de Cursor / Hover (Escritorio, Laptops y Puntero Fino) ---
        card.addEventListener('mouseenter', function (e) {
            rect = card.getBoundingClientRect();
            card.style.willChange = 'transform';
            card.classList.add('electric-active');
            card.style.transition = 'transform 0.16s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';

            // Activar inclinación inicial inmediata para visibilidad instantánea al posar el cursor
            currentX = e.clientX ? (e.clientX - rect.left) : (rect.width / 2);
            currentY = e.clientY ? (e.clientY - rect.top) : (rect.height / 2);
            if (!prefersReducedMotion) {
                updateTilt();
            }
        }, { passive: true });

        card.addEventListener('mousemove', function (e) {
            if (!rect) rect = card.getBoundingClientRect();
            currentX = e.clientX - rect.left;
            currentY = e.clientY - rect.top;

            if (!ticking && !prefersReducedMotion) {
                ticking = true;
                rafId = window.requestAnimationFrame(updateTilt);
            }
        }, { passive: true });

        card.addEventListener('mouseleave', function () {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
                rafId = null;
            }
            ticking = false;
            rect = null;
            card.classList.remove('electric-active');
            card.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease';
            card.style.transform = '';
            card.style.willChange = 'auto';
        }, { passive: true });
    }

    function init() {
        const cards = document.querySelectorAll('.product-card, .project-card, .solution-card, .about-modern-card, .project-mini-card, .cta-bg.futuristic-cta.electric-purple');

        cards.forEach((card, index) => {
            // Asignar temas cíclicos si no han sido definidos previamente
            if (!card.classList.contains('electric-cyan') && 
                !card.classList.contains('electric-green') && 
                !card.classList.contains('electric-magenta') &&
                !card.classList.contains('electric-purple')) {
                const rem = index % 3;
                if (rem === 0) card.classList.add('electric-cyan');
                else if (rem === 1) card.classList.add('electric-green');
                else card.classList.add('electric-magenta');
            }

            // Inicializar interacción interactiva hover/touch
            initInteractiveCard(card);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
