import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditorComponent } from './number-editor.component';

describe('NumberEditorComponent', () => {
  let component: NumberEditorComponent;
  let fixture: ComponentFixture<NumberEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberEditorComponent]
    });
    fixture = TestBed.createComponent(NumberEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
