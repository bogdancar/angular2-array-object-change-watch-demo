import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayWatchDemoComponent } from './array-watch-demo.component';

describe('ArrayWatchDemoComponent', () => {
  let component: ArrayWatchDemoComponent;
  let fixture: ComponentFixture<ArrayWatchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayWatchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayWatchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
