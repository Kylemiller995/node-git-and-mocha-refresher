var assert = require('assert');
var Task = require('../constructors/task.js');

describe('Tasks', function () {

	var task;

	beforeEach(function () {
		task = new Task( 1, 2, 1000 )
	})

  it("should be able to complete task", function(){
    task.complete()
    assert.strictEqual(task.completed, true)
  })



})
