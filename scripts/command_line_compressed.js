_={};_.c=document.body.children.c;_.c.id="_c";_.c.style.backgroundColor="#000";_s=[''];_.u=3000;_.x=4;_.y=30;_.z=0;_.v=function(k){$.fillStyle=k};_.c.height=_.c.width=_.u;$=_.c.getContext("2d");_.n=function(t){t=t||">> ";_.x=4;_.y+=20;$.fillText(t,_.x,_.y);_.x+=30};_.w=function(m){_.v(_.g);$.fillText(m,_.x,_.y);_s[_.z]+=m;_.x+=$.measureText(m).width};_.h=function(e){_.v('#000');_.x=34;$.fillRect(_.x,_.y-15,_.u,_.y);_s[_.z]='';_.w(e.slice(0,e.length-1))};_.d=function(e){_k=e.charCode||e.keyCode;_k==13?_q._(_s[_.z]):_k==8?'':_.w(String.fromCharCode(_k));return false};_q={_:function(__){if(__=='c0w')_.g='#'+parseInt(Math.random()*0xFFF).toString(16);else if(__!=''){try{_.n(eval(__))}catch(e){_.v('#f00');_.n("Bad expression: "+e.message);_.v(_.g)}}_s[_.z+=1]='';_.n()}};this.onkeypress=_.d;this.onkeydown=function(e){if(e.keyCode==8){e.preventDefault();_.h(_s[_.z])}};_.v(_.g='#3AD');$.font="9px verdana";$.fillText("mmm tasty command line",5,29);$.font="15px verdana";$.fillText("JS interactive shell",5,17);_.n();