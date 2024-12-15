import express from 'express';
import cors from 'cors';
import MQTTSubscriber from '../services/mqttService';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'moagem/volume';
const options = {
  clientId: 'express-mqtt-client',
  keepalive: 60,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
};

interface SensorData {
  temperatura: number;
  vibracao: number;
  rpm: number;
  unidade: string;
}

class SensorDataObserver implements Observer {
  constructor(private updateState: (data: SensorData) => void) {}

  update(data: SensorData) {
    this.updateState(data);
  }
}

const sensorData: SensorData[] = [];

const mqttSubscriber = new MQTTSubscriber(brokerUrl, options, topic);
const observer = new SensorDataObserver((newData: SensorData) => {
  sensorData.push(newData);
});

mqttSubscriber.addObserver(observer);

app.get('/data', (req, res) => {
  res.json(sensorData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
