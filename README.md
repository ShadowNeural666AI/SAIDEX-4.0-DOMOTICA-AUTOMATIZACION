# SAIDEX 4.0 — Domótica y Automatización

<p align="center">
  <img src="assets/logo.webp" alt="Logotipo SAIDEX 4.0" width="160" />
</p>

<p align="center">
  <strong>Tecnología avanzada e inteligencia ambiental para transformar tu espacio en un hogar inteligente.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Versi%C3%B3n-4.0.0--Actualizada-00d2ff?style=for-the-badge&logo=codeforces" alt="Versión 4.0.0" />
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS%20Vanilla-00ff88?style=for-the-badge&logo=javascript" alt="Tecnología Frontend" />
  <img src="https://img.shields.io/badge/Dise%C3%B1o-Cyberpunk%20%2F%20Ne%C3%B3n%203D-9d4edd?style=for-the-badge" alt="Diseño Neón 3D" />
  <img src="https://img.shields.io/badge/Rendimiento-60--120%20FPS-0051ff?style=for-the-badge" alt="60-120 FPS" />
  <img src="https://img.shields.io/badge/Seguridad-Blindaje%20Anti--Spam%20%26%20Anti--XSS-ff007f?style=for-the-badge" alt="Blindaje de Seguridad" />
  <img src="https://img.shields.io/badge/Calidad-Auditor%C3%ADa%20100%25%20Limpio-00e5ff?style=for-the-badge" alt="Auditoría 100% Limpio" />
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
8. [Auditoría de Calidad, Integridad y Correcciones](#-auditoría-de-calidad-integridad-y-correcciones)
9. [Estructura del Proyecto](#-estructura-del-proyecto)
10. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
11. [Guía de Instalación y Ejecución Local](#-guía-de-instalación-y-ejecución-local)
12. [Canales de Contacto Oficial](#-canales-de-contacto-oficial)

---

## 🌐 Descripción General

**SAIDEX 4.0** es una plataforma web estática de grado corporativo desarrollada para la divulgación, comercialización y gestión de proyectos de domótica residencial, comercial e industrial. La plataforma sumerge al usuario en una interfaz interactiva de estética futurista (Cyberpunk / Neón 3D), con micro-animaciones fluidas aceleradas por GPU, un Hero cinemático con título animado de corriente eléctrica letra por letra, precargador HUD con haces de circuito láser y animación de tipografía, un pie de página cibernético en 2 columnas y un sistema de tienda virtual con checkout automatizado y directo hacia WhatsApp.

El proyecto está diseñado bajo una arquitectura limpia y modular de **cero dependencias externas de JavaScript**, garantizando una carga inmediata, compatibilidad multiplataforma y blindaje absoluto contra congelamientos y ataques de spam.

---

## ✨ Características Destacadas

* ⚡ **Precargador Cibernético Futurista (HUD Preloader) con Circuitos Fluidos**:
  * Anillos concéntricos giratorios, emblema de marca central e indicador porcentual dinámico.
  * **Circuitos laterales animados con haces de pulso láser** (`circuit-pulse-beam`, `circuit-pulse-core`) que viajan continuamente de un punto origen a un punto final en bucle.
  * **Título animado letra por letra** (`hero-electric-title` + `.elec-char`), sincronizado con el estilo característico del Hero.
  * **Doble failsafe anti-congelamiento**: temporizador JS a 3.0s y seguro forzado en CSS puro a 4.0s para evitar pantallas bloqueadas en cualquier dispositivo.
* 🏛️ **Pie de Página Cibernético Rediseñado en 2 Columnas (`index.html`)**:
  * **Columna Izquierda (Identidad y Redes)**: Logotipo corporativo, animación eléctrica continua letra por letra que recorre "SAIDEX 4.0" y "DOMÓTICA Y AUTOMATIZACIÓN", descripción institucional y botones sociales circulares con etiquetas descriptivas inferiores.
  * **Columna Derecha (Panel HUD de Contacto Directo)**: Tarjeta cyber glass con badge `DISPONIBLE 24/7`, botones interactivos pill para WhatsApp oficial, llamada telefónica y correo electrónico, además de ficha de asistencia técnica.
  * **Divisor de Circuito Eléctrico SVG**: Separador perimétrico de extremo a extremo con haces de luz en recorrido continuo.
  * **Preservación Canónica**: Mantenimiento intacto de los footers originales de `proyectos.html` y `tienda.html`.
* 🛡️ **Blindaje de Seguridad y Motor Antispam**: Trampas Honeypot invisibles (`website_hp`), trampa de velocidad de bot (<1.2s), limitador de envíos (8s cooldown), protección anti-clickjacking y sanitización estricta anti-XSS.
* ⚡ **Efectos Eléctricos 3D Reactivos**: Filtros procedurales SVG (`feTurbulence`, `feDisplacementMap`) combinados con perspectiva tridimensional interactiva (`rotateX`, `rotateY`).
* 🌌 **Lienzo de Constelación de Partículas 2D**: Canvas interactivo con nodos euclidianos y pulsos de circuito, optimizado con `IntersectionObserver` y pausado en segundo plano.
* 🛒 **Tienda Virtual con Carrito en Memoria**:
  * Catálogo clasificado de 30 productos con filtros dinámicos por categoría.
  * Animación parabólica de vuelo de productos ("vuelo al carrito") al pulsar añadir.
  * Efecto de rebote del carrito e insignia numérica dinámica.
  * Panel lateral retráctil para gestión de cantidades, subtotales y total a pagar.
  * Checkout modal blindado con despacho formal hacia WhatsApp oficial (+51 906 681 667).
* 🚀 **Cero Congelamientos de Pantalla**: Desplazamiento ultrafluido a 60-120 FPS en smartphones, tablets, laptops y computadoras de escritorio.

---

## 📄 Ecosistema de Páginas

| Archivo | Función y Contenido Principal |
| :--- | :--- |
| **`index.html`** | Landing page principal: Hero cinemático 3D, selector interactivo de soluciones domóticas, galería de proyectos destacados, contadores numéricos animados con `IntersectionObserver`, modal de Solicitud de Visita Técnica y nuevo pie de página cibernético en 2 columnas con panel HUD de contacto. |
| **`tienda.html`** | Tienda virtual interactiva: Catálogo de 30 productos con tarjetas de neón 3D, filtros por categoría (Iluminación, Seguridad, Climatización, Energía, Audio/Video, Accesorios), carrito lateral dinámico, modal de checkout, pie de página en 2 columnas y despacho automatizado hacia WhatsApp. |
| **`proyectos.html`** | Galería y vitrina técnica de proyectos: Exhibición de instalaciones domóticas residenciales, comerciales e industriales con fondos de alta resolución optimizados con scroll nativo para móviles y pie de página en 2 columnas. |

---

## ⚡ Efectos Visuales e Innovación Tecnológica

### 1. Precargador Cibernético Futurista (`saidex-preloader`)
* **Anillos HUD y Emblema Central**: Tres anillos concéntricos con rotación diferencial horaria y antihoraria que rodean el logotipo de la marca.
* **Trazos de Circuito Lateral**: Paneles laterales con líneas de circuito donde haces de luz láser recorren las pistas en bucle infinito (`circuitBeamFlow`).
* **Tipografía Eléctrica Dinámica**: Título `SAIDEX 4.0` animado secuencialmente letra por letra mediante variables de retraso `--c-idx`.
* **Failsafe Absoluto**: Se desvanece de forma garantizada a los 3-4 segundos, eliminando cualquier posibilidad de pantalla bloqueada.

### 2. Pie de Página de Grado Corporativo (`footer.footer-index-cyber`)
* **Efecto de Título Eléctrico Completo**: La frase institucional "SAIDEX 4.0 DOMÓTICA Y AUTOMATIZACIÓN" es recorrida letra por letra por una chispa de alta luminiscencia.
* **Separador de Circuito de Fluido Eléctrico**: SVG horizontal de 1200px con haces de energía continua (`circuit-pulse-beam`) que enlazan visualmente la sección de partners con el pie de página.
* **Panel de Contacto Sci-Fi**: Botones con relieve glassmorphism y micro-interacciones hover diseñados para maximizar la tasa de conversión.

---

## 🛡️ Blindaje de Seguridad y Motor Antispam

El sistema cuenta con un motor defensivo multicapa implementado en JavaScript Vanilla:

1. **Trampas Honeypot Ocultas**: Dos campos camuflados (`#check-hp-field` y `#visit-hp-field`) completamente invisibles para usuarios reales pero detectables por bots automatizados.
2. **Control de Velocidad de Envío**: Descarta cualquier envío realizado en menos de 1200 ms desde la carga de la página.
3. **Enfriamiento Entre Envíos (Rate Limiting)**: Bloquea envíos repetitivos durante un periodo de 8 segundos por usuario.
4. **Protección Anti-Clickjacking**: Comprueba el contexto de la ventana principal para impedir que la web sea embebida en marcos maliciosos externos.
5. **Sanitización y Escape HTML**: Purga etiquetas y caracteres peligrosos antes de incrustar contenido dinámico en el DOM o redactar mensajes para WhatsApp.

---

## 🚀 Prevención de Congelamientos y Rendimiento

* **60-120 FPS Nativos**: Uso exclusivo de propiedades aceleradas por hardware (`transform`, `opacity`).
* **Pausa Automática en Segundo Plano**: Las partículas de canvas y animaciones pesadas se suspenden automáticamente cuando el usuario cambia de pestaña (`visibilitychange`) o cuando salen del viewport (`IntersectionObserver`).
* **Optimización Móvil**: En pantallas compactas (<540px), los circuitos laterales del preloader se ocultan para asignar todo el espacio a la interfaz de carga y evitar cualquier recalculo de layout innecesario.
* **Assets Depurados**: Eliminación de imágenes sin uso y archivos redundantes, garantizando un peso de carga óptimo.

---

## 📁 Estructura del Proyecto

```plaintext
SAIDEX-4.0--DOMOTICA-Y-AUTOMATIZACION/
│
├── index.html                   # Página de inicio principal
├── tienda.html                  # Tienda virtual y catálogo
├── proyectos.html               # Galería técnica de proyectos
│
├── css/
│   ├── style.css                # Estilos globales y componentes principales
│   ├── electric-effect.css      # Filtros SVG y animaciones eléctricas
│   └── store.css                # Estilos de tienda y carrito
│
├── js/
│   ├── script.js                # Lógica principal, seguridad y preloader
│   └── electric-effect.js       # Efectos de inclinación 3D
│
├── assets/                      # Recursos visuales e imágenes de marca
│   └── store/                   # Catálogo fotográfico de productos
│
├── DOCUMENTACION_PROYECTO.md    # Manual técnico detallado
└── README.md                    # Este documento
```

---

## 🛠️ Tecnologías Utilizadas

* **Lenguajes**: HTML5 Semántico, CSS3 Vanilla, JavaScript Vanilla (ES6+).
* **Fuentes Tipográficas**: Google Fonts (Inter, Outfit).
* **Iconografía**: Font Awesome 6.4+, Iconos SVG inline personalizados.
* **Integraciones**: Despacho directo a API de WhatsApp Web/App.

---

## 💻 Guía de Instalación y Ejecución Local

Dado que SAIDEX 4.0 es una plataforma web estática moderna sin dependencias complejas, su ejecución local es directa:

1. **Clonar o descargar el repositorio**:
   ```bash
   git clone https://github.com/matias03322-wq/SAIDEX-4.0-DOMOTICA-Y-AUTOMTIZACION.git
   ```
2. **Abrir con un servidor local**:
   * Usando la extensión **Live Server** de Visual Studio Code: Clic derecho sobre `index.html` > *Open with Live Server*.
   * Usando Node.js / `npx`:
     ```bash
     npx serve .
     ```
   * O directamente abriendo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

---

## 📞 Canales de Contacto Oficial

* **Empresa**: SAIDEX 4.0 — Domótica y Automatización
* **Teléfono / WhatsApp**: +51 906 681 667
* **Correo Electrónico**: contacto@saidex.com
* **Ubicación**: Lima, Perú
