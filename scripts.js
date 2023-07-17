// Write your JavaScript code here.
// Remember to pay atten""tion to page loading!
window.addEventListener("load", function() {

  let rocketPosX = 0;
  let rocketPosY = 0;
  let altitude = 0;


  //Buttons
  const takeoffButton = document.getElementById('takeoff');
  const landButton = document.getElementById('landing');
  const abortButton = document.getElementById('missionAbort');

  //Areas
  const flightStatus = document.getElementById('flightStatus');

  //Background
  const shuttleBackground = document.getElementById('shuttleBackground');

  //Height
  const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

  //Rocket image
  const rocket = document.getElementById('rocket');

  takeoffButton.addEventListener("click", function() {

    let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
    
    if(shouldTakeOff) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      let altitude = 10000;
      spaceShuttleHeight.innerHTML = altitude;
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + 'px';

    }
  });

  landButton.addEventListener("click", function() {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed";
    resetRocket();


  });

  abortButton.addEventListener("click", function() {
    let shouldAbort = confirm("Confirm that you want to abort mission.");
    
    if(shouldAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      resetRocket();

    }

  });

  //use Event delegstion for directional buttons
  this.document.addEventListener("click", function(event) {
    let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

    if(event.target.id === "left" && rocketPosX > -(backgroundWidth / 2 - 40)){
      rocketPosX -= 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if(event.target.id === "right" && rocketPosX < (backgroundWidth / 2 - 40)){
      rocketPosX += 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if(event.target.id === "up" && altitude < 250000){
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude += 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
    if(event.target.id === "down" && altitude > 0){
      rocketPosY -= 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude -= 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }


  });

  function resetRocket() {
    shuttleBackground.style.backgroundColor = "green";
    let altitude = 0;
    spaceShuttleHeight.innerHTML = altitude;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + 'px';
    rocket.style.marginBottom = rocketPosY + 'px';

  }


});

        
        