import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideareaComponent } from './slidearea.component';

describe('SlideareaComponent', () => {
  let component: SlideareaComponent;
  let fixture: ComponentFixture<SlideareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
