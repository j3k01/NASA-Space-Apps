import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreChapter01Component } from './pre-chapter01.component';

describe('PreChapter01Component', () => {
  let component: PreChapter01Component;
  let fixture: ComponentFixture<PreChapter01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreChapter01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreChapter01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
