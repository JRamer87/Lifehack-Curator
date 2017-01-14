'use strict';

$(document)
    .ready(function() {
        console.log("it's working");

        $("#login")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked login');
                let user_name = $('#userName')
                    .val();
                let password = $('#password')
                    .val();
                console.log(user_name, password);
                let user = {
                    user_name: user_name,
                    password: password
                };
                console.log(user);
                $.ajax({
                    url: '/session',
                    method: "POST",
                    data: JSON.stringify({
                        user_name: user_name,
                        password: password
                    }),
                    dataType: "text",
                    contentType: "application/json",
                    success: function(data) {
                        console.log('response:', data);
                        window.location.replace('index.html');
                    },
                    complete: function() {
                        console.log('completed');
                    }
                });
            });
        $("#register")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked register');
                let registerUserName = $('#registerUserName')
                    .val();
                let registerPassword = $('#registerPassword')
                    .val();
                console.log(registerUserName, registerPassword);
                $.ajax({
                    url: '/users',
                    method: "POST",
                    data: JSON.stringify({
                        user_name: registerUserName,
                        password: registerPassword
                    }),
                    dataType: "json",
                    contentType: "application/json",
                });
            });
    });
