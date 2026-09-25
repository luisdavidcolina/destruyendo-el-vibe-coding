/* 04 - Orquestacion y lo construido: laminas 09 y 10
   La 09 es el nucleo tecnico de la ponencia y la 10 es la que paga el engano
   del primer acto. Las dos llevan evidencia propia, no consejos.

   Presupuesto de palabras proyectadas: 40 en la 09 y 35 en la 10. Todo lo que
   se explica va hablado, aqui solo queda lo que la sala tiene que leer. */
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
          <span class="tb-nom">Tablero</span>
          <span class="tb-num">323 historias</span>
        </div>

        <div class="tb-cols">
          <div class="tb-col"><span class="tb-h">Disponibles</span>
            <div class="tb-card"><b>T-044</b></div>
            <div class="tb-card"><b>T-045</b></div>
            <div class="tb-card"><b>T-046</b></div>
            <div class="tb-card"><b>T-047</b></div>
          </div>

          <!-- Los tres proveedores se ven aqui, que es lo que sostiene la
               tarjeta de abajo. Antes claude solo aparecia en Hechas. -->
          <div class="tb-col"><span class="tb-h">En curso</span>
            <div class="tb-card ag1"><b>T-041</b><i>copilot</i></div>
            <div class="tb-card ag2"><b>T-042</b><i>gemini</i></div>
            <div class="tb-card ag3"><b>T-043</b><i>claude</i></div>
            <div class="tb-card choque"><b>T-043</b><i>claude</i></div>
          </div>

          <!-- Las hechas van sin nombre: quien las hizo ya no informa nada y
               costaba cuatro palabras del presupuesto. -->
          <div class="tb-col"><span class="tb-h">Hechas</span>
            <div class="tb-card ok"><b>T-037</b></div>
            <div class="tb-card ok"><b>T-038</b></div>
            <div class="tb-card ok"><b>T-039</b></div>
            <div class="tb-card ok"><b>T-040</b></div>
          </div>
        </div>

        <div class="tb-aviso">nombre repetido</div>
      </div>

      <div class="grid g3 gap-lg" style="margin-top:18px">
        <div class="card anim" data-d="5" style="padding:14px 18px">
          <h3 style="font-size:17px;margin-bottom:0">Solo historias libres</h3>
        </div>
        <div class="card anim" data-d="6" style="padding:14px 18px">
          <h3 style="font-size:17px;margin-bottom:0">Tres marcas</h3>
        </div>
        <div class="card lit anim" data-d="7" style="padding:14px 18px">
          <h3 style="font-size:17px;margin-bottom:0">Firma humana</h3>
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
      <!-- La tabla es el argumento entero de la lamina. Se conservan las tres
           filas y las dos columnas, y lo que se acorto son las etiquetas. -->
      <table class="t compact anim f" data-d="3" style="max-width:860px">
        <thead>
          <tr>
            <th></th>
            <th style="width:230px">Plataforma, 2022</th>
            <th style="width:230px">Sistema, 2026</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Personas</td><td>Seis</td><td class="hi-cell">Una</td></tr>
          <tr><td>Tiempo</td><td>Seis meses</td><td class="hi-cell">Cinco semanas</td></tr>
          <tr><td>Commits</td><td>779</td><td class="hi-cell">1.148</td></tr>
        </tbody>
      </table>

      <div class="grid g2 gap-lg" style="margin-top:26px">
        <div class="card lit anim" data-d="5">
          <span class="card-ix">ARCHIVO DIGITAL</span>
          <ul class="reglas">
            <li>Gasto limitado</li>
            <li>Credenciales encerradas</li>
            <li>Aprobacion humana</li>
          </ul>
        </div>
        <!-- La rafaga va a una palabra por renglon. La frase de cada pieza se
             dice hablando, y el numero de orden ahora lo dibuja el CSS. -->
        <div class="rafaga anim" data-d="6">
          <div class="rf">Carpetas</div>
          <div class="rf">Guias</div>
          <div class="rf">Preparaduria</div>
          <div class="rf">WhatsApp</div>
          <div class="rf">Cliente</div>
        </div>
      </div>
    </div>
  </div>`
}

);
