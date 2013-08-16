/**
 * returnJSON 利用 new Function 妙用
 * @return {[type]} [description]
 */
(function(){

	function returnJSON(s) {
        if (s) {
            return (new Function('return ' + s))();
        } else {
            return {};
        }
    }
	var str = "{'a':'1','b':'2'}";
	var obj = returnJSON(str);

	console.log(obj);
	console.log(obj.a);

	//测试new Function
	console.log('----------------测试new Function');
	var funcStr = 'var a = 1,b=2;console.log(a+b);'
	new Function(funcStr)();

});

