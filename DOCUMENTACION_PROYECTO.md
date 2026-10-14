# Documentación Técnica Integral del Proyecto SAIDEX 4.0

## 1. Visión General del Proyecto
**SAIDEX 4.0 - Domótica y Automatización** es una plataforma web estática de grado corporativo y vanguardia tecnológica, diseñada bajo una estética futurista, cibernética y de alta fidelidad visual (Cyberpunk / Neón 3D). La solución combina una arquitectura frontend ultrarrápida y libre de dependencias externas pesadas con una experiencia inmersiva compuesta por:
* Un **carrusel circular orbital dinámico** en el Hero con 8 diapositivas de alta resolución, rotación automática continua cada 3 segundos, pausa inteligente al posar el cursor (`hover`) y elementos de visualización holográfica HUD.
* Un **precargador cibernético (HUD Preloader)** con animación y barra porcentual calibradas a una duración cinemática de 3 segundos, respaldado por un temporizador failsafe de seguridad de 3.5 segundos.
* Un **pie de página (Footer) de alta simetría** organizado en 2 columnas de idéntico tamaño y centrado en el medio, articulado con circuitos cibernéticos SVG de pulsos luminosos.
* Un **motor de cursor Beast Breathing** con aura eléctrica reactiva, partículas cósmicas y estela luminosa acelerada por GPU, protegido por validaciones de compatibilidad de canvas.
* Un **motor de rayos eléctricos 3D** con filtros SVG de turbulencia fractal e inclinación de perspectiva en tiempo real.
* Un **lienzo canvas 2D de partículas** con nodos neuronales interactivos y pulsos de circuito.
* Una **tienda virtual interactiva** con 30 productos de domótica, animación parabólica de adición ("vuelo al carrito"), carrito en memoria y checkout directo por WhatsApp.
* Un **overlay cinematográfico adaptativo en móviles** con degradado horizontal de la mitad hacia la izquierda para garantizar legibilidad óptima sobre los fondos luminosos.
* Un **blindaje de seguridad integral** contra ataques de inyección (XSS), secuestro de pestañas, clickjacking y motores de spam automatizados mediante trampas Honeypot invisibles y limitadores de tasa.
* Una **auditoría de código libre de errores**, con etiquetas HTML balanceadas, navegación unificada en todas las páginas y accesibilidad semántica nativa.

---

## 2. Arquitectura de Archivos y Directorios

```plaintext
SAIDEX-4.0--DOMOTICA-Y-AUTOMATIZACION/
│
├── index.html                   # Landing principal (Hero orbital 3D con autoplay 3s, soluciones, proyectos, métricas, modal y footer 2 col)
├── tienda.html                  # Tienda virtual (Catálogo de 30 productos, filtros, carrito lateral, checkout a WhatsApp y footer 2 col)
├── proyectos.html               # Galería y vitrina técnica interactiva de proyectos residenciales, comerciales e industriales y footer 2 col)
│
├── css/
│   ├── style.css                # Hoja de estilos global, variables CSS, preloader HUD (3s), navbar translúcido, mobile overlay y footer
│   ├── electric-effect.css      # Sistema de efectos eléctricos 3D, filtros de turbulencia SVG y optimización móvil
│   ├── hero-carousel.css        # Estilos del carrusel circular orbital del hero, badges HUD, títulos dinámicos, retículas y overlays
│   └── store.css                # Estilos visuales de la tienda, carrito retráctil, toast HUD y modales responsivos
│
├── js/
│   ├── script.js                # Controlador principal: seguridad, antispam, preloader (3s), partículas canvas, carrito y WhatsApp
│   ├── hero-carousel.js         # Controlador orbital del hero: 8 diapositivas, autoplay 3s, pausa en hover y sincronización HUD
│   ├── beast-cursor.js          # Motor de cursor interactivo: aura eléctrica, partículas, relámpagos y guardas de canvas
│   └── electric-effect.js       # Motor de inclinación 3D reactiva al cursor y alternancia de temas neón
│
├── assets/                      # Identidad visual, logotipos WebP/SVG, imágenes de alta fidelidad para el hero y productos
│
├── DOCUMENTACION_PROYECTO.md    # Especificación técnica exhaustiva del sistema y arquitectura (este documento)
└── README.md                    # Documentación general del repositorio, guía de ejecución y manual de usuario
```

---

## 3. Pila Tecnológica (Stack)

* **HTML5 Semántico, Accesible y Seguro**:
  * Marcado accesible con etiquetas estándar (`header`, `nav`, `main`, `section`, `article`, `footer`, `dialog`, `canvas`, `svg`, `button`).
  * Botones de alternancia de navegación móvil provistos de atributos ARIA (`aria-label`, `aria-expanded`, `aria-controls="navLinks"`).
  * Cabeceras de seguridad incorporadas: `X-Content-Type-Options: nosniff`, `referrerpolicy: strict-origin-when-cross-origin`.
  * Protección en enlaces salientes con `rel="noopener noreferrer"`.
* **CSS3 Vanilla Avanzado**:
  * Sistema de diseño basado en **Tokens / Custom Properties** (`var(--neon-blue)`, `var(--dark-bg)`, etc.).
  * Efectos de cristal esmerilado con **Glassmorphism** (`backdrop-filter: blur(12px)`).
  * Aceleración por hardware mediante `transform: translate3d()` y `will-change: transform`.
  * Filtros SVG procedurales combinados con CSS (`feTurbulence`, `feDisplacementMap`, `feOffset`).
  * Layouts modernos y fluidos utilizando **CSS Grid** (incluyendo el sistema simétrico de 2 columnas en el footer) y **Flexbox**.
  * Medios de consulta adaptativos (**Media Queries**) para móviles (≤480px, ≤768px), tablets (≤992px) y escritorios (≥1200px).
* **JavaScript Vanilla (ES6+) Moderno**:
  * Arquitectura pura sin dependencias de frameworks ni librerías pesadas (cero jQuery, cero bloatware).
  * Programación defensiva con null-checks en manipulación del DOM y comprobación de APIs gráficas (`typeof C.getContext === 'function'`).
  * APIs nativas del navegador: `IntersectionObserver`, `requestAnimationFrame`, `HTML5 Canvas 2D Context`, `matchMedia`, `performance.now()`, `visibilitychange`.
* **Fuentes e Iconografía**:
  * Google Fonts: Familias *Inter* y *Outfit* (lectura técnica, futurista y limpia).
  * Font Awesome 6.4+: Iconografía vectorial optimizada.
  * Gráficos vectoriales SVG dinámicos integrados en el DOM para trazados de circuitos cibernéticos y arcos de pulso.

---

## 4. Módulos y Subsistemas Principales

### 4.1 Blindaje Máximo de Seguridad y Motor Antispam (`SecurityShield`)
* **Trampa Honeypot Silenciosa (`website_hp`)**:
  * Campos trampa incorporados con posición fuera de pantalla (`left: -9999px; opacity: 0; pointer-events: none;`) en `#checkout-form` (`#check-hp-field`) y `#visita-tecnica-form` (`#visit-hp-field`).
  * Los usuarios humanos nunca interactúan con este campo; los robots automatizados lo completan de forma predecible. Cualquier envío con valor en este campo es cancelado de inmediato.
* **Trampa de Velocidad Inhumana de Bot**:
  * Bloquea envíos procesados en menos de 1.2 segundos desde la carga inicial de la página.
* **Limitador de Tasa / Rate Limiting (Flood Cooldown)**:
  * Restricción de 8 segundos entre envíos sucesivos por cliente para evitar saturación de mensajes repetitivos.
* **Filtro Heurístico contra Inyecciones y Spam Comercial**:
  * Detección y bloqueo proactivo de patrones maliciosos: scripts (`<script>`, `javascript:`), atributos XSS (`onload=`, `onerror=`), enlaces de phishing o spam automatizado.
* **Protección Anti-Clickjacking (Frame Buster)**:
  * Validación preventiva de contexto de ventana (`window.top === window.self`) para evitar que el sitio sea clonado o incrustado en iframes maliciosos.
* **Sanitización Integral**:
  * Funciones de escape estricto (`escapeHTML()`, `sanitizeForMessage()`) para todo contenido dinámico renderizado en el carrito o transferido a URLs de WhatsApp.

### 4.2 Carrusel Circular Orbital del Hero (`js/hero-carousel.js` y `css/hero-carousel.css`)
* **8 Diapositivas Temáticas de Alta Fidelidad**:
  1. *Transforma tu Hogar en Inteligente* (Iluminación biodinámica y clima a 21°C).
  2. *Seguridad y Vigilancia con IA* (Biometría, cámaras 4K y monitoreo 24/7).
  3. *Espacios Vivos y Luz Circadiana* (Ambientes lumínicos circadianos y bienestar).
  4. *Cine en Casa & Audio Inmersivo Dolby* (Acústica multizona y cortinas motorizadas).
  5. *Automatización Exterior y Piscinas Smart* (Piscinas climatizadas y riego predictivo).
  6. *Torres Corporativas y Protocolos KNX* (Automatización comercial bajo estándar KNX).
  7. *Eficiencia Energética y Gestión Solar* (Gestión de paneles solares y micro-redes).
  8. *Tu Hogar en tu Mano y por Comandos de Voz* (App centralizada, Alexa y Google Home).
* **Rotación Automática Continua (Autoplay de 3s)**:
  * El carrusel avanza de manera fluida y armónica cada 3000 ms (`AUTOPLAY_INTERVAL = 3000`).
  * **Sincronización con el Preloader**: El temporizador de autoplay no comienza a oscilar en segundo plano durante la carga; espera a que el precargador complete su ciclo o a que expire el tiempo de seguridad para comenzar la rotación.
  * **Pausa al Posar el Cursor (`mouseenter` / `mouseleave`)**: Al situar el puntero del mouse sobre el contenedor `#heroCircularShowcase`, la rotación se detiene para permitir la interacción o inspección detallada. Al retirar el mouse, el intervalo se reactiva automáticamente.
  * **Reset en Navegación Manual**: Al hacer clic en una diapositiva orbital, en los puntos indicadores o en las flechas de dirección, el temporizador de autoplay se reinicia desde cero para evitar transiciones superpuestas.
* **Efectos e Indicadores Holográficos HUD**:
  * **Retícula Segmentada (`.slide-hud-reticle`)**: Anillo perimétrico discontinuo que gira de manera constante a 18s en la diapositiva en primer plano.
  * **Pulso Sonar (`.slide-sonar-ping`)**: Onda circular expansiva que emana con atenuación cúbica desde la miniatura activa.
  * **Badge de Estado Holográfico (`.slide-status-badge`)**: Cápsula oscura inferior con microtexto `SISTEMA 0X` y un indicador LED verde parpadeante (`.badge-dot`).
  * **Ondas Sonar del Núcleo Central (`.core-sonar-ring`)**: Anillos concéntricos (`wave-1`, `wave-2`, `wave-3`) que se propagan desde el centro del carrusel hacia afuera.
  * **Lente y Reflejo Óptico Curvado**: Gradiente superficial de brillo en 135° (`.hero-carousel-slide::before`) y sombra interior de profundidad viñeta (`::after`).

### 4.3 Precargador Cibernético Futurista (HUD Preloader)
* **Duración Calibrada a 3 Segundos**: El bucle de interpolación (`step`) procesa el avance del porcentaje (0% a 100%) a lo largo de un intervalo mínimo de 3000 ms (`minDuration = 3000`), ofreciendo una transición estética de bienvenida de nivel cinematográfico.
* **Curva Armónica Suave**: La progresión numérica y la barra de carga utilizan una curva de aceleración y desaceleración que evita saltos abruptos.
* **Temporizador Failsafe de Seguridad (3500ms)**: Si la red presenta latencia extrema o retrasos imprevistos, un temporizador forzado (`safetyTimer = 3500`) garantiza la remoción total del precargador para nunca bloquear la experiencia del usuario.

### 4.4 Pie de Página Simétrico en 2 Columnas Centradas
* **Estructura en Grid Equilibrado (1fr 1fr)**:
  * Implementado de manera uniforme en `index.html`, `proyectos.html` y `tienda.html` con un contenedor centrado (`max-width: 1040px; margin: 0 auto 35px`).
  * **Columna 1 (Marca y Redes)**: Logotipo oficial de SAIDEX 4.0, texto descriptivo corporativo y fila de iconos sociales interactivos de neón (Facebook, Instagram, YouTube, TikTok).
  * **Columna 2 (Contacto y Asesoría)**: Módulo de contacto enmarcado con separador vertical neón (`border-left: 1px solid rgba(0, 180, 255, 0.25)`), sombra perimétrica azul y tarjeta pill con teléfono, WhatsApp y correo corporativo.
* **Adaptabilidad Móvil Responsiva**: En resoluciones inferiores a 991px, el grid transmuta automáticamente a 1 columna centrada verticalmente, eliminando el borde izquierdo e introduciendo una sutil división superior con sombras difusas.

### 4.5 Degradado Cinemático Adaptativo en Móviles (Hero Overlay)
* En pantallas pequeñas (≤991px), el fondo del Hero incorpora un overlay de doble capa:
  * **Gradiente Horizontal**: Oscuridad pronunciada al 92% en el extremo izquierdo (0% a 32%), desvaneciéndose gradualmente a partir de la mitad hacia la derecha (50% a 100%), permitiendo apreciar los gráficos, la iluminación de fondo y la estructura orbital.
  * **Gradiente Vertical**: Atenuación en los extremos superior e inferior para enmarcar el contenido sin perturbar el contraste de lectura.

### 4.6 Motor Beast Breathing Cursor (`js/beast-cursor.js`)
* **Efectos Visuales e Innovación Cinemática**:
  * Núcleo del puntero reactivo 1:1 de respuesta instantánea con estela parabólica feral.
  * Emisión de partículas de polvo cósmico, escombros rotacionales y chispas de plasma de alta definición.
  * Relámpagos de aura eléctrica, ráfagas de garras (claw bursts) y ondas expansivas (shockwaves).
* **Tolerancia y Guardas Defensivas**:
  * Validación preventiva `if (!C || typeof C.getContext !== "function") return;` previa a la inicialización, asegurando inmunidad total contra caídas en entornos que carecen de soporte de canvas 2D acelerado.
* **Seguimiento 1:1 y Ahorro de Recursos**:
  * Cero desfase temporal (`ease`), eliminación de lienzos redundantes y desconexión automática en dispositivos móviles mediante `(pointer: coarse) and (hover: none)`.

### 4.7 Motor de Rayos Eléctricos 3D (`js/electric-effect.js` y `css/electric-effect.css`)
* **Filtros Procedurales con Animación `seed`**: Filtros vectoriales nativos ultraeficientes (`feTurbulence` y `feDisplacementMap` a escala 22-24) que generan arcos voltaicos y rayos en zigzag reales.
* **Streamer Eléctrico Perimetral**: Rayo perimetral enmascarado con núcleo blanco incandescente (`#ffffff`) que explota al posar el cursor (`:hover`, `mouseenter`) o mediante interacción táctil (`:active`).
* **Inclinación Tridimensional Acelerada**: Transformaciones `rotateX` y `rotateY` impulsadas por `translate3d()` con activación quirúrgica de `will-change`.

### 4.8 Módulo de Tienda Virtual y Carrito (`tienda.html`)
* **Catálogo de 30 Productos**: Dispositivos clasificados por categorías (Iluminación, Seguridad, Climatización, Energía, Audio/Video, Accesorios).
* **Filtros Dinámicos**: Filtrado instantáneo en el cliente mediante botones tipo píldora (`data-category`).
* **Animación "Vuelo al Carrito" (Fly-to-Cart)**: Curva parabólica en tiempo real entre la tarjeta del producto y el icono del carrito.
* **Carrito Lateral (Cart Drawer)**: Panel retráctil con control de cantidades, eliminación de ítems y cálculo de total en memoria.
* **Checkout Blindado a WhatsApp**: Formulario modal para datos de envío con trampa honeypot y despacho formal formateado a WhatsApp oficial (+51 906 681 667).

---

## 5. Prevención de Congelamientos de Pantalla y Fluidez

1. **Resolución de Congelamientos en `tienda.html` y `proyectos.html`**:
   * En `proyectos.html`, los 18 elementos `.glass-overlay` con `backdrop-filter: blur(10px)` permanecen ocultos con `opacity: 0; visibility: hidden; pointer-events: none;` mientras están en reposo. Sólo la tarjeta activa ejecuta el cálculo composicional de GPU.
   * En `tienda.html`, la cuadrícula de 30 productos cuenta con filtros SVG de baja sobrecarga que evitan re-rasterizaciones excesivas en Chromium.
2. **Respuesta Instantánea del Cursor Feral**:
   * Sincronización 1:1 sin fricción matemática, garantizando movimientos fluidos a 60-120 FPS.
3. **Scroll Fluido en Pantallas Táctiles (iOS / Android)**:
   * Directiva `background-attachment: scroll !important` en dispositivos táctiles (`pointer: coarse`), eliminando el lag de scroll por repintado en Safari móvil y Chrome.
4. **Ciclo de Vida de Pestañas Inactivas**:
   * Pausa completa de animaciones de canvas y bucles `requestAnimationFrame` al ocultar la pestaña (`document.hidden === true`).
5. **Defensa contra Excepciones Nulas en Métricas**:
   * La función `animate(counter)` valida la existencia del nodo y de su objeto dataset (`if (!counter || !counter.dataset) return;`), evitando interrupciones en la inicialización de scripts.

---

## 6. Estándares de Accesibilidad y Buenas Prácticas

* **Contraste Cromático**: Paleta diseñada sobre fondos oscuros profundos (`#020617`, `#030712`) con textos en blanco puro (`#FFFFFF`) y gris cibernético (`#94A3B8`), cumpliendo los estándares de legibilidad WCAG AA.
* **Navegación Unificada**: Las tres páginas (`index.html`, `proyectos.html`, `tienda.html`) disponen de la misma barra de navegación con accesos cruzados consistentes.
* **Elementos Semánticos**: Los botones de menú móvil utilizan elementos nativos `<button>` con atributos de accesibilidad (`aria-label="Abrir menú"`, `aria-expanded="false"`, `aria-controls="navLinks"`).
* **Navegación por Teclado**: Soporte para la tecla `Escape` en el cierre de modales y estilos visibles de foco (`:focus-visible`).

---

## 7. Canales Oficiales y Configuración

* **Número Telefónico Oficial (WhatsApp)**: `+51 906 681 667` (`51906681667`).
* **Ubicación y Cobertura**: Lima, Perú (Servicio y proyectos a nivel nacional).
* **Canales Sociales**:
  * [Facebook](https://www.facebook.com/share/1DKk2KMXqo/)
  * [Instagram](https://www.instagram.com/capri4431?igsh=cWtvcjdqN3Vhbjgz)
  * [YouTube](https://youtube.com/@jesusronaldocesararellanas5388/community?si=2w9Oj341CV9DP4Bu)
  * [TikTok](https://www.tiktok.com/@arellanasanchez2006)

---

<p align="center">
  &copy; 2026 <strong>SAIDEX 4.0 Domótica y Automatización</strong>. Documentación técnica de arquitectura.
</p>
