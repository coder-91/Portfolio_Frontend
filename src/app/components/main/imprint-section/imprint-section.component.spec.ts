import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintSectionComponent } from './imprint-section.component';

describe('ImprintSectionComponent', () => {
  let component: ImprintSectionComponent;
  let fixture: ComponentFixture<ImprintSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprintSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
