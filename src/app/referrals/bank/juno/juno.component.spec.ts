import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunoComponent } from './juno.component';

describe('JunoComponent', () => {
  let component: JunoComponent;
  let fixture: ComponentFixture<JunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
