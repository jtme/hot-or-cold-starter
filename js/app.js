$(document).ready(function () {

            /*--- Display information modal box ---*/
            $(".what").click(function () {
                $(".overlay").fadeIn(1000);

            });

            /*--- Hide information modal box ---*/
            $("a.close").click(function () {
                $(".overlay").fadeOut(1000);
            });

            var newGame = function () {
                // clear count
                // set rand number
            };
            
            var randNum = function () {
                var n = Math.floor(Math.random() * 100);
                console.log("Random Number is: " + n);
                return (n);
            };

            var getuserNum = function () {
                var givenmenumber = +$('#userGuess').val();
                Math.round(givenmenumber) !== givenmenumber;
                if (givenmenumber >= 1 && givenmenumber <= 100) {
                    return givenmenumber;
                } else {
                    $('#feedback').text('Please guess a number between 1 and 100!');
                }
                //console.log(givenmenumber);
            };

           var answer = randNum();

            $('.game form').submit(function() {
                var guess = getuserNum();
                event.preventDefault();
                //console.log("test " + getuserNum());
                temperature (answer,guess);
                //update the count
                var countup = +$('#count').text();
                countup ++;
                $('#count').text(countup);
                var new_item = $("<li>"+ guess +"</li>" );
                new_item.appendTo('#guessList');
                //$('#guessList').text(countup);

            });

            //$('#userGuess').keyup(function (event) {
             //   if (event.keyCode == 13) {
             //       event.preventDefault();
             //       $('#guessButton').click();
             //  }
            //});

            var temperature = function (randNum, userNum) {
                    //figure out difference
                    var temp = Math.abs(randNum - userNum);
                    console.log("Difference in temp: " + temp);

                    // define temp
                    // check if guess is right. 
                    if (0 == temp ) {
                           $('#feedback').text('You Got It!');
                    } else if (temp <= 10) {
                           $('#feedback').text('Very Hot!');
                    } else if (temp <= 20) {
                           $('#feedback').text('Hot!');
                    } else if (temp <= 30) {
                           $('#feedback').text('Cold!');  
                    } else if (temp <= 50) {
                           $('#feedback').text('Ice Cold!');       
                    } else {

                    }

                };

                //set temp

                //reset

            });


            // if (givennumber >= 1 && givennumber <= 100) {
            //         // figure out how warm
            //        for (var n = 1; n <= givennumber; n++) {
            //           if (n % 15 === 0) {
            //              addtolist("fizz buzz");
            //           } else if (n % 3 === 0){
            //              addtolist("fizz");
            //           } else if (n % 5 === 0){ 
            //              addtolist("buzz");
            //           } else {
            //              addtolist(n);
            //            }          
            //       }
            //}else{
            //   $("#feedback").text("nope!");
            //};
            // };

            // function to tell how hot or cold is it
            // 50 ice cold, 30 cold, 20 warm, 10 hot, vary hot 
            //	id="guessButton"
            //  div#feedback text feedback
            // span#count cont

            // ok click start game
            // $("a.close").click(function(){
            // 	$(".overlay").fadeOut(1000);
            // });

            // update count

            // function difference(n, m){
            // return Math.abs(n - m)