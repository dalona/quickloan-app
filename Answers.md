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


Order:

Option A) app.Module-Sevice-Controller-DTO-Entity -ai
Option B) Entity-app.Module-EntityModule-DTO-Service-Controller-doris             