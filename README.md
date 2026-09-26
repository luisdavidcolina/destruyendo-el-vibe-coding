# Destruyendo el vibe coding

Ponencia de Luisdavid Colina en Dev Days 2026. **Viernes 2 de octubre de 2026, 11:00 AM**,
Auditorio Manuel Bemporad, Escuela de Computación, Facultad de Ciencias, UCV. Entrada libre con
registro previo y cupos limitados, solo para estudiantes de la UCV.

Organiza David Jaimes (`djhenrz`), GitHub Campus Expert. Aliados: 4Geeks Academy Latam, Escuela
de Computación UCV (`escompucv`) y Cluster (`ucvcluster`).

Dura diez minutos como tope. El público son estudiantes, entusiastas del código y desarrolladores
en formación, así que el nivel de entrada es bajo.

En línea: https://destruyendo-el-vibe-coding.luisdavidcolina.com

La presentación está montada sobre el mismo motor de la exposición de Home Assistant del
Laboratorio General de IoT 6565, con la paleta y la tipografía de GitHub.

---

## Abrir la presentación

Doble clic en `index.html`. No necesita servidor ni conexión a internet. No usa módulos de
JavaScript ni carga librerías de terceros, para que funcione en cualquier equipo.

| Tecla | Qué hace |
|---|---|
| `→` o espacio | Avanzar |
| `←` | Retroceder |
| `1` `2` y esperar | Saltar a esa lámina |
| `R` | Cronómetro |
| `B` | Pantalla en negro |
| `I` | Volver a la portada |
| `T` | Tema claro u oscuro |
| `F` | Pantalla completa |
| `H` | Ver los atajos |

El tema también se fuerza por URL, con `index.html?tema=oscuro`.

---

## Estructura de la carpeta

```
index.html                la presentación
assets/css/               base, components, motion y fuentes
assets/css/laminas/       una hoja por bloque de láminas
assets/js/deck.js         navegación, cronómetro, índice y exportación a PDF
assets/js/slides/         el contenido, un archivo por bloque (cinco en total)
assets/img/               capturas de fuentes y sistemas, la foto y el código QR
assets/video/             el video corto de la lámina 10
assets/logos/             GitHub, UCV, Ciencias, Computación y las marcas de las certificaciones
assets/fonts/             Mona Sans, y Source Sans 3 como respaldo
guion/GUION.md            la teoría de cada lámina, con datos y fuentes
informe/                  plantilla LaTeX, por si el evento pide informe
vercel.json               cabeceras de caché y URL limpias
```

El orden de las líneas `<script>` de `index.html` es el orden de las láminas. Cada hoja de
`assets/css/laminas/` tiene que estar enlazada en `index.html`, porque si no, no se aplica.

Los estilos, los scripts y las imágenes se revalidan en cada carga, así que no hace falta borrar
la caché para ver un cambio. `guion/` e `informe/` no se publican en el sitio, se leen aquí.

---

## Las láminas

Dieciséis. Las quince primeras son de contenido y la 16 es de contacto, la que queda proyectada
durante las preguntas. Las de corte van en fondo oscuro a propósito: la 01, la 06, la 14 y la 15.

| # | Bloque | Lámina |
|---|---|---|
| 01 | Apertura | Destruyendo el vibe coding |
| 02 | Apertura | Luisdavid Colina |
| 03 | El golpe | Lo que decide está debajo |
| 04 | El golpe | La sensación no sirve para medir |
| 05 | El golpe | El agente tenía permiso |
| 06 | La resolución | ¿Entonces la IA es el problema? |
| 07 | La resolución | El encargo es el trabajo |
| 08 | La resolución | Así trabajo con agentes |
| 09 | Orquestación | Aquí no hay espera muerta |
| 10 | Lo construido | Lo que automaticé para estudiar |
| 11 | Lo construido | Seis meses contra cinco semanas |
| 12 | Las bases | Ninguna capa borró la de abajo |
| 13 | Las bases | Lo que hoy se certifica |
| 14 | Cierre | Reflexión final |
| 15 | Cierre | Es hora de que cumplan los suyos |
| 16 | Contacto | Contacto y referencias |

GitHub y LinkedIn van en la portada y en la última lámina. La última lleva además Instagram, el
portafolio y un código QR, generado dentro de la carpeta, que abre `luisdavidcolina.com/enlaces`.

El cronómetro de la barra (tecla `R`) va verde hasta el minuto 8, ámbar hasta el 10 y rojo desde
el 10, que es el tope del evento.

La lámina 10 lleva un video corto, `assets/video/prepa-calculadora.webm`, que se reproduce mudo y
en bucle al llegar a la lámina y vuelve a empezar cada vez que se entra.

Créditos de terceros: la foto del micrófono es de Panos Sakalakis, CC BY 2.0. Los íconos de
lenguajes vienen de Simple Icons, CC0, y los de GitHub de Primer Octicons, MIT.

---|---|---|
| 01 | Apertura | Destruyendo el vibe coding |
| 02 | Apertura | Luisdavid Colina |
| 03 | El golpe | Lo que decide está debajo |
| 04 | El golpe | La sensación no sirve para medir |
| 05 | El golpe | El agente tenía permiso |
| 06 | La resolución | ¿Entonces la IA es el problema? |
| 07 | La resolución | El encargo es el trabajo |
| 08 | La resolución | Cuatro reglas, y la primera manda |
| 09 | Orquestación | Aquí no hay espera muerta |
| 10 | Lo construido | Seis meses contra cinco semanas |
| 11 | Las capas y sus modas | Ninguna capa borró la de abajo |
| 12 | Las bases | Creen que entienden, y no |
| 13 | Cierre | Reflexión final |
| 14 | Contacto | Contacto y referencias |

Los tres enlaces, `luisdavidcolina.com`, `github.com/luisdavidcolina` y
`linkedin.com/in/luisdavidcolina`, van en la portada y en la última lámina, que es la que queda
proyectada durante las preguntas. Esa lámina lleva además un código QR generado dentro de la
carpeta, sin pedirle nada a ningún servicio.

---

## Paleta

La del propio GitHub, para que el deck y cualquier captura del sitio se lean como una sola cosa.
Azul `#0969DA` en claro y `#4493F8` en oscuro, con los grises de Primer. El coloreado de código
usa los tonos del tema oscuro de GitHub, incluidas las líneas de un diff.

El tema claro es el predeterminado porque el videobeam de salón lava los negros y un deck oscuro
se vuelve ilegible desde la tercera fila. Las láminas de corte sí van oscuras, a propósito.

---

## El guion

Está en `guion/GUION.md`: la teoría de cada lámina, con los datos verificados y sus fuentes. No es
un libreto para leer, es lo que hay que saber para hablar de cada lámina. Las reglas de redacción
y el plan de trabajo viven aparte.

## Antes de dar una lámina por buena

Una sola idea por lámina, cincuenta palabras como tope, el titular dice algo en lugar de nombrar un
tema, y ninguna animación que no aclare nada.
