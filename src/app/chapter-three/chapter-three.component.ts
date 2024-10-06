import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimator } from '../text-animator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapter-three',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chapter-three.component.html',
  styleUrls: ['./chapter-three.component.css']
})
export class ChapterThreeComponent implements OnInit, OnDestroy {
  @ViewChild('titleRef') titleElement!: ElementRef;
  textAnimator!: TextAnimator;
  currentState = 'image1';
  intervalId: number = 0;

  userName: string = ''; 
  isNameEntered: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startImageVideoCycle();

    const storedName = localStorage.getItem('userName');
    if (storedName) {
      this.userName = storedName;
      this.isNameEntered = true;
    }
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
      } else {
        this.currentState = 'image1';
        soundImage1.play();
      }
    }, 6000);
  }

  ngAfterViewInit(): void {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(canvas => canvas.remove());

    this.textAnimator = new TextAnimator(this.titleElement.nativeElement, 160);
    this.textAnimator.start();
  }

  openNameWindow(): void {
    const nameWindow = window.open(
      '/assets/pop-up.html', 
      'Name Input',
      'width=400,height=300'
    );

    const interval = setInterval(() => {
      if (nameWindow?.closed) {
        clearInterval(interval);
        const storedName = localStorage.getItem('userName');
        if (storedName) {
          this.userName = storedName;
          this.isNameEntered = true;
          this.goToNextChapter();
        }
      }    }, 500);
  }
  
  goToNextChapter(): void {
    if (this.isNameEntered) {
      console.log(`User's name is: ${this.userName}`);
      this.router.navigate(['/chapterFour']);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
