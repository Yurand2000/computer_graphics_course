var gl = {};
var vertexPos = 0;

function setupWebGLContext()
{
	var canvas = document.getElementById("OUTPUT-CANVAS");
	gl = canvas.getContext("webgl");
}

function setupBuffersAndShaders()
{
	var positions = [
	0.0, 0.0, // 1st vertex
	1.0, 0.0, // 2nd vertex
	0.0, 1.0  // 3rd vertex
	];
	var type_positions = new Float32Array(positions);
	buffer = vbo_factory.makeBuffer(type_positions);
	
	var vertex_shader = shader_factory.makeShader(shaders.vertexShader, gl.VERTEX_SHADER);
	var fragment_shader = shader_factory.makeShader(shaders.fragmentShader, gl.FRAGMENT_SHADER);
	program = shader_factory.makeProgram(vertex_shader, fragment_shader);
	
	shader_factory.destroyShader(vertex_shader);
	shader_factory.destroyShader(fragment_shader);
};

function draw()
{
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	vbo_factory.bindBuffer(buffer);
	shader_factory.useProgram(program);
	
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	
	shader_factory.unuseProgram();
	vbo_factory.unbindBuffer();
}

function teardown()
{
	shader_factory.destroyProgram(program);
	vbo_factory.destroyBuffer(buffer);
}

function main()
{
	setupWebGLContext();
	setupBuffersAndShaders();
	draw();
	teardown();
}

window.onload = main;