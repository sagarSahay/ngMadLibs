angular.module('madLibsApp',[])
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
							  gender:"" }
		});