import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-four.component.html',
  styleUrl: './chapter-four.component.css'
})
export class ChapterFourComponent {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;
  currentState = 'image1';
  intervalId: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startImageVideoCycle();
  }

  startImageVideoCycle(): void {
    const soundImage1 = new Audio('/assets/ch4p1.mp3');
  
    if (this.currentState === 'image1') {
      soundImage1.play();
    }
    setTimeout(() => {
      this.currentState = 'video';
      setTimeout(() => {
        this.currentState = 'image2';
      }, 5000);
  
    }, 13000);
  }
  
  
  

  ngAfterViewInit(): void {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(canvas => canvas.remove());

    this.textAnimator = new TextAnimator(this.titleElement.nativeElement, 30);
    this.textAnimator.start();
  }

  goToNextChapter(){}

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
