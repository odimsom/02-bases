import {
  Component,
  computed,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import type Character from '../../Interfaces/Charater';

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DrangonBallPageComponent {
  public Name = signal<string>('');
  public Power = signal<number>(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Picolo', power: 3000 },
    { id: 4, name: 'Yanha', power: 500 },
  ]);

  public ChangeCharacter() {
    if (!this.Name() || !this.Power() || this.Power() <= 0) {
      return;
    } else {
      const newCharacter: Character = {
        id: this.characters().length + 1,
        name: this.Name(),
        power: this.Power(),
      };
      this.characters.update((list) => [...list, newCharacter]);
    }
    console.log(this.Name(), this.Power());
  }
}
