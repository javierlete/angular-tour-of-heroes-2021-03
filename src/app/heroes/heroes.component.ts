import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  // heroService: HeroService;

  constructor(private heroService: HeroService) {
    // this.heroService = new HeroService();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log('ANTES');

    this.heroService.getHeroes().subscribe(
      (heroesRecibidos: Hero[]) => {
        console.log('RECIBIDOS LOS DATOS');
        return this.heroes = heroesRecibidos;
      });

    console.log('DESPUÉS');
    // this.heroService.getHeroes().subscribe((function(heroes: Hero[]): void {
    //   console.log(this);
    //   return this.heroes = heroes;
    // }).bind(this));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
