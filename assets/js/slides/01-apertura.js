/* ==========================================================================
   01-apertura.js : laminas 01 y 02

   01  Portada. El titulo no va escrito como titulo: va escrito como el par de
       lineas que un cambio de codigo deja en un diff. Arriba la que se borra,
       en rojo saturado y a tamaño enorme; debajo, pegada a ella, la que queda,
       que es el titulo de la ponencia. Cualquiera que haya abierto un pull
       request lo lee sin que nadie se lo explique, y en un evento de GitHub
       eso es toda la sala.

       El signo de cada linea vive dentro de la misma caja que su texto, en una
       canaleta comun a las dos, para que se lea como marcador de linea y no
       como un rectangulo suelto en el margen. Sin tachado encima: la linea ya
       dice que se borra por el rojo y por el menos, y un tachado mas cruzaba
       la altura de x del texto.

       Sin iceberg, sin video y sin marca de GitHub: sus condiciones de marca
       piden que el logo no quede como el elemento mas prominente ni sugiera
       respaldo, y esta ponencia lleva opinion propia. Quedan los tres logos
       institucionales, en monocromo sobre el fondo, que son los de la casa.

   02  Quien expone. Veinte segundos, un retrato y tres lineas. Un solo resalte
       en toda la lamina, el que pesa en este auditorio. El chiste del lenguaje
       no vive aqui, esta en la lamina 08.

   Los ritmos de escritura viven en laminas/01-apertura.css, porque el motor no
   tiene pasos dentro de una lamina.
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

      <!-- La secuencia es un diff ocurriendo en vivo:
           1. se escribe "+ vibe coding" en verde, como una linea que alguien
              acaba de agregar
           2. esa misma linea se convierte en "- vibe coding", se pone roja y
              se tacha
           3. en ese mismo instante se escribe debajo la linea verde nueva
           Nada se mueve de sitio: lo que cambia es de que lado del diff esta. -->

      <div class="dl l1">
        <span class="sig"><i class="s-mas">+</i><i class="s-menos">-</i></span>
        <span class="tx">
          <span class="ink">vibe coding</span><span class="caret" aria-hidden="true"></span>
          <span class="tachon" aria-hidden="true"></span>
        </span>
      </div>

      <div class="dl l2">
        <span class="sig"><i class="s-mas">+</i></span>
        <span class="tx">
          <h1 class="ink">Destruyendo el vibe coding</h1><span class="caret" aria-hidden="true"></span>
        </span>
      </div>

      <div class="pie-portada">
        <div class="pp-quien">
          <b>Luisdavid Colina</b>
          <span>Dev Days 2026 &nbsp;&middot;&nbsp; Auditorio Manuel Bemporad &nbsp;&middot;&nbsp; 2 de octubre</span>
        </div>
        <div class="logos">
          <img src="assets/logos/logo_ucv.png" alt="Universidad Central de Venezuela">
          <span class="sep"></span>
          <img src="assets/logos/logo_ciencias.png" alt="Facultad de Ciencias">
          <span class="sep"></span>
          <img src="assets/logos/logo_computacion.png" alt="Escuela de Computacion">
        </div>
      </div>

    </div>
  </div>`
},

/* ───────────────────────────── 02 Quien expone ──────────────────────────── */
{
  section: 'Apertura',
  title: 'Quién expone',
  min: '0:20 a 0:40',
  html: `
  <div class="pad">
    <div class="body-area quien">
      <div class="grid g-1-2 gap-lg center-y">

        <!-- Hueco del retrato. La foto entra como fondo desde la hoja de
             estilo: si el archivo no esta, el navegador descarta esa capa y
             queda la silueta, que se lee como sitio reservado y no como un
             error de carga. El aro y el viñeteado son los que despegan una
             foto de carnet de fondo gris de una lamina clara. -->
        <figure class="retrato anim z" data-d="1" role="img" aria-label="Retrato de Luisdavid Colina">
          <span class="foto"></span>
        </figure>

        <div class="ficha">
          <h1 class="title">Luisdavid Colina</h1>
          <p class="cargo">Arquitecto de soluciones con inteligencia artificial</p>
          <div class="rule"></div>

          <!-- Las tres lineas entran una detras de otra, al ritmo en que se
               dicen. El ritmo va en CSS porque el motor no tiene pasos dentro
               de una lamina. Una sola lleva resalte, la segunda, que es la que
               pesa en este auditorio: si resaltan las tres, no resalta ninguna. -->
          <ul class="lineas">
            <li class="linea n1">Integration Manager en Workforce.com</li>
            <li class="linea n2"><em>Auxiliar docente UCV</em>, preparador de Matemática Discreta I</li>
            <li class="linea n3">Nueve años en tecnología, seis construyendo sistemas</li>
          </ul>
        </div>

      </div>
    </div>
  </div>`
}

);
