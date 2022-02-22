var shaders = (function (me)
{
	me.fragmentShader = 
		"precision highp float;\
		varying vec3 fColor;\
		\
		void main()\
		{\
			gl_FragColor = vec4(fColor, 1.0);\
		}";

	return me;
} (shaders || {}));