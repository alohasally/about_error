$(document).ready(
	function(){
		var s=0;
		var sc=0;
		var w=$("div.reauto").width()/2;
		var n=0;
		var m=1;
		
		setInterval(function(){
			n=$("div.reauto").offset().left;
			if(s<4){
					  $("div.reauto").animate({"left":-100*s+"%"},2000);
						s+=m;
						sc=s;
				}else{
					n=0;
					$("div.reauto").css({"left":n},100);
					s=1;
					sc=s;
					}
			  if(n<-w){
					
				}
			},4000);
			
			$("p.after").click(
				function(){
					m=0;
					sc++;
					s=sc;
					console.log("자동s값:"+s);
					if(sc>3){
						n=0;
						s=0;
						sc=0;
						$("div.reauto").css({"left":n},100);
						console.log("클릭sc값:"+sc);
					}else{
						$("div.reauto").animate({"left":"-=100%"},500);
						console.log("클릭sc값:"+sc);
						
					}
				}
			);
			
			$("p.before").click(
				function(){
					m=0;	
					console.log("자동s값:"+s);
					if(sc<1){
						n=0;
						s=0;
						sc=0;
						$("div.reauto").css({"left":n},100);
						console.log("클릭sc값:"+sc);
					}else{
						$("div.reauto").animate({"left":"+=100%"},500);
						console.log("클릭sc값:"+sc);
					  sc--;	
						s=sc;
					}
				}
			);
			
			$("div.reauto").mouseenter(
				function(){
					m=1;
				}
			);
			
	}
);
