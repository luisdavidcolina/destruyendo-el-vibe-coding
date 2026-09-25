/* ==========================================================================
   02-golpe.js : laminas 03, 04 y 05

   Es el golpe de la ponencia. Tres laminas seguidas que abren una tension y
   la cierran con evidencia, y las tres mejores animaciones del deck.

   03  El iceberg y la cita de quien bautizo el termino. Sobre la linea de
       agua esta la punta, que es la peticion que se escribe, y debajo esta
       todo lo que decide si el resultado sirve. No hay ninguna cifra: esta
       lamina existe para abrir la tension que resuelven las dos siguientes.
       La foto todavia no esta en la carpeta, asi que hay un hueco preparado
       y un iceberg dibujado en CSS que sostiene la lamina hoy mismo.
   04  El experimento de METR. Dos barras enfrentadas sobre un mismo eje.
       Sube lo que sintieron, cae lo que se midio. La forma se guarda tal
       cual porque la lamina 11 la repite a proposito, y ese eco es el
       recurso narrativo de la ponencia.
   05  Nueve segundos de reloj corriendo de verdad, con la cadena de cuatro
       pasos encendiendose mientras corre, y la captura real de prensa al
       lado. Al llegar a nueve no se apaga nada: entra lo que costo y la
       lamina se queda entera, que es lo que la sala fotografia.

   Lo visual vive en assets/css/laminas/02-golpe.css. Ninguna de las tres
   toca deck.js: las cifras las escribe CSS con un contador y el reloj es
   una cinta con steps().

   Lo que se dice hablando no esta escrito aqui. En la 03 faltan la creencia
   compartida, la pregunta que abre la tension y quien es Karpathy. En la 04
   falta el aviso de que METR cambio el diseño del experimento en febrero de
   2026, y en la 05 falta todo el relato del incidente, quien es Cursor y el
   remate de que nueve segundos bastaron para destruir lo que tomo años
   construir. Eso va en la voz, no en la pantalla.
   ========================================================================== */
window.DECK.push(

/* ───────────────────── 03 El iceberg y la cita de Karpathy ─────────────────── */
{
  section: 'El golpe',
  title: 'Lo que decide esta debajo',
  min: '0:40 a 1:20',
  html: `
  <div class="pad">
    <div class="kicker anim" data-d="1">vibe coding</div>
    <h1 class="title">Lo que decide esta debajo</h1>
    <div class="rule"></div>

    <div class="body-area ice-area">
      <!-- El hueco de la foto es .ice-foto y apunta a assets/img/iceberg.jpg.
           Ese archivo todavia no existe, asi que hoy esa capa no pinta nada y
           lo que se ve es el iceberg dibujado con degradados y recortes que
           queda debajo. El dia que la imagen entre en la carpeta la tapa sin
           que haya que tocar una linea de aqui. -->
      <figure class="ice">
        <div class="ice-masa" aria-hidden="true"></div>
        <div class="ice-punta" aria-hidden="true"></div>
        <div class="ice-foto" aria-hidden="true"></div>
        <div class="ice-tapa" aria-hidden="true"></div>
        <div class="ice-agua" aria-hidden="true"></div>
        <div class="ice-velo" aria-hidden="true"></div>

        <!-- La cita va en .quote, que es la misma pieza con barra lateral de
             acento que lleva la cita de Thompson en la lamina 13. Las dos
             tienen que leerse como un par, asi que el formato no se toca:
             aqui solo cambian el sitio y el tamaño. El mes de la publicacion
             y quien es Karpathy se dicen hablando. -->
        <blockquote class="quote ice-cita">
          &ldquo;Entregarse a las vibras y olvidar que el codigo existe&rdquo;
          <span class="who">Andrej Karpathy, 2025</span>
        </blockquote>
      </figure>
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
    <h1 class="title">La sensacion no sirve para medir</h1>
    <div class="rule"></div>

    <div class="body-area enf-area">
      <!-- Pieza .enf, generica y reutilizable. Los valores entran por
           atributos: --to es la cifra a la que cuenta el numero y --h el
           alto de la barra. Como los dos porcentajes son casi iguales en
           magnitud, las dos barras salen casi identicas y lo unico que las
           separa es la direccion, que es exactamente el punto.

           Primero sube la de arriba, rapida. Se sostiene un segundo. Y
           entonces aparece la de abajo y cae hacia el otro lado. -->
      <div class="enf">

        <div class="enf-arriba">
          <span class="enf-eti">Lo que sintieron</span>
          <span class="enf-cifra" style="--to:20"><i class="sg">+</i><i class="nm"></i><i class="pc">%</i></span>
          <span class="enf-barra" style="--h:132px"></span>
        </div>

        <div class="enf-eje"></div>

        <div class="enf-abajo">
          <span class="enf-barra" style="--h:125px"></span>
          <span class="enf-cifra" style="--to:19"><i class="sg">-</i><i class="nm"></i><i class="pc">%</i></span>
          <span class="enf-eti">Lo que se midio</span>
        </div>

      </div>
    </div>

    <div class="fuente anim" data-d="8">METR, 2025 y 2026</div>
  </div>`
},

/* ───────────────────────────── 05 Nueve segundos ─────────────────────────── */
{
  section: 'El golpe',
  title: 'Nueve segundos',
  min: '2:20 a 3:10',
  html: `
  <div class="pad">
    <h1 class="title">El agente tenia permiso</h1>
    <div class="rule"></div>

    <div class="body-area nueve">
      <div class="nv-grid">

        <div class="nv-izq">

          <!-- El nombre del caso es informacion principal, asi que va a cuerpo
               de informacion principal y no de pie de foto. Encima del reloj,
               porque lo que la sala tiene que leer de corrido es PocketOS,
               nueve segundos. -->
          <div class="nv-caso">
            <span class="nv-marca">PocketOS</span>
            <span class="nv-giro">alquiler de vehiculos</span>
          </div>

          <!-- El reloj corre de verdad: nueve segundos de sala en silencio.
               Las diez celdas van vacias a proposito, los digitos los escribe
               la hoja de estilo con un contador. -->
          <div class="nv-reloj">
            <div class="nv-vent" aria-hidden="true">
              <div class="nv-cinta"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            </div>
            <div class="nv-u">segundos</div>
          </div>

          <!-- La cadena se enciende paso a paso mientras el reloj corre. El
               ultimo es el unico que hace daño, y por eso es el unico rojo.
               Al parar el reloj se queda encendida entera, porque es lo que
               la sala fotografia. -->
          <ol class="nv-cadena">
            <li class="nv-paso">entorno de pruebas</li>
            <li class="nv-paso">problema de credenciales</li>
            <li class="nv-paso">llave sin alcance limitado</li>
            <li class="nv-paso fatal"><code>volumeDelete</code></li>
          </ol>

        </div>

        <div class="nv-der">

          <!-- La evidencia. Titular real de prensa, con la marca del medio
               arriba y las dos lineas del titular abajo. El recorte lo hace el
               marco en la hoja de estilo: entra la imagen entera y se corta lo
               que sobra, que es el cuerpo de la nota. -->
          <figure class="nv-nota">
            <div class="nv-marco">
              <img src="assets/img/nota-pocketos.png" alt="Titular de Hackread sobre el borrado de la base de datos y los respaldos de PocketOS en nueve segundos">
            </div>
            <figcaption class="nv-pie pie-fuente">Hackread, 29 de abril de 2026</figcaption>
          </figure>

          <!-- Al llegar a nueve no se apaga nada. Entra lo que costo, y esto
               es lo que queda proyectado mientras se sigue hablando. -->
          <div class="nv-saldo">
            <p class="nv-dano">Base de datos y respaldos, borrados</p>
            <div class="nv-dato"><b>30 horas</b><span>fuera de servicio</span></div>
            <div class="nv-dato"><b>3 meses</b><span>de reservas perdidas</span></div>
          </div>

        </div>

      </div>
    </div>

    <div class="fuente">OECD AI Incidents</div>
  </div>`
}

);
