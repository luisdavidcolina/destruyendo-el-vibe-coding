/* ==========================================================================
   03-metodo.js : laminas 06, 07 y 08

   06  El giro. Corte a oscuro y una sola cosa en pantalla: la unica
       pregunta del deck, a cuerpo de portada. La respuesta va hablada. El
       diff no se repite aqui porque la portada ya lo cerro con su linea
       verde, y contarlo dos veces gasta el efecto. El cohete, la definicion
       de programacion con varios agentes y la aclaracion de que nada de esto
       depende de una marca van hablados, no escritos.
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
  section: 'La resolución',
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

      <!-- Nada mas. La respuesta, la definicion y la aclaracion de que nada
           de esto depende de una marca ni de un lenguaje van habladas.
           Escritas ocupan sitio, no son el argumento de la lamina y la
           aclaracion suena a descargo de responsabilidad. -->

    </div>
  </div>`
},

/* ───────────────────── 07 El encargo es el trabajo ──────────────────────── */
{
  section: 'La resolución',
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
              ><span class="ln e2"><span class="et k">objetivo</span><span class="ev v">la sesión caduca en 30 min</span></span
              ><span class="ln e3"><span class="et k">límites</span><span class="ev v">no tocar el esquema</span></span
              ><span class="ln e4"><span class="et k">verificación</span><span class="ev v">correr la prueba nueva</span></span></pre>
          </div>

          <div class="salida buena anim" data-d="4">
            <span class="fl"><svg viewBox="0 0 24 24"><path d="M12 4v13.2"/><path d="M6.4 12.2l5.6 5.9 5.6-5.9"/></svg></span>
            <div class="chips">
              <span class="chip r1">un archivo</span>
              <span class="chip r2">sesión corregida</span>
              <span class="chip r3">esquema intacto</span>
              <span class="chip r4">en verde</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>`
},

/* ───────────────── 08 Cuatro reglas, en concreto ──────────────── */
{
  section: 'La resolución',
  title: 'Cuatro reglas, y la primera manda',
  min: '4:30 a 5:30',
  html: `
  <div class="pad">
    <h1 class="title">Cuatro reglas, y la primera manda</h1>
    <div class="rule"></div>

    <!-- Cuatro fichas y ninguna mas, cada una con un predicado que se entiende
         solo. El orden es el del guion: primero lo que evita un desastre y
         despues lo que da velocidad. La primera lleva la barra de acento
         porque es la leccion literal de la lamina 05 y la unica de la lista
         que no es opcional.

         Las otras cuatro reglas del guion van habladas y no llevan ficha, y
         el chiste del lenguaje tampoco se escribe: leido pierde el tiempo de
         entrega y ademas gasta presupuesto de texto. -->
    <div class="body-area consejos">
      <div class="grid g2 gap-lg">

        <article class="ficha card lit f1">
          <div class="cab">
            <span class="ico"><svg viewBox="0 0 24 24"><rect x="4.6" y="10.4" width="14.8" height="9.6" rx="2.2"/><path d="M8.2 10.4V7.8a3.8 3.8 0 0 1 7.6 0v2.6"/></svg></span>
            <span class="n">01</span>
          </div>
          <h3>Alcance mínimo</h3>
          <p>ningún permiso de más</p>
        </article>

        <article class="ficha card f2">
          <div class="cab">
            <span class="ico"><svg viewBox="0 0 24 24"><path d="M2.8 12S6.2 6 12 6s9.2 6 9.2 6-3.4 6-9.2 6-9.2-6-9.2-6z"/><circle cx="12" cy="12" r="2.9"/></svg></span>
            <span class="n">02</span>
          </div>
          <h3>Revisión humana</h3>
          <p>antes de integrar</p>
        </article>

        <article class="ficha card f3">
          <div class="cab">
            <span class="ico"><svg viewBox="0 0 24 24"><path d="M12 3.4l7.4 4.2v8.8L12 20.6l-7.4-4.2V7.6z"/><path d="M4.6 7.6L12 11.8l7.4-4.2"/><path d="M12 11.8v8.8"/></svg></span>
            <span class="n">03</span>
          </div>
          <h3>Piezas pequeñas</h3>
          <p>con criterio de aceptación</p>
        </article>

        <article class="ficha card f4">
          <div class="cab">
            <span class="ico"><svg viewBox="0 0 24 24"><rect x="3.2" y="4.8" width="17.6" height="14.4" rx="2.2"/><path d="M7.6 10.2l2.7 2.6-2.7 2.6"/><path d="M12.8 15.4h4"/></svg></span>
            <span class="n">04</span>
          </div>
          <h3>Del navegador a la terminal</h3>
          <p>donde el agente ve el proyecto</p>
        </article>

      </div>
    </div>
  </div>`
}

);
