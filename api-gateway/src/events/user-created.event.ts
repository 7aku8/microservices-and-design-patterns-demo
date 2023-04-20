import BaseEvent from "./base-event";

interface UserCreatedEventData {
  id: string;
  email: string;
}

export default class UserCreatedEvent implements BaseEvent {
  public static readonly eventName = 'user_created';

  constructor(public readonly data: UserCreatedEventData) {}
}