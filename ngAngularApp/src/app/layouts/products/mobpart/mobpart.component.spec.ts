import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobpartComponent } from './mobpart.component';

describe('MobpartComponent', () => {
  let component: MobpartComponent;
  let fixture: ComponentFixture<MobpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
