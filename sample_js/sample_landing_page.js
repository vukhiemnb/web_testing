document.addEventListener("DOMContentLoaded", function () {
  const getStartedBtn = document.getElementById("get-started-btn");
  const loadingScreen = document.getElementById("loading-screen");

  getStartedBtn.addEventListener("click", function (e) {
    console.log("run");
    e.preventDefault();
    loadingScreen.classList.remove("hidden");

    // Simulate a delay (e.g., API call or page load)
    setTimeout(function () {
      // Hide loading screen after 3 seconds
      loadingScreen.classList.add("hidden");
      // You can add your actual functionality here
      // For example, redirect to another page:
      // window.location.href = 'your-destination-page.html';
    }, 30);
  });
});
