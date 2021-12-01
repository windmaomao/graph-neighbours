(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.GraphNeighbours = {}));
})(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Graph = adjFn => {
    // neighbours for each node
    var neighbours = node => (typeof adjFn === 'function' ? adjFn(node) : adjFn[node]) || []; // traverse from src node
    //    visiting nodes on the way
    // src - starting node
    // cb - callback for node visit
    // options.visited - visited nodes to start
    // options.nextCb - callback for the next node
    // options.method - travase method, 'dfs' or 'bfs'


    var traverse = function traverse(src, cb) {
      var {
        visited,
        nextCb,
        method
      } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var marked = visited || {};
      var queue = [src];
      var nextQueued = method === 'bfs' ? q => q.shift() : q => q.pop();
      var node;

      while ((node = nextQueued(queue)) != undefined && !marked[node]) {
        marked[node] = true;
        cb && cb(node);

        for (var next of neighbours(node)) {
          nextCb && nextCb(next, node, !!marked[node]);
          if (!marked[next]) queue.push(next);
        }
      }

      return marked;
    };

    var dfs = function dfs(src, cb) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      traverse(src, cb, options);
    };

    var bfs = function bfs(src, cb) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      traverse(src, cb, _objectSpread2(_objectSpread2({}, options), {}, {
        method: 'bfs'
      }));
    };

    return {
      neighbours,
      traverse,
      dfs,
      bfs
    };
  };

  var graph = Graph;

  var src = graph;

  exports["default"] = src;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
