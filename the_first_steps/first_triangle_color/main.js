var gl = {};
var vertexPos = 0;
var colorPos = 1;

function setupWebGLContext()
{
	var canvas = document.getElementById("OUTPUT-CANVAS");
	gl = canvas.getContext("webgl");
}

function setupBuffersAndShaders()
{
	var positions = new Float32Array(
	[
		0.0, 0.0, // 1st vertex
		1.0, 0.0, // 2nd vertex
		0.0, 1.0  // 3rd vertex
	]);
	geometry = vbo_factory.makeBuffer(positions);
	
	var colors = new Float32Array(
	[
		1.0, 0.0, 0.0, // color of the 1st vertex (red)
		0.0, 1.0, 0.0, // color of the 2nd vertex (green)
		0.0, 0.0, 1.0  // color of the 3rd vertex (blue)
	]);
	color = vbo_factory.makeBuffer(colors);
	
	var vertex_shader = shader_factory.makeShader(shaders.vertexShader, gl.VERTEX_SHADER);
	var fragment_shader = shader_factory.makeShader(shaders.fragmentShader, gl.FRAGMENT_SHADER);
	program = shader_factory.makeProgram(vertex_shader, fragment_shader);
	
	vertexPos = shader_factory.getAttributeLocation(program, "aPosition");
	colorPos = shader_factory.getAttributeLocation(program, "aColor");
	
	shader_factory.destroyShader(vertex_shader);
	shader_factory.destroyShader(fragment_shader);
};

function draw()
{
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	vbo_factory.loadBuffer(geometry, vertexPos, 2, gl.FLOAT, false, 0, 0);
	vbo_factory.loadBuffer(color, colorPos, 3, gl.FLOAT, false, 0, 0);
	shader_factory.useProgram(program);
	
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	
	shader_factory.unuseProgram();
	vbo_factory.unloadBuffer(vertexPos);
	vbo_factory.unloadBuffer(colorPos);
}

function teardown()
{
	shader_factory.destroyProgram(program);
	vbo_factory.destroyBuffer(geometry);
	vbo_factory.destroyBuffer(color);
}

function main()
{
	setupWebGLContext();
	setupBuffersAndShaders();
	draw();
	teardown();
}

window.onload = main;