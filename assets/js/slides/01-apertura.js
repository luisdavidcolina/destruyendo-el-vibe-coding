/* 01 - Apertura: portada y quien expone
   La portada es una linea borrada de un diff. En un evento de GitHub, una
   linea roja con un menos delante la lee al instante toda la sala, asi que no
   hay metafora que descifrar. Y deja abierta la linea verde, que llega en la
   lamina 06 y cierra el argumento. */
window.DECK.push(

/* ─────────────────────────────── 01 Portada ─────────────────────────────── */
{
  section: 'Portada',
  title: 'Destruyendo el vibe coding',
  min: '0:00 a 0:20',
  bare: true,
  cinema: true,
  html: `
  <div class="pad">
    <div class="cover-diff">

      <div class="cd-evento anim sr" data-d="1">
        <span class="cd-ev">Dev Days 2026</span>
        <span class="cd-sep"></span>
        <span class="cd-lugar">Auditorio Manuel Bemporad &nbsp;&middot;&nbsp; 2 de octubre</span>
      </div>

      <div class="cd-diff">
        <div class="cd-linea">
          <span class="cd-signo">-</span>
          <span class="cd-txt">vibe coding</span>
        </div>
        <div class="cd-verde anim" data-d="9">
          <span class="cd-signo mas">+</span>
          <span class="cd-txt-v">&nbsp;</span>
        </div>
      </div>

      <p class="cd-bajada anim" data-d="6">
        Destruyendo el vibe coding
      </p>

      <div class="cd-pie anim" data-d="7">
        <div class="cd-quien">
          <b>Luisdavid Colina</b>
          <span>Escuela de Computacion, Facultad de Ciencias, UCV</span>
        </div>
        <div class="cd-logos">
          <img src="assets/logos/logo_ucv.png" alt="Universidad Central de Venezuela">
          <img src="assets/logos/logo_ciencias.png" alt="Facultad de Ciencias">
          <img src="assets/logos/logo_computacion.png" alt="Escuela de Computacion">
        </div>
      </div>

    </div>
  </div>`
},

/* ────────────────────────────── 02 Quien expone ─────────────────────────── */
{
  section: 'Quien expone',
  title: 'Quien expone',
  min: '0:20 a 0:40',
  html: `
  <div class="pad">
    <div class="perfil">

      <div class="pf-foto">
        <img src="assets/img/foto.png" alt="Luisdavid Colina">
      </div>

      <div class="pf-datos">
        <h2 class="pf-nombre anim" data-d="2">Luisdavid Colina</h2>
        <p class="pf-titular anim" data-d="3">Desarrollador full stack con inteligencia artificial</p>

        <div class="pf-lineas">
          <div class="pf-l anim" data-d="4">
            <span class="pf-ico">${'' /* anos de oficio */}<svg viewBox="0 0 24 24"><path d="M3 7h18v13H3zM8 7V4h8v3"/></svg></span>
            <span>Siete anos integrando sistemas de empresa</span>
          </div>
          <div class="pf-l anim" data-d="5">
            <span class="pf-ico"><svg viewBox="0 0 24 24"><path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11.5V17c0 1.5 2.4 3 5 3s5-1.5 5-3v-5.5"/></svg></span>
            <span>Auxiliar docente y preparador de Matematica Discreta I</span>
          </div>
          <div class="pf-l anim" data-d="6">
            <span class="pf-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/></svg></span>
            <span>Claude Certified Architect</span>
          </div>
        </div>
      </div>

    </div>
  </div>`
}

);
