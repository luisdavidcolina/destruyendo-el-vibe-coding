/* 02 - Cuerpo de la ponencia
   Archivo de trabajo. Cuando el contenido este definido se parte en varios
   archivos por seccion, como en la expo de IoT, y se agregan las lineas
   <script> correspondientes en index.html. Aqui quedan dos laminas de
   muestra que ensenan los bloques disponibles sin inventar contenido. */
window.DECK.push(

/* ───────────── 03 Lamina de corte, para abrir una seccion ───────────────── */
{
  section: 'PENDIENTE, seccion',
  title: 'PENDIENTE, lamina de corte',
  min: 'PENDIENTE',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="cine-hero">
      <div class="ch-kick">PENDIENTE, seccion</div>
      <h2>PENDIENTE<br><span class="soft">una sola idea</span></h2>
      <p>PENDIENTE, la frase que la sostiene.</p>
    </div>
  </div>`
},

/* ───────────── 04 Lamina de contenido, estructura estandar ──────────────── */
{
  section: 'PENDIENTE, seccion',
  title: 'PENDIENTE, lamina de contenido',
  min: 'PENDIENTE',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">PENDIENTE, seccion</div>
    <h1 class="title anim" data-d="2">PENDIENTE, titulo de una sola idea</h1>
    <p class="subtitle anim" data-d="3">
      PENDIENTE, la bajada. Una o dos lineas, nunca mas.
    </p>
    <div class="rule"></div>

    <div class="body-area">
      <div class="grid g3 gap-lg">
        <div class="card anim" data-d="3">
          <span class="card-ix">ETIQUETA</span>
          <h3>PENDIENTE</h3>
          <p>PENDIENTE, dos o tres lineas de cuerpo.</p>
        </div>
        <div class="card anim" data-d="4">
          <span class="card-ix">ETIQUETA</span>
          <h3>PENDIENTE</h3>
          <p>PENDIENTE, dos o tres lineas de cuerpo.</p>
        </div>
        <div class="card lit anim" data-d="5">
          <span class="card-ix">ETIQUETA</span>
          <h3>PENDIENTE</h3>
          <p>PENDIENTE, la tarjeta resaltada es una por lamina, no tres.</p>
        </div>
      </div>

      <div class="note anim" data-d="7" style="margin-top:24px">
        <svg viewBox="0 0 24 24"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>
        <div>PENDIENTE, el dato que remata la lamina.</div>
      </div>
    </div>
  </div>`
}

);
