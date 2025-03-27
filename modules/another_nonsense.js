const numRuns = 5;
let runCount = 0;

const intervalId = setInterval(() => {
  if (runCount < numRuns) {
    document.body.innerHTML += '<p>My bike is better!</p>';
    runCount++;
  } else {
    clearInterval(intervalId);
  }
}, 1000);