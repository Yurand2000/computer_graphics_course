var shader_factory = ( function (me)
{
	me.makeProgram = function (vertex_shader, fragment_shader)
	{
		var program = gl.createProgram();
		gl.attachShader(program, vertex_shader);
		gl.attachShader(program, fragment_shader);
		gl.bindAttribLocation(program, vertexPos, "aPosition");
		gl.linkProgram(program);
		
		return program;
	};
	
	me.useProgram = function (program)
	{
		gl.useProgram(program);
	};
	
	me.unuseProgram = function ()
	{
		gl.useProgram(null);
	};
	
	me.destroyProgram = function (program)
	{
		gl.deleteProgram(program);
	};

	return me;
} (shader_factory || {}));