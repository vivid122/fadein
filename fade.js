
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"origin.json",
		dataType:"json",
		success:function(data){
			var html='';
			html+='<div class="items"><b>'+data[0].year+'</b>'+'  '+'<span><b>'+data[0].tag+'</b></span></div>';
			var i;
			for(i=1;i<data.length;i++){
				html+='<div class="items">'+'<span class="date">'+data[i].date+'</span>'+'<b>'+' '+data[i].name+'</b></div>';	
			}
			$(".line").height(i*60).css("display","none").slideDown(600);
			$(".contain").html(html);
			$(".items").addClass("on").each(function(index){
				$(this).delay(200*index).fadeIn(600);
			});
		}
	});
});
