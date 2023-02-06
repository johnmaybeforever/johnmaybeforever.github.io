import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsConsTableComponent } from './pros-cons-table.component';

describe('ProsConsTableComponent', () => {
    let component: ProsConsTableComponent;
    let fixture: ComponentFixture<ProsConsTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProsConsTableComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProsConsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});