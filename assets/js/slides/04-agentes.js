/* 04 - Orquestacion y lo construido: laminas 09 y 10
   La 09 es el nucleo tecnico de la ponencia y la 10 es la que paga el engano
   del primer acto. Las dos llevan evidencia propia, no consejos. */
window.DECK.push(

/* ─────────────── 09 Aqui no hay espera muerta ─────────────── */
{
  section: 'Orquestacion',
  title: 'Aqui no hay espera muerta',
  min: '5:45 a 7:05',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Orquestacion</div>
    <h1 class="title anim" data-d="2">Aqui no hay espera muerta</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="tablero anim f" data-d="3" data-widget="tablero">
        <div class="tb-top">
          <span class="tb-nom">Tablero del proyecto</span>
          <span class="tb-num">323 historias</span>
        </div>

        <div class="tb-cols">
          <div class="tb-col"><span class="tb-h">Disponibles</span>
            <div class="tb-card"><b>T-044</b></div>
            <div class="tb-card"><b>T-045</b></div>
            <div class="tb-card"><b>T-046</b></div>
            <div class="tb-card"><b>T-047</b></div>
          </div>

          <div class="tb-col"><span class="tb-h">En curso</span>
            <div class="tb-card ag1"><b>T-041</b><i>copilot</i></div>
            <div class="tb-card ag2"><b>T-042</b><i>gemini</i></div>
            <div class="tb-card ag3"><b>T-043</b><i>copilot</i></div>
            <div class="tb-card choque"><b>T-043</b><i>copilot</i></div>
          </div>

          <div class="tb-col"><span class="tb-h">Hechas</span>
            <div class="tb-card ok"><b>T-037</b><i>claude</i></div>
            <div class="tb-card ok"><b>T-038</b><i>copilot</i></div>
            <div class="tb-card ok"><b>T-039</b><i>gemini</i></div>
            <div class="tb-card ok"><b>T-040</b><i>claude</i></div>
          </div>
        </div>

        <div class="tb-aviso">nombre repetido, historia rechazada</div>
      </div>

      <div class="grid g3 gap-lg" style="margin-top:18px">
        <div class="card anim" data-d="5" style="padding:14px 18px">
          <span class="card-ix">ALCANCE</span>
          <h3 style="font-size:17px">Solo lo que nadie toca</h3>
        </div>
        <div class="card anim" data-d="6" style="padding:14px 18px">
          <span class="card-ix">PROVEEDOR</span>
          <h3 style="font-size:17px">Tres marcas a la vez</h3>
        </div>
        <div class="card lit anim" data-d="7" style="padding:14px 18px">
          <span class="card-ix">ACEPTACION</span>
          <h3 style="font-size:17px">La firma es humana</h3>
        </div>
      </div>

      <div class="pie-fuente anim" data-d="8">Databricks, 2026</div>
    </div>
  </div>`
},

/* ─────────────── 10 Esto lo hizo una persona ─────────────── */
{
  section: 'Lo construido',
  title: 'Esto lo hizo una persona',
  min: '7:05 a 8:05',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Lo construido</div>
    <h1 class="title anim" data-d="2">Esto lo hizo una persona</h1>
    <div class="rule"></div>

    <div class="body-area">
      <table class="t compact anim f" data-d="3" style="max-width:860px">
        <thead>
          <tr>
            <th></th>
            <th style="width:230px">Plataforma de empleo, 2022</th>
            <th style="width:230px">Sistema de gestion, 2026</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Quien</td><td>Seis desarrolladores</td><td class="hi-cell">Una persona</td></tr>
          <tr><td>Hasta funcionar</td><td>Seis meses</td><td class="hi-cell">Cinco semanas</td></tr>
          <tr><td>Commits</td><td>779</td><td class="hi-cell">1.148</td></tr>
        </tbody>
      </table>

      <div class="grid g2 gap-lg" style="margin-top:26px">
        <div class="card lit anim" data-d="5">
          <span class="card-ix">ARCHIVO DIGITAL, FACULTAD DE CIENCIAS</span>
          <ul class="reglas">
            <li>Tope de gasto fijo</li>
            <li>Credenciales que no salen del servidor</li>
            <li>Aprobacion humana antes de modificar</li>
          </ul>
        </div>
        <div class="rafaga anim" data-d="6">
          <div class="rf"><span>01</span> Carpetas del semestre</div>
          <div class="rf"><span>02</span> Guias de estudio propias</div>
          <div class="rf"><span>03</span> Material de la preparaduria</div>
          <div class="rf"><span>04</span> Asistente por WhatsApp</div>
          <div class="rf"><span>05</span> Un caso profesional</div>
        </div>
      </div>
    </div>
  </div>`
}

);
