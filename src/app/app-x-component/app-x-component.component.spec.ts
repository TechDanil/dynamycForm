import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppXComponentComponent } from './app-x-component.component';

describe('AppXComponentComponent', () => {
  let component: AppXComponentComponent;
  let fixture: ComponentFixture<AppXComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppXComponentComponent]
    });
    fixture = TestBed.createComponent(AppXComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
