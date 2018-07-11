+function () {
	//������ˢ��ҳ���Զ������
	window.onload = function () {
		$(".wisdom").css({
			top: "118",
			opacity: "1",
		});
		$("#banner_top>span").css({
			left: "0",
			opacity: "1",
		})
		$(".gril_img").css({
			top: "55",
			opacity: "1",
			zIndex: "0",
		})
		$(".boy_img").css({
			top: "93",
			opacity: "1",
			zIndex: "0",
		})
		$("#top_logo").css("opacity", "1")
	}
	//������a��ǵ���ص�����
	$(".banner_main>.banner_main_border>.banner_main_a").click(function () {
		$(this).css("display", "none").siblings().css("display", "none").parent().parent().css({
			left: "74%",
			width: "360px",
		}).children().last().css("display", "block").click(function () {
			$(this).css("display", "none").siblings().children().css("display", "block").parent().parent().css({
				left: "49.5%",
				width: "390px",
			})
		});
	});
	//�����������岿��
	$(".news_top>a").mouseenter(function () {
		var $b = $(".news_list");
		var $a = $(this);
		var s = parseFloat($b.css("width"));
		var n = $a.attr("data-i");
		$a.parent().next().children().css("left", n * (-s / 5) + "px");
		$a.children("b").css("opacity", "1").parent().siblings().children("b").css("opacity", "0");
	});
	//���ǹ��Բ���
	$(".right_search>.actor_top>a").mouseenter(function () {
		var $a = $(this);
		var $b = $(".rgt_title");
		var s = parseFloat($b.css("width"));
		var n = $a.attr("data-n");
		$a.parent().next().children().css("left", n * (-s / 5) + "px");
		$a.children("s,i").css("opacity", "1").parent().siblings().children("s").css("opacity", "0");
	});
	//����ͬ��ר��
	$(".tongren_nav>ul>li").mouseenter(function () {
		var $li = $(this);
		var $d = $(".big_tongren");
		var s = parseFloat($d.css("width"));
		var n = $li.attr("data-j");
		$li.parent().parent().next().children().css("left", n * (-s / 6) + "px");
		$li.find("span").css("top", "3px"
		).parent().parent().siblings().find("span").css("top", "18px")
		$li.find("s").css("bottom", "-20px"
		).parent().parent().siblings().find("s").css("bottom", "-75px")
	});
	//�������Ź����Աߵ��ֲ�ͼ
	var imgs = [
		"images/index1.jpg",
		"images/index2.jpg",
		"images/index3.jpg",
	];
	+function () {
		var WIDTH = parseFloat($("#main_left").css("width"));//��������Ŀ��
		var $divImgs = $(".left_img"), $divIdexs = $("#main>.left_nav");//����
		var n = 0;//�����±�
		var WAIT = 2000;//���岥���л�ʱ��
		var SPEED = 300;//���岥���ٶ�
		var canAuto = true;//�����Ƿ����Զ�����
		var timer = null;//���嶨ʱ��
		+function () {
			for (i = 0, htmlImgs = "", htmlIdexs = ""; i < imgs.length; i++) {
				htmlImgs += "<a href='#'><img src='" + imgs[i] + "'></a>";
				htmlIdexs += "<a href='#'></a>";
			}
			//������Ƭ����ӵ�a��
			$divImgs.html(htmlImgs);
			$divIdexs.html(htmlIdexs);
			//�޸�$divImgs�Ŀ�
			$divImgs.css("width", WIDTH * (imgs.length + 1));
			$divImgs.append(
				//����$divImgs�ĵ�һ��Ԫ�أ���׷�ӵ���β
				$divImgs.children(":first").clone()
			);
			//����$divIdexs�е�һ��liĬ��Ϊhover
			$divIdexs.children(":first").addClass("hover").siblings().removeClass("hover");
		}();
		function autoMove() {//���Զ��ֲ� 
			timer = setTimeout(function () {
				n++;//����ǰͼƬ���±�+1
				//�ӳ�WAIT����,�������,��$divImgs��left�ƶ���-n*WIDTH��λ��
				$divImgs.animate({
					left: (-n) * WIDTH
				}, SPEED, function () {//����������
					//��������һ��(n����imgs��length)
					if (n == imgs.length) {
						n = 0;//��n�Ļ�0
						$divImgs.css("left", 0);//��$divImgs��left��0
					}
					//����$divIdexs��nλ�õ�liΪhover���������hover
					$divIdexs.children(":eq(" + n + ")").addClass("hover").siblings().removeClass("hover");
					if (canAuto) autoMove();//�ٴ����Զ��ֲ�
				});
			}, WAIT);
		};
		autoMove();//ʵ���ֶ��ֲ�
		//Ϊ$divIdexs����������¼�ί��,ֻ����li��Ӧ
		$divIdexs.on("mouseover", "a", function () {
			//ֹͣ$divImgs�ϵ�һ�ж���
			$divImgs.stop(true);
			//�޸�nΪ��ǰli���±�: 
			n = $("#main>.left_nav>a").index(this);
			//��$divImgs�ƶ���-n*WIDTH��λ��
			$divImgs.animate({
				left: (-n) * WIDTH
			}, SPEED, function () {
				//����$divIdexs��nλ�õ�liΪhover���������hover
				$divIdexs.children(":eq(" + n + ")").addClass("hover").siblings().removeClass("hover");
			});
		});
		//�����������޸ı�ǽ�ֹ�����Զ��ֲ�
		$("#main_left").mouseenter(function () {
			canAuto = false;
			clearTimeout(timer);
		}).mouseleave(function () {//����뿪,�����Զ��ֲ�
			canAuto = true;//�޸ı����������Զ��ֲ�
			//��n�˻�ǰһ���±�
			autoMove();
		});
	}();



	//����������ͼ���ֲ�
	var img = [
		"images/hl_1.jpg",
		"images/hl_2.jpg",
	];
	+function () {
		var WIDTH = parseFloat($(".no_img").css('width'));//��������Ŀ��
		var WAIT = 3000;//�����л���ʱ��
		var SPEED = 400;//���岥�ŵ��ٶ�
		var $divImg = $(".two_img"), $divIdx = $(".rad_black");//����
		var n = 0;//�����±�
		var canAuto = true;//�����Ƿ����Զ�����
		var timer = null;//���嶨ʱ��
		+function () {
			for (i = 0, htmlImgs = "", htmlIdexs = ""; i < img.length; i++) {
				htmlImgs += "<a href='#'><img src='" + img[i] + "'></a>";
				htmlIdexs += "<a href='#'></a>";
			}
			//������Ƭ����ӵ�a��
			$divImg.html(htmlImgs);
			$divIdx.html(htmlIdexs);
			//�޸�$divImgs�Ŀ�
			$divImg.css("width", WIDTH * (img.length + 1));
			$divImg.append(
				//����$divImgs�ĵ�һ��Ԫ�أ���׷�ӵ���β
				$divImg.children(":first").clone()
			);
			//����$divIdexs�е�һ��liĬ��Ϊhover
			$divIdx.children(":first").addClass("hover").siblings().removeClass("hover");
		}();
		function autoMove() {//���Զ��ֲ� 
			timer = setTimeout(function () {
				n++;//����ǰͼƬ���±�+1
				//�ӳ�WAIT����,�������,��$divImgs��left�ƶ���-n*WIDTH��λ��
				$divImg.animate({
					left: (-n) * WIDTH
				}, SPEED, function () {//����������
					//��������һ��(n����imgs��length)
					if (n == img.length) {
						n = 0;//��n�Ļ�0
						$divImg.css("left", 0);//��$divImgs��left��0
					}
					//����$divIdexs��nλ�õ�liΪhover���������hover
					$divIdx.children(":eq(" + n + ")").addClass("hover").siblings().removeClass("hover");
					if (canAuto) autoMove();//�ٴ����Զ��ֲ�
				});
			}, WAIT);
		};
		autoMove();//ʵ���ֶ��ֲ�
		//Ϊ$divIdexs����������¼�ί��,ֻ����li��Ӧ
		$divIdx.on("mouseover", "a", function () {
			//ֹͣ$divImgs�ϵ�һ�ж���
			$divImg.stop(true);
			//�޸�nΪ��ǰli���±�: 
			n = $(".rad_black>a").index(this);
			//��$divImgs�ƶ���-n*WIDTH��λ��
			$divImg.animate({
				left: (-n) * WIDTH
			}, SPEED, function () {
				//����$divIdexs��nλ�õ�liΪhover���������hover
				$divIdx.children(":eq(" + n + ")").addClass("hover").siblings().removeClass("hover");
			});
		});
		//�����������޸ı�ǽ�ֹ�����Զ��ֲ�
		$(".no_img").mouseenter(function () {
			canAuto = false;
			clearTimeout(timer);
		}).mouseleave(function () {//����뿪,�����Զ��ֲ�
			canAuto = true;//�޸ı����������Զ��ֲ�
			//��n�˻�ǰһ���±�
			autoMove();
		});
	}();


	/**ͷ�������¼�**/
	+function () {
		/*ͷ�������¼�**/
		var wh = $('body').height();
		$(window).scroll(function () {
			if ($('body').scrollTop() !== 0) {
				$('#banner_top>.logo').css({
					transform: "scale(0,0)",
					transition: "transform .2s linear"
				});
				$('.left_bar').css("opacity", "1");
				$('#top_bar').css({
					background: "rgba(255,255,255,.9)",
					position: "fixed",
				});
				$(".right_bar>li").css("left", "-5px");
			} else {
				$('#banner_top>.logo').css({
					transform: "scale(1,1)",
					transition: "transform .2s linear"
				});
				$('.left_bar').css("opacity", "0");
				$('#top_bar').css({
					background: "rgba(255,255,255,0)",
					position: "relative",
				});
				$(".right_bar>li").css("left", "0px");
			}
		})
	}();


	/*������ͼ����SSR�ĵط�*/
	+function () {
		var WIDTH = parseFloat($(".rongqi").css("width"));//��ȡ����ͼ�길Ԫ�ص��ܿ��
		var P = parseFloat($(".ssr_tubiao").css("width")) + 45;//��ȡҳ�������Ŀ��
		var N = WIDTH / P;//��ʾ�ܵ�ҳ��
		var i = 0;
		+function () {
			$(".right_arrows").on("click", function (e) {
				i++; console.log(i);
				var $a = $(this);
				e.preventDefault();
				if (i < N) {
					$a.prev().css("display", "block").next().next().children().css("left", -P * i + "px");
				}
				if (i > N - 1) {
					$a.css("display", "none");
				}
			});
			$(".left_arrows").on("click", function (e) {
				i--; console.log(i);
				if (i => 1) {
					var $b = $(this);
					e.preventDefault();
					$b.next().css("display", "block").next().children().css("left", -P * i + "px");
				}
				if (i < 1) {
					$b.css("display", "none");
				}
			});
		}();
	}();

	/*�����Ϣ��**/
	+function () {
		var $qm = $(".qm");
		$qm.siblings(":not('.nan_zhujue')").addClass("none");
		$(".nan_zhujue>a").click(function (e) {
			e.preventDefault();//��ֹa�����ת��Ϊ;
			var $a = $(this);
			var n = $a.attr("data-x");
			$a.addClass("target").siblings().removeClass("target").parent().siblings(":eq(" + n + ")").removeClass("none").siblings(":not('.nan_zhujue')").addClass("none");
		});
		/*�������л���ź�߱��ĵط�*/
		$(".actor_top>a").click(function (e) {
			e.preventDefault();
			var $b = $(this);
			var y = $b.attr("data-y");
			$b.children("s").css("opacity", "1").parent().siblings().children("s").css("opacity", "0").parent().parent().siblings(":eq(" + y + ")").css("opacity", "1").siblings(":not('.actor_top')").css("opacity", "0");
		});
	}();
}();