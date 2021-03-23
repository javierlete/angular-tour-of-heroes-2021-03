import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // heroService: HeroService;

  constructor(private heroService: HeroService, private messageService: MessageService) {
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    // TODO: Mejorar el borrado visual para que se haga exclusivamente cuando la operación haya funcionado
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
