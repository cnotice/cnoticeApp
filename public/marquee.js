const scrollStates = new WeakMap();
const lastTapTimes = new WeakMap();

function marqueeClick(marquee) {
  const container = marquee.querySelector('.marqueeContainer');
  const text = marquee.querySelector('.marqueeText');
  console.log(text);
  const direction = container.getAttribute('data-direction');
  const now = Date.now();
  const lastTap = lastTapTimes.get(text) || 0;
  const doubleTap = now - lastTap < 300; 
  lastTapTimes.set(text, now);

  let state = scrollStates.get(text);
  if (!state) {
    state = {
      isScrolling: false,
      currentX: 0,
      currentY: 0,
      rafId: null,
      startTime: null
    };
    scrollStates.set(text, state);
  }

  const speed = 10;

  function shouldScroll() {
    if (direction === 'vertical') {
      return text.scrollHeight > container.clientHeight;
    } else {
      return text.scrollWidth > container.clientWidth;
    }
  }

  function animateScroll(timestamp) {
    if (!state.startTime) state.startTime = timestamp;
    const elapsed = (timestamp - state.startTime) / 1000;
    state.startTime = timestamp;

    const delta = elapsed * speed;

    if (direction === 'vertical') {
      state.currentY -= delta;
      const maxScroll = text.scrollHeight;
      if (-state.currentY >= maxScroll) {
        state.currentY = container.clientHeight;
      }
      text.style.transform = `translateY(${state.currentY}px)`;
    } else {
      state.currentX -= delta;
      const maxScroll = text.scrollWidth;
      if (-state.currentX >= maxScroll) {
        state.currentX = container.clientWidth;
      }
      text.style.transform = `translateX(${state.currentX}px)`;
    }
    state.rafId = requestAnimationFrame(animateScroll);
  }

  function stopScroll() {
    state.isScrolling = false;
    cancelAnimationFrame(state.rafId);
  }

  function startScroll() {
    state.isScrolling = true;
    state.startTime = null;
    state.rafId = requestAnimationFrame(animateScroll);
  }

  if (!shouldScroll()) return;

if (doubleTap) {
const url = marquee.dataset.url;
if (url) {
window.location.href = url;
}
     stopScroll();
     state.currentX = 0;
     state.currentY = 0;
    text.style.transform = `translate(0, 0)`;
return;
}

  // Toggle scroll on single tap
  if (state.isScrolling) {
    stopScroll();
  } else {
    startScroll();
  }
}

// Auto-start with delay
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".marqueeMain").forEach(el => {
        marqueeClick(el);
});
  }, 2000); // Delay in ms
});