var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope) {
    $scope.flag = false;

    $scope.toggle = function() {
        $scope.flag = !$scope.flag;
    }

    $scope.xxx = "Ori";
});

appModule.directive("myIf", function($http, $q, $rootScope, $compile) {
    return {
        terminal: true,
        compile: function(element, attrs) {
            console.log("compile", element, attrs);

            element.removeAttr("my-if");

            var marker = angular.element("<!-- myIf: " + attrs.myIf + " -->");
            marker.insertBefore(element);

            //var template = angular.element(element[0].outerHTML);
            //console.log(template);

            element.remove();

            var linkFn = $compile(element);

            return function link(parentScope, element, attrs) {
                console.log("link", element, attrs);

                var newScope = null;
                var newElement = null;

                parentScope.$watch(attrs.myIf, function(newValue) {
                    console.log("CHANGE: " + newValue);

                    if(newValue) {
                        newScope = parentScope.$new();
                        newElement = linkFn(newScope, function(clone) {
                        });

                        newElement.insertAfter(marker);
                    }
                    else {
                        if(newScope) {
                            newScope.$destroy();
                            newScope = null;
                        }

                        if(newElement) {
                            newElement.remove();
                            newElement = null;
                        }
                    }
                });
            }
        }
    };
});
