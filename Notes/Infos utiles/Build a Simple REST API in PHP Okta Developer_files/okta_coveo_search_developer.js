(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 30);
})([ function(module, exports, __webpack_require__) {
    (function(global) {
        var check = function(it) {
            return it && it.Math == Math && it;
        };
        module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || Function("return this")();
    }).call(this, __webpack_require__(9));
}, function(module, exports, __webpack_require__) {
    (function(global) {
        var assign = make_assign();
        var create = make_create();
        var trim = make_trim();
        var Global = typeof window !== "undefined" ? window : global;
        module.exports = {
            assign: assign,
            create: create,
            trim: trim,
            bind: bind,
            slice: slice,
            each: each,
            map: map,
            pluck: pluck,
            isList: isList,
            isFunction: isFunction,
            isObject: isObject,
            Global: Global
        };
        function make_assign() {
            if (Object.assign) {
                return Object.assign;
            } else {
                return function shimAssign(obj, props1, props2, etc) {
                    for (var i = 1; i < arguments.length; i++) {
                        each(Object(arguments[i]), (function(val, key) {
                            obj[key] = val;
                        }));
                    }
                    return obj;
                };
            }
        }
        function make_create() {
            if (Object.create) {
                return function create(obj, assignProps1, assignProps2, etc) {
                    var assignArgsList = slice(arguments, 1);
                    return assign.apply(this, [ Object.create(obj) ].concat(assignArgsList));
                };
            } else {
                function F() {}
                return function create(obj, assignProps1, assignProps2, etc) {
                    var assignArgsList = slice(arguments, 1);
                    F.prototype = obj;
                    return assign.apply(this, [ new F ].concat(assignArgsList));
                };
            }
        }
        function make_trim() {
            if (String.prototype.trim) {
                return function trim(str) {
                    return String.prototype.trim.call(str);
                };
            } else {
                return function trim(str) {
                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                };
            }
        }
        function bind(obj, fn) {
            return function() {
                return fn.apply(obj, Array.prototype.slice.call(arguments, 0));
            };
        }
        function slice(arr, index) {
            return Array.prototype.slice.call(arr, index || 0);
        }
        function each(obj, fn) {
            pluck(obj, (function(val, key) {
                fn(val, key);
                return false;
            }));
        }
        function map(obj, fn) {
            var res = isList(obj) ? [] : {};
            pluck(obj, (function(v, k) {
                res[k] = fn(v, k);
                return false;
            }));
            return res;
        }
        function pluck(obj, fn) {
            if (isList(obj)) {
                for (var i = 0; i < obj.length; i++) {
                    if (fn(obj[i], i)) {
                        return obj[i];
                    }
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (fn(obj[key], key)) {
                            return obj[key];
                        }
                    }
                }
            }
        }
        function isList(val) {
            return val != null && typeof val != "function" && typeof val.length == "number";
        }
        function isFunction(val) {
            return val && {}.toString.call(val) === "[object Function]";
        }
        function isObject(val) {
            return val && {}.toString.call(val) === "[object Object]";
        }
    }).call(this, __webpack_require__(9));
}, function(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
    };
}, function(module, exports, __webpack_require__) {
    var fails = __webpack_require__(4);
    module.exports = !fails((function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1] != 7;
    }));
}, function(module, exports) {
    module.exports = function(exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };
}, function(module, exports) {
    module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
    };
}, function(module, exports, __webpack_require__) {
    var IndexedObject = __webpack_require__(43);
    var requireObjectCoercible = __webpack_require__(15);
    module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
    };
}, function(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(3);
    var definePropertyModule = __webpack_require__(18);
    var createPropertyDescriptor = __webpack_require__(13);
    module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
        object[key] = value;
        return object;
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var createNonEnumerableProperty = __webpack_require__(7);
    module.exports = function(key, value) {
        try {
            createNonEnumerableProperty(global, key, value);
        } catch (error) {
            global[key] = value;
        }
        return value;
    };
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        if (typeof window === "object") g = window;
    }
    module.exports = g;
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var getOwnPropertyDescriptor = __webpack_require__(11).f;
    var createNonEnumerableProperty = __webpack_require__(7);
    var redefine = __webpack_require__(45);
    var setGlobal = __webpack_require__(8);
    var copyConstructorProperties = __webpack_require__(50);
    var isForced = __webpack_require__(59);
    module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
            target = global;
        } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
        } else {
            target = (global[TARGET] || {}).prototype;
        }
        if (target) for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
        }
    };
}, function(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(3);
    var propertyIsEnumerableModule = __webpack_require__(12);
    var createPropertyDescriptor = __webpack_require__(13);
    var toIndexedObject = __webpack_require__(6);
    var toPrimitive = __webpack_require__(16);
    var has = __webpack_require__(2);
    var IE8_DOM_DEFINE = __webpack_require__(17);
    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
            return nativeGetOwnPropertyDescriptor(O, P);
        } catch (error) {}
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
        1: 2
    }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
}, function(module, exports) {
    module.exports = function(bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };
}, function(module, exports) {
    var toString = {}.toString;
    module.exports = function(it) {
        return toString.call(it).slice(8, -1);
    };
}, function(module, exports) {
    module.exports = function(it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
    };
}, function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5);
    module.exports = function(input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input))) return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(3);
    var fails = __webpack_require__(4);
    var createElement = __webpack_require__(44);
    module.exports = !DESCRIPTORS && !fails((function() {
        return Object.defineProperty(createElement("div"), "a", {
            get: function() {
                return 7;
            }
        }).a != 7;
    }));
}, function(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(3);
    var IE8_DOM_DEFINE = __webpack_require__(17);
    var anObject = __webpack_require__(19);
    var toPrimitive = __webpack_require__(16);
    var nativeDefineProperty = Object.defineProperty;
    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
            return nativeDefineProperty(O, P, Attributes);
        } catch (error) {}
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
    };
}, function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5);
    module.exports = function(it) {
        if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
        }
        return it;
    };
}, function(module, exports, __webpack_require__) {
    var store = __webpack_require__(21);
    var functionToString = Function.toString;
    if (typeof store.inspectSource != "function") {
        store.inspectSource = function(it) {
            return functionToString.call(it);
        };
    }
    module.exports = store.inspectSource;
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var setGlobal = __webpack_require__(8);
    var SHARED = "__core-js_shared__";
    var store = global[SHARED] || setGlobal(SHARED, {});
    module.exports = store;
}, function(module, exports, __webpack_require__) {
    var IS_PURE = __webpack_require__(49);
    var store = __webpack_require__(21);
    (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
    })("versions", []).push({
        version: "3.6.4",
        mode: IS_PURE ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
}, function(module, exports) {
    var id = 0;
    var postfix = Math.random();
    module.exports = function(key) {
        return "Symbol(" + String(key === undefined ? "" : key) + ")_" + (++id + postfix).toString(36);
    };
}, function(module, exports) {
    module.exports = {};
}, function(module, exports, __webpack_require__) {
    var has = __webpack_require__(2);
    var toIndexedObject = __webpack_require__(6);
    var indexOf = __webpack_require__(55).indexOf;
    var hiddenKeys = __webpack_require__(24);
    module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        while (names.length > i) if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
        }
        return result;
    };
}, function(module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function(argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
}, function(module, exports) {
    module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var shared = __webpack_require__(22);
    var has = __webpack_require__(2);
    var uid = __webpack_require__(23);
    var NATIVE_SYMBOL = __webpack_require__(29);
    var USE_SYMBOL_AS_UID = __webpack_require__(65);
    var WellKnownSymbolsStore = shared("wks");
    var Symbol = global.Symbol;
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
    module.exports = function(name) {
        if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]; else WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
    };
}, function(module, exports, __webpack_require__) {
    var fails = __webpack_require__(4);
    module.exports = !!Object.getOwnPropertySymbols && !fails((function() {
        return !String(Symbol());
    }));
}, function(module, exports, __webpack_require__) {
    __webpack_require__(68);
    module.exports = __webpack_require__(67);
}, function(module, exports, __webpack_require__) {
    var engine = __webpack_require__(32);
    var storages = __webpack_require__(33);
    var plugins = [ __webpack_require__(40) ];
    module.exports = engine.createStore(storages, plugins);
}, function(module, exports, __webpack_require__) {
    var util = __webpack_require__(1);
    var slice = util.slice;
    var pluck = util.pluck;
    var each = util.each;
    var bind = util.bind;
    var create = util.create;
    var isList = util.isList;
    var isFunction = util.isFunction;
    var isObject = util.isObject;
    module.exports = {
        createStore: createStore
    };
    var storeAPI = {
        version: "2.0.12",
        enabled: false,
        get: function(key, optionalDefaultValue) {
            var data = this.storage.read(this._namespacePrefix + key);
            return this._deserialize(data, optionalDefaultValue);
        },
        set: function(key, value) {
            if (value === undefined) {
                return this.remove(key);
            }
            this.storage.write(this._namespacePrefix + key, this._serialize(value));
            return value;
        },
        remove: function(key) {
            this.storage.remove(this._namespacePrefix + key);
        },
        each: function(callback) {
            var self = this;
            this.storage.each((function(val, namespacedKey) {
                callback.call(self, self._deserialize(val), (namespacedKey || "").replace(self._namespaceRegexp, ""));
            }));
        },
        clearAll: function() {
            this.storage.clearAll();
        },
        hasNamespace: function(namespace) {
            return this._namespacePrefix == "__storejs_" + namespace + "_";
        },
        createStore: function() {
            return createStore.apply(this, arguments);
        },
        addPlugin: function(plugin) {
            this._addPlugin(plugin);
        },
        namespace: function(namespace) {
            return createStore(this.storage, this.plugins, namespace);
        }
    };
    function _warn() {
        var _console = typeof console == "undefined" ? null : console;
        if (!_console) {
            return;
        }
        var fn = _console.warn ? _console.warn : _console.log;
        fn.apply(_console, arguments);
    }
    function createStore(storages, plugins, namespace) {
        if (!namespace) {
            namespace = "";
        }
        if (storages && !isList(storages)) {
            storages = [ storages ];
        }
        if (plugins && !isList(plugins)) {
            plugins = [ plugins ];
        }
        var namespacePrefix = namespace ? "__storejs_" + namespace + "_" : "";
        var namespaceRegexp = namespace ? new RegExp("^" + namespacePrefix) : null;
        var legalNamespaces = /^[a-zA-Z0-9_\-]*$/;
        if (!legalNamespaces.test(namespace)) {
            throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
        }
        var _privateStoreProps = {
            _namespacePrefix: namespacePrefix,
            _namespaceRegexp: namespaceRegexp,
            _testStorage: function(storage) {
                try {
                    var testStr = "__storejs__test__";
                    storage.write(testStr, testStr);
                    var ok = storage.read(testStr) === testStr;
                    storage.remove(testStr);
                    return ok;
                } catch (e) {
                    return false;
                }
            },
            _assignPluginFnProp: function(pluginFnProp, propName) {
                var oldFn = this[propName];
                this[propName] = function pluginFn() {
                    var args = slice(arguments, 0);
                    var self = this;
                    function super_fn() {
                        if (!oldFn) {
                            return;
                        }
                        each(arguments, (function(arg, i) {
                            args[i] = arg;
                        }));
                        return oldFn.apply(self, args);
                    }
                    var newFnArgs = [ super_fn ].concat(args);
                    return pluginFnProp.apply(self, newFnArgs);
                };
            },
            _serialize: function(obj) {
                return JSON.stringify(obj);
            },
            _deserialize: function(strVal, defaultVal) {
                if (!strVal) {
                    return defaultVal;
                }
                var val = "";
                try {
                    val = JSON.parse(strVal);
                } catch (e) {
                    val = strVal;
                }
                return val !== undefined ? val : defaultVal;
            },
            _addStorage: function(storage) {
                if (this.enabled) {
                    return;
                }
                if (this._testStorage(storage)) {
                    this.storage = storage;
                    this.enabled = true;
                }
            },
            _addPlugin: function(plugin) {
                var self = this;
                if (isList(plugin)) {
                    each(plugin, (function(plugin) {
                        self._addPlugin(plugin);
                    }));
                    return;
                }
                var seenPlugin = pluck(this.plugins, (function(seenPlugin) {
                    return plugin === seenPlugin;
                }));
                if (seenPlugin) {
                    return;
                }
                this.plugins.push(plugin);
                if (!isFunction(plugin)) {
                    throw new Error("Plugins must be function values that return objects");
                }
                var pluginProperties = plugin.call(this);
                if (!isObject(pluginProperties)) {
                    throw new Error("Plugins must return an object of function properties");
                }
                each(pluginProperties, (function(pluginFnProp, propName) {
                    if (!isFunction(pluginFnProp)) {
                        throw new Error("Bad plugin property: " + propName + " from plugin " + plugin.name + ". Plugins should only return functions.");
                    }
                    self._assignPluginFnProp(pluginFnProp, propName);
                }));
            },
            addStorage: function(storage) {
                _warn("store.addStorage(storage) is deprecated. Use createStore([storages])");
                this._addStorage(storage);
            }
        };
        var store = create(_privateStoreProps, storeAPI, {
            plugins: []
        });
        store.raw = {};
        each(store, (function(prop, propName) {
            if (isFunction(prop)) {
                store.raw[propName] = bind(store, prop);
            }
        }));
        each(storages, (function(storage) {
            store._addStorage(storage);
        }));
        each(plugins, (function(plugin) {
            store._addPlugin(plugin);
        }));
        return store;
    }
}, function(module, exports, __webpack_require__) {
    module.exports = [ __webpack_require__(34), __webpack_require__(35), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39) ];
}, function(module, exports, __webpack_require__) {
    var util = __webpack_require__(1);
    var Global = util.Global;
    module.exports = {
        name: "localStorage",
        read: read,
        write: write,
        each: each,
        remove: remove,
        clearAll: clearAll
    };
    function localStorage() {
        return Global.localStorage;
    }
    function read(key) {
        return localStorage().getItem(key);
    }
    function write(key, data) {
        return localStorage().setItem(key, data);
    }
    function each(fn) {
        for (var i = localStorage().length - 1; i >= 0; i--) {
            var key = localStorage().key(i);
            fn(read(key), key);
        }
    }
    function remove(key) {
        return localStorage().removeItem(key);
    }
    function clearAll() {
        return localStorage().clear();
    }
}, function(module, exports, __webpack_require__) {
    var util = __webpack_require__(1);
    var Global = util.Global;
    module.exports = {
        name: "oldFF-globalStorage",
        read: read,
        write: write,
        each: each,
        remove: remove,
        clearAll: clearAll
    };
    var globalStorage = Global.globalStorage;
    function read(key) {
        return globalStorage[key];
    }
    function write(key, data) {
        globalStorage[key] = data;
    }
    function each(fn) {
        for (var i = globalStorage.length - 1; i >= 0; i--) {
            var key = globalStorage.key(i);
            fn(globalStorage[key], key);
        }
    }
    function remove(key) {
        return globalStorage.removeItem(key);
    }
    function clearAll() {
        each((function(key, _) {
            delete globalStorage[key];
        }));
    }
}, function(module, exports, __webpack_require__) {
    var util = __webpack_require__(1);
    var Global = util.Global;
    module.exports = {
        name: "oldIE-userDataStorage",
        write: write,
        read: read,
        each: each,
        remove: remove,
        clearAll: clearAll
    };
    var storageName = "storejs";
    var doc = Global.document;
    var _withStorageEl = _makeIEStorageElFunction();
    var disable = (Global.navigator ? Global.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);
    function write(unfixedKey, data) {
        if (disable) {
            return;
        }
        var fixedKey = fixKey(unfixedKey);
        _withStorageEl((function(storageEl) {
            storageEl.setAttribute(fixedKey, data);
            storageEl.save(storageName);
        }));
    }
    function read(unfixedKey) {
        if (disable) {
            return;
        }
        var fixedKey = fixKey(unfixedKey);
        var res = null;
        _withStorageEl((function(storageEl) {
            res = storageEl.getAttribute(fixedKey);
        }));
        return res;
    }
    function each(callback) {
        _withStorageEl((function(storageEl) {
            var attributes = storageEl.XMLDocument.documentElement.attributes;
            for (var i = attributes.length - 1; i >= 0; i--) {
                var attr = attributes[i];
                callback(storageEl.getAttribute(attr.name), attr.name);
            }
        }));
    }
    function remove(unfixedKey) {
        var fixedKey = fixKey(unfixedKey);
        _withStorageEl((function(storageEl) {
            storageEl.removeAttribute(fixedKey);
            storageEl.save(storageName);
        }));
    }
    function clearAll() {
        _withStorageEl((function(storageEl) {
            var attributes = storageEl.XMLDocument.documentElement.attributes;
            storageEl.load(storageName);
            for (var i = attributes.length - 1; i >= 0; i--) {
                storageEl.removeAttribute(attributes[i].name);
            }
            storageEl.save(storageName);
        }));
    }
    var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
    function fixKey(key) {
        return key.replace(/^\d/, "___$&").replace(forbiddenCharsRegex, "___");
    }
    function _makeIEStorageElFunction() {
        if (!doc || !doc.documentElement || !doc.documentElement.addBehavior) {
            return null;
        }
        var scriptTag = "script", storageOwner, storageContainer, storageEl;
        try {
            storageContainer = new ActiveXObject("htmlfile");
            storageContainer.open();
            storageContainer.write("<" + scriptTag + ">document.w=window</" + scriptTag + '><iframe src="/favicon.ico"></iframe>');
            storageContainer.close();
            storageOwner = storageContainer.w.frames[0].document;
            storageEl = storageOwner.createElement("div");
        } catch (e) {
            storageEl = doc.createElement("div");
            storageOwner = doc.body;
        }
        return function(storeFunction) {
            var args = [].slice.call(arguments, 0);
            args.unshift(storageEl);
            storageOwner.appendChild(storageEl);
            storageEl.addBehavior("#default#userData");
            storageEl.load(storageName);
            storeFunction.apply(this, args);
            storageOwner.removeChild(storageEl);
            return;
        };
    }
}, function(module, exports, __webpack_require__) {
    var util = __webpack_require__(1);
    var Global = util.Global;
    var trim = util.trim;
    module.exports = {
        name: "cookieStorage",
        read: read,
        write: write,
        each: each,
        remove: remove,
        clearAll: clearAll
    };
    var doc = Global.document;
    function read(key) {
        if (!key || !_has(key)) {
            return null;
        }
        var regexpStr = "(?:^|.*;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
        return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"));
    }
    function each(callback) {
        var cookies = doc.cookie.split(/; ?/g);
        for (var i = cookies.length - 1; i >= 0; i--) {
            if (!trim(cookies[i])) {
                continue;
            }
            var kvp = cookies[i].split("=");
            var key = unescape(kvp[0]);
            var val = unescape(kvp[1]);
            callback(val, key);
        }
    }
    function write(key, data) {
        if (!key) {
            return;
        }
        doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
    }
    function remove(key) {
        if (!key || !_has(key)) {
            return;
        }
        doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
    function clearAll() {
        each((function(_, key) {
            remove(key);
        }));
    }
    function _has(key) {
        return new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(doc.cookie);
    }
}, function(module, exports, __webpack_require__) {
    var util = __webpack_require__(1);
    var Global = util.Global;
    module.exports = {
        name: "sessionStorage",
        read: read,
        write: write,
        each: each,
        remove: remove,
        clearAll: clearAll
    };
    function sessionStorage() {
        return Global.sessionStorage;
    }
    function read(key) {
        return sessionStorage().getItem(key);
    }
    function write(key, data) {
        return sessionStorage().setItem(key, data);
    }
    function each(fn) {
        for (var i = sessionStorage().length - 1; i >= 0; i--) {
            var key = sessionStorage().key(i);
            fn(read(key), key);
        }
    }
    function remove(key) {
        return sessionStorage().removeItem(key);
    }
    function clearAll() {
        return sessionStorage().clear();
    }
}, function(module, exports) {
    module.exports = {
        name: "memoryStorage",
        read: read,
        write: write,
        each: each,
        remove: remove,
        clearAll: clearAll
    };
    var memoryStorage = {};
    function read(key) {
        return memoryStorage[key];
    }
    function write(key, data) {
        memoryStorage[key] = data;
    }
    function each(callback) {
        for (var key in memoryStorage) {
            if (memoryStorage.hasOwnProperty(key)) {
                callback(memoryStorage[key], key);
            }
        }
    }
    function remove(key) {
        delete memoryStorage[key];
    }
    function clearAll(key) {
        memoryStorage = {};
    }
}, function(module, exports, __webpack_require__) {
    module.exports = json2Plugin;
    function json2Plugin() {
        __webpack_require__(41);
        return {};
    }
}, function(module, exports) {
    if (typeof JSON !== "object") {
        JSON = {};
    }
    (function() {
        "use strict";
        var rx_one = /^[\],:{}\s]*$/;
        var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
        var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        function f(n) {
            return n < 10 ? "0" + n : n;
        }
        function this_value() {
            return this.valueOf();
        }
        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
            };
            Boolean.prototype.toJSON = this_value;
            Number.prototype.toJSON = this_value;
            String.prototype.toJSON = this_value;
        }
        var gap;
        var indent;
        var meta;
        var rep;
        function quote(string) {
            rx_escapable.lastIndex = 0;
            return rx_escapable.test(string) ? '"' + string.replace(rx_escapable, (function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            })) + '"' : '"' + string + '"';
        }
        function str(key, holder) {
            var i;
            var k;
            var v;
            var length;
            var mind = gap;
            var partial;
            var value = holder[key];
            if (value && typeof value === "object" && typeof value.toJSON === "function") {
                value = value.toJSON(key);
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value);
            }
            switch (typeof value) {
              case "string":
                return quote(value);

              case "number":
                return isFinite(value) ? String(value) : "null";

              case "boolean":
              case "null":
                return String(value);

              case "object":
                if (!value) {
                    return "null";
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null";
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
            }
        }
        if (typeof JSON.stringify !== "function") {
            meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            JSON.stringify = function(value, replacer, space) {
                var i;
                gap = "";
                indent = "";
                if (typeof space === "number") {
                    for (i = 0; i < space; i += 1) {
                        indent += " ";
                    }
                } else if (typeof space === "string") {
                    indent = space;
                }
                rep = replacer;
                if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                    throw new Error("JSON.stringify");
                }
                return str("", {
                    "": value
                });
            };
        }
        if (typeof JSON.parse !== "function") {
            JSON.parse = function(text, reviver) {
                var j;
                function walk(holder, key) {
                    var k;
                    var v;
                    var value = holder[key];
                    if (value && typeof value === "object") {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }
                text = String(text);
                rx_dangerous.lastIndex = 0;
                if (rx_dangerous.test(text)) {
                    text = text.replace(rx_dangerous, (function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                    }));
                }
                if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
                    j = eval("(" + text + ")");
                    return typeof reviver === "function" ? walk({
                        "": j
                    }, "") : j;
                }
                throw new SyntaxError("JSON.parse");
            };
        }
    })();
}, function(module, exports, __webpack_require__) {
    var $ = __webpack_require__(10);
    var $entries = __webpack_require__(60).entries;
    $({
        target: "Object",
        stat: true
    }, {
        entries: function entries(O) {
            return $entries(O);
        }
    });
}, function(module, exports, __webpack_require__) {
    var fails = __webpack_require__(4);
    var classof = __webpack_require__(14);
    var split = "".split;
    module.exports = fails((function() {
        return !Object("z").propertyIsEnumerable(0);
    })) ? function(it) {
        return classof(it) == "String" ? split.call(it, "") : Object(it);
    } : Object;
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var isObject = __webpack_require__(5);
    var document = global.document;
    var EXISTS = isObject(document) && isObject(document.createElement);
    module.exports = function(it) {
        return EXISTS ? document.createElement(it) : {};
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var createNonEnumerableProperty = __webpack_require__(7);
    var has = __webpack_require__(2);
    var setGlobal = __webpack_require__(8);
    var inspectSource = __webpack_require__(20);
    var InternalStateModule = __webpack_require__(46);
    var getInternalState = InternalStateModule.get;
    var enforceInternalState = InternalStateModule.enforce;
    var TEMPLATE = String(String).split("String");
    (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        if (typeof value == "function") {
            if (typeof key == "string" && !has(value, "name")) createNonEnumerableProperty(value, "name", key);
            enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
        }
        if (O === global) {
            if (simple) O[key] = value; else setGlobal(key, value);
            return;
        } else if (!unsafe) {
            delete O[key];
        } else if (!noTargetGet && O[key]) {
            simple = true;
        }
        if (simple) O[key] = value; else createNonEnumerableProperty(O, key, value);
    })(Function.prototype, "toString", (function toString() {
        return typeof this == "function" && getInternalState(this).source || inspectSource(this);
    }));
}, function(module, exports, __webpack_require__) {
    var NATIVE_WEAK_MAP = __webpack_require__(47);
    var global = __webpack_require__(0);
    var isObject = __webpack_require__(5);
    var createNonEnumerableProperty = __webpack_require__(7);
    var objectHas = __webpack_require__(2);
    var sharedKey = __webpack_require__(48);
    var hiddenKeys = __webpack_require__(24);
    var WeakMap = global.WeakMap;
    var set, get, has;
    var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
        return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
        };
    };
    if (NATIVE_WEAK_MAP) {
        var store = new WeakMap;
        var wmget = store.get;
        var wmhas = store.has;
        var wmset = store.set;
        set = function(it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
        };
        get = function(it) {
            return wmget.call(store, it) || {};
        };
        has = function(it) {
            return wmhas.call(store, it);
        };
    } else {
        var STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
        };
        get = function(it) {
            return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
            return objectHas(it, STATE);
        };
    }
    module.exports = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    var inspectSource = __webpack_require__(20);
    var WeakMap = global.WeakMap;
    module.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
}, function(module, exports, __webpack_require__) {
    var shared = __webpack_require__(22);
    var uid = __webpack_require__(23);
    var keys = shared("keys");
    module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
    };
}, function(module, exports) {
    module.exports = false;
}, function(module, exports, __webpack_require__) {
    var has = __webpack_require__(2);
    var ownKeys = __webpack_require__(51);
    var getOwnPropertyDescriptorModule = __webpack_require__(11);
    var definePropertyModule = __webpack_require__(18);
    module.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
    };
}, function(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(52);
    var getOwnPropertyNamesModule = __webpack_require__(54);
    var getOwnPropertySymbolsModule = __webpack_require__(58);
    var anObject = __webpack_require__(19);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };
}, function(module, exports, __webpack_require__) {
    var path = __webpack_require__(53);
    var global = __webpack_require__(0);
    var aFunction = function(variable) {
        return typeof variable == "function" ? variable : undefined;
    };
    module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(0);
    module.exports = global;
}, function(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(25);
    var enumBugKeys = __webpack_require__(27);
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
    };
}, function(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(6);
    var toLength = __webpack_require__(56);
    var toAbsoluteIndex = __webpack_require__(57);
    var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el) while (length > index) {
                value = O[index++];
                if (value != value) return true;
            } else for (;length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
        };
    };
    module.exports = {
        includes: createMethod(true),
        indexOf: createMethod(false)
    };
}, function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(26);
    var min = Math.min;
    module.exports = function(argument) {
        return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
    };
}, function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(26);
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
}, function(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
}, function(module, exports, __webpack_require__) {
    var fails = __webpack_require__(4);
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
}, function(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(3);
    var objectKeys = __webpack_require__(61);
    var toIndexedObject = __webpack_require__(6);
    var propertyIsEnumerable = __webpack_require__(12).f;
    var createMethod = function(TO_ENTRIES) {
        return function(it) {
            var O = toIndexedObject(it);
            var keys = objectKeys(O);
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;
            while (length > i) {
                key = keys[i++];
                if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
                    result.push(TO_ENTRIES ? [ key, O[key] ] : O[key]);
                }
            }
            return result;
        };
    };
    module.exports = {
        entries: createMethod(true),
        values: createMethod(false)
    };
}, function(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(25);
    var enumBugKeys = __webpack_require__(27);
    module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(10);
    var notARegExp = __webpack_require__(63);
    var requireObjectCoercible = __webpack_require__(15);
    var correctIsRegExpLogic = __webpack_require__(66);
    $({
        target: "String",
        proto: true,
        forced: !correctIsRegExpLogic("includes")
    }, {
        includes: function includes(searchString) {
            return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
        }
    });
}, function(module, exports, __webpack_require__) {
    var isRegExp = __webpack_require__(64);
    module.exports = function(it) {
        if (isRegExp(it)) {
            throw TypeError("The method doesn't accept regular expressions");
        }
        return it;
    };
}, function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5);
    var classof = __webpack_require__(14);
    var wellKnownSymbol = __webpack_require__(28);
    var MATCH = wellKnownSymbol("match");
    module.exports = function(it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == "RegExp");
    };
}, function(module, exports, __webpack_require__) {
    var NATIVE_SYMBOL = __webpack_require__(29);
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(28);
    var MATCH = wellKnownSymbol("match");
    module.exports = function(METHOD_NAME) {
        var regexp = /./;
        try {
            "/./"[METHOD_NAME](regexp);
        } catch (e) {
            try {
                regexp[MATCH] = false;
                return "/./"[METHOD_NAME](regexp);
            } catch (f) {}
        }
        return false;
    };
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "../css/okta_coveo_search_developer.css";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var store = __webpack_require__(31);
    var configure_endpoint = function() {
        var token;
        var endpoint = "https://developer.okta.com/oktaapi/search-token-developer/";
        var renewToken = function renewToken() {
            return fetch(endpoint).then((function(response) {
                return response.text();
            }));
        };
        if (typeof Drupal !== "undefined") {
            if (typeof Drupal.settings.okta_coveo_search_developer === "undefined" || typeof Drupal.settings.okta_coveo_search_developer.token === "undefined") {
                renewToken();
            }
            token = Drupal.settings.okta_coveo_search_developer.token;
        } else {
            renewToken().then((function(token) {
                store.set("coveo_token", token);
            }));
            token = store.get("coveo_token");
        }
        Coveo.SearchEndpoint.configureCloudV2Endpoint("oktaproduction9ounvcxa", token, "https://platform.cloud.coveo.com/rest/search", {
            renewAccessToken: renewToken
        });
    };
    var es_object_entries = __webpack_require__(42);
    var es_string_includes = __webpack_require__(62);
    var config = {
        rootElement: config_rootElement(),
        omniboxConfig: {
            enableQueryExtensionAddon: true,
            enableQuerySyntax: true,
            placeholder: "Search our content",
            triggerQueryOnClear: true
        },
        searchboxConfig: {
            enableOmnibox: true
        },
        analyticsConfig: {
            searchHub: "developer-okta-com"
        },
        searchInterfaceConfig: {
            pipeline: "developer-okta-com",
            enableHistory: true,
            enableAutomaticResponsiveMode: false
        },
        facetValueCaptions: {
            "Developer blog": "Blog",
            "Developer documentation": "Docs",
            "Developer forum": "Developer forum",
            "Developer products": "Products and Pricing"
        },
        pagerConfig: {
            numberOfPages: numberOfPages()
        },
        isDeveloperHomepage: function() {
            return location.pathname === "/" || location.pathname === "/developer/";
        }(),
        isSearchPage: function() {
            return location.pathname === "/search/" || location.pathname === "/developer/search/";
        }()
    };
    function config_rootElement() {
        var rootElement = document.querySelector("#searchbox") || document.querySelector("#app .SearchBox") || document.querySelector("#blog .SearchBox");
        if (location.pathname === "/developer/search/" || location.pathname === "/search/") {
            rootElement = document.querySelector("#search-results");
        }
        return rootElement;
    }
    function numberOfPages() {
        var numberOfPages = 10;
        if (window.innerWidth <= 768) {
            numberOfPages = 5;
        }
        if (window.innerWidth <= 320) {
            numberOfPages = 3;
        }
        return numberOfPages;
    }
    var init_search = function() {
        var searchPath = location.pathname.includes("/developer/") ? "/developer/search/" : "/search/";
        if (location.pathname !== "/developer/search/" && location.pathname !== "/search/") {
            Coveo.initSearchbox(config.rootElement, searchPath, {
                Searchbox: config.searchboxConfig,
                Omnibox: config.omniboxConfig,
                Analytics: config.analyticsConfig
            });
        } else {
            var searchBar = document.querySelector("[data-search-bar]");
            var searchToggle = document.querySelector("[data-search-toggle]");
            searchBar.classList.add("is-active");
            searchToggle.classList.add("is-active");
            Coveo.init(config.rootElement, {
                externalComponents: [ searchBar ],
                Facet: {
                    enableSettings: false
                },
                sourceFilter: {
                    valueCaption: config.facetValueCaptions,
                    includeInOmnibox: true
                },
                Searchbox: config.searchboxConfig,
                Omnibox: config.omniboxConfig,
                Analytics: config.analyticsConfig,
                SearchInterface: config.searchInterfaceConfig,
                Pager: config.pagerConfig,
                ResultLink: {
                    onClick: config.resultLinkOnClick
                }
            });
        }
    };
    var template_helpers = function() {
        Coveo.TemplateHelpers.registerTemplateHelper("sourceTag", (function(source) {
            var markup = "";
            var commonSource = this.result.raw.commonoktasource[0];
            var customCaption = config.facetValueCaptions[commonSource];
            if (typeof customCaption === "string") {
                markup = '<span class="highlight">'.concat(customCaption, "</span>");
            }
            return markup;
        }));
        Coveo.TemplateHelpers.registerTemplateHelper("recommendedTag", (function() {
            var rankingModifier = this.result.rankingModifier;
            var markup = "";
            if (rankingModifier === "FeaturedResult") {
                markup = '<span class="highlight is-recommended">Recommended</span>';
            }
            return markup;
        }));
        Coveo.TemplateHelpers.registerTemplateHelper("dateFormatter", (function(date) {
            var lastUpdated = "";
            var standardDate = Coveo.DateUtils.convertToStandardDate(date);
            if (Coveo.DateUtils.isValid(standardDate)) {
                var month = Coveo.DateUtils.monthToString(standardDate.getMonth());
                var day = standardDate.getDate();
                var year = standardDate.getFullYear();
                lastUpdated = "Last Updated on ".concat(month, " ").concat(day, ", ").concat(year);
            }
            return lastUpdated;
        }));
    };
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    var listeners = function() {
        var searchBar = document.querySelector("[data-search-bar]");
        var searchToggle = document.querySelector("[data-search-toggle]");
        var omniBox = document.querySelector(".CoveoOmnibox");
        var selectAllFacetButton = document.querySelector(".coveo-facet-button");
        var rootElement = config.rootElement;
        var changeSearchState = function changeSearchState() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "toggle";
            if (searchBar.classList.contains("is-active") && config.isSearchPage) {
                return;
            }
            searchToggle.classList[action]("is-active");
            searchBar.classList[action]("is-active");
        };
        var focusSearchbox = function focusSearchbox() {
            Coveo.load("Omnibox").then((function(Omnibox) {
                var searchInput = document.querySelector(".magic-box-input > input");
                if (searchToggle.classList.contains("is-active")) {
                    setTimeout((function() {
                        return searchInput.focus();
                    }), 500);
                }
            }));
        };
        var selectAll = function selectAll() {
            Coveo.load("Facet").then((function(Facet) {
                var facetElement = document.querySelector("#sourceFilter");
                var facet = Coveo.get(facetElement);
                var displayedValues = facet.getDisplayedValues();
                var selectedValues = facet.getSelectedValues();
                if (facet) {
                    if (selectedValues.length === 4) {
                        facet.deselectMultipleValues(displayedValues);
                    } else {
                        facet.selectMultipleValues(displayedValues);
                    }
                }
                Coveo.executeQuery(rootElement);
            }));
        };
        if (searchToggle) {
            Coveo.$$(searchToggle).on("click", (function(event) {
                event.preventDefault();
                if (config.isSearchPage) {
                    focusSearchbox();
                    return;
                }
                changeSearchState("toggle");
                focusSearchbox();
            }));
        }
        if (config.isSearchPage) {
            Coveo.$$(selectAllFacetButton).on("click", (function() {
                event.preventDefault();
                selectAll();
            }));
        }
        Coveo.$$(omniBox).on("populateOmniboxSuggestions", (function(event, args) {
            var input = args.omnibox.magicBox.displayedResult.input;
            var magicBoxElement = args.omnibox.magicBox.element;
            var hasSuggestions = args.omnibox.magicBox.suggestionsManager.hasSuggestions;
            if (input.length === 0) {
                magicBoxElement.classList.add("has-suggestions-hidden");
            }
            if (input.length > 0 && hasSuggestions) {
                setTimeout((function() {
                    return magicBoxElement.classList.remove("has-suggestions-hidden");
                }), 500);
            }
        }));
        Coveo.$$(rootElement).on("newResultDisplayed", (function(event, args) {
            var maxLength = 80;
            var result = args.result;
            var resultElement = args.item;
            var primaryResultLink = resultElement.querySelector(".is-primary .CoveoResultLink");
            var secondaryResultLink = resultElement.querySelector(".is-secondary .CoveoResultLink");
            var source = resultElement.CoveoResult.raw.source;
            var clickUri = resultElement.CoveoResult.clickUri;
            var title = result.title;
            if (!title || !primaryResultLink || !secondaryResultLink) {
                return;
            }
            if (source !== "okta-developer") {
                primaryResultLink.classList.add("is-external-link");
            }
            if (title.length > maxLength) {
                title = "".concat(title.substring(0, maxLength), " ...");
            }
            primaryResultLink.innerHTML = title;
            secondaryResultLink.innerHTML = clickUri;
            primaryResultLink.href = clickUri;
            secondaryResultLink.href = clickUri;
        }));
        Coveo.$$(rootElement).on("afterInitialization", (function() {
            var pattern = new RegExp("[/](blog|docs|code)[/]?.*");
            var match = pattern.exec(document.location.href);
            var matchedPattern = false;
            if (match) {
                matchedPattern = match[1];
            }
            if ((typeof Drupal === "undefined" ? "undefined" : _typeof(Drupal)) === "object" && !matchedPattern && !config.isSearchPage && !config.isDeveloperHomepage) {
                matchedPattern = "marketing";
            }
            if (matchedPattern) {
                window.sessionStorage.setItem("searchOrigin", matchedPattern);
            }
        }));
        Coveo.$$(rootElement).on("buildingQuery", (function() {
            var searchOrigin = window.sessionStorage.getItem("searchOrigin") || false;
            var state = Coveo.state(rootElement).getAttributes();
            var q = state["q"] || false;
            var stateOptions = {};
            if (q) {
                stateOptions = {
                    q: q
                };
            }
            if (searchOrigin) {
                var selectedFacet = false;
                if (searchOrigin === "docs" || searchOrigin === "code") {
                    selectedFacet = "Developer documentation";
                }
                if (searchOrigin === "blog") {
                    selectedFacet = "Developer blog";
                }
                if (searchOrigin === "marketing") {
                    selectedFacet = "Developer products";
                }
                if (selectedFacet) {
                    stateOptions = {
                        "f:@commonoktasource": [ selectedFacet ]
                    };
                }
                window.sessionStorage.removeItem("searchOrigin");
            }
            if (Object.entries(stateOptions).length > 0) {
                Coveo.state(rootElement, stateOptions);
            }
            if (typeof dataLayer != "undefined") {
                dataLayer.push({
                    event: "searchPageview",
                    searchURL: "/search/#q=" + q
                });
            }
        }));
    };
    document.addEventListener("DOMContentLoaded", (function() {
        configure_endpoint();
        listeners();
        template_helpers();
        init_search();
    }));
    document.addEventListener("developerLoaded", (function() {
        configure_endpoint();
        listeners();
        template_helpers();
        init_search();
    }));
} ]);