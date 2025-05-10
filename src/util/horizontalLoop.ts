import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

export function horizontalLoop(
  items: HTMLElement[],
  {
    speed = 1,
    repeat = -1,
    draggable = true,
    paused = false,
    padding = 0
  }: {
    speed?: number;
    repeat?: number;
    draggable?: boolean;
    paused?: boolean;
    padding?: number;
  } = {}
) {
  const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth + padding, 0);
  const loopTL = gsap.timeline({ repeat, paused });

  items.forEach((item, i) => {
    const duration = (item.offsetWidth + padding) / speed;
    const distance = totalWidth;

    loopTL.to(
      item,
      {
        x: `-=${distance}`,
        duration,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -distance)
        }
      },
      0
    );
  });

  if (draggable) {
    const proxy = document.createElement("div");
    let drag = Draggable.create(proxy, {
      type: "x",
      trigger: items[0].parentElement,
      inertia: true,
      onDrag() {
        loopTL.progress(gsap.utils.wrap(0, 1, this.x / -totalWidth));
      },
      onThrowUpdate() {
        loopTL.progress(gsap.utils.wrap(0, 1, this.x / -totalWidth));
      }
    })[0];

    // Pause auto scroll on drag
    loopTL.eventCallback("onUpdate", () => {
      if (drag.isDragging) loopTL.pause();
    });
  }

  return loopTL;
}
