// JavaScript Document

$(document).ready(function(){
	
	// Good Stuff
	
	
	$('body').hide('fast').show('slow');
	
	
	
	$('img').click(function(){
		
		$(this).transition({
			perspective: '100px',
  rotate3d: '1,1,0,180deg'

			}, 1000, 'snap' ).transition(
					x:200px
			).hide();

	
	
	
	$('img').transition({
		rotate: '45deg' 
		
		});
		});
	
});