$("#menu").click(function (){
	var element = $(this).siblings("nav");

	if($(element).hasClass("mostrar")){
		$(element).removeClass("mostrar");
	} else {
		$(element).addClass("mostrar")
	}
});