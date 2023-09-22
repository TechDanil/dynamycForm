import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { IField } from '../interfaces/IField/IField';
import { DataType } from '../enum/DataType';

@Component({
    selector: 'app-text-editor',
    template: '<input type="text" [value]="value[field.name]" />',
})
class TextEditorComponent {
    @Input() field!: IField;
    @Input() value!: Record<string, unknown>;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnChanges() {
        this.changeDetectorRef.detectChanges();
    }
}

export { TextEditorComponent };
