(function () {
    'use strict';
    angular.module('ContactCheck',[]).
    controller('ContactCheckController', ContactCheckController);
    ContactCheckController.$inject = ['$scope'];
    function ContactCheckController($scope) 
    {
      $scope.contactCheck = function()
      {
        var s = $scope.contactMenu;
          // code for second and third step
          if(s!=undefined && s!=' ')
          { 
            
            
            var word =s.split(',');
            for (var i = 0; i< word.length; i++)
            {
             var text = "<div style='color:green'>";
             for ( var count = 0; count<word.length; count++) {
              text += "<p>" + word[count] + "</p>";
            }
            text += "</div>";
            document.getElementById("demo").innerHTML = text ;
            
            }
          }
          else{
          $scope.message = 'Please enter data first';
          $scope.color='red';
          }        
        }
       };
  })();
 

                    


 

