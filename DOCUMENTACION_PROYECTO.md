# Documentación Técnica Integral del Proyecto SAIDEX 4.0

## 1. Visión General del Proyecto
**SAIDEX 4.0 - Domótica y Automatización** es una plataforma web estática de grado corporativo y vanguardia tecnológica, diseñada bajo una estética futurista, cibernética y de alta fidelidad visual (Cyberpunk / Neón 3D). La solución combina una arquitectura frontend ultrarrápida y libre de dependencias externas pesadas con una experiencia inmersiva compuesta por:
* Un **carrusel circular orbital dinámico** en el Hero con 8 diapositivas de alta resolución y controles sincronizados.
* Un **motor de cursor Beast Breathing** con aura eléctrica reactiva, partículas cósmicas y estela luminosa acelerada por GPU.
* Un **motor de rayos eléctricos 3D** con filtros SVG de turbulencia fractal e inclinación de perspectiva en tiempo real.
* Un **lienzo canvas 2D de partículas** con nodos neuronales interactivos y pulsos de circuito.
* Una **tienda virtual interactiva** con 30 productos de domótica, animación parabólica de adición ("vuelo al carrito"), carrito en memoria y checkout directo por WhatsApp.
* Un **blindaje de seguridad integral** contra ataques de inyección (XSS), secuestro de pestañas, clickjacking y motores de spam automatizados mediante trampas Honeypot invisibles y limitadores de tasa.
* Una **arquitectura de rendimiento garantizado** contra congelamientos de pantalla en cualquier dispositivo (móviles, tablets, laptops y PC).

---

## 2. Arquitectura de Archivos y Directorios

```plaintext
SAIDEX-4.0--DOMOTICA-Y-AUTOMATIZACION/
│
├── index.html                   # Landing principal (Hero orbital 3D, soluciones, proyectos destacados, métricas y modal de visita)
├── tienda.html                  # Tienda virtual (Catálogo de 30 productos, filtros por categoría, carrito lateral, checkout a WhatsApp)
├── proyectos.html               # Galería y vitrina técnica interactiva de proyectos residenciales, comerciales e industriales
│
├── css/
│   ├── style.css                # Hoja de estilos global, variables CSS, preloader HUD, navbar translúcido y circuitos del footer
│   ├── electric-effect.css      # Sistema de efectos eléctricos 3D, filtros de turbulencia SVG y optimización móvil
│   ├── hero-carousel.css        # Estilos del carrusel circular orbital del hero, badges, títulos dinámicos y controles
│   └── store.css                # Estilos visuales de la tienda, carrito retráctil, toast HUD y modales responsivos
│
├── js/
│   ├── script.js                # Controlador principal: seguridad, antispam, preloader, partículas canvas, carrito y WhatsApp
│   ├── hero-carousel.js         # Controlador orbital del hero: 8 diapositivas, transiciones circulares, flechas y soporte táctil
│   ├── beast-cursor.js          # Motor de cursor interactivo: aura eléctrica, partículas, relámpagos y gestión de ciclo de vida
│   └── electric-effect.js       # Motor de inclinación 3D reactiva al cursor y alternancia de temas neón
│
├── assets/                      # Identidad visual, logotipos WebP/SVG, imágenes de alta fidelidad para el hero y productos
│
├── DOCUMENTACION_PROYECTO.md    # Especificación técnica exhaustiva del sistema y arquitectura (este documento)
└── README.md                    # Documentación general del repositorio, guía de ejecución y manual de usuario
```

---

## 3. Pila Tecnológica (Stack)

* **HTML5 Semántico y Seguro**:
  * Marcado accesible con etiquetas estándar (`header`, `nav`, `main`, `section`, `article`, `footer`, `dialog`, `canvas`, `svg`).
  * Cabeceras de seguridad incorporadas: `X-Content-Type-Options: nosniff`, `referrerpolicy: strict-origin-when-cross-origin`.
  * Protección en enlaces salientes con `rel="noopener noreferrer"`.
* **CSS3 Vanilla Avanzado**:
  * Sistema de diseño basado en **Tokens / Custom Properties** (`var(--neon-blue)`, `var(--dark-bg)`, etc.).
  * Efectos de cristal esmerilado con **Glassmorphism** (`backdrop-filter: blur(12px)`).
  * Aceleración por hardware mediante `transform: translate3d()` y `will-change: transform`.
  * Filtros SVG procedurales combinados con CSS (`feTurbulence`, `feDisplacementMap`, `feOffset`).
  * Layouts modernos y fluidos utilizando **CSS Grid** y **Flexbox**.
  * Medios de consulta adaptativos (**Media Queries**) para móviles (≤480px, ≤768px), tablets (≤992px) y escritorios (≥1200px).
* **JavaScript Vanilla (ES6+) Moderno**:
  * Arquitectura pura sin dependencias de frameworks ni librerías pesadas (cero jQuery, cero bloatware).
  * APIs nativas del navegador: `IntersectionObserver`, `requestAnimationFrame`, `HTML5 Canvas 2D Context`, `matchMedia`, `performance.now()`, `visibilitychange`.
* **Fuentes e Iconografía**:
  * Google Fonts: Familia *Inter* (lectura técnica y limpia).
  * Font Awesome 6.4+: Iconografía vectorial optimizada.
  * Gráficos vectoriales SVG dinámicos integrados en el DOM para trazados de circuitos cibernéticos y arcos de pulso.

---

## 4. Módulos y Subsistemas Principales

### 4.1 Blindaje Máximo de Seguridad y Motor Antispam (`SecurityShield`)
* **Trampa Honeypot Silenciosa (`website_hp`)**:
  * Campos trampa incorporados con posición fuera de pantalla (`left: -9999px; opacity: 0; pointer-events: none;`) en `#checkout-form` (`#check-hp-field`) y `#visita-tecnica-form` (`#visit-hp-field`).
  * Los usuarios humanos nunca ven ni tocan este campo; los robots automatizados lo rellenan indiscriminadamente. Cualquier envío con valor en este campo es neutralizado de inmediato.
* **Trampa de Velocidad Inhumana de Bot**:
  * Bloquea envíos procesados en menos de 1.2 segundos desde la carga inicial de la página.
* **Limitador de Tasa / Rate Limiting (Flood Cooldown)**:
  * Restricción de 8 segundos entre envíos sucesivos por cliente para evitar spam reiterado hacia la API de WhatsApp.
* **Filtro Heurístico contra Inyecciones y Spam Comercial**:
  * Detección y bloqueo proactivo de patrones maliciosos: scripts (`<script>`, `javascript:`), atributos XSS (`onload=`, `onerror=`), enlaces de phishing o spam automatizado.
* **Protección Anti-Clickjacking (Frame Buster)**:
  * Validación preventiva de contexto de ventana (`window.top === window.self`) para evitar que el sitio sea incrustado en iframes maliciosos de terceros.
* **Sanitización Integral**:
  * Funciones de escape estricto (`escapeHTML()`, `sanitizeForMessage()`) para todo contenido dinámico renderizado en el carrito o concatenado en las URLs de WhatsApp.

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
* **Mecánica Orbital**:
  * Rueda orbital 3D interactiva sincronizada con transiciones circulares de títulos, descripciones, insignias (`badges`) y píldoras (`pills`).
  * Fondo dinámico de doble capa con desvanecimiento cruzado (`cross-fade`) de alta velocidad.
  * Controles manuales mediante flechas de navegación (`heroArrowLeft`, `heroArrowRight`), miniaturas laterales y soporte para gestos táctiles de deslizamiento (*swipe*) en móviles.
  * **Calibración Óptica Vertical**: Ajuste ergonómico de la altura de los textos (`.hero-circular-text-stage` y `.hero-content`) tanto en escritorio como en dispositivos móviles, elevando las letras para una alineación equilibrada con el carrusel circular y eliminando espacios muertos inferiores o colisiones con controles.
  * Cero intervalos automáticos invasivos para garantizar la comodidad y el control total del usuario.

### 4.3 Motor Beast Breathing Cursor (`js/beast-cursor.js`)
* **Efectos Visuales e Innovación Cinemática**:
  * Núcleo del puntero reactivo 1:1 de respuesta instantánea con estela parabólica feral.
  * Emisión de partículas de polvo cósmico, escombros rotacionales y chispas de plasma de alta definición.
  * Relámpagos de aura eléctrica, ráfagas de garras (claw bursts) y ondas expansivas (shockwaves) generadas por clics e interacciones dinámicas.
  * Shimmer ambiental holográfico integrado en lienzo de alta resolución sin capas DOM redundantes.
* **Optimización de Rendimiento y Prevención de Congelamiento de Cursor**:
  * **Seguimiento 1:1 Instantáneo**: Eliminación de amortiguación excesiva en el cálculo de interpolación `ease`. El puntero físico y el núcleo visual se sincronizan inmediatamente con cero retraso de entrada (input lag), previniendo cualquier sensación de cursor pegado o congelado en pantallas densas como `tienda.html` y `proyectos.html`.
  * **Arquitectura de Canvas Único**: Fusión de la capa ambiental HD directamente en el lienzo principal `#beast-cursor-c`, retirando un canvas completo de pantalla completa (`#beast-cursor-hd`) para ahorrar 50% de memoria gráfica VRAM y eliminar el costo de composición doble en GPU.
  * **Calibración DPR Inteligente**: Limitación del factor de escala de píxeles del dispositivo (`devicePixelRatio`) a un máximo de 1.5x en pantallas Retina/4K, manteniendo nitidez cristalina sin sobrecargar la tasa de relleno (fillrate).
  * **Regla Universal de Ocultamiento de Puntero OS**: Regla `@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }` que evita conflictos y parpadeos entre el puntero nativo del sistema operativo y el cursor cinemático en tarjetas interactivas (`.product-card`, `.project-card`, botones, filtros).
  * **Limitación y Reutilización de Piscinas de Partículas**: Control estricto de ondas y destellos (`waves`, `flashes`) para prevenir fugas de memoria o recolección de basura invasiva durante clics sucesivos.
  * **Detección Táctil Coarse**: Desactivado de forma automática en dispositivos móviles y tablets que carecen de ratón físico (`(pointer: coarse) and (hover: none)`), evitando cualquier sobrecarga de la GPU móvil.
  * **Pausa en Segundo Plano**: Listener de `visibilitychange` que detiene el bucle de renderizado `requestAnimationFrame` cuando la pestaña se minimiza o pasa a segundo plano, ahorrando batería y CPU.

### 4.4 Lienzo Canvas 2D de Constelación de Partículas (`js/script.js`)
* Nodos neuronales con conexiones trazadas por distancia euclidiana en el Hero de `index.html`.
* Optimización por lotes: una única llamada `stroke()` y `fill()` por fotograma para asegurar 60-120 FPS sin layout thrashing.
* Control de visibilidad con `IntersectionObserver`: la animación se detiene cuando el usuario se desplaza fuera de la sección Hero.
* Pausa en segundo plano sincronizada con `visibilitychange`.

### 4.5 Motor de Inclinación 3D y Rayos Eléctricos (`js/electric-effect.js` y `css/electric-effect.css`)
* **Filtros Procedurales de Rayos Eléctricos con Animación `seed` (Escala 22-24)**: Filtros vectoriales nativos ultraeficientes (`feTurbulence` con animación SMIL de `seed` aleatoria a 10 saltos por segundo y `feDisplacementMap` a escala 22-24) que deforman el trazo en arcos voltaicos y rayos en zigzag reales sin la sobrecarga de `color-dodge`, asegurando 60-120 FPS sin latencia.
* **Streamer Eléctrico Perimetral y Núcleo Incandescente**: Incorporación de un rayo streamer perimetral de alta frecuencia (`conic-gradient` enmascarado en el borde) y núcleo blanco puro (`#ffffff`) con jitter de alta velocidad (`electricArcJitter`), proyectando chispas y descargas vivas alrededor de toda la silueta de la tarjeta.
* **Resalte Máximo al Pasar el Mouse (Hover / Active Universal)**:
  * **En Reposo**: Las tarjetas presentan una estética cyber limpia y oscura (`opacity: 0` en las capas de rayos), eliminando cualquier carga sobre la CPU/GPU durante el desplazamiento y la lectura.
  * **Al Pasar el Mouse (`:hover`, `mouseenter`) o Tocar (`:active`, `electric-active`)**: Los rayos eléctricos en zigzag y el streamer incandescente explotan instantáneamente (`opacity: 1`), generando un contraste visual radical e inconfundiblemente eléctrico.
* **Compatibilidad Universal sin Bloqueos**: Detección unificada en `js/electric-effect.js` y `css/electric-effect.css` para que tanto el cursor del ratón (en desktops, ultrabooks y laptops táctiles) como la interacción táctil (en móviles y tablets) disparen el efecto eléctrico sin conflictos de especificidad CSS.
* **Cálculo Tridimensional Acelerado por GPU**: Inclinación espacial en tiempo real (`rotateX`, `rotateY`) impulsada mediante `translate3d(0, -9px, 0)`, garantizando promoción a capa de compositor por hardware independiente sin bloqueos del hilo principal.
* **Gestión Quirúrgica de `will-change`**: Activación temporal de `will-change: transform` exclusivamente durante el evento `mouseenter` y liberación inmediata (`will-change: auto`) en `mouseleave` para preservar la memoria de texturas de la GPU.

### 4.6 Módulo de Tienda Virtual y Carrito (`tienda.html`)
* **Catálogo de 30 Productos**: Dispositivos clasificados por categorías (Iluminación, Seguridad, Climatización, Energía, Audio/Video, Accesorios).
* **Filtros Dinámicos**: Filtrado instantáneo en el cliente mediante botones tipo píldora (`data-category`).
* **Animación "Vuelo al Carrito" (Fly-to-Cart)**: Curva parabólica en tiempo real entre la tarjeta del producto y el icono del carrito, con efecto de rebote (`cart-bump-active`) e incremento dinámico de la insignia.
* **Carrito Lateral (Cart Drawer)**: Panel retráctil con control de cantidades, eliminación de ítems y cálculo de total en memoria.
* **Checkout Blindado a WhatsApp**: Formulario modal para datos de envío con trampa honeypot y generación de mensaje formateado hacia WhatsApp oficial (+51 906 681 667).

### 4.7 Módulo de Solicitud de Visita Técnica (`index.html`)
* Formulario modal flotante de agendamiento técnico especializado para proyectos residenciales o corporativos.
* Selector inteligente de fecha (con fecha mínima hoy) y formateador automático de número de teléfono (`+51 900 000 000`).
* Blindaje antispam con trampa honeypot (`#visit-hp-field`), velocidad de bot y limitador de envíos.
* Envío estructurado hacia WhatsApp para atención inmediata por ingenieros especialistas.

---

## 5. Prevención de Congelamientos de Pantalla y Fluidez Móvil y de Escritorio

1. **Resolución de Congelamientos en `tienda.html` y `proyectos.html`**:
   * En `proyectos.html`, los 18 elementos `.glass-overlay` con `backdrop-filter: blur(10px)` ahora permanecen ocultos con `opacity: 0; visibility: hidden; pointer-events: none;` mientras están en reposo. Sólo la tarjeta sobre la que se posa el cursor activa su filtro esmerilado, reduciendo el consumo de GPU en un 95% y eliminando el congelamiento del puntero.
   * En `tienda.html`, la cuadrícula de 30 productos cuenta con renderizado desacoplado y filtros SVG optimizados (`scale="4"`), evitando que el motor de renderizado de Chromium sature la CPU re-rasterizando filtros vectoriales durante el desplazamiento del cursor.
2. **Respuesta Instantánea del Cursor Feral**:
   * Sincronización 1:1 sin retraso por fricción matemática entre la posición real del ratón y el cursor cinemático Beast Breathing, garantizando movimientos suaves a 60-120 FPS sin sensaciones de pegado.
3. **Scroll Fluido en Pantallas Táctiles (iOS / Android)**:
   * En `proyectos.html`, la directiva `background-attachment: fixed` se sustituye automáticamente por `scroll !important` en pantallas táctiles (`(pointer: coarse)` o `max-width: 992px`), eliminando las costosas operaciones de repintado que provocan congelamientos en Safari móvil y Chrome.
4. **Ciclo de Vida de Pestañas Inactivas**:
   * Todos los motores de animación basados en canvas o `requestAnimationFrame` se detienen al ocultar la pestaña (`document.hidden === true`).
5. **Aislamiento de Capas Gráficas**:
   * Uso de `transform: translate3d()` y gestión quirúrgica de `will-change` en los elementos interactivos que contienen sombreados de neón y efectos volumétricos.
6. **Failsafe del Precargador HUD**:
   * Temporizador estricto de seguridad de 1400 ms que garantiza la disolución del preloader bajo cualquier contingencia de red o bloqueo de recursos externos.

---

## 6. Estándares de Accesibilidad y Buenas Prácticas

* **Contraste Cromático**: Paleta diseñada sobre fondos oscuros profundos (`#020617`, `#030712`) con textos en blanco puro (`#FFFFFF`) y gris cibernético (`#94A3B8`), cumpliendo los estándares de legibilidad WCAG AA.
* **Lectores de Pantalla**: Uso sistemático de `aria-label`, `aria-hidden="true"`, `role="dialog"` y `aria-modal="true"` en modales interactivos.
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
