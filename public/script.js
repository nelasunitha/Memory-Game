
var minutesLabel = "minutes";
      var secondsLabel = "seconds";
      var totalSeconds = 0;
      let interval = null;
      setInterval(setTime, 1000);

      function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
      }
      function stopTimer() {
        clearInterval(interval);
      }

      function pad(val) {
        var valString = val + "";
        if (valString.length < 2) return "0" + valString;
        else return valString;
      }