import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReferralsComponent } from './referral-page.component';

describe('ReferralPageComponent', () => {
  let component: TopReferralsComponent;
  let fixture: ComponentFixture<TopReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopReferralsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
