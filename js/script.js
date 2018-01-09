$(function(){
var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-400},500,function(){			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},2000);
});
