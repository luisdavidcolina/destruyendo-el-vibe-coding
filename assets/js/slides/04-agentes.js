/* 04 - Orquestacion y lo construido: laminas 09 y 10
   La 09 es el nucleo tecnico de la ponencia y la 10 es la que paga el engano
   del primer acto. Las dos llevan evidencia propia, no consejos.

   Presupuesto de palabras proyectadas: 40 en la 09 y 35 en la 10. Todo lo que
   se explica va hablado, aqui solo queda lo que la sala tiene que leer. */
window.DECK.push(

/* ─────────────── 09 Aqui no hay espera muerta ─────────────────────────────
   La lamina tenia dos objetos compitiendo: el tablero arriba y tres tarjetas
   sueltas debajo que repetian en texto lo que el tablero ya enseñaba. Quedan
   integradas como una anotacion bajo el nombre de cada columna, de modo que
   cada una explica lo que se esta viendo justo encima. El tablero pasa a ser
   lo unico que hay en el cuerpo de la lamina y ocupa todo el alto. */
{
  section: 'Orquestacion',
  title: 'Aqui no hay espera muerta',
  min: '5:45 a 7:05',
  html: `
  <div class="pad">
    <h1 class="title anim" data-d="2">Aqui no hay espera muerta</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="tablero anim f" data-d="3" data-widget="tablero">
        <div class="tb-top">
          <span class="tb-nom">Tablero</span>
          <span class="tb-num">323 historias</span>
        </div>

        <div class="tb-cols">
          <!-- Anotacion de alcance: un agente solo ve lo que nadie tiene -->
          <div class="tb-col">
            <div class="tb-hd">
              <span class="tb-h">Disponibles</span>
              <span class="tb-nota">sin dueño</span>
            </div>
            <div class="tb-card"><b>T-044</b></div>
            <div class="tb-card"><b>T-045</b></div>
            <div class="tb-card"><b>T-046</b></div>
            <div class="tb-card"><b>T-047</b></div>
          </div>

          <!-- Los tres proveedores se ven aqui, en la columna que manda, y por
               eso la anotacion de la columna dice lo que sostienen. Las tres
               tarjetas entran una detras de otra: eso es lo que significa que
               no haya espera muerta. La cuarta llega con un nombre en uso. -->
          <div class="tb-col">
            <div class="tb-hd">
              <span class="tb-h">En curso</span>
              <span class="tb-nota">tres proveedores</span>
            </div>
            <div class="tb-card ag1 ent e1"><b>T-041</b><i>copilot</i></div>
            <div class="tb-card ag2 ent e2"><b>T-042</b><i>gemini</i></div>
            <div class="tb-card ag3 ent e3"><b>T-043</b><i>claude</i></div>
            <div class="tb-card dup"><b>T-043</b><i>claude</i></div>
            <div class="tb-aviso">nombre repetido</div>
          </div>

          <!-- Las hechas van sin nombre: quien las hizo ya no informa nada y
               costaba cuatro palabras del presupuesto. -->
          <div class="tb-col">
            <div class="tb-hd">
              <span class="tb-h">Hechas</span>
              <span class="tb-nota">firma humana</span>
            </div>
            <div class="tb-card ok"><b>T-037</b></div>
            <div class="tb-card ok"><b>T-038</b></div>
            <div class="tb-card ok"><b>T-039</b></div>
            <div class="tb-card ok"><b>T-040</b></div>
          </div>
        </div>
      </div>

      <div class="pie-fuente anim" data-d="8">Databricks, 2026</div>
    </div>
  </div>`
},

/* ─────────────── 10 Esto lo hizo una persona ─────────────────────────────
   PENDIENTE DE PERMISO. El sistema de 2026 es de un cliente y todavia no hay
   autorizacion para nombrarlo en una sala llena. El nombre real es:

       Simply Pool

   Se deja escrito aqui y comentado. En cuanto Joel confirme, se sustituye
   "Sistema de gestion, 2026" por "Simply Pool, 2026" en la cabecera de la
   tabla y se borra esta nota. Hasta entonces la comparacion funciona igual,
   que es lo que dice el guion. */
{
  section: 'Lo construido',
  title: 'Seis meses contra cinco semanas',
  min: '7:05 a 8:05',
  html: `
  <div class="pad">
    <h1 class="title anim" data-d="2">Seis meses contra cinco semanas</h1>
    <div class="rule"></div>

    <div class="body-area">
      <!-- La tabla es el argumento entero de la lamina. Se conservan las tres
           filas y las dos columnas, y lo que se acorto son las etiquetas. -->
      <table class="t compact anim f" data-d="3" style="max-width:860px">
        <thead>
          <tr>
            <th></th>
            <th style="width:270px">DreamJob, 2022</th>
            <!-- Simply Pool: falta el permiso del cliente para nombrarlo -->
            <th style="width:270px">Sistema de gestion, 2026</th>
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
