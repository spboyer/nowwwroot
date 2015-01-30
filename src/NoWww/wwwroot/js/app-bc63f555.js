/**
 * nowwwroot - 
 * @authors Shayne Boyer
 * @version v1.0.0
 * @link https://github.com/spboyer/nowwwroot
 * @license MIT
 */
!function(){"use strict";angular.module("app.controllers",[])}(),function(){"use strict";angular.module("app.services",[])}(),function(){"use strict";angular.module("app",["app.services","app.controllers"])}(),function(){"use strict";function e(e){function t(){return n().then(function(){console.log("Speakers View Activated")})}function n(){return e.getSpeakers().then(function(e){return r.speakers=e,r.speakers})}var r=this;r.speakers=[],t()}angular.module("app.controllers").controller("Speakers",e),e.$inject=["speakerService"]}(),function(){"use strict";function e(e){function t(){function t(e){return e.data}function n(e){return e}return e.get("/api/speakers").then(t)["catch"](n)}return{getSpeakers:t}}angular.module("app.services").factory("speakerService",e),e.$inject=["$http"]}();