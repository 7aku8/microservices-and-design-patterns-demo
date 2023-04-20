export default abstract class BaseEvent {
  public static readonly eventName: string;
  public readonly data: any;

  protected constructor(data: any) {
    this.data = data;
  }
}