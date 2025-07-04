import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-nabilhjeiji';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    // Initialiser la langue choisie
    this.languageService.initLanguage();

    // Définir le titre de la page
    this.titleService.setTitle('Nabil H | Développeur Full Stack');

    // Définir les meta tags pour le SEO
    this.metaService.addTags([
      {
        name: 'keywords',
        content: 'Développeur Full Stack, Angular, Spring Boot, Docker, Microservices, Nabil Hjeiji'
      },
      {
        name: 'description',
        content: "Développeur Full Stack avec expérience en Angular, Spring Boot, MySQL, MongoDB, Docker et Kubernetes. Passionné par l’innovation, les microservices et les architectures scalables."
      }
    ]);

    // Initialisation des animations
    AOS.init();
  }
}
