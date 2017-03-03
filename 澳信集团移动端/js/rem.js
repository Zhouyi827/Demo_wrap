/*  ..Write : - By Week  Time : 2017-01-22   ..  */
/*  Root Em  */
(function(){
	window.onresize = resizeFn;
	
	function resizeFn(){
		var html = document.documentElement;
		console.log(getComputedStyle(html).fontSize)
	};
})();
function ImgSizeFn(){
	
}
/*(function(){
	var html = document.documentElement;
	console.log(getComputedStyle(html).fontSize)
})();*/