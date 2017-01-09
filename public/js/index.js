'use strict';

$(document)
    .ready(function() {
        console.log("it's working");

        $("#idComputer")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked computer');
                $.ajax({
                    url: '/lifehacks/1',
                    method: "GET",
                    success: function(data) {
                        var computerResults = JSON.stringify(data);
                        console.log(computerResults);
                        $('#results')
                            .text(computerResults);
                    }
                });
            });
        $("#idPhone")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked phone');
                $.ajax({
                    url: '/lifehacks/2',
                    method: "GET",
                    success: function(data) {
                        var phoneResults = JSON.stringify(data);
                        console.log(phoneResults);
                        $('#results')
                            .append(phoneResults);
                    }
                });
            });
        $("#idTravel")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked travel');
                $.ajax({
                    url: '/lifehacks/3',
                    method: "GET",
                    success: function(data) {
                        var travelResults = JSON.stringify(data);
                        console.log(travelResults);
                        $('#results')
                            .append(travelResults);
                    }
                });
            });
    });
