import Client, { IClientOptions, connect } from 'mqtt';


interface Observer {
  update(data: any): void;
}

class MQTTSubscriber {
  private client: Client.MqttClient;
  private observers: Observer[] = [];

  constructor(private brokerUrl: string, private options: IClientOptions, private topic: string) {
    this.client = connect(this.brokerUrl, this.options);
    this.client.on('connect', this.onConnect.bind(this));
    this.client.on('message', this.onMessage.bind(this));
    this.client.on('error', this.onError.bind(this));
    this.client.on('close', this.onClose.bind(this));
  }

  private onConnect() {
    console.log('Connected to MQTT Broker');
    this.client.subscribe(this.topic, { qos: 0 }, (err) => {
      if (err) {
        console.error('Subscription error:', err);
      }
    });
  }

  private onMessage(topic: string, message: Buffer) {
    if (topic === this.topic) {
      const data = JSON.parse(message.toString());
      console.log(`Message received from ${topic}:`, data);
      this.notifyObservers(data);
    }
  }

  private onError(error: Error) {
    console.error('MQTT error:', error);
  }

  private onClose() {
    console.log('Disconnected from MQTT Broker');
  }

  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  private notifyObservers(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

export default MQTTSubscriber;
