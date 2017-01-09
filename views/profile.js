'use strict';

$(document)
    .ready(function() {
        console.log("it's working");
        $('#newHack')
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked new hack');
                let newitionalHackCategoryId = $('#newHackCategoryId')
                    .val();
                let newHackName = $('#newHackName')
                    .val();
                let newHackDescription = $('#newHackDescription')
                    .val();
                let newHackUrl = $('#newHackUrl')
                    .val();
                let newHackUserId = $('#newHackUserId')
                    .val();
                console.log(newHackCategoryId, newHackName, newHackDescription, newHackUrl, newHackUserId);
                // $.post({
                //     data: JSON.stringify(formData),
                //     url: '/lifehacks',
                //     dataType: 'json',
                //     contentType: 'application/json; charset=UTF-8'
                // });
            });
        $('#updateHackButton')
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked update hack');
                let updateHackCategoryId = $('#updateHackCategory')
                    .val();
                let updateHackPostId = $('#updateHackPostId')
                    .val();
                let updateHackName = $('#updateHackName')
                    .val();
                let updateHackDescription = $('#updateHackDescription')
                    .val();
                let updateHackUrl = $('#updateHackUrl')
                    .val();
                let updateHackUserId = $('#updateHackUserId')
                    .val();
                console.log(updateHackCategoryId, updateHackPostId, updateHackName, updateHackDescription, updateHackUrl, updateHackUserId);
                $.post({
                    data: JSON.stringify(formData),
                    url: '/lifehacks',
                    dataType: 'json',
                    contentType: 'application/json; charset=UTF-8'
                });
            });
        $('#deleteHackButton')
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked delete hack');
                let deleteHackCategoryId = $('#deleteHackCategory')
                    .val();
                let deleteHackPostId = $('#deleteHackPostId')
                    .val();
                console.log(deleteHackPostId, deleteHackPostId);
                $.post({
                    data: JSON.stringify(formData),
                    url: '/lifehacks',
                    dataType: 'json',
                    contentType: 'application/json; charset=UTF-8'
                });
            });
    });
