/* ==========================================================================
   03-metodo.js : laminas 06, 07 y 08

   06  El giro. Corte a oscuro. Arriba la unica pregunta del deck y debajo
       su respuesta, que es el diff que abrio la portada, ahora con su linea
       verde. El cohete, la definicion de programacion con varios agentes y
       la aclaracion de que nada de esto depende de una marca van hablados,
       no escritos.
   07  El encargo es el trabajo. La peticion pobre al lado del encargo
       completo, cada uno con su resultado. Los cuatro elementos se encienden
       uno por uno y con cada uno aparece la parte del resultado que produce.
   08  Cuatro fichas, y cada una dice algo entero. Dos palabras sueltas no
       significan nada para quien mira la lamina sin oir al expositor, asi
       que la ficha lleva su predicado. Los otros cuatro consejos van
       hablados y no llevan ficha.

   Los ritmos de encendido viven en laminas/03-metodo.css, porque el motor no
   tiene pasos dentro de una lamina. Estan calculados sobre los tramos del
   guion, a 148 palabras por minuto.
   ========================================================================== */
window.DECK.push(

/* ─────────────────────────── 06 El giro, corte ──────────────────────────── */
{
  section: 'La resolucion',
  title: '¿Entonces la IA es el problema?',
  min: '3:10 a 3:30',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="cine-hero giro">

      <!-- La unica pregunta de todo el deck. Se proyecta con su signo porque
           la sala lleva tres minutos llegando sola a ella. -->
      <h2>¿Entonces la IA es el problema?</h2>

    </div>
  </div>`
},

/* ───────────────────── 07 El encargo es el trabajo ──────────────────────── */
{
  section: 'La resolucion',
  title: 'El encargo es el trabajo',
  min: '3:30 a 4:30',
  html: `
  <div class="pad">
    <h1 class="title">El encargo es el trabajo</h1>
    <div class="rule"></div>

    <div class="body-area encargo">
      <div class="grid g-5-7 gap-lg">

        <!-- Izquierda: la peticion pobre. El bloque se estira hasta el alto
             del de la derecha a proposito: el vacio que queda debajo de la
             unica linea es parte del argumento. -->
        <div class="col">
          <div class="code anim" data-d="1">
            <div class="code-bar">
              <span class="dot"></span><span class="dot"></span>
              <span class="nm">chat</span>
            </div>
            <pre><span class="ln sola"><span class="pr d">&gt;</span><span class="ev v">arregla el login</span></span></pre>
          </div>

          <div class="salida mala anim" data-d="3">
            <span class="fl"><svg viewBox="0 0 24 24"><path d="M12 4v13.2"/><path d="M6.4 12.2l5.6 5.9 5.6-5.9"/></svg></span>
            <span class="rs">Doce archivos sin probar</span>
          </div>
        </div>

        <!-- Derecha: el mismo encargo, completo. Los saltos de linea van
             dentro de la etiqueta de cierre para que no quede ningun espacio
             suelto entre renglones. -->
        <div class="col">
          <div class="code anim" data-d="2">
            <div class="code-bar">
              <span class="dot"></span><span class="dot"></span>
              <span class="nm">.github/copilot-instructions.md</span>
            </div>
            <pre><span class="ln e1"><span class="et k">contexto</span><span class="ev v">src/auth, estilo del repo</span></span
              ><span class="ln e2"><span class="et k">objetivo</span><span class="ev v">la sesion caduca en 30 min</span></span
              ><span class="ln e3"><span class="et k">limites</span><span class="ev v">no tocar el esquema</span></span
              ><span class="ln e4"><span class="et k">verificacion</span><span class="ev v">correr la prueba nueva</span></span></pre>
          </div>

          <div class="salida buena anim" data-d="4">
            <span class="fl"><svg viewBox="0 0 24 24"><path d="M12 4v13.2"/><path d="M6.4 12.2l5.6 5.9 5.6-5.9"/></svg></span>
            <div class="chips">
              <span class="chip r1">un archivo</span>
              <span class="chip r2">sesion corregida</span>
              <span class="chip r3">esquema intacto</span>
              <span class="chip r4">en verde</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>`
},

/* ────────────────────────── 08 Como se trabaja bien ─────────────────────── */
{
  section: 'La resolucion',
  title: 'Las reglas cambian el resultado',
  min: '4:30 a 5:30',
  html: `
  <div class="pad">
    <h1 class="title anim" data-d="1">Una tarea pasa por cuatro puertas</h1>
    <div class="rule"></div>

    <!-- Las reglas no van como lista de consejos. Van como el recorrido que
         hace una tarea real desde que se asigna hasta que se integra, y cada
         regla es la puerta que tiene que pasar. La sala ve un proceso, no
         cuatro frases sueltas. -->
    <div class="body-area via">
      <div class="via-riel">

        <div class="vp anim" data-d="3">
          <span class="vp-n">01</span>
          <span class="vp-t">Se asigna una pieza pequena</span>
          <span class="vp-d">con su criterio de aceptacion escrito</span>
        </div>

        <span class="vp-fl anim" data-d="4"></span>

        <div class="vp anim" data-d="5">
          <span class="vp-n">02</span>
          <span class="vp-t">El agente recibe el permiso justo</span>
          <span class="vp-d">ninguno que no necesite</span>
        </div>

        <span class="vp-fl anim" data-d="6"></span>

        <div class="vp anim" data-d="7">
          <span class="vp-n">03</span>
          <span class="vp-t">Trabaja donde vive el proyecto</span>
          <span class="vp-d">en el repositorio, no en una pestana</span>
        </div>

        <span class="vp-fl anim" data-d="8"></span>

        <div class="vp fin anim" data-d="9">
          <span class="vp-n">04</span>
          <span class="vp-t">Una persona revisa y acepta</span>
          <span class="vp-d">las pruebas son la red, no el juez</span>
        </div>

      </div>
    </div>
  </div>`
}

);
