/* ==========================================================================
   01-apertura.js : laminas 01 y 02

   01  Portada. El titulo no va escrito como titulo: va escrito como la linea
       que un cambio de codigo borra. Fondo rojo de diff, signo menos en la
       canal izquierda y el texto tachado, a tamaño enorme. Cualquiera que
       haya abierto un pull request lo lee sin que nadie se lo explique, y
       en un evento de GitHub eso es toda la sala. La linea verde que falta
       aparece en la lamina 06 y cierra el diff.

       Sin iceberg, sin video y sin marca de GitHub: sus condiciones de marca
       piden que el logo no quede como el elemento mas prominente ni sugiera
       respaldo, y esta ponencia lleva opinion propia. Quedan los tres logos
       institucionales, pequeños, que son los de la casa.

   02  Quien expone. Veinte segundos, un retrato y tres lineas. El chiste del
       lenguaje no vive aqui, esta en la lamina 08.

   Los ritmos de escritura y tachado viven en laminas/01-apertura.css, porque
   el motor no tiene pasos dentro de una lamina.
   ========================================================================== */
window.DECK.push(

/* ─────────────────────── 01 Portada, la linea borrada ───────────────────── */
{
  section: 'Apertura',
  title: 'Destruyendo el vibe coding',
  min: '0:00 a 0:20',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="cover portada">

      <!-- La banda roja sale de .rm, que es la clase con la que el deck pinta
           las lineas borradas en todos los bloques de codigo. Aqui solo crece
           hasta ocupar la lamina. El signo va fuera de .tx para que el tachado
           cruce el texto y no el marcador, igual que en un diff de verdad. -->
      <div class="dl rm">
        <span class="sig" aria-hidden="true">-</span>
        <span class="tx"><span class="ink">vibe coding</span><span class="cursor" aria-hidden="true"></span><span class="tachon" aria-hidden="true"></span></span>
      </div>

      <div class="logos">
        <img src="assets/logos/logo_ucv.png" alt="Universidad Central de Venezuela">
        <span class="sep"></span>
        <img src="assets/logos/logo_ciencias.png" alt="Facultad de Ciencias">
        <span class="sep"></span>
        <img src="assets/logos/logo_computacion.png" alt="Escuela de Computacion">
      </div>

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
