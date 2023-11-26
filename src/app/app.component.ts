import { Component, OnInit } from '@angular/core';
import { Card } from './shared/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  idade: any;

  ngOnInit() {
    const scroll = ScrollReveal();
    scroll.reveal('.area-1', {
      duration: 1000,
      mobile: true,
    });

    this.idade = this.calcularIdade();
  }

  cards: Card[] = [
    {
      link: 'https://meuescritorio.netlify.app/',
      title: 'Landing Advogados',
      image: '../assets/images/image-advocacia.png',
      description:
        'Projeto feito em angular, é uma landing page para escritórios de advocácia. ',
    },
    {
      link: 'https://tiarosacoffee.netlify.app/',
      title: 'Tia Rosa Coffee',
      image: '../assets/images/image-coffee.png',
      description: 'Projeto feito em React, landing page do Café da Tia Rosa. ',
    },
    {
      link: 'https://brunostaine.github.io/TOPCASAFINA-BOOTSTRAP/',
      title: 'Top casa fina',
      image:
        'https://user-images.githubusercontent.com/87622645/157796873-5f85e745-76aa-4add-8330-b522166f241a.png',
      description:
        'Esse projeto é uma landing page de apresentação de uma empresa de arquitetura. ',
    },
  ];

  calcularIdade() {
    const dia = 26;
    const mes = 5;
    const ano = 1992;

    const dataNascimento = new Date(ano, mes - 1, dia);

    const dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (
      dataAtual.getMonth() < dataNascimento.getMonth() ||
      (dataAtual.getMonth() === dataNascimento.getMonth() &&
        dataAtual.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }
}
