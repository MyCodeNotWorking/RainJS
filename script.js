var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 480;

var rain = new Rain();
var world = new rain.world();
var renderer = new rain.renderer({
    canvas: canvas,
    ctx: ctx
});
world.renderer = renderer;

var scene1 = new rain.scene();
world.scene = scene1;

var testBody = new rain.body();
scene1.addBody(testBody);

renderer.render(scene1);
console.log(scene1.objects);