/* 05 - Tercer acto y cierre: laminas 11, 12, 13 y 14
   La 12 reutiliza a proposito el componente .enf de la lamina 04. El eco
   visual es el recurso narrativo de la ponencia: la sala reconoce la forma y
   entiende sola que es el mismo error otra vez. */
window.DECK.push(

/* ─────────────── 11 Ninguna capa borro la de abajo ─────────────── */
{
  section: 'Las capas y sus modas',
  title: 'Ninguna capa borro la de abajo',
  min: '8:05 a 8:40',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Las capas y sus modas</div>
    <h1 class="title anim" data-d="2">Ninguna capa borro la de abajo</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="pila anim f" data-d="3">
        <div class="cp ahora"><span class="cp-i"><svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 7.4v4.2M12 11.6L6.4 16M12 11.6L17.6 16"/></svg></span><span class="cp-a">ahora</span><span class="cp-n">Orquestacion de agentes</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 000-8 6 6 0 00-11.6 2A3.5 3.5 0 006 18z"/></svg></span><span class="cp-a">2010</span><span class="cp-n">Nube y servicios gestionados</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="8" height="7" rx="1"/><rect x="13" y="4" width="8" height="7" rx="1"/><rect x="3" y="13" width="8" height="7" rx="1"/><rect x="13" y="13" width="8" height="7" rx="1"/></svg></span><span class="cp-a">1990</span><span class="cp-n">Bibliotecas y marcos</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><path d="M9 4c-2 0-2 3-2 4s0 4-3 4c3 0 3 3 3 4s0 4 2 4"/><path d="M15 4c2 0 2 3 2 4s0 4 3 4c-3 0-3 3-3 4s0 4-2 4"/></svg></span><span class="cp-a">1957</span><span class="cp-n">Lenguajes de alto nivel</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"/></svg></span><span class="cp-a">1950</span><span class="cp-n">Ensamblador</span></div>
        <div class="cp"><span class="cp-i"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="7.5" cy="10" r="1.1"/><circle cx="11" cy="10" r="1.1"/><circle cx="14.5" cy="10" r="1.1"/><circle cx="7.5" cy="14" r="1.1"/><circle cx="14.5" cy="14" r="1.1"/></svg></span><span class="cp-a">1940</span><span class="cp-n">Tarjetas perforadas</span></div>
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
  section: 'Las bases',
  title: 'Creen que entienden, y no',
  min: '8:40 a 9:10',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Las bases</div>
    <h1 class="title anim" data-d="2">Creen que entienden, y no</h1>
    <div class="rule"></div>

    <!-- Se probo reutilizando las barras verticales de la lamina 04 y no
         funciono: con 85 contra 16 sale un bloque enorme y una astilla, y
         media lamina queda vacia. La desproporcion es el argumento, asi que
         se dibuja a lo ancho, donde se ve de golpe. -->
    <div class="body-area brechas">

      <div class="br anim" data-d="3">
        <div class="br-top">
          <span class="br-eti">Junior que dice entender el codigo que entrega</span>
          <span class="br-cif">85 %</span>
        </div>
        <div class="br-riel"><span class="br-fill alto" style="--w:85%"></span></div>
      </div>

      <div class="br anim" data-d="5">
        <div class="br-top">
          <span class="br-eti">Senior que confirma que lo entienden</span>
          <span class="br-cif bajo">16 %</span>
        </div>
        <div class="br-riel"><span class="br-fill bajo" style="--w:16%"></span></div>
      </div>

      <div class="br-nota anim" data-d="7">Sesenta y nueve puntos de diferencia entre creerlo y que alguien lo confirme</div>
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
        <span>Ken Thompson<i>creador de Unix y del lenguaje B, premio Turing</i></span>
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
