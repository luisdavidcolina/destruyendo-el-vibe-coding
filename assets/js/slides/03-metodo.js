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
   08  Asi trabajo con agentes. El microfono, las reglas del repositorio y lo
       que evalua hoy el GH-300. El detalle esta sobre la lamina.

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
    ${window.FONDO_CODIGO('agrega')}
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
      <!-- Lo que se tacha: el nombre de moda. Pedido el 25 de septiembre por
           la noche. Entra y se tacha antes de que aparezcan los dos paneles,
           y queda tachado toda la lamina. -->
      <p class="enc-tacha"><span class="tx">Ingeniería de prompts<i class="raya" aria-hidden="true"></i></span></p>

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
            <pre><span class="ln sola"><span class="pr d">&gt;</span><span class="ev v escribe">arregla el login</span></span></pre>
            <!-- Doce archivos tocados, uno por uno, en rojo: lo que devuelve la peticion pobre. -->
            <div class="enc-archivos" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
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
            <pre><span class="ln e1"><span class="et k">contexto</span><span class="ev v">src/auth y estilo del repo</span></span
              ><span class="ln e2"><span class="et k">objetivo</span><span class="ev v">sesión de 30 min</span></span
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

/* ───────────────── 08 Asi trabajo con agentes ──────────────── */
/* Rehecha entera el 25 de septiembre por la noche. La anterior eran cuatro
   tarjetas iguales con un icono, que es la rejilla de plantilla que el
   expositor rechazo. Esta tiene tres piezas y cada una es de otra naturaleza:

   1. La foto real de un microfono, con un boton de grabar que late y la onda
      de la voz. Es el consejo que nadie espera: el encargo se dicta, no se
      escribe, y dictado sale mas largo y con mas contexto. La foto es un
      Shure MV7 de Panos Sakalakis, CC BY 2.0, citada en la ultima lamina.
   2. Las reglas contra el desastre, escritas como la pantalla de ajustes de
      un repositorio de GitHub: tres interruptores que se encienden uno por
      uno. Configurar es exactamente lo que se hace con ellas.
   3. Lo que evaluan hoy dos examenes, verificado en sus guias oficiales:
      el GH-300 de GitHub Copilot (version del 7 de agosto de 2026) y el
      AI-103 de Microsoft (RAG, soluciones multiagente orquestadas,
      guardrails y flujos de aprobacion). La CLI es el consejo de pasar del
      navegador a la terminal, sin enfasis.

   4. Mi flujo, pedido por el expositor al ver la primera version: la foto
      mas chica y en ese espacio mas consejos suyos.

   El chiste del lenguaje abre esta lamina hablado y no se escribe. */
{
  section: 'La resolución',
  title: 'Cómo se trabaja con agentes',
  min: '4:10 a 5:10',
  html: `
  <div class="pad">
    <h1 class="title">Cómo se trabaja con agentes</h1>
    <div class="rule"></div>

    <div class="body-area oficio">
      <div class="of-grid">

        <div class="of-izq">
        <figure class="of-mic">
          <img src="assets/img/microfono.jpg" alt="Micrófono Shure MV7">
          <div class="of-rec" aria-hidden="true">
            <span class="of-punto"></span>
            <span class="of-onda"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
          </div>
          <figcaption>Dictar el encargo</figcaption>
        </figure>

          <!-- Mi flujo: tres consejos mas, de como trabaja el expositor. El
               agente en la nube que toma un issue y devuelve un pull request,
               aprobar desde el telefono, y el modelo pequeño para lo que se
               repite. El detalle de cada uno va hablado. -->
          <section class="of-panel of-flujo">
            <h3>El flujo</h3>
            <ul>
              <li><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/></svg>Del issue al PR</li>
              <li><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>Aprobar desde el teléfono</li>
              <li><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.5.75V2h3V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75V5h1.25a.75.75 0 0 1 0 1.5H14v3h1.25a.75.75 0 0 1 0 1.5H14v1.25A1.75 1.75 0 0 1 12.25 14H11v1.25a.75.75 0 0 1-1.5 0V14h-3v1.25a.75.75 0 0 1-1.5 0V14H3.75A1.75 1.75 0 0 1 2 12.25V11H.75a.75.75 0 0 1 0-1.5H2v-3H.75a.75.75 0 0 1 0-1.5H2V3.75C2 2.784 2.784 2 3.75 2H5V.75a.75.75 0 0 1 1.5 0Zm5.75 11.75a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25ZM5.75 5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 5.75 5Zm.75 4.5h3v-3h-3Z"/></svg>Modelo según la tarea</li>
            </ul>
          </section>
        </div>

        <div class="of-der">
          <section class="of-panel">
            <h3><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"/></svg>Reglas del repositorio</h3>
            <ul class="of-reglas">
              <li class="r1"><span class="of-tg" aria-hidden="true"></span>Alcance mínimo</li>
              <li class="r2"><span class="of-tg" aria-hidden="true"></span>Revisión humana</li>
              <li class="r3"><span class="of-tg" aria-hidden="true"></span>Piezas verificables</li>
            </ul>
          </section>

          <section class="of-panel of-examen">
            <h3>Qué evalúan hoy</h3>
            <div class="of-fila">
              <span class="of-ex"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"/><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"/></svg>GH-300</span>
              <div class="of-chips">
                <span>Modo agente</span><span>Subagentes</span><span>MCP</span><span>CLI</span><span>Instrucciones</span>
              </div>
            </div>
            <div class="of-fila">
              <span class="of-ex"><img src="assets/logos/microsoft.svg" alt="">AI-103</span>
              <div class="of-chips ms">
                <span>RAG</span><span>Multiagente</span><span>Guardrails</span><span>Aprobaciones</span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  </div>`
}

);
