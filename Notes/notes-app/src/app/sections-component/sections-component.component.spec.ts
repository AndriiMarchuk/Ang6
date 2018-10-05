import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsComponentComponent } from './sections-component.component';

describe('SectionsComponentComponent', () => {
  let component: SectionsComponentComponent;
  let fixture: ComponentFixture<SectionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
