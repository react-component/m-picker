const desiredFrames = 60;
const millisecondsPerSecond = 1000;
let running = {};
let counter = 1;

const Animate = {
  // A requestAnimationFrame wrapper / polyfill.
  requestAnimationFrame: (() => {
    const requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    return (callback, root) => {
      requestFrame(callback, root);
    };
  })(),

  // Stops the given animation.
  stop(id) {
    const cleared = running[id] !== null;
    if (cleared) {
      running[id] = null;
    }
    return cleared;
  },

  // Whether the given animation is still running.
  isRunning(id) {
    return running[id] !== null;
  },

  // Start the animation.
  start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, r) {
    const start = Date.now();
    let lastFrame = start;
    let percent = 0;
    let dropCounter = 0;
    const id = counter++;
    let root = r;
    if (!root) {
      root = document.body;
    }

    // Compacting running db automatically every few new animations
    if (id % 20 === 0) {
      const newRunning = {};
      for (const usedId in running) {
        if (running.hasOwnProperty(usedId)) {
          newRunning[usedId] = true;
        }
      }
      running = newRunning;
    }

    // This is the internal step method which is called every few milliseconds
    const step = (virtual) => {
      // Normalize virtual value
      const render = virtual !== true;
      // Get current time
      const now = Date.now();

      // Verification is executed before next animation step
      if (!running[id] || (verifyCallback && !verifyCallback(id))) {
        running[id] = null;
        if (completedCallback) {
          completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, false);
        }
        return;
      }

      // For the current rendering to apply let's update omitted steps in memory.
      // This is important to bring internal state constiables up-to-date with progress in time.
      if (render) {
        const droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
        for (let j = 0; j < Math.min(droppedFrames, 4); j++) {
          step(true);
          dropCounter++;
        }
      }

      // Compute percent value
      if (duration) {
        percent = (now - start) / duration;
        if (percent > 1) {
          percent = 1;
        }
      }

      // Execute step callback, then...
      const value = easingMethod ? easingMethod(percent) : percent;
      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
        running[id] = null;
        if (completedCallback) {
          completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, percent === 1 || duration === null);
        }
      } else if (render) {
        lastFrame = now;
        Animate.requestAnimationFrame(step, root);
      }
    };

    // Mark as running
    running[id] = true;
    // Init first step
    Animate.requestAnimationFrame(step, root);
    // Return unique animation ID
    return id;
  },
};

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.
export function easeOutCubic(pos) {
  return (Math.pow((pos - 1), 3) + 1);
}

export function easeInOutCubic(p) {
  let pos = p;
  pos /= 0.5;
  if (pos < 1) {
    return 0.5 * Math.pow(pos, 3);
  }
  return 0.5 * (Math.pow((pos - 2), 3) + 2);
}

export {Animate};
