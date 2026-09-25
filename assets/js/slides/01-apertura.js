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

   02  Quien expone. Veinte segundos, un retrato, tres lineas y, abajo y en
       jerarquia baja, la trayectoria: siete hitos sobre un eje de nueve años,
       que es lo que sostiene la tercera linea sin que haya que decirlo. Un
       solo resalte en toda la lamina, el que pesa en este auditorio. El
       chiste del lenguaje no vive aqui, esta en la lamina 08.

       Los hitos salen del CV, con los años de inicio de cada etapa: Veconinter
       2017, BDB Soluciones 2018, IntelliPOS 2019, King Code 2021, DreamJob
       2022, y desde 2023 Workforce.com y Diamond Hotel, que son las dos que
       siguen. El eje va de 2017 a 2026 y cada hito cae en su año, no a
       espacios iguales, para que las distancias digan la verdad.

   Los ritmos de escritura viven en laminas/01-portada.css, porque el motor no
   tiene pasos dentro de una lamina.
   ========================================================================== */

/* El calendario de contribuciones que va de textura en la portada. Es el
   elemento de textura que define la guia de marca de GitHub, y tiene la forma
   exacta del que sale en cualquier perfil: siete filas, una por dia de la
   semana, y una columna por semana. Los cinco tonos son los del tema oscuro
   de GitHub. La semilla es fija para que el patron sea el mismo cada vez que
   se abre la presentacion y no cambie entre el ensayo y el auditorio. */
var CALENDARIO = (function () {
  var cols = 64, filas = 7, celda = 13, paso = 18;
  var tono = ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'];
  var x = 20261002;
  var r = '';
  for (var c = 0; c < cols; c++) {
    for (var f = 0; f < filas; f++) {
      x = (x * 48271) % 2147483647;
      var p = x % 100;
      var n = p < 68 ? 0 : p < 81 ? 1 : p < 91 ? 2 : p < 97 ? 3 : 4;
      r += '<rect x="' + (c * paso) + '" y="' + (f * paso) + '" width="' + celda +
           '" height="' + celda + '" rx="2" fill="' + tono[n] + '"/>';
    }
  }
  var w = cols * paso - (paso - celda), h = filas * paso - (paso - celda);
  return '<svg class="calendario" viewBox="0 0 ' + w + ' ' + h +
         '" aria-hidden="true" focusable="false">' + r + '</svg>';
})();

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
      ${CALENDARIO}

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
          <span class="cuatro" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
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

      <!-- La trayectoria. Un eje de 2017 a 2026, y cada hito en su año, con
           la posicion en la variable --x. El tramo desde 2023 va en acento,
           porque es el que sigue abierto. Entra despues de la tercera linea,
           que es la que enuncia los nueve años: primero se dice, despues se
           ve. Todo a cuerpo pequeño y en el gris de cuerpo, no en el tenue,
           para que se lea proyectado sin competir con las tres lineas. -->
      <ol class="trayectoria" aria-label="Trayectoria profesional">
        <li class="tr-hito" style="--x:0%"><span class="tr-a">2017</span><span class="tr-n">Veconinter</span></li>
        <li class="tr-hito" style="--x:11.1%"><span class="tr-a">2018</span><span class="tr-n">BDB Soluciones</span></li>
        <li class="tr-hito" style="--x:22.2%"><span class="tr-a">2019</span><span class="tr-n">IntelliPOS</span></li>
        <li class="tr-hito" style="--x:44.4%"><span class="tr-a">2021</span><span class="tr-n">King Code</span></li>
        <li class="tr-hito" style="--x:55.6%"><span class="tr-a">2022</span><span class="tr-n">DreamJob</span></li>
        <li class="tr-hito" style="--x:66.7%"><span class="tr-a">2023</span><span class="tr-n">Workforce.com y Diamond Hotel</span></li>
        <li class="tr-hito fin" style="--x:100%"><span class="tr-a">2026</span><span class="tr-n">hoy</span></li>
      </ol>
    </div>
  </div>`
}

);
