/*!
nametags.js
 
Created by David Rowe on 10 Mar 2016.
Copyright 2016 David Rowe.
 
Information: http://ctrlaltstudio.com/hifi/nametags
 
Disclaimers:
1. The avatar identification provided by this script is not guaranteed: users can set their display name to whatever they like.
2. The content of the name tags displayed by this script is not moderated.
 
Distributed under the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) license.
See https://creativecommons.org/licenses/by-nd/4.0/
*/
var nametags = function() {
    function at(n, t) {
        print("[CtrlAltStudio nametags.js] " + n + (t !== undefined ? " " + t : ""))
    }

    function vt(n) {
        return n <= s ? .999 : n >= f ? 0 : 1 - (n - s) / (f - s)
    }

    function p() {
        var v, t, tt, y, i, p, r, w, s, b, k, u, a, d, g, st, ht, e, nt;
        for (t in n) n.hasOwnProperty(t) && (n[t].current = !1);
        for (v = AvatarList.getAvatarIdentifiers(), v.push(MyAvatar.sessionUUID), y = 0, tt = v.length; y < tt; y += 1) t = v[y], t !== null && (n.hasOwnProperty(t) || (n[t] = {}, n[t].overlay = Overlays.addOverlay("text3d", {
            font: {
                size: 1
            },
            color: ft,
            backgroundColor: et,
            position: Vec3.sum(MyAvatar.position, {
                x: 0,
                y: 0,
                z: 0
            }),
            visible: !1,
            isSolid: !1,
            topMargin: 0
        })), i = n[t], p = AvatarList.getAvatar(t), s = p.sessionDisplayName.slice(0, it), r = p.position, w = p.scale, e = s !== "", e && (b = Camera.position, k = {
            x: b.x - r.x,
            y: 0,
            z: b.z - r.z
        }, u = Vec3.length(k), e = w * ot <= u && u <= f), e && (ht = Quat.rotationBetween(Vec3.UNIT_Z, k), d = Overlays.textSize(o, s), a = u * (1 - .5 * u / f), g = {
            x: a * (d.width + rt),
            y: a * d.height
        }, st = {
            x: r.x,
            y: r.y + w * ut + g.y,
            z: r.z
        }), e ? (nt = vt(u), Overlays.editOverlay(i.overlay, {
            text: s,
            lineHeight: a * c,
            size: g,
            leftMargin: a * l,
            position: st,
            rotation: ht,
            parentID: t,
            textAlpha: nt,
            backgroundAlpha: nt,
            visible: !0
        })) : i.isLabelVisible && Overlays.editOverlay(i.overlay, {
            visible: !1
        }), i.displayName = s, i.isLabelVisible = e, i.current = !0);
        for (t in n) n.hasOwnProperty(t) && (n[t].current || (Overlays.deleteOverlay(n[t].overlay), delete n[t]));
        h()
    }

    function yt() {
        e = Script.setTimeout(p, nt)
    }

    function w() {
        var t;
        y || Script.clearTimeout(e);
        for (t in n) n.hasOwnProperty(t) && Overlays.deleteOverlay(n[t].overlay);
        n = {}
    }

    function b(n) {
        n !== i && (i = n, i ? yt() : w(), t && t.editProperties({
            isActive: i
        }), Settings.setValue(v, i))
    }

    function k(n) {
        var t;
        n === u && (t = Menu.isOptionChecked(u), t !== i && b(t))
    }

    function d() {
        Menu.setIsOptionChecked(u, !i)
    }

    function pt() {
        var n;
        at("Version " + g);
        n = Settings.getValue(v) === !0;
        o = Overlays.addOverlay("text3d", {
            lineHeight: c,
            visible: !1
        });
        Menu.addMenuItem({
            menuName: a,
            menuItemName: u,
            shortcutKey: st,
            isCheckable: !0,
            isChecked: n
        });
        Menu.menuItemEvent.connect(k);
        Script.setTimeout(function() {
            r = Tablet.getTablet("com.highfidelity.interface.tablet.system");
            r && (t = r.addButton({
                icon: ct,
                activeIcon: lt,
                text: ht,
                isActive: n
            }));
            t && t.clicked.connect(d)
        }, 2500);
        b(n)
    }

    function wt() {
        y = !0;
        w();
        t && (t.clicked.disconnect(d), r && (r.removeButton(t), r = null), t = null);
        Menu.menuItemEvent.disconnect(k);
        Menu.removeMenuItem(a, u);
        Overlays.deleteOverlay(o)
    }
    var g = "1.3.2-25",
        n = {},
        e, h, o, nt = 5,
        tt = 500,
        it = 50,
        c = .018,
        l = .005,
        rt = 2 * l,
        ut = .9,
        ft = {
            red: 240,
            green: 240,
            blue: 240
        },
        et = {
            red: 32,
            green: 32,
            blue: 32
        },
        ot = 1,
        s = 3,
        f = 20,
        i = !1,
        a = "View",
        u = "Nametags",
        st = "CTRL+N",
        ht = "NAMETAGS",
        ct = "http://ctrlaltstudio.com/downloads/hifi/scripts/assets/nametags-i.svg",
        lt = "http://ctrlaltstudio.com/downloads/hifi/scripts/assets/nametags-a.svg",
        r = null,
        t = null,
        v = "Nametags Visible",
        y = !1;
    h = function() {
        e = Script.setTimeout(p, tt)
    };
    pt();
    Script.scriptEnding.connect(wt)
}()