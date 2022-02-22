var gl = {};
var vertexAttrib = {};
var colorAttrib = {};

function setupWebGLContext()
{
	var canvas = document.getElementById("OUTPUT-CANVAS");
	gl = canvas.getContext("webgl");
}

function setupBuffersAndShaders()
{
	var values = new Float32Array(
	[
		0.0, 0.0, // 1st vertex
		1.0, 0.0, 0.0, // color of the 1st vertex (red)
		1.0, 0.0, // 2nd vertex
		0.0, 1.0, 0.0, // color of the 2nd vertex (green)
		0.0, 1.0,  // 3rd vertex
		0.0, 0.0, 1.0  // color of the 3rd vertex (blue)
	]);
	mesh = vbo_factory.makeBuffer(values);
	
	var vertex_shader = shader_factory.makeShader(shaders.vertexShader, gl.VERTEX_SHADER);
	var fragment_shader = shader_factory.makeShader(shaders.fragmentShader, gl.FRAGMENT_SHADER);
	program = shader_factory.makeProgram(vertex_shader, fragment_shader);
	
	var vertexPos = shader_factory.getAttributeLocation(program, "aPosition");
	var colorPos = shader_factory.getAttributeLocation(program, "aColor");
	vertexAttrib = vbo_factory.makeVertexAttribute(vertexPos, 2, gl.FLOAT, false, 20, 0);
	colorAttrib = vbo_factory.makeVertexAttribute(colorPos, 3, gl.FLOAT, false, 20, 8);
	
	shader_factory.destroyShader(vertex_shader);
	shader_factory.destroyShader(fragment_shader);
};

function draw()
{
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	vbo_factory.loadVertexAttribute(mesh, vertexAttrib);
	vbo_factory.loadVertexAttribute(mesh, colorAttrib);
	shader_factory.useProgram(program);
	
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	
	shader_factory.unuseProgram();
	vbo_factory.unloadVertexAttribute(vertexAttrib);
	vbo_factory.unloadVertexAttribute(colorAttrib);
}

function teardown()
{
	shader_factory.destroyProgram(program);
	vbo_factory.destroyBuffer(mesh);
}

function main()
{
	setupWebGLContext();
	setupBuffersAndShaders();
	draw();
	teardown();
}

window.onload = main;