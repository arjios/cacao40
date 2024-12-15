"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mqttService_1 = __importDefault(require("./mqttService"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'motor/data';
const options = {
    clientId: 'express-mqtt-client',
    keepalive: 60,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
};
class SensorDataObserver {
    constructor(updateState) {
        this.updateState = updateState;
    }
    update(data) {
        this.updateState(data);
    }
}
const sensorData = [];
const mqttSubscriber = new mqttService_1.default(brokerUrl, options, topic);
const observer = new SensorDataObserver((newData) => {
    sensorData.push(newData);
});
mqttSubscriber.addObserver(observer);
app.get('/data', (req, res) => {
    res.json(sensorData);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
