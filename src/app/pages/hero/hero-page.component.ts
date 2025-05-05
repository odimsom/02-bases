import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, WritableSignal } from "@angular/core";



@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ]
})
export class HeroPageComponent {

  public name: WritableSignal<string> = signal('Ironman');

  public age: WritableSignal<number> = signal(45);

  public heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  })

  public capitalize = computed(() => {
    const capitalize = this.name().toUpperCase();
    return capitalize;
  })

  public changeHero(): void {
    this.name.update((val) => val = 'Spiderman');
    this.age.update((val) => 22);
  }

  public chageAge(): void {
    this.age.update((val) => 60);
  }

  public resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
