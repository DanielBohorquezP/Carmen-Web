# Well Brain — Carmen Susana

Este documento es el contexto y la estructura de contenido para construir el sitio web de Well Brain. Aquí vive: quién es la marca, qué objetivo tiene el sitio, cómo se organiza, el copy completo de cada página, y el sistema visual con el que se está construyendo en este proyecto de Claude Code.

## Contexto de la marca

Well Brain es la marca de Carmen Susana, médica y epidemióloga clínica especializada en neurociencia aplicada al bienestar. Traduce evidencia científica en hábitos concretos (sueño, nutrición, ejercicio, manejo del estrés) que mejoran el rendimiento cognitivo y la calidad de vida. Su diferenciador frente a cualquier cuenta de bienestar en redes es el respaldo médico real: "Carmen no comunica promesas: comunica ciencia aplicable."

Público objetivo: personas que se sienten cansadas, dispersas o estancadas en sus hábitos, saturadas de información contradictoria en redes sociales, y que buscan una fuente confiable con respaldo médico — no otro influencer de bienestar.

Tono de voz: cercano, claro, profesional sin rigidez, seguro y empoderado, inspirador desde la evidencia — nunca desde la exageración o la promesa vacía.

## Objetivo del sitio

El sitio existe para vender la asesoría 1:1 (Well Brain Method). No es una página de venta de curso ni de infoproducto: es una asesoría premium con médica real detrás. Por eso:

- El CTA principal en todo el sitio es **"Agenda tu asesoría 1:1"**, y no lleva a un formulario de contacto ni a un checkout de pago inmediato. Lleva a un bloque de **agenda en vivo** (`/#agenda`), hoy implementado como placeholder "Coming soon" hasta elegir proveedor de calendario (Calendly, Cal.com o Acuity).
- Existe un segundo mecanismo de captura, transversal a todo el sitio: un **pop-up de lead magnet** (ver más abajo) para quien todavía no está listo para agendar.
- Además, la home tiene un **formulario de suscripción** propio (nombre + correo) para promociones y novedades — mecanismo separado del pop-up, con propósito distinto (ver sección de home).

## Arquitectura del sitio (3 páginas)

1. **Well Brain Method** (`/`) — home del sitio, narrativa: presenta la marca, presenta a Carmen, explica el porqué del método, muestra su podcast/redes, ofrece las puertas de entrada (asesoría, podcast, YouTube, recursos), agenda y reseñas.
2. **Sobre Carmen** (`/sobre-carmen`)
3. **Productos** (`/productos`) — e-books en camino + mini-blog.
4. **Footer** — presente en todas las páginas
5. **Pop-up de lead magnet** — componente transversal, presente en todas las páginas

---

## Componente global 1 — Agenda en vivo (`#agenda`)

Vive dentro de la home. Todos los botones "Agenda tu asesoría 1:1" del sitio anclan a este bloque (`/#agenda`).

**Estado actual:** no hay proveedor de calendario elegido todavía. El bloque se implementa como un panel simple centrado con badge **"Coming soon"** — sin los 4 pasos ni el placeholder de embed de una iteración anterior; se reincorporan cuando se elija el proveedor.

**Pendiente de decisión de negocio:** ¿se cobra al momento de agendar o después de la primera sesión? Define si el paso final del calendario incluye cobro en línea (Stripe/Mercado Pago).

## Componente global 2 — Pop-up de lead magnet

Aparece en **cualquier página** del sitio, **5 segundos** después de cargar. Pide nombre y correo a cambio de un e-book gratis.

**Copy del pop-up:**
- Headline: "Un regalo para tu cerebro, antes de que sigas navegando."
- Subheadline: "Llévate gratis la guía Brain Habits Guide y empieza a aplicar neurociencia a tu día a día."
- Campos: Nombre · Correo electrónico
- Botón: "Quiero mi guía gratis"
- Microcopy: "Cero spam. Solo ciencia aplicable. Puedes darte de baja cuando quieras."
- Estado de éxito: "¡Listo! Revisa tu correo — tu guía ya va en camino."

**Requisitos funcionales:**
- Trigger por tiempo: 5000ms después de cargar la página.
- Cerrable con "X", clic fuera del modal, o tecla Esc.
- No debe reaparecer en la misma sesión una vez cerrado o enviado (localStorage).
- Se suprime si el visitante ya está interactuando con el bloque `#agenda`.
- **Estado actual:** envío es un stub del lado del cliente (guarda el flag en `localStorage`, muestra estado de éxito) — pendiente elegir herramienta de email marketing (Mailchimp, ConvertKit, ActiveCampaign, Brevo, o Zapier/Make).
- Responsive: modal centrado en desktop; bottom sheet en mobile.

---

## Sistema visual (home)

Dirección tomada de tres fuentes combinadas: la paleta de marca cerrada del usuario, un análisis estructural real de [alizakelly.com](https://alizakelly.com/) (visitado y capturado en pantalla), y las reglas anti-genérico del skill `design-taste-frontend-v1` como capa de guardrails (no de decisión).

### Paleta (v3 — tonos aclarados para legibilidad de texto negro)

El usuario pidió una paleta "viva" (v2, colores muy saturados), y luego pidió aclararla un poco para poder usar **texto negro en todas partes** en vez de texto blanco sobre los fondos fuertes. v3 (vigente) son tintes más claros de esos mismos tonos — misma identidad de marca, mejor contraste con letras oscuras. Tokens en `app/globals.css`:
- `#FFA5C4` — Rosa (Hero, acentos) — v2 era `#FF4F8B`, aclarado una vez más a pedido del usuario ("un poquito" más pastel)
- `#FFE88B` — Amarillo (reserva) — v2 era `#FFD93D`
- `#8BE3E7` — Turquesa (fondo de "Qué es Well Brain") — v2 era `#2CCCD3`
- `#CBB5FF` — Lila (Marquee, acentos) — v2 era `#B99CFF`
- `#FFEA93` — Amarillo pastel (fondo de "Opciones") — sin cambios
- `#FFA69A` — Coral (fondo del Formulario de suscripción) — v2 era `#FF6B57`
- `#FFF8F0` — Blanco cálido (color de descanso en la alternancia) — sin cambios
- `#2D2D2D` — Gris oscuro (**todo el texto del sitio usa este tono o un acento de color, nunca blanco**) — sin cambios

**Regla de texto:** ningún texto del sitio es blanco. Titulares, cuerpo y botones usan `text-dark` (o un acento de color como `text-pink` para etiquetas pequeñas tipo eyebrow); cuando un botón necesita destacar sobre un fondo de color, se resuelve con un fondo `bg-cream`/`bg-white` o un borde, nunca con letras blancas sobre color.

La paleta original de 6 tonos saturados (Magenta Bloom `#CA546A`, etc.) y luego la v2 más viva quedan **descartadas** — no se usan en ningún componente actual.

### Patrón de bloques alternados

La home alterna secciones de **color fuerte** (rosa, turquesa, amarillo, coral) y secciones de **blanco cálido**, sección por sección, en vez de un fondo único para toda la página. Es una excepción intencional a la regla genérica de "un solo color de acento": está justificada porque es una paleta de marca ya fijada (8 tonos cerrados, pedidos explícitamente por el usuario) y tiene precedente directo en alizakelly.com, que usa el mismo recurso con su propia paleta (rosa → turquesa → crema → rojo...).

### Motivos tomados de alizakelly.com y su adaptación

1. **Bloques de color sólido alternados** → adoptado tal cual, con la paleta de Well Brain.
2. **Banda ticker/marquee** (franja delgada, frase repetida en mayúsculas + ícono separador) → un único uso en toda la home, justo debajo del Hero, con la tagline de marca "BETTER HABITS, STRONGER MIND" repetida, fondo mauve, ícono `sparkles` de `lucide-react` como separador.
3. **Máscara orgánica tipo blob** recortando una foto de retrato sobre fondo partido en dos tonos → adoptada en la sección About/Saludo (foto de Carmen sobre panel partido coral/lila). Un solo uso en la home para no saturar (el Hero usa su propio motivo de transición con `clip-path`).
4. **Sección "About" en formato saludo casero** (imagen redondeada arriba, eyebrow "ABOUT", headline en primera persona, párrafo corto) → adoptada casi literal para "Hola, soy Carmen."
5. **Sección de podcast como "cover de álbum"** (fondo saturado, arte cuadrado centrado) → adaptada dentro de una sección de fondo blanco cálido: el "cover" vive en un panel de color fuerte (rosa) dentro de la sección, para no romper la alternancia fuerte/blanco pedida.
6. **Botones pareados** (uno outline, uno sólido, lado a lado) → usado en el Hero.
7. **Eyebrows moderados** → máximo 2 en toda la home (About y Opciones), para no caer en el patrón repetitivo de etiqueta-sobre-cada-sección.

### Tipografía

- **Grand Hotel** — titulares (clase `.font-display`, cargada vía `next/font/google`). Reemplaza a Bebas Neue: el usuario pidió pasar a una fuente script/retro de una lista cerrada (Estilo Retro Script, Milkshake, Lobster, Pacifico, Grand Hotel, Magnolia Script) — se eligió Grand Hotel por ser un script vintage legible en titulares largos y menos genérico que Lobster/Pacifico. Como los scripts se leen mal en mayúsculas, se quitó `uppercase` de todos los titulares que usan `.font-display` en toda la home (antes todos los `<h1>`/`<h2>`/`<h3>` iban en caps con Bebas Neue).
  - **Nota técnica:** `.font-display`/`.font-sticker` y la fuente del body están declaradas como reglas CSS planas en `app/globals.css` (fuera del bloque `@theme`), no como tokens `--font-*` dentro de `@theme`. Se cambió así porque el primer intento (token `--font-display` dentro de `@theme` apuntando a la variable de `next/font`) quedó atrapado en un bundle de Turbopack desactualizado — el CSS servido no reflejaba los cambios de `globals.css` pese a recompilar, y se resolvió limpiando `.next` y reiniciando `npm run dev`. Si una fuente nueva "no se ve" tras editar `globals.css`, probar primero un reinicio limpio del dev server antes de asumir que el CSS está mal.
- **Louis George Cafe** — cuerpo y UI (`--font-sans`). No hay archivos comerciales todavía: el token en `app/globals.css` pone `"Louis George Cafe"` primero en el stack (se activa sola si el usuario la tiene instalada localmente en su sistema) con Poppins (Google Fonts) como fallback real para cualquier otro visitante. Cuando lleguen los archivos, se agrega `@font-face` y deja de depender de que esté instalada localmente.
- **BadaBoom BB** — stickers/badges (`--font-sticker`, token reservado en `app/globals.css`, sin uso todavía porque los stickers actuales son imágenes, no texto). Pendiente de archivos comerciales.

### Dials de diseño (skill `design-taste-frontend-v1`)

`DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 6` · `VISUAL_DENSITY: 4` — landing de bienestar/salud con lenguaje Y2K-retro juguetón pero con credibilidad médica que cuidar, así que el motion se aplica con moderación (spring physics en hover, entradas con stagger al hacer scroll) y no como micro-interacciones perpetuas por defecto en cada elemento.

Íconos: `lucide-react` (ya instalado en el proyecto; se mantiene por consistencia en vez de agregar Phosphor/Radix).

---

## Página — Well Brain Method (home, `/`)

**Objetivo:** presentar la marca, generar conexión con Carmen, explicar el método, y ofrecer varias puertas de entrada (asesoría, podcast, YouTube, recursos) antes de la agenda y las reseñas. Narrativa, no un stack de venta directa.

**1. Hero** — fondo rosa vibrante (`#FF4F8B`)
- Layout split: foto de Carmen a la **derecha** (`public/photos/carmen-hero-2.png` = `carmensinfondo.png`, cutout con una flor decorativa detrás ya incluida en el propio PNG), contenido a la izquierda, con entrada simple de fade + scale (adaptado de `components/ui/hero-section-2.tsx`, prop `imageOnLeft={false}`).
- La imagen usa `background-size: contain` (no `cover`): se ve completa sobre el fondo rosa, sin recortar la cabeza ni la flor.
- **Historial:** empezó con la foto a la izquierda (`carmen-hero.jpg`) y con `cover` (recortaba la cabeza); el usuario pidió invertir el lado y cambiar la foto por `carmensinfondo.png`. La animación original de `clip-path` diagonal (cortina) se quitó por completo: con la imagen en `contain` (no a sangre completa), el corte diagonal terminaba tapando parte de la foto/flor — se reemplazó por un fade + scale simple que nunca recorta el contenido. Columnas del hero a 50/50 (antes 40/60) e imagen alineada contra el borde interior de su columna, para que quede menos espacio vacío entre el texto y la foto.
- Kicker/logo: wordmark Well Brain.
- Headline: "Neurociencia aplicada a tu bienestar, con respaldo médico real."
- Subheadline: "Well Brain traduce la ciencia del cerebro en hábitos que sí se sostienen: sueño, enfoque, estrés y energía, sin promesas vacías."
- Dos botones pareados: **"Agenda tu asesoría 1:1"** (sólido, → `/#agenda`) y **"Ver recursos"** (outline, → `/productos`).
- Fila de credenciales (reemplaza la fila de contacto del componente original): "Médica · Epidemióloga clínica · Neurociencia aplicada al bienestar".

**2. Marquee** — franja lila (`#B99CFF`), conector visual, no cuenta como sección de contenido
- "BETTER HABITS, STRONGER MIND" repetido en loop con ícono `sparkles` como separador.

**3. Qué es Well Brain** — fondo blanco cálido (`#FFF8F0`) — **rediseñada** (v2, ver nota abajo)
- Layout asimétrico: headline + texto + badge pill "Ciencia, no tendencias" a la izquierda; a la derecha una foto tipo polaroid (rotada, marco crema, sombra) de un cuarto real (`public/photos/room.jpg`), con un sticker de marca ("Better Habits, Stronger Mind", `public/brand/sticker-habits.png`) superpuesto en la esquina.
- Headline: "¿Qué es Well Brain?"
- Texto: "Well Brain nació de una pregunta simple: ¿por qué sabemos tanto sobre el cerebro y aun así nos cuesta tanto aplicarlo? Es el espacio donde la neurociencia deja de ser teoría y se convierte en un método: claro, personalizado y honesto, para dormir mejor, pensar con más claridad y sostener los hábitos que de verdad importan."
- **Nota de rediseño:** la v1 de esta sección usaba un gradiente mauve→blush con una imagen de cerebro (`brain-y2k.jpg`) que en realidad traía un menú contextual de Windows superpuesto (artefacto de la captura de pantalla original) — se veía roto. El usuario la marcó como "horrible" y pidió rediseño completo + cambiar la imagen por una de un cuarto. Se resolvió con el layout asimétrico descrito arriba.

**4. About / Saludo de Carmen** — fondo turquesa sólido (`#2CCCD3`)
- Foto de Carmen con máscara blob sobre panel **amarillo pastel liso** (`#FFEA93`, un solo div, sin partición de color) — pasó por coral/lila, luego rosa/amarillo pastel partido, luego blanco cálido liso (no gustó), hasta quedar en amarillo pastel liso.
- Eyebrow: "ABOUT"
- Headline: "Hola, soy Carmen."
- Texto: "Soy médica y epidemióloga clínica, especializada en neurociencia aplicada al bienestar. Pero antes que nada, soy alguien que también tuvo que reaprender a usar su propio cerebro: el cansancio, la dispersión y el estancamiento los viví en carne propia antes de convertirlos en mi campo de estudio. Hoy acompaño a personas que se sienten así a encontrar, con evidencia real, el camino de vuelta a su enfoque y su energía."
- Botón: "Conoce mi historia completa" → `/sobre-carmen`

> **Historial de orden:** originalmente "About/Saludo" iba antes que "Qué es Well Brain" (con blanco cálido y turquesa respectivamente). El usuario pidió invertir el orden de contenido — Qué es Well Brain va primero — pero manteniendo el color de cada posición tal cual estaba (posición 3 = blanco cálido, posición 4 = turquesa), así que solo se movió el copy/imágenes entre los dos componentes, no el color.

**5. Podcast / Red social (placeholder)** — fondo blanco cálido
- Panel cuadrado rosa a la izquierda con marco crema interior alrededor del arte del podcast (placeholder, `public/photos/podcast-placeholder.jpg`) y el sticker "Brain Coders" (`public/brand/sticker-braincoders.png`) superpuesto en la esquina inferior derecha, a la derecha el texto.
- Headline: "Síguenos"
- Texto: "Muy pronto vas a poder encontrar más contenido de Well Brain en nuestras redes y en un espacio dedicado a conversaciones sobre neurociencia aplicada."
- Botón: "Próximamente" (sin link activo hasta confirmar el canal real).

**6. Opciones** — fondo amarillo pastel (`#FFEA93`) — **rediseñada** (v5, galería de imágenes tipo acordeón)
- Eyebrow "Cuatro caminos, un mismo método" + headline "Elige por dónde empezar" + subheadline: "Ya sea que quieras un acompañamiento personalizado, escuchar, mirar o leer primero, hay una puerta de entrada pensada para vos." + sticker "The Well Brain Method" (`public/brand/sticker-mug.png`) flotando junto al headline (solo desktop).
- Componente `components/ui/options-gallery.tsx`: 4 paneles con foto de fondo (`object-cover`) en fila (patrón "image gallery" pedido explícitamente por el usuario vía snippet de shadcn) — en desktop cada panel crece al hover empujando a los demás, con degradado oscuro inferior y el texto (kicker + título) siempre visible y la descripción apareciendo al hover; en mobile se apilan verticales con todo el texto siempre visible (sin depender de hover). Cada panel suma un ícono en un chip circular crema arriba a la izquierda (`CalendarHeart`/`Headphones`/`BookOpen`/`Video` de lucide-react) para que no se vea vacío arriba de las tarjetas. El crecimiento al hover se maneja con estado de React + `layout` de framer-motion (spring `stiffness: 220, damping: 28`) en vez de animar `width` por CSS directo, porque animar `width` no es una propiedad acelerada por GPU y se sentía poco fluido — el usuario lo notó y pidió corregirlo.
- **Asesoría 1:1** — foto `option-asesoria.jpg` (`Reference/Imagen8.jpg`), kicker "Acompañamiento 1:1" — "Un plan diseñado contigo, no copiado de un feed." → `/#agenda`
- **Escúchanos** — foto `option-escuchanos.jpg` (`Reference/Imagen9.jpg`), kicker "Podcast" — "Conversaciones sobre neurociencia aplicada, en formato podcast." → placeholder
- **Recursos y e-books** — foto `option-recursos.jpg` (`Reference/Imagen11.jpg`), kicker "Guías gratuitas" — "Guías gratuitas para empezar a aplicar hoy mismo." → `/productos`
- **Míranos** — foto `option-miranos.jpg` (`Reference/pexels-kari-alfonso-2151442665-36247909.jpg`, teléfono retro naranja), kicker "Video" — "Contenido en video para llevar la ciencia a tu día a día." → placeholder YouTube
- **Historial de rediseño:** v1 bento asimétrico estático sobre fondo amarillo pastel. v2 "bouncy cards" con paneles de degradado sobre amarillo intenso — rechazado. v3 tarjetas de color plano sobre fondo gris oscuro — rechazado. v4 volvió al amarillo pastel con tarjetas de color plano + más copy. v5 (actual) es esta galería de fotos en acordeón. Hubo un intento v6 (tarjetas polaroid sobre fondo lila) que el usuario pidió revertir ("deja ese como estaba"), así que v5 quedó como versión vigente.
- **Nota sobre las fotos:** se marcó al usuario que Imagen8/9/11 son fotos editoriales de modelos que no son Carmen (una con las piernas sobre un escritorio junto a un anuncio de "Pop Up Barcelona", otra recostada en un sillón) y que podían generar confusión de marca en un sitio médico. El usuario confirmó explícitamente que las quiere igual, así que quedaron aplicadas.

**7. Agenda (`#agenda`) — Coming soon** — fondo blanco cálido
- Headline de sección: "Agenda tu asesoría 1:1" + subtexto "Así va a funcionar tu sesión en cuanto abramos el sistema de reservas en línea."
- 4 pasos numerados (grid 2×2 en mobile, 4 columnas en desktop): **1. Elegís el horario** (calendario con disponibilidad real) · **2. Confirmás tu sesión** (confirmación por correo/WhatsApp) · **3. Diagnóstico inicial** (objetivos, rutina, hábitos actuales) · **4. Plan personalizado** (se ajusta a medida que avanzas).
- Debajo, el bloque "Coming soon": card con borde punteado, badge "Coming soon" y el texto "Estamos preparando el sistema de reservas en línea. Muy pronto vas a poder elegir día y hora directamente aquí."
- **Historial:** la v1 de esta sección era solo el bloque "Coming soon", sin los 4 pasos (se habían quitado en la primera redefinición de la home). El usuario la vio "muy vacía" y pidió reincorporar el proceso — son los mismos 4 pasos que ya existían en la especificación original del Componente global 1 (Agenda en vivo), reutilizados aquí.

**8. Formulario de suscripción** — fondo coral (`#FF6B57`) — layout a dos columnas
- Card blanco cálido con el formulario a la **izquierda**; a la derecha una foto (`public/photos/subscribe-room.jpg`, `Reference/Fondo.jpg`) con marco crema y el sticker "Control Your Life" (`public/brand/sticker-control.png`) superpuesto en la esquina inferior izquierda. En mobile se apilan (formulario arriba, foto abajo).
- Headline: "Súmate a la comunidad Well Brain"
- Texto: "Recibe promociones, novedades y contenido exclusivo directo a tu correo."
- Campos: Nombre · Correo electrónico
- Botón: "Quiero suscribirme"
- Envío simulado en cliente (sin backend todavía).
- **Historial:** v1 era una sola card centrada sin imagen. El usuario pidió el formulario a la izquierda y una imagen a la derecha.

**9. Reseñas** — fondo blanco cálido, sección final
- `TestimonialCard` con 3 testimonios placeholder, formato pilar + cita + iniciales:
  - [Sueño] "Dejé de despertarme cansada después de tres semanas aplicando el plan." — M.R.
  - [Enfoque] "Por primera vez en meses pude terminar un trabajo sin revisar el celular cada cinco minutos." — L.G.
  - [Hábitos] "Entendí por qué mis intentos anteriores no se sostenían, y esta vez sí lo logré." — A.P.

**Pendiente:** reemplazar por 5-8 testimonios reales de clientas cuando Carmen los recopile. El contenido de "para quién es / no es" y el FAQ completo (que vivían en una versión anterior de la home) quedan pendientes de reubicar en Sobre Carmen o el footer — no se agregan de vuelta a la home sin pedido explícito.

---

## Página — Sobre Carmen (`/sobre-carmen`)

**Objetivo:** transferir autoridad médica y cercanía humana a quien ya vio la oferta pero necesita confiar más antes de decidir.

**Hero**
Componente `HeroSection` (`components/ui/hero-section-2.tsx`, mismo componente base que el Hero de la home, sin espejar aquí). Headline: "Antes de ser un método, esto fue mi propia historia." Subheadline: "Soy médica, epidemióloga clínica y, antes que nada, alguien que también tuvo que reaprender a usar su cerebro." Imagen de fondo: foto real de Carmen. Fila de contacto reutilizada como credenciales: Médica · Epidemióloga clínica · Neurociencia aplicada al bienestar.

**Sección — De la evidencia a la vida real**
"Soy Carmen Susana, médica y epidemióloga clínica especializada en neurociencia aplicada al bienestar. Durante años estudié cómo la ciencia explica el comportamiento humano y aprendí, en carne propia, que saber no es lo mismo que aplicar. Well Brain nació de esa distancia: entre lo que la ciencia sabe sobre el cerebro y lo que la mayoría de las personas realmente hace todos los días."
Quote: "Si yo pude cambiar mi mente, mi enfoque y mi vida, tú también puedes."
(Espacio de foto en consulta/trabajando, placeholder, pendiente.)

**Sección — Cómo trabajo**
Headline: "Ciencia aplicada, no fórmulas mágicas."
"Traduzco la evidencia en herramientas concretas para tu sueño, tu enfoque, tu nutrición y tus hábitos diarios. No prometo transformaciones instantáneas ni fórmulas universales, porque no existen. Prometo un método claro, honesto y basado en lo que la neurociencia realmente sabe sobre cómo cambiamos."

**Sección — Valores**
- Claridad antes que complejidad
- Evidencia antes que tendencias
- Disciplina que libera, no que castiga
- Honestidad sin promesas vacías

**Galería** — 3 espacios de fotos candid, placeholder, pendiente.

**CTA de cierre**
Headline: "¿Lista para conocer tu propio método?" · Botón: "Agenda tu asesoría 1:1" → ancla a `/#agenda`

---

## Página — Productos (`/productos`)

**Objetivo:** dar valor educativo gratuito para nutrir a quien todavía no está lista para agendar, y presentar el lanzamiento de los e-books. Página "de entrada suave": no vende, educa.

**Hero**
- Headline: "Ciencia que puedes aplicar hoy."
- Subheadline: "Recursos gratuitos y guías para llevar la neurociencia a tu día a día, mientras decides si el acompañamiento 1:1 es para ti."

**Sección — Aprende algo hoy**
Mini-blog: 3 tarjetas con un tip corto basado en evidencia (menos de un minuto de lectura).
- "¿Por qué dormir mal arruina tu memoria?" — la falta de sueño profundo reduce la consolidación de recuerdos.
- "3 señales de que tu cerebro está en piloto automático" — y qué hacer con cada una.
- "La diferencia entre cansancio y fatiga mental" — y por qué confundirlos te hace tomar las decisiones equivocadas.

**Sección — E-books Well Brain (Próximamente)**
Badge: "PRÓXIMAMENTE"
- Headline: "Guías Well Brain: neurociencia aplicada, en tus manos."
- Subheadline: "Estamos preparando una colección de e-books que traducen la evidencia científica en pasos simples para tu sueño, tu enfoque, tu nutrición y tus hábitos diarios."
- Brain Habits Guide — cómo crear hábitos que sí se sostienen. *(este es el e-book que se ofrece en el pop-up de lead magnet)*
- Brain Sleep Guide — la ciencia detrás de un sueño que realmente descansa.
- Brain Nutrition Guide — qué comer para sostener tu enfoque y tu energía.
- Brain Study Guide — organiza tu estudio según cómo aprende tu cerebro.
- Brain Longevity Guide — hábitos de hoy para un cerebro fuerte mañana.

Formulario de lista de espera: Nombre y apellido · Correo electrónico · WhatsApp (opcional). Botón: "Quiero ser Brain Coder" · Microcopy: "Cero spam. Solo escribimos cuando hay algo real que compartir." Envío simulado en el cliente.

**CTA de cierre**
"¿Quieres un plan hecho para ti, no solo tips generales? Conoce el Well Brain Method →" → `/#agenda`

---

## Footer (transversal, todas las páginas)

- **Well Brain** — logo + tagline: **"Better Habits, Stronger Mind"**
- **Navegación** — Well Brain Method · Sobre Carmen · Productos
- **Síguenos** — Instagram · TikTok · (confirmar canales activos)
- **Contacto** — botón flotante de WhatsApp ("¿Dudas? Escríbeme") + correo de contacto

**Disclaimer médico-legal (obligatorio en el footer):**
"La información y los programas de Well Brain tienen fines educativos y de acompañamiento en hábitos de bienestar. No constituyen diagnóstico, tratamiento médico ni sustituyen la consulta con un profesional de la salud. Si tienes una condición médica, consulta siempre a tu médico tratante."

---

## Pendientes de contenido antes de publicar

- Recopilar 5-8 testimonios reales de clientas, organizados por pilar.
- Escribir o aprobar más tips/artículos para "Aprende algo hoy" más allá de los 3 ya escritos (Productos).
- Definir precios/paquetes de la asesoría 1:1 (o manejar "precio a solicitud").
- Confirmar modalidad: online, presencial o ambas.
- Elegir el sistema de calendario (Calendly, Cal.com o Acuity) para `#agenda`.
- Decidir si se cobra al momento de agendar o después de la primera sesión.
- Elegir la herramienta de email marketing/automatización para el pop-up de lead magnet.
- Confirmar canales activos de redes sociales para el footer y la sección Podcast/Red social de la home.
- Fotos reales adicionales: foto de Carmen en consulta/trabajando, galería de 3 fotos candid, arte real del podcast (hoy usa imagen placeholder temática).
- Reubicar el contenido de "para quién es / no es" y el FAQ completo (salían de la home en esta iteración) en Sobre Carmen o el footer.

## Estado de implementación

Sitio construido en este proyecto: **Next.js (App Router) + TypeScript + Tailwind CSS v4 + framer-motion + lucide-react**, corriendo en `localhost:3000` (`npm run dev`).

- **Paleta y sistema visual:** ver sección "Sistema visual (home)" arriba — fuente de verdad completa vive en `app/globals.css` (tokens `@theme` de Tailwind v4) y en el código de los componentes.
- **Assets reales en uso:** `public/photos/carmen-hero-2.png` (retrato de Carmen, Hero), `public/photos/carmen-hero.jpg` (otro retrato, sección About), `public/brand/logo-wellbrain.png` (wordmark), `public/photos/room.jpg` (foto de cuarto real, sección "Qué es Well Brain"), `public/photos/podcast-placeholder.jpg` (placeholder temático para Podcast/Red social), `public/photos/subscribe-room.jpg` (foto del Formulario de suscripción), `public/photos/option-asesoria.jpg`, `option-escuchanos.jpg`, `option-recursos.jpg`, `option-miranos.jpg` (las 4 fotos de la galería de Opciones, todas de `Reference/`). `public/photos/brain-y2k.jpg` quedó sin usar (traía un menú contextual de Windows superpuesto, artefacto de la imagen original).
- **Stickers en uso** (todos de `Reference/`, superpuestos en esquinas con leve rotación + `drop-shadow`, dando sensación de scrapbook/Y2K — pedido explícito del usuario, "en general pon más stickers a lo largo de la página"):
  - `sticker-habits.png` ("Better Habits, Stronger Mind") — en "Qué es Well Brain"
  - `sticker-badge-oval.png` (`Imagen5.png`, "Better Habits, Stronger Mind" óvalo rosa) — en About/Saludo de Carmen
  - `sticker-braincoders.png` (`Imagen1.png`, "Brain Coders") — en Podcast/Síguenos
  - `sticker-mug.png` (`Imagen7.png`, "The Well Brain Method") — junto al headline de Opciones (solo desktop)
  - `sticker-magnifier.png` (`Imagen4.png`, lupa) — en el bloque "Coming soon" de Agenda
  - `sticker-control.png` (`Imagen2.png`, "Control Your Life") — en el Formulario de suscripción
  - `sticker-badge-bolt.png` (`Imagen6.png`, "Better Habits, Stronger Mind" con rayo) — junto al headline de Reseñas (solo desktop)
- Las fotos con marco crema (Podcast, Qué es Well Brain, Formulario de suscripción) llevan además una leve rotación (`rotate -2°/2°/-3°`) y `shadow-2xl` para que se vean "torcidas" tipo polaroid pegada, en vez de perfectamente alineadas — pedido explícito del usuario.
- **Componentes de la home:** `components/ui/hero-section-2.tsx` (hero adaptado, foto a la derecha), `components/Marquee.tsx`, `components/AboutIntro.tsx`, `components/WhatIsWellBrain.tsx` (rediseñada v2), `components/PodcastSocial.tsx`, `components/ui/options-gallery.tsx` (Opciones, rediseñada v5: galería de fotos en acordeón), `components/AgendaComingSoon.tsx`, `components/SubscribeForm.tsx`, `components/TestimonialsSection.tsx`.
- Sobre Carmen y Productos: contenido definido arriba, construcción de esas páginas pendiente de una siguiente iteración.

## Fuera de alcance de este documento

Diseño visual pixel-a-pixel más allá de lo resumido en "Sistema visual"; la fuente de verdad completa de esos detalles vive en el código de este proyecto de Claude Code.
