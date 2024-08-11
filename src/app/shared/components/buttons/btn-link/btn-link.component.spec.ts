import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLinkComponent } from './btn-link.component';

describe('BtnLinkComponent', () => {
  let component: BtnLinkComponent;
  let fixture: ComponentFixture<BtnLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
