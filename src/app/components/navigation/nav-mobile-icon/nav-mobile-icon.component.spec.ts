import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMobileIconComponent } from './nav-mobile-icon.component';

describe('NavMobileIconComponent', () => {
  let component: NavMobileIconComponent;
  let fixture: ComponentFixture<NavMobileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMobileIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMobileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
