import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPrivacyPolicyComponent } from './checkbox-privacy-policy.component';

describe('CheckboxPrivacyPolicyComponent', () => {
  let component: CheckboxPrivacyPolicyComponent;
  let fixture: ComponentFixture<CheckboxPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxPrivacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
