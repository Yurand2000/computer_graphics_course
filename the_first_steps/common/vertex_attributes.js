var vbo_factory = ( function (me)
{	
	me.makeVertexAttribute = function (position, count, type, normalized, stride, offset)
	{
		var attribute = {};
		attribute.index = position;
		attribute.count = count;
		attribute.type = type;
		attribute.normalized = normalized;
		attribute.stride = stride;
		attribute.offset = offset;
		return attribute;
	};
	
	me.loadVertexAttribute = function(buffer, attribute)
	{
		me.loadBuffer(buffer, attribute.index, attribute.count, attribute.type, attribute.normalized, attribute.stride, attribute.offset);
	};
	
	me.unloadVertexAttribute = function(attribute)
	{
		me.unloadBuffer(attribute.index);
	};
	
	return me;
} (vbo_factory || {}));