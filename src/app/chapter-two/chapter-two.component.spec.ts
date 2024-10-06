import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterTwoComponent } from './chapter-two.component';

describe('ChapterOneComponent', () => {
  let component: ChapterTwoComponent;
  let fixture: ComponentFixture<ChapterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
