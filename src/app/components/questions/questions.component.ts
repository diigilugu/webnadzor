import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [
    {
      index: 0,
      isOpen: false,
      question: 'Каким образом осуществляется заполнение ФРМО и ФРМР в масштабах страны?',
      answer: 'Регистрация в ЕГИСЗ и заполнение ФРМО и ФРМР производится с помощью методик удалённого доступа к компьютеру, при этом наши партнёры могут следить за тем, как производится заполнение.'
    },
    {
      index: 1,
      isOpen: false,
      question: 'Что включает в себя аудит сайта?',
      answer: 'Аудит сайта проводится на основе некоторых НПА, действующих на территории РФ. Это НПА, регулирующие то, какая информация должна быть доступна пользователю сайта медицинской организации.'
    },
    {
      index: 2,
      isOpen: false,
      question: 'Возможны ли выездные консультации?',
      answer: 'Эта опция доступна в Москве и МО, Санкт-Петербурге и ЛО, Ростове-на-Дону и РО'
    },
  ]

  openAnswer(i: number): void {
    for (const question of this.questions) {
      if (question.index === i) {
        question.isOpen = !question.isOpen;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
