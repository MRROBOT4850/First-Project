var videos = document.querySelectorAll('video');
for(var i=0; i<videos.length; i++)
   videos[i].addEventListener('play', function(){pauseAll(this)}, true);


function pauseAll(elem){
	for(var i=0; i<videos.length; i++){
		//Is this the one we want to play?
		if(videos[i] == elem) continue;
		//Have we already played it && is it already paused?
		if(videos[i].played.length > 0 && !videos[i].paused){
		// Then pause it now
		  videos[i].pause();
		}
	}
  }

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
