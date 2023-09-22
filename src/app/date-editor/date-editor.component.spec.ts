import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEditorComponent } from './date-editor.component';

describe('DateEditorComponent', () => {
  let component: DateEditorComponent;
  let fixture: ComponentFixture<DateEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateEditorComponent]
    });
    fixture = TestBed.createComponent(DateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
