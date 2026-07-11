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
    fecha: "2026-07-03",
    fechaDisplay: "3 de julio 2026",
    imagen: "destellos/destello20260703.jpg",
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
