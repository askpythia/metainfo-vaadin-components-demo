function SpreadsheetApi(){var Pb='',Qb=0,Rb='gwt.codesvr=',Sb='gwt.hosted=',Tb='gwt.hybrid',Ub='SpreadsheetApi',Vb='#',Wb='?',Xb='/',Yb=1,Zb='img',$b='clear.cache.gif',_b='baseUrl',ac='script',bc='SpreadsheetApi.nocache.js',cc='base',dc='//',ec='meta',fc='name',gc='gwt:property',hc='content',ic='=',jc='gwt:onPropertyErrorFn',kc='Bad handler "',lc='" for "gwt:onPropertyErrorFn"',mc='gwt:onLoadErrorFn',nc='" for "gwt:onLoadErrorFn"',oc='modernie',pc='MSIE',qc='Trident',rc='yes',sc='none',tc='user.agent',uc='webkit',vc='safari',wc='msie',xc=10,yc=11,zc='ie10',Ac=9,Bc='ie9',Cc=8,Dc='ie8',Ec='gecko',Fc='gecko1_8',Gc=2,Hc=3,Ic=4,Jc='Single-script hosted mode not yet implemented. See issue ',Kc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Lc='F91163233FAC4AFBDA65BDBF1B6F419A',Mc=':1',Nc=':2',Oc=':',Pc='DOMContentLoaded',Qc=50;var l=Pb,m=Qb,n=Rb,o=Sb,p=Tb,q=Ub,r=Vb,s=Wb,t=Xb,u=Yb,v=Zb,w=$b,A=_b,B=ac,C=bc,D=cc,F=dc,G=ec,H=fc,I=gc,J=hc,K=ic,L=jc,M=kc,N=lc,O=mc,P=nc,Q=oc,R=pc,S=qc,T=rc,U=sc,V=tc,W=uc,X=vc,Y=wc,Z=xc,$=yc,_=zc,ab=Ac,bb=Bc,cb=Cc,db=Dc,eb=Ec,fb=Fc,gb=Gc,hb=Hc,ib=Ic,jb=Jc,kb=Kc,lb=Lc,mb=Mc,nb=Nc,ob=Oc,pb=Pc,qb=Qc;var rb=window,sb=document,tb,ub,vb=l,wb={},xb=[],yb=[],zb=[],Ab=m,Bb,Cb;if(!rb.__gwt_stylesLoaded){rb.__gwt_stylesLoaded={}}if(!rb.__gwt_scriptsLoaded){rb.__gwt_scriptsLoaded={}}function Db(){var b=false;try{var c=rb.location.search;return (c.indexOf(n)!=-1||(c.indexOf(o)!=-1||rb.external&&rb.external.gwtOnLoad))&&c.indexOf(p)==-1}catch(a){}Db=function(){return b};return b}
function Eb(){if(tb&&ub){tb(Bb,q,vb,Ab)}}
function Fb(){function e(a){var b=a.lastIndexOf(r);if(b==-1){b=a.length}var c=a.indexOf(s);if(c==-1){c=a.length}var d=a.lastIndexOf(t,Math.min(c,b));return d>=m?a.substring(m,d+u):l}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=sb.createElement(v);b.src=a+w;a=e(b.src)}return a}
function g(){var a=Ib(A);if(a!=null){return a}return l}
function h(){var a=sb.getElementsByTagName(B);for(var b=m;b<a.length;++b){if(a[b].src.indexOf(C)!=-1){return e(a[b].src)}}return l}
function i(){var a=sb.getElementsByTagName(D);if(a.length>m){return a[a.length-u].href}return l}
function j(){var a=sb.location;return a.href==a.protocol+F+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==l){k=h()}if(k==l){k=i()}if(k==l&&j()){k=e(sb.location.href)}k=f(k);return k}
function Gb(){var b=document.getElementsByTagName(G);for(var c=m,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(H),g;if(f){if(f==I){g=e.getAttribute(J);if(g){var h,i=g.indexOf(K);if(i>=m){f=g.substring(m,i);h=g.substring(i+u)}else{f=g;h=l}wb[f]=h}}else if(f==L){g=e.getAttribute(J);if(g){try{Cb=eval(g)}catch(a){alert(M+g+N)}}}else if(f==O){g=e.getAttribute(J);if(g){try{Bb=eval(g)}catch(a){alert(M+g+P)}}}}}}
var Hb=function(a,b){return b in xb[a]};var Ib=function(a){var b=wb[a];return b==null?null:b};function Jb(a,b){var c=zb;for(var d=m,e=a.length-u;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Kb(a){var b=yb[a](),c=xb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(Cb){Cb(a,d,b)}throw null}
yb[Q]=function(){{var a=rb.navigator.userAgent;if(a.indexOf(R)==-1&&a.indexOf(S)!=-1){return T}return U}};xb[Q]={'none':m,'yes':u};yb[V]=function(){var a=navigator.userAgent.toLowerCase();var b=sb.documentMode;if(function(){return a.indexOf(W)!=-1}())return X;if(function(){return a.indexOf(Y)!=-1&&(b>=Z&&b<$)}())return _;if(function(){return a.indexOf(Y)!=-1&&(b>=ab&&b<$)}())return bb;if(function(){return a.indexOf(Y)!=-1&&(b>=cb&&b<$)}())return db;if(function(){return a.indexOf(eb)!=-1||b>=$}())return fb;return X};xb[V]={'gecko1_8':m,'ie10':u,'ie8':gb,'ie9':hb,'safari':ib};SpreadsheetApi.onScriptLoad=function(a){SpreadsheetApi=null;tb=a;Eb()};if(Db()){alert(jb+kb);return}Fb();Gb();try{var Lb;Jb([U,fb],lb);Jb([T,fb],lb+mb);Jb([U,X],lb+nb);Lb=zb[Kb(Q)][Kb(V)];var Mb=Lb.indexOf(ob);if(Mb!=-1){Ab=Number(Lb.substring(Mb+u))}}catch(a){return}var Nb;function Ob(){if(!ub){ub=true;Eb();if(sb.removeEventListener){sb.removeEventListener(pb,Ob,false)}if(Nb){clearInterval(Nb)}}}
if(sb.addEventListener){sb.addEventListener(pb,function(){Ob()},false)}var Nb=setInterval(function(){if(/loaded|complete/.test(sb.readyState)){Ob()}},qb)}
SpreadsheetApi();(function () {var $gwt_version = "2.9.0";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'F91163233FAC4AFBDA65BDBF1B6F419A';function K(){}
function oE(){}
function kE(){}
function Mg(){}
function Tg(){}
function eb(){}
function rb(){}
function lf(){}
function an(){}
function hn(){}
function pn(){}
function Bn(){}
function In(){}
function Pn(){}
function Wn(){}
function bo(){}
function jo(){}
function qo(){}
function Bo(){}
function Jo(){}
function Qo(){}
function ap(){}
function gp(){}
function mp(){}
function mH(){}
function kH(){}
function FH(){}
function HH(){}
function EE(){}
function gF(){}
function iF(){}
function NF(){}
function XJ(){}
function zK(){}
function BK(){}
function BY(){}
function AL(){}
function ML(){}
function DN(){}
function sP(){}
function wP(){}
function wQ(){}
function LS(){}
function RS(){}
function cT(){}
function jZ(){}
function l0(){}
function i1(){}
function t1(){}
function $1(){}
function t2(){}
function v2(){}
function x2(){}
function A2(){}
function C2(){}
function E2(){}
function G2(){}
function I2(){}
function K2(){}
function M2(){}
function N2(){}
function P2(){}
function R2(){}
function S2(){}
function U2(){}
function W2(){}
function X2(){}
function Z2(){}
function $2(){}
function a3(){}
function b3(){}
function d3(){}
function f3(){}
function h3(){}
function j3(){}
function l3(){}
function n3(){}
function n6(){}
function b6(){}
function d6(){}
function f6(){}
function h6(){}
function j6(){}
function l6(){}
function p6(){}
function p5(){}
function r6(){}
function s6(){}
function t6(){}
function v6(){}
function x6(){}
function z6(){}
function B6(){}
function F6(){}
function H6(){}
function J6(){}
function L6(){}
function Reb(){}
function Rkb(){}
function $kb(){}
function $qb(){}
function Wqb(){}
function Yqb(){}
function glb(){}
function olb(){}
function ocb(){}
function hcb(){}
function icb(){}
function pcb(){}
function vpb(){}
function Lpb(){}
function Opb(){}
function Rpb(){}
function Upb(){}
function Xpb(){}
function Xmb(){}
function Krb(){}
function Iab(){}
function $bb(){}
function $pb(){}
function xob(){}
function Bob(){}
function Dob(){}
function bqb(){}
function eqb(){}
function hqb(){}
function HE(a){}
function R1(a){}
function qi(){Fh()}
function Ki(){Fh()}
function sG(){rG()}
function gH(){MG()}
function dH(){bH()}
function GL(){yL()}
function JL(){yL()}
function TL(){SL()}
function PG(a){uF(a)}
function abb(){Rab()}
function Dcb(){Dcb=kE}
function cc(a,b){a.a=b}
function Vm(a,b){a.a=b}
function Rm(a,b){a.f=b}
function Wm(a,b){a.b=b}
function sE(a,b){a.b=b}
function rE(a,b){a.a=b}
function xI(a,b){a.a=b}
function tR(a,b){a.a=b}
function uR(a,b){a.b=b}
function mQ(a,b){a.b=b}
function MQ(a,b){a.b=b}
function MF(a,b){a.d=b}
function PM(a,b){a.r=b}
function vN(a,b){a.o=b}
function vY(a,b){a.e=b}
function CQ(a,b){a.e=b}
function BQ(a,b){a.c=b}
function QQ(a,b){a.k=b}
function qW(a,b){a.G=b}
function rW(a,b){a.H=b}
function wY(a,b){a.f=b}
function w_(a,b){a.P=b}
function d_(a,b){a.A=b}
function f_(a,b){a.B=b}
function q_(a,b){a.M=b}
function u_(a,b){a.N=b}
function x_(a,b){a.S=b}
function B_(a,b){a.X=b}
function C_(a,b){a.$=b}
function D_(a,b){a._=b}
function S$(a,b){a.g=b}
function T$(a,b){a.i=b}
function U$(a,b){a.j=b}
function Y$(a,b){a.q=b}
function Z$(a,b){a.r=b}
function O9(a,b){a.a=b}
function P9(a,b){a.b=b}
function Q9(a,b){a.c=b}
function R9(a,b){a.e=b}
function S9(a,b){a.f=b}
function T9(a,b){a.g=b}
function U9(a,b){a.i=b}
function W9(a,b){a.j=b}
function X9(a,b){a.k=b}
function Y9(a,b){a.n=b}
function Z9(a,b){a.o=b}
function $9(a,b){a.p=b}
function _9(a,b){a.q=b}
function Jrb(a,b){a.a=b}
function oe(a,b){a.Wc=b}
function vh(b,a){b.id=a}
function bb(a){this.a=a}
function ib(a){this.a=a}
function Eb(a){this.a=a}
function Kb(a){this.a=a}
function Ag(a){this.a=a}
function Cg(a){this.a=a}
function Wo(a){this.a=a}
function Ip(a){this.a=a}
function AE(a){this.a=a}
function GE(a){this.a=a}
function sI(a){this.a=a}
function vI(a){this.a=a}
function mJ(a){this.a=a}
function oJ(a){this.a=a}
function ZJ(a){this.a=a}
function _J(a){this.a=a}
function _O(a){this.a=a}
function cO(a){this.a=a}
function TO(a){this.a=a}
function VO(a){this.a=a}
function ZO(a){this.a=a}
function ZL(a){this.a=a}
function qL(a){this.c=a}
function WN(a){this.a=a}
function bP(a){this.a=a}
function dP(a){this.a=a}
function fP(a){this.a=a}
function jP(a){this.a=a}
function lP(a){this.a=a}
function zP(a){this.a=a}
function XQ(a){this.a=a}
function ZQ(a){this.a=a}
function aS(a){this.a=a}
function cS(a){this.a=a}
function eS(a){this.a=a}
function ES(a){this.a=a}
function ET(a){this.a=a}
function AT(a){this.a=a}
function CT(a){this.a=a}
function HX(a){this.a=a}
function TX(a){this.a=a}
function ZX(a){this.a=a}
function _X(a){this.a=a}
function hY(a){this.a=a}
function jY(a){this.a=a}
function oY(a){this.a=a}
function qY(a){this.a=a}
function cZ(a){this.a=a}
function iZ(a){this.a=a}
function pZ(a){this.a=a}
function $_(a){this.a=a}
function u1(a){this.a=a}
function h2(a){this.a=a}
function j2(a){this.a=a}
function $3(a){this.a=a}
function d4(a){this.a=a}
function e4(a){this.a=a}
function i4(a){this.a=a}
function R4(a){this.a=a}
function X4(a){this.a=a}
function Z4(a){this.a=a}
function _4(a){this.a=a}
function N5(a){this.a=a}
function D6(a){this.a=a}
function d9(a){this.a=a}
function h9(a){this.a=a}
function c0(a){this.b=a}
function Z0(){this.a={}}
function xo(){this.a={}}
function pW(a,b){a.lb=b}
function AW(a,b){a.mb=b}
function BW(a,b){a.dc=b}
function CW(a,b){a.ec=b}
function aab(a,b){a.r=b}
function bab(a,b){a.s=b}
function cab(a,b){a.t=b}
function eab(a,b){a.u=b}
function fab(a,b){a.v=b}
function gab(a,b){a.w=b}
function hab(a,b){a.A=b}
function iab(a,b){a.d=b}
function jab(a,b){a.B=b}
function kab(a,b){a.C=b}
function lab(a,b){a.D=b}
function mab(a,b){a.F=b}
function nab(a,b){a.G=b}
function oab(a,b){a.H=b}
function pab(a,b){a.I=b}
function qab(a,b){a.J=b}
function rab(a,b){a.K=b}
function sab(a,b){a.L=b}
function tab(a,b){a.M=b}
function uab(a,b){a.N=b}
function vab(a,b){a.O=b}
function wab(a,b){a.P=b}
function xab(a,b){a.Q=b}
function yab(a,b){a.R=b}
function zab(a,b){a.S=b}
function Aab(a,b){a.T=b}
function Bab(a,b){a.U=b}
function Cab(a,b){a.V=b}
function Sab(a,b){a.a=b}
function Tab(a,b){a.b=b}
function Uab(a,b){a.c=b}
function Vab(a,b){a.d=b}
function Wab(a,b){a.e=b}
function Xab(a,b){a.f=b}
function Yab(a,b){a.g=b}
function Zab(a,b){a.i=b}
function $ab(a,b){a.j=b}
function _ab(a,b){a.k=b}
function pqb(a,b){a.b=b}
function pkb(a){this.c=a}
function Bdb(a){this.a=a}
function $ib(a){this.a=a}
function Kib(a){this.d=a}
function ejb(a){this.a=a}
function jjb(a){this.a=a}
function ojb(a){this.a=a}
function Nrb(a){this.a=a}
function Nab(a){this.a=a}
function Pab(a){this.a=a}
function xcb(a){this.a=a}
function qdb(a){this.a=a}
function Ndb(a){this.a=a}
function hib(a){this.a=a}
function slb(a){this.b=a}
function Ilb(a){this.b=a}
function Imb(a){this.a=a}
function Mmb(a){this.a=a}
function fmb(a){this.c=a}
function Kob(a){this.a=a}
function Mob(a){this.a=a}
function Oob(a){this.a=a}
function Qob(a){this.a=a}
function frb(a){this.a=a}
function krb(a){this.a=a}
function xrb(a){this.a=a}
function Crb(a){this.a=a}
function of(){this.a=Wf()}
function xn(){this.c=++un}
function mnb(){Vhb(this)}
function Tjb(){Ijb(this)}
function lcb(){kcb(this)}
function lK(){lK=kE;pK()}
function vL(){vL=kE;uL()}
function qf(a){pf=a;gg()}
function FO(a,b){af(a.j,b)}
function DO(a,b){NK(a.j,b)}
function zQ(a,b){xh(a.a,b)}
function NQ(a,b){AQ(a.g,b)}
function oH(a,b){Pe(b,a)}
function jS(a,b){Vg(b,a.k)}
function yS(a,b){Vg(b,a.B)}
function yZ(a,b){JT(a.W,b)}
function CZ(a,b){ST(a.W,b)}
function e$(a,b){DO(a.u,b)}
function C$(a,b){D9(a.X,b)}
function h$(a,b){C9(a.X,b)}
function u$(a,b){G9(a.X,b)}
function O$(a,b){V9(a.X,b)}
function H$(a,b){SV(a.W,b)}
function I$(a,b){RV(a.W,b)}
function P$(a,b){pW(a.W,b)}
function Q$(a,b){qW(a.W,b)}
function R$(a,b){rW(a.W,b)}
function $$(a,b){sW(a.W,b)}
function _$(a,b){tW(a.W,b)}
function e_(a,b){vW(a.W,b)}
function g_(a,b){oW(a.W,b)}
function j_(a,b){xW(a.W,b)}
function k_(a,b){yW(a.W,b)}
function r_(a,b){AW(a.W,b)}
function s_(a,b){BW(a.W,b)}
function t_(a,b){CW(a.W,b)}
function y_(a,b){uW(a.W,b)}
function E_(a,b){GW(a.W,b)}
function p_(a,b){GO(a.u,b)}
function i_(a,b){rT(a.V,b)}
function G_(a,b){sT(a.V,b)}
function I_(a,b){YW(a.W,b)}
function J_(a,b){ZW(a.W,b)}
function P_(a,b){zX(a.W,b)}
function Q_(a,b){AX(a.W,b)}
function Vqb(a,b){a.add(b)}
function oj(b,a){b.src=a}
function pj(b,a){b.value=a}
function Mm(b,a){b.value=a}
function Uf(b,a){b.length=a}
function IM(a){a.s=new Tjb}
function hR(a){a.a=0;a.b=0}
function AO(a){NK(a.j,a.c)}
function o2(a){p2(a);q2(a)}
function FW(a,b){NR(a.xc,b)}
function ZZ(a,b){Dab(a.X,b)}
function wo(a,b,c){a.a[b]=c}
function wI(){wI=kE;new mnb}
function m1(){m1=kE;new n1}
function mF(){mF=kE;kF=AD()}
function Fh(){Fh=kE;Eh=zD()}
function iG(){iG=kE;eG=BD()}
function wJ(){wJ=kE;vJ=DD()}
function SL(){SL=kE;RL=XL()}
function Rab(){Rab=kE;fbb()}
function nfb(a){gfb(this,a)}
function Acb(){Jf.call(this)}
function xdb(){Jf.call(this)}
function Xdb(){Jf.call(this)}
function Teb(){Jf.call(this)}
function Gob(){Jf.call(this)}
function GQ(){FQ.call(this)}
function m0(){FQ.call(this)}
function __(){rb.call(this)}
function anb(){Jf.call(this)}
function H3(a,b){a.a[lxb]=b}
function VN(a,b){C$(a.a.a,b)}
function se(a,b){Ce(a.ld(),b)}
function qe(a,b){uh(a.ld(),b)}
function iL(a,b){kL(a,b,a.c)}
function dc(a){cc(this,a.id)}
function wg(a){return a.Id()}
function Y0(a,b){return null}
function Ah(b,a){b.tabIndex=a}
function Nh(a,b,c){a.add(b,c)}
function HI(a,b){NI(a,b,b,-1)}
function yW(a,b){a.ub=b;XW(a)}
function Gg(a){Fg();Eg.Kd(a)}
function ng(){ng=kE;mg=new t1}
function Of(){Of=kE;Nf=new K}
function yE(){yE=kE;xE=new EE}
function rG(){rG=kE;qG=new xn}
function X0(){X0=kE;W0=new xn}
function Q1(){Q1=kE;P1=new xn}
function PE(){this.a=new Jeb}
function jcb(){this.a=new Tjb}
function rnb(){this.a=new mnb}
function nqb(){this.a=new mnb}
function Tf(b,a){b[b.length]=a}
function Vf(b,a){b[b.length]=a}
function nf(b,a){b.fillStyle=a}
function zh(b,a){b.scrollTop=a}
function Lb(a){Kb.call(this,a)}
function xc(a){Kb.call(this,a)}
function Kf(a){If.call(this,a)}
function Lp(a){Jp.call(this,a)}
function DH(a){Lp.call(this,a)}
function IE(a){HE.call(this,a)}
function zj(a){(Fh(),Eh).Ud(a)}
function $h(a){Fh();return a|0}
function vo(a,b){return a.a[b]}
function tO(a){return a.g&&a.f}
function UY(a,b){CZ(TP(a.a),b)}
function ZY(a,b){I_(TP(a.a),b)}
function $Y(a,b){J_(TP(a.a),b)}
function aZ(a,b){P_(TP(a.a),b)}
function bZ(a,b){Q_(TP(a.a),b)}
function JZ(a,b,c){mU(a.W,b,c)}
function VZ(a,b,c){A9(a.X,b,c)}
function r$(a,b,c){B9(a.X,c,b)}
function M$(a,b,c){nW(a.W,b,c)}
function N_(a,b,c){qX(a.W,b,c)}
function h_(a,b){BV(a.W,b,a.B)}
function R_(a){zV(a.W);wT(a.V)}
function HJ(a,b){aI(a,b);CJ(a)}
function X$(a,b){a.p=b;pR(a.R)}
function RK(){RK=kE;_e();ZK()}
function eE(){cE==null&&(cE=[])}
function Gb(){Eb.call(this,htb)}
function Hb(){Eb.call(this,itb)}
function Pb(){Eb.call(this,jtb)}
function Rb(){Eb.call(this,ktb)}
function Tb(){Eb.call(this,ltb)}
function Ub(){Eb.call(this,mtb)}
function Vb(){Eb.call(this,ntb)}
function fc(){Eb.call(this,otb)}
function rc(){Eb.call(this,ptb)}
function sc(){Eb.call(this,qtb)}
function tc(){Eb.call(this,rtb)}
function vc(){Eb.call(this,stb)}
function wc(){Eb.call(this,ttb)}
function zc(){Eb.call(this,utb)}
function Ec(){Eb.call(this,vtb)}
function Xd(){Eb.call(this,wtb)}
function v3(a){If.call(this,a)}
function Bcb(a){Kf.call(this,a)}
function wdb(a){Kf.call(this,a)}
function ydb(a){Kf.call(this,a)}
function Zdb(a){Kf.call(this,a)}
function Ydb(a){Mf.call(this,a)}
function Ueb(a){Kf.call(this,a)}
function ne(a,b){oe(a,(mF(),b))}
function KH(a,b){LH((mF(),a),b)}
function D$(a,b,c){Fab(a.X,b,c)}
function A0(a,b,c){Shb(a.c,b,c)}
function b_(a,b){a.v=new Vjb(b)}
function c_(a,b){a.w=new Vjb(b)}
function GG(a,b){a.__listener=b}
function hV(a,b){return b<=a.ob}
function he(a){return mF(),a.Wc}
function je(a){return mF(),a.Wc}
function FI(a){return mF(),a.Wc}
function LI(a){return mF(),a.Wc}
function Vp(a,b){return Zcb(a,b)}
function kcb(a){a.a=(Xbb(),Vbb)}
function vcb(a){Kf.call(this,a)}
function zcb(a){Kf.call(this,a)}
function Ccb(a){Bcb.call(this,a)}
function Meb(a){Bcb.call(this,a)}
function Dkb(a){_rb(a);this.a=a}
function Dh(a){a=web(a);return a}
function Wrb(a,b){return _p(a,b)}
function Orb(a,b){trb(a.b,a.a,b)}
function ipb(a,b,c){b.Jf(a.a[c])}
function Erb(a,b,c){b.Jf(Qeb(c))}
function Onb(){Onb=kE;Nnb=Qnb()}
function ag(){ag=kE;!!(Fg(),Eg)}
function df(a){oe(this,(mF(),a))}
function jf(a){oe(this,(mF(),a))}
function cI(a){oe(this,(mF(),a))}
function yF(a,b){mF();kF.Fe(a,b)}
function zF(a,b){mF();kF.Ge(a,b)}
function IF(a,b){mF();kF.Ge(a,b)}
function OM(a,b){EJ(a,b);MM(a,1)}
function RM(a,b){IJ(a,b);MM(a,1)}
function rM(a,b){a.j=b;Vg(a.d,b)}
function EW(a,b,c){a.rc=c;a.qc=b}
function q3(a,b,c){Q3(a).Bf(b,c)}
function kI(a,b){VH(a.a,b,false)}
function ZN(a){!a.b&&(a.b=DF(a))}
function c9(a){oe(this,(mF(),a))}
function T1(a){R1(this);this.a=a}
function _db(a){wdb.call(this,a)}
function Ceb(){xcb.call(this,'')}
function Jeb(){xcb.call(this,'')}
function Keb(){xcb.call(this,'')}
function ymb(a){slb.call(this,a)}
function Cmb(a){ymb.call(this,a)}
function Tmb(a){Mlb.call(this,a)}
function BG(){up.call(this,null)}
function jN(){wJ();dN.call(this)}
function o0(){o0=kE;n0=t0();u0()}
function Zkb(){throw FD(new Gob)}
function Hlb(){throw FD(new Teb)}
function emb(){throw FD(new Teb)}
function Ykb(){Ykb=kE;Xkb=new $kb}
function Pcb(a){Ocb(a);return a.k}
function Qcb(a){Ocb(a);return a.i}
function tcb(a){return Object(a)}
function KZ(a){return a.T[a.a-1]}
function ND(a,b){return ID(a,b)>0}
function PD(a,b){return ID(a,b)<0}
function re(a,b,c){Ae(a.ld(),b,c)}
function Vrb(a,b,c){a.splice(b,c)}
function Job(a,b){while(a.gg(b));}
function Cb(a,b){th(b,'role',a.a)}
function Ij(a){(Fh(),a).opacity=0}
function Go(){this.a=qub in $wnd}
function xm(){tm.call(this,$tb,1)}
function rl(){ol.call(this,$tb,1)}
function bk(){Yj.call(this,$tb,3)}
function Zd(){Eb.call(this,'tab')}
function Qd(){Eb.call(this,'row')}
function jc(){Eb.call(this,'log')}
function ec(){Eb.call(this,'img')}
function hJ(){iJ.call(this,false)}
function $F(){this.a=new up(null)}
function tH(){this.o=new nL(this)}
function w1(){w1=kE;mF();Oi($doc)}
function xF(a){mF();lF=a;kF.Ee(a)}
function GF(a){mF();lF=a;kF.Ee(a)}
function Bq(a){return a.l|a.m<<22}
function tp(a,b){return Fp(a.a,b)}
function xU(a,b){return NZ(a.a,b)}
function EY(a,b){return z0(a.C,b)}
function LD(a,b){return ID(a,b)==0}
function QD(a,b){return ID(a,b)<=0}
function NE(b,a){return b.test(a)}
function T5(a,b){b<0&&(b=0);a.a=b}
function U5(a,b){b<0&&(b=0);a.d=b}
function Kj(a,b){this.b=a;this.c=b}
function Ab(a,b){this.b=a;this.a=b}
function Beb(a,b){a.a+=b;return a}
function Eeb(a,b){a.a+=b;return a}
function Sob(a,b){while(a.jg(b));}
function Vmb(){Vmb=kE;Umb=new Xmb}
function lg(){Xf!=0&&(Xf=0);_f=-1}
function Zb(){Eb.call(this,'form')}
function $b(){Eb.call(this,'grid')}
function kc(){Eb.call(this,'main')}
function mc(){Eb.call(this,'math')}
function nc(){Eb.call(this,'menu')}
function gc(){Eb.call(this,'list')}
function uc(){Eb.call(this,'note')}
function ee(){Eb.call(this,'tree')}
function te(a,b){De((mF(),a.Wc),b)}
function ve(a,b){yF((mF(),a.Wc),b)}
function cf(a,b){Ah((mF(),a.Wc),b)}
function eh(a,b){(Fh(),Eh).Od(a,b)}
function xh(a,b){(Fh(),Eh).ce(a,b)}
function yh(a,b){(Fh(),Eh).de(a,b)}
function Yj(a,b){Kj.call(this,a,b)}
function xk(a,b){Kj.call(this,a,b)}
function ol(a,b){Kj.call(this,a,b)}
function zl(a,b){Kj.call(this,a,b)}
function Kl(a,b){Kj.call(this,a,b)}
function Tl(a,b){Kj.call(this,a,b)}
function fm(a,b){Kj.call(this,a,b)}
function hm(){fm.call(this,'PX',0)}
function km(){fm.call(this,'EX',3)}
function jm(){fm.call(this,'EM',2)}
function om(){fm.call(this,'CM',7)}
function pm(){fm.call(this,'MM',8)}
function lm(){fm.call(this,'PT',4)}
function mm(){fm.call(this,'PC',5)}
function nm(){fm.call(this,'IN',6)}
function tm(a,b){Kj.call(this,a,b)}
function Fm(a,b){Kj.call(this,a,b)}
function Tp(a,b){Kj.call(this,a,b)}
function DI(a,b){this.a=a;this.b=b}
function $K(a,b){Kj.call(this,a,b)}
function QI(a,b){Dj((mF(),a.Wc),b)}
function Fp(a,b){return Mhb(a.d,b)}
function Wg(a){return Ih((Fh(),a))}
function lh(a){return Hh((Fh(),a))}
function EF(a){return DG((mF(),a))}
function rg(a){return !!a.b||!!a.g}
function cM(a){Gp(a.a,a.d,a.c,a.b)}
function nN(a){KM(a,false);ah(a.i)}
function NN(a,b){LN.call(this,a,b)}
function _Q(a,b){LN.call(this,a,b)}
function xQ(a,b){this.b=a;this.a=b}
function BN(a,b){this.a=a;this.b=b}
function aO(a,b){this.a=a;this.b=b}
function nP(a,b){this.a=a;this.b=b}
function NX(a,b){this.a=a;this.b=b}
function PX(a,b){this.a=a;this.b=b}
function RX(a,b){this.a=a;this.b=b}
function VX(a,b){this.a=a;this.b=b}
function XX(a,b){this.a=a;this.b=b}
function sY(a,b){this.a=a;this.b=b}
function eZ(a,b){this.a=a;this.b=b}
function lZ(a,b){this.a=a;this.b=b}
function f0(a,b){this.a=a;this.b=b}
function s2(a,b){this.a=a;this.b=b}
function g4(a,b){this.a=a;this.b=b}
function P5(a,b){this.a=a;this.b=b}
function R5(a,b){this.a=a;this.b=b}
function f9(a,b){this.a=a;this.b=b}
function f5(a,b){this.b=a;this.a=b}
function r3(a,b){this.b=a;this.a=b}
function yjb(a,b){this.a=a;this.b=b}
function vR(a,b){this.c=b;this.d=a}
function Hrb(a,b){this.a=a;this.b=b}
function Prb(a,b){this.b=a;this.a=b}
function zdb(a,b){Lf.call(this,a,b)}
function Sqb(a,b){Kj.call(this,a,b)}
function Fb(){Eb.call(this,'alert')}
function ac(){Eb.call(this,'group')}
function Dc(){Eb.call(this,'radio')}
function be(){Eb.call(this,'timer')}
function uh(b,a){b.className=a||''}
function wh(b,a){b.innerHTML=a||''}
function Dj(b,a){b.selectedIndex=a}
function Trb(a,b,c){a.splice(b,0,c)}
function VY(a,b,c){JZ(TP(a.a),b,c)}
function GW(a,b){a.Rc=b;MR(a.xc,b)}
function Je(a,b){!!a.Uc&&sp(a.Uc,b)}
function z0(a,b){return Phb(a.c,b)}
function Whb(a){return a.a.c+a.b.c}
function yj(a){return (Fh(),a).type}
function Ej(a){return (Fh(),a)[Wtb]}
function Fj(a){return (Fh(),a)[ztb]}
function Gj(a){return (Fh(),a)[Xtb]}
function Hj(a){return (Fh(),a)[Ytb]}
function WF(a){VF();return ZF(TF,a)}
function OK(a){_e();df.call(this,a)}
function im(){fm.call(this,'PCT',1)}
function Jm(){Fm.call(this,'PRE',2)}
function tb(a){$wnd.clearTimeout(a)}
function kg(a){$wnd.clearTimeout(a)}
function sZ(a){T4(a.e);dJ(a.e,null)}
function q$(a,b){lV(a.W)||jX(a.W,b)}
function K_(a,b,c,d){Hab(a.X,b,c,d)}
function Kab(a,b,c){a[b.a]=tcb(c.a)}
function Jab(a,b,c){a[b.a]=tcb(c.a)}
function T3(a,b,c,d){a[b][c].type=d}
function mG(){if(!cG){iH();cG=true}}
function nG(){if(!hG){jH();hG=true}}
function ZT(a){cU(a);$T(a);a.v=true}
function pE(){AF();yE();zE();new x0}
function j4(){Q1();T1.call(this,{})}
function gbb(a,b){Kj.call(this,a,b)}
function Cbb(a,b){Kj.call(this,a,b)}
function Lbb(a,b){Kj.call(this,a,b)}
function Tbb(a,b){Kj.call(this,a,b)}
function Ybb(a,b){Kj.call(this,a,b)}
function pnb(a,b){return Mhb(a.a,b)}
function Unb(a,b){return a.a.get(b)}
function seb(a,b){return a.substr(b)}
function J(a,b){return Uq(a)===Uq(b)}
function Pq(a){return typeof a===vsb}
function Qq(a){return typeof a===wsb}
function Tq(a){return typeof a===xsb}
function OD(a){return typeof a===wsb}
function p3(a){return a.b.a+'.'+a.a}
function Uq(a){return a==null?null:a}
function sb(a){$wnd.clearInterval(a)}
function cpb(a,b){Uob.call(this,a,b)}
function Ob(){Eb.call(this,'banner')}
function Wd(){Eb.call(this,'slider')}
function Ud(){Eb.call(this,'search')}
function Yd(){Eb.call(this,'status')}
function Wb(){Eb.call(this,'dialog')}
function Fc(){Eb.call(this,'region')}
function $j(){Yj.call(this,'NONE',0)}
function zk(){xk.call(this,'NONE',0)}
function Vl(){Tl.call(this,'CLIP',0)}
function tl(){ol.call(this,'AUTO',3)}
function Ol(){Kl.call(this,'LEFT',2)}
function up(a){vp.call(this,a,false)}
function sJ(a,b){tJ.call(this,a.a,b)}
function fK(a){V.call(this);this.a=a}
function cL(){$K.call(this,'LEFT',2)}
function qX(a,b,c){hT(Phb(a.Ac,b),c)}
function Jb(a,b,c){th(b,a.a,Ib(a,c))}
function uZ(a,b,c,d){a.a=b;tZ(a,c,d)}
function wH(a,b){rH(a,b,(mF(),a.Wc))}
function XH(a,b){rH(a,b,(mF(),a.Wc))}
function af(a,b){(mF(),a.Wc)[Gtb]=!b}
function HF(a,b){mF();a.__listener=b}
function Heb(a,b){a.a+=''+b;return a}
function Feb(a,b){a.a+=''+b;return a}
function Geb(a,b){a.a+=''+b;return a}
function ieb(a,b){return a.indexOf(b)}
function zhb(a){return !a?null:a.bg()}
function Iob(a){return a!=null?Q(a):0}
function Xg(a){return !!Ih((Fh(),a))}
function Fcb(a){Dcb();return _rb(a),a}
function Snb(){Onb();return new Nnb}
function srb(a,b,c){Vqb(b,c);return b}
function Yob(a,b){Uob.call(this,a,b)}
function _ob(a,b){Uob.call(this,a,b)}
function Nb(){Eb.call(this,'article')}
function lc(){Eb.call(this,'marquee')}
function pc(){Eb.call(this,'menubar')}
function ce(){Eb.call(this,'toolbar')}
function de(){Eb.call(this,'tooltip')}
function $d(){Eb.call(this,'tablist')}
function bc(){Eb.call(this,'heading')}
function hc(){Eb.call(this,'listbox')}
function ae(){Eb.call(this,'textbox')}
function _e(){_e=kE;$e=(yL(),yL(),xL)}
function bH(){bH=kE;MG();JG[Gub]=QG}
function T0(a){this.a=U0(a);this.b=a}
function W5(a){this.a=a;V.call(this)}
function yb(a){this.a=a;rb.call(this)}
function RG(a){(Fh(),Eh).Ud(a);SG(a)}
function gh(a){return (Fh(),Eh).Vd(a)}
function ih(a){return (Fh(),Eh).Wd(a)}
function mh(a){return (Fh(),Eh).$d(a)}
function ph(a){return (Fh(),Eh)._d(a)}
function qh(a){return (Fh(),Eh).ee(a)}
function qj(a){return (Fh(),Eh).Pd(a)}
function ej(a){return (Fh(),Eh).Xd(a)}
function fj(a){return (Fh(),Eh).Yd(a)}
function sj(a){return (Fh(),Eh).Qd(a)}
function tj(a){return (Fh(),Eh).Rd(a)}
function uj(a){return (Fh(),Eh).Td(a)}
function kj(a){return Jh((Fh(),Eh),a)}
function lj(a){return Kh((Fh(),Eh),a)}
function Pm(a){return (Fh(),a).target}
function cq(a){return dq(a.l,a.m,a.h)}
function JK(a){return _L((mF(),a.Wc))}
function KK(a){return aM((mF(),a.Wc))}
function pF(a){mF();return kF.ze(a,0)}
function zL(a){return (Fh(),Eh).ae(a)}
function dL(){$K.call(this,'RIGHT',3)}
function Pl(){Kl.call(this,'RIGHT',3)}
function El(){zl.call(this,'FIXED',3)}
function ck(){Yj.call(this,'SOLID',4)}
function Rk(){xk.call(this,'FLEX',17)}
function Vk(){xk.call(this,'BLOCK',1)}
function fl(){xk.call(this,'TABLE',7)}
function iI(){iI=kE;hI=(yL(),yL(),wL)}
function jK(a){this.a=a;rb.call(this)}
function XO(a){this.a=a;rb.call(this)}
function hP(a){this.a=a;rb.call(this)}
function $R(a){this.a=a;rb.call(this)}
function bY(a){this.a=a;rb.call(this)}
function fY(a){this.a=a;rb.call(this)}
function h0(a){this.a=a;rb.call(this)}
function a4(a){this.a=a;rb.call(this)}
function g5(a){this.a=a;rb.call(this)}
function n5(a){this.a=a;rb.call(this)}
function I5(a){this.a=a;rb.call(this)}
function Fnb(a){this.a=Snb();this.b=a}
function Xnb(a){this.a=Snb();this.b=a}
function nM(a,b){a.o=b;vM(a);a.g=true}
function LQ(a,b){Rjb(a.f,b);fL(a.i,b)}
function i$(a,b,c){!!a.S&&gZ(a.S,b,c)}
function v$(a,b,c){!!a.S&&hZ(a.S,b,c)}
function OZ(a,b,c){return Y_(a.J,b,c)}
function PZ(a,b,c){return Z_(a.J,b,c)}
function kV(a){return _U(a,a.qc,a.rc)}
function m$(a){BZ(a,a.b,true);oU(a.W)}
function rf(a){a.i=Xp(sB,tsb,74,0,0,1)}
function Ijb(a){a.a=Xp(qB,tsb,1,0,5,1)}
function Qb(){Eb.call(this,'checkbox')}
function Sb(){Eb.call(this,'combobox')}
function Yb(){Eb.call(this,'document')}
function _b(){Eb.call(this,'gridcell')}
function _d(){Eb.call(this,'tabpanel')}
function ge(){Eb.call(this,'treeitem')}
function fe(){Eb.call(this,'treegrid')}
function Rd(){Eb.call(this,'rowgroup')}
function ic(){Eb.call(this,'listitem')}
function qc(){Eb.call(this,'menuitem')}
function _j(){Yj.call(this,'DOTTED',1)}
function ak(){Yj.call(this,'DASHED',2)}
function Xk(){xk.call(this,'INLINE',2)}
function dl(){xk.call(this,'RUN_IN',6)}
function Bl(){zl.call(this,'STATIC',0)}
function Ml(){Kl.call(this,'CENTER',0)}
function sl(){ol.call(this,'SCROLL',2)}
function Hm(){Fm.call(this,'NORMAL',0)}
function Im(){Fm.call(this,'NOWRAP',1)}
function aL(){$K.call(this,'CENTER',0)}
function xj(a){return (Fh(),a).touches}
function Cj(a){return (Fh(),a).options}
function hO(a){s1((ng(),mg),new lP(a))}
function kO(a){s1((ng(),mg),new dP(a))}
function QO(a){s1((ng(),mg),new ZO(a))}
function mT(a){s1((ng(),mg),new ET(a))}
function oU(a){s1((ng(),mg),new TX(a))}
function F$(a){IV(a.W);KV(a.W);LV(a.W)}
function JV(a){XT(a);bX(a);eX(a);nU(a)}
function gN(a,b){wJ();Pd();Db(fN(a),b)}
function _1(a,b){a.d=1;r2(new s2(a,b))}
function vg(a,b){a.d=xg(a.d,[b,false])}
function pP(a,b,c){xM.call(this,a,b,c)}
function bgb(a){Ffb();cgb.call(this,a)}
function Hp(a){this.d=new mnb;this.c=a}
function w0(){w0=kE;new kob;v0=new Tjb}
function FD(a){return a.backingJsObject}
function mkb(a){return a.a<a.c.a.length}
function erb(a,b){return a[a.length]=b}
function jrb(a,b){return a[a.length]=b}
function Cdb(a,b){return a<b?-1:a>b?1:0}
function Mrb(a,b,c){return srb(a.a,b,c)}
function trb(a,b,c){Jrb(a,Mrb(b,a.a,c))}
function _Y(a,b,c,d){L_(TP(a.a),b,c,d)}
function th(c,a,b){c.setAttribute(a,b)}
function Gqb(a,b){if(tqb){return}a.b=b}
function JH(a,b){(mF(),a)['align']=b.a}
function EG(a){if(!CG){a.Be();CG=true}}
function gnb(a){return a<10?'0'+a:''+a}
function dq(a,b,c){return {l:a,m:b,h:c}}
function qF(a){mF();return Hh((Fh(),a))}
function rF(a){mF();return Ih((Fh(),a))}
function sm(){sm=kE;rm=new vm;qm=new xm}
function Sl(){Sl=kE;Ql=new Vl;Rl=new Wl}
function CH(){CH=kE;AH=new FH;BH=new HH}
function Xb(){Eb.call(this,'directory')}
function Vd(){Eb.call(this,'separator')}
function Sd(){Eb.call(this,'rowheader')}
function Td(){Eb.call(this,'scrollbar')}
function ql(){ol.call(this,'VISIBLE',0)}
function vm(){tm.call(this,'VISIBLE',0)}
function Nl(){Kl.call(this,'JUSTIFY',1)}
function bL(){$K.call(this,'JUSTIFY',1)}
function y3(a,b){x3.call(this,null,a,b)}
function Oq(a,b){return a!=null&&Mq(a,b)}
function RZ(a,b){return pnb(a.H,Kdb(b))}
function UZ(a,b){return pnb(a.I,Kdb(b))}
function MU(a){return mvb+a.qc+nvb+a.rc}
function Qeb(a){return a.backingJsObject}
function Vg(b,a){return b.appendChild(a)}
function _g(b,a){return b.removeChild(a)}
function nh(b,a){return parseInt(b[a])|0}
function vj(a){return (Fh(),a).keyCode|0}
function Bj(a){(Fh(),a).options.length=0}
function uM(a){kM(a);mM(a);lM(a);a.bf()}
function kM(a){if(a.a){ah(a.a);a.a=null}}
function lM(a){if(a.e){ah(a.e);a.e=null}}
function mM(a){if(a.j){ah(a.j);a.j=null}}
function lO(a){NK(a.j,'');HO(a,'');nO(a)}
function zO(a){NK(a.a,a.b);bf(a.a,false)}
function HO(a,b){a.b=b;NK(a.a,b);NO(a,b)}
function LO(a){a.v=false;a.u=false;KO(a)}
function qS(a){ah(a.B);IF(a.B,-15736909)}
function nT(a){return oT(a,a.u.length-1)}
function ME(c,a,b){return a.replace(c,b)}
function oZ(a,b){return Qhb(FP(a.a).c,b)}
function zZ(a){return (!a.U||!a.F)&&!a.$}
function AZ(a){return (!a.U||!a.G)&&!a.$}
function Ebb(a){return !!a&&!a.isEmpty()}
function lfb(a){cfb();mfb.call(this,a,0)}
function Km(){Fm.call(this,'PRE_LINE',3)}
function Lm(){Fm.call(this,'PRE_WRAP',4)}
function Cl(){zl.call(this,'RELATIVE',1)}
function Dl(){zl.call(this,'ABSOLUTE',2)}
function Wl(){Tl.call(this,'ELLIPSIS',1)}
function Pk(){xk.call(this,'INITIAL',16)}
function Jf(){rf(this);tf(this);this.Gd()}
function Uqb(a,b){this.a=a;Nkb();this.b=b}
function DW(a,b,c){yh(a.yc,b);zh(a.yc,c)}
function sF(a,b,c){mF();kF.Ce(a,wF(b),c)}
function jeb(a,b,c){return a.indexOf(b,c)}
function leb(a,b){return a.lastIndexOf(b)}
function keb(a){return geb(xsb,typeof(a))}
function odb(a){return geb(wsb,typeof(a))}
function hsb(a){return a.$H||(a.$H=++gsb)}
function ie(a){return nh((mF(),a.Wc),xtb)}
function wj(a){return !!(Fh(),a).shiftKey}
function Zg(a,b){return (Fh(),Eh).be(a,b)}
function M3(a,b,c){a.f[(new A3(b)).a]=c}
function pe(a,b){(mF(),a.Wc).style[ztb]=b}
function ue(a,b){(mF(),a.Wc).style[Atb]=b}
function Aj(a){(Fh(),a).stopPropagation()}
function Iqb(a){if(tqb){return}a.e=false}
function Icb(a){Dcb();return a?true:false}
function OI(a){(mF(),a.Wc).multiple=false}
function mq(a){return a.l+a.m*Bsb+a.h*Asb}
function yJ(a){return nh((mF(),a.Wc),Zub)}
function zJ(a){return nh((mF(),a.Wc),xtb)}
function dsb(a){if(!a){throw FD(new xdb)}}
function Zrb(a){if(!a){throw FD(new Gob)}}
function ao(){ao=kE;_n=new yn(Vtb,new bo)}
function po(){po=kE;oo=new yn(oub,new qo)}
function Po(){Po=kE;Oo=new yn(rub,new Qo)}
function on(){on=kE;nn=new yn(nub,new pn)}
function lsb(){lsb=kE;isb=new K;ksb=new K}
function nQ(){lQ.call(this);this.a=new wQ}
function bl(){xk.call(this,'LIST_ITEM',5)}
function Leb(a){xcb.call(this,(_rb(a),a))}
function Mlb(a){slb.call(this,a);this.a=a}
function $lb(a){Ilb.call(this,a);this.a=a}
function FK(a){this.c=a;this.a=!!this.c.O}
function TK(){RK();UK.call(this,bj($doc))}
function Jg(a){Fg();return parseInt(a)||-1}
function QT(a,b){return !!a.r&&Qhb(a.r,b)}
function W$(a,b){Vhb(a.n);!!b&&shb(a.n,b)}
function qnb(a,b){return Thb(a.a,b)!=null}
function teb(a,b,c){return a.substr(b,c-b)}
function Jj(a){return a.b!=null?a.b:''+a.c}
function lN(a){(mF(),a.Wc).style[Ytb]='1'}
function pN(a){(mF(),a.Wc).style[Ytb]='0'}
function lS(a){(mF(),a.Wc).style[Ytb]='2'}
function BS(a){(mF(),a.Wc).style[Ytb]='2'}
function XN(a){if(a.b){cM(a.b.a);a.b=null}}
function IQ(a){if(a.c){LQ(a,a.c);a.c=null}}
function VV(a){x$(a.a,a.db,a.zb,a.bb,a.xb)}
function JQ(a,b){b?dh(a.j,Pvb):sh(a.j,Pvb)}
function z$(a,b,c){M9(a.X,c,b);pb(a.s,200)}
function A_(a,b){WS(a.W.Dc);!!b&&LT(a.W,b)}
function M_(a,b){s1((ng(),mg),new f0(a,b))}
function jO(a,b){s1((ng(),mg),new nP(a,b))}
function vp(a,b){this.a=new Hp(b);this.b=a}
function W(a){this.j=new bb(this);this.s=a}
function rrb(a,b){brb.call(this,a);this.a=b}
function $mb(a,b){b.$modCount=a.$modCount}
function fV(a,b,c){return b<=a.ob&&c<=a.Rc}
function Adb(a,b){return Oq(b,90)&&b.a==a.a}
function cj(b,a){return b.createTextNode(a)}
function ij(b,a){return b.getElementById(a)}
function mK(b,a){lK();b.__gwt_resolve=nK(a)}
function $I(a){if(cJ(a)){return}a.i&&eJ(a)}
function aJ(a){if(cJ(a)){return}!a.i&&eJ(a)}
function Ocb(a){if(a.k!=null){return}bdb(a)}
function OE(a){Heb(a.a,_E('Fill'));return a}
function G$(a){a.d?(a.d=false):MV(a.W,true)}
function wV(a,b){a.Gb=b;a.Hb=CX(b);e5(a.Ib)}
function zqb(a,b){if(tqb){return}Kjb(a.a,b)}
function drb(a,b){brb.call(this,a);this.a=b}
function irb(a,b){brb.call(this,a);this.a=b}
function Nk(){xk.call(this,'TABLE_ROW',15)}
function Jk(){xk.call(this,'TABLE_CELL',13)}
function bI(){cI.call(this,(mF(),Oi($doc)))}
function cnb(a){this.a=new $wnd.Date($D(a))}
function xb(a,b){return $wnd.setTimeout(a,b)}
function urb(a,b){return a.a.gg(new xrb(b))}
function zrb(a,b){return a.a.gg(new Crb(b))}
function a1(b,a){return b.hasOwnProperty(a)}
function bg(a,b,c){return a.apply(b,c);var d}
function Sq(a,b){return a&&b&&a instanceof b}
function v5(a){return !a.B&&(a.B=SP(a)),a.B}
function rO(a){return !a.v||a.v&&!a.u&&!a.f}
function CF(a){return mF(),DG((Fh(),a).type)}
function SI(a,b){return YI(a,b,a.b.a.length)}
function ug(a,b){a.b=xg(a.b,[b,false]);sg(a)}
function xf(a,b){a.backingJsObject=b;uf(a,b)}
function Gcb(a,b){Dcb();return a==b?0:a?1:-1}
function SM(a,b){(mF(),a.Wc).style[Ytb]=b+''}
function FP(a){!a.J&&(a.J=a.lf());return a.J}
function TP(a){!a.B&&(a.B=a.rf());return a.B}
function RR(a){a.k=0;a.n=0;ob(a.M);a.N=false}
function PR(a){if(!a.N){a.N=true;qb(a.M,50)}}
function M4(a,b){dh(b,oyb);a.b&&onb(a.a.p,b)}
function Lnb(a,b){var c;c=a[czb];c.call(a,b)}
function Mnb(a,b){var c;c=a[czb];c.call(a,b)}
function ndb(a,b){return _rb(a),Uq(a)===Uq(b)}
function geb(a,b){return _rb(a),Uq(a)===Uq(b)}
function AV(a){return geb(a,jvb)||geb(a,kvb)}
function XS(a){return String.fromCharCode(a)}
function wb(a,b){return $wnd.setInterval(a,b)}
function meb(a,b,c){return a.lastIndexOf(b,c)}
function ijb(a,b){return a.a.containsValue(b)}
function Gh(a,b){return a.getAttribute(b)||''}
function Yg(c,a,b){return c.insertBefore(a,b)}
function rj(a){return (Fh(),a).changedTouches}
function Nm(a){return $h((Fh(),a).clientX||0)}
function Om(a){return $h((Fh(),a).clientY||0)}
function DK(){uK.call(this,(tK(),$doc.body))}
function Tk(){xk.call(this,'INLINE_FLEX',18)}
function Zk(){xk.call(this,'INLINE_BLOCK',3)}
function _k(){xk.call(this,'INLINE_TABLE',4)}
function Lk(){xk.call(this,'TABLE_COLUMN',14)}
function hl(){xk.call(this,'TABLE_CAPTION',8)}
function VF(){VF=kE;new aG;TF=new $F;UF=XF()}
function x0(){w0();new mnb;new mnb;new mnb}
function Vn(){Vn=kE;Un=new yn('keyup',new Wn)}
function An(){An=kE;zn=new yn('focus',new Bn)}
function gn(){gn=kE;fn=new yn('click',new hn)}
function _m(){_m=kE;$m=new yn('blur',new an)}
function rp(a,b,c){return new Ip(yp(a.a,b,c))}
function ip(a){var b;if(fp){b=new gp;sp(a,b)}}
function cp(a){var b;if(_o){b=new ap;a.sd(b)}}
function YW(a,b){_W(a,a.db,a.zb,1,a.ob,a.d,b)}
function B3(a,b){this.a=a;this.b=C3(this.a,b)}
function lY(a,b,c){this.a=a;this.b=b;this.c=c}
function d0(a,b,c){this.a=a;this.b=b;this.c=c}
function j9(a,b,c){this.a=a;this.b=b;this.c=c}
function j0(a,b,c){this.a=a;this.c=b;this.b=c}
function YH(){tH.call(this);ne(this,Pi($doc))}
function T4(a){(yL(),yL(),wL).Xe((mF(),a.Wc))}
function K3(a,b,c,d){T3(a.c,(Ocb(b),b.k),c,d)}
function hS(a,b,c,d,e){a.i=b;a.f=c;a.g=d;a.e=e}
function vS(a,b,c,d,e){a.t=b;a.r=c;a.s=d;a.q=e}
function qbb(a,b){a.b=b;a.c=0;a.d=a.b+'.'+a.c}
function LH(a,b){a.style['verticalAlign']=b.a}
function Hqb(a,b){if(tqb){return}!!b&&(a.d=b)}
function Xrb(a,b){if(!a){throw FD(new wdb(b))}}
function NK(a,b){(mF(),a.Wc)[evb]=b!=null?b:''}
function AX(a,b){_W(a,1,a.Rc,a.bb,a.xb,a.Pc,b)}
function PQ(a,b){b!=null?RM(a.e,b):RM(a.e,'')}
function OQ(a,b){b!=null?OM(a.e,b):OM(a.e,'')}
function tU(a,b,c){return Phb(a.e,mvb+b+nvb+c)}
function ecb(a,b,c){Kj.call(this,a,b);this.a=c}
function cob(a,b,c){this.a=a;this.b=b;this.c=c}
function pob(a,b,c){this.d=a;this.b=c;this.a=b}
function npb(a){this.b=(_rb(a),a);this.a=16464}
function SW(a){a.X=0;a.Y=0;ob(a.lc);a.mc=false}
function vV(a){!a.o&&a.k!=-1&&a.n!=-1&&e5(a.p)}
function fb(a){$wnd.cancelAnimationFrame(a.id)}
function rcb(a){if(a==null){return 0}return +a}
function Kjb(a,b){a.a[a.a.length]=b;return true}
function xp(a,b){!a.a&&(a.a=new Tjb);Kjb(a.a,b)}
function op(a){var b;if(lp){b=new mp;sp(a.a,b)}}
function Aob(){Aob=kE;yob=new Bob;zob=new Dob}
function Hn(){Hn=kE;Gn=new yn('keydown',new In)}
function A3(a){B3.call(this,(Ocb(a),a.k),null)}
function VD(a,b){return JD(wq(OD(a)?ZD(a):a,b))}
function WD(a,b){return JD(xq(OD(a)?ZD(a):a,b))}
function XD(a,b){return JD(yq(OD(a)?ZD(a):a,b))}
function ofb(a,b){this.e=b;ifb(this,(_rb(a),a))}
function mb(){this.a=new Tjb;this.b=new yb(this)}
function Ecb(a){Dcb();return geb(vsb,typeof(a))}
function _D(a){if(OD(a)){return a|0}return Bq(a)}
function yV(a){e5(a.kc);rV(a);oX(a);IV(a);LV(a)}
function OW(a){if(!a.mc){a.mc=true;qb(a.lc,50)}}
function JY(a,b){f_((!a.B&&(a.B=new S_),a.B),b)}
function RT(a,b){return !!a.tb&&a.tb.contains(b)}
function ub(a,b){return psb(function(){a.hd(b)})}
function FZ(a,b){hR(a.R);lO(a.u);EZ(a);WT(a.W,b)}
function jW(a){fW(a,a.xc.e,a.xc.f,a.xc.K,a.xc.L)}
function K0(a){if(!a.a.s){return -1}return a.a.a}
function nO(a){a.k=-1;a.n=-1;a.o=-1;a.p=-1;mO(a)}
function e5(a){!a.c&&(a.c=new g5(a));pb(a.c,a.b)}
function On(){On=kE;Nn=new yn('keypress',new Pn)}
function Ao(){Ao=kE;zo=new yn('touchend',new Bo)}
function Mdb(){Mdb=kE;Ldb=Xp(kB,tsb,90,256,0,1)}
function Wdb(){Wdb=kE;Vdb=Xp(mB,tsb,103,256,0,1)}
function Urb(a,b,c){Srb(c,0,a,b,c.length,false)}
function Njb(a,b){$rb(b,a.a.length);return a.a[b]}
function zkb(a,b){Yrb(b,a.length);xkb(a,0,b,null)}
function zp(a,b,c,d){var e;e=Cp(a,b,c);e.add(d)}
function Wcb(a,b){var c;c=Tcb(a,b);c.f=2;return c}
function U1(a,b){Q1();R1(this);this.c=a;this.b=b}
function g1(a,b){return a[0]!==b[0]||a[2]!==b[2]}
function h1(a,b){return a[1]!==b[1]||a[3]!==b[3]}
function Zp(a){return Array.isArray(a)&&a.mg===oE}
function Si(a){return (Fh(),a).createElement(otb)}
function Ui(a){return (Fh(),a).createElement(stb)}
function kh(b,a){return b.getElementsByTagName(a)}
function aE(a){if(OD(a)){return ''+a}return Cq(a)}
function vK(a){tK();try{a.wd()}finally{qnb(sK,a)}}
function RP(a){J1(he(a.tf()),true);!!a.p&&ob(a.p)}
function SV(a,b){var c;c=Uhb(a.Ac,b);!!c&&NV(a,c)}
function gO(a){var b;a.c=(b=LK(a.j),b==null?'':b)}
function ZW(a,b){_W(a,a.db,a.zb,a.bb,a.xb,a.jc,b)}
function l9(a,b){o9(a.a,$p(Vp(qB,1),tsb,1,5,[b]))}
function m9(a,b){o9(a.b,$p(Vp(qB,1),tsb,1,5,[b]))}
function n9(a,b){o9(a.c,$p(Vp(qB,1),tsb,1,5,[b]))}
function D9(a,b){o9(a.B,$p(Vp(qB,1),tsb,1,5,[b]))}
function lqb(a,b){Shb(a.a,(wqb(),tqb)?null:b.c,b)}
function Wmb(a,b){return _rb(a),Hcb(a,(_rb(b),b))}
function Fbb(a){return a.jb==null||a.jb.length==0}
function Gbb(a){return a.nb==null||a.nb.length==0}
function Nq(a){return !Array.isArray(a)&&a.mg===oE}
function Zi(a){return (Fh(),a).createElement('td')}
function $i(a){return (Fh(),a).createElement('tr')}
function qE(a){if(a.b){return a.b}return Gpb(),xpb}
function gg(){ag();if(Yf){return}Yf=true;hg(false)}
function zI(a){wI();yI.call(this,(eF(),new aF(a)))}
function KE(a){IE.call(this,new HE(null));this.a=a}
function Hk(){xk.call(this,'TABLE_ROW_GROUP',12)}
function Bk(){xk.call(this,'TABLE_COLUMN_GROUP',9)}
function nL(a){this.b=a;this.a=Xp(_v,tsb,13,4,0,1)}
function ubb(a,b){this.a=a;this.b=b;this.c='poll'}
function FQ(){this.qb=new mnb;this.gb=(Kbb(),Ibb)}
function io(){io=kE;ho=new yn('mousedown',new jo)}
function Io(){Io=kE;Ho=new yn('touchmove',new Jo)}
function iV(a){return !geb((wk(),ytb),Ej(a.style))}
function rJ(a){re(a,xe((mF(),a.Wc))+'-'+Xub,false)}
function x$(a,b,c,d,e){H9(a.X,b,d,c,e);pb(a.s,200)}
function K$(a,b,c,d,e,f,g,h){rR(a.R,b,c,d,e,f,g,h)}
function SQ(a,b,c){a.n=c;a.d=b;PM(a.e,b);CQ(a.g,b)}
function cV(a,b,c){return c>a.Rc&&c<=a.zb&&b<=a.ob}
function gV(a,b,c){return b>a.ob&&b<=a.xb&&c<=a.Rc}
function QZ(a,b){return a.N.length>=b?a.N[b-1]:a.r}
function Tnb(a,b){return !(a.a.get(b)===undefined)}
function Thb(a,b){return Tq(b)?Uhb(a,b):Enb(a.a,b)}
function Jjb(a,b,c){bsb(b,a.a.length);Trb(a.a,b,c)}
function xg(a,b){!a&&(a=[]);a[a.length]=b;return a}
function l4(a,b){j1(b,he(v5(a.c)));EP(a.a,NA).ng()}
function Dab(a,b){o9(a.R,$p(Vp(qB,1),tsb,1,5,[b]))}
function Vjb(a){Ijb(this);Urb(this.a,0,a.toArray())}
function If(a){rf(this);this.f=a;tf(this);this.Gd()}
function Uob(a,b){this.d=a;this.c=(b&64)!=0?b|Jsb:b}
function asb(a,b){if(a==null){throw FD(new Zdb(b))}}
function DD(){if(yD==2){return new ML}return new TL}
function CD(){if(yD==2){return new JL}return new GL}
function BD(){if(yD==2){return new kH}return new mH}
function AD(){if(yD==2){return new gH}return new dH}
function zD(){if(yD==2){return new Ki}return new qi}
function P0(){F0();return $wnd.navigator.userAgent}
function Pi(a){return (Fh(),a).createElement('div')}
function Oi(a){return (Fh(),a).createElement('div')}
function Ri(a){return (Fh(),a).createElement('img')}
function pq(a,b){return dq(a.l&b.l,a.m&b.m,a.h&b.h)}
function vq(a,b){return dq(a.l|b.l,a.m|b.m,a.h|b.h)}
function Dq(a,b){return dq(a.l^b.l,a.m^b.m,a.h^b.h)}
function a2(a){var b;a.d=2;return b=a.a,a.a=null,b}
function _I(a){if(cJ(a)){return}a.i?fJ(a):undefined}
function bJ(a){if(cJ(a)){return}a.i?undefined:fJ(a)}
function vF(a){mF();!!lF&&a==lF&&(lF=null);kF.De(a)}
function FF(a){mF();!!lF&&a==lF&&(lF=null);kF.De(a)}
function KV(a){a.k!=-1&&a.n!=-1&&a.j!=null&&qN(a.q)}
function BE(a){a.a=Mqb('');Iqb(a.a);DE(a.a);CE(a.a)}
function Q0(a,b){var c,d;d=S0(a,b);c=V0(d);return c}
function HQ(a,b){return Ie(a.e,b,_o?_o:(_o=new xn))}
function Odb(a,b){return ID(a,b)<0?-1:ID(a,b)>0?1:0}
function J3(a,b,c,d){a.b[p3(new r3(new A3(b),c))]=d}
function L3(a,b,c,d){a.e[p3(new r3(new A3(b),c))]=d}
function Oeb(){Oeb=kE;Neb=new IE(null);new IE(null)}
function tK(){tK=kE;qK=new zK;rK=new mnb;sK=new rnb}
function yL(){yL=kE;wL=CD();xL=Oq(wL,147)?new AL:wL}
function N1(){N1=kE;M1=Mqb('spreadsheet RpcProxy')}
function Wi(a){return (Fh(),a).createElement('span')}
function jh(a){return (Fh(),a).getAttribute(Jtb)||''}
function ke(a){return (mF(),a.Wc).style.display!=ytb}
function uq(a){return dq(~a.l&wub,~a.m&wub,~a.h&Csb)}
function Bkb(a){return new rrb(null,Akb(a,a.length))}
function oh(b,a){return b[a]==null?null:String(b[a])}
function kb(a,b){Rjb(a.a,b);a.a.a.length==0&&ob(a.b)}
function EJ(a,b){a.w=b;CJ(a);b.length==0&&(a.w=null)}
function IJ(a,b){a.A=b;CJ(a);b.length==0&&(a.A=null)}
function gT(a,b){(mF(),a.Wc).style[Atb]=b+(em(),$ub)}
function KP(a,b){if(a.G==b){return}a.G=b;Nkb();Ykb()}
function okb(a){dsb(a.b!=-1);Qjb(a.c,a.a=a.b);a.b=-1}
function SZ(a,b){return !!a.v&&Ojb(a.v,Kdb(b),0)!=-1}
function TZ(a,b){return !!a.w&&Ojb(a.w,Kdb(b),0)!=-1}
function L0(a){return a.a.t==5&&(a.a.u==3||a.a.u==4)}
function Mhb(a,b){return Tq(b)?Qhb(a,b):!!Cnb(a.a,b)}
function CO(a,b){b.length==0?NK(a.j,b):NK(a.j,'='+b)}
function G4(a,b){a.a.e=a.c+(a.b-a.c)*b;A4(a.a,a.a.e)}
function xZ(a,b,c,d){var e;e=new iT(c,d);KT(a.W,b,e)}
function Rrb(a,b){var c;c=a.slice(0,b);return _p(c,a)}
function Akb(a,b){return Tob(b,a.length),new jpb(a,b)}
function Ti(a){return (Fh(),Eh).Nd(a,Vtb,false,false)}
function Xi(a){return (Fh(),a).createElement('style')}
function Yi(a){return (Fh(),a).createElement('tbody')}
function _i(a){return (Fh(),a).createElement('table')}
function kG(a,b){return rp((!dG&&(dG=new BG),dG),a,b)}
function r2(a){n2(a);g2((!b2&&(b2=new l2),b2),a.a.c)}
function Vhb(a){a.a=new Fnb(a);a.b=new Xnb(a);_mb(a)}
function snb(a){this.a=new nnb(a.size());_gb(this,a)}
function hN(){wJ();LJ.call(this);IM(this);SM(this,EM)}
function iN(){wJ();MJ.call(this);IM(this);SM(this,EM)}
function MJ(){LJ.call(this);this.u=true;this.v=true}
function nI(){mI.call(this);VH(this.a,'\u25BC',true)}
function Dk(){xk.call(this,'TABLE_HEADER_GROUP',10)}
function Fk(){xk.call(this,'TABLE_FOOTER_GROUP',11)}
function WZ(a){a.D?FZ(a,false):(a.D=true);YZ(a,a.a-1)}
function KO(a){a.f=false;a.e=null;a.q=-1;a.s=-1;nO(a)}
function OH(a){if(a.bb){return a.bb.td()}return false}
function ig(a){$wnd.setTimeout(function(){throw a},0)}
function Mab(a){var b;b=[];Fob(a,new Nab(b));return b}
function Ucb(a,b,c){var d;d=Tcb(a,b);fdb(c,d);return d}
function Tcb(a,b){var c;c=new Rcb;c.g=a;c.d=b;return c}
function onb(a,b){var c;c=Rhb(a.a,b,a);return c==null}
function KW(a,b,c){var d,e;d=b+10;e=c-25;QM(a.Wb,d,e)}
function dT(a,b){(mF(),a.Wc).style[ztb]=b+(em(),'pt')}
function qZ(a){!geb(iub,Gj((mF(),a.Wc).style))&&TM(a)}
function BJ(a){return !geb(iub,Gj((mF(),a.Wc).style))}
function JI(a,b){II(a,b);return KI(Cj((mF(),a.Wc))[b])}
function I3(a,b,c){a.b[p3(new r3(new A3(b),'!new'))]=c}
function $fb(a,b,c){Ffb();this.e=a;this.d=b;this.a=c}
function L$(a,b,c,d,e,f,g,h,i){sR(a.R,b,c,d,e,f,g,h,i)}
function YY(a,b,c,d,e,f,g,h){K$(TP(a.a),b,c,d,e,f,g,h)}
function w9(a,b){o9(a.p,$p(Vp(qB,1),tsb,1,5,[Kdb(b)]))}
function C9(a,b){o9(a.A,$p(Vp(qB,1),tsb,1,5,[Kdb(b)]))}
function G9(a,b){o9(a.D,$p(Vp(qB,1),tsb,1,5,[Kdb(b)]))}
function J9(a,b){o9(a.L,$p(Vp(qB,1),tsb,1,5,[Kdb(b)]))}
function V9(a,b){o9(a.Q,$p(Vp(qB,1),tsb,1,5,[Mab(b)]))}
function dpb(a,b){_rb(b);while(a.c<a.d){ipb(a,b,a.c++)}}
function TT(a){var b;b=NT(a);gU(a,new Tjb,a.bb,a.xb,b)}
function _qb(a){if(!a.b){arb(a);a.c=true}else{_qb(a.b)}}
function HP(a){if(!a.nf().ob){return false}return true}
function _rb(a){if(a==null){throw FD(new Xdb)}return a}
function Deb(a,b){a.a+=String.fromCharCode(b);return a}
function ZF(a,b){return rp(a.a,(!lp&&(lp=new xn),lp),b)}
function Hob(a,b){return Uq(a)===Uq(b)||a!=null&&M(a,b)}
function Ni(a){return (Fh(),a).createElement('canvas')}
function Qi(a){return (Fh(),a).createElement('iframe')}
function Vi(a){return (Fh(),a).createElement('select')}
function jI(a){oe(this,(mF(),a));this.a=new WH(this.Wc)}
function kob(){this.a=new xob;this.c=new xob;job(this)}
function m2(a){this.a=new Tjb;this.c='__eager';this.b=a}
function uK(a){tH.call(this);oe(this,(mF(),a));Ke(this)}
function D4(a,b){o4();var c;c=new P4;N4(c,a,b);return c}
function Xcb(a,b){var c;c=Tcb('',a);c.j=b;c.f=1;return c}
function e2(a){var b;b=a.a['__eager'];b.d==0&&_1(b,a.c)}
function lV(a){return !!a.T&&Qhb(a.T,mvb+a.qc+nvb+a.rc)}
function Ohb(a,b){return Tq(b)?Phb(a,b):zhb(Cnb(a.a,b))}
function lnb(a,b){return Uq(a)===Uq(b)||a!=null&&M(a,b)}
function MZ(a,b){return b>0&&a.g.length>=b?a.g[b-1]:a.q}
function $0(b,a){return Object.hasOwnProperty.call(b,a)}
function xeb(a){return String.fromCharCode.apply(null,a)}
function aj(a){return (Fh(),a).createElement('textarea')}
function bf(a,b){b?$e.Xe((mF(),a.Wc)):$e.Ve((mF(),a.Wc))}
function eeb(a,b){fsb(b,a.length);return a.charCodeAt(b)}
function AJ(a){if(!a.M){return}eK(a.L,false,false);cp(a)}
function jG(a){iG();mG();return kG(_o?_o:(_o=new xn),a)}
function um(){sm();return $p(Vp(Qt,1),tsb,94,0,[rm,qm])}
function Ul(){Sl();return $p(Vp(Dt,1),tsb,93,0,[Ql,Rl])}
function tE(){rE(this,new GE(true));sE(this,(Gpb(),xpb))}
function P4(){this.b=N0((F0(),!E0&&(E0=new O0),F0(),E0))}
function Nkb(){Nkb=kE;Kkb=new Rkb;Lkb=new glb;Mkb=new olb}
function Rfb(a){var b;b=a.a[0];return a.e>0||b==Isb?b:-b}
function u5(){var a;a=null;a+=(tbb(),'?v='+sbb);return a}
function nrb(a,b){arb(a);return new rrb(a,new Frb(b,a.a))}
function orb(a,b){arb(a);return new drb(a,new vrb(b,a.a))}
function prb(a,b){arb(a);return new irb(a,new Arb(b,a.a))}
function Rhb(a,b,c){return Tq(b)?Shb(a,b,c):Dnb(a.a,b,c)}
function mcb(a,b,c){kcb(this);this.c=a;this.b=b;this.a=c}
function JX(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function LX(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function gM(a,b,c,d){this.a=a;this.d=b;this.c=c;this.b=d}
function BM(a,b,c,d){this.d=a;this.a=b;this.c=c;this.b=d}
function K5(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d}
function dM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function eM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function aeb(a,b,c){this.a=usb;this.d=a;this.b=b;this.c=c}
function jpb(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function brb(a){if(!a){this.b=null;new Tjb}else{this.b=a}}
function Uhb(a,b){return b==null?Enb(a.a,null):Wnb(a.b,b)}
function nV(a,b){return b==a.c||b==a.Mc||b==a.Oc||b==a.yc}
function bG(a){return $wnd.decodeURI(a.replace('%23','#'))}
function vE(){rE(this,new GE(false));sE(this,(Gpb(),xpb))}
function CE(a){var b,c;b=new tE;zqb(a,b);c=new vE;zqb(a,c)}
function TG(a){var b;b=(Fh(),Eh).Rd(a);b[Qub]=a.type;SG(a)}
function ah(a){var b;b=Ih((Fh(),a));!!b&&b.removeChild(a)}
function P6(a,b,c){A0(a.e.C,c,Gh((Fh(),b),'resource-'+c))}
function Db(a,b){Jb((Cc(),Bc),a,$p(Vp(wB,1),Lsb,2,6,[b]))}
function WY(a,b,c,d,e,f,g,h,i){L$(TP(a.a),b,c,d,e,f,g,h,i)}
function H4(a,b,c){this.a=a;this.c=b;this.b=c;V.call(this)}
function job(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function M0(a){if(a.a.b==8){return a.a.c>=0}return a.a.b>8}
function q1(a){if(!a){return Hsb}return r1(a)+' ('+a.F+')'}
function NS(a,b){if(!a.a.f){uW(a.b,true);c$(a.b.a)}Aj(b.a)}
function nZ(a,b){Phb(FP(a.a).c,b);Nkb();Ykb();return null}
function z1(a){w1();var b,c;b=H1(a);c=I1(a);return y1(b,c)}
function Fg(){Fg=kE;var a,b;b=!Lg();a=new Tg;Eg=b?new Mg:a}
function nl(){nl=kE;ml=new ql;kl=new rl;ll=new sl;jl=new tl}
function yl(){yl=kE;xl=new Bl;wl=new Cl;ul=new Dl;vl=new El}
function Jl(){Jl=kE;Fl=new Ml;Gl=new Nl;Hl=new Ol;Il=new Pl}
function ZK(){ZK=kE;VK=new aL;WK=new bL;XK=new cL;YK=new dL}
function o4(){o4=kE;m4=L0((F0(),!E0&&(E0=new O0),F0(),E0))}
function osb(){if(jsb==256){isb=ksb;ksb=new K;jsb=0}++jsb}
function oc(a,b){Jb((Cc(),Ac),a,$p(Vp(Dr,1),tsb,174,0,[b]))}
function UN(a){a.a.C&&o9(a.a.a.X.n,$p(Vp(qB,1),tsb,1,5,[]))}
function Up(){Sp();return $p(Vp(Bu,1),tsb,109,0,[Rp,Qp,Pp])}
function Fab(a,b,c){o9(a.T,$p(Vp(qB,1),tsb,1,5,[Kdb(b),c]))}
function HD(a,b){return JD(pq(OD(a)?ZD(a):a,OD(b)?ZD(b):b))}
function UD(a,b){return JD(vq(OD(a)?ZD(a):a,OD(b)?ZD(b):b))}
function bE(a,b){return JD(Dq(OD(a)?ZD(a):a,OD(b)?ZD(b):b))}
function Qhb(a,b){return b==null?!!Cnb(a.a,null):Tnb(a.b,b)}
function Dqb(a,b){if(!sqb){return}Fqb(a,(Gpb(),Cpb),b,null)}
function Jqb(a,b){if(!uqb){return}Fqb(a,(Gpb(),Epb),b,null)}
function Kqb(a,b){if(!vqb){return}Fqb(a,(Gpb(),Fpb),b,null)}
function KN(a,b){if(a.b){a.jf(0);a.f||a.gf(b)}else{a.jf(b)}}
function cN(a){if(a.r){p1(a.r);return a.q}else{return null}}
function mpb(a){if(!a.d){a.d=new pkb(a.b);a.c=a.b.a.length}}
function Gp(a,b,c,d){a.b>0?xp(a,new gM(a,b,c,d)):Bp(a,b,c,d)}
function bM(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function IO(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function wK(){tK();try{EH(sK,qK)}finally{Vhb(sK.a);Vhb(rK)}}
function YF(){VF();var a;a=XF();if(!geb(a,UF)){UF=a;op(TF)}}
function Y5(a,b){var c;c=a.If();Object.assign(c,b);return c}
function xH(a,b){var c;c=sH(a,b);c&&yH((mF(),b.Wc));return c}
function yf(a,b){var c;c=Pcb(a.kg);return b==null?c:c+': '+b}
function qcb(a,b){if(a==null){return b==null}return geb(a,b)}
function lE(a){function b(){}
;b.prototype=a||{};return new b}
function _mb(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function Bmb(a,b){var c;for(c=0;c<b;++c){a[c]=new Mmb(a[c])}}
function Qkb(a){Nkb();return Oq(a,179)?new Tmb(a):new Mlb(a)}
function Zbb(){Xbb();return $p(Vp(KA,1),tsb,142,0,[Vbb,Wbb])}
function Ie(a,b,c){return rp(!a.Uc?(a.Uc=new up(a)):a.Uc,c,b)}
function eV(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb}
function thb(a,b){return b===a?'(this Map)':b==null?Hsb:nE(b)}
function Vq(a){return Math.max(Math.min(a,ysb),-2147483648)|0}
function hh(a){return (Fh(),Eh).Vd(a)+((a.offsetWidth||0)|0)}
function fh(a){return (Fh(),Eh).Wd(a)+((a.offsetHeight||0)|0)}
function xW(a,b){WW(a,qU(a),b);lX(a,b);a.tb=CV(b,a.tb);XW(a)}
function UH(a){var b;b=a.c?lh(a.a):a.a;return (Fh(),Eh).$d(b)}
function _cb(a){if(a.Qf()){return null}var b=a.j;return hE[b]}
function _L(b){try{return b.selectionStart}catch(a){return 0}}
function pl(){nl();return $p(Vp(qt,1),tsb,62,0,[ml,kl,ll,jl])}
function Al(){yl();return $p(Vp(vt,1),tsb,63,0,[xl,wl,ul,vl])}
function Ll(){Jl();return $p(Vp(At,1),tsb,64,0,[Fl,Gl,Hl,Il])}
function _K(){ZK();return $p(Vp(Wv,1),tsb,65,0,[VK,WK,XK,YK])}
function uT(a,b){if(!a)return;(Fh(),Eh).ce(a,b);a.title=b||''}
function XT(a){WS(a.Cc);if(a.pb){WS(a.pb);ah(a.pb);a.pb=null}}
function y0(a){if(!a.b){a.b=new vZ;PM(a.b,TP(a.d))}return a.b}
function DV(a,b){if(b){Vhb(b);!!a&&shb(b,a)}else{b=a}return b}
function Tob(a,b){if(0>a||a>b){throw FD(new Ccb(Usb+a+Vsb+b))}}
function mrb(a,b){var c;return qrb(a,new Tjb,(c=new Nrb(b),c))}
function Yo(a,b){var c;if(Vo){c=new Wo(b);!!a.Uc&&sp(a.Uc,c)}}
function bsb(a,b){if(a<0||a>b){throw FD(new Bcb(Wsb+a+Xsb+b))}}
function x3(a,b,c){this.b=b;this.c=Qkb(new Dkb(c));this.a=a}
function V5(a,b,c,d){this.b=a;this.c=b;U5(this,c);T5(this,d)}
function Lf(a,b){rf(this);this.e=b;this.f=a;tf(this);this.Gd()}
function dN(){MJ.call(this);this.I=false;IM(this);SM(this,EM)}
function $g(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function wF(a){mF();return a.__gwt_resolve?a.__gwt_resolve():a}
function neb(a){return (new RegExp('^([^A-z0-9:!])$')).test(a)}
function BO(a){a.t.$?pb(new hP(a),100):s1((ng(),mg),new jP(a))}
function LW(a,b,c,d){a.Yb=false;s1((ng(),mg),new LX(a,b,c,d))}
function NW(a,b,c,d){a.Yb=false;s1((ng(),mg),new JX(a,b,c,d))}
function N$(a,b){if(!a.f){a.f=b}else{Vhb(a.f);!!b&&shb(a.f,b)}}
function V$(a,b){if(!a.k){a.k=b}else{Vhb(a.k);!!b&&shb(a.k,b)}}
function v_(a,b){if(!a.O){a.O=b}else{Vhb(a.O);!!b&&shb(a.O,b)}}
function DP(a,b){if(!a.H){return Nkb(),Nkb(),Kkb}return a.H[b]}
function gib(a,b){if(Oq(b,100)){return qhb(a.a,b)}return false}
function Phb(a,b){return b==null?zhb(Cnb(a.a,null)):Unb(a.b,b)}
function R3(a){return (!b2&&(b2=new l2),b2).c.d[(new A3(a)).b]}
function z4(a,b){a.a=b;if(m4){b+=a.n;A4(a,-b)}else{A4(a,-a.a)}}
function rH(a,b,c){Ne(b);iL(a.o,b);mF();Vg(c,wF(b.Wc));Pe(b,a)}
function oM(a,b,c,d){if(!geb(a.b,c)){a.b=c;a.bf()}a.f=d;nM(a,b)}
function p9(a,b,c){o9(a.e,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function v9(a,b,c){o9(a.o,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function y9(a,b,c){o9(a.r,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function z9(a,b,c){o9(a.s,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function B9(a,b,c){o9(a.w,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function E9(a,b,c){o9(a.H,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function F9(a,b,c){o9(a.I,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function I9(a,b,c){o9(a.K,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function K9(a,b,c){o9(a.M,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function M9(a,b,c){o9(a.O,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function Tqb(){Rqb();return $p(Vp(dD,1),tsb,86,0,[Oqb,Pqb,Qqb])}
function Shb(a,b,c){return b==null?Dnb(a.a,null,c):Vnb(a.b,b,c)}
function gob(a,b){_rb(b);while(a.a<a.c.a.length){Orb(b,nkb(a))}}
function $rb(a,b){if(a<0||a>=b){throw FD(new Bcb(Wsb+a+Xsb+b))}}
function fsb(a,b){if(a<0||a>=b){throw FD(new Meb(Wsb+a+Xsb+b))}}
function Zcb(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.Lf(b))}
function Bnb(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function FG(a){var b=a.__listener;return !Rq(b)&&Oq(b,10)?b:null}
function lG(a){iG();mG();nG();return kG((!fp&&(fp=new xn),fp),a)}
function Ch(a){if(bh(a)){return !!a&&a.nodeType==1}return false}
function hH(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function hZ(a,b,c){if(FP(a.a).u){a.a.f=b;a.a.e=null;J9(a.a.g,c)}}
function gZ(a,b,c){if(FP(a.a).u){a.a.f=b;a.a.e=null;w9(a.a.g,c)}}
function n_(a,b){if(!a.H){a.H=b}else{Vhb(a.H.a);!!b&&_gb(a.H,b)}}
function o_(a,b){if(!a.I){a.I=b}else{Vhb(a.I.a);!!b&&_gb(a.I,b)}}
function d1(a,b){if(a.b!=b){a.b=b;return true}else{return false}}
function e1(a,b){if(a.e!=b){a.e=b;return true}else{return false}}
function Ieb(a,b,c){a.a=teb(a.a,0,b)+(''+c)+seb(a.a,b);return a}
function GZ(a,b){var c,d;c=a>0?LZ(a):'';d=b>0?''+b:'';return c+d}
function x4(a,b){var c;if(!n4&&xj(b.a).length==1){c=b.a;s4(a,c)}}
function JU(a,b){return TZ(a.a,b)?0:b>=a.W.length?zU(a):a.W[b-1]}
function Zj(){Xj();return $p(Vp(Ts,1),tsb,53,0,[Vj,Tj,Sj,Uj,Wj])}
function Gm(){Em();return $p(Vp(Wt,1),tsb,54,0,[zm,Am,Bm,Cm,Dm])}
function Dbb(){Bbb();return $p(Vp(CA,1),tsb,116,0,[zbb,Abb,ybb])}
function Mbb(){Kbb();return $p(Vp(GA,1),tsb,111,0,[Jbb,Ibb,Hbb])}
function hbb(){fbb();return $p(Vp(yA,1),tsb,120,0,[cbb,ebb,dbb])}
function Eab(a,b,c){o9(a.S,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c)]))}
function MO(a){var b;ZZ(a.t,peb((b=LK(a.a),b==null?'':b),' ',''))}
function bU(a){var b;b=sU(a,a.qc,a.rc);a.nb=null;!!b&&sh(b.d,lwb)}
function mV(a){var b;b=tU(a,a.qc,a.rc);return !!b&&b.isPercentage}
function $D(a){var b;if(OD(a)){b=a;return b==-0.?0:b}return Aq(a)}
function nkb(a){Zrb(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function EZ(a){if(a.K){while(0<a.K.a.length){QV(a.W,Qjb(a.K,0))}}}
function JJ(a){if(a.M){return}else a.Sc&&Ne(a);eK(a.L,true,false)}
function WH(a){this.a=a;this.c=false;this.b=Np(a);this.d=this.b}
function Qf(a){Of();Mf.call(this,a);this.a='';this.b=a;this.a=''}
function vrb(a,b){Yob.call(this,b.eg(),b.dg()&-6);_rb(a);this.a=b}
function Arb(a,b){_ob.call(this,b.eg(),b.dg()&-6);_rb(a);this.a=b}
function qqb(a,b){this.a=a;this.d=b;this.c=(Oeb(),MD(Date.now()))}
function mf(a,b){return !!a&&!!a.equals?a.equals(b):Uq(a)===Uq(b)}
function n$(a,b){a.t&&(a.c=false,s1((ng(),mg),new j0(a,b,false)))}
function tS(a,b){a.k.style[ztb]=b+(em(),$ub);a.u.style[ztb]=b+$ub}
function yH(a){a.style[Sub]='';a.style[Tub]='';a.style[Qtb]=''}
function sT(a,b){a.j=b;a.a.style[Wtb]=(b?(wk(),lk):(wk(),hk)).he()}
function peb(a,b,c){c=zeb(c);return a.replace(new RegExp(b,'g'),c)}
function eF(){eF=kE;new RegExp('%5B','g');new RegExp('%5D','g')}
function oK(){throw 'A PotentialElement cannot be resolved twice.'}
function bh(b){try{return !!b&&!!b.nodeType}catch(a){return false}}
function Af(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function Zmb(a,b){if(b.$modCount!=a.$modCount){throw FD(new anb)}}
function s1(a,b){++a.a;a.b=xg(a.b,[b,false]);sg(a);ug(a,new u1(a))}
function pM(a){if(!a.a){a.a=Oi($doc);a.a.className=jvb;Vg(a.d,a.a)}}
function qM(a){if(!a.e){a.e=Oi($doc);a.e.className=kvb;Vg(a.d,a.e)}}
function rh(a,b){var c;b=Dh(b);c=Bh(a.className||'',b);return c!=-1}
function Vcb(a,b,c,d){var e;e=Tcb(a,b);fdb(c,e);e.f=d?8:0;return e}
function dU(a,b,c,d){var e;e=mvb+c+nvb+d;Shb(a.r,e,b);K_(a.a,b,c,d)}
function Uib(a,b,c){csb(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function zY(a,b,c,d,e){this.g=a;this.b=b;this.c=d;this.d=e;this.a=c}
function t9(a,b,c,d){o9(a.j,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),d]))}
function fcb(){dcb();return $p(Vp(MA,1),tsb,98,0,[bcb,ccb,acb,_bb])}
function PU(a){return $p(Vp(Zq,1),uwb,16,15,[a.db,a.bb,a.zb,a.xb])}
function Jib(a){dsb(a.c!=-1);a.d.removeAtIndex(a.c);a.b=a.c;a.c=-1}
function Ifb(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function Oib(a,b){this.a=a;Kib.call(this,a);bsb(b,a.size());this.b=b}
function Hnb(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function wqb(){wqb=kE;tqb=false;rqb=true;sqb=true;vqb=true;uqb=true}
function sV(a,b){!!a.gb&&pN(a.gb);(mF(),b.Wc).style[Ytb]='1';a.gb=b}
function CV(a,b){if(b){b.clear();!!a&&b.addAll(a)}else{b=a}return b}
function ab(a,b){U(a.a,b)?(a.a.q=a.a.s.fd(a.a.j,a.a.n)):(a.a.q=null)}
function TM(a){FM=a;LM(a);a.F?T(new W5(a),200,Wf()):MM(a,1);FM=null}
function pU(a,b){b?s1((ng(),mg),new TX(a)):(a.yc.focus(),undefined)}
function sW(a,b){b?sh(a.Ec,'nogrid'):dh(a.Ec,'nogrid');a.Db&&xX(a)}
function Cnb(a,b){var c;return Anb(b,Bnb(a,b==null?0:(c=Q(b),c|0)))}
function Jh(a,b){var c;return ph((c=a.Zd(b),c?c:b.documentElement))}
function nj(a){return geb(a.compatMode,Ltb)?a.documentElement:a.body}
function aF(a){if(a==null){throw FD(new Zdb('uri is null'))}this.a=a}
function uI(){uI=kE;new vI('bottom');new vI('middle');tI=new vI(Tub)}
function Xbb(){Xbb=kE;Vbb=new Ybb('ALERT',0);Wbb=new Ybb('STATUS',1)}
function Xj(){Xj=kE;Vj=new $j;Tj=new _j;Sj=new ak;Uj=new bk;Wj=new ck}
function Em(){Em=kE;zm=new Hm;Am=new Im;Bm=new Jm;Cm=new Km;Dm=new Lm}
function mL(a,b){var c;c=jL(a,b);if(c==-1){throw FD(new Gob)}lL(a,c)}
function vU(a,b,c){var d;d=Phb(a.e,mvb+b+nvb+c);return !d?'':d.value}
function nW(a,b,c){sX(a,qU(a),b);kX(a,b);a.r=DV(b,a.r);a.i=DV(c,a.i)}
function fZ(a,b,c,d){if(FP(a.a).u){a.a.e=b;a.a.f=null;z9(a.a.g,d,c)}}
function Hab(a,b,c,d){o9(a.V,$p(Vp(qB,1),tsb,1,5,[b,Kdb(c),Kdb(d)]))}
function JO(a){a.v=true;jO(a,a.w);PO(a,true);s1((ng(),mg),new dP(a))}
function uW(a,b){b?Ae((mF(),a.Wc),Fwb,false):Ae((mF(),a.Wc),Fwb,true)}
function AQ(a,b){(mF(),a.Wc).style[Wtb]=(b?(wk(),lk):(wk(),dk)).he()}
function ob(a){if(!a.d){return}++a.b;a.c?sb(a.d.a):tb(a.d.a);a.d=null}
function QE(a){if(a==null){throw FD(new Zdb('html is null'))}this.a=a}
function y5(){lQ.call(this);this.a=null;new H5(this,this);this.b=null}
function H5(a,b){this.a=a;this.f=new $3(this);this.c=b;this.b='click'}
function xM(a,b,c){this.n=a;this.c=b;this.k=c;this.d=Oi($doc);uM(this)}
function ZS(a,b){return a.sheet.insertRule(b,a.sheet.cssRules.length)}
function k1(a,b){return a-(Fh(),Eh).Vd(b)+Eh._d(b)+kj(b.ownerDocument)}
function nK(a){return function(){this.__gwt_resolve=oK;return a.md()}}
function UK(a){SK.call(this,a);(mF(),this.Wc).className='gwt-TextBox'}
function II(a,b){if(b<0||b>=Cj((mF(),a.Wc)).length){throw FD(new Acb)}}
function B4(a,b,c,d){if(b>0){a.r=true;a.i=new H4(a,c,d);T(a.i,b,Wf())}}
function Mqb(a){wqb();if(tqb){return new Lqb(null)}return mqb(oqb(),a)}
function NU(a){var b;b=Phb(a.e,mvb+a.qc+nvb+a.rc);return !b?'':b.value}
function V0(a){var b=parseInt(a,10);if(isNaN(b))return 0;else return b}
function I0(){var a=$wnd.document.documentMode;if(!a)return -1;return a}
function LF(a){a.e=false;a.f=null;a.a=false;a.b=false;a.c=true;a.d=null}
function iM(a){!!a.a&&Vg(a.d,a.a);!!a.e&&Vg(a.d,a.e);!!a.j&&Vg(a.d,a.j)}
function XZ(a){!lV(a.W)&&!a.e&&!!a.p&&oZ(a.p,MU(a.W))&&nZ(a.p,MU(a.W))}
function dj(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function feb(a,b){var c;c=b.length;return geb(a.substr(a.length-c,c),b)}
function qeb(a,b,c){var d;c=zeb(c);d=new RegExp(b);return a.replace(d,c)}
function Pjb(a,b,c){for(;c>=0;--c){if(Hob(b,a.a[c])){return c}}return -1}
function Mfb(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function hob(a,b,c,d){var e;e=new xob;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function N3(a,b,c){var d;d=!c?null:(Ocb(c),c.k);V3(a.c,(Ocb(b),b.k),d)}
function lI(a){var b;jI.call(this,(b=a,heb('span',(Fh(),a).tagName),b))}
function mI(){lI.call(this,Oi($doc));(mF(),this.Wc).className='gwt-HTML'}
function Znb(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function Lqb(a){wqb();if(tqb){return}this.c=a;this.e=true;this.a=new Tjb}
function dg(b){ag();return function(){return eg(b,this,arguments);var a}}
function Wf(){if(Date.now){return Date.now()}return (new Date).getTime()}
function tf(a){if(a.k){a.backingJsObject!==Dsb&&a.Gd();a.i=null}return a}
function Ih(a){var b=a.parentNode;(!b||b.nodeType!=1)&&(b=null);return b}
function NT(a){var b,c;c=0;for(b=1;b<a.bb-a.ob;b++){c+=MZ(a.a,b)}return c}
function OT(a){var b,c;c=0;for(b=1;b<a.db-a.Rc;b++){c+=a.W[b-1]}return c}
function bq(a){var b,c,d;b=a&wub;c=a>>22&wub;d=a<0?Csb:0;return dq(b,c,d)}
function oV(a){var b;b=new Tjb;Kjb(b,a.sb);Ljb(b,yU(a));return new pkb(b)}
function zE(){var a;BE(xE);if(!pf){a=Mqb((Ocb(Gu),Gu.k));qf(new AE(a))}}
function aG(){var a;a=psb(YF);$wnd.addEventListener('hashchange',a,false)}
function le(a,b){re(a,xe((wJ(),vJ).$e((mF(),mF(),lh(a.Wc))))+'-'+b,false)}
function fg(a){a&&pg((ng(),mg));--Xf;if(a){if(_f!=-1){kg(_f);_f=-1}}}
function SR(a){a.N&&RR(a);k$(a.Q.a,a.Q.qc,a.U,a.Q.rc,a.V);a.o=false;OR(a)}
function J$(a){EW(a.W,1,1);y$(a,a.i,a.P);k$(a,1,a.i,1,a.P);O_(a,1,1,null)}
function a$(a,b){a.C&&!a.u.f&&(a.c=false,s1((ng(),mg),new j0(a,b,true)))}
function f$(a,b,c,d){if(a.S){(c!=a.W.qc||d!=a.W.rc)&&IZ(a);fZ(a.S,b,c,d)}}
function Gab(a,b,c,d){o9(a.U,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),Kdb(d)]))}
function Ubb(){Sbb();return $p(Vp(IA,1),tsb,77,0,[Pbb,Rbb,Obb,Nbb,Qbb])}
function Mgb(a,b,c,d){var e;e=Xp(Zq,uwb,16,b,15,1);Ngb(e,a,b,c,d);return e}
function Qjb(a,b){var c;c=($rb(b,a.a.length),a.a[b]);Vrb(a.a,b,1);return c}
function spb(a,b){!a.a?(a.a=new Leb(a.d)):Heb(a.a,a.b);Feb(a.a,b);return a}
function Frb(a,b){cpb.call(this,b.eg(),b.dg()&-6);_rb(a);this.a=a;this.b=b}
function O3(){this.a={};this.f={};this.d={};this.e={};this.b={};this.c={}}
function tpb(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function Vfb(a,b){if(b==0||a.e==0){return a}return b>0?ngb(a,b):qgb(a,-b)}
function Wfb(a,b){if(b==0||a.e==0){return a}return b>0?qgb(a,b):ngb(a,-b)}
function Nqb(a,b,c,d){_rb(a);_rb(b);_rb(c);_rb(d);return new Uqb(b,new vpb)}
function esb(a,b,c){if(a<0||b>c||b<a){throw FD(new Meb(Ysb+a+Zsb+b+Vsb+c))}}
function s$(a){var b,c;b=ph(a.W.yc);c=(a.W.yc.scrollTop||0)|0;Eab(a.X,b,c)}
function SG(a){var b;b=WG(a);if(!b){return}oF(a,b.nodeType!=1?null:b,FG(b))}
function CJ(a){var b;b=a.O;if(b){a.w!=null&&b.nd(a.w);a.A!=null&&b.pd(a.A)}}
function kdb(a){return geb(wsb,typeof(a))||Sq(a,$wnd.java.lang.Number$impl)}
function yI(a){xI(this,new GI(this,a));(mF(),this.Wc).className='gwt-Image'}
function oN(a){UH(a.a).length==0?De((mF(),a.Wc),false):De((mF(),a.Wc),true)}
function Qe(a,b){a.Tc==-1?zF((mF(),a.Wc),b|(a.Wc.__eventBits||0)):(a.Tc|=b)}
function jL(a,b){var c;for(c=0;c<a.c;++c){if(a.a[c]==b){return c}}return -1}
function epb(a,b){_rb(b);if(a.c<a.d){ipb(a,b,a.c++);return true}return false}
function uU(a,b,c){var d;d=Phb(a.e,mvb+b+nvb+c);return !d?'':d.formulaValue}
function Xp(a,b,c,d,e,f){var g;g=Yp(e,d);e!=10&&$p(Vp(a,f),b,c,e,g);return g}
function Zfb(a,b){Ffb();this.e=a;this.d=1;this.a=$p(Vp(Zq,1),uwb,16,15,[b])}
function Ujb(a){Ijb(this);Xrb(a>=0,'Initial capacity must not be negative')}
function x1(){w1();$wnd.getSelection&&$wnd.getSelection().removeAllRanges()}
function aM(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function tF(b){mF();try{return !!b&&!!b.__gwt_resolve}catch(a){return false}}
function _p(a,b){Wp(b)!=10&&$p(O(b),b.lg,b.__elementTypeId$,Wp(b),a);return a}
function Hgb(a,b,c,d){var e;e=Xp(Zq,uwb,16,b+1,15,1);Igb(e,a,b,c,d);return e}
function xkb(a,b,c,d){var e;d=(Vmb(),!d?Umb:d);e=a.slice(b,c);ykb(e,a,b,c,-b)}
function EU(a,b,c){var d;d=Phb(a.e,mvb+b+nvb+c);return !d?'':d.originalValue}
function PT(a,b,c){var d,e,f;f=0;for(e=b;e<=c;e++){d=MZ(a.a,e);f+=d}return f}
function nF(a,b){mF();var c;c=FG(b);if(!c){return false}oF(a,b,c);return true}
function F0(){F0=kE;var a;a=H0((!E0&&(E0=new O0),E0));tK();re(xK(),a,true)}
function SK(a){var b;OK.call(this,(b=a,!hF&&(hF=new iF),!fF&&(fF=new gF),b))}
function iJ(a){var b;this.b=new Tjb;this.f=new Tjb;XI(this,(b=a,qJ(),vL(),b))}
function TD(a){var b;if(OD(a)){b=0-a;if(!isNaN(b)){return b}}return JD(tq(a))}
function GP(a,b){var c;c=(!a.J&&(a.J=BP(a)),a.J).pb;return !!c&&c.contains(b)}
function TR(a){var b;b=BR(a);a.v=(Fh(),Eh).Vd(b);a.w=Eh.Wd(b);a.O=a.e;a.P=a.K}
function bj(a){var b;return b=(Fh(),a).createElement('INPUT'),b.type='text',b}
function O6(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');return DP(a.e,b).Ie().Te()}
function AG(a){var b;zG();b=xG.get(a);return !b?null:b.getAtIndex(b.size()-1)}
function Pfb(a){var b;if(a.e==0){return -1}b=Ofb(a);return (b<<5)+Idb(a.a[b])}
function EK(a){if(!a.a||!a.c.O){throw FD(new Gob)}a.a=false;return a.b=a.c.O}
function MH(a){if(!a.bb){throw FD(new ydb('initWidget() is not called yet'))}}
function UU(a){_U(a,a.qc,a.rc)||iW(a,a.qc,a.rc);s1((ng(),mg),new PX(a,true))}
function l$(a,b){t9(a.X,a.W.rc,a.W.qc,b);BZ(a,b,true);oU(a.W);lR(a.R,false)}
function m_(a,b){a.G=b;a.G?Ae((mF(),a.Wc),Ywb,true):Ae((mF(),a.Wc),Ywb,false)}
function PO(a,b){if(b){s1((ng(),mg),new VO(a))}else if(a.f){a.q=JK(a.e);iO(a)}}
function o$(a){a.t=true;a.c=true;a.C?(a.C=false):lV(a.W)?(a.b=''):(a.b=NU(a.W))}
function bob(a){if(a.a.d!=a.c){return Unb(a.a,a.b.value[0])}return a.b.value[1]}
function pL(a){if(a.b>=a.c.c){throw FD(new Gob)}a.a=a.c.a[a.b];++a.b;return a.a}
function oG(){iG();var a;if(cG){a=new sG;!!dG&&sp(dG,a);return null}return null}
function qrb(a,b,c){var d;_qb(a);d=new Krb;d.a=b;a.a.fg(new Prb(d,c));return d.a}
function xqb(a,b,c,d){var e;e=new qqb(b,c);e.e=d;pqb(e,tqb?null:a.c);yqb(a,e)}
function A9(a,b,c){o9(a.v,$p(Vp(qB,1),tsb,1,5,[(Dcb(),b?true:false),Kdb(c)]))}
function gm(){em();return $p(Vp(Nt,1),tsb,34,0,[dm,bm,Yl,Zl,cm,am,$l,Xl,_l])}
function Kh(a,b){var c;return ((c=a.Zd(b),c?c:b.documentElement).scrollTop||0)|0}
function fT(a,b,c){(mF(),a.Wc).style[ewb]=b+(em(),$ub);a.Wc.style[fwb]=c+'pt'}
function Ojb(a,b,c){for(;c<a.a.length;++c){if(Hob(b,a.a[c])){return c}}return -1}
function oib(a){var b;Zmb(a.e,a);Zrb(a.b);a.c=a.a;b=a.a.Te();a.b=nib(a);return b}
function crb(a){var b;_qb(a);b=Xp(Xq,tsb,16,0,15,1);Sob(a.a,new frb(b));return b}
function hrb(a){var b;_qb(a);b=Xp(Zq,uwb,16,0,15,1);Sob(a.a,new krb(b));return b}
function Hh(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function MY(){lQ.call(this);this.a=new cZ(this);this.i=new Tjb;this.c=new rnb}
function RI(){_e();df.call(this,Vi($doc));(mF(),this.Wc).className='gwt-ListBox'}
function lT(a){var b;b=Oi($doc);uT(b,a);b.className='sheet-tabsheet-tab';return b}
function WG(a){var b;b=(Fh(),Eh).Rd(a);while(!!b&&!FG(b)){b=b.parentNode}return b}
function zW(a,b,c,d,e){var f;f=DU(a,b);if(f){oM(f,c,d,e);return true}return false}
function G0(){try{document.createEvent(pub);return true}catch(a){return false}}
function p$(a,b,c){t9(a.X,a.W.rc,a.W.qc,b);BZ(a,b,c);if(c){oU(a.W);nR(a.R,false)}}
function L_(a,b,c,d){if(a.W.qc==c&&a.W.rc==d){O_(a,c,d,null);b!=null&&HO(a.u,b)}}
function T(a,b,c){S(a);a.o=true;a.p=false;a.k=b;a.t=c;a.n=null;++a.r;ab(a.j,Wf())}
function hT(a,b){eT(a,b.col,b.row);dT(a,b.height);gT(a,b.width);fT(a,b.dx,b.dy)}
function mfb(a,b){this.e=b;this.a=qfb(a);this.a<54?(this.f=$D(a)):(this.c=kgb(a))}
function B0(){this.c=new mnb;this.a=new Z0;e2((!b2&&(b2=new l2),b2));this.d=new y5}
function Sp(){Sp=kE;Rp=new Tp('RTL',0);Qp=new Tp('LTR',1);Pp=new Tp('DEFAULT',2)}
function Iq(){Iq=kE;Eq=dq(wub,wub,524287);Fq=dq(0,0,xub);Gq=bq(1);bq(2);Hq=bq(0)}
function r9(a,b,c,d,e){o9(a.g,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),Kdb(d),Kdb(e)]))}
function u9(a,b,c,d,e){o9(a.k,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),Kdb(d),Kdb(e)]))}
function H9(a,b,c,d,e){o9(a.F,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),Kdb(d),Kdb(e)]))}
function N9(a,b,c,d,e){o9(a.P,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),Kdb(d),Kdb(e)]))}
function Q6(a,b,c){var d;d=peb((Ocb(Nx),Nx.k),Ksb,'.');VY(DP(a.e,d).Ie().Te(),b,c)}
function g2(a,b){var c,d;d=a2(a.a[b]);for(c=new pkb(d);c.a<c.c.a.length;){nkb(c)}}
function og(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=yg(b,c)}while(a.c);a.c=c}}
function pg(a){var b,c;if(a.d){c=null;do{b=a.d;a.d=null;c=yg(b,c)}while(a.d);a.d=c}}
function zG(){var a;a=(iG(),$wnd.location.search);if(!xG||!geb(wG,a)){xG=yG(a);wG=a}}
function VH(a,b,c){a.c=false;c?wh(a.a,b):xh(a.a,b);if(a.d!=a.b){a.d=a.b;Op(a.a,a.b)}}
function GJ(a,b){a.cf(false);TM(a);b.Re(nh((mF(),a.Wc),xtb),nh(a.Wc,Zub));a.cf(true)}
function l1(a,b){return a-(Fh(),Eh).Wd(b)+((b.scrollTop||0)|0)+lj(b.ownerDocument)}
function ueb(a,b){return b==(Aob(),Aob(),zob)?a.toLocaleLowerCase():a.toLowerCase()}
function veb(a,b){return b==(Aob(),Aob(),zob)?a.toLocaleUpperCase():a.toUpperCase()}
function hj(a){return (geb(a.compatMode,Ltb)?a.documentElement:a.body).clientWidth|0}
function gj(a){return (geb(a.compatMode,Ltb)?a.documentElement:a.body).clientHeight|0}
function Wp(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function Rq(a){return a!=null&&(typeof a===qsb||typeof a==='function')&&!(a.mg===oE)}
function Sfb(a,b){if(b.e==0){return Efb}if(a.e==0){return Efb}return Rgb(),Sgb(a,b)}
function Aq(a){if(qq(a,(Iq(),Hq))<0){return -mq(tq(a))}return a.l+a.m*Bsb+a.h*Asb}
function pbb(a,b,c){b<0&&(b=0);(c<0||c>a.length)&&(c=a.length);return a.substr(b,c-b)}
function ZI(a,b,c){if(!!b&&!b.b){return}dJ(a,b);c&&a.e&&a.Ne();!!b&&a.c&&VI(a,b,false)}
function WP(a,b){J1(he(a.tf()),true);!!a.p&&ob(a.p);if(a.q){!!b.a&&zj(b.a);a.q=false}}
function me(a,b){var c=a.parentNode;if(!c){return}c.insertBefore(b,a);c.removeChild(a)}
function Mjb(a,b){var c,d,e,f;_rb(b);for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.Jf(c)}}
function iob(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function EP(a,b){var c;c=(Ocb(b),b.k);$0(a.I,c)||(a.I[c]=O1(b),undefined);return a.I[c]}
function fL(a,b){var c,d;d=rF((mF(),b.Wc));c=sH(a,b);c&&_g(a.c,Ih((Fh(),d)));return c}
function aV(a,b,c){var d;d=Phb(a.e,mvb+b+nvb+c);return !d?RZ(a.a,b)&&UZ(a.a,c):d.locked}
function _U(a,b,c){return (b<=a.ob||b>=CU(a)&&b<=HU(a))&&(c<=a.Rc||c<=QU(a)&&c>=rU(a))}
function NZ(a,b){return !!a.v&&Ojb(a.v,Kdb(b),0)!=-1?0:b>0&&a.g.length>=b?a.g[b-1]:a.q}
function gS(a,b){a.k.style[ztb]=b+(em(),$ub);a.d.style[ztb]=b+$ub;a.j.style[ztb]=b+$ub}
function gE(a,b){typeof window===qsb&&typeof window['$gwt']===qsb&&(window['$gwt'][a]=b)}
function s9(a,b,c,d){o9(a.i,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),(Dcb(),d?true:false)]))}
function xJ(a,b){var c;c=(Fh(),Eh).Td(b);if(Ch(c)){return Zg((mF(),a.Wc),c)}return false}
function fdb(a,b){var c;if(!a){return}b.j=a;var d=_cb(b);if(!d){hE[a]=[b];return}d.kg=b}
function Idb(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function r1(a){var b;if(!a){return '(null)'}b=Pcb(a.kg);return seb(b,leb(b,yeb(46))+1)}
function qg(a){var b;if(a.b){b=a.b;a.b=null;!a.g&&(a.g=[]);yg(b,a.g)}!!a.g&&(a.g=tg(a.g))}
function cW(a,b){var c;WS(a);for(c=0;c<b.a.length;c++){ZS(a,($rb(c,b.a.length),b.a[c]))}}
function UV(a,b,c,d,e){var f,g;cU(a);for(g=b;g<=c;g++){lW(a,g)}for(f=d;f<=e;f++){kW(a,f)}}
function fW(a,b,c,d,e){var f;f=gW(a,b,c,true);hW(a,d,e,true)&&(f=true);if(f){xV(a);rV(a)}}
function shb(a,b){var c,d;_rb(b);for(d=b.Uf().Ie();d.Se();){c=d.Te();a.put(c.ag(),c.bg())}}
function pT(a,b){var c,d,e;e=a.u[b];d=E1(e);c=new T0(e);d+=R0(c)[1];d+=R0(c)[3];return d}
function Mp(a){if(null==a){throw FD(new Zdb('encodedURLComponent cannot be null'))}}
function dE(){eE();var a=cE;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function mj(a){return ((geb(a.compatMode,Ltb)?a.documentElement:a.body).scrollWidth||0)|0}
function jj(a){return ((geb(a.compatMode,Ltb)?a.documentElement:a.body).scrollHeight||0)|0}
function Bi(a){return a.ownerDocument.defaultView.getComputedStyle(a,'').direction=='rtl'}
function Ig(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||rsb}
function LU(a){var b;b=mvb+a.qc+nvb+a.rc;if(jV(a,b)){return DU(a,b)}return sU(a,a.qc,a.rc)}
function Hfb(a){var b;b=Xp(Zq,uwb,16,a.d,15,1);Peb(a.a,0,b,0,a.d);return new $fb(a.e,a.d,b)}
function LK(a){var b,c;c=oh((mF(),a.Wc),evb);b=(_rb(c),c);if(geb('',c)){return null}return b}
function CI(a,b){var c;c=oh((mF(),b.Wc),Qub);geb(Vtb,c)&&(a.a=new DI(a,b),s1((ng(),mg),a.a))}
function JN(a,b){a.f=b;b?Ae((mF(),a.Wc),'inversed',true):Ae((mF(),a.Wc),'inversed',false)}
function eT(a,b,c){var d;a.a=b;a.b=c;(mF(),a.Wc).className=dwb;d=mvb+b+nvb+c;Ae(a.Wc,d,true)}
function De(a,b){a.style.display=b?'':ytb;b?a.removeAttribute(Dtb):a.setAttribute(Dtb,'true')}
function DE(a){var b,c;c=AG('logLevel');b=c==null?null:Jpb(c);b?Gqb(a,b):Gqb(a,(Gpb(),Cpb))}
function _0(c){var a=[];for(var b in c){Object.hasOwnProperty.call(c,b)&&a.push(b)}return a}
function uF(a){mF();var b;b=PF(BF,a);if(!b&&!!a){(Fh(),a).stopPropagation();Eh.Ud(a)}return b}
function CX(a){if(!a.target||a.target.shadowRoot){return a.composedPath()[0]}return a.target}
function jfb(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=jgb(a.f)),a.c).e}
function Aqb(a){if(!rqb){return}Fqb(a,(Gpb(),zpb),'invalid column index, halting parse',null)}
function Mf(a){rf(this);tf(this);this.backingJsObject=a;uf(this,a);this.f=a==null?Hsb:nE(a)}
function lQ(){this.I={};this.r=[];rp((!this.D&&(this.D=new up(this)),this.D),(X0(),W0),this)}
function L9(a,b,c,d,e,f){o9(a.N,$p(Vp(qB,1),tsb,1,5,[Mab(b),Kdb(c),Kdb(d),Kdb(e),Kdb(f)]))}
function dab(a,b,c,d){o9(a.u,$p(Vp(qB,1),tsb,1,5,[(Dcb(),b?true:false),Kdb(c),d?true:false]))}
function d$(a,b,c){t9(a.X,a.W.rc,a.W.qc,b);BZ(a,b,true);oU(a.W);c?mR(a.R,false):nR(a.R,false)}
function b$(a,b,c){t9(a.X,a.W.rc,a.W.qc,b);BZ(a,b,true);oU(a.W);c?oR(a.R,false):lR(a.R,false)}
function b0(a,b){if(b.a){DW(a.b.W,a.a,a.c)}else{a.a=ph(a.b.W.yc);a.c=(a.b.W.yc.scrollTop||0)|0}}
function FU(a,b,c){if(b<=a.ob){return c<=a.Rc?a.Mc:a.c}else if(c<=a.Rc){return a.Oc}return a.yc}
function xfb(a){if(a==0){return Veb[0]}if(a>=0&&a<afb.length){return afb[a]}return new mfb(0,a)}
function XF(){var a;a=(iG(),eG).He();if(a==null||a.length==0){return ''}return bG(a.substr(1))}
function MI(a){var b;b=(mF(),a.Wc).selectedIndex;return b==-1?null:(II(a,b),Cj(a.Wc)[b].value)}
function jH(){var b=$wnd.onresize;$wnd.onresize=psb(function(a){try{pG()}finally{b&&b(a)}})}
function MD(a){if(zsb<a&&a<Asb){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return JD(rq(a))}
function Ofb(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function _gb(a,b){var c,d,e;_rb(b);c=false;for(e=b.Ie();e.Se();){d=e.Te();c=c|a.add(d)}return c}
function pgb(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function oF(a,b,c){mF();var d;d=jF;jF=a;b==lF&&DG((Fh(),a).type)==8192&&(lF=null);c.vd(a);jF=d}
function zg(b,c){ng();function d(){var a=psb(wg)(b);a&&$wnd.setTimeout(d,c)}
$wnd.setTimeout(d,c)}
function cgb(a){_rb(a);if(a.length==0){throw FD(new _db('Zero length BigInteger'))}hgb(this,a)}
function fbb(){fbb=kE;cbb=new gbb('LEFT',0);ebb=new gbb('RIGHT',1);dbb=new gbb('MIDDLE',2)}
function Kbb(){Kbb=kE;Jbb=new Lbb('TEXT',0);Ibb=new Lbb('PREFORMATTED',1);Hbb=new Lbb('HTML',2)}
function oqb(){var a;if(!kqb){kqb=new nqb;a=new Lqb('');Gqb(a,(Gpb(),Cpb));lqb(kqb,a)}return kqb}
function xe(a){var b,c;b=a.className||'';c=ieb(b,yeb(32));if(c>=0){return b.substr(0,c)}return b}
function JD(a){var b;b=a.h;if(b==0){return a.l+a.m*Bsb}if(b==Csb){return a.l+a.m*Bsb-Asb}return a}
function t4(a){if(m4){if(a.q[nyb]||null){return nh(a.q,nyb)}return 0}return (a.q.scrollTop||0)|0}
function _P(a){if(a.v){cM(a.v.a);a.v=null}if(a.u){cM(a.u.a);a.u=null}if(a.t){cM(a.t.a);a.t=null}}
function sg(a){if(!a.j){a.j=true;!a.f&&(a.f=new Ag(a));zg(a.f,1);!a.i&&(a.i=new Cg(a));zg(a.i,50)}}
function UP(a,b){var c;j1(b.a,he(a.tf()));!!b.a&&zj(b.a);Aj(b.a);(c=a,uj(b.a),c).mf(xA).ng();x1()}
function Fob(a,b){var c,d;_rb(b);for(d=new pib((new hib(a)).a);d.b;){c=oib(d);b.Kf(c.ag(),c.bg())}}
function _T(a){var b,c;for(c=new pkb(a);c.a<c.c.a.length;){b=nkb(c);ah(b.d)}a.a=Xp(qB,tsb,1,0,5,1)}
function f1(){this.d=Xp(Zq,uwb,16,4,15,1);this.a=Xp(Zq,uwb,16,4,15,1);this.c=Xp(Zq,uwb,16,4,15,1)}
function b1(a,b){dhb(new Dkb($p(Vp(Zq,2),tsb,22,0,[a])));dhb(new Dkb($p(Vp(Zq,2),tsb,22,0,[b])))}
function Bbb(){Bbb=kE;zbb=new Cbb('DISABLED',0);Abb=new Cbb('MANUAL',1);ybb=new Cbb('AUTOMATIC',2)}
function ZD(a){var b,c,d,e;e=a;d=0;if(e<0){e+=Asb;d=Csb}c=Vq(e/Bsb);b=Vq(e-c*Bsb);return dq(b,c,d)}
function wX(a,b,c,d,e){var f;if(jV(a,mvb+c+nvb+e)){f=PZ(a.a,c,e);c=f.col2;e=f.row2}KR(a.xc,b,c,d,e)}
function KQ(a){var b;b=Wg(a.j);b?GJ(a.e,a.a):s1((ng(),mg),new ZQ(a));!!a.d&&zQ(a.g,vU(a.d,a.b,a.k))}
function K1(a){w1();var b,c;c=a.getElementsByTagName('img');for(b=0;b<c.length;b++){zF(c[b],Fub)}}
function H1(a){w1();return (Fh(),a).type.indexOf(Tvb)!=-1?Nm(a.changedTouches[0]):$h(a.clientX||0)}
function I1(a){w1();return (Fh(),a).type.indexOf(Tvb)!=-1?Om(a.changedTouches[0]):$h(a.clientY||0)}
function Cqb(a){if(tqb){return Xp(RC,dzb,110,0,0,1)}return Sjb(a.a,Xp(RC,dzb,110,a.a.a.length,0,1))}
function yfb(a){if(a==Vq(a)){return xfb(Vq(a))}if(a>=0){return new mfb(0,ysb)}return new mfb(0,Isb)}
function kf(){_e();var a;!hf&&(hf=new lf);a=Ni($doc);if(!a.getContext){return null}return new jf(a)}
function tib(a,b){var c,d;for(c=0,d=a.size();c<d;++c){if(Hob(b,a.getAtIndex(c))){return c}}return -1}
function pi(a){var b=a.ownerDocument.defaultView.getComputedStyle(a,null);return b.direction=='rtl'}
function A1(){w1();if($wnd.document.activeElement){return $wnd.document.activeElement}return null}
function ED(a){var b;if(Oq(a,18)){return a}b=a&&a.__java$exception;if(!b){b=new Qf(a);Gg(b)}return b}
function LZ(a){var b;b='';while(a>0){b=String.fromCharCode(65+(a-1)%26&Nsb)+b;a=(a-1)/26|0}return b}
function Nhb(a,b){var c,d;for(d=b.Ie();d.Se();){c=d.Te();if(lnb(a,c.bg())){return true}}return false}
function Wnb(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{Mnb(a.a,b);--a.c;_mb(a.b)}return c}
function tW(a,b){a.Z=b;b?sh(a.Ec,'noheaders'):dh(a.Ec,'noheaders');if(a.Db){rV(a);xX(a);dX(a);tX(a)}}
function S(a){if(!a.o){return}a.u=a.p;a.n=null;a.o=false;a.p=false;if(a.q){a.q.gd();a.q=null}a.ad()}
function hdb(a){if(a==null){return false}return a.$implements__java_lang_Cloneable||Array.isArray(a)}
function ZH(a,b){if(a.O){throw FD(new ydb('SimplePanel can only contain one child widget'))}a.Me(b)}
function Ce(a,b){if(!a){throw FD(new Kf(Btb))}b=web(b);if(b.length==0){throw FD(new wdb(Ctb))}Ge(a,b)}
function q9(a,b,c,d,e,f,g){o9(a.f,$p(Vp(qB,1),tsb,1,5,[Kdb(b),Kdb(c),Kdb(d),Kdb(e),Kdb(f),Kdb(g)]))}
function dV(a,b,c){return c<=a.Rc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Rc)}
function DR(a){return (mF(),a.Wc).style.display!=ytb||!!a.a&&ke(a.a)||!!a.X&&ke(a.X)||!!a.W&&ke(a.W)}
function nib(a){if(a.a.Se()){return true}if(a.a!=a.d){return false}a.a=new Hnb(a.e.a);return a.a.Se()}
function Rjb(a,b){var c;c=Ojb(a,b,0);if(c==-1){return false}$rb(c,a.a.length);Vrb(a.a,c,1);return true}
function AR(a,b,c){var d,e;if(a==null||a.length<c-1){return 0}e=0;for(d=b;d<c;d++){e+=a[d-1]}return e}
function c2(a,b){var c,d,e,f,g,h;h=b.c;a.a[h]=b;g=b.b;for(d=g,e=0,f=d.length;e<f;++e){c=d[e];a.d[c]=h}}
function oq(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return dq(c&wub,d&wub,e&Csb)}
function zq(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return dq(c&wub,d&wub,e&Csb)}
function jT(a,b){var c,d,e,f,g;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c=lT(d);Vg(a.c,c);Tf(a.u,c)}wT(a)}
function Okb(a){Nkb();var b,c,d;d=0;for(c=a.Ie();c.Se();){b=c.Te();d=d+(b!=null?Q(b):0);d=d|0}return d}
function KI(a){var b;b=a.text;(Fh(),a).hasAttribute(Wub)&&b.length>1&&(b=teb(b,1,b.length-1));return b}
function tq(a){var b,c,d;b=~a.l+1&wub;c=~a.m+(b==0?1:0)&wub;d=~a.h+(b==0&&c==0?1:0)&Csb;return dq(b,c,d)}
function DF(a){mF();EG(kF);!JF&&(JF=new xn);if(!BF){BF=new vp(null,true);KF=new NF}return rp(BF,JF,a)}
function QG(a){MG();var b;b=!uF(a);if(b||!IG){return}nF(a,IG)&&((Fh(),a).stopPropagation(),undefined)}
function U4(a){this.a=a;iJ.call(this,true);He(this,this,(ao(),ao(),_n));He(this,this,(Vn(),Vn(),Un))}
function C4(a){o4();this.s=Xp(Zq,uwb,16,3,15,1);this.b=Xp(Xq,tsb,16,3,15,1);this.p=new snb(new Dkb(a))}
function Rcb(){++Ncb;this.k=null;this.i=null;this.g=null;this.d=null;this.b=null;this.j=null;this.a=null}
function Jcb(a){if(geb(typeof(a),xsb)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function $p(a,b,c,d,e){e.kg=a;e.lg=b;e.mg=oE;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Pkb(a){Nkb();var b,c,d;d=1;for(c=a.Ie();c.Se();){b=c.Te();d=31*d+(b!=null?Q(b):0);d=d|0}return d}
function IY(a,b){var c,d;for(d=a.c.Ie();d.Se();){c=d.Te();b.contains(c)||H$((!a.B&&(a.B=new S_),a.B),c)}}
function Ljb(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}Urb(a.a,a.a.length,c);return true}
function kq(a){var b,c;c=Hdb(a.h);if(c==32){b=Hdb(a.m);return b==32?Hdb(a.l)+32:b+20-10}else{return c-12}}
function gq(a,b,c,d,e){var f;f=xq(a,b);c&&jq(f);if(e){a=iq(a,b);d?(aq=tq(a)):(aq=dq(a.l,a.m,a.h))}return f}
function V3(a,b,c){var d=a[c];if(d!==undefined){var e=function(){};e.prototype=d;a[b]=new e}else{a[b]={}}}
function Jgb(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:PD(HD(a[d],Zyb),HD(b[d],Zyb))?-1:1}
function sS(a,b){a.i.style[Wtb]=(b?(wk(),lk):(wk(),dk)).he();a.g.style[Wtb]=(b?(wk(),lk):(wk(),dk)).he()}
function kS(a,b){De((mF(),a.Wc),b);b?(a.Wc.style[bvb]='',undefined):(a.Wc.style[bvb]=(nl(),iub),undefined)}
function UM(a,b){a.style[Sub]=b.b+(em(),$ub);a.style[Tub]=b.c+$ub;a.style[Atb]=b.d+$ub;a.style[ztb]=b.a+$ub}
function jq(a){var b,c,d;b=~a.l+1&wub;c=~a.m+(b==0?1:0)&wub;d=~a.h+(b==0&&c==0?1:0)&Csb;a.l=b;a.m=c;a.h=d}
function qV(a,b,c){var d;Vg(a.yc,a.hb);uh(a.hb,'cell '+b);xh(a.hb,c);d=a.hb.clientWidth|0;ah(a.hb);return d}
function yY(a){a.c==0?m9(a.b,a.a):a.c==1?n9(a.b,a.a):l9(a.b,a.a);KM(y0(a.g.a.a.C),false);pU(a.d.W,true)}
function O(a){return Tq(a)?wB:Qq(a)?dB:Pq(a)?bB:Nq(a)?a.kg:Zp(a)?a.kg:a.kg||Array.isArray(a)&&Vp(ys,1)||ys}
function FL(){return function(a){var b=this.parentNode;b.onfocus&&$wnd.setTimeout(function(){b.focus()},0)}}
function nnb(a){Xrb(a>=0,'Negative initial capacity');Xrb(true,'Non-positive load factor');Vhb(this)}
function pib(a){this.e=a;this.d=new Znb(this.e.b);this.a=this.d;this.b=nib(this);this.$modCount=a.$modCount}
function l2(){this.a={};this.d={};this.c=new O3;this.b=new Tjb;c2(this,new m2($p(Vp(wB,1),Lsb,2,6,[lxb])))}
function rI(){rI=kE;new sI((Jl(),'center'));new sI('justify');pI=new sI(Sub);new sI('right');qI=pI;oI=qI}
function Rqb(){Rqb=kE;Oqb=new Sqb('CONCURRENT',0);Pqb=new Sqb('IDENTITY_FINISH',1);Qqb=new Sqb('UNORDERED',2)}
function em(){em=kE;dm=new hm;bm=new im;Yl=new jm;Zl=new km;cm=new lm;am=new mm;$l=new nm;Xl=new om;_l=new pm}
function Ep(a){var b,c;if(a.a){try{for(c=new pkb(a.a);c.a<c.c.a.length;){b=nkb(c);b.Jd()}}finally{a.a=null}}}
function NM(a,b){var c,d;AJ(a);for(d=new pkb(a.s);d.a<d.c.a.length;){c=nkb(d);yY(c)}a.s.a=Xp(qB,tsb,1,0,5,1)}
function bhb(a,b){var c,d;_rb(b);for(d=b.Ie();d.Se();){c=d.Te();if(!a.contains(c)){return false}}return true}
function Anb(a,b){var c,d,e,f;for(d=b,e=0,f=d.length;e<f;++e){c=d[e];if(lnb(a,c.ag())){return c}}return null}
function _H(a,b){if(a.O!=b){return false}try{Pe(b,null)}finally{_g(a.Le(),(mF(),b.Wc));a.O=null}return true}
function N4(a,b,c){if(a.b){a.a=new C4($p(Vp(ys,1),tsb,0,2,[]));He(b,a,(Po(),Po(),Oo))}else{a.a=null}O4(a,c)}
function yk(){wk();return $p(Vp(lt,1),tsb,23,0,[lk,dk,gk,hk,jk,kk,mk,nk,ok,rk,tk,sk,vk,pk,qk,uk,fk,ek,ik])}
function pR(a){if(a.d.o){a.d.o=false;OV(a.c)}!lV(a.c)&&!a.d.e&&!!a.d.p&&oZ(a.d.p,MU(a.c))&&nZ(a.d.p,MU(a.c))}
function qb(a,b){if(b<=0){throw FD(new wdb('must be positive'))}!!a.d&&ob(a);a.c=true;a.d=Kdb(wb(ub(a,a.b),b))}
function Oe(a,b){a.Sc&&(mF(),a.Wc.__listener=null,undefined);!!a.Wc&&me(a.Wc,b);a.Wc=b;a.Sc&&(mF(),GG(a.Wc,a))}
function E$(a,b){var c,d;if(a.u.f){LO(a.u);QW(a.W,false)}c=ph(a.W.yc);d=(a.W.yc.scrollTop||0)|0;Gab(a.X,b,c,d)}
function ID(a,b){var c;if(OD(a)&&OD(b)){c=a-b;if(!isNaN(c)){return c}}return qq(OD(a)?ZD(a):a,OD(b)?ZD(b):b)}
function hb(b,c){var d=psb(function(){var a=Wf();b.ed(a)});var e=$wnd.requestAnimationFrame(d,c);return {id:e}}
function NO(a,b){var c,d;d=Cj(LI(a.B)).length;for(c=0;c<d;c++){if(geb(JI(a.B,c),b)){QI(a.B,c);return}}QI(a.B,0)}
function jU(a){var b,c,d;for(d=1;d<=a.Rc;d++){for(c=1;c<=a.ob;c++){b=new xM(a,c,d);Vg(a.Mc,b.d);Kjb(a.Lc,b)}}}
function MT(a,b,c){var d,e,f,g;g=0;for(d=b;d<=c;d++){e=QZ(a.a,d);f=hfb(wfb(e*a.Lb/72));g+=f;a.W[d-1]=f}return g}
function lL(a,b){var c;if(b<0||b>=a.c){throw FD(new Acb)}--a.c;for(c=b;c<a.c;++c){a.a[c]=a.a[c+1]}a.a[a.c]=null}
function aI(a,b){if(b==a.O){return}!!b&&Ne(b);!!a.O&&_H(a,a.O);a.O=b;if(b){mF();Vg(a.Le(),wF(he(a.O)));Pe(b,a)}}
function jX(a,b){if(a.R);else{NK(a.sb,b);a._&&(_U(a,a.qc,a.rc)||iW(a,a.qc,a.rc),s1((ng(),mg),new PX(a,false)))}}
function oX(a){var b,c;for(c=new pib((new hib(a.Kb)).a);c.b;){b=oib(c);GV(a,b.ag(),b.bg());HV(a,b.ag(),b.bg())}}
function qfb(a){var b;ID(a,0)<0&&(a=JD(uq(OD(a)?ZD(a):a)));return b=_D(WD(a,32)),64-(b!=0?Hdb(b):Hdb(_D(a))+32)}
function rS(a,b){a.b=b;a.a.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he();a.d.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he()}
function uS(a,b){a.n=b;a.k.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he();a.p.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he()}
function xS(a,b){a.v=b;a.u.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he();a.A.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he()}
function AS(a,b){a.H=b;a.G.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he();a.J.style[Xtb]=(b?(sm(),qm):(sm(),rm)).he()}
function TI(a,b,c){var d;if(a.i){d=(mF(),$i($doc));sF(a.d,d,b);Vg(d,wF(c))}else{d=pF(a.d);mF();kF.Ce(d,wF(c),b)}}
function pG(){iG();var a,b;if(hG){b=hj($doc);a=gj($doc);if(gG!=b||fG!=a){gG=b;fG=a;ip((!dG&&(dG=new BG),dG))}}}
function KJ(a){if(a.J){cM(a.J.a);a.J=null}if(a.D){cM(a.D.a);a.D=null}if(a.M){a.J=DF(new ZJ(a));a.D=WF(new _J(a))}}
function Gf(a){var b;if(a!=null){b=a.__java$exception;if(b){return b}}return Sq(a,TypeError)?new Ydb(a):new Mf(a)}
function GD(a,b){var c;if(OD(a)&&OD(b)){c=a+b;if(zsb<c&&c<Asb){return c}}return JD(oq(OD(a)?ZD(a):a,OD(b)?ZD(b):b))}
function SD(a,b){var c;if(OD(a)&&OD(b)){c=a*b;if(zsb<c&&c<Asb){return c}}return JD(sq(OD(a)?ZD(a):a,OD(b)?ZD(b):b))}
function YD(a,b){var c;if(OD(a)&&OD(b)){c=a-b;if(zsb<c&&c<Asb){return c}}return JD(zq(OD(a)?ZD(a):a,OD(b)?ZD(b):b))}
function Ae(a,b,c){if(!a){throw FD(new Kf(Btb))}b=web(b);if(b.length==0){throw FD(new wdb(Ctb))}c?dh(a,b):sh(a,b)}
function Yrb(a,b){if(0>a){throw FD(new wdb('fromIndex: 0 > toIndex: '+a))}if(a>b){throw FD(new Ccb(Usb+a+Vsb+b))}}
function pb(a,b){if(b<0){throw FD(new wdb('must be non-negative'))}!!a.d&&ob(a);a.c=false;a.d=Kdb(xb(ub(a,a.b),b))}
function jgb(a){Ffb();if(a<0){if(a!=-1){return new Yfb(-1,-a)}return zfb}else return a<=10?Bfb[Vq(a)]:new Yfb(1,a)}
function Qfb(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function E4(a){var b,c,d,e;b=a.childNodes;e=new Tjb;for(c=0;c<b.length;c++){d=b[c];d.nodeType==1&&Kjb(e,d)}return e}
function ffb(a){var b,c;b=jfb(a);c=a.a-a.e/Yyb;c<-149||b==0?(b*=0):c>129?(b*=Infinity):(b=ldb(kfb(a)));return b}
function yU(a){var b;b=new Tjb;Ljb(b,new jjb(a.Ac));!!a.T&&Ljb(b,new jjb(a.T));!!a.Bc&&Ljb(b,new jjb(a.Bc));return b}
function WI(a,b){var c,d;for(d=new pkb(a.f);d.a<d.c.a.length;){c=nkb(d);if(Zg((mF(),c.Wc),b)){return c}}return null}
function ucb(c){var a=[];for(var b in c){Object.prototype.hasOwnProperty.call(c,b)&&b!='$H'&&a.push(b)}return a}
function z3(a){var b,c;b=P3(a);c=b.Bf(null,$p(Vp(qB,1),tsb,1,5,[]));Oq(c,99)&&d2((!b2&&(b2=new l2),b2),a.a);return c}
function x9(a,b,c,d,e,f){var g;o9(a.q,$p(Vp(qB,1),tsb,1,5,[(g=[],Fob(b,new Pab(g)),g),Kdb(c),Kdb(d),Kdb(e),Kdb(f)]))}
function wkb(a,b,c,d,e,f,g){var h;h=c;while(f<g){h>=d||b<c&&Wmb(a[b],a[h])<=0?(e[f++]=a[b++]):(e[f++]=a[h++])}}
function vkb(a,b,c){var d,e,f;for(d=b+1;d<c;++d){for(e=d;e>b&&Wmb(a[e-1],a[e])>0;--e){f=a[e];a[e]=a[e-1];a[e-1]=f}}}
function Cp(a,b,c){var d,e;e=Ohb(a.d,b);if(!e){e=new mnb;Rhb(a.d,b,e)}d=e.get(c);if(!d){d=new Tjb;e.put(c,d)}return d}
function _5(a){var b,c;if(a==null||a.length==0||geb(Hsb,a)){return null}c=scb(a);b=new GQ;Object.assign(b,c);return b}
function y1(a,b){w1();var c=$wnd.document.elementFromPoint(a,b);c!=null&&c.nodeType==3&&(c=c.parentNode);return c}
function RV(a,b){var c,d;c=b.b;d=b.k;Uhb(a.Bc,mvb+c+nvb+d);NV(a,b);c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb&&mM(sU(a,c,d))}
function eL(a,b){var c,d,e;d=(mF(),$i($doc));c=(e=Zi($doc),JH(e,a.a),KH(e,a.b),e);Vg(d,wF(c));Vg(a.c,wF(d));rH(a,b,c)}
function M(a,b){return Tq(a)?geb(a,b):Qq(a)?ndb(a,b):Pq(a)?(_rb(a),Uq(a)===Uq(b)):Nq(a)?a.Xc(b):Zp(a)?J(a,b):mf(a,b)}
function HY(a){YP(a);FZ((!a.B&&(a.B=new S_),a.B),true);!!a.c&&a.c.clear();a.i.a=Xp(qB,tsb,1,0,5,1);!!a.b&&cM(a.b.a)}
function l_(a,b){a.F=b;a.F?((mF(),a.Wc).className||'').indexOf(Xwb)!=-1||Ae(a.Wc,Xwb,true):Ae((mF(),a.Wc),Xwb,false)}
function Dp(a,b,c){var d,e;e=Ohb(a.d,b);if(!e){return Nkb(),Nkb(),Kkb}d=e.get(c);if(!d){return Nkb(),Nkb(),Kkb}return d}
function Np(a){var b;b=oh(a,'dir');if(heb('rtl',b)){return Sp(),Rp}else if(heb('ltr',b)){return Sp(),Qp}return Sp(),Pp}
function D1(a){w1();var b,c;c=B1(a);if((F0(),!E0&&(E0=new O0),F0(),E0).a.j){b=C1(a);if(b>c&&b<=c+1){return b}}return c}
function G1(a){w1();var b,c;c=E1(a);if((F0(),!E0&&(E0=new O0),F0(),E0).a.j){b=F1(a);if(b>c&&b<=c+1){return b}}return c}
function Kdb(a){var b,c;if(a>-129&&a<128){b=a+128;c=(Mdb(),Ldb)[b];!c&&(c=Ldb[b]=new Bdb(a));return c}return new Bdb(a)}
function wfb(a){cfb();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw FD(new _db('Infinite or NaN'))}return new nfb(''+a)}
function V(){W.call(this,(!db&&(db=!!$wnd.requestAnimationFrame&&!!$wnd.cancelAnimationFrame?new eb:new mb),db))}
function xP(a){RK();TK.call(this);this.a=a;this.Tc==-1?zF((mF(),this.Wc),xub|(this.Wc.__eventBits||0)):(this.Tc|=xub)}
function a_(a,b){b!=null&&b.length!=0?((mF(),a.Wc).style[ztb]=b,undefined):((mF(),a.Wc).style[ztb]='400.0px',undefined)}
function F_(a,b){b!=null&&b.length!=0?((mF(),a.Wc).style[Atb]=b,undefined):((mF(),a.Wc).style[Atb]='500.0px',undefined)}
function FJ(a,b,c){var d;a.H=b;a.N=c;b-=ej($doc);c-=fj($doc);d=(mF(),a.Wc);d.style[Sub]=b+(em(),$ub);d.style[Tub]=c+$ub}
function Tgb(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=Vgb(e,c,d,a[0])):d==1?(e[b]=Vgb(e,a,b,c[0])):Ugb(a,c,e,b,d)}
function T_(a){var b;b=kj($doc);return w1(),(Fh(),a).type.indexOf(Tvb)!=-1?Nm(a.changedTouches[0])+b:$h(a.clientX||0)+b}
function U_(a){var b;b=lj($doc);return w1(),(Fh(),a).type.indexOf(Tvb)!=-1?Om(a.changedTouches[0])+b:$h(a.clientY||0)+b}
function Le(a,b){var c;switch(mF(),DG((Fh(),b).type)){case 16:case 32:c=Eh.Sd(b);if(!!c&&Zg(a.Wc,c)){return}}Xm(b,a,a.Wc)}
function Ib(a,b){var c,d,e,f,g;c=new Jeb;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];Heb(Heb(c,a.kd(d)),' ')}return web(c.a)}
function Lfb(a,b){var c;if(Uq(a)===Uq(b)){return true}if(Oq(b,11)){c=b;return a.e==c.e&&a.d==c.d&&Mfb(a,c.a)}return false}
function pdb(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return a==0?pdb(1/a,1/b):0}return isNaN(a)?isNaN(b)?0:1:-1}
function arb(a){if(a.b){arb(a.b)}else if(a.c){throw FD(new ydb("Stream already terminated, can't be modified or used"))}}
function ufb(a){if(a<Isb){throw FD(new zcb('Overflow'))}else if(a>ysb){throw FD(new zcb('Underflow'))}else{return Vq(a)}}
function xK(){tK();var a;a=Ohb(rK,null);if(a){return a}Whb(rK)==0&&jG(new BK);a=new DK;Rhb(rK,null,a);onb(sK,a);return a}
function yn(a,b){var c;xn.call(this);this.a=b;!Um&&(Um=new xo);c=vo(Um,a);if(!c){c=new Tjb;wo(Um,a,c)}c.add(this);this.b=a}
function JP(a,b,c){var d;d=peb((Ocb(b),b.k),Ksb,'.');!a.H&&(a.H={});null==a.H[d]&&(a.H[d]=new Tjb,undefined);a.H[d].add(c)}
function A$(a,b,c,d,e){var f;f=tP(a.J,d,e,b,c);if(f.col1==b&&f.col2==c&&f.row1==d&&f.row2==e){N9(a.X,d,b,e,c);pb(a.s,200)}}
function sM(a,b,c,d){a.c=b;a.k=c;a.b=!d?'cs0':d.cellStyle;a.o=!d?null:d.value;a.f=!!d&&d.needsMeasure;vM(a);uM(a);a.g=true}
function Vnb(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;_mb(a.b)}else{++a.d}return d}
function Kgb(a,b,c){var d,e;d=HD(c,Zyb);for(e=0;ID(d,0)!=0&&e<b;e++){d=GD(d,HD(a[e],Zyb));a[e]=_D(d);d=WD(d,32)}return _D(d)}
function Fgb(a,b,c){var d,e,f,g;f=0;for(d=b-1;d>=0;d--){g=GD(VD(f,32),HD(a[d],Zyb));e=Bgb(g,c);f=_D(WD(e,32))}return _D(f)}
function dY(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=sU(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&jM(f)}}}
function eY(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=sU(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&wM(f)}}}
function A4(a,b){var c,d,e;for(d=new pkb(a.g);d.a<d.c.a.length;){c=nkb(d);e=c.style;e[yvb]='translate3d(0px,'+b+'px,0px)'}}
function cJ(a){var b,c;if(!a.g){for(c=new pkb(a.f);c.a<c.c.a.length;){b=nkb(c);if(b.b){dJ(a,b);break}}return true}return false}
function DZ(a){var b,c;if(a.e){if(!a.L){return}c=new h0(a);pb(c,Otb);a.L=false;p1(a);b=O1(Xx);o9(b.J,$p(Vp(qB,1),tsb,1,5,[]))}}
function RD(a,b){var c;if(OD(a)&&OD(b)){c=a%b;if(zsb<c&&c<Asb){return c}}return JD((eq(OD(a)?ZD(a):a,OD(b)?ZD(b):b,true),aq))}
function ifb(a,b){var c;a.c=b;a.a=lgb(b);a.a<54&&(a.f=(c=b.d>1?UD(VD(b.a[1],32),HD(b.a[0],Zyb)):HD(b.a[0],Zyb),$D(SD(b.e,c))))}
function fq(a,b){if(a.h==xub&&a.m==0&&a.l==0){b&&(aq=dq(0,0,0));return cq((Iq(),Gq))}b&&(aq=dq(a.l,a.m,a.h));return dq(0,0,0)}
function nE(a){var b;if(Array.isArray(a)&&a.mg===oE){return Pcb(O(a))+'@'+(b=Q(a)>>>0,b.toString(16))}return a.toString()}
function Bqb(a){var b,c;if(a.b){return a.b}c=tqb?null:a.d;while(c){b=tqb?null:c.b;if(b){return b}c=tqb?null:c.d}return Gpb(),Cpb}
function aT(a){var b=a.length;var c=0;var d=0;var e=0;while(c<b){d=a.charCodeAt(c);d>47&&d<58&&(e=e*10+d-48);c++}return e}
function C3(a,b){var c,d;d=a;if(b!=null&&b.length!=0){d+='<';for(c=0;c<b.length;c++){c!=0&&(d+=',');d+=''+b[c]}d+='>'}return d}
function gR(a,b,c){var d;d=OZ(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}iW(a.c,b,c);qR(a,b,c,(vU(a.c,b,c),d))}
function c$(a){var b;if(!a.C&&!a.u.f){a.C=true;a.c=true;if(a.t){a.t=false}else{MW(a.W,false,(b=LK(a.u.j),b==null?'':b));JO(a.u)}}}
function VI(a,b,c){var d;if(!b.b){return}dJ(a,b);if(c&&!!b.a){dJ(a,null);(iI(),hI).Ve((mF(),a.Wc));d=b.a;vg((ng(),mg),new mJ(d))}}
function ahb(a,b,c){var d,e;for(e=a.Ie();e.Se();){d=e.Te();if(Uq(b)===Uq(d)||b!=null&&M(b,d)){c&&e.Ue();return true}}return false}
function fgb(a){var b,c,d;if(a<Dfb.length){return Dfb[a]}c=a>>5;b=a&31;d=Xp(Zq,uwb,16,c+1,15,1);d[c]=1<<b;return new $fb(1,c+1,d)}
function lgb(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=Ofb(a);if(d==a.d-1){--c;c=c|0}}b-=Hdb(c);return b}
function CS(a){var b,c;c=NZ(a.F.q,a.e);for(b=a.e+1;b<=a.f;b++){c+=NZ(a.F.q,b)}a.G.style[Atb]=c+1+(em(),$ub);a.a.style[Atb]=c+1+$ub}
function bK(a){if(!a.i){aK(a);a.c||xH((tK(),xK()),a.a)}(wJ(),vJ)._e(he(a.a),'rect(auto, auto, auto, auto)');he(a.a).style[bvb]=hub}
function ncb(){this.b=(Bbb(),zbb);this.c=new mnb;this.c.put('transport',(dcb(),bcb).a);this.c.put('fallbackTransport',_bb.a)}
function b5(){mI.call(this);(mF(),this.Wc).className='v-label';this.Tc==-1?zF(this.Wc,241|(this.Wc.__eventBits||0)):(this.Tc|=241)}
function csb(a,b,c){if(a<0||b>c){throw FD(new Bcb(Ysb+a+Zsb+b+', size: '+c))}if(a>b){throw FD(new wdb(Ysb+a+' > toIndex: '+b))}}
function IS(a,b){switch(mF(),DG((Fh(),b).type)){case Bsb:case Kub:uV(a.c,b);case 8:case 8192:TW(a.c,b);break;case 64:tV(a.c,b);}}
function E1(a){w1();if(a.getBoundingClientRect){var b=a.getBoundingClientRect();return b.right-b.left}else{return a.offsetWidth}}
function qJ(){qJ=kE;eF();new aF('data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=')}
function PV(a){var b,c,d;for(c=new pkb(a);c.a<c.c.a.length;){b=nkb(c);d=Ih((Fh(),b));!!d&&d.removeChild(b)}a.a=Xp(qB,tsb,1,0,5,1)}
function XY(a,b){var c,d;if(a.a.e){c=(w1(),H1(a.a.e));d=I1(a.a.e)}else{c=(w1(),H1(a.a.f));d=I1(a.a.f)}uZ(y0(a.a.C),new eZ(a,b),c,d)}
function sH(a,b){var c;if(b.Vc!=a){return false}try{Pe(b,null)}finally{c=(mF(),b.Wc);_g((null,Ih((Fh(),c))),c);mL(a.o,b)}return true}
function ukb(a){var b,c,d,e,f;if(a==null){return 0}f=1;for(c=a,d=0,e=c.length;d<e;++d){b=c[d];f=31*f+(b!=null?Q(b):0);f=f|0}return f}
function Z_(a,b,c){var d,e;if(a.a.K){for(e=new pkb(a.a.K);e.a<e.c.a.length;){d=nkb(e);if(d.col1==b&&d.row1==c){return d}}}return null}
function pX(a,b){var c,d;if(b){pV(a.jc);pV(a.Pc);pV(a.d);for(d=new pkb(a.Lc);d.a<d.c.a.length;){c=nkb(d);!!c&&(c.g=true)}}pb(a.Jb,20)}
function Bp(a,b,c,d){var e,f,g;e=Dp(a,b,c);f=e.remove(d);f&&e.isEmpty()&&(g=Ohb(a.d,b),g.remove(c),g.isEmpty()&&Thb(a.d,b),undefined)}
function HZ(a,b,c,d){var e;e=new Ceb;Beb(e,$wnd.Math.abs(d-c)+1);e.a+='R';e.a+=' x ';Beb(e,$wnd.Math.abs(b-a)+1);e.a+='C';return e.a}
function Gpb(){Gpb=kE;xpb=new Lpb;ypb=new Opb;zpb=new Rpb;Apb=new Upb;Bpb=new Xpb;Cpb=new $pb;Dpb=new bqb;Epb=new eqb;Fpb=new hqb}
function bV(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb||b<=a.ob&&c<=a.Rc||b>a.ob&&b<=a.xb&&c<=a.Rc||c>a.Rc&&c<=a.zb&&b<=a.ob}
function zU(a){if(a.V==-1){if(a.Lb==0){Xg(a.Mb)&&(a.Lb=(a.Mb.offsetWidth||0)|0);a.Lb==0&&(a.Lb=96)}a.V=Vq(a.a.r*a.Lb/72)}return a.V}
function BR(a){if(gV(a.Q,a.e,a.K)){return he(a.X)}if(cV(a.Q,a.e,a.K)){return he(a.a)}if(fV(a.Q,a.e,a.K)){return he(a.W)}return he(a.b)}
function cg(){var a;if(Xf!=0){a=Wf();if(a-$f>2000){$f=a;_f=$wnd.setTimeout(lg,10)}}if(Xf++==0){og((ng(),mg));return true}return false}
function Mh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollTop;c=c.parentNode}while(a){b+=a.offsetTop;a=a.offsetParent}return b}
function Lh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollLeft;c=c.parentNode}while(a){b+=a.offsetLeft;a=a.offsetParent}return b}
function B1(a){var b;if(a.getBoundingClientRect!=null){var c=a.getBoundingClientRect();b=c.bottom-c.top}else{b=a.offsetHeight}return b}
function Lg(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function edb(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function ngb(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=Xp(Zq,uwb,16,e,15,1);ogb(d,a.a,c,b);f=new $fb(a.e,e,d);Ifb(f);return f}
function Aeb(a,b,c){var d,e,f,g;f=b+c;esb(b,f,a.length);g='';for(e=b;e<f;){d=$wnd.Math.min(e+10000,f);g+=xeb(a.slice(e,d));e=d}return g}
function pV(a){var b,c,d,e;for(e=new pkb(a);e.a<e.c.a.length;){d=nkb(e);for(c=new pkb(d);c.a<c.c.a.length;){b=nkb(c);!!b&&(b.g=true)}}}
function aU(a){var b,c,d,e;WS(a.Fb);for(d=(e=(new jjb(a.Eb)).a.Uf().Ie(),new ojb(e));d.a.Se();){c=(b=d.a.Te(),b.bg());ah(c.d)}Vhb(a.Eb)}
function udb(a){var b;b=ldb(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}
function Fqb(a,b,c,d){(rqb?b.Rf()>=Bqb(a).Rf():sqb?b.Rf()>=(Gpb(),800):vqb?b.Rf()>=(Gpb(),900):uqb&&b.Rf()>=(Gpb(),Otb))&&xqb(a,b,c,d)}
function Eqb(a,b,c){(rqb?b.Rf()>=Bqb(a).Rf():sqb?b.Rf()>=(Gpb(),800):vqb?b.Rf()>=(Gpb(),900):uqb&&b.Rf()>=(Gpb(),Otb))&&xqb(a,b,c,null)}
function wf(a,b,c){var d,e,f,g,h;for(e=(a.i==null&&(a.i=(Fg(),h=Eg.Ld(a),Hg(h))),a.i),f=0,g=e.length;f<g;++f){d=e[f];b.xe(c+'\tat '+d)}}
function DY(a,b,c){switch(c.type){case 'IMAGE':xZ((!a.B&&(a.B=new S_),a.B),b,new zI(z0(a.C,b)),c);break;case 'COMPONENT':{Nkb();Ykb()}}}
function R0(a){var b;b=$p(Vp(Zq,1),uwb,16,15,[0,0,0,0]);b[0]=Q0(a,svb);b[1]=Q0(a,gwb);b[2]=Q0(a,'marginBottom');b[3]=Q0(a,rvb);return b}
function Sjb(a,b){var c,d;d=a.a.length;b.length<d&&(b=Wrb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function Ckb(a,b){var c,d;d=a.a.length;b.length<d&&(b=Wrb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function AU(a,b){var c,d;d=0;for(c=new pkb(b);c.a<c.c.a.length;){nkb(c);if(!SZ(a.a,d+1)){return $rb(d,b.a.length),b.a[d]}++d}return null}
function rU(a){var b,c,d;d=a.zb;b=fh(a.yc);for(c=a.jc.a.length-1;c>0;c--){if(fh(Njb(Njb(a.jc,c),0).d)<=b){return d}else{--d}}return a.zb}
function Sbb(){Sbb=kE;Pbb=new Tbb('INFO',0);Rbb=new Tbb(Uyb,1);Obb=new Tbb('ERROR',2);Nbb=new Tbb('CRITICAL',3);Qbb=new Tbb('SYSTEM',4)}
function Udb(a){var b,c;if(ID(a,-129)>0&&ID(a,128)<0){b=_D(a)+128;c=(Wdb(),Vdb)[b];!c&&(c=Vdb[b]=new Ndb(a));return c}return new Ndb(a)}
function kgb(a){Ffb();if(ID(a,0)<0){if(ID(a,-1)!=0){return new _fb(-1,TD(a))}return zfb}else return ID(a,10)<=0?Bfb[_D(a)]:new _fb(1,a)}
function Gfb(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*Jgb(a.a,b.a,a.d)}
function Mcb(a){if(a>=48&&a<48+$wnd.Math.min(10,10)){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function idb(a){var b;b=typeof(a);if(geb(b,vsb)||geb(b,wsb)||geb(b,xsb)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function heb(a,b){_rb(a);if(b==null){return false}if(geb(a,b)){return true}return a.length==b.length&&geb(a.toLowerCase(),b.toLowerCase())}
function RQ(a,b,c){var d;d=a.e.r;!!d&&Oq(d,158)&&rX(d,a,a.k,a.b,b,c);sh((mF(),a.Wc),'c'+a.b+'r'+a.k);a.b=c;a.k=b;dh(a.Wc,'c'+a.b+'r'+a.k)}
function CR(a,b,c){var d,e,f,g;g=y1(b,c);if(g){d=(Fh(),g).getAttribute(Jtb)||'';_S(a.Q.wb,d);e=a.Q.wb.a;f=a.Q.wb.b;e!=0&&f!=0&&VR(a,e,f)}}
function tbb(){tbb=kE;var b;sbb='8.20.1';b=reb(sbb,'[-.]',4);mdb(b[0]);mdb(b[1]);try{mdb(b[2])}catch(a){a=ED(a);if(!Oq(a,46))throw FD(a)}}
function CY(a,b){var c,d;for(d=b.keySet().Ie();d.Se();){c=d.Te();a.c.contains(c)?N_((!a.B&&(a.B=new S_),a.B),c,b.get(c)):DY(a,c,b.get(c))}}
function sX(a,b,c){var d,e,f;for(e=new pkb(b);e.a<e.c.a.length;){d=nkb(e);f=mvb+d.c+nvb+d.k;!!c&&Tnb(c.b,f)?pM(d):!!a.r&&Qhb(a.r,f)&&kM(d)}}
function YZ(a,b){var c,d;a.A.length>b?(c=a.A[b]):(c=0);a._.length>b?(d=a._[b]):(d=0);YV(a.W,c,d);(c!=0||d!=0)&&s1((ng(),mg),new d0(a,c,d))}
function QW(a,b){a._=false;a.ab=false;bT(a.$,swb,0);bf(a.sb,false);NK(a.sb,'');ue(a.sb,'0');pe(a.sb,'');qe(a.sb,'');b&&s1((ng(),mg),new TX(a))}
function IR(a,b,c,d,e){a.G=b;a.I=d;a.H=c;a.J=e;iS(a.B,b,c,d,e);a.ab>0&a.r>0&&iS(a.D,b,c,d,e);a.ab>0&&iS(a.F,b,c,d,e);a.r>0&&iS(a.A,b,c,d,e)}
function Vgb(a,b,c,d){Rgb();var e,f;e=0;for(f=0;f<c;f++){e=GD(SD(HD(b[f],Zyb),HD(d,Zyb)),HD(_D(e),Zyb));a[f]=_D(e);e=XD(e,32)}return _D(e)}
function KS(a,b,c,d,e){mF();kF.Ge(b,cwb);b.__listener=a;kF.Ge(c,cwb);c.__listener=a;kF.Ge(d,cwb);d.__listener=a;kF.Ge(e,cwb);e.__listener=a}
function nY(a,b){var c;c=Ih((Fh(),b))?$S(jh(Ih(b))):0;if(a.a.ac||c==1){return AZ(a.a.a)}else if(a.a._b||c==2){return zZ(a.a.a)}return false}
function P3(a){var b;b=(!b2&&(b2=new l2),b2).c.b[p3(new r3(a,'!new'))];if(!b){throw FD(new v3('There is no constructor for '+a.b))}return b}
function Q3(a){var b;b=(!b2&&(b2=new l2),b2).c.b[a.b.a+'.'+a.a];if(!b){throw FD(new v3('There is no invoker for '+(a.b.b+'.'+a.a)))}return b}
function S3(a){var b;b=(!b2&&(b2=new l2),b2).c.e[a.b.a+'.'+a.a];if(!b){throw FD(new v3('There is no return type for '+(a.b.b+'.'+a.a)))}return b}
function scb(b){var c;try{return c=$wnd.JSON.parse(b),c}catch(a){a=ED(a);if(Oq(a,21)){throw FD(new vcb("Can't parse "+b))}else throw FD(a)}}
function BP(b){var c,d,e;try{e=OP(b);d=z3(e);return d}catch(a){a=ED(a);if(Oq(a,79)){c=a;throw FD(new zdb(Mvb+Qcb(b.kg)+Nvb,c))}else throw FD(a)}}
function agb(a){Ffb();if(a.length==0){this.e=0;this.d=1;this.a=$p(Vp(Zq,1),uwb,16,15,[0])}else{this.e=1;this.d=a.length;this.a=a;Ifb(this)}}
function Yfb(a,b){this.e=a;if(b<_yb){this.d=1;this.a=$p(Vp(Zq,1),uwb,16,15,[b|0])}else{this.d=2;this.a=$p(Vp(Zq,1),uwb,16,15,[b%_yb|0,b/_yb|0])}}
function $T(a){var b,c,d,e;for(c=(e=(new $ib(a.t.a)).a.Uf().Ie(),new ejb(e));c.a.Se();){b=(d=c.a.Te(),d.ag());sh(b.d,kwb)}Vhb(a.t.a);Vhb(a.u.a)}
function i5(){bI.call(this);new f5(200,new p5);(mF(),this.Wc).tabIndex=-1;!this.b&&(this.b=D4(this,$p(Vp(ys,1),tsb,0,2,[])));M4(this.b,this.Wc)}
function Op(a,b){switch(b.c){case 0:{a['dir']='rtl';break}case 1:{a['dir']='ltr';break}case 2:{Np(a)!=(Sp(),Pp)&&(a['dir']='',undefined);break}}}
function aK(a){if(a.i){if(a.a.G){Vg($doc.body,a.a.B);a.f=lG(a.a.C);WJ();a.b=true}}else if(a.b){_g($doc.body,a.a.B);cM(a.f.a);a.f=null;a.b=false}}
function uL(){var a,b;uL=kE;eF();new aF((ag(),a='__gwtDevModeHook:'+$moduleName+':moduleBase',b=$wnd||self,b[a]||$moduleBase)+'clear.cache.gif')}
function xO(a,b){var c,d,e,f,g;g=new Tjb;for(d=reb(b,'[^A-z0-9:!]+',0),e=0,f=d.length;e<f;++e){c=d[e];sO(a,c)&&(g.a[g.a.length]=c,true)}return g}
function Q(a){return Tq(a)?nsb(a):Qq(a)?Vq((_rb(a),a)):Pq(a)?(_rb(a),a)?1231:1237:Nq(a)?a.Zc():Zp(a)?hsb(a):!!a&&!!a.hashCode?a.hashCode():hsb(a)}
function Mq(a,b){if(Tq(a)){return !!Lq[b]}else if(a.lg){return !!a.lg[b]}else if(Qq(a)){return !!Kq[b]}else if(Pq(a)){return !!Jq[b]}return false}
function KU(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;var c=[];for(var d=0;d<b.length;d++){c.push(b[d].cssText)}return c.join(' ')}
function WS(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;while(b.length>0){a.sheet.deleteRule?a.sheet.deleteRule(0):a.sheet.removeRule(0)}}
function vW(a,b){a.ob=b;HR(a.xc,b);b>0?bT(a.$,'.'+a.zc+' .top-left-pane .cell.col'+b+', .'+a.zc+' .bottom-left-pane .cell.col'+b,1):bT(a.$,swb,1)}
function aX(a,b,c,d,e){var f,g,h;if(b==16){kI(a.rb,e);g=mvb+c+nvb+d;h=DU(a,g);h?(f=h.d):(f=sU(a,c,d).d);GJ(a.qb,new NX(a,f))}else{KM(a.qb,false)}}
function H_(a,b,c,d){if(a.D){if(a.a!=c){vT(a.V,b,d);tT(a.V,c)}else (a.T==null||!tkb(a.T,b))&&vT(a.V,b,false)}else{jT(a.V,b);tT(a.V,c)}a.T=b;a.a=c}
function WW(a,b,c){var d,e,f;for(e=new pkb(b);e.a<e.c.a.length;){d=nkb(e);f=mvb+d.c+nvb+d.k;!!c&&Qhb(c.a,f)?qM(d):!!a.tb&&a.tb.contains(f)&&lM(d)}}
function nsb(a){lsb();var b,c,d;c=':'+a;d=ksb[c];if(d!=null){return Vq((_rb(d),d))}d=isb[c];b=d==null?msb(a):Vq((_rb(d),d));osb();ksb[c]=b;return b}
function YV(a,b,c){a.Db=false;Vhb(a.e);Vhb(a.pc);Xg(a.Mb)&&(a.Lb=(a.Mb.offsetWidth||0)|0);OV(a);KR(a.xc,1,1,1,1);a.V=-1;s1((ng(),mg),new lY(a,b,c))}
function jg(a,b){ag();var c;c=pf;if(c){if(c==Zf){return}Fqb(c.a,(Gpb(),Epb),a.Fd(),a);return}if(b){ig(Oq(a,81)?a.Hd():a)}else{Oeb();vf(a,Neb,'','')}}
function Jp(a){var b,c,d;Lf.call(this,Kp(a),a.isEmpty()?null:a.Ie().Te());this.a=a;d=0;for(c=a.Ie();c.Se();){b=c.Te();if(d++==0){continue}sf(this,b)}}
function iT(a,b){bI.call(this);(mF(),a.Wc).style[Atb]='100%';a.Wc.style[ztb]='100%';this.Wc.style[lvb]=ytb;a.Wc.style[lvb]='all';ZH(this,a);hT(this,b)}
function eU(a){var b,c,d,e;for(e=a.Rc>0?a.Rc+1:1;e<=a.zb;e++){d=new Tjb;for(c=1;c<=a.ob;c++){b=new xM(a,c,e);Vg(a.c,b.d);d.a[d.a.length]=b}Kjb(a.d,d)}}
function kU(a){var b,c,d,e;for(e=1;e<=a.Rc;e++){d=new Tjb;for(c=a.ob>0?a.ob+1:1;c<=a.xb;c++){b=new xM(a,c,e);Vg(a.Oc,b.d);d.a[d.a.length]=b}Kjb(a.Pc,d)}}
function chb(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=Wrb(new Array(f),b));e=b;d=a.Ie();for(c=0;c<f;++c){e[c]=d.Te()}b.length>f&&(b[f]=null);return b}
function QM(a,b,c){var d;d=(mF(),a.Wc).style;d[rvb]=(GM==-1&&(GM=VM(Sub)),-GM+(em(),$ub));d[svb]=(HM==-1&&(HM=VM(Tub)),-HM+$ub);FJ(a,b,c);MM(a,a.F?0:1)}
function WU(a,b,c){var d,e,f,g;g=y1(b,c);if(g){d=(Fh(),g).getAttribute(Jtb)||'';_S(a.wb,d);e=a.wb.a;f=a.wb.b;if(e!=0&&f!=0){y$(a.a,e,f);a.Ic=e;a.Jc=f}}}
function He(a,b,c){var d;d=EF(c.b);d==-1?ve(a,c.b):a.Tc==-1?zF((mF(),a.Wc),d|(a.Wc.__eventBits||0)):(a.Tc|=d);return rp(!a.Uc?(a.Uc=new up(a)):a.Uc,c,b)}
function iq(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return dq(c,d,e)}
function BZ(a,b,c){a.C=false;LO(a.u);a.t=false;if(!lV(a.W)){b==null&&(b='');a.Q=geb(b.substr(0,1),'=')||geb(b.substr(0,1),'+');QW(a.W,c);a.Q||vX(a.W,b)}}
function $5(a){var b,c,d;b=crb(orb(new rrb(null,new npb(Z5(a,new v6))),new s6));d=Xp(Yq,tsb,16,b.length,15,1);for(c=0;c<b.length;c++){d[c]=b[c]}return d}
function mS(a){var b,c;c=NZ(a.p.q,a.b);for(b=a.b+1;b<=a.c;b++){c+=NZ(a.p.q,b)}a.k.style[Atb]=c+1+(em(),$ub);a.q.style[Atb]=c+1+$ub;a.a.style[Atb]=c+1+$ub}
function Yp(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function oeb(a,b,c){var d,e;d=peb(b,'([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])','\\\\$1');e=peb(peb(c,'\\\\','\\\\\\\\'),Ksb,'\\\\$');return peb(a,d,e)}
function iX(a){var b,c;c=rF(he(a.sb));a.rc<=a.Rc?a.qc<=a.ob?(b=a.Mc):(b=a.Oc):a.qc<=a.ob?(b=a.c):(b=a.yc);if(c!=b){_g(c,he(a.sb));mF();Vg(b,wF(he(a.sb)))}}
function p1(a){var b,c,d,e;e=(w0(),w0(),v0);for(c=new pkb(e);c.a<c.c.a.length;){b=nkb(c);d=b.a;!a?null:(Y0(d,(mF(),a.Wc).tkPid),null);continue}return null}
function QU(a){var b,c,d,e,f;d=a.db;b=ih(a.yc);for(f=new pkb(a.jc);f.a<f.c.a.length;){e=nkb(f);c=AU(a,e);if(!!c&&ih(c.d)>=b){return d}else{++d}}return a.db}
function Y_(a,b,c){var d,e;if(a.a.K){for(e=new pkb(a.a.K);e.a<e.c.a.length;){d=nkb(e);if(d.col1<=b&&d.row1<=c&&d.col2>=b&&d.row2>=c){return d}}}return null}
function wcb(a){var b;if(a==null){return false}b=typeof(a);return geb(b,vsb)||geb(b,wsb)||geb(b,xsb)||a.$implements__java_io_Serializable||Array.isArray(a)}
function cK(a){aK(a);if(a.i){he(a.a).style[Qtb]=Stb;a.a.N!=-1&&a.a.Qe(a.a.H,a.a.N);wH((tK(),xK()),a.a)}else{a.c||xH((tK(),xK()),a.a)}he(a.a).style[bvb]=hub}
function jbb(a,b){var c,d;if(b.indexOf('android')==-1){return}c=pbb(b,b.indexOf('android ')+8,b.length);c=pbb(c,0,c.indexOf(';'));d=reb(c,'\\.',0);nbb(a,d)}
function mU(a,b,c){var d;++b;++c;d=mvb+b+nvb+c;if(Qhb(a.b,d)){a.o=true;a.Q=Phb(a.b,d);tN(a.Q,true)}else{a.o=true;a.k=b;a.n=c;HW(a,b,c);a.Q=a.q;tN(a.q,true)}}
function LV(a){var b,c,d,e;if(a.Bc){for(e=(c=(new jjb(a.Bc)).a.Uf().Ie(),new ojb(c));e.a.Se();){d=(b=e.a.Te(),b.bg());d.e.M&&!!d.d&&bV(d.d,d.b,d.k)&&KQ(d)}}}
function DU(a,b){var c,d,e,f;for(d=(f=(new jjb(a.Eb)).a.Uf().Ie(),new ojb(f));d.a.Se();){c=(e=d.a.Te(),e.bg());if(geb(b,mvb+c.c+nvb+c.k)){return c}}return null}
function Z5(a,b){var c,d,e,f,g;d=new Tjb;if(a==null||a.length==0||geb(Hsb,a)){return d}e=scb(a);for(c=0;c<e.length;c++){f=(g=e[c],g);Kjb(d,b.Hf(f))}return d}
function nq(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&wub;a.m=d&wub;a.h=e&Csb;return true}
function $S(b){try{var c=b.charAt(0);if(c==='r'){c=b.charAt(1);if(c==='h'){return 1}}else if(c==='c'){c=b.charAt(1);if(c==='h'){return 2}}}catch(a){}return 0}
function yK(a){tK();var b;b=Ohb(rK,a);if(b){if(!a||(mF(),b.Wc==a)){return b}}Whb(rK)==0&&jG(new BK);!a?(b=new DK):(b=new uK(a));Rhb(rK,a,b);onb(sK,b);return b}
function OP(b){var c;try{return S3(new r3(new A3(b.kg),'getState'))}catch(a){a=ED(a);if(Oq(a,79)){c=a;throw FD(new zdb(Mvb+Qcb(b.kg)+Nvb,c))}else throw FD(a)}}
function JR(a,b){if(b==(ke(a.B)||!!a.A&&ke(a.A)||!!a.F&&ke(a.F)||!!a.D&&ke(a.D))){return}kS(a.B,b);!!a.D&&kS(a.D,b);!!a.F&&kS(a.F,b);!!a.A&&kS(a.A,b);LR(a,!b)}
function Z1(a,b){var c=a.split('.');while(typeof b==qsb){var d=c.shift();if(!(d in b)){return false}else if(c.length==0){return true}else{b=b[d]}}return false}
function PS(a,b){var c,d;c=vj(b.a);if(a.b._){if(c==13){b$(a.b.a,(d=LK(a.b.sb),d==null?'':d),wj(b.a))}else{UU(a.b);PO(a.a,true);JO(a.a);QO(a.a);kO(a.a)}}Aj(b.a)}
function rT(a,b){if(b==null){a.f.style[Wtb]=(wk(),ytb);a.c.style[gwb]=(em(),_ub)}else{a.c.style[gwb]=(em(),'206.0px');a.f.style[Wtb]=(wk(),'inline');xh(a.f,b)}}
function vX(a,b){var c,d,e;e=LU(a);(eV(a,a.qc,a.rc)||dV(a,a.qc,a.rc))&&!!e&&nM(e,b);d=a.Rc>0?0:a.bb;for(;d<a.qc;d++){c=sU(a,d,a.rc);!!c&&(c.g=true)}pX(a,false)}
function N0(a){if(!a.b){return false}if(a.a.t==5&&a.a.s&&K0(a)>=534){return false}if(a.a.t==4&&a.a.s&&a.a.u>=6){return false}if(a.a.j){return false}return true}
function KD(a,b){var c;if(OD(a)&&OD(b)){c=a/b;if(zsb<c&&c<Asb){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return JD(eq(OD(a)?ZD(a):a,OD(b)?ZD(b):b,false))}
function OV(a){var b,c;if(a.R){a.R=false;null.ng().ng();null.ng();null.ng();if(a.Db){c=LU(a);if(c){b=Phb(a.e,mvb+a.qc+nvb+a.rc);nM(c,!b?null:b.value)}}a.S=null}}
function mbb(a,b){var c,d;if(b.indexOf('os ')==-1||b.indexOf(' like mac')==-1){return}c=pbb(b,b.indexOf('os ')+3,b.indexOf(' like mac'));d=reb(c,'_',0);nbb(a,d)}
function yM(a,b,c,d){this.n=a;this.c=b;this.k=c;this.d=Oi($doc);if(!d){this.o=null}else{this.f=d.needsMeasure;this.o=d.value;this.b=d.cellStyle}uM(this);vM(this)}
function Hcb(a,b){var c,d;Dcb();return Tq(a)?(c=(_rb(a),a),d=(_rb(b),b),c==d?0:c<d?-1:1):Qq(a)?pdb((_rb(a),a),(_rb(b),b)):Pq(a)?Gcb((_rb(a),a),(_rb(b),b)):a.ge(b)}
function _V(a){var b,c,d;d=new Tjb;hU(a,a.w,d);c=OT(a);iU(a,d,a.db,a.zb,c);b=NT(a);gU(a,d,a.bb,a.xb,b);a.ob>0&&gU(a,d,1,a.ob,0);a.Rc>0&&iU(a,d,1,a.Rc,0);cW(a.w,d)}
function qhb(a,b){var c,d,e;c=b.ag();e=b.bg();d=a.get(c);if(!(Uq(e)===Uq(d)||e!=null&&M(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function qq(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function jV(a,b){var c,d,e,f;for(d=(f=(new jjb(a.Eb)).a.Uf().Ie(),new ojb(f));d.a.Se();){c=(e=d.a.Te(),e.bg());if(geb(b,mvb+c.c+nvb+c.k)){return true}}return false}
function JW(a,b,c,d,e,f){var g,h,i,j,k;for(k=e;k<=f;k++){for(g=c;g<=d;g++){j=mvb+g+nvb+k;if(Tnb(b.b,j)){jV(a,j)?(h=DU(a,j)):(h=sU(a,g,k));i=Unb(b.b,j);HT(a,h,i)}}}}
function s5(a){if(a.b){ob(a.b);a.b=null}if((!a.J&&(a.J=BP(a)),a.J).i>=0){a.b=new I5(a);qb(a.b,(!a.J&&(a.J=BP(a)),a.J).i)}else{null.ng(new ubb(a.F,(Ocb(NA),NA.k)))}}
function GI(a,b){Oe(a,Ri($doc));IF((mF(),a.Wc),Fub);a.Tc==-1?zF(a.Wc,133398655|(a.Wc.__eventBits||0)):(a.Tc|=133398655);!!a.a&&(a.Wc[Qub]='',undefined);oj(a.Wc,b.a)}
function KT(a,b,c){var d,e;e=a.Rc>=c.b;d=a.ob>=c.a;e&&d?Vg(a.Mc,(mF(),c.Wc)):e?Vg(a.Oc,(mF(),c.Wc)):d?Vg(a.c,(mF(),c.Wc)):Vg(a.yc,(mF(),c.Wc));Pe(c,a);Shb(a.Ac,b,c)}
function Ne(a){if(!a.Vc){tK();pnb(sK,a)&&vK(a)}else if(Oq(a.Vc,31)){a.Vc.Je(a)}else if(a.Vc){throw FD(new ydb("This widget's parent does not implement HasWidgets"))}}
function W3(a,b){var c;if(CF(b.d)==8){cM(a.e.a);c=z1(b.d);!!a.d&&c==a.d?(a.g=true):Dqb(Mqb((Ocb(hz),hz.k)),'Ignoring mouseup from '+c+' when mousedown was on '+a.d)}}
function gJ(a,b){var c,d,e,f;if(!a.i){return}d=Ojb(a.b,b,0);if(d==-1){return}c=a.i?a.d:pF(a.d);f=(mF(),kF.ze(c,d));e=kF.Ae(f);e==2&&_g(f,kF.ze(f,1));b.Wc['colSpan']=2}
function p4(a,b,c){var d,e,f;$wnd.Math.abs(b-c);e=350;e<=0&&(e=1);Dqb(Mqb((Ocb(wz),wz.k)),'Animate '+e+' '+c+' '+b);f=-b+a.n;d=-c+a.n;if(m4){d-=a.n;f-=a.n}B4(a,e,d,f)}
function _fb(a,b){this.e=a;if(LD(HD(b,-4294967296),0)){this.d=1;this.a=$p(Vp(Zq,1),uwb,16,15,[_D(b)])}else{this.d=2;this.a=$p(Vp(Zq,1),uwb,16,15,[_D(b),_D(WD(b,32))])}}
function vgb(a){var b,c,d;if(ID(a,0)>=0){c=KD(a,yub);d=RD(a,yub)}else{b=XD(a,1);c=KD(b,500000000);d=RD(b,500000000);d=GD(VD(d,1),HD(a,1))}return UD(VD(d,32),HD(c,Zyb))}
function fE(b,c,d,e){eE();var f=cE;$moduleName=c;$moduleBase=d;yD=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{psb(g)()}catch(a){b(c,a)}}else{psb(g)()}}
function Hg(a){var b,c,d,e;b='Gg';c='Ff';e=$wnd.Math.min(a.length,5);for(d=e-1;d>=0;d--){if(geb(a[d].d,b)||geb(a[d].d,c)){a.length>=d+1&&a.splice(0,d+1);break}}return a}
function Xm(a,b,c){var d,e,f,g,h;if(Um){h=vo(Um,(Fh(),a).type);if(h){for(g=h.Ie();g.Se();){f=g.Te();d=f.a.a;e=f.a.b;Vm(f.a,a);Wm(f.a,c);Je(b,f.a);Vm(f.a,d);Wm(f.a,e)}}}}
function lbb(b,c){b.u=-1;b.v=-1;if(c.length>2){try{b.u=mdb(c[1])}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}try{b.v=mdb(c[0])}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}}}
function rhb(a,b,c){var d,e,f;for(e=a.Uf().Ie();e.Se();){d=e.Te();f=d.ag();if(Uq(b)===Uq(f)||b!=null&&M(b,f)){if(c){d=new yjb(d.ag(),d.bg());e.Ue()}return d}}return null}
function wT(a){var b;if(a.s==0){dh(a.p,iub);dh(a.n,iub)}else{sh(a.p,iub);sh(a.n,iub)}b=oT(a,a.u.length-1);if(a.s<b){sh(a.q,iub);sh(a.o,iub)}else{dh(a.q,iub);dh(a.o,iub)}}
function HT(a,b,c){var d;if(!b||!c){return}nM(b,null);d=c.Vc;if(d){if(a==d){Vg(b.d,(mF(),c.Wc))}else{Ne(c);Vg(b.d,(mF(),c.Wc));Pe(c,a)}}else{Vg(b.d,(mF(),c.Wc));Pe(c,a)}}
function Kg(a){Fg();var b=a.backingJsObject;if(b&&b.stack){var c=b.stack;var d=b+'\n';c.substring(0,d.length)==d&&(c=c.substring(d.length));return c.split('\n')}return []}
function IZ(a){var b,c;if(a.u.f);else if(a.C||a.t){a.c=true;b=(c=LK(a.u.j),c==null?'':c);t9(a.X,a.W.rc,a.W.qc,b);BZ(a,b,true)}else if(a.o){a.o=false;OV(a.W);FO(a.u,true)}}
function Ngb(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=GD(f,YD(HD(b[g],Zyb),HD(d[g],Zyb)));a[g]=_D(f);f=WD(f,32)}for(;g<c;g++){f=GD(f,HD(b[g],Zyb));a[g]=_D(f);f=WD(f,32)}}
function $E(){$E=kE;new QE('');WE=new RegExp('[&<>\'"]');UE=new RegExp('&','g');VE=new RegExp('>','g');XE=new RegExp('<','g');ZE=new RegExp("'",'g');YE=new RegExp('"','g')}
function Peb(a,b,c,d,e){Oeb();var f,g;asb(a,'src');asb(c,'dest');O(a);O(c);g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw FD(new Acb)}e>0&&Srb(a,b,c,d,e,true)}
function dh(a,b){var c,d;b=Dh(b);d=a.className||'';c=Bh(d,b);if(c==-1){d.length>0?(a.className=d+' '+b||'',undefined):(a.className=b||'',undefined);return true}return false}
function eJ(a){var b,c,d;if(!a.g){return}c=Ojb(a.f,a.g,0);b=c;while(true){c=c+1;c==a.f.a.length&&(c=0);if(c==b){d=Njb(a.f,b);break}else{d=Njb(a.f,c);if(d.b){break}}}dJ(a,d)}
function fJ(a){var b,c,d;if(!a.g){return}c=Ojb(a.f,a.g,0);b=c;while(true){c=c-1;c<0&&(c=a.f.a.length-1);if(c==b){d=Njb(a.f,b);break}else{d=Njb(a.f,c);if(d.b){break}}}dJ(a,d)}
function fR(a,b,c){var d;d=OZ(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}VW(a.c,b,c);iW(a.c,b,c);O_(a.d,b,c,null);pR(a);s9(a.d.X,c,b,false);pb(a.d.s,200)}
function t5(a){var b,c,d;d=kh($doc.getElementsByTagName(hxb)[0],otb);for(b=0;b<d.length;b++){c=d[b];if(geb(ixb,c.rel)&&geb(Bwb,c.type)&&geb(a,c.href)){return c}}return null}
function zeb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){fsb(b+1,a.length);a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+seb(a,++b)):(a=a.substr(0,b)+(''+seb(a,++b)))}return a}
function PF(a,b){var c,d,e,f,g;if(!!JF&&!!a&&tp(a,JF)){c=KF.a;d=KF.b;e=KF.c;f=KF.d;LF(KF);MF(KF,b);sp(a,KF);g=!(KF.a&&!KF.b);KF.a=c;KF.b=d;KF.c=e;KF.d=f;return g}return true}
function NR(a,b){if(b==((mF(),a.Wc).style.display!=ytb||!!a.a&&ke(a.a)||!!a.X&&ke(a.X)||!!a.W&&ke(a.W))){return}De(a.Wc,b);!!a.W&&te(a.W,b);!!a.X&&te(a.X,b);!!a.a&&te(a.a,b)}
function u4(a){var b,c,d;if(m4){a.q[nyb]=a.c}else{for(c=new pkb(a.g);c.a<c.c.a.length;){b=nkb(c);d=b.style;d[yvb]='translate3d(0,0,0)'}zh(a.q,a.c)}n4=null;cM(a.d.a);a.d=null}
function lU(a,b){var c,d;a.R=true;bT(a.$,swb,0);a.S=b;d=LU(a);if(!d){return}nM(d,null);c=d.d;dh(c,'custom-editor-cell');Vg(c,(mF(),null.og));null.ng();s1((ng(),mg),new TX(a))}
function xN(a,b,c,d){a.c=b;a.d=c;a.b=d;(mF(),a.Wc).style[Xtb]=iub;!!a.t&&(a.t.style[Xtb]=iub,undefined);a.i.style[Xtb]=(sm(),iub);TM(a);a.k=nh(a.Wc,Zub);a.n=nh(a.Wc,xtb);qN(a)}
function c4(a,b){var c,d,e,f;if(!a.a.p){return false}f=rj(b.a)[0];d=$h((Fh(),f).clientX||0)-a.a.w;e=$h(f.clientY||0)-a.a.A;c=d*d+e*e;if(c>a.a.j*a.a.j){return true}return false}
function HU(a){var b,c,d,e;if(a.jc.a.length==0){return a.xb}d=a.xb;b=Njb(a.jc,0);e=b.size();for(c=e-1;c>0;c--){if(hh(b.getAtIndex(c).d)<hh(a.yc)){return d}else{--d}}return a.xb}
function zV(a){var b,c;if(a.Db){b=(a.yc.offsetHeight||0)|0;c=(a.yc.offsetWidth||0)|0;if(b>a.nc||c>a.oc){a.nc=b;a.oc=c;a.Ob=-a.a.j;a.Pb=-a.a.M;e5(a.kc)}else{a.nc=b;a.oc=c}IV(a)}}
function dhb(a){var b,c,d;d=new tpb('[',']');for(c=a.Ie();c.Se();){b=c.Te();spb(d,b===a?'(this Collection)':b==null?Hsb:nE(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function jM(a){var b;if(a.i){vM(a);!!a.j&&Vg(a.d,a.j)}b=Ohb(a.n.pc,new BM(a.o,a.b,a.k,a.c));if(!b){b=Kdb((a.d.scrollWidth||0)|0);Rhb(a.n.pc,new BM(a.o,a.b,a.k,a.c),b)}return b.a}
function NG(){KG=psb(SG);LG=psb(TG);var c=hH;var d=HG;c(d,function(a,b){d[a]=psb(b)});var e=JG;c(e,function(a,b){e[a]=psb(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function tJ(a,b){oe(this,(mF(),Zi($doc)));re(this,xe(this.Wc)+'-'+Xub,false);wh(this.Wc,a);this.Wc.className='gwt-MenuItem';th(this.Wc,'id',dj($doc));Pd();Cb(kd,this.Wc);this.a=b}
function kX(a,b){var c,d,e,f,g;for(f=(g=(new jjb(a.Eb)).a.Uf().Ie(),new ojb(g));f.a.Se();){e=(c=f.a.Te(),c.bg());d=mvb+e.c+nvb+e.k;!!b&&Tnb(b.b,d)?pM(e):!!a.r&&Qhb(a.r,d)&&kM(e)}}
function wU(a){var b,c;if(a.K.a.length==0){return 0}b=0;while(SZ(a.a,b+1)){++b}c=new f1;!!a.ib&&a.ib.a.length>0&&b<=a.ib.a.length?c1(c,Njb(a.ib,b)):c1(c,Njb(a.K,b));return Vq(c.b)}
function IU(a){var b,c;if(a.hc.a.length==0){return 0}b=0;while(TZ(a.a,b+1)){++b}c=new f1;!!a.jb&&a.jb.a.length>0&&b<=a.jb.a.length?c1(c,Njb(a.jb,b)):c1(c,Njb(a.hc,b));return Vq(c.e)}
function kW(a,b){var c,d,e;if(!!a.ib&&a.ib.a.length>b-1){onb(a.tc,Kdb(b));d=Njb(a.ib,b-1);dh(d,nwb)}else{onb(a.sc,Kdb(b));e=b-a.bb;if(e>=0&&a.K.a.length>e){c=Njb(a.K,e);dh(c,nwb)}}}
function lW(a,b){var c,d;if(!!a.jb&&a.jb.a.length>b-1){onb(a.uc,Kdb(b));c=Njb(a.jb,b-1);dh(c,mwb)}else{onb(a.vc,Kdb(b));d=b-a.db;if(d>=0&&a.hc.a.length>d){c=Njb(a.hc,d);dh(c,mwb)}}}
function Ygb(a,b){Rgb();var c,d;d=(Ffb(),Afb);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=Sfb(d,c));c.d==1?(c=Sfb(c,c)):(c=new agb($gb(c.a,c.d,Xp(Zq,uwb,16,c.d<<1,15,1))))}d=Sfb(d,c);return d}
function Qnb(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return Rnb()}}
function qT(a,b){if(a.s<b){do{a.t-=pT(a,a.s);++a.s}while(a.s<b);a.c.style[rvb]=a.t+(em(),$ub)}else if(a.s>b){do{--a.s;a.t+=pT(a,a.s)}while(a.s>b);a.c.style[rvb]=a.t+(em(),$ub)}wT(a)}
function O1(a){N1();Dqb(M1,(Ocb(a),'asking for '+a.k));if(Xx==a){Dqb(M1,(Ocb(uA),'Returning '+uA.k+' from fake RpcProxy'));return new Iab}throw FD(new ydb(''+a+' is not supported'))}
function yg(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Id()&&(c=xg(c,g)):g[0].Jd()}catch(a){a=ED(a);if(Oq(a,18)){d=a;ag();jg(d,true)}else throw FD(a)}}return c}
function OR(a){var b;if(a._){!!a.$&&KM(a.$,false);a.$=new iN;PM(a.$,a.Q.a);re(a.$,Xvb,true);b=new hJ;SI(b,new sJ(new QE(OE(new PE).a.a),new aS(a)));ZH(a.$,b);s1((ng(),mg),new cS(a))}}
function R6(a){this.c=new mnb;this.a=new mnb;this.b=new mnb;this.d=Xp(wB,Lsb,2,0,6,1);!!a&&(this.e=new MY,JY(this.e,a),CP(this.e,new B0),this.f=TP(this.e),wH(yK(a),this.f),undefined)}
function mgb(a,b){var c,d,e;e=a.e;if(b==0||a.e==0){return}d=b>>5;a.d-=d;if(!rgb(a.a,a.d,a.a,d,b&31)&&e<0){for(c=0;c<a.d&&a.a[c]==-1;c++){a.a[c]=0}c==a.d&&++a.d;++a.a[c]}Ifb(a);a.b=-2}
function ogb(a,b,c,d){var e,f,g;if(d==0){Peb(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function sf(a,b){asb(b,'Cannot suppress a null exception.');Xrb(b!=a,'Exception can not suppress itself.');if(a.g){return}a.j==null?(a.j=$p(Vp(yB,1),tsb,18,0,[b])):(a.j[a.j.length]=b)}
function eg(b,c,d){var e,f;e=cg();try{if(pf){try{return bg(b,c,d)}catch(a){a=ED(a);if(Oq(a,18)){f=a;jg(f,true);return undefined}else throw FD(a)}}else{return bg(b,c,d)}}finally{fg(e)}}
function tT(a,b){var c,d;a.r!=-1&&sh(a.u[a.r],hwb);a.r=b-1;c=a.u[a.r];dh(c,hwb);if(a.s>a.r){qT(a,a.r)}else if(hh(a.k)<(Fh(),Eh).Vd(c)+((c.offsetWidth||0)|0)&&!a.d){d=oT(a,a.r);qT(a,d)}}
function d2(a,b){var c,d,e;if(a.b.a.length!=0){for(d=new pkb(a.b);d.a<d.c.a.length;){c=nkb(d);e=null.ng();if(geb(b.substr(0,e.length),e)){f2(a,null.og+' '+null.og);Rjb(a.b,c);return}}}}
function sp(b,c){var d,e;!c.e||c.le();e=c.f;Rm(c,b.b);try{Ap(b.a,c)}catch(a){a=ED(a);if(Oq(a,89)){d=a;throw FD(new Lp(d.a))}else throw FD(a)}finally{e==null?(c.e=true,c.f=null):(c.f=e)}}
function VM(b){try{var c=$wnd.document.body;var d=c.currentStyle?c.currentStyle:getComputedStyle(c);if(d&&d.position=='relative'){return c.getBoundingClientRect()[b]}}catch(a){}return 0}
function lX(a,b){var c,d,e,f,g;for(f=(g=(new jjb(a.Eb)).a.Uf().Ie(),new ojb(g));f.a.Se();){e=(c=f.a.Te(),c.bg());d=mvb+e.c+nvb+e.k;!!b&&Qhb(b.a,d)?qM(e):!!a.tb&&a.tb.contains(d)&&lM(e)}}
function u0(){var a=document.createElement(dxb);var b=['animation','oAnimation','mozAnimation','webkitAnimation'];for(var c=0;c<b.length;c++){if(a.style[b[c]]!==undefined){return b[c]}}}
function yeb(a){var b,c;if(a>=Msb){b=55296+(a-Msb>>10&1023)&Nsb;c=56320+(a-Msb&1023)&Nsb;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&Nsb)}}
function mqb(a,b){var c,d,e,f;c=Phb(a.a,b);if(!c){d=new Lqb(b);e=(wqb(),tqb)?null:d.c;f=teb(e,0,$wnd.Math.max(0,leb(e,yeb(46))));Hqb(d,mqb(a,f));Shb(a.a,tqb?null:d.c,d);return d}return c}
function nX(a,b){var c,d,e,f;e=mvb+b.col1+nvb+b.row1;f=Ohb(a.Eb,Kdb(b.id));Thb(a.Kb,b);mX(a,b,f);d=f.d;if(Qhb(a.b,e)){c=Phb(a.b,e);geb(Ej(d.style),(wk(),ytb))?(KM(c,false),ah(c.i)):qN(c)}}
function L1(a,b,c){var d,e,f,g,h;for(f=(Sbb(),$p(Vp(IA,1),tsb,77,0,[Pbb,Rbb,Obb,Nbb,Qbb])),g=0,h=f.length;g<h;++g){e=f[g];d=b+'-'+ueb(e.b!=null?e.b:''+e.c,(Aob(),yob));c==e?dh(a,d):sh(a,d)}}
function knb(){knb=kE;inb=$p(Vp(wB,1),Lsb,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);jnb=$p(Vp(wB,1),Lsb,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function iE(){hE={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function web(a){var b,c,d;c=a.length;d=0;while(d<c&&(fsb(d,a.length),a.charCodeAt(d)<=32)){++d}b=c;while(b>d&&(fsb(b-1,a.length),a.charCodeAt(b-1)<=32)){--b}return d>0||b<c?a.substr(d,b-d):a}
function gL(){tH.call(this);this.d=(mF(),_i($doc));this.c=Yi($doc);Vg(this.d,wF(this.c));ne(this,this.d);this.a=(rI(),oI);this.b=(uI(),tI);this.d['cellSpacing']='0';this.d['cellPadding']='0'}
function O0(){F0();var a;this.a=new rbb(P0());if(this.a.j){a=I0();a!=-1&&qbb(this.a,a)}this.a.e?(this.b=qub in window):this.a.j?(this.b=!!navigator.msMaxTouchPoints):(this.b=!this.a.p&&G0())}
function q4(a){var b,c,d,e,f;if(a.k<3){Dqb(Mqb((Ocb(wz),wz.k)),'Not enough data for speed calculation');return 0}d=a.k%3;b=a.s[d];c=a.b[d];d+=3;--d;d=d%3;e=a.s[d];f=a.b[d];return (b-e)/(f-c)}
function EH(b,c){CH();var d,e,f,g;d=null;for(g=b.Ie();g.Se();){f=g.Te();try{c.Ke(f)}catch(a){a=ED(a);if(Oq(a,18)){e=a;!d&&(d=new rnb);Rhb(d.a,e,d)}else throw FD(a)}}if(d){throw FD(new DH(d))}}
function G3(a,b,c){var d,e,f,g;d=(!b2&&(b2=new l2),b2).c.d[(new A3(b)).b];if(!d){d={};a.d[(new A3(b)).b]=d}for(f=new Ilb(c.c.b.Ie());f.b.Se();){e=f.b.Te();g=d[e];if(!g){g=[];d[e]=g}g.push(c)}}
function dcb(){dcb=kE;bcb=new ecb('WEBSOCKET',0,'websocket');ccb=new ecb('WEBSOCKET_XHR',1,'websocket-xhr');acb=new ecb('STREAMING',2,'streaming');_bb=new ecb('LONG_POLLING',3,'long-polling')}
function vM(a){a.d.style[bvb]=(nl(),iub);if(a.o==null||a.o.length==0){xh(a.d,'');a.d.style[Ytb]=''}else{a.d.style[Ytb]='1';a.f&&a.af()>0&&qV(a.n,a.b,a.o)>a.af()?xh(a.d,'###'):xh(a.d,a.o)}iM(a)}
function $P(a,b,c,d){var e,f;geb(c.substr(0,1),'-')?(f='-'.length,geb(b.substr(b.length-f,f),'-')&&qeb(c,'-','')):(e='-'.length,geb(b.substr(b.length-e,e),'-')||(b+='-'));a.tf().od(b+(''+c),d)}
function bT(a,b,c){if(!a.sheet.cssRules[c]){return -1}var d=a.sheet.cssRules[c].selectorText;var e=a.sheet.cssRules[c].cssText.replace(d,b);a.sheet.deleteRule(c);return a.sheet.insertRule(e,c)}
function ldb(a){jdb==null&&(jdb=new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));if(!jdb.test(a)){throw FD(new _db(Gsb+a+'"'))}return parseFloat(a)}
function wq(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return dq(c&wub,d&wub,e&Csb)}
function _S(h,a){var b=a.length;var c=0;var d=0;var e=0;var f=0;var g=0;while(c<b){d=a.charCodeAt(c);d===32?(e=e+1):d>47&&d<58&&(e===0?(g=g*10+d-48):(f=f*10+d-48));if(e===2){break}c++}h.b=f;h.a=g}
function Pe(a,b){var c;c=a.Vc;if(!b){try{!!c&&c.td()&&a.wd()}finally{a.Vc=null}}else{if(c){throw FD(new ydb('Cannot set a new parent without first clearing the old parent'))}a.Vc=b;b.td()&&a.ud()}}
function NI(a,b,c,d){var e,f,g,h;h=(mF(),a.Wc);g=Ui($doc);g.text=b;g.removeAttribute(Wub);g.value=c;f=(Fh(),h).options.length;(d<0||d>f)&&(d=f);if(d==f){Nh(h,g,null)}else{e=h.options[d];Nh(h,g,e)}}
function IN(a,b){if(a.b==b){return}if(b){a.a.innerHTML='+';Ae((mF(),a.Wc),'minus',false);Ae(a.Wc,'plus',true)}else{a.a.innerHTML='&#x2212;';Ae((mF(),a.Wc),'plus',false);Ae(a.Wc,'minus',true)}a.b=b}
function oT(a,b){var c;c=((a.k.offsetWidth||0)|0)-((a.i.offsetWidth||0)|0);geb(Ej(a.f.style),ytb)||(c-=(a.f.offsetWidth||0)|0);c=Vq(c-pT(a,b));while(b>0&&c-pT(a,b-1)>0){--b;c=Vq(c-pT(a,b))}return b}
function YT(a){var b,c,d,e;nN(a.q);for(c=(e=(new jjb(a.b)).a.Uf().Ie(),new ojb(e));c.a.Se();){b=(d=c.a.Te(),d.bg());KM(b,false);ah(b.i)}Vhb(a.b);!!a.r&&Vhb(a.r);!!a.i&&Vhb(a.i);!!a.tb&&a.tb.clear()}
function mO(a){var b,c,d,e;for(c=(e=(new $ib(a.F.a)).a.Uf().Ie(),new ejb(e));c.a.Se();){b=(d=c.a.Te(),d.ag());b.d.style[Dvb]='';b.d.style[Evb]=''}Vhb(a.F.a);a.i.a=Xp(qB,tsb,1,0,5,1);Vhb(a.D);$g(a.r)}
function ykb(a,b,c,d,e){var f,g,h,i;f=d-c;if(f<7){vkb(b,c,d);return}h=c+e;g=d+e;i=h+(g-h>>1);ykb(b,a,h,i,-e);ykb(b,a,i,g,-e);if(Wmb(a[i-1],a[i])<=0){while(c<d){b[c++]=a[h++]}return}wkb(a,h,i,g,b,c,d)}
function Pf(a){var b;if(a.c==null){b=Uq(a.b)===Uq(Nf)?null:a.b;a.d=b==null?Hsb:Rq(b)?b==null?null:b.name:Tq(b)?'String':Pcb(O(b));a.a=a.a+': '+(Rq(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function rgb(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){Peb(c,d,a,0,b);g=b}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function vf(a,b,c,d){var e,f,g,h,i;b.xe(d+c+a);wf(a,b,d);for(f=(a.j==null&&(a.j=Xp(yB,tsb,18,0,0,1)),a.j),g=0,h=f.length;g<h;++g){e=f[g];vf(e,b,'Suppressed: ','\t'+d)}i=a.e;!!i&&vf(i,b,'Caused by: ',d)}
function yq(a,b){var c,d,e,f;b&=63;c=a.h&Csb;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return dq(d&wub,e&wub,f&Csb)}
function dK(a,b){var c,d,e,f,g,h;a.i||(b=1-b);g=0;e=0;f=0;c=0;d=Vq(b*a.d);h=Vq(b*a.e);switch(0){case 0:g=a.d-d>>1;e=a.e-h>>1;f=e+h;c=g+d;}(wJ(),vJ)._e(he(a.a),'rect('+g+'px, '+f+'px, '+c+'px, '+e+'px)')}
function IP(a,b){var c,d,e,f,g,h,i,j,k;a.qf(HP(a));c=R3(a.kg);if(c){e=new rnb;k=_0(c);for(d=0;d<k.length;d++){j=k[d];if(b.Af(j)){i=c[j];for(f=0;f<i.length;f++){g=i[f];h=Rhb(e.a,g,e);h==null&&w3(g,b)}}}}}
function zR(a,b,c,d){var e,f;f=0;e=0;if(c<0){if(b>1){while(b>1&&e>c){--b;e-=a[b-1]}d&&e<c&&++b;f=b}else{f=1}}else{if(b<a.length){while(b<=a.length&&e<c){e+=a[b-1];++b}f=b}else{f=a.length}}return d?f:f-1}
function J0(a){if(a.a.t==5){return 'v-android'}else if(a.a.t==4){return 'v-ios v-ios'+a.a.u}else if(a.a.t==1){return 'v-win'}else if(a.a.t==3){return 'v-lin'}else if(a.a.t==2){return 'v-mac'}return null}
function YI(a,b,c){var d,e;if(c<0||c>a.b.a.length){throw FD(new Acb)}Jjb(a.b,c,b);e=0;for(d=0;d<c;d++){Oq(Njb(a.b,d),97)&&++e}Jjb(a.f,e,b);TI(a,c,(mF(),b.Wc));re(b,xe(b.Wc)+'-'+Xub,false);gJ(a,b);return b}
function QS(a,b,c){var d;a.b=b;a.a=c;d=b.sb;He(d,a,(An(),An(),zn));He(d,a,(_m(),_m(),$m));He(d,a,(On(),On(),Nn));He(d,a,(Hn(),Hn(),Gn));He(d,a,(gn(),gn(),fn));He(d,a,(io(),io(),ho));He(d,a,(po(),po(),oo))}
function a6(a,b,c){var d,e,f,g,h,i,j,k;if(a==null||a.length==0||geb(Hsb,a)){return null}f=scb(a);d=new mnb;for(e=0;e<(i=ucb(f),i).length;e++){g=(h=ucb(f),h)[e];j=(k=f[g],k);Rhb(d,b.Hf(g),c.Hf(j))}return d}
function JS(a,b){var c,d,e;d=CX(b);e=(Fh(),d).getAttribute(Jtb)||'';if(jh(Ih(d)).indexOf(awb)!=-1&&e!=null&&e.indexOf(bwb)!=-1){c=a.c.wb;if($S(e)==0){_S(c,e);_Z(a.c.a,c.a,c.b,Eh.$d(d))}b.stopPropagation()}}
function rV(a){var b,c;b=-ph(a.yc);c=-((a.yc.scrollTop||0)|0);a.Oc.style[rvb]=b+(em(),$ub);a.I.style[rvb]=b+$ub;a.c.style[svb]=c+$ub;a.fc.style[svb]=c+$ub;a.D.style[rvb]=b-a.g+$ub;a.bc.style[svb]=c-a.f+$ub}
function J1(a,b){w1();if(!b){a.ondrag=function(){return false};a.onselectstart=function(){return false};a.style.webkitUserSelect=ytb}else{a.ondrag=null;a.onselectstart=null;a.style.webkitUserSelect='text'}}
function o9(b,c){if(!b){return}var d=[];for(var e=0;e<c.length;e++){var f=c[e];var g=Object.getOwnPropertyNames(f).find(function(a){return /^(a|value_0|value.*g\$)$/.test(a)});var h=g?f[g]:f;d.push(h)}b(d)}
function XW(a){var b,c,d,e,f;if(!a.tb){return}if(a.b){for(d=new pib((new hib(a.b)).a);d.b;){c=oib(d);f=c.ag();b=c.bg();e=a.tb.contains(f)?a.ub:null;uN(b,e)}}if(a.q){e=a.tb.contains(a.j)?a.ub:null;uN(a.q,e)}}
function HV(a,b,c){var d,e,f;if(b.col1<=a.ob&&b.col2>a.ob){d=a.a.g;f=AR(d,b.col1,a.ob+1);e=AR(d,a.ob+1,b.col2+1)-ph(a.yc)+1;if(e>0){f+=e;c.d.style[Gvb]=''}else{c.d.style[Gvb]='0'}c.d.style[Atb]=f+(em(),$ub)}}
function KY(a){if(!(!a.J&&(a.J=new m0),a.J).c){X$((!a.B&&(a.B=new S_),a.B),null)}else if(!(!a.B&&(a.B=new S_),a.B).p){!a.d&&(a.d=new pZ(a));X$((!a.B&&(a.B=new S_),a.B),a.d)}else{XZ((!a.B&&(a.B=new S_),a.B))}}
function obb(b,c){var d,e;d=ieb(c,yeb(46));d<0&&(d=c.length);b.b=mdb(pbb(c,0,d));e=jeb(c,yeb(46),d+1);e<0&&(e=c.length);try{b.c=mdb(peb(pbb(c,d+1,e),'[^0-9].*',''))}catch(a){a=ED(a);if(!Oq(a,46))throw FD(a)}}
function UI(a){var b,c,d;dJ(a,null);b=a.i?a.d:pF(a.d);while(mF(),kF.Ae(b)>0){_g(b,kF.ze(b,0))}for(d=new pkb(a.b);d.a<d.c.a.length;){c=nkb(d);c.Wc['colSpan']=1}a.f.a=Xp(qB,tsb,1,0,5,1);a.b.a=Xp(qB,tsb,1,0,5,1)}
function wk(){wk=kE;lk=new zk;dk=new Vk;gk=new Xk;hk=new Zk;jk=new _k;kk=new bl;mk=new dl;nk=new fl;ok=new hl;rk=new Bk;tk=new Dk;sk=new Fk;vk=new Hk;pk=new Jk;qk=new Lk;uk=new Nk;fk=new Pk;ek=new Rk;ik=new Tk}
function kL(a,b,c){var d,e,f;if(c<0||c>a.c){throw FD(new Acb)}if(a.c==a.a.length){f=Xp(_v,tsb,13,a.a.length*2,0,1);for(e=0;e<a.a.length;++e){f[e]=a.a[e]}a.a=f}++a.c;for(d=a.c-1;d>c;--d){a.a[d]=a.a[d-1]}a.a[c]=b}
function s0(a,b){o0();if(a._vaadin_animationend_callbacks){var c=a._vaadin_animationend_callbacks;for(var d=0;d<c.length;d++){if(c[d].listener==b){a.removeEventListener(n0,c[d],false);return true}}return false}}
function lb(a){var b,c,d,e,f,g;b=Xp(dr,{731:1,3:1},176,a.a.a.length,0,1);b=Sjb(a.a,b);c=new of;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];Rjb(a.a,d);ab(d.a,c.a)}a.a.a.length>0&&pb(a.b,$wnd.Math.max(5,16-(Wf()-c.a)))}
function Kp(a){var b,c,d,e,f;c=a.size();if(c==0){return null}b=new Leb(c==1?'Exception caught: ':c+' exceptions caught: ');d=true;for(f=a.Ie();f.Se();){e=f.Te();d?(d=false):(b.a+='; ',b);Heb(b,e.Fd())}return b.a}
function $N(a,b){RK();SK.call(this,aj($doc));(mF(),this.Wc).className='gwt-TextArea';this.c=a;this.a=b;this.Wc.style[Qtb]=(yl(),Stb);this.Wc.style[Ytb]='1';this.Wc.style[Sub]=(em(),'-1000.0px');Ij(this.Wc.style)}
function CU(a){var b,c,d,e,f,g;g=a.bb;b=gh(a.yc);e=new Tjb;f=0;for(f=0;f<a.jc.a.length;f++){TZ(a.a,f+1)||(e=Njb(a.jc,f))}for(d=new pkb(e);d.a<d.c.a.length;){c=nkb(d);if(gh(c.d)>=b){return g}else{++g}}return a.bb}
function TW(a,b){SW(a);FF(a.yc);(a.qc!=a.Ic||a.rc!=a.Jc)&&a.Ic!=-1&&a.Jc!=-1?k$(a.a,a.qc,a.Ic,a.rc,a.Jc):$Z(a.a,a.Ic,a.Jc,(mh(CX(b)),!!(Fh(),b).shiftKey),!!b.metaKey||!!b.ctrlKey,true);a.wc=false;a.Ic=-1;a.Jc=-1}
function yqb(a,b){var c,d,e,f,g,h,i,j;for(e=Cqb(a),g=0,i=e.length;g<i;++g){c=e[g];c.we(b)}j=!tqb&&a.e?tqb?null:a.d:null;while(j){for(d=Cqb(j),f=0,h=d.length;f<h;++f){c=d[f];c.we(b)}j=!tqb&&j.e?tqb?null:j.d:null}}
function rN(a,b){kI(a.a,b);oN(a.a);ke(a.f)&&(ke(a.a)||ke(a.g)||geb((wk(),aub),Ej(a.e.style)))?(je(a.f).className||'').indexOf(zvb)!=-1||re(a.f,zvb,true):(je(a.f).className||'').indexOf(zvb)!=-1&&re(a.f,zvb,false)}
function sN(a,b){kI(a.g,b);oN(a.g);ke(a.f)&&(ke(a.a)||ke(a.g)||geb((wk(),aub),Ej(a.e.style)))?(je(a.f).className||'').indexOf(zvb)!=-1||re(a.f,zvb,true):(je(a.f).className||'').indexOf(zvb)!=-1&&re(a.f,zvb,false)}
function uN(a,b){kI(a.f,b);oN(a.f);ke(a.f)&&(ke(a.a)||ke(a.g)||geb((wk(),aub),Ej(a.e.style)))?(je(a.f).className||'').indexOf(zvb)!=-1||re(a.f,zvb,true):(je(a.f).className||'').indexOf(zvb)!=-1&&re(a.f,zvb,false)}
function ZP(a,b){a.tf().od('v-disabled',!b);Oq(a.tf(),73)&&a.tf().zd(b);Oq(a,136)||Jqb(Mqb((Ocb(nz),nz.k)),'Parent of connector '+q1(a)+' is null. This is typically an indication of a broken component hierarchy')}
function TV(a,b,c,d,e){var f,g,h,i;$T(a);for(i=d;i<=e;i++){for(f=b;f<=c;f++){if(a.qc!=f||a.rc!=i){g=sU(a,f,i);onb(a.u,new sY(f,i));if(g){onb(a.t,g);dh(g.d,kwb)}h=DU(a,mvb+f+nvb+i);if(h){onb(a.t,h);dh(h.d,kwb)}}}}}
function S1(a,b){if(a.b){return true}else if(a.c){return Z1(b,a.c)}else{if(a.a){return a1(a.a,b)}else{throw FD(new ydb('StateChangeEvent should have either stateJson, changedProperties or changePropertiesSet'))}}}
function sh(a,b){var c,d,e,f,g;b=Dh(b);g=a.className||'';e=Bh(g,b);if(e!=-1){c=web(g.substr(0,e));d=web(seb(g,e+b.length));c.length==0?(f=d):d.length==0?(f=c):(f=c+' '+d);a.className=f||'';return true}return false}
function kT(a){var b,c,d;a.d=false;ah(a.g);c=a.u[a.r];c.style[Atb]='';d=a.g.value;if(yT(d)&&!geb(a.b,d)){for(b=0;b<a.u.length;b++){if(geb(d,mh(a.u[b]))){uT(c,a.b);return}}D$(a.e,a.r,d);uT(c,d);wT(a)}else{uT(c,a.b)}}
function PW(a,b){var c,d;FF((mF(),a.Wc));a.Tb.className=zwb;sh(a.Ub,mvb+a.Zb);he(a.xc).style[rvb]='';if(a.Yb){c=new mnb;d=b-a.Rb;d<0&&(d=0);d!=NZ(a.a,a.Zb)&&Rhb(c,Kdb(a.Zb),Kdb(d));c.a.c+c.b.c==0||j$(a.a,c)}a.Zb=-1}
function Dnb(a,b,c){var d,e,f,g,h;h=b==null?0:(g=Q(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=Anb(b,e);if(f){return f.cg(c)}}e[e.length]=new yjb(b,c);++a.c;_mb(a.b);return null}
function FE(a,b){var c,d,e;c=new Jeb;Heb(c,(d=new cnb(b.c),e=new Jeb,Heb(e,bnb(d)),e.a+=' ',Heb(e,b.b),e.a+='\n',Heb(e,b.a.Nf()),e.a+=': ',e.a));Heb(c,b.d);if(a.a&&!!b.e){c.a+='\n';vf(b.e,new KE(c),'','')}return c.a}
function Srb(a,b,c,d,e,f){var g,h,i,j,k;if(Uq(a)===Uq(c)){a=a.slice(b,b+e);b=0}i=c;for(h=b,j=b+e;h<j;){g=$wnd.Math.min(h+10000,j);e=g-h;k=a.slice(h,g);k.splice(0,0,d,f?e:0);Array.prototype.splice.apply(i,k);h=g;d+=e}}
function Me(a){if(!a.td()){throw FD(new ydb("Should only call onDetach when the widget is attached to the browser's document"))}try{a.yd();Yo(a,false)}finally{try{a.rd()}finally{mF();a.Wc.__listener=null;a.Sc=false}}}
function ZV(a){var b,c;if(a.ob<a.ib.a.length){while(a.ib.a.length>a.ob){ah(Qjb(a.ib,a.ib.a.length-1))}}else{for(c=a.ib.a.length+1;c<=a.ob;c++){b=Oi($doc);wh(b,LZ(c)+Dwb);b.className=Cwb+c||'';Kjb(a.ib,b);Vg(a.Mc,b)}}}
function U0(a){if(a.nodeType!=1){return {}}if($wnd.document.defaultView&&$wnd.document.defaultView.getComputedStyle){return $wnd.document.defaultView.getComputedStyle(a,null)}if(a.currentStyle){return a.currentStyle}}
function yp(a,b,c){var d;if(!b){throw FD(new Zdb('Cannot add a handler with a null type'))}if(!c){throw FD(new Zdb('Cannot add a null handler'))}a.b>0?xp(a,new eM(a,b,c)):(d=Cp(a,b,null),d.add(c));return new dM(a,b,c)}
function O_(a,b,c,d){var e;if(!a.W._){e=uU(a.W,b,c);if(e!=null&&e.length!=0){CO(a.u,e);jX(a.W,'='+e)}else{DO(a.u,EU(a.W,b,c))}}a.e=aV(a.W,b,c);a.o?lU(a.W,nZ(a.p,MU(a.W))):FO(a.u,!a.e);d!=null?HO(a.u,d):HO(a.u,GZ(b,c))}
function q0(a){o0();if(a.webkitAnimationName)return a.webkitAnimationName;if(a.animationName)return a.animationName;if(a.mozAnimationName)return a.mozAnimationName;if(a.oAnimationName)return a.oAnimationName;return ''}
function Bh(a,b){var c,d,e;c=a.indexOf(b);while(c!=-1){if(c==0||(fsb(c-1,a.length),a.charCodeAt(c-1)==32)){d=c+b.length;e=a.length;if(d==e||d<e&&(fsb(d,a.length),a.charCodeAt(d)==32)){break}}c=a.indexOf(b,c+1)}return c}
function JM(a){var b;if(!a.t&&(b=(F0(),!E0&&(E0=new O0),F0(),E0),b.a.j&&M0(b))){a.t=Qi($doc);a.t.style[Qtb]=(yl(),Stb);a.t.style['borderStyle']=(Xj(),ytb);a.t.tabIndex=-1;a.t.frameBorder=0;a.t.marginHeight=0}return a.t}
function GO(a,b){var c,d,e;Bj(he(a.B));HI(a.B,'');if(!!b&&b.a.length!=0){te(a.B,true);te(a.C,true);for(d=new pkb(b);d.a<d.c.a.length;){c=nkb(d);HI(a.B,c)}NO(a,(e=LK(a.a),e==null?'':e))}else{te(a.B,false);te(a.C,false)}}
function z_(a,b){if(a.U!=b){a.U=b;b?Ae((mF(),a.Wc),'protected',true):Ae((mF(),a.Wc),'protected',false);if(a.D){if(b){if(a.o){a.o=false;OV(a.W)}}else{a.e=false;pR(a.R);if(a.o){s9(a.X,a.W.rc,a.W.qc,false);pb(a.s,200)}}}}}
function O4(a,b){var c,d,e,f,g,h,i;if(a.b){for(f=(i=(new $ib(a.a.p.a)).a.Uf().Ie(),new ejb(i));f.a.Se();){c=(h=f.a.Te(),h.ag());sh(c,oyb)}Vhb(a.a.p.a)}for(d=b,e=0,g=d.length;e<g;++e){c=d[e];dh(c,oyb);a.b&&onb(a.a.p,c)}}
function pfb(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=Vq($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return qfb(MD(a))}
function oi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().top+a.scrollTop|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenY-c.getBoxObjectFor(c.documentElement).screenY}}
function ni(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().left+a.scrollLeft|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenX-c.getBoxObjectFor(c.documentElement).screenX}}
function hU(a,b,c){var d,e,f,g,h,i,j;h=new rnb;for(e=new pib((new hib(a.Ac)).a);e.b;){d=oib(e);g=d.bg();onb(h,''+g.b)}j=Xp(wB,Lsb,2,Whb(h.a),6,1);chb(h,j);i=YS(b,j);for(f=0;f<i.length;f++){Ojb(c,i[f],0)!=-1||Kjb(c,i[f])}}
function p0(b,c){o0();var d=psb(function(a){c.xf(a)});d.listener=c;b.addEventListener(n0,d,false);!b._vaadin_animationend_callbacks&&(b._vaadin_animationend_callbacks=[]);b._vaadin_animationend_callbacks.push(d);return d}
function pS(a,b){switch(mF(),DG((Fh(),b).type)){case Iub:if(b.touches.length>1){return}case 4:wR(a.F,b);break;case 8:case Bsb:case Kub:vF(a.Wc);case 8192:QR(a.F);break;case 64:ER(a.F,b);break;case Jub:ER(a.F,b);Eh.Ud(b);}}
function tkb(a,b){var c,d,e;if(Uq(a)===Uq(b)){return true}if(a==null||b==null){return false}if(a.length!=b.length){return false}for(c=0;c<a.length;++c){d=a[c];e=b[c];if(!(d==e||d!=null&&geb(d,e))){return false}}return true}
function fN(a){wJ();var b,c,d;c=null.ng();c+='-overlays';b=(mF(),ij($doc,c));if(!b){b=Oi($doc);b.id=c;d=TP(a.d).Vc.ld().className||'';d!=null&&d.length!=0&&dh(b,d);dh(b,'v-overlay-container');Vg(he((tK(),xK())),b)}return b}
function zS(a,b,c,d,e){a.J.style[Xtb]=(b&&!a.H?(sm(),rm):(sm(),qm)).he();a.p.style[Xtb]=(e&&!a.n?(sm(),rm):(sm(),qm)).he();a.A.style[Xtb]=(c&&!a.v?(sm(),rm):(sm(),qm)).he();a.d.style[Xtb]=(d&&!a.b?(sm(),rm):(sm(),qm)).he()}
function y4(a){if(a.c<0){p4(a,0,a.c);a.c=0}else if(a.c>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){p4(a,((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0),a.c);a.c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)}else{u4(a)}}
function qU(a){var b,c,d,e,f;b=new Vjb(a.Lc);for(e=new pkb(a.Pc);e.a<e.c.a.length;){c=nkb(e);Ljb(b,c)}for(f=new pkb(a.d);f.a<f.c.a.length;){c=nkb(f);Ljb(b,c)}for(d=new pkb(a.jc);d.a<d.c.a.length;){c=nkb(d);Ljb(b,c)}return b}
function t0(){var a=document.createElement(dxb);var b={'animationName':exb,'OAnimationName':'oAnimationEnd','MozAnimation':exb,'WebkitAnimation':'webkitAnimationEnd'};for(var c in b){if(a.style[c]!==undefined){return b[c]}}}
function GV(a,b,c){var d,e,f;if(b.row1<=a.Rc&&b.row2>a.Rc){f=a.a.W.W;e=AR(f,b.row1,a.Rc+1);d=AR(f,a.Rc+1,b.row2+1)+1-((a.yc.scrollTop||0)|0);if(d>0){e+=d;c.d.style[Hvb]=''}else{c.d.style[Hvb]='0'}c.d.style[ztb]=e+(em(),$ub)}}
function XL(){function b(a){return parseInt(a[1])*Otb+parseInt(a[2])}
var c=navigator.userAgent;if(c.indexOf('Macintosh')!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(c);if(d&&d.length==3){if(b(d)<=1008){return true}}}return false}
function $V(a){var b,c;if(a.Rc<a.jb.a.length){while(a.jb.a.length>a.Rc){ah(Qjb(a.jb,a.jb.a.length-1))}}else{for(b=a.jb.a.length+1;b<=a.Rc;b++){c=Oi($doc);c.innerHTML=''+b+Dwb||'';c.className=Ewb+b||'';Kjb(a.jb,c);Vg(a.Mc,c)}}}
function HW(a,b,c){var d,e,f,g;d=mvb+b+nvb+c;if(Qhb(a.b,d)){return}g=DU(a,d);if(g){e=g.d}else{e=sU(a,b,c).d;vN(a.q,Ih((Fh(),e)))}rN(a.q,Phb(a.i,d));sN(a.q,Phb(a.r,d));f=a.tb.contains(d)?a.ub:null;uN(a.q,f);wN(a.q,e,c,b);a.j=d}
function YS(a,b){var c=[];var d=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;for(var e=0;e<d.length;e++){var f=d[e];for(var g=0;g<b.length;g++){f['selectorText'].indexOf('.row'+b[g]+',')!==-1&&c.push(f['cssText'])}}return c}
function hfb(a){return a.e<=-32||a.e>(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Yyb)+1)?0:Rfb(a.e==0||a.a==0&&a.f!=-1?(!a.c&&(a.c=jgb(a.f)),a.c):a.e<0?Sfb((!a.c&&(a.c=jgb(a.f)),a.c),Zgb(-a.e)):Jfb((!a.c&&(a.c=jgb(a.f)),a.c),Zgb(a.e)))}
function Ugb(a,b,c,d,e){var f,g,h,i;if(Uq(a)===Uq(b)&&d==e){$gb(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=GD(GD(SD(HD(f,Zyb),HD(b[i],Zyb)),HD(c[h+i],Zyb)),HD(_D(g),Zyb));c[h+i]=_D(g);g=XD(g,32)}c[h+e]=_D(g)}}
function U(a,b){var c,d,e;c=a.r;d=b>=a.t+a.k;if(a.p&&!d){e=(b-a.t)/a.k;a.dd(a._c(e));return a.o&&a.r==c}if(!a.p&&b>=a.t){a.p=true;a.cd();if(!(a.o&&a.r==c)){return false}}if(d){a.o=false;a.p=false;a.bd();return false}return true}
function XU(a,b){var c,d,e,f;e=a.a.M;f=b-e;c=b+a.nc+e;f<0&&(f=0);d=a.a.P;while(a.Ab<c&&a.zb<d){if(a.eb+JU(a,a.db)<f){a.eb+=JU(a,a.db);++a.db}++a.zb;a.Ab+=JU(a,a.zb)}while(f>a.eb+JU(a,a.db)&&a.db<d){a.eb+=JU(a,a.db);++a.db}aW(a)}
function mE(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);if(b){var e=b.prototype.kg;e.e=b}for(var f;d.length&&(f=d.shift());){c=c[f]=c[f]||!d.length&&b||{}}return c}
function wi(){var a=/rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());if(a&&a.length>=3){var b=parseInt(a[1])*1000000+parseInt(a[2])*Otb+parseInt(a.length>=5&&!isNaN(a[4])?a[4]:0);return b}return -1}
function NH(a,b){var c;if(a.bb){throw FD(new ydb('Composite.initWidget() may only be called once.'))}if(!b){throw FD(new Zdb('widget cannot be null'))}Oq(b,178)&&b;Ne(b);c=(mF(),b.Wc);oe(a,c);(lK(),tF(c))&&mK(c,a);a.bb=b;Pe(b,a)}
function Hdb(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-Jsb;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function r5(a,b){var c;if(a.a!=null){(!a.B&&(a.B=SP(a)),a.B).Vc.od(a.a,false);sh(fN(a.C),a.a)}a.a=b;if(b!=null){(!a.B&&(a.B=SP(a)),a.B).Vc.od(b,true);dh(fN(a.C),a.a);x5(b)}null.ng();c=new j4;!!a.D&&sp(a.D,c);Nkb();Ykb();null.ng()}
function Tfb(a,b){var c;if(b<0){throw FD(new zcb('Negative exponent'))}if(b==0){return Afb}else if(b==1||Lfb(a,Afb)||Lfb(a,Efb)){return a}if(!Xfb(a,0)){c=1;while(!Xfb(a,c)){++c}return Sfb(fgb(c*b),Tfb(Wfb(a,c),b))}return Ygb(a,b)}
function LJ(){bI.call(this);this.C=new XJ;this.F=false;this.H=-1;this.L=new fK(this);this.N=-1;Vg((mF(),this.Wc),vJ.Ye());this.Qe(0,0);vJ.$e((null,lh(this.Wc))).className='gwt-PopupPanel';vJ.Ze(qF(this.Wc)).className='popupContent'}
function VP(a,b,c){var d;if(!!a.p&&!!a.p.d){return}J1((mF(),b.Wc),false);if((F0(),!E0&&(E0=new O0),F0(),E0).a.t==5){return}j1(c.a,b.Wc);uj(c.a);a.p=new a4(a);d=rj(c.a)[0];a.w=$h((Fh(),d).clientX||0);a.A=$h(d.clientY||0);pb(a.p,500)}
function kbb(a,b){var c,d,e,f,g;g=b.indexOf('; cros ');if(g==-1){return}d=jeb(b,yeb(41),g);if(d==-1){return}c=d;while(c>=g&&(fsb(c,b.length),b.charCodeAt(c)!=32)){--c}if(c==g){return}e=b.substr(c+1,d-(c+1));f=reb(e,'\\.',0);lbb(a,f)}
function qR(a,b,c,d){IZ(a.d);a.c.C||(a.c.C=true,undefined);if(!DR(a.c.xc)){FW(a.c,true);bU(a.c)}EW(a.c,b,c);wX(a.c,b,b,c,c);d?uX(a.c,b,d.col2,c,d.row2,true):uX(a.c,b,b,c,c,true);pR(a);O_(a.d,b,c,null);s9(a.d.X,c,b,true);pb(a.d.s,200)}
function _Z(a,b,c,d){var e,f;if(a.W.rc!=c&&a.W.qc!=b){$Z(a,b,c,false,false,true)}else{e=sU(a.W,b,c);d=e.o;a.b=d;gO(a.u);d=(f=LK(a.u.j),f==null?'':f)}a.t=false;DZ(a);if(!a.e){if(!a.C&&!a.o){a.C=true;MW(a.W,true,d);a.u.u=true;JO(a.u)}}}
function r4(a,b){var c,d,e,f,g;g=(Fh(),b).target;for(d=(f=(new $ib(a.p.a)).a.Uf().Ie(),new ejb(f));d.a.Se();){c=(e=d.a.Te(),e.ag());if(Eh.be(c,g)&&((c.scrollHeight||0)|0)>(c.clientHeight|0)){a.q=c;a.g=E4(a.q);return true}}return false}
function jE(a,b,c){var d=hE,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=hE[b]),lE(h));_.lg=c;!b&&(_.mg=oE);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.kg=f)}
function vZ(){wJ();dN.call(this);this.e=new U4(this);this.b=new f5(100,new X4(this));HJ(this,this.e);vJ.$e((mF(),mF(),lh(this.Wc))).className=Xvb;vh(this.Wc,dj($doc));Ie(this,new R4(this),_o?_o:(_o=new xn));this.Wc['id']='PID_VAADIN_CM'}
function TU(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.oc+c;d<0&&(d=0);e=a.a.i;while(a.yb<f&&a.xb<e){if(a.cb+NZ(a.a,a.bb)<d){a.cb+=NZ(a.a,a.bb);++a.bb}++a.xb;a.yb+=NZ(a.a,a.xb)}while(d>a.cb+NZ(a.a,a.bb)&&a.bb<e){a.cb+=NZ(a.a,a.bb);++a.bb}XV(a)}
function Ge(a,b){var c=(a.className||'').split(/\s+/);if(!c){return}var d=c[0];var e=d.length;c[0]=b;for(var f=1,g=c.length;f<g;f++){var h=c[f];h.length>e&&h.charAt(e)=='-'&&h.indexOf(d)==0&&(c[f]=b+h.substring(e))}a.className=c.join(' ')}
function XR(a,b){var c;this.M=new $R(this);this.q=a;this.Q=b;this._=b.Qc;this.b=new DS(this);NH(this,this.b);BS(this.b);re(this.b,Yvb,true);NR(this,false);this.B=new nS(this);re(this.B,Yvb,true);lS(this.B);c=b.yc;yS(this.b,c);jS(this.B,c)}
function w3(b,c){var d,e,f,g;d=c.f;e=b.a;!e&&(e=O(d));f=new A3(e);try{q3(new r3(f,b.b),d,$p(Vp(qB,1),tsb,1,5,[]))}catch(a){a=ED(a);if(Oq(a,79)){g=a;throw FD(new Lf("Couldn't invoke @OnStateChange method "+f.b+'.'+b.b,g))}else throw FD(a)}}
function HR(a,b){a.r=b;if(b>0&&!a.a){a.a=new DS(a);yS(a.a,a.Q.c);te(a.a,false);BS(a.a);re(a.a,Vvb,true);a.A=new nS(a);jS(a.A,a.Q.c);kS(a.A,false);lS(a.A);re(a.A,Vvb,true)}else if(b==0&&!!a.a){qS(a.a);a.a=null;ah(a.A.k);a.A=null}WR(a);UR(a)}
function MR(a,b){a.ab=b;if(b>0&&!a.X){a.X=new DS(a);yS(a.X,a.Q.Oc);te(a.X,false);BS(a.X);re(a.X,'top-right',true);a.F=new nS(a);jS(a.F,a.Q.Oc);kS(a.F,false);lS(a.F);re(a.F,Wvb,true)}else if(b==0&&!!a.X){qS(a.X);a.X=null;ah(a.F.k);a.F=null}WR(a);UR(a)}
function WR(a){if(a.ab>0&&a.r>0&&!a.W){a.W=new DS(a);yS(a.W,a.Q.Mc);te(a.W,false);BS(a.W);re(a.W,Wvb,true);a.D=new nS(a);jS(a.D,a.Q.Mc);kS(a.D,false);lS(a.D);re(a.D,Wvb,true)}else if(!!a.W&&(a.ab==0||a.r==0)){qS(a.W);a.W=null;ah(a.D.k);a.D=null}}
function Xfb(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw FD(new zcb('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=Ofb(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function YP(a){!a.B&&(a.B=new S_);if(!!a.B&&OH((!a.B&&(a.B=new S_),a.B))){Ne((!a.B&&(a.B=new S_),a.B));Jqb(Mqb((Ocb(nz),nz.k)),'Widget is still attached to the DOM after the connector ('+q1(a)+') has been unregistered. Widget was removed.')}}
function xq(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&xub)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?Csb:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?Csb:0;f=d?wub:0;e=c>>b-44}return dq(e&wub,f&wub,g&Csb)}
function Enb(a,b){var c,d,e,f,g,h;g=b==null?0:(f=Q(b),f|0);d=(c=a.a.get(g),c==null?new Array:c);for(h=0;h<d.length;h++){e=d[h];if(lnb(b,e.ag())){if(d.length==1){d.length=0;Lnb(a.a,g)}else{d.splice(h,1)}--a.c;_mb(a.b);return e.bg()}}return null}
function RW(a,b){var c,d,e;FF((mF(),a.Wc));a.Tb.className=zwb;he(a.xc).style[svb]='';sh(a.Ub,'row'+a.$b);if(a.Yb){c=new mnb;e=b-a.Rb;d=ffb(wfb(e/a.Lb*72));d<0&&(d=0);d!=QZ(a.a,a.$b)&&Rhb(c,Kdb(a.$b),new qdb(d));c.a.c+c.b.c==0||w$(a.a,c)}a.$b=-1}
function WJ(){var a,b,c,d;null.ng();d=(iG(),nj($doc).clientWidth|0);c=nj($doc).clientHeight|0;null.ng((wk(),ytb));null.ng((em(),_ub));null.ng(_ub);b=mj($doc);a=jj($doc);null.ng($wnd.Math.max(b,d)+$ub);null.ng($wnd.Math.max(a,c)+$ub);null.ng(aub)}
function dZ(a){var b,c,d,e,f,g;d=new Tjb;g=TP(a.a.a);e=a.a.a.g;for(c=new pkb(a.b);c.a<c.c.a.length;){b=nkb(c);f=new zY(a,e,b.key,b.type,g);vY(f,b.caption);wY(f,EY(a.a.a,b.key));d.a[d.a.length]=f}return Sjb(d,Xp(sz,{716:1,3:1},125,d.a.length,0,1))}
function Egb(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(Rgb(),GD(SD(HD(c[h],Zyb),HD(e,Zyb)),HD(_D(f),Zyb)));g=GD(YD(HD(a[b+h],Zyb),HD(f,Zyb)),g);a[b+h]=_D(g);g=WD(g,32);f=XD(f,32)}g=GD(YD(HD(a[b+d],Zyb),f),g);a[b+d]=_D(g);return _D(WD(g,32))}
function vT(a,b,c){var d,e,f,g,h;if(c){a.c.style[rvb]='';a.s=0;a.t=0}for(e=b.length;e<a.u.length;e++){ah(a.u[e])}Uf(a.u,b.length);for(d=0;d<b.length;d++){f=a.u[d];if(f){h=f;uT(h,b[d])}else{g=lT(b[d]);Vg(a.c,g);a.u[d]=g}}a.r>=a.u.length&&(a.r=-1);wT(a)}
function bdb(a){if(a.Pf()){var b=a.c;b.Qf()?(a.k='['+b.j):!b.Pf()?(a.k='[L'+b.Nf()+';'):(a.k='['+b.Nf());a.b=b.Mf()+'[]';a.i=b.Of()+'[]';return}var c=a.g;var d=a.d;d=d.split('/');a.k=edb('.',[c,edb('$',d)]);a.b=edb('.',[c,edb('.',d)]);a.i=d[d.length-1]}
function wN(a,b,c,d){a.c=b;a.d=c;a.b=d;(mF(),a.Wc).style[Xtb]=iub;!!a.t&&(a.t.style[Xtb]=iub,undefined);a.i.style[Xtb]=(sm(),iub);TM(a);a.k=nh(a.Wc,Zub);a.n=nh(a.Wc,xtb);mN(a);a.Wc.style[Xtb]=hub;!!a.t&&(a.t.style[Xtb]=hub,undefined);a.i.style[Xtb]=hub}
function sR(a,b,c,d,e,f,g,h,i){var j,k;O_(a.d,c,d,b);a.c.C||(a.c.C=true,undefined);if(!DR(a.c.xc)){FW(a.c,true);bU(a.c)}j=a.c.qc;k=a.c.rc;if(j!=c||k!=d){EW(a.c,c,d);pR(a)}wX(a.c,e,f,g,h);uX(a.c,e,f,g,h,true);i&&!$U(a.c,e,f,g,h)&&fW(a.c,e,f,g,h);oU(a.c)}
function _E(a){$E();if(!NE(WE,a)){return a}a.indexOf('&')!=-1&&(a=ME(UE,a,'&amp;'));a.indexOf('<')!=-1&&(a=ME(XE,a,'&lt;'));a.indexOf('>')!=-1&&(a=ME(VE,a,'&gt;'));a.indexOf('"')!=-1&&(a=ME(YE,a,'&quot;'));a.indexOf("'")!=-1&&(a=ME(ZE,a,'&#39;'));return a}
function Ke(a){var b;if(a.td()){throw FD(new ydb("Should only call onAttach when the widget is detached from the browser's document"))}a.Sc=true;mF();GG(a.Wc,a);b=a.Tc;a.Tc=-1;b>0&&(a.Tc==-1?zF(a.Wc,b|(a.Wc.__eventBits||0)):(a.Tc|=b));a.qd();a.xd();Yo(a,true)}
function aQ(a,b,c){var d,e,f;e='%'.length;geb(b.substr(b.length-e,e),'%')!=feb(a.o,'%');d='%'.length;geb(c.substr(c.length-d,d),'%')!=feb(a.n,'%');a.o=b;a.n=c;f=a.tf();f.od('v-has-width',!Gbb(a.sf()));f.od('v-has-height',!Fbb(a.sf()));a.tf().pd(b);a.tf().nd(c)}
function QR(a){var b,c,d,e;a.C=false;JR(a,false);a.N&&RR(a);if(a.j){z$(a.q,a.G,a.I)}else if(a.s){b=$wnd.Math.min(a.e,a.G);c=$wnd.Math.max(a.f,a.H);d=$wnd.Math.min(a.K,a.I);e=$wnd.Math.max(a.L,a.J);b<=c&&d<=e&&A$(a.q,b,c,d,e)}sh(he(a.Q),'selecting');LR(a,false)}
function s4(a,b){var c;a.r&&S(a.i);c=(Fh(),b).touches[0];if(r4(a,c)){Dqb(Mqb((Ocb(wz),wz.k)),'TouchDelegate takes over');b.stopPropagation();a.d=DF(a);n4=a;a.o=$h(c.clientY||0);a.s[0]=a.o;a.b[0]=Wf();a.k=1;a.n=t4(a);Dqb(Mqb((Ocb(wz),wz.k)),'ST'+a.n);a.j=false}}
function Ufb(a,b){var c,d,e,f,g,h;if(b.e==0){throw FD(new zcb($yb))}h=a.d;c=b.d;if((h!=c?h>c?1:-1:Jgb(a.a,b.a,h))==-1){return a}f=c;e=Xp(Zq,uwb,16,f,15,1);if(f==1){e[0]=Fgb(a.a,h,b.a[0])}else{d=h-c+1;e=ygb(null,d,a.a,h,b.a,c)}g=new $fb(a.e,f,e);Ifb(g);return g}
function mW(a,b,c){var d,e,f,g,h,i,j;if(b){_S(a.wb,c);j=a.wb.b;i=a.wb.a;h=DU(a,c);d=h?h:sU(a,i,j);e=new yN(a,Wg(d.d));rN(e,Phb(a.i,c));sN(e,Phb(a.r,c));g=a.tb.contains(c)?a.ub:null;uN(e,g);xN(e,d.d,j,i);Shb(a.b,c,e)}else{f=Uhb(a.b,c);!!f&&(KM(f,false),ah(f.i))}}
function tZ(a,b,c){var d,e,f,g,h,i;h=dZ(a.a);if(h==null||h.length==0){return}a.d=b;a.f=c;UI(a.e);for(e=h,f=0,g=e.length;f<g;++f){d=e[f];SI(a.e,new tJ((i=new Jeb,i.a+='<div>',Heb(i,d.e),i.a+='<\/div>',i.a),d))}K1(he(a.e));a.c=A1();EJ(a,'');MM(a,1);GJ(a,new Z4(a))}
function YU(a,b){var c,d,e,f;e=a.a.M;f=b-e;c=b+a.nc+e;f<0&&(f=0);d=a.Rc+1;while(a.eb>f&&a.db>d){if(a.Ab-JU(a,a.zb)>c){a.Ab-=JU(a,a.zb);--a.zb}--a.db;a.eb-=JU(a,a.db)}if(a.eb<=0||a.db<=1){a.eb=0;a.db=d}while(c<a.Ab-JU(a,a.zb)&&a.zb>1){a.Ab-=JU(a,a.zb);--a.zb}aW(a)}
function hg(g){ag();function h(a,b,c,d,e){if(!e){e=a+' ('+b+':'+c;d&&(e+=':'+d);e+=')'}var f=Gf(e);jg(f,false)}
;function i(a){var b=a.onerror;if(b&&!g){return}a.onerror=function(){h.apply(this,arguments);b&&b.apply(this,arguments);return false}}
i($wnd);i(window)}
function F1(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.width;if(c==ivb){return E1(a)}var d=parseFloat(c);var e=parseFloat(b.borderLeftWidth)+parseFloat(b.borderRightWidth);var f=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight);return d+e+f}
function C1(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.height;if(c==ivb){return B1(a)}var d=parseFloat(c);var e=parseFloat(b.borderTopWidth)+parseFloat(b.borderBottomWidth);var f=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom);return d+e+f}
function EV(a){var b,c,d,e,f,g,h;g=new $ib(a.a.f);b=new mnb;Vg(a.yc,a.hb);xh(a.hb,Awb);for(f=(h=g.a.Uf().Ie(),new ejb(h));f.a.Se();){e=(d=f.a.Te(),d.ag());uh(a.hb,'cell cs'+e);c=a.hb.clientWidth|0;Rhb(b,e,new qdb(ffb(efb(new lfb(c),new lfb(10)))))}ah(a.hb);O$(a.a,b)}
function lq(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return Idb(c)}if(b==0&&d!=0&&c==0){return Idb(d)+22}if(b!=0&&d==0&&c==0){return Idb(b)+44}return -1}
function sU(a,b,c){var d,e,f,g;if(c<=a.Rc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Rc)){return BU(a,b,c)}else{e=b-a.bb;f=c-a.db;if(e<0||f<0){return null}g=a.jc.a.length>f;if(g){d=Njb(a.jc,f).a.length>e;if(d){return Njb(Njb(a.jc,f),e)}}}return null}
function dJ(a,b){var c,d;if(b==a.g){return}if(a.g){rJ(a.g);if(a.i){d=rF(he(a.g));mF();if(kF.Ae(d)==2){c=kF.ze(d,1);Ae(c,Yub,false)}}}if(b){re(b,xe((mF(),b.Wc))+'-'+Xub,true);if(a.i){d=rF(b.Wc);if(kF.Ae(d)==2){c=kF.ze(d,1);Ae(c,Yub,true)}}Pd();oc(a.Wc,new dc(b.Wc))}a.g=b}
function MK(a,b,c){if(!a.Sc){return}if(c<0){throw FD(new Bcb('Length must be a positive integer. Length: '+c))}if(b<0||c+b>oh((mF(),a.Wc),evb).length){throw FD(new Bcb('From Index: '+b+'  To Index: '+(b+c)+'  Text Length: '+oh((mF(),a.Wc),evb).length))}bM((mF(),a.Wc),b,c)}
function TN(a){var b,c,d,e,f,g,h,i,j;if(a.a.C){g=a.a.xc.f;h=a.a.xc.e;j=a.a.xc.K;i=a.a.xc.L;f=new Jeb;for(e=j;e<=i;e++){for(c=h;c<=g;c++){b=vU(a.a,c,e);b!=null&&(f.a+=''+b,f);c!=g&&(f.a+='\t',f)}e!=i&&(f.a+='\n',f)}d=f.a;return d}return "non-continous selection, can't copy"}
function sO(a,b){var c,d,e,f,g,h,i;c=a.d;if(!c){i='';for(f=a.t.T,g=0,h=f.length;g<h;++g){e=f[g];i+=e+'|'}i=teb(i,0,i.length-1);d='^(('+i+')!){0,1}';d+='([A-Za-z]{1,3}[0-9]{1,7})';d+='(:([A-Za-z]{1,3}[0-9]{1,7})){0,1}';a.d=c=new RegExp(d);pb(new XO(a),2000)}return c.test(b)}
function SU(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.oc+c;d<0&&(d=0);e=a.ob+1;while(a.cb>d&&a.bb>e){if(a.yb-NZ(a.a,a.xb)>f){a.yb-=NZ(a.a,a.xb);--a.xb}--a.bb;a.cb-=NZ(a.a,a.bb)}if(a.cb<=0||a.bb<=1){a.cb=0;a.bb=e}while(f<a.yb-NZ(a.a,a.xb)&&a.xb>1){a.yb-=NZ(a.a,a.xb);--a.xb}XV(a)}
function rq(a){var b,c,d,e,f;if(isNaN(a)){return Iq(),Hq}if(a<-9223372036854775808){return Iq(),Fq}if(a>=9223372036854775807){return Iq(),Eq}e=false;if(a<0){e=true;a=-a}d=0;if(a>=Asb){d=Vq(a/Asb);a-=d*Asb}c=0;if(a>=Bsb){c=Vq(a/Bsb);a-=c*Bsb}b=Vq(a);f=dq(b,c,d);e&&jq(f);return f}
function uO(a,b,c,d,e){var f;if(!a.f){return}if(a.k==-1){a.k=a.I.qc;a.n=a.I.rc}c?--a.n:d?++a.k:e?++a.n:--a.k;a.n==0&&(a.n=1);a.k==0&&(a.k=1);f=PU(a.I);a.n>f[2]-1&&(a.n=f[2]-1);a.k>f[3]-1&&(a.k=f[3]-1);if(b&&a.o!=-1);else{a.o=a.k;a.p=a.n}EO(a,a.o,a.p,a.k,a.n,false);iW(a.I,a.k,a.n)}
function IW(a,b){var c,d,e,f;if(a.T){for(f=(d=(new jjb(a.T)).a.Uf().Ie(),new ojb(d));f.a.Se();){e=(c=f.a.Te(),c.bg());ijb(new jjb(b),e)||Ne(e)}}a.Rc>0&&a.ob>0&&JW(a,b,1,a.Rc,1,a.ob);a.Rc>0&&JW(a,b,1,a.Rc,a.bb,a.xb);a.ob>0&&JW(a,b,1,a.db,a.zb,a.ob);JW(a,b,a.bb,a.xb,a.db,a.zb);a.T=b}
function zX(a,b){var c,d,e;if(a.Lc.a.length!=0){d=new pkb(b);while(d.a<d.c.a.length){c=nkb(d);oM(Njb(a.Lc,(c.row-1)*a.ob+c.col-1),c.value,c.cellStyle,c.needsMeasure);e=mvb+c.col+nvb+c.row;zW(a,e,c.value,c.cellStyle,c.needsMeasure);c.value==null?Uhb(a.e,e):Shb(a.e,e,c)}}pX(a,false)}
function Sgb(a,b){Rgb();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return Xgb(a,b)}g=(a.d&-2)<<4;j=Wfb(a,g);k=Wfb(b,g);d=Lgb(a,Vfb(j,g));e=Lgb(b,Vfb(k,g));i=Sgb(j,k);c=Sgb(d,e);f=Sgb(Lgb(j,d),Lgb(e,k));f=Ggb(Ggb(f,i),c);f=Vfb(f,g);i=Vfb(i,g<<1);return Ggb(Ggb(i,f),c)}
function GR(a,b){a.p=b;if(b){re(a.b,Uvb,true);sS(a.b,b);if(a.W){sS(a.W,b);re(a.W,Uvb,true)}if(a.X){sS(a.X,b);re(a.X,Uvb,true)}if(a.a){sS(a.a,b);re(a.a,Uvb,true)}LR(a,true)}else{re(a.b,Uvb,false);!!a.W&&re(a.W,Uvb,false);!!a.X&&re(a.X,Uvb,false);!!a.a&&re(a.a,Uvb,false);LR(a,false)}}
function IV(a){var b,c,d,e,f,g;for(c=(f=(new jjb(a.b)).a.Uf().Ie(),new ojb(f));c.a.Se();){b=(e=c.a.Te(),e.bg());g=b.d;d=b.b;SZ(a.a,d)||TZ(a.a,g)||!(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Rc||d>a.ob&&d<=a.xb&&g<=a.Rc||g>a.Rc&&g<=a.zb&&d<=a.ob)?(KM(b,false),ah(b.i)):qN(b)}}
function msb(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(fsb(c+3,a.length),a.charCodeAt(c+3)+(fsb(c+2,a.length),31*(a.charCodeAt(c+2)+(fsb(c+1,a.length),31*(a.charCodeAt(c+1)+(fsb(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+eeb(a,c++)}b=b|0;return b}
function ibb(a,b){var c,d,e;d=b;e=a.length;while(d<e){c=(fsb(d,a.length),a.charCodeAt(d));Lcb==null&&(Lcb=new RegExp('[A-Z]','i'));if(!(Lcb.test(String.fromCharCode(c))||(Kcb==null&&(Kcb=new RegExp('\\d')),Kcb.test(String.fromCharCode(c)))||c==95||c==46)){break}++d}return a.substr(b,d-b)}
function LY(a){var b,c,d,e,f;e=(!a.J&&(a.J=new m0),a.J).ab;f=(!a.B&&(a.B=new S_),a.B);for(d=new pkb(a.i);d.a<d.c.a.length;){b=nkb(d);Ojb(e,b,0)!=-1||mW(f.W,false,b)}if(e){for(c=new pkb(e);c.a<c.c.a.length;){b=nkb(c);Ojb(a.i,b,0)!=-1||mW(f.W,true,b)}}a.i.a=Xp(qB,tsb,1,0,5,1);!!e&&Ljb(a.i,e)}
function rZ(a,b,c){var d,e;b=ie(a.e);d=a.d;e=a.f;if(b+d>(iG(),nj($doc).clientWidth|0)){d=d-b;d<0&&(d=0)}c+e>(nj($doc).clientHeight|0)&&(e=$wnd.Math.max(0,(nj($doc).clientHeight|0)-c));e==0&&OM(a,(nj($doc).clientHeight|0)+$ub);QM(a,d,e);(mF(),a.Wc).style[Qtb]=(yl(),Rtb);s1((ng(),mg),new _4(a))}
function bnb(a){var b,c,d;d=-a.a.getTimezoneOffset();b=(d>=0?'+':'')+(d/60|0);c=gnb($wnd.Math.abs(d)%60);return (knb(),inb)[a.a.getDay()]+' '+jnb[a.a.getMonth()]+' '+gnb(a.a.getDate())+' '+gnb(a.a.getHours())+':'+gnb(a.a.getMinutes())+':'+gnb(a.a.getSeconds())+' GMT'+b+c+' '+a.a.getFullYear()}
function oO(a){var b,c,d,e,f,g,h,i;if(a.A!=null){g=yO(a,a.A);if(!g){return}e=$wnd.Math.min(g.col1,g.col2);d=$wnd.Math.max(g.col1,g.col2);i=$wnd.Math.min(g.row1,g.row2);h=$wnd.Math.max(g.row1,g.row2);for(b=e;b<=d;b++){for(f=i;f<=h;f++){c=sU(a.I,b,f);!!c&&(c.d.style[Evb]='',undefined)}}}a.A=null}
function Xgb(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=SD(HD(a.a[0],Zyb),HD(b.a[0],Zyb));m=_D(k);l=_D(XD(k,32));return l==0?new Zfb(i,m):new $fb(i,2,$p(Vp(Zq,1),uwb,16,15,[m,l]))}c=a.a;e=b.a;g=Xp(Zq,uwb,16,h,15,1);Tgb(c,d,e,f,g);j=new $fb(i,h,g);Ifb(j);return j}
function Wgb(a,b){Rgb();var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return Ffb(),Efb}d=a.d;c=a.a;if(d==1){e=SD(HD(c[0],Zyb),HD(b,Zyb));i=_D(e);g=_D(XD(e,32));return g==0?new Zfb(j,i):new $fb(j,2,$p(Vp(Zq,1),uwb,16,15,[i,g]))}h=d+1;f=Xp(Zq,uwb,16,h,15,1);f[d]=Vgb(f,c,d,b);k=new $fb(j,h,f);Ifb(k);return k}
function nU(a){var b,c,d,e,f,g;for(d=(g=(new $ib(a.u.a)).a.Uf().Ie(),new ejb(g));d.a.Se();){c=(e=d.a.Te(),e.ag());if(c.a!=a.qc||c.b!=a.rc){b=sU(a,c.a,c.b);if(b){dh(b.d,kwb);onb(a.t,b)}f=DU(a,mvb+c.a+nvb+c.b);if(f){onb(a.t,f);dh(f.d,kwb)}}}if(a.nb){b=sU(a,a.nb.a,a.nb.b);!!b&&dh(b.d,lwb)}pO(a.a.u)}
function uf(d,b){if(b instanceof Object){try{b.__java$exception=d;if(navigator.userAgent.toLowerCase().indexOf('msie')!=-1&&$doc.documentMode<9){return}var c=d;Object.defineProperties(b,{cause:{get:function(){var a=c.Ed();return a&&a.Cd()}},suppressed:{get:function(){return c.Dd()}}})}catch(a){}}}
function MG(){MG=kE;HG={_default_:SG,dragenter:RG,dragover:RG};JG={click:QG,dblclick:QG,mousedown:QG,mouseup:QG,mousemove:QG,mouseover:QG,mouseout:QG,mousewheel:QG,keydown:PG,keyup:PG,keypress:PG,touchstart:QG,touchend:QG,touchmove:QG,touchcancel:QG,gesturestart:QG,gestureend:QG,gesturechange:QG}}
function eK(a,b,c){var d;a.c=c;S(a);if(a.g){ob(a.g);a.g=null;bK(a)}a.a.M=b;KJ(a.a);d=!c&&a.a.F;a.i=b;if(d){if(b){aK(a);he(a.a).style[Qtb]=Stb;a.a.N!=-1&&a.a.Qe(a.a.H,a.a.N);(wJ(),vJ)._e(he(a.a),'rect(0px, 0px, 0px, 0px)');wH((tK(),xK()),a.a);a.g=new jK(a);pb(a.g,1)}else{T(a,200,Wf())}}else{cK(a)}}
function rR(a,b,c,d,e,f,g,h){if(a.d.o){a.d.o=false;OV(a.c)}a.d.e=g;EW(a.c,c,d);pR(a);a.c.C||(a.c.C=true,undefined);if(!DR(a.c.xc)){FW(a.c,true);bU(a.c)}wX(a.c,c,c,d,d);uX(a.c,c,c,d,d,true);f?CO(a.d.u,e):DO(a.d.u,e);FO(a.d.u,!g);b!=null?HO(a.d.u,b):HO(a.d.u,GZ(c,d));kV(a.c)||iW(a.c,c,d);h||oU(a.c)}
function qgb(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(Ffb(),zfb):(Ffb(),Efb)}f=a.d-d;e=Xp(Zq,uwb,16,f+1,15,1);rgb(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new $fb(a.e,f,e);Ifb(g);return g}
function Bgb(a,b){var c,d,e,f,g;d=HD(b,Zyb);if(ID(a,0)>=0){f=KD(a,d);g=RD(a,d)}else{c=XD(a,1);e=b>>>1;f=KD(c,e);g=RD(c,e);g=GD(VD(g,1),HD(a,1));if((b&1)!=0){if(ID(f,g)<=0){g=YD(g,f)}else{if(QD(YD(f,g),d)){g=GD(g,YD(d,f));f=YD(f,1)}else{g=GD(g,YD(VD(d,1),f));f=YD(f,2)}}}}return UD(VD(g,32),HD(f,Zyb))}
function LN(a,b){YH.call(this);this.a=Oi($doc);this.b=false;this.f=false;this.k=-1;this.g=-1;this.i=-1;this.j=-1;this.n=-1;this.d=-1;this.e=a;this.c=b;(mF(),this.Wc).className='grouping';Ae(this.Wc,'minus',true);this.a.innerHTML='&#x2212;';this.a.className='expand';Vg(this.Wc,this.a);IF(this.Wc,262145)}
function r0(a){o0();var b=a.a;if(!b.getPropertyValue)return '';if(b.getPropertyValue(_wb))return b.getPropertyValue(_wb);if(b.getPropertyValue(axb))return b.getPropertyValue(axb);if(b.getPropertyValue(bxb))return b.getPropertyValue(bxb);if(b.getPropertyValue(cxb))return b.getPropertyValue(cxb);return ''}
function DQ(){this.d=Oi($doc);this.b=Oi($doc);this.a=Oi($doc);this.d.className='v-spreadsheet-popupbutton-overlay-header';this.b.className='v-window-closebox';this.b.setAttribute('role',jtb);this.a.className='header-caption';Vg(this.d,this.b);Vg(this.d,this.a);IF(this.b,1);HF(this.b,this);ne(this,this.d)}
function KR(a,b,c,d,e){var f;a.e=b;a.K=d;a.f=c;a.L=e;a.Y=AR(a.q.W.W,d,e+1);a.Z=AR(a.q.g,b,c+1);f=a.Z==0||a.Y==0;wS(a.b,b,c,d,e);f&&sS(a.b,true);if(a.ab>0&a.r>0){wS(a.W,b,c,d,e);f&&sS(a.W,true)}if(a.ab>0){wS(a.X,b,c,d,e);f&&sS(a.X,true)}if(a.r>0){wS(a.a,b,c,d,e);f&&sS(a.a,true)}a.p&&GR(a,false);a.o||OR(a)}
function IL(a){var b=$doc.createElement('div');b.tabIndex=0;var c=$doc.createElement('input');c.type='text';c.tabIndex=-1;c.setAttribute(Dtb,'true');var d=c.style;d.opacity=0;d.height='1px';d.width='1px';d.zIndex=-1;d.overflow=iub;d.position=Stb;c.addEventListener('focus',a,false);b.appendChild(c);return b}
function nbb(b,c){b.u=-1;b.v=-1;if(c.length>=1){try{b.u=mdb(c[0])}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}}if(c.length>=2){try{b.v=mdb(c[1])}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}if(b.v==-1&&c[1].indexOf('-')!=-1){try{b.v=mdb(teb(c[1],0,ieb(c[1],yeb(45))))}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}}}}
function tg(a){var b,c,d,e,f,g,h;f=a.length;if(f==0){return null}b=false;c=new of;while(Wf()-c.a<16){d=false;for(e=0;e<f;e++){h=a[e];if(!h){continue}d=true;if(!h[0].Id()){a[e]=null;b=true}}if(!d){break}}if(b){g=[];for(e=0;e<f;e++){!!a[e]&&(g[g.length]=a[e],undefined)}return g.length==0?null:g}else{return a}}
function VW(a,b,c){var d,e,f,g;e=sU(a,b,c);d=DU(a,mvb+b+nvb+c);g=sU(a,a.qc,a.rc);f=DU(a,mvb+a.qc+nvb+a.rc);onb(a.u,new sY(a.qc,a.rc));if(g){onb(a.t,g);sh(g.d,lwb);dh(g.d,kwb)}if(f){onb(a.t,f);sh(f.d,lwb);dh(f.d,kwb)}qnb(a.u,new sY(b,c));if(e){qnb(a.t,e);sh(e.d,kwb)}if(d){qnb(a.t,d);sh(d.d,kwb)}a.rc=c;a.qc=b}
function LM(a){var b,c,d;d=a.Sc&&a.M;JJ(a);if(d){return false}else{a.cf(false);re(a,xe(vJ.$e((mF(),mF(),lh(a.Wc))))+'-'+pvb,true);c=new T0(a.Wc);b=r0(c);b==null&&(b='');a.cf(true);if(b.indexOf(pvb)!=-1){a.F=false;p0(a.Wc,new N5(a));return true}else{re(a,xe(vJ.$e((null,lh(a.Wc))))+'-'+pvb,false);return false}}}
function LT(b,c){var d,e,f,g;if(c.a.length>0){e=new Leb(KU(b.Dc));for(g=new pkb(c);g.a<g.c.a.length;){f=nkb(g);try{Heb(e,oeb(f,iwb,jwb+b.zc+' .cell.col'))}catch(a){a=ED(a);if(Oq(a,21)){d=a;Eqb(b.U,(Gpb(),Epb),'Invalid custom cell border style: '+f+', '+d.Fd())}else throw FD(a)}}$g(b.Dc);Vg(b.Dc,cj($doc,e.a))}}
function S_(){this.n=new mnb;this.J=new $_(this);this.s=new __;C_(this,(!yo&&(yo=new Go),yo.a));this.W=new BX(this,this.$);this.u=new RO(this,this.W);this.V=new zT(this);this.R=new vR(this,this.W);Vg(he(this.W),he(this.u));Vg(he(this.W),he(this.V));NH(this,this.W);Ie(this.W,new c0(this),(!Vo&&(Vo=new xn),Vo))}
function yO(a,b){var c,d,e,f,g,h;f=new sP;if(b.indexOf('!')!=-1){h=reb(b,'!',0)[0];return geb(KZ(a.t),h)?yO(a,reb(b,'!',0)[1]):null}else if(b.indexOf(':')!=-1){g=reb(b,':',0);c=SO(g[0]);f.col1=c.a;f.row1=c.b;d=SO(g[1]);f.col2=d.a;f.row2=d.b}else{e=SO(b);f.col1=e.a;f.row1=e.b;f.col2=f.col1;f.row2=f.row1}return f}
function o1(a,b,c){m1();a.onload=psb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.zf(c)});a.onerror=psb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.yf(c)});a.onreadystatechange=function(){('loaded'===a.readyState||'complete'===a.readyState)&&a.onload(arguments[0])}}
function Ffb(){Ffb=kE;var a;Afb=new Zfb(1,1);Cfb=new Zfb(1,10);Efb=new Zfb(0,0);zfb=new Zfb(-1,1);Bfb=$p(Vp(BB,1),tsb,11,0,[Efb,Afb,new Zfb(1,2),new Zfb(1,3),new Zfb(1,4),new Zfb(1,5),new Zfb(1,6),new Zfb(1,7),new Zfb(1,8),new Zfb(1,9),Cfb]);Dfb=Xp(BB,tsb,11,32,0,1);for(a=0;a<Dfb.length;a++){Dfb[a]=kgb(VD(1,a))}}
function pK(){var c=function(){};c.prototype={className:'',clientHeight:0,clientWidth:0,dir:'',getAttribute:function(a,b){return this[a]},href:'',id:'',lang:'',nodeType:1,removeAttribute:function(a,b){this[a]=undefined},setAttribute:function(a,b){this[a]=b},src:'',style:{},title:''};$wnd.GwtPotentialElementShim=c}
function k$(a,b,c,d,e){var f,g,h,i;if(b==0||c==0||d==0||e==0||b==c&&d==e&&b==a.W.qc&&d==a.W.rc){return}f=c;g=e;if(b>c){i=b;b=c;c=i}if(d>e){i=d;d=e;e=i}if(a.u.f){EO(a.u,a.Y,a.Z,f,g,false);nO(a.u)}else{h=tP(a.J,d,e,b,c);q9(a.X,a.W.rc,a.W.qc,h.row1,h.col1,h.row2,h.col2);HO(a.u,GZ(a.W.qc,a.W.rc));pR(a.R);pb(a.s,200)}}
function UR(a){vS(a.b,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.a&&vS(a.a,a.ab==0?0:a.ab+1,0,0,a.r);!!a.X&&vS(a.X,0,a.ab,a.r==0?0:a.r+1,0);!!a.W&&vS(a.W,0,a.ab,0,a.r);hS(a.B,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.A&&hS(a.A,a.ab==0?0:a.ab+1,0,0,a.r);!!a.F&&hS(a.F,0,a.ab,a.r==0?0:a.r+1,0);!!a.D&&hS(a.D,0,a.ab,0,a.r)}
function DS(a){this.F=a;this.B=Oi($doc);this.G=Oi($doc);this.k=Oi($doc);this.u=Oi($doc);this.a=Oi($doc);this.g=Oi($doc);this.i=Oi($doc);this.I=Oi($doc);this.o=Oi($doc);this.w=Oi($doc);this.c=Oi($doc);this.J=Oi($doc);this.p=Oi($doc);this.A=Oi($doc);this.d=Oi($doc);oS(this);IF(this.B,15736908);HF(this.B,new ES(this))}
function Jpb(a){Gpb();var b;b=veb(a,(Aob(),yob));switch(b){case 'ALL':return xpb;case 'CONFIG':return ypb;case 'FINE':return zpb;case 'FINER':return Apb;case 'FINEST':return Bpb;case 'INFO':return Cpb;case 'OFF':return Dpb;case 'SEVERE':return Epb;case Uyb:return Fpb;default:throw FD(new wdb('Invalid level "'+a+'"'));}}
function Cq(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==xub&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Cq(tq(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=bq(yub);c=eq(c,e,true);b=''+Bq(aq);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function Pnb(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function x5(a){var b,c,d,e,f;e=$doc.querySelectorAll('link[rel~="icon"]');for(c=0;c<e.length;c++){d=e[c];b=(Fh(),d).getAttribute('href')||'';if(b!=null&&b.indexOf('VAADIN/themes')!=-1&&(f=qyb.length,geb(b.substr(b.length-f,f),qyb))){b=qeb(b,'VAADIN/themes/.+?/favicon.ico','VAADIN/themes/'+a+qyb);d.setAttribute('href',b)}}}
function pO(a){var b,c,d,e,f,g,h;for(c=(h=(new $ib(a.F.a)).a.Uf().Ie(),new ejb(h));c.a.Se();){b=(g=c.a.Te(),g.ag());d=new sY(b.c,b.k);if(!Mhb(a.D,d)){b.d.style[Dvb]='';b.d.style[Evb]=''}}Vhb(a.F.a);a.f&&iO(a);for(f=new pib((new hib(a.D)).a);f.b;){e=oib(f);b=sU(a.I,e.ag().a,e.ag().b);if(b){b.d.style[Dvb]=e.bg();onb(a.F,b)}}}
function KM(a,b){var c,d;if((vJ.$e((mF(),mF(),lh(a.Wc))).className||'').indexOf(pvb)!=-1){p0(a.Wc,new P5(a,b))}else{re(a,xe(vJ.$e((null,lh(a.Wc))))+'-'+qvb,true);d=new T0(a.Wc);c=r0(d);c==null&&(c='');if(c.indexOf(qvb)!=-1){a.F=false;p0(a.Wc,new R5(a,b));a.K=false}else{re(a,xe(vJ.$e((null,lh(a.Wc))))+'-'+qvb,false);NM(a,b)}}}
function j1(a,b){var c;c=new abb;_ab(c,EF((Fh(),a).type));Uab(c,(w1(),H1(a)));Vab(c,I1(a));Eh.Pd(a)==1?Tab(c,(fbb(),cbb)):Eh.Pd(a)==2?Tab(c,(fbb(),ebb)):Eh.Pd(a)==4?Tab(c,(fbb(),dbb)):Tab(c,(fbb(),cbb));Sab(c,!!a.altKey);Wab(c,!!a.ctrlKey);Xab(c,!!a.metaKey);$ab(c,!!a.shiftKey);if(b){Yab(c,k1(c.c,b));Zab(c,l1(c.d,b))}return c}
function cU(a){var b,c,d,e,f,g;for(g=new pkb(a.hc);g.a<g.c.a.length;){e=nkb(g);sh(e,mwb)}for(d=new pkb(a.K);d.a<d.c.a.length;){b=nkb(d);sh(b,nwb)}if(a.jb){for(f=new pkb(a.jb);f.a<f.c.a.length;){e=nkb(f);sh(e,mwb)}}if(a.ib){for(c=new pkb(a.ib);c.a<c.c.a.length;){b=nkb(c);sh(b,nwb)}}Vhb(a.vc.a);Vhb(a.sc.a);Vhb(a.uc.a);Vhb(a.tc.a)}
function vO(a,b,c){var d,e,f,g,h,i,j,k;g=$wnd.Math.min(b.col1,b.col2);f=$wnd.Math.max(b.col1,b.col2);k=$wnd.Math.min(b.row1,b.row2);j=$wnd.Math.max(b.row1,b.row2);if(f>20000){Aqb(Mqb((Ocb(Kw),Kw.i)));return}for(d=g;d<=f;d++){for(i=k;i<=j;i++){e=sU(a.I,d,i);if(e){h=e.d;h.style[Dvb]=c;onb(a.F,e);Rhb(a.D,new sY(d,i),c)}}}Kjb(a.i,b)}
function j$(a,b){var c,d,e,f,g,h,i;for(d=new pib((new hib(b)).a);d.b;){c=oib(d);e=c.ag().a;h=c.bg().a;if(h==0){if(!a.v){a.v=new Tjb;Kjb(a.v,Kdb(e))}else Ojb(a.v,Kdb(e),0)!=-1||Kjb(a.v,Kdb(e))}a.g[e-1]=h}MV(a.W,false);if(a.K){for(g=new pkb(a.K);g.a<g.c.a.length;){f=nkb(g);nX(a.W,f)}}a.d=true;i=PU(a.W);x9(a.X,b,i[0],i[1],i[2],i[3])}
function w$(a,b){var c,d,e,f,g,h,i;for(d=new pib((new hib(b)).a);d.b;){c=oib(d);e=c.ag().a;h=c.bg().a;if(h==0){if(!a.w){a.w=new Tjb;Kjb(a.w,Kdb(e))}else Ojb(a.w,Kdb(e),0)!=-1||Kjb(a.w,Kdb(e))}a.N[e-1]=h}MV(a.W,false);if(a.K){for(g=new pkb(a.K);g.a<g.c.a.length;){f=nkb(g);nX(a.W,f)}}a.d=true;i=PU(a.W);L9(a.X,b,i[0],i[1],i[2],i[3])}
function SO(a){var b,c,d,e,f,g,h,i,j;b='';g='';if(a!=null){j=reb(a.toUpperCase(),'[0-9]',0);i=reb(a,'[A-z]',0);j.length>0&&(b=j[0]);i.length>0&&(g=i[i.length-1])}h=g.length>0?Kdb(mdb(g)).a:0;d=0;for(f=0;f<b.length;f++){e=(fsb(f,b.length),b.charCodeAt(f));c=0;e>=65&&e<=90?(c=e-64):e>=97&&e<=122&&(c=e-96);d=d*26+c}return new sY(d,h)}
function Rgb(){Rgb=kE;var a,b;Ogb=Xp(BB,tsb,11,32,0,1);Pgb=Xp(BB,tsb,11,32,0,1);Qgb=$p(Vp(Zq,1),uwb,16,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,Wyb,Xyb]);a=1;for(b=0;b<=18;b++){Ogb[b]=kgb(a);Pgb[b]=kgb(VD(a,b));a=SD(a,5)}for(;b<Pgb.length;b++){Ogb[b]=Sfb(Ogb[b-1],Ogb[1]);Pgb[b]=Sfb(Pgb[b-1],(Ffb(),Cfb))}}
function xT(a){var b,c,d,e,f,g;e=a.g.value;if(e.length>31){e=e.substr(0,31);pj(a.g,e)}xh(a.v,e);f=(a.v.offsetWidth||0)|0;f<50&&(f=50);c=a.u[a.r];b=hh(a.k);d=(Fh(),Eh).Vd(c)+((c.offsetWidth||0)|0)+10;while(d>b&&a.s<a.u.length-1){g=pT(a,a.s);d=Vq(d-g);a.t-=g;++a.s}a.c.style[rvb]=a.t+(em(),$ub);a.g.style[Atb]=f+5+$ub;c.style[Atb]=f+$ub}
function bQ(a){var b,c,d,e,f,g;g=a.sf();f=xe(a.tf().ld());a.tf().od('v-widget',true);$P(a,f,'-error',null!=g.ib);for(b=0;b<a.r.length;b++){e=a.r[b];a.tf().od(e,false);$P(a,f+'-',e,false)}a.r.length=0;if(Ebb(g.mb)){for(d=g.mb.Ie();d.Se();){c=d.Te();a.tf().od(c,true);$P(a,f+'-',c,true);Vf(a.r,c)}}g.lb!=null&&!geb(g.lb,f)&&se(a.tf(),g.lb)}
function uX(a,b,c,d,e,f){var g,h,i,j,k,l;a.v=false;if(f){$T(a);cU(a);i=sU(a,a.qc,a.rc);a.nb=null;!!i&&sh(i.d,lwb)}for(l=d;l<=e;l++){for(h=b;h<=c;h++){if(h!=a.qc||l!=a.rc){i=sU(a,h,l);onb(a.u,new sY(h,l));if(i){onb(a.t,i);dh(i.d,kwb)}j=DU(a,mvb+h+nvb+l);if(j){onb(a.t,j);dh(j.d,kwb)}}}}for(k=d;k<=e;k++){lW(a,k)}for(g=b;g<=c;g++){kW(a,g)}}
function TQ(){_e();this.j=Oi($doc);this.a=new XQ(this);this.f=new Tjb;this.j.className=Svb;this.j.setAttribute('role',jtb);this.e=new jN;qe(this.e,'v-spreadsheet-popupbutton-overlay');this.i=new gL;se(this.i,'overlay-layout');this.g=new DQ;BQ(this.g,this.e);eL(this.i,this.g);ZH(this.e,this.i);ne(this,this.j);He(this,this,(gn(),gn(),fn))}
function nS(a){this.p=a;this.k=Oi($doc);this.q=Oi($doc);this.d=Oi($doc);this.j=Oi($doc);this.a=Oi($doc);this.k.className=Zvb;dh(this.k,'paintmode');this.q.className='s-top';this.d.className='s-left';this.j.className='s-right';this.a.className='s-bottom';Vg(this.q,this.d);Vg(this.q,this.j);Vg(this.d,this.a);Vg(this.k,this.q);ne(this,this.k)}
function OU(a,b,c,d){var e,f,g,h;h=new Leb(jwb);Geb(Heb(Heb(h,a.zc),' .sheet .cell.cs'),b);for(g=new pib((new hib(c)).a);g.b;){e=oib(g);Adb(e.bg(),b)&&Heb(Geb(Heb(Heb((h.a+=twb,h),a.zc),rwb),e.ag()),'.cell.cs0')}for(f=new pib((new hib(d)).a);f.b;){e=oib(f);Adb(e.bg(),b)&&Heb(Geb(Heb(Heb((h.a+=twb,h),a.zc),pwb),e.ag()),'.cell.cs0')}return h.a}
function tX(a){var b,c,d,e,f,g;hX(a,a.fc,a.cc,a.mb,a.jb,false,a.ec);g=a.Z?a.ec+1:a.ec;if(a.gc.childNodes.length==g){return}$g(a.gc);for(e=1;e<=g;e++){c=Oi($doc);Vg(a.gc,c);(Fh(),Eh).ce(c,''+e);c.className=Iwb;f=e;mF();kF.Ge(c,1);HF(c,new XX(a,f))}$g(a.bc);for(d=1;d<=g-1;d++){b=Oi($doc);Vg(a.bc,b);b.className=Evb;b.style[rvb]=15*d+(em(),$ub)}}
function cH(){$wnd.addEventListener('mouseout',psb(function(a){var b=(MG(),IG);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent(oub,true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function XP(a,b){b.Af('id')&&(a.sf().kb!=null?vh(he(a.tf()),a.sf().kb):b.b||(he(a.tf()).removeAttribute('id'),undefined));Oq(a.sf(),126)?Oq(a.tf(),60)&&a.tf().Ad((a.sf(),0)):Oq(a.sf(),166)&&Oq(a.tf(),60)&&a.tf().Ad(a.sf().n);IP(a,b);bQ(a);aQ(a,a.sf().nb==null?'':a.sf().nb,a.sf().jb==null?'':a.sf().jb);if(!a.s&&a.vf()){a.s=true;null.ng(a.tf())}}
function LR(a,b){var c,d,e,f;if(a._){c=!(!!a.a&&a.a.K>a.b.K)&&b;e=!(!!a.X&&a.X.j>a.b.j)&&b;zS(a.b,c,e,c,e);if(a.a){c=!(!!a.b&&a.b.K>=a.a.K)&&b;d=!(!!a.W&&a.W.j>a.a.j)&&b;zS(a.a,c,d,c,d)}if(a.X){f=!(!!a.W&&a.W.K>a.X.K)&&b;e=!(!!a.b&&a.b.j>=a.X.j)&&b;zS(a.X,f,e,f,e)}if(a.W){f=!(!!a.X&&a.X.K>=a.W.K)&&b;d=!(!!a.a&&a.a.j>=a.W.j)&&b;zS(a.W,f,d,f,d)}}}
function yT(a){var b,c,d;if(a==null){return false}d=a.length;if(d<1||d>31){return false}for(c=0;c<d;c++){b=(fsb(c,a.length),a.charCodeAt(c));switch(b){case 47:case 92:case 63:case 42:case 93:case 91:case 58:return false;default:continue;}}fsb(0,a.length);if(a.charCodeAt(0)==39||(fsb(d-1,a.length),a.charCodeAt(d-1)==39)){return false}return true}
function hgb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;n=b.length;i=n;fsb(0,b.length);if(b.charCodeAt(0)==45){l=-1;m=1;--n}else{l=1;m=0}f=(ugb(),tgb)[10];e=n/f|0;q=n%f;q!=0&&++e;h=Xp(Zq,uwb,16,e,15,1);c=sgb[8];g=0;o=m+(q==0?f:q);for(p=m;p<i;p=o,o=p+f){d=mdb(b.substr(p,o-p));j=(Rgb(),Vgb(h,h,g,c));j+=Kgb(h,g,d);h[g++]=j}k=g;a.e=l;a.d=k;a.a=h;Ifb(a)}
function iH(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var b,c;try{b=psb(oG)()}finally{c=d&&d(a)}if(b!=null){return b}if(c!=null){return c}};$wnd.onunload=psb(function(a){try{iG();cG&&cp((!dG&&(dG=new BG),dG))}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}})}
function Ap(b,c){var d,e,f,g,h,i;if(!c){throw FD(new Zdb('Cannot fire null event'))}try{++b.b;h=(e=Dp(b,c.ke(),null),e);d=null;i=b.c?h.Wf(h.size()):h.Vf();while(b.c?i.Zf():i.Se()){g=b.c?i.$f():i.Te();try{c.ie(g)}catch(a){a=ED(a);if(Oq(a,18)){f=a;!d&&(d=new rnb);Rhb(d.a,f,d)}else throw FD(a)}}if(d){throw FD(new Jp(d))}}finally{--b.b;b.b==0&&Ep(b)}}
function wW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;k=(d.offsetWidth||0)|0;j=b-k;i=(Fh(),Eh).Vd(d);if(j>0){o=(iG(),(nj($doc).clientWidth|0)+kj($doc));n=kj($doc);h=o-i;e=i-n;h<b&&e>=j&&(i-=j)}l=Eh.Wd(d);p=(iG(),lj($doc));m=lj($doc)+(nj($doc).clientHeight|0);f=l-p;g=m-(l+((d.offsetHeight||0)|0));g<c&&f>=c?(l-=c):(l+=(d.offsetHeight||0)|0);QM(a.qb,i,l)}
function CP(a,b){a.C=b;a.F='1';!!a&&(he((!a.B&&(a.B=new S_),a.B)).tkPid='1',undefined);rp((!a.D&&(a.D=new up(a)),a.D),(Q1(),P1),a);h_((!a.B&&(a.B=new S_),a.B),a.F);JP(a,Nx,a.a);!a.B&&(a.B=new S_);a.g=new Iab;B_((!a.B&&(a.B=new S_),a.B),a.g);x_((!a.B&&(a.B=new S_),a.B),new iZ(a));a.b=He(y0(a.C),new jZ,(on(),on(),nn));o9(a.g.d,$p(Vp(qB,1),tsb,1,5,[]))}
function q2(c){var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(LA,'title',d);var d={setter:function(a,b){a.q=b},getter:function(a){return a.q}};c.Df(VA,jyb,d);var d={setter:function(a,b){a.n=Fcb(b)},getter:function(a){return Icb(a.n)}};c.Df(PA,kyb,d);var d={setter:function(a,b){a.nb=b},getter:function(a){return a.nb}};c.Df(vA,Atb,d)}
function HN(a,b){var c;b.b=a.b;b.e=a.e;b.f=a.f;xh(b.a,mh(a.a));c=(mF(),b.Wc).style;qe(b,a.Wc.className||'');a.i>-1&&(c[rvb]=a.i+(em(),$ub),undefined);a.j>-1&&(c[svb]=a.j+(em(),$ub),undefined);a.d>-1&&(c[ztb]=a.d+(em(),$ub),undefined);a.n>-1&&(c[Atb]=a.n+(em(),$ub),undefined);a.k>-1&&(c[Tub]=a.k+(em(),$ub),undefined);a.g>-1&&(c[Sub]=a.g+(em(),$ub),undefined)}
function Cgb(a,b){var c,d,e,f,g,h;f=(d=_D(a),d!=0?Idb(d):Idb(_D(WD(a,32)))+32);g=(e=_D(b),e!=0?Idb(e):Idb(_D(WD(b,32)))+32);h=$wnd.Math.min(f,g);f!=0&&(a=XD(a,f));g!=0&&(b=XD(b,g));do{if(ID(a,b)>=0){a=YD(a,b);a=XD(a,(c=_D(a),c!=0?Idb(c):Idb(_D(WD(a,32)))+32))}else{b=YD(b,a);b=XD(b,(c=_D(b),c!=0?Idb(c):Idb(_D(WD(b,32)))+32))}}while(ID(a,0)!=0);return VD(b,h)}
function mX(a,b,c){var d,e,f;f=0;e=0;d=c.d;if(a.ob>=b.col1&&b.col2>a.ob){HV(a,b,c);Rhb(a.Kb,b,c);f=1}else{f=AR(a.a.g,b.col1,b.col2+1);d.style[Atb]=f+(em(),$ub)}if(a.Rc>=b.row1&&b.row2>a.Rc){GV(a,b,c);Rhb(a.Kb,b,c);e=1}else{e=AR(a.a.W.W,b.row1,b.row2+1);d.style[ztb]=e+(em(),$ub)}f==0||e==0?(c.d.style[Wtb]=(wk(),ytb),undefined):(c.d.style[Wtb]='flex',undefined)}
function zgb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;n=a.a;o=a.d;p=a.e;if(o==1){d=HD(n[0],Zyb);e=HD(b,Zyb);f=KD(d,e);j=RD(d,e);p!=c&&(f=TD(f));p<0&&(j=TD(j));return $p(Vp(BB,1),tsb,11,0,[kgb(f),kgb(j)])}h=o;i=p==c?1:-1;g=Xp(Zq,uwb,16,h,15,1);k=$p(Vp(Zq,1),uwb,16,15,[Agb(g,n,o,b)]);l=new $fb(i,h,g);m=new $fb(p,1,k);Ifb(l);Ifb(m);return $p(Vp(BB,1),tsb,11,0,[l,m])}
function dX(a){var b,c,d,e,f,g,h;hX(a,a.I,a.F,a.lb,a.ib,true,a.H);g=a.Z?a.H+1:a.H;if(a.J.childNodes.length==g){return}$g(a.J);for(e=1;e<=g;e++){h=Wi($doc);c=Oi($doc);Vg(a.J,c);c.appendChild(h);(Fh(),Eh).ce(h,''+e);c.className=Iwb;f=e;mF();kF.Ge(c,1);HF(c,new VX(a,f))}$g(a.D);for(d=1;d<=g-1;d++){b=Oi($doc);Vg(a.D,b);b.className=Evb;b.style[svb]=18*d+(em(),$ub)}}
function Agb(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=HD(d,Zyb);for(h=c-1;h>=0;h--){k=UD(VD(j,32),HD(b[h],Zyb));if(ID(k,0)>=0){i=KD(k,f);j=RD(k,f)}else{e=XD(k,1);g=d>>>1;i=KD(e,g);j=RD(e,g);j=GD(VD(j,1),HD(k,1));if((d&1)!=0){if(ID(i,j)<=0){j=YD(j,i)}else{if(QD(YD(i,j),f)){j=GD(j,YD(f,i));i=YD(i,1)}else{j=GD(j,YD(VD(f,1),i));i=YD(i,2)}}}}a[h]=_D(HD(i,Zyb))}return _D(j)}
function xR(a,b){var c,d;a.S=fV(a.Q,a.f,a.L);a.T=gV(a.Q,a.f,a.L);a.R=cV(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.yc);a.u=(a.Q.yc.scrollTop||0)|0;a.c=(c=kj($doc),w1(),(Fh(),b).type.indexOf(Tvb)!=-1?Nm(b.changedTouches[0])+c:$h(b.clientX||0)+c);a.d=(d=lj($doc),b.type.indexOf(Tvb)!=-1?Om(b.changedTouches[0])+d:$h(b.clientY||0)+d);a.U=a.f;a.V=a.L;TR(a)}
function $gb(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=GD(GD(SD(HD(a[f],Zyb),HD(a[h],Zyb)),HD(c[f+h],Zyb)),HD(_D(d),Zyb));c[f+h]=_D(d);d=XD(d,32)}c[f+b]=_D(d)}pgb(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=GD(GD(SD(HD(a[e],Zyb),HD(a[e],Zyb)),HD(c[g],Zyb)),HD(_D(d),Zyb));c[g]=_D(d);d=XD(d,32);++g;d=GD(d,HD(c[g],Zyb));c[g]=_D(d);d=XD(d,32)}return c}
function SP(b){var c,d,e,f;e=new A3(b.kg);try{f=S3(new r3(e,'getWidget'));d=z3(f);return d}catch(a){a=ED(a);if(Oq(a,79)){c=a;throw FD(new zdb('Default implementation of createWidget() does not work for '+Qcb(b.kg)+'. This might be caused by explicitely using '+'super.createWidget() or some unspecified '+'problem with the widgetset compilation.',c))}else throw FD(a)}}
function Kfb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;f=b.e;if(f==0){throw FD(new zcb($yb))}e=b.d;d=b.a;if(e==1){return zgb(a,d[0],f)}n=a.a;o=a.d;c=o!=e?o>e?1:-1:Jgb(n,d,o);if(c<0){return $p(Vp(BB,1),tsb,11,0,[Efb,a])}p=a.e;h=o-e+1;k=e;i=p==f?1:-1;g=Xp(Zq,uwb,16,h,15,1);j=ygb(g,h,n,o,d,e);l=new $fb(i,h,g);m=new $fb(p,k,j);Ifb(l);Ifb(m);return $p(Vp(BB,1),tsb,11,0,[l,m])}
function Nfb(a,b){var c,d,e,f;c=a.e<0?new $fb(1,a.d,a.a):a;d=b.e<0?new $fb(1,b.d,b.a):b;if(c.e==0){return d}else if(d.e==0){return c}if((c.d==1||c.d==2&&c.a[1]>0)&&(d.d==1||d.d==2&&d.a[1]>0)){return kgb(Cgb((f=c.d>1?UD(VD(c.a[1],32),HD(c.a[0],Zyb)):HD(c.a[0],Zyb),SD(c.e,f)),(e=d.d>1?UD(VD(d.a[1],32),HD(d.a[0],Zyb)):HD(d.a[0],Zyb),SD(d.e,e))))}return Dgb(Hfb(c),Hfb(d))}
function tN(a,b){if(b){Mm(a.e,UH(a.g.a));te(a.g,false);a.e.style[Wtb]=(wk(),aub);a.e.focus();a.e.select()}else{kI(a.g,a.e.value);te(a.g,true);a.e.style[Wtb]=(wk(),ytb);dU(a.r,UH(a.g.a),a.b,a.d)}ke(a.f)&&(ke(a.a)||ke(a.g)||geb((wk(),aub),Ej(a.e.style)))?(je(a.f).className||'').indexOf(zvb)!=-1||re(a.f,zvb,true):(je(a.f).className||'').indexOf(zvb)!=-1&&re(a.f,zvb,false)}
function MW(a,b,c){var d,e;a._=true;bT(a.$,'.'+a.zc+' .sheet div'+(iwb+a.qc+'.row'+a.rc),0);qe(a.sb,mvb+a.qc+nvb+a.rc+' cell'+' '+(e=tU(a,a.qc,a.rc),!e?'cs0':e.cellStyle));if(jV(a,mvb+a.qc+nvb+a.rc)){a.ab=true;d=DU(a,mvb+a.qc+nvb+a.rc);!!d&&pe(a.sb,Fj(d.d.style))}iX(a);b&&(_U(a,a.qc,a.rc)||iW(a,a.qc,a.rc),s1((ng(),mg),new PX(a,false)));s1((ng(),mg),new RX(a,c));NK(a.sb,c)}
function mdb(a){var b,c,d,e,f;if(a==null){throw FD(new _db(Hsb))}d=a.length;e=d>0&&(fsb(0,a.length),a.charCodeAt(0)==45||(fsb(0,a.length),a.charCodeAt(0)==43))?1:0;for(b=e;b<d;b++){if(Mcb((fsb(b,a.length),a.charCodeAt(b)))==-1){throw FD(new _db(Gsb+a+'"'))}}f=parseInt(a,10);c=f<Isb;if(isNaN(f)){throw FD(new _db(Gsb+a+'"'))}else if(c||f>ysb){throw FD(new _db(Gsb+a+'"'))}return f}
function y$(a,b,c){var d,e,f,g,h,i,j;b==0?(b=1):b<0&&(b=HU(a.W)+1);b>a.i&&(b=a.i);c==0?(c=1):c<0&&(c=rU(a.W)+1);c>a.P&&(c=a.P);h=a.W.qc;i=a.W.rc;if(b<=h){d=b;e=h}else{d=h;e=b}if(c<=i){f=c;g=i}else{f=i;g=c}if(a.u.f){EO(a.u,a.Y,a.Z,b,c,false)}else{j=tP(a.J,f,g,d,e);wX(a.W,j.col1,j.col2,j.row1,j.row2);uX(a.W,j.col1,j.col2,j.row1,j.row2,true);HO(a.u,HZ(j.col1,j.col2,j.row1,j.row2))}}
function hq(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=kq(b)-kq(a);g=wq(b,j);i=dq(0,0,0);while(j>=0){h=nq(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&jq(i);if(f){if(d){aq=tq(a);e&&(aq=zq(aq,(Iq(),Gq)))}else{aq=dq(a.l,a.m,a.h)}}return i}
function reb(a,b,c){var d,e,f,g,h,i,j,k;d=new RegExp(b,'g');j=Xp(wB,Lsb,2,0,6,1);e=0;k=a;g=null;while(true){i=d.exec(k);if(i==null||k==''||e==c-1&&c>0){j[e]=k;break}else{h=i.index;j[e]=k.substr(0,h);k=teb(k,h+i[0].length,k.length);d.lastIndex=0;if(g==k){j[e]=k.substr(0,1);k=k.substr(1)}g=k;++e}}if(c==0&&a.length>0){f=j.length;while(f>0&&j[f-1]==''){--f}f<j.length&&(j.length=f)}return j}
function YN(a,b){var c,d,e,f;d=!a.c.vb&&!!(Fh(),b).ctrlKey||!!(Fh(),b).metaKey;f=CX(b);e=nV(a.c,f);if(!d||!e){return}if(((Fh(),b).keyCode|0)==67||(b.keyCode|0)==88){(_e(),$e).Xe((mF(),a.Wc));NK(a,TN(a.a));c=oh(a.Wc,evb).length;c>0&&MK(a,0,c);a.Wc.style[Sub]=(em(),'100.0px');zg((ng(),new aO(a,b)),100)}if((b.keyCode|0)==86){(mF(),a.Wc)[evb]='';(_e(),$e).Xe(a.Wc);zg((ng(),new cO(a)),100)}}
function n1(){var a,b,c,d,e,f,g,h,i,j;this.a=new rnb;new mnb;a=$doc;a.getElementsByTagName(hxb)[0];i=a.getElementsByTagName('script');for(e=0;e<i.length;e++){b=i[e];j=b.src;j!=null&&j.length!=0&&onb(this.a,j)}g=a.getElementsByTagName(otb);for(d=0;d<g.length;d++){f=g[d];h=f.rel;c=f.href;heb(ixb,h)&&c!=null&&c.length!=0&&onb(this.a,c);heb('import',h)&&c!=null&&c.length!=0&&onb(this.a,c)}}
function HS(a,b){var c,d;if(!a.c._){if(!a.b){return}d=(Fh(),b).keyCode|0;c=Eh.Qd(b);if((c==122||c==121)&&(!!b.ctrlKey||!!b.metaKey)){Eh.Ud(b);b.stopPropagation();return}if(c==0){switch(d){case 38:case 40:case 37:case 39:case 9:case 8:case 46:case 32:Eh.Ud(b);b.stopPropagation();break;case 13:B$(a.c.a,b,String.fromCharCode(c));}}else !b.ctrlKey&&!b.metaKey&&B$(a.c.a,b,String.fromCharCode(c))}}
function Igb(a,b,c,d,e){var f,g;f=GD(HD(b[0],Zyb),HD(d[0],Zyb));a[0]=_D(f);f=WD(f,32);if(c>=e){for(g=1;g<e;g++){f=GD(f,GD(HD(b[g],Zyb),HD(d[g],Zyb)));a[g]=_D(f);f=WD(f,32)}for(;g<c;g++){f=GD(f,HD(b[g],Zyb));a[g]=_D(f);f=WD(f,32)}}else{for(g=1;g<c;g++){f=GD(f,GD(HD(b[g],Zyb),HD(d[g],Zyb)));a[g]=_D(f);f=WD(f,32)}for(;g<e;g++){f=GD(f,HD(d[g],Zyb));a[g]=_D(f);f=WD(f,32)}}ID(f,0)!=0&&(a[g]=_D(f))}
function BU(a,b,c){var d,e,f,g,h,i,j,k,l;f=b-1;j=c-1;if(j<0||f<0){return null}if(a.Rc<c){l=c>=a.db;k=a.d.a.length>c-a.db;if(l&&k){g=Njb(a.d,c-a.db).a.length>f;if(g){return Njb(Njb(a.d,c-a.db),f)}}}else if(a.ob<b){h=b-a.bb;k=a.Pc.a.length>j;if(k){i=b>=a.bb;g=Njb(a.Pc,j).a.length>h;if(i&&g){return Njb(Njb(a.Pc,j),h)}}}else{e=j*a.ob+f;d=a.Lc.a.length>e;if(e>=0&&d){return Njb(a.Lc,e)}}return null}
function w5(a,b,c,d,e){var f,g;f=null;if(b!=null){f=t5(d);!f&&Kqb(Mqb((Ocb(Nz),Nz.k)),'Did not find the link tag for the old theme ('+d+'), adding a new stylesheet for the new theme ('+e+')')}if(c!=null){g=Si($doc);g.rel=ixb;g.type=Bwb;g.href=e;o1(g,new K5(a,c,e,f),null);f?Yg($doc.getElementsByTagName(hxb)[0],g,f):Vg($doc.getElementsByTagName(hxb)[0],g)}else{!!f&&_g(Ih((Fh(),f)),f);r5(a,null)}}
function FR(a,b){var c,d,e,f,g,h,i,j;a.o=true;c=(g=kj($doc),w1(),(Fh(),b).type.indexOf(Tvb)!=-1?Nm(b.changedTouches[0])+g:$h(b.clientX||0)+g);d=(h=lj($doc),b.type.indexOf(Tvb)!=-1?Om(b.changedTouches[0])+h:$h(b.clientY||0)+h);if(yR(a,d,c)){return}i=c-a.v+ph(a.Q.yc)-a.t;j=d-a.w+((a.Q.yc.scrollTop||0)|0)-a.u;i-=70;j-=20;e=a.q.g;f=a.q.W.W;a.U=zR(e,a.O,i,true);a.V=zR(f,a.P,j,true);y$(a.Q.a,a.U,a.V)}
function ER(a,b){var c,d,e,f,g,h,i,j,k,l;a.j=false;a.s=false;c=(i=kj($doc),w1(),(Fh(),b).type.indexOf(Tvb)!=-1?Nm(b.changedTouches[0])+i:$h(b.clientX||0)+i);d=(j=lj($doc),b.type.indexOf(Tvb)!=-1?Om(b.changedTouches[0])+j:$h(b.clientY||0)+j);if(yR(a,d,c)){return}k=c-a.v+ph(a.Q.yc)-a.t;l=d-a.w+((a.Q.yc.scrollTop||0)|0)-a.u;f=a.q.g;h=a.q.W.W;e=zR(f,a.e,k,false);g=zR(h,a.K,l,false);e>=0&&g>=0&&VR(a,e,g)}
function eX(b){var c,d,e,f,g,h,i,j;i=b.a.n;try{f=new Vjb(new $ib(i));Nkb();zkb(f.a,f.a.length);g=f.a.length;h=new Leb(KU(b.Cc));for(d=0;d<g;d++){e=($rb(d,f.a.length),f.a[d]);j=zhb(Cnb(i.a,e));Heb(h,jwb+b.zc+' .sheet .cell.cf'+e+' {'+j+'}')}$g(b.Cc);Vg(b.Cc,cj($doc,h.a))}catch(a){a=ED(a);if(Oq(a,21)){c=a;Jqb(b.U,'SheetWidget:updateConditionalFormattingStyles: '+yf(c,c.Fd())+Hwb)}else throw FD(a)}}
function dfb(a,b){var c,d,e,f,g,h;e=jfb(a);h=jfb(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Yyb)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*Yyb)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=jgb(a.f)),a.c);g=(!b.c&&(b.c=jgb(b.f)),b.c);d<0?(f=Sfb(f,Zgb(-d))):d>0&&(g=Sfb(g,Zgb(d)));return Gfb(f,g)}}else return e<h?-1:1}
function VT(a){var b,c,d,e,f,g,h,i;ah(a.fb);for(f=new pkb(a.K);f.a<f.c.a.length;){d=nkb(f);g=Ih((Fh(),d));!!g&&g.removeChild(d)}a.K.a=Xp(qB,tsb,1,0,5,1);for(e=new pkb(a.hc);e.a<e.c.a.length;){d=nkb(e);g=Ih((Fh(),d));!!g&&g.removeChild(d)}a.hc.a=Xp(qB,tsb,1,0,5,1);for(i=new pkb(a.jc);i.a<i.c.a.length;){h=nkb(i);for(c=new pkb(h);c.a<c.c.a.length;){b=nkb(c);ah(b.d)}h.a=Xp(qB,tsb,1,0,5,1)}a.jc.a=Xp(qB,tsb,1,0,5,1)}
function JT(a,b){var c,d,e,f,g;!a.Bc&&(a.Bc=new mnb);d=b.b;g=b.k;e=mvb+d+nvb+g;if(d!=0&&g!=0){Shb(a.Bc,e,b);if(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Rc||d>a.ob&&d<=a.xb&&g<=a.Rc||g>a.Rc&&g<=a.zb&&d<=a.ob){c=sU(a,d,g);f=b.Vc;if(f){if(a==f){rM(c,(mF(),b.Wc))}else{Ne(b);rM(c,(mF(),b.Wc));Pe(b,a)}}else{rM(c,(mF(),b.Wc));Pe(b,a)}}}else{while(Qhb(a.Bc,e)){MQ(b,--d);e=mvb+d+nvb+g}Shb(a.Bc,e,b)}SQ(b,a,a.yc)}
function WT(a,b){var c,d,e,f,g,h;a.Db=false;for(e=new pkb(yU(a));e.a<e.c.a.length;){d=nkb(e);NV(a,d)}a.S=null;for(h=(f=(new jjb(a.Ac)).a.Uf().Ie(),new ojb(f));h.a.Se();){g=(c=h.a.Te(),c.bg());NV(a,g)}Vhb(a.Ac);if(a.T){Vhb(a.T);a.T=null}VT(a);Vhb(a.e);Vhb(a.pc);WS(a.w);ZT(a);bU(a);XT(a);aU(a);YT(a);if(b){WS(a.Dc);ah(a.w);ah(a.Cc);ah(a.Dc);ah(a.$);ah(a.Vb);ah(a.Fb);!!a.pb&&ah(a.pb);if(a.Nb){cM(a.Nb.a);a.Nb=null}}}
function $U(a,b,c,d,e){return (b<=a.ob||b>=CU(a)&&b<=HU(a))&&(d<=a.Rc||d<=QU(a)&&d>=rU(a))&&(b>=a.bb&&b<=a.xb&&e>=a.db&&e<=a.zb||b<=a.ob&&e<=a.Rc||b>a.ob&&b<=a.xb&&e<=a.Rc||e>a.Rc&&e<=a.zb&&b<=a.ob)&&(c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb||c<=a.ob&&d<=a.Rc||c>a.ob&&c<=a.xb&&d<=a.Rc||d>a.Rc&&d<=a.zb&&c<=a.ob)&&(c>=a.bb&&c<=a.xb&&e>=a.db&&e<=a.zb||c<=a.ob&&e<=a.Rc||c>a.ob&&c<=a.xb&&e<=a.Rc||e>a.Rc&&e<=a.zb&&c<=a.ob)}
function EO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b==d&&c==e){g=GZ(b,c)}else{if(b>d){o=b;b=d;d=o}if(c>e){o=c;c=e;e=o}g=GZ(b,c)+':'+GZ(d,e)}if(f&&a.s>=0){g=','+g;++a.q}k=KK(a.e);i=k>0;if(i){l=JK(a.e);h=l+k;a.s=l;a.q=h}else if(f||a.s<0){l=a.q;h=a.q;a.s=a.q}else{l=a.s;h=a.q}p=(j=LK(a.e),j==null?'':j);m=p.substr(0,l);n=teb(p,h,p.length);p=m+g+n;a.q=(m+g).length;NK(a.e,p);a.e==a.w&&NK(a.j,p);s1((ng(),mg),new fP(a))}
function XI(a,b){var c,d,e;d=(mF(),_i($doc));a.d=Yi($doc);Vg(d,wF(a.d));if(!b){e=$i($doc);Vg(a.d,wF(e))}a.i=b;c=(iI(),hI).We();Vg(c,wF(d));oe(a,c);Pd();Cb(jd,a.Wc);a.Tc==-1?zF(a.Wc,2225|(a.Wc.__eventBits||0)):(a.Tc|=2225);a.Wc.className='gwt-MenuBar';b?re(a,xe(a.Wc)+'-'+'vertical',true):re(a,xe(a.Wc)+'-'+'horizontal',true);a.Wc.style['outline']='0px';a.Wc.setAttribute('hideFocus','true');He(a,new oJ(a),(_m(),_m(),$m))}
function qN(a){var b,c;if(a.c){b=hh(a.c);c=ih(a.c);if(b>=gh(a.o)&&b<hh(a.o)&&c>=ih(a.o)&&c<=fh(a.o)){mN(a);(mF(),a.Wc).style[Xtb]=hub;!!a.t&&(a.t.style[Xtb]=hub,undefined);a.i.style[Xtb]=(sm(),hub);a.M||TM(a)}else{(mF(),a.Wc).style[Xtb]=iub;!!a.t&&(a.t.style[Xtb]=iub,undefined);a.i.style[Xtb]=(sm(),iub)}}else{(mF(),a.Wc).style[Xtb]=iub;!!a.t&&(a.t.style[Xtb]=iub,undefined);a.i.style[Xtb]=(sm(),iub);KM(a,false);ah(a.i)}}
function wO(a,b){var c,d,e,f,g,h,i,j,k,l;mO(a);k=xO(a,b);Vhb(a.G);e=0;d=0;for(j=new pkb(k);j.a<j.c.a.length;){i=nkb(j);h=yO(a,i);if(!h){continue}if(Qhb(a.G,i)){c=Phb(a.G,i)}else{d=d%eO.a.length;c=Njb(eO,d);Shb(a.G,i,c);++d}c=oeb(c,'%s','0.25');vO(a,h,c);g=b.indexOf(i,e);f=(mF(),Wi($doc));l=b.substr(e,g-e);l=peb(l,' ','&nbsp;');f.innerHTML=l||'';Vg(a.r,f);e=g+i.length;f=Wi($doc);(Fh(),Eh).ce(f,i);f.style[Dvb]=c;Vg(a.r,f)}}
function NV(b,c){var d,e,f,g,h;try{d=(mF(),c.Wc);g=Ih((Fh(),d));h=c.Vc;e=mf(b.yc,g)||mf(b.Mc,g)||mf(b.Oc,g)||mf(b.c,g);if(e||M(c,b.S)||!!g&&!!g.parentNode&&Zg(b.yc,g.parentNode)){Pe(c,null);f=Ih(d);!!f&&f.removeChild(d);return true}else if(M(b,h)){Pe(c,null);return true}else{return false}}catch(a){a=ED(a);if(Oq(a,21)){Eqb(b.U,(Gpb(),Fpb),'Exception while removing child widget from SheetWidget')}else throw FD(a)}return false}
function ST(a,b){var c,d,e,f,g,h;for(e=new pkb(b);e.a<e.c.a.length;){d=nkb(e);h=mvb+d.col+nvb+d.row;d.value==null?Uhb(a.e,h):Shb(a.e,h,d);if(!zW(a,h,d.value,d.cellStyle,d.needsMeasure)){f=null;eV(a,d.col,d.row)?(f=Njb(Njb(a.jc,d.row-a.db),d.col-a.bb)):dV(a,d.col,d.row)&&(f=BU(a,d.col,d.row));if(f){oM(f,d.value,d.cellStyle,d.needsMeasure);f.g=true}g=a.Rc>0?0:a.bb;for(;g<d.col;g++){c=sU(a,g,d.row);!!c&&(c.g=true)}}}pX(a,false)}
function xV(b){var c,d,e,f,g;e=b.Kc+((b.yc.scrollTop||0)|0);d=ph(b.yc);g=e-b.Pb;c=d-b.Ob;if($wnd.Math.abs(g)<(b.a.M/2|0)&&$wnd.Math.abs(c)<(b.a.j/2|0)){return}try{if($wnd.Math.abs(c)>(b.a.j/2|0)){b.Ob=d;c>0?TU(b,d):c<0&&SU(b,d)}if($wnd.Math.abs(g)>(b.a.M/2|0)){b.Pb=e;g>0?XU(b,e):g<0&&YU(b,e)}e5(b.Qb)}catch(a){a=ED(a);if(Oq(a,18)){f=a;Jqb(b.U,'SheetWidget:updateSheetDisplay: '+yf(f,f.Fd()))}else throw FD(a)}_V(b);cX(b,g,c);nU(b)}
function gcb(){FQ.call(this);this.q=new pcb;this.c=new hcb;this.e=new mnb;this.e.put('error',new mcb('Error: ',' - close with ESC-key',(Xbb(),Vbb)));this.e.put('warning',new mcb('Warning: ',null,Vbb));this.e.put('humanized',new mcb('Info: ',null,Vbb));this.e.put('tray',new mcb('Status: ',null,Vbb));this.e.put('assistive',new mcb('Note: ',null,Vbb));this.g=new $bb;this.d=new jcb;this.j=new ncb;this.k=new ocb;this.lb='v-ui';this.n=1}
function Lgb(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new $fb(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=HD(a.a[0],Zyb);d=HD(b.a[0],Zyb);g<0&&(c=TD(c));i<0&&(d=TD(d));return kgb(YD(c,d))}e=f!=h?f>h?1:-1:Jgb(a.a,b.a,f);if(e==-1){l=-i;k=g==i?Mgb(b.a,h,a.a,f):Hgb(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return Ffb(),Efb}k=Mgb(a.a,f,b.a,h)}else{k=Hgb(a.a,f,b.a,h)}}j=new $fb(l,k.length,k);Ifb(j);return j}
function oW(a,b){var c,d,e,f,g;if(!a.s){a.s=b}else{Vhb(a.s);!!b&&shb(a.s,b)}if(!!b&&b.a.c+b.b.c!=0){g=new Jeb;for(e=(f=(new $ib(b)).a.Uf().Ie(),new ejb(f));e.a.Se();){c=oeb(oeb((d=e.a.Te(),d.ag()),mvb,iwb),' r','.r');g.a+=''+c;e.a.Se()&&(g.a+=',',g)}if(!a.pb){a.pb=Xi($doc);a.pb.type=Bwb;vh(a.pb,a.zc+'-hyperlinkstyle');Vg(a.w.parentNode,a.pb);g.a+='{ cursor: pointer !important; }';ZS(a.pb,g.a)}else{bT(a.pb,g.a,0)}}else{!!a.pb&&bT(a.pb,swb,0)}}
function yG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;k=new mnb;if(b!=null&&b.length>1){l=b.substr(1);for(h=reb(l,'&',0),i=0,j=h.length;i<j;++i){g=h[i];f=reb(g,'=',2);e=f[0];if(e.length==0){continue}m=f.length>1?f[1]:'';try{m=(Mp(m),o=/\+/g,decodeURIComponent(m.replace(o,'%20')))}catch(a){a=ED(a);if(!Oq(a,81))throw FD(a)}n=k.get(e);if(!n){n=new Tjb;k.put(e,n)}n.add(m)}}for(d=k.Uf().Ie();d.Se();){c=d.Te();c.cg(Qkb(c.bg()))}k=(Nkb(),new fmb(k));return k}
function cX(a,b,c){var d,e,f,g,h,i,j;e=Njb(Njb(a.jc,0),0);j=Njb(a.jc,a.jc.a.length-1);h=Njb(j,j.a.length-1);f=e.k;i=h.k;d=e.c;g=h.c;OV(a);if(f>a.zb||i<a.db||d>a.xb||g<a.bb){dW(a,a.db,a.zb,a.bb,a.xb,a.jc,a.yc);b!=0&&a.ob>0&&dW(a,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Rc>0&&dW(a,1,a.Rc,a.bb,a.xb,a.Pc,a.Oc)}else{eW(a,b,c,a.db,a.zb,a.bb,a.xb,a.jc,a.yc);b!=0&&a.ob>0&&eW(a,b,0,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Rc>0&&eW(a,0,c,1,a.Rc,a.bb,a.xb,a.Pc,a.Oc)}}
function Jfb(a,b){var c,d,e,f,g,h,i,j,k,l;if(b.e==0){throw FD(new zcb($yb))}e=b.e;if(b.d==1&&b.a[0]==1){return b.e>0?a:a.e==0?a:new $fb(-a.e,a.d,a.a)}k=a.e;j=a.d;d=b.d;if(j+d==2){l=KD(HD(a.a[0],Zyb),HD(b.a[0],Zyb));k!=e&&(l=TD(l));return kgb(l)}c=j!=d?j>d?1:-1:Jgb(a.a,b.a,j);if(c==0){return k==e?Afb:zfb}if(c==-1){return Efb}g=j-d+1;f=Xp(Zq,uwb,16,g,15,1);h=k==e?1:-1;d==1?Agb(f,a.a,j,b.a[0]):ygb(f,g,a.a,j,b.a,d);i=new $fb(h,g,f);Ifb(i);return i}
function rX(a,b,c,d,e,f){var g,h;Uhb(a.Bc,mvb+d+nvb+c);Shb(a.Bc,mvb+f+nvb+e,b);h=b.Vc;if(f>=a.bb&&f<=a.xb&&e>=a.db&&e<=a.zb||f<=a.ob&&e<=a.Rc||f>a.ob&&f<=a.xb&&e<=a.Rc||e>a.Rc&&e<=a.zb&&f<=a.ob){g=sU(a,f,e);if(h){if(M(a,h)){(d>=a.bb&&d<=a.xb&&c>=a.db&&c<=a.zb||d<=a.ob&&c<=a.Rc||d>a.ob&&d<=a.xb&&c<=a.Rc||c>a.Rc&&c<=a.zb&&d<=a.ob)&&mM(sU(a,d,c));rM(g,(mF(),b.Wc))}else{Ne(b);rM(g,(mF(),b.Wc));Pe(b,a)}}else{rM(g,(mF(),b.Wc));Pe(b,a)}}else !!h&&Ne(b)}
function wR(a,b){var c,d;a.S=fV(a.Q,a.f,a.L);a.T=gV(a.Q,a.f,a.L);a.R=cV(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.yc);a.u=(a.Q.yc.scrollTop||0)|0;a.c=(c=kj($doc),w1(),(Fh(),b).type.indexOf(Tvb)!=-1?Nm(b.changedTouches[0])+c:$h(b.clientX||0)+c);a.d=(d=lj($doc),b.type.indexOf(Tvb)!=-1?Om(b.changedTouches[0])+d:$h(b.clientY||0)+d);a.U=a.f;a.V=a.L;a.C=true;a.j=false;a.s=false;TR(a);xF((mF(),a.Wc));Eh.Ud(b);dh(he(a.Q),'selecting');LR(a,true)}
function Zgb(a){Rgb();var b,c,d,e;b=Vq(a);if(a<Pgb.length){return Pgb[b]}else if(a<=50){return Tfb((Ffb(),Cfb),b)}else if(a<=Otb){return Vfb(Tfb(Ogb[1],b),b)}if(a>1000000){throw FD(new zcb('power of ten too big'))}if(a<=ysb){return Vfb(Tfb(Ogb[1],b),b)}d=Tfb(Ogb[1],ysb);e=d;c=MD(a-ysb);b=Vq(a%ysb);while(ID(c,ysb)>0){e=Sfb(e,d);c=YD(c,ysb)}e=Sfb(e,Tfb(Ogb[1],b));e=Vfb(e,ysb);c=MD(a-ysb);while(ID(c,ysb)>0){e=Vfb(e,ysb);c=YD(c,ysb)}e=Vfb(e,b);return e}
function Gi(a){if(a.offsetTop==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollTop;d=d.parentNode}}while(a){b+=a.offsetTop;if(c.defaultView.getComputedStyle(a,'')[Qtb]==Rtb){b+=c.body.scrollTop;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-top-width')));if(e&&e.tagName=='BODY'&&a.style.position==Stb){break}a=e}return b}
function yX(a){var b,c,d;a.W=Xp(Zq,uwb,16,a.a.P,15,1);a.Kc=0;d=0;if(a.Rc>0){d=MT(a,1,a.Rc);a.Kc=Vq(d+1)}b=MT(a,a.Rc+1,a.a.P);a.Bb=0;a.ob>0&&(a.Bb=PT(a,1,a.ob));c=PT(a,a.ob+1,a.a.i);xX(a);d>0&&a.Bb>0?sh(a.Mc,Kwb):dh(a.Mc,Kwb);d>0?sh(a.Oc,Kwb):dh(a.Oc,Kwb);a.Bb>0?sh(a.c,Kwb):dh(a.c,Kwb);a.Oc.style[rvb]=(em(),_ub);a.c.style[svb]=_ub;a.I.style[rvb]=_ub;a.fc.style[rvb]=_ub;rV(a);a.fb.style[ztb]=b+$ub;a.fb.style[Atb]=c+$ub;a.c.style[ztb]=b+$ub;a.Oc.style[Atb]=c+$ub}
function XV(a){var b,c;if(a.ib){if(a.ob>0){ZV(a)}else{PV(a.ib);a.ib=null}}else if(a.ob>0){a.ib=new Tjb;ZV(a)}for(c=a.bb;c<=a.xb;c++){if(c>a.ob){if(c-a.bb<a.K.a.length){b=Njb(a.K,c-a.bb)}else{b=Oi($doc);Vg(a.Oc,b);Jjb(a.K,c-a.bb,b)}b.className=Cwb+c||'';wh(b,LZ(c)+Dwb);pnb(a.sc,Kdb(c))&&dh(b,nwb)}else{Jqb(a.U,'Trying to add plain column header (index:'+c+') into frozen pane, horizontalSplitPosition: '+a.ob)}}while(a.K.a.length>a.xb-a.bb+1){ah(Qjb(a.K,a.K.a.length-1))}}
function aW(a){var b,c;if(a.jb){if(a.Rc>0){$V(a)}else{PV(a.jb);a.jb=null}}else if(a.Rc>0){a.jb=new Tjb;$V(a)}for(b=a.db;b<=a.zb;b++){if(a.Rc<b){if(b-a.db<a.hc.a.length){c=Njb(a.hc,b-a.db)}else{c=Oi($doc);Vg(a.c,c);Jjb(a.hc,b-a.db,c)}c.className=Ewb+b||'';c.innerHTML=''+b+Dwb||'';pnb(a.vc,Kdb(b))&&dh(c,mwb)}else{Jqb(a.U,'Trying to add plain row header (index:'+b+') into frozen pane, verticalSplitPosition: '+a.Rc)}}while(a.hc.a.length>a.zb-a.db+1){ah(Qjb(a.hc,a.hc.a.length-1))}}
function GU(a,b,c,d){var e,f,g,h,i;f=DU(a,mvb+d.c+nvb+d.k);if(!f){i=d.d;g=d.c;h=d.k;e=false;if(b<(Fh(),Eh).Vd(i)&&d.c>a.bb){--g;while(SZ(a.a,g)&&g>a.bb){--g}e=true}else if(b>Eh.Vd(i)+((i.offsetWidth||0)|0)&&d.c<a.xb){++g;while(SZ(a.a,g)&&g<a.xb){++g}e=true}if(c<Eh.Wd(i)&&d.k>a.db){--h;while(TZ(a.a,h)&&h>a.db){--h}e=true}else if(c>Eh.Wd(i)+((i.offsetHeight||0)|0)&&d.k<a.zb){++h;while(TZ(a.a,h)&&h<a.zb){++h}e=true}if(e){return GU(a,b,c,sU(a,g,h))}return d}else{return f}}
function oR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=OZ(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row1}--h;while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h>1){--h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h<i){h=c;while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h>i){--h}--d;while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d>=e){--d}d<e&&(d=g);while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d>=e){--d}}fR(a,d,h)}else{h>0&&gR(a,d,h)}}
function lR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=OZ(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row2}++h;while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h<a.d.P){++h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h>c){h=i;while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h<c){++h}++d;while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d<=g){++d}d>g&&(d=e);while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d<=g){++d}}fR(a,d,h)}else{h<=a.d.P&&gR(a,d,h)}}
function nR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=OZ(a.d,d,h);if(!!f&&a.b!=0){d=f.col2;h=a.b}++d;while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d<a.d.i){++d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d>g){d=e;while(!!a.d.v&&Ojb(a.d.v,new Bdb(d),0)!=-1&&d<=g){++d}++h;while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h<=c){++h}h>c&&(h=i);while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h<=c){++h}}fR(a,d,h)}else{d<=a.d.i&&gR(a,d,h)}}
function mR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=OZ(a.d,d,h);if(!!f&&a.b!=0){d=f.col1;h=a.b}--d;while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d>0){--d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d<e){d=g;while(!!a.d.v&&Ojb(a.d.v,Kdb(d),0)!=-1&&d>=e){--d}--h;while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h>=i){--h}h<i&&(h=c);while(!!a.d.w&&Ojb(a.d.w,Kdb(h),0)!=-1&&h>=i){--h}}fR(a,d,h)}else{d>0&&gR(a,d,h)}}
function Dgb(a,b){var c,d,e,f,g,h;c=Pfb(a);d=Pfb(b);e=$wnd.Math.min(c,d);mgb(a,c);mgb(b,d);if(Gfb(a,b)==1){f=a;a=b;b=f}do{if(b.d==1||b.d==2&&b.a[1]>0){b=kgb(Cgb((h=a.d>1?UD(VD(a.a[1],32),HD(a.a[0],Zyb)):HD(a.a[0],Zyb),SD(a.e,h)),(g=b.d>1?UD(VD(b.a[1],32),HD(b.a[0],Zyb)):HD(b.a[0],Zyb),SD(b.e,g))));break}if(b.d>a.d*1.2){b=Ufb(b,a);b.e!=0&&mgb(b,Pfb(b))}else{do{Ngb(b.a,b.a,b.d,a.a,a.d);Ifb(b);b.b=-2;mgb(b,Pfb(b))}while(Gfb(b,a)>=0)}f=b;b=a;a=f}while(a.e!=0);return Vfb(b,e)}
function FV(b,c){var d,e,f,g,h,i;try{g=LU(b);if(!g){Jqb(b.U,'Selected cell is null');return}nM(g,c);h=qV(b,g.b,c);d=g.c;if(b.ab){f=PZ(b.a,b.qc,b.rc);d=f.col2;i=AR(b.a.g,f.col1,f.col2+1)}else{i=NZ(b.a,d)}while(i<h&&d<b.a.i){i+=NZ(b.a,++d)}ue(b.sb,i+1+$ub)}catch(a){a=ED(a);if(Oq(a,21)){e=a;Jqb(b.U,'SheetWidget:recalculateInputElementWidth: '+yf(e,e.Fd())+' while calculating input element width');_U(b,b.qc,b.rc)||iW(b,b.qc,b.rc);s1((ng(),mg),new PX(b,false))}else throw FD(a)}}
function ugb(){ugb=kE;sgb=$p(Vp(Zq,1),uwb,16,15,[Isb,1162261467,azb,Xyb,362797056,1977326743,azb,387420489,yub,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,Wyb,308915776,387420489,481890304,594823321,729000000,887503681,azb,1291467969,1544804416,1838265625,60466176]);tgb=$p(Vp(Zq,1),uwb,16,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function iO(a){var b,c,d,e,f,g,h,i;i=(f=LK(a.e),f==null?'':f);c=JK(a.e);e=0;while(--c>0){fsb(c,i.length);i.charCodeAt(c)==34&&(c==0||(fsb(c-1,i.length),i.charCodeAt(c-1)!=92))&&++e}if(e%2==1){return}g=-1;d=-1;c=JK(a.e);while(c>0){b=(fsb(c-1,i.length),i.charCodeAt(c-1));if(neb(String.fromCharCode(b))){g=c;break}--c}c=JK(a.e);while(c<i.length){b=(fsb(c,i.length),i.charCodeAt(c));if(neb(String.fromCharCode(b))){d=c;break}++c}h=i.substr(g,d-g);oO(a);if(sO(a,h)){a.s=g;a.q=d;OO(a,h)}}
function WV(a){var b,c,d,e,f,g,h;_T(a.Lc);for(g=new pkb(a.Pc);g.a<g.c.a.length;){e=nkb(g);_T(e)}a.Pc.a=Xp(qB,tsb,1,0,5,1);for(h=new pkb(a.d);h.a<h.c.a.length;){e=nkb(h);_T(e)}a.d.a=Xp(qB,tsb,1,0,5,1);for(f=new pkb(a.jc);f.a<f.c.a.length;){e=nkb(f);_T(e)}a.jc.a=Xp(qB,tsb,1,0,5,1);Vg(a.yc,a.fb);if(a.Rc>0&&a.ob>0){jU(a);kU(a);eU(a)}else a.Rc>0?kU(a):a.ob>0&&eU(a);for(c=a.db;c<=a.zb;c++){e=new Ujb(a.xb);for(d=a.bb;d<=a.xb;d++){b=new xM(a,d,c);Vg(a.yc,b.d);e.a[e.a.length]=b}Kjb(a.jc,e)}}
function fU(a){var b,c,d,e,f;f=Oi($doc);dh(f,'cell-range-bg-color');f.style[Atb]=(em(),_ub);f.style[ztb]=_ub;Vg(a.yc,f);e=new T0(f);b=S0(e,Dvb);b=oeb(b,'!important','');_g(a.yc,f);if(b!=null&&web(b).length!=0){d=kf();(mF(),d.Wc).height=1;d.Wc.width=1;nf(d.Wc.getContext('2d'),b);d.Wc.getContext('2d').fillRect(0,0,1,1);c='url("'+d.Wc.toDataURL()+'")';ZS(a.Cc,'.'+a.zc+owb+'background-image: '+c+' !important;'+'}')}else{ZS(a.Cc,'.'+a.zc+owb+'background-color: rgba(232, 242, 252, 0.8) !important;'+'}')}}
function dW(a,b,c,d,e,f,g){var h,i,j,k,l;for(k=b;k<=c;k++){if(f.a.length>k-b){l=($rb(k-b,f.a.length),f.a[k-b])}else{l=new Tjb;bsb(k-b,f.a.length);Trb(f.a,k-b,l)}for(h=d;h<=e;h++){if(l.a.length>h-d){i=($rb(h-d,l.a.length),l.a[h-d]);sM(i,h,k,Phb(a.e,mvb+h+nvb+k))}else{i=new yM(a,h,k,Phb(a.e,mvb+h+nvb+k));Vg(g,i.d);bsb(h-d,l.a.length);Trb(l.a,h-d,i)}}while(l.a.length>e-d+1){ah(Qjb(l,l.a.length-1).d)}}while(f.a.length>c-b+1){for(j=new pkb(Qjb(f,f.a.length-1));j.a<j.c.a.length;){i=nkb(j);ah(i.d)}}pX(a,false)}
function OO(a,b){var c,d,e,f,g,h,i,j,k,l;if(Qhb(a.G,b)){j=yO(a,b);if(!j){return}f=$wnd.Math.min(j.col1,j.col2);e=$wnd.Math.max(j.col1,j.col2);l=$wnd.Math.min(j.row1,j.row2);k=$wnd.Math.max(j.row1,j.row2);if(e>20000){Aqb(Mqb((Ocb(Kw),Kw.i)));return}for(c=f;c<=e;c++){for(i=l;i<=k;i++){d=sU(a.I,c,i);if(d){h=d.d;g=oeb(Phb(a.G,b),'%s','0.75');c==f&&(h.style['borderLeft']=Fvb+g,undefined);c==e&&(h.style[Gvb]=Fvb+g,undefined);i==l&&(h.style['borderTop']=Fvb+g,undefined);i==k&&(h.style[Hvb]=Fvb+g,undefined)}}}a.A=b}}
function FY(a,b){var c,d,e,f,g;f=(!a.B&&(a.B=new S_),a.B);e=(!a.J&&(a.J=new m0),a.J);if(b.Af('componentIDtoCellKeysMap')){c=e.o;d=new mnb;if(!!c&&c.a.c+c.b.c!=0){Nkb();Ykb()}IW(f.W,d)}b.Af('cellKeysToEditorIdMap')&&KY(a);(b.Af('cellComments')||b.Af('cellCommentAuthors'))&&M$(f,e.b,e.a);b.Af('visibleCellComments')&&LY(a);b.Af('invalidFormulaCells')&&j_(f,e.F);b.Af('overlays')&&(g=!(!a.J&&(a.J=new m0),a.J).N?(Nkb(),Nkb(),Lkb):(!a.J&&(a.J=new m0),a.J).N,IY(a,g.keySet()),CY(a,g),a.c=g.keySet(),undefined);xX(f.W)}
function Ggb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=HD(a.a[0],Zyb);d=HD(b.a[0],Zyb);if(g==i){k=GD(c,d);o=_D(k);n=_D(XD(k,32));return n==0?new Zfb(g,o):new $fb(g,2,$p(Vp(Zq,1),uwb,16,15,[o,n]))}return kgb(g<0?YD(d,c):YD(c,d))}else if(g==i){m=g;l=f>=h?Hgb(a.a,f,b.a,h):Hgb(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:Jgb(a.a,b.a,f);if(e==0){return Ffb(),Efb}if(e==1){m=g;l=Mgb(a.a,f,b.a,h)}else{m=i;l=Mgb(b.a,h,a.a,f)}}j=new $fb(m,l.length,l);Ifb(j);return j}
function g$(a,b,c,d){var e,f,g,h,i;IZ(a);g=a.W.Rc>0?1:QU(a.W);c||O_(a,b,g,null);if(c){i=a.W.qc;e=i>b?b:i;f=i>b?i:b;h=a.P;if(DR(a.W.xc)){wX(a.W,e,f,1,h);uX(a.W,e,f,1,h,true)}else{uX(a.W,e,f,1,h,false)}DR(a.W.xc)?r9(a.X,1,e,h,f):u9(a.X,1,e,h,f)}else if(d){a.W.C&&(a.W.C=false,undefined);DR(a.W.xc)&&FW(a.W,false);UW(a.W,b,g);pR(a.R);uX(a.W,b,b,1,a.P,false);v9(a.X,g,b)}else{a.W.C||(a.W.C=true,undefined);if(!DR(a.W.xc)){FW(a.W,true);bU(a.W)}EW(a.W,b,g);wX(a.W,b,b,1,a.P);uX(a.W,b,b,1,a.P,true);pR(a.R);y9(a.X,b,g)}pb(a.s,200)}
function t$(a,b,c,d){var e,f,g,h,i;f=a.W.ob>0?1:CU(a.W);IZ(a);c||O_(a,f,b,null);if(c){e=a.i;i=a.W.rc;g=i>b?b:i;h=i>b?i:b;if(DR(a.W.xc)){wX(a.W,1,e,g,h);uX(a.W,1,e,g,h,true)}else{uX(a.W,1,e,g,h,false)}DR(a.W.xc)?r9(a.X,g,1,h,e):u9(a.X,g,1,h,e)}else if(d){a.W.C&&(a.W.C=false,undefined);DR(a.W.xc)&&FW(a.W,false);UW(a.W,f,b);pR(a.R);uX(a.W,1,a.i,b,b,false);I9(a.X,b,f)}else{a.W.C||(a.W.C=true,undefined);if(!DR(a.W.xc)){FW(a.W,true);bU(a.W)}EW(a.W,f,b);wX(a.W,1,a.i,b,b);uX(a.W,1,a.i,b,b,true);pR(a.R);K9(a.X,b,f)}pb(a.s,200)}
function bX(b){var c,d,e,f,g,h,i,j,k,l;h=(w0(),false&&AG('debug')!=null);l=b.a.f;k=0;h&&(k=(Oeb(),MD(Date.now())));i=b.a.O;c=b.a.k;if(l){try{j=new Leb(KU(b.Cc));for(g=new pib((new hib(l)).a);g.b;){f=oib(g);f.ag().a==0?Heb(j,jwb+b.zc+' .sheet .cell {'+f.bg()+'}'):Heb(j,OU(b,f.ag(),i,c)+' {'+f.bg()+'}')}$g(b.Cc);Vg(b.Cc,cj($doc,j.a))}catch(a){a=ED(a);if(Oq(a,21)){d=a;Jqb(b.U,'SheetWidget:updateStyles: '+yf(d,d.Fd())+Hwb)}else throw FD(a)}}if(h){e=(Oeb(),MD(Date.now()));Dqb(b.U,'Style update took:'+aE(YD(e,k))+'ms')}EV(b);fU(b)}
function VR(a,b,c){var d,e,f,g,h,i,j;if(b>=a.e&&b<=a.f&&c>=a.K&&c<=a.L){j=$wnd.Math.abs(a.L-c);h=$wnd.Math.abs(a.f-b);if(a._||j==0&&h==0){IR(a,0,0,0,0);JR(a,false);return}JR(a,true);a.j=true;if(j>h){i=$wnd.Math.max(a.K+1,a.L-j+1);IR(a,a.e,a.f,i,a.L)}else{i=$wnd.Math.max(a.e+1,a.f-h+1);IR(a,i,a.f,a.K,a.L)}}else if(c<a.K||c>a.L||b<a.e||b>a.f){JR(a,true);a.s=true;d=c-a.L;g=a.K-c;e=a.e-b;f=b-a.f;$wnd.Math.max(d,g)>$wnd.Math.max(e,f)?d>g?IR(a,a.e,a.f,a.L+1,c):IR(a,a.e,a.f,c+1,a.K-1):f>e?IR(a,a.f+1,b,a.K,a.L):IR(a,b+1,a.e-1,a.K,a.L)}}
function GS(a,b){var c;if(!a.c._){if(!a.b){return}c=(Fh(),b).keyCode|0;switch(c){case 8:case 113:case 38:case 40:case 37:case 39:case 9:case 46:case 32:if(Eh.Qd(b)==0){B$(a.c.a,b,'');Eh.Ud(b);b.stopPropagation()}break;case 89:if(!a.a&&!!b.ctrlKey||!!b.metaKey){o9(a.c.a.X.C,$p(Vp(qB,1),tsb,1,5,[]));Eh.Ud(b);b.stopPropagation()}break;case 90:if(!a.a&&!!b.ctrlKey||!!b.metaKey){o9(a.c.a.X.G,$p(Vp(qB,1),tsb,1,5,[]));Eh.Ud(b);b.stopPropagation()}break;case 65:if(!a.a&&!!b.ctrlKey||!!b.metaKey){J$(a.c.a);Eh.Ud(b);b.stopPropagation()}}}}
function UW(a,b,c){var d,e,f,g,h,i;h=sU(a,a.qc,a.rc);g=DU(a,mvb+a.qc+nvb+a.rc);if(a.v){onb(a.u,new sY(a.qc,a.rc));if(h){onb(a.t,h);dh(h.d,kwb)}if(g){onb(a.t,g);dh(g.d,kwb)}a.v=false}else{onb(a.u,new sY(a.qc,a.rc));if(h){onb(a.t,h);dh(h.d,kwb)}if(g){onb(a.t,g);dh(g.d,kwb)}i=PZ(a.a,b,c);lW(a,c);if(i){for(d=i.row1+1;d<=i.row2;d++){lW(a,d)}}kW(a,b);if(i){for(d=i.col1+1;d<=i.col2;d++){kW(a,d)}}}if(h){a.nb=null;sh(h.d,lwb)}!!g&&sh(g.d,lwb);f=sU(a,b,c);if(f){a.nb=new sY(f.c,f.k);dh(f.d,lwb)}e=DU(a,mvb+b+nvb+c);!!e&&dh(e.d,lwb);a.rc=c;a.qc=b}
function iU(a,b,c,d,e){var f,g,h,i,j,k,l,m;l=e;m=new mnb;for(h=c;h<=d;h++){k=new Jeb;j=a.W[h-1];Heb(Eeb(Heb(Eeb(Heb(Heb(Heb(Eeb(Heb(Heb(Heb(Eeb(Heb(Heb((k.a+='.',k),a.zc),rwb),h),', .'),a.zc),'>.resize-line.row'),h),' { '),TZ(a.a,h)?qwb:'display: flex;'),'height: '),j),'px; top:'),l),'px; }\n');l+=j;Rhb(m,Kdb(h),Kdb(l));Kjb(b,k.a)}for(g=new pib((new hib(a.Eb)).a);g.b;){f=oib(g);i=f.bg().k-1;!(i==d&&d==a.Rc)&&Mhb(m,Kdb(i))?(f.bg().d.style[Tub]=Ohb(m,Kdb(i)).a+(em(),$ub),undefined):i<c&&d!=a.Rc&&(f.bg().d.style[Tub]=(em(),_ub),undefined)}}
function gU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;l=e;m=new mnb;for(k=c;k<=d;k++){n=new Jeb;h=MZ(a.a,k);Heb(Eeb(Heb(Eeb(Heb(Heb(Heb(Eeb(Heb(Heb(Heb(Eeb(Heb(Heb((n.a+='.',n),a.zc),pwb),k),', .'),a.zc),'>.resize-line.col'),k),' { '),SZ(a.a,k)?qwb:''),'width: '),h),'px; left:'),l),'px; }\n');l+=h;Rhb(m,Kdb(k),Kdb(l));Kjb(b,n.a)}f=hh((mF(),a.Wc));for(j=new pib((new hib(a.Eb)).a);j.b;){i=oib(j);g=i.bg().c-1;!(g==d&&d==a.ob)&&Mhb(m,Kdb(g))?(i.bg().d.style[Sub]=Ohb(m,Kdb(g)).a+(em(),$ub),undefined):g>d&&d!=a.ob&&(i.bg().d.style[Sub]=f+(em(),$ub),undefined)}}
function wS(a,b,c,d,e){var f;sh(a.B,mvb+a.e+nvb+a.C);if(a.s>0&&b<a.s){b=a.s;uS(a,true)}else{uS(a,false)}if(a.t>0&&d<a.t){d=a.t;AS(a,true)}else{AS(a,false)}if(a.r>0&&e>a.r){e=a.r;rS(a,true);a.i.style[Wtb]=(wk(),ytb);a.g.style[Wtb]=ytb}else{rS(a,false);a.i.style[Wtb]=(wk(),aub);a.g.style[Wtb]=aub}if(a.q>0&&a.q<c){c=a.q;xS(a,true)}else{xS(a,false)}a.e=b;a.C=d;a.f=c;a.D=e;a.K=c-b;a.j=e-d;if(b<=c&&d<=e){dh(a.B,mvb+a.e+nvb+a.C);De((mF(),a.Wc),true);CS(a);f=a.F.q.W.W;f!=null&&f.length!=0&&tS(a,AR(a.F.q.W.W,a.C,a.D+1))}else{De((mF(),a.Wc),false)}}
function kfb(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=wgb(MD(a.f),Vq(a.e));return a.g}e=xgb((!a.c&&(a.c=jgb(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=jgb(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new Jeb;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){Ieb(f,c-Vq(a.e),String.fromCharCode(46))}else{f.a=teb(f.a,0,b-1)+'0.'+seb(f.a,b-1);Ieb(f,b+1,Aeb(Web,0,-Vq(d)-1))}}else{if(c-b>=1){Ieb(f,b,String.fromCharCode(46));++c}Ieb(f,c,String.fromCharCode(69));d>0&&Ieb(f,++c,String.fromCharCode(43));Ieb(f,++c,''+aE(MD(d)))}a.g=f.a;return a.g}
function DJ(a,b){var c,d,e,f;if(b.a||!a.K&&b.b){a.I&&(b.a=true);return}b.c&&false&&(b.a=true);if(b.a){return}d=b.d;c=xJ(a,d);c&&(b.b=true);a.I&&(b.a=true);f=(mF(),DG((Fh(),d).type));switch(f){case 512:case 256:case 128:{(d.keyCode|0)&Nsb;(d.shiftKey?1:0)|(d.metaKey?8:0)|(d.ctrlKey?2:0)|(d.altKey?4:0);return}case 4:case Iub:{if(lF){b.b=true;return}}if(!c&&a.u){a.Pe(true);return}break;case 8:case 64:case 1:case 2:case Bsb:{if(lF){b.b=true;return}break}case 2048:{e=Eh.Td(d);if(a.I&&!c&&!!e){e.blur&&e!=$doc.body&&e.blur();b.a=true;return}break}}}
function fO(){fO=kE;eO=new Tjb;Kjb(eO,'rgba(48, 144, 240, %s)');Kjb(eO,'rgba(236, 100, 100, %s)');Kjb(eO,'rgba(152, 223, 88, %s)');Kjb(eO,'rgba(249, 221, 81, %s)');Kjb(eO,'rgba(36, 220, 212, %s)');Kjb(eO,'rgba(236, 100, 165, %s)');Kjb(eO,'rgba(104, 92, 176, %s)');Kjb(eO,'rgba(255, 125, 66, %s)');Kjb(eO,'rgba(51, 97, 144, %s)');Kjb(eO,'rgba(170, 81, 77, %s)');Kjb(eO,'rgba(127, 176, 83, %s)');Kjb(eO,'rgba(187, 168, 91, %s)');Kjb(eO,'rgba(36, 121, 129, %s)');Kjb(eO,'rgba(150, 57, 112, %s)');Kjb(eO,'rgba(75, 86, 168, %s)');Kjb(eO,'rgba(154, 89, 61, %s)')}
function gW(a,b,c,d){var e,f,g,h,i,j;j=false;b<=a.ob&&(b=a.ob+1);f=CU(a);h=HU(a);if(d){if(b<f){i=0;for(e=f-1;e>=b-1&&e>0;e--){i+=NZ(a.a,e)}yh(a.yc,ph(a.yc)-i);(b<=a.bb||i>(a.a.j/2|0))&&(j=true)}else if(b>h){i=0;g=a.a.i;for(e=h+1;e<=b+1&&e<=g;e++){i+=NZ(a.a,e)}yh(a.yc,ph(a.yc)+i);(b>=a.xb||i>(a.a.j/2|0))&&(j=true)}}else{if(c>h){i=0;g=a.a.i;for(e=h+1;e<=c+1&&e<=g;e++){i+=NZ(a.a,e)}yh(a.yc,ph(a.yc)+i);(c>=a.xb||i>(a.a.j/2|0))&&(j=true)}else if(c<f){i=0;for(e=f-1;e>=c-1&&e>0;e--){i+=NZ(a.a,e)}yh(a.yc,ph(a.yc)-i);(c<=a.bb||i>(a.a.j/2|0))&&(j=true)}}return j}
function _W(a,b,c,d,e,f,g){var h,i,j,k,l;if(f.a.length==0){return}i=new pkb(g);k=null;l=-1;while(i.a<i.c.a.length){h=nkb(i);if(h.row>=b&&h.row<=c&&h.col>=d&&h.col<=e){if(l!=h.row){($rb(0,f.a.length),f.a[0]).a.length>0&&Njb(($rb(0,f.a.length),f.a[0]),0).k!=b&&(b=Njb(($rb(0,f.a.length),f.a[0]),0).k);k=Njb(f,h.row-b);l=h.row;($rb(0,k.a.length),k.a[0]).c!=d&&(d=($rb(0,k.a.length),k.a[0]).c)}oM(Njb(k,h.col-d),h.value,h.cellStyle,h.needsMeasure)}j=mvb+h.col+nvb+h.row;zW(a,j,h.value,h.cellStyle,h.needsMeasure);h.value==null?Uhb(a.e,j):Shb(a.e,j,h)}pX(a,false)}
function oS(a){a.B.className=Zvb;a.F._&&dh(a.B,Tvb);a.G.className='s-top';a.k.className='s-left';a.u.className='s-right';a.a.className='s-bottom';a.g.className='s-corner';a.i.className='s-corner-touch';a.I.className=$vb;a.o.className=$vb;a.w.className=$vb;a.c.className=$vb;a.J.className=_vb;a.p.className=_vb;a.A.className=_vb;a.d.className=_vb;if(a.F._){Vg(a.u,a.i);Vg(a.i,a.g)}else{Vg(a.u,a.g)}Vg(a.G,a.k);Vg(a.G,a.u);Vg(a.k,a.a);Vg(a.B,a.G);if(a.F._){Vg(a.G,a.J);Vg(a.k,a.p);Vg(a.u,a.A);Vg(a.a,a.d);Vg(a.J,a.I);Vg(a.p,a.o);Vg(a.A,a.w);Vg(a.d,a.c)}ne(a,a.B)}
function BV(a,b,c){a.zc='spreadsheet-'+b;dh(a.Ec,a.zc);a.w.type=Bwb;vh(a.w,a.zc+'-dynamicStyle');Vg(c,a.w);a.Cc.type=Bwb;vh(a.Cc,a.zc+'-sheetStyle');Vg(c,a.Cc);a.Dc.type=Bwb;vh(a.Dc,a.zc+'-customCellSizeStyle');Vg(c,a.Dc);a.$.type=Bwb;vh(a.$,a.zc+'-editedCellStyle');Vg(c,a.$);ZS(a.$,'.notusedselector{ display: inline !important; outline: none !important; width: auto !important; z-index: -10; }');ZS(a.$,'.notusedselector{ overflow: hidden; }');a.Fb.type=Bwb;vh(a.Fb,a.zc+'-mergedRegionStyle');Vg(c,a.Fb);a.Vb.type=Bwb;vh(a.Vb,a.zc+'-resizeStyle');Vg(c,a.Vb)}
function sq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&wub;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=wub;u+=p>>22;p&=wub;u&=Csb;return dq(m,p,u)}
function UT(a,b,c){var d,e,f,g,h,i,j;i=ih(a.yc);g=gh(a.yc);f=fh(a.yc);h=hh(a.yc);a.A=c;a.B=b;b<i?(a.O||!a.Hc&&!a.Gc)&&(a.Y=b-i):b>f?(a.Y=b-f):(a.Y=0);c<g?(a.P||!a.Fc&&!a.Gc)&&(a.X=c-g):c>h?(a.X=c-h):(a.X=0);j=false;if(((a.yc.scrollTop||0)|0)!=0){e=b<i;if(!a.O&&(a.Gc||a.Hc)&&dV(a,a.Ic,a.Jc)&&!e){a.yc.scrollTop=0;yV(a);a.O=true;j=true}}if(ph(a.yc)!=0){d=c<g;if(!a.P&&(a.Gc||a.Fc)&&dV(a,a.Ic,a.Jc)&&!d){yh(a.yc,0);yV(a);a.P=true;j=true}}if(a.Y<0&&((a.yc.scrollTop||0)|0)!=0||a.Y>0||a.X<0&&ph(a.yc)!=0||a.X>0){OW(a);j=true}if(j){return true}else{SW(a);return false}}
function yR(a,b,c){var d,e,f,g,h,i,j;i=ih(a.Q.yc);g=gh(a.Q.yc);f=fh(a.Q.yc);h=hh(a.Q.yc);a.c=c;a.d=b;b<i?(a.g||!a.T&&!a.S)&&(a.n=b-i):b>f?(a.n=b-f):(a.n=0);c<g?(a.i||!a.R&&!a.S)&&(a.k=c-g):c>h?(a.k=c-h):(a.k=0);j=false;if(((a.Q.yc.scrollTop||0)|0)!=0){e=b<i;if(!a.g&&(a.S||a.T)&&dV(a.Q,a.U,a.V)&&!e){a.Q.yc.scrollTop=0;yV(a.Q);a.u=0;a.g=true;j=true}}if(ph(a.Q.yc)!=0){d=c<g;if(!a.i&&(a.S||a.R)&&dV(a.Q,a.U,a.V)&&!d){yh(a.Q.yc,0);yV(a.Q);a.t=0;a.i=true;j=true}}if(a.n<0&&((a.Q.yc.scrollTop||0)|0)!=0||a.n>0||a.k<0&&ph(a.Q.yc)!=0||a.k>0){PR(a);j=true}if(j){return true}else{RR(a);return false}}
function gX(a,b){var c,d,e,f;c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}f=0;if(a.ec>0){e=a.Z?a.ec+1:a.ec;f=1+e*15}if(f==0){a.fc.style[Wtb]=(wk(),ytb);a.gc.style[Wtb]=ytb}else{a.fc.style[Wtb]=(wk(),aub);a.gc.style[Wtb]=aub}a.Z||(a.gc.style[Wtb]=(wk(),ytb),undefined);!!a.jb&&a.ec>0?(a.cc.style[Wtb]=(wk(),aub),undefined):(a.cc.style[Wtb]=(wk(),ytb),undefined);a.fc.style[Atb]=f+(em(),$ub);a.fc.style[Tub]=b+$ub;a.cc.style[Atb]=f+$ub;a.cc.style[Tub]=b+$ub;a.gc.style[Tub]=b+c+$ub;if(a.Db){a.gc.style[ztb]=wU(a)+$ub;a.gc.style[Jwb]=wU(a)+$ub}a.gc.style[Atb]=f+$ub;return f}
function H0(a){var b,c,d,e,f;if(D0==null){c='';d='';e='';b='';if(a.a.g){c='ff';d=c+a.a.b;e=d+a.a.c;b='gecko'}else if(a.a.e){c='sa';d='ch';b=fxb}else if(a.a.q){c='sa';d=c+a.a.b;e=d+a.a.c;b=fxb}else if(a.a.p){c='sa';d=c+a.a.b;e=d+a.a.c;b=fxb}else if(a.a.j){c='ie';d=c+a.a.b;e=d+a.a.c;b='trident'}else if(a.a.f){c='edge';d=c+a.a.b;e=d+a.a.c;b=''}else if(a.a.o){c='op';d=c+a.a.b;e=d+a.a.c;b='presto'}D0='v-'+c;d.length==0||(D0=D0+' '+'v-'+d);e.length==0||(D0=D0+' '+'v-'+e);b.length==0||(D0=D0+' '+'v-'+b);f=J0(a);f!=null&&(D0=D0+' '+f);a.b&&(D0=D0+' '+'v-'+Tvb)}return D0}
function Ei(a){if(a.offsetLeft==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollLeft;c.defaultView.getComputedStyle(d,'').getPropertyValue('direction')=='rtl'&&(b+=d.scrollWidth-d.clientWidth);d=d.parentNode}}while(a){b+=a.offsetLeft;if(c.defaultView.getComputedStyle(a,'')[Qtb]==Rtb){b+=c.body.scrollLeft;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-left-width')));if(e&&e.tagName=='BODY'&&a.style.position==Stb){break}a=e}return b}
function IT(a,b){var c,d,e,f,g,h,i,j,k,l;l=new Jeb;for(k=b.row1;k<=b.row2;k++){for(c=b.col1;c<=b.col2;c++){l.a+=iwb+c+'.row'+k;(k!=b.row2||c!=b.col2)&&(l.a+=',',l)}}if(l.a.length!=0){l.a+='{ display: none; }';ZS(a.Fb,l.a)}i=mvb+b.col1+nvb+b.row1;j=new pP(a,b.col1,b.row1);f='cs0';d=sU(a,b.col1,b.row1);!!d&&(f=d.b);oM(j,vU(a,b.col1,b.row1),f,false);h=j.d;dh(h,Kvb);mX(a,b,j);Vg(FU(a,b.col1,b.row1),h);Rhb(a.Eb,Kdb(b.id),j);!!a.r&&Qhb(a.r,i)&&pM(j);!!a.tb&&a.tb.contains(i)&&qM(j);if(Qhb(a.b,i)){e=Phb(a.b,i);xN(e,h,b.row1,b.col1)}if(!!a.T&&Qhb(a.T,i)){g=Phb(a.T,i);HT(a,j,g)}}
function MM(b,c){var d,e,f,g,h,i,j;if(!b.Sc){return}h=-1;try{h=mdb(Hj((mF(),b.Wc).style))}catch(a){a=ED(a);if(Oq(a,21)){h=Otb}else throw FD(a)}h==-1&&(h=EM);if((F0(),!E0&&(E0=new O0),F0(),E0).a.j){nh((mF(),b.Wc),Zub);nh(b.Wc,xtb)}f=(!E0&&(E0=new O0),E0);if(f.a.j&&M0(f)){g=new V5((i=gh((mF(),b.Wc)),i-=ej($doc),i-=(GM==-1&&(GM=VM(Sub)),GM),i),(j=ih(b.Wc),j-=fj($doc),j-=(HM==-1&&(HM=VM(Tub)),HM),j),nh(b.Wc,xtb),nh(b.Wc,Zub));g.b+=Vq(g.d*(1-c)/2);g.c+=Vq(g.a*(1-c)/2);g.d=Vq(g.d*c);g.a=Vq(g.a*c);d=Wg(b.Wc);e=(!E0&&(E0=new O0),E0);if(e.a.j&&M0(e)){UM(JM(b),g);!Wg(b.t)&&Yg(d,b.t,b.Wc)}}}
function eq(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw FD(new zcb('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(aq=dq(0,0,0));return dq(0,0,0)}if(b.h==xub&&b.m==0&&b.l==0){return fq(a,c)}i=false;if(b.h>>19!=0){b=tq(b);i=!i}g=lq(b);f=false;e=false;d=false;if(a.h==xub&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=cq((Iq(),Eq));d=true;i=!i}else{h=xq(a,g);i&&jq(h);c&&(aq=dq(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=tq(a);d=true;i=!i}if(g!=-1){return gq(a,g,i,f,c)}if(qq(a,b)<0){c&&(f?(aq=tq(a)):(aq=dq(a.l,a.m,a.h)));return dq(0,0,0)}return hq(d?a:dq(a.l,a.m,a.h),b,i,f,e,c)}
function bW(a,b,c){var d,e;yh(a.yc,b);zh(a.yc,c);a.nc=(a.yc.offsetHeight||0)|0;a.oc=(a.yc.offsetWidth||0)|0;a.Ob=b;a.Pb=c;a.db=1;a.eb=0;a.Rc>0&&(a.db=a.Rc+1);a.bb=1;a.cb=0;a.ob>0&&(a.bb=a.ob+1);a.xb=0;bU(a);ZT(a);d=a.a.j;if(a.cb<b-d){do{a.cb+=NZ(a.a,a.bb);++a.bb}while(a.cb<b-d)}a.xb=a.bb;a.yb=a.cb+NZ(a.a,a.bb);e=a.a.M;if(a.eb<c-e){do{a.db>=a.a.N.length?(a.eb+=zU(a)):(a.eb+=JU(a,a.db));++a.db}while(a.eb<c-e)}a.zb=a.db;a.Ab=a.eb+JU(a,a.zb);while(a.yb<b+a.oc+d&&a.xb<a.a.i){++a.xb;a.yb+=NZ(a.a,a.xb)}while(a.Ab<c+a.nc+e&&a.zb<a.a.P){++a.zb;a.zb>=a.a.N.length?(a.Ab+=zU(a)):(a.Ab+=JU(a,a.zb))}}
function Pg(a,b){var c,d,e,f,g,h,i,j,k;j='';if(b.length==0){return a.Md(usb,rsb,-1,-1)}k=web(b);geb(k.substr(0,3),'at ')&&(k=k.substr(3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=web(k.substr(g+1));k=web(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=web(k.substr(0,g))}g=ieb(k,yeb(46));g!=-1&&(k=k.substr(g+1));(k.length==0||geb(k,'Anonymous function'))&&(k=rsb);h=leb(j,yeb(58));e=meb(j,yeb(58),h-1);i=-1;d=-1;f=usb;if(h!=-1&&e!=-1){f=j.substr(0,e);i=Jg(j.substr(e+1,h-(e+1)));d=Jg(j.substr(h+1))}return a.Md(f,k,i,d)}
function iS(a,b,c,d,e){var f;sh(a.k,mvb+a.b+nvb+a.n);if(a.g>0&&b<a.g){b=a.g;a.d.style[Xtb]=(sm(),iub)}else{a.d.style[Xtb]=(sm(),hub)}if(a.i>0&&d<a.i){d=a.i;a.q.style[Xtb]=(sm(),iub)}else{a.q.style[Xtb]=(sm(),hub)}if(a.f>0&&e>a.f){e=a.f;a.a.style[Xtb]=(sm(),iub)}else{a.a.style[Xtb]=(sm(),hub)}if(a.e>0&&a.e<c){c=a.e;a.j.style[Xtb]=(sm(),iub)}else{a.j.style[Xtb]=(sm(),hub)}a.b=b;a.n=d;a.c=c;a.o=e;if(b<=c&&d<=e){dh(a.k,mvb+a.b+nvb+a.n);De((mF(),a.Wc),true);a.Wc.style[bvb]='';mS(a);f=a.p.q.W.W;f!=null&&f.length!=0&&gS(a,AR(a.p.q.W.W,a.n,a.o+1))}else{De((mF(),a.Wc),false);a.Wc.style[bvb]=(nl(),iub)}}
function RU(a,b,c){var d,e,f,g,h,i,j,k;a.Yb=true;d=b-a.Rb;d<0&&(d=0);WS(a.Vb);d>0?kI(a.Xb,'Width: '+d+$ub):kI(a.Xb,vwb);j='.'+a.zc+wwb+a.Zb+'{width:'+d+xwb;ZS(a.Vb,j);e=0;k=hh(a.yc)-b;for(g=a.Zb+1;g<=a.xb&&e<k;g++){e+=NZ(a.a,g)}i=b-a.Sb;i<a.Rb-a.Sb&&(i=a.Rb-a.Sb);j='';for(h=a.Zb+1;h<=a.xb;h++){j+='.'+a.zc+wwb+h;a.xb!=h&&(j+=',')}if(!!a.ib&&a.Zb>=a.ib.a.length){for(f=1;f<=a.ib.a.length;f++){i+=NZ(a.a,f)}}i=a.Cb+i;(!a.ib||a.Zb>a.ib.a.length)&&(i-=ph(a.yc));if(j.length!=0){j+='{margin-left:'+i+xwb;ZS(a.Vb,j)}j='.'+a.zc+'.col-resizing > div.resize-line.ch {margin-left:'+(i-1)+xwb;ZS(a.Vb,j);KW(a,b,c)}
function f2(a,b){var c,d;if(!a.e){a.e=new mI;He(a.e,new h2(a),(gn(),gn(),fn));He(a.e,new j2(a),(Po(),Po(),Oo))}c=web(UH(a.e.a));c+=c.length==0?'Using Evaluation License of: ':', ';kI(a.e,c+b);wH((tK(),xK()),a.e);he(a.e).className='';d=he(a.e).style;d[Qtb]=(yl(),Rtb);d[Jvb]=(Jl(),'center');d['right']=(em(),_ub);d[Sub]=_ub;d['bottom']=_ub;d['padding']='0.5em 1em';d['font-family']='sans-serif';d['fontSize']='12.0px';d[Jwb]='1.1em';d['color']='white';d[Dvb]='black';(Fh(),d).opacity=0.7;d[Ytb]='2147483646';d[Tub]=ivb;d[Atb]=ivb;d[Wtb]=(wk(),aub);d['whiteSpace']=(Em(),'normal');d[Xtb]=(sm(),hub);d['margin']=_ub}
function S0(j,a){var b=j.a;var c=j.b;if(a.indexOf(Evb)>-1&&a.indexOf('Width')>-1){var d=a.substring(0,a.length-5)+'Style';if(b.getPropertyValue)var e=b.getPropertyValue(d);else var e=b[d];if(e==ytb)return '0px'}if(b.getPropertyValue){a=a.replace(/([A-Z])/g,'-$1').toLowerCase('en');var f=b.getPropertyValue(a)}else{var f=b[a];var g=c.style;if(!/^\d+(px)?$/i.test(f)&&/^\d/.test(f)){var h=g.left,i=c.runtimeStyle.left;c.runtimeStyle.left=b.left;g.left=f||0;f=g.pixelLeft+$ub;g.left=h;c.runtimeStyle.left=i}}if(a.indexOf('margin')>-1&&f==ivb){return '0px'}a==Atb&&f==ivb?(f=c.clientWidth+$ub):a==ztb&&f==ivb&&(f=c.clientHeight+$ub);return f}
function w4(a,b){var c,d,e,f,g,h,i;if(!a.j){f=Wf()-a.b[0];Dqb(Mqb((Ocb(wz),wz.k)),f+' ms from start to move')}e=(h=(Fh(),b).changedTouches[0],a.f=$h(h.clientY||0),i=a.k++,i=i%3,a.b[i]=Wf(),a.s[i]=a.f,a.j?a.j:$wnd.Math.abs(a.o-a.f)>=3);if(e){c=a.o-a.f;d=a.n+c;if(d>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){g=c+a.n-(((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0));g=g/2|0;g>(m4?0:(a.q.clientHeight|0)/3|0)&&(g=m4?0:(a.q.clientHeight|0)/3|0);c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+g-a.n}else if(d<0){g=d/2|0;-g>(m4?0:(a.q.clientHeight|0)/3|0)&&(g=-(m4?0:(a.q.clientHeight|0)/3|0));c=g-a.n}z4(a,c);a.j=true;Eh.Ud(b);b.stopPropagation()}}
function Cc(){Cc=kE;Ac=new Lb('aria-activedescendant');new xc('aria-atomic');new Lb('aria-autocomplete');new Lb('aria-controls');new Lb('aria-describedby');new Lb('aria-dropeffect');new Lb('aria-flowto');new xc('aria-haspopup');Bc=new xc('aria-label');new Lb('aria-labelledby');new xc('aria-level');new Lb('aria-live');new xc('aria-multiline');new xc('aria-multiselectable');new Lb('aria-orientation');new Lb('aria-owns');new xc('aria-posinset');new xc('aria-readonly');new Lb('aria-relevant');new xc('aria-required');new xc('aria-setsize');new Lb('aria-sort');new xc('aria-valuemax');new xc('aria-valuemin');new xc('aria-valuenow');new xc('aria-valuetext')}
function GY(a,b){var c,d,e,f;d=(!a.B&&(a.B=new S_),a.B);c=(!a.J&&(a.J=new m0),a.J);if(c.O||b.b){c.O=false;e=(!a.J&&(a.J=new m0),a.J);f=(!a.B&&(a.B=new S_),a.B);KY(a);H_(f,e.X,e.W,b.Af(Rwb));z_(f,e.Y);f.D?FZ(f,false):(f.D=true);YZ(f,f.a-1);M_(f,e.L);s1((ng(),mg),new lZ(a,b))}else{(b.Af('sheetNames')||b.Af('sheetIndex'))&&H_(d,c.X,c.W,b.Af(Rwb));if(b.Af(Swb)||b.Af(Twb)||b.Af('colW')||b.Af('rowH')||b.Af('rows')||b.Af('cols')||b.Af(Uwb)||b.Af(Vwb)){d.d?(d.d=false):MV(d.W,true);M_((!a.B&&(a.B=new S_),a.B),(!a.J&&(a.J=new m0),a.J).L)}else b.Af('mergedRegions')&&M_((!a.B&&(a.B=new S_),a.B),(!a.J&&(a.J=new m0),a.J).L);b.Af('sheetProtected')&&z_(d,c.Y);FY(a,b)}}
function iW(a,b,c){var d,e,f,g,h,i,j,k,l,m;l=false;f=CU(a);if(b<f&&b>a.ob){k=0;for(e=f-1;e>=b-1&&e>0;e--){k+=NZ(a.a,e)}yh(a.yc,ph(a.yc)-k);(b<=a.bb||k>(a.a.j/2|0))&&(l=true)}else{j=HU(a);if(b>j){k=0;g=a.a.i;for(e=j+1;e<=b+1&&e<=g;e++){k+=NZ(a.a,e)}yh(a.yc,ph(a.yc)+k);(b>=a.xb||k>(a.a.j/2|0))&&(l=true)}}m=QU(a);if(c<m&&c>a.Rc){k=0;for(e=m-1;e>=c-1&&e>0;e--){k+=TZ(a.a,e)?0:e>=a.W.length?zU(a):a.W[e-1]}i=((a.yc.scrollTop||0)|0)-k;zh(a.yc,i>0?i:0);(c<=a.db||k>(a.a.M/2|0))&&(l=true)}else{d=rU(a);if(c>d){k=0;h=a.a.P;for(e=d+1;e<=c+1&&e<=h;e++){k+=TZ(a.a,e)?0:e>=a.W.length?zU(a):a.W[e-1]}zh(a.yc,((a.yc.scrollTop||0)|0)+k);(c>=a.zb||k>(a.a.M/2|0))&&(l=true)}}if(l){xV(a);rV(a)}}
function c1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;e=false;l=false;d=new T0(b);i=(m=$p(Vp(Zq,1),uwb,16,15,[0,0,0,0]),m[0]=Q0(d,fwb),m[1]=Q0(d,'paddingRight'),m[2]=Q0(d,'paddingBottom'),m[3]=Q0(d,ewb),m);if(!e&&g1(a.d,i)){b1(a.d,i);e=true}if(!l&&h1(a.d,i)){b1(a.d,i);l=true}a.d=i;f=R0(d);if(!e&&g1(a.c,f)){b1(a.c,f);e=true}if(!l&&h1(a.c,f)){b1(a.c,f);l=true}a.c=f;c=(n=$p(Vp(Zq,1),uwb,16,15,[0,0,0,0]),n[0]=Q0(d,'borderTopWidth'),n[1]=Q0(d,'borderRightWidth'),n[2]=Q0(d,'borderBottomWidth'),n[3]=Q0(d,'borderLeftWidth'),n);if(!e&&g1(a.a,c)){b1(a.a,c);e=true}if(!l&&h1(a.a,c)){b1(a.a,c);l=true}a.a=c;j=D1(b);g=j+(f[0]+f[2]);d1(a,g)&&(e=true);k=G1(b);h=k+(f[1]+f[3]);e1(a,h)&&(l=true);return new i1}
function GT(a){a.U=Mqb('spreadsheet SheetWidget');a.pc=new mnb;a.Ec=Oi($doc);a.yc=Oi($doc);a.N=Oi($doc);a.fb=Oi($doc);a.Tb=Oi($doc);a.Ub=Oi($doc);a.hc=new Tjb;a.jb=new Tjb;a.K=new Tjb;a.ib=new Tjb;a.jc=new Tjb;a.Lc=new Tjb;a.Pc=new Tjb;a.d=new Tjb;a.w=Xi($doc);a.Cc=Xi($doc);a.Dc=Xi($doc);a.$=Xi($doc);a.Vb=Xi($doc);a.Fb=Xi($doc);a.Mb=Oi($doc);a.Mc=Oi($doc);a.Oc=Oi($doc);a.c=Oi($doc);a.I=Oi($doc);a.fc=Oi($doc);a.F=Oi($doc);a.cc=Oi($doc);a.kb=Oi($doc);a.J=Oi($doc);a.gc=Oi($doc);a.D=Oi($doc);a.bc=Oi($doc);a.hb=Wi($doc);a.wb=new cT;a.t=new rnb;a.u=new rnb;a.vc=new rnb;a.sc=new rnb;a.uc=new rnb;a.tc=new rnb;a.p=new f5(300,new HX(a));a.Ib=new f5(100,new _X(a));a.lc=new bY(a);a.Jb=new fY(a)}
function efb(a,b){var c,d,e,f,g,h,i,j,k,l;j=(!a.c&&(a.c=jgb(a.f)),a.c);k=(!b.c&&(b.c=jgb(b.f)),b.c);c=a.e-b.e;g=0;e=1;h=_eb.length-1;if(b.a==0&&b.f!=-1){throw FD(new zcb('Division by zero'))}if(j.e==0){return yfb(c)}d=Nfb(j,k);j=Jfb(j,d);k=Jfb(k,d);f=Pfb(k);k=Wfb(k,f);do{l=Kfb(k,_eb[e]);if(l[1].e==0){g+=e;e<h&&++e;k=l[0]}else{if(e==1){break}e=1}}while(true);if(!Lfb(k.e<0?new $fb(1,k.d,k.a):k,(Ffb(),Afb))){throw FD(new zcb('Non-terminating decimal expansion; no exact representable decimal result'))}k.e<0&&(j=j.e==0?j:new $fb(-j.e,j.d,j.a));i=ufb(c+$wnd.Math.max(f,g));e=f-g;j=e>0?(Rgb(),e<Qgb.length?Wgb(j,Qgb[e]):e<Ogb.length?Sfb(j,Ogb[e]):Sfb(j,Tfb(Ogb[1],e))):Vfb(j,-e);return new ofb(j,i)}
function fX(a,b){var c,d,e;a.kb.style[Tub]=b+(em(),$ub);c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}e=0;a.ec>0&&(e=1+(a.ec+1)*15);if(c==0){a.I.style[Wtb]=(wk(),ytb);a.J.style[Wtb]=ytb}else{a.I.style[Wtb]=(wk(),aub);a.J.style[Wtb]=aub}a.Z||(a.J.style[Wtb]=(wk(),ytb),undefined);!!a.ib&&a.H>0?(a.F.style[Wtb]=(wk(),aub),undefined):(a.F.style[Wtb]=(wk(),ytb),undefined);a.I.style[ztb]=c+$ub;a.I.style[Tub]=b+$ub;a.F.style[ztb]=c+$ub;a.F.style[Tub]=b+$ub;a.J.style[Tub]=b+$ub;a.J.style[ztb]=c+$ub;a.Db&&(a.J.style[Atb]=IU(a)+$ub,undefined);a.J.style[Sub]=e+$ub;a.D.style[Tub]=b+$ub;a.D.style[Sub]=e+$ub;a.D.style[ztb]=c+$ub;a.bc.style[Tub]=b+c+$ub;a.bc.style[Sub]=_ub;a.bc.style[Atb]=e+$ub;a.g=e;a.f=c;return c}
function qO(a,b){var c,d;switch((Fh(),b).keyCode|0){case 8:case 46:a.t.$?pb(new hP(a),100):s1((ng(),mg),new jP(a));s1((ng(),mg),new lP(a));break;case 27:NK(a.j,a.c);m$(a.t);KO(a);b.stopPropagation();Eh.Ud(b);break;case 13:l$(a.t,(d=LK(a.j),d==null?'':d));KO(a);b.stopPropagation();Eh.Ud(b);break;case 9:p$(a.t,(c=LK(a.j),c==null?'':c),!b.shiftKey);KO(a);b.stopPropagation();break;case 38:if(a.g){uO(a,!!b.shiftKey,true,false,false);Eh.Ud(b)}break;case 39:if(a.g){uO(a,!!b.shiftKey,false,true,false);Eh.Ud(b)}break;case 40:if(a.g){uO(a,!!b.shiftKey,false,false,true);Eh.Ud(b)}break;case 37:if(a.g){uO(a,!!b.shiftKey,false,false,false);Eh.Ud(b)}break;default:jO(a,a.j);}if(a.e){PO(a,false);s1((ng(),mg),new ZO(a))}}
function VU(a,b,c){var d,e,f,g,h,i,j,k;a.Yb=true;d=c-a.Rb;d<0&&(d=0);WS(a.Vb);d>0?kI(a.Xb,'Height: '+d+'px \u2248 '+ffb(wfb(d/a.Lb*72))+'pt'):kI(a.Xb,'Hide row');j='.'+a.zc+ywb+a.$b+'{height:'+d+xwb;ZS(a.Vb,j);e=0;k=fh(a.yc)-c;for(g=a.$b+1;g<=a.zb&&e<k;g++){e+=TZ(a.a,g)?0:g>=a.W.length?zU(a):a.W[g-1]}i=c-a.Sb;i<a.Rb-a.Sb&&(i=a.Rb-a.Sb);j='';for(h=a.$b+1;h<=a.zb;h++){j+='.'+a.zc+ywb+h;a.zb!=h&&(j+=',')}if(!!a.jb&&a.$b>=a.jb.a.length){for(f=1;f<=a.jb.a.length;f++){i+=TZ(a.a,f)?0:f>=a.W.length?zU(a):a.W[f-1]}}i+=a.Nc;(!a.jb||a.$b>a.jb.a.length)&&(i-=(a.yc.scrollTop||0)|0);if(j.length!=0){j+='{margin-top:'+i+xwb;ZS(a.Vb,j)}j='.'+a.zc+'.row-resizing > div.resize-line.rh {margin-top:'+(i-1)+xwb;ZS(a.Vb,j);KW(a,b,c)}
function tV(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!!(Fh(),b).changedTouches&&b.changedTouches.length>0){k=b.changedTouches;i=Pm(k[k.length-1])}else if(!!b.touches&&b.touches.length>0){k=b.touches;i=Pm(k[k.length-1])}else{i=CX(b)}m=(g=lj($doc),w1(),b.type.indexOf(Tvb)!=-1?Om(b.changedTouches[0])+g:$h(b.clientY||0)+g);l=(f=kj($doc),b.type.indexOf(Tvb)!=-1?Nm(b.changedTouches[0])+f:$h(b.clientX||0)+f);if(UT(a,m,l)){return}d=0;e=0;c=null;if(i){c=i.getAttribute(Jtb)||'';_S(a.wb,c);d=a.wb.a;e=a.wb.b}if(e==0||d==0){return}h=Kvb.length;if(!geb(c.substr(c.length-h,h),Kvb)){j=GU(a,l,m,sU(a,d,e));d=j.c;e=j.k}if(d!=a.Ic||e!=a.Jc){d==0&&(l>hh(Ih(i))?(d=HU(a)+1):(d=a.Ic));e==0&&(m>fh(a.yc)?(e=rU(a)+1):(e=a.Jc));y$(a.a,d,e);a.Ic=d;a.Jc=e}}
function QV(b,c){var d,e,f,g,h,i,j;h=mvb+c.col1+nvb+c.row1;b.Fb.sheet.deleteRule(0);i=Ohb(b.Eb,Kdb(c.id));j=sU(b,c.col1,c.row1);!!j&&oM(j,i.o,i.b,false);ah(Thb(b.Eb,Kdb(c.id)).d);Thb(b.Kb,c);c.col1>=b.xc.e&&c.col2<=b.xc.f&&c.row1>=b.xc.K&&c.row2<=b.xc.L&&uX(b,c.col1,c.col2,c.row1,c.row2,false);f=null;if(!!b.r&&Qhb(b.r,h)){try{d=Njb(Njb(b.jc,c.row1-b.db),c.col1-b.bb);pM(d);f=d.d}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}}if(!!b.tb&&b.tb.contains(h)){try{d=Njb(Njb(b.jc,c.row1-b.db),c.col1-b.bb);qM(d);f=d.d}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}}if(Qhb(b.b,h)&&!!f){e=Phb(b.b,h);xN(e,f,c.row1,c.col1)}if(!!b.T&&Qhb(b.T,h)){try{d=Njb(Njb(b.jc,c.row1-b.db),c.col1-b.bb);g=Phb(b.T,h);HT(b,d,g)}catch(a){a=ED(a);if(!Oq(a,21))throw FD(a)}}}
function DG(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case Vtb:return Fub;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case oub:return 8;case 'scroll':return Jsb;case 'error':return Msb;case Gub:case 'mousewheel':return Hub;case nub:return 262144;case 'paste':return xub;case rub:return Iub;case 'touchmove':return Jub;case 'touchend':return Bsb;case 'touchcancel':return Kub;case 'gesturestart':return Lub;case 'gesturechange':return Mub;case 'gestureend':return Nub;default:return -1;}}
function xX(a){var b,c,d,e,f,g,h,i;d=a.ob>0?1:0;jh(a.Ec).indexOf('report')!=-1&&(d=0);i=0;a.hc.a.length==0||(i=IU(a));f=0;a.K.a.length==0||(f=wU(a));e=0;if(a.a.u){g=new f1;c1(g,he(a.a.u));e=Vq(g.b)}b=fX(a,e);c=gX(a,e);a.kb.style[Tub]=e+(em(),$ub);c==0||b==0?(a.kb.style[Wtb]=(wk(),ytb),undefined):(a.kb.style[Wtb]=(wk(),aub),undefined);a.kb.style[ztb]=b+$ub;a.kb.style[Atb]=c+$ub;s1((ng(),mg),new ZX(a));if(!a.Z){i=0;f=0}a.Nc=f+e+b;a.Cb=i+c;h=a.Mc.style;h[Atb]=a.Bb+i+1+$ub;h[ztb]=a.Kc+f+$ub;h[Tub]=e+b+$ub;h[Sub]=c+$ub;h=a.Oc.style;h[Sub]=a.Bb+a.Cb+d+$ub;h[ztb]=a.Kc+f+$ub;h[Tub]=e+b+$ub;h=a.c.style;h[Atb]=a.Bb+i+1+$ub;h[Tub]=a.Kc+a.Nc+$ub;h[Sub]=c+$ub;h=a.yc.style;h[Sub]=a.Bb+a.Cb+d+$ub;h[Tub]=a.Kc+a.Nc+$ub;h=a.N.style;h[Tub]=e+b+$ub;h[Sub]=c+$ub}
function wM(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=jh(a.d).indexOf(' r ')!=-1||feb(jh(a.d),' r');e=MZ(a.n.a,a.c);l=Ohb(a.n.pc,new BM(a.o,a.b,a.k,a.c));!l&&(l=Kdb(jM(a)));j=l.a-e;if(!k&&j>0){j+=2;c=a.c;m=0;d=a.n.a.g;g=hV(a.n,c);while(c<d.length&&m<j){if(g&&!hV(a.n,c+1)){break}h=sU(a.n,c+1,a.k);if(!!h&&h.o!=null&&h.o.length!=0){break}m+=d[c];++c}m+=e;i=Oi($doc);i.style[lvb]=ytb;i.style[Atb]=m+(em(),$ub);i.style[bvb]=(nl(),iub);i.style['textOverflow']=(Sl(),'ellipsis');b=a.d.childNodes;if(b){for(f=b.length-1;f>=0;f--){i.appendChild(b[f])}}a.d.innerHTML='';Vg(a.d,i);iM(a);a.i=true}else{a.i=false}jV(a.n,mvb+a.c+nvb+a.k)&&!Oq(a,171)?(a.d.style[bvb]=(nl(),iub),undefined):j>0?(a.d.style[bvb]=(nl(),hub),undefined):(a.d.style[bvb]=(nl(),iub),undefined);a.g=false}
function ygb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;q=Xp(Zq,uwb,16,d+1,15,1);r=Xp(Zq,uwb,16,f+1,15,1);s=f;i=Hdb(e[f-1]);if(i!=0){ogb(r,e,0,i);ogb(q,c,0,i)}else{Peb(c,0,q,0,d);Peb(e,0,r,0,f)}j=r[s-1];l=b-1;m=d;while(l>=0){k=0;if(q[m]==j){k=-1}else{t=GD(VD(HD(q[m],Zyb),32),HD(q[m-1],Zyb));w=Bgb(t,j);k=_D(w);v=_D(WD(w,32));if(k!=0){o=0;A=0;u=false;++k;do{--k;if(u){break}o=SD(HD(k,Zyb),HD(r[s-2],Zyb));A=GD(VD(v,32),HD(q[m-2],Zyb));p=GD(HD(v,Zyb),HD(j,Zyb));Hdb(_D(XD(p,32)))<32?(u=true):(v=_D(p))}while(ND(bE(o,bzb),bE(A,bzb)))}}if(k!=0){g=Egb(q,m-s,r,s,k);if(g!=0){--k;h=0;for(n=0;n<s;n++){h=GD(h,GD(HD(q[m-s+n],Zyb),HD(r[n],Zyb)));q[m-s+n]=_D(h);h=XD(h,32)}}}a!=null&&(a[l]=k);--m;--l}if(i!=0){rgb(r,s,q,0,i);return r}Peb(q,0,r,0,f);return q}
function mN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;h=hh(a.c);e=(a.c.offsetLeft||0)|0;g=(a.c.offsetWidth||0)|0;f=(a.c.offsetTop||0)|0;i=ih(a.c);k=h+15;if(k+a.n>hh(a.o)){o=gh(a.c)-15-a.n;gh(a.o)<o&&(k=o)}l=i-15;m=fh(a.o);if(l+a.k>m){l-=l+a.k-m+5;n=ih(a.o);l<n&&(l=n)}else l<ih(a.o)&&(l+=ih(a.o)-l);QM(a,k,l);a.j!=null&&sh(a.i,a.j);a.j=mvb+a.b+nvb+a.d;l+=2;k+=2;c=i-l;if(k>h){b=k-h;if(c>0){j=-($wnd.Math.atan(c/b)*wvb)}else{c=$wnd.Math.abs(c);j=0}}else{k-=2;b=h-(k+a.n);if(c>0){j=-180+$wnd.Math.atan(c/b)*wvb}else{c=$wnd.Math.abs(c);j=-180}}d=$wnd.Math.sqrt(b*b+c*c)+1;a.i.style[Atb]=d+(em(),$ub);a.i.style[Tub]=f+$ub;a.i.style[Sub]=e+g+$ub;a.i.style['transform']=xvb+j+'deg)';a.i.style['msTransform']=xvb+j+'deg)';a.i.style[yvb]=xvb+j+'deg)';dh(a.i,a.j);Vg(a.o,a.i)}
function hW(a,b,c,d){var e,f,g,h,i,j,k;j=false;b<=a.Rc&&(b=a.Rc+1);k=QU(a);e=rU(a);if(d){if(b<k){i=0;for(f=k-1;f>=b-1&&f>0;f--){i+=TZ(a.a,f)?0:f>=a.W.length?zU(a):a.W[f-1]}h=((a.yc.scrollTop||0)|0)-i;zh(a.yc,h>0?h:0);(b<=a.db||i>(a.a.M/2|0))&&(j=true)}else if(b>e){i=0;g=a.a.P;for(f=e+1;f<=b+1&&f<=g;f++){i+=TZ(a.a,f)?0:f>=a.W.length?zU(a):a.W[f-1]}zh(a.yc,((a.yc.scrollTop||0)|0)+i);(b>=a.zb||i>(a.a.M/2|0))&&(j=true)}}else{if(c>e){i=0;g=a.a.P;for(f=e+1;f<=c+1&&f<=g;f++){i+=TZ(a.a,f)?0:f>=a.W.length?zU(a):a.W[f-1]}zh(a.yc,((a.yc.scrollTop||0)|0)+i);(c>=a.zb||i>(a.a.M/2|0))&&(j=true)}else if(c<k){i=0;for(f=k-1;f>=c-1&&f>0;f--){i+=TZ(a.a,f)?0:f>=a.W.length?zU(a):a.W[f-1]}h=((a.yc.scrollTop||0)|0)-i;zh(a.yc,h>0?h:0);(c<=a.db||i>(a.a.M/2|0))&&(j=true)}}return j}
function v4(a){var b,c,d,e,f,g,h,i,j;if(!a.j){n4=null;cM(a.d.a);a.d=null;return}b=a.n+a.a;g=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0);c=-1;if(b>g){i=g-b;d=g}else if(b<0){i=-b;d=0}else{h=q4(a);Dqb(Mqb((Ocb(wz),wz.k)),'pxPerMs'+h);i=Vq(0.5*h*h/0.002);h<0&&(i=-i);d=b+i;if(d>g+(m4?0:(a.q.clientHeight|0)/3|0)){d=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+(m4?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else if(d<-(m4?0:(a.q.clientHeight|0)/3|0)){d=-(m4?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else{c=Vq($wnd.Math.abs(h/0.002))}}c==-1&&(c=350);if(c>1500){Dqb(Mqb((Ocb(wz),wz.k)),'Max animation time. '+c);c=1500}a.c=d;if($wnd.Math.abs(i)<3||c<20){Dqb(Mqb((Ocb(wz),wz.k)),"Small 'momentum' "+i+' |  '+c+' Skipping animation,');u4(a);return}j=-d+a.n;f=-b+a.n;if(m4){f-=a.n;j-=a.n}B4(a,c,f,j)}
function RO(a,b){fO();var c,d,e;this.r=(mF(),Oi($doc));this.i=new Tjb;this.F=new rnb;this.D=new mnb;this.G=new mnb;this.t=a;this.I=b;this.w=b.sb;this.H=new RS;QS(this.H,b,this);this.j=new TK;cf(this.j,2);this.a=new TK;cf(this.a,1);qe(this.j,'functionfield');qe(this.a,'addressfield');this.B=new RI;qe(this.B,'namedrangebox');OI(this.B);HI(this.B,'');this.C=new nI;qe(this.C,'arrow');te(this.B,false);te(this.C,false);d=new YH;c=new YH;e=new YH;c.Wc.className='fixed-left-panel';e.Wc.className='adjusting-right-panel';XH(c,this.a);XH(c,this.C);XH(c,this.B);XH(e,this.j);rH(d,c,d.Wc);rH(d,e,d.Wc);NH(this,d);this.Wc.className='functionbar';IF(he(this.B),1024);HF(he(this.B),new TO(this));IF(he(this.a),6656);HF(he(this.a),new _O(this));IF(he(this.j),7048);HF(he(this.j),new bP(this));this.r.className='formulaoverlay';Vg(this.Wc,this.r)}
function $W(b,c,d){var e,f,g,h,i,j,k;g=(mF(),DG((Fh(),c).type));j=d.getAttribute(Jtb)||'';if(geb(j,jvb)||geb(j,kvb)){e=Ih(d);f=e.getAttribute(Jtb)||'';i=Kvb.length;geb(f.substr(f.length-i,i),Kvb)&&(f=oeb(f,Gwb,''));if(Qhb(b.b,f)){return}if(g==16){if(!(BJ(b.q)&&geb(f,b.j))){_S(b.wb,f);b.k=b.wb.a;b.n=b.wb.b;e5(b.p)}}else{k=Eh.Sd(c);if(!b.o&&!(!!k&&!!k.equals?k.equals(e):k==e)){nN(b.q);b.j=null;b.k=-1;b.n=-1}}}else{i=Kvb.length;geb(j.substr(j.length-i,i),Kvb)&&(j=oeb(j,Gwb,''));if(Qhb(b.b,j)){return}if(g==16){if(!(BJ(b.q)&&geb(j,b.j))){GF(b.yc);_S(b.wb,j);b.k=b.wb.a;b.n=b.wb.b;e5(b.p)}}else if(g==32){k=Eh.Sd(c);if(!b.o&&!!k&&!!Ih(k)){try{if(!(AV(k.getAttribute(Jtb)||'')&&mf(Ih(k),d))){nN(b.q);b.j=null;b.n=-1;b.k=-1}}catch(a){a=ED(a);if(Oq(a,49)){h=a;Kqb(b.U,'SheetWidget:updateCellCommentDisplay: NPE ONMOUSEOUT, '+h.f)}else throw FD(a)}}}}}
function cfb(){cfb=kE;var a,b,c;new mfb(1,0);new mfb(10,0);new mfb(0,0);Veb=Xp(AB,tsb,36,11,0,1);Web=Xp(Wq,tsb,16,100,15,1);Xeb=$p(Vp(Xq,1),tsb,16,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,Wyb,Xyb,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Yeb=Xp(Zq,uwb,16,Xeb.length,15,1);Zeb=$p(Vp(Xq,1),tsb,16,15,[1,10,100,Otb,10000,100000,1000000,10000000,100000000,yub,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);$eb=Xp(Zq,uwb,16,Zeb.length,15,1);afb=Xp(AB,tsb,36,11,0,1);a=0;for(;a<afb.length;a++){Veb[a]=new mfb(a,0);afb[a]=new mfb(0,a);Web[a]=48}for(;a<Web.length;a++){Web[a]=48}for(c=0;c<Yeb.length;c++){Yeb[c]=pfb(Xeb[c])}for(b=0;b<$eb.length;b++){$eb[b]=pfb(Zeb[b])}Rgb();_eb=Ogb}
function Rnb(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[czb]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Pnb()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[czb]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function zT(a){this.k=Oi($doc);this.c=Oi($doc);this.i=Oi($doc);this.n=Oi($doc);this.o=Oi($doc);this.p=Oi($doc);this.q=Oi($doc);this.a=Oi($doc);this.g=bj($doc);this.v=Oi($doc);this.u=[];this.f=Oi($doc);this.e=a;this.n.className='scroll-tabs-beginning';this.o.className='scroll-tabs-end';this.p.className='scroll-tabs-left';this.q.className='scroll-tabs-right';this.a.className='add-new-tab';this.i.className='sheet-tabsheet-options';Vg(this.i,this.n);Vg(this.i,this.p);Vg(this.i,this.q);Vg(this.i,this.o);Vg(this.i,this.a);this.c.className='sheet-tabsheet-container';this.v.className='sheet-tabsheet-temp';Vg(this.k,this.v);this.k.className='sheet-tabsheet';Vg(this.k,this.i);Vg(this.k,this.c);this.f.className='sheet-tabsheet-infolabel';Vg(this.k,this.f);ne(this,this.k);IF(this.k,3);HF(this.k,new AT(this));IF(this.g,4736);HF(this.g,new CT(this));this.g.maxLength=31}
function BX(a,b){var c,d;GT(this);c=P0().toLowerCase();this.vb=c.indexOf('macintosh')!=-1||c.indexOf('mac osx')!=-1||c.indexOf('mac os x')!=-1;this.a=a;this.Qc=b;this.e=new mnb;this.b=new mnb;this.Ac=new mnb;this.Eb=new mnb;this.Kb=new mnb;this.rb=new b5;qe(this.rb,'v-spreadsheet-hyperlink-tooltip-label');this.qb=new hN;qe(this.qb,'v-tooltip');this.qb.r=this;ZH(this.qb,this.rb);this.Xb=new b5;qe(this.Xb,'v-spreadsheet-resize-tooltip-label');this.Wb=new hN;qe(this.Wb,'v-tooltip');this.Wb.r=this;ZH(this.Wb,this.Xb);this.q=new yN(this,this.yc);lN(this.q);ZU(this);Ae((mF(),this.Wc),Fwb,true);this.xc=new XR(a,this);this.M=new $N(this,new WN(this));Vg(this.Wc,he(this.M));d=new LS;d.c=this;d.a=this.vb;KS(d,this.Mc,this.Oc,this.c,this.yc);this.Nb=DF(new oY(this));He(this,new qY(this),(on(),on(),nn));this.kc=new f5(20,new hY(this));this.Qb=new f5(100,new jY(this))}
function yN(a,b){wJ();var c;hN.call(this);this.e=aj($doc);this.o=b;this.p=new YH;ZH(this,this.p);this.i=Oi($doc);this.i.className=Avb;this.a=new b5;te(this.a,false);qe(this.a,'comment-overlay-author');this.g=new b5;te(this.g,false);qe(this.g,'comment-overlay-label');vJ.$e((mF(),mF(),lh(this.Wc))).className='v-spreadsheet-comment-overlay';Ae(vJ.$e((null,lh(this.Wc))),'v-spreadsheet-comment-overlay-shadow',true);this.r=a;this.F=false;this.Wc.style[Xtb]=iub;!!this.t&&(this.t.style[Xtb]=iub,undefined);this.i.style[Xtb]=(sm(),iub);this.Wc.style[Ytb]='0';this.f=new b5;te(this.f,false);qe(this.f,'comment-overlay-invalidformula');XH(this.p,this.f);XH(this.p,this.a);XH(this.p,this.g);dh(this.e,'comment-overlay-input');this.e.style[Wtb]=(wk(),ytb);Vg(this.Wc,this.e);this.e.rows=4;this.e.style[Atb]=(em(),'200.0px');c=new BN(this,a);He(this.a,c,(gn(),gn(),fn));He(this.g,c,(null,fn))}
function wgb(a,b){ugb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p;i=ID(a,0)<0;i&&(a=TD(a));if(ID(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:n=new Jeb;b<0?(n.a+='0E+',n):(n.a+='0E',n);n.a+=b==Isb?'2147483648':''+-b;return n.a;}}k=18;l=Xp(Wq,tsb,16,k+1,15,1);c=k;p=a;do{j=p;p=KD(p,10);l[--c]=_D(GD(48,YD(j,SD(p,10))))&Nsb}while(ID(p,0)!=0);e=YD(YD(YD(k,c),b),1);if(b==0){i&&(l[--c]=45);return Aeb(l,c,k-c)}if(b>0&&ID(e,-6)>=0){if(ID(e,0)>=0){f=c+_D(e);for(h=k-1;h>=f;h--){l[h+1]=l[h]}l[++f]=46;i&&(l[--c]=45);return Aeb(l,c,k-c+1)}for(g=2;PD(g,GD(TD(e),1));g++){l[--c]=48}l[--c]=46;l[--c]=48;i&&(l[--c]=45);return Aeb(l,c,k-c)}o=c+1;d=k;m=new Keb;i&&(m.a+='-',m);if(d-o>=1){Deb(m,l[c]);m.a+='.';m.a+=Aeb(l,c+1,k-c-1)}else{m.a+=Aeb(l,c,k-c)}m.a+='E';ID(e,0)>0&&(m.a+='+',m);m.a+=''+aE(e);return m.a}
function hX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;n=oV(a);while(n.a<n.c.a.length){q=nkb(n);Oq(q,96)&&Pe(q,null)}$g(b);$g(c);h=0;f&&!a.G?(h=5):!f&&!a.dc&&(h=2);if(g>0){if(f){s=a.fc.clientWidth|0;a.Z&&(s+=IU(a))}else{s=a.I.clientHeight|0;a.Z&&(s+=wU(a))}s+=h;for(l=new pkb(d);l.a<l.c.a.length;){k=nkb(l);if(f){p=new NN(k.uniqueIndex,a.a);JN(p,a.G)}else{p=new _Q(k.uniqueIndex,a.a);JN(p,a.dc)}r=s;for(m=0;m<k.startIndex;m++){f?(r+=NZ(a.a,m+1)):(r+=TZ(a.a,m+1)?0:m+1>=a.W.length?zU(a):a.W[m+1-1])}p.f&&(f?(r-=xU(a,k.startIndex)/2|0):(r-=JU(a,k.startIndex)/2|0));p.hf(r,k.level-1);IN(p,k.collapsed);Vg(b,(mF(),p.Wc));Pe(p,a);o=0;for(j=k.startIndex;j<=k.endIndex;j++){f?(o+=NZ(a.a,j+1)):(o+=TZ(a.a,j+1)?0:j+1>=a.W.length?zU(a):a.W[j+1-1])}o-=h;p.f?f?(o+=xU(a,k.startIndex)/2):(o+=JU(a,k.startIndex)/2):f?(o+=xU(a,k.endIndex+2)/2):(o+=JU(a,k.endIndex+2)/2);KN(p,o);if(!!e&&e.a.length>k.startIndex){i=p.ef();Vg(c,i.Wc);Pe(i,a)}}}}
function AF(){var a,b,c;b=$doc.compatMode;a=$p(Vp(wB,1),Lsb,2,6,[Ltb]);for(c=0;c<a.length;c++){if(geb(a[c],b)){return}}a.length==1&&geb(Ltb,a[0])&&geb('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function OG(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?KG:null);c&2&&(a.ondblclick=b&2?KG:null);c&4&&(a.onmousedown=b&4?KG:null);c&8&&(a.onmouseup=b&8?KG:null);c&16&&(a.onmouseover=b&16?KG:null);c&32&&(a.onmouseout=b&32?KG:null);c&64&&(a.onmousemove=b&64?KG:null);c&128&&(a.onkeydown=b&128?KG:null);c&256&&(a.onkeypress=b&256?KG:null);c&512&&(a.onkeyup=b&512?KG:null);c&1024&&(a.onchange=b&1024?KG:null);c&2048&&(a.onfocus=b&2048?KG:null);c&4096&&(a.onblur=b&4096?KG:null);c&8192&&(a.onlosecapture=b&8192?KG:null);c&Jsb&&(a.onscroll=b&Jsb?KG:null);c&Fub&&(a.onload=b&Fub?LG:null);c&Msb&&(a.onerror=b&Msb?KG:null);c&Hub&&(a.onmousewheel=b&Hub?KG:null);c&262144&&(a.oncontextmenu=b&262144?KG:null);c&xub&&(a.onpaste=b&xub?KG:null);c&Iub&&(a.ontouchstart=b&Iub?KG:null);c&Jub&&(a.ontouchmove=b&Jub?KG:null);c&Bsb&&(a.ontouchend=b&Bsb?KG:null);c&Kub&&(a.ontouchcancel=b&Kub?KG:null);c&Lub&&(a.ongesturestart=b&Lub?KG:null);c&Mub&&(a.ongesturechange=b&Mub?KG:null);c&Nub&&(a.ongestureend=b&Nub?KG:null)}
function tP(a,b,c,d,e){var f,g,h,i,j,k;if(b==c&&d==e){h=Y_(a,d,b);if(!h){h=new sP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=Z_(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=false;f=d;while(f<=e){i=Y_(a,f,b);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=Y_(a,e,f);if(i){f=i.row2+1;if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=Y_(a,f,c);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=Y_(a,d,f);if(i){f=i.row2+1;if(d>i.col1){d=i.col1;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}d>e&&(d=e);if(k){return tP(a,b,c,d,e)}else if(b==c&&d==e){h=Y_(a,d,b);if(!h){h=new sP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=Z_(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new sP;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function OS(a,b){var c,d,e,f,g,h;e=vj(b.a);d=a.b.a;if(a.b._){switch(e){case 8:case 46:UU(a.b);QO(a.a);PO(a.a,true);kO(a.a);hO(a.a);break;case 27:BZ(d,d.b,true);AO(d.u);oU(d.W);nO(a.a);break;case 9:d$(d,(h=LK(a.b.sb),h==null?'':h),wj(b.a));nO(a.a);!!b.a&&zj(b.a);break;case 38:if(rO(a.a)){b$(d,(g=LK(a.b.sb),g==null?'':g),true);!!b.a&&zj(b.a)}else if(tO(a.a)){uO(a.a,wj(b.a),true,false,false);!!b.a&&zj(b.a)}break;case 40:if(rO(a.a)){b$(d,(g=LK(a.b.sb),g==null?'':g),false);!!b.a&&zj(b.a)}else if(tO(a.a)){uO(a.a,wj(b.a),false,false,true);!!b.a&&zj(b.a)}break;case 37:if(rO(a.a)){d$(d,(g=LK(a.b.sb),g==null?'':g),true);!!b.a&&zj(b.a)}else if(tO(a.a)){uO(a.a,wj(b.a),false,false,false);!!b.a&&zj(b.a)}else if(a.a.v){PO(a.a,true);JK(a.b.sb)==0&&!!b.a&&zj(b.a)}break;case 39:if(rO(a.a)){d$(d,(g=LK(a.b.sb),g==null?'':g),false);!!b.a&&zj(b.a)}else if(tO(a.a)){uO(a.a,wj(b.a),false,true,false);!!b.a&&zj(b.a)}else if(a.a.v){PO(a.a,true);c=JK(a.b.sb);f=(g=LK(a.b.sb),g==null?'':g).length;c==f&&!!b.a&&zj(b.a)}}}else{B$(d,b.a,XS(sj(b.a)))}Aj(b.a)}
function $Z(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;IZ(a);if(b==0||c==0){return}j=false;f||(j=c!=a.W.rc||b!=a.W.qc);if(d){m=a.W.qc;n=a.W.rc;g=m>b?b:m;h=m>b?m:b;k=n>c?c:n;l=n>c?n:c;o=tP(a.J,k,l,g,h);if(a.u.f);else if(DR(a.W.xc)){wX(a.W,o.col1,o.col2,o.row1,o.row2);uX(a.W,o.col1,o.col2,o.row1,o.row2,true)}else{uX(a.W,o.col1,o.col2,o.row1,o.row2,false)}if(a.u.f){EO(a.u,a.Y,a.Z,b,c,false)}else if(f){DR(a.W.xc)?r9(a.X,o.row1,o.col1,o.row2,o.col2):u9(a.X,o.row1,o.col1,o.row2,o.col2);pb(a.s,200)}}else if(e){if(b==a.W.qc&&c==a.W.rc){return}if(a.u.f){EO(a.u,b,c,b,c,true)}else{a.W.C&&(a.W.C=false,undefined);DR(a.W.xc)&&FW(a.W,false);UW(a.W,b,c);pR(a.R);j&&O_(a,b,c,null);if(f){p9(a.X,c,b);pb(a.s,200)}}}else{i=Z_(a.J,b,c);if(a.u.f){a.Y=b;a.Z=c;EO(a.u,b,c,b,c,false)}else{a.W.C||(a.W.C=true,undefined);if(!DR(a.W.xc)){FW(a.W,true);bU(a.W)}EW(a.W,b,c);if(i){wX(a.W,i.col1,i.col2,i.row1,i.row2);uX(a.W,i.col1,i.col2,i.row1,i.row2,true);tR(a.R,i.col1);uR(a.R,i.row1)}else{wX(a.W,b,b,c,c);uX(a.W,b,b,c,c,true)}j&&O_(a,b,c,null);if(f){pR(a.R);s9(a.X,c,b,true);pb(a.s,200)}}}}
function ZU(a){ne(a,a.Ec);Vg(a.Ec,a.yc);dh(a.Ec,'v-spreadsheet');a.yc.className='bottom-right-pane';dh(a.yc,awb);a.yc.tabIndex=3;a.Oc.className='top-right-pane';dh(a.Oc,awb);Vg(a.Ec,a.Oc);a.c.className='bottom-left-pane';dh(a.c,awb);Vg(a.Ec,a.c);a.Mc.className='top-left-pane';dh(a.Mc,awb);Vg(a.Ec,a.Mc);a.I.className='col-group-pane';Vg(a.Ec,a.I);a.fc.className='row-group-pane';Vg(a.Ec,a.fc);a.F.className='col-group-freeze-pane';Vg(a.Ec,a.F);a.cc.className='row-group-freeze-pane';Vg(a.Ec,a.cc);a.gc.className='row-group-summary';Vg(a.Ec,a.gc);a.J.className='col-group-summary';Vg(a.Ec,a.J);a.D.className='col-group-border';Vg(a.Ec,a.D);a.bc.className='row-group-border';Vg(a.Ec,a.bc);a.kb.className='grouping-corner';Vg(a.Ec,a.kb);a.Tb.className=zwb;Vg(a.Ec,a.Tb);a.Ub.className=zwb;Vg(a.yc,a.Ub);a.N.className='corner';Vg(a.Ec,a.N);a.fb.className='floater';a.sb=new xP(a);ue(a.sb,'0');NK(a.sb,'x');he(a.sb).id='cellinput';mF();Vg(a.yc,wF(he(a.sb)));oH(a,a.sb);a.Mb.style[Atb]=(em(),'1.0in');a.Mb.style[Qtb]=(yl(),Stb);a.Mb.style[Xtb]=(sm(),iub);a.Mb.style['padding']=_ub;Vg(a.Ec,a.Mb);a.hb.style[Xtb]=iub;xh(a.hb,Awb)}
function gfb(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;h=null;j=new Keb;if(g<f&&(fsb(g,b.length),b.charCodeAt(g)==43)){++g;++c;if(g<f&&(fsb(g,b.length),b.charCodeAt(g)==43||(fsb(g,b.length),b.charCodeAt(g)==45))){throw FD(new _db(Gsb+b+'"'))}}while(g<f&&(fsb(g,b.length),b.charCodeAt(g)!=46)&&(fsb(g,b.length),b.charCodeAt(g)!=101)&&(fsb(g,b.length),b.charCodeAt(g)!=69)){++g}j.a+=''+b.substr(c,g-c);if(g<f&&(fsb(g,b.length),b.charCodeAt(g)==46)){++g;c=g;while(g<f&&(fsb(g,b.length),b.charCodeAt(g)!=101)&&(fsb(g,b.length),b.charCodeAt(g)!=69)){++g}a.e=g-c;j.a+=''+b.substr(c,g-c)}else{a.e=0}if(g<f&&(fsb(g,b.length),b.charCodeAt(g)==101||(fsb(g,b.length),b.charCodeAt(g)==69))){++g;c=g;if(g<f&&(fsb(g,b.length),b.charCodeAt(g)==43)){++g;g<f&&(fsb(g,b.length),b.charCodeAt(g)!=45)&&++c}h=b.substr(c,f-c);a.e=a.e-mdb(h);if(a.e!=Vq(a.e)){throw FD(new _db('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(bfb==null&&(bfb=new RegExp('^[+-]?\\d*$','i')),bfb.test(i)?parseInt(i,10):NaN);if(isNaN(a.f)){throw FD(new _db(Gsb+b+'"'))}a.a=pfb(a.f)}else{ifb(a,new bgb(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=eeb(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function N6(a,b,c){var d,e,f,g,h,i;for(e=$p(Vp(wB,1),Lsb,2,6,[tyb,uyb,'rows','cols',vyb,wyb,xyb,yyb,zyb,Ayb,'defRowH','defColW','rowH','colW',Byb,Cyb,Dyb,Eyb,Fyb,Gyb,Hyb,Swb,Twb,Iyb,Jyb,Kyb,Lyb,Myb,Nyb,Uwb,Vwb,Oyb,Pyb,Qyb,Ryb,Syb,ztb,Atb,wxb,xxb,sxb,fyb,'id',Wxb,Fxb,txb,gyb,Dxb]),f=0,g=e.length;f<g;++f){d=e[f];if(c.b||S1(c,d)){i=(!b.B&&(b.B=new S_),b.B);h=FP(a.e);geb(tyb,d)&&q_(i,h.P);geb(uyb,d)&&U$(i,h.k);geb('rows',d)&&w_(i,h.V);geb('cols',d)&&T$(i,h.j);geb(vyb,d)&&P$(i,h.e);geb(wyb,d)&&r_(i,h.Q);geb(xyb,d)&&R$(i,h.g);geb(yyb,d)&&t_(i,h.S);geb(zyb,d)&&Q$(i,h.f);geb(Ayb,d)&&s_(i,h.R);geb('defRowH',d)&&Z$(i,h.r);geb('defColW',d)&&Y$(i,h.q);geb('rowH',d)&&u_(i,h.T);geb('colW',d)&&S$(i,h.i);geb(Byb,d)&&N$(i,h.d);geb(Cyb,d)&&v_(i,h.U);geb(Dyb,d)&&V$(i,h.n);geb(Eyb,d)&&n_(i,h.J);geb(Fyb,d)&&o_(i,h.K);geb(Gyb,d)&&A_(i,h.Z);geb(Hyb,d)&&W$(i,h.p);geb(Swb,d)&&b_(i,h.v);geb(Twb,d)&&c_(i,h.w);geb(Iyb,d)&&D_(i,h.$);geb(Jyb,d)&&d_(i,h.A);geb(Kyb,d)&&G_(i,h.cb);geb(Lyb,d)&&g_(i,h.C);geb(Myb,d)&&$$(i,h.s);geb(Nyb,d)&&_$(i,h.t);geb(Uwb,d)&&E_(i,h._);geb(Vwb,d)&&e_(i,h.B);geb(Oyb,d)&&i_(i,h.D);geb(Pyb,d)&&k_(i,h.G);geb(Qyb,d)&&l_(i,h.H);geb(Ryb,d)&&m_(i,h.I);geb(Syb,d)&&p_(i,h.M);geb(ztb,d)&&a_(i,h.jb);geb(Atb,d)&&F_(i,h.nb);geb('id',d)&&h_(i,h.kb)}}}
function xgb(a,b){ugb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;B=a.e;o=a.d;e=a.a;if(B==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:w=new Jeb;b<0?(w.a+='0E+',w):(w.a+='0E',w);w.a+=-b;return w.a;}}t=o*10+1+7;u=Xp(Wq,tsb,16,t+1,15,1);c=t;if(o==1){h=e[0];if(h<0){H=HD(h,Zyb);do{p=H;H=KD(H,10);u[--c]=48+_D(YD(p,SD(H,10)))&Nsb}while(ID(H,0)!=0)}else{H=h;do{p=H;H=H/10|0;u[--c]=48+(p-H*10)&Nsb}while(H!=0)}}else{D=Xp(Zq,uwb,16,o,15,1);G=o;Peb(e,0,D,0,G);I:while(true){A=0;for(j=G-1;j>=0;j--){F=GD(VD(A,32),HD(D[j],Zyb));r=vgb(F);D[j]=_D(r);A=_D(WD(r,32))}s=_D(A);q=c;do{u[--c]=48+s%10&Nsb}while((s=s/10|0)!=0&&c!=0);d=9-q+c;for(i=0;i<d&&c>0;i++){u[--c]=48}l=G-1;for(;D[l]==0;l--){if(l==0){break I}}G=l+1}while(u[c]==48){++c}}n=B<0;g=t-c-b-1;if(b==0){n&&(u[--c]=45);return Aeb(u,c,t-c)}if(b>0&&g>=-6){if(g>=0){k=c+g;for(m=t-1;m>=k;m--){u[m+1]=u[m]}u[++k]=46;n&&(u[--c]=45);return Aeb(u,c,t-c+1)}for(l=2;l<-g+1;l++){u[--c]=48}u[--c]=46;u[--c]=48;n&&(u[--c]=45);return Aeb(u,c,t-c)}C=c+1;f=t;v=new Keb;n&&(v.a+='-',v);if(f-C>=1){Deb(v,u[c]);v.a+='.';v.a+=Aeb(u,c+1,t-c-1)}else{v.a+=Aeb(u,c,t-c)}v.a+='E';g>0&&(v.a+='+',v);v.a+=''+g;return v.a}
function B$(a,b,c){var d,e;if((Fh(),Eh).Qd(b)==0&&(b.keyCode|0)!=32||Eh.Qd(b)==13){switch(b.keyCode|0){case 8:case 46:DZ(a);if(!a.e){o9(a.X.t,$p(Vp(qB,1),tsb,1,5,[]));DO(a.u,'')}break;case 40:b.shiftKey?kR(a.R,true):lR(a.R,true);break;case 37:b.shiftKey?jR(a.R,false):mR(a.R,true);break;case 9:b.shiftKey?mR(a.R,Ojb(a.v,Kdb(a.W.qc),0)!=-1||Ojb(a.w,Kdb(a.W.rc),0)!=-1):nR(a.R,Ojb(a.v,Kdb(a.W.qc),0)!=-1||Ojb(a.w,Kdb(a.W.rc),0)!=-1);break;case 39:b.shiftKey?jR(a.R,true):nR(a.R,true);break;case 38:b.shiftKey?kR(a.R,false):oR(a.R,true);break;case 113:case 13:if(13==(b.keyCode|0)){if(Ojb(a.v,Kdb(a.W.qc),0)!=-1||Ojb(a.w,Kdb(a.W.rc),0)!=-1){lR(a.R,true);break}else{if(a.W.xc.e!=a.W.xc.f||a.W.xc.K!=a.W.xc.L){b.shiftKey?oR(a.R,false):lR(a.R,false);break}}}DZ(a);if(!lV(a.W)&&!a.C&&!a.e&&!a.o){a.b=NU(a.W);gO(a.u);a.t=false;a.C=true;MW(a.W,true,(d=LK(a.u.j),d==null?'':d));a.u.u=true;JO(a.u)}}}else{if(!(Ojb(a.v,Kdb(a.W.qc),0)!=-1||Ojb(a.w,Kdb(a.W.rc),0)!=-1)){DZ(a);if(!lV(a.W)&&!a.C&&!a.e&&!a.o){a.C=true;a.b=NU(a.W);JO(a.u);if(feb(a.b,'%')||mV(a.W)){(e=new rnb,Shb(e.a,'0',e),Shb(e.a,'1',e),Shb(e.a,'2',e),Shb(e.a,'3',e),Shb(e.a,'4',e),Shb(e.a,'5',e),Shb(e.a,'6',e),Shb(e.a,'7',e),Shb(e.a,'8',e),Shb(e.a,'9',e),Shb(e.a,'-',e),Shb(e.a,'+',e),Qhb(e.a,c))&&(c=c+'%');MW(a.W,true,c)}else{MW(a.W,true,c);gO(a.u)}DO(a.u,c)}}}}
function iR(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(b==c&&d==e){h=OZ(a.d,d,b);if(!h){h=new sP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=PZ(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=a.c.qc;l=a.c.rc;if(k<d||k>e||l<b||l>c){return OZ(a.d,k,a.c.rc)}m=false;f=d;while(f<=e){i=OZ(a.d,f,b);if(i){f=i.col2+1;if(b>i.row1){m=true;if(b<c){i.row2>c?(b=i.row2+1):(b=c);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{d=i.col1;e=i.col2;break}}}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=OZ(a.d,e,f);if(i){f=i.row2+1;if(e<i.col2){m=true;if(e>d){i.col1>d?(e=i.col1-1):(e=d);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=OZ(a.d,f,c);if(i){f=i.col2+1;if(c<i.row2){m=true;if(c>b){b<i.row1?(c=i.row1-1):(c=b);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{e=i.col1;d=i.col2;break}}}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=OZ(a.d,d,f);if(i){f=i.row2+1;if(d>i.col1){m=true;if(d<e){e>i.col2?(d=i.col2+1):(d=e);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}d>e&&(d=e);if(m){return iR(a,b,c,d,e)}else if(b==c&&d==e){h=OZ(a.d,d,b);if(!h){h=new sP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=PZ(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new sP;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function MV(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;yX(b);D=b.Kc+((b.yc.scrollTop||0)|0);C=ph(b.yc);G=D-b.Pb;l=C-b.Ob;try{if(b.zb>b.a.P){b.zb=b.a.P;while(b.zb-b.db+1<b.jc.a.length){A=Qjb(b.jc,b.jc.a.length-1);for(g=new pkb(A);g.a<g.c.a.length;){f=nkb(g);ah(f.d)}ah(Qjb(b.hc,b.hc.a.length-1))}}if(b.xb>b.a.i){b.xb=b.a.i;for(B=new pkb(b.jc);B.a<B.c.a.length;){A=nkb(B);while(b.xb-b.bb+1<A.a.length){ah(Qjb(A,A.a.length-1).d)}}while(b.xb-b.bb+1<b.K.a.length){ah(Qjb(b.K,b.K.a.length-1))}}r=1;for(n=1;n<b.db;n++){r+=TZ(b.a,n)?0:n>=b.W.length?zU(b):b.W[n-1];n==b.Rc&&(b.Kc=r)}t=r;for(o=b.db;o<=b.zb;o++){t+=TZ(b.a,o)?0:o>=b.W.length?zU(b):b.W[o-1]}d=b.Kc+D+b.nc+b.a.M;F=r-b.eb;e=t-b.Ab;b.eb=r;b.Ab=t;q=0;for(p=1;p<b.bb;p++){q+=NZ(b.a,p);b.ob==p&&(b.Bb=q)}s=q;for(m=b.bb;m<=b.xb;m++){s+=NZ(b.a,m)}v=b.Bb+C+b.oc+b.a.j;w=s-b.yb;b.cb=q;b.yb=s;SU(b,C);cX(b,0,-1);if(w<0||l>0||b.xb<b.a.i&&b.yb<v){TU(b,C);cX(b,0,1)}if(F>0||G<0){YU(b,D);cX(b,-1,0)}if(e!=0||G>0||b.zb<b.a.P&&b.Ab<d){XU(b,D);cX(b,1,0)}_V(b);b.Ob=C;b.Pb=D;c&&e5(b.Qb);for(i=(u=(new jjb(b.b)).a.Uf().Ie(),new ojb(u));i.a.Se();){h=(k=i.a.Te(),k.bg());SZ(b.a,h.b)||TZ(b.a,h.d)?(KM(h,false),ah(h.i)):qN(h)}rV(b);wX(b,b.xc.e,b.xc.f,b.xc.K,b.xc.L);dX(b);tX(b);pX(b,true)}catch(a){a=ED(a);if(Oq(a,21)){j=a;Jqb(b.U,'SheetWidget:relayoutSheet: '+yf(j,j.Fd())+' while relayouting spreadsheet');bW(b,C,D);_V(b);x$(b.a,b.db,b.zb,b.bb,b.xb);XV(b);aW(b);dX(b);tX(b);WV(b);IV(b);oX(b)}else throw FD(a)}}
function kR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.xc.K;h=o;f=a.c.xc.e;d=a.c.xc.L;g=d;j=a.c.xc.f;m=a.c.rc;l=a.c.qc;i=PZ(a.d,l,m);c=false;if(a.c.C){!!i&&(b&&i.row1!=o||!b&&i.row2==d)&&(m=i.row2);n=null;if(m==o){if(b&&d+1<=a.d.P){++d;while(!!a.d.w&&Ojb(a.d.w,Kdb(d),0)!=-1&&d<a.d.P){++d}n=tP(a.d.J,o,d,f,j)}else if(!b){if(o!=d){--d;while(!!a.d.w&&Ojb(a.d.w,Kdb(d),0)!=-1&&d>o){--d}n=iR(a,o,d,f,j)}else if(o-1>0){c=true;--o;while(!!a.d.w&&Ojb(a.d.w,Kdb(o),0)!=-1&&o>1){--o}n=tP(a.d.J,o,d,f,j)}}}else if(m==d){if(b){if(o!=d){c=true;++o;while(!!a.d.w&&Ojb(a.d.w,Kdb(o),0)!=-1&&o<d){++o}n=iR(a,o,d,f,j)}else if(d+1<=a.d.P){++d;while(!!a.d.w&&Ojb(a.d.w,Kdb(d),0)!=-1&&d<a.d.P){++d}n=tP(a.d.J,o,d,f,j)}}else if(!b&&o-1>0){c=true;--o;while(!!a.d.w&&Ojb(a.d.w,Kdb(o),0)!=-1&&o>1){--o}n=tP(a.d.J,o,d,f,j)}}else{if(b){if(d+1<=a.d.P){++d;while(!!a.d.w&&Ojb(a.d.w,Kdb(d),0)!=-1&&d<a.d.P){++d}n=tP(a.d.J,o,d,f,j)}}else{c=true;if(o-1>0){--o;while(!!a.d.w&&Ojb(a.d.w,Kdb(o),0)!=-1&&o>1){--o}n=tP(a.d.J,o,d,f,j)}}}if(!n){return}wX(a.c,n.col1,n.col2,n.row1,n.row2);TV(a.c,n.col1,n.col2,n.row1,n.row2);UV(a.c,n.row1,n.row2,n.col1,n.col2);hW(a.c,n.row1,n.row2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++k;while(!!a.d.w&&Ojb(a.d.w,Kdb(k),0)!=-1&&k<a.d.P){++k}}else{--m;while(!!a.d.w&&Ojb(a.d.w,Kdb(m),0)!=-1&&m>1){--m}}if(m>0&&k<=a.d.P){n=tP(a.d.J,m,k,l,e);if(n){a.c.C=true;FW(a.c,true);bU(a.c);wX(a.c,n.col1,n.col2,n.row1,n.row2);uX(a.c,n.col1,n.col2,n.row1,n.row2,true)}}jW(a.c)}if(f!=a.c.xc.e||j!=a.c.xc.f||h!=a.c.xc.K||g!=a.c.xc.L){r9(a.d.X,a.c.xc.K,a.c.xc.e,a.c.xc.L,a.c.xc.f);pb(a.d.s,200)}}
function jR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.xc.K;f=a.c.xc.e;g=f;j=a.c.xc.f;h=j;d=a.c.xc.L;l=a.c.qc;m=a.c.rc;i=Z_(a.d.J,l,m);c=false;if(a.c.C){!!i&&(b&&i.col1!=f||!b&&i.col2==j)&&(l=i.col2);n=null;if(l==f){if(b&&j+1<=a.d.i){++j;while(!!a.d.v&&Ojb(a.d.v,Kdb(j),0)!=-1&&j<a.d.i){++j}n=tP(a.d.J,o,d,f,j)}else if(!b){if(j!=f){--j;while(!!a.d.v&&Ojb(a.d.v,Kdb(j),0)!=-1&&j>f){--j}n=iR(a,o,d,f,j)}else if(f-1>0){c=true;--f;while(!!a.d.v&&Ojb(a.d.v,Kdb(f),0)!=-1&&f>1){--f}n=tP(a.d.J,o,d,f,j)}}}else if(l==j){if(b){if(j!=f){c=true;++f;while(!!a.d.v&&Ojb(a.d.v,Kdb(f),0)!=-1&&f<j){++f}n=iR(a,o,d,f,j)}else if(j+1<=a.d.i){++j;while(!!a.d.v&&Ojb(a.d.v,Kdb(j),0)!=-1&&j<a.d.i){++j}n=tP(a.d.J,o,d,f,j)}}else if(!b&&f-1>0){c=true;--f;while(!!a.d.v&&Ojb(a.d.v,Kdb(f),0)!=-1&&f>1){--f}n=tP(a.d.J,o,d,f,j)}}else{if(b){if(j+1<=a.d.i){++j;while(!!a.d.v&&Ojb(a.d.v,Kdb(j),0)!=-1&&j<a.d.i){++j}n=tP(a.d.J,o,d,f,j)}}else{c=true;if(f-1>0){--f;while(!!a.d.v&&Ojb(a.d.v,Kdb(f),0)!=-1&&f>1){--f}n=tP(a.d.J,o,d,f,j)}}}if(!n){return}wX(a.c,n.col1,n.col2,n.row1,n.row2);TV(a.c,n.col1,n.col2,n.row1,n.row2);UV(a.c,n.row1,n.row2,n.col1,n.col2);gW(a.c,n.col1,n.col2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++e;while(!!a.d.v&&Ojb(a.d.v,Kdb(e),0)!=-1&&e<a.d.i){++e}}else{--l;while(!!a.d.v&&Ojb(a.d.v,Kdb(l),0)!=-1&&l>1){--l}}if(l>0&&e<a.d.i){n=tP(a.d.J,m,k,l,e);if(n){a.c.C=true;FW(a.c,true);bU(a.c);wX(a.c,n.col1,n.col2,n.row1,n.row2);uX(a.c,n.col1,n.col2,n.row1,n.row2,true)}}jW(a.c)}if(g!=a.c.xc.e||h!=a.c.xc.f||o!=a.c.xc.K||d!=a.c.xc.L){r9(a.d.X,a.c.xc.K,a.c.xc.e,a.c.xc.L,a.c.xc.f);pb(a.d.s,200)}}
function uV(b,c){var d,e,f,g,h,i,j,k,l,m,n;k=CX(c);d=(Fh(),k).getAttribute(Jtb)||'';if(b.o&&d.indexOf('comment-overlay')==-1){b.o=false;tN(b.Q,false);if(M(b.Q,b.q)){nN(b.q);b.j=null;b.k=-1;b.n=-1}}if(d.indexOf(awb)!=-1||geb(k.tagName,'input')||geb(d,'floater')){return}if(d.indexOf(bwb)!=-1){geb(d,jvb)||geb(d,kvb)?_S(b.wb,jh(Ih(k))):_S(b.wb,d);m=b.wb.a;n=b.wb.b;try{j=Kvb.length;if(!geb(d.substr(d.length-j,j),Kvb)){e=(h=kj($doc),w1(),c.type.indexOf(Tvb)!=-1?Nm(c.changedTouches[0])+h:$h(c.clientX||0)+h);f=(i=lj($doc),c.type.indexOf(Tvb)!=-1?Om(c.changedTouches[0])+i:$h(c.clientY||0)+i);l=GU(b,e,f,sU(b,m,n));k=l.d;m=l.c;n=l.k}}catch(a){a=ED(a);if(Oq(a,81)){Jqb(b.U,'SheetWidget:onSheetMouseDown - JSE while trying to find real event target, className:'+d)}else if(Oq(a,33)){Jqb(b.U,'SheetWidget:onSheetMouseDown - IOOBE while trying to find real event target, className:'+d)}else throw FD(a)}c.stopPropagation();Eh.Ud(c);if(Eh.Pd(c)==2){FF(b.yc);f$(b.a,c,m,n)}else{b.yc.focus();b._&&!Zg(he(b.sb),k)&&a$(b.a,(g=LK(b.sb),g==null?'':g));if(!!c.ctrlKey||!!c.metaKey||!!c.shiftKey){$Z(b.a,m,n,(Eh.$d(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,true);b.Ic=-1;b.Jc=-1}else{if(!!b.s&&Qhb(b.s,mvb+b.wb.a+nvb+b.wb.b)){r$(b.a,m,n)}else{$Z(b.a,m,n,(Eh.$d(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,false);b.wc=true;b.Ic=m;b.Jc=n;b.Gc=m<=b.ob&&n<=b.Rc;b.Hc=m>b.ob&&m<=b.xb&&n<=b.Rc;b.Fc=n>b.Rc&&n<=b.zb&&m<=b.ob;b.O=!b.Gc&&!b.Hc;b.P=!b.Gc&&!b.Fc;b.A=(h=kj($doc),w1(),c.type.indexOf(Tvb)!=-1?Nm(c.changedTouches[0])+h:$h(c.clientX||0)+h);b.B=(i=lj($doc),c.type.indexOf(Tvb)!=-1?Om(c.changedTouches[0])+i:$h(c.clientY||0)+i);GF(b.yc)}}}}}
function eW(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;o=Njb(($rb(0,h.a.length),h.a[0]),0).k;s=Njb(Njb(h,h.a.length-1),0).k;n=Njb(($rb(0,h.a.length),h.a[0]),0).c;r=Njb(($rb(0,h.a.length),h.a[0]),($rb(0,h.a.length),h.a[0]).a.length-1).c;A=new Tjb;for(q=new pkb(h);q.a<q.c.a.length;){u=nkb(q);t=($rb(0,u.a.length),u.a[0]).k;if(b>0){if(t<d){if(s<e){t=++s;okb(q);A.a[A.a.length]=u}else{for(l=new pkb(u);l.a<l.c.a.length;){k=nkb(l);ah(k.d)}okb(q);continue}}}else if(b<0){if(t>e){if(o>d){t=--o;okb(q);A.a[A.a.length]=u}else{for(l=new pkb(u);l.a<l.c.a.length;){k=nkb(l);ah(k.d)}okb(q);continue}}}n=($rb(0,u.a.length),u.a[0]).c;r=Njb(u,u.a.length-1).c;w=new Tjb;for(m=new pkb(u);m.a<m.c.a.length;){k=nkb(m);j=k.c;if(c>0){if(j<f){if(r<g){j=++r;okb(m);w.a[w.a.length]=k}else{ah(k.d);okb(m);continue}}}else if(c<0){if(j>g){if(n>f){j=--n;okb(m);w.a[w.a.length]=k}else{ah(k.d);okb(m);continue}}}(j!=k.c||t!=k.k)&&sM(k,j,t,Phb(a.e,mvb+j+nvb+t))}if(c>0){for(l=new pkb(w);l.a<l.c.a.length;){k=nkb(l);u.a[u.a.length]=k}while(r<g){++r;k=new yM(a,r,t,Phb(a.e,mvb+r+nvb+t));Vg(i,k.d);u.a[u.a.length]=k}}else if(c<0){for(l=new pkb(w);l.a<l.c.a.length;){k=nkb(l);bsb(0,u.a.length);Trb(u.a,0,k)}while(n>f){--n;k=new yM(a,n,t,Phb(a.e,mvb+n+nvb+t));Vg(i,k.d);bsb(0,u.a.length);Trb(u.a,0,k)}}}if(b>0){for(v=new pkb(A);v.a<v.c.a.length;){u=nkb(v);h.a[h.a.length]=u}}else{for(v=new pkb(A);v.a<v.c.a.length;){u=nkb(v);bsb(0,h.a.length);Trb(h.a,0,u)}}if(b>0){while(s<e){u=new Ujb(g-f+1);++s;for(p=f;p<=g;p++){k=new yM(a,p,s,Phb(a.e,mvb+p+nvb+s));u.a[u.a.length]=k;Vg(i,k.d)}h.a[h.a.length]=u}}else if(b<0){while(o>d){u=new Tjb;--o;for(p=f;p<=g;p++){k=new yM(a,p,o,Phb(a.e,mvb+p+nvb+o));u.a[u.a.length]=k;Vg(i,k.d)}bsb(0,h.a.length);Trb(h.a,0,u)}}pX(a,false)}
function Pd(){Pd=kE;Hc=new Gb;Gc=new Fb;Ic=new Hb;Jc=new Nb;Kc=new Ob;Lc=new Pb;Mc=new Qb;Nc=new Rb;Oc=new Sb;Pc=new Tb;Qc=new Ub;Rc=new Vb;Sc=new Wb;Tc=new Xb;Uc=new Yb;Vc=new Zb;Xc=new _b;Wc=new $b;Yc=new ac;Zc=new bc;$c=new ec;_c=new fc;bd=new hc;cd=new ic;ad=new gc;dd=new jc;ed=new kc;fd=new lc;gd=new mc;jd=new pc;ld=new rc;md=new sc;kd=new qc;hd=new nc;nd=new tc;od=new uc;pd=new vc;qd=new wc;rd=new zc;td=new Ec;sd=new Dc;ud=new Fc;xd=new Rd;yd=new Sd;wd=new Qd;zd=new Td;Ad=new Ud;Bd=new Vd;Cd=new Wd;Dd=new Xd;Ed=new Yd;Gd=new $d;Hd=new _d;Fd=new Zd;Id=new ae;Jd=new be;Kd=new ce;Ld=new de;Nd=new fe;Od=new ge;Md=new ee;vd=new mnb;Shb(vd,'region',ud);Shb(vd,'alert',Gc);Shb(vd,'dialog',Sc);Shb(vd,htb,Hc);Shb(vd,itb,Ic);Shb(vd,'document',Uc);Shb(vd,'article',Jc);Shb(vd,'banner',Kc);Shb(vd,jtb,Lc);Shb(vd,'checkbox',Mc);Shb(vd,'gridcell',Xc);Shb(vd,ktb,Nc);Shb(vd,'group',Yc);Shb(vd,'combobox',Oc);Shb(vd,ltb,Pc);Shb(vd,mtb,Qc);Shb(vd,ntb,Rc);Shb(vd,'list',ad);Shb(vd,'directory',Tc);Shb(vd,'form',Vc);Shb(vd,'grid',Wc);Shb(vd,'heading',Zc);Shb(vd,'img',$c);Shb(vd,otb,_c);Shb(vd,'listbox',bd);Shb(vd,'listitem',cd);Shb(vd,'log',dd);Shb(vd,'main',ed);Shb(vd,'marquee',fd);Shb(vd,'math',gd);Shb(vd,'menu',hd);Shb(vd,'menubar',jd);Shb(vd,'menuitem',kd);Shb(vd,ptb,ld);Shb(vd,stb,pd);Shb(vd,'radio',sd);Shb(vd,qtb,md);Shb(vd,rtb,nd);Shb(vd,'note',od);Shb(vd,ttb,qd);Shb(vd,utb,rd);Shb(vd,vtb,td);Shb(vd,'row',wd);Shb(vd,'rowgroup',xd);Shb(vd,'rowheader',yd);Shb(vd,'search',Ad);Shb(vd,'separator',Bd);Shb(vd,'scrollbar',zd);Shb(vd,'slider',Cd);Shb(vd,wtb,Dd);Shb(vd,'status',Ed);Shb(vd,'tab',Fd);Shb(vd,'tablist',Gd);Shb(vd,'tabpanel',Hd);Shb(vd,'textbox',Id);Shb(vd,'timer',Jd);Shb(vd,'toolbar',Kd);Shb(vd,'tooltip',Ld);Shb(vd,'tree',Md);Shb(vd,'treegrid',Nd);Shb(vd,'treeitem',Od)}
function rbb(b){var c,d,e;b=ueb(b,(Aob(),yob));this.i=b.indexOf('gecko')!=-1&&b.indexOf(fxb)==-1&&b.indexOf(Tyb)==-1;b.indexOf(' presto/')!=-1;this.r=b.indexOf(Tyb)!=-1;this.s=!this.r&&b.indexOf('applewebkit')!=-1;this.e=b.indexOf(' chrome/')!=-1||b.indexOf(' crios/')!=-1;this.o=b.indexOf('opera')!=-1;this.j=b.indexOf('msie')!=-1&&!this.o&&b.indexOf('webtv')==-1;this.j=this.j||this.r;this.p=b.indexOf('phantomjs/')!=-1;this.g=b.indexOf(' firefox/')!=-1||b.indexOf('fxios/')!=-1;this.q=!this.e&&!this.j&&!this.p&&!this.g&&b.indexOf('safari')!=-1;if(b.indexOf(' edge/')!=-1){this.f=true;this.e=false;this.o=false;this.j=false;this.q=false;this.g=false;this.s=false;this.i=false;this.p=false}b.indexOf('chromeframe')!=-1;try{if(this.i){d=b.indexOf('rv:');if(d>=0){e=b.substr(d+3);e=qeb(e,'(\\.[0-9]+).+','$1');this.a=udb(e)}}else if(this.s){e=seb(b,b.indexOf('webkit/')+7);e=qeb(e,'([0-9]+)[^0-9].+','$1');this.a=udb(e)}else if(this.r){e=seb(b,b.indexOf(Tyb)+8);e=qeb(e,'([0-9]+\\.[0-9]+).*','$1');this.a=udb(e);this.a>7&&(this.a=7)}else this.f&&(this.a=0)}catch(a){a=ED(a);if(Oq(a,21)){Oeb()}else throw FD(a)}try{if(this.j){if(b.indexOf('msie')==-1){d=b.indexOf('rv:');if(d>=0){c=d+3;this.d=ibb(b,c);obb(this,this.d)}}else if(this.r){qbb(this,Vq(this.a)+4)}else{c=b.indexOf('msie ')+5;this.d=ibb(b,c);obb(this,this.d)}}else if(this.g){c=b.indexOf(' firefox/');c!=-1?(c+=9):(c=b.indexOf(' fxios/')+7);this.d=ibb(b,c);obb(this,this.d)}else if(this.e){c=b.indexOf(' chrome/');c!=-1?(c+=8):(c=b.indexOf(' crios/')+7);this.d=ibb(b,c);obb(this,this.d)}else if(this.q){c=b.indexOf(' version/')+9;this.d=ibb(b,c);obb(this,this.d)}else if(this.o){c=b.indexOf(' version/');c!=-1?(c+=9):(c=b.indexOf('opera/')+6);this.d=ibb(b,c);obb(this,this.d)}else if(this.f){c=b.indexOf(' edge/')+6;this.d=ibb(b,c);obb(this,this.d)}else if(this.p){c=b.indexOf(' phantomjs/')+11;this.d=ibb(b,c);obb(this,this.d)}}catch(a){a=ED(a);if(Oq(a,21)){Oeb()}else throw FD(a)}if(b.indexOf('windows ')!=-1){this.t=1;b.indexOf('windows phone')!=-1}else if(b.indexOf('android')!=-1){this.t=5;jbb(this,b)}else if(b.indexOf('linux')!=-1){this.t=3}else if(b.indexOf('macintosh')!=-1||b.indexOf('mac osx')!=-1||b.indexOf('mac os x')!=-1){this.k=b.indexOf('ipad')!=-1;this.n=b.indexOf('iphone')!=-1;if(this.k||b.indexOf('ipod')!=-1||this.n){this.t=4;mbb(this,b)}else{this.t=2}}else if(b.indexOf('; cros ')!=-1){this.t=6;kbb(this,b)}}
function n2(a){N3(a.b,qB,null);N3(a.b,LA,qB);N3(a.b,DA,qB);N3(a.b,OA,qB);N3(a.b,PA,qB);N3(a.b,QA,qB);N3(a.b,RA,qB);N3(a.b,SA,qB);N3(a.b,TA,qB);N3(a.b,UA,qB);N3(a.b,vA,DA);N3(a.b,FA,vA);N3(a.b,VA,FA);H3(a.b,Nz);I3(a.b,Jz,new t2);I3(a.b,Nz,new S2);I3(a.b,LA,new b3);I3(a.b,VA,new d3);I3(a.b,OA,new f3);I3(a.b,PA,new h3);I3(a.b,QA,new j3);I3(a.b,RA,new l3);I3(a.b,SA,new n3);I3(a.b,TA,new v2);I3(a.b,UA,new x2);L3(a.b,Nz,'getWidget',new A3(Jz));L3(a.b,Nz,'getState',new A3(VA));J3(a.b,nz,mxb,new A2);J3(a.b,nz,nxb,new C2);J3(a.b,Nz,oxb,new E2);J3(a.b,Nz,pxb,new G2);J3(a.b,Nz,qxb,new I2);o2(a.b);K3(a.b,SA,rxb,new A3(bB));K3(a.b,PA,'am',new A3(wB));K3(a.b,vA,sxb,new A3(wB));K3(a.b,vA,txb,new A3(bB));K3(a.b,UA,uxb,new A3(kB));K3(a.b,PA,vxb,new A3(wB));K3(a.b,PA,'dayNames',new A3(Vp(wB,1)));K3(a.b,vA,wxb,new A3(wB));K3(a.b,vA,xxb,new A3(GA));K3(a.b,TA,yxb,new A3(kB));K3(a.b,TA,zxb,new A3(bB));K3(a.b,TA,Axb,new A3(wB));K3(a.b,TA,Bxb,new A3(wB));K3(a.b,VA,Cxb,new A3(bB));K3(a.b,DA,Dxb,new A3(bB));K3(a.b,vA,Exb,new A3(IA));K3(a.b,vA,Fxb,new A3(wB));K3(a.b,PA,Gxb,new A3(kB));K3(a.b,OA,Hxb,new A3(kB));K3(a.b,LA,Ixb,new A3(bB));K3(a.b,vA,ztb,new A3(wB));K3(a.b,PA,Jxb,new A3(wB));K3(a.b,vA,'id',new A3(wB));K3(a.b,VA,Kxb,new A3(mB));K3(a.b,VA,Lxb,new A3(OA));K3(a.b,QA,Mxb,new B3(Nxb,$p(Vp(fz,1),tsb,5,0,[new A3(PA)])));K3(a.b,VA,Oxb,new A3(QA));K3(a.b,UA,'maxWidth',new A3(kB));K3(a.b,SA,'mode',new A3(CA));K3(a.b,PA,Pxb,new A3(Vp(wB,1)));K3(a.b,PA,'name',new A3(wB));K3(a.b,VA,Qxb,new B3(Rxb,$p(Vp(fz,1),tsb,5,0,[new A3(wB),new A3(RA)])));K3(a.b,RA,Sxb,new A3(KA));K3(a.b,UA,'openDelay',new A3(kB));K3(a.b,VA,Txb,new A3(wB));K3(a.b,VA,'pageState',new A3(LA));K3(a.b,SA,Uxb,new B3(Rxb,$p(Vp(fz,1),tsb,5,0,[new A3(wB),new A3(wB)])));K3(a.b,PA,'pm',new A3(wB));K3(a.b,VA,Vxb,new A3(kB));K3(a.b,RA,'postfix',new A3(wB));K3(a.b,RA,'prefix',new A3(wB));K3(a.b,vA,Wxb,new A3(wB));K3(a.b,VA,Xxb,new A3(SA));K3(a.b,SA,'pushUrl',new A3(wB));K3(a.b,UA,Yxb,new A3(kB));K3(a.b,UA,Zxb,new A3(kB));K3(a.b,TA,$xb,new A3(kB));K3(a.b,VA,_xb,new A3(TA));K3(a.b,TA,ayb,new A3(kB));K3(a.b,DA,byb,new B3('java.util.Set',$p(Vp(fz,1),tsb,5,0,[new A3(wB)])));K3(a.b,DA,'resources',new B3(Rxb,$p(Vp(fz,1),tsb,5,0,[new A3(wB),new A3(EA)])));K3(a.b,OA,cyb,new A3(kB));K3(a.b,PA,dyb,new A3(Vp(wB,1)));K3(a.b,PA,eyb,new A3(Vp(wB,1)));K3(a.b,vA,fyb,new B3(Nxb,$p(Vp(fz,1),tsb,5,0,[new A3(wB)])));K3(a.b,VA,gyb,new A3(kB));K3(a.b,VA,'theme',new A3(wB));K3(a.b,OA,hyb,new A3(kB));K3(a.b,VA,iyb,new A3(bB));K3(a.b,LA,'title',new A3(wB));K3(a.b,VA,jyb,new A3(UA));K3(a.b,PA,kyb,new A3(bB));K3(a.b,vA,Atb,new A3(wB));M3(a.b,CA,new K2);M3(a.b,EA,new N2);M3(a.b,GA,new P2);M3(a.b,IA,new U2);M3(a.b,KA,new X2);M3(a.b,Vp(wB,1),new $2);G3(a.b,Nz,new x3(nz,mxb,$p(Vp(wB,1),Lsb,2,6,[Fxb,Exb])));G3(a.b,Nz,new x3(nz,nxb,$p(Vp(wB,1),Lsb,2,6,[byb])));G3(a.b,Nz,new y3(oxb,$p(Vp(wB,1),Lsb,2,6,['theme'])));G3(a.b,Nz,new y3(pxb,$p(Vp(wB,1),Lsb,2,6,[iyb])));G3(a.b,Nz,new y3(qxb,$p(Vp(wB,1),Lsb,2,6,[Kxb])))}
function p2(c){var d={setter:function(a,b){a.a=Fcb(b)},getter:function(a){return Icb(a.a)}};c.Df(SA,rxb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Df(PA,'am',d);var d={setter:function(a,b){a.db=b},getter:function(a){return a.db}};c.Df(vA,sxb,d);var d={setter:function(a,b){a.eb=Fcb(b)},getter:function(a){return Icb(a.eb)}};c.Df(vA,txb,d);var d={setter:function(a,b){a.a=b.Rf()},getter:function(a){return Kdb(a.a)}};c.Df(UA,uxb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(PA,vxb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(PA,'dayNames',d);var d={noLayout:1,setter:function(a,b){a.fb=b},getter:function(a){return a.fb}};c.Df(vA,wxb,d);var d={noLayout:1,setter:function(a,b){a.gb=b},getter:function(a){return a.gb}};c.Df(vA,xxb,d);var d={setter:function(a,b){a.a=b.Rf()},getter:function(a){return Kdb(a.a)}};c.Df(TA,yxb,d);var d={setter:function(a,b){a.b=Fcb(b)},getter:function(a){return Icb(a.b)}};c.Df(TA,zxb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(TA,Axb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Df(TA,Bxb,d);var d={setter:function(a,b){a.a=Fcb(b)},getter:function(a){return Icb(a.a)}};c.Df(VA,Cxb,d);var d={setter:function(a,b){a.ob=Fcb(b)},getter:function(a){return Icb(a.ob)}};c.Df(DA,Dxb,d);var d={setter:function(a,b){a.hb=b},getter:function(a){return a.hb}};c.Df(vA,Exb,d);var d={setter:function(a,b){a.ib=b},getter:function(a){return a.ib}};c.Df(vA,Fxb,d);var d={setter:function(a,b){a.d=b.Rf()},getter:function(a){return Kdb(a.d)}};c.Df(PA,Gxb,d);var d={setter:function(a,b){a.a=b.Rf()},getter:function(a){return Kdb(a.a)}};c.Df(OA,Hxb,d);var d={setter:function(a,b){a.a=Fcb(b)},getter:function(a){return Icb(a.a)}};c.Df(LA,Ixb,d);var d={setter:function(a,b){a.jb=b},getter:function(a){return a.jb}};c.Df(vA,ztb,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Df(PA,Jxb,d);var d={setter:function(a,b){a.kb=b},getter:function(a){return a.kb}};c.Df(vA,'id',d);var d={setter:function(a,b){a.b=b.Sf()},getter:function(a){return Udb(a.b)}};c.Df(VA,Kxb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(VA,Lxb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Df(QA,Mxb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Df(VA,Oxb,d);var d={setter:function(a,b){a.b=b.Rf()},getter:function(a){return Kdb(a.b)}};c.Df(UA,'maxWidth',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(SA,'mode',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Df(PA,Pxb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Df(PA,'name',d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Df(VA,Qxb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Df(RA,Sxb,d);var d={setter:function(a,b){a.c=b.Rf()},getter:function(a){return Kdb(a.c)}};c.Df(UA,'openDelay',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Df(VA,Txb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Df(VA,'pageState',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(SA,Uxb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c.Df(PA,'pm',d);var d={setter:function(a,b){a.i=b.Rf()},getter:function(a){return Kdb(a.i)}};c.Df(VA,Vxb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(RA,'postfix',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(RA,'prefix',d);var d={setter:function(a,b){a.lb=b},getter:function(a){return a.lb}};c.Df(vA,Wxb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Df(VA,Xxb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Df(SA,'pushUrl',d);var d={setter:function(a,b){a.d=b.Rf()},getter:function(a){return Kdb(a.d)}};c.Df(UA,Yxb,d);var d={setter:function(a,b){a.e=b.Rf()},getter:function(a){return Kdb(a.e)}};c.Df(UA,Zxb,d);var d={setter:function(a,b){a.e=b.Rf()},getter:function(a){return Kdb(a.e)}};c.Df(TA,$xb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Df(VA,_xb,d);var d={setter:function(a,b){a.f=b.Rf()},getter:function(a){return Kdb(a.f)}};c.Df(TA,ayb,d);var d={noLayout:1,setter:function(a,b){a.pb=b},getter:function(a){return a.pb}};c.Df(DA,byb,d);var d={setter:function(a,b){a.qb=b},getter:function(a){return a.qb}};c.Df(DA,'resources',d);var d={setter:function(a,b){a.b=b.Rf()},getter:function(a){return Kdb(a.b)}};c.Df(OA,cyb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Df(PA,dyb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Df(PA,eyb,d);var d={setter:function(a,b){a.mb=b},getter:function(a){return a.mb}};c.Df(vA,fyb,d);var d={noLayout:1,setter:function(a,b){a.n=b.Rf()},getter:function(a){return Kdb(a.n)}};c.Df(VA,gyb,d);var d={setter:function(a,b){a.o=b},getter:function(a){return a.o}};c.Df(VA,'theme',d);var d={setter:function(a,b){a.c=b.Rf()},getter:function(a){return Kdb(a.c)}};c.Df(OA,hyb,d);var d={setter:function(a,b){a.p=Fcb(b)},getter:function(a){return Icb(a.p)}};c.Df(VA,iyb,d)}
var qsb='object',rsb='anonymous',ssb='fnStack',tsb={3:1},usb='Unknown',vsb='boolean',wsb='number',xsb='string',ysb=2147483647,zsb=-17592186044416,Asb=17592186044416,Bsb=4194304,Csb=1048575,Dsb='__noinit__',Esb={3:1,21:1,24:1,18:1},Fsb={3:1,21:1,33:1,24:1,18:1},Gsb='For input string: "',Hsb='null',Isb=-2147483648,Jsb=16384,Ksb='\\$',Lsb={3:1,41:1},Msb=65536,Nsb=65535,Osb={38:1,80:1},Psb={38:1,101:1},Qsb={100:1},Rsb={3:1,38:1,80:1,179:1},Ssb={3:1,149:1},Tsb={3:1,38:1,101:1},Usb='fromIndex: 0, toIndex: ',Vsb=', length: ',Wsb='Index: ',Xsb=', Size: ',Ysb='fromIndex: ',Zsb=', toIndex: ',$sb='java.lang',_sb='com.google.gwt.core.client',atb='com.google.gwt.core.client.impl',btb='java.util',ctb='java.util.stream',dtb=3.141592653589793,etb='com.google.gwt.animation.client',ftb='com.google.gwt.user.client',gtb='com.google.gwt.aria.client',htb='alertdialog',itb='application',jtb='button',ktb='columnheader',ltb='complementary',mtb='contentinfo',ntb='definition',otb='link',ptb='menuitemcheckbox',qtb='menuitemradio',rtb='navigation',stb='option',ttb='presentation',utb='progressbar',vtb='radiogroup',wtb='spinbutton',xtb='offsetWidth',ytb='none',ztb='height',Atb='width',Btb='Null widget handle. If you are creating a composite, ensure that initWidget() has been called.',Ctb='Style names cannot be empty',Dtb='aria-hidden',Etb='com.google.gwt.user.client.ui',Ftb={19:1,14:1,10:1,17:1,20:1,12:1,13:1},Gtb='disabled',Htb={19:1,14:1,10:1,60:1,73:1,17:1,20:1,12:1,13:1},Itb='com.google.gwt.canvas.client',Jtb='class',Ktb={115:1},Ltb='CSS1Compat',Mtb='com.google.gwt.dom.client',Ntb='DOMImplStandard',Otb=1000,Ptb='DOMImplMozilla',Qtb='position',Rtb='fixed',Stb='absolute',Ttb='DOMImplStandardBase',Utb='DOMImplWebkit',Vtb='load',Wtb='display',Xtb='visibility',Ytb='zIndex',Ztb={53:1,15:1,3:1,6:1,4:1},$tb='HIDDEN',_tb={23:1,15:1,3:1,6:1,4:1},aub='block',bub={15:1,62:1,3:1,6:1,4:1},cub={15:1,63:1,3:1,6:1,4:1},dub={15:1,64:1,3:1,6:1,4:1},eub={15:1,93:1,3:1,6:1,4:1},fub={34:1,3:1,6:1,4:1},gub={15:1,94:1,3:1,6:1,4:1},hub='visible',iub='hidden',jub={15:1,54:1,3:1,6:1,4:1},kub='com.google.web.bindery.event.shared',lub='com.google.gwt.event.shared',mub='com.google.gwt.event.dom.client',nub='contextmenu',oub='mouseup',pub='TouchEvent',qub='ontouchstart',rub='touchstart',tub='com.google.gwt.event.logical.shared',uub={89:1,3:1,21:1,24:1,18:1},vub='UmbrellaException',wub=4194303,xub=524288,yub=1000000000,zub='java.util.logging',Aub='com.google.gwt.logging.client',Bub='com.google.gwt.logging.impl',Cub='java.io',Dub='com.google.gwt.safehtml.shared',Eub='com.google.gwt.text.shared.testing',Fub=32768,Gub='DOMMouseScroll',Hub=131072,Iub=1048576,Jub=2097152,Kub=8388608,Lub=16777216,Mub=33554432,Nub=67108864,Oub={114:1},Pub='com.google.gwt.user.client.impl',Qub='__gwtLastUnhandledEvent',Rub={19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1},Sub='left',Tub='top',Uub={19:1,14:1,10:1,17:1,178:1,20:1,12:1,13:1},Vub={25:1},Wub='bidiwrapped',Xub='selected',Yub='subMenuIcon-selected',Zub='offsetHeight',$ub='px',_ub='0.0px',avb={27:1,181:1},bvb='overflow',cvb={19:1,14:1,10:1,17:1,31:1,20:1,134:1,12:1,13:1},dvb={662:1,27:1},evb='value',fvb={65:1,3:1,6:1,4:1},gvb='com.google.gwt.user.client.ui.impl',hvb={145:1,147:1},ivb='auto',jvb='cell-comment-triangle',kvb='cell-invalidformula-triangle',lvb='pointerEvents',mvb='col',nvb=' row',ovb='com.vaadin.addon.spreadsheet.client',pvb='animate-in',qvb='animate-out',rvb='marginLeft',svb='marginTop',tvb='com.vaadin.client.widgets',uvb='com.vaadin.client.ui',vvb='spreadsheet-overlays',wvb=57.29577951308232,xvb='rotate(',yvb='webkitTransform',zvb='comment-overlay-separator',Avb='comment-overlay-line',Bvb={180:1,27:1},Cvb={19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,96:1},Dvb='backgroundColor',Evb='border',Fvb='2px solid ',Gvb='borderRight',Hvb='borderBottom',Ivb={10:1},Jvb='textAlign',Kvb='merged-cell',Lvb='com.vaadin.shared',Mvb='There is no information about the state for ',Nvb='. Did you remember to compile the right widgetset?',Ovb={27:1,99:1,121:1,3:1},Pvb='active',Qvb='com.vaadin.shared.communication',Rvb={67:1,75:1,3:1},Svb='popupbutton',Tvb='touch',Uvb='fill',Vvb='bottom-left',Wvb='top-left',Xvb='v-contextmenu',Yvb='bottom-right',Zvb='sheet-selection',$vb='square',_vb='fill-touch-square',awb='sheet',bwb='cell',cwb=15759871,dwb='sheet-image',ewb='paddingLeft',fwb='paddingTop',gwb='marginRight',hwb='selected-tab',iwb='.col',jwb='.v-spreadsheet.',kwb='cell-range',lwb='selected-cell-highlight',mwb='selected-row-header',nwb='selected-column-header',owb=' .sheet .cell.cell-range {',pwb=' .sheet .col',qwb='display:none;',rwb=' .sheet .row',swb='.notusedselector',twb=', .v-spreadsheet.',uwb={22:1,3:1},vwb='Hide column',wwb=' > div.ch.col',xwb='px;}',ywb=' > div.rh.row',zwb='resize-line',Awb='5555555555',Bwb='text/css',Cwb='ch col',Dwb='<div class="header-resize-dnd-first" ><\/div><div class="header-resize-dnd-second" ><\/div>',Ewb='rh row',Fwb='notfocused',Gwb=' merged-cell',Hwb=' while creating the cell styles',Iwb='expandbutton',Jwb='lineHeight',Kwb='inactive',Lwb='row-resizing',Mwb='col-resizing',Nwb='header-resize-dnd-first',Owb='header-resize-dnd-second',Pwb={148:1,27:1},Qwb={25:1,711:1,125:1},Rwb='workbookChangeToggle',Swb='hiddenColumnIndexes',Twb='hiddenRowIndexes',Uwb='verticalSplitPosition',Vwb='horizontalSplitPosition',Wwb='com.vaadin.client',Xwb='lock-format-columns',Ywb='lock-format-rows',Zwb='com.vaadin.addon.spreadsheet.shared',$wb='com.vaadin.shared.ui',_wb='-webkit-animation-name',axb='animation-name',bxb='-moz-animation-name',cxb='-o-animation-name',dxb='fakeelement',exb='animationend',fxb='webkit',gxb='com.vaadin.client.communication',hxb='head',ixb='stylesheet',jxb='com.vaadin.client.metadata',kxb={661:1,27:1},lxb='com.vaadin.ui.UI',mxb='setErrorLevel',nxb='handleContextClickListenerChange',oxb='onThemeChange',pxb='onThoroughSizeChckChange',qxb='signalRoundTripCompleted',rxb='alwaysUseXhrForServerRequests',sxb='caption',txb='captionAsHtml',uxb='closeTimeout',vxb='dateFormat',wxb='description',xxb='descriptionContentMode',yxb='dialogGracePeriod',zxb='dialogModal',Axb='dialogText',Bxb='dialogTextGaveUp',Cxb='enableMobileHTML5DnD',Dxb='enabled',Exb='errorLevel',Fxb='errorMessage',Gxb='firstDayOfWeek',Hxb='firstDelay',Ixb='hasResizeListeners',Jxb='hourMinuteDelimiter',Kxb='latestDelayedCallbackID',Lxb='loadingIndicatorConfiguration',Mxb='localeData',Nxb='java.util.List',Oxb='localeServiceState',Pxb='monthNames',Qxb='notificationConfigurations',Rxb='java.util.Map',Sxb='notificationRole',Txb='overlayContainerLabel',Uxb='parameters',Vxb='pollInterval',Wxb='primaryStyleName',Xxb='pushConfiguration',Yxb='quickOpenDelay',Zxb='quickOpenTimeout',$xb='reconnectAttempts',_xb='reconnectDialogConfiguration',ayb='reconnectInterval',byb='registeredEventListeners',cyb='secondDelay',dyb='shortDayNames',eyb='shortMonthNames',fyb='styles',gyb='tabIndex',hyb='thirdDelay',iyb='thoroughSizeCheck',jyb='tooltipConfiguration',kyb='twelveHourClock',lyb={32:1},myb={148:1,244:1,245:1,27:1},nyb='_vScrollTop',oyb='v-scrollable',pyb='v-label-undef-w',qyb='/favicon.ico',ryb='com.vaadin.client.ui.ui',syb='com.vaadin.component.spreadsheet.client.js',tyb='rowBufferSize',uyb='columnBufferSize',vyb='colGroupingData',wyb='rowGroupingData',xyb='colGroupingMax',yyb='rowGroupingMax',zyb='colGroupingInversed',Ayb='rowGroupingInversed',Byb='cellStyleToCSSStyle',Cyb='rowIndexToStyleIndex',Dyb='columnIndexToStyleIndex',Eyb='lockedColumnIndexes',Fyb='lockedRowIndexes',Gyb='shiftedCellBorderStyles',Hyb='conditionalFormattingStyles',Iyb='verticalScrollPositions',Jyb='horizontalScrollPositions',Kyb='workbookProtected',Lyb='hyperlinksTooltips',Myb='displayGridlines',Nyb='displayRowColHeadings',Oyb='infoLabelValue',Pyb='invalidFormulaErrorMessage',Qyb='lockFormatColumns',Ryb='lockFormatRows',Syb='namedRanges',Tyb='trident/',Uyb='WARNING',Vyb='com.vaadin.shared.ui.ui',Wyb=244140625,Xyb=1220703125,Yyb=0.3010299956639812,Zyb=4294967295,$yb='BigInteger divide by zero',_yb=4294967296,azb=1073741824,bzb={l:0,m:0,h:524288},czb='delete',dzb={3:1,712:1},ezb='locale',fzb='default',gzb='user.agent';var _,hE,cE,yD=-1;$wnd.goog=$wnd.goog||{};$wnd.goog.global=$wnd.goog.global||$wnd;iE();jE(1,null,{},K);_.Xc=function L(a){return J(this,a)};_.Yc=function N(){return this.kg};_.Zc=function P(){return hsb(this)};_.$c=function R(){var a;return Pcb(O(this))+'@'+(a=Q(this)>>>0,a.toString(16))};_.equals=function(a){return this.Xc(a)};_.hashCode=function(){return this.Zc()};_.toString=function(){return this.$c()};var Eg;jE(681,1,{});jE(305,681,{},Mg);_.Kd=function Ng(a){var b={},j;var c=[];a[ssb]=c;var d=arguments.callee.caller;while(d){var e=(Fg(),d.name||(d.name=Ig(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.Ld=function Og(a){var b,c,d,e;d=(Fg(),a&&a[ssb]?a[ssb]:[]);c=d.length;e=Xp(sB,tsb,74,c,0,1);for(b=0;b<c;b++){e[b]=new aeb(d[b],null,-1)}return e};jE(682,681,{});_.Kd=function Qg(a){};_.Md=function Rg(a,b,c,d){return new aeb(b,a+'@'+d,c<0?-1:c)};_.Ld=function Sg(a){var b,c,d,e,f,g;e=Kg(a);f=Xp(sB,tsb,74,0,0,1);b=0;d=e.length;if(d==0){return f}g=Pg(this,e[0]);geb(g.d,rsb)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=Pg(this,e[c])}return f};jE(306,682,{},Tg);_.Md=function Ug(a,b,c,d){return new aeb(b,a,-1)};var Jq,Kq,Lq;jE(18,1,{3:1,18:1});_.Bd=function zf(a){return new Error(a)};_.Cd=function Bf(){return this.backingJsObject};_.Dd=function Cf(){var a;return a=mrb(nrb(Bkb((this.j==null&&(this.j=Xp(yB,tsb,18,0,0,1)),this.j)),new Reb),Nqb(new Yqb,new Wqb,new $qb,$p(Vp(dD,1),tsb,86,0,[(Rqb(),Pqb)]))),a.Tf(Xp(qB,tsb,1,a.size(),5,1))};_.Ed=function Df(){return this.e};_.Fd=function Ef(){return this.f};_.Gd=function Ff(){xf(this,Af(this.Bd(yf(this,this.f))));Gg(this)};_.$c=function Hf(){return yf(this,this.Fd())};_.backingJsObject=Dsb;_.g=false;_.k=true;jE(21,18,{3:1,21:1,18:1});jE(24,21,Esb,Kf,Lf);jE(33,24,Fsb,Acb,Bcb);jE(184,33,Fsb,Ccb);Jq={3:1,303:1,6:1};jE(182,1,{},Rcb);_.Lf=function Scb(a){var b;b=new Rcb;b.f=4;a>1?(b.c=Zcb(this,a-1)):(b.c=this);return b};_.Mf=function Ycb(){Ocb(this);return this.b};_.Nf=function $cb(){return Pcb(this)};_.Of=function adb(){return Qcb(this)};_.Pf=function cdb(){return (this.f&4)!=0};_.Qf=function ddb(){return (this.f&1)!=0};_.$c=function gdb(){return ((this.f&2)!=0?'interface ':(this.f&1)!=0?'':'class ')+(Ocb(this),this.k)};_.f=0;var Ncb=1;jE(82,1,{3:1,82:1});var jdb;Kq={3:1,6:1,304:1,82:1};jE(4,1,{3:1,6:1,4:1});_.ge=function Mj(a){return this.c-a.c};_.compareTo=function Lj(a){return this.c-a.c};_.equals=function Nj(a){return this===a};_.Xc=function(a){return this.equals(a)};_.hashCode=function Oj(){return hsb(this)};_.Zc=function(){return this.hashCode()};_.name=function Pj(){return this.b!=null?this.b:''+this.c};_.ordinal=function Qj(){return this.c};_.toString=function Rj(){return Jj(this)};_.$c=function(){return this.toString()};_.c=0;jE(68,24,Esb,wdb);jE(37,24,Esb,xdb,ydb,zdb);jE(90,82,{3:1,6:1,90:1,82:1},Bdb);_.ge=function Ddb(a){return Cdb(this.a,a.a)};_.Xc=function Edb(a){return Adb(this,a)};_.Zc=function Fdb(){return this.a};_.Rf=function Gdb(){return this.a};_.$c=function Jdb(){return ''+this.a};_.a=0;jE(102,24,Esb,Mf);jE(811,1,{});jE(49,102,{3:1,21:1,49:1,24:1,18:1},Xdb,Ydb,Zdb);_.Bd=function $db(a){return new TypeError(a)};Lq={3:1,183:1,6:1,2:1};jE(213,33,Fsb,Meb);jE(247,1,{},Reb);_.Hf=function Seb(a){return Qeb(a)};jE(28,24,Esb,Teb,Ueb);jE(683,1,{38:1});_.add=function ehb(a){throw FD(new Ueb('Add not supported on this collection'))};_.addAll=function fhb(a){return _gb(this,a)};_.clear=function ghb(){var a;for(a=this.Ie();a.Se();){a.Te();a.Ue()}};_.contains=function hhb(a){return ahb(this,a,false)};_.containsAll=function ihb(a){return bhb(this,a)};_.isEmpty=function jhb(){return this.size()==0};_.remove=function khb(a){return ahb(this,a,true)};_.removeAll=function lhb(a){var b,c,d;_rb(a);b=false;for(c=this.Ie();c.Se();){d=c.Te();if(a.contains(d)){c.Ue();b=true}}return b};_.retainAll=function mhb(a){var b,c,d;_rb(a);b=false;for(c=this.Ie();c.Se();){d=c.Te();if(!a.contains(d)){c.Ue();b=true}}return b};_.toArray=function nhb(){return this.Tf(Xp(qB,tsb,1,this.size(),5,1))};_.Tf=function ohb(a){return chb(this,a)};_.$c=function phb(){return dhb(this)};jE(684,683,Osb);_.addAtIndex=function uib(a,b){throw FD(new Ueb('Add not supported on this list'))};_.add=function vib(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function wib(a,b){var c,d,e;_rb(b);c=false;for(e=b.Ie();e.Se();){d=e.Te();this.addAtIndex(a++,d);c=true}return c};_.clear=function xib(){this.Xf(0,this.size())};_.Xc=function yib(a){var b,c,d,e,f;if(a===this){return true}if(!Oq(a,80)){return false}f=a;if(this.size()!=f.size()){return false}e=f.Ie();for(c=this.Ie();c.Se();){b=c.Te();d=e.Te();if(!(Uq(b)===Uq(d)||b!=null&&M(b,d))){return false}}return true};_.Zc=function zib(){return Pkb(this)};_.indexOf=function Aib(a){return tib(this,a)};_.Ie=function Bib(){return new Kib(this)};_.lastIndexOf=function Cib(a){var b;for(b=this.size()-1;b>-1;--b){if(Hob(a,this.getAtIndex(b))){return b}}return -1};_.Vf=function Dib(){return this.Wf(0)};_.Wf=function Eib(a){return new Oib(this,a)};_.removeAtIndex=function Fib(a){throw FD(new Ueb('Remove not supported on this list'))};_.Xf=function Gib(a,b){var c,d;d=this.Wf(a);for(c=a;c<b;++c){d.Te();d.Ue()}};_.setAtIndex=function Hib(a,b){throw FD(new Ueb('Set not supported on this list'))};_.subList=function Iib(a,b){return new Uib(this,a,b)};jE(199,1,{},Kib);_.Se=function Lib(){return this.b<this.d.size()};_.Te=function Mib(){Zrb(this.b<this.d.size());return this.d.getAtIndex(this.c=this.b++)};_.Ue=function Nib(){Jib(this)};_.b=0;_.c=-1;jE(307,199,{},Oib);_.Ue=function Sib(){Jib(this)};_.Yf=function Pib(a){this.a.addAtIndex(this.b,a);++this.b;this.c=-1};_.Zf=function Qib(){return this.b>0};_.$f=function Rib(){Zrb(this.b>0);return this.a.getAtIndex(this.c=--this.b)};_._f=function Tib(a){dsb(this.c!=-1);this.a.setAtIndex(this.c,a)};jE(308,684,Osb,Uib);_.addAtIndex=function Vib(a,b){bsb(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function Wib(a){$rb(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function Xib(a){var b;$rb(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function Yib(a,b){$rb(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function Zib(){return this.b};_.a=0;_.b=0;jE(685,1,{149:1});_.getOrDefault=function Ahb(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function Ghb(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function Ihb(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function uhb(){this.Uf().clear()};_.containsKey=function vhb(a){return !!rhb(this,a,false)};_.containsValue=function whb(a){var b,c,d;for(c=this.Uf().Ie();c.Se();){b=c.Te();d=b.bg();if(Uq(a)===Uq(d)||a!=null&&M(a,d)){return true}}return false};_.Xc=function xhb(a){var b,c,d;if(a===this){return true}if(!Oq(a,149)){return false}d=a;if(this.size()!=d.size()){return false}for(c=d.Uf().Ie();c.Se();){b=c.Te();if(!qhb(this,b)){return false}}return true};_.get=function yhb(a){return zhb(rhb(this,a,false))};_.Zc=function Bhb(){return Okb(this.Uf())};_.isEmpty=function Chb(){return this.size()==0};_.keySet=function Dhb(){return new $ib(this)};_.put=function Ehb(a,b){throw FD(new Ueb('Put not supported on this map'))};_.putAll=function Fhb(a){shb(this,a)};_.remove=function Hhb(a){return zhb(rhb(this,a,true))};_.size=function Jhb(){return this.Uf().size()};_.$c=function Khb(){var a,b,c;c=new tpb('{','}');for(b=this.Uf().Ie();b.Se();){a=b.Te();spb(c,thb(this,a.ag())+'='+thb(this,a.bg()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function Lhb(){return new jjb(this)};jE(686,683,Psb);_.Xc=function dib(a){var b;if(a===this){return true}if(!Oq(a,101)){return false}b=a;if(b.size()!=this.size()){return false}return bhb(this,b)};_.Zc=function eib(){return Okb(this)};_.removeAll=function fib(a){var b,c,d,e;_rb(a);e=this.size();if(e<a.size()){for(b=this.Ie();b.Se();){c=b.Te();a.contains(c)&&b.Ue()}}else{for(d=a.Ie();d.Se();){c=d.Te();this.remove(c)}}return e!=this.size()};jE(57,686,Psb,$ib);_.clear=function _ib(){this.a.clear()};_.contains=function ajb(a){return this.a.containsKey(a)};_.Ie=function bjb(){var a;return a=this.a.Uf().Ie(),new ejb(a)};_.remove=function cjb(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function djb(){return this.a.size()};jE(61,1,{},ejb);_.Se=function fjb(){return this.a.Se()};_.Te=function gjb(){var a;return a=this.a.Te(),a.ag()};_.Ue=function hjb(){this.a.Ue()};jE(39,683,{38:1},jjb);_.clear=function kjb(){this.a.clear()};_.contains=function ljb(a){return ijb(this,a)};_.Ie=function mjb(){var a;return a=this.a.Uf().Ie(),new ojb(a)};_.size=function njb(){return this.a.size()};jE(50,1,{},ojb);_.Se=function pjb(){return this.a.Se()};_.Te=function qjb(){var a;return a=this.a.Te(),a.bg()};_.Ue=function rjb(){this.a.Ue()};jE(315,1,Qsb);_.Xc=function sjb(a){var b;if(!Oq(a,100)){return false}b=a;return Hob(this.a,b.ag())&&Hob(this.b,b.bg())};_.ag=function tjb(){return this.a};_.bg=function ujb(){return this.b};_.Zc=function vjb(){return Iob(this.a)^Iob(this.b)};_.cg=function wjb(a){var b;b=this.b;this.b=a;return b};_.$c=function xjb(){return this.a+'='+this.b};jE(207,315,Qsb,yjb);jE(9,684,{3:1,9:1,38:1,80:1,179:1},Tjb,Ujb,Vjb);_.addAtIndex=function Wjb(a,b){Jjb(this,a,b)};_.add=function Xjb(a){return Kjb(this,a)};_.addAllAtIndex=function Yjb(a,b){var c,d;bsb(a,this.a.length);c=b.toArray();d=c.length;if(d==0){return false}Urb(this.a,a,c);return true};_.addAll=function Zjb(a){return Ljb(this,a)};_.clear=function $jb(){this.a=Xp(qB,tsb,1,0,5,1)};_.contains=function _jb(a){return Ojb(this,a,0)!=-1};_.getAtIndex=function akb(a){return Njb(this,a)};_.indexOf=function bkb(a){return Ojb(this,a,0)};_.isEmpty=function ckb(){return this.a.length==0};_.Ie=function dkb(){return new pkb(this)};_.lastIndexOf=function ekb(a){return Pjb(this,a,this.a.length-1)};_.removeAtIndex=function fkb(a){return Qjb(this,a)};_.remove=function gkb(a){return Rjb(this,a)};_.Xf=function hkb(a,b){var c;csb(a,b,this.a.length);c=b-a;Vrb(this.a,a,c)};_.setAtIndex=function ikb(a,b){var c;c=($rb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function jkb(){return this.a.length};_.toArray=function kkb(){return Rrb(this.a,this.a.length)};_.Tf=function lkb(a){return Sjb(this,a)};jE(7,1,{},pkb);_.Se=function qkb(){return mkb(this)};_.Te=function rkb(){return nkb(this)};_.Ue=function skb(){okb(this)};_.a=0;_.b=-1;var Kkb,Lkb,Mkb;jE(381,684,Rsb,Rkb);_.contains=function Skb(a){return false};_.getAtIndex=function Tkb(a){return $rb(a,0),null};_.Ie=function Ukb(){return Nkb(),Ykb(),Xkb};_.Vf=function Vkb(){return Nkb(),Ykb(),Xkb};_.size=function Wkb(){return 0};jE(382,1,{},$kb);_.Yf=function _kb(a){throw FD(new Teb)};_.Se=function alb(){return false};_.Zf=function blb(){return false};_.Te=function clb(){return Zkb()};_.$f=function dlb(){throw FD(new Gob)};_.Ue=function elb(){throw FD(new xdb)};_._f=function flb(a){throw FD(new xdb)};var Xkb;jE(384,685,Ssb,glb);_.containsKey=function hlb(a){return false};_.containsValue=function ilb(a){return false};_.Uf=function jlb(){return Nkb(),Mkb};_.get=function klb(a){return null};_.keySet=function llb(){return Nkb(),Mkb};_.size=function mlb(){return 0};_.values=function nlb(){return Nkb(),Kkb};jE(383,686,Tsb,olb);_.contains=function plb(a){return false};_.Ie=function qlb(){return Nkb(),Ykb(),Xkb};_.size=function rlb(){return 0};jE(66,24,{3:1,21:1,24:1,18:1,66:1},Gob);jE(152,1,{});_.fg=function Xob(a){Job(this,a)};_.dg=function Vob(){return this.c};_.eg=function Wob(){return this.d};_.c=0;_.d=0;jE(252,152,{});jE(255,1,{});_.fg=function hpb(a){Job(this,a)};_.dg=function fpb(){return this.b};_.eg=function gpb(){return this.d-this.c};_.b=0;_.c=0;_.d=0;jE(256,255,{},jpb);_.fg=function kpb(a){dpb(this,a)};_.gg=function lpb(a){return epb(this,a)};jE(251,1,{},vpb);_.Hf=function wpb(a){return a};jE(86,4,{3:1,6:1,4:1,86:1},Sqb);var Oqb,Pqb,Qqb;jE(652,1,{},Uqb);jE(249,1,{},Wqb);_.Kf=function Xqb(a,b){Vqb(a,b)};jE(248,1,{},Yqb);_.If=function Zqb(){return new Tjb};jE(250,1,{},$qb);jE(169,1,{});_.c=false;jE(95,169,{},rrb);jE(526,252,{},Frb);_.gg=function Grb(a){return this.b.gg(new Hrb(this,a))};jE(530,1,{},Hrb);_.Jf=function Irb(a){Erb(this.a,this.b,a)};jE(529,1,{},Krb);_.Jf=function Lrb(a){Jrb(this,a)};jE(533,1,{},Nrb);jE(534,1,{},Prb);_.Jf=function Qrb(a){Orb(this,a)};jE(813,1,{});jE(809,1,{});var gsb=0;var isb,jsb=0,ksb;var qB=Ucb($sb,'Object',1);var ys=Ucb(_sb,'JavaScriptObject$',0);var Is=Ucb(atb,'StackTraceCreator/Collector',681);var Fs=Ucb(atb,'StackTraceCreator/CollectorLegacy',305);var Hs=Ucb(atb,'StackTraceCreator/CollectorModern',682);var Gs=Ucb(atb,'StackTraceCreator/CollectorModernNoSourceMap',306);var yB=Ucb($sb,'Throwable',18);var fB=Ucb($sb,'Exception',21);var rB=Ucb($sb,'RuntimeException',24);var jB=Ucb($sb,'IndexOutOfBoundsException',33);var aB=Ucb($sb,'ArrayIndexOutOfBoundsException',184);var bB=Ucb($sb,'Boolean',303);var cB=Ucb($sb,'Class',182);var pB=Ucb($sb,'Number',82);var dB=Ucb($sb,'Double',304);var eB=Ucb($sb,'Enum',4);var hB=Ucb($sb,'IllegalArgumentException',68);var iB=Ucb($sb,'IllegalStateException',37);var kB=Ucb($sb,'Integer',90);var lB=Ucb($sb,'JsException',102);var nB=Ucb($sb,'NullPointerException',49);var wB=Ucb($sb,'String',2);var vB=Ucb($sb,'StringIndexOutOfBoundsException',213);var xB=Ucb($sb,'Throwable/lambda$0$Type',247);var zB=Ucb($sb,'UnsupportedOperationException',28);var CB=Ucb(btb,'AbstractCollection',683);var wC=Wcb(btb,'List');var JB=Ucb(btb,'AbstractList',684);var GB=Ucb(btb,'AbstractList/IteratorImpl',199);var HB=Ucb(btb,'AbstractList/ListIteratorImpl',307);var IB=Ucb(btb,'AbstractList/SubList',308);var AC=Wcb(btb,'Map');var RB=Ucb(btb,'AbstractMap',685);var CC=Wcb(btb,'Set');var TB=Ucb(btb,'AbstractSet',686);var LB=Ucb(btb,'AbstractMap/1',57);var KB=Ucb(btb,'AbstractMap/1/1',61);var NB=Ucb(btb,'AbstractMap/2',39);var MB=Ucb(btb,'AbstractMap/2/1',50);var OB=Ucb(btb,'AbstractMap/AbstractEntry',315);var PB=Ucb(btb,'AbstractMap/SimpleEntry',207);var VB=Ucb(btb,'ArrayList',9);var UB=Ucb(btb,'ArrayList/1',7);var YB=Ucb(btb,'Collections/EmptyList',381);var XB=Ucb(btb,'Collections/EmptyListIterator',382);var ZB=Ucb(btb,'Collections/EmptyMap',384);var $B=Ucb(btb,'Collections/EmptySet',383);var BC=Ucb(btb,'NoSuchElementException',66);var MC=Ucb(btb,'Spliterators/BaseSpliterator',152);var JC=Ucb(btb,'Spliterators/AbstractSpliterator',252);var LC=Ucb(btb,'Spliterators/BaseArraySpliterator',255);var KC=Ucb(btb,'Spliterators/ArraySpliterator',256);var PC=Ucb('java.util.function','Function/lambda$0$Type',251);var dD=Vcb(ctb,'Collector/Characteristics',86,Tqb);var eD=Ucb(ctb,'CollectorImpl',652);var fD=Ucb(ctb,'Collectors/20methodref$add$Type',249);var gD=Ucb(ctb,'Collectors/21methodref$ctor$Type',248);var hD=Ucb(ctb,'Collectors/lambda$42$Type',250);var wD=Ucb(ctb,'TerminatableStream',169);var vD=Ucb(ctb,'StreamImpl',95);var rD=Ucb(ctb,'StreamImpl/MapToObjSpliterator',526);var qD=Ucb(ctb,'StreamImpl/MapToObjSpliterator/lambda$0$Type',530);var sD=Ucb(ctb,'StreamImpl/ValueConsumer',529);var tD=Ucb(ctb,'StreamImpl/lambda$4$Type',533);var uD=Ucb(ctb,'StreamImpl/lambda$5$Type',534);jE(131,1,{});_._c=function X(a){return (1+$wnd.Math.cos(dtb+a*dtb))/2};_.ad=function Y(){this.u&&this.bd()};_.bd=function Z(){this.dd(this._c(1))};_.cd=function $(){this.dd(this._c(0))};_.k=-1;_.o=false;_.p=false;_.r=-1;_.t=-1;_.u=false;var gr=Ucb(etb,'Animation',131);jE(324,1,{},bb);_.ed=function cb(a){ab(this,a)};var $q=Ucb(etb,'Animation/1',324);jE(704,1,{});var db;var fr=Ucb(etb,'AnimationScheduler',704);jE(175,1,{175:1});var _q=Ucb(etb,'AnimationScheduler/AnimationHandle',175);jE(638,704,{},eb);_.fd=function gb(a,b){var c;c=hb(a,b);return new ib(c)};var br=Ucb(etb,'AnimationSchedulerImplStandard',638);jE(639,175,{175:1},ib);_.gd=function jb(){fb(this.a)};var ar=Ucb(etb,'AnimationSchedulerImplStandard/1',639);jE(640,704,{},mb);_.fd=function nb(a,b){var c;c=new Ab(this,a);Kjb(this.a,c);this.a.a.length==1&&pb(this.b,16);return c};var er=Ucb(etb,'AnimationSchedulerImplTimer',640);jE(44,1,{});_.hd=function vb(a){if(a!=this.b){return}this.c||(this.d=null);this.jd()};_.b=0;_.c=false;_.d=null;var Tu=Ucb(ftb,'Timer',44);jE(641,44,{},yb);_.jd=function zb(){lb(this.a)};var cr=Ucb(etb,'AnimationSchedulerImplTimer/1',641);jE(176,175,{175:1,176:1},Ab);_.gd=function Bb(){kb(this.b,this)};var dr=Ucb(etb,'AnimationSchedulerImplTimer/AnimationHandleImpl',176);jE(8,1,{});var _r=Ucb(gtb,'RoleImpl',8);jE(572,8,{},Fb);var hr=Ucb(gtb,'AlertRoleImpl',572);jE(571,8,{},Gb);var ir=Ucb(gtb,'AlertdialogRoleImpl',571);jE(573,8,{},Hb);var jr=Ucb(gtb,'ApplicationRoleImpl',573);jE(243,1,{});var mr=Ucb(gtb,'Attribute',243);jE(55,243,{},Lb);_.kd=function Mb(a){return a.a};var kr=Ucb(gtb,'AriaValueAttribute',55);jE(574,8,{},Nb);var lr=Ucb(gtb,'ArticleRoleImpl',574);jE(575,8,{},Ob);var nr=Ucb(gtb,'BannerRoleImpl',575);jE(576,8,{},Pb);var or=Ucb(gtb,'ButtonRoleImpl',576);jE(577,8,{},Qb);var pr=Ucb(gtb,'CheckboxRoleImpl',577);jE(578,8,{},Rb);var qr=Ucb(gtb,'ColumnheaderRoleImpl',578);jE(579,8,{},Sb);var rr=Ucb(gtb,'ComboboxRoleImpl',579);jE(580,8,{},Tb);var sr=Ucb(gtb,'ComplementaryRoleImpl',580);jE(581,8,{},Ub);var tr=Ucb(gtb,'ContentinfoRoleImpl',581);jE(582,8,{},Vb);var ur=Ucb(gtb,'DefinitionRoleImpl',582);jE(583,8,{},Wb);var vr=Ucb(gtb,'DialogRoleImpl',583);jE(584,8,{},Xb);var wr=Ucb(gtb,'DirectoryRoleImpl',584);jE(585,8,{},Yb);var xr=Ucb(gtb,'DocumentRoleImpl',585);jE(586,8,{},Zb);var yr=Ucb(gtb,'FormRoleImpl',586);jE(588,8,{},$b);var zr=Ucb(gtb,'GridRoleImpl',588);jE(587,8,{},_b);var Ar=Ucb(gtb,'GridcellRoleImpl',587);jE(589,8,{},ac);var Br=Ucb(gtb,'GroupRoleImpl',589);jE(590,8,{},bc);var Cr=Ucb(gtb,'HeadingRoleImpl',590);jE(174,1,{732:1,174:1},dc);var Dr=Ucb(gtb,'Id',174);jE(591,8,{},ec);var Er=Ucb(gtb,'ImgRoleImpl',591);jE(592,8,{},fc);var Fr=Ucb(gtb,'LinkRoleImpl',592);jE(595,8,{},gc);var Gr=Ucb(gtb,'ListRoleImpl',595);jE(593,8,{},hc);var Hr=Ucb(gtb,'ListboxRoleImpl',593);jE(594,8,{},ic);var Ir=Ucb(gtb,'ListitemRoleImpl',594);jE(596,8,{},jc);var Jr=Ucb(gtb,'LogRoleImpl',596);jE(597,8,{},kc);var Kr=Ucb(gtb,'MainRoleImpl',597);jE(598,8,{},lc);var Lr=Ucb(gtb,'MarqueeRoleImpl',598);jE(599,8,{},mc);var Mr=Ucb(gtb,'MathRoleImpl',599);jE(604,8,{},nc);var Nr=Ucb(gtb,'MenuRoleImpl',604);jE(600,8,{},pc);var Or=Ucb(gtb,'MenubarRoleImpl',600);jE(603,8,{},qc);var Pr=Ucb(gtb,'MenuitemRoleImpl',603);jE(601,8,{},rc);var Qr=Ucb(gtb,'MenuitemcheckboxRoleImpl',601);jE(602,8,{},sc);var Rr=Ucb(gtb,'MenuitemradioRoleImpl',602);jE(605,8,{},tc);var Sr=Ucb(gtb,'NavigationRoleImpl',605);jE(606,8,{},uc);var Tr=Ucb(gtb,'NoteRoleImpl',606);jE(607,8,{},vc);var Ur=Ucb(gtb,'OptionRoleImpl',607);jE(608,8,{},wc);var Vr=Ucb(gtb,'PresentationRoleImpl',608);jE(43,243,{},xc);_.kd=function yc(a){return a==null?Hsb:nE(a)};var Wr=Ucb(gtb,'PrimitiveValueAttribute',43);jE(609,8,{},zc);var Xr=Ucb(gtb,'ProgressbarRoleImpl',609);var Ac,Bc;jE(611,8,{},Dc);var Yr=Ucb(gtb,'RadioRoleImpl',611);jE(610,8,{},Ec);var Zr=Ucb(gtb,'RadiogroupRoleImpl',610);jE(612,8,{},Fc);var $r=Ucb(gtb,'RegionRoleImpl',612);var Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od;jE(615,8,{},Qd);var as=Ucb(gtb,'RowRoleImpl',615);jE(613,8,{},Rd);var bs=Ucb(gtb,'RowgroupRoleImpl',613);jE(614,8,{},Sd);var cs=Ucb(gtb,'RowheaderRoleImpl',614);jE(616,8,{},Td);var ds=Ucb(gtb,'ScrollbarRoleImpl',616);jE(617,8,{},Ud);var es=Ucb(gtb,'SearchRoleImpl',617);jE(618,8,{},Vd);var fs=Ucb(gtb,'SeparatorRoleImpl',618);jE(619,8,{},Wd);var gs=Ucb(gtb,'SliderRoleImpl',619);jE(620,8,{},Xd);var hs=Ucb(gtb,'SpinbuttonRoleImpl',620);jE(621,8,{},Yd);var is=Ucb(gtb,'StatusRoleImpl',621);jE(624,8,{},Zd);var js=Ucb(gtb,'TabRoleImpl',624);jE(622,8,{},$d);var ks=Ucb(gtb,'TablistRoleImpl',622);jE(623,8,{},_d);var ls=Ucb(gtb,'TabpanelRoleImpl',623);jE(625,8,{},ae);var ms=Ucb(gtb,'TextboxRoleImpl',625);jE(626,8,{},be);var ns=Ucb(gtb,'TimerRoleImpl',626);jE(627,8,{},ce);var os=Ucb(gtb,'ToolbarRoleImpl',627);jE(628,8,{},de);var ps=Ucb(gtb,'TooltipRoleImpl',628);jE(631,8,{},ee);var qs=Ucb(gtb,'TreeRoleImpl',631);jE(629,8,{},fe);var rs=Ucb(gtb,'TreegridRoleImpl',629);jE(630,8,{},ge);var ss=Ucb(gtb,'TreeitemRoleImpl',630);jE(12,1,{17:1,12:1});_.ld=function we(){return je(this)};_.md=function ye(){throw FD(new Teb)};_.nd=function ze(a){pe(this,a)};_.od=function Be(a,b){re(this,a,b)};_.pd=function Ee(a){ue(this,a)};_.$c=function Fe(){if(!this.Wc){return '(null handle)'}return qh((mF(),this.Wc))};var Rv=Ucb(Etb,'UIObject',12);jE(13,12,Ftb);_.qd=function Re(){};_.rd=function Se(){};_.sd=function Te(a){Je(this,a)};_.td=function Ue(){return this.Sc};_.ud=function Ve(){Ke(this)};_.vd=function We(a){Le(this,a)};_.wd=function Xe(){Me(this)};_.xd=function Ye(){};_.yd=function Ze(){};_.Sc=false;_.Tc=0;var _v=Ucb(Etb,'Widget',13);var lv=Wcb(Etb,'Focusable');jE(208,13,Htb);_.ud=function ef(){var a;Ke(this);a=zL((mF(),this.Wc));-1==a&&(this.Wc.tabIndex=0,undefined)};_.zd=function ff(a){af(this,a)};_.Ad=function gf(a){cf(this,a)};var $e;var kv=Ucb(Etb,'FocusWidget',208);jE(649,208,Htb,jf);var hf;var vs=Ucb(Itb,'Canvas',649);jE(708,1,{});var us=Ucb(Itb,'Canvas/CanvasElementSupportDetector',708);jE(650,708,{},lf);var ts=Ucb(Itb,'Canvas/CanvasElementSupportDetectedMaybe',650);jE(210,1,{},of);_.a=0;var ws=Ucb(_sb,'Duration',210);var pf=null;jE(347,102,Esb);var Bs=Ucb(atb,'JavaScriptExceptionBase',347);jE(81,347,{81:1,3:1,21:1,24:1,18:1},Qf);_.Fd=function Rf(){Pf(this);return this.c};_.Hd=function Sf(){return Uq(this.b)===Uq(Nf)?null:this.b};var Nf;var xs=Ucb(_sb,'JavaScriptException',81);var zs=Wcb(_sb,'RunAsyncCallback');jE(663,1,{});var As=Ucb(_sb,'Scheduler',663);var Xf=0,Yf=false,Zf,$f=0,_f=-1;jE(348,663,{});_.e=false;_.j=false;var mg;var Es=Ucb(atb,'SchedulerImpl',348);jE(349,1,{},Ag);_.Id=function Bg(){this.a.e=true;qg(this.a);this.a.e=false;return this.a.j=rg(this.a)};var Cs=Ucb(atb,'SchedulerImpl/Flusher',349);jE(350,1,{},Cg);_.Id=function Dg(){this.a.e&&zg(this.a.f,1);return this.a.j};var Ds=Ucb(atb,'SchedulerImpl/Rescuer',350);jE(115,1,Ktb);_.Pd=function Oh(a){return a.button|0};_.Rd=function Ph(a){return a.currentTarget};_.Vd=function Qh(a){return $h(Lh(a))};_.Wd=function Rh(a){return $h(Mh(a))};_.Xd=function Sh(a){return 0};_.Yd=function Th(a){return 0};_.Zd=function Uh(a){return geb(a.compatMode,Ltb)?a.documentElement:a.body};_.$d=function Vh(a){var b='',c=a.firstChild;while(c){c.nodeType==1?(b+=this.$d(c)):c.nodeValue&&(b+=c.nodeValue);c=c.nextSibling}return b};_._d=function Wh(a){return $h(a.scrollLeft||0)};_.ae=function Xh(a){return a.tabIndex};_.ce=function Yh(a,b){while(a.firstChild){a.removeChild(a.firstChild)}b!=null&&a.appendChild(a.ownerDocument.createTextNode(b))};_.de=function Zh(a,b){a.scrollLeft=b};_.ee=function _h(a){return a.outerHTML};var Eh;var Ns=Ucb(Mtb,'DOMImpl',115);jE(694,115,Ktb);_.Nd=function ai(a,b,c,d){var e=a.createEvent('HTMLEvents');e.initEvent(b,c,d);return e};_.Od=function bi(a,b){a.dispatchEvent(b)};_.Pd=function ci(a){var b=a.button;if(b==1){return 4}else if(b==2){return 2}return 1};_.Qd=function di(a){return a.charCode||0};_.Sd=function ei(a){return a.relatedTarget};_.Td=function fi(a){return a.target};_.Ud=function gi(a){a.preventDefault()};_.Zd=function hi(a){if(a.scrollingElement){return a.scrollingElement}return this.fe(a)};_.$d=function ii(a){return a.textContent};_.fe=function ji(a){return geb(a.compatMode,Ltb)?a.documentElement:a.body};_.be=function ki(a,b){return a.contains(b)};_.ce=function li(a,b){a.textContent=b||''};var Ls=Ucb(Mtb,Ntb,694);jE(472,694,Ktb,qi);_.Sd=function ri(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};_.Vd=function si(a){return ni(nj(a.ownerDocument),a)};_.Wd=function ti(a){return oi(nj(a.ownerDocument),a)};_.Xd=function ui(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginLeft,10)+parseInt(b.borderLeftWidth,10)};_.Yd=function vi(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginTop,10)+parseInt(b.borderTopWidth,10)};_._d=function xi(a){var b;b=(mi==-2&&(mi=wi()),mi);if(!(b!=-1&&b>=1009000)&&pi(a)){return $h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return $h(a.scrollLeft||0)};_.be=function yi(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)};_.de=function zi(a,b){var c;c=(mi==-2&&(mi=wi()),mi);!(c!=-1&&c>=1009000)&&pi(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};_.ee=function Ai(a){var b=a.ownerDocument;var c=a.cloneNode(true);var d=b.createElement('DIV');d.appendChild(c);outer=d.innerHTML;c.innerHTML='';return outer};var mi=-2;var Js=Ucb(Mtb,Ptb,472);jE(695,694,Ktb);_.Rd=function Ci(a){return a.currentTarget||$wnd};_.Vd=function Di(a){var b,c;c=a.getBoundingClientRect&&a.getBoundingClientRect();b=c?c.left+Jh(this,a.ownerDocument):Ei(a);return Fh(),b|0};_.Wd=function Fi(a){var b,c,d;b=a.getBoundingClientRect&&a.getBoundingClientRect();c=b?b.top+Kh(this,a.ownerDocument):Gi(a);return Fh(),c|0};_._d=function Hi(a){if(!heb('body',(Fh(),a).tagName)&&Bi(a)){return $h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return $h(a.scrollLeft||0)};_.ae=function Ii(a){return typeof a.tabIndex!='undefined'?a.tabIndex:-1};_.de=function Ji(a,b){!heb('body',(Fh(),a).tagName)&&Bi(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};var Ks=Ucb(Mtb,Ttb,695);jE(471,695,Ktb,Ki);_.Td=function Li(a){var b=a.target;b&&b.nodeType==3&&(b=b.parentNode);return b};_.fe=function Mi(a){return a.body};var Ms=Ucb(Mtb,Utb,471);jE(53,4,Ztb);var Sj,Tj,Uj,Vj,Wj;var Ts=Vcb(Mtb,'Style/BorderStyle',53,Zj);jE(424,53,Ztb,$j);var Os=Vcb(Mtb,'Style/BorderStyle/1',424,null);jE(425,53,Ztb,_j);var Ps=Vcb(Mtb,'Style/BorderStyle/2',425,null);jE(426,53,Ztb,ak);var Qs=Vcb(Mtb,'Style/BorderStyle/3',426,null);jE(427,53,Ztb,bk);var Rs=Vcb(Mtb,'Style/BorderStyle/4',427,null);jE(428,53,Ztb,ck);var Ss=Vcb(Mtb,'Style/BorderStyle/5',428,null);jE(23,4,_tb);var dk,ek,fk,gk,hk,ik,jk,kk,lk,mk,nk,ok,pk,qk,rk,sk,tk,uk,vk;var lt=Vcb(Mtb,'Style/Display',23,yk);jE(429,23,_tb,zk);_.he=function Ak(){return ytb};var ct=Vcb(Mtb,'Style/Display/1',429,null);jE(438,23,_tb,Bk);_.he=function Ck(){return 'table-column-group'};var Us=Vcb(Mtb,'Style/Display/10',438,null);jE(439,23,_tb,Dk);_.he=function Ek(){return 'table-header-group'};var Vs=Vcb(Mtb,'Style/Display/11',439,null);jE(440,23,_tb,Fk);_.he=function Gk(){return 'table-footer-group'};var Ws=Vcb(Mtb,'Style/Display/12',440,null);jE(441,23,_tb,Hk);_.he=function Ik(){return 'table-row-group'};var Xs=Vcb(Mtb,'Style/Display/13',441,null);jE(442,23,_tb,Jk);_.he=function Kk(){return 'table-cell'};var Ys=Vcb(Mtb,'Style/Display/14',442,null);jE(443,23,_tb,Lk);_.he=function Mk(){return 'table-column'};var Zs=Vcb(Mtb,'Style/Display/15',443,null);jE(444,23,_tb,Nk);_.he=function Ok(){return 'table-row'};var $s=Vcb(Mtb,'Style/Display/16',444,null);jE(445,23,_tb,Pk);_.he=function Qk(){return 'initial'};var _s=Vcb(Mtb,'Style/Display/17',445,null);jE(446,23,_tb,Rk);_.he=function Sk(){return 'flex'};var at=Vcb(Mtb,'Style/Display/18',446,null);jE(447,23,_tb,Tk);_.he=function Uk(){return 'inline-flex'};var bt=Vcb(Mtb,'Style/Display/19',447,null);jE(430,23,_tb,Vk);_.he=function Wk(){return aub};var dt=Vcb(Mtb,'Style/Display/2',430,null);jE(431,23,_tb,Xk);_.he=function Yk(){return 'inline'};var et=Vcb(Mtb,'Style/Display/3',431,null);jE(432,23,_tb,Zk);_.he=function $k(){return 'inline-block'};var ft=Vcb(Mtb,'Style/Display/4',432,null);jE(433,23,_tb,_k);_.he=function al(){return 'inline-table'};var gt=Vcb(Mtb,'Style/Display/5',433,null);jE(434,23,_tb,bl);_.he=function cl(){return 'list-item'};var ht=Vcb(Mtb,'Style/Display/6',434,null);jE(435,23,_tb,dl);_.he=function el(){return 'run-in'};var it=Vcb(Mtb,'Style/Display/7',435,null);jE(436,23,_tb,fl);_.he=function gl(){return 'table'};var jt=Vcb(Mtb,'Style/Display/8',436,null);jE(437,23,_tb,hl);_.he=function il(){return 'table-caption'};var kt=Vcb(Mtb,'Style/Display/9',437,null);jE(62,4,bub);var jl,kl,ll,ml;var qt=Vcb(Mtb,'Style/Overflow',62,pl);jE(448,62,bub,ql);var mt=Vcb(Mtb,'Style/Overflow/1',448,null);jE(449,62,bub,rl);var nt=Vcb(Mtb,'Style/Overflow/2',449,null);jE(450,62,bub,sl);var ot=Vcb(Mtb,'Style/Overflow/3',450,null);jE(451,62,bub,tl);var pt=Vcb(Mtb,'Style/Overflow/4',451,null);jE(63,4,cub);var ul,vl,wl,xl;var vt=Vcb(Mtb,'Style/Position',63,Al);jE(452,63,cub,Bl);var rt=Vcb(Mtb,'Style/Position/1',452,null);jE(453,63,cub,Cl);var st=Vcb(Mtb,'Style/Position/2',453,null);jE(454,63,cub,Dl);var tt=Vcb(Mtb,'Style/Position/3',454,null);jE(455,63,cub,El);var ut=Vcb(Mtb,'Style/Position/4',455,null);jE(64,4,dub);var Fl,Gl,Hl,Il;var At=Vcb(Mtb,'Style/TextAlign',64,Ll);jE(456,64,dub,Ml);var wt=Vcb(Mtb,'Style/TextAlign/1',456,null);jE(457,64,dub,Nl);var xt=Vcb(Mtb,'Style/TextAlign/2',457,null);jE(458,64,dub,Ol);var yt=Vcb(Mtb,'Style/TextAlign/3',458,null);jE(459,64,dub,Pl);var zt=Vcb(Mtb,'Style/TextAlign/4',459,null);jE(93,4,eub);var Ql,Rl;var Dt=Vcb(Mtb,'Style/TextOverflow',93,Ul);jE(460,93,eub,Vl);var Bt=Vcb(Mtb,'Style/TextOverflow/1',460,null);jE(461,93,eub,Wl);var Ct=Vcb(Mtb,'Style/TextOverflow/2',461,null);jE(34,4,fub);var Xl,Yl,Zl,$l,_l,am,bm,cm,dm;var Nt=Vcb(Mtb,'Style/Unit',34,gm);jE(415,34,fub,hm);var Et=Vcb(Mtb,'Style/Unit/1',415,null);jE(416,34,fub,im);var Ft=Vcb(Mtb,'Style/Unit/2',416,null);jE(417,34,fub,jm);var Gt=Vcb(Mtb,'Style/Unit/3',417,null);jE(418,34,fub,km);var Ht=Vcb(Mtb,'Style/Unit/4',418,null);jE(419,34,fub,lm);var It=Vcb(Mtb,'Style/Unit/5',419,null);jE(420,34,fub,mm);var Jt=Vcb(Mtb,'Style/Unit/6',420,null);jE(421,34,fub,nm);var Kt=Vcb(Mtb,'Style/Unit/7',421,null);jE(422,34,fub,om);var Lt=Vcb(Mtb,'Style/Unit/8',422,null);jE(423,34,fub,pm);var Mt=Vcb(Mtb,'Style/Unit/9',423,null);jE(94,4,gub);var qm,rm;var Qt=Vcb(Mtb,'Style/Visibility',94,um);jE(462,94,gub,vm);_.he=function wm(){return hub};var Ot=Vcb(Mtb,'Style/Visibility/1',462,null);jE(463,94,gub,xm);_.he=function ym(){return iub};var Pt=Vcb(Mtb,'Style/Visibility/2',463,null);jE(54,4,jub);var zm,Am,Bm,Cm,Dm;var Wt=Vcb(Mtb,'Style/WhiteSpace',54,Gm);jE(464,54,jub,Hm);var Rt=Vcb(Mtb,'Style/WhiteSpace/1',464,null);jE(465,54,jub,Im);var St=Vcb(Mtb,'Style/WhiteSpace/2',465,null);jE(466,54,jub,Jm);var Tt=Vcb(Mtb,'Style/WhiteSpace/3',466,null);jE(467,54,jub,Km);var Ut=Vcb(Mtb,'Style/WhiteSpace/4',467,null);jE(468,54,jub,Lm);var Vt=Vcb(Mtb,'Style/WhiteSpace/5',468,null);jE(677,1,{});_.$c=function Qm(){return 'An event type'};var iw=Ucb(kub,'Event',677);jE(678,677,{});_.ke=function Sm(){return this.je()};_.le=function Tm(){this.e=false;this.f=null};_.e=false;var wu=Ucb(lub,'GwtEvent',678);jE(689,678,{});_.je=function Ym(){return this.me()};_.ke=function Zm(){return this.me()};var Um;var _t=Ucb(mub,'DomEvent',689);jE(540,689,{},an);_.ie=function bn(a){a.ne(this)};_.je=function dn(){return $m};_.ke=function en(){return $m};_.me=function cn(){return $m};var $m;var Xt=Ucb(mub,'BlurEvent',540);jE(690,689,{});var bu=Ucb(mub,'HumanInputEvent',690);jE(691,690,{});var ju=Ucb(mub,'MouseEvent',691);jE(414,691,{},hn);_.ie=function jn(a){a.oe(this)};_.je=function ln(){return fn};_.ke=function mn(){return fn};_.me=function kn(){return fn};var fn;var Yt=Ucb(mub,'ClickEvent',414);jE(478,689,{},pn);_.ie=function qn(a){a.pe(this)};_.je=function sn(){return nn};_.ke=function tn(){return nn};_.me=function rn(){return nn};var nn;var Zt=Ucb(mub,'ContextMenuEvent',478);jE(291,1,{});_.Zc=function vn(){return this.c};_.$c=function wn(){return 'Event type'};_.c=0;var un=0;var gw=Ucb(kub,'Event/Type',291);jE(56,291,{},xn);var vu=Ucb(lub,'GwtEvent/Type',56);jE(42,56,{42:1},yn);var $t=Ucb(mub,'DomEvent/Type',42);jE(539,689,{},Bn);_.ie=function Cn(a){NS(a,this)};_.je=function En(){return zn};_.ke=function Fn(){return zn};_.me=function Dn(){return zn};var zn;var au=Ucb(mub,'FocusEvent',539);jE(700,689,{});var eu=Ucb(mub,'KeyEvent',700);jE(701,700,{});var cu=Ucb(mub,'KeyCodeEvent',701);jE(538,701,{},In);_.ie=function Jn(a){OS(a,this)};_.je=function Ln(){return Gn};_.ke=function Mn(){return Gn};_.me=function Kn(){return Gn};var Gn;var du=Ucb(mub,'KeyDownEvent',538);jE(642,700,{},Pn);_.ie=function Qn(a){PS(a,this)};_.je=function Sn(){return Nn};_.ke=function Tn(){return Nn};_.me=function Rn(){return Nn};var Nn;var fu=Ucb(mub,'KeyPressEvent',642);jE(646,701,{},Wn);_.ie=function Xn(a){a.qe(this)};_.je=function Zn(){return Un};_.ke=function $n(){return Un};_.me=function Yn(){return Un};var Un;var gu=Ucb(mub,'KeyUpEvent',646);jE(645,689,{},bo);_.ie=function co(a){e5(a.a.b)};_.je=function fo(){return _n};_.ke=function go(){return _n};_.me=function eo(){return _n};var _n;var hu=Ucb(mub,'LoadEvent',645);jE(537,691,{},jo);_.ie=function ko(a){a.re(this)};_.je=function mo(){return ho};_.ke=function no(){return ho};_.me=function lo(){return ho};var ho;var iu=Ucb(mub,'MouseDownEvent',537);jE(643,691,{},qo);_.ie=function ro(a){a.se(this)};_.je=function to(){return oo};_.ke=function uo(){return oo};_.me=function so(){return oo};var oo;var ku=Ucb(mub,'MouseUpEvent',643);jE(551,1,{},xo);var lu=Ucb(mub,'PrivateMap',551);jE(705,690,{});var yo;var ou=Ucb(mub,pub,705);jE(659,705,{},Bo);_.ie=function Co(a){WP(a.a,this)};_.je=function Eo(){return zo};_.ke=function Fo(){return zo};_.me=function Do(){return zo};var zo;var mu=Ucb(mub,'TouchEndEvent',659);jE(550,1,{},Go);_.a=false;var nu=Ucb(mub,'TouchEvent/TouchSupportDetector',550);jE(658,705,{},Jo);_.ie=function Ko(a){c4(a,this)&&RP(a.a)};_.je=function Mo(){return Ho};_.ke=function No(){return Ho};_.me=function Lo(){return Ho};var Ho;var pu=Ucb(mub,'TouchMoveEvent',658);jE(644,705,{},Qo);_.ie=function Ro(a){a.te(this)};_.je=function To(){return Oo};_.ke=function Uo(){return Oo};_.me=function So(){return Oo};var Oo;var qu=Ucb(mub,'TouchStartEvent',644);jE(302,678,{},Wo);_.ie=function Xo(a){b0(a,this)};_.ke=function $o(){return Vo};_.je=function Zo(){return Vo};_.a=false;var Vo;var ru=Ucb(tub,'AttachEvent',302);jE(541,678,{},ap);_.ie=function bp(a){a.ue(this)};_.ke=function ep(){return _o};_.je=function dp(){return _o};var _o;var su=Ucb(tub,'CloseEvent',541);jE(554,678,{},gp);_.ie=function hp(a){a.ve(this)};_.ke=function kp(){return fp};_.je=function jp(){return fp};var fp;var tu=Ucb(tub,'ResizeEvent',554);jE(570,678,{},mp);_.ie=function np(a){a.a.v&&a.a.Oe()};_.ke=function qp(){return lp};_.je=function pp(){return lp};var lp;var uu=Ucb(tub,'ValueChangeEvent',570);jE(76,1,{14:1},up,vp);_.sd=function wp(a){sp(this,a)};var yu=Ucb(lub,'HandlerManager',76);jE(687,1,{});var hw=Ucb(kub,'EventBus',687);jE(353,687,{});_.b=0;_.c=false;var mw=Ucb(kub,'SimpleEventBus',353);jE(354,353,{},Hp);var xu=Ucb(lub,'HandlerManager/Bus',354);jE(547,1,{},Ip);var zu=Ucb(lub,'LegacyHandlerWrapper',547);jE(89,24,uub,Jp);var nw=Ucb(kub,vub,89);jE(195,89,uub,Lp);var Au=Ucb(lub,vub,195);jE(109,4,{109:1,3:1,6:1,4:1},Tp);var Pp,Qp,Rp;var Bu=Vcb('com.google.gwt.i18n.client','HasDirection/Direction',109,Up);var aq;var Eq,Fq,Gq,Hq;jE(110,1,{110:1});var RC=Ucb(zub,'Handler',110);jE(263,110,{110:1},tE);_.we=function uE(a){var b,c;if(!window.console||(qE(this),Isb>a.a.Rf())){return}b=FE(this.a,a);c=a.a.Rf();c>=(Gpb(),Otb)?(window.console.error(b),undefined):c>=900?(window.console.warn(b),undefined):c>=800?(window.console.info(b),undefined):(window.console.log(b),undefined)};var Cu=Ucb(Aub,'ConsoleLogHandler',263);jE(264,110,{110:1},vE);_.we=function wE(a){return};var Du=Ucb(Aub,'DevelopmentModeLogHandler',264);var xE;var Gu=Ucb(Aub,'LogConfiguration',null);jE(262,1,{},AE);var Eu=Ucb(Aub,'LogConfiguration/1',262);jE(261,1,{},EE);var Fu=Ucb(Aub,'LogConfiguration/LogConfigurationImplRegular',261);jE(702,1,{});var QC=Ucb(zub,'Formatter',702);jE(703,702,{});var Iu=Ucb(Bub,'FormatterImpl',703);jE(241,703,{},GE);_.a=false;var Hu=Ucb(Aub,'TextLogFormatter',241);jE(665,1,{});var YA=Ucb(Cub,'OutputStream',665);jE(189,665,{},HE);var XA=Ucb(Cub,'FilterOutputStream',189);jE(153,189,{},IE);_.xe=function JE(a){};var ZA=Ucb(Cub,'PrintStream',153);jE(634,153,{},KE);_.xe=function LE(a){Heb(this.a,a);Heb(this.a,'\n')};var Ju=Ucb(Bub,'StackTracePrintStream',634);jE(560,1,{},PE);var Ku=Ucb(Dub,'SafeHtmlBuilder',560);jE(146,1,{728:1,146:1,3:1},QE);_.Xc=function RE(a){if(!Oq(a,146)){return false}return geb(this.a,a.a)};_.Zc=function SE(){return nsb(this.a)};_.$c=function TE(){return 'safe: "'+this.a+'"'};var Lu=Ucb(Dub,'SafeHtmlString',146);var UE,VE,WE,XE,YE,ZE;jE(119,1,{730:1,119:1},aF);_.Xc=function bF(a){if(!Oq(a,119)){return false}return geb(this.a,a.a)};_.Zc=function cF(){return nsb(this.a)};_.$c=function dF(){return 'safe: "'+this.a+'"'};var Mu=Ucb(Dub,'SafeUriString',119);jE(707,1,{});var Nu=Ucb('com.google.gwt.text.shared','AbstractRenderer',707);jE(648,1,{},gF);var fF;var Ou=Ucb(Eub,'PassthroughParser',648);jE(647,707,{},iF);var hF;var Pu=Ucb(Eub,'PassthroughRenderer',647);var jF=null,kF,lF;var BF;jE(325,678,{},NF);_.ie=function OF(a){a.ye(this);KF.c=false};_.ke=function RF(){return JF};_.je=function QF(){return JF};_.le=function SF(){LF(this)};_.a=false;_.b=false;_.c=false;var JF,KF;var Qu=Ucb(ftb,'Event/NativePreviewEvent',325);var TF,UF;jE(545,1,{14:1},$F);_.sd=function _F(a){sp(this.a,a)};var Ru=Ucb(ftb,'History/HistoryEventSource',545);jE(546,1,{},aG);var Su=Ucb(ftb,'History/HistoryImpl',546);var cG=false,dG,eG,fG=0,gG=0,hG=false;jE(352,678,{},sG);_.ie=function tG(a){null.ng()};_.ke=function vG(){return qG};_.je=function uG(){return qG};var qG;var Uu=Ucb(ftb,'Window/ClosingEvent',352);var wG='',xG;jE(159,76,{14:1},BG);var Vu=Ucb(ftb,'Window/WindowHandlers',159);jE(114,1,Oub);var CG=false;var $u=Ucb(Pub,'DOMImpl',114);jE(692,114,Oub);_.ze=function UG(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null};_.Ae=function VG(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b};_.Be=function XG(){NG()};_.Ce=function YG(a,b,c){var d=0,e=a.firstChild,f=null;while(e){if(e.nodeType==1){if(d==c){f=e;break}++d}e=e.nextSibling}a.insertBefore(b,f)};_.De=function ZG(a){EG(this);IG==a&&(IG=null)};_.Ee=function $G(a){EG(this);IG=a};_.Fe=function _G(a,b){var c,d;EG(this);c=HG;d=c[b]||c['_default_'];a.addEventListener(b,d,false)};_.Ge=function aH(a,b){EG(this);OG(a,b)};var HG,IG,JG,KG,LG;var Yu=Ucb(Pub,Ntb,692);jE(469,692,Oub,dH);_.Be=function eH(){NG();cH()};_.Ge=function fH(a,b){EG(this);OG(a,b);b&Hub&&a.addEventListener(Gub,(MG(),KG),false)};var Wu=Ucb(Pub,Ptb,469);jE(693,692,Oub);var Xu=Ucb(Pub,Ttb,693);jE(470,693,Oub,gH);var Zu=Ucb(Pub,Utb,470);jE(170,1,{170:1},kH);_.He=function lH(){return $wnd.location.hash};var av=Ucb(Pub,'WindowImpl',170);jE(548,170,{170:1},mH);_.He=function nH(){var a=$wnd.location.href;var b=a.indexOf('#');return b>0?a.substring(b):''};var _u=Ucb(Pub,'WindowImplMozilla',548);jE(676,13,Rub);_.qd=function pH(){EH(this,(CH(),AH))};_.rd=function qH(){EH(this,(CH(),BH))};var Bv=Ucb(Etb,'Panel',676);jE(154,676,Rub);_.Ie=function uH(){return new qL(this.o)};_.Je=function vH(a){return sH(this,a)};var gv=Ucb(Etb,'ComplexPanel',154);jE(345,154,Rub);_.Je=function zH(a){return xH(this,a)};var bv=Ucb(Etb,'AbsolutePanel',345);jE(275,195,uub,DH);var AH,BH;var ev=Ucb(Etb,'AttachDetachException',275);jE(276,1,{},FH);_.Ke=function GH(a){a.ud()};var cv=Ucb(Etb,'AttachDetachException/1',276);jE(277,1,{},HH);_.Ke=function IH(a){a.wd()};var dv=Ucb(Etb,'AttachDetachException/2',277);jE(473,154,Rub);var fv=Ucb(Etb,'CellPanel',473);jE(680,13,Uub);_.td=function PH(){return OH(this)};_.ud=function QH(){MH(this);if(this.Tc!=-1){Qe(this.bb,this.Tc);this.Tc=-1}this.bb.ud();mF();this.Wc.__listener=this;Yo(this,true)};_.vd=function RH(a){Le(this,a);this.bb.vd(a)};_.wd=function SH(){try{Yo(this,false)}finally{this.bb.wd()}};_.md=function TH(){ne(this,this.bb.md());return mF(),this.Wc};var hv=Ucb(Etb,'Composite',680);jE(633,1,{},WH);_.c=false;var iv=Ucb(Etb,'DirectionalTextHelper',633);jE(88,154,Rub,YH);var jv=Ucb(Etb,'FlowPanel',88);jE(130,676,Rub);_.Le=function dI(){return mF(),this.Wc};_.Ie=function eI(){return new FK(this)};_.Je=function fI(a){return _H(this,a)};_.Me=function gI(a){aI(this,a)};var Nv=Ucb(Etb,'SimplePanel',130);var hI;var oI,pI,qI;jE(236,13,Ftb);var uv=Ucb(Etb,'LabelBase',236);jE(549,236,Ftb);var vv=Ucb(Etb,'Label',549);jE(144,549,Ftb,mI,nI);var mv=Ucb(Etb,'HTML',144);var tI;jE(696,1,{});var nv=Ucb(Etb,'HasHorizontalAlignment/AutoHorizontalAlignmentConstant',696);jE(141,696,{},sI);var ov=Ucb(Etb,'HasHorizontalAlignment/HorizontalAlignmentConstant',141);jE(167,1,{},vI);var pv=Ucb(Etb,'HasVerticalAlignment/VerticalAlignmentConstant',167);jE(239,13,Ftb,zI);_.vd=function AI(a){mF();DG((Fh(),a).type)==Fub&&!!this.a&&(this.Wc[Qub]='',undefined);Le(this,a)};_.xd=function BI(){CI(this.a,this)};var tv=Ucb(Etb,'Image',239);jE(568,1,{});_.a=null;var rv=Ucb(Etb,'Image/State',568);jE(569,1,Vub,DI);_.Jd=function EI(){var a;if(this.b.a!=this.a||this!=this.a.a){return}this.a.a=null;if(!this.b.Sc){FI(this.b)[Qub]=Vtb;return}a=Ti($doc);eh(FI(this.b),a)};var qv=Ucb(Etb,'Image/State/1',569);jE(240,568,{},GI);var sv=Ucb(Etb,'Image/UnclippedState',240);jE(520,208,Htb,RI);var wv=Ucb(Etb,'ListBox',520);jE(138,13,Ftb,hJ);_.Ne=function jJ(){(iI(),hI).Xe((mF(),this.Wc))};_.vd=function kJ(a){var b,c;b=WI(this,(mF(),(Fh(),Eh).Td(a)));switch(DG(a.type)){case 1:{(iI(),hI).Xe(this.Wc);!!b&&VI(this,b,true);break}case 16:{!!b&&ZI(this,b,true);break}case 32:{!!b&&ZI(this,null,false);break}case 2048:{cJ(this);break}case 128:{c=a.keyCode|0;c=c;switch(c){case 37:bJ(this);a.stopPropagation();Eh.Ud(a);break;case 39:aJ(this);a.stopPropagation();Eh.Ud(a);break;case 38:_I(this);a.stopPropagation();Eh.Ud(a);break;case 40:$I(this);a.stopPropagation();Eh.Ud(a);break;case 27:dJ(this,null);a.stopPropagation();Eh.Ud(a);break;case 9:dJ(this,null);break;case 13:if(!cJ(this)){VI(this,this.g,true);a.stopPropagation();Eh.Ud(a)}}break}}Le(this,a)};_.wd=function lJ(){Me(this)};_.c=false;_.e=true;_.i=false;var zv=Ucb(Etb,'MenuBar',138);jE(399,1,Vub,mJ);_.Jd=function nJ(){this.a.Jd()};var xv=Ucb(Etb,'MenuBar/1',399);jE(400,1,{713:1,27:1},oJ);_.ne=function pJ(a){dJ(this.a,null)};var yv=Ucb(Etb,'MenuBar/2',400);jE(97,12,{17:1,97:1,12:1},sJ,tJ);_.zd=function uJ(a){a?re(this,xe((mF(),this.Wc))+'-'+Gtb,false):re(this,xe((mF(),this.Wc))+'-'+Gtb,true);this.b=a};_.b=true;var Av=Ucb(Etb,'MenuItem',97);jE(108,130,Rub);_.Le=function NJ(){return vJ.Ze(qF((mF(),this.Wc)))};_.ld=function OJ(){return vJ.$e((mF(),mF(),lh(this.Wc)))};_.Oe=function PJ(){this.Pe(false)};_.Pe=function QJ(a){AJ(this)};_.yd=function RJ(){this.M&&eK(this.L,false,true)};_.nd=function SJ(a){EJ(this,a)};_.Qe=function TJ(a,b){FJ(this,a,b)};_.Me=function UJ(a){HJ(this,a)};_.pd=function VJ(a){IJ(this,a)};_.u=false;_.v=false;_.F=false;_.G=false;_.H=0;_.I=false;_.K=false;_.M=false;_.N=0;var vJ;var Hv=Ucb(Etb,'PopupPanel',108);jE(320,1,{709:1,27:1},XJ);_.ve=function YJ(a){WJ()};var Cv=Ucb(Etb,'PopupPanel/1',320);jE(321,1,avb,ZJ);_.ye=function $J(a){DJ(this.a,a)};var Dv=Ucb(Etb,'PopupPanel/3',321);jE(322,1,{722:1,27:1},_J);var Ev=Ucb(Etb,'PopupPanel/4',322);jE(318,131,{},fK);_.bd=function gK(){bK(this)};_.cd=function hK(){this.d=yJ(this.a);this.e=zJ(this.a);he(this.a).style[bvb]=iub;dK(this,(1+$wnd.Math.cos(dtb))/2)};_.dd=function iK(a){dK(this,a)};_.a=null;_.b=false;_.c=false;_.d=0;_.e=-1;_.i=false;var Gv=Ucb(Etb,'PopupPanel/ResizeAnimation',318);jE(319,44,{},jK);_.jd=function kK(){this.a.g=null;T(this.a,200,Wf())};var Fv=Ucb(Etb,'PopupPanel/ResizeAnimation/1',319);jE(134,345,cvb,uK);var qK,rK,sK;var Lv=Ucb(Etb,'RootPanel',134);jE(346,1,{},zK);_.Ke=function AK(a){a.td()&&a.wd()};var Iv=Ucb(Etb,'RootPanel/1',346);jE(212,1,dvb,BK);_.ue=function CK(a){wK()};var Jv=Ucb(Etb,'RootPanel/2',212);jE(211,134,cvb,DK);var Kv=Ucb(Etb,'RootPanel/DefaultRootPanel',211);jE(323,1,{},FK);_.Te=function HK(){return EK(this)};_.Se=function GK(){return this.a};_.Ue=function IK(){!!this.b&&_H(this.c,this.b)};_.a=false;_.b=null;var Mv=Ucb(Etb,'SimplePanel/1',323);jE(521,208,Htb);_.vd=function PK(a){var b;b=(mF(),DG((Fh(),a).type));(b&896)!=0?Le(this,a):Le(this,a)};_.xd=function QK(){};var Xv=Ucb(Etb,'ValueBoxBase',521);jE(233,521,Htb);var Pv=Ucb(Etb,'TextBoxBase',233);jE(563,233,Htb);var Ov=Ucb(Etb,'TextArea',563);jE(143,233,Htb,TK);var Qv=Ucb(Etb,'TextBox',143);jE(65,4,fvb);var VK,WK,XK,YK;var Wv=Vcb(Etb,'ValueBoxBase/TextAlignment',65,_K);jE(522,65,fvb,aL);var Sv=Vcb(Etb,'ValueBoxBase/TextAlignment/1',522,null);jE(523,65,fvb,bL);var Tv=Vcb(Etb,'ValueBoxBase/TextAlignment/2',523,null);jE(524,65,fvb,cL);var Uv=Vcb(Etb,'ValueBoxBase/TextAlignment/3',524,null);jE(525,65,fvb,dL);var Vv=Vcb(Etb,'ValueBoxBase/TextAlignment/4',525,null);jE(474,473,Rub,gL);_.Je=function hL(a){return fL(this,a)};var Yv=Ucb(Etb,'VerticalPanel',474);jE(509,1,{},nL);_.Ie=function oL(){return new qL(this)};_.c=0;var $v=Ucb(Etb,'WidgetCollection',509);jE(232,1,{},qL);_.Te=function sL(){return pL(this)};_.Se=function rL(){return this.b<this.c.c};_.Ue=function tL(){if(!this.a){throw FD(new xdb)}this.c.b.Je(this.a);--this.b;this.a=null};_.b=0;var Zv=Ucb(Etb,'WidgetCollection/WidgetIterator',232);jE(145,1,{145:1},AL);_.Ve=function BL(a){a.blur()};_.We=function CL(){var a;a=Oi($doc);a.tabIndex=0;return a};_.Xe=function DL(a){a.focus()};var wL,xL;var cw=Ucb(gvb,'FocusImpl',145);jE(147,145,hvb,GL);_.We=function HL(){return IL(EL?EL:(EL=FL()))};var EL;var bw=Ucb(gvb,'FocusImplStandard',147);jE(635,147,hvb,JL);_.Ve=function KL(a){$wnd.setTimeout(function(){a.blur()},0)};_.Xe=function LL(a){$wnd.setTimeout(function(){a.focus()},0)};var aw=Ucb(gvb,'FocusImplSafari',635);jE(172,1,{172:1},ML);_.Ye=function NL(){return Oi($doc)};_.Ze=function OL(a){return a};_.$e=function PL(a){return Ih((Fh(),a))};_._e=function QL(a,b){a.style['clip']=b};var fw=Ucb(gvb,'PopupImpl',172);jE(552,172,{172:1},TL);_.Ye=function UL(){var a;a=(mF(),Oi($doc));if(RL){a.innerHTML='<div><\/div>';s1((ng(),mg),new ZL(a))}return a};_.Ze=function VL(a){return RL?Hh((Fh(),a)):a};_.$e=function WL(a){return RL?a:Ih((Fh(),a))};_._e=function YL(a,b){a.style['clip']=b;a.style[Wtb]=(wk(),ytb);a.style[Wtb]=''};var RL=false;var ew=Ucb(gvb,'PopupImplMozilla',552);jE(553,1,Vub,ZL);_.Jd=function $L(){this.a.style[bvb]=(nl(),ivb)};var dw=Ucb(gvb,'PopupImplMozilla/1',553);jE(355,1,{},dM);var jw=Ucb(kub,'SimpleEventBus/1',355);jE(356,1,{710:1},eM);_.Jd=function fM(){zp(this.a,this.d,this.c,this.b)};var kw=Ucb(kub,'SimpleEventBus/2',356);jE(357,1,{710:1},gM);_.Jd=function hM(){Bp(this.a,this.d,this.c,this.b)};var lw=Ucb(kub,'SimpleEventBus/3',357);jE(52,1,{52:1},xM,yM);_.af=function zM(){return MZ(this.n.a,this.c)};_.bf=function AM(){uh(this.d,mvb+this.c+nvb+this.k+' cell '+this.b)};_.b='cs0';_.c=0;_.f=false;_.g=true;_.i=false;_.k=0;var sw=Ucb(ovb,'Cell',52);jE(112,1,{112:1},BM);_.Xc=function CM(a){var b;if(this===a){return true}if(a==null){return false}if(!Oq(a,112)){return false}b=a;return this.d==b.d&&this.a==b.a&&Hob(Kdb(this.c),Kdb(b.c))&&Hob(Kdb(this.b),Kdb(b.b))};_.Zc=function DM(){return ukb($p(Vp(qB,1),tsb,1,5,[this.d,this.a,Kdb(this.c),Kdb(this.b)]))};_.b=0;_.c=0;var ow=Ucb(ovb,'Cell/CellValueStyleKey',112);jE(160,108,Rub);_.Oe=function WM(){KM(this,false)};_.Pe=function XM(a){KM(this,a)};_.ud=function YM(){var a,b;b=FM;if(b){a=b.df();Vg(a,(mF(),this.Wc))}Ke(this)};_.wd=function ZM(){Me(this);!!this.t&&ah(this.t)};_.nd=function $M(a){OM(this,a)};_.Qe=function _M(a,b){QM(this,a,b)};_.cf=function aN(a){(mF(),this.Wc).style[Xtb]=a?hub:iub;!!this.t&&(this.t.style[Xtb]=a?hub:iub,undefined)};_.pd=function bN(a){RM(this,a)};var EM=20000,FM,GM=-1,HM=-1;var Tz=Ucb(tvb,'Overlay',160);jE(135,160,Rub);_.df=function eN(){cN(this);Kqb(Mqb(Qcb(this.kg)),'Could not determine ApplicationConnection for Overlay. Overlay will be attached directly to the root panel');return he((tK(),xK()))};var Gz=Ucb(uvb,'VOverlay',135);jE(113,135,Rub,hN,iN,jN);_.df=function kN(){var a;return a=(mF(),$doc.getElementById(vvb)),!a?(tK(),$doc.body):a};var Wx=Ucb(ovb,'SpreadsheetOverlay',113);jE(165,113,{19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,165:1},yN);_.Oe=function zN(){nN(this)};_.cf=function AN(a){(mF(),this.Wc).style[Xtb]=a?hub:iub;!!this.t&&(this.t.style[Xtb]=a?hub:iub,undefined);this.i.style[Xtb]=(a?(sm(),rm):(sm(),qm)).he()};_.b=0;_.d=0;_.k=0;_.n=0;var qw=Ucb(ovb,'CellComment',165);jE(391,1,Bvb,BN);_.oe=function CN(a){sV(this.b,this.a)};var pw=Ucb(ovb,'CellComment/1',391);jE(190,1,{190:1,3:1},DN);_.equals=function EN(a){var b;if(this===a){return true}if(a==null){return false}if(rw!=O(a)){return false}b=a;if(this.col!=b.col){return false}if(this.row!=b.row){return false}return true};_.Xc=function(a){return this.equals(a)};_.hashCode=function FN(){var a;a=this.row+((this.col+1)/2|0);return 31*(this.col+a*a)};_.Zc=function(){return this.hashCode()};_.toString=function GN(){return Heb(Heb(Heb(Eeb(Heb(Eeb(Heb(new Jeb,'r'),this.row),'c'),this.col),this.cellStyle),'|'),this.value).a};_.$c=function(){return this.toString()};_.cellStyle='cs0';_.col=0;_.isPercentage=false;_.locked=false;_.needsMeasure=false;_.row=0;var rw=Ucb(ovb,'CellData',190);jE(96,88,Cvb);_.vd=function MN(a){(Fh(),Eh).Ud(a);a.stopPropagation();if(Eh.Pd(a)==1){this.c.kf(this.ff(),this.e,!this.b);IN(this,!this.b)}};_.b=false;_.d=0;_.e=0;_.f=false;_.g=0;_.i=0;_.j=0;_.k=0;_.n=0;var Lw=Ucb(ovb,'GroupingWidget',96);jE(237,96,Cvb,NN);_.ef=function ON(){var a;a=new NN(this.e,this.c);HN(this,a);return a};_.ff=function PN(){return true};_.gf=function QN(a){(mF(),this.Wc).style[rvb]=a+(em(),$ub);this.i=a};_.hf=function RN(a,b){this.k=9+b*18;this.g=a;(mF(),this.Wc).style[Tub]=this.k+(em(),$ub);this.Wc.style[Sub]=a+$ub};_.jf=function SN(a){(mF(),this.Wc).style[Atb]=a+(em(),$ub);this.n=a};var tw=Ucb(ovb,'ColumnGrouping',237);jE(636,1,{},WN);var uw=Ucb(ovb,'CopyPasteHandlerImpl',636);jE(564,563,{19:1,27:1,14:1,181:1,10:1,60:1,73:1,17:1,20:1,12:1,13:1},$N);_.ye=function _N(a){var b;b=a.d;EF((Fh(),b).type)==128&&YN(this,b)};var xw=Ucb(ovb,'CopyPasteTextBox',564);jE(565,1,{},aO);_.Id=function bO(){oU(this.a.c);he(this.a).style[Sub]=(em(),'-1000.0px');vj(this.b)==67?this.a.a:vj(this.b)==88&&UN(this.a.a);return false};var vw=Ucb(ovb,'CopyPasteTextBox/1',565);jE(566,1,{},cO);_.Id=function dO(){var a,b;a=(b=LK(this.a),b==null?'':b);VN(this.a.a,a);oU(this.a.c);return false};var ww=Ucb(ovb,'CopyPasteTextBox/2',566);jE(373,680,Uub,RO);_.f=false;_.g=false;_.k=-1;_.n=-1;_.o=-1;_.p=-1;_.q=-1;_.s=-1;_.u=false;_.v=false;_.A=null;var eO;var Kw=Ucb(ovb,'FormulaBarWidget',373);jE(374,1,Ivb,TO);_.vd=function UO(a){NK(this.a.a,MI(this.a.B));MO(this.a)};var Bw=Ucb(ovb,'FormulaBarWidget/1',374);jE(379,1,Vub,VO);_.Jd=function WO(){if(this.a.f){this.a.s=-1;this.a.q=JK(this.a.e);iO(this.a)}};var yw=Ucb(ovb,'FormulaBarWidget/10',379);jE(380,44,{},XO);_.jd=function YO(){this.a.d=null};var zw=Ucb(ovb,'FormulaBarWidget/11',380);jE(219,1,Vub,ZO);_.Jd=function $O(){var a;if(!this.a.f){return}wO(this.a,(a=LK(this.a.e),a==null?'':a));iO(this.a)};var Aw=Ucb(ovb,'FormulaBarWidget/12',219);jE(375,1,Ivb,_O);_.vd=function aP(a){var b,c,d;d=(mF(),DG((Fh(),a).type));if(d==512){b=a.keyCode|0;if(b==13){MO(this.a);NO(this.a,(c=LK(this.a.a),c==null?'':c));bf(this.a.a,false)}else if(b==27){zO(this.a);oU(this.a.t.W)}}else if(d==2048){y_(this.a.t,true);he(this.a.a).style[Jvb]=(Jl(),Sub)}else{y_(this.a.t,false);he(this.a.a).style[Jvb]=''}};var Cw=Ucb(ovb,'FormulaBarWidget/2',375);jE(376,1,Ivb,bP);_.vd=function cP(a){var b;switch(mF(),DG((Fh(),a).type)){case 2048:if(this.a.f&&this.a.e==this.a.w){this.a.f=false;jO(this.a,this.a.j)}else{y_(this.a.t,true);this.a.c=(b=LK(this.a.j),b==null?'':b);o$(this.a.t);jO(this.a,this.a.j)}break;case 4096:if(!this.a.f){y_(this.a.t,false);n$(this.a.t,(b=LK(this.a.j),b==null?'':b))}break;case 128:qO(this.a,a);break;case xub:case 256:kO(this.a);PO(this.a,true);BO(this.a);break;case 8:this.a.f&&PO(this.a,true);}};var Dw=Ucb(ovb,'FormulaBarWidget/3',376);jE(215,1,Vub,dP);_.Jd=function eP(){var a,b,c,d;if(!this.a.f){return}d=(c=LK(this.a.e),c==null?'':c);b=JK(this.a.e);a=b>0?(fsb(b-1,d.length),d.charCodeAt(b-1)):0;this.a.g=false;a==40||a==43||a==45||a==47||a==42?(this.a.g=true):a==61&&d.length==1&&(this.a.g=true)};var Ew=Ucb(ovb,'FormulaBarWidget/4',215);jE(377,1,Vub,fP);_.Jd=function gP(){var a;bf(this.a.e,true);IO(he(this.a.e),this.a.q,0);wO(this.a,(a=LK(this.a.e),a==null?'':a));iO(this.a)};var Fw=Ucb(ovb,'FormulaBarWidget/5',377);jE(216,44,{},hP);_.jd=function iP(){var a;q$(this.a.t,(a=LK(this.a.j),a==null?'':a))};var Gw=Ucb(ovb,'FormulaBarWidget/6',216);jE(217,1,Vub,jP);_.Jd=function kP(){var a;q$(this.a.t,(a=LK(this.a.j),a==null?'':a))};var Hw=Ucb(ovb,'FormulaBarWidget/7',217);jE(218,1,Vub,lP);_.Jd=function mP(){var a;!!this.a.e&&(a=LK(this.a.e),a==null?'':a).length==0&&(this.a.e==this.a.w?LO(this.a):KO(this.a))};var Iw=Ucb(ovb,'FormulaBarWidget/8',218);jE(378,1,Vub,nP);_.Jd=function oP(){var a,b;if(!this.a.f){b=(a=LK(this.b),a==null?'':a);if(geb(b.substr(0,1),'=')||geb(b.substr(0,1),'+')){this.a.f=true;this.a.e=this.b;wO(this.a,b);iO(this.a)}}};var Jw=Ucb(ovb,'FormulaBarWidget/9',378);jE(171,52,{52:1,171:1},pP);_.af=function qP(){return this.d.clientWidth|0};_.bf=function rP(){uh(this.d,mvb+this.c+nvb+this.k+' cell '+this.b+' '+Kvb)};var Mw=Ucb(ovb,'MergedCell',171);jE(71,1,{71:1,3:1},sP);_.col1=0;_.col2=0;_.id=0;_.row1=0;_.row2=0;var Nw=Ucb(ovb,'MergedRegion',71);jE(191,1,{191:1,3:1},wP);_.col=0;_.dx=0;_.dy=0;_.height=0;_.row=0;_.type='IMAGE';_.width=0;var uP='COMPONENT',vP='IMAGE';var Ow=Ucb(ovb,'OverlayInfo',191);jE(561,143,Htb,xP);_.vd=function yP(a){var b;mF();DG((Fh(),a).type)==xub&&s1((ng(),mg),new zP(this));b=DG(a.type);(b&896)!=0?Le(this,a):Le(this,a)};var Qw=Ucb(ovb,'PasteAwareTextBox',561);jE(562,1,Vub,zP);_.Jd=function AP(){UU(this.a.a)};var Pw=Ucb(ovb,'PasteAwareTextBox/1',562);var Rw=Wcb(ovb,'PopupButtonClientRpc');var wA=Wcb(Lvb,'Connector');jE(266,1,Ovb);_.lf=function LP(){return BP(this)};_.mf=function MP(a){return EP(this,a)};_.nf=function NP(){return FP(this)};_.pf=function PP(a){IP(this,a)};_.qf=function QP(a){KP(this,a)};_.G=true;var pz=Ucb(uvb,'AbstractConnector',266);jE(267,266,Ovb);_.nf=function eQ(){return this.sf()};_.rf=function cQ(){return SP(this)};_.sf=function dQ(){return !this.J&&(this.J=this.lf()),this.J};_.tf=function fQ(){return TP(this)};_.uf=function gQ(){var a,b,c;if(!this.k&&(b=this.nf().pb,!!b&&b.contains('cClick'))){this.k=He(this.tf(),new e4(this),(on(),on(),nn));(F0(),!E0&&(E0=new O0),F0(),E0).b&&(c=this.tf(),this.v=He(c,new g4(this,c),(Po(),Po(),Oo)),this.u=He(c,new d4(this),(Io(),Io(),Ho)),this.t=He(c,new i4(this),(Ao(),Ao(),zo)),undefined)}else if(!!this.k&&(a=this.nf().pb,!(!!a&&a.contains('cClick')))){cM(this.k.a);this.k=null;_P(this)}};_.vf=function hQ(){var a;a=this.sf();if(a.fb!=null&&a.fb.length!=0){return true}return a.ib!=null&&a.ib.length!=0};_.pf=function iQ(a){XP(this,a)};_.wf=function jQ(){var a;a=this.tf();L1((mF(),a.Wc),xe(a.ld())+'-error',this.sf().hb)};_.qf=function kQ(a){KP(this,a);ZP(this,HP(this))};_.j=20;_.k=null;_.n='';_.o='';_.q=false;_.s=false;_.w=0;_.A=0;var nz=Ucb(uvb,'AbstractComponentConnector',267);jE(155,267,Ovb);var qz=Ucb(uvb,'AbstractHasComponentsConnector',155);jE(326,155,{180:1,662:1,27:1,99:1,121:1,3:1},nQ);_.sf=function qQ(){return !this.J&&(this.J=BP(this)),this.J};_.nf=function rQ(){return !this.J&&(this.J=BP(this)),this.J};_.tf=function sQ(){return !this.B&&(this.B=new TQ),this.B};_.rf=function oQ(){return new TQ};_.mf=function pQ(a){return this.b};_.oe=function tQ(a){var b;b=(!this.B&&(this.B=new TQ),this.B);E9(this.b,b.k,b.b)};_.ue=function uQ(a){var b;b=(!this.B&&(this.B=new TQ),this.B);b.Sc&&F9(this.b,b.k,b.b)};_.pf=function vQ(a){var b,c;c=(!this.B&&(this.B=new TQ),this.B);b=(!this.J&&(this.J=BP(this)),this.J);(a.Af(mvb)||a.Af('row'))&&s1((ng(),mg),new xQ(c,b));a.Af(Pvb)&&JQ(c,b.active);a.Af('popupHeight')&&OQ(c,b.popupHeight);a.Af('popupWidth')&&PQ(c,b.popupWidth);a.Af('headerHidden')&&NQ(c,b.headerHidden)};var Uw=Ucb(ovb,'PopupButtonConnector',326);jE(327,1,tsb,wQ);var Sw=Ucb(ovb,'PopupButtonConnector/1',327);jE(328,1,Vub,xQ);_.Jd=function yQ(){RQ(this.b,this.a.row,this.a.col)};var Tw=Ucb(ovb,'PopupButtonConnector/2',328);jE(351,13,Ftb,DQ);_.vd=function EQ(a){if(mf(CX(a),this.b)){KM(this.c,false);oU(this.e)}else{Le(this,a)}};var Vw=Ucb(ovb,'PopupButtonHeader',351);var Ww=Wcb(ovb,'PopupButtonServerRpc');jE(75,1,{75:1,3:1});_.ob=true;var DA=Ucb(Qvb,'SharedState',75);jE(67,75,Rvb);_.db=null;_.eb=false;_.fb='';_.hb=null;_.ib=null;_.jb='';_.kb=null;_.lb=null;_.mb=null;_.nb='';var vA=Ucb(Lvb,'AbstractComponentState',67);jE(192,67,{192:1,67:1,75:1,3:1},GQ);_.active=false;_.col=0;_.headerHidden=false;_.popupHeight=null;_.popupWidth=null;_.row=0;var Xw=Ucb(ovb,'PopupButtonState',192);jE(70,208,{180:1,19:1,27:1,14:1,10:1,60:1,73:1,17:1,20:1,12:1,13:1,70:1},TQ);_.oe=function UQ(a){KQ(this);Aj(a.a)};_.wd=function VQ(){KM(this.e,false);IQ(this);Me(this)};_.od=function WQ(a,b){Ae((mF(),this.Wc),a,b);re(this.e,a,b)};_.b=0;_.k=0;var $w=Ucb(ovb,'PopupButtonWidget',70);jE(316,1,{},XQ);_.Re=function YQ(a,b){var c,d,e,f,g;f=Wg(this.a.j);c=(Fh(),Eh).Wd(f)+((f.offsetHeight||0)|0);d=Eh.Vd(f)+((f.offsetWidth||0)|0);e=d-a;e<gh(this.a.n)&&(e=d);g=c;g+b>fh(this.a.n)&&(g=Eh.Wd(f)-b);g<ih(this.a.n)&&(g=ih(this.a.n));QM(this.a.e,e,g)};var Yw=Ucb(ovb,'PopupButtonWidget/1',316);jE(317,1,Vub,ZQ);_.Jd=function $Q(){GJ(this.a.e,this.a.a)};var Zw=Ucb(ovb,'PopupButtonWidget/2',317);jE(238,96,Cvb,_Q);_.ef=function aR(){var a;a=new _Q(this.e,this.c);HN(this,a);return a};_.ff=function bR(){return false};_.gf=function cR(a){(mF(),this.Wc).style[svb]=a+(em(),$ub);this.j=a};_.hf=function dR(a,b){this.g=6+b*15;this.k=a;(mF(),this.Wc).style[Sub]=this.g+(em(),$ub);this.Wc.style[Tub]=a+$ub};_.jf=function eR(a){(mF(),this.Wc).style[ztb]=a+(em(),$ub);this.d=a};var _w=Ucb(ovb,'RowGrouping',238);jE(390,1,{},vR);_.a=0;_.b=0;var ax=Ucb(ovb,'SelectionHandler',390);jE(402,680,Uub,XR);_.nd=function YR(a){};_.pd=function ZR(a){};_.c=0;_.d=0;_.e=0;_.f=0;_.g=false;_.i=false;_.j=false;_.k=0;_.n=0;_.o=false;_.p=false;_.r=0;_.s=false;_.t=0;_.u=0;_.v=0;_.w=0;_.C=false;_.G=0;_.H=0;_.I=0;_.J=0;_.K=0;_.L=0;_.N=false;_.O=0;_.P=0;_.R=false;_.S=false;_.T=false;_.U=0;_.V=0;_.Y=0;_.Z=0;_._=false;_.ab=0;var ix=Ucb(ovb,'SelectionWidget',402);jE(404,44,{},$R);_.jd=function _R(){var a,b,c,d,e,f,g,h,i;zh(this.a.Q.yc,((this.a.Q.yc.scrollTop||0)|0)+(this.a.n/2|0));yh(this.a.Q.yc,ph(this.a.Q.yc)+(this.a.k/2|0));yV(this.a.Q);g=this.a.c;h=this.a.d;this.a.k<0?(g=gh(this.a.Q.yc)+5):this.a.k>0&&(g=hh(this.a.Q.yc)-25);this.a.n<0?(h=ih(this.a.Q.yc)+5):this.a.n>0&&(h=fh(this.a.Q.yc)-25);if(this.a.n!=0&&((this.a.Q.yc.scrollTop||0)|0)==0){e=new f1;c1(e,this.a.Q.Ec);d=ih(this.a.Q.Ec)+e.d[0]+5;this.a.d>d?(h=this.a.d):(h=d)}if(this.a.k!=0&&ph(this.a.Q.yc)==0){e=new f1;c1(e,this.a.Q.Ec);c=gh(this.a.Q.Ec)+e.d[3]+5;this.a.c>c?(g=this.a.c):(g=c)}if(this.a.C){CR(this.a,g,h)}else{i=y1(g,h);if(i){a=(Fh(),i).getAttribute(Jtb)||'';_S(this.a.Q.wb,a);b=this.a.Q.wb.a;f=this.a.Q.wb.b;b!=0&&f!=0&&y$(this.a.Q.a,b,f)}}};var bx=Ucb(ovb,'SelectionWidget/1',404);jE(405,1,Vub,aS);_.Jd=function bS(){GR(this.a,true);KM(this.a.$,false)};var cx=Ucb(ovb,'SelectionWidget/2',405);jE(406,1,Vub,cS);_.Jd=function dS(){GJ(this.a.$,new eS(this));TM(this.a.$)};var ex=Ucb(ovb,'SelectionWidget/3',406);jE(407,1,{},eS);_.Re=function fS(a,b){var c,d,e,f,g;f=0;d=0;c=0;g=0;e=0;if(!!this.a.a.X&&ke(this.a.a.X)){f=ih(this.a.a.X.G);d=gh(this.a.a.X.G);g=this.a.a.X.G.clientWidth|0;c=fh(this.a.a.X.a)+5;ke(this.a.a.W)&&(g+=this.a.a.W.G.clientWidth|0);ke(this.a.a.b)&&(c=fh(this.a.a.b.a)+5)}else if(!!this.a.a.W&&ke(this.a.a.W)){f=ih(this.a.a.W.G);d=gh(this.a.a.W.G);g=this.a.a.W.G.clientWidth|0;c=fh(this.a.a.W.a)+5;ke(this.a.a.a)&&(c=fh(this.a.a.a.a)+5)}else if(!!this.a.a.a&&ke(this.a.a.a)){f=ih(this.a.a.a.G);d=gh(this.a.a.a.G);g=this.a.a.a.G.clientWidth|0;c=fh(this.a.a.a.a)+5;ke(this.a.a.b)&&(g+=this.a.a.b.G.clientWidth|0)}else{f=ih(this.a.a.b.G);d=gh(this.a.a.b.G);g=this.a.a.b.G.clientWidth|0;c=fh(this.a.a.b.a)+5}g>(he(this.a.a.Q).clientWidth|0)&&(g=he(this.a.a.Q).clientWidth|0);this.a.a.Q.Rc>0?(e=ih(this.a.a.Q.Oc)):(e=ih(this.a.a.Q.yc));f-=b+5;d+=(g/2|0)-(a/2|0);e>f&&(f=c+5);QM(this.a.a.$,d,f)};var dx=Ucb(ovb,'SelectionWidget/3/1',407);jE(140,13,Ftb,nS);_.b=0;_.c=0;_.e=0;_.f=0;_.g=0;_.i=0;_.n=0;_.o=0;var fx=Ucb(ovb,'SelectionWidget/PaintOutlineWidget',140);jE(139,13,Ftb,DS);_.b=false;_.e=0;_.f=0;_.j=0;_.n=false;_.q=0;_.r=0;_.s=0;_.t=0;_.v=false;_.C=0;_.D=0;_.H=false;_.K=0;var hx=Ucb(ovb,'SelectionWidget/SelectionOutlineWidget',139);jE(403,1,Ivb,ES);_.vd=function FS(a){var b,c,d;b=(mF(),(Fh(),Eh).Td(a));d=DG(a.type);c=d==Iub||d==Bsb||d==Jub||d==Kub;if(this.a.F.C){pS(this.a,a);a.stopPropagation()}else if(d==4){if(mf(b,this.a.g)){pS(this.a,a);a.stopPropagation()}else if(mf(b,this.a.G));else if(mf(b,this.a.k));else if(mf(b,this.a.u));else mf(b,this.a.a)}else if(c){if(d==Bsb||d==Kub){FF(this.a.B);SR(this.a.F)}else if(mf(b,this.a.g)||mf(b,this.a.i)){if(d==Iub){GF(this.a.B);xR(this.a.F,a)}else{FR(this.a.F,a)}}else{this.a.F.p&&pS(this.a,a)}Eh.Ud(a);a.stopPropagation()}};var gx=Ucb(ovb,'SelectionWidget/SelectionOutlineWidget/1',403);jE(637,1,Ivb,LS);_.vd=function MS(a){var b;if(jh(CX(a)).indexOf(Svb)!=-1){uW(this.c,true);return}b=(mF(),DG((Fh(),a).type));if(b==2048){uW(this.c,true);this.b=true}else if(b==4096){uW(this.c,false);this.b=false}else if(b==Jub){a.stopPropagation()}else if(this.c.wc){Jsb==b&&yV(this.c);IS(this,a)}else{switch(b){case Jsb:yV(this.c);break;case 256:HS(this,a);break;case 128:GS(this,a);break;case 4:Eh.Pd(a)!=2&&uV(this.c,a);break;case 8:Eh.Pd(a)==2&&uV(this.c,a);break;case 2:JS(this,a);break;case 32:case 16:wV(this.c,a);break;case 64:vV(this.c);}}};_.a=false;_.b=false;var jx=Ucb(ovb,'SheetEventListener',637);jE(567,1,{713:1,180:1,727:1,724:1,729:1,244:1,245:1,27:1},RS);_.ne=function SS(a){var b;uW(this.b,false);if(this.a.f){PO(this.a,false)}else if(this.b._){a$(this.b.a,(b=LK(this.b.sb),b==null?'':b));nO(this.a)}Aj(a.a)};_.oe=function TS(a){this.b._&&(this.a.v=true);Aj(a.a)};_.re=function US(a){var b;if(qj(a.a)==2){b=this.b.wb;_S(b,MU(this.b));f$(this.b.a,a.a,b.a,b.b)}Aj(a.a)};_.se=function VS(a){PO(this.a,false)};var kx=Ucb(ovb,'SheetInputEventListener',567);jE(510,1,{},cT);_.a=0;_.b=0;var lx=Ucb(ovb,'SheetJsniUtil',510);jE(234,130,{19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,234:1},iT);_.a=0;_.b=0;var mx=Ucb(ovb,'SheetOverlay',234);jE(298,13,Ftb,zT);_.b='';_.d=false;_.j=false;_.r=-1;_.s=0;_.t=0;var qx=Ucb(ovb,'SheetTabSheet',298);jE(299,1,Ivb,AT);_.vd=function BT(a){var b,c,d,e,f;d=CX(a);f=(mF(),DG((Fh(),a).type));if(mf(d,this.a.g)){return}a.stopPropagation();if(f==1){this.a.d&&!this.a.j&&kT(this.a);pU(this.a.e.W,false);if(Zg(this.a.i,d)&&!rh(d,iub)){if(mf(d,this.a.n)){this.a.t=0;this.a.s=0;this.a.c.style[rvb]=this.a.t+(em(),$ub);wT(this.a)}else if(mf(d,this.a.p)){if(this.a.s>0){--this.a.s;this.a.s==0?(this.a.t=0):(this.a.t+=pT(this.a,this.a.s));this.a.c.style[rvb]=this.a.t+(em(),$ub)}wT(this.a)}else if(mf(d,this.a.q)){if(this.a.s<this.a.u.length-1){this.a.t-=pT(this.a,this.a.s);this.a.c.style[rvb]=this.a.t+(em(),$ub);++this.a.s;wT(this.a)}}else if(mf(d,this.a.o)){e=nT(this.a);qT(this.a,e)}else mf(d,this.a.a)&&(this.a.j||s$(this.a.e))}else if(Zg(this.a.c,d)){for(c=0;c<this.a.u.length;c++){mf(this.a.u[c],d)&&c!=this.a.r&&E$(this.a.e,c)}}}else if(f==2){if(!this.a.j){for(c=0;c<this.a.u.length;c++){if(mf(this.a.u[c],d)){if(c!=this.a.r){E$(this.a.e,c)}else{this.a.d=true;b=this.a.u[c];this.a.b=Eh.$d(b);pj(this.a.g,this.a.b);Eh.ce(b,'');Vg(b,this.a.g);this.a.g.focus();xT(this.a)}}}}}};var nx=Ucb(ovb,'SheetTabSheet/1',299);jE(300,1,Ivb,CT);_.vd=function DT(a){var b,c;c=(mF(),DG((Fh(),a).type));if(this.a.d){if(c==4096){kT(this.a)}else{switch(a.keyCode|0){case 13:case 9:kT(this.a);break;case 27:this.a.d=false;ah(this.a.g);b=this.a.u[this.a.r];b.style[Atb]='';uT(b,this.a.b);oU(this.a.e.W);break;default:mT(this.a);}}}a.stopPropagation()};var ox=Ucb(ovb,'SheetTabSheet/2',300);jE(301,1,Vub,ET);_.Jd=function FT(){xT(this.a)};var px=Ucb(ovb,'SheetTabSheet/3',301);jE(158,676,{19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,158:1},BX);_.Ie=function DX(){return oV(this)};_.ud=function EX(){Ke(this);ZN(this.M);!this.M.Vc&&oH(this,this.M)};_.yd=function FX(){KM(this.qb,false);KM(this.Wb,false);XN(this.M)};_.Je=function GX(a){return NV(this,a)};_.f=0;_.g=0;_.k=-1;_.n=-1;_.o=false;_.v=true;_.A=0;_.B=0;_.C=true;_.G=false;_.H=0;_.L=false;_.O=false;_.P=false;_.R=false;_.V=-1;_.X=0;_.Y=0;_.Z=false;_._=false;_.ab=false;_.bb=0;_.cb=0;_.db=0;_.eb=0;_.nb=null;_.ob=0;_.ub=null;_.vb=false;_.xb=0;_.yb=0;_.zb=0;_.Ab=0;_.Bb=0;_.Cb=0;_.Db=false;_.Lb=0;_.Ob=0;_.Pb=0;_.Rb=0;_.Sb=0;_.Yb=false;_.Zb=-1;_.$b=-1;_._b=false;_.ac=false;_.dc=false;_.ec=0;_.ic=false;_.mc=false;_.nc=0;_.oc=0;_.qc=0;_.rc=0;_.wc=false;_.Fc=false;_.Gc=false;_.Hc=false;_.Ic=0;_.Jc=0;_.Kc=0;_.Nc=0;_.Qc=false;_.Rc=0;var Kx=Ucb(ovb,'SheetWidget',158);jE(329,1,Vub,HX);_.Jd=function IX(){this.a.k!=-1&&this.a.n!=-1&&HW(this.a,this.a.k,this.a.n)};var Ax=Ucb(ovb,'SheetWidget/1',329);jE(338,1,Vub,JX);_.Jd=function KX(){var a,b;if(this.a.ic){return}b=this.d;while(TZ(this.a.a,b)){--b}if(b==0){return}GF(he(this.a));this.a.ac=true;this.a.$b=b;this.a.Zb=-1;this.a.$b<=this.a.Rc?(a=Njb(this.a.jb,this.a.$b-1)):(a=Njb(this.a.hc,b-this.a.db));this.a.Rb=(Fh(),Eh).Wd(a);this.a.Sb=Eh.Wd(a)+((a.offsetHeight||0)|0);QZ(this.a.a,b)>0?kI(this.a.Xb,'Height: '+QZ(this.a.a,b)+'pt'):kI(this.a.Xb,'Hide row');KW(this.a,this.b,this.c);TM(this.a.Wb);dh(this.a.Ec,Lwb);dh(this.a.Ub,'row'+b);++b;while(this.d<this.a.a.P&&TZ(this.a.a,b)){++b}dh(this.a.Tb,Ewb+b);VU(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var rx=Ucb(ovb,'SheetWidget/10',338);jE(339,1,Vub,LX);_.Jd=function MX(){var a,b;if(this.a.L){return}b=this.d;while(SZ(this.a.a,b)){--b}if(b<1){return}GF(he(this.a));this.a._b=true;this.a.Zb=b;this.a.$b=-1;this.a.Zb<=this.a.ob?(a=Njb(this.a.ib,this.a.Zb-1)):(a=Njb(this.a.K,b-this.a.bb));this.a.Rb=(Fh(),Eh).Vd(a);this.a.Sb=Eh.Vd(a)+((a.offsetWidth||0)|0);MZ(this.a.a,b)>0?kI(this.a.Xb,'Width: '+MZ(this.a.a,b)+$ub):kI(this.a.Xb,vwb);KW(this.a,this.b,this.c);TM(this.a.Wb);dh(this.a.Ec,Mwb);dh(this.a.Ub,mvb+b);++b;while(this.d<=this.a.a.i&&SZ(this.a.a,b)){++b}dh(this.a.Tb,Cwb+b);RU(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var sx=Ucb(ovb,'SheetWidget/11',339);jE(340,1,{},NX);_.Re=function OX(a,b){wW(this.a,a,b,this.b)};var tx=Ucb(ovb,'SheetWidget/12',340);jE(132,1,Vub,PX);_.Jd=function QX(){var a,b;b=(a=LK(this.a.sb),a==null?'':a);FV(this.a,b);this.b&&e$(this.a.a,b)};_.b=false;var ux=Ucb(ovb,'SheetWidget/13',132);jE(341,1,Vub,RX);_.Jd=function SX(){bf(this.a.sb,true);feb(this.b,'%')?MK(this.a.sb,this.b.length-1,0):MK(this.a.sb,this.b.length,0)};var vx=Ucb(ovb,'SheetWidget/14',341);jE(133,1,Vub,TX);_.Jd=function UX(){this.a.yc.focus()};var wx=Ucb(ovb,'SheetWidget/15',133);jE(342,1,Ivb,VX);_.vd=function WX(a){VZ(this.a.a,true,this.b)};_.b=0;var xx=Ucb(ovb,'SheetWidget/16',342);jE(343,1,Ivb,XX);_.vd=function YX(a){VZ(this.a.a,false,this.b)};_.b=0;var yx=Ucb(ovb,'SheetWidget/17',343);jE(344,1,Vub,ZX);_.Jd=function $X(){var a,b,c,d,e,f,g,h,i,j;g=this.a.Mc.clientWidth|0;e=this.a.fc.clientWidth|0;j=g+e;if(e==0&&!iV(this.a.F)){j-=1}else if(e!=0&&!iV(this.a.F));else e!=0&&iV(this.a.F)&&(j+=2);this.a.F.style[Atb]=j+(em(),$ub);f=this.a.Mc.clientHeight|0;b=this.a.I.clientHeight|0;c=f+b;if(b==0&&!iV(this.a.cc));else b!=0&&!iV(this.a.cc)?(c+=1):b!=0&&iV(this.a.cc)&&(c+=2);this.a.cc.style[ztb]=c+$ub;a=this.a.c.clientHeight|0;i=this.a.Oc.clientWidth|0;h=i+j;d=a+c;iV(this.a.F)&&(h+=1);iV(this.a.cc)&&(d+=1);this.a.I.style[Atb]=h+$ub;this.a.D.style[Atb]=h+$ub;this.a.fc.style[ztb]=d+$ub;this.a.bc.style[ztb]=d+$ub};var zx=Ucb(ovb,'SheetWidget/18',344);jE(330,1,Vub,_X);_.Jd=function aY(){var b,c,d,e,f;if(this.a._){return}e=this.a.Hb;f=jh(Ih((Fh(),e))).indexOf(awb)!=-1;b=e.getAttribute(Jtb)||'';if(geb(b.substr(0,20),Avb)){return}b.indexOf(bwb)!=-1&&(b=teb(b,0,b.indexOf(' cell')));if(geb(b,dwb)){e=tj(this.a.Gb);b=e.getAttribute(Jtb)||''}else if(CF(this.a.Gb)==16&&f){_S(this.a.wb,b);try{c=this.a.wb.a;d=this.a.wb.b;if(c==0||d==0){return}e=GU(this.a,T_(this.a.Gb),U_(this.a.Gb),sU(this.a,c,d)).d;b=e.getAttribute(Jtb)||'';b.indexOf(bwb)!=-1&&(b=teb(b,0,b.indexOf(' cell')))}catch(a){a=ED(a);if(Oq(a,81)){Jqb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: JSE while trying to find real event target, className:'+b)}else if(Oq(a,33)){Kqb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: IOOBE while trying to find correct event target, className:'+b)}else throw FD(a)}}_S(this.a.wb,b);if(geb(b,jvb)||geb(b,kvb)||geb(b,this.a.j)||QT(this.a,b)||RT(this.a,b)){$W(this.a,this.a.Gb,e)}else{if(!this.a.o&&this.a.q.M&&b.indexOf('comment')==-1){FF(this.a.yc);nN(this.a.q);this.a.j=null;this.a.k=-1;this.a.n=-1}}if(f&&!!this.a.s&&Qhb(this.a.s,b)){aX(this.a,CF(this.a.Gb),this.a.wb.a,this.a.wb.b,Phb(this.a.s,b));return}else BJ(this.a.qb)&&KM(this.a.qb,false)};var Bx=Ucb(ovb,'SheetWidget/2',330);jE(331,44,{},bY);_.jd=function cY(){var a,b,c,d,e;zh(this.a.yc,((this.a.yc.scrollTop||0)|0)+(this.a.Y/2|0));yh(this.a.yc,ph(this.a.yc)+(this.a.X/2|0));yV(this.a);d=this.a.A;e=this.a.B;this.a.X<0?(d=gh(this.a.yc)+5):this.a.X>0&&(d=hh(this.a.yc)-25);this.a.Y<0?(e=ih(this.a.yc)+5):this.a.Y>0&&(e=fh(this.a.yc)-25);if(this.a.Y!=0&&((this.a.yc.scrollTop||0)|0)==0){c=new f1;c1(c,this.a.Ec);b=ih(this.a.Ec)+c.d[0]+5;this.a.B>b?(e=this.a.B):(e=b)}if(this.a.X!=0&&ph(this.a.yc)==0){c=new f1;c1(c,this.a.Ec);a=gh(this.a.Ec)+c.d[3]+5;this.a.A>a?(d=this.a.A):(d=a)}WU(this.a,d,e)};var Cx=Ucb(ovb,'SheetWidget/3',331);jE(332,44,{},fY);_.jd=function gY(){dY(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);dY(this,0,this.a.Rc,0,this.a.ob);dY(this,0,this.a.Rc,this.a.bb,this.a.xb);dY(this,this.a.db,this.a.zb,0,this.a.ob);eY(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);eY(this,0,this.a.Rc,0,this.a.ob);eY(this,0,this.a.Rc,this.a.bb,this.a.xb);eY(this,this.a.db,this.a.zb,0,this.a.ob)};var Dx=Ucb(ovb,'SheetWidget/4',332);jE(333,1,Vub,hY);_.Jd=function iY(){this.a.Db&&xV(this.a)};var Ex=Ucb(ovb,'SheetWidget/5',333);jE(334,1,Vub,jY);_.Jd=function kY(){VV(this.a)};var Fx=Ucb(ovb,'SheetWidget/6',334);jE(335,1,Vub,lY);_.Jd=function mY(){this.a.Lb==0&&Xg(this.a.Mb)&&(this.a.Lb=(this.a.Mb.offsetWidth||0)|0);yX(this.a);bX(this.a);eX(this.a);bW(this.a,this.b,this.c);_V(this.a);x$(this.a.a,this.a.db,this.a.zb,this.a.bb,this.a.xb);XV(this.a);aW(this.a);dX(this.a);tX(this.a);WV(this.a);this.a.Db=true};_.b=0;_.c=0;var Gx=Ucb(ovb,'SheetWidget/7',335);jE(336,1,avb,oY);_.ye=function pY(a){var b,c,d,e,f,g;c=CF(a.d);f=a.d;g=CX(f);b='';!!g&&g.nodeType==1&&(b=(Fh(),g).getAttribute(Jtb)||'');Zg(he(this.a),CX(f))&&(Iub==c||4==c||8==c||2==c||1==c)&&uW(this.a,true);if((this.a._b||this.a.ac)&&c==64){if(this.a.Zb!=-1){RU(this.a,T_(f),U_(f))}else if(this.a.$b!=-1){VU(this.a,T_(f),U_(f))}else{this.a._b=false;this.a.ac=false}a.a=true}else if(c==8&&nY(this,g)){if(this.a._b||this.a.ac||geb(b,Nwb)||geb(b,Owb)){this.a.L=true;this.a.ic=true;this.a._b=false;this.a.ac=false;WS(this.a.Vb);KM(this.a.Wb,false);a.a=true;if(this.a.Zb!=-1){sh(this.a.Ec,Mwb);PW(this.a,T_(a.d))}else if(this.a.$b!=-1){sh(this.a.Ec,Lwb);RW(this.a,U_(a.d))}}}else{if(Zg(he(this.a),g)){if(c==1){d=$S(b);if(d==1||d==2){e=aT(b);d==1?t$(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey):g$(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey);a.a=true;this.a.yc.focus()}}else if(c==4&&nY(this,g)){if(geb(b,Nwb)){b=jh(Ih((Fh(),g)));d=$S(b);if(d==1){d=aT(b);this.a.ic=false;NW(this.a,d-1,T_(f),U_(f))}else if(d==2){d=aT(b);this.a.L=false;LW(this.a,d-1,T_(f),U_(f))}a.a=true}else if(geb(b,Owb)){b=jh(Ih((Fh(),g)));d=$S(b);if(d==1){d=aT(b);this.a.ic=false;NW(this.a,d,T_(f),U_(f))}else if(d==2){d=aT(b);this.a.L=false;LW(this.a,d,T_(f),U_(f))}a.a=true}}else if(c==2&&nY(this,g)){if(geb(b,Nwb)){b=jh(Ih((Fh(),g)));d=$S(b);if(d==1){d=aT(b)-1;while(TZ(this.a.a,d)&&d>0){--d}d>0&&u$(this.a.a,d)}else if(d==2){d=aT(b)-1;while(SZ(this.a.a,d)&&d>0){--d}d>0&&h$(this.a.a,d)}a.a=true}else if(geb(b,Owb)){b=jh(Ih((Fh(),g)));d=$S(b);if(d==1){d=aT(b);while(TZ(this.a.a,d)&&d>0){--d}d>0&&u$(this.a.a,d)}else if(d==2){d=aT(b);while(SZ(this.a.a,d)&&d>0){--d}d>0&&h$(this.a.a,d)}a.a=true}}}}};var Hx=Ucb(ovb,'SheetWidget/8',336);jE(337,1,Pwb,qY);_.pe=function rY(a){var b,c,d,e;if(this.a.a.S){e=CX(a.a);b=(Fh(),e).getAttribute(Jtb)||'';c=$S(b);if(c==1||c==2){d=aT(b);c==1?v$(this.a.a,a.a,d):i$(this.a.a,a.a,d)}!!a.a&&zj(a.a);Aj(a.a)}};var Ix=Ucb(ovb,'SheetWidget/9',337);jE(51,1,{51:1},sY);_.Xc=function tY(a){if(a==null||!Oq(a,51)){return false}return this.b==a.b&&this.a==a.a};_.Zc=function uY(){var a;a=this.b+((this.a+1)/2|0);return 31*(this.a+a*a)};_.a=0;_.b=0;var Jx=Ucb(ovb,'SheetWidget/CellCoord',51);jE(125,1,Qwb);_.$c=function xY(){return 'Action [owner='+this.g+', iconUrl='+this.f+', caption='+this.e+']'};_.e='';_.f=null;var sz=Ucb(uvb,'Action',125);jE(242,125,Qwb,zY);_.Jd=function AY(){yY(this)};_.a='';_.c=0;var Mx=Ucb(ovb,'SpreadsheetAction',242);jE(193,1,{193:1,3:1},BY);_.type=0;var Lx=Ucb(ovb,'SpreadsheetActionDetails',193);var Nx=Wcb(ovb,'SpreadsheetClientRpc');jE(278,155,Ovb,MY);_.sf=function QY(){return !this.J&&(this.J=new m0),this.J};_.nf=function RY(){return !this.J&&(this.J=new m0),this.J};_.tf=function SY(){return !this.B&&(this.B=new S_),this.B};_.lf=function NY(){return new m0};_.rf=function OY(){return new S_};_.mf=function PY(a){return this.g};_.pf=function TY(a){GY(this,a)};var Ux=Ucb(ovb,'SpreadsheetConnector',278);jE(279,1,{719:1,3:1},cZ);var Px=Ucb(ovb,'SpreadsheetConnector/1',279);jE(280,1,{},eZ);var Ox=Ucb(ovb,'SpreadsheetConnector/1/1',280);jE(281,1,{},iZ);var Qx=Ucb(ovb,'SpreadsheetConnector/4',281);jE(282,1,Pwb,jZ);_.pe=function kZ(a){!!a.a&&zj(a.a);Aj(a.a)};var Rx=Ucb(ovb,'SpreadsheetConnector/5',282);jE(283,1,Vub,lZ);_.Jd=function mZ(){FY(this.a,this.b)};var Sx=Ucb(ovb,'SpreadsheetConnector/6',283);jE(284,1,{},pZ);var Tx=Ucb(ovb,'SpreadsheetConnector/7',284);jE(392,135,Rub);_.d=0;_.f=0;var Cz=Ucb(uvb,'VContextMenu',392);jE(393,392,Rub,vZ);_.df=function wZ(){var a;return a=(mF(),mF(),$doc.getElementById(vvb)),!a?(tK(),$doc.body):a};var Vx=Ucb(ovb,'SpreadsheetOverlay/SpreadsheetContextMenu',393);var Xx=Wcb(ovb,'SpreadsheetServerRpc');var ly=Wcb(Wwb,'Focusable');jE(29,680,{19:1,14:1,10:1,17:1,178:1,20:1,12:1,13:1,29:1},S_);_.kf=function V_(a,b,c){dab(this.X,a,b,c)};_.nd=function W_(a){a_(this,a)};_.pd=function X_(a){F_(this,a)};_.a=0;_.c=false;_.d=false;_.e=false;_.i=0;_.j=0;_.o=false;_.q=0;_.r=0;_.t=false;_.C=false;_.D=false;_.F=true;_.G=true;_.L=true;_.M=0;_.P=0;_.Q=false;_.U=false;_.Y=0;_.Z=0;_.$=false;var dy=Ucb(ovb,'SpreadsheetWidget',29);jE(292,1,tsb,$_);var Yx=Ucb(ovb,'SpreadsheetWidget/1',292);jE(293,44,{},__);_.jd=function a0(){};var Zx=Ucb(ovb,'SpreadsheetWidget/2',293);jE(294,1,{720:1,27:1},c0);_.a=0;_.c=0;var $x=Ucb(ovb,'SpreadsheetWidget/3',294);jE(295,1,Vub,d0);_.Jd=function e0(){DW(this.a.W,this.b,this.c)};_.b=0;_.c=0;var _x=Ucb(ovb,'SpreadsheetWidget/4',295);jE(296,1,Vub,f0);_.Jd=function g0(){var a,b,c;EZ(this.a);if(this.b){b=0;while(b<this.b.a.length){c=Njb(this.b,b);IT(this.a.W,c);a=sU(this.a.W,c.col1,c.row1);!!a&&oM(a,a.o,a.b,false);++b}TT(this.a.W)}!this.b?(this.a.K=null):(this.a.K=new Vjb(this.b))};var ay=Ucb(ovb,'SpreadsheetWidget/5',296);jE(297,44,{},h0);_.jd=function i0(){this.a.L=true};var by=Ucb(ovb,'SpreadsheetWidget/6',297);jE(197,1,Vub,j0);_.Jd=function k0(){if(!this.a.c){t9(this.a.X,this.a.W.rc,this.a.W.qc,this.c);BZ(this.a,this.c,this.b)}};_.b=false;var cy=Ucb(ovb,'SpreadsheetWidget/7',197);jE(235,1,{235:1,3:1},l0);_.collapsed=false;_.endIndex=0;_.level=0;_.startIndex=0;_.uniqueIndex=0;var ey=Ucb(Zwb,'GroupingData',235);jE(126,67,{67:1,75:1,126:1,3:1});var JA=Ucb($wb,'TabIndexState',126);jE(45,126,{45:1,67:1,75:1,126:1,3:1},m0);_.d=null;_.f=false;_.g=0;_.j=0;_.k=200;_.n=null;_.p=null;_.q=0;_.r=0;_.s=true;_.t=true;_.u=false;_.v=null;_.w=null;_.B=0;_.G='Invalid formula';_.H=true;_.I=true;_.J=null;_.K=null;_.O=false;_.P=200;_.R=false;_.S=0;_.U=null;_.V=0;_.W=1;_.X=null;_.Y=false;_.Z=null;_._=0;_.bb=false;_.cb=false;var fy=Ucb(Zwb,'SpreadsheetState',45);var n0;jE(246,1,{},x0);var v0;var gy=Ucb(Wwb,'ApplicationConfiguration',246);jE(209,1,{14:1,209:1},B0);_.sd=function C0(a){};_.b=null;var hy=Ucb(Wwb,'ApplicationConnection',209);jE(59,1,{},O0);_.b=false;var D0=null,E0;var iy=Ucb(Wwb,'BrowserInfo',59);jE(117,1,{},T0);var jy=Ucb(Wwb,'ComputedStyle',117);jE(679,678,{});var ry=Ucb(gxb,'AbstractServerConnectorEvent',679);var W0;jE(479,1,{},Z0);var ky=Ucb(Wwb,'ConnectorMap',479);jE(84,1,{},f1);_.b=-1;_.e=-1;var ny=Ucb(Wwb,'MeasuredSize',84);jE(542,1,{},i1);var my=Ucb(Wwb,'MeasuredSize/MeasureResult',542);jE(372,1,{},n1);var oy=Ucb(Wwb,'ResourceLoader',372);jE(408,348,{},t1);_.a=0;var qy=Ucb(Wwb,'VSchedulerImpl',408);jE(409,1,Vub,u1);_.Jd=function v1(){this.a.a--};var py=Ucb(Wwb,'VSchedulerImpl/lambda$0$Type',409);var M1;jE(196,679,{},U1);_.ie=function V1(a){a.pf(this)};_.ke=function X1(){return P1};_.je=function W1(){return P1};_.Af=function Y1(a){return S1(this,a)};_.b=false;var P1;var sy=Ucb(gxb,'StateChangeEvent',196);jE(653,1,{},$1);var ty=Ucb(gxb,'URLReference_Serializer',653);jE(168,1,{168:1});_.d=0;var uy=Ucb(jxb,'AsyncBundleLoader',168);jE(363,1,{});var b2;var _y=Ucb(jxb,'ConnectorBundleLoader',363);jE(364,1,Bvb,h2);_.oe=function i2(a){Ne(this.a.e)};var vy=Ucb(jxb,'ConnectorBundleLoader/lambda$0$Type',364);jE(365,1,kxb,j2);_.te=function k2(a){Ne(this.a.e)};var wy=Ucb(jxb,'ConnectorBundleLoader/lambda$1$Type',365);jE(78,363,{},l2);var $y=Ucb(jxb,'ConnectorBundleLoaderXXImpl',78);jE(480,168,{168:1},m2);var Zy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1',480);jE(481,1,{},s2);var Yy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1',481);jE(482,1,lyb,t2);_.Bf=function u2(a,b){return new i5};var Jy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/1',482);jE(491,1,lyb,v2);_.Bf=function w2(a,b){return new ocb};var xy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/10',491);jE(492,1,lyb,x2);_.Bf=function y2(a,b){return new pcb};var yy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/11',492);jE(698,1,lyb);_.Bf=function z2(a,b){var c,d,e,f,g;c=[];for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c.push(d)}return this.Cf(a,c)};var az=Ucb(jxb,'JsniInvoker',698);jE(493,698,lyb,A2);_.Cf=function B2(a,b){a.wf();return null};var zy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/12',493);jE(494,698,lyb,C2);_.Cf=function D2(a,b){a.uf();return null};var Ay=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/13',494);jE(495,698,lyb,E2);_.Cf=function F2(a,b){a.Ef();return null};var By=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/14',495);jE(496,698,lyb,G2);_.Cf=function H2(a,b){a.Ff();return null};var Cy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/15',496);jE(497,698,lyb,I2);_.Cf=function J2(a,b){a.Gf();return null};var Dy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/16',497);jE(498,1,lyb,K2);_.Bf=function L2(a,b){return new M2};var Fy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/17',498);jE(499,1,{},M2);var Ey=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/17/1',499);jE(500,1,lyb,N2);_.Bf=function O2(a,b){return new $1};var Gy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/18',500);jE(501,1,lyb,P2);_.Bf=function Q2(a,b){return new R2};var Iy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/19',501);jE(502,1,{},R2);var Hy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/19/1',502);jE(483,1,lyb,S2);_.Bf=function T2(a,b){return new y5};var Qy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/2',483);jE(503,1,lyb,U2);_.Bf=function V2(a,b){return new W2};var Ly=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/20',503);jE(504,1,{},W2);var Ky=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/20/1',504);jE(505,1,lyb,X2);_.Bf=function Y2(a,b){return new Z2};var Ny=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/21',505);jE(506,1,{},Z2);var My=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/21/1',506);jE(507,1,lyb,$2);_.Bf=function _2(a,b){return new a3};var Py=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/22',507);jE(508,1,{},a3);var Oy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/22/1',508);jE(484,1,lyb,b3);_.Bf=function c3(a,b){return new $bb};var Ry=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/3',484);jE(485,1,lyb,d3);_.Bf=function e3(a,b){return new gcb};var Sy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/4',485);jE(486,1,lyb,f3);_.Bf=function g3(a,b){return new hcb};var Ty=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/5',486);jE(487,1,lyb,h3);_.Bf=function i3(a,b){return new icb};var Uy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/6',487);jE(488,1,lyb,j3);_.Bf=function k3(a,b){return new jcb};var Vy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/7',488);jE(489,1,lyb,l3);_.Bf=function m3(a,b){return new lcb};var Wy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/8',489);jE(490,1,lyb,n3);_.Bf=function o3(a,b){return new ncb};var Xy=Ucb(jxb,'ConnectorBundleLoaderXXImpl/1/1/9',490);jE(72,1,{72:1},r3);_.Xc=function s3(a){var b;if(a===this){return true}else if(Oq(a,72)){b=a;return geb(b.b.b+'.'+b.a,this.b.b+'.'+this.a)}else{return false}};_.Zc=function t3(){return nsb(this.b.b+'.'+this.a)};_.$c=function u3(){return this.b.b+'.'+this.a};var bz=Ucb(jxb,'Method',72);jE(79,21,{79:1,3:1,21:1,18:1},v3);var cz=Ucb(jxb,'NoDataException',79);jE(83,1,{83:1},x3,y3);var dz=Ucb(jxb,'OnStateChangeMethod',83);jE(5,1,{5:1},A3,B3);_.Xc=function D3(a){var b;if(a===this){return true}else if(Oq(a,5)){b=a;return geb(b.b,this.b)}else{return false}};_.Zc=function E3(){return nsb(this.b)};_.$c=function F3(){return this.b};var fz=Ucb(jxb,'Type',5);jE(411,1,{},O3);_.Df=function U3(a,b,c){this.c[Ocb(a),a.k][b]=c};var ez=Ucb(jxb,'TypeDataStore',411);jE(367,1,myb);_.pe=function X3(a){GP(this.c,this.b)&&!!a.a&&zj(a.a)};_.re=function Y3(a){this.d=z1(a.a);this.g=false;this.e=DF(this.f)};_.se=function Z3(a){GP(this.c,this.b)&&this.g&&!!this.d&&z1(a.a)==this.d&&l4(this,a.a);this.g=false;this.d=null};_.g=false;var hz=Ucb(uvb,'AbstractClickEventHandler',367);jE(371,1,avb,$3);_.ye=function _3(a){W3(this.a,a)};var gz=Ucb(uvb,'AbstractClickEventHandler/lambda$0$Type',371);jE(286,44,{},a4);_.jd=function b4(){this.a.mf(xA).ng();x1();this.a.q=true};var iz=Ucb(uvb,'AbstractComponentConnector/2',286);jE(288,1,{717:1,27:1},d4);var jz=Ucb(uvb,'AbstractComponentConnector/3',288);jE(285,1,Pwb,e4);_.pe=function f4(a){UP(this.a,a)};var kz=Ucb(uvb,'AbstractComponentConnector/lambda$0$Type',285);jE(287,1,kxb,g4);_.te=function h4(a){VP(this.a,this.b,a)};var lz=Ucb(uvb,'AbstractComponentConnector/lambda$1$Type',287);jE(289,1,{718:1,27:1},i4);var mz=Ucb(uvb,'AbstractComponentConnector/lambda$2$Type',289);jE(290,196,{},j4);_.Af=function k4(a){return true};var oz=Ucb(uvb,'AbstractConnector/FullStateChangeEvent',290);jE(366,155,Ovb);var rz=Ucb(uvb,'AbstractSingleComponentContainerConnector',366);jE(214,367,myb);var tz=Ucb(uvb,'ClickEventHandler',214);jE(655,1,avb,C4);_.ye=function F4(a){var b;b=CF(a.d);if(this.r){a.a=true;b==Iub&&s4(this,a.d);return}switch(b){case Jub:if(!a.a){w4(this,a.d);this.j&&(a.a=true)}break;case Bsb:case Kub:if(!a.a){this.j&&(a.a=true);v4(this)}break;case 64:this.j&&(a.a=true);break;default:Dqb(Mqb((Ocb(wz),wz.k)),'Non touch event:'+yj(a.d));a.a=true;}};_.a=0;_.c=0;_.e=0;_.f=0;_.j=false;_.k=0;_.n=0;_.o=0;_.r=false;var m4=false,n4;var wz=Ucb(uvb,'TouchScrollDelegate',655);jE(657,131,{},H4);_._c=function I4(a){return 1+$wnd.Math.pow(a-1,3)};_.ad=function J4(){var a;a=Vq(this.b-this.a.e);this.a.c-=a;u4(this.a);this.a.r=false};_.bd=function K4(){G4(this,1+$wnd.Math.pow(0,3));this.a.r=false;y4(this.a)};_.dd=function L4(a){G4(this,a)};_.b=0;_.c=0;var uz=Ucb(uvb,'TouchScrollDelegate/1',657);jE(656,1,kxb,P4);_.te=function Q4(a){x4(this.a,a)};_.b=false;var vz=Ucb(uvb,'TouchScrollDelegate/TouchScrollHandler',656);jE(396,1,dvb,R4);_.ue=function S4(a){var b;b=A1();if(!!this.a.c&&(!b||Zg(he(this.a.e),b)||mf((tK(),$doc.body),b))){this.a.c.focus();this.a.c=null}};var xz=Ucb(uvb,'VContextMenu/1',396);jE(394,138,{726:1,725:1,19:1,27:1,14:1,10:1,17:1,20:1,12:1,13:1},U4);_.Ne=function V4(){(yL(),yL(),wL).Xe((mF(),this.Wc))};_.qe=function W4(a){vj(a.a)==27&&KM(this.a,false)};var yz=Ucb(uvb,'VContextMenu/CMenuBar',394);jE(395,1,Vub,X4);_.Jd=function Y4(){qZ(this.a)};var zz=Ucb(uvb,'VContextMenu/lambda$0$Type',395);jE(398,1,{},Z4);_.Re=function $4(a,b){rZ(this.a,a,b)};var Az=Ucb(uvb,'VContextMenu/lambda$1$Type',398);jE(397,1,Vub,_4);_.Jd=function a5(){sZ(this.a)};var Bz=Ucb(uvb,'VContextMenu/lambda$2$Type',397);jE(118,144,Ftb,b5);_.vd=function c5(a){Le(this,a);mF();if(DG((Fh(),a).type)==Fub){p1(this);a.stopPropagation();return}};_.pd=function d5(a){(mF(),this.Wc).style[Atb]=a;a==null||a.length==0?Ae(this.Wc,pyb,true):Ae(this.Wc,pyb,false)};var Dz=Ucb(uvb,'VLabel',118);jE(91,1,{},f5);_.b=0;var Fz=Ucb(uvb,'VLazyExecutor',91);jE(401,44,{},g5);_.jd=function h5(){this.a.c=null;this.a.a.Jd()};var Ez=Ucb(uvb,'VLazyExecutor/1',401);jE(231,130,{19:1,709:1,27:1,14:1,10:1,723:1,60:1,17:1,31:1,20:1,12:1,13:1,231:1},i5);_.xd=function j5(){if(((mF(),this.Wc).ownerDocument.body.className||'').indexOf('v-generated-body')==-1){this.a=new n5(this);pb(this.a,Otb)}};_.ve=function k5(a){iG();nj($doc).clientWidth|0;nj($doc).clientHeight|0};_.yd=function l5(){if(this.a){ob(this.a);this.a=null}};_.Ad=function m5(a){Ah((mF(),this.Wc),a)};var Jz=Ucb(uvb,'VUI',231);jE(544,44,{},n5);_.jd=function o5(){iG();nj($doc).clientWidth|0;nj($doc).clientHeight|0;pb(this.a.a,Otb)};var Hz=Ucb(uvb,'VUI/1',544);jE(543,1,Vub,p5);_.Jd=function q5(){iG();nj($doc).clientWidth|0;nj($doc).clientHeight|0};var Iz=Ucb(uvb,'VUI/lambda$0$Type',543);jE(136,366,{27:1,99:1,121:1,136:1,3:1},y5);_.sf=function z5(){return !this.J&&(this.J=BP(this)),this.J};_.nf=function A5(){return !this.J&&(this.J=BP(this)),this.J};_.tf=function B5(){return v5(this)};_.vf=function C5(){return true};_.pf=function D5(a){var b;XP(this,a);if(a.Af(jyb)){null.ng((!this.J&&(this.J=BP(this)),this.J).q.a);null.ng((!this.J&&(this.J=BP(this)),this.J).q.c);null.ng((!this.J&&(this.J=BP(this)),this.J).q.d);null.ng((!this.J&&(this.J=BP(this)),this.J).q.e);null.ng((!this.J&&(this.J=BP(this)),this.J).q.b)}if(a.Af(Lxb)){null.ng((!this.J&&(this.J=BP(this)),this.J).c.a);null.ng((!this.J&&(this.J=BP(this)),this.J).c.b);null.ng((!this.J&&(this.J=BP(this)),this.J).c.c)}a.Af(Vxb)&&s5(this);if(a.Af('pageState.title')){b=(!this.J&&(this.J=BP(this)),this.J).g.b;b!=null&&(iG(),$doc.title=b,undefined)}a.Af(Xxb)&&null.ng((!this.J&&(this.J=BP(this)),this.J).j.b!=(Bbb(),zbb));a.Af(_xb)&&null.ng();a.Af(Txb)&&gN(this.C,(!this.J&&(this.J=BP(this)),this.J).f)};_.Ef=function E5(){var a,b,c,d;c=this.a;a=(!this.J&&(this.J=BP(this)),this.J).o;d=u5();b=u5();if(qcb(c,a)){if(a==null){return}!t5(d)?w5(this,null,a,null,b):rh(he((!this.B&&(this.B=SP(this)),this.B).Vc),a)||r5(this,a);return}Dqb(Mqb((Ocb(Nz),Nz.k)),'Changing theme from '+c+' to '+a);w5(this,c,a,d,b)};_.Ff=function F5(){null.ng((!this.J&&(this.J=BP(this)),this.J).p)};_.Gf=function G5(){EP(this,HA).ng((!this.J&&(this.J=BP(this)),this.J).b)};var Nz=Ucb(ryb,'UIConnector',136);jE(368,214,myb,H5);var Mz=Ucb(ryb,'UIConnector/1',368);jE(369,44,{},I5);_.jd=function J5(){if(FP(this.a).i<0){ob(this.a.b);this.a.b=null;return}EP(this.a,NA).ng();null.ng()};var Kz=Ucb(ryb,'UIConnector/10',369);jE(370,1,{},K5);_.yf=function L5(a){Kqb(Mqb((Ocb(Nz),Nz.k)),'Could not load theme from '+u5())};_.zf=function M5(a){Dqb(Mqb((Ocb(Nz),Nz.k)),'Loading of '+this.b+' from '+this.c+' completed');!!this.d&&_g(Wg(this.d),this.d);r5(this.a,this.b)};var Lz=Ucb(ryb,'UIConnector/11',370);jE(360,1,{},N5);_.xf=function O5(a){var b;b=q0(a);if(b.indexOf(pvb)!=-1){s0(he(this.a),this);le(this.a,pvb)}};var Oz=Ucb(tvb,'Overlay/1',360);jE(361,1,{},P5);_.xf=function Q5(a){if(q0(a).indexOf(pvb)!=-1){s0(he(this.a),this);NM(this.a,this.b)}};_.b=false;var Pz=Ucb(tvb,'Overlay/2',361);jE(362,1,{},R5);_.xf=function S5(a){var b;b=q0(a);if(b.indexOf(qvb)!=-1){s0(he(this.a),this);le(this.a,pvb);le(this.a,qvb);NM(this.a,this.b)}};_.b=false;var Qz=Ucb(tvb,'Overlay/3',362);jE(358,1,{},V5);_.a=0;_.b=0;_.c=0;_.d=0;var Rz=Ucb(tvb,'Overlay/PositionAndSize',358);jE(359,131,{},W5);_.dd=function X5(a){MM(this.a,a)};var Sz=Ucb(tvb,'Overlay/ResizeAnimation',359);jE(106,1,{},b6);_.Hf=function c6(a){return nE(a)};var Uz=Ucb(syb,'Parser/10methodref$toString$Type',106);jE(310,1,{},d6);_.Hf=function e6(a){return nE(a)};var Vz=Ucb(syb,'Parser/11methodref$toString$Type',310);jE(313,1,{},f6);_.Hf=function g6(a){return nE(a)};var Wz=Ucb(syb,'Parser/12methodref$toString$Type',313);jE(200,1,{},h6);_.If=function i6(){return new l0};var Xz=Ucb(syb,'Parser/2methodref$ctor$Type',200);jE(201,1,{},j6);_.Hf=function k6(a){return Kdb(mdb(a))};var Yz=Ucb(syb,'Parser/3methodref$valueOf$Type',201);jE(202,1,{},l6);_.Hf=function m6(a){return nE(a)};var Zz=Ucb(syb,'Parser/4methodref$toString$Type',202);jE(203,1,{},n6);_.Hf=function o6(a){return Kdb(mdb(a))};var $z=Ucb(syb,'Parser/5methodref$valueOf$Type',203);jE(104,1,{},p6);_.Hf=function q6(a){return nE(a)};var _z=Ucb(syb,'Parser/6methodref$toString$Type',104);jE(156,1,{},r6);var aA=Ucb(syb,'Parser/7methodref$intValue$Type',156);jE(309,1,{},s6);var bA=Ucb(syb,'Parser/8methodref$doubleValue$Type',309);jE(105,1,{},t6);_.Hf=function u6(a){return nE(a)};var cA=Ucb(syb,'Parser/9methodref$toString$Type',105);jE(129,1,{},v6);_.Hf=function w6(a){return Rq(a)?rcb(a):ldb(nE(a))};var dA=Ucb(syb,'Parser/lambda$12$Type',129);jE(311,1,{},x6);_.If=function y6(){return new sP};var eA=Ucb(syb,'Parser/lambda$17$Type',311);jE(107,1,{},z6);_.If=function A6(){return new DN};var fA=Ucb(syb,'Parser/lambda$18$Type',107);jE(312,1,{},B6);_.If=function C6(){return new BY};var gA=Ucb(syb,'Parser/lambda$19$Type',312);jE(69,1,{},D6);_.Hf=function E6(a){return Y5(this.a,a)};var hA=Ucb(syb,'Parser/lambda$20$Type',69);jE(314,1,{},F6);_.Hf=function G6(a){var b;return b=new wP,Object.assign(b,a),b};var iA=Ucb(syb,'Parser/lambda$22$Type',314);jE(204,1,{},H6);_.Hf=function I6(a){return Kdb(Vq(Rq(a)?rcb(a):ldb(nE(a))))};var jA=Ucb(syb,'Parser/lambda$6$Type',204);jE(205,1,{},J6);_.Hf=function K6(a){return Kdb(Vq(Rq(a)?rcb(a):ldb(nE(a))))};var kA=Ucb(syb,'Parser/lambda$7$Type',205);jE(206,1,{},L6);_.Hf=function M6(a){return Kdb(Vq(Rq(a)?rcb(a):ldb(nE(a))))};var lA=Ucb(syb,'Parser/lambda$9$Type',206);jE(675,1,{},R6);_.addPopupButton=function S6(a){var b,c,d,e;d=_5(a);c=d.sheet+'_'+d.row+'_'+d.col;if(Qhb(this.c,c)){e=Phb(this.c,c)}else{Shb(this.a,c,b=new nQ);Shb(this.c,c,e=(!b.B&&(b.B=new TQ),b.B));Shb(this.b,c,d);mQ(b,this.e.g);JP(b,Rw,b.a);He((!b.B&&(b.B=new TQ),b.B),b,(gn(),gn(),fn));HQ((!b.B&&(b.B=new TQ),b.B),b);MQ(e,d.col);QQ(e,d.row);NQ(e,d.headerHidden);SQ(e,this.f.W,he(this.f.W));PQ(e,d.popupWidth);OQ(e,d.popupHeight)}JQ(e,d.active);yZ(this.f,e)};_.cellsUpdated=function T6(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');UY(DP(this.e,b).Ie().Te(),Z5(a,new D6(new z6)))};_.closePopup=function U6(a,b){var c;c=Phb(this.c,KZ(this.f)+'_'+a+'_'+b);!!c&&(KM(c.e,false),IQ(c))};_.disconnected=function V6(){!!this.e&&HY(this.e)};_.editCellComment=function W6(a,b){s1((ng(),mg),new j9(this,a,b))};_.invalidCellAddress=function X6(){var a;a=peb((Ocb(Nx),Nx.k),Ksb,'.');zO(TP(DP(this.e,a).Ie().Te().a).u)};_.layout=function Y6(){G$(this.f);F$(TP(this.e))};_.load=function Z6(){WZ(this.f)};_.notifyStateChanges=function $6(a,b){var c,d,e,f,g,h;h={};for(e=a,f=0,g=e.length;f<g;++f){d=e[f];h[d]=''}c=new U1(h,b);N6(this,this.e,c);GY(this.e,c)};_.onPopupButtonOpened=function _6(a,b,c,d){var e,f,g;e=$wnd.Vaadin&&$wnd.Vaadin.Flow&&$wnd.Vaadin.Flow.clients[d]&&$wnd.Vaadin.Flow.clients[d].getByNodeId(c);if(!e){return}f=new c9(Hh((Fh(),e)));mF();if(f.Wc){g=Phb(this.c,KZ(this.f)+'_'+a+'_'+b);g.e.M||!!g.d&&bV(g.d,g.b,g.k)&&KQ(g);g.c=f;Kjb(g.f,f);eL(g.i,f)}};_.refreshCellStyles=function a7(){s1((ng(),mg),new h9(this))};_.relayout=function b7(){s1((ng(),mg),new d9(this))};_.relayoutSheet=function c7(){G$(this.f)};_.removePopupButton=function d7(a){var b,c,d;d=_5(a);b=d.sheet+'_'+d.row+'_'+d.col;c=Phb(this.c,b);if(c){I$(this.f,c);Uhb(this.c,b);Uhb(this.a,b);Uhb(this.b,b)}};_.resize=function e7(){R_(this.f)};_.setActionOnColumnHeaderCallback=function f7(a){O9(this.e.g,a)};_.setActionOnCurrentSelectionCallback=function g7(a){P9(this.e.g,a)};_.setActionOnRowHeaderCallback=function h7(a){Q9(this.e.g,a)};_.setCellAddedToSelectionAndSelectedCallback=function i7(a){R9(this.e.g,a)};_.setCellCommentAuthors=function j7(a){FP(this.e).a=a6(a,new t6,new b6)};_.setCellComments=function k7(a){FP(this.e).b=a6(a,new t6,new b6)};_.setCellKeysToEditorIdMap=function l7(a){FP(this.e).c=a6(a,new t6,new b6)};_.setCellRangePaintedCallback=function m7(a){S9(this.e.g,a)};_.setCellRangeSelectedCallback=function n7(a){T9(this.e.g,a)};_.setCellSelectedCallback=function o7(a){U9(this.e.g,a)};_.setCellStyleToCSSStyle=function p7(a){FP(this.e).d=a6(a,new j6,new l6)};_.setCellValueEditedCallback=function q7(a){W9(this.e.g,a)};_.setCellsAddedToRangeSelectionCallback=function r7(a){X9(this.e.g,a)};_.setClass=function s7(a){var b,c,d,e,f,g,h;for(d=this.d,f=0,h=d.length;f<h;++f){b=d[f];re(this.f,b,false)}this.d=a.length==0?Xp(wB,Lsb,2,0,6,1):reb(a,' ',0);for(c=this.d,e=0,g=c.length;e<g;++e){b=c[e];re(this.f,b,true)}};_.setClearSelectedCellsOnCutCallback=function t7(a){Y9(this.e.g,a)};_.setColGroupingData=function u7(a){FP(this.e).e=Z5(a,new D6(new h6))};_.setColGroupingInversed=function v7(a){FP(this.e).f=a};_.setColGroupingMax=function w7(a){FP(this.e).g=a};_.setColW=function x7(a){FP(this.e).i=hrb(prb(new rrb(null,new npb(Z5(a,new v6))),new r6))};_.setCols=function y7(a){FP(this.e).j=a};_.setColumnAddedToSelectionCallback=function z7(a){Z9(this.e.g,a)};_.setColumnBufferSize=function A7(a){FP(this.e).k=a};_.setColumnHeaderContextMenuOpenCallback=function B7(a){$9(this.e.g,a)};_.setColumnIndexToStyleIndex=function C7(a){FP(this.e).n=a6(a,new n6,new H6)};_.setColumnResizedCallback=function D7(a){_9(this.e.g,a)};_.setColumnSelectedCallback=function E7(a){aab(this.e.g,a)};_.setComponentIDtoCellKeysMap=function F7(a){FP(this.e).o=a6(a,new t6,new b6)};_.setConditionalFormattingStyles=function G7(a){FP(this.e).p=a6(a,new j6,new l6)};_.setContextMenuOpenOnSelectionCallback=function H7(a){bab(this.e.g,a)};_.setDefColW=function I7(a){FP(this.e).q=a};_.setDefRowH=function J7(a){FP(this.e).r=a};_.setDeleteSelectedCellsCallback=function K7(a){cab(this.e.g,a)};_.setDisplayGridlines=function L7(a){FP(this.e).s=a};_.setDisplayRowColHeadings=function M7(a){FP(this.e).t=a};_.setGroupingCollapsedCallback=function N7(a){eab(this.e.g,a)};_.setHasActions=function O7(a){FP(this.e).u=a};_.setHeight=function P7(a){FP(this.e).jb=a};_.setHiddenColumnIndexes=function Q7(a){FP(this.e).v=Z5(a,new L6)};_.setHiddenRowIndexes=function R7(a){FP(this.e).w=Z5(a,new L6)};_.setHorizontalScrollPositions=function S7(a){FP(this.e).A=hrb(prb(new rrb(null,new npb(Z5(a,new v6))),new r6))};_.setHorizontalSplitPosition=function T7(a){FP(this.e).B=a};_.setHyperlinksTooltips=function U7(a){FP(this.e).C=a6(a,new t6,new b6)};_.setId=function V7(a){FP(this.e).kb=a};_.setInfoLabelValue=function W7(a){FP(this.e).D=a};_.setInvalidFormulaCells=function X7(a){FP(this.e).F=new snb(Z5(a,new d6))};_.setInvalidFormulaErrorMessage=function Y7(a){FP(this.e).G=a};_.setLevelHeaderClickedCallback=function Z7(a){fab(this.e.g,a)};_.setLinkCellClickedCallback=function $7(a){gab(this.e.g,a)};_.setLockFormatColumns=function _7(a){FP(this.e).H=a};_.setLockFormatRows=function a8(a){FP(this.e).I=a};_.setLockedColumnIndexes=function b8(a){FP(this.e).J=new snb(Z5(a,new J6))};_.setLockedRowIndexes=function c8(a){FP(this.e).K=new snb(Z5(a,new J6))};_.setMergedRegions=function d8(a){FP(this.e).L=Z5(a,new D6(new x6))};_.setNamedRanges=function e8(a){FP(this.e).M=Z5(a,new p6)};_.setOnColumnAutofitCallback=function f8(a){hab(this.e.g,a)};_.setOnConnectorInitCallback=function g8(a){iab(this.e.g,a)};_.setOnPasteCallback=function h8(a){jab(this.e.g,a)};_.setOnRedoCallback=function i8(a){kab(this.e.g,a)};_.setOnRowAutofitCallback=function j8(a){lab(this.e.g,a)};_.setOnSheetScrollCallback=function k8(a){mab(this.e.g,a)};_.setOnUndoCallback=function l8(a){nab(this.e.g,a)};_.setOverlays=function m8(a){FP(this.e).N=a6(a,new f6,new F6)};_.setPopupButtonClickCallback=function n8(a){oab(this.e.g,a)};_.setPopupCloseCallback=function o8(a){pab(this.e.g,a)};_.setProtectedCellWriteAttemptedCallback=function p8(a){qab(this.e.g,a)};_.setReload=function q8(a){FP(this.e).O=true};_.setResources=function r8(a,b){var c;c=Z5(b,new p6);Mjb(c,new f9(this,a))};_.setRowAddedToRangeSelectionCallback=function s8(a){rab(this.e.g,a)};_.setRowBufferSize=function t8(a){FP(this.e).P=a};_.setRowGroupingData=function u8(a){FP(this.e).Q=Z5(a,new D6(new h6))};_.setRowGroupingInversed=function v8(a){FP(this.e).R=a};_.setRowGroupingMax=function w8(a){FP(this.e).S=a};_.setRowH=function x8(a){FP(this.e).T=$5(a)};_.setRowHeaderContextMenuOpenCallback=function y8(a){sab(this.e.g,a)};_.setRowIndexToStyleIndex=function z8(a){FP(this.e).U=a6(a,new n6,new H6)};_.setRowSelectedCallback=function A8(a){tab(this.e.g,a)};_.setRows=function B8(a){FP(this.e).V=a};_.setRowsResizedCallback=function C8(a){uab(this.e.g,a)};_.setSelectedCellAndRange=function D8(a,b,c,d,e,f,g,h){var i;i=peb((Ocb(Nx),Nx.k),Ksb,'.');WY(DP(this.e,i).Ie().Te(),a,b,c,d,e,f,g,h)};_.setSelectionDecreasePaintedCallback=function E8(a){vab(this.e.g,a)};_.setSelectionIncreasePaintedCallback=function F8(a){wab(this.e.g,a)};_.setSetCellStyleWidthRatiosCallback=function G8(a){xab(this.e.g,a)};_.setSheetAddressChangedCallback=function H8(a){yab(this.e.g,a)};_.setSheetCreatedCallback=function I8(a){zab(this.e.g,a)};_.setSheetIndex=function J8(a){FP(this.e).W=a};_.setSheetNames=function K8(a){FP(this.e).X=Sjb(Z5(a,new p6),Xp(wB,Lsb,2,0,6,1))};_.setSheetProtected=function L8(a){FP(this.e).Y=a};_.setSheetRenamedCallback=function M8(a){Aab(this.e.g,a)};_.setSheetSelectedCallback=function N8(a){Bab(this.e.g,a)};_.setShiftedCellBorderStyles=function O8(a){FP(this.e).Z=Z5(a,new p6)};_.setUpdateCellCommentCallback=function P8(a){Cab(this.e.g,a)};_.setVerticalScrollPositions=function Q8(a){FP(this.e).$=hrb(prb(new rrb(null,new npb(Z5(a,new v6))),new r6))};_.setVerticalSplitPosition=function R8(a){FP(this.e)._=a};_.setVisibleCellComments=function S8(a){FP(this.e).ab=Z5(a,new p6)};_.setWidth=function T8(a){FP(this.e).nb=a};_.setWorkbookChangeToggle=function U8(a){FP(this.e).bb=a};_.setWorkbookProtected=function V8(a){FP(this.e).cb=a};_.showActions=function W8(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');XY(DP(this.e,b).Ie().Te(),Z5(a,new D6(new B6)))};_.showSelectedCell=function X8(a,b,c,d,e,f,g){var h;h=peb((Ocb(Nx),Nx.k),Ksb,'.');YY(DP(this.e,h).Ie().Te(),a,b,c,d,e,f,g)};_.updateBottomLeftCellValues=function Y8(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');ZY(DP(this.e,b).Ie().Te(),Z5(a,new D6(new z6)))};_.updateBottomRightCellValues=function Z8(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');$Y(DP(this.e,b).Ie().Te(),Z5(a,new D6(new z6)))};_.updateCellsAndRefreshCellStyles=function $8(){};_.updateFormulaBar=function _8(a,b,c){var d;d=peb((Ocb(Nx),Nx.k),Ksb,'.');_Y(DP(this.e,d).Ie().Te(),a,b,c)};_.updateTopLeftCellValues=function a9(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');aZ(DP(this.e,b).Ie().Te(),Z5(a,new D6(new z6)))};_.updateTopRightCellValues=function b9(a){var b;b=peb((Ocb(Nx),Nx.k),Ksb,'.');bZ(DP(this.e,b).Ie().Te(),Z5(a,new D6(new z6)))};var rA=Ucb(syb,'SpreadsheetJsApi',675);jE(268,13,Ftb,c9);var mA=Ucb(syb,'SpreadsheetJsApi/ContentWidget',268);jE(269,1,Vub,d9);_.Jd=function e9(){G$(this.a.f)};var nA=Ucb(syb,'SpreadsheetJsApi/lambda$0$Type',269);jE(270,1,{},f9);_.Jf=function g9(a){P6(this.a,this.b,a)};var oA=Ucb(syb,'SpreadsheetJsApi/lambda$1$Type',270);jE(271,1,Vub,h9);_.Jd=function i9(){JV(TP(O6(this.a).a).W)};var pA=Ucb(syb,'SpreadsheetJsApi/lambda$2$Type',271);jE(272,1,Vub,j9);_.Jd=function k9(){Q6(this.a,this.b,this.c)};_.b=0;_.c=0;var qA=Ucb(syb,'SpreadsheetJsApi/lambda$3$Type',272);jE(194,1,{715:1,3:1},Iab);_.kf=function Lab(a,b,c){dab(this,a,b,c)};var uA=Ucb(syb,'SpreadsheetServerRpcImpl',194);jE(273,1,{},Nab);_.Kf=function Oab(a,b){Jab(this.a,a,b)};var sA=Ucb(syb,'SpreadsheetServerRpcImpl/lambda$0$Type',273);jE(274,1,{},Pab);_.Kf=function Qab(a,b){Kab(this.a,a,b)};var tA=Ucb(syb,'SpreadsheetServerRpcImpl/lambda$1$Type',274);jE(660,1,tsb,abb);_.$c=function bbb(){return Jj(this.b)+','+this.c+','+this.d+','+this.a+','+this.e+','+this.f+','+this.j+','+this.k+','+this.g+','+this.i};_.a=false;_.c=0;_.d=0;_.e=false;_.f=false;_.g=-1;_.i=-1;_.j=false;_.k=0;var zA=Ucb(Lvb,'MouseEventDetails',660);jE(120,4,{120:1,3:1,6:1,4:1},gbb);var cbb,dbb,ebb;var yA=Vcb(Lvb,'MouseEventDetails/MouseButton',120,hbb);jE(555,1,tsb,rbb);_.a=-1;_.b=-1;_.c=-1;_.e=false;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.o=false;_.p=false;_.q=false;_.r=false;_.s=false;_.t=0;_.u=-1;_.v=-1;var AA=Ucb(Lvb,'VBrowserDetails',555);var sbb;jE(173,1,{173:1,3:1},ubb);_.Xc=function vbb(a){var b;if(!Oq(a,173)){return false}b=a;if(!qcb(this.a,b.a)){return false}if(!qcb(this.b,b.b)){return false}if(!qcb(this.c,b.c)){return false}if(!qcb(this.d,b.d)){return false}return true};_.Zc=function wbb(){var a;a=1;a=31*a+(this.a==null?0:nsb(this.a));a=31*a+(this.b==null?0:nsb(this.b));a=31*a+(this.c==null?0:nsb(this.c));a=31*a+ukb(this.d);return a};_.$c=function xbb(){return this.a+':'+this.b+'.'+this.c+'('+Hsb+')'};var BA=Ucb(Qvb,'MethodInvocation',173);jE(116,4,{116:1,3:1,6:1,4:1},Cbb);var ybb,zbb,Abb;var CA=Vcb(Qvb,'PushMode',116,Dbb);jE(412,67,Rvb);var FA=Ucb($wb,'AbstractSingleComponentContainerState',412);jE(111,4,{111:1,3:1,6:1,4:1},Lbb);var Hbb,Ibb,Jbb;var GA=Vcb($wb,'ContentMode',111,Mbb);jE(77,4,{77:1,3:1,6:1,4:1},Tbb);var Nbb,Obb,Pbb,Qbb,Rbb;var IA=Vcb($wb,'ErrorLevel',77,Ubb);jE(142,4,{142:1,3:1,6:1,4:1},Ybb);var Vbb,Wbb;var KA=Vcb(Vyb,'NotificationRole',142,Zbb);jE(230,1,tsb,$bb);_.a=false;_.b=null;var LA=Ucb(Vyb,'PageState',230);jE(98,4,{98:1,3:1,6:1,4:1},ecb);var _bb,acb,bcb,ccb;var MA=Vcb(Vyb,'Transport',98,fcb);jE(166,412,{67:1,75:1,166:1,3:1},gcb);_.a=false;_.b=0;_.f='This content is announced automatically and does not need to be navigated into.';_.i=-1;_.n=0;_.p=true;var VA=Ucb(Vyb,'UIState',166);jE(223,1,tsb,hcb);_.a=300;_.b=1500;_.c=5000;var OA=Ucb(Vyb,'UIState/LoadingIndicatorConfigurationState',223);jE(413,1,tsb,icb);_.d=0;_.n=false;var PA=Ucb(Vyb,'UIState/LocaleData',413);jE(227,1,tsb,jcb);var QA=Ucb(Vyb,'UIState/LocaleServiceState',227);jE(92,1,tsb,lcb,mcb);var RA=Ucb(Vyb,'UIState/NotificationTypeConfiguration',92);jE(225,1,tsb,ncb);_.a=false;_.d=null;var SA=Ucb(Vyb,'UIState/PushConfigurationState',225);jE(226,1,tsb,ocb);_.a=400;_.b=false;_.c='Server connection lost, trying to reconnect...';_.d='Server connection lost.';_.e=10000;_.f=5000;var TA=Ucb(Vyb,'UIState/ReconnectDialogConfigurationState',226);jE(224,1,tsb,pcb);_.a=300;_.b=500;_.c=750;_.d=100;_.e=Otb;var UA=Ucb(Vyb,'UIState/TooltipConfigurationState',224);jE(410,24,Esb,vcb);var WA=Ucb('elemental.json','JsonException',410);jE(124,1,{183:1});_.$c=function ycb(){return this.a};var $A=Ucb($sb,'AbstractStringBuilder',124);jE(58,24,Esb,zcb);var _A=Ucb($sb,'ArithmeticException',58);var Kcb,Lcb;jE(127,82,{3:1,6:1,127:1,82:1},qdb);_.ge=function rdb(a){return pdb(this.a,a.a)};_.Xc=function sdb(a){return Oq(a,127)&&ndb(this.a,a.a)};_.Zc=function tdb(){return Vq(this.a)};_.$c=function vdb(){return ''+this.a};_.a=0;var gB=Ucb($sb,'Float',127);var Ldb;jE(103,82,{3:1,6:1,103:1,82:1},Ndb);_.ge=function Pdb(a){return Odb(this.a,a.a)};_.Xc=function Qdb(a){return Oq(a,103)&&LD(a.a,this.a)};_.Zc=function Rdb(){return _D(this.a)};_.Sf=function Sdb(){return this.a};_.$c=function Tdb(){return ''+aE(this.a)};_.a=0;var mB=Ucb($sb,'Long',103);var Vdb;jE(46,68,{3:1,21:1,46:1,24:1,18:1},_db);var oB=Ucb($sb,'NumberFormatException',46);jE(74,1,{3:1,74:1},aeb);_.Xc=function beb(a){var b;if(Oq(a,74)){b=a;return this.c==b.c&&this.d==b.d&&this.a==b.a&&this.b==b.b}return false};_.Zc=function ceb(){return ukb($p(Vp(qB,1),tsb,1,5,[Kdb(this.c),this.a,this.d,this.b]))};_.$c=function deb(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var sB=Ucb($sb,'StackTraceElement',74);jE(258,124,{183:1},Ceb);var tB=Ucb($sb,'StringBuffer',258);jE(30,124,{183:1},Jeb,Keb,Leb);var uB=Ucb($sb,'StringBuilder',30);jE(819,1,{});var Neb;jE(36,82,{3:1,6:1,82:1,36:1},lfb,mfb,nfb,ofb);_.ge=function rfb(a){return dfb(this,a)};_.Xc=function sfb(a){var b;if(this===a){return true}if(Oq(a,36)){b=a;return this.e==b.e&&dfb(this,b)==0}return false};_.Zc=function tfb(){var a;if(this.b!=0){return this.b}if(this.a<54){a=MD(this.f);this.b=_D(HD(a,-1));this.b=33*this.b+_D(HD(WD(a,32),-1));this.b=17*this.b+Vq(this.e);return this.b}this.b=17*Qfb(this.c)+Vq(this.e);return this.b};_.$c=function vfb(){return kfb(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var Veb,Web,Xeb,Yeb,Zeb,$eb,_eb,afb,bfb;var AB=Ucb('java.math','BigDecimal',36);jE(11,82,{3:1,6:1,82:1,11:1},Yfb,Zfb,$fb,_fb,agb,bgb);_.ge=function dgb(a){return Gfb(this,a)};_.Xc=function egb(a){return Lfb(this,a)};_.Zc=function ggb(){return Qfb(this)};_.$c=function igb(){return xgb(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var zfb,Afb,Bfb,Cfb,Dfb,Efb;var BB=Ucb('java.math','BigInteger',11);var sgb,tgb;var Ogb,Pgb,Qgb;jE(157,685,{149:1});_.clear=function Xhb(){Vhb(this)};_.containsKey=function Yhb(a){return Mhb(this,a)};_.containsValue=function Zhb(a){return Nhb(a,this.b)||Nhb(a,this.a)};_.Uf=function $hb(){return new hib(this)};_.get=function _hb(a){return Ohb(this,a)};_.put=function aib(a,b){return Rhb(this,a,b)};_.remove=function bib(a){return Thb(this,a)};_.size=function cib(){return Whb(this)};var FB=Ucb(btb,'AbstractHashMap',157);jE(47,686,Psb,hib);_.clear=function iib(){Vhb(this.a)};_.contains=function jib(a){return gib(this,a)};_.Ie=function kib(){return new pib(this.a)};_.remove=function lib(a){var b;if(gib(this,a)){b=a.ag();Thb(this.a,b);return true}return false};_.size=function mib(){return Whb(this.a)};var EB=Ucb(btb,'AbstractHashMap/EntrySet',47);jE(48,1,{},pib);_.Te=function rib(){return oib(this)};_.Se=function qib(){return this.b};_.Ue=function sib(){dsb(!!this.c);Zmb(this.e,this);this.c.Ue();this.c=null;this.b=nib(this);$mb(this.e,this)};_.b=false;var DB=Ucb(btb,'AbstractHashMap/EntrySetIterator',48);jE(697,1,Qsb);_.Xc=function zjb(a){var b;if(!Oq(a,100)){return false}b=a;return Hob(this.b.value[0],b.ag())&&Hob(bob(this),b.bg())};_.Zc=function Ajb(){return Iob(this.b.value[0])^Iob(bob(this))};_.$c=function Bjb(){return this.b.value[0]+'='+bob(this)};var QB=Ucb(btb,'AbstractMapEntry',697);jE(688,684,Osb);_.addAtIndex=function Cjb(a,b){var c;c=this.Wf(a);c.Yf(b)};_.addAllAtIndex=function Djb(a,b){var c,d,e,f;_rb(b);f=false;e=this.Wf(a);for(d=b.Ie();d.Se();){c=d.Te();e.Yf(c);f=true}return f};_.getAtIndex=function Ejb(b){var c;c=this.Wf(b);try{return c.Te()}catch(a){a=ED(a);if(Oq(a,66)){throw FD(new Bcb("Can't get element "+b))}else throw FD(a)}};_.Ie=function Fjb(){return this.Wf(0)};_.removeAtIndex=function Gjb(b){var c,d;c=this.Wf(b);try{d=c.Te();c.Ue();return d}catch(a){a=ED(a);if(Oq(a,66)){throw FD(new Bcb("Can't remove element "+b))}else throw FD(a)}};_.setAtIndex=function Hjb(b,c){var d,e;d=this.Wf(b);try{e=d.Te();d._f(c);return e}catch(a){a=ED(a);if(Oq(a,66)){throw FD(new Bcb("Can't set element "+b))}else throw FD(a)}};var SB=Ucb(btb,'AbstractSequentialList',688);jE(128,684,Rsb,Dkb);_.contains=function Ekb(a){return tib(this,a)!=-1};_.getAtIndex=function Fkb(a){return $rb(a,this.a.length),this.a[a]};_.setAtIndex=function Gkb(a,b){var c;c=($rb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function Hkb(){return this.a.length};_.toArray=function Ikb(){return Ckb(this,Xp(qB,tsb,1,this.a.length,5,1))};_.Tf=function Jkb(a){return Ckb(this,a)};var WB=Ucb(btb,'Arrays/ArrayList',128);jE(161,1,{38:1},slb);_.add=function tlb(a){throw FD(new Teb)};_.addAll=function ulb(a){throw FD(new Teb)};_.clear=function vlb(){throw FD(new Teb)};_.contains=function wlb(a){return this.b.contains(a)};_.containsAll=function xlb(a){return this.b.containsAll(a)};_.isEmpty=function ylb(){return this.b.isEmpty()};_.Ie=function zlb(){return new Ilb(this.b.Ie())};_.remove=function Alb(a){throw FD(new Teb)};_.removeAll=function Blb(a){throw FD(new Teb)};_.retainAll=function Clb(a){throw FD(new Teb)};_.size=function Dlb(){return this.b.size()};_.toArray=function Elb(){return this.b.toArray()};_.Tf=function Flb(a){return this.b.Tf(a)};_.$c=function Glb(){return nE(this.b)};var aC=Ucb(btb,'Collections/UnmodifiableCollection',161);jE(163,1,{},Ilb);_.Se=function Jlb(){return this.b.Se()};_.Te=function Klb(){return this.b.Te()};_.Ue=function Llb(){Hlb()};var _B=Ucb(btb,'Collections/UnmodifiableCollectionIterator',163);jE(162,161,Osb,Mlb);_.addAtIndex=function Nlb(a,b){throw FD(new Teb)};_.addAllAtIndex=function Olb(a,b){throw FD(new Teb)};_.Xc=function Plb(a){return M(this.a,a)};_.getAtIndex=function Qlb(a){return this.a.getAtIndex(a)};_.Zc=function Rlb(){return Q(this.a)};_.indexOf=function Slb(a){return this.a.indexOf(a)};_.isEmpty=function Tlb(){return this.a.isEmpty()};_.lastIndexOf=function Ulb(a){return this.a.lastIndexOf(a)};_.Vf=function Vlb(){return new $lb(this.a.Wf(0))};_.Wf=function Wlb(a){return new $lb(this.a.Wf(a))};_.removeAtIndex=function Xlb(a){throw FD(new Teb)};_.setAtIndex=function Ylb(a,b){throw FD(new Teb)};_.subList=function Zlb(a,b){return new Mlb(this.a.subList(a,b))};var cC=Ucb(btb,'Collections/UnmodifiableList',162);jE(222,163,{},$lb);_.Ue=function cmb(){Hlb()};_.Yf=function _lb(a){throw FD(new Teb)};_.Zf=function amb(){return this.a.Zf()};_.$f=function bmb(){return this.a.$f()};_._f=function dmb(a){throw FD(new Teb)};var bC=Ucb(btb,'Collections/UnmodifiableListIterator',222);jE(385,1,{149:1},fmb);_.getOrDefault=function mmb(a,b){var c;return c=this.c.get(a),c==null&&!this.c.containsKey(a)?b:c};_.putIfAbsent=function smb(a,b){var c;return c=this.c.get(a),c!=null?c:emb()};_.replace=function umb(a,b){return this.c.containsKey(a)?emb():null};_.clear=function gmb(){throw FD(new Teb)};_.containsKey=function hmb(a){return this.c.containsKey(a)};_.containsValue=function imb(a){return this.c.containsValue(a)};_.Uf=function jmb(){!this.a&&(this.a=new Cmb(this.c.Uf()));return this.a};_.Xc=function kmb(a){return M(this.c,a)};_.get=function lmb(a){return this.c.get(a)};_.Zc=function nmb(){return Q(this.c)};_.isEmpty=function omb(){return this.c.isEmpty()};_.keySet=function pmb(){!this.b&&(this.b=new ymb(this.c.keySet()));return this.b};_.put=function qmb(a,b){return emb()};_.putAll=function rmb(a){throw FD(new Teb)};_.remove=function tmb(a){throw FD(new Teb)};_.size=function vmb(){return this.c.size()};_.$c=function wmb(){return nE(this.c)};_.values=function xmb(){!this.d&&(this.d=new slb(this.c.values()));return this.d};var gC=Ucb(btb,'Collections/UnmodifiableMap',385);jE(220,161,Psb,ymb);_.Xc=function zmb(a){return M(this.b,a)};_.Zc=function Amb(){return Q(this.b)};var iC=Ucb(btb,'Collections/UnmodifiableSet',220);jE(386,220,Psb,Cmb);_.contains=function Dmb(a){return this.b.contains(a)};_.containsAll=function Emb(a){return this.b.containsAll(a)};_.Ie=function Fmb(){var a;a=this.b.Ie();return new Imb(a)};_.toArray=function Gmb(){var a;a=this.b.toArray();Bmb(a,a.length);return a};_.Tf=function Hmb(a){var b;b=this.b.Tf(a);Bmb(b,this.b.size());return b};var fC=Ucb(btb,'Collections/UnmodifiableMap/UnmodifiableEntrySet',386);jE(388,1,{},Imb);_.Te=function Kmb(){return new Mmb(this.a.Te())};_.Se=function Jmb(){return this.a.Se()};_.Ue=function Lmb(){throw FD(new Teb)};var dC=Ucb(btb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/1',388);jE(221,1,Qsb,Mmb);_.Xc=function Nmb(a){return this.a.Xc(a)};_.ag=function Omb(){return this.a.ag()};_.bg=function Pmb(){return this.a.bg()};_.Zc=function Qmb(){return this.a.Zc()};_.cg=function Rmb(a){throw FD(new Teb)};_.$c=function Smb(){return nE(this.a)};var eC=Ucb(btb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry',221);jE(387,162,{38:1,80:1,179:1},Tmb);var hC=Ucb(btb,'Collections/UnmodifiableRandomAccessList',387);var Umb;jE(654,1,tsb,Xmb);_.Xc=function Ymb(a){return this===a};var jC=Ucb(btb,'Comparators/NaturalOrderComparator',654);jE(651,24,Esb,anb);var kC=Ucb(btb,'ConcurrentModificationException',651);jE(177,1,{3:1,6:1,177:1},cnb);_.ge=function dnb(a){return Odb(MD(this.a.getTime()),MD(a.a.getTime()))};_.Xc=function enb(a){return Oq(a,177)&&LD(MD(this.a.getTime()),MD(a.a.getTime()))};_.Zc=function fnb(){var a;a=MD(this.a.getTime());return _D(bE(a,XD(a,32)))};_.$c=function hnb(){return bnb(this)};var lC=Ucb(btb,'Date',177);var inb,jnb;jE(26,157,Ssb,mnb,nnb);var mC=Ucb(btb,'HashMap',26);jE(35,686,Tsb,rnb,snb);_.add=function tnb(a){return onb(this,a)};_.clear=function unb(){Vhb(this.a)};_.contains=function vnb(a){return pnb(this,a)};_.isEmpty=function wnb(){return Whb(this.a)==0};_.Ie=function xnb(){var a;return a=(new $ib(this.a)).a.Uf().Ie(),new ejb(a)};_.remove=function ynb(a){return qnb(this,a)};_.size=function znb(){return Whb(this.a)};var nC=Ucb(btb,'HashSet',35);jE(477,1,{},Fnb);_.Ie=function Gnb(){return new Hnb(this)};_.c=0;var pC=Ucb(btb,'InternalHashCodeMap',477);jE(229,1,{},Hnb);_.Te=function Jnb(){return this.d=this.a[this.c++],this.d};_.Se=function Inb(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.Ue=function Knb(){Enb(this.e,this.d.ag());this.c!=0&&--this.c};_.c=0;_.d=null;var oC=Ucb(btb,'InternalHashCodeMap/1',229);var Nnb;jE(475,1,{},Xnb);_.Ie=function Ynb(){return new Znb(this)};_.c=0;_.d=0;var sC=Ucb(btb,'InternalStringMap',475);jE(228,1,{},Znb);_.Te=function _nb(){return this.c=this.a,this.a=this.b.next(),new cob(this.d,this.c,this.d.d)};_.Se=function $nb(){return !this.a.done};_.Ue=function aob(){Wnb(this.d,this.c.value[0])};var qC=Ucb(btb,'InternalStringMap/1',228);jE(476,697,Qsb,cob);_.ag=function dob(){return this.b.value[0]};_.bg=function eob(){return bob(this)};_.cg=function fob(a){return Vnb(this.a,this.b.value[0],a)};_.c=0;var rC=Ucb(btb,'InternalStringMap/2',476);jE(265,688,{3:1,38:1,80:1},kob);_.add=function lob(a){hob(this,a,this.c.b,this.c);return true};_.clear=function mob(){job(this)};_.Wf=function nob(a){var b,c;bsb(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new pob(this,a,c)};_.size=function oob(){return this.b};_.b=0;var vC=Ucb(btb,'LinkedList',265);jE(389,1,{},pob);_.Yf=function qob(a){hob(this.d,a,this.b.b,this.b);++this.a;this.c=null};_.Se=function rob(){return this.b!=this.d.c};_.Zf=function sob(){return this.b.b!=this.d.a};_.Te=function tob(){Zrb(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.$f=function uob(){Zrb(this.b.b!=this.d.a);this.c=this.b=this.b.b;--this.a;return this.c.c};_.Ue=function vob(){var a;dsb(!!this.c);a=this.c.a;iob(this.d,this.c);this.b==this.c?(this.b=a):--this.a;this.c=null};_._f=function wob(a){dsb(!!this.c);this.c.c=a};_.a=0;_.c=null;var tC=Ucb(btb,'LinkedList/ListIteratorImpl',389);jE(164,1,{},xob);var uC=Ucb(btb,'LinkedList/Node',164);jE(664,1,{});var yob,zob;var zC=Ucb(btb,'Locale',664);jE(259,664,{},Bob);_.$c=function Cob(){return ''};var xC=Ucb(btb,'Locale/1',259);jE(260,664,{},Dob);_.$c=function Eob(){return 'unknown'};var yC=Ucb(btb,'Locale/4',260);jE(185,1,{150:1},Kob);_.hg=function Lob(a){this.a.Jf(a)};var DC=Ucb(btb,'Spliterator/OfDouble/0methodref$accept$Type',185);jE(186,1,{150:1},Mob);_.hg=function Nob(a){Orb(this.a,a)};var EC=Ucb(btb,'Spliterator/OfDouble/1methodref$accept$Type',186);jE(187,1,{151:1},Oob);_.ig=function Pob(a){this.a.Jf(Kdb(a))};var FC=Ucb(btb,'Spliterator/OfInt/2methodref$accept$Type',187);jE(188,1,{151:1},Qob);_.ig=function Rob(a){Orb(this.a,Kdb(a))};var GC=Ucb(btb,'Spliterator/OfInt/3methodref$accept$Type',188);jE(253,152,{});_.fg=function Zob(a){Sob(this,new Mob(a))};_.gg=function $ob(a){return Oq(a,150)?urb(this,a):urb(this,new Kob(a))};var HC=Ucb(btb,'Spliterators/AbstractDoubleSpliterator',253);jE(254,152,{});_.fg=function apb(a){Sob(this,new Qob(a))};_.gg=function bpb(a){return Oq(a,151)?zrb(this,a):zrb(this,new Oob(a))};var IC=Ucb(btb,'Spliterators/AbstractIntSpliterator',254);jE(123,1,{},npb);_.dg=function opb(){return this.a};_.eg=function ppb(){mpb(this);return this.c};_.fg=function qpb(a){mpb(this);gob(this.d,a)};_.gg=function rpb(a){_rb(a);mpb(this);if(mkb(this.d)){a.Jf(nkb(this.d));return true}return false};_.a=0;_.c=0;var NC=Ucb(btb,'Spliterators/IteratorSpliterator',123);jE(198,1,{},tpb);_.$c=function upb(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var OC=Ucb(btb,'StringJoiner',198);jE(699,1,tsb);_.Nf=function Hpb(){return 'DUMMY'};_.Rf=function Ipb(){return -1};_.$c=function Kpb(){return this.Nf()};var xpb,ypb,zpb,Apb,Bpb,Cpb,Dpb,Epb,Fpb;var _C=Ucb(zub,'Level',699);jE(511,699,tsb,Lpb);_.Nf=function Mpb(){return 'ALL'};_.Rf=function Npb(){return Isb};var SC=Ucb(zub,'Level/LevelAll',511);jE(512,699,tsb,Opb);_.Nf=function Ppb(){return 'CONFIG'};_.Rf=function Qpb(){return 700};var TC=Ucb(zub,'Level/LevelConfig',512);jE(513,699,tsb,Rpb);_.Nf=function Spb(){return 'FINE'};_.Rf=function Tpb(){return 500};var UC=Ucb(zub,'Level/LevelFine',513);jE(514,699,tsb,Upb);_.Nf=function Vpb(){return 'FINER'};_.Rf=function Wpb(){return 400};var VC=Ucb(zub,'Level/LevelFiner',514);jE(515,699,tsb,Xpb);_.Nf=function Ypb(){return 'FINEST'};_.Rf=function Zpb(){return 300};var WC=Ucb(zub,'Level/LevelFinest',515);jE(516,699,tsb,$pb);_.Nf=function _pb(){return 'INFO'};_.Rf=function aqb(){return 800};var XC=Ucb(zub,'Level/LevelInfo',516);jE(517,699,tsb,bqb);_.Nf=function cqb(){return 'OFF'};_.Rf=function dqb(){return ysb};var YC=Ucb(zub,'Level/LevelOff',517);jE(518,699,tsb,eqb);_.Nf=function fqb(){return 'SEVERE'};_.Rf=function gqb(){return Otb};var ZC=Ucb(zub,'Level/LevelSevere',518);jE(519,699,tsb,hqb);_.Nf=function iqb(){return Uyb};_.Rf=function jqb(){return 900};var $C=Ucb(zub,'Level/LevelWarning',519);jE(536,1,{},nqb);var kqb;var aD=Ucb(zub,'LogManager',536);jE(632,1,tsb,qqb);_.b='';_.c=0;_.e=null;var bD=Ucb(zub,'LogRecord',632);jE(137,1,{137:1},Lqb);_.e=false;var rqb=false,sqb=false,tqb=false,uqb=false,vqb=false;var cD=Ucb(zub,'Logger',137);jE(558,169,{},drb);var jD=Ucb(ctb,'DoubleStreamImpl',558);jE(559,1,{150:1},frb);_.hg=function grb(a){erb(this.a,a)};var iD=Ucb(ctb,'DoubleStreamImpl/lambda$0$Type',559);jE(556,169,{},irb);var lD=Ucb(ctb,'IntStreamImpl',556);jE(557,1,{151:1},krb);_.ig=function lrb(a){jrb(this.a,a)};var kD=Ucb(ctb,'IntStreamImpl/lambda$6$Type',557);jE(528,253,{},vrb);_.jg=function wrb(a){return urb(this,a)};var nD=Ucb(ctb,'StreamImpl/MapToDoubleSpliterator',528);jE(532,1,{},xrb);_.Jf=function yrb(a){this.a.hg((_rb(a),a))};var mD=Ucb(ctb,'StreamImpl/MapToDoubleSpliterator/lambda$0$Type',532);jE(527,254,{},Arb);_.jg=function Brb(a){return zrb(this,a)};var pD=Ucb(ctb,'StreamImpl/MapToIntSpliterator',527);jE(531,1,{},Crb);_.Jf=function Drb(a){this.a.ig(Vq((_rb(a),a)))};var oD=Ucb(ctb,'StreamImpl/MapToIntSpliterator/lambda$0$Type',531);jE(706,1,{});var xD=Ucb('javaemul.internal','ConsoleLogger',706);var Wq=Xcb('char','C');var Zq=Xcb('int','I');var xA=Wcb(Lvb,'ContextClickRpc');var Xq=Xcb('double','D');var Yq=Xcb('float','F');var NA=Wcb(Vyb,'UIServerRpc');var HA=Wcb($wb,'DelayedCallbackRpc');var EA=Ucb(Qvb,'URLReference',null);_=mE('Vaadin.Spreadsheet.Api',R6);_=mE('Vaadin.Spreadsheet.CellData',DN);_=mE('Vaadin.Spreadsheet.OverlayInfo',wP);_.COMPONENT=uP;_.IMAGE=vP;_=mE('Vaadin.Spreadsheet.PopupButtonState',GQ);_=mE('Vaadin.Spreadsheet.SpreadsheetActionDetails',BY);_=mE('java.io.Serializable');_.$isInstance=wcb;Dcb();_=mE('java.lang.Boolean');_.$isInstance=Ecb;_=mE('java.lang.CharSequence');_.$isInstance=Jcb;_=mE('java.lang.Cloneable');_.$isInstance=hdb;_=mE('java.lang.Comparable');_.$isInstance=idb;_=mE('java.lang.Double');_.$isInstance=odb;_=mE('java.lang.Number');_.$isInstance=kdb;_=mE('java.lang.String');_.$isInstance=keb;_=mE('java.lang.Throwable');_.of=Gf;var psb=(ag(),dg);var gwtOnLoad=gwtOnLoad=fE;dE(pE);gE('permProps',[[[ezb,fzb],[gzb,'gecko1_8']],[[ezb,fzb],[gzb,'gecko1_8']],[[ezb,fzb],[gzb,'safari']]]);if (SpreadsheetApi) SpreadsheetApi.onScriptLoad(gwtOnLoad);})();

let Spreadsheet = Vaadin.Spreadsheet.Api;

export { Spreadsheet };
