/* 04 - Orquestacion y lo construido: laminas 09, 10 y 11
   La 09 es el nucleo tecnico de la ponencia y la 10 es la que paga el engano
   del primer acto. Las dos llevan evidencia propia, no consejos.

   Presupuesto de palabras proyectadas: 40 en la 09 y 35 en la 10. Todo lo que
   se explica va hablado, aqui solo queda lo que la sala tiene que leer. */
window.DECK.push(

/* ─────────────── 09 Aqui no hay espera muerta ─────────────────────────────
   Un tablero Kanban con la cara de GitHub Projects, porque es un evento de
   GitHub y la sala reconoce la pantalla: los iconos son los de Primer, el
   sistema de diseño de GitHub (issue abierto en verde, issue cerrado en
   morado, rechazo en rojo), y cada agente lleva el icono de Copilot y su
   identificador. Sin nombrar a la competencia: que corrieron agentes de
   otros proveedores se dice hablando.

   Debajo del tablero, la frase que el expositor aprobo para esta parte. Antes
   ahi habia un "Databricks, 2026" suelto, sin el dato de Databricks en
   pantalla, y no se entendia a que se referia. La cifra se dice hablando y la
   fuente completa esta en la ultima lamina.

   Tres historias por columna y no cuatro: cada identificador cuenta en el
   presupuesto de cincuenta palabras. */
{
  section: 'Orquestación',
  title: 'No más vibe coding ni pérdida de tiempo',
  min: '5:45 a 7:05',
  html: `
  <div class="pad">
    <h1 class="title anim" data-d="2">No más vibe coding ni pérdida de tiempo</h1>
    <div class="rule"></div>

    <div class="body-area">
      <div class="tablero anim f" data-d="3" data-widget="tablero">
        <div class="tb-top">
          <svg class="tb-ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"/></svg>
          <span class="tb-nom">Tablero Kanban</span>
          <span class="tb-num">323 historias</span>
        </div>

        <div class="tb-cols">
          <div class="tb-col">
            <div class="tb-hd">
              <span class="tb-h"><i class="tb-est todo"></i>Disponibles</span>
              <span class="tb-nota">sin dueño</span>
            </div>
            <div class="tb-card"><svg class="tb-iss abierto" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg><b>T-044</b></div>
            <div class="tb-card"><svg class="tb-iss abierto" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg><b>T-045</b></div>
            <div class="tb-card"><svg class="tb-iss abierto" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg><b>T-046</b></div>
          </div>

          <!-- Tres agentes de Copilot, cada uno con su identificador. Entran uno
               detras de otro desde la columna de la izquierda, que es lo que
               significa tomar una historia. La cuarta llega con un
               identificador en uso y el tablero la rechaza. -->
          <div class="tb-col">
            <div class="tb-hd">
              <span class="tb-h"><i class="tb-est curso"></i>En curso</span>
              <span class="tb-nota">en paralelo</span>
            </div>
            <div class="tb-card ag1 ent e1"><svg class="tb-iss abierto" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg><b>T-041</b><i><svg class="tb-cop" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"/><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"/></svg>copilot-1</i></div>
            <div class="tb-card ag2 ent e2"><svg class="tb-iss abierto" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg><b>T-042</b><i><svg class="tb-cop" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"/><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"/></svg>copilot-2</i></div>
            <div class="tb-card ag3 ent e3"><svg class="tb-iss abierto" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg><b>T-043</b><i><svg class="tb-cop" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"/><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"/></svg>copilot-3</i></div>
            <div class="tb-card dup"><svg class="tb-iss" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.344 2.343h-.001a8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746Zm1.06 10.253a6.5 6.5 0 1 0 9.108-9.275 6.5 6.5 0 0 0-9.108 9.275ZM6.03 4.97 8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L6.94 8 4.97 6.03a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018Z"/></svg><b>T-043</b><i><svg class="tb-cop" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"/><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"/></svg>copilot-3</i></div>
            <div class="tb-aviso">identificador repetido</div>
          </div>

          <div class="tb-col">
            <div class="tb-hd">
              <span class="tb-h"><i class="tb-est hecho"></i>Hechas</span>
              <span class="tb-nota">revisadas</span>
            </div>
            <div class="tb-card ok"><svg class="tb-iss cerrado" viewBox="0 0 16 16" aria-hidden="true"><path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"/></svg><b>T-038</b></div>
            <div class="tb-card ok"><svg class="tb-iss cerrado" viewBox="0 0 16 16" aria-hidden="true"><path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"/></svg><b>T-039</b></div>
            <div class="tb-card ok"><svg class="tb-iss cerrado" viewBox="0 0 16 16" aria-hidden="true"><path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"/></svg><b>T-040</b></div>
          </div>
        </div>
      </div>

      <p class="tb-frase anim" data-d="10">Generar código nunca fue el problema. Saber cuál borrar, sí.</p>
    </div>
  </div>`
},

/* ─────────────── 10 Lo que automatice para estudiar ─────────────────────
   La 10 anterior se dividio en dos el 25 de septiembre por la noche, por
   decision del expositor y en el orden de su resumen del evento: primero las
   automatizaciones de estudio y trabajo, despues la comparacion de proyectos.

   Seis piezas reales, cada una con su captura:
   1. El archivo de su diario: 1.936 archivos de la carrera indexados
   2. El plan de estudio del dia, en el calendario del diario
   3. La clase interactiva de Matematica Discreta I, grabada en uso: se
      asignan valores de verdad hasta encontrar el contraejemplo
   4. Una guia propia en LaTeX, portada y pagina interior
   5. Su bot respondiendo en vivo, grabado: ocupa la columna entera
   Que esta ponencia es un archivo HTML se dice hablando, por decision del
   expositor. El detalle de cada pieza se dice hablando, y rapido. */
{
  section: 'Lo construido',
  title: 'Lo que automaticé para estudiar',
  min: '7:05 a 7:45',
  html: `
  <div class="pad">
    <h1 class="title">Lo que automaticé para estudiar</h1>
    <div class="rule"></div>

    <div class="body-area auto">
      <div class="au-grid">
        <figure class="au"><div class="au-img"><img src="assets/img/auto-archivo.jpg" alt="Explorador de archivos con las carpetas del semestre por materia"></div><figcaption><b>El semestre</b> ordenado con IA</figcaption></figure>
        <figure class="au"><div class="au-img"><img src="assets/img/auto-plan.jpg" alt="Plan de estudio del día en el calendario"></div><figcaption><b>Plan de estudio</b> del día</figcaption></figure>
        <!-- El bot ocupa la columna entera: es la unica pieza que se ve
             trabajando en tiempo real. Se le pide la nota informativa de una
             materia y lo que queda pendiente, y responde con datos del propio
             diario. Grabado el 25 de septiembre de 2026. -->
        <figure class="au bot lit"><div class="au-img"><video poster="assets/video/bot-chat.jpg" muted loop playsinline preload="none" data-src="assets/video/bot-chat.webm"></video></div><figcaption><b>Mi bot</b>, el mismo de WhatsApp</figcaption></figure>
        <figure class="au"><div class="au-img"><video poster="assets/video/prepa-calculadora.jpg" muted loop playsinline preload="none" data-src="assets/video/prepa-calculadora.webm"></video></div><figcaption><b>Clase interactiva</b> de Discreta</figcaption></figure>
        <figure class="au"><div class="au-img"><img src="assets/img/auto-latex.jpg" alt="Guía propia en LaTeX"></div><figcaption><b>Guías propias</b> en LaTeX</figcaption></figure>
      </div>
    </div>
  </div>`
},

/* ─────────────── 11 Seis meses contra cinco semanas ────────────────────
   Los dos proyectos, cada uno con su captura en funcionamiento y sus tres
   numeros. El de 2026 se describe por lo que hace, sin nombrar a la empresa,
   por decision del expositor. La captura es la tabla de alumnos con datos de
   demostracion, recortada sin la marca ni el correo.

   Abajo, el archivo digital de la Facultad, que cierra el arco con la lamina
   del incidente: gasto limitado, credenciales encerradas y aprobacion
   humana antes de cambiar un registro. */
{
  section: 'Lo construido',
  title: 'Seis meses contra cinco semanas',
  min: '7:45 a 8:25',
  html: `
  <div class="pad">
    <h1 class="title">Seis meses contra cinco semanas</h1>
    <div class="rule"></div>

    <div class="body-area compara">
      <div class="cm-grid">
        <article class="cm antes">
          <div class="cm-img"><img src="assets/img/sis-dreamjob.jpg" alt="Plataforma de empleo en funcionamiento"></div>
          <h3>Plataforma de empleo, 2022</h3>
          <div class="cm-num"><span><b>6</b> personas</span><span><b>6</b> meses</span><span><b>779</b> commits</span></div>
        </article>

        <article class="cm ahora">
          <div class="cm-img"><img src="assets/img/sis-gestion.jpg" alt="Sistema de gestión en funcionamiento, con datos de demostración"></div>
          <h3>Gestión de escuelas de natación, 2026</h3>
          <div class="cm-num"><span><b>1</b> persona</span><span><b>5</b> semanas</span><span><b>1.148</b> commits</span></div>
        </article>
      </div>

      <div class="cm-archivo">
        <img src="assets/img/sis-archivo-ucv.png" alt="Archivo digital de la Facultad de Ciencias">
        <b>Archivo digital de la Facultad</b>
        <span>Gasto limitado</span><span>Credenciales encerradas</span><span>Aprobación humana</span>
      </div>
    </div>
  </div>`
}

);
