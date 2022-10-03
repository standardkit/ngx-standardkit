import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStandardkitComponent } from './ngx-standardkit.component';

describe('NgxStandardkitComponent', () => {
  let component: NgxStandardkitComponent;
  let fixture: ComponentFixture<NgxStandardkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStandardkitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStandardkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
