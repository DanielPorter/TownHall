angular.module("sc-unfollow-guide.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <div class=\"panel\">\n      <h1>somethin</h1>\n    </div>\n    <p>{{hello}}</p>\n\n    <p>{{tracks.length}}</p>\n    <ul>\n      <li ng-repeat=\"track in tracks\">\n        <ul>\n          <li>{{track}}</li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>");}]);