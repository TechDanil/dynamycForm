import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanEditorComponent } from './boolean-editor.component';

describe('BooleanEditorComponent', () => {
  let component: BooleanEditorComponent;
  let fixture: ComponentFixture<BooleanEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooleanEditorComponent]
    });
    fixture = TestBed.createComponent(BooleanEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
