import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterBefThreeComponent } from './chapter-bef-three.component';

describe('ChapterBefThreeComponent', () => {
  let component: ChapterBefThreeComponent;
  let fixture: ComponentFixture<ChapterBefThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterBefThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterBefThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
