(function($) {
    $(function() {
        var prev = 0;
        var quotes = [
            { text: "Don't ask me about her again. Don't ask me about her again. Don't ask me...", audio: "https://bieber.s3.amazonaws.com/bieber+deposition1414.mp3", image: "http://i.imgur.com/JTkswXT.jpg" },
            { text: "What kind of question is that? It didn't make sense.", audio: "https://bieber.s3.amazonaws.com/bieber+deposition33.mp3", image: "http://i.imgur.com/qQe6D8o.jpg" },
            { text: "I don't have to listen to anything you have to say.", audio: "https://bieber.s3.amazonaws.com/bieber+deposition11.mp3", image: "http://i.imgur.com/MJVBu4j.jpg" },
            { text: "I don't know if I've been to Australia. Have I been to Australia?", audio: "https://bieber.s3.amazonaws.com/bieber+deposition22.mp3", image: "http://i.imgur.com/6p5ahCI.jpg" },
            { text: "Guess what? I don't recall.", audio: "https://bieber.s3.amazonaws.com/bieber+deposition1212.mp3", image: "http://i.imgur.com/JTkswXT.jpg" },
            { text: "What kind of question is that? Is he my son?", audio: "https://bieber.s3.amazonaws.com/bieber+deposition1111.mp3", image: "http://i.imgur.com/qQe6D8o.jpg" },
            { text: "I think my lawyer's asking a question.", audio: "https://bieber.s3.amazonaws.com/bieber+deposition1010.mp3", image: "http://i.imgur.com/MJVBu4j.jpg" },
            { text: "This is a film? This is a film?", audio: "https://bieber.s3.amazonaws.com/bieber+deposition88.mp3", image: "http://i.imgur.com/6p5ahCI.jpg" },
            { text: "I object.", audio: "https://bieber.s3.amazonaws.com/bieber+deposition77.mp3", image: "http://i.imgur.com/JTkswXT.jpg" },
            { text: "Journalism, this isn't journalism?", audio: "https://bieber.s3.amazonaws.com/bieber+deposition1313.mp3", image: "http://i.imgur.com/qQe6D8o.jpg" },
            { text: "I don't know Katie Couric, you tell me.", audio: "https://bieber.s3.amazonaws.com/bieber+deposition1515.mp3", image: "http://i.imgur.com/MJVBu4j.jpg" }
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
            window.bieberQuote = quotes[c];

            $(".bieber-wait").fadeOut(function() {
                $(".bieber-quote").text(quotes[c].text);
                $(".bieber-image").attr("src", quotes[c].image);
                $(".bieber-audio").empty().append($("<audio />", { autoplay: true }).append($("<source />", { type: "audio/mpeg", src: (Math.random() > 0.95 ? "http://www.w3schools.com/tags/horse.mp3" : quotes[c].audio) })));
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



window.fbShareBieber = function() {
            var choice = window.bieberQuote;
            FB.ui({
                method: 'feed',
                name: "Ask Justin Bieber Anything",
                picture: choice.image,
                link: window.location.href,
                caption: choice.text,
                description: 'Type in any question below in our HuffPost Celebrity original interactive below to see how the Biebs himself would respond.',
            }, 
            function(response) {
                if (response && response.post_id) {
                    console.log('FB quiz post was published.');
                }
            });
        };


window.fbAsyncInit = function() {
    FB.init({
        appId      : "1427100424195799",
        status     : true,
        xfbml      : true
    });
};

(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) {return;}js = d.createElement(s); js.id = id;js.src = "http://connect.facebook.net/en_US/all.js";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));

    function getText(text) {
        if (text.length > 49) {
            return (text.substring(0,47) + '...');
        } else {
            return text;
        }
    }

    window.twitterShareBieber = function(quiz, text) {
        var twitterURL = 'https://twitter.com/share?url=http://huff.to/1fprAj6&text=I got: "' + getText(window.bieberQuote.text) + '" Ask Bieber your own question&hashtags=brattyBieber';
        window.open(twitterURL, 'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=300,height=300');
    };
