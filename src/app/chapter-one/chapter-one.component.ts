import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css'],
  standalone: true,
})
export class ChapterOneComponent implements AfterViewInit {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(canvas => canvas.remove());

    this.textAnimator = new TextAnimator(this.titleElement.nativeElement, 30);
    this.textAnimator.start();
  }


  goToNextChapter() {
    this.router.navigate(['/chapterTwo']);
  }
  
}
