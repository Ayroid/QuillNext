document.addEventListener("DOMContentLoaded", function () {
  const observeElements = (elements, animationClass, delay = 1000) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          setTimeout(() => {
            entry.target.classList.remove("hidden");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => {
      element.classList.add("hidden");
      observer.observe(element);
    });
  };

  // Observe service cards
  const serviceCards = document.querySelectorAll(".services-card");
  observeElements(serviceCards, "animate-up");

  // Observe stats cards
  const statCards = document.querySelectorAll(".stats-card");
  observeElements(statCards, "animate-up");

  // Observe service two cards
  const serviceTwoCards = document.querySelectorAll(".services-two-card");
  observeElements(serviceTwoCards, "animate-up");

  // Observe team members
  const teamMembers = document.querySelectorAll(".team-member");
  observeElements(teamMembers, "team-member-animate-up");
});
