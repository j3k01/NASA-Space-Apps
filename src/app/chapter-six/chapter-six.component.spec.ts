import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSixComponent } from './chapter-six.component';

describe('ChapterSixComponent', () => {
  let component: ChapterSixComponent;
  let fixture: ComponentFixture<ChapterSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
