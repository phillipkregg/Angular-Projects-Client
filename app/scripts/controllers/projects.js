'use strict';

angular.module('projectStandaloneApp')
  .controller('ProjectsController', ['$scope', 'Project', function($scope, Project) {
    $scope.heading = "Angular Projects";
    
    $scope.projects = Project.query();
    
    $scope.newProject = {
      title: 'a default title'
    }
    
    $scope.create = function() {
      Project.save($scope.newProject, function(resource) {
        $scope.projects.push(resource);
        $scope.newProject = {};
      }, function (response) {
        console.log('Error ' + response.status);
      })
    }
    
  }]);