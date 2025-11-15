// Smooth Reveal
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

//Skills Hover
const skills = document.querySelectorAll("#skills li");
const skillInfo = document.getElementById("skill-info");

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    skillInfo.textContent = skill.getAttribute("data-info");
  });

  skill.addEventListener("mouseleave", () => {
    skillInfo.textContent = "";
  });
});

//Dark Mode Toggle
const toggle = document.createElement("div");
toggle.className = "toggle-btn";
toggle.textContent = "Dark Mode";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});
