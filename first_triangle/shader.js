var shader_factory = ( function (me)
{
	me.makeShader = function (shader_code, shader_type)
	{
		var shader = gl.createShader(shader_type);
		gl.shaderSource(shader, shader_code);
		gl.compileShader(shader);
		
		return shader;
	};
	
	me.destroyShader = function (shader)
	{
		gl.deleteShader(shader);
	};

	return me;
} (shader_factory || {}));