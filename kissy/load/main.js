KISSY.ready(function(S){

	KISSY.config({
		debug:true,
		combine: true,
		packages:[
			{
				name: 'a',
				path:'./',
				tag: '',
				combine: false
			},
			{
				name: 'b',
				path:'./',
				tag: '',
				combine: false
			},
			{
				name: 'c',
				path:'./',
				tag: '',
				combine: false
			}
		]
	});

	S.use('a/a', function(S, A){
		new A().test();
	});
	S.use('b/b', function(S, B){
		new B().test();
	});
});