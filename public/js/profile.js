'use strict';

$(document)
    .ready(function() {
        console.log("it's working");
        $('#newHack')
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked new hack');
                let newHackName = $('#newHackName')
                    .val();
                let newHackDescription = $('#newHackDescription')
                    .val();
                let newHackUrl = $('#newHackUrl')
                    .val();
                let newHackCategoryId = $('#newHackCategoryId')
                    .val();
                let newHackUserId = $('#newHackUserId')
                    .val();
                console.log(newHackCategoryId, newHackName, newHackDescription, newHackUrl, newHackUserId);
                $.ajax({
                    url: '/lifehacks',
                    method: "POST",
                    data: JSON.stringify({
                        category_id: newHackCategoryId,
                        name: newHackName,
                        description: newHackDescription,
                        url: newHackUrl,
                        user_id: newHackUserId
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
                $.ajax({
                    url: '/lifehacks',
                    method: "PATCH",
                    data: JSON.stringify({
                        category_id: updateHackCategoryId,
                        name: updateHackName,
                        description: updateHackDescription,
                        url: updateHackUrl,
                        user_id: updateHackUserId,
                        id: updateHackPostId
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
        $('#deleteHackButton')
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked delete hack');
                // let deleteHackCategoryId = $('#deleteHackCategory')
                //     .val();
                let deleteHackPostId = $('#deleteHackPostId')
                    .val();
                console.log(deleteHackPostId);
                $.ajax({
                    url: '/lifehacks',
                    method: "DELETE",
                    data: JSON.stringify({
                        id: deleteHackPostId
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
    });
