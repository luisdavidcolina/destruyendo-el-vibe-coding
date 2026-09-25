/* 05 - Tercer acto y cierre: laminas 11, 12, 13 y 14

   11 La pila de capas. Los nombres van al hueso, una o dos palabras, porque
      lo que argumenta es la pila con sus anos y no la redaccion de cada
      capa. Lo demas se dice hablando.
   12 Reutiliza el componente .enf de la lamina 04 TAL CUAL, con las mismas
      clases y los mismos tiempos, y sin una sola regla propia de estilo. El
      eco visual es el recurso narrativo de la ponencia: la sala reconoce la
      forma y entiende sola que es el mismo error otra vez. La barra de
      arriba mide lo mismo que la de la 04, 132 pixeles, para que el eje
      caiga en el mismo punto de la pantalla.
   13 y 14 quedan como estaban.

   El rotulo pequeno de seccion salio de todas las laminas del deck, por
   decision de base.css, asi que aqui tampoco se escribe. */
window.DECK.push(

/* ─────────────── 11 Ninguna capa borro la de abajo ─────────────── */
{
  section: 'Las capas y sus modas',
  title: 'Ninguna capa borró la de abajo',
  min: '8:05 a 8:40',
  html: `
  <div class="pad">
    <h1 class="title anim" data-d="2">Ninguna capa borró la de abajo</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="pila anim f" data-d="3">
        <div class="cp ahora"><span class="cp-i"><svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 7.4v4.2M12 11.6L6.4 16M12 11.6L17.6 16"/></svg></span><span class="cp-a">ahora</span><span class="cp-n">Agentes</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 000-8 6 6 0 00-11.6 2A3.5 3.5 0 006 18z"/></svg></span><span class="cp-a">2010</span><span class="cp-n">Nube</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="8" height="7" rx="1"/><rect x="13" y="4" width="8" height="7" rx="1"/><rect x="3" y="13" width="8" height="7" rx="1"/><rect x="13" y="13" width="8" height="7" rx="1"/></svg></span><span class="cp-a">1990</span><span class="cp-n">Bibliotecas</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><path d="M9 4c-2 0-2 3-2 4s0 4-3 4c3 0 3 3 3 4s0 4 2 4"/><path d="M15 4c2 0 2 3 2 4s0 4 3 4c-3 0-3 3-3 4s0 4-2 4"/></svg></span><span class="cp-a">1957</span><span class="cp-n">Alto nivel</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"/></svg></span><span class="cp-a">1950</span><span class="cp-n">Ensamblador</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="7.5" cy="10" r="1.1"/><circle cx="11" cy="10" r="1.1"/><circle cx="14.5" cy="10" r="1.1"/><circle cx="7.5" cy="14" r="1.1"/><circle cx="14.5" cy="14" r="1.1"/></svg></span><span class="cp-a">1940</span><span class="cp-n">Tarjetas</span></div>
      </div>

      <!-- La franja no lleva rotulo escrito: el sello de la izquierda dice
           que son credenciales sin gastar una sola palabra, y de que van se
           cuenta hablando. Los nombres largos quedan en su codigo o en su
           marca, que es como aparecen en las ofertas de trabajo. -->
      <div class="credenciales anim" data-d="6">
        <span class="cr-sello"><svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.4"/><path d="M8.4 13.4L7 21l5-2.5 5 2.5-1.4-7.6"/></svg></span>
        <span class="cr"><img class="cr-logo" src="assets/logos/github.svg" alt="">GH-300</span>
        <span class="cr"><img class="cr-logo" src="assets/logos/microsoft.svg" alt="">AI-103</span>
        <span class="cr"><img class="cr-logo" src="assets/logos/anthropic.svg" alt="">Claude</span>
        <span class="cr"><img class="cr-logo ancho" src="assets/logos/aws.svg" alt="">AWS</span>
        <span class="cr"><img class="cr-logo" src="assets/logos/google-cloud.svg" alt="">Google</span>
        <span class="cr"><img class="cr-logo ancho" src="assets/logos/ibm.svg" alt="">IBM</span>
      </div>
    </div>
  </div>`
},

/* ─────────────── 12 Creen que entienden, y no ─────────────── */
{
  section: 'Las bases',
  title: 'Creen que entienden, y no',
  min: '8:40 a 9:10',
  html: `
  <div class="pad">
    <h1 class="title">Creen que entienden, y no</h1>
    <div class="rule"></div>

    <!-- Misma pieza .enf de la lamina 04. Mismas clases, mismo orden, mismos
         altos de mitad y mismos tiempos de animacion. Lo unico que cambia son
         los datos, que es justo lo que la pieza recibe por el marcado.

         La barra de arriba mide 132 pixeles, exactamente la misma que la de
         la 04, asi que el eje cae en el mismo punto de la pantalla y la sala
         ve arrancar la misma imagen de hace nueve minutos. La de abajo baja a
         25, que es lo que le toca por proporcion frente a 132. Que la mitad
         inferior quede casi vacia no es un descuido: es el argumento.

         No lleva el signo .sg que si llevan las barras de la 04, porque alli
         los numeros son variaciones y aqui son proporciones. Un mas o un
         menos delante diria algo falso. -->
    <div class="body-area enf-area">
      <div class="enf">

        <div class="enf-arriba">
          <span class="enf-eti">Los junior que dicen entender</span>
          <span class="enf-cifra" style="--to:85"><i class="nm"></i><i class="pc">%</i></span>
          <span class="enf-barra" style="--h:132px"></span>
        </div>

        <div class="enf-eje"></div>

        <div class="enf-abajo">
          <span class="enf-barra" style="--h:25px"></span>
          <span class="enf-cifra" style="--to:16"><i class="nm"></i><i class="pc">%</i></span>
          <span class="enf-eti">Los senior que lo confirman</span>
        </div>

      </div>
    </div>

    <div class="fuente anim" data-d="8">BairesDev, Dev Barometer, 1.569 desarrolladores en 77 países, 2026</div>
  </div>`
},

/* ─────────────── 13 Reflexion final ─────────────── */
{
  section: 'Cierre',
  title: 'Reflexión final',
  min: '9:10 a 9:45',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="final">
      <p class="fin-frase anim" data-d="2">
        El que cree que ya sabe usar la IA<br>es el que peor la está usando.
      </p>

      <div class="fin-cita anim" data-d="5">
        <p>&ldquo;Uno de mis días más productivos fue tirar a la basura mil líneas de código.&rdquo;</p>
        <span>Ken Thompson<i>creador de Unix y del lenguaje B, premio Turing</i></span>
      </div>
    </div>
  </div>`
},

/* ─────────────── 14 Contacto y referencias ───────────────
   Es la unica lamina sin tope de palabras: queda proyectada toda la ronda de
   preguntas y la sala la fotografia, asi que se compone para ser leida.

   La columna de la izquierda es el camino corto. El codigo manda, con dos
   esquinas de encuadre que dicen que se escanea sin tener que explicarlo, y
   debajo la direccion escrita para quien este demasiado atras como para que
   la camara enganche. Los tres enlaces llevan la marca de su red dibujada en
   linea, que es como se reconocen de un vistazo desde el fondo del salon.

   La columna de la derecha son las catorce fuentes, en dos columnas con el
   numero en color y el texto al gris de cuerpo. No van en letra pequena:
   estan ahi justamente para que alguien las lea. */
{
  section: 'Contacto',
  title: 'Contacto y referencias',
  min: 'queda proyectada',
  html: `
  <div class="pad">
    <h1 class="title sm anim" data-d="2">Contacto y referencias</h1>
    <div class="rule"></div>

    <div class="body-area cierre-contacto">

      <div class="col-qr">
        <div class="qr-bloque anim z" data-d="3">
          <div class="qr-marco">
            <img src="assets/img/qr-enlaces.svg" alt="Código para abrir la página de enlaces">
          </div>
          <span class="qr-url">luisdavidcolina.com/enlaces</span>
        </div>

        <div class="enlaces anim" data-d="5">
          <div class="enl">
            <span class="enl-i"><svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></span>
            <span class="enl-u">github.com/luisdavidcolina</span>
          </div>

          <div class="enl">
            <span class="enl-i"><svg viewBox="0 0 72 72"><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/></svg></span>
            <span class="enl-u">linkedin.com/in/luisdavidcolina</span>
          </div>

          <div class="enl">
            <span class="enl-i"><svg class="ln" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.9 5.7 3.9 9s-1.4 6.3-3.9 9c-2.5-2.7-3.9-5.7-3.9-9s1.4-6.3 3.9-9z"/></svg></span>
            <span class="enl-u">luisdavidcolina.com</span>
          </div>
        </div>
      </div>

      <div class="col-refs anim" data-d="6">
        <div class="refs-h">Fuentes</div>

        <div class="ref-cols">
          <div class="ref-col">
            <div class="ref-r"><span class="ref-n">01</span><span class="ref-t">METR, programadores experimentados con IA, julio de 2025</span></div>
            <div class="ref-r"><span class="ref-n">02</span><span class="ref-t">METR, cambio en el diseño del experimento, febrero de 2026</span></div>
            <div class="ref-r"><span class="ref-n">03</span><span class="ref-t">McKinsey, 4.500 desarrolladores en 150 empresas</span></div>
            <div class="ref-r"><span class="ref-n">04</span><span class="ref-t">Base de incidentes de IA de la OCDE, caso PocketOS, abril de 2026</span></div>
            <div class="ref-r"><span class="ref-n">05</span><span class="ref-t">Veracode, seguridad del código generado, 2026</span></div>
            <div class="ref-r"><span class="ref-n">06</span><span class="ref-t">Databricks, State of AI Agents 2026</span></div>
            <div class="ref-r"><span class="ref-n">07</span><span class="ref-t">BairesDev, Dev Barometer, segundo trimestre de 2026</span></div>
          </div>

          <div class="ref-col">
            <div class="ref-r"><span class="ref-n">08</span><span class="ref-t">PwC, Global AI Jobs Barometer 2026</span></div>
            <div class="ref-r"><span class="ref-n">09</span><span class="ref-t">Microsoft Learn, examen GH-300 de GitHub Copilot</span></div>
            <div class="ref-r"><span class="ref-n">10</span><span class="ref-t">Microsoft Learn, retiro del AI-102 y examen AI-103</span></div>
            <div class="ref-r"><span class="ref-n">11</span><span class="ref-t">Pearson VUE, certificaciones de Anthropic</span></div>
            <div class="ref-r"><span class="ref-n">12</span><span class="ref-t">Andrej Karpathy, publicación del 2 de febrero de 2025</span></div>
            <div class="ref-r"><span class="ref-n">13</span><span class="ref-t">Collins English Dictionary, palabra del año 2025</span></div>
            <div class="ref-r"><span class="ref-n">14</span><span class="ref-t">Ken Thompson, folclore documentado de Bell Labs</span></div>
          </div>
        </div>
      </div>

    </div>
  </div>`
}

);
