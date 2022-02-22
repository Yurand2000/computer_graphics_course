var shaders = (function (me)
{
	me.vertexShader = 
		"attribute vec2 aPosition;\
		attribute vec3 aColor;\
		\
		varying vec3 fColor;\
		\
		void main()\
		{\
			fColor = aColor;\
			gl_Position = vec4(aPosition, 0.0, 1.0);\
		}";

	return me;
} (shaders || {}));