KISSY.add('a/a', function(S, C){
	var A = function(){
	};

	A.prototype = {
		test:function(){
			console.log('-------------a test--------------');

			new C().test();
		}
	}

	return A;
}, {
	requires:['c/c']
});