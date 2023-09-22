import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { IField } from '../interfaces/IField/IField';

@Component({
  selector: 'app-form',
  template: `
    <form (submit)="onSubmit()">
      <ng-container *ngFor="let field of fields">
        <label>{{ field.title }}:</label>
        <ng-container
          *ngTemplateOutlet="dynamicComponent; context: { field: field, value: value }"
        ></ng-container>
      </ng-container>
      <button type="submit">Submit</button>
    </form>
    <ng-template #dynamicComponent let-field="field" let-value="value">
      <ng-container [ngSwitch]="field.dataType">
        <app-text-editor *ngSwitchCase="'text'" [field]="field" [value]="value"></app-text-editor>
        <app-number-editor *ngSwitchCase="'number'" [field]="field" [value]="value"></app-number-editor>
        <app-date-editor *ngSwitchCase="'date'" [field]="field" [value]="value"></app-date-editor>
        <app-boolean-editor *ngSwitchCase="'boolean'" [field]="field" [value]="value"></app-boolean-editor>
      </ng-container>
    </ng-template>
  `,
})
export class FormComponent {
  @Input()
  fields!: readonly IField[];
  @Input()
  value!: Record<string, unknown>;

  @Output() formSubmit: EventEmitter<Record<string, unknown>> = new EventEmitter<Record<string, unknown>>();

  @ViewChild('dynamicComponent', { static: true }) dynamicComponent!: TemplateRef<any>;

  formData: Record<string, unknown> = {};

  onSubmit() {
    const newData: Record<string, unknown> = {};

    for (const field of this.fields) {
      newData[field.name] = this.formData[field.name];
    }

    this.formSubmit.emit(newData);
  }
}
