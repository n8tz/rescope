module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Context = __webpack_require__(1);
	
	var _Context2 = _interopRequireDefault(_Context);
	
	var _Store = __webpack_require__(16);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	_Context2.default.Store = _Store2.default;
	
	exports.default = { Store: _Store2.default, Context: _Context2.default };
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 13/08/2017
	 * Time: 17:15
	 */
	
	var isString = __webpack_require__(2),
	    isArray = __webpack_require__(3),
	    EventEmitter = __webpack_require__(4),
	    isFunction = __webpack_require__(5),
	    shortid = __webpack_require__(6),
	    __proto__push = function __proto__push(target, id, parent) {
	    var here = _defineProperty({}, id, function () {});
	    here[id].prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new here[id]();
	    target['_' + id] = here[id];
	};
	
	var openContexts = {};
	
	var Context = function (_EventEmitter) {
	    _inherits(Context, _EventEmitter);
	
	    function Context(ctx) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref.id,
	            parent = _ref.parent,
	            state = _ref.state,
	            datas = _ref.datas,
	            name = _ref.name,
	            defaultMaxListeners = _ref.defaultMaxListeners,
	            persistenceTm = _ref.persistenceTm,
	            autoDestroy = _ref.autoDestroy;
	
	        _classCallCheck(this, Context);
	
	        var _this = _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	        _this._id = id = id || "_____" + shortid.generate();
	
	        if (openContexts[id]) {
	            var _ret;
	
	            // openContexts[id].register(ctx);
	            return _ret = openContexts[id], _possibleConstructorReturn(_this, _ret);
	        }
	
	        openContexts[id] = _this;
	        _this._isLocalId = true;
	        _this._persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.datas = {};
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'datas', parent);
	        _this.parent = parent;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
	
	        _this.sources = [];
	        _this._childContexts = [];
	
	        _this.__retainLocks = { all: 0 };
	        _this.__w8Locks = { all: 1 };
	        _this.__listening = {};
	        _this.__context = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            !parent._stable && _this.wait("isMyParent");
	            parent.on(_this.__parentList = {
	                'stable': function stable(s) {
	                    return _this.release("isMyParent");
	                },
	                'unstable': function unstable(s) {
	                    return _this.wait("isMyParent");
	                },
	                'update': function update(s) {
	                    return _this._propag();
	                }
	            });
	            // this.register(parent.__context, state, datas);
	        }
	
	        _this.register(ctx, state, datas);
	        _this.__w8Locks.all--;
	        _this._stable = !_this.__w8Locks.all;
	
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	        return _this;
	    }
	
	    _createClass(Context, [{
	        key: 'mount',
	        value: function mount(id, state, datas) {
	            var _this2 = this;
	
	            if (isArray(id)) {
	                id.forEach(function (k) {
	                    return _this2._mount(k, state && state[k], datas && datas[k]);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, state, datas) {
	            if (!this.__context[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            this.constructor.Store.mountStore(id, this, null, state, datas);
	            this._watchStore(id);
	            return this.__context[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, datas) {
	            var _this3 = this;
	
	            if (!this.__context[id]) {
	                var _parent2;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._watchStore(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent2 = this.parent)._watchStore.apply(_parent2, arguments);
	            }
	            if (!this.__listening[id] && !isFunction(this.__context[id])) {
	                !this.__context[id].isStable() && this.wait(id);
	
	                this.__context[id].on(this.__listening[id] = {
	                    'update': function update(s) {
	                        return _this3.propag();
	                    },
	                    'stable': function stable(s) {
	                        return _this3.release(id);
	                    },
	                    'unstable': function unstable(s) {
	                        return _this3.wait(id);
	                    }
	                });
	            }
	            return true;
	        }
	    }, {
	        key: 'mixin',
	        value: function mixin(targetCtx) {
	            var _this4 = this;
	
	            var parent = this.parent,
	                lists = void 0;
	            this.__mixed.push(targetCtx);
	            targetCtx.retain();
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this.__mixedList.push(lists = {
	                'stable': function stable(s) {
	                    return _this4.release(targetCtx._id);
	                },
	                'unstable': function unstable(s) {
	                    return _this4.wait(targetCtx._id);
	                },
	                'update': function update(s) {
	                    return _this4._propag();
	                }
	            });
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'datas', parent);
	            targetCtx.relink(targetCtx.__context, this, true);
	
	            __proto__push(this, 'stores', this);
	            __proto__push(this, 'state', this);
	            __proto__push(this, 'datas', this);
	            this.relink(this.__context, this);
	        }
	    }, {
	        key: 'register',
	        value: function register(rawCtx) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var datas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(rawCtx, this, false, state, datas);
	            Object.keys(rawCtx).forEach(function (id) {
	                return isFunction(rawCtx[id]) && rawCtx[id].singleton && _this5._mount(id, state[id], datas[id]);
	            });
	        }
	
	        /**
	         * Map srcCtx store's on targetCtx headers proto's
	         * @param srcCtx
	         * @param targetCtx
	         * @param state
	         * @param datas
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(srcCtx) {
	            var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	            var external = arguments[2];
	
	            var _this6 = this;
	
	            var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	            var datas = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	            var lctx = targetCtx._stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (targetCtx.__context[id] === srcCtx[id] || targetCtx.__context[id] && targetCtx.__context[id].constructor === srcCtx[id]) return;
	
	                if (targetCtx.__context[id]) {
	                    console.warn("Rescope Context : ", id, " already exist in this context !");
	                    return;
	                }
	                if (!external) _this6.__context[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return _this6.__context[id];
	                        }
	                    };
	                }(_this6.__context, id));
	                Object.defineProperty(targetCtx._state.prototype, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return ctx[id] && ctx[id].state;
	                        },
	                        set: function set(v) {
	                            return _this6._mount(id, v);
	                        }
	                    };
	                }(_this6.__context, id));
	                Object.defineProperty(targetCtx._datas.prototype, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return ctx[id] && ctx[id].datas;
	                        },
	                        set: function set(v) {
	                            return _this6._mount(id, undefined, v);
	                        }
	                    };
	                }(_this6.__context, id));
	            });
	        }
	
	        /**
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                datas = void 0;
	            if (key && !isArray(key)) key = [key];
	
	            // key = key||
	
	            if (as === true) {
	                setInitial = true;
	                as = null;
	            }
	
	            this._followers.push([obj, key, as, lastRevs = key && key.reduce(function (revs, id) {
	                return revs[id] = 0, revs;
	            }, {})]);
	
	            this.mount(key);
	
	            if (setInitial && this._stable) {
	                datas = this.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas);
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            }
	        }
	
	        /**
	         * Un bind this context off the given component-keys
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key, as) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && '' + followers[i][2] == '' + as) return followers.splice(i, 1);
	            }
	        }
	    }, {
	        key: 'map',
	        value: function map(to, stores) {
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            this.mount(stores);
	            bind && this.bind(to, stores, null, false);
	
	            return stores.reduce(function (datas, id) {
	                return datas[id] = _this7.stores[id] && _this7.stores[id].datas, datas;
	            }, {});
	        }
	    }, {
	        key: 'getStoresRevs',
	        value: function getStoresRevs() {
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var ctx = this.__context;
	
	            Object.keys(ctx).forEach(function (id) {
	                if (!isFunction(ctx[id])) {
	                    stores[id] = ctx[id]._rev;
	                } else if (!stores.hasOwnProperty(id)) stores[id] = false;
	            });
	
	            this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getStoresRevs(stores), stores;
	            }, stores);
	            this.parent && this.parent.getStoresRevs(stores);
	            return stores;
	        }
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(revs, output, updated) {
	            var _this8 = this;
	
	            var ctx = this.__context;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output[id] && (!revs || revs.hasOwnProperty(id) && revs[id] === undefined || !(!revs.hasOwnProperty(id) || ctx[id]._rev <= revs[id]))) {
	
	                    updated = true;
	
	                    output[id] = _this8.datas[id];
	                    if (revs && revs[id] !== undefined) revs[id] = ctx[id]._rev;
	                }
	            });
	            updated = this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(revs, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(revs, output, updated) || updated;
	            return updated && output;
	        }
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this9 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__context,
	                output = { state: {}, datas: {} },
	                _flags_states = void 0,
	                _flags_datas = void 0;
	            if (isArray(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (isArray(flags_datas)) flags_datas.forEach(function (id) {
	                return output.datas[id] = _this9.datas[id];
	            });
	
	            if (!isArray(flags_datas) && !isArray(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (isFunction(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = isArray(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_datas.test(flag);
	                }, false)) output.datas[id] = _this9.datas[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this10 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', _this10).call(_this10, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this11 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'removeListener', _this11).call(_this11, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this12 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this12.datas);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref2, quiet) {
	            var state = _ref2.state,
	                datas = _ref2.datas;
	
	            var ctx = this.__context;
	            Object.keys(datas).forEach(function (id) {
	                quiet ? ctx.datas = datas[id] : ctx.push(datas[id]);
	            });
	            Object.keys(state).forEach(function (id) {
	                quiet ? ctx.state = state[id] : ctx.setState(state[id]);
	            });
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].retain && _this13.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
	            });
	        }
	    }, {
	        key: 'wait',
	        value: function wait(reason) {
	            //  console.log("wait", reason);
	            this._stable && !this.__w8Locks.all && this.emit("unstable", this);
	            this._stable = false;
	            this.__w8Locks.all++;
	            if (reason) {
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]++;
	            }
	        }
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this15 = this;
	
	            //console.log("release", reason);
	
	
	            if (reason) {
	                if (this.__w8Locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]--;
	            }
	            if (this.__w8Locks.all == 0) console.error("Release more than locking !");
	            this.__w8Locks.all--;
	            if (!this.__w8Locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	                this._propagTM && clearTimeout(this._propagTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    if (!_this15.__w8Locks.all) return _this15._stabilizerTM = null;
	
	                    _this15._stable = true;
	                    _this15.emit("stable", _this15);
	
	                    _this15._propag();
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this16 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this16._propag();
	            }, 50);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var datas = _this17.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            });
	            this.emit("update", this.getUpdates());
	        }
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._childContexts));
	            this._childContexts.forEach(function (ctx) {
	                ctx._getAllChilds(childs);
	            });
	            return childs;
	        }
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            this._childContexts.push(ctx);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._childContexts.indexOf(ctx);
	            if (i != -1) this._childContexts.splice(i, 1);
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retainLocks.all++;
	            //console.log("retain", this._id, reason);
	
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this18 = this;
	
	            if (reason) {
	
	                if (this.__retainLocks[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retainLocks.all--;
	
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        // console.log("wtf ctx", this._id, reason, this.__w8Locks, this._stable);
	                        _this18.then(function (s) {
	                            //   console.log("wtf ctx then", this._id, reason, this.__w8Locks);
	                            !_this18.__retainLocks.all && _this18.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this18.__retainLocks.all && _this18.destroy();
	                    });
	                }
	            }
	        }
	
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this19 = this;
	
	            var ctx = this.__context;
	
	            // console.log("destroy", this._id);
	            this.emit("destroy");
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this19.__context[id].removeListener(_this19.__listening[id]);
	            });
	
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	            this._followers.length = 0;
	
	            for (var key in ctx) {
	                if (!isFunction(ctx[key])) {
	                    if (ctx[key].contextObj === this) ctx[key].destroy();
	
	                    ctx[key] = ctx[key].constructor;
	                }
	            }while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose();
	            }
	            if (this.parent) {
	                this.parent.removeListener(this.__parentList);
	                this.parent.dispose("isMyParent");
	                this.parent._rmChild(this);
	            }
	            // this.datas = this.state = this.context = this.stores = null;
	            // this._datas = this._state = this._stores = null;
	
	        }
	    }], [{
	        key: 'getContext',
	        value: function getContext(key) {
	            return openContexts[key] = openContexts[key] || new Context({});
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.contexts = openContexts;
	Context.Store = null;
	Context.defaultMaxListeners = 100;
	Context.persistenceTm = 0;
	exports.default = Context;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function (factory) {
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else if (typeof exports === 'object' && !!exports && !exports.nodeType)
	    if (typeof module === 'object' && !!module && module.exports)
	      module.exports = factory();
	    else
	      exports['default'] = factory();
	  else if (typeof YUI === 'function' && YUI.add)
	    YUI.add('is-string', function (Y) { Y['default'] = factory(); }, '1.0.7');
	  else
	    String.isString = factory();
	})(function () {
	  var strToString  = ('').toString,
	      hasBind      = Function.prototype && Function.prototype.bind,
	      strToStrCall = hasBind && strToString.call.bind(strToString),
	      isString     = function (str) {
	        /*@cc_on
	          @if (@_jscript_version >= 5) @*/
	            try {
	                hasBind ? strToStrCall(str) : strToString.call(str);
	                return true;
	            } catch (e) {
	                return false;
	            }
	          /*@end
	        @*/
	      };
	
	  return function (str) {
	    return  typeof str === 'string' ||
	            str && typeof str === 'object' &&
	            /*@cc_on
	              @if (@_jscript_version < 5.5)
	                /^\s*function\s*String\(\)\s*{\s*\[native code\]\s*}\s*$/.test(str.constructor)
	              @else @*/
	                isString(str)
	              /*@end
	            @*/
	            || false;
	  };
	});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// if (typeof require !== 'undefined') {}
	
	var isFunction = function (functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = isFunction;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var build = __webpack_require__(13);
	var isValid = __webpack_require__(14);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(15) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(10);
	var alphabet = __webpack_require__(8);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var isString = __webpack_require__(2),
	    isArray = __webpack_require__(3),
	    isFunction = __webpack_require__(5),
	    Context = __webpack_require__(1),
	    EventEmitter = __webpack_require__(4),
	    shortid = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({}),
	    openContexts = {};
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    /**
	     * Constructor, will build a rescope store
	     *
	     * (context, {require,use,refine,state, datas})
	     * (context)
	     *
	     * @param context {object} context where to find the other stores (default : static staticContext )
	     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	     */
	    // default state
	    /**
	     *
	     * @type {number}
	     */
	    // overridable list of source stores
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
	            cfg = argz[0] && !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : {},
	            name = isString(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = isArray(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
	        refine = isFunction(argz[0]) ? argz.shift() : cfg.refine || null,
	            initialState = _static.initialState;
	
	        _this._uid = cfg._uid || shortid.generate();
	        _this._maxListeners = cfg.defaultMaxListeners || Store.defaultMaxListeners;
	        _this.locks = 0;
	        _this._onStabilize = [];
	
	        _this._persistenceTm = cfg.persistenceTm || _this.constructor.persistenceTm;
	        if (isString(argz[0])) {
	            if (context.__context[name]) console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	            context.__context[name] = _this;
	        }
	
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	        // this.state      = this.state || {};
	
	        _this._use = watchs;
	        _this.name = name;
	
	        if (context.stores) {
	            _this.contextObj = context;
	            _this.context = context.stores;
	        } else {
	            _this.contextObj = new Context(context);
	            _this.context = context.stores;
	        }
	
	        _this._stable = true;
	        _this._rev = 1;
	        _this._revs = {};
	        _this.stores = {};
	        _this.__retainLocks = { all: 0 };
	        _this._require = [];
	
	        if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
	        if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
	        _this._followers = [];
	
	        if (cfg.hasOwnProperty("datas") && cfg.datas !== undefined) _this.datas = cfg.datas;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = cfg.state;
	
	        if (refine) _this.refine = refine;
	
	        if (!!_this._use && _this._use.length) {
	            // if there initial watchs anyway
	            _this.pull(_this._use);
	        }
	
	        if (initialState) {
	            // sync refine
	            _this.state = _extends({}, initialState);
	            if (_this.isComplete() && _this.datas === undefined) _this.datas = _this.refine(_this.datas, _this.state, _this.state);
	        }
	        _this._stable = _this.datas !== undefined; // stable if it have initial result datas
	        !_this._stable && _this.emit('unstable', _this.state);
	        return _this;
	    }
	
	    /**
	     * get a Builder-key pair for Store::map
	     * @param {string} name
	     * @returns {{store: Store, name: *}}
	     */
	
	    /**
	     * if retain goes to 0 :
	     * false to not destroy,
	     * 0 to sync auto destroy
	     * Ms to autodestroy after tm ms if no retain has been called
	     * @type {boolean|Int}
	     */
	    // overridable list of store that will allow push if updated
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a state change should be propag to the listening stores & components
	         * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
	         * If not it will always return true
	         */
	        value: function shouldPropag(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.datas;
	
	            // if ( !cState )
	            //     return true;
	            if (!cDatas && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(function (r, i) {
	                return r || nDatas && nDatas[i];
	            }, false))) return true;
	
	            if (isArray(_static.follow)) _static.follow.forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });else if (_static.follow === 'strict') r = nDatas === cDatas;else {
	                cDatas && Object.keys(cDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	                nDatas && Object.keys(nDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	            }
	
	            return !!r;
	        }
	
	        /**
	         * Overridable refiner / remapper
	         * If state or lastPublicState are simple hash maps refine will return {...datas, ...state}
	         * if not it will return the last private state
	         * @param datas
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(datas, state, changes) {
	            state = state || this.state;
	
	            if (!datas || datas.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, datas, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this2 = this;
	
	            var me = this;
	            cb && me.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.datas);
	
	            me._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	                // me._stable       = true;
	                _this2._stabilizer = null;
	                // this.release();
	            }));
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(event) {
	            return;
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this3 = this;
	
	            var initialOutputs = Store.map(this, stores, this.contextObj, origin, true);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.context[s] && _this3.wait(_this3.context[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Apply refine/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(datas, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                me = this,
	                nextState = !datas && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = datas || (this.isComplete(nextState) ? this.refine(this.datas, nextState, this._changesSW) : this.datas);
	
	            this.state = nextState;
	            if (!force && (!this.datas && this.datas === nextDatas || !this.shouldPropag(nextDatas))) {
	                cb && cb();
	                return false;
	            }
	
	            this.datas = nextDatas;
	            this.locks++;
	            this.release(cb);
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setState',
	        value: function setState(pState, cb, sync) {
	            var i = 0,
	                change,
	                changes = this._changesSW = this._changesSW || {};
	            for (var k in pState) {
	                if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }if (sync) {
	                this.push();
	                cb && cb();
	            } else {
	                if (change) {
	                    this.stabilize(cb);
	                } else cb && cb();
	            }
	            return this;
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setStateSync',
	        value: function setStateSync(pState) {
	            var i = 0,
	                change,
	                changes = this._changesSW = this._changesSW || {};
	            for (var k in pState) {
	                if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }this.push();
	            return this.datas;
	        }
	
	        /**
	         * Replace the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'replaceState',
	        value: function replaceState(pState, cb) {
	            var i = 0,
	                me = this;
	            this.state = pState;
	
	            this.stabilize(cb);
	        }
	
	        /**
	         * get a store-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this4 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this5 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * relink bindings & requires
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(from) {
	            var _this6 = this;
	
	            var context = this.contextObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this6.wait(context.__context[store]);
	                });
	            }
	        }
	
	        /**
	         * is complete (all requiered keys are here)
	         * @returns bool
	         */
	
	    }, {
	        key: 'isComplete',
	        value: function isComplete() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var _static = this.constructor;
	            return !this._require || !this._require.length || state && this._require.reduce(function (r, key) {
	                return r && state[key];
	            }, true);
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'isStable',
	        value: function isStable() {
	            return this._stable;
	        }
	
	        /**
	         * Un bind this store off the given component-key
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] == obj && followers[i][1] == key) return followers.splice(i, 1);
	            }
	        }
	
	        /**
	         * Bind this store changes to the given component-key
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key) {
	            var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            this._followers.push([obj, key]);
	            if (setInitial && this.datas && this._stable) {
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, this.datas));else obj.setState(this.datas);
	                } else {
	                    obj(this.datas);
	                }
	            }
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this7 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this7.datas);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it state untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(previous) {
	            if (typeof previous == "number") return this.locks += previous;
	            if (isArray(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.datas);
	            this._stable = false;
	            this.locks++;
	            if (previous && isFunction(previous.then)) {
	                previous.then(this.release.bind(this, null));
	            }
	            return this;
	        }
	
	        /**
	         * Decrease locks for this store, if it reach 0 & it have a public state,
	         * it will be propagated to the followers,
	         * then, all stuff passed to "then" call back will be exec / released
	         * @param desync
	         * @returns {*}
	         */
	
	    }, {
	        key: 'release',
	        value: function release(cb) {
	            var _this8 = this;
	
	            var _static = this.constructor;
	            var i = 0;
	
	            if (this.locks == 0) console.error("Release more than locking !");
	
	            if (! --this.locks && this.datas && this.isComplete()) {
	                this._stable = true;
	
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!_this8.datas) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](_this8.datas);
	                    } else {
	                        // cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this8.datas) : _this8.datas
	                        // ,
	                        // cb && (
	                        //     () => (!(--i) && cb())
	                        // )
	                        );
	                    }
	                });
	
	                this.emit('stable', this.datas);
	                this.emit('update', this.datas);
	                cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            //    console.log("retain", this._uid, reason);
	            this.__retainLocks.all++;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this9 = this;
	
	            if (reason) {
	
	                if (this.__retainLocks[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining !");
	
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this9.then(function (s) {
	                            //  console.log("wtf   ", reason, !this.__retainLocks.all);
	
	                            !_this9.__retainLocks.all && _this9.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this9.__retainLocks.all && _this9.destroy();
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //  console.log("destroy", this._uid);
	
	            this.emit('destroy', this);
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            if (this._followers.length) this._followers.forEach(function (follower) {
	                if (typeof follower[0] !== "function") {
	                    if (follower[0].stores) delete follower[0].stores[follower[1]];
	                }
	            });
	            this._followers.length = 0;
	            this.dead = true;
	            this._revs = this.datas = this.state = this.context = null;
	            this.removeAllListeners();
	        }
	    }], [{
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * Map all named stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {React.Component|Store|...} target state aware object
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, context, origin) {
	            var _this10 = this;
	
	            var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            var targetRevs = component._revs || {};
	            var targetContext = component.stores || (component.stores = {});
	            var initialOutputs = {};
	            keys = isArray(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            context = context || Store.staticContext;
	
	            // if (!targetContext.__context)
	            //     debugger;
	
	            keys = keys.filter(
	            // @todo : use query refs
	            // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
	            function (key) {
	                if (!key) {
	                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	                    return false;
	                }
	                var name = void 0,
	                    alias = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (isFunction(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)(?:\:\[(\*)\])?(?:\:(\*))?/);
	                    name = key[0];
	                    store = context.stores[key[0]];
	                    alias = key[1] == '*' ? null : key[2] || key[0]; // allow binding props  ([*])
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (isFunction(store)) {
	                    _this10.mountStore(name, context);
	
	                    context.stores[name].bind(component, alias, setInitial);
	                    // if ( context.__context[key[0]].state ) {// do sync push after constructor
	                    //     context.__context[key[0]].push();
	                    // }
	                } else {
	                    store.bind(component, alias, setInitial);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetContext[name] && (targetContext[name] = context.stores[name]);
	                if (context.stores[name].hasOwnProperty('datas')) initialOutputs[name] = context.datas[name];
	                return true;
	            });
	            var mixedCWUnmount,
	                unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	            if (component.hasOwnProperty(unMountKey)) {
	                mixedCWUnmount = component[unMountKey];
	            }
	
	            component[unMountKey] = function () {
	                // todo hop
	                delete this[unMountKey];
	                if (mixedCWUnmount) this[unMountKey] = mixedCWUnmount;
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (isFunction(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = context.stores[name];
	                    } else {
	                        key = key.split(':');
	                        name = key[0];
	                        store = context.stores[key[0]];
	                        alias = key[1] || key[0];
	                    }
	
	                    store && !isFunction(store) && store.unBind(component, alias);
	                });
	                return this[unMountKey] && this[unMountKey].apply(this, arguments);
	            };
	
	            return initialOutputs;
	        }
	    }, {
	        key: 'getContext',
	        value: function getContext(contexts) {
	            var skey = isArray(contexts) ? contexts.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : contexts;
	            return Context.contexts[skey] = Context.contexts[skey] || new Context({}, { id: skey });
	        }
	    }, {
	        key: 'mountStore',
	        value: function mountStore(name, context, store, state, datas) {
	            var ctx = void 0,
	                contextMap = context.__context;
	            contextMap[name] = store = store || contextMap[name];
	            if (!store) {
	                console.error("Not a mappable store item '" + name + ' !!', store);
	                return false;
	            } else if (isFunction(store)) {
	                //
	                if (store && (store.contexts || store.context)) {
	                    ctx = this.getContext(store.contexts || [store.context]);
	
	                    ctx.register(_defineProperty({}, name, ctx.__context[name] || store));
	
	                    contextMap[name] = ctx[name] = new store(context, { state: state, datas: datas });
	                    ctx._watchStore(name);
	                    return ctx[name];
	                } else store = contextMap[name] = new store(context, { state: state, datas: datas });
	                contextMap[name].relink(name);
	            } else {
	                if (state !== undefined && datas === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (datas !== undefined) store.push(datas);
	            }
	            return store;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.staticContext = new Context({}, { id: "static" });
	Store.initialState = undefined;
	Store.defaultMaxListeners = 100;
	Store.persistenceTm = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDUyMWY5ZTRiZTI4ODY1OTNkZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIkNvbnRleHQiLCJpc1N0cmluZyIsInJlcXVpcmUiLCJpc0FycmF5IiwiRXZlbnRFbWl0dGVyIiwiaXNGdW5jdGlvbiIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwiY3R4Iiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJfYWRkQ2hpbGQiLCJzb3VyY2VzIiwiX2NoaWxkQ29udGV4dHMiLCJfX3JldGFpbkxvY2tzIiwiYWxsIiwiX193OExvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwicmVnaXN0ZXIiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVkdWNlIiwibW91bnRlZCIsIm1vdW50U3RvcmUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJwdXNoIiwicmVsaW5rIiwicmF3Q3R4IiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwid2FybiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsInVuZGVmaW5lZCIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsInNldFN0YXRlIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIl9yZXYiLCJoYXNPd25Qcm9wZXJ0eSIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YXMiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGFzIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsIl9zdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJfcHJvcGFnVE0iLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiaW5kZXhPZiIsIkVycm9yIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJjb250ZXh0T2JqIiwic2hpZnQiLCJfcm1DaGlsZCIsImNvbnRleHRzIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImFyZ3oiLCJfc3RhdGljIiwiY29udGV4dCIsInN0YXRpY0NvbnRleHQiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJyZWZpbmUiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwibG9ja3MiLCJfb25TdGFiaWxpemUiLCJfdXNlIiwiX3JldnMiLCJfcmVxdWlyZSIsInB1bGwiLCJpc0NvbXBsZXRlIiwibkRhdGFzIiwiY0RhdGFzIiwiZm9sbG93IiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIm1lIiwiX3N0YWJpbGl6ZXIiLCJldmVudCIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwibWFwIiwicyIsImZvcmNlIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsInNob3VsZFByb3BhZyIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJzdG9yZSIsImZyb20iLCJwcmV2aW91cyIsImZvbGxvd2VyIiwiZGVhZCIsInJlbW92ZUFsbExpc3RlbmVycyIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRDb250ZXh0IiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsInNwbGl0IiwidW5CaW5kIiwiYXBwbHkiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsImNvbnRleHRNYXAiLCJnZXRDb250ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7OztBQVFBLEtBQUlDLFdBQWtCLG1CQUFBQyxDQUFRLENBQVIsQ0FBdEI7QUFBQSxLQUNJQyxVQUFrQixtQkFBQUQsQ0FBUSxDQUFSLENBRHRCO0FBQUEsS0FFSUUsZUFBa0IsbUJBQUFGLENBQVEsQ0FBUixDQUZ0QjtBQUFBLEtBR0lHLGFBQWtCLG1CQUFBSCxDQUFRLENBQVIsQ0FIdEI7QUFBQSxLQUlNSSxVQUFnQixtQkFBQUosQ0FBUSxDQUFSLENBSnRCO0FBQUEsS0FLTUssZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFFQyxNQUFGLEVBQVVDLEVBQVYsRUFBY0MsTUFBZCxFQUEwQjtBQUM1QyxTQUFJQywyQkFDQ0YsRUFERCxFQUNNLFlBQVksQ0FDakIsQ0FGRCxDQUFKO0FBSUFFLFVBQUtGLEVBQUwsRUFBU0csU0FBVCxHQUFxQkYsU0FBUyxJQUFJQSxPQUFPLE1BQU1ELEVBQWIsQ0FBSixFQUFULEdBQWtDRCxPQUFPQyxFQUFQLEtBQWMsRUFBckU7QUFDQUQsWUFBT0MsRUFBUCxJQUFhLElBQUlFLEtBQUtGLEVBQUwsQ0FBSixF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0gscUJBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3U0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUEsK0VBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7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RixNQUFNM0osS0FBTixHQUFjQSxLQUFkOztBQUVKLHFCQUFLQyxVQUFVK0QsU0FBZixFQUNJMkYsTUFBTTdHLElBQU4sQ0FBVzdDLEtBQVg7QUFDUDtBQUNELG9CQUFPMEosS0FBUDtBQUNIOzs7O0dBeFE4QnRLLFk7O0FBQWRMLE0sQ0FFVjBJLEcsR0FBTSxFO0FBRkkxSSxNLENBS1Z1SSxhLEdBQWdCLElBQUl0SSxPQUFKLENBQVksRUFBWixFQUFnQixFQUFFUyxJQUFJLFFBQU4sRUFBaEIsQztBQUxOVixNLENBTVY0SSxZLEdBQWU1RCxTO0FBTkxoRixNLENBV1ZtQixtQixHQUFzQixHO0FBWFpuQixNLENBbUJWb0IsYSxHQUFnQixLO21CQW5CTnBCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ1MjFmOWU0YmUyODg2NTkzZGQ2IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcblxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xuXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBAYXV0aG9yIE5hdGhhbmFlbCBCUkFVTlxuICpcbiAqIERhdGU6IDEzLzA4LzIwMTdcbiAqIFRpbWU6IDE3OjE1XG4gKi9cblxuXG52YXIgaXNTdHJpbmcgICAgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKSxcbiAgICBpc0FycmF5ICAgICAgICAgPSByZXF1aXJlKCdpc2FycmF5JyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnZXZlbnRzJyksXG4gICAgaXNGdW5jdGlvbiAgICAgID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXG4gICAgLCBzaG9ydGlkICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgbGV0IGhlcmUgPSB7XG4gICAgICAgIFtpZF06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICB0YXJnZXRbaWRdID0gbmV3IGhlcmVbaWRdKCk7XG4gICAgdGFyZ2V0WydfJyArIGlkXSA9IGhlcmVbaWRdO1xufTtcblxubGV0IG9wZW5Db250ZXh0cyA9IHt9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBjb250ZXh0cyA9IG9wZW5Db250ZXh0cztcbiAgICBzdGF0aWMgU3RvcmUgPSBudWxsO1xuICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciggY3R4LCB7IGlkLCBwYXJlbnQsIHN0YXRlLCBkYXRhcywgbmFtZSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3kgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIHRoaXMuX2lkID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlbkNvbnRleHRzW2lkXSApIHtcbiAgICAgICAgICAgIC8vIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gPSB0aGlzO1xuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuZGF0YXMgPSB7fTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fdzhMb2NrcyA9IHsgYWxsOiAxIH07XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgdGhpcy5fX2NvbnRleHQgPSB7fTtcbiAgICAgICAgdGhpcy5fX21peGVkID0gW107XG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcImlzTXlQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJpc015UGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19jb250ZXh0LCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWdpc3RlcihjdHgsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSAhdGhpcy5fX3c4TG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCgga2V5ICkge1xuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XG4gICAgfTtcbiAgICBcbiAgICBtb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCBpc0FycmF5KGlkKSApIHtcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuU3RvcmUubW91bnRTdG9yZShpZCwgdGhpcywgbnVsbCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGFzICkge1xuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpc0Z1bmN0aW9uKHRoaXMuX19jb250ZXh0W2lkXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbigpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KVxuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcbiAgICAgICAgdGFyZ2V0Q3R4LnJlbGluayh0YXJnZXRDdHguX19jb250ZXh0LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHRoaXMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHRoaXMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHRoaXMpO1xuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyKCByYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHJhd0N0eCwgdGhpcywgZmFsc2UsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSAmJiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0gKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGFzLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpc0FycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIFxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSB0cnVlO1xuICAgICAgICAgICAgYXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0ga2V5ICYmIGtleS5yZWR1Y2UoKCByZXZzLCBpZCApID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgICgnJyArIGZvbGxvd2Vyc1tpXVsyXSkgPT0gKCcnICsgYXMpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgbWFwKCB0bywgc3RvcmVzLCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xuICAgICAgICBiaW5kICYmIHRoaXMuYmluZCh0bywgc3RvcmVzLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoIGRhdGFzLCBpZCApID0+IChkYXRhc1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRhdGFzLCBkYXRhcyksIHt9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzID0ge30gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1tpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1tpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXMpLCBzdG9yZXMpLCBzdG9yZXMpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlcyk7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgfVxuICAgIFxuICAgIGdldFVwZGF0ZXMoIHJldnMsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0W2lkXVxuICAgICAgICAgICAgICAgICAgICAmJiAoICFyZXZzXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAocmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgcmV2c1tpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJldnMgJiYgcmV2c1tpZF0gIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZzW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIHNlcmlhbGl6ZSggZmxhZ3Nfc3RhdGVzID0gLy4qLywgZmxhZ3NfZGF0YXMgPSAvLiovICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHsgc3RhdGU6IHt9LCBkYXRhczoge30gfSxcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YXM7XG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpc0FycmF5KGZsYWdzX2RhdGFzKSApXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhaXNBcnJheShmbGFnc19kYXRhcykgJiYgIWlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzRnVuY3Rpb24oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXNBcnJheShmbGFncykgPyBmbGFncyA6IFtmbGFncyB8fCBcIlwiXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3NfZGF0YXMudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCB7IHN0YXRlLCBkYXRhcyB9LCBxdWlldCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5kYXRhcyA9IGRhdGFzW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5wdXNoKGRhdGFzW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LnN0YXRlID0gc3RhdGVbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX193OExvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVsZWFzZVwiLCByZWFzb24pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fdzhMb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX3c4TG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xuICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3c4TG9ja3MuYWxsIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCA1MFxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBfcHJvcGFnKCkge1xuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YXMgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGFzLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCk7XG4gICAgICAgIGlmICggaSAhPSAtMSApXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid3RmIGN0eFwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fdzhMb2NrcywgdGhpcy5fc3RhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwid3RmIGN0eCB0aGVuXCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX193OExvY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzRnVuY3Rpb24oY3R4W2tleV0pICkge1xuICAgICAgICAgICAgICAgIGlmICggY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcyApXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX19wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSB0aGlzLnN0b3JlcyA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMuX2RhdGFzID0gdGhpcy5fc3RhdGUgPSB0aGlzLl9zdG9yZXMgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwiOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiAhIWV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUpXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmICEhbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKVxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgZWxzZVxuICAgICAgZXhwb3J0c1snZGVmYXVsdCddID0gZmFjdG9yeSgpO1xuICBlbHNlIGlmICh0eXBlb2YgWVVJID09PSAnZnVuY3Rpb24nICYmIFlVSS5hZGQpXG4gICAgWVVJLmFkZCgnaXMtc3RyaW5nJywgZnVuY3Rpb24gKFkpIHsgWVsnZGVmYXVsdCddID0gZmFjdG9yeSgpOyB9LCAnMS4wLjcnKTtcbiAgZWxzZVxuICAgIFN0cmluZy5pc1N0cmluZyA9IGZhY3RvcnkoKTtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0clRvU3RyaW5nICA9ICgnJykudG9TdHJpbmcsXG4gICAgICBoYXNCaW5kICAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGUgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsXG4gICAgICBzdHJUb1N0ckNhbGwgPSBoYXNCaW5kICYmIHN0clRvU3RyaW5nLmNhbGwuYmluZChzdHJUb1N0cmluZyksXG4gICAgICBpc1N0cmluZyAgICAgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIC8qQGNjX29uXG4gICAgICAgICAgQGlmIChAX2pzY3JpcHRfdmVyc2lvbiA+PSA1KSBAKi9cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFzQmluZCA/IHN0clRvU3RyQ2FsbChzdHIpIDogc3RyVG9TdHJpbmcuY2FsbChzdHIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvKkBlbmRcbiAgICAgICAgQCovXG4gICAgICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuICB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgc3RyICYmIHR5cGVvZiBzdHIgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAvKkBjY19vblxuICAgICAgICAgICAgICBAaWYgKEBfanNjcmlwdF92ZXJzaW9uIDwgNS41KVxuICAgICAgICAgICAgICAgIC9eXFxzKmZ1bmN0aW9uXFxzKlN0cmluZ1xcKFxcKVxccyp7XFxzKlxcW25hdGl2ZSBjb2RlXFxdXFxzKn1cXHMqJC8udGVzdChzdHIuY29uc3RydWN0b3IpXG4gICAgICAgICAgICAgIEBlbHNlIEAqL1xuICAgICAgICAgICAgICAgIGlzU3RyaW5nKHN0cilcbiAgICAgICAgICAgICAgLypAZW5kXG4gICAgICAgICAgICBAKi9cbiAgICAgICAgICAgIHx8IGZhbHNlO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNzdHJpbmcvaXNTdHJpbmcudW1kLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2FycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpIHt9XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmN0aW9uVG9DaGVjaykge1xuXHR2YXIgZ2V0VHlwZSA9IHt9O1xuXHRyZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNmdW5jdGlvbi9saWIvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzU3RyaW5nICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJylcbiAgICAsIGlzQXJyYXkgICAgPSByZXF1aXJlKCdpc2FycmF5JylcbiAgICAsIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcbiAgICAsXG4gICAgQ29udGV4dCAgICAgID0gcmVxdWlyZSgnLi9Db250ZXh0JyksXG4gICAgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyksXG4gICAgc2hvcnRpZCAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSksXG4gICAgb3BlbkNvbnRleHRzID0ge307XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIFxuICAgIHN0YXRpYyB1c2UgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ID0gbmV3IENvbnRleHQoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxuICAgICAqIChjb250ZXh0KVxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgY29udGV4dCAgICAgID0gIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzQXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZSBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWwgd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcbiAgICAgICAgICAgIHJlZmluZSAgICAgICA9IGlzRnVuY3Rpb24oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcucmVmaW5lIHx8IG51bGwsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gY2ZnLmRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgU3RvcmUuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgdGhpcy5sb2NrcyA9IDA7XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbnRleHQuc3RvcmVzICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldiA9IDE7XG4gICAgICAgIHRoaXMuX3JldnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhc1wiKSAmJiBjZmcuZGF0YXMgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY2ZnLmRhdGFzO1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IGNmZy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVmaW5lIClcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhIXRoaXMuX3VzZSAmJiB0aGlzLl91c2UubGVuZ3RoICkgey8vIGlmIHRoZXJlIGluaXRpYWwgd2F0Y2hzIGFueXdheVxuICAgICAgICAgICAgdGhpcy5wdWxsKHRoaXMuX3VzZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggaW5pdGlhbFN0YXRlICkgey8vIHN5bmMgcmVmaW5lXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUgfTtcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0NvbXBsZXRlKCkgJiYgdGhpcy5kYXRhcyA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdGhpcy5kYXRhcyAhPT0gdW5kZWZpbmVkOy8vIHN0YWJsZSBpZiBpdCBoYXZlIGluaXRpYWwgcmVzdWx0IGRhdGFzXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcbiAgICAgICAgdmFyIHRhcmdldENvbnRleHQgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0ge30pO1xuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICAgICAga2V5cyA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgU3RvcmUuc3RhdGljQ29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmICghdGFyZ2V0Q29udGV4dC5fX2NvbnRleHQpXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkubWF0Y2goLyhbXFx3X10rKSg/OlxcOlxcWyhcXCopXFxdKT8oPzpcXDooXFwqKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBrZXlbMF07XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZXNba2V5WzBdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gPT0gJyonID8gbnVsbCA6IGtleVsyXSB8fCBrZXlbMF07Ly8gYWxsb3cgYmluZGluZyBwcm9wcyAgKFsqXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdG9yZXNbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCBjb250ZXh0Ll9fY29udGV4dFtrZXlbMF1dLnN0YXRlICkgey8vIGRvIHN5bmMgcHVzaCBhZnRlciBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICAhdGFyZ2V0Q29udGV4dFtuYW1lXSAmJiAodGFyZ2V0Q29udGV4dFtuYW1lXSA9IGNvbnRleHQuc3RvcmVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRleHQuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhcycpIClcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbbmFtZV0gPSBjb250ZXh0LmRhdGFzW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IGZ1bmN0aW9uICgpIHsvLyB0b2RvIGhvcFxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICB0aGlzW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBrZXlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW2tleVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSB8fCBrZXlbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpc0Z1bmN0aW9uKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5Nb3VudEtleV0gJiYgdGhpc1t1bk1vdW50S2V5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBjb250ZXh0cyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpc0FycmF5KGNvbnRleHRzKSA/IGNvbnRleHRzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xuICAgICAgICByZXR1cm4gQ29udGV4dC5jb250ZXh0c1tza2V5XSA9IENvbnRleHQuY29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xuICAgICAgICBsZXQgY3R4LCBjb250ZXh0TWFwID0gY29udGV4dC5fX2NvbnRleHQ7XG4gICAgICAgIGNvbnRleHRNYXBbbmFtZV0gPSBzdG9yZSA9IHN0b3JlIHx8IGNvbnRleHRNYXBbbmFtZV07XG4gICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmICggc3RvcmUgJiYgKHN0b3JlLmNvbnRleHRzIHx8IHN0b3JlLmNvbnRleHQpICkge1xuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7IFtuYW1lXTogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZSB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdID0gY3R4W25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHsgc3RhdGUsIGRhdGFzIH0pO1xuICAgICAgICAgICAgICAgIGN0eC5fd2F0Y2hTdG9yZShuYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4W25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dE1hcFtuYW1lXSA9IG5ldyBzdG9yZShjb250ZXh0LCB7IHN0YXRlLCBkYXRhcyB9KTtcbiAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0ucmVsaW5rKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGFzID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGRhdGFzICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKiBJZiBzdGF0aWMgZm9sbG93IGlzIGRlZmluZWQsIHNob3VsZFByb3BhZyB3aWxsIHJldHVybiB0cnVlIGlmIGFueSBvZiB0aGUgXCJmb2xsb3dcIiBrZXlzIHdhcyB1cGRhdGVkXG4gICAgICogSWYgbm90IGl0IHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXG4gICAgICovXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cgJiYgX3N0YXRpYy5mb2xsb3cucmVkdWNlKCggciwgaSApID0+IChyIHx8IG5EYXRhcyAmJiBuRGF0YXNbaV0pLCBmYWxzZSkpIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpc0FycmF5KF9zdGF0aWMuZm9sbG93KSApXG4gICAgICAgICAgICBfc3RhdGljLmZvbGxvdy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmZvbGxvdyA9PT0gJ3N0cmljdCcgKVxuICAgICAgICAgICAgciA9IG5EYXRhcyA9PT0gY0RhdGFzO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICEhcjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgcmVmaW5lciAvIHJlbWFwcGVyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIHJlZmluZSB3aWxsIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhcywgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGFzLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzdGFiaWxpemUoIGNiICkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBjYiAmJiBtZS5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XG4gICAgICAgIFxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cbiAgICAgICAgICAgICAgICAgICAgLy8gbWUuX3N0YWJsZSAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGV2ZW50ICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IFN0b3JlLm1hcCh0aGlzLCBzdG9yZXMsIHRoaXMuY29udGV4dE9iaiwgb3JpZ2luLCB0cnVlKTtcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuY29udGV4dFtzXSAmJiB0aGlzLndhaXQodGhpcy5jb250ZXh0W3NdKSk7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFwcGx5IHJlZmluZS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGFzLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YXMgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YXMgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGFzKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhcyAmJiB0aGlzLmRhdGFzID09PSBuZXh0RGF0YXMpIHx8ICF0aGlzLnNob3VsZFByb3BhZyhuZXh0RGF0YXMpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhcyA9IG5leHREYXRhcztcbiAgICAgICAgdGhpcy5sb2NrcysrO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XG4gICAgICAgIHZhciBpID0gMCwgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xuICAgICAgICAgICAgLy90b2RvIHVubGlua1xuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PSBrZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogdGhpcy5kYXRhcyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZSh0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaih0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja3MgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXNBcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NrcysrO1xuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5sb2NrcyA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLmxvY2tzICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3JldiA9IDEgKyAodGhpcy5fcmV2ICsgMSkgJSAxMDAwMDAwOy8vXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZGF0YXMgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogdGhpcy5kYXRhcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhcyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl91aWQsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbkxvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwid3RmICAgXCIsIHJlYXNvbiwgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyA9IHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==