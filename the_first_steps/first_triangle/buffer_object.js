var vbo_factory = ( function ()
{
	var me = {};
	
	me.makeBuffer = function (positions)
	{
		var buffer = gl.createBuffer();
		me.bindBuffer(buffer);		
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);		
		me.unbindBuffer();
		return buffer;
	};
	
	me.bindBuffer = function (buffer)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	};
	
	me.unbindBuffer = function ()
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, null);
	};
	
	me.destroyBuffer = function (buffer)
	{
		gl.deleteBuffer(buffer);
	};
	
	me.loadBuffer = function (buffer)
	{
		me.bindBuffer(buffer);
		gl.enableVertexAttribArray(vertexPos);
		gl.vertexAttribPointer(vertexPos, 2, gl.FLOAT, false, 0, 0);
		me.unbindBuffer();
	};
	
	me.unloadBuffer = function ()
	{
		gl.disableVertexAttribArray(vertexPos);
	};
	
	return me;
} ());