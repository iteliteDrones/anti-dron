import { Injectable } from '@angular/core';
import gsap from "gsap";

import { TextPlugin } from 'gsap/src/all';
import { ScrollTrigger } from 'gsap/all';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private initSize: boolean;
  private topProperties;

  public init(writeLine, elements): void
  {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".machine_line", 
    {
      text: {value: `One of the most cost effecting counter UAV’s solutions is jamming the Electro Magnetic signals that the device uses for data transmission and navigation.
      An effective anti-drone solution should cover the spectrum between 433MHz up to 6GHz frequency bands.
      ITELITE has some antenna systems that you can use for your anti-drone system that can handle more than 100W of input power.`},
      duration: 14,
      delay: 1,
      ease: "none"
    })
    .then(() => {
      setTimeout(() => {
        writeLine.nativeElement.remove();
      }, 1150);
    });

    gsap.fromTo(
      "h1",
      {
        y: -60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1
      }
    )
    .delay(.5);

    Array.from(elements)
    .forEach((e: HTMLElement) => {
      gsap.fromTo(e,
        {
          y: '-=100',
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut', 
          scrollTrigger: {
            trigger: e,
            start: '-20% 20%',
          }
        }
      );  
    })

    this.setSizes(elements);
    this.scrollEvent();
  }

  public setSizes(elements)
  {
    this.topProperties = [];

    Array.from(elements)
    .forEach((e: HTMLElement) => {

      const additionalHeight: number = window.innerWidth < 800?
       document.querySelector("section").offsetHeight + document.querySelector("nav").offsetHeight
       : 0;

       this.topProperties.push(
        {
          y: e.offsetTop, 
          size: e.offsetHeight 
        });

    });
  }

  scrollEvent()
  {

    const span = document.getElementsByClassName("number");
    gsap.registerPlugin(ScrollTrigger);

    let currentElementID: number;

    function scrollAnim(id): boolean
    {
      if(currentElementID == id) return false;

      setTimeout(() => {
        Array.from(span).forEach((e, _id) => {
          e['style'].top = `${(_id * 30) + id * (-30)}px`;
        });
      }, 700);
        
      return false;
    };

    const conditions = {
      mobile: 'value.y - window.innerHeight / 2 < document.body.scrollTop && (value.y - window.innerHeight / 2) + value.size > document.body.scrollTop',
      pc: 'value.y - window.innerHeight / 2.2 < document.body.scrollTop && (value.y - window.innerHeight / 2.2) + value.size > document.body.scrollTop'
    };

    let x;

    document.body.addEventListener("scroll", () => {
      
      this.topProperties.every((value, id: number) => {
        if(x) clearTimeout(x);
        x = setTimeout(() => {
          console.log(document.body.scrollTop);
          console.log(this.topProperties)
        }, 1000);
        
        if(window.innerWidth > 1000? eval(conditions.pc): eval(conditions.mobile)) return scrollAnim(id);
        return true;
      });

      
    })
  }
}
