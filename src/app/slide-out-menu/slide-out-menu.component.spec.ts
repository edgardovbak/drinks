import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOutMenuComponent } from './slide-out-menu.component';

describe('SlideOutMenuComponent', () => {
  let component: SlideOutMenuComponent;
  let fixture: ComponentFixture<SlideOutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideOutMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideOutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
