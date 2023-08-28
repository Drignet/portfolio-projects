const continueBtn = document.querySelector('#continue-btn');


continueBtn.addEventListener("click", () => {
  document.querySelector(".wrapper").classList.add("transition-effect")
  setTimeout(() => {
    document.location.href = "task.html";
  }, 300);
});

