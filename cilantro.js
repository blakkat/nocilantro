var viewportHeight = Number(window.innerHeight,10),
    viewportWidth = Number(window.innerWidth,10),
    scoreSign = document.createElement('div'),
	setCilantro = function() {
        var randX = Math.random() * viewportWidth,
            randY = Math.random() * viewportHeight,
            cilDiv = document.createElement('div');

        cilDiv.className = 'cilantro';
        document.getElementsByTagName('body')[0].appendChild(cilDiv);
        cilDiv.style.left = randX + 'px';
        cilDiv.style.top = randY + 'px';
        cilDiv.onclick = function(e){
        		var scoreDiv = document.getElementById('scoreNum');
        		this.className += " on";
	        	setTimeout(function(){cilDiv.style.display = "none";}, 500);
	        	score = Number(scoreDiv.innerHTML,10);
	        	score = score + 1;
	        	scoreDiv.innerHTML = score;		        
	    };

    };
document.getElementsByTagName('body')[0].appendChild(scoreSign),
scoreSign.innerHTML = "Score: <span id='scoreNum'>0</span>",
scoreSign.id = "score"

setInterval(setCilantro, 200);
