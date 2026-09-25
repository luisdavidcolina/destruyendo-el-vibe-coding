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

/* ───────────────────── 03 El reparto y la cita de Karpathy ───────────────── */
{
  section: 'El golpe',
  title: 'Lo que decide está debajo',
  min: '0:40 a 1:20',
  html: `
  <div class="pad">
    <h1 class="title">Lo que decide está debajo</h1>
    <div class="rule"></div>

    <div class="body-area ice-area">

      <!-- Sobre la linea de flotacion: una sola caja, y al lado la cita de
           quien bautizo el termino. La cita va aqui arriba, fuera del agua,
           porque nombra justo lo unico que el metodo entero consiste en
           escribir. -->
      <div class="ice-sobre">
        <div class="ice-arriba">
          <span class="ice-eti">Lo que se escribe</span>
          <div class="ice-caja">Escribir la petición</div>
        </div>

        <blockquote class="quote ice-cita">
          <b>vibe coding</b>
          &ldquo;Entregarse a las vibras y olvidar que el código existe&rdquo;
          <span class="who">Andrej Karpathy, 2025</span>
        </blockquote>
      </div>

      <div class="ice-agua"><span>Línea de flotación</span></div>

      <!-- Debajo, las ocho. La rejilla llena lo que queda de lamina a
           proposito: ese volumen es el argumento. -->
      <div class="ice-bajo">
        <span class="ice-eti">Lo que decide si el resultado sirve</span>
        <div class="ice-rej">
          <span>Contexto del proyecto</span>
          <span>Convenciones del repositorio</span>
          <span>Criterio de aceptación</span>
          <span>Permisos del agente</span>
          <span>Revisión humana</span>
          <span>Pruebas que corren</span>
          <span>Qué modelo para qué tarea</span>
          <span>Saber leer lo que devuelve</span>
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

    <p class="met-ajuste">En febrero de 2026 METR volvió a medir con modelos posteriores y publicó los datos nuevos.</p>
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
            <span class="nv-marca">PocketOS</span>
            <span class="nv-giro">Alquiler de vehículos</span>
          </div>

          <!-- El numero y la palabra son UNA sola unidad tipografica, en una
               sola linea y sobre una sola base. Antes eran dos objetos, un
               nueve gigante y una etiqueta gris debajo, y desde el fondo del
               salon se leia "9" a secas. El digito lo escribe la hoja de
               estilo con un contador, asi que el marcado no lleva ni una
               cifra suelta y, si el navegador no anima, se lee el nueve. -->
          <div class="nv-seg"><i class="nv-n"></i> segundos</div>

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

        <!-- La evidencia, en pantalla desde el primer fotograma. Titular real
             de prensa. El recorte lo hace el marco: entra la imagen entera y
             se corta el cuerpo de la nota, que esta en ingles y que nadie
             alcanza a leer proyectado. -->
        <figure class="nv-nota">
          <div class="nv-marco">
            <img src="assets/img/nota-pocketos.png" alt="Titular de Hackread: Cursor AI Agent Wipes PocketOS Database and Backups in 9 Seconds">
          </div>
          <figcaption class="nv-pie">Hackread, 29 de abril de 2026 &middot; OECD AI Incidents</figcaption>
        </figure>

      </div>

      <!-- La banda de abajo: lo que costo. Cruza la lamina entera para que no
           quede aire muerto debajo de la cadena. -->
      <div class="nv-saldo">
        <p class="nv-dano">Base de datos y respaldos, borrados</p>
        <div class="nv-dato"><b>30 horas</b><span>fuera de servicio</span></div>
        <div class="nv-dato"><b>3 meses</b><span>de reservas perdidas</span></div>
      </div>

    </div>
  </div>`
}

);
