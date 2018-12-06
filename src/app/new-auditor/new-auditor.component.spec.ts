import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuditorComponent } from './new-auditor.component';

describe('NewAuditorComponent', () => {
  let component: NewAuditorComponent;
  let fixture: ComponentFixture<NewAuditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
