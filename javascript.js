        var unixTime = 1726678800; // Replace this with your Unix time
        var date = new Date(unixTime * 1000);
        var hours = date.getHours().toString().padStart(2, '0'); 
        var minutes = date.getMinutes().toString().padStart(2, '0'); 
        var timeString = hours + ':' + minutes;

        var timeEl = document.getElementById('timeEl');
        timeEl.textContent = timeString;