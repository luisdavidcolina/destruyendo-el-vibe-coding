/* ==========================================================================
   fondo-codigo.js : la columna de codigo que sube muy despacio a la derecha
   de las laminas oscuras de texto (06 y 14).

   Pedido el 25 de septiembre por la noche: esas laminas eran solo texto
   sobre negro y necesitaban algo que se moviera, muy leve, que no opacara.
   Es codigo de verdad, casi transparente, y dice algo en cada lamina:

   06  lineas que se agregan, en verde, como un agente escribiendo
   14  lineas que se borran, en rojo con su signo menos, por la cita de
       Thompson sobre tirar mil lineas de codigo

   Devuelve el HTML de la columna. Se llama desde el marcado de cada lamina.
   ========================================================================== */
window.FONDO_CODIGO = function (tipo) {
  var lineas = [
    "export async function renovarSesion(req, res) {",
    "  const token = req.cookies.sesion;",
    "  if (!token) return res.status(401).end();",
    "  const datos = await verificar(token);",
    "  if (datos.expira < Date.now()) {",
    "    return res.status(440).json({ error: 'expirada' });",
    "  }",
    "  const nuevo = firmar({ id: datos.id }, '30m');",
    "  res.cookie('sesion', nuevo, { httpOnly: true });",
    "  return res.json({ ok: true });",
    "}",
    "",
    "test('la sesion caduca a los 30 minutos', async () => {",
    "  const r = await pedir('/renovar', { tiempo: 31 });",
    "  expect(r.status).toBe(440);",
    "});",
    "",
    "const agentes = await tablero.disponibles();",
    "for (const historia of agentes.slice(0, 3)) {",
    "  await historia.tomar('copilot-' + historia.turno);",
    "}",
    "",
    "function permisosMinimos(llave) {",
    "  return llave.alcance.filter(p => p !== 'borrar');",
    "}"
  ];
  var signo = tipo === 'borra' ? '-' : '+';
  var html = '';
  for (var vuelta = 0; vuelta < 2; vuelta++) {
    for (var i = 0; i < lineas.length; i++) {
      var t = lineas[i].replace(/&/g, '&amp;').replace(/</g, '&lt;');
      html += '<span class="fc-l">' + (t ? signo + ' ' + t : '&nbsp;') + '</span>';
    }
  }
  return '<div class="fondo-codigo ' + tipo + '" aria-hidden="true"><div class="fc-cinta">' + html + '</div></div>';
};
