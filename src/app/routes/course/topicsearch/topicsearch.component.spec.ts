import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsearchComponent } from './topicsearch.component';

describe('TopicsearchComponent', () => {
  let component: TopicsearchComponent;
  let fixture: ComponentFixture<TopicsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
