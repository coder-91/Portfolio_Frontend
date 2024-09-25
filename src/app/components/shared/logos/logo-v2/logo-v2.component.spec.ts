import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoV2Component } from './logo-v2.component';

describe('LogoV2Component', () => {
  let component: LogoV2Component;
  let fixture: ComponentFixture<LogoV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
