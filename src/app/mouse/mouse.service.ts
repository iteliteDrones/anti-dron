import { Injectable } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  setMouseStyle(): void
  {
    if(window.innerWidth < 800) return;

    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {    
      mouse.x = e.x;
      mouse.y = e.y;  
    });

    gsap.ticker.add(() => {
      
      // adjust speed for higher refresh monitors
      const dt = 1.1 - Math.pow(1 - speed, gsap.ticker.deltaRatio()); 
      
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      xSet(pos.x);
      ySet(pos.y);
    });
  }
}