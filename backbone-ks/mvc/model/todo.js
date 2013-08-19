KISSY.add('model/todo', function(S, Todos) {


	var Todo = Backbone.Model.extend({

		// Default attributes for the todo item.
		defaults: function() {
			return {
				title: "empty todo...",
				order: Todos.nextOrder(),
				done: false
			};
		},

		// Toggle the `done` state of this todo item.
		toggle: function() {
			this.save({
				done: !this.get("done")
			});
		}

	});

	return Todo;
}, {
	requires: ['collection/todo-list']
});