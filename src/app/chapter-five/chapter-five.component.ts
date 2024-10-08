import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-five.component.html',
  styleUrl: './chapter-five.component.css'
})
export class ChapterFiveComponent {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;
  currentState = 'image1';
  intervalId: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startImageVideoCycle();
  }

  startImageVideoCycle(): void {
    const soundImage1 = new Audio('/assets/chap5s1.mp3');
  
    if (this.currentState === 'image1') {
      soundImage1.play();
    }
  }
  
  ngAfterViewInit(): void {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(canvas => canvas.remove());

    this.textAnimator = new TextAnimator(this.titleElement.nativeElement, 20);
    this.textAnimator.start();
  }

  goToNextChapter(){
    this.router.navigate(['/chapterSix'])
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
