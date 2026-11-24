// Set your destination URL here before publishing.
const destination = 'https://jayakaya99b.com/RFJK-FB003';
const button = document.getElementById('claim');
const notice = document.getElementById('notice');
button.addEventListener('click', () => {
  if (!destination) {
    notice.textContent = 'Destination URL is not configured yet.';
    notice.hidden = false;
    return;
  }
  window.location.assign(destination);
});

// META PIXEL LEAD TRACKING

document.addEventListener("DOMContentLoaded", function () {

  const claimButton = document.getElementById("claim");

  if (claimButton) {

    claimButton.addEventListener("click", function () {

      if (typeof fbq === "function") {

        fbq(
          "trackSingle",
          "1833476494361737",
          "Lead",
          {
            content_name: "Join & Claim",
            content_category: "Landing Page",
            button_name: "Claim Button"
          }
        );

        console.log("Meta Pixel: Lead triggered");

      }

    });

  }

});
