// sensorDataObserver.ts
import  Observer  from '../services/mqttservice'

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

export default SensorDataObserver;
export type { SensorData };
