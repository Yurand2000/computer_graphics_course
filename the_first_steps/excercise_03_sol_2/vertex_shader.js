var shaders = (function (me)
{
	me.vertexShader = 
		"attribute vec2 aPosition;\
		attribute vec2 aUvCoord;\
		\
		varying vec2 fUvCoord;\
		void main()\
		{\
			fUvCoord = aUvCoord;\
			gl_Position = vec4(aPosition, 0.0, 1.0);\
		}\
		";

	return me;
} (shaders || {}));