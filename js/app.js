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
                //validate if it is in range
                console.log(givenmenumber);
                return givenmenumber;
            };

            randNum();

            $("#guessButton").click(function () {
                getuserNum();
                event.preventDefault();
                console.log("test " + getuserNum());
            });

            $('#userGuess').keyup(function (event) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    $('#guessButton').click();
                }
            });

            var temperature = function (randNum, userNum) {
                    //figure out difference
                    var temp = Math.abs(randNum - userNum);
                    console.log(temp);

                    // define temp
                    if (5 < temp && temp <= 10) {

                    } else if (10 < temp && temp <= 20) {

                    } else if (20 < temp && temp <= 30) {

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