import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBtnComponent } from './basic-btn.component';

describe('BasicBtnComponent', () => {
  let component: BasicBtnComponent;
  let fixture: ComponentFixture<BasicBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
