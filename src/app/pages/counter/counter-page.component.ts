import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";
import { Vehicle } from './algo';


@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  public counter: number = 0;

  public counterSignal: WritableSignal<number> = signal(10);

  public algo: number = 0

  public vehicles: Vehicle[] = [];

  constructor() {
    // setInterval(() => {
    //   this.isIncrement(1);
    //   console.log('Tick');
    // }, 2000);
  }

  public isIncrement(value: number): void {
    this.algo += value;
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update( (current) => current + value )
  }

  public resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  public showVehicle(): void {
    this.vehicles = [
      {
        nombre: "primero",
        details: {
          marca: "mashleCar",
          modelo: "hjdndkk344",
          tipo: "todo terreno",
          carroceria: "blindada",
          tamanioAro: 0,
          cilindraje: "no se que eh jeso",
          caballos: 50000,
          kilometros: 20
        }
      }
    ]
  }
}
