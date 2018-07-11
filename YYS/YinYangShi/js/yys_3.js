+function () {
	//	页面刷新事件
	window.onload = function () {
		$(".door1").css("right", "42%");
		$(".door2").css("left", "58%");
		$(".person").addClass("fade");
		$(".logo").addClass("fade");
		$(".slogon").addClass("fade");
		$("#download").css("opacity", "1");
	}
	/**滚动事件***/
	$(window).bind("scroll", function () {
		var $stop = $('body').scrollTop();
		if ($stop >= 700) {
			$(".shijieguan").css({
				opacity: "1",
				top: "0px",
			})
			$(".title1").css({
				opacity: "1",
				top: "0px",
			})
		}
		if ($stop >= 1500) {
			$(".jietu").css({
				opacity: "1",
				top: "215px",
			})
			$(".title2").css({
				opacity: "1",
				top: "0px",
			})
		}
		if ($stop >= 2300) {
			$(".ss").css({
				opacity: "1",
				top: "0px",
			})
			$(".title4").css({
				opacity: "1",
				top: "0px",
			})
			$(".shanshan").css({
				opacity: "1",
				top: "0px",
			})
		}
	});
	/**点击事件***/
	$(".jq_tabs .tab2").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.parent().next().css("display", "block").siblings(":not('h3,.com_tabs')").css("display", "none");
		$this.children().css("opacity", "1").parent().siblings().children().css("opacity", "0");
	});
	$(".jq_tabs .tab1").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.parent().next().next().next().css("display", "block").siblings(":not('h3,.com_tabs')").css("display", "none");
		$this.children().css("opacity", "1").parent().siblings().children().css("opacity", "0");
	});
	$(".jq_tabs .tab3").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.parent().next().next().css("display", "block").siblings(":not('h3,.com_tabs')").css("display", "none");
		$this.children().css("opacity", "1").parent().siblings().children().css("opacity", "0");
	});
	/*猪脚和弑神的切换**/
	$(".qiehuan .com_tab .tab1").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.addClass("tab").next().removeClass("tab").parent().next().removeClass("show").next().addClass("show");
	})
	$(".qiehuan .com_tab .tab2").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.addClass("tab").prev().removeClass("tab").parent().next().next().removeClass("show").prev().addClass("show");
	})

		/**音频**/
		+ function () {
			var $a1 = $("#a1")[0];
			var $a2 = $("#a2")[0];
			var $a3 = $("#a3")[0];
			var $a4 = $("#a4")[0];
			var $btn1 = $(".btn1");
			var $btn2 = $(".btn2");
			var $btn3 = $(".btn3");
			var $btn4 = $(".btn4");
			$btn1.click(function (e) {
				e.preventDefault();
				console.log($a1.paused)
				if ($a1.paused) {
					$(this).css({
						backgroundPosition: "-760px -124px"
					})
					$a1.play();
					$a2.pause();
					$btn2.css({ backgroundPosition: "-734px -124px" });
					$a3.pause();
					$btn3.css({ backgroundPosition: "-734px -124px" });
					$a4.pause();
					$btn4.css({ backgroundPosition: "-734px -124px" });
				} else {
					$(this).css({
						backgroundPosition: "-734px -124px"
					})
					$a1.pause();
				}
			})
			$btn2.click(function (e) {
				e.preventDefault();
				if ($a2.paused) {
					$(this).css({
						backgroundPosition: "-760px -124px"
					})
					$a2.play();
					$a1.pause();
					$btn1.css({ backgroundPosition: "-734px -124px" });
					$a3.pause();
					$btn3.css({ backgroundPosition: "-734px -124px" });
					$a4.pause();
					$btn4.css({ backgroundPosition: "-734px -124px" });
				} else {
					$(this).css({
						backgroundPosition: "-734px -124px"
					})
					$a2.pause();
				}
			})
			$btn3.click(function (e) {
				e.preventDefault();
				if ($a3.paused) {
					$(this).css({
						backgroundPosition: "-760px -124px"
					})
					$a3.play();
					$a2.pause();
					$btn2.css({ backgroundPosition: "-734px -124px" });
					$a1.pause();
					$btn1.css({ backgroundPosition: "-734px -124px" });
					$a4.pause();
					$btn4.css({ backgroundPosition: "-734px -124px" });
				} else {
					$(this).css({
						backgroundPosition: "-734px -124px"
					})
					$a3.pause();
				}
			})
			$btn4.click(function (e) {
				e.preventDefault();
				if ($a4.paused) {
					$(this).css({
						backgroundPosition: "-760px -124px"
					})
					$a4.play();
					$a2.pause();
					$btn2.css({ backgroundPosition: "-734px -124px" });
					$a3.pause();
					$btn3.css({ backgroundPosition: "-734px -124px" });
					$a1.pause();
					$btn1.css({ backgroundPosition: "-734px -124px" });
				} else {
					$(this).css({
						backgroundPosition: "-734px -124px"
					})
					$a4.pause();
				}
			})







		}();


















}();