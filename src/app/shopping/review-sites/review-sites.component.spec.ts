import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSitesComponent } from './review-sites.component';

describe('ReviewSitesComponent', () => {
    let component: ReviewSitesComponent;
    let fixture: ComponentFixture<ReviewSitesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ReviewSitesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewSitesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});