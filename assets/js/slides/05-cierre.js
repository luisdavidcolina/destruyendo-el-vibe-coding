/* 05 - Tercer acto y cierre: laminas 11, 12, 13 y 14
   La 12 reutiliza a proposito el componente .enf de la lamina 04. El eco
   visual es el recurso narrativo de la ponencia: la sala reconoce la forma y
   entiende sola que es el mismo error otra vez. */
window.DECK.push(

/* ─────────────── 11 Ninguna capa borro la de abajo ─────────────── */
{
  section: 'Una capa mas',
  title: 'Ninguna capa borro la de abajo',
  min: '8:05 a 8:40',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Una capa mas</div>
    <h1 class="title anim" data-d="2">Ninguna capa borro la de abajo</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="pila anim f" data-d="3">
        <div class="cp ahora"><span class="cp-a">ahora</span><span class="cp-n">Orquestacion de agentes</span></div>
        <div class="cp"><span class="cp-a">2010</span><span class="cp-n">Servicios gestionados y nube</span></div>
        <div class="cp"><span class="cp-a">1990</span><span class="cp-n">Bibliotecas y marcos de trabajo</span></div>
        <div class="cp"><span class="cp-a">1957</span><span class="cp-n">Lenguajes de alto nivel</span></div>
        <div class="cp"><span class="cp-a">1950</span><span class="cp-n">Ensamblador</span></div>
        <div class="cp"><span class="cp-a">1940</span><span class="cp-n">Tarjetas perforadas</span></div>
      </div>

      <div class="credenciales anim" data-d="6">
        <span class="cr-t">La fiebre de ahora</span>
        <span class="cr">GH-300</span>
        <span class="cr">AI-103</span>
        <span class="cr">Claude Certified</span>
        <span class="cr">AWS AI Practitioner</span>
        <span class="cr">Google ML Engineer</span>
        <span class="cr">IBM RAG y agentes</span>
      </div>
    </div>
  </div>`
},

/* ─────────────── 12 Creen que entienden. No siempre ─────────────── */
{
  section: 'Estudiar',
  title: 'Creen que entienden, y no',
  min: '8:40 a 9:10',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Estudiar</div>
    <h1 class="title anim" data-d="2">Creen que entienden, y no</h1>
    <div class="rule"></div>

    <!-- El mismo componente .enf de la lamina 04, a proposito. Nueve minutos
         despues, la misma forma: uno cree, la medicion dice otra cosa. -->
    <div class="body-area enf-area">
      <div class="enf">

        <div class="enf-arriba">
          <span class="enf-eti">Junior que dice entender</span>
          <span class="enf-cifra" style="--to:85"><i class="nm"></i><i class="pc">%</i></span>
          <span class="enf-barra" style="--h:150px"></span>
        </div>

        <div class="enf-eje"></div>

        <div class="enf-abajo">
          <span class="enf-barra" style="--h:30px"></span>
          <span class="enf-cifra" style="--to:16"><i class="nm"></i><i class="pc">%</i></span>
          <span class="enf-eti">Senior que lo confirma</span>
        </div>

      </div>
    </div>

    <div class="fuente anim" data-d="8">BairesDev, Dev Barometer, 1.569 desarrolladores en 77 paises, 2026</div>
  </div>`
},

/* ─────────────── 13 Reflexion final ─────────────── */
{
  section: 'Cierre',
  title: 'Reflexion final',
  min: '9:10 a 9:45',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="final">
      <p class="fin-frase anim" data-d="2">
        El que cree que ya sabe usar la IA<br>es el que peor la esta usando.
      </p>

      <div class="fin-cita anim" data-d="5">
        <p>&ldquo;Uno de mis dias mas productivos fue tirar a la basura mil lineas de codigo.&rdquo;</p>
        <span>Ken Thompson</span>
      </div>
    </div>
  </div>`
},

/* ─────────────── 14 Contacto y referencias ─────────────── */
{
  section: 'Contacto',
  title: 'Contacto y referencias',
  min: 'queda proyectada',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Contacto</div>
    <h1 class="title sm anim" data-d="2">Donde continuar</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="grid g2 gap-lg" style="grid-template-columns:300px 1fr">
        <div class="qr-bloque anim" data-d="3">
          <img src="assets/img/qr-enlaces.svg" alt="Codigo para abrir la pagina de enlaces">
          <span class="qr-url">luisdavidcolina.com/enlaces</span>
          <span class="qr-mas">github.com/luisdavidcolina<br>linkedin.com/in/luisdavidcolina</span>
        </div>

        <div class="grid g2 gap-lg" style="row-gap:0">
          <div class="refs anim" data-d="4">
            <div class="r"><span>01</span><span>METR, programadores experimentados con IA, julio de 2025</span></div>
            <div class="r"><span>02</span><span>METR, cambio en el diseno del experimento, febrero de 2026</span></div>
            <div class="r"><span>03</span><span>McKinsey, 4.500 desarrolladores en 150 empresas</span></div>
            <div class="r"><span>04</span><span>Base de incidentes de IA de la OCDE, caso PocketOS, abril de 2026</span></div>
            <div class="r"><span>05</span><span>Veracode, seguridad del codigo generado, 2026</span></div>
            <div class="r"><span>06</span><span>Databricks, State of AI Agents 2026</span></div>
            <div class="r"><span>07</span><span>BairesDev, Dev Barometer, segundo trimestre de 2026</span></div>
          </div>
          <div class="refs anim" data-d="5">
            <div class="r"><span>08</span><span>PwC, Global AI Jobs Barometer 2026</span></div>
            <div class="r"><span>09</span><span>Microsoft Learn, examen GH-300 de GitHub Copilot</span></div>
            <div class="r"><span>10</span><span>Microsoft Learn, retiro del AI-102 y examen AI-103</span></div>
            <div class="r"><span>11</span><span>Pearson VUE, certificaciones de Anthropic</span></div>
            <div class="r"><span>12</span><span>Andrej Karpathy, publicacion del 2 de febrero de 2025</span></div>
            <div class="r"><span>13</span><span>Collins English Dictionary, palabra del ano 2025</span></div>
            <div class="r"><span>14</span><span>Ken Thompson, folclore documentado de Bell Labs</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

);
