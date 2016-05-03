SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "fetch": "npm:whatwg-fetch@1.0.0",
    "jquery": "npm:jquery@2.2.3",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "router5": "npm:router5@3.0.3",
    "router5-history": "npm:router5-history@3.0.3",
    "router5-listeners": "npm:router5-listeners@3.0.0"
  },
  packages: {
    "npm:route-node@1.4.1": {
      "map": {
        "path-parser": "npm:path-parser@1.0.2",
        "search-params": "npm:search-params@1.2.0"
      }
    },
    "npm:router5-listeners@3.0.0": {
      "map": {
        "router5.transition-path": "npm:router5.transition-path@3.0.0"
      }
    },
    "npm:router5@3.0.3": {
      "map": {
        "route-node": "npm:route-node@1.4.1",
        "router5.transition-path": "npm:router5.transition-path@3.0.0"
      }
    }
  }
});
