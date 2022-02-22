var vbo_factory = ( function (me)
{	
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
	
	me.loadBuffer = function (buffer, vertexPos, count, type, normalized, stride, offset)
	{
		me.bindBuffer(buffer);
		gl.enableVertexAttribArray(vertexPos);
		gl.vertexAttribPointer(vertexPos, count, type, normalized, stride, offset);
		me.unbindBuffer();
	};
	
	me.unloadBuffer = function (vertexPos)
	{
		gl.disableVertexAttribArray(vertexPos);
	};
	
	return me;
} (vbo_factory || {}));