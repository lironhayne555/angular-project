import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledErrorComponent } from './filed-error.component';

describe('FiledErrorComponent', () => {
  let component: FiledErrorComponent;
  let fixture: ComponentFixture<FiledErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiledErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiledErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
