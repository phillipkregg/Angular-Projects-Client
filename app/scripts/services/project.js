'use strict';

angular.module('projectStandaloneApp')
  .factory('Project', ['$resource', function($resource) {
    return $resource('http://test-box-34860.use1.nitrousbox.com\\:4000/projects.json/:projectId/project_todos/:project_todo_id');
  }]);