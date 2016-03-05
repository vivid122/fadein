
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"origin.json",
		dataType:"json",
		success:function(data){
			var html='';
			html+='<div class="items"><h3>'+data[0].year+'</h3></div><div class="items"><h3>'+data[0].tag+'</h3></div>';
			var i=0;
			if(i<data.length){
				i++;
				html+='<div class="items">'+'<span class="date">'+data[i].date+'</span>'+'<h4>'+data[i].name+'</h4></div>';	
			}
			$(".items").each(function(index){
				$(this).delay(200*index).fadeIn(600);
			});
		}
	});
});