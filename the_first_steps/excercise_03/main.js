var gl = {};
var vertexAttrib = {};

function setupWebGLContext()
{
	var canvas = document.getElementById("OUTPUT-CANVAS");
	gl = canvas.getContext("webgl");
}

function setupBuffersAndShaders()
{
	var values = new Float32Array(
	[
		-1.0, -0.25,
		 1.0, -0.25,
		-1.0,  0.25,
		 1.0, -0.25,
		 1.0,  0.25,
		-1.0,  0.25
	]);
	mesh = vbo_factory.makeBuffer(values);
	
	var vertex_shader = shader_factory.makeShader(shaders.vertexShader, gl.VERTEX_SHADER);
	var fragment_shader = shader_factory.makeShader(shaders.fragmentShader, gl.FRAGMENT_SHADER);
	program = shader_factory.makeProgram(vertex_shader, fragment_shader);
	
	var vertexPos = shader_factory.getAttributeLocation(program, "aPosition");
	vertexAttrib = vbo_factory.makeVertexAttribute(vertexPos, 2, gl.FLOAT, false, 0, 0);
	
	shader_factory.destroyShader(vertex_shader);
	shader_factory.destroyShader(fragment_shader);
};

function draw()
{
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	vbo_factory.loadVertexAttribute(mesh, vertexAttrib);
	shader_factory.useProgram(program);
	
	gl.drawArrays(gl.TRIANGLES, 0, 6);
	
	shader_factory.unuseProgram();
	vbo_factory.unloadVertexAttribute(vertexAttrib);
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