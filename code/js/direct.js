$(document).ready(function() {

	$("#Toggle-Option").click(function() {
		if ("#Toggle-Option".click){
				$(".option-toggle").removeClass("option-close");
                $(".option-toggle").toggleClass("option-open");
                $(".option-toggle").toggleClass("hidden-xs");
                $(".option-toggle").toggleClass("hidden-sm");
		}
        else{
            $(".menuBar").removeClass("MobileOpen");
            $(".menuBar").toggleClass("MobileClose");  
        }
    });
})