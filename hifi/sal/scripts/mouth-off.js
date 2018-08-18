/*! app-mouth-off (test build (no commits) 2018-03-08T22:57:55.752Z) | (c) humbletim 2018 */
/*
 copyright (c) 2018 humbletim all rights reserved 
 ... see license for hifi.HT.js
 ... see license for hifi.signal.js
 ... see license for hifi.assert.js
 ... see license for hifi.assign.js
 ... see license for hifi.bind.js
 ... see license for hifi.API.js
 ... see license for hifi.connection-helpers.js
 ... see license for hifi.smartOverlay2D.js
 ... see license for hifi.enums.overlays.js
*/
(function(j) {
    function h(c) {
        if (g[c]) return g[c].exports;
        var b = g[c] = {
            i: c,
            l: !1,
            exports: {}
        };
        j[c].call(b.exports, b, b.exports, h);
        b.l = !0;
        return b.exports
    }
    var g = {};
    h.m = j;
    h.c = g;
    h.d = function(c, b, f) {
        h.o(c, b) || Object.defineProperty(c, b, {
            configurable: !1,
            enumerable: !0,
            get: f
        })
    };
    h.n = function(c) {
        var b = c && c.__esModule ? function() {
            return c["default"]
        } : function() {
            return c
        };
        h.d(b, "a", b);
        return b
    };
    h.o = function(c, b) {
        return Object.prototype.hasOwnProperty.call(c, b)
    };
    h.p = "";
    return h(h.s = 0)
})([function(j, h, g) {
    function c(a) {
        q.alpha =
            p.backgroundAlpha = p.alpha = p._opacity * a;
        l.overlayID && (l.alpha = Math.max(l.alpha, p._opacity * a))
    }

    function b(a, b) {
        r && !Audio.muted && (print("unmuted...", k), 250 > Date.now() - k || (i++, Audio.muted = !0));
        p.width = b * t.width
    }

    function f() {
        var b = q.overlayID;
        p._destroy();
        q._destroy();
        l.overlayID && Script.setTimeout(function() {
            var a = Script.setInterval(function() {
                l.backgroundAlpha = l.alpha = Math.max(0, 0.955 * l.alpha);
                if (0.05 >= l.alpha) {
                    l._destroy();
                    a.stop();
                    try {
                        a = Script.clearInterval(a)
                    } catch (b) {}
                }
            }, 1E3 / 30)
        }, 1500);
        try {
            Script.clearInterval(s)
        } catch (c) {}
        s =
            0;
        try {
            Script.clearInterval(a)
        } catch (d) {}
        a = 0;
        print("done", b, Overlays.getOverlayType(b))
    }

    function e(a) {
        return 'data:image/svg+xml;xml,<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 103.696 103.695"><path d="M40.645 46.062a6.202 6.202 0 0 1-8.771-8.771 6.202 6.202 0 0 1 8.771 8.771zm32.383-8.677a6.202 6.202 0 0 1-8.771 8.771 6.203 6.203 0 0 1 8.771-8.771zm-11.33 32.051l-2.678 2.681 2.678 2.676c.957.959 1.486 2.233 1.486 3.587s-.527 2.629-1.486 3.588c-1.916 1.918-5.254 1.92-7.174 0l-2.678-2.676-2.676 2.676a5.03 5.03 0 0 1-3.588 1.486 5.037 5.037 0 0 1-3.586-1.486 5.075 5.075 0 0 1 0-7.17l2.678-2.681-2.68-2.679c-1.877-1.879-1.973-4.916-.219-6.92a2.63 2.63 0 0 1 .209-.236c1.945-1.946 5.268-1.936 7.184-.02l2.678 2.68 2.68-2.68c1.824-1.824 4.973-1.92 6.918-.22.062.048.162.132.254.224a5.034 5.034 0 0 1 1.486 3.582 5.03 5.03 0 0 1-1.486 3.588zm23.767 34.259H18.23C8.178 103.695 0 95.518 0 85.465V18.23C0 8.177 8.179 0 18.23 0h67.235c10.053 0 18.229 8.178 18.229 18.23v67.235c.002 10.053-8.176 18.23-18.229 18.23zM18.23 8.577c-5.322 0-9.652 4.33-9.652 9.652v67.234c0 5.322 4.33 9.652 9.652 9.652h67.235c5.321 0 9.651-4.33 9.651-9.652V18.23c0-5.322-4.33-9.652-9.651-9.652L18.23 8.577z" fill="' +
            a + '"/></svg>'
    }
    j = g(1);
    g(7);
    var d = new j.Setting("app-mouth-off/enabled", !0);
    new j.MenuCheckbox("Tools > Mouth off at startup", {
        checked: d.value,
        onchange: function(a) {
            d.value = a
        }
    });
    g = g(8);
    var k = 0,
        m, l = {},
        n = [{
            ms: 100,
            loop: function() {
                this.ms = this.ms
            }
        }, {
            ms: 1,
            loop: function(a) {
                0 === a && (l.visible = q.visible = p.visible = !0)
            }
        }, {
            ms: 750,
            loop: function(a, d) {
                b(1 - a, d);
                c.show(a, d)
            }
        }, {
            ms: 4E3,
            loop: b
        }, {
            ms: 1250,
            loop: function(a, d) {
                b(1 - a, d);
                c.hide(a, d)
            }
        }, {
            ms: 1,
            loop: f
        }];
    c.show = function(a) {
        c(a)
    };
    c.hide = function(a) {
        c(1 - a)
    };
    var r = d.value,
        i = 0,
        a = Script.setInterval(function() {
            a.stop()
        }, 1E3);
    a.stop();
    var s, t = {
        width: Math.min(0.8 * Window.innerWidth, 800),
        height: Math.min(0.8 * Window.innerHeight, 600)
    };
    j = Math.min(Window.innerWidth, Window.innerHeight, 320);
    var p = new g({
            type: "rectangle",
            visible: !0,
            width: 8,
            height: 8,
            color: !d.value ? {
                red: 128,
                green: 128,
                blue: 128
            } : {
                red: 255,
                green: 0,
                blue: 255
            },
            radius: 10
        }),
        u = "=============================================================================;  app-mouth-off.js v0.0.1;=============================================================================;  Empowerment of individuals is a key part of what makes open source work,  ;   since in the end, innovations tend to come from small groups,  ;     not from large, structured efforts.  ;                                         -- Tim O'Reilly;=============================================================================".split(";").filter(Boolean);
    Script.setTimeout(function() {
        u.forEach(function(a) {
            console.info("> " + a)
        })
    }, 3E3);
    var q = new g({
        visible: !1,
        type: "image",
        x: (Window.innerWidth - j) / 2,
        y: (Window.innerHeight - j) / 2,
        z: 989,
        onclick: function() {
            print("onclick");
            q.imageURL = e("magenta");
            n = [{
                ms: 500,
                loop: c.hide
            }];
            a.stop()
        },
        width: j,
        height: j,
        alpha: 0
    });
    Script.setTimeout(function() {
        q.imageURL = e(d.value ? "red" : "gray");
        d.value ? Audio.muted = !0 : print("!mouthoff/enabled", "current mute status:" + (Audio.muted ? "muted" : "(not muted)"));
        p._opacity = 0.5;
        p.visible = !1;
        c.show(0);
        b(0);
        var g = n.reduce(function(a, b) {
                return a + b.ms
            }, 0),
            k = Date.now();
        s = Script.setInterval(function() {
            var b = Math.max(0, (Date.now() - k) / g);
            if (!a.active && (print("phase...", n.length, g), m = n.shift())) {
                if (!m.loop) throw Error("!phase.loop:" + Object.keys(m));
                a.interval = m.ms;
                a.start();
                m.loop(0, b)
            }
            var d = Math.max(0, 1 - a.remainingTime / a.interval);
            if (m) {
                if (!m.loop) throw Error("!phase.loop:" + Object.keys(m));
                m.loop(d, b)
            } else s.stop(), a.stop(), print("exiting thread"), f()
        }, 1E3 / 30)
    }, 250)
}, function(j, h, g) {
    function c() {
        return i.print.apply(i.print,
            ["[hifi.HT]"].concat([].slice.call(arguments)))
    }

    function b(a, d) {
        this.name = a;
        this.defaultValue = d;
        this.valueChanged = l(function() {});
        this.lastValue = this.get();
        b.instances.push(this)
    }

    function f(a, b) {
        n(this, f.parse(a), b);
        j.exports.debug && c("MenuItem options", JSON.stringify(this, 0, 2));
        this.triggered = l(function() {});
        this._menuItem = f.upsert(this);
        i.Menu.menuItemEvent.connect(this, "onMenuItemEvent");
        i.Script.scriptEnding.connect(this, "dispose");
        f.instances.push(this)
    }

    function e(a, b) {
        f.call(this, a, n({
                isCheckable: !0
            },
            b));
        this.checkedChanged = l(function() {});
        this.triggered.connect(this, function() {
            this.isCheckable && this.isChecked !== this.checked && (c("triggered", this), this.checkedChanged(this.isChecked = this.checked), this.onchange && this.onchange(this.checked))
        });
        var d = n({}, a, b);
        "checked" in d && (this.checked = d.checked)
    }

    function d(a) {
        print("new ToolbarTabletProxy", a);
        this._toolbarId = a;
        this._toolbar = i.Toolbars.getToolbar(this._toolbarId);
        this._toolbar.objectName = this._toolbar.objectName || this._toolbarId;
        this._buttons = [];
        i.Script.scriptEnding.connect(this, "$dispose");
        "TabletWebScreen" === d.mode ? d._tabletMixin.call(this) : d._webMixin.call(this)
    }

    function k(a) {
        a = a || {
            text: "AppButton"
        };
        a.type = a.type || (a.toolbarId ? "toolbar" : "tablet");
        if (a.states) {
            var b = a.states.on || a,
                c = a.states.off || a;
            a.icon = c.icon || a.icon;
            a.text = c.text || a.text;
            a.activeText = b.text || a.activeText || a.text;
            a.activeIcon = b.icon || a.activeIcon || a.icon
        }
        a.id = a.id || a.name || a.text;
        a.tabletId = "tablet" === a.type ? a.tabletId || "com.highfidelity.interface.tablet.system" : void 0;
        a.toolbarId = "toolbar" === a.type ? a.toolbarId || i.Settings.getValue(a.id + "/toolbar", "com.highfidelity.interface.toolbar.system") : void 0;
        b = "toolbar" === a.type ? new d(a.toolbarId) : i.Tablet.getTablet(a.tabletId);
        c = b.addButton(k.sanitizeOptions(a));
        n(this, {
            tablet: b,
            button: c,
            uuid: c.uuid,
            options: a,
            onclick: a.onclick,
            onchange: a.onchange,
            clicked: l(function() {}),
            activeChanged: l(function() {})
        });
        if ("on" === a.state || "off" === a.state) this[a.state] = !0;
        else if (a.active || a.isActive) this.active = a.active || a.isActive;
        this.button.clicked.connect(this,
            "clicked");
        this.clicked.connect(this, "onClicked");
        i.Script.scriptEnding.connect(this, "dispose");
        a.monitor && (this.interval = i.Script.setInterval(r(this, a.monitor), 1E3))
    }

    function m(a) {
        n(this, {
            _options: a,
            _modifiers: n({}, m.modifiers, a),
            text: a.text,
            onKeyPressEvent: a.onKeyPressEvent || a.onkeypress || a.onkeydown,
            onKeyReleaseEvent: a.onKeyReleaseEvent || a.onkeyrelease || a.onkeyup,
            onStateChanged: a.onStateChanged || a.onchange
        });
        this._options.modifiers = m.encodeModifiers(this._modifiers);
        this.text in m.textModifiers &&
            (this._modifiers[m.textModifiers[this.text]] = !0);
        !this._modifiers.isShifted && /^[A-Z]$/.test(this.text) && (this.text = this.text.toLowerCase());
        this._modifiers.isShifted && /^[a-z]$/.test(this.text) && (this.text = this.text.toUpperCase());
        this.modifiers = m.encodeModifiers(this._modifiers);
        "META" === this.text && this._modifiers.isShifted && (this.text = "SHIFT");
        this._enabled = !1;
        this.state = void 0;
        this.stateChanged = l(function() {});
        this.enabledChanged = l(function() {});
        this.pressed = l(function() {});
        this.released = l(function() {});
        this.enabled = !1 !== a.enabled;
        this.log("created KeyListener", this)
    }
    var l = g(2);
    g(3);
    var n = g(4),
        r = g(5),
        i = g(6);
    j.exports = {
        version: "0.0.0b",
        MenuItem: f,
        MenuCheckbox: e,
        AppButton: k,
        KeyListener: m,
        Setting: b,
        _ToolbarTabletProxy: d,
        debug: !1
    };
    Object.defineProperties(j.exports, {
        toString: {
            value: function() {
                return "[hifi.HT version=" + this.version + (this.$meta ? " build=" + this.$meta.build : "") + "]"
            }
        }
    });
    n(b, {
        instances: Object.defineProperties([], {
            remove: {
                value: function(a) {
                    a = this.indexOf(a);
                    return ~a && this.splice(a, 1)
                }
            }
        }),
        disposeAll: function() {
            this.instances.splice(0,
                this.instances.length).forEach(function() {});
            this.interval && (i.Script.clearInterval(this.interval), this.interval = void 0)
        },
        monitor: function() {
            this.instances.forEach(function(a) {
                a.syncFromSystem()
            })
        }
    });
    b.interval = i.Script.setInterval(r(b, "monitor"), 1E3);
    b.prototype = Object.create({
        toString: function() {
            return "[Setting name=" + this.name + " value=" + this.value + "]"
        },
        dispose: function() {
            b.instances.remove(this)
        },
        syncFromSystem: function() {
            var a = this.get();
            a !== this.lastValue && this.valueChanged(a, this.lastValue);
            return this.lastValue = a
        },
        get: function() {
            return i.Settings.getValue(this.name, this.defaultValue)
        },
        set: function(a) {
            i.Settings.setValue(this.name, a);
            return this.syncFromSystem()
        }
    }, {
        value: {
            enumerable: !0,
            get: function() {
                return this.get()
            },
            set: function(a) {
                return this.set(a)
            }
        }
    });
    f.prototype = Object.create({
        toString: function() {
            return "[MenuItem path=" + this.path + " enabled=" + this.enabled + "]"
        },
        onMenuItemEvent: function(a) {
            a === this.menuItemName && (this.triggered(), this.onclick && this.onclick(this.menuItemName))
        },
        dispose: function() {
            this._menuItem &&
                (this._menuItem.dispose(), delete this._menuItem, f.instances.remove(this), i.Script.scriptEnding.disconnect(this, "dispose"), i.Menu.menuItemEvent.disconnect(this, "onMenuItemEvent"))
        },
        remove: function() {
            this.dispose();
            c("manually removing menu", this.path);
            i.Menu.removeMenu(this.path)
        }
    }, {
        path: {
            get: function() {
                return [this.menuName, this.menuItemName].join(" > ")
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return i.Menu.isMenuEnabled(this.path)
            },
            set: function(a) {
                this.enabled !== a && (this.isEnabled = a, i.Menu.setMenuEnabled(this.path,
                    this.isEnabled));
                return a
            }
        }
    });
    n(f, {
        upsert: function(a) {
            var b = [];
            if (!i.Menu.menuExists(a.menuName)) {
                var d = [];
                a.menuName.split(/\s*>\s*/).forEach(function(a) {
                    d.push(a);
                    a = d.join(" > ");
                    i.Menu.menuExists(a) || b.unshift(a)
                });
                c("creating Menu", JSON.stringify({
                    menuName: a.menuName,
                    exists: i.Menu.menuExists(a.menuName),
                    created: b
                }));
                i.Menu.addMenu(a.menuName)
            }
            i.Menu.menuExists(a.path) || (b.unshift(a.path), c("creating MenuItem", a.path), i.Menu.addMenuItem(a));
            return Object.defineProperties(b, {
                dispose: {
                    value: function() {
                        this.menuName &&
                            this.menuItemName && (c("removing created menu item", this.menuName, this.menuItemName), i.Menu.removeMenuItem(this.menuName, this.menuItemName), delete this.menuName, delete this.menuItemName);
                        this.splice(0, this.length).forEach(function(a) {
                            c("removing created menu", a);
                            i.Menu.removeMenu(a)
                        })
                    }
                }
            })
        },
        parse: function(a) {
            var b = a;
            "string" === typeof b && (a = a.split(/\s*>\s*/), b = {
                menuItemName: a.pop(),
                menuName: a.join(" > ")
            });
            return b
        },
        instances: Object.defineProperties([], {
            remove: {
                value: function(a) {
                    a = this.indexOf(a);
                    ~a &&
                        this.splice(a, 1)
                }
            }
        }),
        disposeAll: function() {
            this.instances.splice(0, this.instances.length).forEach(function(a) {
                try {
                    a.dispose()
                } catch (b) {}
            })
        }
    });
    i.Script.scriptEnding.connect(f, "disposeAll");
    e.prototype = Object.create(f.prototype, {
        toString: {
            value: function() {
                return "[MenuCheckbox path=" + this.path + " checked=" + this.checked + "]"
            }
        },
        checked: {
            enumerable: !0,
            get: function() {
                return i.Menu.isOptionChecked(this.menuItemName)
            },
            set: function(a) {
                if (this.checked !== a || void 0 === this.isChecked) this.isChecked = a, i.Menu.setIsOptionChecked(this.menuItemName,
                    this.isChecked);
                return a
            }
        }
    });
    d.mode = "TabletWebScreen";
    d.findWebWindow = function(a) {
        var b = i.Script.resolvePath("").split("/").pop().split(/[#?]/)[0] + " [" + a + "]",
            c = i.Settings.getValue(a + "/mode", d.mode);
        switch (c) {
            case "TabletWebScreen":
                throw Error(a + c);
            default:
                print("ToolbarTabletProxy -- creating OverlayWebWindow", b), a = new i.OverlayWebWindow({
                    title: b || "ToolbarTabletProxy [" + a + "]",
                    visible: !1,
                    width: 800,
                    height: 600
                }), a.objectName = a.objectName || b
        }
        return a
    };
    d._tabletMixin = function() {
        var a = i.Tablet.getTablet(this._toolbarId);
        n(this, {
            _tablet: a,
            sendToQml: a.sendToQml,
            fromQml: a.fromQml,
            popFromStack: a.popFromStack,
            loadQMLSource: a.loadQMLSource,
            loadQMLOnTop: a.loadQMLOnTop,
            gotoMenuScreen: a.gotoMenuScreen,
            gotoWebScreen: a.gotoWebScreen,
            gotoHomeScreen: a.gotoHomeScreen,
            emitScriptEvent: a.emitScriptEvent,
            screenChanged: a.screenChanged,
            webEventReceived: a.webEventReceived,
            tabletShownChanged: a.tabletShownChanged
        });
        Object.defineProperties(this, {
            tabletShown: {
                enumerable: !0,
                get: function() {
                    return a.tabletShown
                }
            }
        })
    };
    d._webMixin = function() {
        n(this, {
            screenChanged: l(function() {}),
            webEventReceived: l(function() {}),
            fromQml: l(function() {}),
            _getTabletWebWindow: function() {
                this._web || (this._web = d.findWebWindow(this._toolbarId), this._web.webEventReceived.connect(this, "webEventReceived"), this.onWebClosed = function() {
                    this.screenChanged("Closed")
                }, this._web.closed.connect(this, "onWebClosed"));
                return this._web
            },
            popFromStack: function() {
                print(this._toolbarId, "popFromStack")
            },
            sendToQml: function(a) {
                print(this._toolbarId, "sendToQml", a)
            },
            loadQMLSource: function(a) {
                print(this._toolbarId,
                    "loadQMLSource", a)
            },
            loadQMLOnTop: function(a) {
                print(this._toolbarId, "loadQMLOnTop", a)
            },
            gotoMenuScreen: function(a, b) {
                print(this._toolbarId, "gotoMenuScreen", a, b)
            },
            gotoWebScreen: function(a) {
                print(this._toolbarId, "gotoWebScreen", a);
                var b = this._getTabletWebWindow();
                b.setSize(Math.min(0.8 * Controller.getViewportDimensions().x, 800), Math.min(0.8 * Controller.getViewportDimensions().y, 600));
                b.setURL(a);
                b.setVisible(!0);
                b.raise();
                this.screenChanged("Web", a)
            },
            gotoHomeScreen: function(a) {
                print(this._toolbarId, "gotoHomeScreen",
                    a);
                a = this._getTabletWebWindow();
                a.setURL("about:blank");
                a.setVisible(!1);
                this.screenChanged("Closed")
            },
            emitScriptEvent: function(a) {
                print(this._toolbarId, "emitScriptEvent", a);
                this._web ? this._web.emitScriptEvent(a) : print("WARNING -- tablet.emitScriptEvent called before web window created", a)
            }
        })
    };
    d.prototype = {
        toString: function() {
            return "[HT.ToolbarTabletProxy native=" + this._toolbar + " visible=" + this._toolbar.readProperty("visible") + " buttons=" + this._buttons.length + "]"
        },
        $dispose: function() {
            c("ToolbarTabletProxy.$dispose",
                this);
            this._buttons.splice(0, this._buttons.length).forEach(r(this, "removeButton"));
            if (this._web) {
                var a = this._web;
                this._web = null;
                a.webEventReceived.disconnect(this, "webEventReceived");
                a.closed.disconnect(this, "onWebClosed");
                a.close()
            }
            this._tablet && (this._tablet = null)
        },
        addButton: function(a) {
            a.objectName = a.objectName || Uuid.generate();
            var b = this._toolbar.addButton(k.sanitizeOptions(a));
            if (!b) throw Error(b + " ToolbarTabletProxy -- could not add button " + a.text + " to " + this._toolbarId);
            i.Script.setTimeout(r(this,
                function() {
                    this._ensureToolbarVisible()
                }), 1E3);
            b.objectName = a.objectName;
            var d = {
                _button: b,
                __proto__: b,
                getProperties: function() {
                    return "uuid name text icon isActive objectName visible activeText activeIcon".split(" ").reduce(function(a, d) {
                        a[d] = b.readProperty(d);
                        return a
                    }, {})
                },
                editProperties: function(a) {
                    for (var d in a) b.writeProperty(d, a[d])
                }
            };
            this._buttons.push(d);
            c("=--=-=--==--=-=-=-= ToolbarTabletProxy addButton:" + (d && d.objectName));
            i.Script.scriptEnding.connect(this, function() {
                c("ToolbarTabletProxy scriptingEnding removeButton:" +
                    (d && d.objectName));
                this.removeButton(d && d.objectName)
            });
            return d
        },
        removeButton: function(a) {
            var b = this._buttons.indexOf(a);
            if (~b) {
                var d = this._buttons.splice(b, 1)[0];
                d.__proto__ = {};
                c("ToolbarTabletProxy -- removeButton @ " + b, d)
            } else c("ToolbarTabletProxy -- removeButton -- button not found:" + a);
            return this._toolbar.removeButton(a.objectName)
        },
        _ensureToolbarVisible: function() {
            var a = this._toolbar;
            if (!a.readProperty("shown") || !a.readProperty("visible") || !a.readProperty("opacity")) a.writeProperty("shown",
                !0), a.writeProperty("visible", !0), a.writeProperty("opacity", 1)
        }
    };
    k.sanitizeOptions = function(a) {
        return JSON.parse(JSON.stringify({
            objectName: a.objectName,
            icon: a.icon,
            activeIcon: a.activeIcon,
            text: a.text,
            activeText: a.activeText,
            sortOrder: a.sortOrder,
            stableOrder: a.stableOrder,
            isActive: a.isActive,
            enabled: a.enabled,
            visible: a.visible
        }))
    };
    k.prototype = Object.create({
        toString: function() {
            return "[TabletButton text=" + this.text + " active=" + this.active + "]"
        },
        onClicked: function(a) {
            this.onclick && this.onclick(a)
        },
        dispose: function() {
            this.dispose =
                function() {};
            c("TabletButton.dispose:" + this);
            this.button && this.tablet.removeButton(this.button);
            this.interval && i.Script.clearInterval(this.interval);
            this.interval = this.button = this.tablet = null
        }
    }, {
        state: {
            get: function() {
                return this.active ? "on" : "off"
            }
        },
        on: {
            get: function() {
                return this.active
            },
            set: function(a) {
                return this.active = a
            }
        },
        off: {
            get: function() {
                return this.inactive
            },
            set: function(a) {
                return this.inactive = a
            }
        },
        inactive: {
            get: function() {
                return !this.active
            },
            set: function(a) {
                this.active = !a;
                return a
            }
        },
        active: {
            enumerable: !0,
            get: function() {
                return this.button && this.button.getProperties().isActive
            },
            set: function(a) {
                if (this.isActive !== this.active || a !== this.active) this.button && this.button.editProperties({
                    isActive: a
                }), this.activeChanged(this.active), this.onchange && this.onchange(this.active, this.isActive), this.isActive = this.active;
                return a
            }
        },
        text: {
            enumerable: !0,
            get: function() {
                var a = this.button ? this.button.getProperties() : {
                    text: "<disposed>"
                };
                return a.isActive && a.activeText || a.text
            },
            set: function(a) {
                this.button && this.button.editProperties({
                    text: a
                });
                return a
            }
        },
        activeIcon: {
            enumerable: !0,
            get: function() {
                return (this.button ? this.button.getProperties() : {
                    activeIcon: "<disposed>"
                }).activeIcon
            },
            set: function(a) {
                this.button.editProperties({
                    activeIcon: a
                });
                return a
            }
        },
        icon: {
            enumerable: !0,
            get: function() {
                return (this.button ? this.button.getProperties() : {
                    icon: "<disposed>"
                }).icon
            },
            set: function(a) {
                this.button && this.button.editProperties({
                    icon: a
                });
                return a
            }
        }
    });
    m.modifiers = {
        isAlt: null,
        isControl: null,
        isMenu: null,
        isMeta: null,
        isShifted: null,
        isSuper: null
    };
    m.textModifiers = {
        ALT: "isAlt",
        CONTROL: "isControl",
        MENU: "isMenu",
        META: "isMeta",
        SHIFT: "isShifted",
        SUPER: "isSuper"
    };
    m.encodeModifiers = function(a, b) {
        return "(" + Object.keys(m.modifiers).map(function(d) {
            var c = a[d];
            return (b ? "boolean" === typeof c : c) && (c ? "" : "~") + d.replace(/^is|ed$/g, "").toLowerCase()
        }).filter(Boolean).sort().join(" | ") + ")"
    };
    m.prototype = Object.create({
        toString: function() {
            var a = this.text === this._options.text ? this.text : this._options.text + " (as " + this.text + ")",
                b = this.modifiers = this._options.modifiers ? this.modifiers :
                this._options.modifiers + " (as " + this.modifiers + ")";
            return "[KeyListener text=" + a + " modifiers=" + b + " enabled=" + this.enabled + " state=" + this.state + "]"
        },
        log: function() {
            i.print("KeyListener | ", [].slice.call(arguments).join(" "))
        },
        setState: function(a) {
            this.lastState = this.state;
            this.state = a.type;
            if (this.lastState === this.state) return this.lastWarnedState !== this.lastState && (this.lastWarnedState = this.lastState, this.log("WARNING: duplicate key state", this, JSON.stringify(a, 0, 2))), this.lastState;
            this.stateChanged("keypress" ===
                this.state, a);
            "function" === typeof this.onStateChanged && this.onStateChanged("keypress" === this.state, a);
            this["keypress" === this.state ? "pressed" : "released"](a);
            return this.lastState
        },
        handleEvent: function(a, b) {
            var d = a.type = "onKeyPressEvent" === b ? "keypress" : "keyrelease",
                c = a.modifiers = m.encodeModifiers(a);
            if (a.text === this.text && c === this.modifiers) return this.setState(a), this[b] && this[b](a);
            if ("keypress" === this.state && "keyrelease" === d && c !== this.modifiers) return this.log("synthesizing autokeyrelease", this.state,
                d), this.setState(a), this[b] && this[b](a);
            1 < this._options.debug && this.log(JSON.stringify({
                type: a.type,
                expected: {
                    text: this.text,
                    modifiers: this.modifiers
                },
                actual: {
                    text: a.text,
                    modifiers: a.modifiers
                }
            }))
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        $onKeyPressEvent: function(a) {
            return !a.isAutoRepeat && this.handleEvent(a, "onKeyPressEvent")
        },
        $onKeyReleaseEvent: function(a) {
            return !a.isAutoRepeat && this.handleEvent(a, "onKeyReleaseEvent")
        },
        $bindEvents: function(a) {
            var b = a ? "connect" : "disconnect",
                d = (a ? "capture" : "release") + "KeyEvents";
            this.log(b + "ing signals...", JSON.stringify(this._options));
            (this.onStateChanged || this.onKeyPressEvent) && i.Controller.keyPressEvent[b](this, "$onKeyPressEvent");
            (this.onStateChanged || this.onKeyReleaseEvent) && i.Controller.keyReleaseEvent[b](this, "$onKeyReleaseEvent");
            i.Controller[d](this._options);
            i.Script.scriptEnding[b](this, "disable");
            this.mapping && this.mapping[a ? "enable" : "disable"]()
        }
    }, {
        enabled: {
            enumerable: !0,
            get: function() {
                return this._enabled
            },
            set: function(a) {
                a = !!a;
                this._enabled !== a && (this.$bindEvents(this._enabled = a), this.enabledChanged(this.enabled))
            }
        }
    })
}, function(j) {
    function h() {
        var c = [];
        return Object.defineProperties(function() {
            var b = [].slice.call(arguments);
            c.forEach(function(c) {
                c.handler.apply(c.scope, b)
            })
        }, {
            connect: {
                value: function(b, f) {
                    c.push({
                        scope: b,
                        handler: b[f] || f || b
                    })
                }
            },
            disconnect: {
                value: function(b, f) {
                    var e = b[f] || f || b;
                    c = c.filter(function(d) {
                        return !(d.scope === b && d.handler === e)
                    })
                }
            }
        })
    }

    function g(c, b, f, e) {
        function d() {
            var b = g.metaConnections.indexOf(d);
            ~b ? g.metaConnections.splice(b, 1) : console.warn("meta connection not found in metaConnections array..", JSON.stringify(d));
            "disconnect" in k ? k.disconnect(f, e) : console.warn(".disconnect method not found in signal connection..", JSON.stringify(d))
        }
        if (!c || !f) throw Error("connect(sender, signal, receiver, method) -- all arguments are required " + [c, b, f, e]);
        var k = "function" === typeof b ? b : c[b];
        k.connect(f, e);
        d.sender = c;
        d.signal = b;
        d.signalFunc = k;
        d.receiver = f;
        d.method = e;
        d.toJSON = function() {
            return {
                sender: c,
                signal: b,
                receiver: f,
                method: e
            }
        };
        d.toString = function() {
            return "[signal.metaConnection" + ["sender=" + this.sender, "signal=" + ("string" === typeof this.signal ? this.signal : this.signal.name || "anonymous"), "receiver=" + this.receiver, "method=" + ("string" === typeof this.method ? this.method : this.method.name || "anonymous")].filter(Boolean).join(" ") + "]"
        };
        g.metaConnections.push(d);
        return d
    }
    j.exports = h;
    h.connect = g;
    h.disconnect = function(c, b, f, e) {
        b = b || 0;
        f = f || 0;
        e = e || 0;
        if (!c) throw Error("disconnect(sender, signal, receiver, method) -- sender cannot be undefined " +
            c);
        if (!f && e) throw Error('disconnect(sender, signal, receiver, method) -- "method must be 0 if receiver is left out"');
        var d = g.metaConnections.indexOf(c);
        if (~d) return d = g.metaConnections.splice(d, 1)[0], console.log("disconnecting via metaconnection:" + d), d.sender[d.signal].disconnect(d.receiver, d.method), !0;
        var k = [];
        g.metaConnections.slice().forEach(function(d) {
            if (d.sender === c && (0 === b || d.signal === b) && (0 === f || d.receiver === f) && (0 === e || d.method === e)) console.log("disconnecting", d.receiver + "." + d.method + " from " +
                d.sender + "." + d.signal), k.push(d())
        });
        k.length || console.warn("WARNING: nothing disconnect for arguments", [c, b || "*", f || "*", e || "*"] + "");
        return k.length
    };
    h.mixin = function(c) {
        var b, f;
        for (f in Object(c))
            if ((b = c[f]) && "object" === typeof b && "objectName" in b) h.debug && console.log("signal.mixin -- considering", [c, f, b + "", "non-static $connect/$disconnect methods"] + ""), "$connect" in b || Object.defineProperties(b, {
                $connect: {
                    configurable: !0,
                    enumerable: !0,
                    value: function(b, d, c) {
                        return h.connect.apply({}, [this].concat([].slice.call(arguments)))
                    }
                },
                $disconnect: {
                    configurable: !0,
                    enumerable: !0,
                    value: function(b, d, c) {
                        var f = [].slice.call(arguments);
                        "object" === typeof b && f.unshift(0);
                        return h.disconnect.apply({}, [this].concat(f))
                    }
                }
            });
        return c
    };
    h.version = "0.0.1";
    g.metaConnections = []
}, function(j) {
    function h(c, b) {
        b = b || "Assertion Failed:";
        if ("function" === typeof c && "assertion" === c.name) {
            var f = (c + "").replace(/[\r\n]/g, " ").replace(/^[^{]+\{|\}$|^\s*|\s*$/g, "").trim().replace(/^return /, "").replace(/\s[\r\n\t\s]+/g, " ");
            b += " " + JSON.stringify(f);
            try {
                c = c()
            } catch (e) {
                b +=
                    "(exception: " + e + ")"
            }
        }
        if (!c) throw Error(b + (" (" + c + ")"));
        return c
    }
    try {
        j.exports = h
    } catch (g) {
        window.assert = h
    }
}, function(j) {
    function h(g, c) {
        if (null == g) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Array.isArray(g) ? g : Object(g), f = 1; f < arguments.length; f++) {
            var e = arguments[f];
            if (null != e)
                for (var d in e) Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
        return b
    }
    j.exports = h;
    h.mixin = function(g) {
        g.assign = g.assign || h
    };
    h.deep = function c(b, f) {
        for (var e = Array.isArray(b) ? b : Object(b),
                d = 1; d < arguments.length; d++) {
            var k = arguments[d];
            if (null != k)
                for (var h in k) {
                    var j = e[h];
                    if (Object.prototype.hasOwnProperty.call(k, h)) {
                        var n = k[h];
                        j && n && "object" === typeof n ? c(j, n) : e[h] = n
                    }
                }
        }
        return e
    }
}, function(j) {
    function h(g, c, b) {
        var f = [].slice.call(arguments, 2);
        if (!c) throw Error("!method [" + [g, c, b] + "]");
        var e = "string" === typeof c ? c : c.name,
            d = null;
        c = g[c] || c;
        if (h.debug && e) {
            var e = e.replace(/^./, function(b) {
                    return b.toUpperCase()
                }).replace(/[^A-Za-z0-9_$]/g, "_"),
                k = {
                    varargs: f
                };
            k[e] = c;
            d = eval(("1," + (f.length ?
                function() {
                    return k.methodName.apply(g, k.varargs.concat([].slice.call(arguments)))
                } : function() {
                    return k.methodName.apply(g, arguments)
                })).replace(/methodName/g, e))
        } else d = f.length ? function() {
            return c.apply(g, f.concat([].slice.call(arguments)))
        } : function() {
            return c.apply(g, arguments)
        };
        return d
    }
    j.exports = h;
    h.debug = !0;
    h.mixin = function(g) {
        g.bind = g.bind || h.polyfill
    };
    h.polyfill = function(g) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            b = this,
            f = function() {},
            e = function() {
                return b.apply(this instanceof f ? this : g, c.concat(Array.prototype.slice.call(arguments)))
            };
        this.prototype && (f.prototype = this.prototype);
        e.prototype = new f;
        return e
    }
}, function(j) {
    function h() {
        return {
            getMuted: function() {
                return e.Audio.muted
            },
            muteToggled: e.Audio.mutedChanged,
            toggleMute: function() {
                e.Audio.muted = !e.Audio.muted
            }
        }
    }
    var g = "object" === typeof Script && /^ScriptEngine/.test(Script) && "hifi" || "undefined" !== typeof process &&
        process.title || "undefined" !== typeof navigator && navigator.userAgent && "browser" || "function" === typeof print && "function" === typeof help && "smjs" || "unknown",
        c;
    if ("hifi" === g) {
        var b;
        c = b = Object.create({
            $version: "2017.09.02",
            AddressManager: location,
            Account: "object" === typeof Account ? Account : void 0,
            Agent: "object" === typeof Agent ? Agent : void 0,
            Avatar: "object" === typeof Avatar ? Avatar : void 0,
            HMD: "object" === typeof HMD ? HMD : void 0,
            AnimationCache: AnimationCache,
            Audio: "object" === typeof Audio ? Audio : void 0,
            AvatarManager: "object" ===
                typeof AvatarManager ? AvatarManager : void 0,
            Controller: "object" === typeof Controller ? Controller : void 0,
            Desktop: "object" === typeof Desktop ? Desktop : void 0,
            DebugDraw: "object" === typeof DebugDraw ? DebugDraw : void 0,
            Entities: Entities,
            EntityViewer: "object" === typeof EntityViewer ? EntityViewer : void 0,
            GlobalServices: "object" === typeof GlobalServices ? GlobalServices : void 0,
            Menu: "object" === typeof Menu ? Menu : void 0,
            Messages: Messages,
            MyAvatar: "object" === typeof MyAvatar ? MyAvatar : void 0,
            OverlayWebWindow: "function" === typeof OverlayWebWindow ?
                OverlayWebWindow : void 0,
            OverlayWindow: "function" === typeof OverlayWindow ? OverlayWindow : void 0,
            Overlays: "object" === typeof Overlays ? Overlays : void 0,
            Quat: Quat,
            Picks: "object" === typeof Picks ? Picks : void 0,
            PickType: "object" === typeof PickType ? PickType : void 0,
            RayPick: "object" === typeof RayPick ? RayPick : void 0,
            Recording: Recording,
            Render: "object" === typeof Render ? Render : void 0,
            Resource: Resource,
            Script: Script,
            ScriptDiscoveryService: "object" === typeof ScriptDiscoveryService ? ScriptDiscoveryService : void 0,
            Settings: "object" ===
                typeof Settings ? Settings : {
                    getValue: function(b, c) {
                        return b in this ? this[b] : c
                    },
                    setValue: function(b, c) {
                        this[b] = c
                    }
                },
            Tablet: "object" === typeof Tablet ? Tablet : void 0,
            Toolbars: "object" === typeof Toolbars ? Toolbars : void 0,
            Uuid: Uuid,
            Users: Users,
            Vec3: Vec3,
            Window: "object" === typeof Window ? Window : void 0,
            XMLHttpRequest: XMLHttpRequest,
            location: "object" === typeof location ? location : void 0,
            console: console,
            print: print
        }, {
            AvatarList: {
                enumerable: !0,
                get: function() {
                    Script["notified that AvatarList is deprecated"] || (Script["notified that AvatarList is deprecated"] = !0, b.print("[DEPRECATED] AvatarList is deprecated -- please use AvatarManager instead"));
                    return b.AvatarManager
                }
            },
            AudioDevice: {
                enumerable: !0,
                get: function k() {
                    Script["notified that AudioDevice is deprecated"] || (Script["notified that AudioDevice is deprecated"] = !0, b.print("[DEPRECATED] AudioDevice is deprecated -- please update your code to use Audio instead"));
                    return k.polyfill = k.polyfill || new h
                }
            }
        })
    } else {
        var f = {
            $version: "2017.08.31-stubs",
            Uuid: {
                toString: function(b) {
                    return b
                }
            },
            Entities: {
                objectName: "",
                enterEntity: {
                    connect: function() {}
                },
                leaveEntity: {
                    connect: function() {}
                }
            },
            Tablet: {
                editProperties: function() {},
                clicked: {
                    connect: function() {}
                },
                addButton: function() {
                    return this
                },
                getTablet: function() {
                    return this
                }
            },
            Menu: {
                objectName: "",
                setIsOptionChecked: function() {},
                isOptionChecked: function() {},
                menuItemEvent: {
                    connect: function() {}
                },
                menuItemExists: function() {
                    return !0
                },
                menuExists: function() {
                    return !0
                },
                addMenu: function() {},
                addMenuItem: function() {}
            },
            Render: {
                getConfig: function() {
                    return this
                }
            },
            Settings: {
                getValue: function() {}
            },
            Script: {
                objectName: "",
                context: "(stub)",
                setInterval: function() {},
                require: {},
                scriptEnding: {
                    connect: function() {}
                },
                registerValue: function() {},
                resolvePath: function() {
                    return ""
                }
            },
            AddressManager: {
                objectName: ""
            },
            console: "object" === typeof console ? console : {
                log: "smjs" === g ? print : function() {
                    throw Error("console output not supported env:" + g);
                }
            },
            print: function() {
                f.console.log(["[hifi.scripting.script]"].concat([].slice.call(arguments)).join(" "))
            }
        };
        c = f
    }
    var e = c;
    j.exports = e;
    Object.defineProperties(j.exports, {
        $env: {
            value: g
        },
        toString: {
            value: function() {
                return "[hifi.API context=" + this.Script.context + " $env=" + this.$env + " $version=" + this.$version + "]"
            }
        }
    })
}, function(j) {
    j.exports = {
        constructor: function() {},
        resolve: function(h, g, c, b) {
            return {
                constructor: this.constructor,
                source: h,
                signal: h && h[g] || g,
                target: c,
                slot: c && c[b] || b || c,
                toJSON: function() {
                    return this.toString()
                },
                toString: function() {
                    return "[connection source=" + (this.source.objectName || this.source.constructor.name) + "." + this.signal.name + " target=" + (this.dest && (this.dest.objectName ||
                        this.dest.constructor.name)) + "." + this.slot.name + "]"
                }
            }
        },
        wire: function(h, g, c, b, f) {
            var e = 2 === arguments.length ? g : this.resolve(g, c, b, f);
            try {
                e.signal[h](e.target, e.slot)
            } catch (d) {
                console.error("ERROR helpers.wire", h, e)
            }
            return e
        },
        connect: function(h, g, c, b) {
            var f = this.wire("connect", h, g, c, b),
                e = this;
            f.disconnect = function() {
                print("autodisconnect", this);
                e.wire("disconnect", f);
                try {
                    Script.scriptEnding.disconnect(f, "disconnect")
                } catch (b) {}
            };
            Script.scriptEnding.connect(f, "disconnect");
            return f
        },
        disconnect: function(h) {
            return this.wire.apply(this,
                ["disconnect"].concat([].slice.call(arguments)))
        }
    }
}, function(j, h, g) {
    function c(b) {
        if (!b.type) throw Error('specify overlay type as { type: "...", x: ..., etc. }');
        this.type = b.type;
        delete b.type;
        this.overlayID = Overlays.addOverlay(this.type, b);
        c.instances[this.overlayID] = this;
        Object.defineProperty(this, "_cache", {
            value: {}
        });
        for (var f in b) "function" === typeof b[f] ? this[f] = b[f] : this._cache[f] = b[f];
        this._defineHotProperties();
        Controller.mousePressEvent.connect(this, "_maybeMousePress");
        Overlays.overlayDeleted.connect(this,
            "_maybeCleanup");
        Script.scriptEnding.connect(this, "_destroy")
    }
    c.types = g(9).types;
    c.version = "0.0.0";
    c.instances = {};
    j.exports = c;
    c.prototype = Object.create({
        overlayID: null,
        _get: function(b) {
            return this._cache[b]
        },
        _set: function(b, c) {
            var e = {};
            e[b] = c;
            this._update(e);
            return c
        },
        _update: function(b) {
            Overlays.editOverlay(this.overlayID, b);
            for (var c in b) this._cache[c] = b[c]
        },
        _destroy: function() {
            if (this.overlayID) {
                print("cleaning up", this.overlayID);
                Overlays.overlayDeleted.disconnect(this, "_maybeCleanup");
                Overlays.deleteOverlay(this.overlayID);
                Controller.mousePressEvent.disconnect(this, "_maybeMousePress");
                try {
                    Script.scriptEnding.disconnect(this, "cleanup")
                } catch (b) {}
                delete c.instances[this.overlayID];
                this.overlayID = null;
                return !0
            }
        },
        _maybeCleanup: function(b) {
            b === this.overlayID && this._destroy()
        },
        _maybeMousePress: function(b) {
            this.onclick && Overlays.getOverlayAtPoint(b) === this.overlayID && (b.overlayID = this.overlayID, this.onclick(b))
        },
        _defineHotProperties: function(b) {
            b = c.types[b || this.type].properties.concat(["visible"]);
            return Object.defineProperties(this,
                b.reduce(function(b, c) {
                    b[c] = {
                        enumerable: !0,
                        get: function() {
                            return this._get(c)
                        },
                        set: function(b) {
                            return this._set(c, b)
                        }
                    };
                    return b
                }, {
                    _propertyNames: {
                        value: b
                    }
                }))
        }
    }, {
        overlayType: {
            enumerable: !0,
            get: function() {
                return Overlays.getOverlayType(this.overlayID)
            }
        },
        properties: {
            get: function() {
                return this._cache
            },
            set: function(b) {
                this._update(b)
            }
        }
    })
}, function(j) {
    function h() {
        return Object.keys(j.exports.types)
    }

    function g(b, d) {
        if (d) Array.isArray(d) || (d = [d]);
        else {
            var c = Overlays.getOverlayType(b);
            if (c in j.exports.types) d =
                j.exports.types[c].properties;
            else {
                if (g.debug) {
                    if (g.debug && Uuid.isNull(b)) throw Error("invalid UUID: " + b);
                    throw Error("unrecognized overlay type:" + c);
                }
                d = j.exports.properties
            }
        }(c = Overlays.getProperties(b, d)) ? ("parentID" in c && !c.parentID && (c.parentID = Uuid.toString(c.parentID)), c.id = c.id || b) : c = {};
        return c
    }

    function c(e, d) {
        e.__hifi_enums_mixed__ !== c && (Object.defineProperty(e, "__hifi_enums_mixed__", {
                writable: !0,
                value: c
            }), e.types = e.types || Object.keys(j.exports.types), e.getOverlayTypes = e.getOverlayTypes ||
            h, e.getOverlayProperties = e.getOverlayProperties || g, e.cleanup = e.cleanup || function() {
                return !1
            }, e.fixWeb3DProperties = e.fixWeb3DProperties || f);
        d && e.cleanup !== b && (b.overlayIDs = e.cleanup && e.cleanup.overlayIDs || [], e.cleanup = b, e.$addOverlay = e.$addOverlay || e.addOverlay, e.addOverlay = function(c, d) {
            var f = e.$addOverlay.apply(this, arguments);
            f && b.overlayIDs.push(f);
            return f
        }, e.$deleteOverlay = e.$deleteOverlay || e.deleteOverlay, e.deleteOverlay = function(c) {
            var d = b.overlayIDs.indexOf(c);
            ~d && b.overlayIDs.splice(d, 1);
            return e.$deleteOverlay(c)
        }, "object" === typeof Script && Script.scriptEnding.connect(e, "cleanup"))
    }

    function b() {
        return b.overlayIDs.splice(0, b.overlayIDs.length).map(function(b) {
            try {
                var c = Overlays.getOverlayProperties(b)
            } catch (f) {}
            Overlays.debug && print("autocleanup -- deleting overlay:", b);
            Overlays.deleteOverlay(b);
            return c
        })
    }

    function f(b, c) {
        "web3d" === b && ("dimensions" in c ? ("dpi" in c ? c.resolution = {
            x: 39.3701 * c.dimensions.x * c.dpi,
            y: 39.3701 * c.dimensions.y * c.dpi
        } : (!c.resolution && print("fixWeb3DProperties: using default resolution of 640x480"),
            c.resolution = c.resolution || {
                x: 640,
                y: 480
            }, c.dpi = c.resolution.x / (39.3701 * c.dimensions.x), c.resolution.y = c.dimensions.y / c.dimensions.x * c.resolution.x), c.dimensions = {
            x: 1,
            y: 1
        }) : "resolution" in c && "dpi" in c && (c.dimensions = {}, c.dimensions.x = c.dpi / 25.4, c.dimensions.y = c.resolution.y / c.resolution.x * c.dimensions.x, c.dimensions.y *= 2), print("web3d hackaround", JSON.stringify(c, 0, 2)));
        return c
    }
    g.debug = !1;
    j.exports = {
        build: "2017-10-04T21:22:52.845Z",
        commit: "0a213e2",
        release: "RELEASE-7150",
        types: {
            circle3d: {
                source: "Circle3DOverlay.cpp",
                "class": "Circle3DOverlay",
                base: "Planar3DOverlay",
                type: "circle3d",
                ownProperties: "endAt hasTickMarks innerRadius majorTickMarksAngle majorTickMarksColor majorTickMarksLength minorTickMarksAngle minorTickMarksColor minorTickMarksLength outerRadius radius startAt".split(" "),
                aliases: {},
                _raw: "endAt\nhasTickMarks\ninnerRadius\nmajorTickMarksAngle\nmajorTickMarksColor\nmajorTickMarksLength\nminorTickMarksAngle\nminorTickMarksColor\nminorTickMarksLength\nouterRadius\nradius\nstartAt",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront endAt grabbable hasTickMarks ignoreRayIntersection innerRadius isDashedLine isSolid isWire lineWidth localPosition localRotation majorTickMarksAngle majorTickMarksColor majorTickMarksLength minorTickMarksAngle minorTickMarksColor minorTickMarksLength name outerRadius parentID parentJointIndex position pulseMax pulseMin pulsePeriod radius rotation startAt type visible".split(" ")
            },
            cube: {
                source: "Cube3DOverlay.cpp",
                "class": "Cube3DOverlay",
                base: "Volume3DOverlay",
                type: "cube",
                ownProperties: ["borderSize"],
                aliases: {},
                _raw: "borderSize",
                properties: "alpha alphaPulse anchor borderSize color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            grid: {
                source: "Grid3DOverlay.cpp",
                "class": "Grid3DOverlay",
                base: "Planar3DOverlay",
                type: "grid",
                ownProperties: ["followCamera", "majorGridEvery", "minorGridEvery"],
                aliases: {},
                _raw: "followCamera\nmajorGridEvery\nminorGridEvery",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront followCamera grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation majorGridEvery minorGridEvery name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            image: {
                source: "ImageOverlay.cpp | ImageOverlay.qml",
                "class": "ImageOverlay",
                base: "QmlOverlay",
                type: "image",
                ownProperties: "alpha color height imageURL subImage visible width x y".split(" "),
                aliases: {},
                _raw: "alpha\ncolor\nheight\nimageURL\nsubImage\nvisible\nwidth\nx\ny",
                properties: "alpha alpha alphaPulse anchor bounds color color colorPulse height height imageURL pulseMax pulseMin pulsePeriod subImage type visible visible width width x x y y".split(" ")
            },
            image3d: {
                source: "Image3DOverlay.cpp",
                "class": "Image3DOverlay",
                base: "Billboard3DOverlay",
                type: "image3d",
                ownProperties: ["emissive", "offsetPosition", "subImage", "url"],
                aliases: {},
                _raw: "emissive\noffsetPosition\nsubImage\nurl",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront emissive grabbable ignoreRayIntersection isDashedLine isFacingAvatar isSolid isWire lineWidth localPosition localRotation name offsetPosition offsetPosition offsetRotation offsetScale parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation subImage type url visible".split(" ")
            },
            line3d: {
                source: "Line3DOverlay.cpp",
                "class": "Line3DOverlay",
                base: "Base3DOverlay",
                type: "line3d",
                ownProperties: ["end", "length", "localEnd", "localStart", "start"],
                aliases: {
                    end: ["endPoint", "p2"],
                    start: ["startPoint", "p1"]
                },
                _raw: "end|endPoint|p2\nlength\nlocalEnd\nlocalStart\nstart|startPoint|p1",
                properties: "alpha alphaPulse anchor color colorPulse drawInFront end grabbable ignoreRayIntersection isDashedLine isSolid isWire length lineWidth localEnd localPosition localRotation localStart name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation start type visible".split(" ")
            },
            model: {
                source: "ModelOverlay.cpp",
                "class": "ModelOverlay",
                base: "Volume3DOverlay",
                type: "model",
                ownProperties: "dimensions jointNames jointOrientations jointPositions jointRotations jointTranslations scale textures url".split(" "),
                aliases: {},
                _raw: "dimensions|size\njointNames\njointOrientations\njointPositions\njointRotations\njointTranslations\nscale\ntextures\nurl",
                properties: "alpha alphaPulse anchor color colorPulse dimensions dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire jointNames jointOrientations jointPositions jointRotations jointTranslations lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation scale textures type url visible".split(" ")
            },
            rectangle: {
                source: "RectangleOverlay.cpp | RectangleOverlay.qml",
                "class": "RectangleOverlay",
                base: "QmlOverlay",
                type: "rectangle",
                ownProperties: "alpha borderAlpha borderColor borderWidth color height radius visible width x y".split(" "),
                aliases: {},
                _raw: "alpha\nborderAlpha\nborderColor\nborderWidth\ncolor\nheight\nradius\nvisible\nwidth\nx\ny",
                properties: "alpha alpha alphaPulse anchor borderAlpha borderColor borderWidth bounds color color colorPulse height height pulseMax pulseMin pulsePeriod radius type visible visible width width x x y y".split(" ")
            },
            rectangle3d: {
                source: "Rectangle3DOverlay.cpp",
                "class": "Rectangle3DOverlay",
                base: "Planar3DOverlay",
                type: "rectangle3d",
                ownProperties: [],
                aliases: {},
                _raw: "",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            shape: {
                source: "Shape3DOverlay.cpp",
                "class": "Shape3DOverlay",
                base: "Volume3DOverlay",
                type: "shape",
                ownProperties: ["borderSize", "shape"],
                aliases: {},
                _raw: "borderSize\nshape",
                properties: "alpha alphaPulse anchor borderSize color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation shape type visible".split(" ")
            },
            sphere: {
                source: "Sphere3DOverlay.cpp",
                "class": "Sphere3DOverlay",
                base: "Volume3DOverlay",
                type: "sphere",
                ownProperties: [],
                aliases: {},
                _raw: "",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            text: {
                source: "TextOverlay.cpp | TextOverlay.qml",
                "class": "TextOverlay",
                base: "QmlOverlay",
                type: "text",
                ownProperties: "alpha backgroundAlpha backgroundColor color font height leftMargin lineHeight margin text textColor topMargin visible width x y".split(" "),
                aliases: {},
                _raw: "alpha\nbackgroundAlpha\nbackgroundColor\ncolor\nfont\nheight\nleftMargin\nlineHeight\nmargin\ntext\ntextColor\ntopMargin\nvisible\nwidth\nx\ny",
                properties: "alpha alpha alphaPulse anchor backgroundAlpha backgroundColor bounds color color colorPulse font height height leftMargin lineHeight margin pulseMax pulseMin pulsePeriod text textColor topMargin type visible visible width width x x y y".split(" ")
            },
            text3d: {
                source: "Text3DOverlay.cpp",
                "class": "Text3DOverlay",
                base: "Billboard3DOverlay",
                type: "text3d",
                ownProperties: "backgroundAlpha backgroundColor bottomMargin leftMargin lineHeight rightMargin text textAlpha topMargin".split(" "),
                aliases: {},
                _raw: "backgroundAlpha\nbackgroundColor\nbottomMargin\nleftMargin\nlineHeight\nrightMargin\ntext\ntextAlpha\ntopMargin",
                properties: "alpha alphaPulse anchor backgroundAlpha backgroundColor bottomMargin color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isFacingAvatar isSolid isWire leftMargin lineHeight lineWidth localPosition localRotation name offsetPosition offsetRotation offsetScale parentID parentJointIndex position pulseMax pulseMin pulsePeriod rightMargin rotation text textAlpha topMargin type visible".split(" ")
            },
            web3d: {
                source: "Web3DOverlay.cpp",
                "class": "Web3DOverlay",
                base: "Billboard3DOverlay",
                type: "web3d",
                ownProperties: "dpi inputMode maxFPS resolution scriptURL showKeyboardFocusHighlight url".split(" "),
                aliases: {},
                _raw: "dpi\ninputMode\nmaxFPS\nresolution\nscriptURL\nshowKeyboardFocusHighlight\nurl",
                properties: "alpha alphaPulse anchor color colorPulse dimensions dpi drawInFront grabbable ignoreRayIntersection inputMode isDashedLine isFacingAvatar isSolid isWire lineWidth localPosition localRotation maxFPS name offsetPosition offsetRotation offsetScale parentID parentJointIndex position pulseMax pulseMin pulsePeriod resolution rotation scriptURL showKeyboardFocusHighlight type url visible".split(" ")
            }
        },
        properties: "alpha alphaPulse anchor anchorPosition anchorPositionBinding anchorRotation anchorRotationBinding anchorScale backgroundAlpha backgroundColor borderAlpha borderColor borderSize borderWidth bottomMargin bounds children color colorPulse dimensions dpi drawInFront emissive end endAt followCamera font grabbable hasTickMarks height ignoreRayIntersection imageURL innerRadius inputMode isDashedLine isFacingAvatar isSolid isWire jointNames jointOrientations jointPositions jointRotations jointTranslations leftMargin length lineHeight lineWidth localEnd localPosition localRotation localStart majorGridEvery majorTickMarksAngle majorTickMarksColor majorTickMarksLength margin maxFPS minorGridEvery minorTickMarksAngle minorTickMarksColor minorTickMarksLength name offsetPosition offsetRotation offsetScale outerRadius parentID parentJointIndex position pulseMax pulseMin pulsePeriod radius resolution rightMargin rotation scale scriptURL shape showKeyboardFocusHighlight start startAt subImage text textAlpha textColor textures topMargin type url visible width x y".split(" "),
        classes: {
            Base3DOverlay: {
                source: "Base3DOverlay.cpp",
                "class": "Base3DOverlay",
                base: "Overlay | SpatiallyNestable",
                ownProperties: "drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position rotation".split(" "),
                aliases: {
                    isSolid: ["isFilled", "solid", "filed"],
                    position: ["start", "p1", "point"]
                },
                _raw: "drawInFront\ngrabbable\nignoreRayIntersection\nisDashedLine|dashed\nisSolid|isFilled|solid|filed\nisWire|wire\nlineWidth\nlocalPosition\nlocalRotation|localOrientation\nname\nparentID\nparentJointIndex\nposition|start|p1|point\nrotation|orientation",
                properties: "alpha alphaPulse anchor color colorPulse drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            Billboard3DOverlay: {
                source: "Billboard3DOverlay.cpp",
                "class": "Billboard3DOverlay",
                base: "Planar3DOverlay | PanelAttachable | Billboardable",
                ownProperties: [],
                aliases: {},
                _raw: "",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isFacingAvatar isSolid isWire lineWidth localPosition localRotation name offsetPosition offsetRotation offsetScale parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            Billboardable: {
                source: "Billboardable.cpp",
                "class": "Billboardable",
                base: "",
                ownProperties: ["isFacingAvatar"],
                aliases: {},
                _raw: "isFacingAvatar",
                properties: ["isFacingAvatar"]
            },
            ContextOverlayInterface: {
                source: "ContextOverlayInterface.cpp",
                "class": "ContextOverlayInterface",
                base: "QObject | Dependency",
                ownProperties: [],
                aliases: {},
                _raw: "",
                properties: []
            },
            Overlay: {
                source: "Overlay.cpp | Overlay.qml",
                "class": "Overlay",
                base: "QUuid | QObject",
                ownProperties: "alpha alphaPulse anchor color colorPulse pulseMax pulseMin pulsePeriod type visible".split(" "),
                aliases: {},
                _raw: "alpha\nalphaPulse\nanchor\ncolor\ncolorPulse\npulseMax\npulseMin\npulsePeriod\ntype\nvisible",
                properties: "alpha alphaPulse anchor color colorPulse pulseMax pulseMin pulsePeriod type visible".split(" ")
            },
            Overlay2D: {
                source: "Overlay2D.cpp",
                "class": "Overlay2D",
                base: "Overlay",
                ownProperties: ["bounds", "height", "width", "x", "y"],
                aliases: {},
                _raw: "bounds\nheight\nwidth\nx\ny",
                properties: "alpha alphaPulse anchor bounds color colorPulse height pulseMax pulseMin pulsePeriod type visible width x y".split(" ")
            },
            OverlayPanel: {
                source: "OverlayPanel.cpp",
                "class": "OverlayPanel",
                base: "QObject | PanelAttachable | Billboardable",
                ownProperties: "anchorPosition anchorPositionBinding anchorRotation anchorRotationBinding anchorScale children visible".split(" "),
                aliases: {},
                _raw: "anchorPosition\nanchorPositionBinding\nanchorRotation\nanchorRotationBinding\nanchorScale\nchildren\nvisible",
                properties: "anchorPosition anchorPositionBinding anchorRotation anchorRotationBinding anchorScale children isFacingAvatar offsetPosition offsetRotation offsetScale visible".split(" ")
            },
            Overlays: {
                source: "Overlays.cpp",
                "class": "Overlays",
                base: "QObject",
                ownProperties: [],
                aliases: {},
                _raw: "",
                properties: []
            },
            PanelAttachable: {
                source: "PanelAttachable.cpp",
                "class": "PanelAttachable",
                base: "",
                ownProperties: ["offsetPosition", "offsetRotation", "offsetScale"],
                aliases: {},
                _raw: "offsetPosition\noffsetRotation\noffsetScale",
                properties: ["offsetPosition", "offsetRotation", "offsetScale"]
            },
            Planar3DOverlay: {
                source: "Planar3DOverlay.cpp",
                "class": "Planar3DOverlay",
                base: "Base3DOverlay",
                ownProperties: ["dimensions"],
                aliases: {
                    dimensions: ["scale", "size"]
                },
                _raw: "dimensions|scale|size",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            },
            QmlOverlay: {
                source: "QmlOverlay.cpp",
                "class": "QmlOverlay",
                base: "Overlay2D",
                ownProperties: [],
                aliases: {},
                _raw: "",
                properties: "alpha alphaPulse anchor bounds color colorPulse height pulseMax pulseMin pulsePeriod type visible width x y".split(" ")
            },
            Volume3DOverlay: {
                source: "Volume3DOverlay.cpp",
                "class": "Volume3DOverlay",
                base: "Base3DOverlay",
                ownProperties: ["dimensions"],
                aliases: {
                    dimensions: ["scale", "size"]
                },
                _raw: "dimensions|scale|size",
                properties: "alpha alphaPulse anchor color colorPulse dimensions drawInFront grabbable ignoreRayIntersection isDashedLine isSolid isWire lineWidth localPosition localRotation name parentID parentJointIndex position pulseMax pulseMin pulsePeriod rotation type visible".split(" ")
            }
        },
        _cppproperties: "alpha\nalphaPulse\nanchor\nanchorPosition\nanchorPositionBinding\nanchorRotation\nanchorRotationBinding\nanchorScale\nbackgroundAlpha\nbackgroundColor\nborderSize\nbottomMargin\nbounds\nchildren\ncolor\ncolorPulse\ndashed\ndimensions\ndpi\ndrawInFront\nemissive\nend\nendAt\nendPoint\nfiled\nfollowCamera\ngrabbable\nhasTickMarks\nheight\nignoreRayIntersection\ninnerRadius\ninputMode\nisDashedLine\nisFacingAvatar\nisFilled\nisSolid\nisWire\njointNames\njointOrientations\njointPositions\njointRotations\njointTranslations\nleftMargin\nlength\nlineHeight\nlineWidth\nlocalEnd\nlocalOrientation\nlocalPosition\nlocalRotation\nlocalStart\nmajorGridEvery\nmajorTickMarksAngle\nmajorTickMarksColor\nmajorTickMarksLength\nmaxFPS\nminorGridEvery\nminorTickMarksAngle\nminorTickMarksColor\nminorTickMarksLength\nname\noffsetPosition\noffsetRotation\noffsetScale\norientation\nouterRadius\np1\np2\nparentID\nparentJointIndex\npoint\nposition\npulseMax\npulseMin\npulsePeriod\nradius\nresolution\nrightMargin\nrotation\nscale\nscriptURL\nshape\nshowKeyboardFocusHighlight\nsize\nsolid\nstart\nstartAt\nstartPoint\nsubImage\ntext\ntextAlpha\ntextures\ntopMargin\ntype\nurl\nvisible\nwidth\nwire\nx\ny",
        dummy: !0
    };
    j.exports.mixin = c;
    c(j.exports)
}]);;

function __metadata__() {
    return {
        id: "app-mouth-off",
        build: "2018-03-08T22:57:55.752Z",
        branch: "master",
        commit: "(no commits)",
        appVersion: "test"
    };
};