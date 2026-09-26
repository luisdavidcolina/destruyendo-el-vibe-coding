/* ==========================================================================
   tablero.js : el tablero Kanban de la lamina 09 funcionando de verdad.

   Pedido el 25 de septiembre por la noche: animaciones realistas, que las
   tarjetas se muevan de columna y que entren historias nuevas. Nada de
   barras ni iconos decorativos. En bucle mientras la lamina esta en
   pantalla.

   El ciclo, un paso cada 1,4 segundos, agente por agente:
     1. el agente termina su historia: la tarjeta viaja de En curso a Hechas
        y se cierra (icono morado). La hecha mas vieja sale por abajo
     2. el mismo agente toma la primera historia de Disponibles: la tarjeta
        viaja a En curso y se le pone su identificador
     3. entra una historia nueva al final de Disponibles
   Despues del tercer agente, una vez por ciclo, llega una tarjeta con un
   identificador que ya esta en uso: el tablero la rechaza, se tacha, avisa
   y la saca. Es la anecdota que se cuenta en el guion.

   El movimiento es FLIP: se mide cada tarjeta antes y despues de moverla en
   el DOM y se anima la diferencia. La lamina esta escalada para caber en la
   pantalla, asi que las distancias se dividen por la escala.

   Al salir de la lamina el motor corta los temporizadores. Al volver, el
   tablero arranca otra vez desde el estado inicial del marcado.
   ========================================================================== */
window.TABLERO = function (tab, programar) {
  var cols = tab.querySelectorAll('.tb-col');
  if (cols.length < 3) return;

  // Estado inicial guardado la primera vez, para volver a el en cada entrada
  if (!tab._inicial) tab._inicial = tab.querySelector('.tb-cols').innerHTML;
  tab.querySelector('.tb-cols').innerHTML = tab._inicial;
  cols = tab.querySelectorAll('.tb-col');
  var disp = cols[0], curso = cols[1], hechas = cols[2];

  // Piezas para clonar, tomadas del propio marcado: asi no se repite ningun
  // icono aqui
  var icoAbierto = disp.querySelector('.tb-iss').cloneNode(true);
  var icoCerrado = hechas.querySelector('.tb-iss').cloneNode(true);
  var icoCop = curso.querySelector('.tb-cop').cloneNode(true);
  var dupModelo = curso.querySelector('.tb-card.dup');
  var icoRechazo = dupModelo ? dupModelo.querySelector('.tb-iss').cloneNode(true) : icoAbierto.cloneNode(true);
  // El choque sale del estado inicial: aparece solo en su paso del ciclo
  var viejos = curso.querySelectorAll('.tb-card.dup, .tb-aviso');
  for (var v = 0; v < viejos.length; v++) viejos[v].parentNode.removeChild(viejos[v]);

  tab.classList.add('vivo');
  var siguiente = 47;   // la proxima historia que entra a Disponibles

  function escala() { return tab.getBoundingClientRect().width / tab.offsetWidth || 1; }
  function tarjetas() { return Array.prototype.slice.call(tab.querySelectorAll('.tb-card')); }

  function flip(mover) {
    var antes = new Map();
    tarjetas().forEach(function (c) { antes.set(c, c.getBoundingClientRect()); });
    mover();
    var k = escala();
    tarjetas().forEach(function (c) {
      var a = antes.get(c), d = c.getBoundingClientRect();
      if (!a) {
        c.animate([{ opacity: 0, transform: 'translate3d(0, 18px, 0)' }, { opacity: 1, transform: 'none' }],
                  { duration: 480, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
        return;
      }
      var dx = (a.left - d.left) / k, dy = (a.top - d.top) / k;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
      c.style.zIndex = 5;
      var an = c.animate([{ transform: 'translate3d(' + dx + 'px,' + dy + 'px,0)' }, { transform: 'none' }],
                         { duration: 720, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
      an.onfinish = function () { c.style.zIndex = ''; };
    });
  }

  function salir(el) {
    var an = el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, easing: 'ease-in', fill: 'forwards' });
    an.onfinish = function () { if (el.parentNode) flip(function () { el.parentNode.removeChild(el); }); };
  }

  function tarjetaDe(agente) {
    return curso.querySelector('.tb-card.ag' + agente + ':not(.dup)');
  }

  function terminar(agente) {
    var c = tarjetaDe(agente);
    if (!c) return;
    flip(function () {
      c.className = 'tb-card ok';
      var i = c.querySelector('i'); if (i) c.removeChild(i);
      c.replaceChild(icoCerrado.cloneNode(true), c.querySelector('.tb-iss'));
      hechas.insertBefore(c, hechas.querySelector('.tb-card'));
    });
    var todas = hechas.querySelectorAll('.tb-card');
    if (todas.length > 3) programar(function () { salir(todas[todas.length - 1]); }, 760);
  }

  function tomar(agente) {
    var c = disp.querySelector('.tb-card');
    if (!c) return;
    flip(function () {
      c.className = 'tb-card ag' + agente;
      var i = document.createElement('i');
      i.appendChild(icoCop.cloneNode(true));
      i.appendChild(document.createTextNode('copilot-' + agente));
      c.appendChild(i);
      curso.appendChild(c);
    });
  }

  function entrar() {
    flip(function () {
      var c = document.createElement('div');
      c.className = 'tb-card';
      c.appendChild(icoAbierto.cloneNode(true));
      var b = document.createElement('b');
      b.textContent = 'T-0' + (siguiente++);
      c.appendChild(b);
      disp.appendChild(c);
    });
  }

  function choque() {
    var de3 = tarjetaDe(3);
    var num = de3 ? de3.querySelector('b').textContent : 'T-043';
    var d = document.createElement('div');
    d.className = 'tb-card dup';
    d.appendChild(icoRechazo.cloneNode(true));
    var b = document.createElement('b'); b.textContent = num; d.appendChild(b);
    var i = document.createElement('i');
    i.appendChild(icoCop.cloneNode(true)); i.appendChild(document.createTextNode('copilot-3'));
    d.appendChild(i);
    var aviso = document.createElement('div');
    aviso.className = 'tb-aviso';
    aviso.textContent = 'identificador repetido';
    flip(function () { curso.appendChild(d); curso.appendChild(aviso); });
    aviso.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 700, fill: 'backwards' });
    try {
      d.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
                { duration: 420, delay: 500, fill: 'backwards', easing: 'ease', pseudoElement: '::after' });
    } catch (e) {}
    programar(function () { salir(aviso); salir(d); }, 2600);
  }

  // El guion del ciclo
  var pasos = [];
  [1, 2, 3].forEach(function (a) {
    pasos.push(function () { terminar(a); });
    pasos.push(function () { tomar(a); });
    pasos.push(entrar);
  });
  pasos.push(choque);
  pasos.push(function () {});   // una pausa para leer el choque
  pasos.push(function () {});

  var n = 0;
  function paso() {
    pasos[n % pasos.length]();
    n++;
    programar(paso, 1400);
  }
  programar(paso, 1600);
};
