import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());//Se utiliza para configurar un pipe global que aplica validaciones a nivel de toda la aplicación. Cuando un DTO es recibido en una solicitud, ValidationPipe valida que los datos cumplan con estas reglas. En conclusion, Valida automáticamente los datos de entrada en las solicitudes HTTP para asegurarse de que cumplan con las reglas definidas antes de que lleguen a la lógica de negocio.
  await app.listen(3000);
}
bootstrap();
