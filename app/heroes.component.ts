import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './Hero';
import { Router } from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: './../app/heroes.component.html',
  styleUrls:['./../app/heroes.component.css'] 
})
export class HeroesComponent {
  constructor(private heroService : HeroService,
              private router : Router){}
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

    ngOnInit(): void {
    this.getHeroes();
  }

    getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 }