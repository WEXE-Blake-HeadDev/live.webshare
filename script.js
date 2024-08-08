(function updateTime() {
    var time = (new Date()).toLocaleString({
      hour12: true,
    });
    
    document.getElementById('current_time').innerHTML = time;
    
    requestAnimationFrame(updateTime);
  })();