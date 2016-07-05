'use strict';

$(document).ready(function() {
  var taskManager = new TaskManager();
  $('#task-form').on('submit', function(event) {
    console.log(event);
    event.preventDefault();
    var text = $('#task-content').val();
    taskManager.addTask(text);
  });
});
