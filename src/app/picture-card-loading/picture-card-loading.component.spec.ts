import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCardLoadingComponent } from './picture-card-loading.component';

describe('PictureCardLoadingComponent', () => {
  let component: PictureCardLoadingComponent;
  let fixture: ComponentFixture<PictureCardLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureCardLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
