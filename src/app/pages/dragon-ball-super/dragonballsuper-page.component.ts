import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add.component';
import { DragonBallService } from '../../services/dragon-ball-services/dragon-ball.service';

@Component({
  selector: 'drangonballsuperpagecomponet',
  templateUrl: './dragonballsuper-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DrangonBallsuperPageComponent {
  public DragonBallService: DragonBallService = inject(DragonBallService);

  // constructor(dragonballservice: DragonBallService) {
  //   this.DragonBallService = dragonballservice;
  // }
}
