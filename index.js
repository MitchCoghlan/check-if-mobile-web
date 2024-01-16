let details = navigator.userAgent;

function checkIfMobile() {
  let regexp = /Android|iPhone|Kindle|iPad/i;

  let isMobile = regexp.test(details);

  if (isMobile) {
    document.getElementById("results").innerHTML = "Mobile!";
  } else {
    document.getElementById("results").innerHTML = "Not mobile!";
  }
}

checkIfMobile();
