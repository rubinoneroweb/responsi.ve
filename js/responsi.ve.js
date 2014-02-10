

$('.tab').wrapAll('<div class="tab-container">');
$(".tab").first().show();
$(".tab-container").addClass("panel");
$(".tab-container").parent().prepend("<ul class='tab-nav'></ul>");





$(".tab").each(function() {
	
		
	 var el = $(this);
	 $("<li/>").append($("<a>", { 
	 	"text"   	: el.data("title"),
	 	"href"		: "#" + el.attr("id") 
	 })).appendTo(".tab-nav");
	});

$(".tab-nav li").first().addClass("tab-active");
enable_tab();


function enable_tab() {
	
	

	$("ul.tab-nav li").click(function() {

		$("ul.tab-nav li").removeClass("tab-active"); //Rimuovi ogni classe "active"
        $(this).addClass("tab-active"); //E aggiungila solo a quella su cui ho cliccato
        $(".tab").hide(); //Nascondi tutti i contenuti delle tab
 		/*$(this).remove();
 		$(".tab-nav").append($(this));
 		$(this).click(enable_tab());*/
        var activeTab = $(this).find("a").attr("href"); //Trova l'href per identificare in modo univoco la tab ed il contenuto
        $(activeTab).fadeIn(); //Mostrami quest'ultimo con effetto di fadeIn
        return false;
	});
}