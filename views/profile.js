'use strict';

$(document)
    .ready(function() {
            console.log("it's working");
            $('.addHack')
                .on('submit', function(e) {
                    e.preventDefault();
                    let formData = {};
                    $('.addHack')
                        .each(function() {
                            if (this.id !== 'submit') {
                                console.log($(this));
                                formData[this.id] = $(this)
                                    .val();
                            }
                            //     formData['additional'] = $('#additional')
                            //         .value;
                            // });
                            $.post({
                                data: JSON.stringify(formData),
                                url: '/computer',
                                dataType: 'json',
                                contentType: 'application/json; charset=UTF-8'
                            });
                        });
                });
