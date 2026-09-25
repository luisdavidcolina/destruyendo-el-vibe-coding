/* 01 - Apertura: portada y plan de la ponencia
   Dev Days 2026, Auditorio Manuel Bemporad, Escuela de Computacion, UCV.
   Viernes 2 de octubre de 2026, 11:00 AM.
   PENDIENTE: el titulo de la ponencia y la duracion del turno. */
window.DECK.push(

/* ─────────────────────────────── 01 Portada ─────────────────────────────── */
{
  section: 'Portada',
  title: 'Portada',
  min: '0:00 a 0:20',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="cover">
      <!-- El evento es de la Escuela de Computacion, asi que los tres logos
           institucionales se quedan. Sobre el fondo oscuro de la portada
           desaparecerian, por eso van sobre placa blanca. -->
      <div class="logos anim z" data-d="1">
        <img src="assets/logos/logo_ucv.png" alt="Universidad Central de Venezuela">
        <span class="sep"></span>
        <img src="assets/logos/logo_ciencias.png" alt="Facultad de Ciencias">
        <span class="sep"></span>
        <img src="assets/logos/logo_computacion.png" alt="Escuela de Computacion">
      </div>

      <div class="uni anim sr" data-d="2">Dev Days 2026, Caracas (UCV)</div>

      <img class="marca anim z" data-d="3" style="height:66px"
           src="assets/logos/github-mark-blanco.svg" alt="GitHub">

      <h1 class="anim" data-d="4">
        <span class="thin">PENDIENTE, antetitulo</span>
        PENDIENTE
      </h1>

      <p class="lede anim" data-d="5">
        PENDIENTE, una sola frase que diga de que trata la ponencia y a quien le sirve. El
        publico son estudiantes, entusiastas del codigo y desarrolladores en formacion.
      </p>

      <div class="who anim" data-d="7">
        <div><b>Luisdavid Colina</b>Licenciatura en Computacion, UCV</div>
        <div><b>Portafolio</b>luisdavidcolina.com</div>
        <div><b>GitHub</b>github.com/luisdavidcolina</div>
        <div><b>LinkedIn</b>linkedin.com/in/luisdavidcolina</div>
        <div><b>Dev Days 2026</b>Auditorio Manuel Bemporad</div>
        <div><b>Caracas</b>Viernes 2 de octubre de 2026, 11:00 AM</div>
      </div>
    </div>
  </div>`
},

/* ────────────────────────── 02 Plan de la ponencia ──────────────────────── */
{
  section: 'Objetivo',
  title: 'Objetivo de la ponencia',
  min: '0:20 a 0:45',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">Objetivo</div>
    <h1 class="title anim" data-d="2">Objetivo de la ponencia</h1>
    <p class="subtitle anim" data-d="3">
      PENDIENTE, que se lleva quien escucha.
    </p>
    <div class="rule"></div>

    <div class="body-area">
      <!-- La linea de tiempo se reparte con flex: un bloque de 2 min lleva
           flex:2 y uno de 1 min lleva flex:1. data-go salta a esa lamina. -->
      <div class="anim f" data-d="4">
        <div class="tl">
          <div class="tl-seg"     style="flex:1" data-go="3"><span class="n">01</span><span class="l">PENDIENTE</span><span class="m">1 min</span></div>
          <div class="tl-seg hot" style="flex:2" data-go="4"><span class="n">02</span><span class="l">PENDIENTE</span><span class="m">2 min</span></div>
          <div class="tl-seg"     style="flex:1" data-go="5"><span class="n">03</span><span class="l">PENDIENTE</span><span class="m">1 min</span></div>
          <div class="tl-seg"     style="flex:1" data-go="6"><span class="n">04</span><span class="l">Cierre</span><span class="m">1 min</span></div>
        </div>
        <div class="tl-axis">
          <span>0 MIN</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10 MIN</span>
        </div>
      </div>

      <div class="grid g3 gap-lg" style="margin-top:30px">
        <div class="card anim" data-d="5">
          <span class="card-ix">PRIMERA PARTE</span>
          <h3>PENDIENTE</h3>
        </div>
        <div class="card anim" data-d="6">
          <span class="card-ix">SEGUNDA PARTE</span>
          <h3>PENDIENTE</h3>
        </div>
        <div class="card lit anim" data-d="7">
          <span class="card-ix">TERCERA PARTE</span>
          <h3>PENDIENTE</h3>
        </div>
      </div>
    </div>
  </div>`
}

);
