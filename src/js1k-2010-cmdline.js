/* Setup the variable container */
/* Uses a single character to save space as it's reused a lot. _ was chosen for low collision probability with eval'ed scripts */
_={};

/* Setup a handle and styles for the canvas object on the page */
_.c=document.body.children.c;
_.c.id="_c";
_.c.style.backgroundColor="#000";

_s=[''];
_.u=3000; // The height and width of the canvas; setting this too big causes initiation errors with the canvas 
_.x=4; // X-position of the cursor
_.y=30; // Y-position of the cursor
_.z=0; // Current line number

_.v=function(k){
	$.fillStyle=k
};

//  Setup the height and width of the canvas
_.c.height=_.c.width=_.u;

//  Grab the 2D context of the canvas object
$=_.c.getContext("2d");

//  Prints a newline with the prompt and pushes the cursor to the right position
_.n=function(t){
	t=t||">> ";
	_.x=4;
	_.y+=20;
	$.fillText(t,_.x,_.y);
	_.x+=30
};

//  Writes text onto the canvas
_.w=function(m){
	_.v(_.g);
	$.fillText(m,_.x,_.y);
	_s[_.z]+=m;
	_.x+=$.measureText(m).width
};

//  The repaint function used for registering deletes
_.h=function(e){
	_.v('#000');
	_.x=34;
	$.fillRect(_.x,_.y-15,_.u,_.y);
	_s[_.z]='';
	_.w(e.slice(0,e.length-1))
};

//  Converts keystrokes to characters across all supported browsers
_.d=function(e){
	_k=e.charCode||e.keyCode;
	_k==13?_q._(_s[_.z]):_k==8?'':_.w(String.fromCharCode(_k));
	return false
};

//  Evals the expressions given; prints error messages
_q={
	_:function(__){
		// Setup the easter egg
		if(__=='c0w')
			_.g='#'+parseInt(Math.random()*0xFFF).toString(16); // Change font color to a random color
		else if(__!=''){
			// Run the expression
			try{
				_.n(eval(__))
			}catch(e){
				// Output an error message about any problems
				_.v('#f00');
				_.n("Bad expression: "+e.message);
				_.v(_.g)
			}
		}
		_s[_.z+=1]='';
		_.n()
	}
};

/* Setup the keypress and keydown captures */
this.onkeypress=_.d;
this.onkeydown=function(e){
	/* Capture the backspace key */
	if(e.keyCode==8){
		e.preventDefault(); // Stops the default action from happening; which is go back 1 page in history
		_.h(_s[_.z]) // Delete a character from the line's history; repaint with the new text
	}
};

_.v(_.g='#3AD');

/* Print out the title/subtitle text */
$.font="9px verdana";
$.fillText("mmm tasty command line",5,29);
$.font="15px verdana";
$.fillText("JS interactive shell",5,17);

/* Print a newline for the first prompt */
_.n();

