import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterThreeComponent } from './chapter-three.component';

describe('ChapterThreeComponent', () => {
  let component: ChapterThreeComponent;
  let fixture: ComponentFixture<ChapterThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
