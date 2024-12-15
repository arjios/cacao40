"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt_1 = require("mqtt");
class MQTTSubscriber {
    constructor(brokerUrl, options, topic) {
        this.brokerUrl = brokerUrl;
        this.options = options;
        this.topic = topic;
        this.observers = [];
        this.client = (0, mqtt_1.connect)(this.brokerUrl, this.options);
        this.client.on('connect', this.onConnect.bind(this));
        this.client.on('message', this.onMessage.bind(this));
        this.client.on('error', this.onError.bind(this));
        this.client.on('close', this.onClose.bind(this));
    }
    onConnect() {
        console.log('Connected to MQTT Broker');
        this.client.subscribe(this.topic, { qos: 0 }, (err) => {
            if (err) {
                console.error('Subscription error:', err);
            }
        });
    }
    onMessage(topic, message) {
        if (topic === this.topic) {
            const data = JSON.parse(message.toString());
            console.log(`Message received from ${topic}:`, data);
            this.notifyObservers(data);
        }
    }
    onError(error) {
        console.error('MQTT error:', error);
    }
    onClose() {
        console.log('Disconnected from MQTT Broker');
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
exports.default = MQTTSubscriber;
