var shaders = (function (me)
{
	me.vertexShader = 
		"attribute vec2 aPosition;\
		void main()\
		{\
			gl_Position = vec4(aPosition, 0.0, 1.0);\
		}";

	return me;
} (shaders || {}));