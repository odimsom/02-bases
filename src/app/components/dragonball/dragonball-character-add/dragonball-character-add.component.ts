import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import Charater from '../../../Interfaces/Charater';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './dragonball-character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAddComponent {
  public Name = signal<string>('');
  public Power = signal<number>(0);

  public NewCharacter = output<Charater>();

  public ChangeCharacter() {
    if (!this.Name() || !this.Power() || this.Power() <= 0) {
      console.log(this.Name(), this.Power());
      return;
    } else {
      const newCharacter: Charater = {
        id: Math.floor(Math.random() * 123),
        name: this.Name(),
        power: this.Power(),
      };
      this.NewCharacter.emit(newCharacter);
    }
  }
}
