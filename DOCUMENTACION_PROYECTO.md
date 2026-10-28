# Documentación Técnica Integral del Proyecto SAIDEX 4.0

## 1. Visión General del Proyecto
**SAIDEX 4.0 - Domótica y Automatización** es una plataforma web estática de grado corporativo y vanguardia tecnológica, diseñada bajo una estética futurista, cibernética y de alta fidelidad visual (Cyberpunk / Neón 3D). La solución combina una arquitectura frontend ultrarrápida y libre de dependencias externas pesadas con una experiencia inmersiva compuesta por:
* Un **Hero Principal Cinemático 3D** con composición visual de alta resolución, efecto de corriente eléctrica letra por letra (`.elec-char`), botones de acción rápida y superposiciones ambientales neón.
* Un **precargador cibernético (HUD Preloader)** con animación y barra porcentual calibradas a una duración cinemática de 3 segundos, circuitos laterales SVG con haces de pulso láser que viajan en bucle continuo de un punto a otro, animación de título letra por letra idéntica al Hero, y respaldado por un doble sistema de seguridad contra congelamientos (temporizador JS de 3.5s y regla de respaldo forzado en CSS puro a los 4s).
* Un **pie de página (Footer) en el index rediseñado a 2 columnas cibernéticas**:
  * **Columna 1 (Identidad y Redes)**: Logotipo, onda eléctrica secuencial carácter por carácter que recorre "SAIDEX 4.0" y "DOMÓTICA Y AUTOMATIZACIÓN", descripción corporativa y botones sociales circulares con etiquetas descriptivas inferiores.
  * **Columna 2 (Panel HUD de Contacto Directo)**: Tarjeta cyber con badges de disponibilidad 24/7, botones pill interactivos de WhatsApp, llamada directa y correo electrónico, además de horarios de atención técnica.
  * **Divisor de Circuito de Fluido Eléctrico**: SVG perimétrico a todo lo ancho con haces de láser luminiscentes (`circuit-pulse-beam`, `circuit-pulse-core`) que recorren los nodos en bucle continuo.
* Un **motor de rayos eléctricos 3D** con filtros SVG de turbulencia fractal e inclinación de perspectiva en tiempo real.
* Un **lienzo canvas 2D de partículas** con nodos neuronales interactivos y pulsos de circuito con pausa automática fuera de pantalla.
* Una **tienda virtual interactiva** con 30 productos de domótica clasificados por categoría, animación parabólica de adición ("vuelo al carrito"), carrito en memoria y checkout directo por WhatsApp.
* Un **overlay cinematográfico adaptativo en dispositivos móviles** que garantiza legibilidad óptima sobre los fondos luminosos.
* Un **blindaje de seguridad integral** contra ataques de inyección (XSS), secuestro de pestañas, clickjacking y motores de spam automatizados mediante trampas Honeypot invisibles y limitadores de tasa.
* Una **auditoría de código libre de errores**, con etiquetas HTML balanceadas, sintaxis JS validada sin excepciones, eliminación de activos obsoletos y accesibilidad semántica nativa.

---

## 2. Arquitectura de Archivos y Directorios

```plaintext
SAIDEX-4.0--DOMOTICA-Y-AUTOMATIZACION/
│
├── index.html                   # Landing principal (Hero 3D cinemático, precargador con circuitos y título animado, soluciones, proyectos, modal y footer cyber 2 col)
├── tienda.html                  # Tienda virtual (Catálogo de 30 productos, filtros, carrito lateral, checkout a WhatsApp y footer clásico)
├── proyectos.html               # Galería y vitrina técnica interactiva de proyectos residenciales, comerciales e industriales y footer clásico)
│
├── css/
│   ├── style.css                # Hoja de estilos global, variables CSS, preloader HUD con failsafe CSS, navbar, grid responsive y footer cyber
│   ├── electric-effect.css      # Sistema de efectos eléctricos 3D, filtros de turbulencia SVG y animación letra por letra
│   └── store.css                # Estilos visuales de la tienda, carrito retráctil, toast HUD y modales responsivos
│
├── js/
│   ├── script.js                # Controlador principal: seguridad, antispam, preloader (3s), partículas canvas, carrito y WhatsApp
│   └── electric-effect.js       # Motor de inclinación 3D reactiva y alternancia de temas neón
│
├── assets/                      # Identidad visual, logotipos WebP/SVG, fondos de alta fidelidad y fotografías de proyectos
│   └── store/                   # Catálogo de imágenes optimizadas de los 30 productos de domótica
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
  * Layouts modernos y fluidos utilizando **CSS Grid** y **Flexbox**.
  * Medios de consulta adaptativos (**Media Queries**) para móviles (≤360px, ≤540px, ≤768px), tablets (≤992px) y escritorios (≥1200px).
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

### 4.2 Precargador Cibernético Futurista (HUD Preloader)
* **Circuito Lateral SVG con Haces Láser en Bucle**:
  * Paneles laterales izquierdo y derecho (`cyber-circuits-left` y `cyber-circuits-right`) que renderizan circuitos cibernéticos con haces luminiscentes (`circuit-pulse-beam`, `circuit-pulse-core`, `circuit-pulse-sub`) viajando de un punto origen hacia los nodos terminales en trayectorias angulares sci-fi continuas.
  * Nodos terminales con halos expansivos de energía (`circuit-node-halo`).
  * En dispositivos móviles (< 540px) se ocultan automáticamente (`display: none !important`) para garantizar el 100% del ancho para el HUD central sin sobrecargar la pantalla ni provocar desbordes horizontales.
* **Título con Animación Eléctrica Letra por Letra**:
  * La tipografía de la marca `SAIDEX 4.0` utiliza la clase `hero-electric-title` con elementos individuales `.elec-char` provistos de la variable CSS `--c-idx: 0` hasta `--c-idx: 8`.
  * La corriente eléctrica recorre las letras de forma secuencial y armónica, replicando exactamente el efecto del título del Hero.
* **Arquitectura de Doble Capa Anti-Congelamiento**:
  1. **Capa JS**: Temporizador fluido con curva de avance acelerada que culmina en 3000 ms, agregando la clase `.is-loaded` y removiendo el precargador con `opacity: 0` y `visibility: hidden`.
  2. **Capa Failsafe en CSS Puro**: Keyframe `@keyframes preloaderHardFailsafe` de 4.0 segundos que fuerza el desvanecimiento y la desactivación de eventos de puntero (`pointer-events: none !important`), garantizando que la pantalla **nunca quede congelada** bajo ninguna circunstancia, incluso si la ejecución de JavaScript se pausa o retrasa en dispositivos con baja batería o modos de ahorro de energía.

### 4.3 Pie de Página Cibernético Rediseñado (`index.html`)
* **Columna 1: Identidad Corporativa, Efecto Letra por Letra y Redes Sociales**:
  * Título dinámico que descompone `SAIDEX 4.0` y `DOMÓTICA Y AUTOMATIZACIÓN` en caracteres animados secuenciales (`.elec-char`).
  * Botones de redes sociales circulares (Facebook, Instagram, LinkedIn, TikTok, YouTube) con etiquetas semánticas inferiores y efectos de brillo neón en `hover`.
* **Columna 2: Panel HUD de Contacto y Asistencia**:
  * Tarjeta con borde cibernético y badge activo `DISPONIBLE 24/7`.
  * Tres botones pill de contacto rápido con micro-interacciones:
    * WhatsApp Oficial directo al asesor técnico (+51 906 681 667).
    * Enlace `tel:` directo para llamadas telefónicas.
    * Enlace `mailto:` directo para cotizaciones formales por correo electrónico.
  * Ficha de soporte técnico con horarios de atención inmediata.
* **Divisor de Circuito Eléctrico SVG**:
  * Separador a todo el ancho entre el contenido y el pie de página con arcos de energía eléctrica viajando en bucle continuo de lado a lado.
* **Preservación de Footers Secundarios**:
  * Los pies de página de `proyectos.html` y `tienda.html` se mantienen con su estructura canónica ya establecida para no alterar sus funcionalidades respectivas.

### 4.4 Efectos Eléctricos 3D y Filtros SVG (`js/electric-effect.js` y `css/electric-effect.css`)
* **Filtros Procedurales de Turbulencia Fractal**:
  * Tres filtros SVG (`#turbulent-1`, `#turbulent-2`, `#turbulent-3`) con diferentes frecuencias de ruido fractal (`baseFrequency: 0.04 - 0.09`) y desplazamiento dinámico (`feDisplacementMap`).
  * Semillas animadas mediante etiquetas `<animate attributeName="seed">` nativas para cero consumo de CPU/JS.
* **Inclinación de Perspectiva 3D Reactiva**:
  * Escucha pasiva de eventos de movimiento de ratón con limitación temporal (`requestAnimationFrame`) que aplica transformaciones en perspectiva (`rotateX`, `rotateY`, `translateZ`) a tarjetas y contenedores de alta tecnología.

### 4.5 Lienzo de Partículas Neuronales (`Canvas 2D`)
* Renderizado a 60 FPS de 70 nodos interconectados mediante líneas de proximidad euclidiana.
* Integración con `IntersectionObserver` para pausar el ciclo de renderizado cuando la sección no se encuentra visible en el viewport, reduciendo el consumo de batería en dispositivos móviles.

### 4.6 Tienda Virtual y Carrito de Compras en Memoria (`css/store.css` y `tienda.html`)
* Catálogo de 30 productos con filtrado dinámico en tiempo real sin recargas de página.
* Animación parabólica de vuelo de productos hacia el botón del carrito (`Web Animations API`).
* Panel lateral deslizable (Off-canvas) con gestión completa de items, incremento/decremento y cálculo instantáneo de totales.
* Formulario de checkout modal protegido con Honeypot y despacho formal formateado hacia WhatsApp.

---

## 5. Prevención de Congelamientos y Rendimiento

1. **Aceleración por GPU**:
   * Todas las transiciones y animaciones hacen uso exclusivo de `transform` y `opacity` (`will-change: transform, opacity`).
2. **Eliminación de Elementos Obsoletos**:
   * Código superfluo, carrusel circular discontinuado y controladores de cursor descontinuados han sido purgados para mantener el bundle limpio y ligero.
   * Todos los archivos de imagen sin uso activo fueron eliminados de `assets/`, reduciendo el peso innecesario.
3. **Failsafe Universal de Precargador**:
   * Blindaje con doble seguro (temporizador JS + CSS keyframe) para garantizar acceso inmediato al contenido en smartphones de gama de entrada y conexiones lentas.
4. **Respeta Preferencias de Accesibilidad**:
   * `@media (prefers-reduced-motion: reduce)` desactiva animaciones decorativas no esenciales para usuarios sensibles a efectos de movimiento o parpadeo.

---

## 6. Canales de Contacto Oficial

* **Empresa**: SAIDEX 4.0 — Domótica y Automatización
* **Teléfono / WhatsApp**: +51 906 681 667
* **Correo Electrónico**: contacto@saidex.com
* **Ubicación**: Lima, Perú
