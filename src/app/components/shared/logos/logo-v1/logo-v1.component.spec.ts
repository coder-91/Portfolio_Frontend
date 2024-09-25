import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoV1Component } from './logo-v1.component';

describe('LogoV1Component', () => {
  let component: LogoV1Component;
  let fixture: ComponentFixture<LogoV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
