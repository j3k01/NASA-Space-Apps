import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterOneComponent } from './chapter-one.component';

describe('ChapterOneComponent', () => {
  let component: ChapterOneComponent;
  let fixture: ComponentFixture<ChapterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
