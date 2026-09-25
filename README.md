# Ponencia de Dev Days 2026, Luisdavid Colina

Dev Days 2026, **viernes 2 de octubre de 2026, 11:00 AM**, Auditorio Manuel Bemporad, Escuela de
Computacion, Facultad de Ciencias, UCV. Entrada libre con registro previo y cupos limitados, solo
para estudiantes de la UCV.

Organiza David Jaimes (`djhenrz`), GitHub Campus Expert. Aliados: 4Geeks Academy Latam, Escuela
de Computacion UCV (`escompucv`) y Cluster (`ucvcluster`).

El publico son estudiantes, entusiastas del codigo y desarrolladores en formacion, asi que el
nivel de entrada es bajo y la sala es del propio salon de clases.

Base de la presentacion, montada sobre el mismo motor de la expo de Home Assistant del
Laboratorio General de IoT 6565. Falta el contenido: el titulo de la ponencia y la duracion del
turno entran cuando lleguen las indicaciones.

Todo lo que dice **PENDIENTE** es un hueco a llenar, y esta puesto a proposito para que se vea
en pantalla lo que falta.

---

## Abrir la presentacion

Doble clic en `index.html`. No necesita servidor ni conexion a internet. No usa modulos de
JavaScript ni carga librerias de terceros, para que funcione en cualquier equipo.

| Tecla | Que hace |
|---|---|
| `→` o espacio | Avanzar |
| `←` | Retroceder |
| `0` `4` y esperar | Saltar a esa lamina |
| `R` | Cronometro |
| `B` | Pantalla en negro |
| `I` | Volver al indice |
| `T` | Tema claro u oscuro |
| `F` | Pantalla completa |
| `H` | Ver los atajos |

El tema tambien se fuerza por URL, con `index.html?tema=oscuro`.

---

## Estructura de la carpeta

```
index.html              la presentacion
assets/css/             base, components, motion y fuentes
assets/js/deck.js       navegacion, cronometro y exportacion a PDF
assets/js/slides/       el contenido, un archivo por bloque
assets/img/             capturas oficiales
assets/video/           los clips de las laminas de corte, si se usan
assets/logos/           GitHub, UCV, Ciencias y Computacion
assets/fonts/           Source Sans 3, para no pedirle nada a internet
guion/GUION.md          la teoria de cada lamina
guion/CHECKLIST.md      que falta y como llevarlo
informe/                plantilla LaTeX, por si el evento pide informe
```

Cuando el contenido crezca, `02-cuerpo.js` se parte en un archivo por seccion y se agregan las
lineas `<script>` en `index.html`. El orden de esas lineas es el orden de las laminas.

---

## Las laminas

Seis por ahora, cuatro de ellas plantillas.

| # | Lamina | Estado |
|---|---|---|
| 01 | Portada | evento, lugar, fecha y enlaces definitivos. Falta el titulo |
| 02 | Objetivo de la ponencia | plantilla |
| 03 | Lamina de corte | plantilla |
| 04 | Lamina de contenido | plantilla |
| 05 | Conclusiones | plantilla |
| 06 | Contacto | GitHub y LinkedIn, referencias PENDIENTE |

Los tres enlaces, `luisdavidcolina.com`, `github.com/luisdavidcolina` y
`linkedin.com/in/luisdavidcolina`, van en la portada y en la ultima lamina, que es la que queda
proyectada durante las preguntas.

---

## Paleta

La del propio GitHub, para que el deck y cualquier captura del sitio se lean como una sola cosa.
Azul `#0969DA` en claro y `#4493F8` en oscuro, con los grises de Primer. El coloreado de codigo
usa los tonos del tema oscuro de GitHub, incluidas las lineas de un diff.

El tema claro es el predeterminado porque el videobeam de salon lava los negros y un deck oscuro
se vuelve ilegible desde la tercera fila. Las laminas de corte si van oscuras, a proposito.

---

## El guion

Esta en `guion/GUION.md`: la teoria de cada lamina, con los datos verificados y sus fuentes. No es
un libreto para leer, es lo que hay que saber para hablar de cada lamina. Las reglas de redaccion y
el plan de trabajo viven aparte.

## Antes de dar una lamina por buena

Una sola idea por lamina, cincuenta palabras como tope, el titular dice algo en lugar de nombrar un
tema, y ninguna animacion que no aclare nada.
