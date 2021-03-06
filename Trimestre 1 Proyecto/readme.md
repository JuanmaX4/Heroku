# 馃摎 Investigaci贸n y comparativa de REST vs OData vs GraphQL 馃摎


## REST 馃挙

Las `API REST` aprovechan los m茅todos `HTTP`, desde un simple `POST` o `GET` hasta m茅todos personalizados, sin embargo, nosotros veremos 煤nicamente `POST`, `GET`, `PUT` y `DELETE` en su forma m谩s sencilla y las Headers que son para autenticaci贸n, decirle qu茅 tipo de dato va, etc. Pero esto no lo veremos aqu铆.
Asimismo, utilizaremos a Express para ser nuestro servidor `HTTP`, una recomendaci贸n es que, las `API REST` siempre est茅n detr谩s de Nginx ya que en caso de falla, Nginx puede seguir respondiendo, adem谩s que, permite una mejor manipulaci贸n de datos, protecci贸n de enlaces y dem谩s cosas pero tampoco veremos esto en este tutorial, solo quise mencionarlo.
___

## OData 馃摕
El Protocolo de Datos Abierto `OData` o `Open Data Protocoles` un protocolo abierto que permite la creaci贸n y consumo de `APIs RESTful` que pueden ser consultadas e interoperables en una manera simple y estandarizada. `Microsoft` inicio dicho protocolo en el 2007. Las versiones 1.0,2.0 y 3 est谩n lanzadas bajo el `Microsoft Open Specification Promise`. La versi贸n 4.0 fue estandarizada en `OASIS` con un lanzamiento en marzo de 2014. En abril de 2015 `OASIS` envi贸 la versi贸n 4 de `OData` y la versi贸n 4 del formato `OData JSON` a `ISO/IEC JTC 1` para su aprobaci贸n como un est谩ndar internacional.

El protocolo permite la creaci贸n y consumici贸n de `APIs REST` que permiten la creaci贸n de clientes Web para publicar y editar recursos, identificados utilizandos `URLs` y definido en un modelo de datos, usando mensajes `HTTP` simples. `OData` comparte algunas similitudes con `JDBC` y con `ODBC`; como `ODBC`, `OData` no esta limitada a una Base de datos relacional.

___
## GraphQL 馃搳
`GraphQL` es un lenguaje de consulta y un tiempo de ejecuci贸n del servidor para las interfaces de programaci贸n de aplicaciones `API`; su funci贸n es brindar a los clientes exactamente los datos que solicitan y nada m谩s.

Gracias a `GraphQL`, las `API` son r谩pidas, flexibles y sencillas para los desarrolladores. Incluso se puede implementar en un entorno de desarrollo integrado `IDE` conocido como `GraphiQL`. Como alternativa a `REST`, `GraphQL` permite que los desarrolladores creen consultas para extraer datos de varias fuentes en una sola llamada a la `API`.

Adem谩s, `GraphQL` otorga a los encargados del mantenimiento de las `API` la flexibilidad para agregar campos o modificarlos, sin que esto afecte las consultas actuales. Los desarrolladores pueden dise帽ar estas interfaces con los m茅todos que prefieran, y la especificaci贸n de `GraphQL` garantizar谩 que funcionen de forma predecible para los clientes.

### 驴Entonces cual es su diferencia鉂?
___
~~~
La diferencia principal y m谩s importante es que [GraphQL] no est谩 tratando con recursos dedicados. Es m谩s, todos los recursos se consideran m谩s bien en su totalidad un conjunto de grafos conectados entre s铆. Esto da lugar a que puedes adaptar tu consulta a las necesidades del cliente utilizando el lenguaje de consulta de [GraphQL] (basado en Schemas) describiendo lo que le gustar铆a tener como respuesta, as铆 como combinar diferentes entidades (o tipos) en una consulta y qu茅 atributos deben incluirse en la respuesta de cada nivel.
~~~
- Un `API REST` abraza el concepto de tener m煤ltiples endpoints (puntos de entrada), por tanto, se van a exponer m煤ltiples rutas de tu `servicio web`. En cambio un `API GraphQL` s贸lo va a exponer un `煤nico endpoint` o ruta el cual suele recibir el nombre `/graphql`, aunque puedes asignarle el nombre que tu quieras.

- `GraphQL` soluciona el problema que tiene `REST` relacionado con el `Over Fetching` y `Under Fetching`, es decir, puede darse el caso que con un servicio `RESTful` sobren o nos falten datos. Cada `endpoint` tiene una estructura fija de datos que se van a devolver cada vez que se realice una petici贸n. En el caso de `Over Fetching` hay situaciones en las que no necesitamos toda la informaci贸n y acabamos ignorando muchos de los datos, lo cual es indicativo de que realmente no estamos siendo del todo eficientes. Este problema hace que tengamos una carga de datos m谩s lenta y consumamos m谩s ancho de banda, o en el caso de los m贸viles consumamos m谩s datos. El `Under Fetching` se da cuando nos faltan datos y requiere de otra petici贸n adicional que nos devuelva los datos que nos falta.

- Un `API REST` reacciona de diferentes formas dependiendo de los m茅todos `HTTP` existentes `(GET, POST, PUT, DELETE)`. Un `API GraphQL` va a utilizar 煤nicamente el m茅todo `POST`.
~~~
[GraphQL] utiliza resolvers para recopilar los datos que solicita un cliente. Se puede medir el rendimiento para evitar cuellos de botella en el sistema.

[GraphQL] integra la posibilidad de utilizar [WebSockets].
~~~
- Un `API REST` tiene implementado el `almacenamiento en cach茅` para que el cliente evite volver a buscar estos recursos. `GraphQL` deja esa responsabilidad a los clientes o bien integrar manualmente un `sistema de almacenamiento de cach茅`. La 煤nica tecnolog铆a que he visto hasta ahora que brinda cierta compatibilidad es `Relay`
~~~
Para el manejo de errores de un [API REST] nos basta con conocer el estado de la respuesta a trav茅s de los c贸digos de estado [HTTP] (HTTP status codes). En [GraphQL] obtendremos siempre una respuesta de c贸digo 200 (si el servidor responde correctamente), es decir, es una petici贸n exitosa. El error lo obtendremos en la respuesta de la petici贸n como un fallo en el procesado de la consulta. [GraphQL] recurre a esto ya que podemos lanzar m谩s de una consulta a la vez, por tanto, algunas se resolver谩n correctamente y otras pueden fallar, pero no es motivo para cambiar el estado de la petici贸n.
~~~
 - `GraphQL` nos permite obtener informaci贸n exacta de los datos que com煤nmente se solicitan en el `backend`. A medida que el cliente especifica esta informaci贸n, resulta m谩s f谩cil entender el uso de los datos y su disponibilidad.

El versionado de un `API REST` no es `trivial`, es decir, si necesitamos dar soporte a `m煤ltiples versiones` normalmente significa crear nuevos `endpoints`. Esto causar谩 m谩s problemas y dolores de cabeza cuando es usado y adem谩s su mantenimiento ser谩 m谩s costoso y puede dar lugar al llamado `c贸digo spaghetti`. Con `GraphQL` nos podemos ir olvidando, ya que se pueden a帽adir o eliminar campos sin romper la `consulta`. Tambi茅n existe la forma de excluirlos de la respuesta.