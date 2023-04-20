import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {UserCreatedEvent} from "@events";

@Injectable()
export class AppService {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy
  ) {
  }

  getHello(): string {
    const eventData = new UserCreatedEvent({
      id: '123',
      email: 'john@doe.com'
    });
    this.client.emit(UserCreatedEvent.eventName, eventData);

    return 'Hello World!';
  }
}
