import { effect, Injectable, signal } from '@angular/core';
import Character from '../../Interfaces/Charater';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  constructor() {}

  public characters = signal<Character[]>(
    LocalStorageHelper.LoadFromLocalStorage()
  );

  public SaveToLocalStorage = effect(() => {
    // console.log(`Characters count: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  public ChangeCharacter = (newCharacter: Character) =>
    this.characters.update((list) => [...list, newCharacter]);
}
