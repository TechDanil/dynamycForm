import { Component, Input } from '@angular/core';
import { IField } from '../interfaces/IField/IField';

@Component({
  selector: 'app-number-editor',
  template: '<input type="number" [value]="value[field.name]" />',
})
class NumberEditorComponent {
  @Input() field!: IField;
  @Input() value!: Record<string, unknown>;
}

export { NumberEditorComponent };
