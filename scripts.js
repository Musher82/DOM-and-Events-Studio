function init() {

    document.getElementById("takeoff").addEventListener("click", function (event) {
        if(window.confirm("Confirm the shuttle is ready for take off.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000
        };
             });

    document.getElementById("landing").addEventListener("click", function (event) {
        window.confirm("The shuttle is landing. Landing gear engaged.")
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        });
    
    document.getElementById("missionAbort").addEventListener("click", function (event) {
        if(window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
            });

      let position = 0
      rocket.style.position = 'relative'
      spaceShuttleHeight.innerHTML = 0
  

    document.getElementById("up").addEventListener("click", function (event) { 
        position += 10;
        document.getElementById("rocket").style.bottom = position + 'px';
        let height = 0
         function add() {
            height += 10000
            console.log(height)
        };
        add()
        spaceShuttleHeight.innerHTML = height
       
    });

    document.getElementById("down").addEventListener("click", function (event) { 
        position += 10;
        document.getElementById("rocket").style.top = position + 'px'
        spaceShuttleHeight.innerHTML = -10000
        event.stopPropagation()
    });

    document.getElementById("right").addEventListener("click", function (event) { 
        position += 10;
        document.getElementById("rocket").style.marginLeft = position + 'px'
        
    });

    document.getElementById("left").addEventListener("click", function (event) { 
        position += 10;
        document.getElementById("rocket").style.marginRight = position + 'px'
        
    });
    
}
window.addEventListener("load", init)