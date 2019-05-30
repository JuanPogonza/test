var directiveModule = angular.module('directiveModule', []);


directiveModule.directive("focusFilter", function() {
  return {
  	estrcict: 'A',
    link: function(scope, element,) {
    	element.bind('click', function(){
    		element.children()[1].focus()
    	})
    }
  };
})

directiveModule.directive("cleanFilter", function() {
  return {
  	estrcict: 'A',
    link: function(scope, element) {
    	element.bind('click', function(){
    		element.parent().find('input').val('');
    	})
    }
  };
})