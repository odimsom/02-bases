import { Component, input } from '@angular/core';
import type Charater from '../../../Interfaces/Charater';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  public characters = input.required<Charater[]>();
  public listname = input.required<string>();
}
