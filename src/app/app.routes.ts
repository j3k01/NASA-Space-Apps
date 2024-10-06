import { Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component'; 
import { ChapterTwoComponent } from './chapter-two/chapter-two.component'; 
import { ChapterTwoThreeComponent } from './chapter-two-three/chapter-two-three.component'; 
import { ChapterBefThreeComponent } from './chapter-bef-three/chapter-bef-three.component'; 
import { ChapterThreeComponent } from './chapter-three/chapter-three.component'; 
import { ChapterFourComponent } from './chapter-four/chapter-four.component'; 
import { ChapterFiveComponent } from './chapter-five/chapter-five.component'; 
import { ChapterSixComponent } from './chapter-six/chapter-six.component'; 
import { ChapterSevenComponent } from './chapter-seven/chapter-seven.component'; 
import { PreChapter01Component } from './pre-chapter01/pre-chapter01.component';
import { PreChapter00Component } from './pre-chapter00/pre-chapter00.component';

export const routes: Routes = [
    { path: '', component: PlanetComponent },
    { path: 'preChapter00', component: PreChapter00Component},
    { path: 'preChapter01', component: PreChapter01Component},
    { path: 'chapterOne', component: ChapterOneComponent },
    { path: 'chapterTwo', component: ChapterTwoComponent },
    { path: 'chapterTwoThree', component: ChapterTwoThreeComponent },
    { path: 'chapterBefThree', component: ChapterBefThreeComponent },
    { path: 'chapterThree', component: ChapterThreeComponent },
    { path: 'chapterFour', component: ChapterFourComponent },
    { path: 'chapterFive', component: ChapterFiveComponent },
    { path: 'chapterSix', component: ChapterSixComponent },
    { path: 'chapterSeven', component: ChapterSevenComponent },
  ];
  