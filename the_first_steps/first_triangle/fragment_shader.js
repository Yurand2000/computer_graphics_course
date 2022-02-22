var shaders = (function (me)
{
	me.fragmentShader = 
		"void main()\
		{\
			gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\
		}";

	return me;
} (shaders || {}));