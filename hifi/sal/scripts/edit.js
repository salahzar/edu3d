/*!
edit.js
 
Created by David Rowe on 15 Nov 2015.
Copyright 2015 David Rowe.
 
Information: http://ctrlaltstudio.com/hifi/edit
 
License: http://ctrlaltstudio.com/hifi/edit/license
*/
function log(n, t) {
    print("[CtrlAltStudio edit.js] " + n + (t !== undefined ? " " + t : ""))
}
var w = "0.4.4-82",
    m0 = "m0",
    m1 = "m1",
    m2 = "m2",
    m3 = "m3",
    m4 = "m4",
    m5 = "m5",
    m6 = "m6",
    m7 = "m7",
    m8 = "m8",
    m9 = "m9",
    ma = "ma",
    mb = "mb",
    mc = "mc",
    md = "md",
    me = "me",
    mf = "mf",
    mg = "mg",
    mz = "mz",
    x = "ERROR: Invalid case",
    y = "ERROR: Missing case",
    z = [Vec3.UNIT_X, Vec3.UNIT_Y, Vec3.UNIT_Z],
    o1 = function() {
        function n(t) {
            var f = {},
                u, i, r, e;
            for (u = Object.keys(t), r = 0, e = u.length; r < e; r += 1) i = u[r], f[i] = typeof t[i] == "object" ? n(t[i]) : t[i];
            return f
        }

        function i(n, t) {
            for (var u = {}, i, r = 0, f = t.length; r < f; r += 1) i = t[r], n.hasOwnProperty(i) && (u[i] = n[i]);
            return u
        }

        function t(n, i) {
            var u, e, r, f, o;
            if (u = Object.keys(n), e = Object.keys(i), u.length !== e.length) return !1;
            for (f = 0, o = u.length; f < o; f += 1) {
                if (r = u[f], e.indexOf(r) === -1) return !1;
                if (typeof n[r] == "object") {
                    if (typeof i[r] != "object" || !t(n[r], i[r])) return !1
                } else if (typeof i[r] == "number") {
                    if (Math.abs(n[r] - i[r]) > 1e-5) return !1
                } else if (n[r] !== i[r]) return !1
            }
            return !0
        }

        function r(n) {
            var t = 180 / Math.PI;
            n.hasOwnProperty("rotation") && (n.rotation = Quat.safeEulerAngles(n.rotation));
            n.hasOwnProperty("angularVelocity") && (n.angularVelocity = Vec3.multiply(n.angularVelocity, t));
            n.hasOwnProperty("keyLight") && (n.keyLight.direction = Vec3.multiply(Vec3.toPolar(n.keyLight.direction), t))
        }

        function u(n) {
            var t = Math.PI / 180;
            n.hasOwnProperty("rotation") && (n.rotation = Quat.fromVec3Degrees(n.rotation));
            n.hasOwnProperty("angularVelocity") && (n.angularVelocity = Vec3.multiply(n.angularVelocity, t));
            n.hasOwnProperty("keyLight") && n.keyLight.hasOwnProperty("direction") && (n.keyLight.direction = Vec3.fromPolar(n.keyLight.direction.x * t, n.keyLight.direction.y * t))
        }
        return {
            e1: n,
            e2: i,
            e3: t,
            e4: r,
            e5: u
        }
    }(),
    o2 = function() {
        function g(t) {
            n.emitScriptEvent(JSON.stringify({
                type: m1,
                radius: t
            }))
        }

        function nt(t, i, r, u) {
            n.emitScriptEvent(JSON.stringify({
                type: m2,
                found: t,
                selected: i,
                parents: r,
                descendants: u
            }))
        }

        function tt(t) {
            n.emitScriptEvent(JSON.stringify({
                type: m5,
                ids: t
            }))
        }

        function it(t) {
            n.emitScriptEvent(JSON.stringify({
                type: m9,
                entityType: t
            }))
        }

        function rt() {
            n.emitScriptEvent(JSON.stringify({
                type: ma
            }))
        }

        function ut(t, i) {
            i && n.emitScriptEvent(JSON.stringify({
                type: md,
                level: t,
                text: i
            }));
            t > h && Audio.playSound(c, {
                localOnly: !0,
                volume: d,
                position: Vec3.sum(Camera.position, Quat.getFront(Camera.orientation))
            })
        }

        function ft(t) {
            n.emitScriptEvent(JSON.stringify({
                type: me,
                key: t
            }))
        }

        function et(t) {
            n.emitScriptEvent(JSON.stringify({
                type: mf,
                key: t
            }))
        }

        function a(n) {
            o(n)
        }

        function ot(n) {
            t !== undefined && Script.clearTimeout(t);
            t = Script.setTimeout(function() {
                Settings.setValue(r, n);
                t = undefined
            }, l)
        }

        function st(n) {
            i !== undefined && Script.clearTimeout(i);
            i = Script.setTimeout(function() {
                Settings.setValue(u, n);
                i = undefined
            }, l)
        }

        function ht() {
            s()
        }

        function ct(t) {
            n.setVisible(t);
            t && (n.raise(), e = Date.now());
            f = t
        }

        function lt() {
            return f && Date.now() - e < w
        }

        function at(t, i) {
            var h, f, e;
            o = t;
            s = i;
            h = Script.resolvePath(b);
            f = Settings.getValue(r);
            f === "" && (f = {
                width: y,
                height: p
            });
            e = Settings.getValue(u);
            n = new OverlayWebWindow(v, h, f.width, f.height, !1);
            e !== "" && n.setPosition(e);
            n.setVisible(!1);
            n.webEventReceived.connect(a);
            n.moved.connect(st);
            n.resized.connect(ot);
            n.closed.connect(ht);
            c = SoundCache.getSound(Script.resolvePath(k))
        }

        function vt() {
            n.webEventReceived.disconnect(a)
        }
        var n, v = "Entities Editor",
            y = 400,
            p = 600,
            r = "Edit Dialog Size",
            u = "Edit Dialog Position",
            f = !1,
            e, w = 1e3,
            b = "html/edit.html",
            o, s, h = 0,
            c, k = "assets/edit-error.wav",
            d = .25,
            t, i, l = 500;
        return {
            f1: g,
            z1: nt,
            f2: tt,
            f3: it,
            f4: rt,
            z2: ct,
            f5: lt,
            f6: h,
            f7: 1,
            f8: 2,
            f9: ut,
            fa: ft,
            fb: et,
            za: at,
            zb: vt
        }
    }(),
    o3 = function() {
        function t(t) {
            t > n.length - 1 && n.push(Overlays.addOverlay("cube", {
                alpha: s,
                solid: !1,
                drawInFront: !0,
                ignoreRayIntersection: !0,
                visible: !1
            }))
        }

        function i(t, i, f) {
            var h, s, c;
            h = Vec3.sum(i.dimensions, Vec3.ZERO);
            s = Quat.fromVec3Degrees(i.rotation);
            c = Vec3.multiplyQbyV(s, Vec3.multiplyVbyV(Vec3.subtract(Vec3.HALF, i.registrationPoint), i.dimensions));
            Overlays.editOverlay(n[t], {
                position: Vec3.sum(i.position, c),
                dimensions: h,
                rotation: s,
                color: f === r ? e : o,
                isDashedLine: f === u,
                visible: !0
            })
        }

        function c(f, e, o) {
            for (var c, s = 0, l = f.length; s < l; s += 1) t(s), i(s, f[s], r);
            for (c = f.length, s = 0, l = e.length; s < l; s += 1) t(c), i(c, e[s], u), c += 1;
            for (s = 0, l = o.length; s < l; s += 1) t(c), i(c, o[s], h), c += 1;
            for (s = n.length - 1, l = c; s >= l; s -= 1) Overlays.deleteOverlay(n[s]), n.splice(s, 1)
        }

        function f() {
            for (var t = 0, i = n.length; t < i; t += 1) Overlays.deleteOverlay(n[0]), n.splice(0, 1)
        }

        function l() {}

        function a() {
            f()
        }
        var n = [],
            e = {
                red: 255,
                green: 255,
                blue: 64
            },
            o = {
                red: 64,
                green: 255,
                blue: 255
            },
            s = .75,
            r = 0,
            u = 1,
            h = 2;
        return {
            z1: c,
            z3: f,
            za: l,
            zb: a
        }
    }(),
    o4 = function() {
        function d(n, f) {
            var a, y, o, e;
            if (n !== v || f) {
                for (a = c === et, y = c === ht, o = c === ct, e = 0; e < 3; e += 1) Overlays.editOverlay(l[e], {
                    visible: n && !o
                }), Overlays.editOverlay(i[e], {
                    visible: n && a && (!s || h === i[e])
                }), Overlays.editOverlay(t[e], {
                    visible: n && y && (!s || h === t[e])
                });
                for (e = 0; e < 6; e += 1) Overlays.editOverlay(r[e], {
                    visible: n && o && !ot && (!s || h === r[e])
                });
                for (e = 0; e < 8; e += 1) Overlays.editOverlay(u[e], {
                    visible: n && o && (!s || h === u[e])
                });
                v = n
            }
        }

        function ai(n, f) {
            var a, y, o, e;
            if (f = f === !0, (c !== n || ot !== f) && (c = n, ot = f, v)) {
                for (a = c === et, y = c === ht, o = c === ct, e = 0; e < 3; e += 1) Overlays.editOverlay(l[e], {
                    visible: !o
                }), Overlays.editOverlay(i[e], {
                    visible: a && (!s || h === i[e])
                }), Overlays.editOverlay(t[e], {
                    visible: y && (!s || h === t[e])
                });
                for (e = 0; e < 6; e += 1) Overlays.editOverlay(r[e], {
                    visible: o && !ot && (!s || h === r[e])
                });
                for (e = 0; e < 8; e += 1) Overlays.editOverlay(u[e], {
                    visible: o && (!s || h === u[e])
                })
            }
        }

        function ti() {
            for (var n = 0; n < 3; n += 1) Overlays.editOverlay(l[n], {
                start: Vec3.multiply(-tt, z[n]),
                end: Vec3.multiply(tt, z[n])
            }), p[n] = Vec3.multiply(it, z[n]), Overlays.editOverlay(t[n], {
                rotation: yt[n]
            }), at[n] = z[n];
            k = Quat.fromVec3Degrees(Vec3.ZERO)
        }

        function ii() {
            for (var r = Quat.fromVec3Degrees(k), i, n = 0; n < 3; n += 1) i = Vec3.multiplyQbyV(r, z[n]), Overlays.editOverlay(l[n], {
                start: Vec3.multiply(-tt, i),
                end: Vec3.multiply(tt, i)
            }), p[n] = Vec3.multiply(it, i), Overlays.editOverlay(t[n], {
                rotation: Quat.multiply(r, yt[n])
            }), at[n] = i
        }

        function ri(t) {
            for (var r = Quat.fromVec3Degrees(t), i = 0; i < 3; i += 1) n[i] = Vec3.multiplyQbyV(r, z[i])
        }

        function ui(s, h, c) {
            var g, d, nt, v;
            for (s !== undefined && (b = s), h !== undefined && (lt && !Vec3.equal(h, k) && (k = h, ii()), ri(h)), e = hi * Vec3.dot(Vec3.multiplyQbyV(Camera.orientation, Vec3.UNIT_Z), Vec3.subtract(Camera.position, b)), v = 0; v < 3; v += 1) Overlays.editOverlay(l[v], {
                position: b
            }), Overlays.editOverlay(i[v], {
                position: Vec3.sum(b, Vec3.multiply(e, p[v])),
                dimensions: e * (i[v] === f ? rt : y)
            }), Overlays.editOverlay(t[v], {
                position: b,
                dimensions: e * (t[v] === f ? ut : w),
                innerRadius: t[v] === f ? vt : st
            });
            if (c !== undefined) {
                for (g = Vec3.sum(s, Vec3.multiplyQbyV(Quat.fromVec3Degrees(h), Vec3.multiplyVbyV(Vec3.subtract(li, c.registrationPoint), c.dimensions))), d = Vec3.multiply(.5, c.dimensions), o[0] = Vec3.sum(Vec3.multiply(d.x, n[0]), Vec3.sum(Vec3.multiply(d.y, n[1]), Vec3.multiply(d.z, n[2]))), o[1] = Vec3.sum(Vec3.multiply(d.x, n[0]), Vec3.sum(Vec3.multiply(d.y, n[1]), Vec3.multiply(-d.z, n[2]))), o[2] = Vec3.sum(Vec3.multiply(d.x, n[0]), Vec3.sum(Vec3.multiply(-d.y, n[1]), Vec3.multiply(d.z, n[2]))), o[3] = Vec3.sum(Vec3.multiply(d.x, n[0]), Vec3.sum(Vec3.multiply(-d.y, n[1]), Vec3.multiply(-d.z, n[2]))), o[4] = Vec3.sum(Vec3.multiply(-d.x, n[0]), Vec3.sum(Vec3.multiply(d.y, n[1]), Vec3.multiply(d.z, n[2]))), o[5] = Vec3.sum(Vec3.multiply(-d.x, n[0]), Vec3.sum(Vec3.multiply(d.y, n[1]), Vec3.multiply(-d.z, n[2]))), o[6] = Vec3.sum(Vec3.multiply(-d.x, n[0]), Vec3.sum(Vec3.multiply(-d.y, n[1]), Vec3.multiply(d.z, n[2]))), o[7] = Vec3.sum(Vec3.multiply(-d.x, n[0]), Vec3.sum(Vec3.multiply(-d.y, n[1]), Vec3.multiply(-d.z, n[2]))), nt = Quat.fromVec3Degrees(h), v = 0; v < 6; v += 1) Overlays.editOverlay(r[v], {
                    position: Vec3.sum(g, Vec3.multiply(pt[v] * d[wt[v]], n[bt[v]])),
                    rotation: nt,
                    dimensions: e * (r[v] === f ? ft : a)
                }), kt[v] = Vec3.multiply(pt[v] * d[wt[v]], n[bt[v]]);
                for (v = 0; v < 8; v += 1) Overlays.editOverlay(u[v], {
                    position: Vec3.sum(g, o[v]),
                    rotation: nt,
                    dimensions: e * (u[v] === f ? ft : a)
                })
            }
        }

        function vi(n, t, i) {
            if (n === null) {
                v && d(!1);
                return
            }
            ui(n, t, i);
            v || d(!0)
        }

        function fi(n) {
            var o;
            for (f = n, o = 0; o < 3; o += 1) Overlays.editOverlay(i[o], {
                dimensions: e * (i[o] === f ? rt : y)
            }), Overlays.editOverlay(t[o], {
                dimensions: e * (t[o] === f ? ut : w),
                innerRadius: t[o] === f ? vt : st
            });
            for (o = 0; o < 6; o += 1) Overlays.editOverlay(r[o], {
                dimensions: e * (r[o] === f ? ft : a)
            });
            for (o = 0; o < 8; o += 1) Overlays.editOverlay(u[o], {
                dimensions: e * (u[o] === f ? ft : a)
            })
        }

        function yi() {
            fi(null)
        }

        function pi() {
            d(!1)
        }

        function wi(n) {
            return i.indexOf(n) !== -1
        }

        function bi(n) {
            return i.indexOf(n)
        }

        function ki(n) {
            return Vec3.multiply(e, p[n])
        }

        function di(n) {
            return p[n]
        }

        function gi(n) {
            return t.indexOf(n) !== -1
        }

        function nr(n) {
            return t.indexOf(n)
        }

        function tr(n) {
            return r.indexOf(n) !== -1
        }

        function ir(n) {
            return r.indexOf(n)
        }

        function rr(n) {
            return u.indexOf(n)
        }

        function ur(n) {
            return kt[n]
        }

        function fr(n) {
            return o[n]
        }

        function er(n) {
            s = !0;
            h = n;
            d(!0, !0)
        }

        function or() {
            s = !1;
            h = null;
            d(!0, !0)
        }

        function ei() {
            var n, t, i;
            v && ((n = Date.now(), n - dt < ci) || (dt = n, t = Camera.position, i = Camera.orientation, Vec3.equal(t, gt) && Quat.equal(i, ni)) || (gt = t, ni = i, ui()))
        }

        function sr(n, t) {
            lt = n;
            lt ? (k = t, ii()) : ti();
            ri(t)
        }

        function hr() {
            for (var n = 0; n < 3; n += 1) l[n] = Overlays.addOverlay("line3d", {
                color: g[n],
                alpha: 1,
                solid: !1,
                drawInFront: !0,
                ignoreRayIntersection: !0,
                visible: !1
            }), i[n] = Overlays.addOverlay("sphere", {
                dimensions: y,
                color: g[n],
                alpha: nt,
                solid: !0,
                drawInFront: !0,
                ignoreRayIntersection: !1,
                visible: !1
            }), t[n] = Overlays.addOverlay("circle3d", {
                dimensions: w,
                innerRadius: st,
                outerRadius: si,
                isSolid: !0,
                color: g[n],
                alpha: nt,
                drawInFront: !0,
                isFacingAvatar: !1,
                ignoreRayIntersection: !1,
                visible: !1
            });
            for (n = 0; n < 6; n += 1) r[n] = Overlays.addOverlay("cube", {
                dimensions: a,
                color: g[Math.floor(n / 2)],
                alpha: nt,
                solid: !0,
                drawInFront: !0,
                ignoreRayIntersection: !1,
                visible: !1
            });
            for (n = 0; n < 8; n += 1) u[n] = Overlays.addOverlay("cube", {
                dimensions: a,
                color: oi,
                alpha: nt,
                solid: !0,
                drawInFront: !0,
                ignoreRayIntersection: !1,
                visible: !1
            });
            ti();
            Script.update.connect(ei)
        }

        function cr() {
            var n;
            for (Script.update.disconnect(ei), n = 0; n < 3; n += 1) Overlays.deleteOverlay(l[n]), Overlays.deleteOverlay(i[n]), Overlays.deleteOverlay(t[n]);
            for (n = 0; n < 6; n += 1) Overlays.deleteOverlay(r[n]);
            for (n = 0; n < 8; n += 1) Overlays.deleteOverlay(u[n])
        }
        var at = [],
            g = [{
                red: 255,
                green: 0,
                blue: 0
            }, {
                red: 0,
                green: 255,
                blue: 0
            }, {
                red: 16,
                green: 16,
                blue: 255
            }],
            oi = {
                red: 255,
                green: 255,
                blue: 255
            },
            nt = .75,
            l = [],
            tt = 20,
            i = [],
            it = .95,
            y = .11,
            rt = .15,
            p = [],
            t = [],
            w = it + y / 2,
            ut = it + rt / 2,
            si = 1,
            st = (w - y) / w,
            vt = (ut - rt) / ut,
            yt = [Quat.fromPitchYawRollDegrees(0, 90, 0), Quat.fromPitchYawRollDegrees(90, 0, 0), Quat.fromPitchYawRollDegrees(0, 0, 0)],
            n = [],
            r = [],
            pt = [1, -1, 1, -1, 1, -1],
            wt = ["x", "x", "y", "y", "z", "z"],
            bt = [0, 0, 1, 1, 2, 2],
            u = [],
            a = .09,
            ft = .11,
            o = [],
            kt = [],
            v = !1,
            et = 0,
            ht = 1,
            ct = 2,
            c = et,
            s = !1,
            lt = !1,
            ot = !1,
            b, k, f = null,
            h = null,
            e = 1,
            hi = .12,
            dt = Date.now(),
            gt, ni, ci = 100,
            li = Vec3.HALF;
        return {
            h1: et,
            h2: ht,
            h3: ct,
            h4: ai,
            z1: vi,
            z3: pi,
            h5: fi,
            h6: yi,
            h7: wi,
            h8: bi,
            h9: ki,
            ha: di,
            hb: gi,
            hc: nr,
            hd: tr,
            he: ir,
            hf: rr,
            hg: ur,
            hh: fr,
            hi: er,
            hj: or,
            hk: sr,
            za: hr,
            zb: cr
        }
    }(),
    o5 = function() {
        function v(i) {
            var u;
            i === undefined && (i = MyAvatar.getJointPosition(h), Vec3.equal(i, Vec3.ZERO) && (i = MyAvatar.getJointPosition(c), Vec3.equal(i, Vec3.ZERO) && (i = Vec3.sum(MyAvatar.position, Vec3.multiply(l, Vec3.UNIT_NEG_Z)))), u = Entities.findRayIntersection({
                origin: MyAvatar.position,
                direction: Vec3.UNIT_NEG_Y
            }, !0), u.intersects && Math.abs(i.y - u.intersection.y) <= a && (i = u.intersection));
            t = i;
            Overlays.editOverlay(n, {
                position: {
                    x: 0,
                    y: i.y + r,
                    z: 0
                }
            })
        }

        function y() {
            return t.y
        }

        function p(n) {
            var r, u, f, e, o;
            return (r = Vec3.UNIT_Y, u = Vec3.dot(n.direction, r), Math.abs(u) > .01 && (f = Vec3.dot(Vec3.subtract(t, n.origin), r) / u, e = Vec3.sum(n.origin, Vec3.multiply(f, n.direction)), o = Vec3.subtract(e, t), f >= 0 && Math.abs(o.x) <= i.x / 2 && Math.abs(o.y) <= i.y / 2)) ? e : undefined
        }

        function w(t) {
            Overlays.editOverlay(n, {
                visible: t
            })
        }

        function b() {
            n = Overlays.addOverlay("grid", {
                dimensions: i,
                rotation: u,
                majorGridEvery: f,
                minorGridEvery: e,
                color: o,
                alpha: s,
                drawInFront: !1,
                visible: !1
            })
        }

        function k() {
            Overlays.deleteOverlay(n)
        }
        var n, t, r = .01,
            i = {
                x: 200,
                y: 200,
                z: 0
            },
            u = Quat.fromPitchYawRollDegrees(90, 0, 0),
            f = 5,
            e = 1,
            o = {
                red: 0,
                green: 255,
                blue: 0
            },
            s = .75,
            h = "LeftToeBase",
            c = "LeftFoot",
            l = 1,
            a = 1;
        return {
            z6: v,
            z2: w,
            i1: y,
            i2: p,
            za: b,
            zb: k
        }
    }(),
    o6 = function() {
        function r(n) {
            i = n
        }

        function f() {
            return i
        }

        function e() {
            var e, r, o, u, f;
            for (e = Entities.findEntities(MyAvatar.position, i), n = [], t = [], r = 0, o = e.length; r < o; r += 1) u = e[r], f = Entities.getEntityProperties(u, ["type", "name", "modelURL"]), n.push({
                id: u,
                type: f.type,
                name: f.name,
                modelURL: f.modelURL
            }), t.push(u)
        }

        function o(n) {
            return t.indexOf(n) !== -1
        }

        function s() {
            return n
        }

        function u() {
            n = [];
            t = []
        }

        function h(n) {
            r(n)
        }

        function c() {
            u()
        }
        var i, n = [],
            t = [];
        return {
            j1: r,
            j2: f,
            z1: e,
            z4: o,
            z5: s,
            z3: u,
            za: h,
            zb: c
        }
    }(),
    o7 = function() {
        function i(n) {
            return Entities.getEntityProperties(n, "id").id !== undefined
        }

        function r(n) {
            !n.hasOwnProperty("parentID") || Uuid.isNull(n.parentID) || i(n.parentID) || delete n.parentID
        }

        function h(i, r, u, f, e) {
            for (var o = n.length - 1; o > t; o -= 1) n.pop();
            t + 1 >= s && (n.shift(), t -= 1);
            typeof r == "string" ? n.push({
                kd: i,
                ke: [r],
                kf: u !== null ? [o1.e1(u)] : null,
                kg: f !== null ? [o1.e1(f)] : null,
                kh: e === !0
            }) : n.push({
                kd: i,
                ke: r,
                kf: u !== null ? o1.e1(u) : null,
                kg: f !== null ? o1.e1(f) : null,
                kh: e === !0
            });
            t += 1
        }

        function c() {
            var v = !1,
                k, o, h, nt, d, l, g, b, s, a, p, c, tt, w, it;
            if (t === -1) return v;
            switch (n[t].kd) {
                case u:
                    for (l = n[t].ke, b = n[t].kh, v = !0, s = 0, p = l.length; s < p; s += 1) a = b ? p - s - 1 : s, o = l[a], i(o) && (Entities.deleteEntity(o), v = v && !i(o));
                    break;
                case f:
                    for (l = n[t].ke, g = n[t].kf, b = n[t].kh, v = !0, s = 0, p = l.length; s < p; s += 1) a = b ? p - s - 1 : s, o = l[a], i(o) && (h = n[t].kf[a], r(h), d = Object.keys(h), d.length > 0 && (h = o1.e1(h), o1.e5(h), Entities.editEntity(o, h), nt = o1.e2(Entities.getEntityProperties(o, d), d), v = v && o1.e3(h, nt)));
                    break;
                case e:
                    for (l = n[t].ke, g = n[t].kf, b = n[t].kh, v = !0, s = 0, p = l.length; s < p; s += 1)
                        if (a = b ? p - s - 1 : s, !i(l[a]))
                            if (h = o1.e1(g[a]), o1.e5(h), r(h), k = l[a], o = Entities.addEntity(h), i(o))
                                for (l[a] = o, g[a].id = o, c = 0, tt = n.length; c < tt; c += 1)
                                    for (w = 0, it = n[c].ke.length; w < it; w += 1) n[c].ke[w] === k && (n[c].ke[w] = o), n[c].kf && n[c].kf[w].parentID === k && (n[c].kf[w].parentID = o), n[c].kg && n[c].kg[w].parentID === k && (n[c].kg[w].parentID = o);
                            else v = !1;
                    break;
                default:
                    log(y, 13)
            }
            return t -= 1, v
        }

        function l() {
            var l = !1,
                a, b, w, s, h, d, k, o, p, c, g, v, nt;
            if (t >= n.length - 1) return l;
            t += 1;
            switch (n[t].kd) {
                case u:
                    for (a = n[t].ke, b = n[t].kg, l = !0, o = 0, p = a.length; o < p; o += 1)
                        if (w = a[o], i(w)) l = !1;
                        else if (h = o1.e1(b[o]), o1.e5(h), r(h), s = Entities.addEntity(h), i(s))
                        for (a[o] = s, b[o].id = s, c = t, g = n.length; c < g; c += 1)
                            for (v = 0, nt = n[c].ke.length; v < nt; v += 1) n[c].ke[v] === w && (n[c].ke[v] = s), n[c].kf && n[c].kf[v].parentID === w && (n[c].kf[v].parentID = s), n[c].kg && n[c].kg[v].parentID === w && (n[c].kg[v].parentID = s);
                    else l = !1;
                    break;
                case f:
                    for (a = n[t].ke, b = n[t].kf, l = !0, o = 0, p = a.length; o < p; o += 1) s = a[o], i(s) && (h = n[t].kg[o], r(h), k = Object.keys(h), k.length > 0 && (h = o1.e1(h), o1.e5(h), Entities.editEntity(s, h), d = o1.e2(Entities.getEntityProperties(s, k), k), l = l && o1.e3(h, d)));
                    break;
                case e:
                    for (a = n[t].ke, l = !0, o = 0, p = a.length; o < p; o += 1) s = a[o], i(s) && (Entities.deleteEntity(s), l = l && !i(s));
                    break;
                default:
                    log(y, 14)
            }
            return l
        }

        function o() {
            n = [];
            t = -1
        }

        function a() {
            return t > -1 ? n[t].kd : null
        }

        function v() {
            return t + 1 < n.length ? n[t + 1].kd : null
        }

        function p() {
            return t > -1 ? n[t].ke : []
        }

        function w() {
            return t + 1 < n.length ? n[t + 1].ke : []
        }

        function b() {
            return t > -1
        }

        function k() {
            return t < n.length - 1
        }

        function d() {
            o()
        }

        function g() {
            o()
        }
        var n, t, u = 0,
            f = 1,
            e = 2,
            s = 1e3;
        return {
            k1: u,
            k2: f,
            k3: e,
            k4: h,
            k5: c,
            k6: l,
            k7: b,
            k8: k,
            k9: a,
            ka: v,
            kb: p,
            kc: w,
            za: d,
            zb: g
        }
    }(),
    o8 = function() {
        function y() {
            return t.indexOf(c[0])
        }

        function rt(n, t) {
            var r, i, u;
            for (t.push(n), r = Entities.getChildrenIDs(n), i = 0, u = r.length; i < u; i += 1) rt(r[i], t)
        }

        function ut(n, t, i, r) {
            var f, e, u, o;
            for (t.push(n), f = Entities.getEntityProperties(n), r && o1.e4(f), i.push(f), e = Entities.getChildrenIDs(n), u = 0, o = e.length; u < o; u += 1) ut(e[u], t, i, r)
        }

        function dt() {
            for (var i = [], n = 0, r = t.length; n < r; n += 1) rt(t[n], i);
            return i
        }

        function u(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (i === "rotation" ? n[i] = Quat.safeEulerAngles(t[i]) : i === "angularVelocity" ? n[i] = Vec3.multiply(t[i], ct) : i === "keyLight" ? (n[i] = t[i], n[i].direction = Vec3.multiply(Vec3.toPolar(t[i].direction), ct)) : n[i] = t[i])
        }

        function lt(t) {
            var r, i;
            if (ot = t, ot && n.length > 0)
                for (r = Quat.fromVec3Degrees(n[y()].rotation), i = 0; i < 3; i += 1) et[i] = Vec3.multiplyQbyV(r, z[i]);
            else
                for (i = 0; i < 3; i += 1) et[i] = z[i]
        }

        function a() {
            for (var u = [], r = [], e, f = !0, o, i = 0; i < n.length; i += 1) Uuid.isNull(n[i].parentID) && (u.push(n[i]), r.push(t[i]), n.splice(i, 1), t.splice(i, 1), i -= 1);
            while (f)
                for (f = !1, i = 0; i < n.length; i += 1) e = n[i].parentID, r.indexOf(e) !== -1 && (u.push(n[i]), r.push(t[i]), n.splice(i, 1), t.splice(i, 1), i -= 1, f = !0);
            for (i = 0, o = n.length; i < o; i += 1) u.push(n[i]), r.push(t[i]);
            n = u;
            t = r
        }

        function e() {
            var o, e, a, v, p, l, t, u = [],
                h, c, f, s;
            if (c = n.length, c === 0) i = null, r = undefined;
            else if (c === 1) i = n[0].position, r = {
                registrationPoint: n[0].registrationPoint,
                dimensions: n[0].dimensions
            };
            else {
                for (i = Vec3.ZERO, f = 0; f < c; f += 1) i = Vec3.sum(i, n[f].position);
                for (i = Vec3.multiply(i, 1 / c), o = Vec3.copy(i), e = Vec3.copy(i), p = Quat.inverse(Quat.fromVec3Degrees(n[y()].rotation)), f = 0; f < c; f += 1) {
                    if (n.length === 0) break;
                    for (t = n[f].registrationPoint, u[0] = {
                            x: -t.x,
                            y: -t.y,
                            z: -t.z
                        }, u[1] = {
                            x: -t.x,
                            y: -t.y,
                            z: 1 - t.z
                        }, u[2] = {
                            x: -t.x,
                            y: 1 - t.y,
                            z: -t.z
                        }, u[3] = {
                            x: -t.x,
                            y: 1 - t.y,
                            z: 1 - t.z
                        }, u[4] = {
                            x: 1 - t.x,
                            y: -t.y,
                            z: -t.z
                        }, u[5] = {
                            x: 1 - t.x,
                            y: -t.y,
                            z: 1 - t.z
                        }, u[6] = {
                            x: 1 - t.x,
                            y: 1 - t.y,
                            z: -t.z
                        }, u[7] = {
                            x: 1 - t.x,
                            y: 1 - t.y,
                            z: 1 - t.z
                        }, a = n[f].position, v = Quat.fromVec3Degrees(n[f].rotation), l = n[f].dimensions, s = 0; s < 8; s += 1) u[s] = Vec3.sum(a, Vec3.multiplyQbyV(v, Vec3.multiplyVbyV(u[s], l))), u[s] = Vec3.sum(i, Vec3.multiplyQbyV(p, Vec3.subtract(u[s], i))), h = u[s], o.x = Math.max(o.x, h.x), o.y = Math.max(o.y, h.y), o.z = Math.max(o.z, h.z), e.x = Math.min(e.x, h.x), e.y = Math.min(e.y, h.y), e.z = Math.min(e.z, h.z)
                }
                l = Vec3.subtract(o, e);
                t = Vec3.subtract(i, e);
                r = {
                    registrationPoint: Vec3.divideVbyV(t, l),
                    dimensions: l
                }
            }
        }

        function h() {
            var s, i, r, f, c = ["position", "rotation", "dimensions", "registrationPoint"],
                e, h;
            for (s = dt(), g = [], v = [], e = 0, h = n.length; e < h; e += 1) i = n[e].parentID, Uuid.isNull(i) || s.indexOf(i) !== -1 || (g.push(i), r = Entities.getEntityProperties(i, [c]), v.push({
                id: i
            }), f = v[v.length - 1], f.position = r.position, f.rotation = Quat.safeEulerAngles(r.rotation), f.dimensions = r.dimensions, f.registrationPoint = r.registrationPoint);
            for (l = [], o = [], e = 0, h = s.length; e < h; e += 1) i = s[e], t.indexOf(i) === -1 && (l.push(i), r = Entities.getEntityProperties(i, [c]), o.push({
                id: i
            }), u(o[l.length - 1], o1.e2(r, c)), f = o[o.length - 1], f.position = r.position, f.rotation = Quat.safeEulerAngles(r.rotation), f.dimensions = r.dimensions, f.registrationPoint = r.registrationPoint)
        }

        function ft() {
            for (var u = ["position", "rotation"], t, i, n = 0, r = l.length; n < r; n += 1) t = Entities.getEntityProperties(l[n], [u]), i = o[n], i.position = t.position, i.rotation = Quat.safeEulerAngles(t.rotation)
        }

        function at(i) {
            var r;
            c.push(i);
            n.push({
                id: i
            });
            t.push(i);
            r = Entities.getEntityProperties(i);
            u(n[n.length - 1], r)
        }

        function vt(i) {
            var r;
            r = c.indexOf(i);
            r !== -1 && c.splice(r, 1);
            r = t.indexOf(i);
            r !== -1 && (n.splice(r, 1), t.splice(r, 1))
        }

        function gt(n) {
            for (var t = 0, i = n.length; t < i; t += 1) at(n[t]);
            a();
            e();
            h()
        }

        function yt(n) {
            for (var t = 0, i = n.length; t < i; t += 1) vt(n[t]);
            a();
            e();
            h()
        }

        function p(i) {
            var r, u;
            for (c = [], n = [], t = [], r = 0, u = i.length; r < u; r += 1) at(i[r]);
            a();
            e();
            h()
        }

        function ni(n) {
            return t.indexOf(n) !== -1
        }

        function ti(t) {
            var e, u;
            d = t;
            f = [];
            e = n.length;
            switch (d) {
                case tt:
                    for (u = 0; u < e; u += 1) f.push({
                        position: Vec3.copy(n[u].position)
                    });
                    break;
                case k:
                    for (u = 0; u < e; u += 1) f.push({
                        position: Vec3.copy(n[u].position),
                        rotation: Vec3.copy(n[u].rotation)
                    });
                    break;
                case it:
                    for (u = 0; u < e; u += 1) f.push({
                        dimensions: Vec3.copy(n[u].dimensions),
                        position: Vec3.copy(n[u].position)
                    })
            }
            st = Vec3.copy(i);
            ht = {
                registrationPoint: Vec3.copy(r.registrationPoint),
                dimensions: Vec3.copy(r.dimensions)
            }
        }

        function ii() {
            var i, h, c = [],
                o = [],
                l, r, s;
            switch (d) {
                case tt:
                    i = ["position"];
                    break;
                case k:
                    i = ["position", "rotation"];
                    break;
                case it:
                    i = ["dimensions", "position"]
            }
            for (r = 0, l = n.length; r < l; r += 1) s = t[r], h = o1.e2(Entities.getEntityProperties(s, i), i), u(n[r], h), c.push(s), o.push(o1.e2(n[r], i));
            o1.e3(f, o) || o7.k4(o7.k2, c, f, o);
            d !== k && e()
        }

        function ri() {
            return i
        }

        function ui(r) {
            var s, e, f, o;
            if (e = n.length, e > 0) {
                for (s = Vec3.subtract(r, i), f = 0; f < e; f += 1) o = {
                    position: Vec3.sum(n[f].position, s)
                }, Entities.editEntity(t[f], o), u(n[f], o);
                i = r;
                ft()
            }
        }

        function fi(e, o) {
            var v, a, h, c, s, l;
            if (c = n.length, c > 0) {
                for (v = Vec3.subtract(e, i), a = ht.dimensions, h = Vec3.divideVbyV(o, a), s = 0; s < c; s += 1) l = {
                    position: Vec3.sum(e, Vec3.multiplyVbyV(h, Vec3.subtract(f[s].position, st))),
                    dimensions: Vec3.multiplyVbyV(h, f[s].dimensions)
                }, Entities.editEntity(t[s], l), u(n[s], l);
                i = e;
                r.dimensions = o;
                ft()
            }
        }

        function ei() {
            return n.length > 0 ? n[y()].rotation : null
        }

        function oi(r) {
            var s, o, f, e;
            if (o = n.length, o > 0) {
                if (o === 1) e = {
                    position: n[0].position,
                    rotation: Quat.fromVec3Degrees(r)
                }, Entities.editEntity(t[0], e), u(n[0], e);
                else
                    for (s = Quat.multiply(Quat.fromVec3Degrees(r), Quat.inverse(Quat.fromVec3Degrees(n[y()].rotation))), f = 0; f < o; f += 1) e = {
                        position: Vec3.sum(i, Vec3.multiplyQbyV(s, Vec3.subtract(n[f].position, i))),
                        rotation: Quat.multiply(s, Quat.fromVec3Degrees(n[f].rotation))
                    }, Entities.editEntity(t[f], e), u(n[f], e);
                ft()
            }
        }

        function si() {
            return r
        }

        function hi(i) {
            var f, r, o, s, c;
            return n.length > 0 ? (f = t[0], r = Object.keys(i), o = o1.e2(n[0], r), Entities.editEntity(f, i), s = o1.e2(Entities.getEntityProperties(f, r), r), u(n[0], s), i.hasOwnProperty("parentID") && a(), e(), h(), c = o1.e2(n[0], r), o7.k4(o7.k2, f, o, c), !0) : !1
        }

        function ci(i) {
            var h = [],
                c = [],
                l = [],
                u, f, a, v, e, o, p, r, s, w = "{00000000-0000-0000-0000-000000000000}";
            if (s = n.length, s > 0) {
                if (i) {
                    for (u = n[y()], f = u.id, a = t.indexOf(u.parentID) !== -1, h.push(f), c.push({
                            parentID: u.parentID
                        }), l.push({
                            parentID: a ? w : u.parentID
                        }), p = {
                            parentID: w
                        }, a && Entities.editEntity(u.id, p), r = 0; r < s; r += 1) t[r] !== f && Entities.editEntity(n[r], p);
                    o = f
                } else o = w;
                for (r = 0; r < s; r += 1) v = n[r], e = v.id, i && e === f || (h.push(e), c.push({
                    parentID: v.parentID
                }), l.push({
                    parentID: o
                }), Entities.editEntity(e, {
                    parentID: o
                }));
                o7.k4(o7.k2, h, c, l, !0)
            }
        }

        function li() {
            return n.length
        }

        function ai() {
            return s.length
        }

        function vi() {
            return n.length > 0 ? n[n.length - 1].id : null
        }

        function yi() {
            return n
        }

        function pi() {
            return t
        }

        function wi() {
            return v
        }

        function bi() {
            return g
        }

        function ki() {
            return o
        }

        function di() {
            return l
        }

        function gi(n) {
            var t = [];
            return rt(n, t), t
        }

        function pt() {
            for (var r, f, i = 0, o = t.length; i < o; i += 1) f = t[i], r = Entities.getEntityProperties(t[i]), r.id !== undefined ? u(n[i], r) : vt(f);
            a();
            e();
            h()
        }

        function nr(n, t) {
            var r, s, u, h = [],
                c = [],
                o = [],
                f, i, e, l = ["position", "parentID"];
            if (Clipboard.importEntities(n) && (r = Clipboard.pasteEntities(t), r.length > 0)) {
                if (u = Entities.getEntityProperties(r[0], ["type", "dimensions"]), u.type !== "Zone")
                    for (s = u.dimensions.y / 2, i = 0, e = r.length; i < e; i += 1) f = r[i], u = Entities.getEntityProperties(f, l), Uuid.isNull(u.parentID) && (u.position.y += s, Entities.editEntity(f, {
                        position: u.position
                    }), o.push(f));
                for (i = 0, e = o.length; i < e; i += 1) ut(o[i], h, c, !0);
                return o7.k4(o7.k1, h, null, c), p(r), o2.f2(r), !0
            }
            return !1
        }

        function tr(t, i, r, u) {
            var f, c, s, h, e, v = 8,
                o, l, a;
            return (f = Entities.addEntity(t), Entities.getEntityProperties(f, "id").id !== undefined) ? (p([f]), o7.k4(o7.k1, f, null, n[0]), i && (o = ["dimensions", "position"], l = o1.e2(n[0], o), c = n[0].dimensions, s = 0, h = Script.setInterval(function() {
                e = Entities.getEntityProperties(f, o);
                Vec3.equal(e.dimensions, c) ? (s += 1, s === v && Script.clearInterval(h)) : (Script.clearInterval(h), r && (e.position.y += e.dimensions.y / 2, Entities.editEntity(f, e)), pt(), a = o1.e2(n[0], o), o7.k4(o7.k2, f, l, a), u())
            }, 250)), !0) : !1
        }

        function ir() {
            var f = [],
                e, h = [],
                r = [],
                i = [],
                c, u, o, l, t, s;
            for (o = !0, t = 0, s = n.length; t < s; t += 1) l = n[t], l.locked || (h.push(l.id), f.push(t));
            if (f.length > 0) {
                for (t = 0; t < f.length; t += 1) e = f[t], c = Entities.addEntity(n[e]), r[t] = c, i[t] = Entities.getEntityProperties(c), i[t].id !== undefined ? o1.e4(i[t]) : (r.splice(t, 1), i.splice(t, 1), f.splice(t, 1), h.splice(t, 1), o = !1, t = t - 1);
                for (t = 0, s = i.length; t < s; t += 1) u = i[t].parentID, Uuid.isNull(u) || (e = h.indexOf(u), e !== -1 && (u = r[e], Entities.editEntity(r[t], {
                    parentID: u
                }), i[t].parentID = u));
                r.length > 0 && o7.k4(o7.k1, r, null, i);
                p(r)
            } else o = !1;
            return o
        }

        function wt() {
            var i, u, o, s, c, r = [],
                l = [],
                f, v;
            for (u = !0, f = 0, v = n.length; f < v; f += 1) i = t[f], r.indexOf(i) === -1 && (o = Entities.getEntityProperties(i, "locked"), o.id !== undefined && o.locked === 0 ? (s = [], c = [], ut(i, s, c, !0), Entities.deleteEntity(i), Entities.getEntityProperties(i, "locked").id === undefined ? (r = r.concat(s), l = l.concat(c)) : u = !1) : u = !1);
            return r.length > 0 && o7.k4(o7.k3, r, l, null), yt(r), a(), e(), h(), u
        }

        function bt(u) {
            var e = !0,
                o, f, h;
            if (s = [], w = [], nt = undefined, b = undefined, n.length > 0)
                for (f = 0, h = n.length; f < h; f += 1) u && n[f].locked ? e = !1 : (s.push(t[f]), o = o1.e1(n[f]), o1.e5(o), w.push(o));
            return e ? (nt = Vec3.copy(i), b = {
                registrationPoint: Vec3.copy(r.registrationPoint),
                dimensions: Vec3.copy(r.dimensions)
            }) : (s = [], w = []), e
        }

        function rr() {
            var n = bt(!0);
            return n && (n = wt()), n
        }

        function ur(n) {
            var o, r = [],
                i = [],
                h, f, t, u, e, c = !0;
            if (s.length > 0) {
                for (o = Vec3.subtract(n, nt), o.y += b.dimensions.y * b.registrationPoint.y, t = 0, e = s.length; t < e; t += 1) r.push(s[t]), i.push(o1.e1(w[t])), i[t].position = Vec3.sum(i[t].position, o), delete i[t].localPosition;
                for (t = 0; t < r.length; t += 1)
                    if (h = r[t], f = Entities.addEntity(i[t]), r[t] = f, i[t] = Entities.getEntityProperties(f), i[t].id !== undefined)
                        for (o1.e4(i[t]), u = t + 1, e = r.length; u < e; u += 1) i[u].parentID === h && (i[u].parentID = f);
                    else {
                        for (u = r.length - 1; u > t; u -= 1) i[u].parentID === h && (r.splice(u, 1), i.splice(u, 1));
                        r.splice(t, 1);
                        i.splice(t, 1);
                        c = !1;
                        t = t - 1
                    }
                p(r);
                r.length > 0 && o7.k4(o7.k1, r, null, i)
            }
            return c
        }

        function kt() {
            c = [];
            n = [];
            t = [];
            e();
            h()
        }

        function fr() {
            lt(!1)
        }

        function er() {
            kt()
        }
        var c = [],
            n = [],
            t = [],
            v = [],
            g = [],
            o = [],
            l = [],
            i = null,
            r, s = [],
            w = [],
            nt, b, tt = 0,
            k = 1,
            it = 2,
            et = [],
            ot, d, f, st, ht, ct = 180 / Math.PI;
        return {
            l1: p,
            l3: gt,
            l4: yt,
            z4: ni,
            l5: tt,
            l6: k,
            l7: it,
            hk: lt,
            l9: ti,
            la: ii,
            lb: ri,
            lc: fi,
            z6: ui,
            ld: ei,
            le: oi,
            lf: si,
            lg: hi,
            lh: ci,
            li: ai,
            lj: li,
            lk: vi,
            ll: pi,
            lm: yi,
            ln: bi,
            lo: wi,
            lp: di,
            lq: ki,
            lr: gi,
            ls: nr,
            l2: tr,
            lt: ir,
            lu: wt,
            lv: rr,
            lw: bt,
            lx: ur,
            z1: pt,
            z3: kt,
            za: fr,
            zb: er
        }
    }(),
    o9 = function() {
        function g() {
            o4.z3();
            o3.z3()
        }

        function u() {
            o4.z1(o8.lb(), o8.ld(), o8.lf());
            o3.z1(o8.lm(), o8.lo(), o8.lq())
        }

        function tr() {
            o6.z3();
            o2.z1(o6.z5(), o8.lm(), o8.ln(), o8.lp())
        }

        function i(n) {
            (n || n === undefined) && o6.z1();
            o2.z1(o6.z5(), o8.lm(), o8.ln(), o8.lp())
        }

        function pe(f, e) {
            var o, h, c, l, s;
            o5.z2(!1);
            h = Camera.computePickRay(f, e);
            s = o5.i2(h);
            c = s !== undefined;
            c || (s = Vec3.sum(Vec3.multiply(10, h.direction), h.origin));
            switch (d) {
                case vr:
                    o8.ls(ot, s) ? (n = r, u(), i(), o2.f9(o2.f6, ve)) : (n = t, o2.f9(o2.f8, ye));
                    break;
                case yr:
                    o8.lx(s) ? (n = r, u(), i()) : (n = t, o2.f9(o2.f8, oe));
                    break;
                default:
                    o = of [d];
                    l = o.dimensions !== undefined;
                    d === kt && (o.modelURL = ot);
                    o.position = s;
                    c && l && d !== "zone" && (o.position.y += o.dimensions.y / 2);
                    o8.l2(o, !l, c, function() {
                        u();
                        i()
                    }) ? (n = r, u(), i()) : (n = t, o2.f9(o2.f8, ue))
            }
        }

        function we() {
            o5.z2(!1);
            n = t;
            o2.f4()
        }

        function tu() {
            o8.lu() || o2.f9(o2.f8, he);
            u();
            i()
        }

        function iu(f) {
            for (var e = f.slice(0, f.length), o = e.length - 1; o >= 0; o -= 1) Entities.getEntityProperties(f[o], "id").id === undefined && e.splice(o, 1);
            e.length > 0 ? (o8.l1(e), o2.f2(e), n = r, u(), i()) : (o8.z3(), n = t, g(), i())
        }

        function ri() {
            Menu.setIsOptionChecked(it, !0);
            st(!0);
            ki();
            gi();
            o2.z2(!0)
        }

        function ru() {
            var n;
            e || ri();
            o8.lj() > 0 ? (n = Window.save("Export Entities to File", "", "*.json"), n && (Clipboard.exportEntities(n, o8.ll()) ? o2.f9(o2.f6, le) : o2.f9(o2.f8, ae))) : o2.f9(o2.f8, ce)
        }

        function ir(t) {
            o8.z3();
            g();
            i();
            o2.f3(kt);
            d = vr;
            ot = t;
            o5.z6();
            o5.z2(!0);
            n = h
        }

        function rr() {
            o4.h6();
            o4.hj();
            o4.h4(o4.h1)
        }

        function uu() {
            var n;
            e || ri();
            n = Window.browse("Import Entities from File", "", "*.json");
            n && ir("file:///" + n);
            rr()
        }

        function fu() {
            var n;
            e || ri();
            n = Window.prompt("URL of JSON file to import:");
            n && ir(n);
            rr()
        }

        function eu(n) {
            e || ri();
            ir(n);
            rr()
        }

        function ur() {
            e && (o8.lv() || o2.f9(o2.f8, ee), u())
        }

        function fr() {
            e && o8.lw()
        }

        function er() {
            e && o8.li() > 0 && (o8.z3(), g(), i(), o2.f3(kt), d = yr, o5.z6(), o5.z2(!0), n = h)
        }

        function be() {
            o8.lh(!0)
        }

        function ke() {
            o8.lh(!1)
        }

        function de(f) {
            var e = JSON.parse(f),
                l, a, v, s, o;
            switch (e.type) {
                case m7:
                    tu();
                    break;
                case m3:
                    l = e.radius;
                    l !== c && (c = l, o6.j1(c), Settings.setValue(ar, c));
                    o8.z1();
                    i();
                    u();
                    break;
                case m5:
                    o8.l1(e.ids);
                    n = r;
                    i();
                    u();
                    break;
                case m4:
                    s = e.id;
                    e.control ? o8.z4(s) ? (o = o8.lr(s), o8.l4(o)) : (o = o8.lr(s), o8.l3(o)) : (o = o8.lr(s), o8.l1(o));
                    n = o8.lj() > 0 ? r : t;
                    i();
                    u();
                    break;
                case m6:
                    o1.e5(e.properties);
                    o8.lg(e.properties) || o2.f9(o2.f8, se);
                    o4.z1(o8.lb(), o8.ld(), o8.lf());
                    o3.z1(o8.lm(), o8.lo(), o8.lq());
                    break;
                case m8:
                    o8.z3();
                    n = t;
                    i();
                    g();
                    break;
                case m9:
                    if (o8.z3(), i(), g(), d = e.entityType, d === kt && (ot = Window.prompt("URL of model FBX or OBJ file:"), ot === "")) {
                        n = t;
                        o2.f4();
                        return
                    }
                    o5.z6();
                    o5.z2(!0);
                    n = h;
                    break;
                case ma:
                    o5.z2(!1);
                    n = t;
                    break;
                case mb:
                    si = e.single;
                    break;
                case mc:
                    ft = e.local;
                    o8.l8(ft);
                    o4.hk(ft, o8.ld());
                    o8.lj() > 0 && (o8.z1(), o4.z1(o8.lb(), o8.ld(), o8.lf()));
                    break;
                case m0:
                    cr = !0;
                    a = e.script;
                    v = e.html;
                    (w !== a || w !== v) && (log(dr + ": " + w + ", " + a + " (script), " + v + " (HTML)"), Window.alert(dr + "!\n" + nu));
                    o2.f1(c);
                    break;
                case me:
                    ni(e.key);
                    break;
                case mf:
                    ti(e.key);
                    break;
                case mg:
                    o2.f5() || wi();
                    break;
                case mz:
                    log(e.message);
                    break;
                default:
                    log("ERROR: Unexpected message: " + e.message)
            }
        }

        function ou(f) {
            var lt, it, st, w, dt, gt, ui, ut, fi, ni, g, ft, at, vt, ot, tt = [],
                kt, c, d, ti, ht, ct, ri;
            if (e && f.isLeftButton && !f.isMeta) {
                (n === t || n === r) && (lt = Camera.computePickRay(f.x, f.y), it = Entities.findRayIntersection(lt, !0));
                switch (n) {
                    case t:
                        it.intersects && (c = it.entityID, a ? (d = o8.lr(c), o8.l1(d), o2.f2(d)) : (o8.l1([c]), o2.f2([c])), n = r);
                        break;
                    case r:
                        if (st = Overlays.findRayIntersection(lt), st.intersects)
                            if (w = st.overlayID, o4.h7(w)) {
                                hi = o4.h8(w);
                                o4.hi(w);
                                dt = Camera.position;
                                gt = o8.lb();
                                ui = Vec3.subtract(dt, gt);
                                n = v;
                                o8.l9(o8.l5);
                                vi = !1;
                                yi = !1;
                                break
                            } else if (o4.hb(w)) {
                            ut = o4.hc(w);
                            o4.hi(w);
                            fi = (ut + 1) % 3;
                            ni = Camera.position[ii[ut]] >= 0 ? 1 : -1;
                            ci = Vec3.multiply(ni, z[ut]);
                            yt = z[ut];
                            wt = o8.lb();
                            k = Quat.fromVec3Degrees(o8.ld());
                            bt = Vec3.normalize(Vec3.subtract(st.intersection, wt));
                            n = p;
                            o8.l9(o8.l6);
                            break
                        } else {
                            k = Quat.fromVec3Degrees(o8.ld());
                            o4.hd(w) ? (pt = li, et = o4.he(w)) : (pt = ef, et = o4.hf(w));
                            g = o8.lf();
                            o = g.dimensions;
                            rt = g.registrationPoint;
                            n = b;
                            o8.l9(o8.l7);
                            break
                        }
                        if (it.intersects) {
                            if (c = it.entityID, s || l || a)
                                if (!a || l || s) {
                                    if (!l || a || s) o4.h4(o4.h1), o8.z4(c) ? (a ? (d = o8.lr(c), o8.l4(d)) : o8.l4([c]), o8.lj() === 0 ? n = t : o2.f2(o8.ll())) : (a ? (d = o8.lr(c), o8.l3(d)) : o8.l3([c]), o2.f2(o8.ll()));
                                    else if (!o8.z4(c))
                                        for (o8.l3([c]), g = o8.lf(), ft = Quat.fromVec3Degrees(o8.ld()), vt = g.dimensions, at = Vec3.sum(o8.lb(), Vec3.multiplyQbyV(Quat.fromVec3Degrees(ft), Vec3.multiplyVbyV(Vec3.subtract(nt, g.registrationPoint), vt))), ot = Vec3.multiply(.5, vt), tt[0] = Vec3.multiplyQbyV(ft, z[0]), tt[1] = Vec3.multiplyQbyV(ft, z[1]), tt[2] = Vec3.multiplyQbyV(ft, z[2]), kt = Entities.findEntities(at, Vec3.length(ot)), ct = 0, ri = kt.length; ct < ri; ct += 1) {
                                            if (o8.lj() === 0) break;
                                            c = kt[ct];
                                            o8.z4(c) || (ti = Entities.getEntityProperties(c, "position").position, ht = Vec3.subtract(ti, at), Math.abs(Vec3.dot(ht, tt[0])) <= ot.x && Math.abs(Vec3.dot(ht, tt[1])) <= ot.y && Math.abs(Vec3.dot(ht, tt[2])) <= ot.z && o8.l3([c]))
                                        }
                                } else d = o8.lr(c), o8.l1(d), o2.f2(d);
                            else o8.l1([c]), o2.f2([c]);
                            break
                        }
                        s || l || a ? o4.h4(o4.h1) : (o8.z3(), n = t);
                        break;
                    case v:
                    case p:
                    case b:
                        log(x, 1);
                        break;
                    case h:
                        o2.f4();
                        pe(f.x, f.y);
                        break;
                    default:
                        log(y, 2)
                }
                u();
                i()
            }
        }

        function su() {
            switch (n) {
                case t:
                    break;
                case r:
                    break;
                case v:
                case p:
                case b:
                    o4.h6();
                    o4.hj();
                    n = r;
                    o8.la();
                    break;
                case h:
                    break;
                default:
                    log(y, 3)
            }
        }

        function ge() {
            var c, ni, f, s, it, ti, lt, w, at, ri, ut, ui, fi, ot, d, st, vt, kt, ht, dt, ei, a, e, g, gt, oi, ct, ai, wi = .001,
                tt, bi = 180 / Math.PI;
            c = kr;
            pi = null;
            switch (n) {
                case t:
                    break;
                case r:
                    ni = Overlays.findRayIntersection(Camera.computePickRay(c.x, c.y));
                    o4.h5(ni.overlayID);
                    break;
                case v:
                    f = Camera.computePickRay(c.x, c.y);
                    s = o8.lb();
                    ti = o4.h9(hi);
                    w = Vec3.sum(s, ti);
                    at = Vec3.subtract(w, f.origin);
                    ri = Vec3.subtract(Vec3.multiply(Vec3.length(at), f.direction), at);
                    lt = o4.ha(hi);
                    ui = Vec3.dot(ri, lt);
                    fi = Vec3.multiply(ui, lt);
                    s = Vec3.sum(s, fi);
                    !l || vi || yi || (o8.lt() || o2.f9(o2.f8, fe), yi = !0);
                    vi = !0;
                    o8.z6(s);
                    u();
                    i(!1);
                    break;
                case p:
                    f = Camera.computePickRay(c.x, c.y);
                    d = ft ? Vec3.multiplyQbyV(k, ci) : ci;
                    it = Vec3.dot(Vec3.subtract(wt, f.origin), d) / Vec3.dot(f.direction, d);
                    ot = Vec3.sum(f.origin, Vec3.multiply(it, f.direction));
                    st = Vec3.normalize(Vec3.subtract(ot, wt));
                    vt = Math.acos(Vec3.dot(bt, st));
                    ft ? (kt = Vec3.multiplyQbyV(k, yt), ht = Vec3.dot(Vec3.cross(bt, st), kt) >= 0 ? 1 : -1, dt = Quat.angleAxis(ht * bi * vt, kt)) : (ht = Vec3.dot(Vec3.cross(bt, st), yt) >= 0 ? 1 : -1, dt = Quat.angleAxis(ht * bi * vt, yt));
                    ei = Quat.multiply(dt, k);
                    o8.le(Quat.safeEulerAngles(ei));
                    u();
                    i(!1);
                    break;
                case b:
                    if (f = Camera.computePickRay(c.x, c.y), ut = pt === li ? o4.hg(et) : o4.hh(et), s = o8.lb(), a = Vec3.sum(s, Vec3.multiplyQbyV(k, Vec3.multiplyVbyV(Vec3.subtract(nt, rt), o))), w = Vec3.sum(a, ut), d = Vec3.normalize(Vec3.subtract(f.origin, w)), it = Vec3.dot(Vec3.subtract(w, f.origin), d) / Vec3.dot(f.direction, d), ot = Vec3.sum(f.origin, Vec3.multiply(it, f.direction)), e = Vec3.dot(Vec3.normalize(ut), Vec3.subtract(ot, w)), si || (e = 2 * e), pt === li) g = ii[Math.floor(et / 2)], e < 0 && (e = Math.max(e, wi - o[g])), o[g] += e;
                    else {
                        if (gt = Vec3.length(o), e < 0) {
                            for (oi = 0, ct = o[ii[0]], tt = 1; tt < 3; tt += 1) g = ii[tt], o[g] < ct && (oi = tt, ct = o[g]);
                            ai = Vec3.length(Vec3.multiply(wi / ct, o));
                            e = Math.max(e, ai - gt)
                        }
                        o = Vec3.multiply(1 + e / gt, o)
                    }
                    si ? (a = Vec3.sum(a, Vec3.multiplyVbyV(nt, Vec3.multiply(e, Vec3.normalize(ut)))), s = Vec3.equal(rt, nt) ? a : Vec3.sum(a, Vec3.multiplyQbyV(k, Vec3.multiplyVbyV(Vec3.subtract(rt, nt), o)))) : Vec3.equal(rt, nt) || (s = Vec3.sum(Vec3.multiplyQbyV(k, Vec3.multiplyVbyV(Vec3.subtract(rt, nt), o)), a));
                    o8.lc(s, o);
                    u();
                    i(!1);
                    break;
                case h:
                    break;
                default:
                    log(y, 4)
            }
        }

        function hu(n) {
            kr = n;
            pi === null && (pi = Script.setTimeout(ge, gf))
        }

        function cu(n) {
            return !n.isControl && !n.isAlt && n.isShifted && !n.isAutoRepeat
        }

        function tt(n) {
            return n.isControl && !n.isAlt && !n.isShifted && !n.isAutoRepeat
        }

        function or(n) {
            return n.isControl && n.isAlt && !n.isShifted && !n.isAutoRepeat
        }

        function no(n) {
            return n.isControl && !n.isAlt && n.isShifted && !n.isAutoRepeat
        }

        function to(n) {
            return !n.isControl && !n.isAlt && !n.isShifted && !n.isAutoRepeat
        }

        function io() {
            oi && (o8.z1(), u(), i())
        }

        function lu() {
            location.isConnected ? Script.setTimeout(io, tf) : Script.setTimeout(lu, hr)
        }

        function au() {
            o8.z3();
            n = t;
            g();
            tr();
            Script.setTimeout(lu, hr)
        }

        function vu(n) {
            var t, r;
            t = Entities.getEntityProperties(n, "position");
            r = Vec3.distance(t.position, MyAvatar.position);
            r <= o6.j2() && i()
        }

        function yu(n) {
            o8.z4(n) && (o8.z1(), u());
            o6.z4(n) && i()
        }

        function ro() {
            var r = e;
            e = Menu.isOptionChecked(it);
            st(e);
            e ? (r || (ki(), gi()), i()) : (r && (di(), nr()), o8.z3(), n = t, g(), o5.z2(!1), o2.f4(), tr());
            o2.z2(e)
        }

        function uo() {
            cr || (log(gr), Window.alert(gr + "!\n" + nu))
        }

        function fo() {
            log("Version " + w);
            c = Settings.getValue(ar);
            c === "" && (c = ff);
            o3.za();
            o4.za();
            o5.za();
            o6.za(c);
            o8.za();
            o7.za();
            o2.za(de, wi);
            Script.setTimeout(uo, uf);
            Menu.addMenuItem({
                menuName: f,
                menuItemName: sr,
                isSeparator: !0
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: it,
                shortcutKey: pu,
                isCheckable: !0,
                isChecked: !1
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: ht,
                shortcutKey: wu
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: ct,
                shortcutKey: bu
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: lt,
                shortcutKey: ku
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: ui,
                shortcutKey: du
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: fi,
                shortcutKey: gu
            });
            Menu.addMenuItem({
                menuName: f,
                menuItemName: ei,
                shortcutKey: nf
            });
            Menu.menuItemEvent.connect(bi);
            location.hostChanged.connect(au);
            Window.svoImportRequested.connect(eu);
            typeof Vec3.copy != "function" && (Vec3.copy = function(n) {
                return {
                    x: n.x,
                    y: n.y,
                    z: n.z
                }
            });
            typeof Vec3.divideVbyV != "function" && (Vec3.divideVbyV = function(n, t) {
                return {
                    x: n.x / t.x,
                    y: n.y / t.y,
                    z: n.z / t.z
                }
            })
        }

        function eo() {
            o2.z2(!1);
            Window.svoImportRequested.disconnect(eu);
            location.hostChanged.disconnect(au);
            st(!1);
            Menu.menuItemEvent.disconnect(bi);
            Menu.removeMenuItem(f, ei);
            Menu.removeMenuItem(f, fi);
            Menu.removeMenuItem(f, ui);
            Menu.removeMenuItem(f, lt);
            Menu.removeMenuItem(f, ct);
            Menu.removeMenuItem(f, ht);
            Menu.removeMenuItem(f, it);
            Menu.removeSeparator(f, sr);
            o2.zb();
            o7.zb();
            o8.zb();
            o6.zb();
            o5.zb();
            o4.zb();
            o3.zb()
        }
        var f = "Edit",
            sr = "Entities ",
            it = "Edit... ",
            pu = "CTRL+E",
            ht = "Cut",
            wu = "CTRL+X",
            ct = "Copy",
            bu = "CTRL+C",
            lt = "Paste",
            ku = "CTRL+V",
            ui = "Export...",
            du = "CTRL+ALT+E",
            fi = "Import...",
            gu = "CTRL+ALT+I",
            ei = "Import from URL...",
            nf = "CTRL+ALT+U",
            ut, hr = 1e3,
            tf = 5e3,
            rf = 5e3,
            cr = !1,
            uf = 15e3,
            e = !1,
            lr = null,
            c, ff = 10,
            ar = "Edit Search Radius",
            at = !1,
            vt = !1,
            oi = !1,
            si = !0,
            ft = !1,
            t = 0,
            r = 1,
            v = 2,
            p = 3,
            b = 4,
            h = 5,
            n = t,
            hi, ci, yt, et, pt, li = 0,
            ef = 1,
            o, rt, wt, k, bt, d, vr = "import",
            kt = "model",
            yr = "clipboard",
            ot, pr = {
                red: 128,
                green: 128,
                blue: 128
            },
            ai = {
                x: .5,
                y: .5,
                z: .5
            },
            wr = {
                x: 1,
                y: .5,
                z: .01
            },
            nt = Vec3.HALF,
            of = {
                model: {
                    type: "Model"
                },
                box: {
                    type: "Box",
                    color: pr,
                    dimensions: ai
                },
                sphere: {
                    type: "Sphere",
                    color: pr,
                    dimensions: ai
                },
                light: {
                    type: "Light",
                    dimensions: ai
                },
                text: {
                    type: "Text",
                    dimensions: wr,
                    text: "text"
                },
                web: {
                    type: "Web",
                    dimensions: wr,
                    sourceUrl: "https://highfidelity.com/"
                },
                zone: {
                    type: "Zone",
                    dimensions: {
                        x: 10,
                        y: 10,
                        z: 10
                    }
                }
            },
            sf = 16777216,
            hf = 67,
            cf = 69,
            lf = 73,
            af = 78,
            vf = 85,
            yf = 86,
            pf = 88,
            wf = 89,
            bf = 90,
            dt = 16777248,
            gt = 16777249,
            br = 16777251,
            kf = 16777222,
            df = 16777223,
            s = !1,
            l = !1,
            a = !1,
            vi = !1,
            yi = !1,
            gf = 10,
            pi = null,
            kr, ni, ti, wi, bi, st, ki, di, gi, nr, ii = ["x", "y", "z"],
            ne = "Could not undo ",
            te = "Could not redo ",
            ie = "Nothing to undo",
            re = "Nothing to redo",
            ue = "Could not add entity",
            fe = "Could not duplicate entity",
            ee = "Could not cut entity",
            oe = "Could not paste entity",
            se = "Could not edit entity",
            he = "Could not delete entity",
            ce = "No entities selected to export",
            le = "Entities exported",
            ae = "Could not export entity",
            ve = "Entities imported",
            ye = "Could not import entity",
            dr = "Entities Editor file version numbers don't match",
            gr = "Entities Editor window not loaded properly",
            nu = "Please reload edit.js script.";
        ki = function() {
            vt || (Controller.mouseMoveEvent.connect(hu), Controller.mousePressEvent.connect(ou), Controller.mouseReleaseEvent.connect(su), vt = !0)
        };
        di = function() {
            vt && (Controller.mouseReleaseEvent.disconnect(su), Controller.mousePressEvent.disconnect(ou), Controller.mouseMoveEvent.disconnect(hu), vt = !1)
        };
        ni = function(i) {
            var u, f, e = ["add", "edit", "delete"];
            switch (i.key) {
                case gt:
                    o2.fa(gt);
                    switch (n) {
                        case t:
                        case r:
                            l ? o4.h4(o4.h3, o8.lj() > 1) : o4.h4(o4.h2);
                            break;
                        case v:
                            n = r;
                            o4.h6();
                            o4.hj();
                            o8.la();
                            break;
                        case p:
                        case b:
                            log(x, 5);
                            break;
                        case h:
                            break;
                        default:
                            log(y, 6)
                    }
                    s = !0;
                    break;
                case dt:
                    o2.fa(dt);
                    switch (n) {
                        case t:
                        case r:
                            s && o4.h4(o4.h3, o8.lj() > 1);
                            break;
                        case v:
                        case p:
                            n = r;
                            o4.h6();
                            o4.hj();
                            o4.h4(o4.h1);
                            o8.la();
                            break;
                        case b:
                            log(x, 7);
                            break;
                        case h:
                            break;
                        default:
                            log(y, 8)
                    }
                    l = !0;
                    break;
                case br:
                    a = !0;
                    break;
                case sf:
                    n === h && we();
                    break;
                case kf:
                    tt(i) ? fr() : cu(i) && er();
                    break;
                case df:
                    cu(i) ? ur() : to(i) && tu();
                    break;
                case hf:
                    tt(i) && fr();
                    break;
                case cf:
                    or(i) && (ru(), s = !1);
                    break;
                case lf:
                    or(i) && (uu(), s = !1);
                    break;
                case af:
                    tt(i) ? be() : no(i) && ke();
                    break;
                case vf:
                    or(i) && (fu(), s = !1);
                    break;
                case yf:
                    tt(i) && er();
                    break;
                case pf:
                    tt(i) && ur();
                    break;
                case wf:
                    tt(i) && (o7.k8() ? (f = o7.ka(), o7.k6() || o2.f9(o2.f7, te + e[f]), iu(o7.kb())) : o2.f9(o2.f7, re));
                    break;
                case bf:
                    tt(i) && (o7.k7() ? (u = o7.k9(), o7.k5() || o2.f9(o2.f7, ne + e[u]), iu(u === o7.k1 ? o7.kb() : o7.kc())) : o2.f9(o2.f7, ie))
            }
        };
        ti = function(i) {
            switch (i.key) {
                case gt:
                    if (o2.fb(gt), s) {
                        switch (n) {
                            case t:
                            case r:
                                o4.h4(o4.h1);
                                break;
                            case v:
                                log(x, 9);
                                break;
                            case p:
                            case b:
                                n = r;
                                o4.h6();
                                o4.hj();
                                o4.h4(o4.h1);
                                o8.la();
                                break;
                            case h:
                                o4.h4(o4.h1);
                                break;
                            default:
                                log(y, 10)
                        }
                        s = !1
                    }
                    ut = undefined;
                    break;
                case dt:
                    if (o2.fb(dt), l) {
                        switch (n) {
                            case t:
                            case r:
                                s && o4.h4(o4.h2);
                                break;
                            case v:
                            case p:
                                log(x, 11);
                                break;
                            case b:
                                n = r;
                                o4.h6();
                                o4.hj();
                                o4.h4(o4.h1);
                                o8.la();
                                break;
                            case h:
                                break;
                            default:
                                log(y, 12)
                        }
                        l = !1
                    }
                    break;
                case br:
                    a = !1
            }
        };
        gi = function() {
            at || (Controller.keyPressEvent.connect(ni), Controller.keyReleaseEvent.connect(ti), at = !0)
        };
        nr = function() {
            at && (Controller.keyPressEvent.disconnect(ni), Controller.keyReleaseEvent.disconnect(ti), at = !1)
        };
        st = function(n) {
            n !== oi && (n ? (Entities.addingEntity.connect(vu), Entities.deletingEntity.connect(yu), lr = Script.setInterval(function() {
                o8.z1();
                u();
                i()
            }, rf)) : (Script.clearInterval(lr), Entities.deletingEntity.disconnect(yu), Entities.addingEntity.disconnect(vu)), oi = n)
        };
        wi = function() {
            e && (di(), nr());
            e = !1;
            Menu.setIsOptionChecked(it, !1);
            st(!1);
            o8.z3();
            n = t;
            g();
            o5.z2(!1);
            o2.f4();
            tr()
        };
        bi = function(n) {
            switch (n) {
                case it:
                    ro();
                    break;
                case ht:
                    ut !== ht && ur();
                    break;
                case ct:
                    ut !== ct && fr();
                    break;
                case lt:
                    ut !== lt && er();
                    break;
                case ui:
                    ru();
                    break;
                case fi:
                    uu();
                    break;
                case ei:
                    fu()
            }
            ut = n
        };
        fo();
        Script.scriptEnding.connect(eo)
    }()