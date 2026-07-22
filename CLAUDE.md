# Well Brain — Carmen Susana

Sitio web de Well Brain, la marca de Carmen Susana (médica y epidemióloga clínica especializada en neurociencia aplicada al bienestar). El rediseño anterior se descartó por completo. Este documento contiene la guía definitiva de marca, estructura y contenido aprobada por el cliente. El progreso de construcción se rastrea en `TASKS.md` (fuente de verdad de qué está hecho y qué sigue).

> **Regla fija de skills**: para cualquier cambio visual o de UI en este proyecto se deben invocar siempre las skills `ui-ux-pro-max:design` y `ui-ux-pro-max:ui-styling` antes de escribir código.

## Estado técnico actual

- Next.js (App Router) + TypeScript + Tailwind CSS v4, corriendo en `localhost:3000` (`npm run dev`).
- `app/` contiene solo un scaffold en blanco (layout + página placeholder).
- `components/` está vacío — no hay componentes del sitio todavía.
- `public/` está vacío — no hay assets procesados todavía.
- `Reference/` conserva los archivos fuente originales (fotos, logo, stickers, video) como insumo para el nuevo diseño.
- `fonts/` conserva archivos de fuentes locales sin usar todavía (Amarego, MagicRetro, MagicVintage, MountHills, Zodiak).
- `lib/utils.ts` tiene el helper `cn()` de Tailwind, reutilizable.

---

## Concepto general

WELL BRAIN no debe sentirse como una página web tradicional ni como una plataforma de cursos. Debe sentirse como una mezcla entre:

- Revista editorial moderna
- Marca personal premium
- Lifestyle
- Neurociencia
- Comunidad
- Educación

El usuario no entra a comprar un curso: entra a **descubrir una filosofía de vida**. La inspiración principal es **Eli Rallo**, adaptando su estilo editorial al mundo de la neurociencia, los hábitos y el crecimiento personal.

## Personalidad de la marca

Transmite: cercanía, elegancia, ciencia, feminidad moderna, creatividad, exclusividad, inspiración, profesionalismo.

Nunca debe sentirse: **corporativa**, **médica**, ni como una **academia aburrida**.

## Sistema visual

Sensación general: **Editorial + Lifestyle + Premium**. Muchísimo espacio en blanco, fotografía protagonista, tipografía elegante, detalles pequeños en brillo, mucho aire, nada sobrecargado.

### Paleta de colores

| Rol | Color | Hex |
|---|---|---|
| Principal | Lavanda | `#D8C4FF` |
| Secundario | Rosa pastel | `#F5C9E7` |
| Fondo | Crema | `#FFF9F2` |
| Texto | Negro | `#1D1D1D` |
| Blanco | Blanco | `#FFFFFF` |

Detalles: plateado, brillos, cristales, estrellas minimalistas, disco de espejos, pequeños reflejos.

### Tipografía

- **Títulos**: Canela, Editorial New o Cormorant Garamond. Grandes, muchísimo peso visual.
- **Texto**: Inter, General Sans o Satoshi. Limpio, muy fácil de leer.
- **Botones**: Space Grotesk. Mayúsculas, mucho espaciado.

### Estilo fotográfico

Siempre fotografías reales, nunca stock. Colores cálidos, mucha luz natural, sensación editorial, lifestyle, ropa sencilla, fondos limpios, muchas fotografías espontáneas.

### Iconografía

Lineal, minimalista, lavanda, sin exceso de detalles.

---

## Arquitectura del sitio

Páginas: **Home · About · Method · Resources · Community · Journal · Courses · Contact**

Menú: logo a la izquierda, los 8 ítems de navegación y botón destacado **START HERE**. Header transparente sobre el hero y sólido al comenzar el scroll.

---

## Contenido por página

### HOME

Objetivo: enamorar, crear curiosidad, explicar rápidamente qué es WELL BRAIN, generar confianza, llevar al ebook.

1. **Hero** — pantalla completa, fotografía gigante, título enorme:
   > CHANGE YOUR BRAIN. CHANGE YOUR LIFE.
   >
   > No naciste para vivir en piloto automático. WELL BRAIN combina neurociencia, hábitos y educación para ayudarte a construir una vida más consciente, enfocada y saludable.

   Botón: **START YOUR JOURNEY**

2. **¿Qué es WELL BRAIN?**
   > La mayoría de las personas creen que necesitan más disciplina. Nosotros creemos que primero necesitan entender cómo funciona su cerebro. Porque cuando entiendes tu mente, cambiar tus hábitos deja de sentirse imposible.

   Botón: **DISCOVER THE METHOD**

3. **Los seis pilares** (tarjetas):
   - **Brain Foundations** — Aprende cómo funciona tu cerebro.
   - **Nutrition** — Alimenta tu mente.
   - **Movement** — El movimiento cambia tu cerebro.
   - **Sleep** — Dormir mejor cambia todo.
   - **Focus** — Recupera tu atención.
   - **Identity** — Conviértete en la persona que quieres ser.

   Botón: **EXPLORE THE METHOD**

4. **Meet the Brain Behind** — foto grande:
   > Hola. Soy Carmen. Y durante años pensé que necesitaba más disciplina. Después descubrí que el verdadero problema nunca fue la falta de motivación. Era no entender cómo funcionaba mi cerebro. Por eso nació WELL BRAIN.

   Botón: **READ MY STORY**

5. **Resultados**: +3000 personas · 95% satisfacción · 4.9★ · Más de 50 recursos.

6. **Ebook** — imagen enorme:
   > Start Here. Descarga gratuitamente el WELL BRAIN Starter Workbook. Más de 50 páginas de ejercicios, herramientas y hábitos para comenzar tu transformación.

   Botón: **DOWNLOAD FREE**

7. **Journal** — mostrar cuatro artículos: Cómo vencer la procrastinación · Por qué dormimos · Cómo crear hábitos · La ciencia del enfoque. Botón: **VIEW ALL ARTICLES**

8. **Cursos** — mostrar únicamente destacados: Brain Foundations, Focus, Sleep, Identity. Botón: **VIEW ALL COURSES**

9. **Comunidad**:
   > You're not meant to do this alone. Los cambios más grandes ocurren cuando los construimos junto a otras personas.

   Incluye: retos, clases, seguimiento, eventos, comunidad privada. Botón: **JOIN COMMUNITY**

10. **CTA final** — pantalla completa: **YOUR NEXT CHAPTER STARTS TODAY.** Botón: **START TODAY**

### ABOUT

- Hero con foto enorme:
  > Hi, I'm Carmen. No soy una gurú. No tengo todas las respuestas. Pero llevo años estudiando cómo funciona el cerebro y cómo pequeños hábitos pueden transformar completamente una vida.
- Historia: cómo nació WELL BRAIN, errores, aprendizajes.
- Filosofía y misión.
- Fotos lifestyle, Instagram, behind the scenes.

### METHOD

- Hero: **The WELL BRAIN Method.** "No cambiamos vidas. Construimos sistemas."
- Explicación: los seis pilares trabajan juntos; cada uno fortalece una parte diferente del cerebro.
- Sección por cada pilar: imagen, texto, beneficios, errores comunes, qué aprenderás.
- Final: cómo se conectan todos. CTA: comienza hoy.

### RESOURCES

- Hero: "Todo lo que necesitas para comenzar."
- Starter Workbook, plantillas, checklists, guías, videos, newsletter, podcast (cuando exista).

### COMMUNITY

- Hero: "No estás solo."
- Beneficios: retos, seguimiento, eventos, clases, foro.
- Testimonios. CTA.

### JOURNAL

- Hero: ideas, investigación, neurociencia, hábitos, productividad.
- Categorías.
- Artículos: imagen, título, resumen, tiempo de lectura.

### COURSES

- Hero: **Learn. Practice. Transform.**
- Cursos: imagen, descripción, temario, duración, nivel, precio.
- Preguntas frecuentes. CTA.

### CONTACT

- Hero: **Let's Build Your Brain.**
- Formulario: nombre, correo, mensaje.
- Redes sociales: Instagram, TikTok, YouTube, Spotify. Correo.

### FOOTER

Muy limpio. Logo + "Science meets transformation."

- **Explora**: About, Method, Journal, Resources, Community, Courses.
- **Aprende**: Ebook, Guías, Herramientas.
- **Síguenos**: Instagram, TikTok, YouTube, Spotify.
- **Legal**: Privacidad, Cookies, Términos.

---

## Experiencia de usuario

La navegación debe sentirse como una historia:

Llego → Me enamoro del diseño → Entiendo qué es WELL BRAIN → Conozco a Carmen → Descubro el método → Veo que funciona → Descargo el ebook → Leo artículos → Exploro cursos → Me uno a la comunidad → Contacto.

## Animaciones recomendadas

- Apariciones suaves (fade + translateY de 20–30 px) al hacer scroll.
- Hover en tarjetas con ligera elevación, sombra y borde lavanda.
- Botones con transición de color y desplazamiento sutil del ícono de flecha.
- Títulos grandes con efecto de revelado al entrar en pantalla.
- Imágenes con zoom muy ligero al pasar el cursor.
- Estrellas y brillos con animaciones lentas y discretas.
- Scroll fluido entre secciones.
- Header transparente sobre el hero y sólido al comenzar el scroll.

## Estilo del copy

- Frases cortas y contundentes.
- Lenguaje cercano y humano.
- Basado en ciencia, pero fácil de entender.
- Inspirador sin sonar a frases motivacionales vacías.
- Priorizar beneficios sobre tecnicismos.
- Hablar de transformación real y hábitos sostenibles.

Ejemplos del tono:

> No necesitas más fuerza de voluntad. Necesitas un mejor sistema.
>
> Tu cerebro cambia todos los días. La pregunta es: ¿lo hace por accidente o con intención?
>
> Los hábitos no se construyen con motivación. Se construyen con comprensión.
>
> Pequeñas acciones. Grandes cambios.

## Objetivo final del sitio

Más que vender cursos, el sitio debe construir una marca personal sólida y memorable alrededor de Carmen y WELL BRAIN. La prioridad es generar confianza, demostrar autoridad, entregar valor gratuito (ebook y contenido), crear una comunidad y, de forma natural, convertir a los visitantes en estudiantes de los programas. La experiencia completa debe sentirse como una revista digital premium donde cada sección invita a seguir explorando, no como una página enfocada únicamente en vender.
