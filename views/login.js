'use strict';

$(document)
    .ready(function() {
        console.log("it's working");

        $("#submit")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked submit');
                let user_name = $('#userName')
                    .val();
                let password = $('#password')
                    .val();
                console.log(user_name, password);
            });
    });
