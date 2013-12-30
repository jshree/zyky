// JavaScript Document
$(function($) {

                $(".knob").knob({
                    change : function (value) {
                        //console.log("change : " + value);
                    },
                    release : function (value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel : function () {
                        console.log("cancel : ", this);
                    },
                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            var a = this.angle(this.cv)  // Angle
                                , sa = this.startAngle          // Previous start angle
                                , sat = this.startAngle         // Start angle
                                , ea                            // Previous end angle
                                , eat = sat + a                 // End angle
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            this.o.cursor
                                && (sat = eat - 0.3)
                                && (eat = eat + 0.3);

                            if (this.o.displayPrevious) {
                                ea = this.startAngle + this.angle(this.v);
                                this.o.cursor
                                    && (sa = ea - 0.3)
                                    && (ea = ea + 0.3);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

                // Example of infinite knob, iPod click wheel
                var v, up=0,down=0,i=0
                    ,$idir = $("div.idir")
                    ,$ival = $("div.ival")
                    ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
                    ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
                $("input.infinite").knob(
                                    {
                                    min : 0
                                    , max : 20
                                    , stopper : false
                                    , change : function () {
                                                    if(v > this.cv){
                                                        if(up){
                                                            decr();
                                                            up=0;
                                                        }else{up=1;down=0;}
                                                    } else {
                                                        if(v < this.cv){
                                                            if(down){
                                                                incr();
                                                                down=0;
                                                            }else{down=1;up=0;}
                                                        }
                                                    }
                                                    v = this.cv;
                                                }
                                    });
            });

//=================================== SongLibrary Script Start Here ==============================
$(document).ready(function(){
	 $('.song').click(function(){
		 $('.show').hide();
		 $(this).children('.songHover').addClass('show');
		 $(this).children('.songHover').show();
		 $('.playSmall').click(function(){
		    $(this).parent().parent().show();	 
		 });
		    var song = $('.song img').height()+2;
			var song1 = ($('.song img').height()+3)/2;
			$('.songHover').css({'height': song + 'px'});
			$('.songFeatures').css({'height': song + 'px'});
			$('.playSmall').css({'height': song1 +'px'});
			$('.cart').css({'height': song1 +'px'});
			$('.playSmall img').css({'height': song1 +'px'});
			$('.cart img').css({'height': song1 +'px'});
	  });
	  
	   $( ".play" ).bind( "click", function() {
              $('.play').toggleClass('pause');
            });
		
 
	 $('.songHover').mouseleave(function(){
			  $('.songHover').hide();
		 });
	  
	 $(window).load(function(){
		  	var song = $('.song img').height();
			var song1 = $('.song img').height()/2;
			$('.songHover').css({'height': song + 'px'});
			$('.songFeatures').css({'height': song + 'px'});
			$('.playSmall').css({'height': song1 +'px'});
			$('.cart').css({'height': song1 +'px'});
			$('.playSmall img').css({'height': song1 +'px'});
			$('.cart img').css({'height': song1 +'px'});
		 });
		 
	 $(window).resize(function(){
		 var songHover = $('.song img').height();
		 var songHover1 = $('.song img').height()/2;
		 $('.songHover').css({'height': songHover + 'px'});
		 $('.songFeatures').css({'height': songHover + 'px'});
		 $('.playSmall').css({'height': songHover1 +'px'});
     	 $('.cart').css({'height': songHover1 +'px'});
		 $('.playSmall img').css({'height': songHover1 +'px'});
		 $('.cart img').css({'height': songHover1 +'px'});
	});
});

//=============================================================================
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	alert('playing');
	//playAudio("http://dev.wiredelta.com:12001/sample.mp3");
	var my_media = new Media('http://dev.wiredelta.com:12001/sample.mp3', onSuccess, onError);
	alert(my_media);
	my_media.play();
}
//function playAudio(src) {
//	alert('playing second time');
//	var my_media = new Media(src, onSuccess, onError);
//	my_media.play();
//}
function onSuccess() {
	alert('Audio started to play');
}
function onError(){
	alert('this function is running');
}