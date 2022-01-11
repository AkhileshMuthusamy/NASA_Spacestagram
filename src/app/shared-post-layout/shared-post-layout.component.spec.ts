import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPostLayoutComponent } from './shared-post-layout.component';

describe('SharedPostLayoutComponent', () => {
  let component: SharedPostLayoutComponent;
  let fixture: ComponentFixture<SharedPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPostLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
