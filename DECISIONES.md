# Registro de Decisiones de Arquitectura y Diseño (DECISIONES.md)

**Proyecto:** Portafolio Web Personal Integrador (Unidad 1.12)  
**Autor:** Abdiel Ruiz Gutiérrez — Técnico en Computación (CECyT 3 - IPN)  
**Fecha:** 2026  

---

## 1. Definición de Secciones del Sitio

Para estructurar una experiencia de usuario clara y profesional, el portafolio se dividió en 5 secciones principales accesibles mediante navegación semántica:

1. **Hero / Inicio (`#hero`):** Presentación directa con badge de estado ("Técnico en Computación & Dev Autodidacta"), titular claro, foto de perfil optimizada y botones de llamada a la acción (CTA) para contacto y proyectos.
2. **Sobre mí (`#sobre-mi`):** Resumen ejecutivo sobre mi formación en el CECyT 3 (IPN), áreas de interés (sistemas embebidos, desarrollo móvil, videojuegos) y mentalidad de aprendizaje continuo.
3. **Proyectos Destacados (`#proyectos`):** Grid de tarjetas interactivas que exhibe el portafolio web actual, la computadora de vuelo Artemis (Hidrochallenge IPN), la aplicación inclusiva de traducción Braille, desarrollos en Unity y Android con Jetpack Compose.
4. **Habilidades Técnicas (`#habilidades`):** Clasificación clara dividida en Lenguajes/Frameworks (C/C++, Kotlin, C#, JS) y Herramientas/Hardware (ESP32, LoRa, Git, Lighthouse).
5. **Trayectoria & Logros (`#trayectoria`):** Línea del tiempo (timeline) que resalta mi participación en cohetería aeroespacial, certificaciones oficiales de Google, carrera técnica y preparación hacia la Olimpiada Nacional de Biología.
6. **Contacto (`#contacto`):** Formulario interactivo validado con JS y conectado a Formspree, acompañado de enlaces directos y seguros.

---

## 2. Paleta de Colores y Justificación

Se seleccionó una paleta inspirada en entornos de desarrollo integrados (IDE Dark Theme / One Dark Pro) que satisface las directrices **WCAG AA** de accesibilidad (contraste mínimo de 4.5:1 verificado en WebAIM Contrast Checker):

### Modo Oscuro (Predeterminado)
- **Fondo Principal (`--color-fondo`):** `#1e222b` (Azul oscuro mate que reduce la fatiga visual).
- **Superficie / Tarjetas (`--color-tarjeta`):** `#282c34` / `#21252b` (Elevación visual limpia).
- **Color Primario (`--color-primario`):** `#61afef` (Azul celeste brillante para énfasis y botones).
- **Acento (`--color-acento`):** `#98c379` (Verde para estado, éxito y viñetas).
- **Texto (`--color-texto` / `--color-texto-brillante`):** `#abb2bf` / `#ffffff` (Lectura cómoda sin deslumbramiento).

### Modo Claro (Alternativo)
- **Fondo / Superficie:** `#f5f6f8` / `#ffffff`
- **Color Primario / Acento:** `#0284c7` (Azul rey sostenido) / `#15803d` (Verde bosque), reajustados para garantizar alto contraste sobre fondo blanco.

---

## 3. Tipografía y Justificación

Se utilizaron dos familias tipográficas de **Google Fonts** importadas de forma asíncrona optimizada (`display=swap`):

1. **Fuente Principal — `Inter` (Sans-Serif):**
   - **Uso:** Cuerpo de texto, títulos, botones e interfaz general.
   - **Justificación:** Diseñada específicamente para pantallas digitales. Ofrece excelente x-height (altura de x) y legibilidad superior en dispositivos móviles y de escritorio.
2. **Fuente de Código — `Fira Code` (Monospace):**
   - **Uso:** Badges, etiquetas de tecnología (`tags`), indicadores numéricos y sintaxis simulada (`<Sobre mí/>`).
   - **Justificación:** Refuerza la identidad técnica y de desarrollo de software del portafolio.

---

## 4. Arquitectura y Layout

- **Estructura HTML5 Semántica:** Uso estricto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>` evitando el anidamiento innecesario de `<div>`.
- **CSS Modular:** Separación de responsabilidades en 7 archivos (`00-reset.css` a `06-responsive.css`) utilizando *Custom Properties* en `:root`.
- **Diseño Responsivo Mobile-First:** Enfoque adaptativo apoyado en **CSS Grid** (`repeat(auto-fit, minmax(...))`) y **Flexbox**, con breakpoint colapsable a menú hamburguesa a los `960px`.