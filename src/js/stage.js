import $ from "jquery";

$(_ => {
	$(".tabs-tab").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs");

		$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".tabs-content[data-id='"+id+"']").addClass("active");
	});


	$("g.tabs-tab").hover(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs");

		$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".tabs-content[data-id='"+id+"']").addClass("active");
	});


    var item = $('.tabs-tab');
    var t = 0; 
    var sw_tabs_timer1; 
    
    const startTimer = () => {
        sw_tabs_timer1 = window.setInterval(switchTabs, 1000);
    }       

    const stopTimer = () => {
        clearInterval(sw_tabs_timer1);
    }
    $(".tabs").mouseleave(() => {
        startTimer();
    })
    
     $(".tabs").mouseenter(()=>{
       stopTimer();
     });

    startTimer();
    
    function switchTabs() {
        if (t > 9) t = 0;

        console.log(t, $(item[t]))

          $(item[t]).trigger("click");
        t++;
    }
    





});