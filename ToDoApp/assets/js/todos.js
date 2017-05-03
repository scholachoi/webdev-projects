//Cross off todo by clicking on li
//Add event listeners to ul and use on() instead of click() so events fire for new lis
//Using a class with toggle is simpler than checking with if/else 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on a span ("X") to fadeout and remove its parent, the li
$("ul").on("click", "span", function(event){
	//fadeout doesn't remove; remove after fadeout is finished as callback function
	$(this).parent().fadeOut(500, function(){ //this refers to span here
		$(this).remove(); //this refers to li here
	});
	//stops other events from firing
	event.stopPropagation();
});

//Add new to-do by hitting enter in text box
$("input").keypress(function(event){
	if (event.which===13) {
		//get value from text box
		var todoText = $(this).val();
		//create new li from that value and append to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		//clear out the text box
		$(this).val("");
	}
});

//Toggle input box by adding click listener to the plus sign
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});