/*
  DESTELLOS-DATA.JS
  ------------------------------------------------------------
  Aquí viven TODAS las entradas de "Viernes de Destello".
  Tanto index.html (que muestra la más reciente) como
  destellos.html (que las muestra todas) leen de este mismo
  archivo, así que solo hay que actualizar un lugar.

  Cómo agregar una nueva entrada:
  1. Sube la imagen a la carpeta /destellos/ del repositorio
     (por ejemplo: destellos/2026-07-10.jpg)
  2. Copia el bloque { ... } de abajo, pégalo como primer
     elemento del arreglo DESTELLOS (antes del más reciente
     que tengas), y edita sus valores.
  3. El campo "fecha" SIEMPRE debe ir en formato AAAA-MM-DD
     (para poder ordenarlas). "fechaDisplay" es el texto que
     se ve en la página, puedes escribirlo como quieras.

  Tip: la herramienta admin.html genera este bloque por ti,
  solo cópialo y pégalo aquí.
  ------------------------------------------------------------
*/

const DESTELLOS = [
  {
    fecha: "2026-11-13",
    fechaDisplay: "13 de noviembre de 2026",
    imagen: "destellos/destello20261113.jpeg",
    titulo: "Gracias por traerme hasta aquí",
    reflexion: [
      "¿Cuándo fue la última vez que te detuviste a agradecerte por todo lo que has hecho este año?",
      "Estamos llegando a esa época en la que empezamos a hacer cuentas. Revisamos las metas que cumplimos, las que dejamos a medias y todas esas cosas que dijimos que haríamos y todavía no suceden.",
      "Pero pocas veces hacemos un balance de todo lo que nos costó llegar hasta aquí.",
      "De las decisiones que tomamos sin saber qué iba a pasar. De las veces que tuvimos que cambiar de planes. De los momentos difíciles que atravesamos y también de todas esas pequeñas cosas que nos hicieron felices.",
      "Porque este año no solo se trata de lo que lograste o de lo que quedó pendiente.",
      "También se trata de lo que viviste, de las personas que conociste, de lo que aprendiste sobre ti y de las veces que encontraste la manera de seguir adelante.",
      "Y no, no tienes que encontrarle el lado positivo a todo lo que pasó. Hay cosas que simplemente fueron difíciles y también merecen ser reconocidas.",
      "Antes de empezar a pensar en todo lo que quieres hacer el próximo año, date un momento para mirar a la persona que has sido durante este.",
      "Quizás tienes mucho más que agradecerte de lo que imaginas. ✨"
    ],
    idea: "Graba un video corto, hablando a cámara o utilizando clips de diferentes momentos de tu año, y comparte algunas cosas que te gustaría agradecerte. No tienen que ser grandes logros. Puedes agradecerte por una decisión que tomaste, algo que te atreviste a intentar, una situación que enfrentaste o simplemente por haber estado presente para ti en un momento difícil. Hook: “Antes de que termine el año, quiero agradecerme por…” Puedes terminar tu video con una frase como: “Gracias por todo lo que hiciste para traerme hasta aquí”.",
    pregunta: "Si hoy pudieras agradecerle algo a la persona que has sido durante estos meses, ¿qué le dirías?"
  },
  {
    fecha: "2026-07-17",
    fechaDisplay: "17 de julio de 2026",
    imagen: "destellos/destello20260717.jpeg",
    titulo: "El miedo a crecer es tan real como el miedo a empezar",
    reflexion: [
      "Hay algo curioso que pasa cuando empiezas a ver resultados en tu contenido.",
      "Un video que de repente llega a más personas. Comentarios de gente que no conoces. Seguidores nuevos que llegaron solos. Y en lugar de celebrarlo y seguir, algo dentro de ti frena.",
      "¿Y si no puedo mantener esto? ¿Y si el siguiente video no es tan bueno? ¿Y si la gente espera demasiado de mí ahora?",
      "El miedo a crecer es tan real como el miedo a empezar. Solo que nadie habla de él porque se supone que el crecimiento es lo que queremos. Y sí, lo queremos. Pero también nos descoloca. Nos saca de la zona donde nos sentíamos seguras, donde nadie nos veía demasiado, donde el riesgo de decepcionar era pequeño.",
      "Pero crecer no significa que ahora tienes que ser perfecta. Significa que más personas encontraron valor en lo que compartes. Y eso no es una presión, es una confirmación de que vas por buen camino.",
      "No te sabotees justo cuando las cosas empiezan a funcionar. Ese momento en que sientes que algo está creciendo es exactamente el momento de seguir, no de esconderte. ✨"
    ],
    idea: "Graba un video compartiendo algo que te sorprendió de tu proceso de crear contenido. Algo que no esperabas encontrar en el camino. Hook: “Esto es lo que nadie me dijo que iba a sentir cuando empecé a crear contenido…”",
    pregunta: "¿Alguna vez has sentido el impulso de frenar justo cuando algo empieza a funcionar? ¿Qué crees que hay detrás de ese freno?"
  },
  {
    fecha: "2026-07-03",
    fechaDisplay: "3 de julio 2026",
    imagen: "destellos/destello20260703.jpeg",
    titulo: "Ahí está tu contenido. Siempre ha estado ahí",
    reflexion: [
      "Hay algo que pasa todos los días en tu vida y que sin darte cuenta ya es contenido.",
      "La conversación con una clienta que te hizo ver algo diferente. El error que cometiste y lo que aprendiste de él. La decisión que tomaste y por qué. El proceso detrás de algo que para ti ya es rutina pero que para alguien más es completamente nuevo.",
      "Todo eso tiene valor. Muchísimo valor.",
      "El problema es que cuando llevamos tiempo haciendo lo que hacemos, empezamos a creer que lo que sabemos es obvio. Que no vale la pena compartirlo porque “cualquiera lo sabe.” Pero no cualquiera lo sabe. Lo sabes tú, porque lo has vivido, porque lo has practicado, porque lo has construido con el tiempo.",
      "Tu experiencia cotidiana es tu mayor fuente de contenido. No necesitas buscar temas complicados ni tendencias del momento. Solo necesitas voltear a ver lo que ya estás viviendo y preguntarte: ¿qué hay aquí que alguien más necesita escuchar?",
      "Ahí está tu contenido. Siempre ha estado ahí. ✨"
    ],
    idea: "Piensa en algo que hiciste esta semana en tu trabajo o en tu vida que te pareció completamente normal. Graba un video explicándolo como si se lo contaras a alguien que apenas empieza. Hook: “Esto que hago todos los días quizás no es tan obvio como crees…”",
    pregunta: "¿Qué parte de tu experiencia o conocimiento has descartado como contenido porque creías que era demasiado obvio o sencillo?"
  },
    {
    fecha: "2026-07-10",
    fechaDisplay: "10 de julio de 2026",
    imagen: "destellos/destello20260710.jpeg",
    titulo: "No tienes que reinventarte",
    reflexion: [
      "Nadie nos dijo que emprender en estos tiempos incluía tener que crear contenido.",
      "Porque la realidad es que los negocios que no están activos en redes poco a poco están siendo olvidados. Ahora ya no basta con dar un buen servicio o ofrecer un buen producto, si quieres que tu negocio crezca, necesitas estar en redes sociales. Grabar, publicar, crear contenido.",
      "Y nadie nos preparó para eso.",
      "Seguramente te has sentido frustrada y sobrepasada, sin ideas de contenido, scroleando sin fin en búsqueda de ideas, y quizá no te has dado cuenta que ya tienes todo el contenido que necesitas.",
      "No necesitas hacer siempre videos superelaborados o estar en las tendencias del momento. A veces solo necesitas contar lo que ya vives. Cómo llegaste hasta donde estás. Por qué decidiste emprender en esto. Qué aprendes, cómo se ve un día real en tu negocio. Los procesos detrás de lo que haces. Las decisiones que tomas y por qué.",
      "Todo eso es contenido. Y es valioso precisamente porque es tuyo, porque nadie más puede contarlo exactamente como tú.",
      "No tienes que reinventarte para crear contenido. Solo tienes que compartir lo que ya eres. ✨"
    ],
    idea: "Graba un video contando a qué te dedicas y por qué lo haces. No el discurso formal, sino la razón real que te mueve todos los días. Hook: “Me dedico a esto y la razón por la que lo hago es…”",
    pregunta: "¿Cómo te has sentido en este proceso de aprender a crear contenido siendo experta en algo completamente diferente? ¿Qué ha sido lo más retador?"
  },
];
