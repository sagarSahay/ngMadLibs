angular.module('madLibsApp',['ngAnimate'])
		.controller('dataController',function($scope){
			$scope.ngMadLibs={maleName:'',
							  dirtyTask:"",
							  obnoxiousCelebrity:"",
							  jobTitle:"",
							  celebrity:"",
							  hugeNumber:"",
							  tediousTask:"",
							  uselessSkill:"",
							  adjective:"",
							  gender:"" };
			$scope.changeView=false;

			$scope.submit=function(){
				$scope.changeView=true;
			};
            

			$scope.reset=function(form){
				if (form) {
			      form.$setPristine();
			      form.$setUntouched();
			      $scope.ngMadLibs = {};
			    }
			};
		});