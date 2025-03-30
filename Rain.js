class RainBody {
  constructor(options = {}) {
    this.fillColor = options.fillColor || "red";
    this.borderWidth = options.borderWidth || 0.05;
    this.borderColor = options.borderColor || "black";
    this.vertices = options.vertices || [{x: 1, y: 1}, {x: 1.5, y: 1}, {x: 1.5, y: 1.5}, {x: 1, y: 1.5}];
  } // units of measurement is in meters, this is a rigidbody
}

class RainScene {
  constructor(options = {}) {
    this.objects = [];
    this.backgroundColor = options.backgroundColor || "lightblue";
    //add properties like gravity and sleep so that the scene can be paused
  }
  
  update() {
    // ... 
  }

  addBody(body) {
    this.objects.push(body);
  }
}

class RainRenderer {
  constructor(options = {}) {
    this.canvas = options.canvas || null;
    this.ctx = options.ctx || null;
    this.scale = options.scale || 100;
  }
  
  render(scene) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = scene.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();
    this.ctx.scale(this.scale, this.scale);

    for (var i = 0; i < scene.objects.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(scene.objects[i].vertices[0].x, scene.objects[i].vertices[0].y);
      for (var j = 1; j < scene.objects[i].vertices.length; j++) {
          this.ctx.lineTo(scene.objects[i].vertices[j].x, scene.objects[i].vertices[j].y);
      }
      this.ctx.closePath();
      this.ctx.strokeStyle = scene.objects[i].borderColor;
      this.ctx.lineWidth = scene.objects[i].borderWidth;
      this.ctx.fillStyle = scene.objects[i].fillColor;
      this.ctx.fill();
      this.ctx.stroke();
    }

    this.ctx.restore();
  }
}

class RainWorld {
  constructor() {
    this.renderer = null;
    this.scene = null;
  }
}

class Rain {
  constructor() {}
}

Rain.prototype.world = RainWorld;
Rain.prototype.body = RainBody;
Rain.prototype.scene = RainScene;
Rain.prototype.renderer = RainRenderer;
