import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IField } from '../interfaces/IField/IField';

@Component({
  selector: 'app-date-editor',
  template: `
    <input type="date" [value]="getDateValue()" (input)="onDateInputChange($event)" />
  `,
})
export class DateEditorComponent {
  @Input() field!: IField;
  @Input() value!: Record<string, any> | null;
  @Output() valueChange = new EventEmitter<Record<string, any>>();

  getDateValue(): string {
    if (this.field && this.field.name && this.value && this.value[this.field.name] instanceof Date) {
      return (this.value[this.field.name] as Date).toISOString().split('T')[0];
    }
    return '';
  }

  onDateInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const dateString = inputElement.value;

    if (this.value) {
      this.valueChange.emit({
        ...(this.value || {}),
        [this.field.name]: new Date(dateString),
      });
    }
  }
}
