import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
