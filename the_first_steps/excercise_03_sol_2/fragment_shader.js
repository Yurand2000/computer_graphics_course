var shaders = (function (me)
{
	me.fragmentShader = 
		"precision highp float;\
		varying vec2 fUvCoord;\
		\
		vec3 hsvToRgb(vec3 hsv);\
		\
		void main()\
		{\
			vec3 hsv_color = vec3( fUvCoord.x * 360.0, fUvCoord.y, 1.0 );\
			gl_FragColor = vec4( hsvToRgb(hsv_color), 1.0 );\
		}\
		\
		vec3 hsvToRgb(vec3 hsv)\
		{\
			float H = hsv.x;\
			float C = hsv.z * hsv.y;\
			float X = C * ( 1.0 - abs( mod(H / 60.0, 2.0) - 1.0 ) );\
			float m = hsv.z - C;\
			\
			vec3 temp_color = vec3(0);\
			if     (H >=   0.0 && H <  60.0) temp_color = vec3(C, X, 0.0);\
			else if(H >=  60.0 && H < 120.0) temp_color = vec3(X, C, 0.0);\
			else if(H >= 120.0 && H < 180.0) temp_color = vec3(0.0, C, X);\
			else if(H >= 180.0 && H < 240.0) temp_color = vec3(0.0, X, C);\
			else if(H >= 240.0 && H < 300.0) temp_color = vec3(X, 0.0, C);\
			else if(H >= 300.0 && H < 360.0) temp_color = vec3(C, 0.0, X);\
			\
			return temp_color + vec3(m);\
		}";

	return me;
} (shaders || {}));