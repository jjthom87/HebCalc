$(document).ready(function(){

	$('#container').masonry({
	  isAnimated: true,
	  animationOptions: {
	    duration: 750,
	    easing: 'linear',
	    queue: true
	  }
	});

	$('#enterDate').on('click', function(){
		$('#dateField').remove();
		var date = $('#convDateInput').val();
		var splitDate = date.split('-');
		var gy = parseInt(splitDate[0]);
		var gm = parseInt(splitDate[1]);
		var gd = parseInt(splitDate[2]);
		var th = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,26,27,28,29,30];
		var st = [1,21,31];
		var nd = [2,22];
		var rd = [3,23]

		$.ajax({
			type: 'GET',
			url: 'http://www.hebcal.com/converter/?cfg=json&gy=2011&gm=6&gd=2&g2h=1'+'&gy='+gy+'&gm='+gm+'&gd='+gd+'',
			}).done(function(results){
				var div = $('<div id="dateField">');

				var eng = $('<p>');

				if(th.indexOf(results.hd) > -1){
					eng.text(results.hd + 'th of ' + results.hm + ', ' + results.hy);
				} else if (st.indexOf(results.hd) > -1){
					eng.text(results.hd + 'st of ' + results.hm + ', ' + results.hy);
				} else if (nd.indexOf(results.hd) > -1){
					eng.text(results.hd + 'nd of ' + results.hm + ', ' + results.hy);
				} else if (rd.indexOf(results.hd) > -1){
					eng.text(results.hd + 'rd of ' + results.hm + ', ' + results.hy);
				}

				var heb = $('<p>');
				heb.text(results.hebrew);

				div.append(eng).append(heb);
				$('.dateItem').append(div);
		});
	})
});