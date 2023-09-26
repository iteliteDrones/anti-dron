import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  setMouseStyle(): void
  {
    const ball: HTMLElement | null = document.querySelector(".ball") ;
    window.addEventListener("mousemove", e => {    
      if(!ball) return;
      
      ball.style.top = `${e.y}px`;
      ball.style.left = `${e.x}px`;
    });
  }
}