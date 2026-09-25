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

       Sin iceberg y sin video. La marca de GitHub va una sola vez, chica,
       en el encabezado del evento y con la voz del afiche oficial de Dev
       Days: sus condiciones de marca piden que el logo no sea el elemento
       mas prominente. Abajo, el nombre con su GitHub y su LinkedIn, y los
       tres logos institucionales en monocromo.

   02  Quien expone. Veinte segundos, un retrato, tres lineas y, abajo y en
       jerarquia baja, la trayectoria: siete hitos sobre un eje de nueve años,
       que es lo que sostiene la tercera linea sin que haya que decirlo. Un
       solo resalte en toda la lamina, el que pesa en este auditorio. El
       chiste del lenguaje no vive aqui, esta en la lamina 08.

       Los hitos salen del CV, con los años de inicio de cada etapa: Veconinter
       2017, BDB Soluciones 2018, IntelliPOS 2019, King Code 2021, DreamJob
       2022, y desde 2023 Workforce.com y Diamond Partner, que son las dos que
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

      <!-- El encabezado del evento, con la misma voz del afiche oficial de
           Dev Days: la marca de GitHub, el nombre en letra de terminal y en
           verde, y la hora debajo. Chico y arriba a la izquierda, para que la
           marca no sea lo mas prominente de la lamina, que es lo que pide la
           guia de marca de GitHub. -->
      <div class="evento">
        <img src="assets/logos/github-mark-blanco.svg" alt="GitHub">
        <div class="ev-tx">
          <b>DEV DAYS 2026</b>
          <span>Auditorio Manuel Bemporad, 2 de octubre, 2026</span>
        </div>
      </div>

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
          <span class="pp-redes">
            <span class="red"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>github.com/luisdavidcolina</span>
            <span class="red"><svg viewBox="0 0 72 72" aria-hidden="true"><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/></svg>linkedin.com/in/luisdavidcolina</span>
          </span>
        </div>
        <div class="logos">
          <img src="assets/logos/logo_ucv_blanco.png" alt="Universidad Central de Venezuela">
          <span class="sep"></span>
          <img src="assets/logos/logo_ciencias_blanco.png" alt="Facultad de Ciencias">
          <span class="sep"></span>
          <img src="assets/logos/logo_computacion_blanco.png" alt="Escuela de Computación">
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
          <p class="cargo">AI Solutions Architect</p>
          <div class="rule"></div>

          <!-- Las tres lineas entran una detras de otra, al ritmo en que se
               dicen. El ritmo va en CSS porque el motor no tiene pasos dentro
               de una lamina. Una sola lleva resalte, la segunda, que es la que
               pesa en este auditorio: si resaltan las tres, no resalta ninguna. -->
          <!-- Como en un perfil de LinkedIn, cada linea lleva la marca de la
               casa a la que pertenece: el isotipo de Workforce.com y el
               escudo de la UCV. La tercera no es de ninguna casa, es la suma
               de todas, y lleva el pictograma de un maletin. -->
          <ul class="lineas">
            <li class="linea n1"><img class="marca" src="assets/logos/workforce.svg" alt="Workforce.com"><span>Integration Manager en Workforce.com</span></li>
            <li class="linea n2"><img class="marca" src="assets/logos/logo_ucv.png" alt="UCV"><span><em>Auxiliar docente UCV</em>, preparador de Matemática Discreta I</span></li>
            <li class="linea n3"><svg class="marca maletin" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7M3 12.5h18"/></svg><span>Nueve años profesionales en tecnología, seis construyendo sistemas</span></li>
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
        <li class="tr-hito" style="--x:66.7%"><span class="tr-a">2023</span><span class="tr-n">Workforce.com y Diamond Partner</span></li>
        <li class="tr-hito fin" style="--x:100%"><span class="tr-a">2026</span><span class="tr-n">hoy</span></li>
      </ol>
    </div>
  </div>`
}

);
