document.getElementById("startgame").addEventListener("click", function(e){
    e.preventDefault()
	document.getElementsByClassName('intro')[0].style.display = "none";
	var viewportHeight = Number(window.innerHeight,10),
    viewportWidth = Number(window.innerWidth,10),
    scoreSign = document.createElement('div'),
	setCilantro = function() {
        var randX = Math.random() * viewportWidth,
            randY = Math.random() * viewportHeight,
            cilDiv = document.createElement('div'),
			totScore = Number(document.getElementById('scoreNum').innerHTML,10),
			div3 = Number(document.getElementById('scoreNum').innerHTML,10) % 3;
			
		cilDiv.className = 'cilantro';
        document.getElementsByTagName('body')[0].appendChild(cilDiv);
        cilDiv.style.left = randX + 'px';
        cilDiv.style.top = randY + 'px';
        setTimeout(function(){cilDiv.style.display = "none"}, 3000);
        cilDiv.onclick = function(e){
        		var scoreDiv = document.getElementById('scoreNum');
        		this.className += " on";
	        	setTimeout(function(){cilDiv.style.display = "none";}, 500);
	        	score = Number(scoreDiv.innerHTML,10);
	        	score = score + 1;
	        	scoreDiv.innerHTML = score;		        
	    };
	   if (div3 === 0  && totScore != 0) {
	   		var parDiv = document.createElement('div');
		   	parDiv.className = 'parsley';
		   	console.log(parDiv);
		    document.getElementsByTagName('body')[0].appendChild(parDiv);
			parDiv.style.left = randX + 'px';
			parDiv.style.top = randY + 'px';
			parDiv.onclick = function(e){
        		var scoreDiv = document.getElementById('scoreNum');
        		this.className += " on";
	        	setTimeout(function(){parDiv.style.display = "none";}, 500);
	        	score = Number(scoreDiv.innerHTML,10);
	        	score = score -10;
	        	scoreDiv.innerHTML = score;		        
	    };
		   
	   }
	   

    };
document.getElementsByTagName('body')[0].appendChild(scoreSign),
scoreSign.innerHTML = "Score: <span id='scoreNum'>0</span>",
scoreSign.id = "score"

setInterval(setCilantro, 100);
});

