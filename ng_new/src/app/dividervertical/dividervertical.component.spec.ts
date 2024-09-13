import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerverticalComponent } from './dividervertical.component';

describe('DividerverticalComponent', () => {
  let component: DividerverticalComponent;
  let fixture: ComponentFixture<DividerverticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerverticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
