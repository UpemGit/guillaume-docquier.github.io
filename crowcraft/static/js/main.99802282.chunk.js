(this.webpackJsonpcrowcraft=this.webpackJsonpcrowcraft||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"capitalize",(function(){return m}));var i=a(4),c=a.n(i),r=a(14),l=a.n(r),s=(a(19),a(20),a(9)),o=a(6),u=a(1),m=function(e){return e[0].toUpperCase()+e.slice(1)},d=a(0),f=function(e){var t=e.name,a=e.onChoiceCanceled;return Object(d.jsx)("div",{className:"bg-verdigris pa2 dib",children:Object(d.jsxs)("div",{className:"flex items-center space-between",children:[Object(d.jsx)("div",{children:n.capitalize(t)}),Object(d.jsx)("div",{className:"pl2 bittersweet fw8 pointer",onClick:a,children:"X"})]})})},j=function(e){var t=e.name,a=e.choice,i=e.onStepCanceled;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"mb1",children:n.capitalize(t)}),Object(d.jsx)("div",{children:Object(d.jsx)(f,{name:a.name,onChoiceCanceled:i})})]})},b=function(e){var t=e.name;return Object(d.jsx)("div",{className:"bg-verdigris pa2 dib pointer",children:Object(d.jsx)("div",{className:"flex items-center justify-center",children:Object(d.jsx)("div",{children:n.capitalize(t)})})})},h=["a","e","i","o","u"],w=function(e){var t=e.name,a=e.options,n=e.onStepCompleted;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"mb1",children:["Choose ",h.includes(t[0])?"an":"a"," ",t]}),Object(d.jsx)("div",{className:"flex",children:a.map((function(e){return Object(d.jsx)("div",{className:"mr2",onClick:function(){return n(e)},children:Object(d.jsx)(b,{name:e.name})},e.id)}))})]})},O=function e(t,a,n){Object(u.a)(this,e),this.id=t,this.name=a,this.nextFilterId=n},v=function e(t,a,n){Object(u.a)(this,e),this.id=t,this.name=a,this.optionIds=n},p={armor:new O("armor","armor","armorClass"),weapon:new O("weapon","weapon","weaponClass"),leather:new O("leather","leather","leatherArmor"),mail:new O("mail","mail","mailArmor"),plate:new O("plate","plate","plateArmor"),oneHanded:new O("oneHanded","one handed","oneHandedWeapon"),twoHanded:new O("twoHanded","two handed","twoHandedWeapon"),ranged:new O("ranged","ranged","rangedWeapon"),shield:new O("shield","shield","shieldWeapon"),magical:new O("magical","magical","magicalWeapon"),leatherBoots:new O("leatherBoots","leather boots",null),leatherCap:new O("leatherCap","leather cap",null),leatherGloves:new O("leatherGloves","leather gloves",null),leatherTunic:new O("leatherTunic","leather tunic",null),mailBoots:new O("mailBoots","mail boots",null),mailCoif:new O("mailCoif","mail coif",null),mailGloves:new O("mailGloves","mail gloves",null),mailHauberk:new O("mailHauberk","mail hauberk",null),plateBoots:new O("plateBoots","plate boots",null),plateBreastplate:new O("plateBreastplate","plate breastplate",null),plateGloves:new O("plateGloves","plate gloves",null),plateHelmet:new O("plateHelmet","plate helmet",null),axe:new O("axe","axe",null),dagger:new O("dagger","dagger",null),mace:new O("mace","mace",null),rapier:new O("rapier","rapier",null),shortSword:new O("shortSword","short sword",null),greatAxe:new O("greatAxe","great axe",null),greatMace:new O("greatMace","great mace",null),greatSword:new O("greatSword","great sword",null),longsword:new O("longsword","longsword",null),mysticalThrowingHammer:new O("mysticalThrowingHammer","mystical throwing hammer",null),pistol:new O("pistol","pistol",null),sickle:new O("sickle","sickle",null),smallBuckler:new O("smallBuckler","small buckler",null),mediumShield:new O("mediumShield","medium shield",null),towerShield:new O("towerShield","tower shield",null),frostcaster:new O("frostcaster","frostcaster",null)},g={craftingType:new v("craftingType","crafting type",["armor","weapon"]),armorClass:new v("armorClass","armor class",["leather","mail","plate"]),weaponClass:new v("weaponClass","weapon class",["oneHanded","twoHanded","ranged","shield","magical"]),leatherArmor:new v("leatherArmor","armor",["leatherBoots","leatherCap","leatherGloves","leatherTunic"]),mailArmor:new v("mailArmor","armor",["mailBoots","mailCoif","mailGloves","mailHauberk"]),plateArmor:new v("plateArmor","armor",["plateBoots","plateBreastplate","plateGloves","plateHelmet"]),oneHandedWeapon:new v("oneHandedWeapon","weapon",["axe","dagger","mace","rapier","shortSword","longsword"]),twoHandedWeapon:new v("twoHandedWeapon","weapon",["greatAxe","greatMace","greatSword"]),rangedWeapon:new v("rangedWeapon","weapon",["mysticalThrowingHammer","pistol","sickle"]),shieldWeapon:new v("shieldWeapon","weapon",["smallBuckler","mediumShield","towerShield"]),magicalWeapon:new v("magicalWeapon","weapon",["frostcaster"])},x=a(13),S=a(10),C=a(3),y=a(2),k=a(11),M=a(5),N=function e(t,a){Object(u.a)(this,e),this.quantity=t,this.item=a},z=function e(t,a){Object(u.a)(this,e),this.craftingMaterials=t,this.craftingResult=a},R=function(){function e(t,a,n,i,c,r){Object(u.a)(this,e),this.id=t,this.name=a,this.professions=n,this.rarities=i,this.craftingMaterials=c,this.craftingQuantity=r,this.craftingRank=this.getCraftingRank(),this.rarity=i[0]}return Object(M.a)(e,[{key:"setRarity",value:function(e){this.rarities.includes(e)?this.rarity=e:this.rarity=this.rarities[0];var t,a=Object(k.a)(this.craftingMaterials);try{for(a.s();!(t=a.n()).done;){t.value.item.setRarity(this.rarity)}}catch(n){a.e(n)}finally{a.f()}}},{key:"getCustomizableComponents",value:function(){var e,t=[],a=Object(k.a)(this.craftingMaterials);try{for(a.s();!(e=a.n()).done;){var n=e.value;t=t.concat(n.item.getCustomizableComponents())}}catch(i){a.e(i)}finally{a.f()}return t}},{key:"getCraftingRank",value:function(){return Math.max.apply(Math,Object(s.a)(this.craftingMaterials.map((function(e){return e.item.craftingRank}))))+1}},{key:"getCraftingRundown",value:function(){for(var e=[new z(this.craftingMaterials,new N(1,this))],t=Object(s.a)(this.craftingMaterials),a=this.craftingRank;a>1;){a-=1,t.sort(D);for(var n={},i=0;t[i].item.craftingRank===a;i++){var c=t[i];void 0===n[c.item.id]?n[c.item.id]=new N(c.quantity,c.item):n[c.item.id].quantity+=c.quantity}t=t.slice(i,t.length);for(var r=function(){var a=o[l],n=Math.ceil(a.quantity/a.item.craftingQuantity),i=a.item.craftingMaterials.map((function(e){return new N(e.quantity*n,e.item)}));e.push(new z(i,new N(n*a.item.craftingQuantity,a.item))),t=t.concat(i)},l=0,o=Object.values(n);l<o.length;l++)r()}e.reverse();var u,m={},d=Object(k.a)(t);try{for(d.s();!(u=d.n()).done;){var f=u.value;void 0===m[f.item.id]?m[f.item.id]=new N(f.quantity,f.item):m[f.item.id].quantity+=f.quantity}}catch(j){d.e(j)}finally{d.f()}return{crafts:e,rawMaterials:Object.values(m)}}}]),e}(),B=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"getCraftingRank",value:function(){return 0}}]),a}(R),H=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"getCustomizableComponents",value:function(){return[this]}},{key:"getCustomizationOptions",value:function(){throw"".concat(this.id," must implement getCustomizationOptions")}},{key:"getCustomizationEffect",value:function(){throw"".concat(this.id," must implement getCustomizationEffect")}},{key:"customize",value:function(e){this.id=e.id,this.name=e.name,this.craftingMaterials=e.craftingMaterials,this.setRarity(this.rarity)}}]),a}(R),E="grey",I="white",W="green",A="blue",T="purple",q="orange",G="armorsmith",F="leatherworker",P="weaponsmith",D=function(e,t){return e.item.craftingRank>t.item.craftingRank?-1:e.item.craftingRank<t.item.craftingRank?1:0},Q=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ore",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ore",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[E,I,W,A,T,q],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return Object(u.a)(this,a),t.call(this,e,n,i,c,r,l)}return a}(B),J=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"aurelium","aurelium",[],[I,W,A,T,q],[],1)}return a}(Q),L=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"copper","copper",[],[I,W,A,T,q],[],1)}return a}(Q),U=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"iron","iron",[],[I,W,A,T,q],[],1)}return a}(Q),V=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"silver","silver",[],[I,W,A,T,q],[],1)}return a}(Q),X=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"tin","tin",[],[I,W,A,T,q],[],1)}return a}(Q),K=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"wood","wood",[],[E,I,W,A,T,q],[],1)}return a}(B),Y=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"etherealDust","ethereal dust",[],[I],[],1)}return a}(B),Z=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"coal","coal",[G,P],[I],[new N(3,new K),new N(3,new Y)],5)}return a}(R),$=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"metalScales",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"metal scales",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[new N(16,new U),new N(10,new Q),new N(10,new Q),new N(12,new Z)];return Object(u.a)(this,a),t.call(this,e,n,[G,P],[I,W,A,T,q],i,1)}return Object(M.a)(a,[{key:"getCustomizationOptions",value:function(){return[new _,new ee,new te,new ae,new ne,new ie,new ce,new re,new le,new se]}}]),a}(H),_=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"steelMetalScales","metal scales (steel)",[new N(16,new U),new N(10,new L),new N(10,new U),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"bleed resistance"}}]),a}($),ee=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"darkBronzeMetalScales","metal scales (dark bronze)",[new N(16,new U),new N(10,new L),new N(10,new X),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"fire resistance"}}]),a}($),te=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"brightSteelMetalScales","metal scales (bright steel)",[new N(16,new U),new N(10,new L),new N(10,new V),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"ice resistance"}}]),a}($),ae=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"aureliumSteelMetalScales","metal scales (aurelium steel)",[new N(16,new U),new N(10,new L),new N(10,new J),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"electricity resistance"}}]),a}($),ne=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"invarMetalScales","metal scales (invar)",[new N(16,new U),new N(10,new U),new N(10,new X),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"nature resistance"}}]),a}($),ie=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"silveredIronMetalScales","metal scales (silvered iron)",[new N(16,new U),new N(10,new U),new N(10,new V),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"poison resistance"}}]),a}($),ce=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"tigerIronMetalScales","metal scales (tiger iron)",[new N(16,new U),new N(10,new U),new N(10,new J),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"disease resistance"}}]),a}($),re=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"blueSteelMetalScales","metal scales (blue steel)",[new N(16,new U),new N(10,new X),new N(10,new V),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"slashing resistance"}}]),a}($),le=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"forestAureliumMetalScales","metal scales (forest aurelium)",[new N(16,new U),new N(10,new X),new N(10,new J),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"crushing resistance"}}]),a}($),se=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"darkElectrumMetalScales","metal scales (dark electrum)",[new N(16,new U),new N(10,new V),new N(10,new J),new N(12,new Z)])}return Object(M.a)(a,[{key:"getCustomizationEffect",value:function(){return"piercing resistance"}}]),a}($),oe=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"hide","hide",[],[I,W,A,T,q],[],1)}return a}(B),ue=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"meat","meat",[],[I],[],1)}return a}(B),me=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"lacingSinew","lacing sinew",[F],[I],[new N(3,new ue),new N(3,new Y)],5)}return a}(R),de=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,"leatherPadding","leather padding",[F],[I,W,A,T,q],[new N(2,new oe),new N(2,new oe),new N(2,new oe),new N(1,new me)],1)}return a}(R),fe=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(u.a)(this,a),t.call(this,a.id,"mail coif",[G,P],[I,W,A,T,q],[new N(1,new $),new N(1,new $),new N(1,new $),new N(1,new de),new N(6,new Y)],1)}return a}(R);fe.id="mailCoif";var je=Object(S.a)({},fe.id,fe),be=Object(x.a)(Object(x.a)({},je),{}),he=(a(22),{aurelium:a.p+"static/media/aurelium.450b092b.svg",coal:a.p+"static/media/coal.965b3dc3.svg",copper:a.p+"static/media/copper.1b71c9df.svg",etherealDust:a.p+"static/media/etherealDust.67bffd87.svg",iron:a.p+"static/media/iron.fb1caf88.svg",lacingSinew:a.p+"static/media/lacingSinew.f0d65a1e.svg",leatherPadding:a.p+"static/media/leatherPadding.c4bdfad1.svg",mailCoif:a.p+"static/media/mailCoif.0559e556.svg",metalScales:a.p+"static/media/metalScales.152aaf3f.svg",brightSteelMetalScales:a.p+"static/media/brightSteelMetalScales.152aaf3f.svg",darkBronzeMetalScales:a.p+"static/media/darkBronzeMetalScales.152aaf3f.svg",aureliumSteelMetalScales:a.p+"static/media/aureliumSteelMetalScales.152aaf3f.svg",steelMetalScales:a.p+"static/media/steelMetalScales.152aaf3f.svg",invarMetalScales:a.p+"static/media/invarMetalScales.152aaf3f.svg",silveredIronMetalScales:a.p+"static/media/silveredIronMetalScales.152aaf3f.svg",tigerIronMetalScales:a.p+"static/media/tigerIronMetalScales.152aaf3f.svg",blueSteelMetalScales:a.p+"static/media/blueSteelMetalScales.152aaf3f.svg",forestAureliumMetalScales:a.p+"static/media/forestAureliumMetalScales.152aaf3f.svg",darkElectrumMetalScales:a.p+"static/media/darkElectrumMetalScales.152aaf3f.svg",silver:a.p+"static/media/silver.319be524.svg",slag:a.p+"static/media/slag.0272de84.svg",tin:a.p+"static/media/tin.699df579.svg",ore:a.p+"static/media/ore.4f9101d8.svg",stone:a.p+"static/media/stone.78c1385e.svg",wood:a.p+"static/media/wood.754c05c6.svg",hide:a.p+"static/media/hide.12e58281.svg",meat:a.p+"static/media/meat.f65f2e48.svg"}),we=function(e){var t=e.rawMaterials;return Object(d.jsxs)("div",{className:"flex flex-column",children:[Object(d.jsx)("div",{className:"mb2",children:"Raw materials:"}),Object(d.jsx)("div",{className:"flex",children:t.map((function(e,t){return Object(d.jsx)("div",{className:"mr2",children:Object(d.jsx)(Oe,{rawMaterial:e})},"".concat(e.item.id,".").concat(t))}))})]})},Oe=function(e){var t,a=e.rawMaterial,i=a.quantity,c=a.item,r=n.capitalize(c.name);return Object(d.jsxs)("div",{className:"resource-container bg-rarity-".concat(c.rarity," | relative cursor-default"),title:r,children:[Object(d.jsx)("img",{src:(t=c.id,he[t]||""),alt:r,className:"resource-image"}),Object(d.jsx)("div",{class:"resource-count | absolute",children:i})]})},ve=function(e){var t=e.crafts;return Object(d.jsxs)("div",{className:"flex flex-column",children:[Object(d.jsx)("div",{className:"mb2",children:"Crafting steps:"}),Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)("div",{className:"mb2",children:Object(d.jsx)(pe,{craft:e},e.craftingResult.item.id)})}))})]})},pe=function(e){var t=e.craft;return Object(d.jsxs)("div",{className:"flex items-center",children:[t.craftingMaterials.map((function(e,t){return Object(d.jsxs)("div",{className:"flex items-center",children:[t>0?Object(d.jsx)("div",{className:"mh1",children:"+"}):null,Object(d.jsx)(Oe,{rawMaterial:e})]},"".concat(e.item.id,".").concat(t))})),Object(d.jsx)("div",{className:"mh1",children:"="}),Object(d.jsx)(Oe,{rawMaterial:t.craftingResult}),Object(d.jsxs)("div",{className:"ml1",children:["(",t.craftingResult.item.professions.map((function(e){return n.capitalize(e)})).join(" or "),")"]})]})},ge=Object(i.memo)((function(e){var t=e.item,a=e.onItemCustomized,n=t.getCustomizableComponents(),c=Object(i.useState)(n.map((function(){return!1}))),r=Object(o.a)(c,2),l=r[0],s=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"mb2",children:"Choose your stats"}),n.map((function(e,t){return Object(d.jsx)(xe,{component:e,onComponentCustomized:function(){return function(e){l[e]=!0,s(l),l.every((function(e){return e}))&&a()}(t)},componentIndex:t+1},"".concat(e.id,".").concat(t))}))]})})),xe=Object(i.memo)((function(e){var t=e.component,a=e.onComponentCustomized,n=e.componentIndex,c=Object(i.useState)(t.getCustomizationOptions()),r=Object(o.a)(c,1)[0],l=Object(i.useState)(-1),s=Object(o.a)(l,2),u=s[0],m=s[1],f=Object(i.useCallback)((function(e,n){m(n),t.customize(e),a()}),[]);return Object(d.jsxs)("div",{className:"mb3",children:[Object(d.jsxs)("div",{className:"mb1",children:[n,". ",t.name]}),Object(d.jsx)("div",{className:"flex ml3",children:r.map((function(e,t){return Object(d.jsx)("div",{className:"mr2",children:Object(d.jsx)(Se,{option:e,index:t,onOptionSelected:f,isSelected:u===t})},e.id)}))})]})})),Se=Object(i.memo)((function(e){var t=e.option,a=e.index,n=e.onOptionSelected,i=e.isSelected?"bg-mauve-taupe":"bg-verdigris";return Object(d.jsx)("div",{className:"".concat(i," pa2 dib pointer"),onClick:function(){n(t,a)},children:Object(d.jsx)("div",{className:"flex items-center justify-center",children:t.getCustomizationEffect()})})})),Ce=function e(t,a){Object(u.a)(this,e),this.name=t.name,this.filter=t,this.choice=a},ye=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(g.craftingType),r=Object(o.a)(c,2),l=r[0],u=r[1],m=Object(i.useState)(null),f=Object(o.a)(m,2),b=f[0],h=f[1],v=Object(i.useState)(null),x=Object(o.a)(v,2),S=x[0],C=x[1],y=Object(i.useState)(null),k=Object(o.a)(y,2),M=k[0],N=k[1],z=Object(i.useState)(null),R=Object(o.a)(z,2),B=R[0],H=R[1];Object(i.useEffect)((function(){b&&b.setRarity((S||{}).id)}),[b,S]);var E=function(){C(null),b.setRarity(null),N(null),H(null)},I=Object(i.useCallback)((function(){var e=b.getCraftingRundown(),t=e.rawMaterials,a=e.crafts;N(t),H(a)}),[b,N,H]);return Object(d.jsxs)("div",{className:"mv3",children:[a.map((function(e,t){return Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(j,{name:e.name,choice:e.choice,onStepCanceled:(i=t,function(){n(a.slice(0,i)),u(a[i].filter),h(null),E()})})},e.filter.id);var i})),l?Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(w,{name:l.name,options:l.optionIds.map((function(e){return p[e]})),onStepCompleted:function(e){n([].concat(Object(s.a)(a),[new Ce(l,e)])),u(g[e.nextFilterId]),e.nextFilterId||h(new be[e.id])}})}):null,b&&!S?Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(w,{name:"rarity",options:b.rarities.map((function(e){return new O(e,e,null)})),onStepCompleted:function(e){C(e)}})}):null,S?Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(j,{name:"rarity",choice:S,onStepCanceled:E})}):null,S?Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(ge,{item:b,onItemCustomized:I})}):null,M?Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(we,{rawMaterials:M})}):null,B?Object(d.jsx)("div",{className:"mb3",children:Object(d.jsx)(ve,{crafts:B})}):null]})},ke=a.p+"static/media/logo.8e1908b1.png",Me=function(e){var t=e.className;return Object(d.jsxs)("div",{className:t+" flex items-center bg-mauve-taupe",children:[Object(d.jsx)("img",{src:ke,alt:"Crowcraft logo",className:"h-100"}),Object(d.jsx)("div",{className:"pl3",children:"Crowcraft"})]})},Ne=function(e){var t=e.className,a=e.children;return Object(d.jsx)("div",{className:t,children:a})},ze=function(e){var t=e.className;return Object(d.jsxs)("div",{className:t+" flex flex-column items-center justify-center f5 bg-bittersweet light-yellow",children:[Object(d.jsx)("div",{children:"Crowcraft - Made by Guike for Valeria"}),Object(d.jsx)("div",{children:"With the contribution of Bluezinhaaa, Shilana, Upem and BeardslayTTV"})]})},Re=function(e){var t=e.children;return Object(d.jsxs)("div",{className:"bg-charcoal peach-puff",children:[Object(d.jsx)(Me,{className:"h3 nmb5 ph7"}),Object(d.jsx)(Ne,{className:"pv5 ph7 min-vh-100",children:t}),Object(d.jsx)(ze,{className:"h3 nmt5 ph7"})]})},Be=function(){return Object(d.jsx)(Re,{children:Object(d.jsx)(ye,{})})},He=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Be,{})}),document.getElementById("root")),He()}},[[23,1,2]]]);
//# sourceMappingURL=main.99802282.chunk.js.map