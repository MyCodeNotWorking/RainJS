class RainBody {
  constructor() {} //add properties like mass, verticies, color etc. This is a rigid body
}

class RainScene {
  constructor() {
    this.objects = [];
    //add properties like gravity or sleep
  }
  
  update() {
    // ... 
  }

  addObject() {
    // ...
  }
}

class RainRenderer {
  constructor() {
    this.canvas = null;
  }
  
  render(scene) {
    // ... 
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
