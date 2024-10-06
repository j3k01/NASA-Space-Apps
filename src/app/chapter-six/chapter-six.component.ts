import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-six.component.html',
  styleUrl: './chapter-six.component.css'
})
export class ChapterSixComponent {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;
  currentState = 'image1';
  intervalId: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startImageVideoCycle();
  }

  startImageVideoCycle(): void {
    const soundImage1 = new Audio('/assets/chap6s1.mp3');
  
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

  correctAnswer(){
    this.router.navigate(['/'])
  }

  wrongAnswer(){
    this.router.navigate(['/'])
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
