/**
 * Elevators 
 */

(function() {
    
    var floors = document.getElementsByClassName("floor");
    var floorHeight = 80;

    for (var i=0; i < floors.length; i++) {
        floors[i].onclick = function(event){
            
            var floor = event.target;
            var floorNumber = parseInt(floor.dataset.floor);
            var elevators = Array.prototype.filter.call(document.getElementsByClassName("elevator"),function(ele){ return ele});

            elevators.sort(function(a, b) {
                return Math.abs(floorNumber - a.dataset.elevator) - Math.abs(floorNumber - b.dataset.elevator);
            });
            
            elevators[0].style.marginTop = ((floorHeight * -1 * floorNumber) - floorHeight) + "px";
            elevators[0].dataset.elevator = floorNumber;
        }
    };
    
 })();