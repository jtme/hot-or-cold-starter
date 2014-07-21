$(document).ready(function () {

            /*--- Display information modal box ---*/
            $(".what").click(function () {
                $(".overlay").fadeIn(1000);

            });

            /*--- Hide information modal box ---*/
            $("a.close").click(function () {
                $(".overlay").fadeOut(1000);
            });
            var answer;

            var newGame = function () {
                // clear count
                answer = randNum(); 
                $('#count').text('0');
                $('#guessList').text('');
                $('#feedback').text('Make your Guess!');
                $('#userGuess').val('');
            };
            
            var randNum = function () {
                var n = Math.floor(Math.random() * 100);
                console.log("Random Number is: " + n);
                return (n);
            };

            var getuserNum = function () {
                var givenmenumber = +$('#userGuess').val();
                //Math.round(givenmenumber) = givenmenumber;
                if (givenmenumber >= 1 && givenmenumber <= 100) {
                    return givenmenumber;
                } else {
                    $('#feedback').text('Please guess a number between 1 and 100!');
                }
                //console.log(givenmenumber);
            };
                newGame();
           
            $('.game form').submit(function() {
                var guess = getuserNum();
                event.preventDefault();
                //console.log("test " + getuserNum());
                temperature (answer,guess);
                //update the count
                var countup = +$('#count').text();
                countup ++;
                $('#count').text(countup);
               //var new_item = $("<li>"+ guess +"</li>" );
               // new_item.appendTo('#guessList');
                $( '#guessList' ).append( '<li>' + guess + '</li>' );
                //$('#guessList').text(countup);

            });

            $('.new').click(function() {
                newGame();
            });

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
            });
