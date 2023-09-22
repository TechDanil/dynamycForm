import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-x',
    template: `
        <div>
            <label for="xData">Data from FormComponent:</label>
            <input type="text" id="xData" [(ngModel)]="formDataFromFormComponent" [disabled]="!editMode" />
        </div>
        <button (click)="toggleEditMode()">Edit</button>
    `,
})
class AppXComponent {
    @Input() formDataFromFormComponent!: string;
    editMode = false;

    toggleEditMode() {
        this.editMode = !this.editMode;
    }
}

export { AppXComponent };
