/**
 * SAIDEX 4.0 - Controlador del Carrusel Circular Orbital en el Hero
 * Maneja la órbita de 8 diapositivas, cambio de fondos de alta resolución,
 * y la animación circular sincronizada de títulos, textos e insignias.
 */

(function () {
  'use strict';

  // 8 Diapositivas adaptadas con imágenes de alta fidelidad y textos específicos
  const heroSlidesData = [
    {
      image: "assets/hero 1.webp",
      badgeIcon: "fa-solid fa-house-signal",
      titleHtml: 'Transforma tu Hogar <br><span class="text-neon-cyan">en Inteligente</span>',
      desc: "Domótica y automatización de vanguardia. Control de iluminación biodinámica, climatización inteligente a 21°C y confort absoluto desde tu celular o tu voz.",
      pills: [
        { icon: "fa-solid fa-lightbulb", text: "Iluminación Biodinámica" },
        { icon: "fa-solid fa-temperature-half", text: "Clima 21°C Inteligente" },
        { icon: "fa-solid fa-microchip", text: "Holograma Sci-Fi" }
      ]
    },
    {
      image: "assets/hero 2.webp",
      badgeIcon: "fa-solid fa-shield-halved",
      titleHtml: 'Seguridad y Vigilancia <br><span class="text-neon-cyan">con IA</span>',
      desc: "Protección perimetral biométrica en tiempo real, videovigilancia ultra HD 4K, reconocimiento facial y cerraduras inteligentes",
      pills: [
        { icon: "fa-solid fa-fingerprint", text: "Acceso Biométrico" },
        { icon: "fa-solid fa-video", text: "Cámaras IA 4K" },
        { icon: "fa-solid fa-bell", text: "Monitoreo 24/7" }
      ]
    },
    {
      image: "assets/hero 3.webp",
      badgeIcon: "fa-solid fa-couch",
      titleHtml: 'Espacios Vivos y <br><span class="hero-title-light">Luz </span><span class="text-neon-cyan">Circadiana</span>',
      desc: "Arquitectura inteligente sincronizada con tu ritmo biológico diario. Ambientes lumínicos cálidos y tenues diseñados para potenciar el descanso y la productividad.",
      pills: [
        { icon: "fa-solid fa-sun", text: "Ciclo Circadiano" },
        { icon: "fa-solid fa-sliders", text: "Escenas Lumínicas" },
        { icon: "fa-solid fa-leaf", text: "Ahorro Sustentable" }
      ]
    },
    {
      image: "assets/hero 4.webp",
      badgeIcon: "fa-solid fa-film",
      titleHtml: 'Cine en Casa & <br><span class="hero-title-light">Audio </span><span class="text-neon-cyan">Inmersivo Dolby</span>',
      desc: "Salas dedicadas de proyección y acústica envolvente Hi-Fi multizona. Cortinas blackout motorizadas y pantallas retráctiles con un solo toque.",
      pills: [
        { icon: "fa-solid fa-volume-high", text: "Dolby Atmos Hi-Fi" },
        { icon: "fa-solid fa-sheet-plastic", text: "Blackout Motorizado" },
        { icon: "fa-solid fa-tv", text: "Pantalla Retráctil" }
      ]
    },
    {
      image: "assets/hero 5.webp",
      badgeIcon: "fa-solid fa-water-ladder",
      titleHtml: 'Automatización<br><span class="text-neon-cyan">Exterior</span>',
      desc: "Climatización de piscinas, cascadas inteligentes, iluminación sumergible RGB y sistemas de riego predictivo con detección climática en tiempo real.",
      pills: [
        { icon: "fa-solid fa-water", text: "Piscina Climatizada" },
        { icon: "fa-solid fa-faucet-drip", text: "Riego Predictivo" },
        { icon: "fa-solid fa-tree", text: "Jardines RGB" }
      ]
    },
    {
      image: "assets/hero 6.webp",
      badgeIcon: "fa-solid fa-building-shield",
      titleHtml: 'Torres Corporativas <br><span class="hero-title-light">y </span><span class="text-neon-cyan">Protocolos KNX</span>',
      desc: "Automatización profesional bajo estándar KNX internacional para oficinas y edificios corporativos. Control de presencia, accesos y eficiencia energética.",
      pills: [
        { icon: "fa-solid fa-network-wired", text: "Estándar KNX" },
        { icon: "fa-solid fa-id-card-clip", text: "Control de Acceso" },
        { icon: "fa-solid fa-chart-line", text: "Monitoreo Central" }
      ]
    },
    {
      image: "assets/hero 7.webp",
      badgeIcon: "fa-solid fa-solar-panel",
      titleHtml: 'Eficiencia Energética <br><span class="hero-title-light">y </span><span class="text-neon-cyan">Gestión Solar</span>',
      desc: "Optimización de paneles fotovoltaicos y almacenamiento en micro-redes inteligentes, permitiendo reducir hasta un 40% tu factura eléctrica.",
      pills: [
        { icon: "fa-solid fa-solar-panel", text: "Paneles Solares" },
        { icon: "fa-solid fa-battery-three-quarters", text: "Baterías Smart" },
        { icon: "fa-solid fa-arrow-trend-down", text: "Hasta 40% Ahorro" }
      ]
    },
    {
      image: "assets/hero 8.webp",
      badgeIcon: "fa-solid fa-mobile-screen-button",
      titleHtml: 'Tu Hogar<br><span class="text-neon-cyan">en tu Mano</span>',
      desc: "Control total de todas las funciones de tu residencia desde una sola aplicación intuitiva o mediante asistentes de voz Alexa y Google Home.",
      pills: [
        { icon: "fa-solid fa-mobile-screen", text: "App Todo en Uno" },
        { icon: "fa-solid fa-microphone", text: "Alexa & Google Home" },
        { icon: "fa-solid fa-globe", text: "Control Remoto Global" }
      ]
    }
  ];

  function initHeroCircularCarousel() {
    const carousel = document.getElementById("heroCarousel");
    if (!carousel) return;

    const bgLayerA = document.getElementById("heroBgLayerA");
    const bgLayerB = document.getElementById("heroBgLayerB");

    // Contenedores del Escenario de Texto Dinámico
    const textStage = document.getElementById("heroCircularTextStage");
    const badgeText = document.getElementById("heroBadgeText");
    const badgeIcon = document.getElementById("heroBadgeIcon");
    const dynamicTitle = document.getElementById("heroDynamicTitle");
    const dynamicDesc = document.getElementById("heroDynamicDesc");
    const dynamicPills = document.getElementById("heroDynamicPills");
    const stageCounter = document.getElementById("heroStageCounter");
    const progressBar = document.getElementById("heroProgressBar");

    // Controles
    const leftArrow = document.getElementById("heroArrowLeft");
    const rightArrow = document.getElementById("heroArrowRight");
    const indicatorsContainer = document.getElementById("heroIndicators");
    const showcaseContainer = document.getElementById("heroCircularShowcase");
    const controlsContainer = document.querySelector(".hero-carousel-controls");

    let currentSlide = 0;
    let isAnimating = false;
    let activeBgLayer = 'A';

    // Crear elementos de las diapositivas para la rueda orbital derecha
    const slides = heroSlidesData.map((item, index) => {
      const div = document.createElement("div");
      div.className = "hero-carousel-slide";
      div.style.backgroundImage = `url("${item.image}")`;
      div.setAttribute("role", "button");
      div.setAttribute("aria-label", `Diapositiva ${index + 1}`);

      div.addEventListener("click", () => {
        if (!isAnimating && currentSlide !== index) {
          const dir = index > currentSlide ? 1 : -1;
          moveToSlide(index, dir);
        }
      });

      carousel.appendChild(div);
      return div;
    });

    // Crear indicadores de puntos
    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = '';
      heroSlidesData.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.className = "hero-indicator-dot" + (idx === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Ir a diapositiva ${idx + 1}`);
        dot.addEventListener("click", () => {
          if (!isAnimating && currentSlide !== idx) {
            const dir = idx > currentSlide ? 1 : -1;
            moveToSlide(idx, dir);
          }
        });
        indicatorsContainer.appendChild(dot);
      });
    }

    // Calcular posición y escala en la órbita circular
    function getSlideTransform(position) {
      const carouselWidth = (carousel && carousel.offsetWidth > 0) ? carousel.offsetWidth : 520;
      const radius = carouselWidth / 2;
      const angle = position * 47 + 141;

      const isMobile = window.innerWidth <= 767;
      let scale;
      if (position === 0) {
        scale = isMobile ? 4.1 : 4.8;
      } else if (position === -1 || position === 1) {
        scale = isMobile ? 2.1 : 2.6;
      } else {
        scale = isMobile ? 0.9 : 1.15;
      }

      return `rotate(${angle}deg) translateY(${radius}px) rotate(${-angle}deg) scale(${scale})`;
    }


    // Renderizar píldoras de especificaciones
    function renderPills(pillsData) {
      if (!dynamicPills) return;
      dynamicPills.innerHTML = '';
      pillsData.forEach(p => {
        const pill = document.createElement("span");
        pill.className = "hero-spec-pill";
        pill.innerHTML = `<i class="${p.icon}"></i> ${p.text}`;
        dynamicPills.appendChild(pill);
      });
    }

    // Aplicar los nuevos textos al DOM
    function applyTextContent(slideIdx) {
      const data = heroSlidesData[slideIdx];
      if (!data) return;

      if (badgeText) badgeText.textContent = data.badge;
      if (badgeIcon) badgeIcon.className = data.badgeIcon;
      if (dynamicTitle) dynamicTitle.innerHTML = data.titleHtml;
      if (dynamicDesc) dynamicDesc.textContent = data.desc;
      if (stageCounter) {
        const curNum = String(slideIdx + 1).padStart(2, '0');
        const totalNum = String(heroSlidesData.length).padStart(2, '0');
        stageCounter.textContent = `${curNum} / ${totalNum}`;
      }
      renderPills(data.pills);
    }

    // Actualizar diapositivas de la rueda y fondo
    function updateSlidesVisuals(slideIdx) {
      const positions = [-2, -1, 0, 1, 2];

      slides.forEach((slide, i) => {
        let offset = (i - slideIdx + slides.length) % slides.length;
        if (offset > slides.length / 2) offset -= slides.length;

        if (positions.includes(offset)) {
          slide.style.display = "block";
          slide.style.transform = getSlideTransform(offset);
          slide.style.opacity = "1";

          if (offset === 0) {
            slide.classList.add("active");
            slide.style.zIndex = "10";
          } else {
            slide.classList.remove("active");
            slide.style.zIndex = Math.abs(offset) === 1 ? "6" : "3";
          }
        } else {
          slide.style.display = "none";
          slide.style.opacity = "0";
          slide.classList.remove("active");
        }
      });

      // Indicadores de puntos
      if (indicatorsContainer) {
        const dots = indicatorsContainer.querySelectorAll(".hero-indicator-dot");
        dots.forEach((dot, idx) => {
          if (idx === slideIdx) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      }

      // Fondo cinemático con fundido cruzado
      const activeData = heroSlidesData[slideIdx];
      if (bgLayerA && bgLayerB && activeData) {
        if (activeBgLayer === 'A') {
          bgLayerB.style.backgroundImage = `url("${activeData.image}")`;
          bgLayerB.classList.add("active");
          bgLayerA.classList.remove("active");
          activeBgLayer = 'B';
        } else {
          bgLayerA.style.backgroundImage = `url("${activeData.image}")`;
          bgLayerA.classList.add("active");
          bgLayerB.classList.remove("active");
          activeBgLayer = 'A';
        }
      }
    }

    /**
     * Animación Circular Completa de los Textos:
     * El texto actual sale rotando por una trayectoria circular y desaparece por completo.
     * Luego se inyectan los nuevos textos y entran rotando desde el arco opuesto.
     */
    function transitionTextsCircular(newSlideIdx, direction = 1) {
      if (!textStage) {
        applyTextContent(newSlideIdx);
        return;
      }

      const outClass = direction >= 0 ? "anim-circle-exit-forward" : "anim-circle-exit-backward";
      const inClass = direction >= 0 ? "anim-circle-enter-forward" : "anim-circle-enter-backward";

      // Limpiar clases previas
      textStage.classList.remove("anim-circle-exit-forward", "anim-circle-exit-backward", "anim-circle-enter-forward", "anim-circle-enter-backward");
      void textStage.offsetWidth; // Forzar reflow

      // 1. Iniciar salida con rotación circular y desvanecimiento
      textStage.classList.add(outClass);

      // 2. A la mitad de la transición (cuando el texto viejo ya se desvaneció en el arco)
      setTimeout(() => {
        applyTextContent(newSlideIdx);
        textStage.classList.remove(outClass);
        void textStage.offsetWidth; // Forzar reflow

        // 3. Entrar con trayectoria circular
        textStage.classList.add(inClass);

        // 4. Limpiar clases al completar la entrada
        setTimeout(() => {
          textStage.classList.remove(inClass);
        }, 500);
      }, 220);
    }

    // Mover a una diapositiva con dirección especificada
    function moveToSlide(target, direction = 1) {
      if (isAnimating) return;
      isAnimating = true;

      const prevSlide = currentSlide;
      currentSlide = target;

      // 1. Ejecutar animación circular de textos
      transitionTextsCircular(currentSlide, direction);

      // 2. Ejecutar rotación visual de la rueda orbital y del fondo
      updateSlidesVisuals(currentSlide);

      setTimeout(() => {
        isAnimating = false;
      }, 550);
    }

    // Eventos de flechas (navegación por botones)
    if (leftArrow) {
      leftArrow.addEventListener("click", () => {
        const nextIdx = (currentSlide - 1 + heroSlidesData.length) % heroSlidesData.length;
        moveToSlide(nextIdx, -1);
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", () => {
        const nextIdx = (currentSlide + 1) % heroSlidesData.length;
        moveToSlide(nextIdx, 1);
      });
    }

    // Soporte para gestos táctiles (Swipe en móviles)
    let touchStartX = 0;
    let touchEndX = 0;

    const gestureElement = document.querySelector(".hero") || carousel;
    if (gestureElement) {
      gestureElement.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      gestureElement.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const threshold = 40;
        if (touchEndX < touchStartX - threshold) {
          moveToSlide((currentSlide + 1) % heroSlidesData.length, 1);
        } else if (touchEndX > touchStartX + threshold) {
          moveToSlide((currentSlide - 1 + heroSlidesData.length) % heroSlidesData.length, -1);
        }
      }, { passive: true });
    }

    // Reajustar en redimensionamiento de ventana
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateSlidesVisuals(currentSlide);
      }, 100);
    }, { passive: true });

    // Inicializar primer estado
    applyTextContent(0);
    updateSlidesVisuals(0);
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroCircularCarousel);
  } else {
    initHeroCircularCarousel();
  }
})();
