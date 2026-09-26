/* ==========================================================================
   02-golpe.js : laminas 03, 04 y 05

   Es el golpe de la ponencia. Tres laminas seguidas que abren una tension y
   la cierran con evidencia.

   03  El reparto. Arriba de la linea de flotacion va UNA sola caja: escribir
       la peticion. Debajo van ocho, que es todo lo que decide si el resultado
       sirve. El volumen de cada lado ES el argumento y se lee de un vistazo,
       sin leer una sola palabra. Antes esto era un dibujo de iceberg con una
       frase encima, que no decia nada. La cita de Karpathy se queda, pero
       arriba y fuera del agua, porque el termino lo bautizo el.
   04  El experimento de METR. Dos barras enfrentadas sobre un mismo eje. Mas
       20 y menos 19 son magnitudes casi iguales: las dos barras salen casi
       identicas y lo unico que las separa es la direccion, que es justo el
       punto. Al flanco izquierdo, que estaba vacio, entra la captura de la
       propia pagina de METR, con la nota de que en febrero de 2026 volvieron
       a medir. La forma de las barras se guarda tal cual porque la lamina 11
       la repite a proposito, y ese eco es el recurso narrativo de la ponencia.
   05  Nueve segundos. El numero y la palabra son UNA sola unidad tipografica,
       no un numero gigante con una etiqueta gris debajo. El reloj corre de
       verdad, la cadena de cuatro pasos se enciende mientras corre y la
       captura real de prensa esta en pantalla desde el primer fotograma,
       porque es la prueba de lo que se afirma. Abajo, la banda con lo que
       costo.

   Lo visual vive en assets/css/laminas/02-golpe.css. Ninguna de las tres
   toca deck.js.

   Lo que se dice hablando no esta escrito aqui. En la 03 faltan la creencia
   compartida, la pregunta que abre la tension y quien es Karpathy. En la 04
   falta el detalle del diseño del experimento, y en la 05 falta todo el
   relato del incidente, quien es Cursor y el remate de que nueve segundos
   bastaron para destruir lo que tomo años construir. Eso va en la voz, no en
   la pantalla.
   ========================================================================== */
window.DECK.push(

/* ───────────────────── 03 El iceberg y la cita de Karpathy ───────────────── */
/* Rehecha el 25 de septiembre por la noche con lo que pidio el expositor: un
   iceberg de verdad, con lo de arriba y lo de abajo, todo en cajas ordenadas.
   No un dibujo con una frase, y no un diagrama sin iceberg.

   La escena es un SVG fijo de 1112 por 480: el agua, la punta y la masa
   sumergida, en facetas de hielo. Encima van las cajas en HTML, para que el
   texto sea texto. Arriba del agua una sola caja, la peticion. Abajo ocho.

   La animacion es el argumento: primero se ve solo la punta, que es lo que
   todos ven del vibe coding. Despues se aclara lo sumergido y las ocho cajas
   aparecen una por una. Cincuenta palabras justas: se fueron los rotulos de
   las dos zonas, que el agua ya dice. */
{
  section: 'El golpe',
  title: 'Lo que decide está debajo',
  min: '0:40 a 1:20',
  html: `
  <div class="pad">
    <h1 class="title">Lo que decide está debajo</h1>
    <div class="rule"></div>

    <div class="body-area ice-area">
      <div class="ice-escena">
        <svg class="ice-svg" viewBox="0 0 1112 480" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="iceAgua" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#3D8FD6" stop-opacity="0.55"/>
              <stop offset="0.35" stop-color="#1B5E9C" stop-opacity="0.82"/>
              <stop offset="1" stop-color="#0B2F52" stop-opacity="0.96"/>
            </linearGradient>
          </defs>
          <rect class="ice-mar" x="0" y="138" width="1112" height="342" rx="14" fill="url(#iceAgua)"/>
          <g class="ice-masa">
            <polygon points="236,140 630,140 760,168 952,206 1062,286 1080,392 1004,474 128,474 30,404 44,292 120,212" fill="#D6E9F8" fill-opacity="0.34" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="2"/>
            <polyline points="120,212 300,300 44,292" fill="none" stroke="#FFFFFF" stroke-opacity="0.22" stroke-width="2"/>
            <polyline points="596,140 640,300 952,206" fill="none" stroke="#FFFFFF" stroke-opacity="0.22" stroke-width="2"/>
            <polyline points="300,300 640,300 1062,286" fill="none" stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="2"/>
            <polyline points="128,474 300,300 520,474 640,300 820,474" fill="none" stroke="#FFFFFF" stroke-opacity="0.16" stroke-width="2"/>
          </g>
          <g class="ice-punta">
            <polygon points="236,140 296,64 380,4 444,44 492,24 596,104 630,140" fill="#EEF5FC" stroke="#5E97CF" stroke-width="2.5"/>
            <polygon points="380,4 444,44 424,140 296,64" fill="#CFE2F4"/>
            <polygon points="492,24 596,104 630,140 424,140 444,44" fill="#E1EDF9"/>
          </g>
          <line class="ice-linea" x1="0" y1="140" x2="1112" y2="140" stroke="#1B5E9C" stroke-width="3"/>
        </svg>

        <div class="ice-caja">Escribir la petición</div>

        <blockquote class="quote ice-cita">
          <b>vibe coding</b>
          &ldquo;Entregarse a las vibras y olvidar que el código existe&rdquo;
          <span class="who">Andrej Karpathy, cofundador de OpenAI, 2025</span>
        </blockquote>

        <div class="ice-rej">
          <span>Contexto del proyecto</span>
          <span>Convenciones del repositorio</span>
          <span>Criterio de aceptación</span>
          <span>Permisos del agente</span>
          <span>Revisión humana</span>
          <span>Pruebas automáticas</span>
          <span>Elegir modelo</span>
          <span>Leer el resultado</span>
        </div>
      </div>
    </div>
  </div>`
},

/* ────────────────────────── 04 El experimento de METR ────────────────────── */
{
  section: 'El golpe',
  title: 'El experimento de METR',
  min: '1:20 a 2:20',
  html: `
  <div class="pad">
    <h1 class="title">La sensación no sirve para medir</h1>
    <div class="rule"></div>

    <div class="body-area met-area">
      <div class="met-grid">

        <!-- La captura de la pagina de METR. Ocupa el flanco izquierdo, que
             antes eran cuatrocientos noventa pixeles muertos, y sostiene la
             cifra con la fuente a la vista: el titulo del estudio, el resumen
             donde se lee el 19 por ciento y la nota de actualizacion. El
             recorte lo hace el marco, no el archivo. -->
        <figure class="met-nota">
          <div class="met-marco">
            <img src="assets/img/nota-metr.png" alt="Página de METR con el estudio Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity">
          </div>
          <figcaption class="met-pie">METR, ensayo controlado aleatorizado. Julio de 2025.</figcaption>
        </figure>

        <!-- Pieza .enf, generica y reutilizable. Los valores entran por
             atributos: --to es la cifra y --h el alto de la barra. Como los
             dos porcentajes son casi iguales en magnitud, las dos barras
             salen casi identicas y lo unico que las separa es la direccion,
             que es exactamente el punto. Las cifras estan completas desde el
             primer fotograma: un contador que sube proyecta cifras falsas
             mientras el expositor dice la verdadera. -->
        <div class="enf">

          <div class="enf-arriba">
            <span class="enf-eti">Lo que sintieron</span>
            <span class="enf-cifra" style="--to:20"><i class="sg">+</i><i class="nm"></i><i class="pc">%</i></span>
            <span class="enf-barra" style="--h:124px"></span>
          </div>

          <div class="enf-eje"></div>

          <div class="enf-abajo">
            <span class="enf-barra" style="--h:118px"></span>
            <span class="enf-cifra" style="--to:19"><i class="sg">&minus;</i><i class="nm"></i><i class="pc">%</i></span>
            <span class="enf-eti">Lo que se midió</span>
          </div>

        </div>

      </div>
    </div>

    <!-- 2026. Pedido el 25 de septiembre por la noche: hablar solo del dato
         viejo cuando hay uno nuevo sonaba raro. METR, 24 de febrero de 2026:
         los mismos programadores, con herramientas nuevas, estimado 18 por
         ciento mas rapidos. La propia METR advierte que la medicion ya no es
         confiable porque muchos no aceptan trabajar sin IA y no pueden medir
         bien a quien usa varios agentes a la vez. Esa advertencia es el
         puente a la segunda mitad de la charla. -->
    <div class="met-2026">
      <span class="m26-a">2026</span>
      <span class="m26-n">18&nbsp;%</span>
      <span class="m26-l">más rápidos con herramientas nuevas</span>
      <span class="m26-t">METR ya no puede medirlo bien: muchos trabajan con varios agentes a la vez.</span>
    </div>
  </div>`
},

/* ───────────────────────────── 05 Nueve segundos ─────────────────────────── */
{
  section: 'El golpe',
  title: 'Nueve segundos',
  min: '2:20 a 3:10',
  html: `
  <div class="pad">
    <h1 class="title">El agente tenía permiso</h1>
    <div class="rule"></div>

    <div class="body-area nueve">
      <div class="nv-grid">

        <div class="nv-izq">

          <!-- El nombre del caso es informacion principal, asi que va a
               cuerpo de informacion principal y no de pie de foto. -->
          <div class="nv-caso">
            <img class="nv-logo" src="assets/logos/pocketos.png" alt="Logo de PocketOS">
            <span class="nv-caso-tx">
              <span class="nv-marca">PocketOS</span>
              <span class="nv-giro">Alquiler de vehículos</span>
            </span>
          </div>

          <!-- El numero y la palabra son UNA sola unidad tipografica, en una
               sola linea y sobre una sola base. Antes eran dos objetos, un
               nueve gigante y una etiqueta gris debajo, y desde el fondo del
               salon se leia "9" a secas. El digito lo escribe la hoja de
               estilo con un contador, asi que el marcado no lleva ni una
               cifra suelta y, si el navegador no anima, se lee el nueve. -->
          <div class="nv-seg"><i class="nv-n"></i> segundos</div>

        </div>

        <!-- La columna de la derecha cuenta lo que paso: el titular real de
             prensa y, debajo, la cadena de cuatro pasos. La columna del nueve
             queda solo con el caso y el reloj, que es lo unico que tiene que
             mirar la sala. -->
        <div class="nv-der">

          <!-- La evidencia, en pantalla desde el primer fotograma. Solo el
               titular real de prensa, ya recortado en el archivo: sin la barra
               de navegacion de Hackread ni la ilustracion, que competian con
               el nueve y ocupaban mas que el dato. La pagina completa sigue en
               assets/img/nota-pocketos.png por si hace falta. -->
          <figure class="nv-nota">
            <div class="nv-marco">
              <img src="assets/img/tit-pocketos-limpio.png" alt="Titular de Hackread: Cursor AI Agent Wipes PocketOS Database and Backups in 9 Seconds">
            </div>
            <figcaption class="nv-pie">Hackread y OCDE, abril de 2026</figcaption>
          </figure>

          <!-- La cadena se enciende paso a paso mientras el reloj corre. El
               ultimo es el unico que hace daño, y por eso es el unico rojo.
               Al parar el reloj se queda encendida entera. -->
          <ol class="nv-cadena">
            <li class="nv-paso">entorno de pruebas</li>
            <li class="nv-paso">problema de credenciales</li>
            <li class="nv-paso">llave sin alcance limitado</li>
            <li class="nv-paso fatal"><code>volumeDelete</code></li>
          </ol>

        </div>

      </div>

      <!-- La banda de abajo: lo que costo, y la frase que lo resume. Entra
           cuando el reloj para. Primero las dos cifras, y un instante despues
           la frase, que es la que el expositor eligio para esta lamina entre
           todas las que se escribieron. Va tal cual la aprobo. Lo borrado, la
           base y sus respaldos, ya lo dice el titular de prensa en pantalla. -->
      <div class="nv-saldo">
        <div class="nv-dato"><b>30 horas</b><span>fuera de servicio</span></div>
        <div class="nv-dato"><b>3 meses</b><span>de reservas perdidas</span></div>
        <p class="nv-frase">La IA hace en segundos lo que no deberías haberle pedido.</p>
      </div>

    </div>
  </div>`
}

);
