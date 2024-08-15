- **Preguntas**:
   1. ¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo [aquí](../first-step-project/src/main.ts) en la sección inferior de
   notas.

        **R//** En `main.ts` es donde se configura y arranca el SERVIDOR de la aplicacion. Es el archivo que conecta todos los componentes antes de que la aplicación comience a procesar solicitudes.


   2. ¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).

        **R//** El controlador recibe las solicitudes, y retorna las respuestas al cliente. Delega la logica a los servicios. El modulo raiz que en este caso es `app.module.ts`. Agrupa los controladores, los servicios,y los otros modulos.

     i. ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?

     **R//** Mejora la organización y la mantenibilidad del código,también apoya la escalabilidad, la prueba y la gestión eficiente de las dependencias. Es una práctica esencial para construir aplicaciones robustas y de alta calidad.

     ii. ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?

     **R//** La modularidad hace que el mantenimiento sea más efectivo porque nos permite identificar los errores más facilmente y posteriormente resolverlos, tener codigo más facil de leer y hacer pruebas más efectivas. Y la escalabilidad porque evita que haya interferencia cuando un equipo trabaje en un modulo y dañe el trabajo de otro y tambien facilita integrar modulos especificos con otros sistemas o APIs sin tener cambiar el resto de la aplicación.

     iii. Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

     `<module-name>.module.ts`

     Descripción: Este archivo es el núcleo del módulo en NestJS. Define el módulo y sus dependencias.

     Contenido Típico: Contiene la clase del módulo decorada con @Module(). Dentro de esta clase, se configuran los providers, controllers, imports, y exports que el módulo necesita. 
     
     Es el punto de entrada del módulo. Declara qué controladores y servicios se usan dentro del módulo y qué otros módulos se importan. También especifica qué servicios o componentes se exportan para que puedan ser utilizados por otros módulos.


     `<module-name>.service.ts`: Proporciona la lógica del negocio y es inyectado en los controladores y otros servicios. Es declarado en el array providers del módulo y, si es necesario, se exporta para su uso en otros módulos.

     `<module-name>.controller.ts`: Define las rutas y cómo manejar las solicitudes HTTP. Utiliza los servicios inyectados para ejecutar la lógica necesaria y responder a las solicitudes. Es declarado en el array controllers del módulo.

     `<module-name>.dto.ts`: (Opcional) Define los objetos de transferencia de datos para validar y tipar los datos que se reciben y envían a través de las rutas del controlador.

     `<module-name>.entity.ts`: (Opcional) Define la estructura de las entidades que interactúan con la base de datos, y se suele usar con herramientas ORM como TypeORM. 


     i. ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

     **R//** Los decoradores en NestJS son esenciales para definir rutas, manejar solicitudes y aplicar validaciones. Los errores en la definición de estos decoradores pueden llevar a problemas como: Endpoints no accesibles o mal dirigidos, métodos HTTP incorrectos, datos no válidos o mal manejados, falta de validación adecuada.

     ii. ¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?

      **R//** Sin rutas dinámicas, necesitariamos endpoints estáticos para cada posible recurso, lo cual no es práctico ni escalable. Las rutas dinámicas permiten manejar solicitudes para cualquier recurso en función de parámetros proporcionados.Las rutas dinámicas facilitan la creación de consultas en la base de datos basadas en parámetros de la URL. Esto nos permite realizar operaciones como buscar, actualizar o eliminar registros específicos de manera eficiente.

     i.¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?

     Manejar la lógica de negocio en servicios en lugar de controladores ofrece varias ventajas. Para mi la primera y más importante es mantener el controlador ocupado de la gestion de las solicitudes y respuestas mientras el servicio se encarga unicamente de la logica y contribuye a un diseño de aplicación más limpio, modular y eficiente, que es más fácil de mantener y escalar a medida que la aplicación crece.

     ii.¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?
     **R//** La aplicación se divide en módulos independientes que pueden ser desarrollados y mantenidos por separado, promoviendo una arquitectura más limpia y organizada. La inyeccion de dependencias me permite esto poder gestionar las dependcias en diferentes partes de la aplicacion y asi tener una estrutura modular.

     La modularidad consiste en que mi aplicacion esta divida en modulos y puedo desarrollar y mantener estos modulos por separado sin inteferir el uno con el otro. Lo cual hace que mi aplicacion sea escalable y eficiente a medida que va creciendo.


     i.¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras? 

     **R//**  Validar los datos de entrada en una aplicación financiera es esencial para mantener la integridad, seguridad, y precisión de las transacciones. Protege contra errores y fraudes, asegura el cumplimiento normativo, mejora la experiencia del usuario, y previene la manipulación de datos.

     ii.¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

     **R//** Si los pipes no se aplican correctamente o no están configurados, las validaciones o transformaciones pueden no ocurrir y nuestra aplicacion seria vulnerable en su seguridad.

     i.¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?

     **R//** Implementar un manejo de excepciones robusto y bien diseñado es esencial para construir aplicaciones confiables y seguras, y para ofrecer una experiencia de usuario positiva y sin fricciones.


     ii.¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

     **R//** Porque asegura que todas las excepciones se gestionen de manera uniforme a través de un solo punto de la aplicación.

Order:
1. Entity
2. app.Module
3. EntityModule DTO
4. Service
5. Controller             