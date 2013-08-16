KISSY.add('fire/test', function(S, Brick) {
	var Test = function() {
		Test.superclass.constructor.apply(this, arguments);
	};

	Test.ATTRS = {
		name: {
			value: 'wangling'
		}
	};

	Test.FIRES = {
		beforeTest: 'beforeTest',
		afterTest: 'afterTest'
	};

	Test.METHODS = {
		test: function() {
			var self = this;

			self.fire(Test.FIRES.beforeTest);
			console.log('hello,' + self.get('name') + '!');
			self.fire(Test.FIRES.afterTest);
		}
	};

	S.extend(Test, Brick);
	S.augment(Test, Test.METHODS);
	return Test;
}, {
	requires: ['brix/core/brick']
});