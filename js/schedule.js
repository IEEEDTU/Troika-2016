$(document).ready(function() {
	var fromDate, toDate, temp;
	
	//For the time when page loads.
	fromDate = 1;
	toDate = 19;
	animateDate(fromDate, toDate);
	fromDate = toDate;
	
	//Scrolling Plugin.
 	$('#myContainer').multiscroll({
 		sectionsColor: ['#5ad0ff', '#ffffff', '#ffdd00', '#5ad0ff'], // bgcolors of section.
     	anchors: ['feb19', 'feb20', 'feb21', 'misc'],
     	menu: '#menu',
        navigation: true,
    	navigationTooltips: ['Feb 19', 'Feb 20', 'Feb 21', 'Misc'],
		

     	afterLoad: function(anchor, index){
			temp = getDate();
			if(temp !== undefined) {
				toDate = temp;
			}
            animateDate(fromDate, toDate);
			fromDate = toDate;     	
        }
    });
});

var getDate = function() {
    return $(".ms-left").children(".active").data("to_date");
};

var animateDate = function(fromDate, toDate) {
	if(fromDate < toDate){
		for(var i=fromDate; i < toDate; i++){
			$('.date').animate({top: "-=100"}, 100);
		}
	} else if(fromDate > toDate) {
		for(var j=fromDate; j > toDate; j--){
			$('.date').animate({top: "+=100"}, 100);
		}
	}
};
