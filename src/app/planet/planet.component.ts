import * as THREE from 'three';
import { Component, OnInit } from '@angular/core';
import getStarfield from './three-helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
  standalone: true,
})
export class PlanetComponent implements OnInit {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  sphere!: THREE.Mesh;
  starfield!: THREE.Points;
  textMesh!: THREE.Mesh;
  audio!: HTMLAudioElement;
  isPlaying: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initThreeJS();
    this.initAudio();
    this.animate();
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      this.onWindowResize();
    });

    const darkPlaneGeometry = new THREE.PlaneGeometry(500, 500);
    const darkMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.65, transparent: true });
    const darkPlane = new THREE.Mesh(darkPlaneGeometry, darkMaterial);
    darkPlane.position.z = -9;
    this.scene.add(darkPlane);

    const video = document.createElement('video');
    video.src = 'assets/starfield.mp4';
    video.loop = true;
    video.muted = true;
    video.play();

    video.playbackRate = 0.8;

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    this.scene.background = videoTexture;

    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load('assets/earth2.jpg');
    const bumpMap = textureLoader.load('assets/earthNight2.jpg');
    const specularMap = textureLoader.load('assets/8k_earth_specular_map.tif');
    const cloudMap = textureLoader.load('assets/04_earthcloudmap.jpg');
    const cloudAlphaMap = textureLoader.load('assets/05_earthcloudmaptrans.jpg');

    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap, 
      bumpMap: bumpMap,
      bumpScale: 0.05,
      metalness: 0.3,
      roughness: 0.8,
      envMapIntensity: 1,
    });

    const geometry = new THREE.SphereGeometry(2.5, 256, 256);
    this.sphere = new THREE.Mesh(geometry, earthMaterial);
    this.scene.add(this.sphere);

    this.starfield = getStarfield({ numStars: 3500 });
    this.scene.add(this.starfield);

    const cloudGeometry = new THREE.SphereGeometry(2.5009, 128, 128);
    const cloudMaterial = new THREE.MeshLambertMaterial({
      map: cloudMap,
      transparent: true,
      alphaMap: cloudAlphaMap,
    });

    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    this.scene.add(cloudMesh);

    const pointLight = new THREE.PointLight(0xffffff, 2.2, 100);
    pointLight.position.set(10, 0, 10);
    this.scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 7); 
    this.scene.add(ambientLight);

    const textTexture = this.createTextTexture('EXOQUEST');
    const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture, transparent: true });
    const textGeometry = new THREE.PlaneGeometry(5.5, 1.5);
    this.textMesh = new THREE.Mesh(textGeometry, textMaterial);
    this.textMesh.position.set(1, 0, 2.6);
    this.sphere.add(this.textMesh);
    
  }

  initAudio(): void {
    this.audio = new Audio('assets/music.mp3');
    this.audio.loop = true;
    this.audio.play();
  }

  createTextTexture(text: string): THREE.Texture {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = 1024;
    canvas.height = 256;

    context.fillStyle = 'rgba(255, 255, 255, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = '64px Barlow Condensed';
    context.fillStyle = 'yellow';
    context.fillText(text, 50, 150);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  goToNextPage(): void {
    this.router.navigate(['/preChapter00']);
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
    this.sphere.rotation.y += 0.006;
    
    this.renderer.render(this.scene, this.camera);
  }

  playAudio(): void {
 if (!this.audio) {
    this.audio = new Audio('assets/music.mp3');
    this.audio.loop = true;
  }
  
  if (this.isPlaying) {
    this.audio.pause();
  } else {
    this.audio.play().catch(error => {
      console.error('Error:', error);
    });
  }
  
  this.isPlaying = !this.isPlaying; 
} 
}
