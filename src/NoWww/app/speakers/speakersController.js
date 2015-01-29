(function () {
    'use strict';

    angular
    	.module('app.controllers')
    	.controller('Speakers', Speakers);

    Speakers.$inject = ['speakerService'];

    function Speakers(speakerService) {
        var vm = this;
        vm.speakers = [];

        activate();

        function activate() {
            return getSpeakers().then(function () {
                console.log('Speakers View Activated');
            });
        }

        function getSpeakers() {
            return speakerService.getSpeakers()
    			.then(function (data) {
    			    vm.speakers = data;
    			    return vm.speakers;
    			});
        }
    }


})();