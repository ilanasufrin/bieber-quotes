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

        //not sure whether I should make an image for every name choice in an object or just write the word on the page
        var firstNameChoices = [
           ["Acton","Arnold","Augustus","Aberforth"],
           ["Bertram", "Benjamin", "Byron", "Burton", "Bartholomew"],
           ["Cecil", "Charles", "Chester", "Cornelius", "Cyrus", "Clement"],
           ["Daniel", "Denton", "Dalton", "Dawson"],
           ["Edmund", "Egbert", "Ernest", "Ellis"],
           ["Fitzwilliam", "Frederick", "Francis", "Frank"],
           ["Garfield", "Gordon", "Gerard", "George", "Gilbert"],
           ["Hugh", "Harry", "Henry", "Herbert"],
           ["Ignatius", "Isaac", "Ingram", "Isidore"],
           ["Jeremiah", "Jasper", "John", "Julian", "Jacob"],
           ["Kenton", "Kingsley", "Kirk"],
           ["Lionel", "Laurence", "Leland", "Leonard"],
           ["Matthew", "Maximilian", "Meriwether", "Mortimer"],
           ["Nicholas", "Norbert", "Neil"],
           ["Oscar", "Oliver", "Owen", "Oswald"],
           ["Paul", "Percy", "Phillip","Peter"],
           ["Quentin", "Quincy"],
           ["Raymond","Rodney","Roger","Ralph","Richard"],
           ["Sacheverell","Simon","Sinclair","Stephen"],
           ["Theodore","Thomas","Terrence"],
           ["Upton","Ulysses"],
           ["Victor","Vaughn","Virgil","Vincent"],
           ["Wesley","Wallace","Wendell","Weldon","William"],
           ["Xavier","Xander"],
           ["Yancy","York"],
           ["Zebediah","Zachary"]
        ];

        var lastNameChoices = [
           ["Adams", "Ashdown", "Alcorn", "Ailey"],
           ["Bell", "Bamford", "Berry", "Beaton", "Black", "Blewett", "Burrows", "Butler"],
           ["Carroll", "Cockerfell","Collins","Cunningham","Copperfield"],
           ["Dalton","Darcy","Davidson","Dickens","Dickenson","Drummond"],
           ["English","Evans","Eliot"],
           ["Fletcher","Fezziwig","Fred","Faggins"],
           ["Gaskell","Gibbons","Goodwood","Gilmore","Gargery"],
           ["Harding","Hardy","House","Holloway","Havisham"],
           ["Ivers","Irvin","Isherwood","Infelfinger"],
           ["James","Jefferies","Jaggers","Jarvis","Jorkins"],
           ["Keefe","Krook","Kedgick","Kenfield"],
           ["Lawrence","Little","Lockaby","Lansdown"],
           ["Mitchell","Morrell","Magnus","Marlowe"],
           ["Nickleby","Northcutt","Nightingale","Nottingham"],
           ["Ockleberry","Orlick","Oliver"],
           ["Pockett","Perkins","Peabody","Plympton"],
           ["Quin","Quick","Quimby"],
           ["Radfoot","Rathburn","Reeves","Rawlings","Rochester"],
           ["Sandiford","Samuelson","Scoville","Sedgwick","Somerset"],
           ["Tarkington","Tulliver","Thistlethwaite","Throgmorton"],
           ["Upshaw", "Underhill","Umble"],
           ["Vickers","Vosper","Venable"],
           ["Webster","Weston","Warburton","Wickham"],
           ["Exton","Exley"],
           ["Yeates","Yarbrough","Yearwood"],
           ["Shillington","Shelburn","Shreeves"]
        ];
        
        var alphabet = ['a','b']

        function alphaPos(char) { return alphabet.indexOf()}
        // var bieberPeep = function(cb) {
        //     $(".bieber-peep").animate({
        //         bottom: "-40"
        //     }, 1000, cb);    
        // };
        
        var stateReset = function() {
            $(".bieber-wait, .bieber-result").hide();
            $(".bieber-ask").show();
           // $(".bieber-input").one('keypress', function() { bieberPeep(); }).val(""); not sure if keeping this
        };
        
        var stateWait = function(cb) {
            $(".bieber-ask").fadeOut(function() {
             //  $(".bieber-wait").fadeIn(cb); 
             $(".bieber-result").fadeIn(cb);
            });
        };
        

        var pickName = function() {
            var firstName = (document.getElementById("firstName").value);
            var lastName = (document.getElementById("lastName").value);
            console.log(firstName + " " + lastName);
            var firstLetter = (firstName.charAt(0)).toLowerCase();
            var lastLetter = (lastName.substring(0,1)).toLowerCase();
            
            //NEED TO DECLARE THESE VARIABLES PROPERLY
            window.newFirstName = firstNameChoices[3][1];
           // alert(newFirstName);
            window.newLastName = lastNameChoices[2][1];
            //alert(newLastName);

            
            //need to rename test variables
            //first name cases
            // getChoice(firstLetter)
            if (firstLetter == "a") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[0].length)));
                newFirstName = firstNameChoices[0][test1];
            }
             else if (firstLetter == "b") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[1].length)));
                newFirstName = firstNameChoices[1][test1];
            }
            else if (firstLetter == "c") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[2].length)));
                newFirstName = firstNameChoices[2][test1];
            }
            else if (firstLetter == "d") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[3].length)));
                newFirstName = firstNameChoices[3][test1];
            }
            else if (firstLetter == "e") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[4].length)));
                newFirstName = firstNameChoices[4][test1];
            }
            else if (firstLetter == "f") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[5].length)));
                newFirstName = firstNameChoices[5][test1];
            }
            else if (firstLetter == "g") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[6].length)));
                newFirstName = firstNameChoices[6][test1];
            }
            else if (firstLetter == "h") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[7].length)));
                newFirstName = firstNameChoices[7][test1];
            }
            else if (firstLetter == "i") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[8].length)));
                newFirstName = firstNameChoices[8][test1];
            }
            else if (firstLetter == "j") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[9].length)));
                newFirstName = firstNameChoices[9][test1];
            }
            else if (firstLetter == "k") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[10].length)));
                newFirstName = firstNameChoices[10][test1];
            }
            else if (firstLetter == "l") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[11].length)));
                newFirstName = firstNameChoices[11][test1];
            }
            else if (firstLetter == "m") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[12].length)));
                newFirstName = firstNameChoices[12][test1];
            }
            else if (firstLetter == "n") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[13].length)));
                newFirstName = firstNameChoices[13][test1];
            }
            else if (firstLetter == "o") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[14].length)));
                newFirstName = firstNameChoices[14][test1];
            }
            else if (firstLetter == "p") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[15].length)));
                newFirstName = firstNameChoices[15][test1];
            }
            else if (firstLetter == "q") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[16].length)));
                newFirstName = firstNameChoices[16][test1];
            }
            else if (firstLetter == "r") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[17].length)));
                newFirstName = firstNameChoices[17][test1];
            }
            else if (firstLetter == "s") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[18].length)));
                newFirstName = firstNameChoices[18][test1];
            }
            else if (firstLetter == "t") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[19].length)));
                newFirstName = firstNameChoices[19][test1];
            }
            else if (firstLetter == "u") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[20].length)));
                newFirstName = firstNameChoices[20][test1];
            }
            else if (firstLetter == "v") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[21].length)));
                newFirstName = firstNameChoices[21][test1];
            }
            else if (firstLetter == "w") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[22].length)));
                newFirstName = firstNameChoices[22][test1];
            }
            else if (firstLetter == "x") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[23].length)));
                newFirstName = firstNameChoices[23][test1];
            }
            else if (firstLetter == "y") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[24].length)));
                newFirstName = firstNameChoices[24][test1];
            }
            else if (firstLetter == "z") {
                var test1 = (Math.floor(Math.random() * (firstNameChoices[25].length)));
                newFirstName = firstNameChoices[25][test1];
            }
            //if they enter anything besides the normal alphabet, the generated name will be random
            else {
                var test1 = (Math.floor(Math.random() * (firstNameChoices.length)));
                var test3 = (Math.floor(Math.random() * (firstNameChoices[test1].length)));
                newFirstName = firstNameChoices[test1][test3];
            }

            //last name cases
            if (lastLetter == "a") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[0].length)));
                newLastName = lastNameChoices[0][test2];
            }
            else if (lastLetter == "b") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[1].length)));
                newLastName = lastNameChoices[1][test2];
            }
            else if (lastLetter == "c") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[2].length)));
                newLastName = lastNameChoices[2][test2];
            }
            else if (lastLetter == "d") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[3].length)));
                newLastName = lastNameChoices[3][test2];
            }
            else if (lastLetter == "e") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[4].length)));
                newLastName = lastNameChoices[4][test2];
            }
            else if (lastLetter == "f") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[5].length)));
                newLastName = lastNameChoices[5][test2];
            }
            else if (lastLetter == "g") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[6].length)));
                newLastName = lastNameChoices[6][test2];
            }
            else if (lastLetter == "h") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[7].length)));
                newLastName = lastNameChoices[7][test2];
            }
            else if (lastLetter == "i") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[8].length)));
                newLastName = lastNameChoices[8][test2];
            }
            else if (lastLetter == "j") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[9].length)));
                newLastName = lastNameChoices[9][test2];
            }
            else if (lastLetter == "k") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[10].length)));
                newLastName = lastNameChoices[10][test2];
            }
            else if (lastLetter == "l") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[11].length)));
                newLastName = lastNameChoices[11][test2];
            }
            else if (lastLetter == "m") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[12].length)));
                newLastName = lastNameChoices[12][test2];
            }
            else if (lastLetter == "n") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[13].length)));
                newLastName = lastNameChoices[13][test2];
            }
            else if (lastLetter == "o") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[14].length)));
                newLastName = lastNameChoices[14][test2];
            }
            else if (lastLetter == "p") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[15].length)));
                newLastName = lastNameChoices[15][test2];
            }
            else if (lastLetter == "q") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[16].length)));
                newLastName = lastNameChoices[16][test2];
            }
            else if (lastLetter == "r") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[17].length)));
                newLastName = lastNameChoices[17][test2];
            }
            else if (lastLetter == "s") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[18].length)));
                newLastName = lastNameChoices[18][test2];
            }
            else if (lastLetter == "t") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[19].length)));
                newLastName = lastNameChoices[19][test2];
            }
            else if (lastLetter == "u") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[20].length)));
                newLastName = lastNameChoices[20][test2];
            }
            else if (lastLetter == "v") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[21].length)));
                newLastName = lastNameChoices[21][test2];
            }
            else if (lastLetter == "w") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[22].length)));
                newLastName = lastNameChoices[22][test2];
            }
            else if (lastLetter == "x") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[23].length)));
                newLastName = lastNameChoices[23][test2];
            }
            else if (lastLetter == "y") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[24].length)));
                newLastName = lastNameChoices[24][test2];
            }
            else if (lastLetter == "z") {
                var test2 = (Math.floor(Math.random() * (lastNameChoices[25].length)));
                newLastName = lastNameChoices[25][test2];
            }
             else {
                var test2 = (Math.floor(Math.random() * (lastNameChoices.length)));
                var test4 = (Math.floor(Math.random() * (lastNameChoices[test2].length)));
                newLastName = lastNameChoices[test2][test4];
            }

            //if the new name matches the old name, try again
            if((firstName.toLowerCase() == (newFirstName.toLowerCase())) || (lastName.toLowerCase() == (newLastName.toLowerCase()))) {
                console.log("picking again");
                pickName();
            }
        };



        var stateAnswer = function(c) {
            window.bieberQuote = quotes[c];

         //   $(".bieber-wait").fadeOut(function() {
                pickName();
              //  $(".bieber-quote").text(quotes[c].text);
              $(".bieber-quote").text("By " + window.newFirstName + " " + window.newLastName);
              //  $(".bieber-image").attr("src", quotes[c].image);
              //  $(".bieber-audio").empty().append($("<audio />", { autoplay: true }).append($("<source />", { type: "audio/mpeg", src: (Math.random() > 0.95 ? "http://www.w3schools.com/tags/horse.mp3" : quotes[c].audio) })));
              //  $(".bieber-result").fadeIn();
          //  });
        };
        
        stateReset();
        
        $(".bieber-reset").click(function() {
            stateReset();
            return false;
        });
        
        $(".bieber-button").click(function() {
            //pickName();
            //window.bieberQuestion = $(".bieber-input").val();
            if( (document.getElementById("firstName").value).length <2 || (document.getElementById("lastName").value).length <2) {
                alert("Your publishers need inspiration from a real name!");
                return false;
            }
            
            stateWait(function() { 
              //  setTimeout(function() {
                    //stateAnswer(Math.floor(Math.random() * quotes.length));
                    pickName();
                    stateAnswer();
                }, Math.round(Math.random() * 2000 + 1000));
          //  });
                       
            return false; 
        });
    });
})(jQuery);



window.fbShareBieber = function() {
           // var choice = window.bieberQuote;
            FB.ui({
                method: 'feed',
                name: "Victorian Pen Name Generator",
               // picture: choice.image,
                link: window.location.href,
               // caption: choice.text,
                //description: 'Get a pseudonym from the publishers!',
                description: 'My new name is "' + window.newFirstName + " " + window.newLastName + '" Get your own pseudonym from the publishers!',
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
        //var twitterURL = 'https://twitter.com/share?url=http://huff.to/1fprAj6&text=I got: "' + getText(window.bieberQuote.text) + '" Get your own &hashtags=VictorianPenName';
        var twitterURL = 'https://twitter.com/share?url=http://huff.to/1fprAj6&text=I got: "' + getText(window.newFirstName) + " " + getText(window.newLastName) + '" Get your own &hashtags=VictorianPenName';
        window.open(twitterURL, 'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=300,height=300');
    };
