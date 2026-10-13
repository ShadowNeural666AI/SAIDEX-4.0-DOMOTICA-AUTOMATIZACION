# SAIDEX 4.0 — Domótica y Automatización

<p align="center">
  <img src="assets/logo.webp" alt="Logotipo SAIDEX 4.0" width="160" />
</p>

<p align="center">
  <strong>Tecnología avanzada e inteligencia ambiental para transformar tu espacio en un hogar inteligente.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Versi%C3%B3n-4.0.0-00d2ff?style=for-the-badge&logo=codeforces" alt="Versión 4.0.0" />
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS%20Vanilla-00ff88?style=for-the-badge&logo=javascript" alt="Tecnología Frontend" />
  <img src="https://img.shields.io/badge/Dise%C3%B1o-Cyberpunk%20%2F%20Ne%C3%B3n%203D-9d4edd?style=for-the-badge" alt="Diseño Neón 3D" />
  <img src="https://img.shields.io/badge/Rendimiento-60--120%20FPS-0051ff?style=for-the-badge" alt="60-120 FPS" />
  <img src="https://img.shields.io/badge/Seguridad-Blindaje%20Anti--Spam%20%26%20Anti--XSS-ff007f?style=for-the-badge" alt="Blindaje de Seguridad" />
  <img src="https://img.shields.io/badge/Idioma-Espa%C3%B1ol-00e5ff?style=for-the-badge" alt="Idioma Español" />
</p>

---

## 📋 Tabla de Contenidos
1. [Descripción General](#-descripción-general)
2. [Características Destacadas](#-características-destacadas)
3. [Ecosistema de Páginas](#-ecosistema-de-páginas)
4. [Efectos Visuales e Innovación Tecnológica](#-efectos-visuales-e-innovación-tecnológica)
5. [Módulo de Tienda Virtual y Carrito](#-módulo-de-tienda-virtual-y-carrito)
6. [Blindaje de Seguridad y Motor Antispam](#-blindaje-de-seguridad-y-motor-antispam)
7. [Prevención de Congelamientos y Rendimiento](#-prevención-de-congelamientos-y-rendimiento)
8. [Estructura del Proyecto](#-estructura-del-proyecto)
9. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
10. [Guía de Instalación y Ejecución Local](#-guía-de-instalación-y-ejecución-local)
11. [Canales de Contacto Oficial](#-canales-de-contacto-oficial)

---

## 🌐 Descripción General

**SAIDEX 4.0** es una plataforma web estática de grado corporativo desarrollada para la divulgación, comercialización y gestión de proyectos de domótica residencial, comercial e industrial. La plataforma sumerge al usuario en una interfaz interactiva de estética futurista (Cyberpunk / Neón 3D), con micro-animaciones fluidas aceleradas por GPU, un carrusel circular orbital sincronizado en el Hero, un motor de cursor Beast Breathing con relámpagos interactivos, efectos de rayos eléctricos 3D y un sistema de tienda virtual con checkout automatizado y directo hacia WhatsApp.

El proyecto está diseñado bajo una arquitectura limpia y modular de **cero dependencias externas de JavaScript**, garantizando una carga inmediata, compatibilidad multiplataforma y blindaje absoluto contra congelamientos y ataques de spam.

---

## ✨ Características Destacadas

* 🪐 **Carrusel Circular Orbital en el Hero**: 8 diapositivas con imágenes de alta resolución, títulos y badges sincronizados, control por flechas, miniaturas laterales y gestos swipe táctiles.
* ⚡ **Cursor Beast Breathing Interactivo**: Puntero con estela luminosa, chispas de plasma, polvo cósmico y relámpagos de aura reactiva (desactivado en pantallas táctiles para cero sobrecarga móvil).
* 🛡️ **Blindaje de Seguridad y Motor Antispam**: Trampas Honeypot invisibles (`website_hp`), trampa de velocidad de bot (<1.2s), limitador de envíos (8s cooldown), protección anti-clickjacking y sanitización estricta anti-XSS.
* ⚡ **Efectos Eléctricos 3D Reactivos**: Filtros procedurales SVG (`feTurbulence`, `feDisplacementMap`) combinados con perspectiva tridimensional interactiva (`rotateX`, `rotateY`).
* 🌌 **Lienzo de Constelación de Partículas 2D**: Canvas interactivo con nodos euclidianos y pulsos de circuito, optimizado con `IntersectionObserver` y pausado en segundo plano.
* 🛡️ **Precargador Cibernético Futurista (HUD Preloader)**: Anillos concéntricos giratorios, pulsos de circuitos y temporizador auto-failsafe de seguridad de 1400 ms.
* 🛒 **Tienda Virtual con Carrito en Memoria**:
  * Catálogo clasificado de 30 productos con filtros dinámicos por categoría.
  * Animación parabólica de vuelo de productos ("vuelo al carrito") al pulsar añadir.
  * Efecto de rebote del carrito e insignia numérica dinámica.
  * Panel lateral retráctil para gestión de cantidades, subtotales y total a pagar.
  * Checkout modal blindado con despacho formal hacia WhatsApp oficial (+51 906 681 667).
* 📱 **Cero Congelamientos de Pantalla**: Desplazamiento ultrafluido a 60-120 FPS en smartphones, tablets, laptops y computadoras de escritorio.

---

## 📄 Ecosistema de Páginas

| Archivo | Función y Contenido Principal |
| :--- | :--- |
| **`index.html`** | Landing page principal: Hero circular orbital con 8 diapositivas temáticas, selector interactivo de soluciones domóticas, galería de proyectos destacados, contadores numéricos animados con `IntersectionObserver`, modal de Solicitud de Visita Técnica y pie de página con circuito de pulso cibernético SVG. |
| **`tienda.html`** | Tienda virtual interactiva: Catálogo de 30 productos con tarjetas de neón 3D, filtros por categoría (Iluminación, Seguridad, Climatización, Energía, Audio/Video, Accesorios), carrito lateral dinámico, modal de checkout y despacho automatizado hacia WhatsApp. |
| **`proyectos.html`** | Galería y vitrina técnica de proyectos: Exhibición de instalaciones domóticas residenciales, comerciales e industriales con fondos de alta resolución optimizados con scroll nativo para móviles. |

---

## ⚡ Efectos Visuales e Innovación Tecnológica

### 1. Carrusel Circular Orbital (`js/hero-carousel.js` y `css/hero-carousel.css`)
El Hero incorpora un sistema orbital de 8 escenas temáticas:
* *Transforma tu Hogar en Inteligente* (Iluminación biodinámica y clima a 21°C).
* *Seguridad y Vigilancia con IA* (Biometría, cámaras 4K y monitoreo 24/7).
* *Espacios Vivos y Luz Circadiana* (Luz adaptativa al ritmo biológico).
* *Cine en Casa & Audio Inmersivo Dolby* (Salas acústicas Hi-Fi y cortinas blackout).
* *Automatización Exterior y Piscinas Smart* (Cascadas inteligentes y riego predictivo).
* *Torres Corporativas y Protocolos KNX* (Automatización comercial bajo estándar KNX).
* *Eficiencia Energética y Gestión Solar* (Paneles fotovoltaicos y micro-redes).
* *Tu Hogar en tu Mano y por Comandos de Voz* (App todo en uno, Alexa y Google Home).

Cuenta con rotación visual de fondos con desvanecimiento cruzado, animación circular de textos y controles por flechas, miniaturas y gestos táctiles.

### 2. Motor Beast Breathing Cursor (`js/beast-cursor.js`)
Genera un puntero interactivo cinemático con partículas estelares, relámpagos de aura eléctrica, ráfagas de garras (claw bursts) y anillos de pulso:
* **Seguimiento 1:1 Instantáneo**: Eliminación de fricción o retraso de entrada (`ease`), logrando un movimiento natural y ultrapreciso sin atascos ni congelamientos en pantallas con alta densidad de tarjetas.
* **Arquitectura de Canvas Único**: Renderizado de partículas y shimmer ambiental integrado en un solo lienzo acelerado por GPU (`#beast-cursor-c`), reduciendo drásticamente el consumo de memoria VRAM.
* **Ocultamiento Universal de Puntero OS**: Regla `@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }` que asegura que el cursor nativo nunca parpadee ni compita con el puntero cinemático en tarjetas y botones.
* **Ahorro de Recursos**: Se detiene automáticamente cuando la pestaña está en segundo plano (`visibilitychange`) y se desactiva en pantallas puramente táctiles para mantener el dispositivo ágil y frío.

### 3. Filtros SVG y Rayos Eléctricos 3D (`js/electric-effect.js` y `css/electric-effect.css`)
Los bordes de las tarjetas combinan filtros SVG vectoriales de alta tensión (`feTurbulence` con animación SMIL de `seed` aleatoria y `feDisplacementMap` a escala 22-24) con un rayo streamer perimetral de alta frecuencia (`conic-gradient`), núcleos blancos incandescentes (`#ffffff`) y perspectiva 3D acelerada por hardware (`translate3d(0, -9px, 0)`). En reposo las tarjetas permanecen limpias y oscuras, y al posar el cursor (`:hover`, `mouseenter`) o interactuar de forma táctil (`:active`), los rayos y arcos voltaicos en zigzag explotan con un resalte visual impactante a 60-120 FPS sin bloqueos ni congelamientos.

---

## 🛒 Módulo de Tienda Virtual y Carrito

El flujo de comercio electrónico en `tienda.html` opera íntegramente en el navegador:
1. **Selección**: Navegación fluida entre las 6 categorías mediante filtros tipo píldora.
2. **Adición**: Animación parabólica en tiempo real entre la tarjeta del producto y el botón del carrito.
3. **Gestión**: Drawer lateral superpuesto para modificar cantidades, visualizar subtotales y remover artículos.
4. **Checkout**: Modal con trampa Honeypot antispam para la captura de datos (Nombre, Teléfono, Dirección).
5. **Despacho por WhatsApp**: Mensaje estructurado enviado de forma segura con el desglose exacto de la compra.

---

## 🛡️ Blindaje de Seguridad y Motor Antispam

El sistema cuenta con un escudo de ciberseguridad integrado en [`js/script.js`](js/script.js):
* **Trampa Honeypot (`website_hp`)**: Campos invisibles (`#check-hp-field` y `#visit-hp-field`) que interceptan y anulan inmediatamente solicitudes generadas por bots.
* **Trampa de Velocidad (<1.2s)**: Neutraliza formularios completados a velocidades sobrehumanas.
* **Rate Limiting (8s Cooldown)**: Evita bombardeos y flooding de mensajes repetitivos.
* **Filtro Heurístico Anti-Spam**: Detección de patrones de phishing, inyecciones de código y publicidad no deseada.
* **Anti-Clickjacking**: Detección de contextos `window.top` para prevenir que la web sea clonada o incrustada en iframes maliciosos.
* **Anti-XSS**: Sanitización de atributos y contenidos dinámicos mediante `escapeHTML()` y `sanitizeForMessage()`.
* **Cabeceras de Seguridad**: `X-Content-Type-Options: nosniff` y `referrerpolicy: strict-origin-when-cross-origin`.

---

## 🚀 Prevención de Congelamientos y Rendimiento

* **Cero Congelamiento en `tienda.html` y `proyectos.html`**:
  * En `proyectos.html`, los 18 overlays con `backdrop-filter` ahora se ocultan fuera del viewport (`opacity: 0; visibility: hidden;`), evitando el sobrecosto de cálculo composicional constante y liberando el hilo principal del navegador.
  * En `tienda.html`, los filtros SVG procedurales están calibrados para eliminar saturaciones en la rasterización por software de Chromium, permitiendo un recorrido continuo a 60-120 FPS.
* **Cursor Ultrafluido 1:1**: Respuesta inmediata sin desfase ni arrastre en toda la superficie de la aplicación.
* **Pausa en Segundo Plano (`visibilitychange`)**: Todos los bucles `requestAnimationFrame` en los lienzos canvas y en el cursor se pausan al minimizar o cambiar de pestaña.
* **Scroll Suave en Móviles**: Eliminación de bloqueos de renderizado mediante `background-attachment: scroll !important` en dispositivos táctiles (`pointer: coarse`).
* **Efecto Eléctrico de Rayos y Arcos en Zigzag (120 FPS)**: Sistema de descarga eléctrica de alta tensión con núcleos blancos incandescentes y filtros procedurales SVG a escala 24 sin `color-dodge`, generando rayos y arcos voltaicos en zigzag reales y de máxima visibilidad en computadoras y móviles con cero congelamiento.
* **Failsafe del Precargador HUD**: Cierre forzado garantizado a los 1400 ms en cualquier escenario de red lenta.

---

## 📁 Estructura del Proyecto

```plaintext
SAIDEX-4.0--DOMOTICA-Y-AUTOMATIZACION/
│
├── index.html                   # Página de Inicio y Hero Orbital 3D
├── tienda.html                  # Tienda Virtual y Carrito Dinámico
├── proyectos.html               # Vitrina Técnica de Proyectos
│
├── css/
│   ├── style.css                # Estilos globales, preloader, hero y footer
│   ├── electric-effect.css      # Filtros SVG 3D, rayos y temas neón
│   ├── hero-carousel.css        # Estilos del carrusel orbital del hero
│   └── store.css                # Estilos de tienda, carrito lateral y checkout
│
├── js/
│   ├── script.js                # Lógica principal, seguridad, antispam y WhatsApp
│   ├── hero-carousel.js         # Controlador orbital del hero (8 diapositivas)
│   ├── beast-cursor.js          # Motor de cursor Beast Breathing
│   └── electric-effect.js       # Motor de inclinación 3D y perspectiva
│
├── assets/                      # Identidad visual, logotipos e imágenes HD
│
├── DOCUMENTACION_PROYECTO.md    # Manual técnico detallado de la arquitectura
└── README.md                    # Documentación principal del repositorio
```

---

## 🛠️ Tecnologías Utilizadas

* **HTML5**: Marcado semántico, accesible (ARIA) y estructurado.
* **CSS3 Vanilla**: Variables CSS personalizadas, Glassmorphism, animaciones aceleradas por GPU, CSS Grid y Flexbox.
* **JavaScript Moderno (ES6+)**: Vanilla puro (sin frameworks externos pesados), `IntersectionObserver`, `Canvas 2D`, `requestAnimationFrame`.
* **Tipografía e Iconos**: Google Fonts (*Inter*), Font Awesome 6.4.0, SVG dinámicos integrados en el DOM.

---

## 💻 Guía de Instalación y Ejecución Local

No requiere compilación ni gestores de paquetes pesados:

### Opción 1: Con extensión Live Server (VS Code)
1. Abrir la carpeta del proyecto en su editor.
2. Clic derecho sobre `index.html`.
3. Seleccionar **"Open with Live Server"**.

### Opción 2: Usando Node.js
```bash
npx serve .
```

### Opción 3: Usando Python
```bash
python -m http.server 8000
```
Luego abrir `http://localhost:8000`.

---

## 📞 Canales de Contacto Oficial

* **Empresa**: SAIDEX 4.0 — Domótica y Automatización
* **Teléfono / WhatsApp Oficial**: [+51 906 681 667](https://wa.me/51906681667)
* **Correo Electrónico**: [info@saidex40.com](mailto:info@saidex40.com)
* **Ubicación**: Lima, Perú (Cobertura a nivel nacional)
* **Redes Sociales Oficiales**:
  * [Facebook](https://www.facebook.com/share/1DKk2KMXqo/)
  * [Instagram](https://www.instagram.com/capri4431?igsh=cWtvcjdqN3Vhbjgz)
  * [YouTube](https://youtube.com/@jesusronaldocesararellanas5388/community?si=2w9Oj341CV9DP4Bu)
  * [TikTok](https://www.tiktok.com/@arellanasanchez2006)

---

<p align="center">
  &copy; 2026 <strong>SAIDEX 4.0 Domótica y Automatización</strong>. Todos los derechos reservados.
</p>
