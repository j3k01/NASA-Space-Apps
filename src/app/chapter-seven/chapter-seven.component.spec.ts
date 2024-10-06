import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSevenComponent } from './chapter-seven.component';

describe('ChapterSevenComponent', () => {
  let component: ChapterSevenComponent;
  let fixture: ComponentFixture<ChapterSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterSevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
