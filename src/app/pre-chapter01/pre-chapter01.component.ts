import { Component, ViewEncapsulation, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { TextAnimator } from '../text-animator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-chapter01',
  standalone: true,
  imports: [],
  templateUrl: './pre-chapter01.component.html',
  styleUrl: './pre-chapter01.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PreChapter01Component {
  @ViewChildren('titleRef') titleElements!: QueryList<ElementRef>;
  textAnimators: TextAnimator[] = [];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(canvas => canvas.remove());
    let delay : number = 0;

    this.titleElements.forEach((element: ElementRef, index: number) => {
      setTimeout(() => {
        const animator = new TextAnimator(element.nativeElement, 30);
        animator.start();
        this.textAnimators.push(animator);
      }, delay);

      delay += 5000;
    });
    
  }

  goToNextChapter(){
    this.router.navigate(['/chapterOne']);
    console.log(123);
  }

}
