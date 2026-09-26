# Destruyendo el vibe coding · Guion

Dev Days 2026. Viernes 2 de octubre de 2026, 11:00 AM. Auditorio Manuel Bemporad, Escuela de
Computación, Facultad de Ciencias, UCV. **Tope de diez minutos.**

Esto no es un libreto para leer. Es lo que hay que decir en cada lámina, en el orden en que la
lámina lo muestra, para organizarse. Las palabras exactas las pone quien expone.

## Cómo leerlo

| Parte | Qué es |
|---|---|
| **En pantalla** | Lo que la sala está viendo. No se lee en voz alta |
| **Qué decir** | Lo que se dice. Es lo que cuenta para el tiempo |
| **OPCIONAL** | Se dice solo si se va a tiempo. El nivel dice en qué orden se suelta: primero el 1 |
| **[silencio]** | Una pausa, con su duración |
| **Datos exactos** | Cifras y fuentes, por si alguien pregunta. No se dicen todos |

Cada lámina abre con su número, el título tal como se proyecta y el tramo de tiempo en que se
debería estar. Los tiempos se calculan a 145 palabras por minuto, un poco por debajo del ritmo real
de 148, para tener margen. La tabla completa está al final.

## La tesis

La inteligencia artificial no sirve para hacer lo mismo más rápido. Sirve para construir muchísimo
más, y eso solo pasa si se sabe usar. Mal usada vuelve más lento, deja código inseguro y cuesta
dinero.

## El hilo

El título hace creer que la ponencia está en contra de la inteligencia artificial. Las láminas 3, 4
y 5 empujan hacia ahí con datos ciertos. La 6 da la vuelta: el problema no es la herramienta, es
cómo se le pide el trabajo. De la 7 a la 11 se demuestra en primera persona. La 12 y la 13 dicen
por qué hay que seguir estudiando. La 14 y la 15 cierran.

El círculo lo cierran dos citas: Karpathy en la 3 dice que hay que olvidar que el código existe, y
Thompson en la 14 cuenta que su mejor día fue borrar mil líneas.

La ponencia tiene un consejo, un chiste y una reflexión. El chiste está en la 8, el consejo en la
15 y la reflexión en la 14.

Las marcas se nombran poco. Los ejemplos se muestran en GitHub Copilot, y los otros proveedores
se mencionan de pasada, hablando, solo cuando un ejemplo propio lo pide.

---

## 01 | Destruyendo el vibe coding | 0:00 a 0:04

**En pantalla.** La portada es un diff de GitHub. "vibe coding" se escribe en verde, cambia a rojo,
se tacha, y debajo se escribe en verde "Destruyendo el vibe coding". Arriba el evento, abajo el
nombre con GitHub y LinkedIn y los logos de la UCV.

**Qué decir.**

[silencio 2 s] *Se deja terminar la animación antes de hablar.*

Buenos días. Gracias por venir.

---

## 02 | Luisdavid Colina | 0:04 a 0:23

**En pantalla.** Foto, nombre, AI Solutions Architect y tres líneas, cada una con el logo de su
casa: Integration Administrator en Workforce.com, Auxiliar docente UCV y preparador de Matemática
Discreta I, y nueve años profesionales en tecnología, seis construyendo sistemas. Abajo la
trayectoria de 2017 a hoy.

**Qué decir.**

Soy Luisdavid Colina. Trabajo en integraciones en Workforce.com, una plataforma de gestión de
personal con más de diez mil clientes. Desde 2019 trabajo en sistemas para restaurantes y hoteles.
Y muchos aquí me conocen por otra cosa: soy preparador de Discreta en esta escuela.

**Datos exactos.** Integration Administrator en Workforce.com desde abril de 2023. Socio técnico en
Diamond, un sistema de gestión hotelera que opera en cinco países. Sistemas para hospitalidad
desde 2019, con IntelliPOS en Perú.

---

## 03 | Lo que decide está debajo | 0:23 a 1:13

**En pantalla.** Un iceberg. En la punta, sobre el agua, una sola caja: escribir la petición. En la
masa sumergida, ocho cajas que aparecen una por una. Arriba a la derecha, la cita de Karpathy.

**Qué decir.**

Todos conocemos el vibe coding. Es programar con inteligencia artificial y dejar que ella se
encargue de todo. Vibe viene de vibra. Suena un poco hippie, y va justo por ahí: estar relajado,
dejar que las cosas fluyan y que la máquina haga el trabajo.

El término lo puso Andrej Karpathy, cofundador de OpenAI, a principios de 2025. Y lo definió así:
entregarse a las vibras y olvidar que el código existe.

Todos tenemos metido que así se programa mejor, y sobre todo más rápido. [silencio 1 s] ¿Y si les
digo que puede hacerlos trabajar más, y ni siquiera se nota?

**OPCIONAL, nivel 2.** Lo que se ve es la punta: escribir la petición. Lo que decide si el resultado
sirve está debajo.

**Datos exactos.** Karpathy, publicación en X del 2 de febrero de 2025. Palabra del año 2025 del
diccionario Collins.

---

## 04 | La sensación no sirve para medir | 1:13 a 2:05

**En pantalla.** La página real del estudio de METR, en inglés. Dos barras sobre un mismo eje: más
20 por ciento lo que sintieron, menos 19 por ciento lo que se midió.

**Qué decir.**

Esto no es una opinión. METR hizo un experimento controlado con programadores experimentados,
trabajando en sus propios proyectos, con y sin inteligencia artificial. Sintieron que iban un 20
por ciento más rápido. Se midió, y fueron un 19 por ciento más lentos.

¿Por qué? Porque la herramienta acelera lo fácil, y lo difícil no. McKinsey lo encontró igual: casi
la mitad de ahorro en tareas rutinarias, y menos del diez por ciento en las complejas.

Y a todos nos ha pasado. ¿Cuánto tiempo hemos perdido peleando con la inteligencia artificial por
un cambio que habríamos hecho más rápido nosotros mismos?

**OPCIONAL, nivel 1.** En febrero de 2026 METR volvió a medir con modelos más nuevos y la
estimación cambió. Pero la lección queda: la sensación de velocidad no sirve para medir.

**Datos exactos.** METR, julio de 2025, ensayo controlado aleatorizado: 19 por ciento más lentos,
estimaban 20 por ciento más rápidos. METR, 24 de febrero de 2026, datos nuevos con herramientas de
finales de 2025. McKinsey, 4.500 desarrolladores en 150 empresas: 46 por ciento menos de tiempo en
tareas rutinarias, menos de 10 en las de alta complejidad.

---

## 05 | El agente tenía permiso | 2:05 a 2:47

**En pantalla.** PocketOS, alquiler de vehículos. Un reloj que corre de verdad hasta nueve. Al lado,
el titular de Hackread y la cadena de cuatro pasos. Al parar el reloj entran lo que costó y la
frase.

**Qué decir.**

[silencio 3 s] *Se deja correr el reloj antes de hablar.*

PocketOS hace el sistema con que trabajan empresas de alquiler de carros. Un agente de programación
estaba en un entorno de pruebas. Se topó con un problema de credenciales, y en lugar de detenerse,
buscó una solución por su cuenta. Encontró una llave que tenía permiso sobre todo. Ejecutó una sola
instrucción y borró la base de datos de producción con todos sus respaldos.

Nueve segundos para destruir lo que tomó años construir.

**OPCIONAL, nivel 1.** Lo que iba a ser un ahorro de tiempo terminó costando mucho más que hacerlo
bien desde el principio.

**Frase proyectada.** La IA hace en segundos lo que no deberías haberle pedido.

**Datos exactos.** 24 de abril de 2026. Un agente de Cursor con Claude Opus 4.6, una llave de
Railway sin alcance limitado y una mutación, `volumeDelete`. 30 horas fuera de servicio y tres
meses de reservas perdidas. Registrado en la base de incidentes de IA de la OCDE el 27 de abril.
IBM, Cost of a Data Breach Report 2026: una filtración cuesta en promedio 4,99 millones de dólares.

---

## 06 | ¿Entonces la IA es el problema? | 2:47 a 3:20

**En pantalla.** Solo la pregunta, sobre fondo oscuro.

**Qué decir.**

[silencio 2 s] *Que la sala lea la pregunta.*

No. El problema es cómo se le pide el trabajo.

Y por eso la ponencia se llama así. Nadie que trabaje en serio con estas herramientas está haciendo
vibe coding. Lo que se hace es programar con muchos agentes a la vez, siendo el jefe de proyecto,
el orquestador y el ingeniero. El vibe coder construye un cohete precioso por fuera. Despega, y
revienta.

Todo lo que viene sirve para cualquier modelo y cualquier lenguaje.

---

## 07 | El encargo es el trabajo | 3:20 a 3:44

**En pantalla.** A la izquierda un chat que dice "arregla el login" y su resultado: doce archivos
sin probar. A la derecha el archivo de instrucciones de Copilot con contexto, objetivo, límites y
verificación, y su resultado: un archivo, sesión corregida, esquema intacto, pruebas en verde.

**Qué decir.**

La primera corrección es la que más rinde. Un modelo no falla por falta de capacidad. Falla por
falta de encargo. Un buen encargo tiene cuatro cosas: contexto, objetivo, límites y cómo se
verifica.

Y se escribe una sola vez, en el repositorio. En GitHub es un archivo de instrucciones que aplica
a todos los que trabajen ahí.

**Datos exactos.** `.github/copilot-instructions.md`, el archivo de instrucciones del repositorio.

---

## 08 | Cómo se trabaja con agentes | 3:44 a 4:49

**En pantalla.** La foto de un micrófono con el botón de grabar encendido: dictar el encargo. El
flujo: del issue al pull request, aprobar desde el teléfono, modelo pequeño para lo rutinario. Las
reglas del repositorio como interruptores que se encienden. Y el temario del examen de GitHub
Copilot.

**Qué decir.**

Cuando me preguntan en qué lenguaje programo, digo que en vibe code. [silencio 1 s] En serio, mi
favorito es JavaScript, también PHP y Python. Pero el lenguaje que más uso hoy es escribirle a un
agente.

Y el lenguaje sigue importando: se escoge el que mejor se adapta al proyecto y el que mejor maneja
el modelo.

Primer consejo: los encargos no se escriben, se dictan. Hablando salen más largos y con más
contexto. Esta ponencia se dirigió así.

El flujo es este: se asigna una tarea, el agente la trabaja y devuelve un pull request, y se revisa
incluso desde el teléfono. Tres reglas no se negocian: permisos mínimos, revisión humana y piezas
pequeñas.

**OPCIONAL, nivel 2.** Las tareas que se repiten se guardan como skills, instrucciones que se
escriben una vez. Y todo queda registrado en un servidor propio.

**OPCIONAL, nivel 1.** Lo de la derecha es lo que evalúa hoy el examen de Copilot: modo agente,
subagentes, MCP y la terminal.

**Datos exactos.** Guía oficial del examen GH-300, versión del 7 de agosto de 2026: modo agente,
sesiones de agentes y subagentes, MCP, Copilot CLI, revisión de código y archivos de
instrucciones. Foto del micrófono: Panos Sakalakis, CC BY 2.0.

---

## 09 | No más vibe coding ni pérdida de tiempo | 4:49 a 5:45

**En pantalla.** Un tablero Kanban con la cara de GitHub Projects. Disponibles, en curso y hechas.
Tres agentes de Copilot con identificador toman historias a la vez. Llega una cuarta con un
identificador repetido y el tablero la rechaza. Abajo, la frase.

**Qué decir.**

Lo común es lanzar una petición y quedarse mirando mientras responde. Eso todavía no es trabajar
con agentes. Aquí hay varios avanzando a la vez sobre partes distintas del mismo proyecto, y mi
trabajo es decidir el orden, revisar y aceptar.

Este tablero llegó a 323 historias. Un agente solo ve lo que nadie está tocando. Una vez dos
agentes entraron con el mismo nombre y escribieron el mismo archivo. Desde entonces el tablero
rechaza el nombre repetido. Coordinar agentes se parece mucho a coordinar personas.

**OPCIONAL, nivel 2.** En ese proyecto corrieron agentes de tres proveedores a la vez. Y los agentes
también pueden correr en la nube, conectados al repositorio: se les asigna un issue y devuelven un
pull request.

**OPCIONAL, nivel 3.** Y el tiempo que se gana no se va en esperar. Se va en otras cosas.

**Frase proyectada.** Generar código nunca fue el problema. Saber cuál borrar, sí.

**Datos exactos.** 323 historias en el tablero del proyecto. Databricks, State of AI Agents 2026:
el uso de sistemas multiagente creció 327 por ciento en cuatro meses de 2025.

---

## 10 | Lo que automaticé para estudiar | 5:45 a 6:24

**En pantalla.** Cinco piezas reales que entran una por una: el archivo con 1.936 archivos, el plan
de estudio del día, la clase interactiva de Discreta en video y una guía propia en LaTeX. A la
derecha, en toda la columna, el bot respondiendo en vivo: se le pide la nota informativa de
Seguridad en Redes y lo que queda pendiente hasta el 21 de octubre.

**Qué decir.**

Esto es lo que hago para estudiar, rapidísimo. La misma herramienta lee los archivos de la
computadora y los ordena: casi dos mil archivos de la carrera, buscables. De ahí sale el plan de
estudio del día, las clases interactivas de la preparaduría y las guías en LaTeX. Y a la derecha,
mi bot, el mismo que me responde por WhatsApp: le pido la nota de una materia y me la busca, le
pregunto qué tengo pendiente y lo saca de mi calendario.

[silencio 1 s] Y esta ponencia es un archivo HTML. No hay PowerPoint.

**Datos exactos.** 1.936 archivos indexados en el archivo del diario. El bot, grabado el 25 de
septiembre de 2026, respondió con un enlace temporal a la nota y con el Parcial 4 de Discretas y
esta ponencia como pendientes. Clase de Lógica de
Predicados, 77 láminas, con simulador de valores de verdad. Guía "Introducción a la ciencia", 63
páginas.

---

## 11 | Seis meses contra cinco semanas | 6:24 a 6:58

**En pantalla.** Dos proyectos con su captura: la portada original de la plataforma de empleo, con
su buscador, y el escritorio del administrador del sistema de natación. Una plataforma de 2022:
seis personas, seis meses, 779 commits. Un sistema de gestión de escuelas de natación de 2026: una
persona, cinco semanas, 1.148 commits. Abajo, el archivo digital de la Facultad.

**Qué decir.**

En 2022 dirigí una plataforma de empleo: seis desarrolladores, seis meses hasta tenerla
funcionando. Este año construí un sistema de gestión yo solo, coordinando agentes, en cinco
semanas.

La cantidad de commits no dice que un proyecto esté completo. Lo que sí lo dice: quedó en línea,
con seis roles distintos y sus pruebas.

Y el archivo digital de esta Facultad está hecho al revés de PocketOS: gasto limitado,
credenciales que no salen del servidor, y ningún cambio sin aprobación humana.

**Datos exactos.** Plataforma de empleo: 779 commits y 124 pull requests revisados por el
expositor. Sistema de 2026: del 19 de agosto al 24 de septiembre, 1.148 commits, 22 migraciones y
92 comprobaciones de aislamiento de datos.

---

## 12 | Ninguna capa borró la de abajo | 6:58 a 7:37

**En pantalla.** Una pila de capas que se construye de abajo hacia arriba, con los logos de cada
época: tarjetas, ensamblador, alto nivel, bibliotecas, nube y agentes. Al lado, el titular de
BairesDev: 85 por ciento de los junior dice entender mejor, 16 por ciento de los senior lo
confirma. Abajo, la frase.

**Qué decir.**

Entonces, ¿vale la pena seguir estudiando? Cada capa subió el nivel de abstracción, y ninguna quitó
la necesidad de entender la de abajo.

¿Por qué en Organización y Estructura del Computador nos hacen ver ensamblador? Porque la capa de
abajo es la forma real de encontrar los errores y los límites de la de arriba. Sin ella no se
pueden ver del todo los errores de un agente, ni optimizar lo que hace.

Y los datos lo confirman: los junior creen que entienden, y solo el 16 por ciento de los senior
está de acuerdo.

**Frase proyectada.** La IA no reemplaza al que estudia. Reemplaza al que dejó de hacerlo.

**Datos exactos.** BairesDev, Dev Barometer, 11 de junio de 2026, 1.569 desarrolladores en 77
países: 16 por ciento de los senior dice que los junior entienden del todo el código que genera la
IA. 85 por ciento de los junior dice que la herramienta mejoró su comprensión.

---

## 13 | Lo que hoy se certifica | 7:37 a 8:05

**En pantalla.** Seis tarjetas con logo: GH-300 de GitHub Copilot, AI-103 de Microsoft, Claude
Certified de Anthropic, AI Practitioner de Amazon, ML Engineer de Google Cloud y RAG y agentes de
IBM.

**Qué decir.**

Antes la gente se mataba por un curso de React o de pila completa. Hoy se mata por estas. Y el
examen de Copilot cambió el temario este año para incluir agentes y subagentes. El examen de la
capa nueva se reescribe mientras la capa se forma.

**OPCIONAL, nivel 1.** Según el Foro Económico Mundial, el 39 por ciento de las habilidades de un
trabajador va a cambiar antes de 2030.

**Datos exactos.** GH-300, nivel intermedio, precio según el país. AI-103, Azure AI Apps and Agents
Developer Associate, reemplazó al AI-102. Anthropic, cuatro exámenes en Pearson VUE para
organizaciones de su red de socios. AWS Certified AI Practitioner, 100 dólares. Google Cloud
Professional Machine Learning Engineer, 200 dólares. IBM RAG and Agentic AI, certificado
profesional en Coursera. Foro Económico Mundial, Future of Jobs Report 2025, página 6.

---

## 14 | Reflexión final | 8:05 a 8:23

**En pantalla.** Sobre fondo oscuro: "El que cree que ya sabe usar la IA es el que peor la está
usando". Debajo, la cita de Ken Thompson con quién fue.

**Qué decir.**

Casi todo lo que les mostré hoy puede quedar obsoleto en unos meses. Esta es la forma de trabajar
por ahora. Al mismo tiempo están naciendo criterios nuevos, como orquestar agentes, y ustedes
llegan a tiempo para dominarlos.

[silencio 2 s] *Que lean la cita de Thompson.*

**Datos exactos.** Ken Thompson, creador de Unix y del lenguaje B, premio Turing: "Uno de mis días
más productivos fue tirar a la basura mil líneas de código".

---

## 15 | Es hora de que cumplan los suyos | 8:23 a 8:34

**En pantalla.** Las tres líneas, una por una, y el calendario de contribuciones que se enciende en
verde en el último tramo.

**Qué decir.**

Yo tenía objetivos en mente desde hacía muchos años. Este año los terminé todos. [silencio 2 s] Es
hora de que cumplan los suyos.

*El énfasis va en "muchos". La tercera línea se dice una vez, en tono normal, sin levantar la voz.*

---

## 16 | Contacto y referencias | queda proyectada

**En pantalla.** El código QR a `luisdavidcolina.com/enlaces`, GitHub, LinkedIn, Instagram y el
portafolio, y las dieciséis fuentes.

**Qué decir.** Gracias. Y se abre a preguntas.

---

## Tiempos

Calculados a 145 palabras por minuto sobre el texto de "Qué decir", más los silencios. El tope es
de diez minutos.

| # | Lámina | Palabras | Opcionales | Silencio | Dura | Acumulado |
|---|---|---|---|---|---|---|
| 01 | Destruyendo el vibe coding | 5 |  | 0:02 | 0:04 | 0:00 a 0:04 |
| 02 | Luisdavid Colina | 45 |  |  | 0:19 | 0:04 a 0:23 |
| 03 | Lo que decide está debajo | 99 | n2: 19 | 0:01 | 0:50 | 0:23 a 1:13 |
| 04 | La sensación no sirve para medir | 100 | n1: 28 |  | 0:53 | 1:13 a 2:05 |
| 05 | El agente tenía permiso | 73 | n1: 19 | 0:03 | 0:41 | 2:05 a 2:47 |
| 06 | ¿Entonces la IA es el problema? | 75 |  | 0:02 | 0:33 | 2:47 a 3:20 |
| 07 | El encargo es el trabajo | 58 |  |  | 0:24 | 3:20 a 3:44 |
| 08 | Cómo se trabaja con agentes | 113 | n1: 20, n2: 23 | 0:01 | 1:06 | 3:44 a 4:49 |
| 09 | No más vibe coding ni pérdida de tiempo | 86 | n2: 33, n3: 16 |  | 0:56 | 4:49 a 5:45 |
| 10 | Lo que automaticé para estudiar | 93 |  | 0:01 | 0:39 | 5:45 a 6:24 |
| 11 | Seis meses contra cinco semanas | 81 |  |  | 0:34 | 6:24 a 6:58 |
| 12 | Ninguna capa borró la de abajo | 95 |  |  | 0:39 | 6:58 a 7:37 |
| 13 | Lo que hoy se certifica | 47 | n1: 21 |  | 0:28 | 7:37 a 8:05 |
| 14 | Reflexión final | 38 |  | 0:02 | 0:18 | 8:05 a 8:23 |
| 15 | Es hora de que cumplan los suyos | 21 |  | 0:02 | 0:11 | 8:23 a 8:34 |
| 16 | Contacto y referencias | | | | queda proyectada | |

**Todo dicho, con los opcionales: 8:34.**
Soltando hasta el nivel 1: 7:57.
Soltando hasta el nivel 2: 7:26.
Soltando hasta el nivel 3: 7:20.

**Si se va tarde,** se sueltan los OPCIONAL en orden: primero todos los de nivel 1, después los de
nivel 2, después los de nivel 3. El cronómetro de la barra (tecla R) se pone ámbar en el minuto 8
y rojo en el 10.
