import { Component } from '@angular/core';
import { IField } from './interfaces/IField/IField';
import { DataType } from './enum/DataType';

@Component({
  selector: 'app-root',
  template: `
    <app-form [fields]="fields" [value]="newObject" (formSubmit)="handleFormSubmit($event)"></app-form>
    <div *ngIf="newObject">
      <h3>Item list:</h3>
      <pre>{{ stringifyObject(newObject) }}</pre>
    </div>
    <div>
      <h3>List of Items:</h3>
      <ul>
        <li *ngFor="let item of itemList">{{ stringifyObject(item) }}</li>
      </ul>
      <button (click)="addItemToList()">Add Item</button>
    </div>
  `,
})
class AppComponent {
  fields: IField[] = [
    { name: 'name', dataType: DataType.TEXT, title: 'Имя' },
    { name: 'age', dataType: DataType.NUMBER, title: 'Возраст' },
    { name: 'dob', dataType: DataType.DATE, title: 'Дата рождения' },
    { name: 'isStudent', dataType: DataType.BOOLEAN, title: 'Студент?' },
  ];

  newObject: Record<string, any> = {
    name: 'John Doe',
    age: 30,
    dob: new Date('1990-01-01'),
    isStudent: false,
  };

  itemList: Record<string, any>[] = [];

  handleFormSubmit(data: Record<string, any>) {
    if (data) {
      this.newObject = { ...data };
    }
  }

  addItemToList() {
    if (this.newObject) {
      this.itemList.push({ ...this.newObject });
    }
  }


  stringifyObject(obj: Record<string, any>): string {
    return JSON.stringify(obj, null, 2);
  }
}

export { AppComponent };
