import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';

@Component({
  selector: 'app-chapter-two-three',
  standalone: true,
  imports: [],
  templateUrl: './chapter-two-three.component.html',
  styleUrl: './chapter-two-three.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ChapterTwoThreeComponent {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(canvas => canvas.remove());

    this.textAnimator = new TextAnimator(this.titleElement.nativeElement, 30);
    this.textAnimator.start();
  }

  goToNextChapter(){
    this.router.navigate(["/chapterBefThree"])
  }
}
