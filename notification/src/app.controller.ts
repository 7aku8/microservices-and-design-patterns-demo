import { Controller, Get } from '@nestjs/common';
import {Ctx, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import {UserCreatedEvent} from "@events";

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern([UserCreatedEvent.eventName])
  getHello(@Payload() data: UserCreatedEvent, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log(`User with id ${data.data.id} created`);
    console.log(`Received message: ${JSON.stringify(data.data)}`);

    channel.ack(originalMsg);
  }
}
