import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBondsComponent } from './i-bonds.component';

describe('IBondsComponent', () => {
    let component: IBondsComponent;
    let fixture: ComponentFixture<IBondsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IBondsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IBondsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});