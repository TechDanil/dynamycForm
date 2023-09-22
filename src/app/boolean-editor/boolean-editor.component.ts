import { Component, Input } from '@angular/core';
import { IField } from '../interfaces/IField/IField';

@Component({
  selector: 'app-boolean-editor',
  template: '<input type="checkbox" [checked]="value[field.name]" />',
})
class BooleanEditorComponent {
  @Input() field!: IField;
  @Input() value!: Record<string, unknown>;
}

export { BooleanEditorComponent };
