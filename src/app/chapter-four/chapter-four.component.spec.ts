import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourComponent } from './chapter-four.component';

describe('ChapterFourComponent', () => {
  let component: ChapterFourComponent;
  let fixture: ComponentFixture<ChapterFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
