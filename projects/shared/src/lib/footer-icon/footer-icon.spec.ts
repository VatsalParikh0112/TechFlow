import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIcon } from './footer-icon';

describe('FooterIcon', () => {
  let component: FooterIcon;
  let fixture: ComponentFixture<FooterIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
