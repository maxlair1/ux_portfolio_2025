import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { horizontalLoop } from "../util/horizontalLoop";
import "./Carousel.module.scss";

gsap.registerPlugin(Draggable, InertiaPlugin);

const projects = new Array(6).fill(0).map((_, i) => ({
  id: i,
  title: "LOCALBEAN:",
  desc: "The coffee shop app you never knew you needed",
  date: "MAR/2024",
  color: `hsl(${i * 30}, 20%, 60%)`
}));

export default function HorizontalScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = scrollerRef.current;
    const boxes = gsap.utils.toArray(".project-card") as HTMLElement[];

    const loop = horizontalLoop(boxes, {
      repeat: -1,
      speed: 1,
      draggable: true
    });

    return () => {
      loop.kill();
    };
  }, []);

  return (
    <div className="horizontal-scroller" ref={scrollerRef}>
      {projects.concat(projects).map((p, i) => (
        <div className="project-card" key={i} style={{ backgroundColor: p.color }}>
          <div className="card-info">
            <p className="card-type">CASE STUDY</p>
            <h2><strong>{p.title}</strong> {p.desc}</h2>
            <span className="card-date">{p.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
