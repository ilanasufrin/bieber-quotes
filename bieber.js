(function($) {
    $(function() {
        var prev = 0;
        var quotes = [
            { text: "I don't know, have I been to Australia?", audio: "http://www.w3schools.com/tags/horse.m1p3", image: "http://24.media.tumblr.com/7fb239dcd28b402bf6d11bb703b35460/tumblr_mjo2n5mPm61s7rxnto2_500.jpg" },
            { text: "Goodbye", audio: "http://www.w3schools.com/tags/horse.m1p3", image: "http://24.media.tumblr.com/7fb239dcd28b402bf6d11bb703b35460/tumblr_mjo2n5mPm61s7rxnto2_500.jpg" }
        ];
        
        var bieberPeep = function(cb) {
            $(".bieber-peep").animate({
                bottom: "-40"
            }, 1000, cb);    
        };
        
        var stateReset = function() {
            $(".bieber-wait, .bieber-result").hide();
            $(".bieber-ask").show();
            $(".bieber-input").one('keypress', function() { bieberPeep(); }).val("");
        };
        
        var stateWait = function(cb) {
            $(".bieber-ask").fadeOut(function() {
               $(".bieber-wait").fadeIn(cb); 
            });
        };
        
        var stateAnswer = function(c) {
            $(".bieber-wait").fadeOut(function() {
                $(".bieber-quote").text(quotes[c].text);
                $(".bieber-image").attr("src", quotes[c].image);
                $(".bieber-audio").empty().append($("<audio />", { autoplay: true }).append($("<source />", { type: "audio/mpeg", src: quotes[c].audio })));
                $(".bieber-result").fadeIn();
            });
        };
        
        stateReset();
        
        $(".bieber-reset").click(function() {
            stateReset();
            return false;
        });
        
        $(".bieber-button").click(function() {
            if ($(".bieber-input").val().length < 3) {
                alert("Did you forget to type a question, yo?");
                return false;
            }
            
            stateWait(function() { 
                setTimeout(function() {
                    stateAnswer(Math.floor(Math.random() * quotes.length));
                }, Math.round(Math.random() * 2000 + 1000));
            });
                       
            return false; 
        });
    });
})(jQuery);