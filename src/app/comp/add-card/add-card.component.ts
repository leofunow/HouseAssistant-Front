import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  listOfFields: string[] = [];
  listOfSelectedFields = ['ЮЗАО', 'ЮВАО','СЗАО'];
  listOfDistricts: string[] = [];
  listOfSelectedDistricts = ['Можайский', 'Кунцевский','Тропарево-Никулино'];
  listOfTypes: string[] = [];
  listOfSelectedTypes = ['Снос', 'Реставрация','Продажа'];
  listOfResponsibles: string[] = [];
  listOfSelectedResponsibles = ['Вася Пупкин', 'Иван Иванович','Петр Петрович'];
  listOfStatus: string[] = [];
  listOfSelectedStatus = ['Заморожен', 'В процессе','Отменен', 'В планах'];
  space = 0;

  ngOnInit(): void {
    const children1: string[] = [];
    const children2: string[] = [];
    const children3: string[] = [];
    const children4: string[] = [];
    const children5: string[] = [];
    for (let i = 0; i < this.listOfSelectedFields.length; i++) {
      children1.push(this.listOfSelectedFields[i]);
    }
    for (let i = 0; i < this.listOfSelectedDistricts.length; i++) {
      children2.push(this.listOfSelectedDistricts[i]);
    }
    for (let i = 0; i < this.listOfSelectedTypes.length; i++) {
      children3.push(this.listOfSelectedTypes[i]);
    }
    for (let i = 0; i < this.listOfSelectedResponsibles.length; i++) {
      children4.push(this.listOfSelectedResponsibles[i]);
    }
    for (let i = 0; i < this.listOfSelectedStatus.length; i++) {
      children5.push(this.listOfSelectedStatus[i]);
    }
    this.listOfFields = children1;
    this.listOfDistricts = children2;
    this.listOfTypes = children3;
    this.listOfResponsibles = children4;
    this.listOfStatus = children5;
  }
}
