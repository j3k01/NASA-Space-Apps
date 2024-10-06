import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreChapter00Component } from './pre-chapter00.component';

describe('PreChapter00Component', () => {
  let component: PreChapter00Component;
  let fixture: ComponentFixture<PreChapter00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreChapter00Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreChapter00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
