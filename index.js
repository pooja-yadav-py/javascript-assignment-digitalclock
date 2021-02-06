
	//this function set current date and time.....
	 function clockTiming(){
		let date = new Date();
	    let hours=date.getHours();
	    let min =date.getMinutes();
	    let sec =date.getSeconds();
	      if(hours>12){
		     hours=hours-12;
	      }
	      if(hours==0){
		     hours=12;
	      }
	      if(hours<10){
		     hours="0"+hours;
	      }
	      if(min<10){
		     min="0"+min;}
	      if(sec<10){
		     sec="0"+sec;
	      }
	    document.getElementById("time").innerHTML = `${hours}:${min}:${sec}`;
	   let year = date.getFullYear();
	   let month = date.getMonth()+1;
	   let todaydate =date.getDate();
	   document.getElementById("date").innerHTML = `${todaydate}/${month}/${year}`;
	      }
	      //show current date and time on page load
	      clockTiming();
          
	      let startTime=setInterval(clockTiming,1000);
          function startButton(){
		  startTime = setInterval(clockTiming,1000);
	      }
	      function stopButton(){
	   	  clearInterval(startTime);
	      }
