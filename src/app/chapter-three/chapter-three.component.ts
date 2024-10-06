import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-three.component.html',
  styleUrl: './chapter-three.component.css'
})
export class ChapterThreeComponent {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;
  currentState = 'image1';
  intervalId: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startImageVideoCycle();
  }

  startImageVideoCycle(): void {
    const soundImage1 = new Audio('/assets/ch3p1.mp3');
    const soundImage2 = new Audio('/assets/ch3p3.mp3');
    soundImage1.play();
    this.intervalId = setInterval(() => {
      if (this.currentState === 'image1') {
        soundImage1.play();
        this.currentState = 'video';        
      } else if (this.currentState === 'video') {
        this.currentState = 'image2';
        soundImage2.play();
        clearInterval(this.intervalId);
      } else{
        this.currentState = 'image1';
        soundImage1.play();
      }
    }, 6000);
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
