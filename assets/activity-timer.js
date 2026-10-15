(function () {
  window.createActivityTimer = function (display, onTimeUp) {
    let intervalId = null;
    let remainingSeconds = 0;
    let started = false;
    let expired = false;

    function render() {
      display.textContent = `Time: ${remainingSeconds} seconds`;
      display.classList.toggle("is-low", remainingSeconds <= 10);
    }

    function stop() {
      clearInterval(intervalId);
      intervalId = null;
      started = false;
    }

    return {
      reset(seconds) {
        stop();
        remainingSeconds = seconds;
        expired = false;
        render();
      },
      start() {
        if (started || expired) return;
        started = true;
        intervalId = setInterval(() => {
          remainingSeconds -= 1;
          render();
          if (remainingSeconds <= 0) {
            stop();
            expired = true;
            onTimeUp();
          }
        }, 1000);
      },
      stop,
      get expired() {
        return expired;
      }
    };
  };
})();
