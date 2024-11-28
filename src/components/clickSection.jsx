import React from 'react'

export default function clickSection() {
     // script.js

  let currentSection = 0;
  const sections = document.querySelectorAll(".section");

  function showSection(index) {
    if (index < 0 || index >= sections.length) return;

    sections.forEach((section, i) => {
      section.style.top = `${(i - index) * 100}vh`;
    });
    currentSection = index;
  }

  function handleWheelEvent(event) {
    if (event.deltaY > 0) {
      // Scrolling down, show next section
      if (currentSection < sections.length - 1) {
        showSection(currentSection + 1);
      }
    } else if (event.deltaY < 0) {
      // Scrolling up, show previous section
      if (currentSection > 0) {
        showSection(currentSection - 1);
      }
    }
  }

  // Handle click event to move to next section
  sections.forEach((section, index) => {
    section.addEventListener("click", () => {
      if (currentSection < sections.length - 1) {
        showSection(currentSection + 1);
      }
    });
  });

  // Listen for scroll events (mouse wheel)
  document.addEventListener("wheel", handleWheelEvent);

  // Initialize first section
  showSection(0);
  return (
    <div>
        <div class="section" id="section1">
        <h1>Section 1</h1>
        <p>This is section 1</p>
        <div className="image-container">
          <img src="/bg-img.png" alt="bg" />
        </div>
      </div>
      <div class="section" id="section2">
        <h1>Section 2</h1>
        <p>This is section 2</p>
      </div>
      <div class="section" id="section3">
        <h1>Section 3</h1>
        <p>This is section 3</p>
      </div>
      <div class="section" id="section4">
        <h1>Section 4</h1>
        <p>This is section 4</p>
      </div>
      {/* <section class="image-section">
        <img src="/org.png" alt="Image 1" class="animate-from-left" />
        <img src="/org.png" alt="Image 3" class="animate-from-top" />
        <img src="/org.png" alt="Image 4" class="animate-from-bottom" />
        <img src="/org.png" alt="Image 2" class="animate-from-right" />
      </section> */}
    </div>
  )
}
