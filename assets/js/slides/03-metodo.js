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
    <h1 class="title">Las reglas cambian el resultado</h1>
    <div class="rule"></div>

    <!-- Cuatro fichas y no ocho. Dos palabras sueltas no significan nada
         para quien mira la lamina sin oir al expositor, asi que cada ficha
         lleva su predicado y las otras cuatro reglas van habladas. Las tres
         primeras evitan un desastre y la cuarta da velocidad, que es el
         orden en que se dicen. Los iconos van dibujados aqui mismo, de trazo
         y con la misma reticula de 24, para que no se le pida nada a
         internet el dia de la ponencia. -->
    <div class="body-area consejos">
      <div class="grid g2 gap-lg">

        <div class="card ficha f1">
          <span class="ico"><svg viewBox="0 0 24 24"><path d="M12 3.2l7.2 3v5.4c0 4.2-3 7.7-7.2 8.6-4.2-.9-7.2-4.4-7.2-8.6V6.2z"/><path d="M9.2 11.6h5.6"/></svg></span>
          <h3>Alcance minimo: ningun permiso de mas</h3>
        </div>

        <div class="card ficha f2">
          <span class="ico"><svg viewBox="0 0 24 24"><circle cx="9.4" cy="7.8" r="3.2"/><path d="M3.6 19.6c.5-3.3 3-5.4 5.8-5.4 1.2 0 2.3.3 3.3.9"/><path d="M14.4 17.1l2.1 2.1 3.9-4.3"/></svg></span>
          <h3>Revision humana antes de integrar</h3>
        </div>

        <div class="card ficha f3">
          <span class="ico"><svg viewBox="0 0 24 24"><rect x="3.8" y="3.8" width="7" height="7" rx="1.7"/><rect x="13.2" y="3.8" width="7" height="7" rx="1.7"/><rect x="3.8" y="13.2" width="7" height="7" rx="1.7"/><rect x="13.2" y="13.2" width="7" height="7" rx="1.7"/></svg></span>
          <h3>Piezas pequeñas con criterio de aceptacion</h3>
        </div>

        <div class="card ficha f4">
          <span class="ico"><svg viewBox="0 0 24 24"><rect x="3" y="4.6" width="18" height="14.8" rx="2.4"/><path d="M3 8.6h18"/><path d="M7.4 12.4l2.4 2.2-2.4 2.2"/><path d="M12.6 16.8h4.2"/></svg></span>
          <h3>Del navegador a la terminal</h3>
        </div>

      </div>
    </div>
  </div>`
}

);
