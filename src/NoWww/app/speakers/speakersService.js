(function () {
    'use strict';

    angular
    	.module('app.services')
    	.factory('speakerService', speakerService);

   	speakerService.$inject = ['$http'];

   	function speakerService($http){
   		return {
   			getSpeakers : getSpeakers
   		};

   		function getSpeakers () {
   			return $http.get('/api/speakers')
   				.then(getSpeakersComplete)
   				.catch(getSpeakersFailed);
   		

   			function getSpeakersComplete(response) {
   				return response.data;
   			}

   			function getSpeakersFailed(error){
   				// todo: should implement logger
   				return error;
   			}
   		}


   	}

})();