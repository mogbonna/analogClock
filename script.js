const clock = document.querySelector(".clock");

function createClock() {
  // Remove existing elements
  const existingElements = clock.querySelectorAll(".digit, .tick");
  existingElements.forEach((el) => el.remove());

  const radius = clock.offsetWidth / 2;
  const digitRadius = radius - 40; // Radius for digit placement
  const tickRadius = radius - 20; // Radius for tick marks

  // Create tick marks
  for (let i = 0; i < 12; i++) {
    const tick = document.createElement("div");
    tick.classList.add("tick");

    const angle = (i - 3) * (Math.PI / 6);
    const x = radius + tickRadius * Math.cos(angle);
    const y = radius + tickRadius * Math.sin(angle);

    tick.style.left = `${x}px`;
    tick.style.top = `${y}px`;
    tick.style.transform = `translate(-50%, -50%) rotate(${i * 30}deg)`;

    clock.appendChild(tick);
  }

  // Digit positions
  const digits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  digits.forEach((digit, index) => {
    // Calculate position using trigonometry
    const angle = (index - 3) * (Math.PI / 6);
    const x = radius + digitRadius * Math.cos(angle);
    const y = radius + digitRadius * Math.sin(angle);

    // Create digit element
    const digitEl = document.createElement("div");
    digitEl.classList.add("digit");
    digitEl.textContent = digit === 12 ? 12 : digit % 12;

    // Position the digit
    digitEl.style.left = `${x}px`;
    digitEl.style.top = `${y}px`;
    digitEl.style.transform = `translate(-50%, -50%) rotate(${index * 30}deg)`;

    clock.appendChild(digitEl);
  });
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Initial setup
createClock();
updateClock();

// Reposition on resize
window.addEventListener("resize", createClock);

// Update clock every second
setInterval(updateClock, 1000);
