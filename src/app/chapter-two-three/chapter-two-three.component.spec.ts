import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoThreeComponent } from './chapter-two-three.component';

describe('ChapterTwoThreeComponent', () => {
  let component: ChapterTwoThreeComponent;
  let fixture: ComponentFixture<ChapterTwoThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterTwoThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterTwoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
