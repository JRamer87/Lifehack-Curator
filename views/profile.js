'use strict';

$(document)
    .ready(function() {
        console.log("it's working");
        $('#addHack')
            .on('click', function(event) {
                console.log('clicked');
                event.preventDefault();
                let formData = {};
                $('.addHack')
                    .each(function() {
                        if (this.id !== 'addHack') {
                            console.log($(this));
                            formData[this.id] = $(this)
                                .val();
                        }
                        console.log(formData);
                        //     formData['additional'] = $('#additional')
                        //         .value;
                    });
                $.post({
                    data: JSON.stringify(formData),
                    url: '/lifehacks',
                    dataType: 'json',
                    contentType: 'application/json; charset=UTF-8'
                });
            });
    });
