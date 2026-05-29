try {
    let Ia = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {}
      , ph = new Ia.Error().stack;
    ph && (Ia._sentryDebugIds = Ia._sentryDebugIds || {},
    Ia._sentryDebugIds[ph] = "ed2a051e-5867-4549-ad3b-cd03b0eaeed6",
    Ia._sentryDebugIdIdentifier = "sentry-dbid-ed2a051e-5867-4549-ad3b-cd03b0eaeed6")
} catch {}
{
    let Ia = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    Ia.SENTRY_RELEASE = {
        id: "2.90.2"
    }
}
( () => {
    var Ia = {
        143: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.sha224 = s.sha256 = void 0;
            const l = y(54050)
              , g = y(17412)
              , b = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
              , f = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
              , o = new Uint32Array(64);
            class c extends l.HashMD {
                constructor() {
                    super(64, 32, 8, !1),
                    this.A = f[0] | 0,
                    this.B = f[1] | 0,
                    this.C = f[2] | 0,
                    this.D = f[3] | 0,
                    this.E = f[4] | 0,
                    this.F = f[5] | 0,
                    this.G = f[6] | 0,
                    this.H = f[7] | 0
                }
                get() {
                    const {A: v, B: E, C: _, D: w, E: S, F: I, G: R, H: M} = this;
                    return [v, E, _, w, S, I, R, M]
                }
                set(v, E, _, w, S, I, R, M) {
                    this.A = v | 0,
                    this.B = E | 0,
                    this.C = _ | 0,
                    this.D = w | 0,
                    this.E = S | 0,
                    this.F = I | 0,
                    this.G = R | 0,
                    this.H = M | 0
                }
                process(v, E) {
                    for (let W = 0; W < 16; W++,
                    E += 4)
                        o[W] = v.getUint32(E, !1);
                    for (let W = 16; W < 64; W++) {
                        const G = o[W - 15]
                          , Y = o[W - 2]
                          , j = (0,
                        g.rotr)(G, 7) ^ (0,
                        g.rotr)(G, 18) ^ G >>> 3
                          , V = (0,
                        g.rotr)(Y, 17) ^ (0,
                        g.rotr)(Y, 19) ^ Y >>> 10;
                        o[W] = V + o[W - 7] + j + o[W - 16] | 0
                    }
                    let {A: _, B: w, C: S, D: I, E: R, F: M, G: O, H: k} = this;
                    for (let W = 0; W < 64; W++) {
                        const G = (0,
                        g.rotr)(R, 6) ^ (0,
                        g.rotr)(R, 11) ^ (0,
                        g.rotr)(R, 25)
                          , Y = k + G + (0,
                        l.Chi)(R, M, O) + b[W] + o[W] | 0
                          , V = ((0,
                        g.rotr)(_, 2) ^ (0,
                        g.rotr)(_, 13) ^ (0,
                        g.rotr)(_, 22)) + (0,
                        l.Maj)(_, w, S) | 0;
                        k = O,
                        O = M,
                        M = R,
                        R = I + Y | 0,
                        I = S,
                        S = w,
                        w = _,
                        _ = Y + V | 0
                    }
                    _ = _ + this.A | 0,
                    w = w + this.B | 0,
                    S = S + this.C | 0,
                    I = I + this.D | 0,
                    R = R + this.E | 0,
                    M = M + this.F | 0,
                    O = O + this.G | 0,
                    k = k + this.H | 0,
                    this.set(_, w, S, I, R, M, O, k)
                }
                roundClean() {
                    o.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0),
                    this.buffer.fill(0)
                }
            }
            class u extends c {
                constructor() {
                    super(),
                    this.A = -1056596264,
                    this.B = 914150663,
                    this.C = 812702999,
                    this.D = -150054599,
                    this.E = -4191439,
                    this.F = 1750603025,
                    this.G = 1694076839,
                    this.H = -1090891868,
                    this.outputLen = 28
                }
            }
            s.sha256 = (0,
            g.wrapConstructor)( () => new c),
            s.sha224 = (0,
            g.wrapConstructor)( () => new u)
        }
        ),
        251: ( (H, s) => {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            s.read = function(y, l, g, b, f) {
                var o, c, u = f * 8 - b - 1, h = (1 << u) - 1, v = h >> 1, E = -7, _ = g ? f - 1 : 0, w = g ? -1 : 1, S = y[l + _];
                for (_ += w,
                o = S & (1 << -E) - 1,
                S >>= -E,
                E += u; E > 0; o = o * 256 + y[l + _],
                _ += w,
                E -= 8)
                    ;
                for (c = o & (1 << -E) - 1,
                o >>= -E,
                E += b; E > 0; c = c * 256 + y[l + _],
                _ += w,
                E -= 8)
                    ;
                if (o === 0)
                    o = 1 - v;
                else {
                    if (o === h)
                        return c ? NaN : (S ? -1 : 1) * (1 / 0);
                    c = c + Math.pow(2, b),
                    o = o - v
                }
                return (S ? -1 : 1) * c * Math.pow(2, o - b)
            }
            ,
            s.write = function(y, l, g, b, f, o) {
                var c, u, h, v = o * 8 - f - 1, E = (1 << v) - 1, _ = E >> 1, w = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, S = b ? 0 : o - 1, I = b ? 1 : -1, R = l < 0 || l === 0 && 1 / l < 0 ? 1 : 0;
                for (l = Math.abs(l),
                isNaN(l) || l === 1 / 0 ? (u = isNaN(l) ? 1 : 0,
                c = E) : (c = Math.floor(Math.log(l) / Math.LN2),
                l * (h = Math.pow(2, -c)) < 1 && (c--,
                h *= 2),
                c + _ >= 1 ? l += w / h : l += w * Math.pow(2, 1 - _),
                l * h >= 2 && (c++,
                h /= 2),
                c + _ >= E ? (u = 0,
                c = E) : c + _ >= 1 ? (u = (l * h - 1) * Math.pow(2, f),
                c = c + _) : (u = l * Math.pow(2, _ - 1) * Math.pow(2, f),
                c = 0)); f >= 8; y[g + S] = u & 255,
                S += I,
                u /= 256,
                f -= 8)
                    ;
                for (c = c << f | u,
                v += f; v > 0; y[g + S] = c & 255,
                S += I,
                c /= 256,
                v -= 8)
                    ;
                y[g + S - I] |= R * 128
            }
        }
        ),
        270: ( (H, s, y) => {
            const l = y(53908)
              , g = y(78311)
              , b = (f, o, c) => {
                let u = null
                  , h = null
                  , v = null;
                try {
                    v = new g(o,c)
                } catch {
                    return null
                }
                return f.forEach(E => {
                    v.test(E) && (!u || h.compare(E) === 1) && (u = E,
                    h = new l(u,c))
                }
                ),
                u
            }
            ;
            H.exports = b
        }
        ),
        410: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = b;
            var l = g(y(83399));
            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            function b(f, o) {
                return (0,
                l.default)(f),
                f.replace(new RegExp("[".concat(o, "]+"),"g"), "")
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        457: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.crypto = void 0,
            s.crypto = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0
        }
        ),
        464: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.storeTransactionActionPhase = s.loadTransactionActionPhase = void 0;
            const l = y(62312)
              , g = y(92577);
            function b(o) {
                let c = o.loadBit()
                  , u = o.loadBit()
                  , h = o.loadBit()
                  , v = (0,
                l.loadAccountStatusChange)(o)
                  , E = o.loadBit() ? o.loadCoins() : void 0
                  , _ = o.loadBit() ? o.loadCoins() : void 0
                  , w = o.loadInt(32)
                  , S = o.loadBit() ? o.loadInt(32) : void 0
                  , I = o.loadUint(16)
                  , R = o.loadUint(16)
                  , M = o.loadUint(16)
                  , O = o.loadUint(16)
                  , k = o.loadUintBig(256)
                  , W = (0,
                g.loadStorageUsed)(o);
                return {
                    success: c,
                    valid: u,
                    noFunds: h,
                    statusChange: v,
                    totalFwdFees: E,
                    totalActionFees: _,
                    resultCode: w,
                    resultArg: S,
                    totalActions: I,
                    specActions: R,
                    skippedActions: M,
                    messagesCreated: O,
                    actionListHash: k,
                    totalMessageSize: W
                }
            }
            s.loadTransactionActionPhase = b;
            function f(o) {
                return c => {
                    c.storeBit(o.success),
                    c.storeBit(o.valid),
                    c.storeBit(o.noFunds),
                    c.store((0,
                    l.storeAccountStatusChange)(o.statusChange)),
                    c.storeMaybeCoins(o.totalFwdFees),
                    c.storeMaybeCoins(o.totalActionFees),
                    c.storeInt(o.resultCode, 32),
                    c.storeMaybeInt(o.resultArg, 32),
                    c.storeUint(o.totalActions, 16),
                    c.storeUint(o.specActions, 16),
                    c.storeUint(o.skippedActions, 16),
                    c.storeUint(o.messagesCreated, 16),
                    c.storeUint(o.actionListHash, 256),
                    c.store((0,
                    g.storeStorageUsed)(o.totalMessageSize))
                }
            }
            s.storeTransactionActionPhase = f
        }
        ),
        561: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = f;
            var l = b(y(83399))
              , g = b(y(410));
            function b(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }
            function f(o, c) {
                (0,
                l.default)(o);
                var u = c ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
                return (0,
                g.default)(o, u)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        601: ( (H, s, y) => {
            "use strict";
            var l;
            /**
 * Support for translating between Uint8Array instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */
            l = {
                value: !0
            },
            l = l = l = l = l = l = l = l = s.I0 = l = l = s.DH = l = s.NX = s.u8 = s.cY = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = l = void 0,
            l = l = l = s.av = l = l = s.O6 = l = s.w3 = l = l = l = l = l = l = l = l = l = l = s.Wg = l = l = l = l = void 0;
            const g = y(48287);
            function b(z) {
                if (!(z instanceof Uint8Array))
                    throw new TypeError("b must be a Uint8Array")
            }
            l = b;
            function f(z) {
                return b(z),
                g.Buffer.from(z.buffer, z.byteOffset, z.length)
            }
            l = f;
            class o {
                constructor(X, ge) {
                    if (!Number.isInteger(X))
                        throw new TypeError("span must be an integer");
                    this.span = X,
                    this.property = ge
                }
                makeDestinationObject() {
                    return {}
                }
                getSpan(X, ge) {
                    if (0 > this.span)
                        throw new RangeError("indeterminate span");
                    return this.span
                }
                replicate(X) {
                    const ge = Object.create(this.constructor.prototype);
                    return Object.assign(ge, this),
                    ge.property = X,
                    ge
                }
                fromArray(X) {}
            }
            l = o;
            function c(z, X) {
                return X.property ? z + "[" + X.property + "]" : z
            }
            l = c;
            function u(z, X) {
                if (typeof z != "function")
                    throw new TypeError("Class must be constructor");
                if (Object.prototype.hasOwnProperty.call(z, "layout_"))
                    throw new Error("Class is already bound to a layout");
                if (!(X && X instanceof o))
                    throw new TypeError("layout must be a Layout");
                if (Object.prototype.hasOwnProperty.call(X, "boundConstructor_"))
                    throw new Error("layout is already bound to a constructor");
                z.layout_ = X,
                X.boundConstructor_ = z,
                X.makeDestinationObject = ( () => new z),
                Object.defineProperty(z.prototype, "encode", {
                    value(ge, Ee) {
                        return X.encode(this, ge, Ee)
                    },
                    writable: !0
                }),
                Object.defineProperty(z, "decode", {
                    value(ge, Ee) {
                        return X.decode(ge, Ee)
                    },
                    writable: !0
                })
            }
            l = u;
            class h extends o {
                isCount() {
                    throw new Error("ExternalLayout is abstract")
                }
            }
            l = h;
            class v extends h {
                constructor(X=1, ge) {
                    if (!Number.isInteger(X) || 0 >= X)
                        throw new TypeError("elementSpan must be a (positive) integer");
                    super(-1, ge),
                    this.elementSpan = X
                }
                isCount() {
                    return !0
                }
                decode(X, ge=0) {
                    b(X);
                    const Ee = X.length - ge;
                    return Math.floor(Ee / this.elementSpan)
                }
                encode(X, ge, Ee) {
                    return 0
                }
            }
            l = v;
            class E extends h {
                constructor(X, ge=0, Ee) {
                    if (!(X instanceof o))
                        throw new TypeError("layout must be a Layout");
                    if (!Number.isInteger(ge))
                        throw new TypeError("offset must be integer or undefined");
                    super(X.span, Ee || X.property),
                    this.layout = X,
                    this.offset = ge
                }
                isCount() {
                    return this.layout instanceof _ || this.layout instanceof w
                }
                decode(X, ge=0) {
                    return this.layout.decode(X, ge + this.offset)
                }
                encode(X, ge, Ee=0) {
                    return this.layout.encode(X, ge, Ee + this.offset)
                }
            }
            l = E;
            class _ extends o {
                constructor(X, ge) {
                    if (super(X, ge),
                    6 < this.span)
                        throw new RangeError("span must not exceed 6 bytes")
                }
                decode(X, ge=0) {
                    return f(X).readUIntLE(ge, this.span)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeUIntLE(X, Ee, this.span),
                    this.span
                }
            }
            l = _;
            class w extends o {
                constructor(X, ge) {
                    if (super(X, ge),
                    6 < this.span)
                        throw new RangeError("span must not exceed 6 bytes")
                }
                decode(X, ge=0) {
                    return f(X).readUIntBE(ge, this.span)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeUIntBE(X, Ee, this.span),
                    this.span
                }
            }
            l = w;
            class S extends o {
                constructor(X, ge) {
                    if (super(X, ge),
                    6 < this.span)
                        throw new RangeError("span must not exceed 6 bytes")
                }
                decode(X, ge=0) {
                    return f(X).readIntLE(ge, this.span)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeIntLE(X, Ee, this.span),
                    this.span
                }
            }
            l = S;
            class I extends o {
                constructor(X, ge) {
                    if (super(X, ge),
                    6 < this.span)
                        throw new RangeError("span must not exceed 6 bytes")
                }
                decode(X, ge=0) {
                    return f(X).readIntBE(ge, this.span)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeIntBE(X, Ee, this.span),
                    this.span
                }
            }
            l = I;
            const R = Math.pow(2, 32);
            function M(z) {
                const X = Math.floor(z / R)
                  , ge = z - X * R;
                return {
                    hi32: X,
                    lo32: ge
                }
            }
            function O(z, X) {
                return z * R + X
            }
            class k extends o {
                constructor(X) {
                    super(8, X)
                }
                decode(X, ge=0) {
                    const Ee = f(X)
                      , je = Ee.readUInt32LE(ge)
                      , Re = Ee.readUInt32LE(ge + 4);
                    return O(Re, je)
                }
                encode(X, ge, Ee=0) {
                    const je = M(X)
                      , Re = f(ge);
                    return Re.writeUInt32LE(je.lo32, Ee),
                    Re.writeUInt32LE(je.hi32, Ee + 4),
                    8
                }
            }
            l = k;
            class W extends o {
                constructor(X) {
                    super(8, X)
                }
                decode(X, ge=0) {
                    const Ee = f(X)
                      , je = Ee.readUInt32BE(ge)
                      , Re = Ee.readUInt32BE(ge + 4);
                    return O(je, Re)
                }
                encode(X, ge, Ee=0) {
                    const je = M(X)
                      , Re = f(ge);
                    return Re.writeUInt32BE(je.hi32, Ee),
                    Re.writeUInt32BE(je.lo32, Ee + 4),
                    8
                }
            }
            l = W;
            class G extends o {
                constructor(X) {
                    super(8, X)
                }
                decode(X, ge=0) {
                    const Ee = f(X)
                      , je = Ee.readUInt32LE(ge)
                      , Re = Ee.readInt32LE(ge + 4);
                    return O(Re, je)
                }
                encode(X, ge, Ee=0) {
                    const je = M(X)
                      , Re = f(ge);
                    return Re.writeUInt32LE(je.lo32, Ee),
                    Re.writeInt32LE(je.hi32, Ee + 4),
                    8
                }
            }
            l = G;
            class Y extends o {
                constructor(X) {
                    super(8, X)
                }
                decode(X, ge=0) {
                    const Ee = f(X)
                      , je = Ee.readInt32BE(ge)
                      , Re = Ee.readUInt32BE(ge + 4);
                    return O(je, Re)
                }
                encode(X, ge, Ee=0) {
                    const je = M(X)
                      , Re = f(ge);
                    return Re.writeInt32BE(je.hi32, Ee),
                    Re.writeUInt32BE(je.lo32, Ee + 4),
                    8
                }
            }
            l = Y;
            class j extends o {
                constructor(X) {
                    super(4, X)
                }
                decode(X, ge=0) {
                    return f(X).readFloatLE(ge)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeFloatLE(X, Ee),
                    4
                }
            }
            l = j;
            class V extends o {
                constructor(X) {
                    super(4, X)
                }
                decode(X, ge=0) {
                    return f(X).readFloatBE(ge)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeFloatBE(X, Ee),
                    4
                }
            }
            l = V;
            class ee extends o {
                constructor(X) {
                    super(8, X)
                }
                decode(X, ge=0) {
                    return f(X).readDoubleLE(ge)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeDoubleLE(X, Ee),
                    8
                }
            }
            l = ee;
            class re extends o {
                constructor(X) {
                    super(8, X)
                }
                decode(X, ge=0) {
                    return f(X).readDoubleBE(ge)
                }
                encode(X, ge, Ee=0) {
                    return f(ge).writeDoubleBE(X, Ee),
                    8
                }
            }
            l = re;
            class se extends o {
                constructor(X, ge, Ee) {
                    if (!(X instanceof o))
                        throw new TypeError("elementLayout must be a Layout");
                    if (!(ge instanceof h && ge.isCount() || Number.isInteger(ge) && 0 <= ge))
                        throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let je = -1;
                    !(ge instanceof h) && 0 < X.span && (je = ge * X.span),
                    super(je, Ee),
                    this.elementLayout = X,
                    this.count = ge
                }
                getSpan(X, ge=0) {
                    if (0 <= this.span)
                        return this.span;
                    let Ee = 0
                      , je = this.count;
                    if (je instanceof h && (je = je.decode(X, ge)),
                    0 < this.elementLayout.span)
                        Ee = je * this.elementLayout.span;
                    else {
                        let Re = 0;
                        for (; Re < je; )
                            Ee += this.elementLayout.getSpan(X, ge + Ee),
                            ++Re
                    }
                    return Ee
                }
                decode(X, ge=0) {
                    const Ee = [];
                    let je = 0
                      , Re = this.count;
                    for (Re instanceof h && (Re = Re.decode(X, ge)); je < Re; )
                        Ee.push(this.elementLayout.decode(X, ge)),
                        ge += this.elementLayout.getSpan(X, ge),
                        je += 1;
                    return Ee
                }
                encode(X, ge, Ee=0) {
                    const je = this.elementLayout
                      , Re = X.reduce( (He, st) => He + je.encode(st, ge, Ee + He), 0);
                    return this.count instanceof h && this.count.encode(X.length, ge, Ee),
                    Re
                }
            }
            l = se;
            class te extends o {
                constructor(X, ge, Ee) {
                    if (!(Array.isArray(X) && X.reduce( (Re, He) => Re && He instanceof o, !0)))
                        throw new TypeError("fields must be array of Layout instances");
                    typeof ge == "boolean" && Ee === void 0 && (Ee = ge,
                    ge = void 0);
                    for (const Re of X)
                        if (0 > Re.span && Re.property === void 0)
                            throw new Error("fields cannot contain unnamed variable-length layout");
                    let je = -1;
                    try {
                        je = X.reduce( (Re, He) => Re + He.getSpan(), 0)
                    } catch {}
                    super(je, ge),
                    this.fields = X,
                    this.decodePrefixes = !!Ee
                }
                getSpan(X, ge=0) {
                    if (0 <= this.span)
                        return this.span;
                    let Ee = 0;
                    try {
                        Ee = this.fields.reduce( (je, Re) => {
                            const He = Re.getSpan(X, ge);
                            return ge += He,
                            je + He
                        }
                        , 0)
                    } catch {
                        throw new RangeError("indeterminate span")
                    }
                    return Ee
                }
                decode(X, ge=0) {
                    b(X);
                    const Ee = this.makeDestinationObject();
                    for (const je of this.fields)
                        if (je.property !== void 0 && (Ee[je.property] = je.decode(X, ge)),
                        ge += je.getSpan(X, ge),
                        this.decodePrefixes && X.length === ge)
                            break;
                    return Ee
                }
                encode(X, ge, Ee=0) {
                    const je = Ee;
                    let Re = 0
                      , He = 0;
                    for (const st of this.fields) {
                        let _t = st.span;
                        if (He = 0 < _t ? _t : 0,
                        st.property !== void 0) {
                            const ft = X[st.property];
                            ft !== void 0 && (He = st.encode(ft, ge, Ee),
                            0 > _t && (_t = st.getSpan(ge, Ee)))
                        }
                        Re = Ee,
                        Ee += _t
                    }
                    return Re + He - je
                }
                fromArray(X) {
                    const ge = this.makeDestinationObject();
                    for (const Ee of this.fields)
                        Ee.property !== void 0 && 0 < X.length && (ge[Ee.property] = X.shift());
                    return ge
                }
                layoutFor(X) {
                    if (typeof X != "string")
                        throw new TypeError("property must be string");
                    for (const ge of this.fields)
                        if (ge.property === X)
                            return ge
                }
                offsetOf(X) {
                    if (typeof X != "string")
                        throw new TypeError("property must be string");
                    let ge = 0;
                    for (const Ee of this.fields) {
                        if (Ee.property === X)
                            return ge;
                        0 > Ee.span ? ge = -1 : 0 <= ge && (ge += Ee.span)
                    }
                }
            }
            l = te;
            class Z {
                constructor(X) {
                    this.property = X
                }
                decode(X, ge) {
                    throw new Error("UnionDiscriminator is abstract")
                }
                encode(X, ge, Ee) {
                    throw new Error("UnionDiscriminator is abstract")
                }
            }
            l = Z;
            class F extends Z {
                constructor(X, ge) {
                    if (!(X instanceof h && X.isCount()))
                        throw new TypeError("layout must be an unsigned integer ExternalLayout");
                    super(ge || X.property || "variant"),
                    this.layout = X
                }
                decode(X, ge) {
                    return this.layout.decode(X, ge)
                }
                encode(X, ge, Ee) {
                    return this.layout.encode(X, ge, Ee)
                }
            }
            l = F;
            class D extends o {
                constructor(X, ge, Ee) {
                    let je;
                    if (X instanceof _ || X instanceof w)
                        je = new F(new E(X));
                    else if (X instanceof h && X.isCount())
                        je = new F(X);
                    else if (X instanceof Z)
                        je = X;
                    else
                        throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    if (ge === void 0 && (ge = null),
                    !(ge === null || ge instanceof o))
                        throw new TypeError("defaultLayout must be null or a Layout");
                    if (ge !== null) {
                        if (0 > ge.span)
                            throw new Error("defaultLayout must have constant span");
                        ge.property === void 0 && (ge = ge.replicate("content"))
                    }
                    let Re = -1;
                    ge && (Re = ge.span,
                    0 <= Re && (X instanceof _ || X instanceof w) && (Re += je.layout.span)),
                    super(Re, Ee),
                    this.discriminator = je,
                    this.usesPrefixDiscriminator = X instanceof _ || X instanceof w,
                    this.defaultLayout = ge,
                    this.registry = {};
                    let He = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(st) {
                        return He(st)
                    }
                    ,
                    this.configGetSourceVariant = function(st) {
                        He = st.bind(this)
                    }
                }
                getSpan(X, ge=0) {
                    if (0 <= this.span)
                        return this.span;
                    const Ee = this.getVariant(X, ge);
                    if (!Ee)
                        throw new Error("unable to determine span for unrecognized variant");
                    return Ee.getSpan(X, ge)
                }
                defaultGetSourceVariant(X) {
                    if (Object.prototype.hasOwnProperty.call(X, this.discriminator.property)) {
                        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(X, this.defaultLayout.property))
                            return;
                        const ge = this.registry[X[this.discriminator.property]];
                        if (ge && (!ge.layout || ge.property && Object.prototype.hasOwnProperty.call(X, ge.property)))
                            return ge
                    } else
                        for (const ge in this.registry) {
                            const Ee = this.registry[ge];
                            if (Ee.property && Object.prototype.hasOwnProperty.call(X, Ee.property))
                                return Ee
                        }
                    throw new Error("unable to infer src variant")
                }
                decode(X, ge=0) {
                    let Ee;
                    const je = this.discriminator
                      , Re = je.decode(X, ge)
                      , He = this.registry[Re];
                    if (He === void 0) {
                        const st = this.defaultLayout;
                        let _t = 0;
                        this.usesPrefixDiscriminator && (_t = je.layout.span),
                        Ee = this.makeDestinationObject(),
                        Ee[je.property] = Re,
                        Ee[st.property] = st.decode(X, ge + _t)
                    } else
                        Ee = He.decode(X, ge);
                    return Ee
                }
                encode(X, ge, Ee=0) {
                    const je = this.getSourceVariant(X);
                    if (je === void 0) {
                        const Re = this.discriminator
                          , He = this.defaultLayout;
                        let st = 0;
                        return this.usesPrefixDiscriminator && (st = Re.layout.span),
                        Re.encode(X[Re.property], ge, Ee),
                        st + He.encode(X[He.property], ge, Ee + st)
                    }
                    return je.encode(X, ge, Ee)
                }
                addVariant(X, ge, Ee) {
                    const je = new T(this,X,ge,Ee);
                    return this.registry[X] = je,
                    je
                }
                getVariant(X, ge=0) {
                    let Ee;
                    return X instanceof Uint8Array ? Ee = this.discriminator.decode(X, ge) : Ee = X,
                    this.registry[Ee]
                }
            }
            l = D;
            class T extends o {
                constructor(X, ge, Ee, je) {
                    if (!(X instanceof D))
                        throw new TypeError("union must be a Union");
                    if (!Number.isInteger(ge) || 0 > ge)
                        throw new TypeError("variant must be a (non-negative) integer");
                    if (typeof Ee == "string" && je === void 0 && (je = Ee,
                    Ee = null),
                    Ee) {
                        if (!(Ee instanceof o))
                            throw new TypeError("layout must be a Layout");
                        if (X.defaultLayout !== null && 0 <= Ee.span && Ee.span > X.defaultLayout.span)
                            throw new Error("variant span exceeds span of containing union");
                        if (typeof je != "string")
                            throw new TypeError("variant must have a String property")
                    }
                    let Re = X.span;
                    0 > X.span && (Re = Ee ? Ee.span : 0,
                    0 <= Re && X.usesPrefixDiscriminator && (Re += X.discriminator.layout.span)),
                    super(Re, je),
                    this.union = X,
                    this.variant = ge,
                    this.layout = Ee || null
                }
                getSpan(X, ge=0) {
                    if (0 <= this.span)
                        return this.span;
                    let Ee = 0;
                    this.union.usesPrefixDiscriminator && (Ee = this.union.discriminator.layout.span);
                    let je = 0;
                    return this.layout && (je = this.layout.getSpan(X, ge + Ee)),
                    Ee + je
                }
                decode(X, ge=0) {
                    const Ee = this.makeDestinationObject();
                    if (this !== this.union.getVariant(X, ge))
                        throw new Error("variant mismatch");
                    let je = 0;
                    return this.union.usesPrefixDiscriminator && (je = this.union.discriminator.layout.span),
                    this.layout ? Ee[this.property] = this.layout.decode(X, ge + je) : this.property ? Ee[this.property] = !0 : this.union.usesPrefixDiscriminator && (Ee[this.union.discriminator.property] = this.variant),
                    Ee
                }
                encode(X, ge, Ee=0) {
                    let je = 0;
                    if (this.union.usesPrefixDiscriminator && (je = this.union.discriminator.layout.span),
                    this.layout && !Object.prototype.hasOwnProperty.call(X, this.property))
                        throw new TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, ge, Ee);
                    let Re = je;
                    if (this.layout && (this.layout.encode(X[this.property], ge, Ee + je),
                    Re += this.layout.getSpan(ge, Ee + je),
                    0 <= this.union.span && Re > this.union.span))
                        throw new Error("encoded variant overruns containing union");
                    return Re
                }
                fromArray(X) {
                    if (this.layout)
                        return this.layout.fromArray(X)
                }
            }
            l = T;
            function P(z) {
                return 0 > z && (z += 4294967296),
                z
            }
            class C extends o {
                constructor(X, ge, Ee) {
                    if (!(X instanceof _ || X instanceof w))
                        throw new TypeError("word must be a UInt or UIntBE layout");
                    if (typeof ge == "string" && Ee === void 0 && (Ee = ge,
                    ge = !1),
                    4 < X.span)
                        throw new RangeError("word cannot exceed 32 bits");
                    super(X.span, Ee),
                    this.word = X,
                    this.msb = !!ge,
                    this.fields = [];
                    let je = 0;
                    this._packedSetValue = function(Re) {
                        return je = P(Re),
                        this
                    }
                    ,
                    this._packedGetValue = function() {
                        return je
                    }
                }
                decode(X, ge=0) {
                    const Ee = this.makeDestinationObject()
                      , je = this.word.decode(X, ge);
                    this._packedSetValue(je);
                    for (const Re of this.fields)
                        Re.property !== void 0 && (Ee[Re.property] = Re.decode(X));
                    return Ee
                }
                encode(X, ge, Ee=0) {
                    const je = this.word.decode(ge, Ee);
                    this._packedSetValue(je);
                    for (const Re of this.fields)
                        if (Re.property !== void 0) {
                            const He = X[Re.property];
                            He !== void 0 && Re.encode(He)
                        }
                    return this.word.encode(this._packedGetValue(), ge, Ee)
                }
                addField(X, ge) {
                    const Ee = new q(this,X,ge);
                    return this.fields.push(Ee),
                    Ee
                }
                addBoolean(X) {
                    const ge = new $(this,X);
                    return this.fields.push(ge),
                    ge
                }
                fieldFor(X) {
                    if (typeof X != "string")
                        throw new TypeError("property must be string");
                    for (const ge of this.fields)
                        if (ge.property === X)
                            return ge
                }
            }
            l = C;
            class q {
                constructor(X, ge, Ee) {
                    if (!(X instanceof C))
                        throw new TypeError("container must be a BitStructure");
                    if (!Number.isInteger(ge) || 0 >= ge)
                        throw new TypeError("bits must be positive integer");
                    const je = 8 * X.span
                      , Re = X.fields.reduce( (He, st) => He + st.bits, 0);
                    if (ge + Re > je)
                        throw new Error("bits too long for span remainder (" + (je - Re) + " of " + je + " remain)");
                    this.container = X,
                    this.bits = ge,
                    this.valueMask = (1 << ge) - 1,
                    ge === 32 && (this.valueMask = 4294967295),
                    this.start = Re,
                    this.container.msb && (this.start = je - Re - ge),
                    this.wordMask = P(this.valueMask << this.start),
                    this.property = Ee
                }
                decode(X, ge) {
                    const Ee = this.container._packedGetValue();
                    return P(Ee & this.wordMask) >>> this.start
                }
                encode(X) {
                    if (typeof X != "number" || !Number.isInteger(X) || X !== P(X & this.valueMask))
                        throw new TypeError(c("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    const ge = this.container._packedGetValue()
                      , Ee = P(X << this.start);
                    this.container._packedSetValue(P(ge & ~this.wordMask) | Ee)
                }
            }
            l = q;
            class $ extends q {
                constructor(X, ge) {
                    super(X, 1, ge)
                }
                decode(X, ge) {
                    return !!super.decode(X, ge)
                }
                encode(X) {
                    typeof X == "boolean" && (X = +X),
                    super.encode(X)
                }
            }
            l = $;
            class ie extends o {
                constructor(X, ge) {
                    if (!(X instanceof h && X.isCount() || Number.isInteger(X) && 0 <= X))
                        throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let Ee = -1;
                    X instanceof h || (Ee = X),
                    super(Ee, ge),
                    this.length = X
                }
                getSpan(X, ge) {
                    let Ee = this.span;
                    return 0 > Ee && (Ee = this.length.decode(X, ge)),
                    Ee
                }
                decode(X, ge=0) {
                    let Ee = this.span;
                    return 0 > Ee && (Ee = this.length.decode(X, ge)),
                    f(X).slice(ge, ge + Ee)
                }
                encode(X, ge, Ee) {
                    let je = this.length;
                    if (this.length instanceof h && (je = X.length),
                    !(X instanceof Uint8Array && je === X.length))
                        throw new TypeError(c("Blob.encode", this) + " requires (length " + je + ") Uint8Array as src");
                    if (Ee + je > ge.length)
                        throw new RangeError("encoding overruns Uint8Array");
                    const Re = f(X);
                    return f(ge).write(Re.toString("hex"), Ee, je, "hex"),
                    this.length instanceof h && this.length.encode(je, ge, Ee),
                    je
                }
            }
            l = ie;
            class he extends o {
                constructor(X) {
                    super(-1, X)
                }
                getSpan(X, ge=0) {
                    b(X);
                    let Ee = ge;
                    for (; Ee < X.length && X[Ee] !== 0; )
                        Ee += 1;
                    return 1 + Ee - ge
                }
                decode(X, ge=0) {
                    const Ee = this.getSpan(X, ge);
                    return f(X).slice(ge, ge + Ee - 1).toString("utf-8")
                }
                encode(X, ge, Ee=0) {
                    typeof X != "string" && (X = String(X));
                    const je = g.Buffer.from(X, "utf8")
                      , Re = je.length;
                    if (Ee + Re > ge.length)
                        throw new RangeError("encoding overruns Buffer");
                    const He = f(ge);
                    return je.copy(He, Ee),
                    He[Ee + Re] = 0,
                    Re + 1
                }
            }
            l = he;
            class ce extends o {
                constructor(X, ge) {
                    if (typeof X == "string" && ge === void 0 && (ge = X,
                    X = void 0),
                    X === void 0)
                        X = -1;
                    else if (!Number.isInteger(X))
                        throw new TypeError("maxSpan must be an integer");
                    super(-1, ge),
                    this.maxSpan = X
                }
                getSpan(X, ge=0) {
                    return b(X),
                    X.length - ge
                }
                decode(X, ge=0) {
                    const Ee = this.getSpan(X, ge);
                    if (0 <= this.maxSpan && this.maxSpan < Ee)
                        throw new RangeError("text length exceeds maxSpan");
                    return f(X).slice(ge, ge + Ee).toString("utf-8")
                }
                encode(X, ge, Ee=0) {
                    typeof X != "string" && (X = String(X));
                    const je = g.Buffer.from(X, "utf8")
                      , Re = je.length;
                    if (0 <= this.maxSpan && this.maxSpan < Re)
                        throw new RangeError("text length exceeds maxSpan");
                    if (Ee + Re > ge.length)
                        throw new RangeError("encoding overruns Buffer");
                    return je.copy(f(ge), Ee),
                    Re
                }
            }
            l = ce;
            class U extends o {
                constructor(X, ge) {
                    super(0, ge),
                    this.value = X
                }
                decode(X, ge) {
                    return this.value
                }
                encode(X, ge, Ee) {
                    return 0
                }
            }
            l = U,
            l = ( (z, X) => new v(z,X)),
            s.cY = ( (z, X, ge) => new E(z,X,ge)),
            s.u8 = (z => new _(1,z)),
            s.NX = (z => new _(2,z)),
            l = (z => new _(3,z)),
            s.DH = (z => new _(4,z)),
            l = (z => new _(5,z)),
            l = (z => new _(6,z)),
            s.I0 = (z => new k(z)),
            l = (z => new w(2,z)),
            l = (z => new w(3,z)),
            l = (z => new w(4,z)),
            l = (z => new w(5,z)),
            l = (z => new w(6,z)),
            l = (z => new W(z)),
            l = (z => new S(1,z)),
            l = (z => new S(2,z)),
            l = (z => new S(3,z)),
            l = (z => new S(4,z)),
            l = (z => new S(5,z)),
            l = (z => new S(6,z)),
            s.Wg = (z => new G(z)),
            l = (z => new I(2,z)),
            l = (z => new I(3,z)),
            l = (z => new I(4,z)),
            l = (z => new I(5,z)),
            l = (z => new I(6,z)),
            l = (z => new Y(z)),
            l = (z => new j(z)),
            l = (z => new V(z)),
            l = (z => new ee(z)),
            l = (z => new re(z)),
            s.w3 = ( (z, X, ge) => new te(z,X,ge)),
            l = ( (z, X, ge) => new C(z,X,ge)),
            s.O6 = ( (z, X, ge) => new se(z,X,ge)),
            l = ( (z, X, ge) => new D(z,X,ge)),
            l = ( (z, X) => new F(z,X)),
            s.av = ( (z, X) => new ie(z,X)),
            l = (z => new he(z)),
            l = ( (z, X) => new ce(z,X)),
            l = ( (z, X) => new U(z,X))
        }
        ),
        920: ( (H, s, y) => {
            "use strict";
            var l = y(69675)
              , g = y(58859)
              , b = y(14803)
              , f = y(80507)
              , o = y(72271)
              , c = o || f || b;
            H.exports = function() {
                var h, v = {
                    assert: function(E) {
                        if (!v.has(E))
                            throw new l("Side channel does not contain " + g(E))
                    },
                    delete: function(E) {
                        return !!h && h.delete(E)
                    },
                    get: function(E) {
                        return h && h.get(E)
                    },
                    has: function(E) {
                        return !!h && h.has(E)
                    },
                    set: function(E, _) {
                        h || (h = c()),
                        h.set(E, _)
                    }
                };
                return v
            }
        }
        ),
        1093: (H => {
            "use strict";
            var s = Object.prototype.toString;
            H.exports = function(l) {
                var g = s.call(l)
                  , b = g === "[object Arguments]";
                return b || (b = g !== "[object Array]" && l !== null && typeof l == "object" && typeof l.length == "number" && l.length >= 0 && s.call(l.callee) === "[object Function]"),
                b
            }
        }
        ),
        1189: ( (H, s, y) => {
            "use strict";
            var l = Array.prototype.slice
              , g = y(1093)
              , b = Object.keys
              , f = b ? function(u) {
                return b(u)
            }
            : y(28875)
              , o = Object.keys;
            f.shim = function() {
                if (Object.keys) {
                    var u = (function() {
                        var h = Object.keys(arguments);
                        return h && h.length === arguments.length
                    }
                    )(1, 2);
                    u || (Object.keys = function(v) {
                        return g(v) ? o(l.call(v)) : o(v)
                    }
                    )
                } else
                    Object.keys = f;
                return Object.keys || f
            }
            ,
            H.exports = f
        }
        ),
        1201: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.number = s.getBigInt = s.assertNumberLength = s.getLength = s.isSigned = void 0;
            const l = y(65534)
              , g = y(49334)
              , b = y(76291)
              , f = /^u?int(?<length>[0-9]*)?$/u
              , o = v => !v.startsWith("u");
            s.isSigned = o;
            const c = v => {
                if (v === "int" || v === "uint")
                    return 256;
                const E = v.match(f);
                (0,
                l.assert)(E?.groups?.length, new g.ParserError(`Invalid number type. Expected a number type, but received "${v}".`));
                const _ = parseInt(E.groups.length, 10);
                return (0,
                l.assert)(_ >= 8 && _ <= 256, new g.ParserError(`Invalid number length. Expected a number between 8 and 256, but received "${v}".`)),
                (0,
                l.assert)(_ % 8 === 0, new g.ParserError(`Invalid number length. Expected a multiple of 8, but received "${v}".`)),
                _
            }
            ;
            s.getLength = c;
            const u = (v, E) => {
                const _ = (0,
                s.getLength)(E)
                  , w = BigInt(2) ** BigInt(_ - ((0,
                s.isSigned)(E) ? 1 : 0)) - BigInt(1);
                if ((0,
                s.isSigned)(E)) {
                    (0,
                    l.assert)(v >= -(w + BigInt(1)) && v <= w, new g.ParserError(`Number "${v}" is out of range for type "${E}".`));
                    return
                }
                (0,
                l.assert)(v <= w, new g.ParserError(`Number "${v}" is out of range for type "${E}".`))
            }
            ;
            s.assertNumberLength = u;
            const h = v => {
                try {
                    return (0,
                    l.createBigInt)(v)
                } catch {
                    throw new g.ParserError(`Invalid number. Expected a valid number value, but received "${v}".`)
                }
            }
            ;
            s.getBigInt = h,
            s.number = {
                isDynamic: !1,
                isType(v) {
                    return f.test(v)
                },
                getByteLength() {
                    return 32
                },
                encode({type: v, buffer: E, value: _, packed: w}) {
                    const S = (0,
                    s.getBigInt)(_);
                    if ((0,
                    s.assertNumberLength)(S, v),
                    (0,
                    s.isSigned)(v)) {
                        if (w) {
                            const I = (0,
                            s.getLength)(v) / 8;
                            return (0,
                            l.concatBytes)([E, (0,
                            l.signedBigIntToBytes)(S, I)])
                        }
                        return (0,
                        l.concatBytes)([E, (0,
                        b.padStart)((0,
                        l.signedBigIntToBytes)(S, 32))])
                    }
                    if (w) {
                        const I = (0,
                        s.getLength)(v) / 8;
                        return (0,
                        l.concatBytes)([E, (0,
                        b.padStart)((0,
                        l.bigIntToBytes)(S), I)])
                    }
                    return (0,
                    l.concatBytes)([E, (0,
                    b.padStart)((0,
                    l.bigIntToBytes)(S))])
                },
                decode({type: v, value: E}) {
                    const _ = E.subarray(0, 32);
                    if ((0,
                    s.isSigned)(v)) {
                        const S = (0,
                        l.bytesToSignedBigInt)(_);
                        return (0,
                        s.assertNumberLength)(S, v),
                        S
                    }
                    const w = (0,
                    l.bytesToBigInt)(_);
                    return (0,
                    s.assertNumberLength)(w, v),
                    w
                }
            }
        }
        ),
        1307: (function(H, s, y) {
            "use strict";
            var l = this && this.__createBinding || (Object.create ? (function(T, P, C, q) {
                q === void 0 && (q = C);
                var $ = Object.getOwnPropertyDescriptor(P, C);
                (!$ || ("get"in $ ? !P.__esModule : $.writable || $.configurable)) && ($ = {
                    enumerable: !0,
                    get: function() {
                        return P[C]
                    }
                }),
                Object.defineProperty(T, q, $)
            }
            ) : (function(T, P, C, q) {
                q === void 0 && (q = C),
                T[q] = P[C]
            }
            ))
              , g = this && this.__exportStar || function(T, P) {
                for (var C in T)
                    C !== "default" && !Object.prototype.hasOwnProperty.call(P, C) && l(P, T, C)
            }
            ;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.safeSignVerify = s.safeSign = s.getMethodId = s.base32Encode = s.base32Decode = s.crc32c = s.crc16 = s.fromNano = s.toNano = s.ComputeError = s.openContract = s.TupleBuilder = s.TupleReader = s.serializeTupleItem = s.parseTupleItem = s.serializeTuple = s.parseTuple = s.generateMerkleUpdate = s.generateMerkleProofDirect = s.generateMerkleProof = s.exoticPruned = s.exoticMerkleUpdate = s.convertToMerkleProof = s.exoticMerkleProof = s.Dictionary = s.Cell = s.CellType = s.Slice = s.beginCell = s.Builder = s.BitBuilder = s.BitReader = s.BitString = s.contractAddress = s.ADNLAddress = s.ExternalAddress = s.address = s.Address = void 0;
            var b = y(3512);
            Object.defineProperty(s, "Address", {
                enumerable: !0,
                get: function() {
                    return b.Address
                }
            }),
            Object.defineProperty(s, "address", {
                enumerable: !0,
                get: function() {
                    return b.address
                }
            });
            var f = y(71629);
            Object.defineProperty(s, "ExternalAddress", {
                enumerable: !0,
                get: function() {
                    return f.ExternalAddress
                }
            });
            var o = y(4061);
            Object.defineProperty(s, "ADNLAddress", {
                enumerable: !0,
                get: function() {
                    return o.ADNLAddress
                }
            });
            var c = y(88986);
            Object.defineProperty(s, "contractAddress", {
                enumerable: !0,
                get: function() {
                    return c.contractAddress
                }
            });
            var u = y(62386);
            Object.defineProperty(s, "BitString", {
                enumerable: !0,
                get: function() {
                    return u.BitString
                }
            });
            var h = y(53528);
            Object.defineProperty(s, "BitReader", {
                enumerable: !0,
                get: function() {
                    return h.BitReader
                }
            });
            var v = y(49924);
            Object.defineProperty(s, "BitBuilder", {
                enumerable: !0,
                get: function() {
                    return v.BitBuilder
                }
            });
            var E = y(65871);
            Object.defineProperty(s, "Builder", {
                enumerable: !0,
                get: function() {
                    return E.Builder
                }
            }),
            Object.defineProperty(s, "beginCell", {
                enumerable: !0,
                get: function() {
                    return E.beginCell
                }
            });
            var _ = y(56906);
            Object.defineProperty(s, "Slice", {
                enumerable: !0,
                get: function() {
                    return _.Slice
                }
            });
            var w = y(34654);
            Object.defineProperty(s, "CellType", {
                enumerable: !0,
                get: function() {
                    return w.CellType
                }
            });
            var S = y(66902);
            Object.defineProperty(s, "Cell", {
                enumerable: !0,
                get: function() {
                    return S.Cell
                }
            });
            var I = y(97590);
            Object.defineProperty(s, "Dictionary", {
                enumerable: !0,
                get: function() {
                    return I.Dictionary
                }
            });
            var R = y(31459);
            Object.defineProperty(s, "exoticMerkleProof", {
                enumerable: !0,
                get: function() {
                    return R.exoticMerkleProof
                }
            }),
            Object.defineProperty(s, "convertToMerkleProof", {
                enumerable: !0,
                get: function() {
                    return R.convertToMerkleProof
                }
            });
            var M = y(91408);
            Object.defineProperty(s, "exoticMerkleUpdate", {
                enumerable: !0,
                get: function() {
                    return M.exoticMerkleUpdate
                }
            });
            var O = y(79499);
            Object.defineProperty(s, "exoticPruned", {
                enumerable: !0,
                get: function() {
                    return O.exoticPruned
                }
            });
            var k = y(78981);
            Object.defineProperty(s, "generateMerkleProof", {
                enumerable: !0,
                get: function() {
                    return k.generateMerkleProof
                }
            }),
            Object.defineProperty(s, "generateMerkleProofDirect", {
                enumerable: !0,
                get: function() {
                    return k.generateMerkleProofDirect
                }
            });
            var W = y(42230);
            Object.defineProperty(s, "generateMerkleUpdate", {
                enumerable: !0,
                get: function() {
                    return W.generateMerkleUpdate
                }
            });
            var G = y(21640);
            Object.defineProperty(s, "parseTuple", {
                enumerable: !0,
                get: function() {
                    return G.parseTuple
                }
            }),
            Object.defineProperty(s, "serializeTuple", {
                enumerable: !0,
                get: function() {
                    return G.serializeTuple
                }
            }),
            Object.defineProperty(s, "parseTupleItem", {
                enumerable: !0,
                get: function() {
                    return G.parseTupleItem
                }
            }),
            Object.defineProperty(s, "serializeTupleItem", {
                enumerable: !0,
                get: function() {
                    return G.serializeTupleItem
                }
            });
            var Y = y(21155);
            Object.defineProperty(s, "TupleReader", {
                enumerable: !0,
                get: function() {
                    return Y.TupleReader
                }
            });
            var j = y(44117);
            Object.defineProperty(s, "TupleBuilder", {
                enumerable: !0,
                get: function() {
                    return j.TupleBuilder
                }
            }),
            g(y(73814), s);
            var V = y(84742);
            Object.defineProperty(s, "openContract", {
                enumerable: !0,
                get: function() {
                    return V.openContract
                }
            });
            var ee = y(55121);
            Object.defineProperty(s, "ComputeError", {
                enumerable: !0,
                get: function() {
                    return ee.ComputeError
                }
            });
            var re = y(97070);
            Object.defineProperty(s, "toNano", {
                enumerable: !0,
                get: function() {
                    return re.toNano
                }
            }),
            Object.defineProperty(s, "fromNano", {
                enumerable: !0,
                get: function() {
                    return re.fromNano
                }
            });
            var se = y(92960);
            Object.defineProperty(s, "crc16", {
                enumerable: !0,
                get: function() {
                    return se.crc16
                }
            });
            var te = y(29429);
            Object.defineProperty(s, "crc32c", {
                enumerable: !0,
                get: function() {
                    return te.crc32c
                }
            });
            var Z = y(53721);
            Object.defineProperty(s, "base32Decode", {
                enumerable: !0,
                get: function() {
                    return Z.base32Decode
                }
            }),
            Object.defineProperty(s, "base32Encode", {
                enumerable: !0,
                get: function() {
                    return Z.base32Encode
                }
            });
            var F = y(65149);
            Object.defineProperty(s, "getMethodId", {
                enumerable: !0,
                get: function() {
                    return F.getMethodId
                }
            });
            var D = y(90109);
            Object.defineProperty(s, "safeSign", {
                enumerable: !0,
                get: function() {
                    return D.safeSign
                }
            }),
            Object.defineProperty(s, "safeSignVerify", {
                enumerable: !0,
                get: function() {
                    return D.safeSignVerify
                }
            })
        }
        ),
        1697: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = u;
            var l = b(y(83399))
              , g = b(y(78644));
            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            var f = {
                loose: !1
            }
              , o = ["true", "false", "1", "0"]
              , c = [].concat(o, ["yes", "no"]);
            function u(h) {
                var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
                return (0,
                l.default)(h),
                v.loose ? (0,
                g.default)(c, h.toLowerCase()) : (0,
                g.default)(o, h)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        2056: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = o;
            var l = b(y(83399))
              , g = b(y(71229));
            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var f = {
                ignore_whitespace: !1
            };
            function o(c, u) {
                return (0,
                l.default)(c),
                u = (0,
                g.default)(u, f),
                (u.ignore_whitespace ? c.trim().length : c.length) === 0
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        2955: ( (H, s, y) => {
            "use strict";
            var l = y(65606), g;
            function b(Y, j, V) {
                return j = f(j),
                j in Y ? Object.defineProperty(Y, j, {
                    value: V,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : Y[j] = V,
                Y
            }
            function f(Y) {
                var j = o(Y, "string");
                return typeof j == "symbol" ? j : String(j)
            }
            function o(Y, j) {
                if (typeof Y != "object" || Y === null)
                    return Y;
                var V = Y[Symbol.toPrimitive];
                if (V !== void 0) {
                    var ee = V.call(Y, j || "default");
                    if (typeof ee != "object")
                        return ee;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (j === "string" ? String : Number)(Y)
            }
            var c = y(86238)
              , u = Symbol("lastResolve")
              , h = Symbol("lastReject")
              , v = Symbol("error")
              , E = Symbol("ended")
              , _ = Symbol("lastPromise")
              , w = Symbol("handlePromise")
              , S = Symbol("stream");
            function I(Y, j) {
                return {
                    value: Y,
                    done: j
                }
            }
            function R(Y) {
                var j = Y[u];
                if (j !== null) {
                    var V = Y[S].read();
                    V !== null && (Y[_] = null,
                    Y[u] = null,
                    Y[h] = null,
                    j(I(V, !1)))
                }
            }
            function M(Y) {
                l.nextTick(R, Y)
            }
            function O(Y, j) {
                return function(V, ee) {
                    Y.then(function() {
                        if (j[E]) {
                            V(I(void 0, !0));
                            return
                        }
                        j[w](V, ee)
                    }, ee)
                }
            }
            var k = Object.getPrototypeOf(function() {})
              , W = Object.setPrototypeOf((g = {
                get stream() {
                    return this[S]
                },
                next: function() {
                    var j = this
                      , V = this[v];
                    if (V !== null)
                        return Promise.reject(V);
                    if (this[E])
                        return Promise.resolve(I(void 0, !0));
                    if (this[S].destroyed)
                        return new Promise(function(te, Z) {
                            l.nextTick(function() {
                                j[v] ? Z(j[v]) : te(I(void 0, !0))
                            })
                        }
                        );
                    var ee = this[_], re;
                    if (ee)
                        re = new Promise(O(ee, this));
                    else {
                        var se = this[S].read();
                        if (se !== null)
                            return Promise.resolve(I(se, !1));
                        re = new Promise(this[w])
                    }
                    return this[_] = re,
                    re
                }
            },
            b(g, Symbol.asyncIterator, function() {
                return this
            }),
            b(g, "return", function() {
                var j = this;
                return new Promise(function(V, ee) {
                    j[S].destroy(null, function(re) {
                        if (re) {
                            ee(re);
                            return
                        }
                        V(I(void 0, !0))
                    })
                }
                )
            }),
            g), k)
              , G = function(j) {
                var V, ee = Object.create(W, (V = {},
                b(V, S, {
                    value: j,
                    writable: !0
                }),
                b(V, u, {
                    value: null,
                    writable: !0
                }),
                b(V, h, {
                    value: null,
                    writable: !0
                }),
                b(V, v, {
                    value: null,
                    writable: !0
                }),
                b(V, E, {
                    value: j._readableState.endEmitted,
                    writable: !0
                }),
                b(V, w, {
                    value: function(se, te) {
                        var Z = ee[S].read();
                        Z ? (ee[_] = null,
                        ee[u] = null,
                        ee[h] = null,
                        se(I(Z, !1))) : (ee[u] = se,
                        ee[h] = te)
                    },
                    writable: !0
                }),
                V));
                return ee[_] = null,
                c(j, function(re) {
                    if (re && re.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                        var se = ee[h];
                        se !== null && (ee[_] = null,
                        ee[u] = null,
                        ee[h] = null,
                        se(re)),
                        ee[v] = re;
                        return
                    }
                    var te = ee[u];
                    te !== null && (ee[_] = null,
                    ee[u] = null,
                    ee[h] = null,
                    te(I(void 0, !0))),
                    ee[E] = !0
                }),
                j.on("readable", M.bind(null, ee)),
                ee
            };
            H.exports = G
        }
        ),
        3158: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = f;
            var l = g(y(83399));
            function g(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }
            var b = new Set(["004", "008", "010", "012", "016", "020", "024", "028", "031", "032", "036", "040", "044", "048", "050", "051", "052", "056", "060", "064", "068", "070", "072", "074", "076", "084", "086", "090", "092", "096", "100", "104", "108", "112", "116", "120", "124", "132", "136", "140", "144", "148", "152", "156", "158", "162", "166", "170", "174", "175", "178", "180", "184", "188", "191", "192", "196", "203", "204", "208", "212", "214", "218", "222", "226", "231", "232", "233", "234", "238", "239", "242", "246", "248", "250", "254", "258", "260", "262", "266", "268", "270", "275", "276", "288", "292", "296", "300", "304", "308", "312", "316", "320", "324", "328", "332", "334", "336", "340", "344", "348", "352", "356", "360", "364", "368", "372", "376", "380", "384", "388", "392", "398", "400", "404", "408", "410", "414", "417", "418", "422", "426", "428", "430", "434", "438", "440", "442", "446", "450", "454", "458", "462", "466", "470", "474", "478", "480", "484", "492", "496", "498", "499", "500", "504", "508", "512", "516", "520", "524", "528", "531", "533", "534", "535", "540", "548", "554", "558", "562", "566", "570", "574", "578", "580", "581", "583", "584", "585", "586", "591", "598", "600", "604", "608", "612", "616", "620", "624", "626", "630", "634", "638", "642", "643", "646", "652", "654", "659", "660", "662", "663", "666", "670", "674", "678", "682", "686", "688", "690", "694", "702", "703", "704", "705", "706", "710", "716", "724", "728", "729", "732", "740", "744", "748", "752", "756", "760", "762", "764", "768", "772", "776", "780", "784", "788", "792", "795", "796", "798", "800", "804", "807", "818", "826", "831", "832", "833", "834", "840", "850", "854", "858", "860", "862", "876", "882", "887", "894"]);
            function f(o) {
                return (0,
                l.default)(o),
                b.has(o)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        3196: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = v;
            var l = g(y(83399));
            function g(E) {
                return E && E.__esModule ? E : {
                    default: E
                }
            }
            var b = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/
              , f = /^([0-9a-fA-F]){12}$/
              , o = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/
              , c = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/
              , u = /^([0-9a-fA-F]){16}$/
              , h = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
            function v(E, _) {
                return (0,
                l.default)(E),
                _ != null && _.eui && (_.eui = String(_.eui)),
                _ != null && _.no_colons || _ != null && _.no_separators ? _.eui === "48" ? f.test(E) : _.eui === "64" ? u.test(E) : f.test(E) || u.test(E) : _?.eui === "48" ? b.test(E) || o.test(E) : _?.eui === "64" ? c.test(E) || h.test(E) : v(E, {
                    eui: "48"
                }) || v(E, {
                    eui: "64"
                })
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        3273: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.WalletContractV1R3 = void 0;
            const g = y(1307)
              , b = y(20574);
            class f {
                static create(c) {
                    return new f(c.workchain,c.publicKey)
                }
                constructor(c, u) {
                    this.workchain = c,
                    this.publicKey = u;
                    let h = g.Cell.fromBoc(l.from("te6cckEBAQEAXwAAuv8AIN0gggFMl7ohggEznLqxnHGw7UTQ0x/XC//jBOCk8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVLW4bkI=", "base64"))[0]
                      , v = (0,
                    g.beginCell)().storeUint(0, 32).storeBuffer(u).endCell();
                    this.init = {
                        code: h,
                        data: v
                    },
                    this.address = (0,
                    g.contractAddress)(c, {
                        code: h,
                        data: v
                    })
                }
                async getBalance(c) {
                    return (await c.getState()).balance
                }
                async getSeqno(c) {
                    return (await c.getState()).state.type === "active" ? (await c.get("seqno", [])).stack.readNumber() : 0
                }
                async send(c, u) {
                    await c.external(u)
                }
                async sendTransfer(c, u) {
                    let h = this.createTransfer(u);
                    await this.send(c, h)
                }
                createTransfer(c) {
                    let u = g.SendMode.PAY_GAS_SEPARATELY;
                    return c.sendMode !== null && c.sendMode !== void 0 && (u = c.sendMode),
                    (0,
                    b.createWalletTransferV1)({
                        seqno: c.seqno,
                        sendMode: u,
                        secretKey: c.secretKey,
                        message: c.message
                    })
                }
                sender(c, u) {
                    return {
                        send: async h => {
                            let v = await this.getSeqno(c)
                              , E = this.createTransfer({
                                seqno: v,
                                secretKey: u,
                                sendMode: h.sendMode,
                                message: (0,
                                g.internal)({
                                    to: h.to,
                                    value: h.value,
                                    init: h.init,
                                    body: h.body,
                                    bounce: h.bounce
                                })
                            });
                            await this.send(c, E)
                        }
                    }
                }
            }
            s.WalletContractV1R3 = f
        }
        ),
        3512: (function(H, s, y) {
            "use strict";
            var l = y(48287).Buffer, g = this && this.__importDefault || function(w) {
                return w && w.__esModule ? w : {
                    default: w
                }
            }
            , b;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.address = s.Address = void 0;
            const f = g(y(29107))
              , o = y(92960)
              , c = 17
              , u = 81
              , h = 128;
            function v(w) {
                if (typeof w == "string" && !E.isFriendly(w))
                    throw new Error("Unknown address type");
                const S = l.isBuffer(w) ? w : l.from(w, "base64");
                if (S.length !== 36)
                    throw new Error("Unknown address type: byte length is not equal to 36");
                const I = S.subarray(0, 34)
                  , R = S.subarray(34, 36)
                  , M = (0,
                o.crc16)(I);
                if (!(M[0] === R[0] && M[1] === R[1]))
                    throw new Error("Invalid checksum: " + w);
                let O = I[0]
                  , k = !1
                  , W = !1;
                if (O & h && (k = !0,
                O = O ^ h),
                O !== c && O !== u)
                    throw "Unknown address tag";
                W = O === c;
                let G = null;
                I[1] === 255 ? G = -1 : G = I[1];
                const Y = I.subarray(2, 34);
                return {
                    isTestOnly: k,
                    isBounceable: W,
                    workchain: G,
                    hashPart: Y
                }
            }
            class E {
                static isAddress(S) {
                    return S instanceof E
                }
                static isFriendly(S) {
                    return !(S.length !== 48 || !/^[A-Za-z0-9+/_-]+$/.test(S))
                }
                static isRaw(S) {
                    if (S.indexOf(":") === -1)
                        return !1;
                    let[I,R] = S.split(":");
                    return !(!Number.isInteger(parseFloat(I)) || !/[a-f0-9]+/.test(R.toLowerCase()) || R.length !== 64)
                }
                static normalize(S) {
                    return typeof S == "string" ? E.parse(S).toString() : S.toString()
                }
                static parse(S) {
                    if (E.isFriendly(S))
                        return this.parseFriendly(S).address;
                    if (E.isRaw(S))
                        return this.parseRaw(S);
                    throw new Error("Unknown address type: " + S)
                }
                static parseRaw(S) {
                    let I = parseInt(S.split(":")[0])
                      , R = l.from(S.split(":")[1], "hex");
                    return new E(I,R)
                }
                static parseFriendly(S) {
                    if (l.isBuffer(S)) {
                        let I = v(S);
                        return {
                            isBounceable: I.isBounceable,
                            isTestOnly: I.isTestOnly,
                            address: new E(I.workchain,I.hashPart)
                        }
                    } else {
                        let I = S.replace(/\-/g, "+").replace(/_/g, "/")
                          , R = v(I);
                        return {
                            isBounceable: R.isBounceable,
                            isTestOnly: R.isTestOnly,
                            address: new E(R.workchain,R.hashPart)
                        }
                    }
                }
                constructor(S, I) {
                    if (this.toRawString = () => this.workChain + ":" + this.hash.toString("hex"),
                    this.toRaw = () => {
                        const R = l.alloc(36);
                        return R.set(this.hash),
                        R.set([this.workChain, this.workChain, this.workChain, this.workChain], 32),
                        R
                    }
                    ,
                    this.toStringBuffer = R => {
                        let M = R && R.testOnly !== void 0 ? R.testOnly : !1
                          , k = (R && R.bounceable !== void 0 ? R.bounceable : !0) ? c : u;
                        M && (k |= h);
                        const W = l.alloc(34);
                        W[0] = k,
                        W[1] = this.workChain,
                        W.set(this.hash, 2);
                        const G = l.alloc(36);
                        return G.set(W),
                        G.set((0,
                        o.crc16)(W), 34),
                        G
                    }
                    ,
                    this.toString = R => {
                        let M = R && R.urlSafe !== void 0 ? R.urlSafe : !0
                          , O = this.toStringBuffer(R);
                        return M ? O.toString("base64").replace(/\+/g, "-").replace(/\//g, "_") : O.toString("base64")
                    }
                    ,
                    this[b] = () => this.toString(),
                    I.length !== 32)
                        throw new Error("Invalid address hash length: " + I.length);
                    this.workChain = S,
                    this.hash = I,
                    Object.freeze(this)
                }
                equals(S) {
                    return S.workChain !== this.workChain ? !1 : S.hash.equals(this.hash)
                }
            }
            s.Address = E,
            b = f.default;
            function _(w) {
                return E.parse(w)
            }
            s.address = _
        }
        ),
        3918: ( (H, s, y) => {
            "use strict";
            var l = y(65606);
            function g(he, ce) {
                var U = Object.keys(he);
                if (Object.getOwnPropertySymbols) {
                    var z = Object.getOwnPropertySymbols(he);
                    ce && (z = z.filter(function(X) {
                        return Object.getOwnPropertyDescriptor(he, X).enumerable
                    })),
                    U.push.apply(U, z)
                }
                return U
            }
            function b(he) {
                for (var ce = 1; ce < arguments.length; ce++) {
                    var U = arguments[ce] != null ? arguments[ce] : {};
                    ce % 2 ? g(Object(U), !0).forEach(function(z) {
                        f(he, z, U[z])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(he, Object.getOwnPropertyDescriptors(U)) : g(Object(U)).forEach(function(z) {
                        Object.defineProperty(he, z, Object.getOwnPropertyDescriptor(U, z))
                    })
                }
                return he
            }
            function f(he, ce, U) {
                return ce = h(ce),
                ce in he ? Object.defineProperty(he, ce, {
                    value: U,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : he[ce] = U,
                he
            }
            function o(he, ce) {
                if (!(he instanceof ce))
                    throw new TypeError("Cannot call a class as a function")
            }
            function c(he, ce) {
                for (var U = 0; U < ce.length; U++) {
                    var z = ce[U];
                    z.enumerable = z.enumerable || !1,
                    z.configurable = !0,
                    "value"in z && (z.writable = !0),
                    Object.defineProperty(he, h(z.key), z)
                }
            }
            function u(he, ce, U) {
                return ce && c(he.prototype, ce),
                U && c(he, U),
                Object.defineProperty(he, "prototype", {
                    writable: !1
                }),
                he
            }
            function h(he) {
                var ce = v(he, "string");
                return G(ce) === "symbol" ? ce : String(ce)
            }
            function v(he, ce) {
                if (G(he) !== "object" || he === null)
                    return he;
                var U = he[Symbol.toPrimitive];
                if (U !== void 0) {
                    var z = U.call(he, ce || "default");
                    if (G(z) !== "object")
                        return z;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (ce === "string" ? String : Number)(he)
            }
            function E(he, ce) {
                if (typeof ce != "function" && ce !== null)
                    throw new TypeError("Super expression must either be null or a function");
                he.prototype = Object.create(ce && ce.prototype, {
                    constructor: {
                        value: he,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(he, "prototype", {
                    writable: !1
                }),
                ce && k(he, ce)
            }
            function _(he) {
                var ce = M();
                return function() {
                    var z = W(he), X;
                    if (ce) {
                        var ge = W(this).constructor;
                        X = Reflect.construct(z, arguments, ge)
                    } else
                        X = z.apply(this, arguments);
                    return w(this, X)
                }
            }
            function w(he, ce) {
                if (ce && (G(ce) === "object" || typeof ce == "function"))
                    return ce;
                if (ce !== void 0)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return S(he)
            }
            function S(he) {
                if (he === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return he
            }
            function I(he) {
                var ce = typeof Map == "function" ? new Map : void 0;
                return I = function(z) {
                    if (z === null || !O(z))
                        return z;
                    if (typeof z != "function")
                        throw new TypeError("Super expression must either be null or a function");
                    if (typeof ce < "u") {
                        if (ce.has(z))
                            return ce.get(z);
                        ce.set(z, X)
                    }
                    function X() {
                        return R(z, arguments, W(this).constructor)
                    }
                    return X.prototype = Object.create(z.prototype, {
                        constructor: {
                            value: X,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    k(X, z)
                }
                ,
                I(he)
            }
            function R(he, ce, U) {
                return M() ? R = Reflect.construct.bind() : R = function(X, ge, Ee) {
                    var je = [null];
                    je.push.apply(je, ge);
                    var Re = Function.bind.apply(X, je)
                      , He = new Re;
                    return Ee && k(He, Ee.prototype),
                    He
                }
                ,
                R.apply(null, arguments)
            }
            function M() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if (typeof Proxy == "function")
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch {
                    return !1
                }
            }
            function O(he) {
                return Function.toString.call(he).indexOf("[native code]") !== -1
            }
            function k(he, ce) {
                return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(z, X) {
                    return z.__proto__ = X,
                    z
                }
                ,
                k(he, ce)
            }
            function W(he) {
                return W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(U) {
                    return U.__proto__ || Object.getPrototypeOf(U)
                }
                ,
                W(he)
            }
            function G(he) {
                "@babel/helpers - typeof";
                return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ce) {
                    return typeof ce
                }
                : function(ce) {
                    return ce && typeof Symbol == "function" && ce.constructor === Symbol && ce !== Symbol.prototype ? "symbol" : typeof ce
                }
                ,
                G(he)
            }
            var Y = y(40537)
              , j = Y.inspect
              , V = y(69597)
              , ee = V.codes.ERR_INVALID_ARG_TYPE;
            function re(he, ce, U) {
                return (U === void 0 || U > he.length) && (U = he.length),
                he.substring(U - ce.length, U) === ce
            }
            function se(he, ce) {
                if (ce = Math.floor(ce),
                he.length == 0 || ce == 0)
                    return "";
                var U = he.length * ce;
                for (ce = Math.floor(Math.log(ce) / Math.log(2)); ce; )
                    he += he,
                    ce--;
                return he += he.substring(0, U - he.length),
                he
            }
            var te = ""
              , Z = ""
              , F = ""
              , D = ""
              , T = {
                deepStrictEqual: "Expected values to be strictly deep-equal:",
                strictEqual: "Expected values to be strictly equal:",
                strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                deepEqual: "Expected values to be loosely deep-equal:",
                equal: "Expected values to be loosely equal:",
                notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                notEqual: 'Expected "actual" to be loosely unequal to:',
                notIdentical: "Values identical but not reference-equal:"
            }
              , P = 10;
            function C(he) {
                var ce = Object.keys(he)
                  , U = Object.create(Object.getPrototypeOf(he));
                return ce.forEach(function(z) {
                    U[z] = he[z]
                }),
                Object.defineProperty(U, "message", {
                    value: he.message
                }),
                U
            }
            function q(he) {
                return j(he, {
                    compact: !1,
                    customInspect: !1,
                    depth: 1e3,
                    maxArrayLength: 1 / 0,
                    showHidden: !1,
                    breakLength: 1 / 0,
                    showProxy: !1,
                    sorted: !0,
                    getters: !0
                })
            }
            function $(he, ce, U) {
                var z = ""
                  , X = ""
                  , ge = 0
                  , Ee = ""
                  , je = !1
                  , Re = q(he)
                  , He = Re.split(`
`)
                  , st = q(ce).split(`
`)
                  , _t = 0
                  , ft = "";
                if (U === "strictEqual" && G(he) === "object" && G(ce) === "object" && he !== null && ce !== null && (U = "strictEqualObject"),
                He.length === 1 && st.length === 1 && He[0] !== st[0]) {
                    var Ue = He[0].length + st[0].length;
                    if (Ue <= P) {
                        if ((G(he) !== "object" || he === null) && (G(ce) !== "object" || ce === null) && (he !== 0 || ce !== 0))
                            return "".concat(T[U], `

`) + "".concat(He[0], " !== ").concat(st[0], `
`)
                    } else if (U !== "strictEqualObject") {
                        var Ve = l.stderr && l.stderr.isTTY ? l.stderr.columns : 80;
                        if (Ue < Ve) {
                            for (; He[0][_t] === st[0][_t]; )
                                _t++;
                            _t > 2 && (ft = `
  `.concat(se(" ", _t), "^"),
                            _t = 0)
                        }
                    }
                }
                for (var we = He[He.length - 1], Pe = st[st.length - 1]; we === Pe && (_t++ < 2 ? Ee = `
  `.concat(we).concat(Ee) : z = we,
                He.pop(),
                st.pop(),
                !(He.length === 0 || st.length === 0)); )
                    we = He[He.length - 1],
                    Pe = st[st.length - 1];
                var $e = Math.max(He.length, st.length);
                if ($e === 0) {
                    var Me = Re.split(`
`);
                    if (Me.length > 30)
                        for (Me[26] = "".concat(te, "...").concat(D); Me.length > 27; )
                            Me.pop();
                    return "".concat(T.notIdentical, `

`).concat(Me.join(`
`), `
`)
                }
                _t > 3 && (Ee = `
`.concat(te, "...").concat(D).concat(Ee),
                je = !0),
                z !== "" && (Ee = `
  `.concat(z).concat(Ee),
                z = "");
                var St = 0
                  , Ot = T[U] + `
`.concat(Z, "+ actual").concat(D, " ").concat(F, "- expected").concat(D)
                  , Je = " ".concat(te, "...").concat(D, " Lines skipped");
                for (_t = 0; _t < $e; _t++) {
                    var Fe = _t - ge;
                    if (He.length < _t + 1)
                        Fe > 1 && _t > 2 && (Fe > 4 ? (X += `
`.concat(te, "...").concat(D),
                        je = !0) : Fe > 3 && (X += `
  `.concat(st[_t - 2]),
                        St++),
                        X += `
  `.concat(st[_t - 1]),
                        St++),
                        ge = _t,
                        z += `
`.concat(F, "-").concat(D, " ").concat(st[_t]),
                        St++;
                    else if (st.length < _t + 1)
                        Fe > 1 && _t > 2 && (Fe > 4 ? (X += `
`.concat(te, "...").concat(D),
                        je = !0) : Fe > 3 && (X += `
  `.concat(He[_t - 2]),
                        St++),
                        X += `
  `.concat(He[_t - 1]),
                        St++),
                        ge = _t,
                        X += `
`.concat(Z, "+").concat(D, " ").concat(He[_t]),
                        St++;
                    else {
                        var at = st[_t]
                          , ct = He[_t]
                          , Ze = ct !== at && (!re(ct, ",") || ct.slice(0, -1) !== at);
                        Ze && re(at, ",") && at.slice(0, -1) === ct && (Ze = !1,
                        ct += ","),
                        Ze ? (Fe > 1 && _t > 2 && (Fe > 4 ? (X += `
`.concat(te, "...").concat(D),
                        je = !0) : Fe > 3 && (X += `
  `.concat(He[_t - 2]),
                        St++),
                        X += `
  `.concat(He[_t - 1]),
                        St++),
                        ge = _t,
                        X += `
`.concat(Z, "+").concat(D, " ").concat(ct),
                        z += `
`.concat(F, "-").concat(D, " ").concat(at),
                        St += 2) : (X += z,
                        z = "",
                        (Fe === 1 || _t === 0) && (X += `
  `.concat(ct),
                        St++))
                    }
                    if (St > 20 && _t < $e - 2)
                        return "".concat(Ot).concat(Je, `
`).concat(X, `
`).concat(te, "...").concat(D).concat(z, `
`) + "".concat(te, "...").concat(D)
                }
                return "".concat(Ot).concat(je ? Je : "", `
`).concat(X).concat(z).concat(Ee).concat(ft)
            }
            var ie = (function(he, ce) {
                E(z, he);
                var U = _(z);
                function z(X) {
                    var ge;
                    if (o(this, z),
                    G(X) !== "object" || X === null)
                        throw new ee("options","Object",X);
                    var Ee = X.message
                      , je = X.operator
                      , Re = X.stackStartFn
                      , He = X.actual
                      , st = X.expected
                      , _t = Error.stackTraceLimit;
                    if (Error.stackTraceLimit = 0,
                    Ee != null)
                        ge = U.call(this, String(Ee));
                    else if (l.stderr && l.stderr.isTTY && (l.stderr && l.stderr.getColorDepth && l.stderr.getColorDepth() !== 1 ? (te = "\x1B[34m",
                    Z = "\x1B[32m",
                    D = "\x1B[39m",
                    F = "\x1B[31m") : (te = "",
                    Z = "",
                    D = "",
                    F = "")),
                    G(He) === "object" && He !== null && G(st) === "object" && st !== null && "stack"in He && He instanceof Error && "stack"in st && st instanceof Error && (He = C(He),
                    st = C(st)),
                    je === "deepStrictEqual" || je === "strictEqual")
                        ge = U.call(this, $(He, st, je));
                    else if (je === "notDeepStrictEqual" || je === "notStrictEqual") {
                        var ft = T[je]
                          , Ue = q(He).split(`
`);
                        if (je === "notStrictEqual" && G(He) === "object" && He !== null && (ft = T.notStrictEqualObject),
                        Ue.length > 30)
                            for (Ue[26] = "".concat(te, "...").concat(D); Ue.length > 27; )
                                Ue.pop();
                        Ue.length === 1 ? ge = U.call(this, "".concat(ft, " ").concat(Ue[0])) : ge = U.call(this, "".concat(ft, `

`).concat(Ue.join(`
`), `
`))
                    } else {
                        var Ve = q(He)
                          , we = ""
                          , Pe = T[je];
                        je === "notDeepEqual" || je === "notEqual" ? (Ve = "".concat(T[je], `

`).concat(Ve),
                        Ve.length > 1024 && (Ve = "".concat(Ve.slice(0, 1021), "..."))) : (we = "".concat(q(st)),
                        Ve.length > 512 && (Ve = "".concat(Ve.slice(0, 509), "...")),
                        we.length > 512 && (we = "".concat(we.slice(0, 509), "...")),
                        je === "deepEqual" || je === "equal" ? Ve = "".concat(Pe, `

`).concat(Ve, `

should equal

`) : we = " ".concat(je, " ").concat(we)),
                        ge = U.call(this, "".concat(Ve).concat(we))
                    }
                    return Error.stackTraceLimit = _t,
                    ge.generatedMessage = !Ee,
                    Object.defineProperty(S(ge), "name", {
                        value: "AssertionError [ERR_ASSERTION]",
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }),
                    ge.code = "ERR_ASSERTION",
                    ge.actual = He,
                    ge.expected = st,
                    ge.operator = je,
                    Error.captureStackTrace && Error.captureStackTrace(S(ge), Re),
                    ge.stack,
                    ge.name = "AssertionError",
                    w(ge)
                }
                return u(z, [{
                    key: "toString",
                    value: function() {
                        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                    }
                }, {
                    key: ce,
                    value: function(ge, Ee) {
                        return j(this, b(b({}, Ee), {}, {
                            customInspect: !1,
                            depth: 0
                        }))
                    }
                }]),
                z
            }
            )(I(Error), j.custom);
            H.exports = ie
        }
        ),
        4061: (function(H, s, y) {
            "use strict";
            var l = y(48287).Buffer, g = this && this.__importDefault || function(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            , b;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.ADNLAddress = void 0;
            const f = g(y(29107))
              , o = y(53721)
              , c = y(92960);
            class u {
                static parseFriendly(v) {
                    if (v.length !== 55)
                        throw Error("Invalid address");
                    v = "f" + v;
                    let E = (0,
                    o.base32Decode)(v);
                    if (E[0] !== 45)
                        throw Error("Invalid address");
                    let _ = E.slice(33);
                    if (!(0,
                    c.crc16)(E.slice(0, 33)).equals(_))
                        throw Error("Invalid address");
                    return new u(E.slice(1, 33))
                }
                static parseRaw(v) {
                    const E = l.from(v, "base64");
                    return new u(E)
                }
                constructor(v) {
                    if (this.toRaw = () => this.address.toString("hex").toUpperCase(),
                    this.toString = () => {
                        let E = l.concat([l.from([45]), this.address])
                          , _ = (0,
                        c.crc16)(E);
                        return E = l.concat([E, _]),
                        (0,
                        o.base32Encode)(E).slice(1)
                    }
                    ,
                    this[b] = () => this.toString(),
                    v.length !== 32)
                        throw Error("Invalid address");
                    this.address = v
                }
                equals(v) {
                    return this.address.equals(v.address)
                }
            }
            s.ADNLAddress = u,
            b = f.default
        }
        ),
        4233: (H => {
            "use strict";
            const s = function*() {}
            .constructor;
            H.exports = () => s
        }
        ),
        4436: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.wordlist = void 0;
            const y = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
            s.wordlist = y
        }
        ),
        4599: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.storeTickTock = s.loadTickTock = void 0;
            function y(g) {
                return {
                    tick: g.loadBit(),
                    tock: g.loadBit()
                }
            }
            s.loadTickTock = y;
            function l(g) {
                return b => {
                    b.storeBit(g.tick),
                    b.storeBit(g.tock)
                }
            }
            s.storeTickTock = l
        }
        ),
        4641: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.toCaipChainId = s.parseCaipAccountId = s.parseCaipChainId = s.isCaipAssetId = s.isCaipAssetType = s.isCaipAccountAddress = s.isCaipAccountId = s.isCaipReference = s.isCaipNamespace = s.isCaipChainId = s.KnownCaipNamespace = s.CaipAssetIdStruct = s.CaipAssetTypeStruct = s.CaipAccountAddressStruct = s.CaipAccountIdStruct = s.CaipReferenceStruct = s.CaipNamespaceStruct = s.CaipChainIdStruct = s.CAIP_ASSET_ID_REGEX = s.CAIP_ASSET_TYPE_REGEX = s.CAIP_ACCOUNT_ADDRESS_REGEX = s.CAIP_ACCOUNT_ID_REGEX = s.CAIP_REFERENCE_REGEX = s.CAIP_NAMESPACE_REGEX = s.CAIP_CHAIN_ID_REGEX = void 0;
            const l = y(35620);
            s.CAIP_CHAIN_ID_REGEX = /^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u,
            s.CAIP_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u,
            s.CAIP_REFERENCE_REGEX = /^[-_a-zA-Z0-9]{1,32}$/u,
            s.CAIP_ACCOUNT_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u,
            s.CAIP_ACCOUNT_ADDRESS_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u,
            s.CAIP_ASSET_TYPE_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})$/u,
            s.CAIP_ASSET_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})\/(?<tokenId>[-.%a-zA-Z0-9]{1,78})$/u,
            s.CaipChainIdStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_CHAIN_ID_REGEX),
            s.CaipNamespaceStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_NAMESPACE_REGEX),
            s.CaipReferenceStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_REFERENCE_REGEX),
            s.CaipAccountIdStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_ACCOUNT_ID_REGEX),
            s.CaipAccountAddressStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_ACCOUNT_ADDRESS_REGEX),
            s.CaipAssetTypeStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_ASSET_TYPE_REGEX),
            s.CaipAssetIdStruct = (0,
            l.pattern)((0,
            l.string)(), s.CAIP_ASSET_ID_REGEX);
            var g;
            (function(S) {
                S.Bip122 = "bip122",
                S.Eip155 = "eip155",
                S.Wallet = "wallet"
            }
            )(g = s.KnownCaipNamespace || (s.KnownCaipNamespace = {}));
            function b(S) {
                return (0,
                l.is)(S, s.CaipChainIdStruct)
            }
            s.isCaipChainId = b;
            function f(S) {
                return (0,
                l.is)(S, s.CaipNamespaceStruct)
            }
            s.isCaipNamespace = f;
            function o(S) {
                return (0,
                l.is)(S, s.CaipReferenceStruct)
            }
            s.isCaipReference = o;
            function c(S) {
                return (0,
                l.is)(S, s.CaipAccountIdStruct)
            }
            s.isCaipAccountId = c;
            function u(S) {
                return (0,
                l.is)(S, s.CaipAccountAddressStruct)
            }
            s.isCaipAccountAddress = u;
            function h(S) {
                return (0,
                l.is)(S, s.CaipAssetTypeStruct)
            }
            s.isCaipAssetType = h;
            function v(S) {
                return (0,
                l.is)(S, s.CaipAssetIdStruct)
            }
            s.isCaipAssetId = v;
            function E(S) {
                const I = s.CAIP_CHAIN_ID_REGEX.exec(S);
                if (!I?.groups)
                    throw new Error("Invalid CAIP chain ID.");
                return {
                    namespace: I.groups.namespace,
                    reference: I.groups.reference
                }
            }
            s.parseCaipChainId = E;
            function _(S) {
                const I = s.CAIP_ACCOUNT_ID_REGEX.exec(S);
                if (!I?.groups)
                    throw new Error("Invalid CAIP account ID.");
                return {
                    address: I.groups.accountAddress,
                    chainId: I.groups.chainId,
                    chain: {
                        namespace: I.groups.namespace,
                        reference: I.groups.reference
                    }
                }
            }
            s.parseCaipAccountId = _;
            function w(S, I) {
                if (!f(S))
                    throw new Error(`Invalid "namespace", must match: ${s.CAIP_NAMESPACE_REGEX.toString()}`);
                if (!o(I))
                    throw new Error(`Invalid "reference", must match: ${s.CAIP_REFERENCE_REGEX.toString()}`);
                return `${S}:${I}`
            }
            s.toCaipChainId = w
        }
        ),
        4870: (function(H, s, y) {
            "use strict";
            var l = y(48287).Buffer
              , g = this && this.__importDefault || function(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            ;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.hmac_sha512 = s.hmac_sha512_fallback = void 0;
            const b = g(y(68343))
              , f = y(32370);
            async function o(u, h) {
                let v = typeof u == "string" ? l.from(u, "utf-8") : u
                  , E = typeof h == "string" ? l.from(h, "utf-8") : h;
                const _ = new b.default("SHA-512","HEX",{
                    hmacKey: {
                        value: v.toString("hex"),
                        format: "HEX"
                    }
                });
                _.update(E.toString("hex"));
                const w = _.getHash("HEX");
                return l.from(w, "hex")
            }
            s.hmac_sha512_fallback = o;
            function c(u, h) {
                return (0,
                f.hmac_sha512)(u, h)
            }
            s.hmac_sha512 = c
        }
        ),
        5342: ( (H, s, y) => {
            const l = y(97075)
              , g = (b, f, o) => l(b, f, "<", o);
            H.exports = g
        }
        ),
        5830: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = E;
            var l = f(y(83399))
              , g = f(y(71229))
              , b = f(y(94636));
            function f(_) {
                return _ && _.__esModule ? _ : {
                    default: _
                }
            }
            var o = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/
              , c = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/
              , u = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i
              , h = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i
              , v = {
                checkDMS: !1
            };
            function E(_, w) {
                if ((0,
                l.default)(_),
                w = (0,
                g.default)(w, v),
                !(0,
                b.default)(_, ","))
                    return !1;
                var S = _.split(",");
                return S[0].startsWith("(") && !S[1].endsWith(")") || S[1].endsWith(")") && !S[0].startsWith("(") ? !1 : w.checkDMS ? u.test(S[0]) && h.test(S[1]) : o.test(S[0]) && c.test(S[1])
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        5974: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer
              , g = y(65606)
              , b = y(94148)
              , f = y(44442)
              , o = y(58411)
              , c = y(71447)
              , u = y(19681);
            for (var h in u)
                s[h] = u[h];
            s.NONE = 0,
            s.DEFLATE = 1,
            s.INFLATE = 2,
            s.GZIP = 3,
            s.GUNZIP = 4,
            s.DEFLATERAW = 5,
            s.INFLATERAW = 6,
            s.UNZIP = 7;
            var v = 31
              , E = 139;
            function _(w) {
                if (typeof w != "number" || w < s.DEFLATE || w > s.UNZIP)
                    throw new TypeError("Bad argument");
                this.dictionary = null,
                this.err = 0,
                this.flush = 0,
                this.init_done = !1,
                this.level = 0,
                this.memLevel = 0,
                this.mode = w,
                this.strategy = 0,
                this.windowBits = 0,
                this.write_in_progress = !1,
                this.pending_close = !1,
                this.gzip_id_bytes_read = 0
            }
            _.prototype.close = function() {
                if (this.write_in_progress) {
                    this.pending_close = !0;
                    return
                }
                this.pending_close = !1,
                b(this.init_done, "close before init"),
                b(this.mode <= s.UNZIP),
                this.mode === s.DEFLATE || this.mode === s.GZIP || this.mode === s.DEFLATERAW ? o.deflateEnd(this.strm) : (this.mode === s.INFLATE || this.mode === s.GUNZIP || this.mode === s.INFLATERAW || this.mode === s.UNZIP) && c.inflateEnd(this.strm),
                this.mode = s.NONE,
                this.dictionary = null
            }
            ,
            _.prototype.write = function(w, S, I, R, M, O, k) {
                return this._write(!0, w, S, I, R, M, O, k)
            }
            ,
            _.prototype.writeSync = function(w, S, I, R, M, O, k) {
                return this._write(!1, w, S, I, R, M, O, k)
            }
            ,
            _.prototype._write = function(w, S, I, R, M, O, k, W) {
                if (b.equal(arguments.length, 8),
                b(this.init_done, "write before init"),
                b(this.mode !== s.NONE, "already finalized"),
                b.equal(!1, this.write_in_progress, "write already in progress"),
                b.equal(!1, this.pending_close, "close is pending"),
                this.write_in_progress = !0,
                b.equal(!1, S === void 0, "must provide flush value"),
                this.write_in_progress = !0,
                S !== s.Z_NO_FLUSH && S !== s.Z_PARTIAL_FLUSH && S !== s.Z_SYNC_FLUSH && S !== s.Z_FULL_FLUSH && S !== s.Z_FINISH && S !== s.Z_BLOCK)
                    throw new Error("Invalid flush value");
                if (I == null && (I = l.alloc(0),
                M = 0,
                R = 0),
                this.strm.avail_in = M,
                this.strm.input = I,
                this.strm.next_in = R,
                this.strm.avail_out = W,
                this.strm.output = O,
                this.strm.next_out = k,
                this.flush = S,
                !w)
                    return this._process(),
                    this._checkError() ? this._afterSync() : void 0;
                var G = this;
                return g.nextTick(function() {
                    G._process(),
                    G._after()
                }),
                this
            }
            ,
            _.prototype._afterSync = function() {
                var w = this.strm.avail_out
                  , S = this.strm.avail_in;
                return this.write_in_progress = !1,
                [S, w]
            }
            ,
            _.prototype._process = function() {
                var w = null;
                switch (this.mode) {
                case s.DEFLATE:
                case s.GZIP:
                case s.DEFLATERAW:
                    this.err = o.deflate(this.strm, this.flush);
                    break;
                case s.UNZIP:
                    switch (this.strm.avail_in > 0 && (w = this.strm.next_in),
                    this.gzip_id_bytes_read) {
                    case 0:
                        if (w === null)
                            break;
                        if (this.strm.input[w] === v) {
                            if (this.gzip_id_bytes_read = 1,
                            w++,
                            this.strm.avail_in === 1)
                                break
                        } else {
                            this.mode = s.INFLATE;
                            break
                        }
                    case 1:
                        if (w === null)
                            break;
                        this.strm.input[w] === E ? (this.gzip_id_bytes_read = 2,
                        this.mode = s.GUNZIP) : this.mode = s.INFLATE;
                        break;
                    default:
                        throw new Error("invalid number of gzip magic number bytes read")
                    }
                case s.INFLATE:
                case s.GUNZIP:
                case s.INFLATERAW:
                    for (this.err = c.inflate(this.strm, this.flush),
                    this.err === s.Z_NEED_DICT && this.dictionary && (this.err = c.inflateSetDictionary(this.strm, this.dictionary),
                    this.err === s.Z_OK ? this.err = c.inflate(this.strm, this.flush) : this.err === s.Z_DATA_ERROR && (this.err = s.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === s.GUNZIP && this.err === s.Z_STREAM_END && this.strm.next_in[0] !== 0; )
                        this.reset(),
                        this.err = c.inflate(this.strm, this.flush);
                    break;
                default:
                    throw new Error("Unknown mode " + this.mode)
                }
            }
            ,
            _.prototype._checkError = function() {
                switch (this.err) {
                case s.Z_OK:
                case s.Z_BUF_ERROR:
                    if (this.strm.avail_out !== 0 && this.flush === s.Z_FINISH)
                        return this._error("unexpected end of file"),
                        !1;
                    break;
                case s.Z_STREAM_END:
                    break;
                case s.Z_NEED_DICT:
                    return this.dictionary == null ? this._error("Missing dictionary") : this._error("Bad dictionary"),
                    !1;
                default:
                    return this._error("Zlib error"),
                    !1
                }
                return !0
            }
            ,
            _.prototype._after = function() {
                if (this._checkError()) {
                    var w = this.strm.avail_out
                      , S = this.strm.avail_in;
                    this.write_in_progress = !1,
                    this.callback(S, w),
                    this.pending_close && this.close()
                }
            }
            ,
            _.prototype._error = function(w) {
                this.strm.msg && (w = this.strm.msg),
                this.onerror(w, this.err),
                this.write_in_progress = !1,
                this.pending_close && this.close()
            }
            ,
            _.prototype.init = function(w, S, I, R, M) {
                b(arguments.length === 4 || arguments.length === 5, "init(windowBits, level, memLevel, strategy, [dictionary])"),
                b(w >= 8 && w <= 15, "invalid windowBits"),
                b(S >= -1 && S <= 9, "invalid compression level"),
                b(I >= 1 && I <= 9, "invalid memlevel"),
                b(R === s.Z_FILTERED || R === s.Z_HUFFMAN_ONLY || R === s.Z_RLE || R === s.Z_FIXED || R === s.Z_DEFAULT_STRATEGY, "invalid strategy"),
                this._init(S, w, I, R, M),
                this._setDictionary()
            }
            ,
            _.prototype.params = function() {
                throw new Error("deflateParams Not supported")
            }
            ,
            _.prototype.reset = function() {
                this._reset(),
                this._setDictionary()
            }
            ,
            _.prototype._init = function(w, S, I, R, M) {
                switch (this.level = w,
                this.windowBits = S,
                this.memLevel = I,
                this.strategy = R,
                this.flush = s.Z_NO_FLUSH,
                this.err = s.Z_OK,
                (this.mode === s.GZIP || this.mode === s.GUNZIP) && (this.windowBits += 16),
                this.mode === s.UNZIP && (this.windowBits += 32),
                (this.mode === s.DEFLATERAW || this.mode === s.INFLATERAW) && (this.windowBits = -1 * this.windowBits),
                this.strm = new f,
                this.mode) {
                case s.DEFLATE:
                case s.GZIP:
                case s.DEFLATERAW:
                    this.err = o.deflateInit2(this.strm, this.level, s.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                    break;
                case s.INFLATE:
                case s.GUNZIP:
                case s.INFLATERAW:
                case s.UNZIP:
                    this.err = c.inflateInit2(this.strm, this.windowBits);
                    break;
                default:
                    throw new Error("Unknown mode " + this.mode)
                }
                this.err !== s.Z_OK && this._error("Init error"),
                this.dictionary = M,
                this.write_in_progress = !1,
                this.init_done = !0
            }
            ,
            _.prototype._setDictionary = function() {
                if (this.dictionary != null) {
                    switch (this.err = s.Z_OK,
                    this.mode) {
                    case s.DEFLATE:
                    case s.DEFLATERAW:
                        this.err = o.deflateSetDictionary(this.strm, this.dictionary);
                        break;
                    default:
                        break
                    }
                    this.err !== s.Z_OK && this._error("Failed to set dictionary")
                }
            }
            ,
            _.prototype._reset = function() {
                switch (this.err = s.Z_OK,
                this.mode) {
                case s.DEFLATE:
                case s.DEFLATERAW:
                case s.GZIP:
                    this.err = o.deflateReset(this.strm);
                    break;
                case s.INFLATE:
                case s.INFLATERAW:
                case s.GUNZIP:
                    this.err = c.inflateReset(this.strm);
                    break;
                default:
                    break
                }
                this.err !== s.Z_OK && this._error("Failed to reset stream")
            }
            ,
            s.Zlib = _
        }
        ),
        6188: (H => {
            "use strict";
            H.exports = Math.max
        }
        ),
        6215: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer
              , g = y(65606);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.InvalidStatusCodeError = s.InvalidCertError = void 0;
            const b = Object.freeze({
                redirect: !0,
                expectStatusCode: 200,
                headers: {},
                full: !1,
                keepAlive: !0,
                cors: !1,
                referrer: !1,
                sslAllowSelfSigned: !1,
                _redirectCount: 0
            });
            class f extends Error {
                constructor(R, M) {
                    super(R),
                    this.fingerprint256 = M
                }
            }
            s.InvalidCertError = f;
            class o extends Error {
                constructor(R) {
                    super(`Request Failed. Status Code: ${R}`),
                    this.statusCode = R
                }
            }
            s.InvalidStatusCodeError = o;
            function c(I, R) {
                if (!R || R === "text" || R === "json")
                    try {
                        let M = new TextDecoder("utf8",{
                            fatal: !0
                        }).decode(I);
                        if (R === "text")
                            return M;
                        try {
                            return JSON.parse(M)
                        } catch (O) {
                            if (R === "json")
                                throw O;
                            return M
                        }
                    } catch (M) {
                        if (R === "text" || R === "json")
                            throw M
                    }
                return I
            }
            let u = {};
            function h(I, R) {
                let M = {
                    ...b,
                    ...R
                };
                const O = y(11568)
                  , k = y(11083)
                  , W = y(78559)
                  , {promisify: G} = y(40537)
                  , {resolve: Y} = y(88835)
                  , j = !!/^https/.test(I);
                let V = {
                    method: M.method || "GET",
                    headers: {
                        "Accept-Encoding": "gzip, deflate, br"
                    }
                };
                const ee = se => se.replace(/:| /g, "").toLowerCase();
                if (M.keepAlive) {
                    const se = {
                        keepAlive: !0,
                        keepAliveMsecs: 3e4,
                        maxFreeSockets: 1024,
                        maxCachedSessions: 1024
                    }
                      , te = [j, j && M.sslPinnedCertificates?.map(Z => ee(Z)).sort()].join();
                    V.agent = u[te] || (u[te] = new (j ? k : O).Agent(se))
                }
                M.type === "json" && (V.headers["Content-Type"] = "application/json"),
                M.data && (M.method || (V.method = "POST"),
                V.body = M.type === "json" ? JSON.stringify(M.data) : M.data),
                V.headers = {
                    ...V.headers,
                    ...M.headers
                },
                M.sslAllowSelfSigned && (V.rejectUnauthorized = !1);
                const re = async se => {
                    const te = se.statusCode;
                    if (M.redirect && 300 <= te && te < 400 && se.headers.location) {
                        if (M._redirectCount == 10)
                            throw new Error("Request failed. Too much redirects.");
                        return M._redirectCount += 1,
                        await h(Y(I, se.headers.location), M)
                    }
                    if (M.expectStatusCode && te !== M.expectStatusCode)
                        throw se.resume(),
                        new o(te);
                    let Z = [];
                    for await(const P of se)
                        Z.push(P);
                    let F = l.concat(Z);
                    const D = se.headers["content-encoding"];
                    D === "br" && (F = await G(W.brotliDecompress)(F)),
                    (D === "gzip" || D === "deflate") && (F = await G(W.unzip)(F));
                    const T = c(F, M.type);
                    return M.full ? {
                        headers: se.headers,
                        status: te,
                        body: T
                    } : T
                }
                ;
                return new Promise( (se, te) => {
                    const Z = async P => {
                        if (P && P.code === "DEPTH_ZERO_SELF_SIGNED_CERT")
                            try {
                                await h(I, {
                                    ...M,
                                    sslAllowSelfSigned: !0,
                                    sslPinnedCertificates: []
                                })
                            } catch (C) {
                                C && C.fingerprint256 && (P = new f(`Self-signed SSL certificate: ${C.fingerprint256}`,C.fingerprint256))
                            }
                        te(P)
                    }
                      , F = (j ? k : O).request(I, V, P => {
                        P.on("error", Z),
                        (async () => {
                            try {
                                se(await re(P))
                            } catch (C) {
                                te(C)
                            }
                        }
                        )()
                    }
                    );
                    F.on("error", Z);
                    const D = M.sslPinnedCertificates?.map(P => ee(P))
                      , T = P => {
                        const C = ee(P.getPeerCertificate()?.fingerprint256 || "");
                        if (!(!C && P.isSessionReused()) && !D.includes(C))
                            return F.emit("error", new f(`Invalid SSL certificate: ${C} Expected: ${D}`,C)),
                            F.abort()
                    }
                    ;
                    M.sslPinnedCertificates && F.on("socket", P => {
                        P.listeners("secureConnect").map(q => (q.name || "").replace("bound ", "")).includes("mfetchSecureConnect") || P.on("secureConnect", T.bind(null, P))
                    }
                    ),
                    M.keepAlive && F.setNoDelay(!0),
                    V.body && F.write(V.body),
                    F.end()
                }
                )
            }
            const v = new Set(["Accept", "Accept-Language", "Content-Language", "Content-Type"].map(I => I.toLowerCase()))
              , E = new Set(["Accept-Charset", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Connection", "Content-Length", "Cookie", "Cookie2", "Date", "DNT", "Expect", "Host", "Keep-Alive", "Origin", "Referer", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "Via"].map(I => I.toLowerCase()));
            async function _(I, R) {
                let M = {
                    ...b,
                    ...R
                };
                const O = new Headers;
                M.type === "json" && O.set("Content-Type", "application/json");
                let k = new URL(I);
                if (k.username) {
                    const j = btoa(`${k.username}:${k.password}`);
                    O.set("Authorization", `Basic ${j}`),
                    k.username = "",
                    k.password = ""
                }
                I = "" + k;
                for (let j in M.headers) {
                    const V = j.toLowerCase();
                    (v.has(V) || M.cors && !E.has(V)) && O.set(j, M.headers[j])
                }
                let W = {
                    headers: O,
                    redirect: M.redirect ? "follow" : "manual"
                };
                M.referrer || (W.referrerPolicy = "no-referrer"),
                M.cors && (W.mode = "cors"),
                M.data && (M.method || (W.method = "POST"),
                W.body = M.type === "json" ? JSON.stringify(M.data) : M.data);
                const G = await fetch(I, W);
                if (M.expectStatusCode && G.status !== M.expectStatusCode)
                    throw new o(G.status);
                const Y = c(new Uint8Array(await G.arrayBuffer()), M.type);
                return M.full ? {
                    headers: Object.fromEntries(G.headers.entries()),
                    status: G.status,
                    body: Y
                } : Y
            }
            const w = !!(typeof g == "object" && g.versions && g.versions.node && g.versions.v8);
            function S(I, R) {
                return (w ? h : _)(I, R)
            }
            s.default = S
        }
        ),
        6549: (H => {
            "use strict";
            H.exports = Object.getOwnPropertyDescriptor
        }
        ),
        6579: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.array = s.getTupleType = s.getArrayType = s.isArrayType = void 0;
            const l = y(65534)
              , g = y(49334)
              , b = y(34175)
              , f = y(76291)
              , o = y(64122)
              , c = y(72516)
              , u = /^(?<type>.*)\[(?<length>\d*?)\]$/u
              , h = _ => u.test(_);
            s.isArrayType = h;
            const v = _ => {
                const w = _.match(u);
                return (0,
                l.assert)(w?.groups?.type, new g.ParserError(`Invalid array type. Expected an array type, but received "${_}".`)),
                [w.groups.type, w.groups.length ? parseInt(w.groups.length, 10) : void 0]
            }
            ;
            s.getArrayType = v;
            const E = (_, w) => `(${new Array(w).fill(_).join(",")})`;
            s.getTupleType = E,
            s.array = {
                isDynamic(_) {
                    const [w,S] = (0,
                    s.getArrayType)(_);
                    return S === void 0 || (0,
                    b.isDynamicParser)((0,
                    b.getParser)(w), w)
                },
                isType(_) {
                    return (0,
                    s.isArrayType)(_)
                },
                getByteLength(_) {
                    (0,
                    l.assert)((0,
                    s.isArrayType)(_), new g.ParserError(`Expected an array type, but received "${_}".`));
                    const [w,S] = (0,
                    s.getArrayType)(_);
                    return !(0,
                    b.isDynamicParser)(this, _) && S !== void 0 ? c.tuple.getByteLength((0,
                    s.getTupleType)(w, S)) : 32
                },
                encode({type: _, buffer: w, value: S, packed: I, tight: R}) {
                    const [M,O] = (0,
                    s.getArrayType)(_);
                    if ((0,
                    l.assert)(!I || !(0,
                    s.isArrayType)(M), new g.ParserError("Cannot pack nested arrays.")),
                    I && (0,
                    b.isDynamicParser)((0,
                    b.getParser)(M), M))
                        return (0,
                        b.pack)({
                            types: new Array(S.length).fill(M),
                            values: S,
                            byteArray: w,
                            packed: I,
                            arrayPacked: !0,
                            tight: R
                        });
                    if (O)
                        return (0,
                        l.assert)(O === S.length, new g.ParserError(`Array length does not match type length. Expected a length of ${O}, but received ${S.length}.`)),
                        c.tuple.encode({
                            type: (0,
                            s.getTupleType)(M, O),
                            buffer: w,
                            value: S,
                            packed: o.fixedBytes.isType(M) && R,
                            tight: R
                        });
                    if (I)
                        return (0,
                        b.pack)({
                            types: new Array(S.length).fill(M),
                            values: S,
                            byteArray: w,
                            packed: o.fixedBytes.isType(M) && R,
                            arrayPacked: !0,
                            tight: R
                        });
                    const k = (0,
                    f.padStart)((0,
                    l.numberToBytes)(S.length));
                    return (0,
                    b.pack)({
                        types: new Array(S.length).fill(M),
                        values: S,
                        byteArray: (0,
                        l.concatBytes)([w, k]),
                        packed: I,
                        tight: R
                    })
                },
                decode({type: _, value: w, ...S}) {
                    const [I,R] = (0,
                    s.getArrayType)(_);
                    if (R) {
                        const O = c.tuple.decode({
                            type: (0,
                            s.getTupleType)(I, R),
                            value: w,
                            ...S
                        });
                        return (0,
                        l.assert)(O.length === R, new g.ParserError(`Array length does not match type length. Expected a length of ${R}, but received ${O.length}.`)),
                        O
                    }
                    const M = (0,
                    l.bytesToNumber)(w.subarray(0, 32));
                    return (0,
                    b.unpack)(new Array(M).fill(I), w.subarray(32))
                }
            }
        }
        ),
        6585: (H => {
            var s = 1e3
              , y = s * 60
              , l = y * 60
              , g = l * 24
              , b = g * 7
              , f = g * 365.25;
            H.exports = function(v, E) {
                E = E || {};
                var _ = typeof v;
                if (_ === "string" && v.length > 0)
                    return o(v);
                if (_ === "number" && isFinite(v))
                    return E.long ? u(v) : c(v);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(v))
            }
            ;
            function o(v) {
                if (v = String(v),
                !(v.length > 100)) {
                    var E = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(v);
                    if (E) {
                        var _ = parseFloat(E[1])
                          , w = (E[2] || "ms").toLowerCase();
                        switch (w) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return _ * f;
                        case "weeks":
                        case "week":
                        case "w":
                            return _ * b;
                        case "days":
                        case "day":
                        case "d":
                            return _ * g;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return _ * l;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return _ * y;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return _ * s;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return _;
                        default:
                            return
                        }
                    }
                }
            }
            function c(v) {
                var E = Math.abs(v);
                return E >= g ? Math.round(v / g) + "d" : E >= l ? Math.round(v / l) + "h" : E >= y ? Math.round(v / y) + "m" : E >= s ? Math.round(v / s) + "s" : v + "ms"
            }
            function u(v) {
                var E = Math.abs(v);
                return E >= g ? h(v, E, g, "day") : E >= l ? h(v, E, l, "hour") : E >= y ? h(v, E, y, "minute") : E >= s ? h(v, E, s, "second") : v + " ms"
            }
            function h(v, E, _, w) {
                var S = E >= _ * 1.5;
                return Math.round(v / _) + " " + w + (S ? "s" : "")
            }
        }
        ),
        6688: ( (H, s, y) => {
            s.fetch = f(y.g.fetch) && f(y.g.ReadableStream),
            s.writableStream = f(y.g.WritableStream),
            s.abortController = f(y.g.AbortController);
            var l;
            function g() {
                if (l !== void 0)
                    return l;
                if (y.g.XMLHttpRequest) {
                    l = new y.g.XMLHttpRequest;
                    try {
                        l.open("GET", y.g.XDomainRequest ? "/" : "https://example.com")
                    } catch {
                        l = null
                    }
                } else
                    l = null;
                return l
            }
            function b(o) {
                var c = g();
                if (!c)
                    return !1;
                try {
                    return c.responseType = o,
                    c.responseType === o
                } catch {}
                return !1
            }
            s.arraybuffer = s.fetch || b("arraybuffer"),
            s.msstream = !s.fetch && b("ms-stream"),
            s.mozchunkedarraybuffer = !s.fetch && b("moz-chunked-arraybuffer"),
            s.overrideMimeType = s.fetch || (g() ? f(g().overrideMimeType) : !1);
            function f(o) {
                return typeof o == "function"
            }
            l = null
        }
        ),
        6782: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = c;
            var l = b(y(71229))
              , g = b(y(83399));
            function b(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            function f(u) {
                var h = "\\d{".concat(u.digits_after_decimal[0], "}");
                u.digits_after_decimal.forEach(function(O, k) {
                    k !== 0 && (h = "".concat(h, "|\\d{").concat(O, "}"))
                });
                var v = "(".concat(u.symbol.replace(/\W/, function(O) {
                    return "\\".concat(O)
                }), ")").concat(u.require_symbol ? "" : "?")
                  , E = "-?"
                  , _ = "[1-9]\\d*"
                  , w = "[1-9]\\d{0,2}(\\".concat(u.thousands_separator, "\\d{3})*")
                  , S = ["0", _, w]
                  , I = "(".concat(S.join("|"), ")?")
                  , R = "(\\".concat(u.decimal_separator, "(").concat(h, "))").concat(u.require_decimal ? "" : "?")
                  , M = I + (u.allow_decimal || u.require_decimal ? R : "");
                return u.allow_negatives && !u.parens_for_negatives && (u.negative_sign_after_digits ? M += E : u.negative_sign_before_digits && (M = E + M)),
                u.allow_negative_sign_placeholder ? M = "( (?!\\-))?".concat(M) : u.allow_space_after_symbol ? M = " ?".concat(M) : u.allow_space_after_digits && (M += "( (?!$))?"),
                u.symbol_after_digits ? M += v : M = v + M,
                u.allow_negatives && (u.parens_for_negatives ? M = "(\\(".concat(M, "\\)|").concat(M, ")") : u.negative_sign_before_digits || u.negative_sign_after_digits || (M = E + M)),
                new RegExp("^(?!-? )(?=.*\\d)".concat(M, "$"))
            }
            var o = {
                symbol: "$",
                require_symbol: !1,
                allow_space_after_symbol: !1,
                symbol_after_digits: !1,
                allow_negatives: !0,
                parens_for_negatives: !1,
                negative_sign_before_digits: !1,
                negative_sign_after_digits: !1,
                allow_negative_sign_placeholder: !1,
                thousands_separator: ",",
                decimal_separator: ".",
                allow_decimal: !0,
                require_decimal: !1,
                digits_after_decimal: [2],
                allow_space_after_digits: !1
            };
            function c(u, h) {
                return (0,
                g.default)(u),
                h = (0,
                l.default)(h, o),
                f(h).test(u)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        6917: ( (H, s, y) => {
            var l = y(65606)
              , g = y(48287).Buffer
              , b = y(6688)
              , f = y(56698)
              , o = y(28399)
              , c = s.readyStates = {
                UNSENT: 0,
                OPENED: 1,
                HEADERS_RECEIVED: 2,
                LOADING: 3,
                DONE: 4
            }
              , u = s.IncomingMessage = function(h, v, E, _) {
                var w = this;
                if (o.Readable.call(w),
                w._mode = E,
                w.headers = {},
                w.rawHeaders = [],
                w.trailers = {},
                w.rawTrailers = [],
                w.on("end", function() {
                    l.nextTick(function() {
                        w.emit("close")
                    })
                }),
                E === "fetch") {
                    let W = function() {
                        I.read().then(function(G) {
                            if (!w._destroyed) {
                                if (_(G.done),
                                G.done) {
                                    w.push(null);
                                    return
                                }
                                w.push(g.from(G.value)),
                                W()
                            }
                        }).catch(function(G) {
                            _(!0),
                            w._destroyed || w.emit("error", G)
                        })
                    };
                    var k = W;
                    if (w._fetchResponse = v,
                    w.url = v.url,
                    w.statusCode = v.status,
                    w.statusMessage = v.statusText,
                    v.headers.forEach(function(G, Y) {
                        w.headers[Y.toLowerCase()] = G,
                        w.rawHeaders.push(Y, G)
                    }),
                    b.writableStream) {
                        var S = new WritableStream({
                            write: function(G) {
                                return _(!1),
                                new Promise(function(Y, j) {
                                    w._destroyed ? j() : w.push(g.from(G)) ? Y() : w._resumeFetch = Y
                                }
                                )
                            },
                            close: function() {
                                _(!0),
                                w._destroyed || w.push(null)
                            },
                            abort: function(G) {
                                _(!0),
                                w._destroyed || w.emit("error", G)
                            }
                        });
                        try {
                            v.body.pipeTo(S).catch(function(G) {
                                _(!0),
                                w._destroyed || w.emit("error", G)
                            });
                            return
                        } catch {}
                    }
                    var I = v.body.getReader();
                    W()
                } else {
                    w._xhr = h,
                    w._pos = 0,
                    w.url = h.responseURL,
                    w.statusCode = h.status,
                    w.statusMessage = h.statusText;
                    var R = h.getAllResponseHeaders().split(/\r?\n/);
                    if (R.forEach(function(W) {
                        var G = W.match(/^([^:]+):\s*(.*)/);
                        if (G) {
                            var Y = G[1].toLowerCase();
                            Y === "set-cookie" ? (w.headers[Y] === void 0 && (w.headers[Y] = []),
                            w.headers[Y].push(G[2])) : w.headers[Y] !== void 0 ? w.headers[Y] += ", " + G[2] : w.headers[Y] = G[2],
                            w.rawHeaders.push(G[1], G[2])
                        }
                    }),
                    w._charset = "x-user-defined",
                    !b.overrideMimeType) {
                        var M = w.rawHeaders["mime-type"];
                        if (M) {
                            var O = M.match(/;\s*charset=([^;])(;|$)/);
                            O && (w._charset = O[1].toLowerCase())
                        }
                        w._charset || (w._charset = "utf-8")
                    }
                }
            }
            ;
            f(u, o.Readable),
            u.prototype._read = function() {
                var h = this
                  , v = h._resumeFetch;
                v && (h._resumeFetch = null,
                v())
            }
            ,
            u.prototype._onXHRProgress = function(h) {
                var v = this
                  , E = v._xhr
                  , _ = null;
                switch (v._mode) {
                case "text":
                    if (_ = E.responseText,
                    _.length > v._pos) {
                        var w = _.substr(v._pos);
                        if (v._charset === "x-user-defined") {
                            for (var S = g.alloc(w.length), I = 0; I < w.length; I++)
                                S[I] = w.charCodeAt(I) & 255;
                            v.push(S)
                        } else
                            v.push(w, v._charset);
                        v._pos = _.length
                    }
                    break;
                case "arraybuffer":
                    if (E.readyState !== c.DONE || !E.response)
                        break;
                    _ = E.response,
                    v.push(g.from(new Uint8Array(_)));
                    break;
                case "moz-chunked-arraybuffer":
                    if (_ = E.response,
                    E.readyState !== c.LOADING || !_)
                        break;
                    v.push(g.from(new Uint8Array(_)));
                    break;
                case "ms-stream":
                    if (_ = E.response,
                    E.readyState !== c.LOADING)
                        break;
                    var R = new y.g.MSStreamReader;
                    R.onprogress = function() {
                        R.result.byteLength > v._pos && (v.push(g.from(new Uint8Array(R.result.slice(v._pos)))),
                        v._pos = R.result.byteLength)
                    }
                    ,
                    R.onload = function() {
                        h(!0),
                        v.push(null)
                    }
                    ,
                    R.readAsArrayBuffer(_);
                    break
                }
                v._xhr.readyState === c.DONE && v._mode !== "ms-stream" && (h(!0),
                v.push(null))
            }
        }
        ),
        7059: ( (H, s, y) => {
            const l = y(50560)
              , g = (b, f, o) => l(b, f, o) < 0;
            H.exports = g
        }
        ),
        7071: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = O;
            var l = g(y(83399));
            function g(k) {
                return k && k.__esModule ? k : {
                    default: k
                }
            }
            var b = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})"
              , f = "(([a-zA-Z]{2,3}(-".concat(b, ")?)|([a-zA-Z]{5,8}))")
              , o = "([A-Za-z]{4})"
              , c = "([A-Za-z]{2}|\\d{3})"
              , u = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))"
              , h = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])"
              , v = "(".concat(h, "(-[A-Za-z0-9]{2,8})+)")
              , E = "(x(-[A-Za-z0-9]{1,8})+)"
              , _ = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))"
              , w = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))"
              , S = "(".concat(_, "|").concat(w, ")")
              , I = "(-|_)"
              , R = "".concat(f, "(").concat(I).concat(o, ")?(").concat(I).concat(c, ")?(").concat(I).concat(u, ")*(").concat(I).concat(v, ")*(").concat(I).concat(E, ")?")
              , M = new RegExp("(^".concat(E, "$)|(^").concat(S, "$)|(^").concat(R, "$)"));
            function O(k) {
                return (0,
                l.default)(k),
                M.test(k)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        7176: ( (H, s, y) => {
            "use strict";
            var l = y(73126), g = y(75795), b;
            try {
                b = [].__proto__ === Array.prototype
            } catch (u) {
                if (!u || typeof u != "object" || !("code"in u) || u.code !== "ERR_PROTO_ACCESS")
                    throw u
            }
            var f = !!b && g && g(Object.prototype, "__proto__")
              , o = Object
              , c = o.getPrototypeOf;
            H.exports = f && typeof f.get == "function" ? l([f.get]) : typeof c == "function" ? function(h) {
                return c(h == null ? h : o(h))
            }
            : !1
        }
        ),
        7325: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.string = void 0;
            const l = y(65534)
              , g = y(8653);
            s.string = {
                isDynamic: !0,
                isType: b => b === "string",
                getByteLength() {
                    return 32
                },
                encode({buffer: b, value: f, packed: o, tight: c}) {
                    return g.bytes.encode({
                        type: "bytes",
                        buffer: b,
                        value: (0,
                        l.stringToBytes)(f),
                        packed: o,
                        tight: c
                    })
                },
                decode(b) {
                    return (0,
                    l.bytesToString)(g.bytes.decode(b))
                }
            }
        }
        ),
        7552: (function(H, s, y) {
            "use strict";
            var l = this && this.__createBinding || (Object.create ? (function(c, u, h, v) {
                v === void 0 && (v = h);
                var E = Object.getOwnPropertyDescriptor(u, h);
                (!E || ("get"in E ? !u.__esModule : E.writable || E.configurable)) && (E = {
                    enumerable: !0,
                    get: function() {
                        return u[h]
                    }
                }),
                Object.defineProperty(c, v, E)
            }
            ) : (function(c, u, h, v) {
                v === void 0 && (v = h),
                c[v] = u[h]
            }
            ))
              , g = this && this.__setModuleDefault || (Object.create ? (function(c, u) {
                Object.defineProperty(c, "default", {
                    enumerable: !0,
                    value: u
                })
            }
            ) : function(c, u) {
                c.default = u
            }
            )
              , b = this && this.__importStar || function(c) {
                if (c && c.__esModule)
                    return c;
                var u = {};
                if (c != null)
                    for (var h in c)
                        h !== "default" && Object.prototype.hasOwnProperty.call(c, h) && l(u, c, h);
                return g(u, c),
                u
            }
              , f = this && this.__exportStar || function(c, u) {
                for (var h in c)
                    h !== "default" && !Object.prototype.hasOwnProperty.call(u, h) && l(u, c, h)
            }
            ;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.z = void 0;
            const o = b(y(79325));
            s.z = o,
            f(y(79325), s),
            s.default = o
        }
        ),
        7673: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = u;
            var l = b(y(83399))
              , g = b(y(71229));
            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            var f = /^[A-Z2-7]+=*$/
              , o = /^[A-HJKMNP-TV-Z0-9]+$/
              , c = {
                crockford: !1
            };
            function u(h, v) {
                if ((0,
                l.default)(h),
                v = (0,
                g.default)(v, c),
                v.crockford)
                    return o.test(h);
                var E = h.length;
                return !!(E % 8 === 0 && f.test(h))
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        7941: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.WalletContractV4 = void 0;
            const g = y(1307)
              , b = y(20574);
            class f {
                static create(c) {
                    return new f(c.workchain,c.publicKey,c.walletId)
                }
                constructor(c, u, h) {
                    this.workchain = c,
                    this.publicKey = u,
                    h != null ? this.walletId = h : this.walletId = 698983191 + c;
                    let v = g.Cell.fromBoc(l.from("te6ccgECFAEAAtQAART/APSkE/S88sgLAQIBIAIDAgFIBAUE+PKDCNcYINMf0x/THwL4I7vyZO1E0NMf0x/T//QE0VFDuvKhUVG68qIF+QFUEGT5EPKj+AAkpMjLH1JAyx9SMMv/UhD0AMntVPgPAdMHIcAAn2xRkyDXSpbTB9QC+wDoMOAhwAHjACHAAuMAAcADkTDjDQOkyMsfEssfy/8QERITAubQAdDTAyFxsJJfBOAi10nBIJJfBOAC0x8hghBwbHVnvSKCEGRzdHK9sJJfBeAD+kAwIPpEAcjKB8v/ydDtRNCBAUDXIfQEMFyBAQj0Cm+hMbOSXwfgBdM/yCWCEHBsdWe6kjgw4w0DghBkc3RyupJfBuMNBgcCASAICQB4AfoA9AQw+CdvIjBQCqEhvvLgUIIQcGx1Z4MesXCAGFAEywUmzxZY+gIZ9ADLaRfLH1Jgyz8gyYBA+wAGAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+ICASAKCwBZvSQrb2omhAgKBrkPoCGEcNQICEekk30pkQzmkD6f+YN4EoAbeBAUiYcVnzGEAgFYDA0AEbjJftRNDXCx+AA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYAIBIA4PABmtznaiaEAga5Drhf/AABmvHfaiaEAQa5DrhY/AAG7SB/oA1NQi+QAFyMoHFcv/ydB3dIAYyMsFywIizxZQBfoCFMtrEszMyXP7AMhAFIEBCPRR8qcCAHCBAQjXGPoA0z/IVCBHgQEI9FHyp4IQbm90ZXB0gBjIywXLAlAGzxZQBPoCFMtqEssfyz/Jc/sAAgBsgQEI1xj6ANM/MFIkgQEI9Fnyp4IQZHN0cnB0gBjIywXLAlAFzxZQA/oCE8tqyx8Syz/Jc/sAAAr0AMntVA==", "base64"))[0]
                      , E = (0,
                    g.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(this.publicKey).storeBit(0).endCell();
                    this.init = {
                        code: v,
                        data: E
                    },
                    this.address = (0,
                    g.contractAddress)(c, {
                        code: v,
                        data: E
                    })
                }
                async getBalance(c) {
                    return (await c.getState()).balance
                }
                async getSeqno(c) {
                    return (await c.getState()).state.type === "active" ? (await c.get("seqno", [])).stack.readNumber() : 0
                }
                async send(c, u) {
                    await c.external(u)
                }
                async sendTransfer(c, u) {
                    let h = this.createTransfer(u);
                    await this.send(c, h)
                }
                createTransfer(c) {
                    return (0,
                    b.createWalletTransferV4)({
                        ...c,
                        sendMode: c.sendMode ?? g.SendMode.PAY_GAS_SEPARATELY,
                        walletId: this.walletId
                    })
                }
                sender(c, u) {
                    return {
                        send: async h => {
                            let v = await this.getSeqno(c)
                              , E = this.createTransfer({
                                seqno: v,
                                secretKey: u,
                                sendMode: h.sendMode,
                                messages: [(0,
                                g.internal)({
                                    to: h.to,
                                    value: h.value,
                                    init: h.init,
                                    body: h.body,
                                    bounce: h.bounce
                                })]
                            });
                            await this.send(c, E)
                        }
                    }
                }
            }
            s.WalletContractV4 = f
        }
        ),
        8117: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.deriveSymmetricPath = s.deriveSymmetricHardenedKey = s.getSymmetricMasterKeyFromSeed = void 0;
            const g = y(4870)
              , b = "Symmetric key seed";
            async function f(u) {
                const h = await (0,
                g.hmac_sha512)(b, u)
                  , v = h.slice(32)
                  , E = h.slice(0, 32);
                return {
                    key: v,
                    chainCode: E
                }
            }
            s.getSymmetricMasterKeyFromSeed = f;
            async function o(u, h) {
                const v = l.concat([l.alloc(1, 0), l.from(h)])
                  , E = await (0,
                g.hmac_sha512)(u.chainCode, v)
                  , _ = E.slice(32)
                  , w = E.slice(0, 32);
                return {
                    key: _,
                    chainCode: w
                }
            }
            s.deriveSymmetricHardenedKey = o;
            async function c(u, h) {
                let v = await f(u)
                  , E = [...h];
                for (; E.length > 0; ) {
                    let _ = E[0];
                    E = E.slice(1),
                    v = await o(v, _)
                }
                return v.key
            }
            s.deriveSymmetricPath = c
        }
        ),
        8387: (function(H, s, y) {
            "use strict";
            var l = this && this.__createBinding || (Object.create ? (function(b, f, o, c) {
                c === void 0 && (c = o);
                var u = Object.getOwnPropertyDescriptor(f, o);
                (!u || ("get"in u ? !f.__esModule : u.writable || u.configurable)) && (u = {
                    enumerable: !0,
                    get: function() {
                        return f[o]
                    }
                }),
                Object.defineProperty(b, c, u)
            }
            ) : (function(b, f, o, c) {
                c === void 0 && (c = o),
                b[c] = f[o]
            }
            ))
              , g = this && this.__exportStar || function(b, f) {
                for (var o in b)
                    o !== "default" && !Object.prototype.hasOwnProperty.call(f, o) && l(f, b, o)
            }
            ;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            g(y(14112), s),
            g(y(80331), s),
            g(y(27322), s)
        }
        ),
        8461: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = o;
            var l = g(y(83399));
            function g(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var b = /^[0-9]{15}$/
              , f = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
            function o(c, u) {
                (0,
                l.default)(c),
                u = u || {};
                var h = b;
                if (u.allow_hyphens && (h = f),
                !h.test(c))
                    return !1;
                c = c.replace(/-/g, "");
                for (var v = 0, E = 2, _ = 14, w = 0; w < _; w++) {
                    var S = c.substring(_ - w - 1, _ - w)
                      , I = parseInt(S, 10) * E;
                    I >= 10 ? v += I % 10 + 1 : v += I,
                    E === 1 ? E += 1 : E -= 1
                }
                var R = (10 - v % 10) % 10;
                return R === parseInt(c.substring(14, 15), 10)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        8653: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.bytes = void 0;
            const l = y(65534)
              , g = y(76291);
            s.bytes = {
                isDynamic: !0,
                isType: b => b === "bytes",
                getByteLength() {
                    return 32
                },
                encode({buffer: b, value: f, packed: o}) {
                    const c = (0,
                    l.createBytes)(f);
                    if (o)
                        return (0,
                        l.concatBytes)([b, c]);
                    const u = Math.ceil(c.byteLength / 32) * 32;
                    return (0,
                    l.concatBytes)([b, (0,
                    g.padStart)((0,
                    l.numberToBytes)(c.byteLength)), (0,
                    g.padEnd)(c, u)])
                },
                decode({value: b}) {
                    const f = b.subarray(0, 32)
                      , o = (0,
                    l.bytesToNumber)(f);
                    return b.slice(32, 32 + o)
                }
            }
        }
        ),
        9394: ( (H, s, y) => {
            "use strict";
            var l = y(89211);
            H.exports = function() {
                return typeof Object.is == "function" ? Object.is : l
            }
        }
        ),
        9447: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.comment = s.external = s.internal = void 0;
            const l = y(3512)
              , g = y(66902)
              , b = y(65871)
              , f = y(97070)
              , o = y(71784);
            function c(v) {
                let E = !0;
                v.bounce !== null && v.bounce !== void 0 && (E = v.bounce);
                let _;
                if (typeof v.to == "string")
                    _ = l.Address.parse(v.to);
                else if (l.Address.isAddress(v.to))
                    _ = v.to;
                else
                    throw new Error(`Invalid address ${v.to}`);
                let w;
                typeof v.value == "string" ? w = (0,
                f.toNano)(v.value) : w = v.value;
                let S;
                v.extracurrency && (S = (0,
                o.packExtraCurrencyDict)(v.extracurrency));
                let I = g.Cell.EMPTY;
                return typeof v.body == "string" ? I = (0,
                b.beginCell)().storeUint(0, 32).storeStringTail(v.body).endCell() : v.body && (I = v.body),
                {
                    info: {
                        type: "internal",
                        dest: _,
                        value: {
                            coins: w,
                            other: S
                        },
                        bounce: E,
                        ihrDisabled: !0,
                        bounced: !1,
                        ihrFee: 0n,
                        forwardFee: 0n,
                        createdAt: 0,
                        createdLt: 0n
                    },
                    init: v.init ?? void 0,
                    body: I
                }
            }
            s.internal = c;
            function u(v) {
                let E;
                if (typeof v.to == "string")
                    E = l.Address.parse(v.to);
                else if (l.Address.isAddress(v.to))
                    E = v.to;
                else
                    throw new Error(`Invalid address ${v.to}`);
                return {
                    info: {
                        type: "external-in",
                        dest: E,
                        importFee: 0n
                    },
                    init: v.init ?? void 0,
                    body: v.body || g.Cell.EMPTY
                }
            }
            s.external = u;
            function h(v) {
                return (0,
                b.beginCell)().storeUint(0, 32).storeStringTail(v).endCell()
            }
            s.comment = h
        }
        ),
        9805: ( (H, s) => {
            "use strict";
            var y = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
            function l(f, o) {
                return Object.prototype.hasOwnProperty.call(f, o)
            }
            s.assign = function(f) {
                for (var o = Array.prototype.slice.call(arguments, 1); o.length; ) {
                    var c = o.shift();
                    if (c) {
                        if (typeof c != "object")
                            throw new TypeError(c + "must be non-object");
                        for (var u in c)
                            l(c, u) && (f[u] = c[u])
                    }
                }
                return f
            }
            ,
            s.shrinkBuf = function(f, o) {
                return f.length === o ? f : f.subarray ? f.subarray(0, o) : (f.length = o,
                f)
            }
            ;
            var g = {
                arraySet: function(f, o, c, u, h) {
                    if (o.subarray && f.subarray) {
                        f.set(o.subarray(c, c + u), h);
                        return
                    }
                    for (var v = 0; v < u; v++)
                        f[h + v] = o[c + v]
                },
                flattenChunks: function(f) {
                    var o, c, u, h, v, E;
                    for (u = 0,
                    o = 0,
                    c = f.length; o < c; o++)
                        u += f[o].length;
                    for (E = new Uint8Array(u),
                    h = 0,
                    o = 0,
                    c = f.length; o < c; o++)
                        v = f[o],
                        E.set(v, h),
                        h += v.length;
                    return E
                }
            }
              , b = {
                arraySet: function(f, o, c, u, h) {
                    for (var v = 0; v < u; v++)
                        f[h + v] = o[c + v]
                },
                flattenChunks: function(f) {
                    return [].concat.apply([], f)
                }
            };
            s.setTyped = function(f) {
                f ? (s.Buf8 = Uint8Array,
                s.Buf16 = Uint16Array,
                s.Buf32 = Int32Array,
                s.assign(s, g)) : (s.Buf8 = Array,
                s.Buf16 = Array,
                s.Buf32 = Array,
                s.assign(s, b))
            }
            ,
            s.setTyped(y)
        }
        ),
        9896: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.getRepr = s.getBitsDescriptor = s.getRefsDescriptor = void 0;
            const g = y(34654)
              , b = y(34382);
            function f(u, h, v) {
                return u.length + (v !== g.CellType.Ordinary ? 1 : 0) * 8 + h * 32
            }
            s.getRefsDescriptor = f;
            function o(u) {
                let h = u.length;
                return Math.ceil(h / 8) + Math.floor(h / 8)
            }
            s.getBitsDescriptor = o;
            function c(u, h, v, E, _, w) {
                const S = Math.ceil(h.length / 8)
                  , I = l.alloc(2 + S + 34 * v.length);
                let R = 0;
                I[R++] = f(v, _, w),
                I[R++] = o(u),
                (0,
                b.bitsToPaddedBuffer)(h).copy(I, R),
                R += S;
                for (const M of v) {
                    let O;
                    w == g.CellType.MerkleProof || w == g.CellType.MerkleUpdate ? O = M.depth(E + 1) : O = M.depth(E),
                    I[R++] = Math.floor(O / 256),
                    I[R++] = O % 256
                }
                for (const M of v) {
                    let O;
                    w == g.CellType.MerkleProof || w == g.CellType.MerkleUpdate ? O = M.hash(E + 1) : O = M.hash(E),
                    O.copy(I, R),
                    R += 32
                }
                return I
            }
            s.getRepr = c
        }
        ),
        9957: ( (H, s, y) => {
            "use strict";
            var l = Function.prototype.call
              , g = Object.prototype.hasOwnProperty
              , b = y(66743);
            H.exports = b.call(l, g)
        }
        ),
        9970: ( (H, s, y) => {
            const l = y(50560)
              , g = (b, f, o) => l(f, b, o);
            H.exports = g
        }
        ),
        10076: (H => {
            "use strict";
            H.exports = Function.prototype.call
        }
        ),
        10132: (function(H, s, y) {
            "use strict";
            var l = y(48287).Buffer
              , g = this && this.__importDefault || function(re) {
                return re && re.__esModule ? re : {
                    default: re
                }
            }
            ;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.mnemonicFromRandomSeed = s.mnemonicIndexesToBytes = s.bytesToMnemonics = s.bytesToMnemonicIndexes = s.mnemonicNew = s.mnemonicValidate = s.mnemonicToHDSeed = s.mnemonicToWalletKey = s.mnemonicToPrivateKey = s.mnemonicToSeed = s.mnemonicToEntropy = void 0;
            const b = g(y(88947))
              , f = y(51682)
              , o = y(4870)
              , c = y(59256)
              , u = y(12202)
              , h = y(4436)
              , v = 1e5;
            async function E(re) {
                const se = await I(re);
                return await S(se) && !await w(se)
            }
            function _(re) {
                return re.map(se => se.toLowerCase().trim())
            }
            async function w(re) {
                return (await (0,
                c.pbkdf2_sha512)(re, "TON seed version", Math.max(1, Math.floor(v / 256)), 64))[0] == 0
            }
            async function S(re) {
                return (await (0,
                c.pbkdf2_sha512)(re, "TON fast seed version", 1, 64))[0] == 1
            }
            async function I(re, se) {
                return await (0,
                o.hmac_sha512)(re.join(" "), se && se.length > 0 ? se : "")
            }
            s.mnemonicToEntropy = I;
            async function R(re, se, te) {
                const Z = await I(re, te);
                return await (0,
                c.pbkdf2_sha512)(Z, se, v, 64)
            }
            s.mnemonicToSeed = R;
            async function M(re, se) {
                re = _(re);
                const te = await R(re, "TON default seed", se);
                let Z = b.default.sign.keyPair.fromSeed(te.slice(0, 32));
                return {
                    publicKey: l.from(Z.publicKey),
                    secretKey: l.from(Z.secretKey)
                }
            }
            s.mnemonicToPrivateKey = M;
            async function O(re, se) {
                let Z = (await M(re, se)).secretKey.slice(0, 32);
                const F = b.default.sign.keyPair.fromSeed(Z);
                return {
                    publicKey: l.from(F.publicKey),
                    secretKey: l.from(F.secretKey)
                }
            }
            s.mnemonicToWalletKey = O;
            async function k(re, se) {
                return re = _(re),
                await R(re, "TON HD Keys seed", se)
            }
            s.mnemonicToHDSeed = k;
            async function W(re, se) {
                re = _(re);
                for (let te of re)
                    if (h.wordlist.indexOf(te) < 0)
                        return !1;
                return se && se.length > 0 && !await E(re) ? !1 : await w(await I(re, se))
            }
            s.mnemonicValidate = W;
            async function G(re=24, se) {
                let te = [];
                for (; ; ) {
                    te = [];
                    for (let Z = 0; Z < re; Z++) {
                        let F = await (0,
                        f.getSecureRandomNumber)(0, h.wordlist.length);
                        te.push(h.wordlist[F])
                    }
                    if (!(se && se.length > 0 && !await E(te)) && await w(await I(te, se)))
                        break
                }
                return te
            }
            s.mnemonicNew = G;
            function Y(re, se) {
                let te = (0,
                u.bytesToBits)(re)
                  , Z = [];
                for (let F = 0; F < se; F++) {
                    let D = te.slice(F * 11, F * 11 + 11);
                    Z.push(parseInt(D, 2))
                }
                return Z
            }
            s.bytesToMnemonicIndexes = Y;
            function j(re, se) {
                let te = Y(re, se)
                  , Z = [];
                for (let F of te)
                    Z.push(h.wordlist[F]);
                return Z
            }
            s.bytesToMnemonics = j;
            function V(re) {
                let se = "";
                for (let te of re) {
                    if (!Number.isSafeInteger(te) || te < 0 || te >= 2028)
                        throw Error("Invalid input");
                    se += (0,
                    u.lpad)(te.toString(2), "0", 11)
                }
                for (; se.length % 8 !== 0; )
                    se = se + "0";
                return (0,
                u.bitsToBytes)(se)
            }
            s.mnemonicIndexesToBytes = V;
            async function ee(re, se=24, te) {
                const Z = Math.ceil(se * 11 / 8);
                let F = re;
                for (; ; ) {
                    let D = await (0,
                    c.pbkdf2_sha512)(F, "TON mnemonic seed", Math.max(1, Math.floor(v / 256)), Z)
                      , T = j(D, se);
                    if (await W(T, te))
                        return T;
                    F = D
                }
            }
            s.mnemonicFromRandomSeed = ee
        }
        ),
        10487: ( (H, s, y) => {
            "use strict";
            var l = y(96897)
              , g = y(30655)
              , b = y(73126)
              , f = y(12205);
            H.exports = function(c) {
                var u = b(arguments)
                  , h = c.length - (arguments.length - 1);
                return l(u, 1 + (h > 0 ? h : 0), !0)
            }
            ,
            g ? g(H.exports, "apply", {
                value: f
            }) : H.exports.apply = f
        }
        ),
        10574: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.storeCurrencyCollection = s.loadCurrencyCollection = void 0;
            const l = y(97590);
            function g(f) {
                const o = f.loadCoins()
                  , c = f.loadDict(l.Dictionary.Keys.Uint(32), l.Dictionary.Values.BigVarUint(5));
                return c.size === 0 ? {
                    coins: o
                } : {
                    other: c,
                    coins: o
                }
            }
            s.loadCurrencyCollection = g;
            function b(f) {
                return o => {
                    o.storeCoins(f.coins),
                    f.other ? o.storeDict(f.other) : o.storeBit(0)
                }
            }
            s.storeCurrencyCollection = b
        }
        ),
        10676: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = f;
            var l = g(y(83399));
            function g(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }
            var b = {
                "cs-CZ": function(c) {
                    return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(c)
                },
                "de-DE": function(c) {
                    return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(c)
                },
                "de-LI": function(c) {
                    return /^FL[- ]?\d{1,5}[UZ]?$/.test(c)
                },
                "en-IN": function(c) {
                    return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(c)
                },
                "en-SG": function(c) {
                    return /^[A-Z]{3}[ -]?[\d]{4}[ -]?[A-Z]{1}$/.test(c)
                },
                "es-AR": function(c) {
                    return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(c)
                },
                "fi-FI": function(c) {
                    return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(c)
                },
                "hu-HU": function(c) {
                    return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(c)
                },
                "pt-BR": function(c) {
                    return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(c)
                },
                "pt-PT": function(c) {
                    return /^(([A-Z]{2}[ -·]?[0-9]{2}[ -·]?[0-9]{2})|([0-9]{2}[ -·]?[A-Z]{2}[ -·]?[0-9]{2})|([0-9]{2}[ -·]?[0-9]{2}[ -·]?[A-Z]{2})|([A-Z]{2}[ -·]?[0-9]{2}[ -·]?[A-Z]{2}))$/.test(c)
                },
                "sq-AL": function(c) {
                    return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(c)
                },
                "sv-SE": function(c) {
                    return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(c.trim())
                },
                "en-PK": function(c) {
                    return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(c.trim())
                }
            };
            function f(o, c) {
                if ((0,
                l.default)(o),
                c in b)
                    return b[c](o);
                if (c === "any") {
                    for (var u in b) {
                        var h = b[u];
                        if (h(o))
                            return !0
                    }
                    return !1
                }
                throw new Error("Invalid locale '".concat(c, "'"))
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        11002: (H => {
            "use strict";
            H.exports = Function.prototype.apply
        }
        ),
        11065: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.storeTransactionCreditPhase = s.loadTransactionCreditPhase = void 0;
            const l = y(10574);
            function g(f) {
                const o = f.loadBit() ? f.loadCoins() : void 0
                  , c = (0,
                l.loadCurrencyCollection)(f);
                return {
                    dueFeesColelcted: o,
                    credit: c
                }
            }
            s.loadTransactionCreditPhase = g;
            function b(f) {
                return o => {
                    f.dueFeesColelcted === null || f.dueFeesColelcted === void 0 ? o.storeBit(!1) : (o.storeBit(!0),
                    o.storeCoins(f.dueFeesColelcted)),
                    o.store((0,
                    l.storeCurrencyCollection)(f.credit))
                }
            }
            s.storeTransactionCreditPhase = b
        }
        ),
        11083: ( (H, s, y) => {
            var l = y(11568)
              , g = y(88835)
              , b = H.exports;
            for (var f in l)
                l.hasOwnProperty(f) && (b[f] = l[f]);
            b.request = function(c, u) {
                return c = o(c),
                l.request.call(this, c, u)
            }
            ,
            b.get = function(c, u) {
                return c = o(c),
                l.get.call(this, c, u)
            }
            ;
            function o(c) {
                if (typeof c == "string" && (c = g.parse(c)),
                c.protocol || (c.protocol = "https:"),
                c.protocol !== "https:")
                    throw new Error('Protocol "' + c.protocol + '" not supported. Expected "https:"');
                return c
            }
        }
        ),
        11514: ( (H, s, y) => {
            "use strict";
            var l = y(38403)
              , g = function() {
                if (!Object.assign)
                    return !1;
                for (var f = "abcdefghijklmnopqrst", o = f.split(""), c = {}, u = 0; u < o.length; ++u)
                    c[o[u]] = o[u];
                var h = Object.assign({}, c)
                  , v = "";
                for (var E in h)
                    v += E;
                return f !== v
            }
              , b = function() {
                if (!Object.assign || !Object.preventExtensions)
                    return !1;
                var f = Object.preventExtensions({
                    1: 2
                });
                try {
                    Object.assign(f, "xy")
                } catch {
                    return f[1] === "y"
                }
                return !1
            };
            H.exports = function() {
                return !Object.assign || g() || b() ? l : Object.assign
            }
        }
        ),
        11568: ( (H, s, y) => {
            var l = y(55537)
              , g = y(6917)
              , b = y(57510)
              , f = y(86866)
              , o = y(88835)
              , c = s;
            c.request = function(u, h) {
                typeof u == "string" ? u = o.parse(u) : u = b(u);
                var v = y.g.location.protocol.search(/^https?:$/) === -1 ? "http:" : ""
                  , E = u.protocol || v
                  , _ = u.hostname || u.host
                  , w = u.port
                  , S = u.path || "/";
                _ && _.indexOf(":") !== -1 && (_ = "[" + _ + "]"),
                u.url = (_ ? E + "//" + _ : "") + (w ? ":" + w : "") + S,
                u.method = (u.method || "GET").toUpperCase(),
                u.headers = u.headers || {};
                var I = new l(u);
                return h && I.on("response", h),
                I
            }
            ,
            c.get = function(h, v) {
                var E = c.request(h, v);
                return E.end(),
                E
            }
            ,
            c.ClientRequest = l,
            c.IncomingMessage = g.IncomingMessage,
            c.Agent = function() {}
            ,
            c.Agent.defaultMaxSockets = 4,
            c.globalAgent = new c.Agent,
            c.STATUS_CODES = f,
            c.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
        }
        ),
        11763: ( (H, s, y) => {
            const l = y(50560)
              , g = (b, f) => l(b, f, !0);
            H.exports = g
        }
        ),
        12202: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.bitsToBytes = s.bytesToBits = s.lpad = void 0;
            function g(o, c, u) {
                for (; o.length < u; )
                    o = c + o;
                return o
            }
            s.lpad = g;
            function b(o) {
                let c = "";
                for (let u = 0; u < o.length; u++) {
                    let h = o.at(u);
                    c += g(h.toString(2), "0", 8)
                }
                return c
            }
            s.bytesToBits = b;
            function f(o) {
                if (o.length % 8 !== 0)
                    throw Error("Uneven bits");
                let c = [];
                for (; o.length > 0; )
                    c.push(parseInt(o.slice(0, 8), 2)),
                    o = o.slice(8);
                return l.from(c)
            }
            s.bitsToBytes = f
        }
        ),
        12205: ( (H, s, y) => {
            "use strict";
            var l = y(66743)
              , g = y(11002)
              , b = y(13144);
            H.exports = function() {
                return b(l, g, arguments)
            }
        }
        ),
        12458: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.recoverTypedSignature = s.signTypedData = s.typedSignatureHash = s.TypedDataUtils = s.TYPED_MESSAGE_SCHEMA = s.SignTypedDataVersion = void 0;
            const l = y(68683)
              , g = y(33537)
              , b = y(78366)
              , f = y(76291)
              , o = y(65534)
              , c = y(32019)
              , u = y(43007);
            var h;
            (function(Z) {
                Z.V1 = "V1",
                Z.V3 = "V3",
                Z.V4 = "V4"
            }
            )(h = s.SignTypedDataVersion || (s.SignTypedDataVersion = {})),
            s.TYPED_MESSAGE_SCHEMA = {
                type: "object",
                properties: {
                    types: {
                        type: "object",
                        additionalProperties: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                required: ["name", "type"]
                            }
                        }
                    },
                    primaryType: {
                        type: "string"
                    },
                    domain: {
                        type: "object"
                    },
                    message: {
                        type: "object"
                    }
                },
                required: ["types", "primaryType", "domain", "message"]
            };
            function v(Z, F) {
                if (Object.keys(h).includes(Z)) {
                    if (F && !F.includes(Z))
                        throw new Error(`SignTypedDataVersion not allowed: '${Z}'. Allowed versions are: ${F.join(", ")}`)
                } else
                    throw new Error(`Invalid version: '${Z}'`)
            }
            function E(Z, F) {
                (0,
                o.assert)(F !== null, `Unable to encode value: Invalid number. Expected a valid number value, but received "${F}".`);
                const D = BigInt(F)
                  , T = (0,
                b.getLength)(Z)
                  , P = BigInt(2) ** BigInt(T) - BigInt(1);
                return (0,
                o.assert)(D >= -P && D <= P, `Unable to encode value: Number "${F}" is out of range for type "${Z}".`),
                D
            }
            function _(Z) {
                let F = BigInt(0);
                for (let D = 0; D < Z.length; D++) {
                    const T = BigInt(Z.charCodeAt(D) - 48);
                    F *= BigInt(10),
                    T >= 49 ? F += T - BigInt(49) + BigInt(10) : T >= 17 ? F += T - BigInt(17) + BigInt(10) : F += T
                }
                return (0,
                f.padStart)((0,
                o.bigIntToBytes)(F), 20)
            }
            function w(Z, F, D, T, P) {
                if (v(P, [h.V3, h.V4]),
                Z[D] !== void 0)
                    return ["bytes32", P === h.V4 && T == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : (0,
                    l.arrToBufArr)((0,
                    c.keccak256)(S(D, T, Z, P)))];
                if (D === "function")
                    throw new Error('Unsupported or invalid type: "function"');
                if (T === void 0)
                    throw new Error(`missing value for field ${F} of type ${D}`);
                if (D === "address") {
                    if (typeof T == "number")
                        return ["address", (0,
                        f.padStart)((0,
                        o.numberToBytes)(T), 20)];
                    if ((0,
                    o.isStrictHexString)(T))
                        return ["address", (0,
                        o.add0x)(T)];
                    if (typeof T == "string")
                        return ["address", _(T).subarray(0, 20)]
                }
                if (D === "bool")
                    return ["bool", !!T];
                if (D === "bytes")
                    return typeof T == "number" ? T = (0,
                    o.numberToBytes)(T) : (0,
                    o.isStrictHexString)(T) || T === "0x" ? T = (0,
                    o.hexToBytes)(T) : typeof T == "string" && (T = (0,
                    o.stringToBytes)(T)),
                    ["bytes32", (0,
                    l.arrToBufArr)((0,
                    c.keccak256)(T))];
                if (D.startsWith("bytes") && D !== "bytes" && !D.includes("["))
                    return typeof T == "number" ? T < 0 ? ["bytes32", new Uint8Array(32)] : ["bytes32", (0,
                    o.bigIntToBytes)(BigInt(T))] : (0,
                    o.isStrictHexString)(T) ? ["bytes32", (0,
                    o.hexToBytes)(T)] : ["bytes32", T];
                if (D.startsWith("int") && !D.includes("[")) {
                    const C = E(D, T);
                    return C >= BigInt(0) ? ["uint256", C] : ["int256", C]
                }
                if (D === "string")
                    return typeof T == "number" ? T = (0,
                    o.numberToBytes)(T) : T = (0,
                    o.stringToBytes)(T ?? ""),
                    ["bytes32", (0,
                    l.arrToBufArr)((0,
                    c.keccak256)(T))];
                if (D.endsWith("]")) {
                    if (P === h.V3)
                        throw new Error("Arrays are unimplemented in encodeData; use V4 extension");
                    const C = D.slice(0, D.lastIndexOf("["))
                      , q = T.map($ => w(Z, F, C, $, P));
                    return ["bytes32", (0,
                    l.arrToBufArr)((0,
                    c.keccak256)((0,
                    g.encode)(q.map( ([$]) => $), q.map( ([,$]) => $))))]
                }
                return [D, T]
            }
            function S(Z, F, D, T) {
                v(T, [h.V3, h.V4]);
                const P = ["bytes32"]
                  , C = [O(Z, D)];
                for (const q of D[Z]) {
                    if (T === h.V3 && F[q.name] === void 0)
                        continue;
                    const [$,ie] = w(D, q.name, q.type, F[q.name], T);
                    P.push($),
                    C.push(ie)
                }
                return (0,
                l.arrToBufArr)((0,
                g.encode)(P, C))
            }
            function I(Z, F) {
                let D = "";
                const T = R(Z, F);
                T.delete(Z);
                const P = [Z, ...Array.from(T).sort()];
                for (const C of P) {
                    if (!F[C])
                        throw new Error(`No type definition specified: ${C}`);
                    D += `${C}(${F[C].map( ({name: $, type: ie}) => `${ie} ${$}`).join(",")})`
                }
                return D
            }
            function R(Z, F, D=new Set) {
                if (typeof Z != "string")
                    throw new Error(`Invalid findTypeDependencies input ${JSON.stringify(Z)}`);
                if ([Z] = Z.match(/^\w*/u),
                D.has(Z) || F[Z] === void 0)
                    return D;
                D.add(Z);
                for (const P of F[Z])
                    R(P.type, F, D);
                return D
            }
            function M(Z, F, D, T) {
                v(T, [h.V3, h.V4]);
                const P = S(Z, F, D, T)
                  , C = (0,
                c.keccak256)(P);
                return (0,
                l.arrToBufArr)(C)
            }
            function O(Z, F) {
                const D = (0,
                o.stringToBytes)(I(Z, F));
                return (0,
                l.arrToBufArr)((0,
                c.keccak256)(D))
            }
            function k(Z) {
                const F = {};
                for (const D in s.TYPED_MESSAGE_SCHEMA.properties)
                    Z[D] && (F[D] = Z[D]);
                return "types"in F && (F.types = Object.assign({
                    EIP712Domain: []
                }, F.types)),
                F
            }
            function W(Z, F) {
                v(F, [h.V3, h.V4]);
                const D = k(Z)
                  , {domain: T} = D
                  , P = {
                    EIP712Domain: D.types.EIP712Domain
                };
                return M("EIP712Domain", T, P, F)
            }
            function G(Z, F) {
                v(F, [h.V3, h.V4]);
                const D = k(Z)
                  , T = [(0,
                o.hexToBytes)("1901")];
                return T.push(W(Z, F)),
                D.primaryType !== "EIP712Domain" && T.push(M(D.primaryType, D.message, D.types, F)),
                (0,
                l.arrToBufArr)((0,
                c.keccak256)((0,
                o.concatBytes)(T)))
            }
            s.TypedDataUtils = {
                encodeData: S,
                encodeType: I,
                findTypeDependencies: R,
                hashStruct: M,
                hashType: O,
                sanitizeData: k,
                eip712Hash: G,
                eip712DomainHash: W
            };
            function Y(Z) {
                const F = re(Z);
                return (0,
                o.bytesToHex)(F)
            }
            s.typedSignatureHash = Y;
            function j(Z, F) {
                if ((0,
                b.isArrayType)(Z) && Array.isArray(F)) {
                    const [D] = (0,
                    b.getArrayType)(Z);
                    return F.map(T => j(D, T))
                }
                if (Z === "address") {
                    if (typeof F == "number")
                        return (0,
                        f.padStart)((0,
                        o.numberToBytes)(F), 20);
                    if ((0,
                    o.isStrictHexString)(F))
                        return (0,
                        f.padStart)((0,
                        o.hexToBytes)(F).subarray(0, 20), 20);
                    if (F instanceof Uint8Array)
                        return (0,
                        f.padStart)(F.subarray(0, 20), 20)
                }
                if (Z === "bool")
                    return !!F;
                if (Z.startsWith("bytes") && Z !== "bytes") {
                    const D = (0,
                    b.getByteLength)(Z);
                    if (typeof F == "number")
                        return F < 0 ? new Uint8Array : (0,
                        o.numberToBytes)(F).subarray(0, D);
                    if ((0,
                    o.isStrictHexString)(F))
                        return (0,
                        o.hexToBytes)(F).subarray(0, D);
                    if (F instanceof Uint8Array)
                        return F.subarray(0, D)
                }
                if (Z.startsWith("uint") && typeof F == "number")
                    return Math.abs(F);
                if (Z.startsWith("int") && typeof F == "number") {
                    const D = (0,
                    b.getLength)(Z);
                    return BigInt.asIntN(D, BigInt(F))
                }
                return F
            }
            function V(Z) {
                return Z.map(F => typeof F == "number" ? (0,
                f.padStart)((0,
                o.numberToBytes)(F), 32) : (0,
                o.isStrictHexString)(F) ? (0,
                f.padStart)((0,
                o.hexToBytes)(F).subarray(0, 32), 32) : F instanceof Uint8Array ? (0,
                f.padStart)(F.subarray(0, 32), 32) : F)
            }
            function ee(Z, F) {
                return F.map(D => {
                    if (typeof D == "string" || typeof D == "number" || typeof D == "bigint") {
                        const T = E(Z, D);
                        if (T >= BigInt(0))
                            return (0,
                            f.padStart)((0,
                            o.bigIntToBytes)(T), 32);
                        const P = (0,
                        b.getLength)(Z)
                          , C = BigInt.asIntN(P, T);
                        return (0,
                        o.signedBigIntToBytes)(C, 32)
                    }
                    return D
                }
                )
            }
            function re(Z) {
                const F = new Error("Expect argument to be non-empty array");
                if (typeof Z != "object" || !("length"in Z) || !Z.length)
                    throw F;
                const D = Z.map( ({name: q, type: $, value: ie}) => {
                    if ($ === "address[]")
                        return {
                            name: q,
                            type: "bytes32[]",
                            value: V(ie)
                        };
                    if ($.startsWith("int") && (0,
                    b.isArrayType)($)) {
                        const [he,ce] = (0,
                        b.getArrayType)($);
                        return {
                            name: q,
                            type: `bytes32[${ce ?? ""}]`,
                            value: ee(he, ie)
                        }
                    }
                    return {
                        name: q,
                        type: $,
                        value: j($, ie)
                    }
                }
                )
                  , T = D.map(q => q.type !== "bytes" ? q.value : (0,
                u.legacyToBuffer)(q.value))
                  , P = D.map(q => {
                    if (q.type === "function")
                        throw new Error('Unsupported or invalid type: "function"');
                    return q.type
                }
                )
                  , C = Z.map(q => {
                    if (!q.name)
                        throw F;
                    return `${q.type} ${q.name}`
                }
                );
                return (0,
                l.arrToBufArr)((0,
                c.keccak256)((0,
                g.encodePacked)(["bytes32", "bytes32"], [(0,
                c.keccak256)((0,
                g.encodePacked)(["string[]"], [C], !0)), (0,
                c.keccak256)((0,
                g.encodePacked)(P, T, !0))])))
            }
            function se({privateKey: Z, data: F, version: D}) {
                if (v(D),
                (0,
                u.isNullish)(F))
                    throw new Error("Missing data parameter");
                if ((0,
                u.isNullish)(Z))
                    throw new Error("Missing private key parameter");
                const T = D === h.V1 ? re(F) : s.TypedDataUtils.eip712Hash(F, D)
                  , P = (0,
                l.ecsign)(T, Z);
                return (0,
                u.concatSig)((0,
                l.arrToBufArr)((0,
                o.bigIntToBytes)(P.v)), P.r, P.s)
            }
            s.signTypedData = se;
            function te({data: Z, signature: F, version: D}) {
                if (v(D),
                (0,
                u.isNullish)(Z))
                    throw new Error("Missing data parameter");
                if ((0,
                u.isNullish)(F))
                    throw new Error("Missing signature parameter");
                const T = D === h.V1 ? re(Z) : s.TypedDataUtils.eip712Hash(Z, D)
                  , P = (0,
                u.recoverPublicKey)(T, F)
                  , C = (0,
                l.publicToAddress)(P);
                return (0,
                o.bytesToHex)(C)
            }
            s.recoverTypedSignature = te
        }
        ),
        12483: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = b;
            var l = g(y(83399));
            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            function b(f, o) {
                if ((0,
                l.default)(f),
                o) {
                    var c = new RegExp("[".concat(o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"),"g");
                    return f.replace(c, "")
                }
                for (var u = f.length - 1; /\s/.test(f.charAt(u)); )
                    u -= 1;
                return f.slice(0, u + 1)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        13003: (H => {
            "use strict";
            H.exports = function(y) {
                return y !== y
            }
        }
        ),
        13144: ( (H, s, y) => {
            "use strict";
            var l = y(66743)
              , g = y(11002)
              , b = y(10076)
              , f = y(47119);
            H.exports = f || l.call(b, g)
        }
        ),
        13237: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.farsiLocales = s.englishLocales = s.dotDecimal = s.decimal = s.commaDecimal = s.bengaliLocales = s.arabicLocales = s.alphanumeric = s.alpha = void 0;
            for (var y = s.alpha = {
                "en-US": /^[A-Z]+$/i,
                "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
                "bg-BG": /^[А-Я]+$/i,
                "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
                "da-DK": /^[A-ZÆØÅ]+$/i,
                "de-DE": /^[A-ZÄÖÜß]+$/i,
                "el-GR": /^[Α-ώ]+$/i,
                "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
                "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
                "fi-FI": /^[A-ZÅÄÖ]+$/i,
                "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
                "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
                "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
                "nb-NO": /^[A-ZÆØÅ]+$/i,
                "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
                "nn-NO": /^[A-ZÆØÅ]+$/i,
                "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
                "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
                "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
                "ru-RU": /^[А-ЯЁ]+$/i,
                "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
                "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
                "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
                "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
                "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
                "sv-SE": /^[A-ZÅÄÖ]+$/i,
                "th-TH": /^[ก-๐\s]+$/i,
                "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
                "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
                "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
                "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
                "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
                ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
                he: /^[א-ת]+$/,
                fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
                bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
                eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
                "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
                "si-LK": /^[\u0D80-\u0DFF]+$/,
                "ta-IN": /^[\u0B80-\u0BFF]+$/i,
                "te-IN": /^[\u0C00-\u0C7F]+$/i,
                "kn-IN": /^[\u0C80-\u0CFF]+$/i,
                "ml-IN": /^[\u0D00-\u0D7F]+$/i,
                "gu-IN": /^[\u0A80-\u0AFF]+$/i,
                "pa-IN": /^[\u0A00-\u0A7F]+$/i,
                "or-IN": /^[\u0B00-\u0B7F]+$/i
            }, l = s.alphanumeric = {
                "en-US": /^[0-9A-Z]+$/i,
                "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
                "bg-BG": /^[0-9А-Я]+$/i,
                "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
                "da-DK": /^[0-9A-ZÆØÅ]+$/i,
                "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
                "el-GR": /^[0-9Α-ω]+$/i,
                "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
                "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
                "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
                "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
                "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
                "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
                "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
                "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
                "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
                "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
                "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
                "ru-RU": /^[0-9А-ЯЁ]+$/i,
                "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
                "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
                "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
                "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
                "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
                "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
                "th-TH": /^[ก-๙\s]+$/i,
                "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
                "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
                "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
                "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
                "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
                ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
                he: /^[0-9א-ת]+$/,
                fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
                bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
                eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
                "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
                "si-LK": /^[0-9\u0D80-\u0DFF]+$/,
                "ta-IN": /^[0-9\u0B80-\u0BFF.]+$/i,
                "te-IN": /^[0-9\u0C00-\u0C7F.]+$/i,
                "kn-IN": /^[0-9\u0C80-\u0CFF.]+$/i,
                "ml-IN": /^[0-9\u0D00-\u0D7F.]+$/i,
                "gu-IN": /^[0-9\u0A80-\u0AFF.]+$/i,
                "pa-IN": /^[0-9\u0A00-\u0A7F.]+$/i,
                "or-IN": /^[0-9\u0B00-\u0B7F.]+$/i
            }, g = s.decimal = {
                "en-US": ".",
                ar: "\u066B"
            }, b = s.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"], f, o = 0; o < b.length; o++)
                f = "en-".concat(b[o]),
                y[f] = y["en-US"],
                l[f] = l["en-US"],
                g[f] = g["en-US"];
            for (var c = s.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"], u, h = 0; h < c.length; h++)
                u = "ar-".concat(c[h]),
                y[u] = y.ar,
                l[u] = l.ar,
                g[u] = g.ar;
            for (var v = s.farsiLocales = ["IR", "AF"], E, _ = 0; _ < v.length; _++)
                E = "fa-".concat(v[_]),
                l[E] = l.fa,
                g[E] = g.ar;
            for (var w = s.bengaliLocales = ["BD", "IN"], S, I = 0; I < w.length; I++)
                S = "bn-".concat(w[I]),
                y[S] = y.bn,
                l[S] = l.bn,
                g[S] = g["en-US"];
            for (var R = s.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"], M = s.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "gu-IN", "hi-IN", "hu-HU", "id-ID", "it-IT", "kk-KZ", "kn-IN", "ku-IQ", "ml-IN", "nb-NO", "nl-NL", "nn-NO", "or-IN", "pa-IN", "pl-PL", "pt-PT", "ru-RU", "si-LK", "sl-SI", "sr-RS", "sr-RS@latin", "sv-SE", "ta-IN", "te-IN", "tr-TR", "uk-UA", "vi-VN"], O = 0; O < R.length; O++)
                g[R[O]] = g["en-US"];
            for (var k = 0; k < M.length; k++)
                g[M[k]] = ",";
            y["fr-CA"] = y["fr-FR"],
            l["fr-CA"] = l["fr-FR"],
            y["pt-BR"] = y["pt-PT"],
            l["pt-BR"] = l["pt-PT"],
            g["pt-BR"] = g["pt-PT"],
            y["pl-Pl"] = y["pl-PL"],
            l["pl-Pl"] = l["pl-PL"],
            g["pl-Pl"] = g["pl-PL"],
            y["fa-AF"] = y.fa
        }
        ),
        13543: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.storeTransactionDescription = s.loadTransactionDescription = void 0;
            const l = y(65871)
              , g = y(49589)
              , b = y(96305)
              , f = y(464)
              , o = y(35726)
              , c = y(53857)
              , u = y(11065)
              , h = y(58353);
            function v(_) {
                let w = _.loadUint(4);
                if (w === 0) {
                    const S = _.loadBit();
                    let I;
                    _.loadBit() && (I = (0,
                    h.loadTransactionStoragePhase)(_));
                    let R;
                    _.loadBit() && (R = (0,
                    u.loadTransactionCreditPhase)(_));
                    let M = (0,
                    c.loadTransactionComputePhase)(_), O;
                    _.loadBit() && (O = (0,
                    f.loadTransactionActionPhase)(_.loadRef().beginParse()));
                    let k = _.loadBit(), W;
                    _.loadBit() && (W = (0,
                    o.loadTransactionBouncePhase)(_));
                    const G = _.loadBit();
                    return {
                        type: "generic",
                        creditFirst: S,
                        storagePhase: I,
                        creditPhase: R,
                        computePhase: M,
                        actionPhase: O,
                        bouncePhase: W,
                        aborted: k,
                        destroyed: G
                    }
                }
                if (w === 1)
                    return {
                        type: "storage",
                        storagePhase: (0,
                        h.loadTransactionStoragePhase)(_)
                    };
                if (w === 2 || w === 3) {
                    const S = w === 3;
                    let I = (0,
                    h.loadTransactionStoragePhase)(_), R = (0,
                    c.loadTransactionComputePhase)(_), M;
                    _.loadBit() && (M = (0,
                    f.loadTransactionActionPhase)(_.loadRef().beginParse()));
                    const O = _.loadBit()
                      , k = _.loadBit();
                    return {
                        type: "tick-tock",
                        isTock: S,
                        storagePhase: I,
                        computePhase: R,
                        actionPhase: M,
                        aborted: O,
                        destroyed: k
                    }
                }
                if (w === 4) {
                    let S = (0,
                    g.loadSplitMergeInfo)(_), I;
                    _.loadBit() && (I = (0,
                    h.loadTransactionStoragePhase)(_));
                    let R = (0,
                    c.loadTransactionComputePhase)(_), M;
                    _.loadBit() && (M = (0,
                    f.loadTransactionActionPhase)(_.loadRef().beginParse()));
                    const O = _.loadBit()
                      , k = _.loadBit();
                    return {
                        type: "split-prepare",
                        splitInfo: S,
                        storagePhase: I,
                        computePhase: R,
                        actionPhase: M,
                        aborted: O,
                        destroyed: k
                    }
                }
                if (w === 5) {
                    let S = (0,
                    g.loadSplitMergeInfo)(_)
                      , I = (0,
                    b.loadTransaction)(_.loadRef().beginParse());
                    const R = _.loadBit();
                    return {
                        type: "split-install",
                        splitInfo: S,
                        prepareTransaction: I,
                        installed: R
                    }
                }
                throw Error(`Unsupported transaction description type ${w}`)
            }
            s.loadTransactionDescription = v;
            function E(_) {
                return w => {
                    if (_.type === "generic")
                        w.storeUint(0, 4),
                        w.storeBit(_.creditFirst),
                        _.storagePhase ? (w.storeBit(!0),
                        w.store((0,
                        h.storeTransactionsStoragePhase)(_.storagePhase))) : w.storeBit(!1),
                        _.creditPhase ? (w.storeBit(!0),
                        w.store((0,
                        u.storeTransactionCreditPhase)(_.creditPhase))) : w.storeBit(!1),
                        w.store((0,
                        c.storeTransactionComputePhase)(_.computePhase)),
                        _.actionPhase ? (w.storeBit(!0),
                        w.storeRef((0,
                        l.beginCell)().store((0,
                        f.storeTransactionActionPhase)(_.actionPhase)))) : w.storeBit(!1),
                        w.storeBit(_.aborted),
                        _.bouncePhase ? (w.storeBit(!0),
                        w.store((0,
                        o.storeTransactionBouncePhase)(_.bouncePhase))) : w.storeBit(!1),
                        w.storeBit(_.destroyed);
                    else if (_.type === "storage")
                        w.storeUint(1, 4),
                        w.store((0,
                        h.storeTransactionsStoragePhase)(_.storagePhase));
                    else if (_.type === "tick-tock")
                        w.storeUint(_.isTock ? 3 : 2, 4),
                        w.store((0,
                        h.storeTransactionsStoragePhase)(_.storagePhase)),
                        w.store((0,
                        c.storeTransactionComputePhase)(_.computePhase)),
                        _.actionPhase ? (w.storeBit(!0),
                        w.storeRef((0,
                        l.beginCell)().store((0,
                        f.storeTransactionActionPhase)(_.actionPhase)))) : w.storeBit(!1),
                        w.storeBit(_.aborted),
                        w.storeBit(_.destroyed);
                    else if (_.type === "split-prepare")
                        w.storeUint(4, 4),
                        w.store((0,
                        g.storeSplitMergeInfo)(_.splitInfo)),
                        _.storagePhase ? (w.storeBit(!0),
                        w.store((0,
                        h.storeTransactionsStoragePhase)(_.storagePhase))) : w.storeBit(!1),
                        w.store((0,
                        c.storeTransactionComputePhase)(_.computePhase)),
                        _.actionPhase ? (w.storeBit(!0),
                        w.store((0,
                        f.storeTransactionActionPhase)(_.actionPhase))) : w.storeBit(!1),
                        w.storeBit(_.aborted),
                        w.storeBit(_.destroyed);
                    else if (_.type === "split-install")
                        w.storeUint(5, 4),
                        w.store((0,
                        g.storeSplitMergeInfo)(_.splitInfo)),
                        w.storeRef((0,
                        l.beginCell)().store((0,
                        b.storeTransaction)(_.prepareTransaction))),
                        w.storeBit(_.installed);
                    else
                        throw Error(`Unsupported transaction description type ${_.type}`)
                }
            }
            s.storeTransactionDescription = E
        }
        ),
        13735: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = f;
            var l = b(y(83399))
              , g = b(y(33752));
            function b(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }
            function f(o, c) {
                return (0,
                l.default)(o),
                (0,
                g.default)(o) % parseInt(c, 10) === 0
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        13752: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = b;
            var l = g(y(83399));
            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            function b(f) {
                return (0,
                l.default)(f),
                f = Date.parse(f),
                isNaN(f) ? null : new Date(f)
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        13874: ( (H, s, y) => {
            const l = y(78311)
              , g = (b, f) => {
                try {
                    return new l(b,f).range || "*"
                } catch {
                    return null
                }
            }
            ;
            H.exports = g
        }
        ),
        13999: ( (H, s, y) => {
            const l = y(50560)
              , g = (b, f, o) => l(b, f, o) !== 0;
            H.exports = g
        }
        ),
        14035: ( (H, s, y) => {
            "use strict";
            var l = y(36556), g = y(49092)(), b = y(9957), f = y(75795), o;
            if (g) {
                var c = l("RegExp.prototype.exec")
                  , u = {}
                  , h = function() {
                    throw u
                }
                  , v = {
                    toString: h,
                    valueOf: h
                };
                typeof Symbol.toPrimitive == "symbol" && (v[Symbol.toPrimitive] = h),
                o = function(S) {
                    if (!S || typeof S != "object")
                        return !1;
                    var I = f(S, "lastIndex")
                      , R = I && b(I, "value");
                    if (!R)
                        return !1;
                    try {
                        c(S, v)
                    } catch (M) {
                        return M === u
                    }
                }
            } else {
                var E = l("Object.prototype.toString")
                  , _ = "[object RegExp]";
                o = function(S) {
                    return !S || typeof S != "object" && typeof S != "function" ? !1 : E(S) === _
                }
            }
            H.exports = o
        }
        ),
        14112: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.WalletContractV5R1 = void 0;
            const g = y(1307)
              , b = y(20574)
              , f = y(27322);
            class o {
                static create(u) {
                    let h = 0;
                    return "workchain"in u && u.workchain != null && (h = u.workchain),
                    u.walletId?.context && (0,
                    f.isWalletIdV5R1ClientContext)(u.walletId.context) && u.walletId.context.workchain != null && (h = u.walletId.context.workchain),
                    new o(h,u.publicKey,{
                        networkGlobalId: u.walletId?.networkGlobalId ?? -239,
                        context: u.walletId?.context ?? {
                            workchain: 0,
                            walletVersion: "v5r1",
                            subwalletNumber: 0
                        }
                    })
                }
                constructor(u, h, v) {
                    this.publicKey = h,
                    this.walletId = v,
                    this.walletId = v;
                    let E = g.Cell.fromBoc(l.from("b5ee9c7241021401000281000114ff00f4a413f4bcf2c80b01020120020d020148030402dcd020d749c120915b8f6320d70b1f2082106578746ebd21821073696e74bdb0925f03e082106578746eba8eb48020d72101d074d721fa4030fa44f828fa443058bd915be0ed44d0810141d721f4058307f40e6fa1319130e18040d721707fdb3ce03120d749810280b99130e070e2100f020120050c020120060902016e07080019adce76a2684020eb90eb85ffc00019af1df6a2684010eb90eb858fc00201480a0b0017b325fb51341c75c875c2c7e00011b262fb513435c280200019be5f0f6a2684080a0eb90fa02c0102f20e011e20d70b1f82107369676ebaf2e08a7f0f01e68ef0eda2edfb218308d722028308d723208020d721d31fd31fd31fed44d0d200d31f20d31fd3ffd70a000af90140ccf9109a28945f0adb31e1f2c087df02b35007b0f2d0845125baf2e0855036baf2e086f823bbf2d0882292f800de01a47fc8ca00cb1f01cf16c9ed542092f80fde70db3cd81003f6eda2edfb02f404216e926c218e4c0221d73930709421c700b38e2d01d72820761e436c20d749c008f2e09320d74ac002f2e09320d71d06c712c2005230b0f2d089d74cd7393001a4e86c128407bbf2e093d74ac000f2e093ed55e2d20001c000915be0ebd72c08142091709601d72c081c12e25210b1e30f20d74a111213009601fa4001fa44f828fa443058baf2e091ed44d0810141d718f405049d7fc8ca0040048307f453f2e08b8e14038307f45bf2e08c22d70a00216e01b3b0f2d090e2c85003cf1612f400c9ed54007230d72c08248e2d21f2e092d200ed44d0d2005113baf2d08f54503091319c01810140d721d70a00f2e08ee2c8ca0058cf16c9ed5493f2c08de20010935bdb31e1d74cd0b4d6c35e", "hex"))[0]
                      , _ = (0,
                    g.beginCell)().storeUint(1, 1).storeUint(0, 32).store((0,
                    f.storeWalletIdV5R1)(this.walletId)).storeBuffer(this.publicKey, 32).storeBit(0).endCell();
                    this.init = {
                        code: E,
                        data: _
                    },
                    this.address = (0,
                    g.contractAddress)(u, {
                        code: E,
                        data: _
                    })
                }
                async getBalance(u) {
                    return (await u.getState()).balance
                }
                async getSeqno(u) {
                    return (await u.getState()).state.type === "active" ? (await u.get("seqno", [])).stack.readNumber() : 0
                }
                async getExtensions(u) {
                    return (await u.getState()).state.type === "active" ? (await u.get("get_extensions", [])).stack.readCellOpt() : null
                }
                async getExtensionsArray(u) {
                    const h = await this.getExtensions(u);
                    return h ? g.Dictionary.loadDirect(g.Dictionary.Keys.BigUint(256), g.Dictionary.Values.BigInt(1), h).keys().map(E => {
                        const _ = this.address.workChain;
                        return g.Address.parseRaw(`${_}:${E.toString(16).padStart(64, "0")}`)
                    }
                    ) : []
                }
                async getIsSecretKeyAuthEnabled(u) {
                    return (await u.get("is_signature_allowed", [])).stack.readBoolean()
                }
                async send(u, h) {
                    await u.external(h)
                }
                async sendTransfer(u, h) {
                    const v = await this.createTransfer(h);
                    await this.send(u, v)
                }
                async sendAddExtension(u, h) {
                    const v = await this.createAddExtension(h);
                    await this.send(u, v)
                }
                async sendRemoveExtension(u, h) {
                    const v = await this.createRemoveExtension(h);
                    await this.send(u, v)
                }
                createActions(u) {
                    return u.messages.map(v => ({
                        type: "sendMsg",
                        mode: u.sendMode,
                        outMsg: v
                    }))
                }
                createTransfer(u) {
                    return this.createRequest({
                        actions: this.createActions({
                            messages: u.messages,
                            sendMode: u.sendMode
                        }),
                        ...u
                    })
                }
                createAddExtension(u) {
                    return this.createRequest({
                        actions: [{
                            type: "addExtension",
                            address: u.extensionAddress
                        }],
                        ...u
                    })
                }
                createRemoveExtension(u) {
                    return this.createRequest({
                        actions: [{
                            type: "removeExtension",
                            address: u.extensionAddress
                        }],
                        ...u
                    })
                }
                createRequest(u) {
                    return u.authType === "extension" ? (0,
                    b.createWalletTransferV5R1)(u) : (0,
                    b.createWalletTransferV5R1)({
                        ...u,
                        walletId: (0,
                        f.storeWalletIdV5R1)(this.walletId)
                    })
                }
                sender(u, h) {
                    return {
                        send: async v => {
                            let E = await this.getSeqno(u)
                              , _ = this.createTransfer({
                                seqno: E,
                                secretKey: h,
                                sendMode: v.sendMode ?? g.SendMode.PAY_GAS_SEPARATELY + g.SendMode.IGNORE_ERRORS,
                                messages: [(0,
                                g.internal)({
                                    to: v.to,
                                    value: v.value,
                                    init: v.init,
                                    body: v.body,
                                    bounce: v.bounce
                                })]
                            });
                            await this.send(u, _)
                        }
                    }
                }
            }
            s.WalletContractV5R1 = o,
            o.OpCodes = {
                auth_extension: 1702392942,
                auth_signed_external: 1936287598,
                auth_signed_internal: 1936289396
            }
        }
        ),
        14325: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = f;
            var l = g(y(83399));
            function g(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }
            var b = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
            function f(o) {
                if ((0,
                l.default)(o),
                !b.test(o))
                    return !1;
                for (var c = 0, u = 0; u < o.length; u++)
                    u % 3 === 0 ? c += o[u] * 3 : u % 3 === 1 ? c += o[u] * 7 : c += o[u] * 1;
                return c % 10 === 0
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        14545: ( (H, s) => {
            s.isatty = function() {
                return !1
            }
            ;
            function y() {
                throw new Error("tty.ReadStream is not implemented")
            }
            s.ReadStream = y;
            function l() {
                throw new Error("tty.WriteStream is not implemented")
            }
            s.WriteStream = l
        }
        ),
        14568: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.SendMode = void 0;
            var y;
            (function(l) {
                l[l.CARRY_ALL_REMAINING_BALANCE = 128] = "CARRY_ALL_REMAINING_BALANCE",
                l[l.CARRY_ALL_REMAINING_INCOMING_VALUE = 64] = "CARRY_ALL_REMAINING_INCOMING_VALUE",
                l[l.DESTROY_ACCOUNT_IF_ZERO = 32] = "DESTROY_ACCOUNT_IF_ZERO",
                l[l.PAY_GAS_SEPARATELY = 1] = "PAY_GAS_SEPARATELY",
                l[l.IGNORE_ERRORS = 2] = "IGNORE_ERRORS",
                l[l.NONE = 0] = "NONE"
            }
            )(y || (s.SendMode = y = {}))
        }
        ),
        14660: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.storeHashUpdate = s.loadHashUpdate = void 0;
            function y(g) {
                if (g.loadUint(8) !== 114)
                    throw Error("Invalid data");
                const b = g.loadBuffer(32)
                  , f = g.loadBuffer(32);
                return {
                    oldHash: b,
                    newHash: f
                }
            }
            s.loadHashUpdate = y;
            function l(g) {
                return b => {
                    b.storeUint(114, 8),
                    b.storeBuffer(g.oldHash),
                    b.storeBuffer(g.newHash)
                }
            }
            s.storeHashUpdate = l
        }
        ),
        14803: ( (H, s, y) => {
            "use strict";
            var l = y(58859)
              , g = y(69675)
              , b = function(h, v, E) {
                for (var _ = h, w; (w = _.next) != null; _ = w)
                    if (w.key === v)
                        return _.next = w.next,
                        E || (w.next = h.next,
                        h.next = w),
                        w
            }
              , f = function(h, v) {
                if (h) {
                    var E = b(h, v);
                    return E && E.value
                }
            }
              , o = function(h, v, E) {
                var _ = b(h, v);
                _ ? _.value = E : h.next = {
                    key: v,
                    next: h.next,
                    value: E
                }
            }
              , c = function(h, v) {
                return h ? !!b(h, v) : !1
            }
              , u = function(h, v) {
                if (h)
                    return b(h, v, !0)
            };
            H.exports = function() {
                var v, E = {
                    assert: function(_) {
                        if (!E.has(_))
                            throw new g("Side channel does not contain " + l(_))
                    },
                    delete: function(_) {
                        var w = v && v.next
                          , S = u(v, _);
                        return S && w && w === S && (v = void 0),
                        !!S
                    },
                    get: function(_) {
                        return f(v, _)
                    },
                    has: function(_) {
                        return c(v, _)
                    },
                    set: function(_, w) {
                        v || (v = {
                            next: void 0
                        }),
                        o(v, _, w)
                    }
                };
                return E
            }
        }
        ),
        14823: (H => {
            "use strict";
            function s() {
                for (var g, b = [], f = 0; f < 256; f++) {
                    g = f;
                    for (var o = 0; o < 8; o++)
                        g = g & 1 ? 3988292384 ^ g >>> 1 : g >>> 1;
                    b[f] = g
                }
                return b
            }
            var y = s();
            function l(g, b, f, o) {
                var c = y
                  , u = o + f;
                g ^= -1;
                for (var h = o; h < u; h++)
                    g = g >>> 8 ^ c[(g ^ b[h]) & 255];
                return g ^ -1
            }
            H.exports = l
        }
        ),
        15340: ( () => {}
        ),
        15354: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.calculateNumberSize = s.calculateStringSize = s.isASCII = s.isPlainObject = s.ESCAPE_CHARACTERS_REGEXP = s.JsonSize = s.getKnownPropertyNames = s.hasProperty = s.isObject = s.isNullOrUndefined = s.isNonEmptyArray = void 0;
            function y(E) {
                return Array.isArray(E) && E.length > 0
            }
            s.isNonEmptyArray = y;
            function l(E) {
                return E == null
            }
            s.isNullOrUndefined = l;
            function g(E) {
                return !!E && typeof E == "object" && !Array.isArray(E)
            }
            s.isObject = g;
            const b = (E, _) => Object.hasOwnProperty.call(E, _);
            s.hasProperty = b;
            function f(E) {
                return Object.getOwnPropertyNames(E)
            }
            s.getKnownPropertyNames = f;
            var o;
            (function(E) {
                E[E.Null = 4] = "Null",
                E[E.Comma = 1] = "Comma",
                E[E.Wrapper = 1] = "Wrapper",
                E[E.True = 4] = "True",
                E[E.False = 5] = "False",
                E[E.Quote = 1] = "Quote",
                E[E.Colon = 1] = "Colon",
                E[E.Date = 24] = "Date"
            }
            )(o = s.JsonSize || (s.JsonSize = {})),
            s.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
            function c(E) {
                if (typeof E != "object" || E === null)
                    return !1;
                try {
                    let _ = E;
                    for (; Object.getPrototypeOf(_) !== null; )
                        _ = Object.getPrototypeOf(_);
                    return Object.getPrototypeOf(E) === _
                } catch {
                    return !1
                }
            }
            s.isPlainObject = c;
            function u(E) {
                return E.charCodeAt(0) <= 127
            }
            s.isASCII = u;
            function h(E) {
                return E.split("").reduce( (w, S) => u(S) ? w + 1 : w + 2, 0) + (E.match(s.ESCAPE_CHARACTERS_REGEXP) ?? []).length
            }
            s.calculateStringSize = h;
            function v(E) {
                return E.toString().length
            }
            s.calculateNumberSize = v
        }
        ),
        16284: ( (H, s, y) => {
            "use strict";
            var l = y(48287).Buffer;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.accountBodyToRLP = s.accountBodyToSlim = s.accountBodyFromSlim = s.isZeroAddress = s.zeroAddress = s.importPublic = s.privateToAddress = s.privateToPublic = s.publicToAddress = s.pubToAddress = s.isValidPublic = s.isValidPrivate = s.generateAddress2 = s.generateAddress = s.isValidChecksumAddress = s.toChecksumAddress = s.isValidAddress = s.Account = void 0;
            const g = y(66289)
              , b = y(32019)
              , f = y(26513)
              , o = y(82672)
              , c = y(77312)
              , u = y(89838)
              , h = y(35546)
              , v = y(59498)
              , E = BigInt(0);
            class _ {
                constructor(D=E, T=E, P=u.KECCAK256_RLP, C=u.KECCAK256_NULL) {
                    this.nonce = D,
                    this.balance = T,
                    this.storageRoot = P,
                    this.codeHash = C,
                    this._validate()
                }
                static fromAccountData(D) {
                    const {nonce: T, balance: P, storageRoot: C, codeHash: q} = D;
                    return new _(T !== void 0 ? (0,
                    c.bufferToBigInt)((0,
                    c.toBuffer)(T)) : void 0,P !== void 0 ? (0,
                    c.bufferToBigInt)((0,
                    c.toBuffer)(P)) : void 0,C !== void 0 ? (0,
                    c.toBuffer)(C) : void 0,q !== void 0 ? (0,
                    c.toBuffer)(q) : void 0)
                }
                static fromRlpSerializedAccount(D) {
                    const T = (0,
                    c.arrToBufArr)(g.RLP.decode(Uint8Array.from(D)));
                    if (!Array.isArray(T))
                        throw new Error("Invalid serialized account input. Must be array");
                    return this.fromValuesArray(T)
                }
                static fromValuesArray(D) {
                    const [T,P,C,q] = D;
                    return new _((0,
                    c.bufferToBigInt)(T),(0,
                    c.bufferToBigInt)(P),C,q)
                }
                _validate() {
                    if (this.nonce < E)
                        throw new Error("nonce must be greater than zero");
                    if (this.balance < E)
                        throw new Error("balance must be greater than zero");
                    if (this.storageRoot.length !== 32)
                        throw new Error("storageRoot must have a length of 32");
                    if (this.codeHash.length !== 32)
                        throw new Error("codeHash must have a length of 32")
                }
                raw() {
                    return [(0,
                    c.bigIntToUnpaddedBuffer)(this.nonce), (0,
                    c.bigIntToUnpaddedBuffer)(this.balance), this.storageRoot, this.codeHash]
                }
                serialize() {
                    return l.from(g.RLP.encode((0,
                    c.bufArrToArr)(this.raw())))
                }
                isContract() {
                    return !this.codeHash.equals(u.KECCAK256_NULL)
                }
                isEmpty() {
                    return this.balance === E && this.nonce === E && this.codeHash.equals(u.KECCAK256_NULL)
                }
            }
            s.Account = _;
            const w = function(F) {
                try {
                    (0,
                    h.assertIsString)(F)
                } catch {
                    return !1
                }
                return /^0x[0-9a-fA-F]{40}$/.test(F)
            };
            s.isValidAddress = w;
            const S = function(F, D) {
                (0,
                h.assertIsHexString)(F);
                const T = (0,
                v.stripHexPrefix)(F).toLowerCase();
                let P = "";
                D !== void 0 && (P = (0,
                c.bufferToBigInt)((0,
                c.toBuffer)(D)).toString() + "0x");
                const C = l.from(P + T, "utf8")
                  , q = (0,
                o.bytesToHex)((0,
                b.keccak256)(C));
                let $ = "0x";
                for (let ie = 0; ie < T.length; ie++)
                    parseInt(q[ie], 16) >= 8 ? $ += T[ie].toUpperCase() : $ += T[ie];
                return $
            };
            s.toChecksumAddress = S;
            const I = function(F, D) {
                return (0,
                s.isValidAddress)(F) && (0,
                s.toChecksumAddress)(F, D) === F
            };
            s.isValidChecksumAddress = I;
            const R = function(F, D) {
                return (0,
                h.assertIsBuffer)(F),
                (0,
                h.assertIsBuffer)(D),
                (0,
                c.bufferToBigInt)(D) === BigInt(0) ? l.from((0,
                b.keccak256)(g.RLP.encode((0,
                c.bufArrToArr)([F, null])))).slice(-20) : l.from((0,
                b.keccak256)(g.RLP.encode((0,
                c.bufArrToArr)([F, D])))).slice(-20)
            };
            s.generateAddress = R;
            const M = function(F, D, T) {
                if ((0,
                h.assertIsBuffer)(F),
                (0,
                h.assertIsBuffer)(D),
                (0,
                h.assertIsBuffer)(T),
                F.length !== 20)
                    throw new Error("Expected from to be of length 20");
                if (D.length !== 32)
                    throw new Error("Expected salt to be of length 32");
                const P = (0,
                b.keccak256)(l.concat([l.from("ff", "hex"), F, D, (0,
                b.keccak256)(T)]));
                return (0,
                c.toBuffer)(P).slice(-20)
            };
            s.generateAddress2 = M;
            const O = function(F) {
                return f.secp256k1.utils.isValidPrivateKey(F)
            };
            s.isValidPrivate = O;
            const k = function(F, D=!1) {
                if ((0,
                h.assertIsBuffer)(F),
                F.length === 64)
                    try {
                        return f.secp256k1.ProjectivePoint.fromHex(l.concat([l.from([4]), F])),
                        !0
                    } catch {
                        return !1
                    }
                if (!D)
                    return !1;
                try {
                    return f.secp256k1.ProjectivePoint.fromHex(F),
                    !0
                } catch {
                    return !1
                }
            };
            s.isValidPublic = k;
            const W = function(F, D=!1) {
                if ((0,
                h.assertIsBuffer)(F),
                D && F.length !== 64 && (F = l.from(f.secp256k1.ProjectivePoint.fromHex(F).toRawBytes(!1).slice(1))),
                F.length !== 64)
                    throw new Error("Expected pubKey to be of length 64");
                return l.from((0,
                b.keccak256)(F)).slice(-20)
            };
            s.pubToAddress = W,
            s.publicToAddress = s.pubToAddress;
            const G = function(F) {
                return (0,
                h.assertIsBuffer)(F),
                l.from(f.secp256k1.ProjectivePoint.fromPrivateKey(F).toRawBytes(!1).slice(1))
            };
            s.privateToPublic = G;
            const Y = function(F) {
                return (0,
                s.publicToAddress)((0,
                s.privateToPublic)(F))
            };
            s.privateToAddress = Y;
            const j = function(F) {
                return (0,
                h.assertIsBuffer)(F),
                F.length !== 64 && (F = l.from(f.secp256k1.ProjectivePoint.fromHex(F).toRawBytes(!1).slice(1))),
                F
            };
            s.importPublic = j;
            const V = function() {
                const D = (0,
                c.zeros)(20);
                return (0,
                c.bufferToHex)(D)
            };
            s.zeroAddress = V;
            const ee = function(F) {
                try {
                    (0,
                    h.assertIsString)(F)
                } catch {
                    return !1
                }
                return (0,
                s.zeroAddress)() === F
            };
            s.isZeroAddress = ee;
            function re(F) {
                const [D,T,P,C] = F;
                return [D, T, (0,
                c.arrToBufArr)(P).length === 0 ? u.KECCAK256_RLP : P, (0,
                c.arrToBufArr)(C).length === 0 ? u.KECCAK256_NULL : C]
            }
            s.accountBodyFromSlim = re;
            const se = new Uint8Array(0);
            function te(F) {
                const [D,T,P,C] = F;
                return [D, T, (0,
                c.arrToBufArr)(P).equals(u.KECCAK256_RLP) ? se : P, (0,
                c.arrToBufArr)(C).equals(u.KECCAK256_NULL) ? se : C]
            }
            s.accountBodyToSlim = te;
            function Z(F, D=!0) {
                const T = D ? re(F) : F;
                return (0,
                c.arrToBufArr)(g.RLP.encode(T))
            }
            s.accountBodyToRLP = Z
        }
        ),
        16340: (function(H, s, y) {
            "use strict";
            var l = this && this.__createBinding || (Object.create ? (function(b, f, o, c) {
                c === void 0 && (c = o);
                var u = Object.getOwnPropertyDescriptor(f, o);
                (!u || ("get"in u ? !f.__esModule : u.writable || u.configurable)) && (u = {
                    enumerable: !0,
                    get: function() {
                        return f[o]
                    }
                }),
                Object.defineProperty(b, c, u)
            }
            ) : (function(b, f, o, c) {
                c === void 0 && (c = o),
                b[c] = f[o]
            }
            ))
              , g = this && this.__exportStar || function(b, f) {
                for (var o in b)
                    o !== "default" && !Object.prototype.hasOwnProperty.call(f, o) && l(f, b, o)
            }
            ;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            g(y(53318), s),
            g(y(77670), s),
            g(y(66408), s)
        }
        ),
        16708: ( (H, s, y) => {
            "use strict";
            var l = y(65606);
            H.exports = te;
            function g(Re, He, st) {
                this.chunk = Re,
                this.encoding = He,
                this.callback = st,
                this.next = null
            }
            function b(Re) {
                var He = this;
                this.next = null,
                this.entry = null,
                this.finish = function() {
                    je(He, Re)
                }
            }
            var f;
            te.WritableState = re;
            var o = {
                deprecate: y(94643)
            }
              , c = y(40345)
              , u = y(48287).Buffer
              , h = (typeof y.g < "u" ? y.g : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
            ;
            function v(Re) {
                return u.from(Re)
            }
            function E(Re) {
                return u.isBuffer(Re) || Re instanceof h
            }
            var _ = y(75896)
              , w = y(65291)
              , S = w.getHighWaterMark
              , I = y(86048).F
              , R = I.ERR_INVALID_ARG_TYPE
              , M = I.ERR_METHOD_NOT_IMPLEMENTED
              , O = I.ERR_MULTIPLE_CALLBACK
              , k = I.ERR_STREAM_CANNOT_PIPE
              , W = I.ERR_STREAM_DESTROYED
              , G = I.ERR_STREAM_NULL_VALUES
              , Y = I.ERR_STREAM_WRITE_AFTER_END
              , j = I.ERR_UNKNOWN_ENCODING
              , V = _.errorOrDestroy;
            y(56698)(te, c);
            function ee() {}
            function re(Re, He, st) {
                f = f || y(25382),
                Re = Re || {},
                typeof st != "boolean" && (st = He instanceof f),
                this.objectMode = !!Re.objectMode,
                st && (this.objectMode = this.objectMode || !!Re.writableObjectMode),
                this.highWaterMark = S(this, Re, "writableHighWaterMark", st),
                this.finalCalled = !1,
                this.needDrain = !1,
                this.ending = !1,
                this.ended = !1,
                this.finished = !1,
                this.destroyed = !1;
                var _t = Re.decodeStrings === !1;
                this.decodeStrings = !_t,
                this.defaultEncoding = Re.defaultEncoding || "utf8",
                this.length = 0,
                this.writing = !1,
                this.corked = 0,
                this.sync = !0,
                this.bufferProcessing = !1,
                this.onwrite = function(ft) {
                    $(He, ft)
                }
                ,
                this.writecb = null,
                this.writelen = 0,
                this.bufferedRequest = null,
                this.lastBufferedRequest = null,
                this.pendingcb = 0,
                this.prefinished = !1,
                this.errorEmitted = !1,
                this.emitClose = Re.emitClose !== !1,
                this.autoDestroy = !!Re.autoDestroy,
                this.bufferedRequestCount = 0,
                this.corkedRequestsFree = new b(this)
            }
            re.prototype.getBuffer = function() {
                for (var He = this.bufferedRequest, st = []; He; )
                    st.push(He),
                    He = He.next;
                return st
            }
            ,
            (function() {
                try {
                    Object.defineProperty(re.prototype, "buffer", {
                        get: o.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch {}
            }
            )();
            var se;
            typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (se = Function.prototype[Symbol.hasInstance],
            Object.defineProperty(te, Symbol.hasInstance, {
                value: function(He) {
                    return se.call(this, He) ? !0 : this !== te ? !1 : He && He._writableState instanceof re
                }
            })) : se = function(He) {
                return He instanceof this
            }
            ;
            function te(Re) {
                f = f || y(25382);
                var He = this instanceof f;
                if (!He && !se.call(te, this))
                    return new te(Re);
                this._writableState = new re(Re,this,He),
                this.writable = !0,
                Re && (typeof Re.write == "function" && (this._write = Re.write),
                typeof Re.writev == "function" && (this._writev = Re.writev),
                typeof Re.destroy == "function" && (this._destroy = Re.destroy),
                typeof Re.final == "function" && (this._final = Re.final)),
                c.call(this)
            }
            te.prototype.pipe = function() {
                V(this, new k)
            }
            ;
            function Z(Re, He) {
                var st = new Y;
                V(Re, st),
                l.nextTick(He, st)
            }
            function F(Re, He, st, _t) {
                var ft;
                return st === null ? ft = new G : typeof st != "string" && !He.objectMode && (ft = new R("chunk",["string", "Buffer"],st)),
                ft ? (V(Re, ft),
                l.nextTick(_t, ft),
                !1) : !0
            }
            te.prototype.write = function(Re, He, st) {
                var _t = this._writableState
                  , ft = !1
                  , Ue = !_t.objectMode && E(Re);
                return Ue && !u.isBuffer(Re) && (Re = v(Re)),
                typeof He == "function" && (st = He,
                He = null),
                Ue ? He = "buffer" : He || (He = _t.defaultEncoding),
                typeof st != "function" && (st = ee),
                _t.ending ? Z(this, st) : (Ue || F(this, _t, Re, st)) && (_t.pendingcb++,
                ft = T(this, _t, Ue, Re, He, st)),
                ft
            }
            ,
            te.prototype.cork = function() {
                this._writableState.corked++
            }
            ,
            te.prototype.uncork = function() {
                var Re = this._writableState;
                Re.corked && (Re.corked--,
                !Re.writing && !Re.corked && !Re.bufferProcessing && Re.bufferedRequest && ce(this, Re))
            }
            ,
            te.prototype.setDefaultEncoding = function(He) {
                if (typeof He == "string" && (He = He.toLowerCase()),
                !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((He + "").toLowerCase()) > -1))
                    throw new j(He);
                return this._writableState.defaultEncoding = He,
                this
            }
            ,
            Object.defineProperty(te.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            });
            function D(Re, He, st) {
                return !Re.objectMode && Re.decodeStrings !== !1 && typeof He == "string" && (He = u.from(He, st)),
                He
            }
            Object.defineProperty(te.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            });
            function T(Re, He, st, _t, ft, Ue) {
                if (!st) {
                    var Ve = D(He, _t, ft);
                    _t !== Ve && (st = !0,
                    ft = "buffer",
                    _t = Ve)
                }
                var we = He.objectMode ? 1 : _t.length;
                He.length += we;
                var Pe = He.length < He.highWaterMark;
                if (Pe || (He.needDrain = !0),
                He.writing || He.corked) {
                    var $e = He.lastBufferedRequest;
                    He.lastBufferedRequest = {
                        chunk: _t,
                        encoding: ft,
                        isBuf: st,
                        callback: Ue,
                        next: null
                    },
                    $e ? $e.next = He.lastBufferedRequest : He.bufferedRequest = He.lastBufferedRequest,
                    He.bufferedRequestCount += 1
                } else
                    P(Re, He, !1, we, _t, ft, Ue);
                return Pe
            }
            function P(Re, He, st, _t, ft, Ue, Ve) {
                He.writelen = _t,
                He.writecb = Ve,
                He.writing = !0,
                He.sync = !0,
                He.destroyed ? He.onwrite(new W("write")) : st ? Re._writev(ft, He.onwrite) : Re._write(ft, Ue, He.onwrite),
                He.sync = !1
            }
            function C(Re, He, st, _t, ft) {
                --He.pendingcb,
                st ? (l.nextTick(ft, _t),
                l.nextTick(ge, Re, He),
                Re._writableState.errorEmitted = !0,
                V(Re, _t)) : (ft(_t),
                Re._writableState.errorEmitted = !0,
                V(Re, _t),
                ge(Re, He))
            }
            function q(Re) {
                Re.writing = !1,
                Re.writecb = null,
                Re.length -= Re.writelen,
                Re.writelen = 0
            }
            function $(Re, He) {
                var st = Re._writableState
                  , _t = st.sync
                  , ft = st.writecb;
                if (typeof ft != "function")
                    throw new O;
                if (q(st),
                He)
                    C(Re, st, _t, He, ft);
                else {
                    var Ue = U(st) || Re.destroyed;
                    !Ue && !st.corked && !st.bufferProcessing && st.bufferedRequest && ce(Re, st),
                    _t ? l.nextTick(ie, Re, st, Ue, ft) : ie(Re, st, Ue, ft)
                }
            }
            function ie(Re, He, st, _t) {
                st || he(Re, He),
                He.pendingcb--,
                _t(),
                ge(Re, He)
            }
            function he(Re, He) {
                He.length === 0 && He.needDrain && (He.needDrain = !1,
                Re.emit("drain"))
            }
            function ce(Re, He) {
                He.bufferProcessing = !0;
                var st = He.bufferedRequest;
                if (Re._writev && st && st.next) {
                    var _t = He.bufferedRequestCount
                      , ft = new Array(_t)
                      , Ue = He.corkedRequestsFree;
                    Ue.entry = st;
                    for (var Ve = 0, we = !0; st; )
                        ft[Ve] = st,
                        st.isBuf || (we = !1),
                        st = st.next,
                        Ve += 1;
                    ft.allBuffers = we,
                    P(Re, He, !0, He.length, ft, "", Ue.finish),
                    He.pendingcb++,
                    He.lastBufferedRequest = null,
                    Ue.next ? (He.corkedRequestsFree = Ue.next,
                    Ue.next = null) : He.corkedRequestsFree = new b(He),
                    He.bufferedRequestCount = 0
                } else {
                    for (; st; ) {
                        var Pe = st.chunk
                          , $e = st.encoding
                          , Me = st.callback
                          , St = He.objectMode ? 1 : Pe.length;
                        if (P(Re, He, !1, St, Pe, $e, Me),
                        st = st.next,
                        He.bufferedRequestCount--,
                        He.writing)
                            break
                    }
                    st === null && (He.lastBufferedRequest = null)
                }
                He.bufferedRequest = st,
                He.bufferProcessing = !1
            }
            te.prototype._write = function(Re, He, st) {
                st(new M("_write()"))
            }
            ,
            te.prototype._writev = null,
            te.prototype.end = function(Re, He, st) {
                var _t = this._writableState;
                return typeof Re == "function" ? (st = Re,
                Re = null,
                He = null) : typeof He == "function" && (st = He,
                He = null),
                Re != null && this.write(Re, He),
                _t.corked && (_t.corked = 1,
                this.uncork()),
                _t.ending || Ee(this, _t, st),
                this
            }
            ,
            Object.defineProperty(te.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            });
            function U(Re) {
                return Re.ending && Re.length === 0 && Re.bufferedRequest === null && !Re.finished && !Re.writing
            }
            function z(Re, He) {
                Re._final(function(st) {
                    He.pendingcb--,
                    st && V(Re, st),
                    He.prefinished = !0,
                    Re.emit("prefinish"),
                    ge(Re, He)
                })
            }
            function X(Re, He) {
                !He.prefinished && !He.finalCalled && (typeof Re._final == "function" && !He.destroyed ? (He.pendingcb++,
                He.finalCalled = !0,
                l.nextTick(z, Re, He)) : (He.prefinished = !0,
                Re.emit("prefinish")))
            }
            function ge(Re, He) {
                var st = U(He);
                if (st && (X(Re, He),
                He.pendingcb === 0 && (He.finished = !0,
                Re.emit("finish"),
                He.autoDestroy))) {
                    var _t = Re._readableState;
                    (!_t || _t.autoDestroy && _t.endEmitted) && Re.destroy()
                }
                return st
            }
            function Ee(Re, He, st) {
                He.ending = !0,
                ge(Re, He),
                st && (He.finished ? l.nextTick(st) : Re.once("finish", st)),
                He.ended = !0,
                Re.writable = !1
            }
            function je(Re, He, st) {
                var _t = Re.entry;
                for (Re.entry = null; _t; ) {
                    var ft = _t.callback;
                    He.pendingcb--,
                    ft(st),
                    _t = _t.next
                }
                He.corkedRequestsFree.next = Re
            }
            Object.defineProperty(te.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return this._writableState === void 0 ? !1 : this._writableState.destroyed
                },
                set: function(He) {
                    this._writableState && (this._writableState.destroyed = He)
                }
            }),
            te.prototype.destroy = _.destroy,
            te.prototype._undestroy = _.undestroy,
            te.prototype._destroy = function(Re, He) {
                He(Re)
            }
        }
        ),
        16763: ( (H, s, y) => {
            var l = y(95364)
              , g = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            H.exports = l(g)
        }
        ),
        16767: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.bitsForNumber = void 0;
            function y(l, g) {
                let b = BigInt(l);
                if (g === "int")
                    return b === 0n || b === -1n ? 1 : (b > 0 ? b : -b).toString(2).length + 1;
                if (g === "uint") {
                    if (b < 0)
                        throw Error(`value is negative. Got ${l}`);
                    return b.toString(2).length
                } else
                    throw Error(`invalid mode. Got ${g}`)
            }
            s.bitsForNumber = y
        }
        ),
        16874: (H => {
            const s = "2.0.0"
              , l = Number.MAX_SAFE_INTEGER || 9007199254740991
              , g = 16
              , b = 250
              , f = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
            H.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: g,
                MAX_SAFE_BUILD_LENGTH: b,
                MAX_SAFE_INTEGER: l,
                RELEASE_TYPES: f,
                SEMVER_SPEC_VERSION: s,
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        }
        ),
        17115: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = u;
            var l = b(y(83399))
              , g = b(y(35372));
            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            var f = /^\d{1,3}$/
              , o = 32
              , c = 128;
            function u(h) {
                var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
                (0,
                l.default)(h);
                var E = h.split("/");
                if (E.length !== 2 || !f.test(E[1]) || E[1].length > 1 && E[1].startsWith("0"))
                    return !1;
                var _ = (0,
                g.default)(E[0], v);
                if (!_)
                    return !1;
                var w = null;
                switch (String(v)) {
                case "4":
                    w = o;
                    break;
                case "6":
                    w = c;
                    break;
                default:
                    w = (0,
                    g.default)(E[0], "6") ? c : o
                }
                return E[1] <= w && E[1] >= 0
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        17179: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = w;
            var l = b(y(71229))
              , g = b(y(83399));
            function b(S) {
                return S && S.__esModule ? S : {
                    default: S
                }
            }
            var f = /^[A-Z]$/
              , o = /^[a-z]$/
              , c = /^[0-9]$/
              , u = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/
              , h = {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                returnScore: !1,
                pointsPerUnique: 1,
                pointsPerRepeat: .5,
                pointsForContainingLower: 10,
                pointsForContainingUpper: 10,
                pointsForContainingNumber: 10,
                pointsForContainingSymbol: 10
            };
            function v(S) {
                var I = {};
                return Array.from(S).forEach(function(R) {
                    var M = I[R];
                    M ? I[R] += 1 : I[R] = 1
                }),
                I
            }
            function E(S) {
                var I = v(S)
                  , R = {
                    length: S.length,
                    uniqueChars: Object.keys(I).length,
                    uppercaseCount: 0,
                    lowercaseCount: 0,
                    numberCount: 0,
                    symbolCount: 0
                };
                return Object.keys(I).forEach(function(M) {
                    f.test(M) ? R.uppercaseCount += I[M] : o.test(M) ? R.lowercaseCount += I[M] : c.test(M) ? R.numberCount += I[M] : u.test(M) && (R.symbolCount += I[M])
                }),
                R
            }
            function _(S, I) {
                var R = 0;
                return R += S.uniqueChars * I.pointsPerUnique,
                R += (S.length - S.uniqueChars) * I.pointsPerRepeat,
                S.lowercaseCount > 0 && (R += I.pointsForContainingLower),
                S.uppercaseCount > 0 && (R += I.pointsForContainingUpper),
                S.numberCount > 0 && (R += I.pointsForContainingNumber),
                S.symbolCount > 0 && (R += I.pointsForContainingSymbol),
                R
            }
            function w(S) {
                var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                (0,
                g.default)(S);
                var R = E(S);
                return I = (0,
                l.default)(I || {}, h),
                I.returnScore ? _(R, I) : R.length >= I.minLength && R.lowercaseCount >= I.minLowercase && R.uppercaseCount >= I.minUppercase && R.numberCount >= I.minNumbers && R.symbolCount >= I.minSymbols
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        17233: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            })
        }
        ),
        17412: ( (H, s, y) => {
            "use strict";
            /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.randomBytes = s.wrapXOFConstructorWithOpts = s.wrapConstructorWithOpts = s.wrapConstructor = s.checkOpts = s.Hash = s.concatBytes = s.toBytes = s.utf8ToBytes = s.asyncLoop = s.nextTick = s.hexToBytes = s.bytesToHex = s.byteSwap32 = s.byteSwapIfBE = s.byteSwap = s.isLE = s.rotl = s.rotr = s.createView = s.u32 = s.u8 = s.isBytes = void 0;
            const l = y(457)
              , g = y(28021);
            function b(Z) {
                return Z instanceof Uint8Array || Z != null && typeof Z == "object" && Z.constructor.name === "Uint8Array"
            }
            s.isBytes = b;
            const f = Z => new Uint8Array(Z.buffer,Z.byteOffset,Z.byteLength);
            s.u8 = f;
            const o = Z => new Uint32Array(Z.buffer,Z.byteOffset,Math.floor(Z.byteLength / 4));
            s.u32 = o;
            const c = Z => new DataView(Z.buffer,Z.byteOffset,Z.byteLength);
            s.createView = c;
            const u = (Z, F) => Z << 32 - F | Z >>> F;
            s.rotr = u;
            const h = (Z, F) => Z << F | Z >>> 32 - F >>> 0;
            s.rotl = h,
            s.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
            const v = Z => Z << 24 & 4278190080 | Z << 8 & 16711680 | Z >>> 8 & 65280 | Z >>> 24 & 255;
            s.byteSwap = v,
            s.byteSwapIfBE = s.isLE ? Z => Z : Z => (0,
            s.byteSwap)(Z);
            function E(Z) {
                for (let F = 0; F < Z.length; F++)
                    Z[F] = (0,
                    s.byteSwap)(Z[F])
            }
            s.byteSwap32 = E;
            const _ = Array.from({
                length: 256
            }, (Z, F) => F.toString(16).padStart(2, "0"));
            function w(Z) {
                (0,
                g.bytes)(Z);
                let F = "";
                for (let D = 0; D < Z.length; D++)
                    F += _[Z[D]];
                return F
            }
            s.bytesToHex = w;
            const S = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };
            function I(Z) {
                if (Z >= S._0 && Z <= S._9)
                    return Z - S._0;
                if (Z >= S._A && Z <= S._F)
                    return Z - (S._A - 10);
                if (Z >= S._a && Z <= S._f)
                    return Z - (S._a - 10)
            }
            function R(Z) {
                if (typeof Z != "string")
                    throw new Error("hex string expected, got " + typeof Z);
                const F = Z.length
                  , D = F / 2;
                if (F % 2)
                    throw new Error("padded hex string expected, got unpadded hex of length " + F);
                const T = new Uint8Array(D);
                for (let P = 0, C = 0; P < D; P++,
                C += 2) {
                    const q = I(Z.charCodeAt(C))
                      , $ = I(Z.charCodeAt(C + 1));
                    if (q === void 0 || $ === void 0) {
                        const ie = Z[C] + Z[C + 1];
                        throw new Error('hex string expected, got non-hex character "' + ie + '" at index ' + C)
                    }
                    T[P] = q * 16 + $
                }
                return T
            }
            s.hexToBytes = R;
            const M = async () => {}
            ;
            s.nextTick = M;
            async function O(Z, F, D) {
                let T = Date.now();
                for (let P = 0; P < Z; P++) {
                    D(P);
                    const C = Date.now() - T;
                    C >= 0 && C < F || (await (0,
                    s.nextTick)(),
                    T += C)
                }
            }
            s.asyncLoop = O;
            function k(Z) {
                if (typeof Z != "string")
                    throw new Error(`utf8ToBytes expected string, got ${typeof Z}`);
                return new Uint8Array(new TextEncoder().encode(Z))
            }
            s.utf8ToBytes = k;
            function W(Z) {
                return typeof Z == "string" && (Z = k(Z)),
                (0,
                g.bytes)(Z),
                Z
            }
            s.toBytes = W;
            function G(...Z) {
                let F = 0;
                for (let T = 0; T < Z.length; T++) {
                    const P = Z[T];
                    (0,
                    g.bytes)(P),
                    F += P.length
                }
                const D = new Uint8Array(F);
                for (let T = 0, P = 0; T < Z.length; T++) {
                    const C = Z[T];
                    D.set(C, P),
                    P += C.length
                }
                return D
            }
            s.concatBytes = G;
            class Y {
                clone() {
                    return this._cloneInto()
                }
            }
            s.Hash = Y;
            const j = {}.toString;
            function V(Z, F) {
                if (F !== void 0 && j.call(F) !== "[object Object]")
                    throw new Error("Options should be object or undefined");
                return Object.assign(Z, F)
            }
            s.checkOpts = V;
            function ee(Z) {
                const F = T => Z().update(W(T)).digest()
                  , D = Z();
                return F.outputLen = D.outputLen,
                F.blockLen = D.blockLen,
                F.create = () => Z(),
                F
            }
            s.wrapConstructor = ee;
            function re(Z) {
                const F = (T, P) => Z(P).update(W(T)).digest()
                  , D = Z({});
                return F.outputLen = D.outputLen,
                F.blockLen = D.blockLen,
                F.create = T => Z(T),
                F
            }
            s.wrapConstructorWithOpts = re;
            function se(Z) {
                const F = (T, P) => Z(P).update(W(T)).digest()
                  , D = Z({});
                return F.outputLen = D.outputLen,
                F.blockLen = D.blockLen,
                F.create = T => Z(T),
                F
            }
            s.wrapXOFConstructorWithOpts = se;
            function te(Z=32) {
                if (l.crypto && typeof l.crypto.getRandomValues == "function")
                    return l.crypto.getRandomValues(new Uint8Array(Z));
                throw new Error("crypto.getRandomValues must be defined")
            }
            s.randomBytes = te
        }
        ),
        17773: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.remove0x = s.add0x = s.isValidChecksumAddress = s.getChecksumAddress = s.isValidHexAddress = s.assertIsStrictHexString = s.assertIsHexString = s.isStrictHexString = s.isHexString = s.HexChecksumAddressStruct = s.HexAddressStruct = s.StrictHexStruct = s.HexStruct = void 0;
            const l = y(35620)
              , g = y(32955)
              , b = y(74772)
              , f = y(67295);
            s.HexStruct = (0,
            l.pattern)((0,
            l.string)(), /^(?:0x)?[0-9a-f]+$/iu),
            s.StrictHexStruct = (0,
            l.pattern)((0,
            l.string)(), /^0x[0-9a-f]+$/iu),
            s.HexAddressStruct = (0,
            l.pattern)((0,
            l.string)(), /^0x[0-9a-f]{40}$/u),
            s.HexChecksumAddressStruct = (0,
            l.pattern)((0,
            l.string)(), /^0x[0-9a-fA-F]{40}$/u);
            function o(I) {
                return (0,
                l.is)(I, s.HexStruct)
            }
            s.isHexString = o;
            function c(I) {
                return (0,
                l.is)(I, s.StrictHexStruct)
            }
            s.isStrictHexString = c;
            function u(I) {
                (0,
                b.assert)(o(I), "Value must be a hexadecimal string.")
            }
            s.assertIsHexString = u;
            function h(I) {
                (0,
                b.assert)(c(I), 'Value must be a hexadecimal string, starting with "0x".')
            }
            s.assertIsStrictHexString = h;
            function v(I) {
                return (0,
                l.is)(I, s.HexAddressStruct) || _(I)
            }
            s.isValidHexAddress = v;
            function E(I) {
                (0,
                b.assert)((0,
                l.is)(I, s.HexChecksumAddressStruct), "Invalid hex address.");
                const R = S(I.toLowerCase())
                  , M = S((0,
                f.bytesToHex)((0,
                g.keccak_256)(R)));
                return `0x${R.split("").map( (O, k) => {
                    const W = M[k];
                    return (0,
                    b.assert)((0,
                    l.is)(W, (0,
                    l.string)()), "Hash shorter than address."),
                    parseInt(W, 16) > 7 ? O.toUpperCase() : O
                }
                ).join("")}`
            }
            s.getChecksumAddress = E;
            function _(I) {
                return (0,
                l.is)(I, s.HexChecksumAddressStruct) ? E(I) === I : !1
            }
            s.isValidChecksumAddress = _;
            function w(I) {
                return I.startsWith("0x") ? I : I.startsWith("0X") ? `0x${I.substring(2)}` : `0x${I}`
            }
            s.add0x = w;
            function S(I) {
                return I.startsWith("0x") || I.startsWith("0X") ? I.substring(2) : I
            }
            s.remove0x = S
        }
        ),
        17833: ( (H, s, y) => {
            var l = y(65606);
            s.formatArgs = b,
            s.save = f,
            s.load = o,
            s.useColors = g,
            s.storage = c(),
            s.destroy = ( () => {
                let h = !1;
                return () => {
                    h || (h = !0,
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            }
            )(),
            s.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
            function g() {
                if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
                    return !0;
                if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                    return !1;
                let h;
                return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (h = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(h[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }
            function b(h) {
                if (h[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + h[0] + (this.useColors ? "%c " : " ") + "+" + H.exports.humanize(this.diff),
                !this.useColors)
                    return;
                const v = "color: " + this.color;
                h.splice(1, 0, v, "color: inherit");
                let E = 0
                  , _ = 0;
                h[0].replace(/%[a-zA-Z%]/g, w => {
                    w !== "%%" && (E++,
                    w === "%c" && (_ = E))
                }
                ),
                h.splice(_, 0, v)
            }
            s.log = console.debug || console.log || ( () => {}
            );
            function f(h) {
                try {
                    h ? s.storage.setItem("debug", h) : s.storage.removeItem("debug")
                } catch {}
            }
            function o() {
                let h;
                try {
                    h = s.storage.getItem("debug") || s.storage.getItem("DEBUG")
                } catch {}
                return !h && typeof l < "u" && "env"in l && (h = "MISSING_ENV_VAR".DEBUG),
                h
            }
            function c() {
                try {
                    return localStorage
                } catch {}
            }
            H.exports = y(40736)(s);
            const {formatters: u} = H.exports;
            u.j = function(h) {
                try {
                    return JSON.stringify(h)
                } catch (v) {
                    return "[UnexpectedJSONParseError]: " + v.message
                }
            }
        }
        ),
        18335: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            })
        }
        ),
        18941: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.timeSince = s.inMilliseconds = s.Duration = void 0;
            var y;
            (function(o) {
                o[o.Millisecond = 1] = "Millisecond",
                o[o.Second = 1e3] = "Second",
                o[o.Minute = 6e4] = "Minute",
                o[o.Hour = 36e5] = "Hour",
                o[o.Day = 864e5] = "Day",
                o[o.Week = 6048e5] = "Week",
                o[o.Year = 31536e6] = "Year"
            }
            )(y = s.Duration || (s.Duration = {}));
            const l = o => Number.isInteger(o) && o >= 0
              , g = (o, c) => {
                if (!l(o))
                    throw new Error(`"${c}" must be a non-negative integer. Received: "${o}".`)
            }
            ;
            function b(o, c) {
                return g(o, "count"),
                o * c
            }
            s.inMilliseconds = b;
            function f(o) {
                return g(o, "timestamp"),
                Date.now() - o
            }
            s.timeSince = f
        }
        ),
        19266: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.default = o;
            var l = b(y(83399))
              , g = b(y(45772));
            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            function f(c) {
                "@babel/helpers - typeof";
                return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                    return typeof u
                }
                : function(u) {
                    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                }
                ,
                f(c)
            }
            function o(c, u) {
                (0,
                l.default)(c);
                var h;
                if (Object.prototype.toString.call(u) === "[object Array]") {
                    var v = [];
                    for (h in u)
                        ({}).hasOwnProperty.call(u, h) && (v[h] = (0,
                        g.default)(u[h]));
                    return v.indexOf(c) >= 0
                } else {
                    if (f(u) === "object")
                        return u.hasOwnProperty(c);
                    if (u && typeof u.indexOf == "function")
                        return u.indexOf(c) >= 0
                }
                return !1
            }
            H.exports = s.default,
            H.exports.default = s.default
        }
        ),
        19372: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.bitMask = void 0,
            s.isBytes = b,
            s.abytes = f,
            s.bytesToHex = c,
            s.numberToHexUnpadded = u,
            s.hexToNumber = h,
            s.hexToBytes = _,
            s.bytesToNumberBE = w,
            s.bytesToNumberLE = S,
            s.numberToBytesBE = I,
            s.numberToBytesLE = R,
            s.numberToVarBytesBE = M,
            s.ensureBytes = O,
            s.concatBytes = k,
            s.equalBytes = W,
            s.utf8ToBytes = G,
            s.bitLen = Y,
            s.bitGet = j,
            s.bitSet = V,
            s.createHmacDrbg = te,
            s.validateObject = F;
            /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            const y = BigInt(0)
              , l = BigInt(1)
              , g = BigInt(2);
            function b(D) {
                return D instanceof Uint8Array || D != null && typeof D == "object" && D.constructor.name === "Uint8Array"
            }
            function f(D) {
                if (!b(D))
                    throw new Error("Uint8Array expected")
            }
            const o = Array.from({
                length: 256
            }, (D, T) => T.toString(16).padStart(2, "0"));
            function c(D) {
                f(D);
                let T = "";
                for (let P = 0; P < D.length; P++)
                    T += o[D[P]];
                return T
            }
            function u(D) {
                const T = D.toString(16);
                return T.length & 1 ? `0${T}` : T
            }
            function h(D) {
                if (typeof D != "string")
                    throw new Error("hex string expected, got " + typeof D);
                return BigInt(D === "" ? "0" : `0x${D}`)
            }
            const v = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };
            function E(D) {
                if (D >= v._0 && D <= v._9)
                    return D - v._0;
                if (D >= v._A && D <= v._F)
                    return D - (v._A - 10);
                if (D >= v._a && D <= v._f)
                    return D - (v._a - 10)
            }
            function _(D) {
                if (typeof D != "string")
                    throw new Error("hex string expected, got " + typeof D);
                const T = D.length
                  , P = T / 2;
                if (T % 2)
                    throw new Error("padded hex string expected, got unpadded hex of length " + T);
                const C = new Uint8Array(P);
                for (let q = 0, $ = 0; q < P; q++,
                $ += 2) {
                    const ie = E(D.charCodeAt($))
                      , he = E(D.charCodeAt($ + 1));
                    if (ie === void 0 || he === void 0) {
                        const ce = D[$] + D[$ + 1];
                        throw new Error('hex string expected, got non-hex character "' + ce + '" at index ' + $)
                    }
                    C[q] = ie * 16 + he
                }
                return C
            }
            function w(D) {
                return h(c(D))
            }
            function S(D) {
                return f(D),
                h(c(Uint8Array.from(D).reverse()))
            }
            function I(D, T) {
                return _(D.toString(16).padStart(T * 2, "0"))
            }
            function R(D, T) {
                return I(D, T).reverse()
            }
            function M(D) {
                return _(u(D))
            }
            function O(D, T, P) {
                let C;
                if (typeof T == "string")
                    try {
                        C = _(T)
                    } catch ($) {
                        throw new Error(`${D} must be valid hex string, got "${T}". Cause: ${$}`)
                    }
                else if (b(T))
                    C = Uint8Array.from(T);
                else
                    throw new Error(`${D} must be hex string or Uint8Array`);
                const q = C.length;
                if (typeof P == "number" && q !== P)
                    throw new Error(`${D} expected ${P} bytes, got ${q}`);
                return C
            }
            function k(...D) {
                let T = 0;
                for (let C = 0; C < D.length; C++) {
                    const q = D[C];
                    f(q),
                    T += q.length
                }
                const P = new Uint8Array(T);
                for (let C = 0, q = 0; C < D.length; C++) {
                    const $ = D[C];
                    P.set($, q),
                    q += $.length
                }
                return P
            }
            function W(D, T) {
                if (D.length !== T.length)
                    return !1;
                let P = 0;
                for (let C = 0; C < D.length; C++)
                    P |= D[C] ^ T[C];
                return P === 0
            }
            function G(D) {
                if (typeof D != "string")
                    throw new Error(`utf8ToBytes expected string, got ${typeof D}`);
                return new Uint8Array(new TextEncoder().encode(D))
            }
            function Y(D) {
                let T;
                for (T = 0; D > y; D >>= l,
                T += 1)
                    ;
                return T
            }
            function j(D, T) {
                return D >> BigInt(T) & l
            }
            function V(D, T, P) {
                return D | (P ? l : y) << BigInt(T)
            }
            const ee = D => (g << BigInt(D - 1)) - l;
            s.bitMask = ee;
            const re = D => new Uint8Array(D)
              , se = D => Uint8Array.from(D);
            function te(D, T, P) {
                if (typeof D != "number" || D < 2)
                    throw new Error("hashLen must be a number");
                if (typeof T != "number" || T < 2)
                    throw new Error("qByteLen must be a number");
                if (typeof P != "function")
                    throw new Error("hmacFn must be a function");
                let C = re(D)
                  , q = re(D)
                  , $ = 0;
                const ie = () => {
                    C.fill(1),
                    q.fill(0),
                    $ = 0
                }
                  , he = (...X) => P(q, C, ...X)
                  , ce = (X=re()) => {
                    q = he(se([0]), X),
                    C = he(),
                    X.length !== 0 && (q = he(se([1]), X),
                    C = he())
                }
                  , U = () => {
                    if ($++ >= 1e3)
                        throw new Error("drbg: tried 1000 values");
                    let X = 0;
                    const ge = [];
                    for (; X < T; ) {
                        C = he();
                        const Ee = C.slice();
                        ge.push(Ee),
                        X += C.length
                    }
                    return k(...ge)
                }
                ;
                return (X, ge) => {
                    ie(),
                    ce(X);
                    let Ee;
                    for (; !(Ee = ge(U())); )
                        ce();
                    return ie(),
                    Ee
                }
            }
            const Z = {
                bigint: D => typeof D == "bigint",
                function: D => typeof D == "function",
                boolean: D => typeof D == "boolean",
                string: D => typeof D == "string",
                stringOrUint8Array: D => typeof D == "string" || b(D),
                isSafeInteger: D => Number.isSafeInteger(D),
                array: D => Array.isArray(D),
                field: (D, T) => T.Fp.isValid(D),
                hash: D => typeof D == "function" && Number.isSafeInteger(D.outputLen)
            };
            function F(D, T, P={}) {
                const C = (q, $, ie) => {
                    const he = Z[$];
                    if (typeof he != "function")
                        throw new Error(`Invalid validator "${$}", expected function`);
                    const ce = D[q];
                    if (!(ie && ce === void 0) && !he(ce, D))
                        throw new Error(`Invalid param ${String(q)}=${ce} (${typeof ce}), expected ${$}`)
                }
                ;
                for (const [q,$] of Object.entries(T))
                    C(q, $, !1);
                for (const [q,$] of Object.entries(P))
                    C(q, $, !0);
                return D
            }
        }
        ),
        19628: ( (H, s, y) => {
            const l = y(53908)
              , g = y(78311)
              , b = (f, o, c) => {
                let u = null
                  , h = null
                  , v = null;
                try {
                    v = new g(o,c)
                } catch {
                    return null
                }
                return f.forEach(E => {
                    v.test(E) && (!u || h.compare(E) === -1) && (u = E,
                    h = new l(u,c))
                }
                ),
                u
            }
            ;
            H.exports = b
        }
        ),
        19681: (H => {
            "use strict";
            H.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }
        ),
        20489: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.DER = void 0,
            s.weierstrassPoints = S,
            s.weierstrass = R,
            s.SWUFpSqrtRatio = M,
            s.mapToCurveSimpleSWU = O;
            /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            const l = y(59206)
              , g = y(89015)
              , b = y(19372)
              , f = y(19372);
            function o(k) {
                const W = (0,
                l.validateBasic)(k);
                b.validateObject(W, {
                    a: "field",
                    b: "field"
                }, {
                    allowedPrivateKeyLengths: "array",
                    wrapPrivateKey: "boolean",
                    isTorsionFree: "function",
                    clearCofactor: "function",
                    allowInfinityPoint: "boolean",
                    fromBytes: "function",
                    toBytes: "function"
                });
                const {endo: G, Fp: Y, a: j} = W;
                if (G) {
                    if (!Y.eql(j, Y.ZERO))
                        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                    if (typeof G != "object" || typeof G.beta != "bigint" || typeof G.splitScalar != "function")
                        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
                }
                return Object.freeze({
                    ...W
                })
            }
            const {bytesToNumberBE: c, hexToBytes: u} = b;
            s.DER = {
                Err: class extends Error {
                    constructor(W="") {
                        super(W)
                    }
                }
                ,
                _parseInt(k) {
                    const {Err: W} = s.DER;
                    if (k.length < 2 || k[0] !== 2)
                        throw new W("Invalid signature integer tag");
                    const G = k[1]
                      , Y = k.subarray(2, G + 2);
                    if (!G || Y.length !== G)
                        throw new W("Invalid signature integer: wrong length");
                    if (Y[0] & 128)
                        throw new W("Invalid signature integer: negative");
                    if (Y[0] === 0 && !(Y[1] & 128))
                        throw new W("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: c(Y),
                        l: k.subarray(G + 2)
                    }
                },
                toSig(k) {
                    const {Err: W} = s.DER
                      , G = typeof k == "string" ? u(k) : k;
                    b.abytes(G);
                    let Y = G.length;
                    if (Y < 2 || G[0] != 48)
                        throw new W("Invalid signature tag");
                    if (G[1] !== Y - 2)
                        throw new W("Invalid signature: incorrect length");
                    const {d: j, l: V} = s.DER._parseInt(G.subarray(2))
                      , {d: ee, l: re} = s.DER._parseInt(V);
                    if (re.length)
                        throw new W("Invalid signature: left bytes after parsing");
                    return {
                        r: j,
                        s: ee
                    }
                },
                hexFromSig(k) {
                    const W = te => Number.parseInt(te[0], 16) & 8 ? "00" + te : te
                      , G = te => {
                        const Z = te.toString(16);
                        return Z.length & 1 ? `0${Z}` : Z
                    }
                      , Y = W(G(k.s))
                      , j = W(G(k.r))
                      , V = Y.length / 2
                      , ee = j.length / 2
                      , re = G(V)
                      , se = G(ee);
                    return `30${G(ee + V + 4)}02${se}${j}02${re}${Y}`
                }
            };
            const h = BigInt(0)
              , v = BigInt(1)
              , E = BigInt(2)
              , _ = BigInt(3)
              , w = BigInt(4);
            function S(k) {
                const W = o(k)
                  , {Fp: G} = W
                  , Y = W.toBytes || ( (P, C, q) => {
                    const $ = C.toAffine();
                    return b.concatBytes(Uint8Array.from([4]), G.toBytes($.x), G.toBytes($.y))
                }
                )
                  , j = W.fromBytes || (P => {
                    const C = P.subarray(1)
                      , q = G.fromBytes(C.subarray(0, G.BYTES))
                      , $ = G.fromBytes(C.subarray(G.BYTES, 2 * G.BYTES));
                    return {
                        x: q,
                        y: $
                    }
                }
                );
                function V(P) {
                    const {a: C, b: q} = W
                      , $ = G.sqr(P)
                      , ie = G.mul($, P);
                    return G.add(G.add(ie, G.mul(P, C)), q)
                }
                if (!G.eql(G.sqr(W.Gy), V(W.Gx)))
                    throw new Error("bad generator point: equation left != right");
                function ee(P) {
                    return typeof P == "bigint" && h < P && P < W.n
                }
                function re(P) {
                    if (!ee(P))
                        throw new Error("Expected valid bigint: 0 < bigint < curve.n")
                }
                function se(P) {
                    const {allowedPrivateKeyLengths: C, nByteLength: q, wrapPrivateKey: $, n: ie} = W;
                    if (C && typeof P != "bigint") {
                        if (b.isBytes(P) && (P = b.bytesToHex(P)),
                        typeof P != "string" || !C.includes(P.length))
                            throw new Error("Invalid key");
                        P = P.padStart(q * 2, "0")
                    }
                    let he;
                    try {
                        he = typeof P == "bigint" ? P : b.bytesToNumberBE((0,
                        f.ensureBytes)("private key", P, q))
                    } catch {
                        throw new Error(`private key must be ${q} bytes, hex or bigint, not ${typeof P}`)
                    }
                    return $ && (he = g.mod(he, ie)),
                    re(he),
                    he
                }
                const te = new Map;
                function Z(P) {
                    if (!(P instanceof F))
                        throw new Error("ProjectivePoint expected")
                }
                class F {
                    constructor(C, q, $) {
                        if (this.px = C,
                        this.py = q,
                        this.pz = $,
                        C == null || !G.isValid(C))
                            throw new Error("x required");
                        if (q == null || !G.isValid(q))
                            throw new Error("y required");
                        if ($ == null || !G.isValid($))
                            throw new Error("z required")
                    }
                    static fromAffine(C) {
                        const {x: q, y: $} = C || {};
                        if (!C || !G.isValid(q) || !G.isValid($))
                            throw new Error("invalid affine point");
                        if (C instanceof F)
                            throw new Error("projective point not allowed");
                        const ie = he => G.eql(he, G.ZERO);
                        return ie(q) && ie($) ? F.ZERO : new F(q,$,G.ONE)
                    }
                    get x() {
                        return this.toAffine().x
                    }
                    get y() {
                        return this.toAffine().y
                    }
                    static normalizeZ(C) {
                        const q = G.invertBatch(C.map($ => $.pz));
                        return C.map( ($, ie) => $.toAffine(q[ie])).map(F.fromAffine)
                    }
                    static fromHex(C) {
                        const q = F.fromAffine(j((0,
                        f.ensureBytes)("pointHex", C)));
                        return q.assertValidity(),
                        q
                    }
                    static fromPrivateKey(C) {
                        return F.BASE.multiply(se(C))
                    }
                    _setWindowSize(C) {
                        this._WINDOW_SIZE = C,
                        te.delete(this)
                    }
                    assertValidity() {
                        if (this.is0()) {
                            if (W.allowInfinityPoint && !G.is0(this.py))
                                return;
                            throw new Error("bad point: ZERO")
                        }
                        const {x: C, y: q} = this.toAffine();
                        if (!G.isValid(C) || !G.isValid(q))
                            throw new Error("bad point: x or y not FE");
                        const $ = G.sqr(q)
                          , ie = V(C);
                        if (!G.eql($, ie))
                            throw new Error("bad point: equation left != right");
                        if (!this.isTorsionFree())
                            throw new Error("bad point: not in prime-order subgroup")
                    }
                    hasEvenY() {
                        const {y: C} = this.toAffine();
                        if (G.isOdd)
                            return !G.isOdd(C);
                        throw new Error("Field doesn't support isOdd")
                    }
                    equals(C) {
                        Z(C);
                        const {px: q, py: $, pz: ie} = this
                          , {px: he, py: ce, pz: U} = C
                          , z = G.eql(G.mul(q, U), G.mul(he, ie))
                          , X = G.eql(G.mul($, U), G.mul(ce, ie));
                        return z && X
                    }
                    negate() {
                        return new F(this.px,G.neg(this.py),this.pz)
                    }
                    double() {
                        const {a: C, b: q} = W
                          , $ = G.mul(q, _)
                          , {px: ie, py: he, pz: ce} = this;
                        let U = G.ZERO
                          , z = G.ZERO
                          , X = G.ZERO
                          , ge = G.mul(ie, ie)
                          , Ee = G.mul(he, he)
                          , je = G.mul(ce, ce)
                          , Re = G.mul(ie, he);
                        return Re = G.add(Re, Re),
                        X = G.mul(ie, ce),
                        X = G.add(X, X),
                        U = G.mul(C, X),
                        z = G.mul($, je),
                        z = G.add(U, z),
                        U = G.sub(Ee, z),
                        z = G.add(Ee, z),
                        z = G.mul(U, z),
                        U = G.mul(Re, U),
                        X = G.mul($, X),
                        je = G.mul(C, je),
                        Re = G.sub(ge, je),
                        Re = G.mul(C, Re),
                        Re = G.add(Re, X),
                        X = G.add(ge, ge),
                        ge = G.add(X, ge),
                        ge = G.add(ge, je),
                        ge = G.mul(ge, Re),
                        z = G.add(z, ge),
                        je = G.mul(he, ce),
                        je = G.add(je, je),
                        ge = G.mul(je, Re),
                        U = G.sub(U, ge),
                        X = G.mul(je, Ee),
                        X = G.add(X, X),
                        X = G.add(X, X),
                        new F(U,z,X)
                    }
                    add(C) {
                        Z(C);
                        const {px: q, py: $, pz: ie} = this
                          , {px: he, py: ce, pz: U} = C;
                        let z = G.ZERO
                          , X = G.ZERO
                          , ge = G.ZERO;
                        const Ee = W.a
                          , je = G.mul(W.b, _);
                        let Re = G.mul(q, he)
                          , He = G.mul($, ce)
                          , st = G.mul(ie, U)
                          , _t = G.add(q, $)
                          , ft = G.add(he, ce);
                        _t = G.mul(_t, ft),
                        ft = G.add(Re, He),
                        _t = G.sub(_t, ft),
                        ft = G.add(q, ie);
                        let Ue = G.add(he, U);
                        return ft = G.mul(ft, Ue),
                        Ue = G.add(Re, st),
                        ft = G.sub(ft, Ue),
                        Ue = G.add($, ie),
                        z = G.add(ce, U),
                        Ue = G.mul(Ue, z),
                        z = G.add(He, st),
                        Ue = G.sub(Ue, z),
                        ge = G.mul(Ee, ft),
                        z = G.mul(je, st),
                        ge = G.add(z, ge),
                        z = G.sub(He, ge),
                        ge = G.add(He, ge),
                        X = G.mul(z, ge),
                        He = G.add(Re, Re),
                        He = G.add(He, Re),
                        st = G.mul(Ee, st),
                        ft = G.mul(je, ft),
                        He = G.add(He, st),
                        st = G.sub(Re, st),
                        st = G.mul(Ee, st),
                        ft = G.add(ft, st),
                        Re = G.mul(He, ft),
                        X = G.add(X, Re),
                        Re = G.mul(Ue, ft),
                        z = G.mul(_t, z),
                        z = G.sub(z, Re),
                        Re = G.mul(_t, He),
                        ge = G.mul(Ue, ge),
                        ge = G.add(ge, Re),
                        new F(z,X,ge)
                    }
                    subtract(C) {
                        return this.add(C.negate())
                    }
                    is0() {
                        return this.equals(F.ZERO)
                    }
                    wNAF(C) {
                        return T.wNAFCached(this, te, C, q => {
                            const $ = G.invertBatch(q.map(ie => ie.pz));
                            return q.map( (ie, he) => ie.toAffine($[he])).map(F.fromAffine)
                        }
                        )
                    }
                    multiplyUnsafe(C) {
                        const q = F.ZERO;
                        if (C === h)
                            return q;
                        if (re(C),
                        C === v)
                            return this;
                        const {endo: $} = W;
                        if (!$)
                            return T.unsafeLadder(this, C);
                        let {k1neg: ie, k1: he, k2neg: ce, k2: U} = $.splitScalar(C)
                          , z = q
                          , X = q
                          , ge = this;
                        for (; he > h || U > h; )
                            he & v && (z = z.add(ge)),
                            U & v && (X = X.add(ge)),
                            ge = ge.double(),
                            he >>= v,
                            U >>= v;
                        return ie && (z = z.negate()),
                        ce && (X = X.negate()),
                        X = new F(G.mul(X.px, $.beta),X.py,X.pz),
                        z.add(X)
                    }
                    multiply(C) {
                        re(C);
                        let q = C, $, ie;
                        const {endo: he} = W;
                        if (he) {
                            const {k1neg: ce, k1: U, k2neg: z, k2: X} = he.splitScalar(q);
                            let {p: ge, f: Ee} = this.wNAF(U)
                              , {p: je, f: Re} = this.wNAF(X);
                            ge = T.constTimeNegate(ce, ge),
                            je = T.constTimeNegate(z, je),
                            je = new F(G.mul(je.px, he.beta),je.py,je.pz),
                            $ = ge.add(je),
                            ie = Ee.add(Re)
                        } else {
                            const {p: ce, f: U} = this.wNAF(q);
                            $ = ce,
                            ie = U
                        }
                        return F.normalizeZ([$, ie])[0]
                    }
                    multiplyAndAddUnsafe(C, q, $) {
                        const ie = F.BASE
                          , he = (U, z) => z === h || z === v || !U.equals(ie) ? U.multiplyUnsafe(z) : U.multiply(z)
                          , ce = he(this, q).add(he(C, $));
                        return ce.is0() ? void 0 : ce
                    }
                    toAffine(C) {
                        const {px: q, py: $, pz: ie} = this
                          , he = this.is0();
                        C == null && (C = he ? G.ONE : G.inv(ie));
                        const ce = G.mul(q, C)
                          , U = G.mul($, C)
                          , z = G.mul(ie, C);
                        if (he)
                            return {
                                x: G.ZERO,
                                y: G.ZERO
                            };
                        if (!G.eql(z, G.ONE))
                            throw new Error("invZ was invalid");
                        return {
                            x: ce,
                            y: U
                        }
                    }
                    isTorsionFree() {
                        const {h: C, isTorsionFree: q} = W;
                        if (C === v)
                            return !0;
                        if (q)
                            return q(F, this);
                        throw new Error("isTorsionFree() has not been declared for the elliptic curve")
                    }
                    clearCofactor() {
                        const {h: C, clearCofactor: q} = W;
                        return C === v ? this : q ? q(F, this) : this.multiplyUnsafe(W.h)
                    }
                    toRawBytes(C=!0) {
                        return this.assertValidity(),
                        Y(F, this, C)
                    }
                    toHex(C=!0) {
                        return b.bytesToHex(this.toRawBytes(C))
                    }
                }
                F.BASE = new F(W.Gx,W.Gy,G.ONE),
                F.ZERO = new F(G.ZERO,G.ONE,G.ZERO);
                const D = W.nBitLength
                  , T = (0,
                l.wNAF)(F, W.endo ? Math.ceil(D / 2) : D);
                return {
                    CURVE: W,
                    ProjectivePoint: F,
                    normPrivateKeyToScalar: se,
                    weierstrassEquation: V,
                    isWithinCurveOrder: ee
                }
            }
            function I(k) {
                const W = (0,
                l.validateBasic)(k);
                return b.validateObject(W, {
                    hash: "hash",
                    hmac: "function",
                    randomBytes: "function"
                }, {
                    bits2int: "function",
                    bits2int_modN: "function",
                    lowS: "boolean"
                }),
                Object.freeze({
                    lowS: !0,
                    ...W
                })
            }
            function R(k) {
                const W = I(k)
                  , {Fp: G, n: Y} = W
                  , j = G.BYTES + 1
                  , V = 2 * G.BYTES + 1;
                function ee(ft) {
                    return h < ft && ft < G.ORDER
                }
                function re(ft) {
                    return g.mod(ft, Y)
                }
                function se(ft) {
                    return g.invert(ft, Y)
                }
                const {ProjectivePoint: te, normPrivateKeyToScalar: Z, weierstrassEquation: F, isWithinCurveOrder: D} = S({
                    ...W,
                    toBytes(ft, Ue, Ve) {
                        const we = Ue.toAffine()
                          , Pe = G.toBytes(we.x)
                          , $e = b.concatBytes;
                        return Ve ? $e(Uint8Array.from([Ue.hasEvenY() ? 2 : 3]), Pe) : $e(Uint8Array.from([4]), Pe, G.toBytes(we.y))
                    },
                    fromBytes(ft) {
                        const Ue = ft.length
                          , Ve = ft[0]
                          , we = ft.subarray(1);
                        if (Ue === j && (Ve === 2 || Ve === 3)) {
                            const Pe = b.bytesToNumberBE(we);
                            if (!ee(Pe))
                                throw new Error("Point is not on curve");
                            const $e = F(Pe);
                            let Me;
                            try {
                                Me = G.sqrt($e)
                            } catch (Je) {
                                const Fe = Je instanceof Error ? ": " + Je.message : "";
                                throw new Error("Point is not on curve" + Fe)
                            }
                            const St = (Me & v) === v;
                            return (Ve & 1) === 1 !== St && (Me = G.neg(Me)),
                            {
                                x: Pe,
                                y: Me
                            }
                        } else if (Ue === V && Ve === 4) {
                            const Pe = G.fromBytes(we.subarray(0, G.BYTES))
                              , $e = G.fromBytes(we.subarray(G.BYTES, 2 * G.BYTES));
                            return {
                                x: Pe,
                                y: $e
                            }
                        } else
                            throw new Error(`Point of length ${Ue} was invalid. Expected ${j} compressed bytes or ${V} uncompressed bytes`)
                    }
                })
                  , T = ft => b.bytesToHex(b.numberToBytesBE(ft, W.nByteLength));
                function P(ft) {
                    const Ue = Y >> v;
                    return ft > Ue
                }
                function C(ft) {
                    return P(ft) ? re(-ft) : ft
                }
                const q = (ft, Ue, Ve) => b.bytesToNumberBE(ft.slice(Ue, Ve));
                class $ {
                    constructor(Ue, Ve, we) {
                        this.r = Ue,
                        this.s = Ve,
                        this.recovery = we,
                        this.assertValidity()
                    }
                    static fromCompact(Ue) {
                        const Ve = W.nByteLength;
                        return Ue = (0,
                        f.ensureBytes)("compactSignature", Ue, Ve * 2),
                        new $(q(Ue, 0, Ve),q(Ue, Ve, 2 * Ve))
                    }
                    static fromDER(Ue) {
                        const {r: Ve, s: we} = s.DER.toSig((0,
                        f.ensureBytes)("DER", Ue));
                        return new $(Ve,we)
                    }
                    assertValidity() {
                        if (!D(this.r))
                            throw new Error("r must be 0 < r < CURVE.n");
                        if (!D(this.s))
                            throw new Error("s must be 0 < s < CURVE.n")
                    }
                    addRecoveryBit(Ue) {
                        return new $(this.r,this.s,Ue)
                    }
                    recoverPublicKey(Ue) {
                        const {r: Ve, s: we, recovery: Pe} = this
                          , $e = X((0,
                        f.ensureBytes)("msgHash", Ue));
                        if (Pe == null || ![0, 1, 2, 3].includes(Pe))
                            throw new Error("recovery id invalid");
                        const Me = Pe === 2 || Pe === 3 ? Ve + W.n : Ve;
                        if (Me >= G.ORDER)
                            throw new Error("recovery id 2 or 3 invalid");
                        const St = (Pe & 1) === 0 ? "02" : "03"
                          , Ot = te.fromHex(St + T(Me))
                          , Je = se(Me)
                          , Fe = re(-$e * Je)
                          , at = re(we * Je)
                          , ct = te.BASE.multiplyAndAddUnsafe(Ot, Fe, at);
                        if (!ct)
                            throw new Error("point at infinify");
                        return ct.assertValidity(),
                        ct
                    }
                    hasHighS() {
                        return P(this.s)
                    }
                    normalizeS() {
                        return this.hasHighS() ? new $(this.r,re(-this.s),this.recovery) : this
                    }
                    toDERRawBytes() {
                        return b.hexToBytes(this.toDERHex())
                    }
                    toDERHex() {
                        return s.DER.hexFromSig({
                            r: this.r,
                            s: this.s
                        })
                    }
                    toCompactRawBytes() {
                        return b.hexToBytes(this.toCompactHex())
                    }
                    toCompactHex() {
                        return T(this.r) + T(this.s)
                    }
                }
                const ie = {
                    isValidPrivateKey(ft) {
                        try {
                            return Z(ft),
                            !0
                        } catch {
                            return !1
                        }
                    },
                    normPrivateKeyToScalar: Z,
                    randomPrivateKey: () => {
                        const ft = g.getMinHashLength(W.n);
                        return g.mapHashToField(W.randomBytes(ft), W.n)
                    }
                    ,
                    precompute(ft=8, Ue=te.BASE) {
                        return Ue._setWindowSize(ft),
                        Ue.multiply(BigInt(3)),
                        Ue
                    }
                };
                function he(ft, Ue=!0) {
                    return te.fromPrivateKey(ft).toRawBytes(Ue)
                }
                function ce(ft) {
                    const Ue = b.isBytes(ft)
                      , Ve = typeof ft == "string"
                      , we = (Ue || Ve) && ft.length;
                    return Ue ? we === j || we === V : Ve ? we === 2 * j || we === 2 * V : ft instanceof te
                }
                function U(ft, Ue, Ve=!0) {
                    if (ce(ft))
                        throw new Error("first arg must be private key");
                    if (!ce(Ue))
                        throw new Error("second arg must be public key");
                    return te.fromHex(Ue).multiply(Z(ft)).toRawBytes(Ve)
                }
                const z = W.bits2int || function(ft) {
                    const Ue = b.bytesToNumberBE(ft)
                      , Ve = ft.length * 8 - W.nBitLength;
                    return Ve > 0 ? Ue >> BigInt(Ve) : Ue
                }
                  , X = W.bits2int_modN || function(ft) {
                    return re(z(ft))
                }
                  , ge = b.bitMask(W.nBitLength);
                function Ee(ft) {
                    if (typeof ft != "bigint")
                        throw new Error("bigint expected");
                    if (!(h <= ft && ft < ge))
                        throw new Error(`bigint expected < 2^${W.nBitLength}`);
                    return b.numberToBytesBE(ft, W.nByteLength)
                }
                function je(ft, Ue, Ve=Re) {
                    if (["recovered", "canonical"].some(ne => ne in Ve))
                        throw new Error("sign() legacy options not supported");
                    const {hash: we, randomBytes: Pe} = W;
                    let {lowS: $e, prehash: Me, extraEntropy: St} = Ve;
                    $e == null && ($e = !0),
                    ft = (0,
                    f.ensureBytes)("msgHash", ft),
                    Me && (ft = (0,
                    f.ensureBytes)("prehashed msgHash", we(ft)));
                    const Ot = X(ft)
                      , Je = Z(Ue)
                      , Fe = [Ee(Je), Ee(Ot)];
                    if (St != null && St !== !1) {
                        const ne = St === !0 ? Pe(G.BYTES) : St;
                        Fe.push((0,
                        f.ensureBytes)("extraEntropy", ne))
                    }
                    const at = b.concatBytes(...Fe)
                      , ct = Ot;
                    function Ze(ne) {
                        const K = z(ne);
                        if (!D(K))
                            return;
                        const oe = se(K)
                          , Ce = te.BASE.multiply(K).toAffine()
                          , Te = re(Ce.x);
                        if (Te === h)
                            return;
                        const be = re(oe * re(ct + Te * Je));
                        if (be === h)
                            return;
                        let Qe = (Ce.x === Te ? 0 : 2) | Number(Ce.y & v)
                          , Be = be;
                        return $e && P(be) && (Be = C(be),
                        Qe ^= 1),
                        new $(Te,Be,Qe)
                    }
                    return {
                        seed: at,
                        k2sig: Ze
                    }
                }
                const Re = {
                    lowS: W.lowS,
                    prehash: !1
                }
                  , He = {
                    lowS: W.lowS,
                    prehash: !1
                };
                function st(ft, Ue, Ve=Re) {
                    const {seed: we, k2sig: Pe} = je(ft, Ue, Ve)
                      , $e = W;
                    return b.createHmacDrbg($e.hash.outputLen, $e.nByteLength, $e.hmac)(we, Pe)
                }
                te.BASE._setWindowSize(8);
                function _t(ft, Ue, Ve, we=He) {
                    const Pe = ft;
                    if (Ue = (0,
                    f.ensureBytes)("msgHash", Ue),
                    Ve = (0,
                    f.ensureBytes)("publicKey", Ve),
                    "strict"in we)
                        throw new Error("options.strict was renamed to lowS");
                    const {lowS: $e, prehash: Me} = we;
                    let St, Ot;
                    try {
                        if (typeof Pe == "string" || b.isBytes(Pe))
                            try {
                                St = $.fromDER(Pe)
                            } catch (Ce) {
                                if (!(Ce instanceof s.DER.Err))
                                    throw Ce;
                                St = $.fromCompact(Pe)
                            }
                        else if (typeof Pe == "object" && typeof Pe.r == "bigint" && typeof Pe.s == "bigint") {
                            const {r: Ce, s: Te} = Pe;
                            St = new $(Ce,Te)
                        } else
                            throw new Error("PARSE");
                        Ot = te.fromHex(Ve)
                    } catch (Ce) {
                        if (Ce.message === "PARSE")
                            throw new Error("signature must be Signature instance, Uint8Array or hex string");
                        return !1
                    }
                    if ($e && St.hasHighS())
                        return !1;
                    Me && (Ue = W.hash(Ue));
                    const {r: Je, s: Fe} = St
                      , at = X(Ue)
                      , ct = se(Fe)
                      , Ze = re(at * ct)
                      , ne = re(Je * ct)
                      , K = te.BASE.multiplyAndAddUnsafe(Ot, Ze, ne)?.toAffine();
                    return K ? re(K.x) === Je : !1
                }
                return {
                    CURVE: W,
                    getPublicKey: he,
                    getSharedSecret: U,
                    sign: st,
                    verify: _t,
                    ProjectivePoint: te,
                    Signature: $,
                    utils: ie
                }
            }
            function M(k, W) {
                const G = k.ORDER;
                let Y = h;
                for (let P = G - v; P % E === h; P /= E)
                    Y += v;
                const j = Y
                  , V = E << j - v - v
                  , ee = V * E
                  , re = (G - v) / ee
                  , se = (re - v) / E
                  , te = ee - v
                  , Z = V
                  , F = k.pow(W, re)
                  , D = k.pow(W, (re + v) / E);
                let T = (P, C) => {
                    let q = F
                      , $ = k.pow(C, te)
                      , ie = k.sqr($);
                    ie = k.mul(ie, C);
                    let he = k.mul(P, ie);
                    he = k.pow(he, se),
                    he = k.mul(he, $),
                    $ = k.mul(he, C),
                    ie = k.mul(he, P);
                    let ce = k.mul(ie, $);
                    he = k.pow(ce, Z);
                    let U = k.eql(he, k.ONE);
                    $ = k.mul(ie, D),
                    he = k.mul(ce, q),
                    ie = k.cmov($, ie, U),
                    ce = k.cmov(he, ce, U);
                    for (let z = j; z > v; z--) {
                        let X = z - E;
                        X = E << X - v;
                        let ge = k.pow(ce, X);
                        const Ee = k.eql(ge, k.ONE);
                        $ = k.mul(ie, q),
                        q = k.mul(q, q),
                        ge = k.mul(ce, q),
                        ie = k.cmov($, ie, Ee),
                        ce = k.cmov(ge, ce, Ee)
                    }
                    return {
                        isValid: U,
                        value: ie
                    }
                }
                ;
                if (k.ORDER % w === _) {
                    const P = (k.ORDER - _) / w
                      , C = k.sqrt(k.neg(W));
                    T = (q, $) => {
                        let ie = k.sqr($);
                        const he = k.mul(q, $);
                        ie = k.mul(ie, he);
                        let ce = k.pow(ie, P);
                        ce = k.mul(ce, he);
                        const U = k.mul(ce, C)
                          , z = k.mul(k.sqr(ce), $)
                          , X = k.eql(z, q);
                        let ge = k.cmov(U, ce, X);
                        return {
                            isValid: X,
                            value: ge
                        }
                    }
                }
                return T
            }
            function O(k, W) {
                if (g.validateField(k),
                !k.isValid(W.A) || !k.isValid(W.B) || !k.isValid(W.Z))
                    throw new Error("mapToCurveSimpleSWU: invalid opts");
                const G = M(k, W.Z);
                if (!k.isOdd)
                    throw new Error("Fp.isOdd is not implemented!");
                return Y => {
                    let j, V, ee, re, se, te, Z, F;
                    j = k.sqr(Y),
                    j = k.mul(j, W.Z),
                    V = k.sqr(j),
                    V = k.add(V, j),
                    ee = k.add(V, k.ONE),
                    ee = k.mul(ee, W.B),
                    re = k.cmov(W.Z, k.neg(V), !k.eql(V, k.ZERO)),
                    re = k.mul(re, W.A),
                    V = k.sqr(ee),
                    te = k.sqr(re),
                    se = k.mul(te, W.A),
                    V = k.add(V, se),
                    V = k.mul(V, ee),
                    te = k.mul(te, re),
                    se = k.mul(te, W.B),
                    V = k.add(V, se),
                    Z = k.mul(j, ee);
                    const {isValid: D, value: T} = G(V, te);
                    F = k.mul(j, Y),
                    F = k.mul(F, T),
                    Z = k.cmov(Z, ee, D),
                    F = k.cmov(F, T, D);
                    const P = k.isOdd(Y) === k.isOdd(F);
                    return F = k.cmov(k.neg(F), F, P),
                    Z = k.div(Z, re),
                    {
                        x: Z,
                        y: F
                    }
                }
            }
        }
        ),
        20555: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.LevelMask = void 0;
            class y {
                constructor(b=0) {
                    this._mask = 0,
                    this._mask = b,
                    this._hashIndex = l(this._mask),
                    this._hashCount = this._hashIndex + 1
                }
                get value() {
                    return this._mask
                }
                get level() {
                    return 32 - Math.clz32(this._mask)
                }
                get hashIndex() {
                    return this._hashIndex
                }
                get hashCount() {
                    return this._hashCount
                }
                apply(b) {
                    return new y(this._mask & (1 << b) - 1)
                }
                isSignificant(b) {
                    return b === 0 || (this._mask >> b - 1) % 2 !== 0
                }
            }
            s.LevelMask = y;
            function l(g) {
                return g = g - (g >> 1 & 1431655765),
                g = (g & 858993459) + (g >> 2 & 858993459),
                (g + (g >> 4) & 252645135) * 16843009 >> 24
            }
        }
        ),
        20574: ( (H, s, y) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.createWalletTransferV1 = E,
            s.createWalletTransferV2 = _,
            s.createWalletTransferV3 = w,
            s.createWalletTransferV4 = S,
            s.createWalletTransferV5Beta = I,
            s.createWalletTransferV5R1 = R;
            const l = y(1307)
              , g = y(75269)
              , b = y(53318)
              , f = y(77670)
              , o = y(32644)
              , c = y(14112)
              , u = y(80331);
            function h(M, O) {
                return (0,
                l.beginCell)().storeBuffer(M).storeBuilder(O).endCell()
            }
            function v(M, O) {
                return (0,
                l.beginCell)().storeBuilder(O).storeBuffer(M).endCell()
            }
            function E(M) {
                let O = (0,
                l.beginCell)().storeUint(M.seqno, 32);
                M.message && (O.storeUint(M.sendMode, 8),
                O.storeRef((0,
                l.beginCell)().store((0,
                l.storeMessageRelaxed)(M.message))));
                let k = (0,
                g.sign)(O.endCell().hash(), M.secretKey);
                return (0,
                l.beginCell)().storeBuffer(k).storeBuilder(O).endCell()
            }
            function _(M) {
                if (M.messages.length > 4)
                    throw Error("Maximum number of messages in a single transfer is 4");
                let O = (0,
                l.beginCell)().storeUint(M.seqno, 32);
                if (M.seqno === 0)
                    for (let G = 0; G < 32; G++)
                        O.storeBit(1);
                else
                    O.storeUint(M.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
                for (let G of M.messages)
                    O.storeUint(M.sendMode, 8),
                    O.storeRef((0,
                    l.beginCell)().store((0,
                    l.storeMessageRelaxed)(G)));
                let k = (0,
                g.sign)(O.endCell().hash(), M.secretKey);
                return (0,
                l.beginCell)().storeBuffer(k).storeBuilder(O).endCell()
            }
            function w(M) {
                if (M.messages.length > 4)
                    throw Error("Maximum number of messages in a single transfer is 4");
                let O = (0,
                l.beginCell)().storeUint(M.walletId, 32);
                if (M.seqno === 0)
                    for (let k = 0; k < 32; k++)
                        O.storeBit(1);
                else
                    O.storeUint(M.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
                O.storeUint(M.seqno, 32);
                for (let k of M.messages)
                    O.storeUint(M.sendMode, 8),
                    O.storeRef((0,
                    l.beginCell)().store((0,
                    l.storeMessageRelaxed)(k)));
                return (0,
                o.signPayload)(M, O, h)
            }
            function S(M) {
                if (M.messages.length > 4)
                    throw Error("Maximum number of messages in a single transfer is 4");
                let O = (0,
                l.beginCell)().storeUint(M.walletId, 32);
                if (M.seqno === 0)
                    for (let k = 0; k < 32; k++)
                        O.storeBit(1);
                else
                    O.storeUint(M.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
                O.storeUint(M.seqno, 32),
                O.storeUint(0, 8);
                for (let k of M.messages)
                    O.storeUint(M.sendMode, 8),
                    O.storeRef((0,
                    l.beginCell)().store((0,
                    l.storeMessageRelaxed)(k)));
                return (0,
                o.signPayload)(M, O, h)
            }
            function I(M) {
                if (M.actions.length > 255)
                    throw Error("Maximum number of OutActions in a single request is 255");
                if (M.authType === "extension")
                    return (0,
                    l.beginCell)().storeUint(b.WalletContractV5Beta.OpCodes.auth_extension, 32).store((0,
                    f.storeOutListExtendedV5Beta)(M.actions)).endCell();
                const O = (0,
                l.beginCell)().storeUint(M.authType === "internal" ? b.WalletContractV5Beta.OpCodes.auth_signed_internal : b.WalletContractV5Beta.OpCodes.auth_signed_external, 32).store(M.walletId);
                if (M.seqno === 0)
                    for (let k = 0; k < 32; k++)
                        O.storeBit(1);
                else
                    O.storeUint(M.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
                return O.storeUint(M.seqno, 32).store((0,
                f.storeOutListExtendedV5Beta)(M.actions)),
                (0,
                o.signPayload)(M, O, v)
            }
            function R(M) {
                if (M.actions.length > 255)
                    throw Error("Maximum number of OutActions in a single request is 255");
                if (M = {
                    ...M
                },
                M.authType === "extension")
                    return (0,
                    l.beginCell)().storeUint(c.WalletContractV5R1.OpCodes.auth_extension, 32).storeUint(M.queryId ?? 0, 64).store((0,
                    u.storeOutListExtendedV5R1)(M.actions)).endCell();
                M.actions = (0,
                u.patchV5R1ActionsSendMode)(M.actions, M.authType);
                const O = (0,
                l.beginCell)().storeUint(M.authType === "internal" ? c.WalletContractV5R1.OpCodes.auth_signed_internal : c.WalletContractV5R1.OpCodes.auth_signed_external, 32).store(M.walletId);
                if (M.seqno === 0)
                    for (let k = 0; k < 32; k++)
                        O.storeBit(1);
                else
                    O.storeUint(M.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
                return O.storeUint(M.seqno, 32).store((0,
                u.storeOutListExtendedV5R1)(M.actions)),
                (0,
                o.signPayload)(M, O, v)
            }
        }
        ),
        20706: ( (H, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.wordlist = void 0,
            s.wordlist = ["abacus", "abdomen", "abdominal", "abide", "abiding", "ability", "ablaze", "able", "abnormal", "abrasion", "abrasive", "abreast", "abridge", "abroad", "abruptly", "absence", "absentee", "absently", "absinthe", "absolute", "absolve", "abstain", "abstract", "absurd", "accent", "acclaim", "acclimate", "accompany", "account", "accuracy", "accurate", "accustom", "acetone", "achiness", "aching", "acid", "acorn", "acquaint", "acquire", "acre", "acrobat", "acronym", "acting", "action", "activate", "activator", "active", "activism", "activist", "activity", "actress", "acts", "acutely", "acuteness", "aeration", "aerobics", "aerosol", "aerospace", "afar", "affair", "affected", "affecting", "affection", "affidavit", "affiliate", "affirm", "affix", "afflicted", "affluent", "afford", "affront", "aflame", "afloat", "aflutter", "afoot", "afraid", "afterglow", "afterlife", "aftermath", "aftermost", "afternoon", "aged", "ageless", "agency", "agenda", "agent", "aggregate", "aghast", "agile", "agility", "aging", "agnostic", "agonize", "agonizing", "agony", "agreeable", "agreeably", "agreed", "agreeing", "agreement", "aground", "ahead", "ahoy", "aide", "aids", "aim", "ajar", "alabaster", "alarm", "albatross", "album", "alfalfa", "algebra", "algorithm", "alias", "alibi", "alienable", "alienate", "aliens", "alike", "alive", "alkaline", "alkalize", "almanac", "almighty", "almost", "aloe", "aloft", "aloha", "alone", "alongside", "aloof", "alphabet", "alright", "although", "altitude", "alto", "aluminum", "alumni", "always", "amaretto", "amaze", "amazingly", "amber", "ambiance", "ambiguity", "ambiguous", "ambition", "ambitious", "ambulance", "ambush", "amendable", "amendment", "amends", "amenity", "amiable", "amicably", "amid", "amigo", "amino", "amiss", "ammonia", "ammonium", "amnesty", "amniotic", "among", "amount", "amperage", "ample", "amplifier", "amplify", "amply", "amuck", "amulet", "amusable", "amused", "amusement", "amuser", "amusing", "anaconda", "anaerobic", "anagram", "anatomist", "anatomy", "anchor", "anchovy", "ancient", "android", "anemia", "anemic", "aneurism", "anew", "angelfish", "angelic", "anger", "angled", "angler", "angles", "angling", "angrily", "angriness", "anguished", "angular", "animal", "animate", "animating", "animation", "animator", "anime", "animosity", "ankle", "annex", "annotate", "announcer", "annoying", "annually", "annuity", "anointer", "another", "answering", "antacid", "antarctic", "anteater", "antelope", "antennae", "anthem", "anthill", "anthology", "antibody", "antics", "antidote", "antihero", "antiquely", "antiques", "antiquity", "antirust", "antitoxic", "antitrust", "antiviral", "antivirus", "antler", "antonym", "antsy", "anvil", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything", "anytime", "anyway", "anywhere", "aorta", "apache", "apostle", "appealing", "appear", "appease", "appeasing", "appendage", "appendix", "appetite", "appetizer", "applaud", "applause", "apple", "appliance", "applicant", "applied", "apply", "appointee", "appraisal", "appraiser", "apprehend", "approach", "approval", "approve", "apricot", "april", "apron", "aptitude", "aptly", "aqua", "aqueduct", "arbitrary", "arbitrate", "ardently", "area", "arena", "arguable", "arguably", "argue", "arise", "armadillo", "armband", "armchair", "armed", "armful", "armhole", "arming", "armless", "armoire", "armored", "armory", "armrest", "army", "aroma", "arose", "around", "arousal", "arrange", "array", "arrest", "arrival", "arrive", "arrogance", "arrogant", "arson", "art", "ascend", "ascension", "ascent", "ascertain", "ashamed", "ashen", "ashes", "ashy", "aside", "askew", "asleep", "asparagus", "aspect", "aspirate", "aspire", "aspirin", "astonish", "astound", "astride", "astrology", "astronaut", "astronomy", "astute", "atlantic", "atlas", "atom", "atonable", "atop", "atrium", "atrocious", "atrophy", "attach", "attain", "attempt", "attendant", "attendee", "attention", "attentive", "attest", "attic", "attire", "attitude", "attractor", "attribute", "atypical", "auction", "audacious", "audacity", "audible", "audibly", "audience", "audio", "audition", "augmented", "august", "authentic", "author", "autism", "autistic", "autograph", "automaker", "automated", "automatic", "autopilot", "available", "avalanche", "avatar", "avenge", "avenging", "avenue", "average", "aversion", "avert", "aviation", "aviator", "avid", "avoid", "await", "awaken", "award", "aware", "awhile", "awkward", "awning", "awoke", "awry", "axis", "babble", "babbling", "babied", "baboon", "backache", "backboard", "backboned", "backdrop", "backed", "backer", "backfield", "backfire", "backhand", "backing", "backlands", "backlash", "backless", "backlight", "backlit", "backlog", "backpack", "backpedal", "backrest", "backroom", "backshift", "backside", "backslid", "backspace", "backspin", "backstab", "backstage", "backtalk", "backtrack", "backup", "backward", "backwash", "backwater", "backyard", "bacon", "bacteria", "bacterium", "badass", "badge", "badland", "badly", "badness", "baffle", "baffling", "bagel", "bagful", "baggage", "bagged", "baggie", "bagginess", "bagging", "baggy", "bagpipe", "baguette", "baked", "bakery", "bakeshop", "baking", "balance", "balancing", "balcony", "balmy", "balsamic", "bamboo", "banana", "banish", "banister", "banjo", "bankable", "bankbook", "banked", "banker", "banking", "banknote", "bankroll", "banner", "bannister", "banshee", "banter", "barbecue", "barbed", "barbell", "barber", "barcode", "barge", "bargraph", "barista", "baritone", "barley", "barmaid", "barman", "barn", "barometer", "barrack", "barracuda", "barrel", "barrette", "barricade", "barrier", "barstool", "bartender", "barterer", "bash", "basically", "basics", "basil", "basin", "basis", "basket", "batboy", "batch", "bath", "baton", "bats", "battalion", "battered", "battering", "battery", "batting", "battle", "bauble", "bazooka", "blabber", "bladder", "blade", "blah", "blame", "blaming", "blanching", "blandness", "blank", "blaspheme", "blasphemy", "blast", "blatancy", "blatantly", "blazer", "blazing", "bleach", "bleak", "bleep", "blemish", "blend", "bless", "blighted", "blimp", "bling", "blinked", "blinker", "blinking", "blinks", "blip", "blissful", "blitz", "blizzard", "bloated", "bloating", "blob", "blog", "bloomers", "blooming", "blooper", "blot", "blouse", "blubber", "bluff", "bluish", "blunderer", "blunt", "blurb", "blurred", "blurry", "blurt", "blush", "blustery", "boaster", "boastful", "boasting", "boat", "bobbed", "bobbing", "bobble", "bobcat", "bobsled", "bobtail", "bodacious", "body", "bogged", "boggle", "bogus", "boil", "bok", "bolster", "bolt", "bonanza", "bonded", "bonding", "bondless", "boned", "bonehead", "boneless", "bonelike", "boney", "bonfire", "bonnet", "bonsai", "bonus", "bony", "boogeyman", "boogieman", "book", "boondocks", "booted", "booth", "bootie", "booting", "bootlace", "bootleg", "boots", "boozy", "borax", "boring", "borough", "borrower", "borrowing", "boss", "botanical", "botanist", "botany", "botch", "both", "bottle", "bottling", "bottom", "bounce", "bouncing", "bouncy", "bounding", "boundless", "bountiful", "bovine", "boxcar", "boxer", "boxing", "boxlike", "boxy", "breach", "breath", "breeches", "breeching", "breeder", "breeding", "breeze", "breezy", "brethren", "brewery", "brewing", "briar", "bribe", "brick", "bride", "bridged", "brigade", "bright", "brilliant", "brim", "bring", "brink", "brisket", "briskly", "briskness", "bristle", "brittle", "broadband", "broadcast", "broaden", "broadly", "broadness", "broadside", "broadways", "broiler", "broiling", "broken", "broker", "bronchial", "bronco", "bronze", "bronzing", "brook", "broom", "brought", "browbeat", "brownnose", "browse", "browsing", "bruising", "brunch", "brunette", "brunt", "brush", "brussels", "brute", "brutishly", "bubble", "bubbling", "bubbly", "buccaneer", "bucked", "bucket", "buckle", "buckshot", "buckskin", "bucktooth", "buckwheat", "buddhism", "buddhist", "budding", "buddy", "budget", "buffalo", "buffed", "buffer", "buffing", "buffoon", "buggy", "bulb", "bulge", "bulginess", "bulgur", "bulk", "bulldog", "bulldozer", "bullfight", "bullfrog", "bullhorn", "bullion", "bullish", "bullpen", "bullring", "bullseye", "bullwhip", "bully", "bunch", "bundle", "bungee", "bunion", "bunkbed", "bunkhouse", "bunkmate", "bunny", "bunt", "busboy", "bush", "busily", "busload", "bust", "busybody", "buzz", "cabana", "cabbage", "cabbie", "cabdriver", "cable", "caboose", "cache", "cackle", "cacti", "cactus", "caddie", "caddy", "cadet", "cadillac", "cadmium", "cage", "cahoots", "cake", "calamari", "calamity", "calcium", "calculate", "calculus", "caliber", "calibrate", "calm", "caloric", "calorie", "calzone", "camcorder", "cameo", "camera", "camisole", "camper", "campfire", "camping", "campsite", "campus", "canal", "canary", "cancel", "candied", "candle", "candy", "cane", "canine", "canister", "cannabis", "canned", "canning", "cannon", "cannot", "canola", "canon", "canopener", "canopy", "canteen", "canyon", "capable", "capably", "capacity", "cape", "capillary", "capital", "capitol", "capped", "capricorn", "capsize", "capsule", "caption", "captivate", "captive", "captivity", "capture", "caramel", "carat", "caravan", "carbon", "cardboard", "carded", "cardiac", "cardigan", "cardinal", "cardstock", "carefully", "caregiver", "careless", "caress", "caretaker", "cargo", "caring", "carless", "carload", "carmaker", "carnage", "carnation", "carnival", "carnivore", "carol", "carpenter", "carpentry", "carpool", "carport", "carried", "carrot", "carrousel", "carry", "cartel", "cartload", "carton", "cartoon", "cartridge", "cartwheel", "carve", "carving", "carwash", "cascade", "case", "cash", "casing", "casino", "casket", "cassette", "casually", "casualty", "catacomb", "catalog", "catalyst", "catalyze", "catapult", "cataract", "catatonic", "catcall", "catchable", "catcher", "catching", "catchy", "caterer", "catering", "catfight", "catfish", "cathedral", "cathouse", "catlike", "catnap", "catnip", "catsup", "cattail", "cattishly", "cattle", "catty", "catwalk", "caucasian", "caucus", "causal", "causation", "cause", "causing", "cauterize", "caution", "cautious", "cavalier", "cavalry", "caviar", "cavity", "cedar", "celery", "celestial", "celibacy", "celibate", "celtic", "cement", "census", "ceramics", "ceremony", "certainly", "certainty", "certified", "certify", "cesarean", "cesspool", "chafe", "chaffing", "chain", "chair", "chalice", "challenge", "chamber", "chamomile", "champion", "chance", "change", "channel", "chant", "chaos", "chaperone", "chaplain", "chapped", "chaps", "chapter", "character", "charbroil", "charcoal", "charger", "charging", "chariot", "charity", "charm", "charred", "charter", "charting", "chase", "chasing", "chaste", "chastise", "chastity", "chatroom", "chatter", "chatting", "chatty", "cheating", "cheddar", "cheek", "cheer", "cheese", "cheesy", "chef", "chemicals", "chemist", "chemo", "cherisher", "cherub", "chess", "chest", "chevron", "chevy", "chewable", "chewer", "chewing", "chewy", "chief", "chihuahua", "childcare", "childhood", "childish", "childless", "childlike", "chili", "chill", "chimp", "chip", "chirping", "chirpy", "chitchat", "chivalry", "chive", "chloride", "chlorine", "choice", "chokehold", "choking", "chomp", "chooser", "choosing", "choosy", "chop", "chosen", "chowder", "chowtime", "chrome", "chubby", "chuck", "chug", "chummy", "chump", "chunk", "churn", "chute", "cider", "cilantro", "cinch", "cinema", "cinnamon", "circle", "circling", "circular", "circulate", "circus", "citable", "citadel", "citation", "citizen", "citric", "citrus", "city", "civic", "civil", "clad", "claim", "clambake", "clammy", "clamor", "clamp", "clamshell", "clang", "clanking", "clapped", "clapper", "clapping", "clarify", "clarinet", "clarity", "clash", "clasp", "class", "clatter", "clause", "clavicle", "claw", "clay", "clean", "clear", "cleat", "cleaver", "cleft", "clench", "clergyman", "clerical", "clerk", "clever", "clicker", "client", "climate", "climatic", "cling", "clinic", "clinking", "clip", "clique", "cloak", "clobber", "clock", "clone", "cloning", "closable", "closure", "clothes", "clothing", "cloud", "clover", "clubbed", "clubbing", "clubhouse", "clump", "clumsily", "clumsy", "clunky", "clustered", "clutch", "clutter", "coach", "coagulant", "coastal", "coaster", "coasting", "coastland", "coastline", "coat", "coauthor", "cobalt", "cobbler", "cobweb", "cocoa", "coconut", "cod", "coeditor", "coerce", "coexist", "coffee", "cofounder", "cognition", "cognitive", "cogwheel", "coherence", "coherent", "cohesive", "coil", "coke", "cola", "cold", "coleslaw", "coliseum", "collage", "collapse", "collar", "collected", "collector", "collide", "collie", "collision", "colonial", "colonist", "colonize", "colony", "colossal", "colt", "coma", "come", "comfort", "comfy", "comic", "coming", "comma", "commence", "commend", "comment", "commerce", "commode", "commodity", "commodore", "common", "commotion", "commute", "commuting", "compacted", "compacter", "compactly", "compactor", "companion", "company", "compare", "compel", "compile", "comply", "component", "composed", "composer", "composite", "compost", "composure", "compound", "compress", "comprised", "computer", "computing", "comrade", "concave", "conceal", "conceded", "concept", "concerned", "concert", "conch", "concierge", "concise", "conclude", "concrete", "concur", "condense", "condiment", "condition", "condone", "conducive", "conductor", "conduit", "cone", "confess", "confetti", "confidant", "confident", "confider", "confiding", "configure", "confined", "confining", "confirm", "conflict", "conform", "confound", "confront", "confused", "confusing", "confusion", "congenial", "congested", "congrats", "congress", "conical", "conjoined", "conjure", "conjuror", "connected", "connector", "consensus", "consent", "console", "consoling", "consonant", "constable", "constant", "constrain", "constrict", "construct", "consult", "consumer", "consuming", "contact", "container", "contempt", "contend", "contented", "contently", "contents", "contest", "context", "contort", "contour", "contrite", "control", "contusion", "convene", "convent", "copartner", "cope", "copied", "copier", "copilot", "coping", "copious", "copper", "copy", "coral", "cork", "cornball", "cornbread", "corncob", "cornea", "corned", "corner", "cornfield", "cornflake", "cornhusk", "cornmeal", "cornstalk", "corny", "coronary", "coroner", "corporal", "corporate", "corral", "correct", "corridor", "corrode", "corroding", "corrosive", "corsage", "corset", "cortex", "cosigner", "cosmetics", "cosmic", "cosmos", "cosponsor", "cost", "cottage", "cotton", "couch", "cough", "could", "countable", "countdown", "counting", "countless", "country", "county", "courier", "covenant", "cover", "coveted", "coveting", "coyness", "cozily", "coziness", "cozy", "crabbing", "crabgrass", "crablike", "crabmeat", "cradle", "cradling", "crafter", "craftily", "craftsman", "craftwork", "crafty", "cramp", "cranberry", "crane", "cranial", "cranium", "crank", "crate", "crave", "craving", "crawfish", "crawlers", "crawling", "crayfish", "crayon", "crazed", "crazily", "craziness", "crazy", "creamed", "creamer", "creamlike", "crease", "creasing", "creatable", "create", "creation", "creative", "creature", "credible", "credibly", "credit", "creed", "creme", "creole", "crepe", "crept", "crescent", "crested", "cresting", "crestless", "crevice", "crewless", "crewman", "crewmate", "crib", "cricket", "cried", "crier", "crimp", "crimson", "cringe", "cringing", "crinkle", "crinkly", "crisped", "crisping", "crisply", "crispness", "crispy", "criteria", "critter", "croak", "crock", "crook", "croon", "crop", "cross", "crouch", "crouton", "crowbar", "crowd", "crown", "crucial", "crudely", "crudeness", "cruelly", "cruelness", "cruelty", "crumb", "crummiest", "crummy", "crumpet", "crumpled", "cruncher", "crunching", "crunchy", "crusader", "crushable", "crushed", "crusher", "crushing", "crust", "crux", "crying", "cryptic", "crystal", "cubbyhole", "cube", "cubical", "cubicle", "cucumber", "cuddle", "cuddly", "cufflink", "culinary", "culminate", "culpable", "culprit", "cultivate", "cultural", "culture", "cupbearer", "cupcake", "cupid", "cupped", "cupping", "curable", "curator", "curdle", "cure", "curfew", "curing", "curled", "curler", "curliness", "curling", "curly", "curry", "curse", "cursive", "cursor", "curtain", "curtly", "curtsy", "curvature", "curve", "curvy", "cushy", "cusp", "cussed", "custard", "custodian", "custody", "customary", "customer", "customize", "customs", "cut", "cycle", "cyclic", "cycling", "cyclist", "cylinder", "cymbal", "cytoplasm", "cytoplast", "dab", "dad", "daffodil", "dagger", "daily", "daintily", "dainty", "dairy", "daisy", "dallying", "dance", "dancing", "dandelion", "dander", "dandruff", "dandy", "danger", "dangle", "dangling", "daredevil", "dares", "daringly", "darkened", "darkening", "darkish", "darkness", "darkroom", "darling", "darn", "dart", "darwinism", "dash", "dastardly", "data", "datebook", "dating", "daughter", "daunting", "dawdler", "dawn", "daybed", "daybreak", "daycare", "daydream", "daylight", "daylong", "dayroom", "daytime", "dazzler", "dazzling", "deacon", "deafening", "deafness", "dealer", "dealing", "dealmaker", "dealt", "dean", "debatable", "debate", "debating", "debit", "debrief", "debtless", "debtor", "debug", "debunk", "decade", "decaf", "decal", "decathlon", "decay", "deceased", "deceit", "deceiver", "deceiving", "december", "decency", "decent", "deception", "deceptive", "decibel", "decidable", "decimal", "decimeter", "decipher", "deck", "declared", "decline", "decode", "decompose", "decorated", "decorator", "decoy", "decrease", "decree", "dedicate", "dedicator", "deduce", "deduct", "deed", "deem", "deepen", "deeply", "deepness", "deface", "defacing", "defame", "default", "defeat", "defection", "defective", "defendant", "defender", "defense", "defensive", "deferral", "deferred", "defiance", "defiant", "defile", "defiling", "define", "definite", "deflate", "deflation", "deflator", "deflected", "deflector", "defog", "deforest", "defraud", "defrost", "deftly", "defuse", "defy", "degraded", "degrading", "degrease", "degree", "dehydrate", "deity", "dejected", "delay", "delegate", "delegator", "delete", "deletion", "delicacy", "delicate", "delicious", "delighted", "delirious", "delirium", "deliverer", "delivery", "delouse", "delta", "deluge", "delusion", "deluxe", "demanding", "demeaning", "demeanor", "demise", "democracy", "democrat", "demote", "demotion", "demystify", "denatured", "deniable", "denial", "denim", "denote", "dense", "density", "dental", "dentist", "denture", "deny", "deodorant", "deodorize", "departed", "departure", "depict", "deplete", "depletion", "deplored", "deploy", "deport", "depose", "depraved", "depravity", "deprecate", "depress", "deprive", "depth", "deputize", "deputy", "derail", "deranged", "derby", "derived", "desecrate", "deserve", "deserving", "designate", "designed", "designer", "designing", "deskbound", "desktop", "deskwork", "desolate", "despair", "despise", "despite", "destiny", "destitute", "destruct", "detached", "detail", "detection", "detective", "detector", "detention", "detergent", "detest", "detonate", "detonator", "detoxify", "detract", "deuce", "devalue", "deviancy", "deviant", "deviate", "deviation", "deviator", "device", "devious", "devotedly", "devotee", "devotion", "devourer", "devouring", "devoutly", "dexterity", "dexterous", "diabetes", "diabetic", "diabolic", "diagnoses", "diagnosis", "diagram", "dial", "diameter", "diaper", "diaphragm", "diary", "dice", "dicing", "dictate", "dictation", "dictator", "difficult", "diffused", "diffuser", "diffusion", "diffusive", "dig", "dilation", "diligence", "diligent", "dill", "dilute", "dime", "diminish", "dimly", "dimmed", "dimmer", "dimness", "dimple", "diner", "dingbat", "dinghy", "dinginess", "dingo", "dingy", "dining", "dinner", "diocese", "dioxide", "diploma", "dipped", "dipper", "dipping", "directed", "direction", "directive", "directly", "directory", "direness", "dirtiness", "disabled", "disagree", "disallow", "disarm", "disarray", "disaster", "disband", "disbelief", "disburse", "discard", "discern", "discharge", "disclose", "discolor", "discount", "discourse", "discover", "discuss", "disdain", "disengage", "disfigure", "disgrace", "dish", "disinfect", "disjoin", "disk", "dislike", "disliking", "dislocate", "dislodge", "disloyal", "dismantle", "dismay", "dismiss", "dismount", "disobey", "disorder", "disown", "disparate", "disparity", "dispatch", "dispense", "dispersal", "dispersed", "disperser", "displace", "display", "displease", "disposal", "dispose", "disprove", "dispute", "disregard", "disrupt", "dissuade", "distance", "distant", "distaste", "distill", "distinct", "distort", "distract", "distress", "district", "distrust", "ditch", "ditto", "ditzy", "dividable", "divided", "dividend", "dividers", "dividing", "divinely", "diving", "divinity", "divisible", "divisibly", "division", "divisive", "divorcee", "dizziness", "dizzy", "doable", "docile", "dock", "doctrine", "document", "dodge", "dodgy", "doily", "doing", "dole", "dollar", "dollhouse", "dollop", "dolly", "dolphin", "domain", "domelike", "domestic", "dominion", "dominoes", "donated", "donation", "donator", "donor", "donut", "doodle", "doorbell", "doorframe", "doorknob", "doorman", "doormat", "doornail", "doorpost", "doorstep", "doorstop", "doorway", "doozy", "dork", "dormitory", "dorsal", "dosage", "dose", "dotted", "doubling", "douche", "dove", "down", "dowry", "doze", "drab", "dragging", "dragonfly", "dragonish", "dragster", "drainable", "drainage", "drained", "drainer", "drainpipe", "dramatic", "dramatize", "drank", "drapery", "drastic", "draw", "dreaded", "dreadful", "dreadlock", "dreamboat", "dreamily", "dreamland", "dreamless", "dreamlike", "dreamt", "dreamy", "drearily", "dreary", "drench", "dress", "drew", "dribble", "dried", "drier", "drift", "driller", "drilling", "drinkable", "drinking", "dripping", "drippy", "drivable", "driven", "driver", "driveway", "driving", "drizzle", "drizzly", "drone", "drool", "droop", "drop-down", "dropbox", "dropkick", "droplet", "dropout", "dropper", "drove", "drown", "drowsily", "drudge", "drum", "dry", "dubbed", "dubiously", "duchess", "duckbill", "ducking", "duckling", "ducktail", "ducky", "duct", "dude", "duffel", "dugout", "duh", "duke", "duller", "dullness", "duly", "dumping", "dumpling", "dumpster", "duo", "dupe", "duplex", "duplicate", "duplicity", "durable", "durably", "duration", "duress", "during", "dusk", "dust", "dutiful", "duty", "duvet", "dwarf", "dweeb", "dwelled", "dweller", "dwelling", "dwindle", "dwindling", "dynamic", "dynamite", "dynasty", "dyslexia", "dyslexic", "each", "eagle", "earache", "eardrum", "earflap", "earful", "earlobe", "early", "earmark", "earmuff", "earphone", "earpiece", "earplugs", "earring", "earshot", "earthen", "earthlike", "earthling", "earthly", "earthworm", "earthy", "earwig", "easeful", "easel", "easiest", "easily", "easiness", "easing", "eastbound", "eastcoast", "easter", "eastward", "eatable", "eaten", "eatery", "eating", "eats", "ebay", "ebony", "ebook", "ecard", "eccentric", "echo", "eclair", "eclipse", "ecologist", "ecology", "economic", "economist", "economy", "ecosphere", "ecosystem", "edge", "edginess", "edging", "edgy", "edition", "editor", "educated", "education", "educator", "eel", "effective", "effects", "efficient", "effort", "eggbeater", "egging", "eggnog", "eggplant", "eggshell", "egomaniac", "egotism", "egotistic", "either", "eject", "elaborate", "elastic", "elated", "elbow", "eldercare", "elderly", "eldest", "electable", "election", "elective", "elephant", "elevate", "elevating", "elevation", "elevator", "eleven", "elf", "eligible", "eligibly", "eliminate", "elite", "elitism", "elixir", "elk", "ellipse", "elliptic", "elm", "elongated", "elope", "eloquence", "eloquent", "elsewhere", "elude", "elusive", "elves", "email", "embargo", "embark", "embassy", "embattled", "embellish", "ember", "embezzle", "emblaze", "emblem", "embody", "embolism", "emboss", "embroider", "emcee", "emerald", "emergency", "emission", "emit", "emote", "emoticon", "emotion", "empathic", "empathy", "emperor", "emphases", "emphasis", "emphasize", "emphatic", "empirical", "employed", "employee", "employer", "emporium", "empower", "emptier", "emptiness", "empty", "emu", "enable", "enactment", "enamel", "enchanted", "enchilada", "encircle", "enclose", "enclosure", "encode", "encore", "encounter", "encourage", "encroach", "encrust", "encrypt", "endanger", "endeared", "endearing", "ended", "ending", "endless", "endnote", "endocrine", "endorphin", "endorse", "endowment", "endpoint", "endurable", "endurance", "enduring", "energetic", "energize", "energy", "enforced", "enforcer", "engaged", "engaging", "engine", "engorge", "engraved", "engraver", "engraving", "engross", "engulf", "enha
