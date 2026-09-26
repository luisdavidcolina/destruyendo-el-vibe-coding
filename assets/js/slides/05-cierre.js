/* 05 - Tercer acto y cierre: laminas 11 a 15

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

/* ─────────────── 11 Ninguna capa borro la de abajo ───────────────
   Rehecha el 25 de septiembre por la noche. El expositor sentia que la 11 y
   la 12 aportaban poca informacion cada una por su lado. Quedan asi:

   11 Las bases. La pila de capas con los logos de lo que se usaba en cada
      una, que se construye de abajo hacia arriba, porque asi se construyo la
      disciplina. A la derecha el titular real de BairesDev y sus dos cifras.
      Abajo la frase aprobada para esta parte.
   12 Las certificaciones, cada una con su logo, que valida y quien la da.

   Los logos de lenguajes y bibliotecas son de Simple Icons, licencia CC0.
   El de Copilot es de Primer Octicons. */
{
  section: 'Las bases',
  title: 'Ninguna capa borró la de abajo',
  min: '8:05 a 8:45',
  html: `
  <div class="pad">
    <h1 class="title">Ninguna capa borró la de abajo</h1>
    <div class="rule"></div>

    <div class="body-area bases">
      <div class="bs-grid">

        <div class="pila2">
          <div class="c2 c6 ahora"><span class="c2-a">ahora</span><span class="c2-n">Agentes</span><span class="c2-l"><svg class="cp-logo cop" viewBox="0 0 16 16" fill="#1F2328" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"/><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"/></svg></span></div>
          <div class="c2 c5"><span class="c2-a">2010</span><span class="c2-n">Nube</span><span class="c2-l"><img class="cp-logo ancho" src="assets/logos/aws.svg" alt=""><img class="cp-logo" src="assets/logos/google-cloud.svg" alt=""><img class="cp-logo" src="assets/logos/microsoft.svg" alt=""></span></div>
          <div class="c2 c4"><span class="c2-a">1990</span><span class="c2-n">Bibliotecas</span><span class="c2-l"><img class="cp-logo" src="assets/logos/si-react.svg" alt=""><img class="cp-logo" src="assets/logos/si-npm.svg" alt=""></span></div>
          <div class="c2 c3"><span class="c2-a">1957</span><span class="c2-n">Alto nivel</span><span class="c2-l"><img class="cp-logo" src="assets/logos/si-python.svg" alt=""><img class="cp-logo" src="assets/logos/si-javascript.svg" alt=""><img class="cp-logo" src="assets/logos/si-php.svg" alt=""></span></div>
          <div class="c2 c2b"><span class="c2-a">1950</span><span class="c2-n">Ensamblador</span><span class="c2-l"><svg class="cp-logo cop" viewBox="0 0 16 16" fill="#1F2328" aria-hidden="true"><path d="M6.5.75V2h3V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75V5h1.25a.75.75 0 0 1 0 1.5H14v3h1.25a.75.75 0 0 1 0 1.5H14v1.25A1.75 1.75 0 0 1 12.25 14H11v1.25a.75.75 0 0 1-1.5 0V14h-3v1.25a.75.75 0 0 1-1.5 0V14H3.75A1.75 1.75 0 0 1 2 12.25V11H.75a.75.75 0 0 1 0-1.5H2v-3H.75a.75.75 0 0 1 0-1.5H2V3.75C2 2.784 2.784 2 3.75 2H5V.75a.75.75 0 0 1 1.5 0Zm5.75 11.75a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25ZM5.75 5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 5.75 5Zm.75 4.5h3v-3h-3Z"/></svg></span></div>
          <div class="c2 c1"><span class="c2-a">1940</span><span class="c2-n">Tarjetas</span><span class="c2-l"><img class="cp-logo ancho" src="assets/logos/ibm.svg" alt=""></span></div>
        </div>

        <!-- El dato de BairesDev con su titular real en ingles, que es la
             prueba, y las dos cifras como barras horizontales. La de los
             junior casi llena la fila y la de los senior casi no arranca: la
             distancia es el argumento. -->
        <figure class="bs-nota">
          <div class="bs-tit"><img src="assets/img/tit-bairesdev.png" alt="Titular de BairesDev: Only 16% of Senior Developers Say Junior Engineers Fully Understand AI-Generated Code"></div>
          <div class="bs-dato j"><b>85 %</b><span class="bs-barra"><i style="--w:85%"></i></span><span class="bs-eti">junior dice entender</span></div>
          <div class="bs-dato s"><b>16 %</b><span class="bs-barra"><i style="--w:16%"></i></span><span class="bs-eti">senior lo confirma</span></div>
          <figcaption>BairesDev, junio de 2026</figcaption>
        </figure>

      </div>

      <p class="bs-frase">La IA no reemplaza al que estudia. Reemplaza al que dejó de hacerlo.</p>
    </div>
  </div>`
},

/* ─────────────── 12 Lo que hoy se certifica ───────────────
   Seis tarjetas, verificadas en la pagina oficial de cada una el 25 de
   septiembre de 2026. Precio solo donde la pagina lo publica en texto: AWS
   100 USD y Google 200 USD. Las de Microsoft y GitHub dependen del pais. Las
   de Anthropic son para organizaciones del Claude Partner Network. Un solo
   resalte, el GH-300, que es la de la casa en un evento de GitHub. */
{
  section: 'Las bases',
  title: 'Lo que hoy se certifica',
  min: '8:45 a 9:15',
  html: `
  <div class="pad">
    <h1 class="title">Lo que hoy se certifica</h1>
    <div class="rule"></div>

    <div class="body-area certs">
      <div class="ct-grid">
        <article class="ct lit"><img class="ct-logo" src="assets/logos/github-mark.svg" alt=""><b>GH-300</b><span>GitHub Copilot</span><i>GitHub, intermedio</i></article>
        <article class="ct"><img class="ct-logo" src="assets/logos/microsoft.svg" alt=""><b>AI-103</b><span>Agentes en Azure</span><i>Microsoft, intermedio</i></article>
        <article class="ct"><img class="ct-logo" src="assets/logos/anthropic.svg" alt=""><b>Claude Certified</b><span>Cuatro exámenes</span><i>Anthropic, empresas socias</i></article>
        <article class="ct"><img class="ct-logo ancho" src="assets/logos/aws.svg" alt=""><b>AI Practitioner</b><span>Fundamentos de IA</span><i>Amazon, 100 USD</i></article>
        <article class="ct"><img class="ct-logo" src="assets/logos/google-cloud.svg" alt=""><b>ML Engineer</b><span>Aprendizaje automático</span><i>Google Cloud, 200 USD</i></article>
        <article class="ct"><img class="ct-logo ancho" src="assets/logos/ibm.svg" alt=""><b>RAG y agentes</b><span>Certificado profesional</span><i>IBM en Coursera</i></article>
      </div>
    </div>
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

/* ─────────────── El consejo ───────────────
   Las tres lineas que el expositor escribio para cerrar, tal cual, en una
   lamina propia: con la frase de humildad y la cita de Thompson no cabian en
   cincuenta palabras, y el expositor eligio separarlas.

   Debajo, una franja del calendario de contribuciones de GitHub. Casi toda
   en gris, que son los años en que los objetivos estaban en mente y no se
   hacian. El ultimo tramo se enciende en verde cuando entra la segunda
   linea, la de "este año los termine todos". No es textura de fondo, es el
   dato dibujado: mucho tiempo esperando y poco tiempo haciendolo.

   La tercera linea entra tarde a proposito. Entre la segunda y la tercera
   el guion pide un silencio, y la lamina lo respeta. */
{
  section: 'Cierre',
  title: 'Es hora de que cumplan los suyos',
  min: '9:30 a 9:50',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="consejo">
      <p class="cj-l cj1">Yo tenía objetivos en mente desde hacía <b>muchos</b> años.</p>
      <p class="cj-l cj2">Este año los terminé todos.</p>

      ${(function () {
        var cols = 60, filas = 7, verdes = 11, celda = 14, paso = 19, r = '';
        var tonos = ['#0E4429', '#006D32', '#26A641', '#39D353'];
        var x = 20261002;
        for (var c = 0; c < cols; c++) {
          for (var f = 0; f < filas; f++) {
            var cls = 'cj-c', estilo = '';
            if (c >= cols - verdes) {
              x = (x * 48271) % 2147483647;
              var t = tonos[1 + (x % 3)];
              cls += ' v';
              estilo = ' style="--t:' + t + ';--i:' + (c - (cols - verdes)) + '"';
            }
            r += '<rect class="' + cls + '"' + estilo + ' x="' + (c * paso) + '" y="' + (f * paso) +
                 '" width="' + celda + '" height="' + celda + '" rx="3"/>';
          }
        }
        var w = cols * paso - (paso - celda), h = filas * paso - (paso - celda);
        return '<svg class="cj-cal" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true" focusable="false">' + r + '</svg>';
      })()}

      <p class="cj-l cj3">Es hora de que cumplan los suyos.</p>
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

   La columna de la derecha son las dieciseis fuentes, las mismas que se
   proyectan o se dicen, ni una mas. Antes, en dos columnas con el
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
          <div class="enl gh">
            <span class="enl-i"><svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></span>
            <span class="enl-u">github.com/luisdavidcolina</span>
          </div>

          <div class="enl li">
            <span class="enl-i"><svg viewBox="0 0 72 72"><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/></svg></span>
            <span class="enl-u">linkedin.com/in/luisdavidcolina</span>
          </div>

          <div class="enl ig">
            <span class="enl-i"><svg viewBox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg></span>
            <span class="enl-u">instagram.com/luisdavid.colina</span>
          </div>

          <div class="enl web">
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
            <div class="ref-r"><span class="ref-n">02</span><span class="ref-t">METR, datos nuevos, febrero de 2026</span></div>
            <div class="ref-r"><span class="ref-n">03</span><span class="ref-t">McKinsey, 4.500 desarrolladores en 150 empresas</span></div>
            <div class="ref-r"><span class="ref-n">04</span><span class="ref-t">OCDE y Hackread, caso PocketOS, abril de 2026</span></div>
            <div class="ref-r"><span class="ref-n">05</span><span class="ref-t">IBM, Cost of a Data Breach Report 2026</span></div>
            <div class="ref-r"><span class="ref-n">06</span><span class="ref-t">Databricks, State of AI Agents 2026</span></div>
            <div class="ref-r"><span class="ref-n">07</span><span class="ref-t">BairesDev, Dev Barometer, junio de 2026</span></div>
            <div class="ref-r"><span class="ref-n">08</span><span class="ref-t">Foro Económico Mundial, Future of Jobs Report 2025</span></div>
          </div>

          <div class="ref-col">
            <div class="ref-r"><span class="ref-n">09</span><span class="ref-t">Microsoft Learn, guía del GH-300, agosto de 2026</span></div>
            <div class="ref-r"><span class="ref-n">10</span><span class="ref-t">Microsoft Learn, certificación AI-103</span></div>
            <div class="ref-r"><span class="ref-n">11</span><span class="ref-t">Pearson VUE, certificaciones de Anthropic</span></div>
            <div class="ref-r"><span class="ref-n">12</span><span class="ref-t">AWS y Google Cloud, páginas oficiales de certificación</span></div>
            <div class="ref-r"><span class="ref-n">13</span><span class="ref-t">Andrej Karpathy, publicación del 2 de febrero de 2025</span></div>
            <div class="ref-r"><span class="ref-n">14</span><span class="ref-t">Collins English Dictionary, palabra del año 2025</span></div>
            <div class="ref-r"><span class="ref-n">15</span><span class="ref-t">Ken Thompson, folclore documentado de Bell Labs</span></div>
            <div class="ref-r"><span class="ref-n">16</span><span class="ref-t">Foto del micrófono, Panos Sakalakis, CC BY 2.0</span></div>
          </div>
        </div>
      </div>

    </div>
  </div>`
}

);
