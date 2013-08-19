/**
 * 程序入口
 * @return {[type]} [description]
 */
// $(function(){

// 	KISSY.use('view/app-view', function(S, App){
// 		new App();
// 	});
// });

KISSY.config({
	debug:true,
	packages:[
		{
			name:'view',
			path:'./mvc/'
		},
		{
			name:'model',
			path:'./mvc/'
		},
		{
			name:'collection',
			path:'./mvc/'
		}
	],
	tag:'20130819'
});

KISSY.ready(function(S){
	console.log(2222);
	S.use('view/app-view', function(S, App){
		console.log(111111111111111);
		new App();
	});
});