/* ==========================================================================
   01-apertura.js : laminas 01 y 02

   01  Portada. El iceberg a sangre completa y el titulo encima. La marca de
       GitHub sale de aqui: las condiciones de marca piden que su logo quede
       menos prominente que la marca propia y que no sugiera respaldo, y esta
       ponencia lleva opinion propia. Quedan los tres logos institucionales,
       pequeños, que son los de la casa.
   02  Quien expone. Veinte segundos, un retrato y cuatro lineas.

   El clip del iceberg todavia no existe. La capa de video queda escrita igual
   que la escribe el motor, con data-src, y mientras tanto manda el respaldo
   dibujado en laminas/01-apertura.css, que ya se ve terminado.
   ========================================================================== */
window.DECK.push(

/* ───────────────────────── 01 Portada, el iceberg ───────────────────────── */
{
  section: 'Apertura',
  title: 'Destruyendo el vibe coding',
  min: '0:00 a 0:20',
  bare: true,
  cinema: true,
  html: `
  <!-- Misma estructura que arma el motor cuando una lamina declara video.
       Va escrita aqui para poder marcar el respaldo con la clase berg, que
       es la que dibuja el hielo y la linea de agua mientras falte el clip.
       Cuando el archivo exista, el video se carga solo y tapa el respaldo. -->
  <div class="slide-video">
    <div class="video-missing berg"></div>
    <video muted loop playsinline preload="none" data-src="assets/video/iceberg-portada.mp4"></video>
  </div>

  <div class="pad">
    <div class="cover portada">

      <div class="logos anim z" data-d="1">
        <img src="assets/logos/logo_ucv.png" alt="Universidad Central de Venezuela">
        <span class="sep"></span>
        <img src="assets/logos/logo_ciencias.png" alt="Facultad de Ciencias">
        <span class="sep"></span>
        <img src="assets/logos/logo_computacion.png" alt="Escuela de Computacion">
      </div>

      <!-- Entra con mascara de abajo hacia arriba, como si emergiera. La
           animacion ya vive en motion.css para todo h1 dentro de .cover. -->
      <h1>
        <span class="a">Destruyendo</span>
        <span class="b">el vibe coding</span>
      </h1>

      <p class="frase anim" data-d="4">Lo que se ve es el prompt.</p>

      <!-- La regla de la casa, aqui haciendo de linea de agua: se traza de
           izquierda a derecha justo entre las dos frases, y separa lo que se
           ve de lo que no. -->
      <div class="rule"></div>

      <p class="frase hondo anim" data-d="9">Debajo esta todo lo demas.</p>

      <div class="uni firma anim" data-d="12">Luisdavid Colina</div>

    </div>
  </div>`
},

/* ───────────────────────────── 02 Quien expone ──────────────────────────── */
{
  section: 'Apertura',
  title: 'Quien expone',
  min: '0:20 a 0:40',
  html: `
  <div class="pad">
    <div class="body-area quien">
      <div class="grid g-1-2 gap-lg center-y">

        <!-- Hueco del retrato. La foto entra como fondo desde la hoja de
             estilo: si el archivo no esta, el navegador descarta esa capa y
             queda la silueta, que se lee como sitio reservado y no como un
             error de carga. -->
        <figure class="retrato anim z" data-d="1" role="img" aria-label="Retrato de Luisdavid Colina">
          <span class="foto"></span>
        </figure>

        <div class="ficha">
          <h1 class="title">Luisdavid Colina</h1>
          <div class="rule"></div>

          <!-- Las tres lineas entran una detras de otra, al ritmo en que se
               dicen. El ritmo va en CSS porque el motor no tiene pasos dentro
               de una lamina. La segunda es la que pesa en este auditorio. -->
          <ul class="lineas">
            <li class="linea n1">Siete años integrando sistemas de empresa</li>
            <li class="linea n2">Auxiliar docente y <em>preparador de Matematica Discreta I</em></li>
            <li class="linea n3">Claude Certified Architect</li>
          </ul>
        </div>

      </div>
    </div>
  </div>`
}

);
