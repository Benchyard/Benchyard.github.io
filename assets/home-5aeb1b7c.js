import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createElementBlock, f as createStaticVNode, d as defineComponent, a as ref, h as resolveComponent, b as createBaseVNode, e as createVNode, w as watch, n as normalizeStyle, i as withDirectives, v as vShow, F as Fragment, j as renderList, t as toDisplayString, k as createCommentVNode, l as renderSlot, p as pushScopeId, g as popScopeId, u as useAuthStore, m as reactive, q as resolveDirective, s as withCtx, x as createBlock, y as unref, z as createTextVNode, E as ElMessage, A as apiUserInfo, B as onMounted, T as Tribute, C as withKeys, D as withModifiers, G as apiFileAdd, H as usePanelStore, I as usePrivateChatStore, J as useChatGroupStore, K as useBotStore, L as addTab, M as nextTick, N as arrow_left_bold_default, O as arrow_right_bold_default, P as vModelCheckbox, Q as h, R as arrow_down_bold_default, S as apiBotCreate, U as updateBotList, V as ElLoading, W as apiBotFileAdd, X as apiBotUploadAvatar, Y as vModelText, Z as apiSendInvitationEmail, _ as apiBotUpdate, $ as apiBotFileRemove, a0 as addPrivateChat, a1 as SocketChat, a2 as savePrivateChat, a3 as removeTab, a4 as addWindow, a5 as useRoute, a6 as removePanel, a7 as addPanel, a8 as apiGetBotInfoFromCode, a9 as apiAcceptInvitation, aa as apiBotInfo, ab as apiShareCode, ac as apiBotDelete, ad as removeTabByChatId, ae as apiUserInfoAttributeSet } from "./index-4273cbe6.js";
import { C as CompRegister, a as CompLogin, b as CompFindPassword, r as resetPsd, c as botInvitation } from "./botInvitation-4d7cd288.js";
const baseUrl = "https://api-test.benchyard.com";
const _sfc_main$n = {};
const _hoisted_1$m = { class: "partial-code main no-scrollbar" };
const _hoisted_2$j = /* @__PURE__ */ createStaticVNode('<section class="section1_1"><div class="flex_col"><h1 class="hero_title">Unlock the power of AI</h1><h4 class="highlights">Meet the synapse of our ai chat app revolutionizing conversations</h4></div><div class="box"><div class="box1"><div class="text">Monthly</div></div><div class="box1" style="background:transparent;"><div class="text">Anualy (-20%)</div></div></div><div class="flex_row"><div class="flex_row__cell"><div class="box2"><div class="flex_col1"><h1 class="title">Free</h1><h5 class="highlights1">Basic chat functionality</h5><div class="flex_row1"><div class="flex_row1__cell"><h1 class="title1">$</h1></div><div class="flex_row1__cell1"><h1 class="hero_title1">0</h1></div><div class="flex_row1__cell2"><h1 class="title11">/ mo</h1></div></div><div class="text11">Free forever</div></div><div class="box3"><div class="flex_row2"><div class="flex_row2__cell"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="text2">5 chatbots</div></div><div class="flex_row3"><div class="flex_row3__cell"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer"></div><div class="text2">Up to 1000 messages/mo</div></div><div class="flex_row3"><div class="flex_row3__cell1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer1"></div><div class="text2">Basic analytics</div></div><div class="flex_row3"><div class="flex_row3__cell2"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer2"></div><div class="text2">Basic analytics</div></div><div class="flex_row4"><div class="icon1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row4__spacer"></div><div class="text12">Custom chatbot</div></div><div class="flex_row41"><div class="icon1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row41__spacer"></div><div class="text12">No support</div></div><div class="box4"><div class="text21">Current plan</div></div></div></div></div><div class="flex_row__spacer"></div><div class="flex_row__cell"><div class="box5"><div class="flex_col1"><div class="flex_row5"><div class="flex_row5__cell"><h1 class="title2">Standard</h1></div><div class="flex_row5__spacer"></div><div class="flex_row5__cell1"><div class="box6"><div class="info">Popular</div></div></div></div><h5 class="highlights1">Advanced chat features</h5><div class="flex_row1"><div class="flex_row1__cell3"><h1 class="title1">$</h1></div><div class="flex_row1__cell4"><h1 class="hero_title11">29</h1></div><div class="flex_row1__cell5"><h1 class="title11">/ mo</h1></div></div><div class="text11">Per month, per team members</div></div><div class="box7"><div class="flex_row6"><div class="flex_row6__cell"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row6__spacer"></div><div class="text2">10 chatbots</div></div><div class="flex_row3"><div class="flex_row3__cell3"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer3"></div><div class="text2">Up to 5000 messages/mo</div></div><div class="flex_row3"><div class="flex_row3__cell4"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer4"></div><div class="text2">Basic analytics</div></div><div class="flex_row3"><div class="flex_row3__cell5"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer5"></div><div class="text2">Basic analytics</div></div><div class="flex_row3"><div class="flex_row3__cell6"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer6"></div><div class="text2">Custom chatbot</div></div><div class="flex_row3"><div class="flex_row3__cell7"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer7"></div><div class="text2">Email support</div></div><div class="box8"><div class="text22">Upgrade</div></div></div></div></div><div class="flex_row__spacer"></div><div class="flex_row__cell"><div class="box9"><h1 class="title3">Pro</h1><h5 class="highlights11">Custom chat solutions</h5><div class="flex_row14"><h1 class="title12">$</h1><div class="flex_row14__cell"><h1 class="hero_title12">49</h1></div><div class="flex_row14__cell1"><h1 class="title13">/ mo</h1></div></div><div class="text13">Per month, per team members</div><div class="box7"><div class="flex_row6"><div class="flex_row6__cell1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row6__spacer1"></div><div class="text2">Unlimited chatbots</div></div><div class="flex_row3"><div class="flex_row3__cell8"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer8"></div><div class="text2">Unlimited messages</div></div><div class="flex_row3"><div class="flex_row3__cell9"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer9"></div><div class="text2">Custom analytics</div></div><div class="flex_row3"><div class="flex_row3__cell10"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer10"></div><div class="text2">Custom integrations</div></div><div class="flex_row3"><div class="flex_row3__cell11"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer11"></div><div class="text2">Custom chatbot</div></div><div class="flex_row3"><div class="flex_row3__cell12"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer12"></div><div class="text2">Priority email and chat support</div></div><div class="box8"><div class="text22">Upgrade</div></div></div></div></div></div></section><section class="section2_1"><section class="section2"><div class="flex_col2"><h2 class="medium_title">Usage</h2><div class="flex_row7"><div class="flex_row7__cell" style="background-color:rgb(75, 171, 113);"></div><div class="flex_row7__cell1"><div class="text14">Used</div></div><div class="flex_row7__spacer"></div><div class="flex_row7__cell" style="background-color:#5F44FF;"></div><div class="flex_row7__cell2"><div class="text14">Left</div></div><div class="flex_row7__spacer"></div><div class="flex_row7__cell" style="background-color:#8364FF;"></div><div class="flex_row7__cell3"><div class="text14">Bonus</div></div></div><div class="flex_row8"><div class="group"><div class="group1"><div class="rect"></div><div class="rect1"></div></div><div class="rect2"></div></div><div class="flex_row8__spacer"></div><div class="text23">$0.20 / $18.00</div></div><div class="flex_col3"><h2 class="medium_title">Earn credits by inviting friends 🎉</h2><div class="text3">For every friend you invite, you&#39;ll earn 5 credits, and they&#39;ll get extra 5 credits.</div><div class="box10"><h5 class="highlights2">https://easy-peasy.ai/?from=7</h5></div></div></div></section></section><section class="section3_1"><section class="section3"><div class="flex_col4"><h2 class="medium_title1">Your referrals</h2><h5 class="highlights3_box"><span class="highlights3"><span class="highlights3_span0">Total Invite: </span><span class="highlights3_span1">4</span></span></h5><div class="text31">A list of all the users registered by your invite link.</div><div class="flex_col5"><div class="content_box"><div class="flex_row9"><div class="flex_row9__cell"><div class="text15">Referral</div></div><div class="flex_row9__spacer"></div><div class="flex_row9__cell1"><div class="text16">Updated at</div></div><div class="flex_row9__spacer1"></div><div class="flex_row9__cell2"><div class="text17">Status</div></div></div></div><div class="flex_row10"><div class="flex_row10__cell"><div class="flex_row11"><div class="flex_row11__cell"></div><div class="flex_row11__cell1"><div class="flex_col6"><h5 class="highlights12">Tran Mau Tri Tam</h5><div class="info1">qi.sun@gmail.com</div></div></div></div></div><div class="flex_row10__spacer"></div><div class="flex_row10__cell1"><h5 class="highlights13">17/05/2023</h5></div><div class="flex_row10__spacer1"></div><div class="flex_row10__cell2"><h5 class="highlights14">Registered</h5></div></div></div></div></section></section>', 3);
const _hoisted_5$f = [
  _hoisted_2$j
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("main", _hoisted_1$m, _hoisted_5$f);
}
const subscription = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$3]]);
const management_vue_vue_type_style_index_0_scoped_6d972efe_lang = "";
const _sfc_main$m = {};
const _hoisted_1$l = /* @__PURE__ */ createStaticVNode('<div class="w-96 h-40 flex-col justify-center items-start gap-16 inline-flex" data-v-6d972efe><div class="w-96 justify-between items-center gap-8 inline-flex" data-v-6d972efe><div class="flex-col justify-start items-center gap-4 inline-flex" data-v-6d972efe><div class="text-center text-white text-xl font-medium leading-tight" data-v-6d972efe>Deactivate account</div><div class="text-center text-gray-500 text-sm font-normal leading-none" data-v-6d972efe>Hide your Pins and profile</div></div><div class="h-12 px-6 py-4 bg-zinc-700 rounded-xl justify-center items-center gap-2.5 flex" data-v-6d972efe><div class="text-white text-sm font-medium leading-none" data-v-6d972efe>Deactivate account</div></div></div><div class="w-96 h-40 flex-col justify-center items-start gap-16 inline-flex" data-v-6d972efe><div class="flex-col justify-start items-center gap-4 inline-flex" data-v-6d972efe><div class="text-center text-white text-xl font-medium leading-tight" data-v-6d972efe>Delete your data and account</div><div class="text-center text-gray-500 text-sm font-normal leading-none" data-v-6d972efe>Delete your account and account data</div></div><div class="h-12 px-6 py-4 bg-red-500 rounded-xl justify-center items-center gap-2.5 flex" data-v-6d972efe><div class="text-white text-sm font-medium leading-none" data-v-6d972efe>Delete account</div></div></div></div><div class="partial-code root" data-v-6d972efe><div class="flex_col" data-v-6d972efe><div class="flex_col__cell" data-v-6d972efe><div class="flex_col1" data-v-6d972efe><div class="flex_col1__cell" data-v-6d972efe><h3 class="subtitle" data-v-6d972efe>Deactivate account</h3></div><div class="flex_col1__cell" data-v-6d972efe><div class="text" data-v-6d972efe>Hide your Pins and profile</div></div><div class="flex_col1__cell" data-v-6d972efe><div class="box" data-v-6d972efe><div class="text1" data-v-6d972efe>Deactivate account</div></div></div></div></div><div class="flex_col__cell" data-v-6d972efe><div class="flex_col1" data-v-6d972efe><div class="flex_col1__cell1" data-v-6d972efe><h3 class="subtitle1" data-v-6d972efe>Delete your data and account</h3></div><div class="flex_col1__cell1" data-v-6d972efe><div class="text" data-v-6d972efe>Delete your account and account data</div></div><div class="flex_col1__cell1" data-v-6d972efe><div class="box" data-v-6d972efe><div class="text11" data-v-6d972efe>Delete account</div></div></div></div></div></div></div>', 2);
function _sfc_render$2(_ctx, _cache) {
  return _hoisted_1$l;
}
const management = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$2], ["__scopeId", "data-v-6d972efe"]]);
const _hoisted_1$k = { class: "flex flex-col gap-y-[23px] relative mr-[33px]" };
const _hoisted_2$i = { class: "flex items-center gap-x-2 relative" };
const _hoisted_3$h = /* @__PURE__ */ createStaticVNode('<div class="shrink-0 basis-[811px]"><span class="font-normal text-sm font-Roboto text-black"><span class="text-white">Allow </span><span class="font-bold text-white">Benchyard</span><span class="text-white"> to use your data for better user experience, based on</span><span class="text-[rgb(124,135,142)]"></span><span class="text-[rgb(124,130,255)]"> Benchyard Privacy Policy</span></span></div>', 1);
const _hoisted_4$h = /* @__PURE__ */ createStaticVNode('<div class="flex items-center relative"><div class="flex justify-center font-normal text-[14px] leading-none font-Roboto text-white text-center shrink-0 basis-[102px] mt-[9px] mb-2"> Delete your data</div><div class="basis-[54px]"></div><div class="grid bg-[rgb(241,77,77)] rounded-xl shrink-0 basis-[118px] relative cursor-pointer"><div class="flex items-center font-medium text-[14px] leading-none font-Roboto text-white grow mt-[9px] mx-[23px] mb-2"> Delete data</div></div></div><div class="flex items-center relative"><p class="basis-[313px] min-h-[33px]"><span class="font-normal text-[14px] leading-none font-Roboto text-black"><span class="text-white">Download your data<br></span><span class="text-[rgb(124,135,142)]">You can request a download of your data</span></span></p><div class="cursor-pointer grid bg-[rgb(57,62,68)] rounded-xl shrink-0 basis-[118px] relative"><div class="flex justify-center items-center font-medium text-[14px] leading-none font-Roboto text-white grow h-8"> Request data</div></div></div>', 2);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  setup(__props) {
    const privacy = ref(true);
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        createBaseVNode("div", _hoisted_2$i, [
          createVNode(_component_el_checkbox, {
            modelValue: privacy.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => privacy.value = $event),
            size: "large",
            style: { "scale": "1.4" }
          }, null, 8, ["modelValue"]),
          _hoisted_3$h
        ]),
        _hoisted_4$h
      ]);
    };
  }
});
const isff = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function addEvent(object, event, method, useCapture) {
  if (object.addEventListener) {
    object.addEventListener(event, method, useCapture);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), () => {
      method(window.event);
    });
  }
}
function getMods(modifier, key) {
  const mods = key.slice(0, key.length - 1);
  for (let i = 0; i < mods.length; i++)
    mods[i] = modifier[mods[i].toLowerCase()];
  return mods;
}
function getKeys(key) {
  if (typeof key !== "string")
    key = "";
  key = key.replace(/\s/g, "");
  const keys = key.split(",");
  let index = keys.lastIndexOf("");
  for (; index >= 0; ) {
    keys[index - 1] += ",";
    keys.splice(index, 1);
    index = keys.lastIndexOf("");
  }
  return keys;
}
function compareArray(a1, a2) {
  const arr1 = a1.length >= a2.length ? a1 : a2;
  const arr2 = a1.length >= a2.length ? a2 : a1;
  let isIndex = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1)
      isIndex = false;
  }
  return isIndex;
}
const _keyMap = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": isff ? 173 : 189,
  "=": isff ? 61 : 187,
  ";": isff ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
};
const _modifier = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
};
const modifierMap = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
const _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
const _handlers = {};
for (let k = 1; k < 20; k++) {
  _keyMap["f".concat(k)] = 111 + k;
}
let _downKeys = [];
let winListendFocus = false;
let _scope = "all";
const elementHasBindEvent = [];
const code = (x2) => _keyMap[x2.toLowerCase()] || _modifier[x2.toLowerCase()] || x2.toUpperCase().charCodeAt(0);
const getKey = (x2) => Object.keys(_keyMap).find((k) => _keyMap[k] === x2);
const getModifier = (x2) => Object.keys(_modifier).find((k) => _modifier[k] === x2);
function setScope(scope) {
  _scope = scope || "all";
}
function getScope() {
  return _scope || "all";
}
function getPressedKeyCodes() {
  return _downKeys.slice(0);
}
function getPressedKeyString() {
  return _downKeys.map((c) => getKey(c) || getModifier(c) || String.fromCharCode(c));
}
function getAllKeyCodes() {
  const result = [];
  Object.keys(_handlers).forEach((k) => {
    _handlers[k].forEach((_ref) => {
      let {
        key,
        scope,
        mods,
        shortcut
      } = _ref;
      result.push({
        scope,
        shortcut,
        mods,
        keys: key.split("+").map((v) => code(v))
      });
    });
  });
  return result;
}
function filter(event) {
  const target = event.target || event.srcElement;
  const {
    tagName
  } = target;
  let flag = true;
  if (target.isContentEditable || (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") && !target.readOnly) {
    flag = false;
  }
  return flag;
}
function isPressed(keyCode) {
  if (typeof keyCode === "string") {
    keyCode = code(keyCode);
  }
  return _downKeys.indexOf(keyCode) !== -1;
}
function deleteScope(scope, newScope) {
  let handlers;
  let i;
  if (!scope)
    scope = getScope();
  for (const key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length; ) {
        if (handlers[i].scope === scope)
          handlers.splice(i, 1);
        else
          i++;
      }
    }
  }
  if (getScope() === scope)
    setScope(newScope || "all");
}
function clearModifier(event) {
  let key = event.keyCode || event.which || event.charCode;
  const i = _downKeys.indexOf(key);
  if (i >= 0) {
    _downKeys.splice(i, 1);
  }
  if (event.key && event.key.toLowerCase() === "meta") {
    _downKeys.splice(0, _downKeys.length);
  }
  if (key === 93 || key === 224)
    key = 91;
  if (key in _mods) {
    _mods[key] = false;
    for (const k in _modifier)
      if (_modifier[k] === key)
        hotkeys[k] = false;
  }
}
function unbind(keysInfo) {
  if (typeof keysInfo === "undefined") {
    Object.keys(_handlers).forEach((key) => delete _handlers[key]);
  } else if (Array.isArray(keysInfo)) {
    keysInfo.forEach((info) => {
      if (info.key)
        eachUnbind(info);
    });
  } else if (typeof keysInfo === "object") {
    if (keysInfo.key)
      eachUnbind(keysInfo);
  } else if (typeof keysInfo === "string") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    let [scope, method] = args;
    if (typeof scope === "function") {
      method = scope;
      scope = "";
    }
    eachUnbind({
      key: keysInfo,
      scope,
      method,
      splitKey: "+"
    });
  }
}
const eachUnbind = (_ref2) => {
  let {
    key,
    scope,
    method,
    splitKey = "+"
  } = _ref2;
  const multipleKeys = getKeys(key);
  multipleKeys.forEach((originKey) => {
    const unbindKeys = originKey.split(splitKey);
    const len = unbindKeys.length;
    const lastKey = unbindKeys[len - 1];
    const keyCode = lastKey === "*" ? "*" : code(lastKey);
    if (!_handlers[keyCode])
      return;
    if (!scope)
      scope = getScope();
    const mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    _handlers[keyCode] = _handlers[keyCode].filter((record) => {
      const isMatchingMethod = method ? record.method === method : true;
      return !(isMatchingMethod && record.scope === scope && compareArray(record.mods, mods));
    });
  });
};
function eventHandler(event, handler, scope, element) {
  if (handler.element !== element) {
    return;
  }
  let modifiersMatch;
  if (handler.scope === scope || handler.scope === "all") {
    modifiersMatch = handler.mods.length > 0;
    for (const y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
          modifiersMatch = false;
        }
      }
    }
    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === "*") {
      handler.keys = [];
      handler.keys = handler.keys.concat(_downKeys);
      if (handler.method(event, handler) === false) {
        if (event.preventDefault)
          event.preventDefault();
        else
          event.returnValue = false;
        if (event.stopPropagation)
          event.stopPropagation();
        if (event.cancelBubble)
          event.cancelBubble = true;
      }
    }
  }
}
function dispatch(event, element) {
  const asterisk = _handlers["*"];
  let key = event.keyCode || event.which || event.charCode;
  if (!hotkeys.filter.call(this, event))
    return;
  if (key === 93 || key === 224)
    key = 91;
  if (_downKeys.indexOf(key) === -1 && key !== 229)
    _downKeys.push(key);
  ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((keyName) => {
    const keyNum = modifierMap[keyName];
    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === "metaKey" && event[keyName] && _downKeys.length === 3) {
      if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
        _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
      }
    }
  });
  if (key in _mods) {
    _mods[key] = true;
    for (const k in _modifier) {
      if (_modifier[k] === key)
        hotkeys[k] = true;
    }
    if (!asterisk)
      return;
  }
  for (const e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }
  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState("AltGraph")) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }
    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }
    _mods[17] = true;
    _mods[18] = true;
  }
  const scope = getScope();
  if (asterisk) {
    for (let i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === "keydown" && asterisk[i].keydown || event.type === "keyup" && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope, element);
      }
    }
  }
  if (!(key in _handlers))
    return;
  for (let i = 0; i < _handlers[key].length; i++) {
    if (event.type === "keydown" && _handlers[key][i].keydown || event.type === "keyup" && _handlers[key][i].keyup) {
      if (_handlers[key][i].key) {
        const record = _handlers[key][i];
        const {
          splitKey
        } = record;
        const keyShortcut = record.key.split(splitKey);
        const _downKeysCurrent = [];
        for (let a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }
        if (_downKeysCurrent.sort().join("") === _downKeys.sort().join("")) {
          eventHandler(event, record, scope, element);
        }
      }
    }
  }
}
function isElementBind(element) {
  return elementHasBindEvent.indexOf(element) > -1;
}
function hotkeys(key, option, method) {
  _downKeys = [];
  const keys = getKeys(key);
  let mods = [];
  let scope = "all";
  let element = document;
  let i = 0;
  let keyup = false;
  let keydown = true;
  let splitKey = "+";
  let capture = false;
  let single = false;
  if (method === void 0 && typeof option === "function") {
    method = option;
  }
  if (Object.prototype.toString.call(option) === "[object Object]") {
    if (option.scope)
      scope = option.scope;
    if (option.element)
      element = option.element;
    if (option.keyup)
      keyup = option.keyup;
    if (option.keydown !== void 0)
      keydown = option.keydown;
    if (option.capture !== void 0)
      capture = option.capture;
    if (typeof option.splitKey === "string")
      splitKey = option.splitKey;
    if (option.single === true)
      single = true;
  }
  if (typeof option === "string")
    scope = option;
  if (single)
    unbind(key, scope);
  for (; i < keys.length; i++) {
    key = keys[i].split(splitKey);
    mods = [];
    if (key.length > 1)
      mods = getMods(_modifier, key);
    key = key[key.length - 1];
    key = key === "*" ? "*" : code(key);
    if (!(key in _handlers))
      _handlers[key] = [];
    _handlers[key].push({
      keyup,
      keydown,
      scope,
      mods,
      shortcut: keys[i],
      method,
      key: keys[i],
      splitKey,
      element
    });
  }
  if (typeof element !== "undefined" && !isElementBind(element) && window) {
    elementHasBindEvent.push(element);
    addEvent(element, "keydown", (e) => {
      dispatch(e, element);
    }, capture);
    if (!winListendFocus) {
      winListendFocus = true;
      addEvent(window, "focus", () => {
        _downKeys = [];
      }, capture);
    }
    addEvent(element, "keyup", (e) => {
      dispatch(e, element);
      clearModifier(e);
    }, capture);
  }
}
function trigger(shortcut) {
  let scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(_handlers).forEach((key) => {
    const dataList = _handlers[key].filter((item) => item.scope === scope && item.shortcut === shortcut);
    dataList.forEach((data) => {
      if (data && data.method) {
        data.method();
      }
    });
  });
}
const _api = {
  getPressedKeyString,
  setScope,
  getScope,
  deleteScope,
  getPressedKeyCodes,
  getAllKeyCodes,
  isPressed,
  filter,
  trigger,
  unbind,
  keyMap: _keyMap,
  modifier: _modifier,
  modifierMap
};
for (const a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}
if (typeof window !== "undefined") {
  const _hotkeys = window.hotkeys;
  hotkeys.noConflict = (deep) => {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }
    return hotkeys;
  };
  window.hotkeys = hotkeys;
}
const _withScopeId$f = (n) => (pushScopeId("data-v-04087243"), n = n(), popScopeId(), n);
const _hoisted_1$j = { class: "relative w-[300px]" };
const _hoisted_2$h = {
  class: "tooltips absolute z-10 bg-[var(--dialog-bg)] rounded-[6px] px-3 py-2 text-[var(--text-color)] text-sm shadow-md",
  style: { top: `${-80}px`, left: 0, right: 0, margin: "auto" }
};
const _hoisted_3$g = { class: "flex flex-row gap-1 justify-center" };
const _hoisted_4$g = /* @__PURE__ */ _withScopeId$f(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-400" }, "e.g.", -1));
const _hoisted_5$e = { class: "rounded bg-gray-300 w-6 h-6 leading-6 text-gray-400 text-center flex items-center justify-center shadow-lg" };
const _hoisted_6$e = { class: "bg-gray-300 text-center" };
const _hoisted_7$c = { class: "rounded bg-gray-300 w-6 h-6 leading-6 text-gray-400 text-center flex items-center justify-center shadow-lg" };
const _hoisted_8$c = { class: "bg-gray-300 text-center" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "shortCut",
  props: {
    shortcut: {
      type: String,
      default: ""
    }
  },
  emits: ["update:shortcut"],
  setup(__props, { emit }) {
    const recording = ref(false);
    const shortcut = ref([]);
    const electronShortcut = ref([]);
    const hint = ref({
      content: "Press any key to record shortcut",
      color: "var(--text-color)"
    });
    const onKeyUp = () => {
      setTimeout(() => {
        recording.value = false;
      }, 1e3);
    };
    watch(
      () => recording.value,
      (newProp) => {
        if (newProp) {
          startRecording();
        } else {
          shortcut.value = [];
          hint.value.content = "Press any key to record shortcut";
          hint.value.color = "var(--text-color)";
          document.removeEventListener("keyup", onKeyUp);
          hotkeys.unbind("*");
        }
      }
    );
    const startRecording = () => {
      document.addEventListener("keyup", onKeyUp);
      electronShortcut.value = [];
      hotkeys("*", (e) => {
        e.preventDefault();
        shortcut.value = hotkeys.getPressedKeyString();
        if (shortcut.value.indexOf("⌥") === -1 && shortcut.value.indexOf("⌃") === -1 && shortcut.value.indexOf("⇧") === -1 && shortcut.value.indexOf("⌘") === -1) {
          hint.value.color = "var(--el-color-error)";
          hint.value.content = "At least one modifier key is required";
          hotkeys.unbind("*");
          setTimeout(() => {
            recording.value = false;
          }, 1e3);
          return;
        }
        if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18 && e.keyCode !== 91) {
          hotkeys.unbind("*");
          setTimeout(() => {
            recording.value = false;
          }, 1e3);
          hint.value.color = "var(--el-color-success)";
          hint.value.content = "Shortcut recorded successfully";
          emit("update:shortcut", shortcut.value.join(" "));
          return;
        }
        console.log(hotkeys.getPressedKeyCodes());
        console.log(hotkeys.getPressedKeyString());
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          class: "fixed inset-0 z-10",
          onClick: _cache[0] || (_cache[0] = ($event) => recording.value = !recording.value),
          style: normalizeStyle({ display: recording.value ? "flex" : "none" })
        }, null, 4),
        createBaseVNode("div", _hoisted_1$j, [
          withDirectives(createBaseVNode("div", _hoisted_2$h, [
            createBaseVNode("div", _hoisted_3$g, [
              shortcut.value.length == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _hoisted_4$g,
                (openBlock(), createElementBlock(Fragment, null, renderList(["⌘", "⇧", "A"], (key) => {
                  return createBaseVNode("div", _hoisted_5$e, [
                    createBaseVNode("span", _hoisted_6$e, toDisplayString(key), 1)
                  ]);
                }), 64))
              ], 64)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(shortcut.value, (key) => {
                return openBlock(), createElementBlock("div", _hoisted_7$c, [
                  createBaseVNode("span", _hoisted_8$c, toDisplayString(key), 1)
                ]);
              }), 256))
            ]),
            createBaseVNode("div", {
              style: normalizeStyle({ color: hint.value.color }),
              class: "text-center"
            }, toDisplayString(hint.value.content), 5)
          ], 512), [
            [vShow, recording.value]
          ]),
          createBaseVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => recording.value = !recording.value)
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ])
      ]);
    };
  }
});
const shortCut_vue_vue_type_style_index_0_scoped_04087243_lang = "";
const shortCut = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-04087243"]]);
const _withScopeId$e = (n) => (pushScopeId("data-v-9ffa6d27"), n = n(), popScopeId(), n);
const _hoisted_1$i = { class: "setting" };
const _hoisted_2$g = { class: "w-[252px] h-[899px] px-5 pt-8 pb-[751px] border-r border-neutral-700 flex-col justify-start items-start gap-2.5 inline-flex" };
const _hoisted_3$f = { class: "flex-col justify-start items-start gap-5 flex" };
const _hoisted_4$f = { class: "w-5 h-5 relative" };
const _hoisted_5$d = ["stroke"];
const _hoisted_6$d = { class: "w-5 h-5 relative" };
const _hoisted_7$b = ["stroke"];
const _hoisted_8$b = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-sm font-['RobotoMedium'] leading-normal cursor-pointer" }, "FastPanel", -1));
const _hoisted_9$b = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "justify-start items-start gap-2 flex" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "w-5 h-5 relative bg-[#292D32] rounded text-center" }, "⌘"),
  /* @__PURE__ */ createBaseVNode("div", { class: "w-5 h-5 relative bg-[#292D32] rounded text-center" }, "B")
], -1));
const _hoisted_10$a = [
  _hoisted_8$b,
  _hoisted_9$b
];
const _hoisted_11$a = { class: "setting-content" };
const _hoisted_12$9 = {
  key: 0,
  class: "form"
};
const _hoisted_13$9 = { class: "flex flex-col gap-6" };
const _hoisted_14$9 = { class: "flex flex-row items-center gap-2" };
const _hoisted_15$8 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-right text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " Startup ", -1));
const _hoisted_16$7 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, " Launch Benchyard at Login ", -1));
const _hoisted_17$6 = { class: "flex flex-row items-center gap-2" };
const _hoisted_18$6 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-right text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " FastPanel ", -1));
const _hoisted_19$6 = { class: "w-[294px] h-9 px-[120px] py-2 bg-zinc-600 rounded-lg flex-col justify-center items-center gap-2 inline-flex" };
const _hoisted_20$6 = { class: "text-white text-center text-sm font-['RobotoMedium'] leading-[14px] cursor-pointer w-[100px]" };
const _hoisted_21$5 = { class: "flex flex-row items-center gap-2" };
const _hoisted_22$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-right text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " Menu bar icon ", -1));
const _hoisted_23$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, " Show Benchyard in menu bar ", -1));
const _hoisted_24$5 = {
  key: 1,
  class: "form"
};
const _hoisted_25$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_26$5 = { style: { "position": "relative" } };
const _hoisted_27$5 = ["src"];
const _hoisted_28$5 = {
  key: 1,
  class: "headimg-txt"
};
const _hoisted_29$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("svg", { class: "img-edit" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#edit" })
], -1));
const _hoisted_30$5 = { class: "flex items-center gap-x-2 relative" };
const _hoisted_31$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "shrink-0 basis-[400px]" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "font-normal text-[12px] font-[RobotoRegular] text-black" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "text-white" }, "Allow "),
    /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-white font-[RobotoRegular]" }, "Benchyard"),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-white font-[RobotoRegular]" }, " to use your data for better user experience, based on"),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-[rgb(124,135,142)]" }),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-[rgb(124,130,255)] font-[RobotoRegular]" }, " Benchyard Privacy Policy")
  ])
], -1));
const _hoisted_32$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { style: { "width": "320px", "display": "flex", "flex-direction": "row", "justify-content": "space-between" } }, [
  /* @__PURE__ */ createBaseVNode("div", null, "English"),
  /* @__PURE__ */ createBaseVNode("div", { style: { "font-size": "30px" } }, "🇺🇸")
], -1));
const _hoisted_33$5 = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { style: { "width": "320px", "display": "flex", "flex-direction": "row", "justify-content": "space-between" } }, [
  /* @__PURE__ */ createBaseVNode("div", null, "Chinese"),
  /* @__PURE__ */ createBaseVNode("div", { style: { "font-size": "30px" } }, "🇨🇳")
], -1));
const _hoisted_34$5 = {
  key: 2,
  class: "form"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "settings",
  setup(__props) {
    const uploadUrl = baseUrl + "/api/user/info/avatar";
    const ruleFormRef = ref();
    const form = ref("Profile");
    const language = ref("1");
    const authStore = useAuthStore();
    const imgloading = ref(false);
    const formData1 = reactive({
      username: authStore.getUserInfo.username,
      email: authStore.getUserInfo.email,
      about: "Hi, there! I am using Vue3 Admin.",
      privacy: false
    });
    const formData2 = reactive({
      pass: "",
      newPass: "",
      checkPass: ""
    });
    const rules1 = reactive({
      username: [{ required: true, message: "Please input username", trigger: "blur" }]
    });
    const validatePass = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (formData2.checkPass !== "") {
          if (!ruleFormRef.value)
            return;
          ruleFormRef.value.validateField("checkPass", () => null);
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== formData2.newPass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const rules2 = reactive({
      password: [
        { required: true, message: "Please input password", trigger: "blur" },
        { min: 8, max: 32, message: "Length should be 8 to 32", trigger: "blur" },
        { validator: validatePass, trigger: "blur" }
      ],
      checkPass: [
        { required: true, message: "Please input password", trigger: "blur" },
        { validator: validatePass2, trigger: "blur" }
      ]
    });
    const beforeAvatarUpload = (rawFile) => {
      if (rawFile.type !== "image/jpeg" && rawFile.type !== "image/png") {
        ElMessage.error("Avatar picture must be JPG/PNG format!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error("Avatar picture size can not exceed 2MB!");
        return false;
      }
      imgloading.value = true;
      return true;
    };
    const handleAvatarSuccess = (response) => {
      console.log(response);
      apiUserInfo().then((res) => {
        authStore.setLogin(res.data);
        imgloading.value = false;
      });
      ElMessage({ message: "Avatar change success", type: "success", duration: 3e3 });
    };
    const uploadHeader = {
      Authorization: "Bearer " + authStore.token
    };
    const defaultHeadImgTxt = () => {
      console.log(authStore.getUserInfo);
      return authStore.getUserInfo.username.charAt(0).toUpperCase();
    };
    const submitSettings = () => {
      console.log(formData1);
    };
    const appSetting = reactive({
      lunchAtlogin: false,
      shortCutKey: "⌘  ⇧  A",
      showTray: true
    });
    watch(() => appSetting, (newProp) => {
      console.log(newProp);
      window.api?.appSetting(JSON.stringify(newProp));
    }, { deep: true });
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_button = resolveComponent("el-button");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createBaseVNode("div", _hoisted_2$g, [
          createBaseVNode("div", _hoisted_3$f, [
            createBaseVNode("div", {
              onClick: _cache[0] || (_cache[0] = ($event) => form.value = "Profile"),
              style: normalizeStyle({ borderColor: form.value === "Profile" ? "white" : "#7C878E" }),
              class: "w-[212px] px-6 py-3 rounded-lg border border-indigo-400 justify-start items-center gap-2 inline-flex"
            }, [
              (openBlock(), createElementBlock("svg", _hoisted_4$f, [
                createBaseVNode("use", {
                  stroke: form.value === "Profile" ? "white" : "#7C878E",
                  href: "#profile"
                }, null, 8, _hoisted_5$d)
              ])),
              createBaseVNode("div", {
                style: normalizeStyle({ color: form.value === "Profile" ? "white" : "#7C878E" }),
                class: "w-[136px]text-sm font-['RobotoMedium'] leading-normal cursor-pointer"
              }, " Profile ", 4)
            ], 4),
            createBaseVNode("div", {
              onClick: _cache[1] || (_cache[1] = ($event) => form.value = "FastPanel"),
              style: normalizeStyle({ borderColor: form.value === "FastPanel" ? "white" : "#7C878E" }),
              class: "w-[212px] px-6 py-3 rounded-lg border justify-start items-center gap-2 inline-flex"
            }, [
              (openBlock(), createElementBlock("svg", _hoisted_6$d, [
                createBaseVNode("use", {
                  stroke: form.value === "FastPanel" ? "white" : "#7C878E",
                  href: "#fastPanel"
                }, null, 8, _hoisted_7$b)
              ])),
              createBaseVNode("div", {
                style: normalizeStyle({ color: form.value === "FastPanel" ? "white" : "#7C878E" }),
                class: "justify-center items-center gap-[26px] flex"
              }, _hoisted_10$a, 4)
            ], 4)
          ])
        ]),
        createBaseVNode("div", _hoisted_11$a, [
          form.value === "FastPanel" ? (openBlock(), createElementBlock("div", _hoisted_12$9, [
            createBaseVNode("div", _hoisted_13$9, [
              createBaseVNode("div", _hoisted_14$9, [
                _hoisted_15$8,
                createVNode(_component_el_checkbox, {
                  modelValue: appSetting.lunchAtlogin,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appSetting.lunchAtlogin = $event),
                  size: "large",
                  style: { "zoom": "1.4" }
                }, null, 8, ["modelValue"]),
                _hoisted_16$7
              ]),
              createBaseVNode("div", _hoisted_17$6, [
                _hoisted_18$6,
                createVNode(shortCut, {
                  shortcut: appSetting.shortCutKey,
                  "onUpdate:shortcut": _cache[3] || (_cache[3] = ($event) => appSetting.shortCutKey = $event)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_19$6, [
                      createBaseVNode("div", _hoisted_20$6, toDisplayString(appSetting.shortCutKey), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["shortcut"])
              ]),
              createBaseVNode("div", _hoisted_21$5, [
                _hoisted_22$5,
                createVNode(_component_el_checkbox, {
                  modelValue: appSetting.showTray,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => appSetting.showTray = $event),
                  size: "large",
                  style: { "zoom": "1.4" }
                }, null, 8, ["modelValue"]),
                _hoisted_23$5
              ])
            ])
          ])) : createCommentVNode("", true),
          form.value === "Profile" || form.value === "Password" || form.value === "Language" ? (openBlock(), createElementBlock("div", _hoisted_24$5, [
            _hoisted_25$5,
            form.value === "Profile" ? (openBlock(), createBlock(_component_el_form, {
              key: 0,
              ref: "ruleFormRef1",
              model: formData1,
              rules: rules1,
              "label-position": "top",
              style: { "width": "400px" }
            }, {
              default: withCtx(() => [
                withDirectives((openBlock(), createBlock(_component_el_upload, {
                  class: "avatar-uploader",
                  action: uploadUrl,
                  "show-file-list": false,
                  headers: uploadHeader,
                  "on-success": handleAvatarSuccess,
                  "before-upload": beforeAvatarUpload
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_26$5, [
                      unref(authStore).getUserInfo.avatar ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: unref(authStore).getUserInfo.avatar,
                        width: "72",
                        height: "72",
                        class: "headImg",
                        alt: ""
                      }, null, 8, _hoisted_27$5)) : (openBlock(), createElementBlock("div", _hoisted_28$5, toDisplayString(defaultHeadImgTxt()), 1)),
                      _hoisted_29$5
                    ])
                  ]),
                  _: 1
                })), [
                  [_directive_loading, imgloading.value]
                ]),
                createVNode(_component_el_form_item, { label: "Username" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: formData1.username,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData1.username = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "Email" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      disabled: "",
                      modelValue: formData1.email,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData1.email = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_30$5, [
                  createVNode(_component_el_checkbox, {
                    modelValue: formData1.privacy,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData1.privacy = $event),
                    size: "large",
                    style: { "zoom": "1.4" }
                  }, null, 8, ["modelValue"]),
                  _hoisted_31$5
                ])
              ]),
              _: 1
            }, 8, ["model", "rules"])) : createCommentVNode("", true),
            form.value === "Password" ? (openBlock(), createBlock(_component_el_form, {
              key: 1,
              ref: "ruleFormRef2",
              model: formData2,
              rules: rules2,
              "label-position": "top",
              style: { "width": "338px" }
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { label: "Current passowrd" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: formData2.pass,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData2.pass = $event),
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "New password" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: formData2.newPass,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData2.newPass = $event),
                      autosize: { minRows: 4 },
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "Confirm new password" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: formData2.checkPass,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData2.checkPass = $event),
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])) : createCommentVNode("", true),
            form.value === "Language" ? (openBlock(), createBlock(_component_el_form, {
              key: 2,
              "label-position": "top",
              style: { "width": "338px" }
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: language.value,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => language.value = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, {
                          label: "1",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            _hoisted_32$5
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, {
                          label: "2",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            _hoisted_33$5
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            form.value === "Password" || form.value === "Profile" ? (openBlock(), createBlock(_component_el_button, {
              key: 3,
              type: "primary",
              style: { "width": "338px", "padding": "13px 16px", "border-radius": "8px", "height": "40px" },
              onClick: submitSettings
            }, {
              default: withCtx(() => [
                createTextVNode(" Save changes ")
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          form.value === "Management" || form.value === "Privacy" ? (openBlock(), createElementBlock("div", _hoisted_34$5, [
            form.value === "Management" ? (openBlock(), createBlock(management, { key: 0 })) : createCommentVNode("", true),
            form.value === "Privacy" ? (openBlock(), createBlock(_sfc_main$l, { key: 1 })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const settings_vue_vue_type_style_index_0_scoped_9ffa6d27_lang = "";
const setting = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-9ffa6d27"]]);
const loadingAnimation_vue_vue_type_style_index_0_scoped_ba575b6b_lang = "";
const _sfc_main$i = {};
const _withScopeId$d = (n) => (pushScopeId("data-v-ba575b6b"), n = n(), popScopeId(), n);
const _hoisted_1$h = { class: "lds-ellipsis" };
const _hoisted_2$f = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_3$e = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_4$e = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_5$c = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_6$c = [
  _hoisted_2$f,
  _hoisted_3$e,
  _hoisted_4$e,
  _hoisted_5$c
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$h, _hoisted_6$c);
}
const loading = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$1], ["__scopeId", "data-v-ba575b6b"]]);
const _withScopeId$c = (n) => (pushScopeId("data-v-adfaae11"), n = n(), popScopeId(), n);
const _hoisted_1$g = ["src"];
const _hoisted_2$e = {
  key: 0,
  class: "message-text"
};
const _hoisted_3$d = { key: 1 };
const _hoisted_4$d = {
  key: 0,
  style: { "display": "flex" }
};
const _hoisted_5$b = ["id"];
const _hoisted_6$b = { class: "flex flex-row gap-3" };
const _hoisted_7$a = ["onClick"];
const _hoisted_8$a = { class: "relative m-3" };
const _hoisted_9$a = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_10$9 = { class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]" };
const _hoisted_11$9 = { class: "flex-col" };
const _hoisted_12$8 = { class: "truncate w-40" };
const _hoisted_13$8 = { class: "text-sm" };
const _hoisted_14$8 = { class: "m-3" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "scrollMessage",
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const scrollView = ref(null);
    return (_ctx, _cache) => {
      const _component_v_md_preview = resolveComponent("v-md-preview");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollView",
        ref: scrollView,
        class: "messages"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.chat.messages, (msg, index) => {
          return openBlock(), createElementBlock("div", {
            class: "message",
            style: normalizeStyle({ justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }),
            key: index
          }, [
            msg.role != "user" ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "h-8 w-8",
              src: msg.avatar,
              alt: ""
            }, null, 8, _hoisted_1$g)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: "flex flex-col w-full",
              style: normalizeStyle({ alignItems: msg.role === "user" ? "end" : "start" })
            }, [
              typeof msg.content === "string" && msg.content.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "message-content",
                style: normalizeStyle({ background: msg.role === "user" ? "transparent" : "" })
              }, [
                msg.role === "user" ? (openBlock(), createElementBlock("span", _hoisted_2$e, [
                  createVNode(_component_v_md_preview, {
                    style: normalizeStyle([{ "word-break": "normal", "background-color": "transparent !important" }, { textAlign: "left" }]),
                    text: msg.content
                  }, null, 8, ["text"])
                ])) : (openBlock(), createElementBlock("div", _hoisted_3$d, [
                  typeof msg.content === "string" && msg.content.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_4$d, [
                    createVNode(loading)
                  ])) : (openBlock(), createBlock(_component_v_md_preview, {
                    key: 1,
                    style: normalizeStyle([{ "word-break": "normal" }, { textAlign: "left" }]),
                    text: msg.content
                  }, null, 8, ["text"]))
                ]))
              ], 4)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(msg.refs, (ref2) => {
                return openBlock(), createElementBlock("div", {
                  id: msg.id,
                  class: "ref"
                }, [
                  createBaseVNode("div", _hoisted_6$b, [
                    createBaseVNode("div", null, "File name:" + toDisplayString(ref2.filename), 1),
                    createBaseVNode("div", null, "Page:" + toDisplayString(ref2.page), 1),
                    createBaseVNode("div", null, "Position:" + toDisplayString(ref2.position), 1)
                  ]),
                  createBaseVNode("div", null, "Content:" + toDisplayString(ref2.page_content), 1)
                ], 8, _hoisted_5$b);
              }), 256))
            ], 4),
            typeof msg.content === "object" ? (openBlock(), createElementBlock("div", {
              key: 1,
              onClick: ($event) => msg.dialogVisible = true,
              class: "shadow p-1 rounded-xl bg-black flex items-center"
            }, [
              createBaseVNode("div", _hoisted_8$a, [
                _hoisted_9$a,
                createBaseVNode("div", _hoisted_10$9, toDisplayString(msg.content.filename.match(/^(.*?)\.([^.]+)$/)[2]), 1)
              ]),
              createBaseVNode("div", _hoisted_11$9, [
                createBaseVNode("div", _hoisted_12$8, toDisplayString(msg.content.filename.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                createBaseVNode("div", _hoisted_13$8, toDisplayString(msg.content.size), 1)
              ]),
              createVNode(_component_el_dialog, {
                modelValue: msg.dialogVisible,
                "onUpdate:modelValue": ($event) => msg.dialogVisible = $event
              }, {
                header: withCtx(({}) => []),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_14$8, toDisplayString(msg.content.content), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])
            ], 8, _hoisted_7$a)) : createCommentVNode("", true)
          ], 4);
        }), 128))
      ], 512);
    };
  }
});
const scrollMessage_vue_vue_type_style_index_0_scoped_adfaae11_lang = "";
const scrollMessage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-adfaae11"]]);
const _withScopeId$b = (n) => (pushScopeId("data-v-3a5c0210"), n = n(), popScopeId(), n);
const _hoisted_1$f = {
  class: "input-area",
  style: {}
};
const _hoisted_2$d = { class: "flex flex-row justify-between items-center" };
const _hoisted_3$c = ["onKeydown"];
const _hoisted_4$c = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "file-upload",
  class: "rounded-xl cursor-pointer mr-3"
}, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "h-8 w-8 p-[7px]" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#uploadFile" })
  ])
], -1));
const _hoisted_5$a = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("use", { href: "#send" }, null, -1));
const _hoisted_6$a = [
  _hoisted_5$a
];
const _hoisted_7$9 = {
  key: 0,
  class: "flex gap-1 flex-wrap items-center"
};
const _hoisted_8$9 = ["onClick"];
const _hoisted_9$9 = { class: "relative m-3" };
const _hoisted_10$8 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_11$8 = {
  key: 0,
  class: "loader"
};
const _hoisted_12$7 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_13$7 = { class: "flex-col" };
const _hoisted_14$7 = { class: "truncate w-40" };
const _hoisted_15$7 = { class: "text-sm" };
const _hoisted_16$6 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_17$5 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_18$5 = ["onClick"];
const _hoisted_19$5 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_20$5 = [
  _hoisted_19$5
];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "inputArea",
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  emits: ["login"],
  setup(__props, { emit }) {
    const props = __props;
    const sendTo = ref("");
    const authStore = useAuthStore();
    const textareaId = "myTextarea" + props.chat.id;
    const inputAllChange = (e) => {
      innerHTML2SendTo(e.target.innerHTML);
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      textarea.style.height = "5px";
      textarea.style.height = textarea.scrollHeight + "px";
    };
    const enterToSend = (e) => {
      e.preventDefault();
      if (e.keyCode == 13 && !e.shiftKey) {
        const textarea = document.getElementById(textareaId);
        if (textarea == null)
          return;
        textarea.lastChild?.remove();
      }
      if (e.keyCode == 13) {
        if (!e.shiftKey) {
          sendMessage();
        } else {
          console.log("shift+enter");
          sendTo.value += "\n";
          const textarea = document.getElementById(textareaId);
          var selection = window.getSelection();
          if (textarea == null)
            return;
          if (selection == null)
            return;
          var range = selection.getRangeAt(0);
          var br = document.createElement("br");
          range.deleteContents();
          range.insertNode(br);
          range.setStartAfter(br);
          range.setEndAfter(br);
          selection.removeAllRanges();
          selection.addRange(range);
          moveCaretToVisible();
          textarea.style.height = textarea.scrollHeight + "px";
        }
      }
    };
    const sendMessage = () => {
      const chat = props.chat;
      if (chat.files.some((file) => file.loading)) {
        showInputMessage("Please wait for the loading");
        return;
      }
      if (sendTo.value.length === 0) {
        showInputMessage("Please input something,ok?");
        return;
      }
      if (authStore.getUserInfo == null) {
        emit("login");
        return;
      }
      chat.chatInstance.sendMessage(sendTo.value);
      chat.files = [];
      sendTo.value = "";
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      textarea.style.height = "5px";
      textarea.innerHTML = "";
    };
    const uploadFile = async (event) => {
      console.log("upload file");
      const files = event.target.files;
      if (files == null)
        return;
      const file = files[0];
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
      if (file.size > 2e7) {
        showInputMessage("File size is too large");
        return;
      }
      apiFileAdd({ id: props.chat.id, formData }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
      const input = document.getElementById("file-upload");
      if (input == null)
        return;
      input.value = "";
    };
    const showInputMessage = (string) => {
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      ElMessage({
        message: string,
        type: "info",
        offset: -50,
        duration: 1e3,
        appendTo: textarea
      });
    };
    const pasteTextAtCaret = (text) => {
      var sel, range;
      if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          var textNode = document.createTextNode(text);
          range.insertNode(textNode);
          range = range.cloneRange();
          range.setStartAfter(textNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    };
    const moveCaretToVisible = () => {
      console.log("moveCaretToVisible");
      const selection = window.getSelection();
      if (!selection?.rangeCount) {
        return;
      }
      const firstRange = selection.getRangeAt(0);
      if (firstRange.commonAncestorContainer === document) {
        return;
      }
      const tempAnchorEl = document.createElement("div");
      firstRange.insertNode(tempAnchorEl);
      tempAnchorEl.scrollIntoView();
      const range = document.createRange();
      range.setStart(tempAnchorEl, 0);
      range.collapse(true);
      var sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      tempAnchorEl.remove();
    };
    const addBrTolastChild = () => {
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      if (!textarea.lastChild || textarea.lastChild.nodeName.toLowerCase() != "br") {
        textarea.appendChild(document.createElement("br"));
      }
      if (textarea.innerHTML == "<br>") {
        textarea.innerHTML = "";
      }
    };
    const innerHTML2SendTo = (innerHTML) => {
      const chat = props.chat;
      sendTo.value = innerHTML;
      const regex = /<span contenteditable="false"><a style="color:#7C82FF">@(.{1,10})<\/a><\/span>/g;
      let match;
      const matchedBots = [];
      while ((match = regex.exec(sendTo.value)) !== null) {
        const value = match[1];
        matchedBots.push(value);
      }
      chat.members.forEach((m) => {
        m.isAt = false;
        if (matchedBots.length > 0) {
          if (matchedBots.includes(m.name) || matchedBots.includes("All")) {
            m.isAt = true;
          }
        }
      });
    };
    onMounted(() => {
      const Search = (text, cb) => {
        const value = [
          { key: "All", value: "All", icon: "/favicon.ico" }
        ];
        props.chat.members.forEach((m) => {
          value.push({ key: m.name, value: m.name, icon: m.avatar });
        });
        cb(value);
        console.log(text);
      };
      var tribute = new Tribute({
        trigger: "@",
        values: function(text, cb) {
          Search(text, (val) => cb(val));
        },
        menuItemTemplate: function(item) {
          return '<img class="icon" src="' + item.original.icon + '"><div style:"flex:1">' + item.string + "</div>";
        },
        selectTemplate: function(item) {
          return '<span contenteditable="false" ><a style="color:#7C82FF">@' + item.original.value + "</a></span>";
        }
      });
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      tribute.attach(textarea);
      textarea.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        pasteTextAtCaret(text);
        innerHTML2SendTo(textarea.innerHTML);
        textarea.style.height = "5px";
        textarea.style.height = textarea.scrollHeight + "px";
        moveCaretToVisible();
      });
    });
    return (_ctx, _cache) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createBaseVNode("div", _hoisted_2$d, [
          createBaseVNode("p", {
            id: textareaId,
            contenteditable: "",
            class: "text-area",
            placeholder: "send to all bot, or use @ to send to specific bot",
            onInput: inputAllChange,
            onKeydown: withKeys(enterToSend, ["enter"]),
            onKeyup: addBrTolastChild
          }, null, 40, _hoisted_3$c),
          _hoisted_4$c,
          createBaseVNode("input", {
            id: "file-upload",
            class: "hidden",
            onChange: uploadFile,
            type: "file",
            accept: " .pdf, .docx, .html, .xlsx"
          }, null, 32),
          (openBlock(), createElementBlock("svg", {
            onClick: sendMessage,
            class: "h-8 w-8 p-[7px] rounded-xl cursor-pointer"
          }, _hoisted_6$a))
        ]),
        __props.chat.files.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.chat.files, (file) => {
            return openBlock(), createElementBlock("div", {
              onClick: ($event) => file.dialogVisible = true,
              key: file.name,
              class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
            }, [
              createBaseVNode("div", _hoisted_9$9, [
                _hoisted_10$8,
                file.loading ? (openBlock(), createElementBlock("div", _hoisted_11$8)) : (openBlock(), createElementBlock("div", _hoisted_12$7, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
              ]),
              createBaseVNode("div", _hoisted_13$7, [
                createBaseVNode("div", _hoisted_14$7, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                createBaseVNode("div", _hoisted_15$7, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
              ]),
              createVNode(_component_el_dialog, {
                modelValue: file.dialogVisible,
                "onUpdate:modelValue": ($event) => file.dialogVisible = $event
              }, {
                header: withCtx(({}) => []),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_16$6, toDisplayString(file.content), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"]),
              createBaseVNode("div", _hoisted_17$5, [
                (openBlock(), createElementBlock("svg", {
                  onClick: withModifiers(($event) => __props.chat.files.splice(__props.chat.files.indexOf(file), 1), ["stop"]),
                  class: "h-5 w-5"
                }, _hoisted_20$5, 8, _hoisted_18$5))
              ])
            ], 8, _hoisted_8$9);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const inputArea_vue_vue_type_style_index_0_scoped_3a5c0210_lang = "";
const inputArea = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-3a5c0210"]]);
const _withScopeId$a = (n) => (pushScopeId("data-v-a32adc76"), n = n(), popScopeId(), n);
const _hoisted_1$e = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white font-[RobotoMedium] text-[20px]" }, " Create a new group chat ? ", -1));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "privateChat",
  props: {
    windowId: {
      type: String,
      required: true
    },
    allowDrop: {
      type: Boolean,
      default: true
    },
    chatId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const panelStore = usePanelStore();
    const privateChatStore = usePrivateChatStore();
    const ChatGroupStore = useChatGroupStore();
    const botStore = useBotStore();
    let currentBot = botStore.getBotByChatId(props.chatId);
    watch(() => props.chatId, (newProp) => {
      console.log(newProp);
      currentBot = botStore.getBotByChatId(newProp);
    });
    const showDialog = ref(false);
    const backgroundColor = ref("var(--window-bg)");
    const dropData = ref({
      type: "",
      id: "",
      title: "",
      avatar: ""
    });
    const dragenter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.allowDrop)
        return;
      backgroundColor.value = "var(--panel-bg)";
    };
    const dragleave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.allowDrop)
        return;
      backgroundColor.value = "var(--window-bg)";
    };
    const createGroup = () => {
      showDialog.value = false;
      const newGroup = {
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
        members: [
          {
            id: dropData.value.id,
            name: dropData.value.title,
            avatar: dropData.value.avatar
          },
          {
            id: currentBot.id,
            name: currentBot.title,
            avatar: currentBot.avatar
          }
        ],
        messages: [
          {
            id: (/* @__PURE__ */ new Date()).getTime().toString(),
            username: dropData.value.title,
            content: "Welcome to Benchyard, I am " + dropData.value.title,
            avatar: dropData.value.avatar
          },
          {
            id: (/* @__PURE__ */ new Date()).getTime().toString(),
            username: currentBot.title,
            content: "Welcome to Benchyard, I am " + currentBot.title,
            avatar: currentBot.avatar
          }
        ],
        type: "groupChat",
        sendTo: "",
        enableChatSend: true,
        files: [],
        title: "group"
      };
      ChatGroupStore.addGroup(newGroup);
      addTab(props.windowId, {
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
        title: "groupChat",
        editing: false,
        type: "groupChat",
        chatId: newGroup.id
      });
    };
    const drop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop");
      if (!props.allowDrop)
        return;
      backgroundColor.value = "var(--window-bg)";
      const data = e.dataTransfer?.getData("text/plain");
      if (data) {
        dropData.value = JSON.parse(data);
        const tab = panelStore.getWindowCurrentTabById(props.windowId);
        const bot = botStore.getBotByChatId(tab.chatId || "");
        if (dropData.value.type === "bot") {
          if (bot.id === dropData.value.id) {
            ElMessage({
              message: "This bot has already been added to the chat room",
              type: "warning"
            });
            return;
          }
          showDialog.value = true;
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "chat-room chat-room-origin",
          style: normalizeStyle({ backgroundColor: backgroundColor.value }),
          onDragenter: dragenter,
          onDragleave: dragleave,
          onDrop: drop,
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"]))
        }, [
          createVNode(scrollMessage, {
            chat: unref(privateChatStore).getPrivateChatById(props.chatId)
          }, null, 8, ["chat"]),
          createVNode(inputArea, {
            chat: unref(privateChatStore).getPrivateChatById(props.chatId)
          }, null, 8, ["chat"])
        ], 36),
        createVNode(_component_el_dialog, {
          modelValue: showDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => showDialog.value = $event),
          "show-close": false
        }, {
          footer: withCtx(() => [
            createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => showDialog.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode("Cancel")
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "primary",
              onClick: createGroup
            }, {
              default: withCtx(() => [
                createTextVNode("Confirm")
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            _hoisted_1$e
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const privateChat_vue_vue_type_style_index_0_scoped_a32adc76_lang = "";
const privateChat = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a32adc76"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "groupChat",
  props: {
    windowId: {
      type: String,
      required: true
    },
    allowDrop: {
      type: Boolean,
      default: true
    },
    chatId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const ChatGroupStore = useChatGroupStore();
    const backgroundColor = ref("var(--window-bg)");
    const dropData = ref({
      type: "",
      id: "",
      name: "",
      avatar: "",
      title: ""
    });
    const dragenter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.allowDrop)
        return;
      backgroundColor.value = "var(--panel-bg)";
    };
    const dragleave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.allowDrop)
        return;
      backgroundColor.value = "var(--window-bg)";
    };
    let chat = ChatGroupStore.getChatGroupById(props.chatId);
    watch(() => props.chatId, (newProp) => {
      console.log(newProp);
      chat = ChatGroupStore.getChatGroupById(newProp);
    });
    const drop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop");
      if (!props.allowDrop)
        return;
      backgroundColor.value = "var(--window-bg)";
      const data = e.dataTransfer?.getData("text/plain");
      if (data) {
        dropData.value = JSON.parse(data);
        if (dropData.value.type === "bot") {
          if (chat.members.find((member) => member.id === dropData.value.id)) {
            ElMessage({
              message: "This bot has been added to this group",
              type: "warning"
            });
            return;
          }
          chat.members.push({
            id: dropData.value.id,
            name: dropData.value.title,
            avatar: dropData.value.avatar
          });
          chat.messages.push({
            id: (/* @__PURE__ */ new Date()).getTime().toString(),
            username: dropData.value.title,
            content: "Welcome to Benchyard, I am " + dropData.value.title,
            avatar: dropData.value.avatar,
            cache: ""
          });
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "chat-room chat-room-origin",
        style: normalizeStyle({ backgroundColor: backgroundColor.value }),
        onDragenter: dragenter,
        onDragleave: dragleave,
        onDrop: drop,
        onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createVNode(scrollMessage, {
          chat: unref(ChatGroupStore).getChatGroupById(__props.chatId)
        }, null, 8, ["chat"]),
        createVNode(inputArea, {
          chat: unref(ChatGroupStore).getChatGroupById(__props.chatId)
        }, null, 8, ["chat"])
      ], 36);
    };
  }
});
const groupChat_vue_vue_type_style_index_0_scoped_812883ac_lang = "";
const groupChat = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-812883ac"]]);
const _sfc_main$d = defineComponent({
  props: {
    items: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    },
    showInfoIcon: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectedMask = ref({
      style: {
        top: "0px",
        left: "0px",
        width: "0px",
        height: "0px"
      }
    });
    const selectedIndex = ref(0);
    props.items.forEach((item, index) => {
      if (item.value === props.modelValue) {
        selectedIndex.value = index;
      }
    });
    onMounted(() => {
      nextTick(() => {
        getRect(selectedIndex.value);
      });
    });
    const selectItem = (index) => {
      selectedIndex.value = index;
      emit("update:modelValue", props.items[index].value);
      nextTick(() => {
        getRect(selectedIndex.value);
      });
    };
    const getRect = (index) => {
      const selectedDOM = document.getElementById(props.items[index].label);
      selectedMask.value.style.top = selectedDOM?.offsetTop + "px";
      selectedMask.value.style.left = selectedDOM?.offsetLeft + "px";
      selectedMask.value.style.width = selectedDOM?.offsetWidth + "px";
      selectedMask.value.style.height = selectedDOM?.offsetHeight + "px";
    };
    watch(() => props.items, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      nextTick(() => {
        getRect(selectedIndex.value);
      });
    });
    return {
      selectedIndex,
      selectItem,
      selectedMask
    };
  }
});
const switchMenu_vue_vue_type_style_index_0_scoped_428fa88d_lang = "";
const _withScopeId$9 = (n) => (pushScopeId("data-v-428fa88d"), n = n(), popScopeId(), n);
const _hoisted_1$d = { class: "menu" };
const _hoisted_2$c = ["id", "onClick"];
const _hoisted_3$b = {
  key: 0,
  style: { "height": "16px", "width": "16px", "margin-right": "10px" }
};
const _hoisted_4$b = ["href"];
const _hoisted_5$9 = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-4 h-4 object-cover min-h-[16px] cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#info" })
], -1));
const _hoisted_6$9 = {
  ref: "selectedMask",
  class: "selected-mask"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("ul", _hoisted_1$d, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
      return openBlock(), createElementBlock("li", {
        id: item.label,
        class: "icon",
        key: index,
        onClick: ($event) => _ctx.selectItem(index)
      }, [
        _ctx.modelValue === item.value && item.icon ? (openBlock(), createElementBlock("svg", _hoisted_3$b, [
          createBaseVNode("use", {
            href: item.icon
          }, null, 8, _hoisted_4$b)
        ])) : createCommentVNode("", true),
        createBaseVNode("span", {
          style: normalizeStyle({ color: _ctx.modelValue === item.value ? "#FFF" : "#7C878E" })
        }, toDisplayString(item.label), 5),
        _ctx.showInfoIcon ? (openBlock(), createBlock(_component_el_tooltip, {
          key: 1,
          effect: "dark",
          content: item.label,
          placement: "top-start"
        }, {
          default: withCtx(() => [
            _hoisted_5$9
          ]),
          _: 2
        }, 1032, ["content"])) : createCommentVNode("", true)
      ], 8, _hoisted_2$c);
    }), 128)),
    createBaseVNode("div", _hoisted_6$9, null, 512)
  ]);
}
const switchMenu = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render], ["__scopeId", "data-v-428fa88d"]]);
const _hoisted_1$c = { class: "flex flex-row items-center w-[103px] justify-between" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "numberComp",
  props: ["value", "max", "min", "step"],
  emits: ["update:value"],
  setup(__props, { emit }) {
    const props = __props;
    const iconColor1 = ref("#31363C");
    const iconColor2 = ref("#31363C");
    const add = () => {
      if (props.value < props.max) {
        const num = props.value + props.step;
        emit("update:value", parseFloat(num.toFixed(2)));
      }
    };
    const minus = () => {
      if (props.value > props.min) {
        const num = props.value - props.step;
        emit("update:value", parseFloat(num.toFixed(2)));
      }
    };
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(_component_el_icon, {
          onClick: minus,
          class: "cursor-pointer",
          color: iconColor1.value,
          onMouseenter: _cache[0] || (_cache[0] = ($event) => iconColor1.value = "var(--el-color-primary)"),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => iconColor1.value = "#31363C")
        }, {
          default: withCtx(() => [
            createVNode(unref(arrow_left_bold_default))
          ]),
          _: 1
        }, 8, ["color"]),
        createBaseVNode("div", null, toDisplayString(__props.value), 1),
        createVNode(_component_el_icon, {
          onClick: add,
          class: "cursor-pointer",
          onMouseenter: _cache[2] || (_cache[2] = ($event) => iconColor2.value = "var(--el-color-primary)"),
          onMouseleave: _cache[3] || (_cache[3] = ($event) => iconColor2.value = "#31363C"),
          color: iconColor2.value
        }, {
          default: withCtx(() => [
            createVNode(unref(arrow_right_bold_default))
          ]),
          _: 1
        }, 8, ["color"])
      ]);
    };
  }
});
const _withScopeId$8 = (n) => (pushScopeId("data-v-ffb63038"), n = n(), popScopeId(), n);
const _hoisted_1$b = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Model context length ", -1));
const _hoisted_2$b = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("div", { style: { "height": "20px" } }, null, -1));
const _hoisted_3$a = { key: 0 };
const _hoisted_4$a = { key: 1 };
const _hoisted_5$8 = { class: "flex flex-row w-full justify-between items-end" };
const _hoisted_6$8 = { class: "flex flex-row w-fit items-center gap-1" };
const _hoisted_7$8 = { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" };
const _hoisted_8$8 = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-4 h-4 object-cover min-h-[16px] cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#info" })
], -1));
const _hoisted_9$8 = { key: 2 };
const _hoisted_10$7 = ["onUpdate:modelValue"];
const _hoisted_11$7 = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " System Prompt ", -1));
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "botParamForm",
  props: ["modelParams", "showBasebotSetting", "initialBotParams"],
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const formData = ref({});
    const ctx_length = ref(0);
    const system_prompt = ref("");
    const items = ref([
      {
        label: "",
        value: 0
      }
    ]);
    watch(
      () => formData,
      () => {
        emitChange();
      },
      { deep: true }
    );
    watch(
      () => ctx_length,
      () => {
        emitChange();
      },
      { deep: true }
    );
    watch(
      () => system_prompt,
      () => {
        emitChange();
        console.log("system_prompt changed");
      },
      { deep: true }
    );
    watch(
      () => props.modelParams,
      () => {
        console.log("reset formData");
        init();
      },
      { deep: true }
    );
    const emitChange = () => {
      emit("change", {
        ctx_length: ctx_length.value,
        system_prompt: system_prompt.value,
        params: { ...formData.value }
        // params:{}
      });
    };
    const init = () => {
      formData.value = {};
      for (const key in props.modelParams.param_schema.properties) {
        if (Object.hasOwnProperty.call(props.modelParams.param_schema.properties, key)) {
          const element = props.modelParams.param_schema.properties[key];
          formData.value[key] = element.default;
        }
      }
      items.value = props.modelParams.ctx_length_list.map((item) => {
        return {
          label: item.toString(),
          value: item
        };
      });
      ctx_length.value = props.modelParams.ctx_length_list[0];
    };
    init();
    if (props.initialBotParams) {
      formData.value = props.initialBotParams.params;
      ctx_length.value = props.initialBotParams.ctx_length;
      system_prompt.value = props.initialBotParams.system_prompt;
    }
    return (_ctx, _cache) => {
      const _component_el_tooltip = resolveComponent("el-tooltip");
      const _component_el_slider = resolveComponent("el-slider");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "basebot-setting",
          style: normalizeStyle({ height: __props.showBasebotSetting ? "auto" : 0 })
        }, [
          _hoisted_1$b,
          createVNode(switchMenu, {
            "show-info-icon": false,
            items: items.value,
            modelValue: ctx_length.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ctx_length.value = $event)
          }, null, 8, ["items", "modelValue"]),
          _hoisted_2$b,
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.modelParams.param_schema.properties, (property, propName) => {
            return openBlock(), createElementBlock("div", { key: propName }, [
              property.type === "integer" ? (openBlock(), createElementBlock("div", _hoisted_3$a)) : property.type === "number" ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
                createBaseVNode("div", _hoisted_5$8, [
                  createBaseVNode("div", _hoisted_6$8, [
                    createBaseVNode("div", _hoisted_7$8, toDisplayString(property.title), 1),
                    createVNode(_component_el_tooltip, {
                      effect: "dark",
                      content: property.description,
                      placement: "top-start"
                    }, {
                      default: withCtx(() => [
                        _hoisted_8$8
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  createVNode(_sfc_main$c, {
                    value: formData.value[propName],
                    "onUpdate:value": ($event) => formData.value[propName] = $event,
                    min: property.exclusiveMinimum || property.minimum,
                    max: property.maximum || property.exclusiveMaximum,
                    step: 0.01
                  }, null, 8, ["value", "onUpdate:value", "min", "max"])
                ]),
                createVNode(_component_el_slider, {
                  class: "overflow-hidden",
                  max: property.maximum || property.exclusiveMaximum,
                  min: property.exclusiveMinimum || property.minimum,
                  step: 0.01,
                  modelValue: formData.value[propName],
                  "onUpdate:modelValue": ($event) => formData.value[propName] = $event
                }, null, 8, ["max", "min", "modelValue", "onUpdate:modelValue"])
              ])) : property.type === "boolean" ? (openBlock(), createElementBlock("div", _hoisted_9$8, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => formData.value[propName] = $event,
                  type: "checkbox"
                }, null, 8, _hoisted_10$7), [
                  [vModelCheckbox, formData.value[propName]]
                ])
              ])) : createCommentVNode("", true)
            ]);
          }), 128)),
          createBaseVNode("div", { class: "cursor-pointer w-[142px] h-11 px-5 py-3 bg-[var(--dialog-bg)] rounded-[6px] justify-center items-center flex mb-6" }, [
            createBaseVNode("div", {
              class: "text-white text-sm font-['RobotoMedium'] leading-normal",
              onClick: init
            }, " Restore default ")
          ])
        ], 4),
        _hoisted_11$7,
        createVNode(_component_el_form_item, null, {
          default: withCtx(() => [
            createVNode(_component_el_input, {
              resize: "none",
              type: "textarea",
              rows: 3,
              placeholder: "example: You are an expert on the solar system. Answer the following question in a concise and informative manner...",
              modelValue: system_prompt.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => system_prompt.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const botParamForm_vue_vue_type_style_index_0_scoped_ffb63038_lang = "";
const botParamForm = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-ffb63038"]]);
const M = {
  name: "splitpanes",
  emits: ["ready", "resize", "resized", "pane-click", "pane-maximize", "pane-add", "pane-remove", "splitter-click"],
  props: {
    horizontal: { type: Boolean },
    pushOtherPanes: { type: Boolean, default: true },
    dblClickSplitter: { type: Boolean, default: true },
    rtl: { type: Boolean, default: false },
    firstSplitter: { type: Boolean }
  },
  provide() {
    return {
      requestUpdate: this.requestUpdate,
      onPaneAdd: this.onPaneAdd,
      onPaneRemove: this.onPaneRemove,
      onPaneClick: this.onPaneClick
    };
  },
  data: () => ({
    container: null,
    ready: false,
    panes: [],
    touch: {
      mouseDown: false,
      dragging: false,
      activeSplitter: null
    },
    splitterTaps: {
      splitter: null,
      timeoutId: null
    }
  }),
  computed: {
    panesCount() {
      return this.panes.length;
    },
    indexedPanes() {
      return this.panes.reduce((e, i) => (e[i.id] = i) && e, {});
    }
  },
  methods: {
    updatePaneComponents() {
      this.panes.forEach((e) => {
        e.update && e.update({
          [this.horizontal ? "height" : "width"]: `${this.indexedPanes[e.id].size}%`
        });
      });
    },
    bindEvents() {
      document.addEventListener("mousemove", this.onMouseMove, { passive: false }), document.addEventListener("mouseup", this.onMouseUp), "ontouchstart" in window && (document.addEventListener("touchmove", this.onMouseMove, { passive: false }), document.addEventListener("touchend", this.onMouseUp));
    },
    unbindEvents() {
      document.removeEventListener("mousemove", this.onMouseMove, { passive: false }), document.removeEventListener("mouseup", this.onMouseUp), "ontouchstart" in window && (document.removeEventListener("touchmove", this.onMouseMove, { passive: false }), document.removeEventListener("touchend", this.onMouseUp));
    },
    onMouseDown(e, i) {
      this.bindEvents(), this.touch.mouseDown = true, this.touch.activeSplitter = i;
    },
    onMouseMove(e) {
      this.touch.mouseDown && (e.preventDefault(), this.touch.dragging = true, this.calculatePanesSize(this.getCurrentMouseDrag(e)), this.$emit("resize", this.panes.map((i) => ({ min: i.min, max: i.max, size: i.size }))));
    },
    onMouseUp() {
      this.touch.dragging && this.$emit("resized", this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size }))), this.touch.mouseDown = false, setTimeout(() => {
        this.touch.dragging = false, this.unbindEvents();
      }, 100);
    },
    onSplitterClick(e, i) {
      "ontouchstart" in window && (e.preventDefault(), this.dblClickSplitter && (this.splitterTaps.splitter === i ? (clearTimeout(this.splitterTaps.timeoutId), this.splitterTaps.timeoutId = null, this.onSplitterDblClick(e, i), this.splitterTaps.splitter = null) : (this.splitterTaps.splitter = i, this.splitterTaps.timeoutId = setTimeout(() => {
        this.splitterTaps.splitter = null;
      }, 500)))), this.touch.dragging || this.$emit("splitter-click", this.panes[i]);
    },
    onSplitterDblClick(e, i) {
      let s = 0;
      this.panes = this.panes.map((n, t) => (n.size = t === i ? n.max : n.min, t !== i && (s += n.min), n)), this.panes[i].size -= s, this.$emit("pane-maximize", this.panes[i]), this.$emit("resized", this.panes.map((n) => ({ min: n.min, max: n.max, size: n.size })));
    },
    onPaneClick(e, i) {
      this.$emit("pane-click", this.indexedPanes[i]);
    },
    getCurrentMouseDrag(e) {
      const i = this.container.getBoundingClientRect(), { clientX: s, clientY: n } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
      return {
        x: s - i.left,
        y: n - i.top
      };
    },
    getCurrentDragPercentage(e) {
      e = e[this.horizontal ? "y" : "x"];
      const i = this.container[this.horizontal ? "clientHeight" : "clientWidth"];
      return this.rtl && !this.horizontal && (e = i - e), e * 100 / i;
    },
    calculatePanesSize(e) {
      const i = this.touch.activeSplitter;
      let s = {
        prevPanesSize: this.sumPrevPanesSize(i),
        nextPanesSize: this.sumNextPanesSize(i),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      };
      const n = 0 + (this.pushOtherPanes ? 0 : s.prevPanesSize), t = 100 - (this.pushOtherPanes ? 0 : s.nextPanesSize), a = Math.max(Math.min(this.getCurrentDragPercentage(e), t), n);
      let r = [i, i + 1], o = this.panes[r[0]] || null, h2 = this.panes[r[1]] || null;
      const l = o.max < 100 && a >= o.max + s.prevPanesSize, u = h2.max < 100 && a <= 100 - (h2.max + this.sumNextPanesSize(i + 1));
      if (l || u) {
        l ? (o.size = o.max, h2.size = Math.max(100 - o.max - s.prevPanesSize - s.nextPanesSize, 0)) : (o.size = Math.max(100 - h2.max - s.prevPanesSize - this.sumNextPanesSize(i + 1), 0), h2.size = h2.max);
        return;
      }
      if (this.pushOtherPanes) {
        const d = this.doPushOtherPanes(s, a);
        if (!d)
          return;
        ({ sums: s, panesToResize: r } = d), o = this.panes[r[0]] || null, h2 = this.panes[r[1]] || null;
      }
      o !== null && (o.size = Math.min(Math.max(a - s.prevPanesSize - s.prevReachedMinPanes, o.min), o.max)), h2 !== null && (h2.size = Math.min(Math.max(100 - a - s.nextPanesSize - s.nextReachedMinPanes, h2.min), h2.max));
    },
    doPushOtherPanes(e, i) {
      const s = this.touch.activeSplitter, n = [s, s + 1];
      return i < e.prevPanesSize + this.panes[n[0]].min && (n[0] = this.findPrevExpandedPane(s).index, e.prevReachedMinPanes = 0, n[0] < s && this.panes.forEach((t, a) => {
        a > n[0] && a <= s && (t.size = t.min, e.prevReachedMinPanes += t.min);
      }), e.prevPanesSize = this.sumPrevPanesSize(n[0]), n[0] === void 0) ? (e.prevReachedMinPanes = 0, this.panes[0].size = this.panes[0].min, this.panes.forEach((t, a) => {
        a > 0 && a <= s && (t.size = t.min, e.prevReachedMinPanes += t.min);
      }), this.panes[n[1]].size = 100 - e.prevReachedMinPanes - this.panes[0].min - e.prevPanesSize - e.nextPanesSize, null) : i > 100 - e.nextPanesSize - this.panes[n[1]].min && (n[1] = this.findNextExpandedPane(s).index, e.nextReachedMinPanes = 0, n[1] > s + 1 && this.panes.forEach((t, a) => {
        a > s && a < n[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
      }), e.nextPanesSize = this.sumNextPanesSize(n[1] - 1), n[1] === void 0) ? (e.nextReachedMinPanes = 0, this.panes[this.panesCount - 1].size = this.panes[this.panesCount - 1].min, this.panes.forEach((t, a) => {
        a < this.panesCount - 1 && a >= s + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
      }), this.panes[n[0]].size = 100 - e.prevPanesSize - e.nextReachedMinPanes - this.panes[this.panesCount - 1].min - e.nextPanesSize, null) : { sums: e, panesToResize: n };
    },
    sumPrevPanesSize(e) {
      return this.panes.reduce((i, s, n) => i + (n < e ? s.size : 0), 0);
    },
    sumNextPanesSize(e) {
      return this.panes.reduce((i, s, n) => i + (n > e + 1 ? s.size : 0), 0);
    },
    findPrevExpandedPane(e) {
      return [...this.panes].reverse().find((s) => s.index < e && s.size > s.min) || {};
    },
    findNextExpandedPane(e) {
      return this.panes.find((s) => s.index > e + 1 && s.size > s.min) || {};
    },
    checkSplitpanesNodes() {
      Array.from(this.container.children).forEach((i) => {
        const s = i.classList.contains("splitpanes__pane"), n = i.classList.contains("splitpanes__splitter");
        !s && !n && (i.parentNode.removeChild(i), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      });
    },
    addSplitter(e, i, s = false) {
      const n = e - 1, t = document.createElement("div");
      t.classList.add("splitpanes__splitter"), s || (t.onmousedown = (a) => this.onMouseDown(a, n), typeof window < "u" && "ontouchstart" in window && (t.ontouchstart = (a) => this.onMouseDown(a, n)), t.onclick = (a) => this.onSplitterClick(a, n + 1)), this.dblClickSplitter && (t.ondblclick = (a) => this.onSplitterDblClick(a, n + 1)), i.parentNode.insertBefore(t, i);
    },
    removeSplitter(e) {
      e.onmousedown = void 0, e.onclick = void 0, e.ondblclick = void 0, e.parentNode.removeChild(e);
    },
    redoSplitters() {
      const e = Array.from(this.container.children);
      e.forEach((s) => {
        s.className.includes("splitpanes__splitter") && this.removeSplitter(s);
      });
      let i = 0;
      e.forEach((s) => {
        s.className.includes("splitpanes__pane") && (!i && this.firstSplitter ? this.addSplitter(i, s, true) : i && this.addSplitter(i, s), i++);
      });
    },
    requestUpdate({ target: e, ...i }) {
      const s = this.indexedPanes[e._.uid];
      Object.entries(i).forEach(([n, t]) => s[n] = t);
    },
    onPaneAdd(e) {
      let i = -1;
      Array.from(e.$el.parentNode.children).some((t) => (t.className.includes("splitpanes__pane") && i++, t === e.$el));
      const s = parseFloat(e.minSize), n = parseFloat(e.maxSize);
      this.panes.splice(i, 0, {
        id: e._.uid,
        index: i,
        min: isNaN(s) ? 0 : s,
        max: isNaN(n) ? 100 : n,
        size: e.size === null ? null : parseFloat(e.size),
        givenSize: e.size,
        update: e.update
      }), this.panes.forEach((t, a) => t.index = a), this.ready && this.$nextTick(() => {
        this.redoSplitters(), this.resetPaneSizes({ addedPane: this.panes[i] }), this.$emit("pane-add", { index: i, panes: this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })) });
      });
    },
    onPaneRemove(e) {
      const i = this.panes.findIndex((n) => n.id === e._.uid), s = this.panes.splice(i, 1)[0];
      this.panes.forEach((n, t) => n.index = t), this.$nextTick(() => {
        this.redoSplitters(), this.resetPaneSizes({ removedPane: { ...s, index: i } }), this.$emit("pane-remove", { removed: s, panes: this.panes.map((n) => ({ min: n.min, max: n.max, size: n.size })) });
      });
    },
    resetPaneSizes(e = {}) {
      !e.addedPane && !e.removedPane ? this.initialPanesSizing() : this.panes.some((i) => i.givenSize !== null || i.min || i.max < 100) ? this.equalizeAfterAddOrRemove(e) : this.equalize(), this.ready && this.$emit("resized", this.panes.map((i) => ({ min: i.min, max: i.max, size: i.size })));
    },
    equalize() {
      const e = 100 / this.panesCount;
      let i = 0;
      const s = [], n = [];
      this.panes.forEach((t) => {
        t.size = Math.max(Math.min(e, t.max), t.min), i -= t.size, t.size >= t.max && s.push(t.id), t.size <= t.min && n.push(t.id);
      }), i > 0.1 && this.readjustSizes(i, s, n);
    },
    initialPanesSizing() {
      let e = 100;
      const i = [], s = [];
      let n = 0;
      this.panes.forEach((a) => {
        e -= a.size, a.size !== null && n++, a.size >= a.max && i.push(a.id), a.size <= a.min && s.push(a.id);
      });
      let t = 100;
      e > 0.1 && (this.panes.forEach((a) => {
        a.size === null && (a.size = Math.max(Math.min(e / (this.panesCount - n), a.max), a.min)), t -= a.size;
      }), t > 0.1 && this.readjustSizes(e, i, s));
    },
    equalizeAfterAddOrRemove({ addedPane: e, removedPane: i } = {}) {
      let s = 100 / this.panesCount, n = 0;
      const t = [], a = [];
      e && e.givenSize !== null && (s = (100 - e.givenSize) / (this.panesCount - 1)), this.panes.forEach((r) => {
        n -= r.size, r.size >= r.max && t.push(r.id), r.size <= r.min && a.push(r.id);
      }), !(Math.abs(n) < 0.1) && (this.panes.forEach((r) => {
        e && e.givenSize !== null && e.id === r.id || (r.size = Math.max(Math.min(s, r.max), r.min)), n -= r.size, r.size >= r.max && t.push(r.id), r.size <= r.min && a.push(r.id);
      }), n > 0.1 && this.readjustSizes(n, t, a));
    },
    readjustSizes(e, i, s) {
      let n;
      e > 0 ? n = e / (this.panesCount - i.length) : n = e / (this.panesCount - s.length), this.panes.forEach((t, a) => {
        if (e > 0 && !i.includes(t.id)) {
          const r = Math.max(Math.min(t.size + n, t.max), t.min), o = r - t.size;
          e -= o, t.size = r;
        } else if (!s.includes(t.id)) {
          const r = Math.max(Math.min(t.size + n, t.max), t.min), o = r - t.size;
          e -= o, t.size = r;
        }
        t.update({
          [this.horizontal ? "height" : "width"]: `${this.indexedPanes[t.id].size}%`
        });
      }), Math.abs(e) > 0.1 && this.$nextTick(() => {
        this.ready && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
      });
    }
  },
  watch: {
    panes: {
      deep: true,
      immediate: false,
      handler() {
        this.updatePaneComponents();
      }
    },
    horizontal() {
      this.updatePaneComponents();
    },
    firstSplitter() {
      this.redoSplitters();
    },
    dblClickSplitter(e) {
      [...this.container.querySelectorAll(".splitpanes__splitter")].forEach((s, n) => {
        s.ondblclick = e ? (t) => this.onSplitterDblClick(t, n) : void 0;
      });
    }
  },
  beforeUnmount() {
    this.ready = false;
  },
  mounted() {
    this.container = this.$refs.container, this.checkSplitpanesNodes(), this.redoSplitters(), this.resetPaneSizes(), this.$emit("ready"), this.ready = true;
  },
  render() {
    return h(
      "div",
      {
        ref: "container",
        class: [
          "splitpanes",
          `splitpanes--${this.horizontal ? "horizontal" : "vertical"}`,
          {
            "splitpanes--dragging": this.touch.dragging
          }
        ]
      },
      this.$slots.default()
    );
  }
}, S = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [n, t] of i)
    s[n] = t;
  return s;
}, x = {
  name: "pane",
  inject: ["requestUpdate", "onPaneAdd", "onPaneRemove", "onPaneClick"],
  props: {
    size: { type: [Number, String], default: null },
    minSize: { type: [Number, String], default: 0 },
    maxSize: { type: [Number, String], default: 100 }
  },
  data: () => ({
    style: {}
  }),
  mounted() {
    this.onPaneAdd(this);
  },
  beforeUnmount() {
    this.onPaneRemove(this);
  },
  methods: {
    update(e) {
      this.style = e;
    }
  },
  computed: {
    sizeNumber() {
      return this.size || this.size === 0 ? parseFloat(this.size) : null;
    },
    minSizeNumber() {
      return parseFloat(this.minSize);
    },
    maxSizeNumber() {
      return parseFloat(this.maxSize);
    }
  },
  watch: {
    sizeNumber(e) {
      this.requestUpdate({ target: this, size: e });
    },
    minSizeNumber(e) {
      this.requestUpdate({ target: this, min: e });
    },
    maxSizeNumber(e) {
      this.requestUpdate({ target: this, max: e });
    }
  }
};
function P(e, i, s, n, t, a) {
  return openBlock(), createElementBlock("div", {
    class: "splitpanes__pane",
    onClick: i[0] || (i[0] = (r) => a.onPaneClick(r, e._.uid)),
    style: normalizeStyle(e.style)
  }, [
    renderSlot(e.$slots, "default")
  ], 4);
}
const g = /* @__PURE__ */ S(x, [["render", P]]);
const _withScopeId$7 = (n) => (pushScopeId("data-v-a6b011d5"), n = n(), popScopeId(), n);
const _hoisted_1$a = {
  class: "flex-row flex gap-6",
  style: { "height": "170px" }
};
const _hoisted_2$a = {
  for: "Bot-avatar-upload",
  class: "avatar-uploader"
};
const _hoisted_3$9 = { style: { "position": "relative" } };
const _hoisted_4$9 = {
  key: 0,
  class: "headimg-txt"
};
const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("use", { href: "#emptyAvatar" }, null, -1));
const _hoisted_6$7 = [
  _hoisted_5$7
];
const _hoisted_7$7 = ["src"];
const _hoisted_8$7 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("svg", { class: "img-edit" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "" })
], -1));
const _hoisted_9$7 = { class: "flex flex-col w-full" };
const _hoisted_10$6 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Base Bot ", -1));
const _hoisted_11$6 = { class: "w-full gap-3 flex flex-row" };
const _hoisted_12$6 = { class: "flex flex-row mr-[5px] ml-[5px]" };
const _hoisted_13$6 = ["src"];
const _hoisted_14$6 = { class: "flex flex-row ml-3 my-2" };
const _hoisted_15$6 = ["src"];
const _hoisted_16$5 = { class: "font-medium text-[14px] leading-[20px] font-Roboto text-[rgb(124,135,142)] pl-[14px]" };
const _hoisted_17$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("use", { href: "#modelSetting" }, null, -1));
const _hoisted_18$4 = [
  _hoisted_17$4
];
const _hoisted_19$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Upload files ", -1));
const _hoisted_20$4 = { class: "bot-file-uploader" };
const _hoisted_21$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "Bot-file-upload",
  style: { "position": "absolute", "inset": "0" }
}, null, -1));
const _hoisted_22$4 = {
  key: 0,
  class: "flex gap-1 flex-row items-center overflow-scroll pb-2"
};
const _hoisted_23$4 = ["onClick"];
const _hoisted_24$4 = { class: "relative m-3" };
const _hoisted_25$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_26$4 = {
  key: 0,
  class: "loader"
};
const _hoisted_27$4 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_28$4 = { class: "flex-col" };
const _hoisted_29$4 = { class: "truncate w-40 pr-5" };
const _hoisted_30$4 = { class: "text-sm" };
const _hoisted_31$4 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_32$4 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_33$4 = ["onClick"];
const _hoisted_34$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_35$4 = [
  _hoisted_34$4
];
const _hoisted_36$4 = {
  key: 1,
  for: "Bot-file-upload",
  class: "w-[432.22px] h-[54px] left-[183.47px] top-[32px] flex-col justify-start items-center gap-4 inline-flex"
};
const _hoisted_37$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 p-0.5 justify-center items-center inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_38$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-gray-500 text-[14px] font-['RobotoRegular'] leading-[14px]" }, " DOC, EXE, HTML or PDF files less than 10MB allowed ", -1));
const _hoisted_39$3 = [
  _hoisted_37$4,
  _hoisted_38$4
];
const _hoisted_40$3 = { class: "flex flex-row justify-end gap-4 relative" };
const _hoisted_41$3 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-[81px] h-11 px-6 py-3 rounded-[6px] border border-[#393E44] justify-center items-center gap-2 inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "cursor-pointer text-white text-sm font-['RobotoMedium'] leading-normal" }, " Preview ")
], -1));
const _hoisted_42$3 = { class: "text-white text-sm font-['RobotoMedium'] leading-normal" };
const _hoisted_43$2 = { class: "flex flex-row py-2 text-[rgb(124,135,142)] hover:text-white" };
const _hoisted_44$2 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "font-medium text-[14px] leading-[20px] font-['RobotoRegular'] pl-3" }, " Create secret bot ", -1));
const _hoisted_45$2 = {
  key: 0,
  class: "w-5 h-5 object-cover min-h-[16px] cursor-pointer ml-5"
};
const _hoisted_46$2 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("use", { href: "#tick" }, null, -1));
const _hoisted_47$2 = [
  _hoisted_46$2
];
const _hoisted_48$2 = { class: "flex flex-row py-2 text-[rgb(124,135,142)] hover:text-white" };
const _hoisted_49$2 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "font-medium text-[14px] leading-[20px] font-['RobotoRegular'] pl-3" }, " Create public bot ", -1));
const _hoisted_50$2 = {
  key: 0,
  class: "w-5 h-5 object-cover min-h-[16px] cursor-pointer ml-5"
};
const _hoisted_51$2 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("use", { href: "#tick" }, null, -1));
const _hoisted_52$2 = [
  _hoisted_51$2
];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "createBotTab",
  props: {
    bot: {
      type: Object || void 0
    }
  },
  emits: ["createBotSuccess"],
  setup(__props, { emit }) {
    const props = __props;
    const BotStore = useBotStore();
    const showBasebotSetting = ref(false);
    const filesToUpload = ref([]);
    const avatarToUpload = ref(null);
    const previewImage = ref("");
    const ShowCreateBot = ref(false);
    const CreateBotFormChange = (newVal) => {
      console.log(newVal);
      formData1.value.model_params = newVal;
    };
    const createBot2 = () => {
      console.log("createBot");
      for (const key in formData1.value.model_params.params) {
        if (formData1.value.model_params.params[key] === null) {
          delete formData1.value.model_params.params[key];
        }
      }
      apiBotCreate({
        name: formData1.value.title,
        description: formData1.value.description,
        // avatar: formData1.value.avatar ? formData1.value.avatar : "https://by.ai/assets/img/logo.png",
        visibility: formData1.value.visibility,
        model_name: selectModel.value.name,
        model_vendor: selectModel.value.vendor,
        model_params: { ...formData1.value.model_params }
      }).then(async (res) => {
        console.log("createdBot", res);
        const uploadFiles = async () => {
          for (const file of filesToUpload.value) {
            try {
              const loading2 = ElLoading.service({
                lock: true,
                text: "Uploading " + file.name,
                background: "rgba(0, 0, 0, 0.7)"
              });
              const formData = new FormData();
              formData.append("file", file);
              const response = await apiBotFileAdd({
                formData,
                id: res.data.id
              });
              console.log(response);
              loading2.close();
            } catch (error) {
              console.error(error);
            }
          }
          try {
            const formData = new FormData();
            formData.append("file", avatarToUpload.value);
            const response = await apiBotUploadAvatar({
              formData,
              id: res.data.id
            });
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        };
        await uploadFiles();
        ElMessage({ message: "success", type: "success", duration: 3e3 });
        ShowCreateBot.value = false;
        emit("createBotSuccess");
        updateBotList();
      });
    };
    const selectModel = ref(BotStore.getModelOptions[0]);
    const formData1 = ref({});
    if (props.bot) {
      formData1.value.title = props.bot.title;
      formData1.value.description = props.bot.description;
      formData1.value.avatar = props.bot.avatar;
      formData1.value.visibility = props.bot.visibility;
      formData1.value.model_name = props.bot.model_name;
      formData1.value.model_vendor = props.bot.model_vendor;
      formData1.value.model_params = props.bot.model_params;
      console.log("bot", props.bot);
      selectModel.value = BotStore.getModelOptions.find((item) => item.name === props.bot?.model_name);
    } else {
      formData1.value = {
        title: "",
        description: "",
        avatar: "",
        visibility: 1,
        model_name: BotStore.getModelOptions[0].name,
        model_vendor: BotStore.getModelOptions[0].vendor
      };
    }
    const selectionChange = (val) => {
      selectModel.value = BotStore.getModelOptions.find((item) => item.name === val);
    };
    const uploadFile = async (event) => {
      const files = event.target.files;
      if (!files)
        return;
      const file = files[0];
      console.log(file);
      if (file.size > 2e7) {
        return;
      }
      filesToUpload.value.push(file);
    };
    const uploadAvatar = (event) => {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        avatarToUpload.value = file;
        const reader = new FileReader();
        reader.onload = () => {
          previewImage.value = reader.result;
        };
        reader.readAsDataURL(file);
      }
      if (document.getElementById("Bot-avatar-upload")) {
        const input2 = document.getElementById("Bot-avatar-upload");
        input2.value = "";
      }
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(unref(M), { class: "flex flex-row h-full" }, {
        default: withCtx(() => [
          createVNode(unref(g), {
            "max-size": "70",
            "min-size": "50",
            style: { "overflow-y": "scroll", "background": "var(--window-bg) !important", "padding": "72px 48px" },
            class: "h-full promptBot panel"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                ref: "ruleFormRef1",
                model: formData1.value,
                "label-position": "top",
                style: { "width": "100%", "display": "flex", "flex-direction": "column", "justify-content": "center" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$a, [
                    createBaseVNode("input", {
                      id: "Bot-avatar-upload",
                      class: "hidden",
                      onChange: uploadAvatar,
                      type: "file",
                      accept: " .png, .jpg, .jpeg, .bmp, .gif, .svg,"
                    }, null, 32),
                    createBaseVNode("label", _hoisted_2$a, [
                      createBaseVNode("div", _hoisted_3$9, [
                        formData1.value.avatar == "" && previewImage.value == "" ? (openBlock(), createElementBlock("svg", _hoisted_4$9, _hoisted_6$7)) : (openBlock(), createElementBlock("img", {
                          key: 1,
                          class: "headimg-txt",
                          src: formData1.value.avatar || previewImage.value,
                          alt: ""
                        }, null, 8, _hoisted_7$7)),
                        _hoisted_8$7
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_9$7, [
                      createVNode(_component_el_form_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: formData1.value.title,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData1.value.title = $event),
                            class: "createBotInput",
                            placeholder: "Bot name (allow 2~32 word characters)"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            resize: "none",
                            type: "textarea",
                            modelValue: formData1.value.description,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData1.value.description = $event),
                            rows: 3,
                            placeholder: "Bot description"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _hoisted_10$6,
                  createBaseVNode("div", _hoisted_11$6, [
                    createVNode(_component_el_form_item, { class: "w-full flex-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: formData1.value.model_name,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData1.value.model_name = $event),
                          class: "w-full createBotInput",
                          onChange: selectionChange,
                          "suffix-icon": unref(arrow_down_bold_default)
                        }, {
                          prefix: withCtx(({}) => [
                            createBaseVNode("div", _hoisted_12$6, [
                              formData1.value.model_name ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                class: "rounded w-5 h-5 object-cover",
                                src: selectModel.value.avatar
                              }, null, 8, _hoisted_13$6)) : createCommentVNode("", true)
                            ])
                          ]),
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(BotStore).getModelOptions, (item) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item.name,
                                label: item.name,
                                value: item.name
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_14$6, [
                                    createBaseVNode("img", {
                                      class: "rounded w-5 h-5 object-cover",
                                      src: item.avatar
                                    }, null, 8, _hoisted_15$6),
                                    createBaseVNode("div", _hoisted_16$5, toDisplayString(item.name), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "suffix-icon"])
                      ]),
                      _: 1
                    }),
                    (openBlock(), createElementBlock("svg", {
                      class: "p-[14px] w-11 h-11 base-bot-setting cursor-pointer rounded-[6px]",
                      style: normalizeStyle({
                        background: showBasebotSetting.value ? "var(--el-color-primary)" : "transparent",
                        border: showBasebotSetting.value ? "none" : "1px solid #393E44",
                        padding: showBasebotSetting.value ? "13px" : "12px"
                      }),
                      onClick: _cache[3] || (_cache[3] = ($event) => showBasebotSetting.value = !showBasebotSetting.value)
                    }, _hoisted_18$4, 4))
                  ]),
                  createVNode(botParamForm, {
                    "initial-bot-params": formData1.value.model_params,
                    "show-basebot-setting": showBasebotSetting.value,
                    modelParams: selectModel.value,
                    onChange: CreateBotFormChange
                  }, null, 8, ["initial-bot-params", "show-basebot-setting", "modelParams"]),
                  _hoisted_19$4,
                  createBaseVNode("div", _hoisted_20$4, [
                    _hoisted_21$4,
                    filesToUpload.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_22$4, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filesToUpload.value, (file) => {
                        return openBlock(), createElementBlock("div", {
                          onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                          class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
                        }, [
                          createBaseVNode("div", _hoisted_24$4, [
                            _hoisted_25$4,
                            file.loading ? (openBlock(), createElementBlock("div", _hoisted_26$4)) : (openBlock(), createElementBlock("div", _hoisted_27$4, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                          ]),
                          createBaseVNode("div", _hoisted_28$4, [
                            createBaseVNode("div", _hoisted_29$4, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                            createBaseVNode("div", _hoisted_30$4, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                          ]),
                          createVNode(_component_el_dialog, {
                            modelValue: file.showContent,
                            "onUpdate:modelValue": ($event) => file.showContent = $event
                          }, {
                            header: withCtx(({}) => []),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_31$4, toDisplayString(file.content), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                          createBaseVNode("div", _hoisted_32$4, [
                            (openBlock(), createElementBlock("svg", {
                              onClick: withModifiers(($event) => filesToUpload.value.splice(filesToUpload.value.indexOf(file), 1), ["stop"]),
                              class: "h-5 w-5"
                            }, _hoisted_35$4, 8, _hoisted_33$4))
                          ])
                        ], 8, _hoisted_23$4);
                      }), 256))
                    ])) : (openBlock(), createElementBlock("label", _hoisted_36$4, _hoisted_39$3))
                  ]),
                  createBaseVNode("input", {
                    id: "Bot-file-upload",
                    class: "hidden",
                    onChange: uploadFile,
                    type: "file",
                    accept: " .pdf, .docx, .html, .xlsx"
                  }, null, 32)
                ]),
                _: 1
              }, 8, ["model"]),
              createBaseVNode("div", _hoisted_40$3, [
                _hoisted_41$3,
                createBaseVNode("div", {
                  onClick: createBot2,
                  class: "cursor-pointer absolute right-[40px] w-[143px] z-10 h-11 pl-3 pr-3 py-3 bg-[#5F44FF] rounded-tl-[6px] rounded-bl-[6px] justify-center items-center gap-2 inline-flex"
                }, [
                  createBaseVNode("div", _hoisted_42$3, toDisplayString(formData1.value.visibility === 2 ? "Create public bot" : "Create secret bot"), 1)
                ]),
                createVNode(_component_el_select, {
                  modelValue: formData1.value.visibility,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData1.value.visibility = $event),
                  class: "w-[183px] createBotButton",
                  "suffix-icon": unref(arrow_down_bold_default)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_option, { value: 1 }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_43$2, [
                          _hoisted_44$2,
                          formData1.value.visibility == 1 ? (openBlock(), createElementBlock("svg", _hoisted_45$2, _hoisted_47$2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_option, { value: 2 }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_48$2, [
                          _hoisted_49$2,
                          formData1.value.visibility == 2 ? (openBlock(), createElementBlock("svg", _hoisted_50$2, _hoisted_52$2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "suffix-icon"])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(g), {
            "max-size": "50",
            "min-size": "30",
            style: { "height": "100%" }
          })
        ]),
        _: 1
      });
    };
  }
});
const createBotTab_vue_vue_type_style_index_0_scoped_a6b011d5_lang = "";
const createBotTab = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-a6b011d5"]]);
const _withScopeId$6 = (n) => (pushScopeId("data-v-0ca1e3c4"), n = n(), popScopeId(), n);
const _hoisted_1$9 = {
  class: "flex-row flex gap-6",
  style: { "height": "170px" }
};
const _hoisted_2$9 = {
  for: "Bot-avatar-upload",
  class: "avatar-uploader"
};
const _hoisted_3$8 = { style: { "position": "relative" } };
const _hoisted_4$8 = {
  key: 0,
  class: "headimg-txt"
};
const _hoisted_5$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#emptyAvatar" }, null, -1));
const _hoisted_6$6 = [
  _hoisted_5$6
];
const _hoisted_7$6 = ["src"];
const _hoisted_8$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "img-edit" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "" })
], -1));
const _hoisted_9$6 = { class: "flex flex-col w-full" };
const _hoisted_10$5 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Base Bot ", -1));
const _hoisted_11$5 = { class: "w-full gap-3 flex flex-row" };
const _hoisted_12$5 = { class: "flex flex-row mr-[5px] ml-[5px]" };
const _hoisted_13$5 = ["src"];
const _hoisted_14$5 = { class: "flex flex-row ml-3 my-2" };
const _hoisted_15$5 = ["src"];
const _hoisted_16$4 = { class: "font-medium text-[14px] leading-[20px] font-Roboto text-[rgb(124,135,142)] pl-[14px]" };
const _hoisted_17$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#modelSetting" }, null, -1));
const _hoisted_18$3 = [
  _hoisted_17$3
];
const _hoisted_19$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Upload files ", -1));
const _hoisted_20$3 = { class: "bot-file-uploader" };
const _hoisted_21$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "Bot-file-upload",
  style: { "position": "absolute", "inset": "0" }
}, null, -1));
const _hoisted_22$3 = {
  key: 0,
  class: "flex gap-1 flex-row items-center overflow-scroll pb-2"
};
const _hoisted_23$3 = ["onClick"];
const _hoisted_24$3 = { class: "relative m-3" };
const _hoisted_25$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_26$3 = {
  key: 0,
  class: "loader"
};
const _hoisted_27$3 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_28$3 = { class: "flex-col" };
const _hoisted_29$3 = { class: "truncate w-40 pr-5" };
const _hoisted_30$3 = { class: "text-sm" };
const _hoisted_31$3 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_32$3 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_33$3 = ["onClick"];
const _hoisted_34$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_35$3 = [
  _hoisted_34$3
];
const _hoisted_36$3 = {
  key: 1,
  class: "flex gap-1 flex-row items-center overflow-scroll pb-2"
};
const _hoisted_37$3 = ["onClick"];
const _hoisted_38$3 = { class: "relative m-3" };
const _hoisted_39$2 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_40$2 = {
  key: 0,
  class: "loader"
};
const _hoisted_41$2 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_42$2 = { class: "flex-col" };
const _hoisted_43$1 = { class: "truncate w-40 pr-5" };
const _hoisted_44$1 = { class: "text-sm" };
const _hoisted_45$1 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_46$1 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_47$1 = ["onClick"];
const _hoisted_48$1 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_49$1 = [
  _hoisted_48$1
];
const _hoisted_50$1 = {
  key: 2,
  for: "Bot-file-upload",
  class: "w-[432.22px] h-[54px] left-[183.47px] top-[32px] flex-col justify-start items-center gap-4 inline-flex"
};
const _hoisted_51$1 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 p-0.5 justify-center items-center inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_52$1 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-gray-500 text-[14px] font-['RobotoRegular'] leading-[14px]" }, " DOC, EXE, HTML or PDF files less than 10MB allowed ", -1));
const _hoisted_53$1 = [
  _hoisted_51$1,
  _hoisted_52$1
];
const _hoisted_54 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Collaborators ", -1));
const _hoisted_55 = { class: "border rounded-[8px] w-full border-[var(--second-border-color)] mb-12" };
const _hoisted_56 = { class: "flex flex-row items-center" };
const _hoisted_57 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row p-2 items-center text-[rgb(124,135,142)] hover:text-white" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-[14px] leading-[20px] font-['RobotoRegular']" }, "read")
], -1));
const _hoisted_58 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row p-2 items-center text-[rgb(124,135,142)] hover:text-white" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-[14px] leading-[20px] font-['RobotoRegular']" }, "edit")
], -1));
const _hoisted_59 = { class: "border-t border-[#393E44] w-full" };
const _hoisted_60 = { class: "p-4 flex flex-row items-center justify-between" };
const _hoisted_61 = { class: "flex flex-row items-center gap-3" };
const _hoisted_62 = ["src"];
const _hoisted_63 = {
  key: 1,
  class: "h-8 w-8 bg-green-500 rounded-[50%] text-white text-center leading-8"
};
const _hoisted_64 = { class: "flex flex-col justify-start items-start gap-1.5" };
const _hoisted_65 = { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-[14px]" };
const _hoisted_66 = { key: 0 };
const _hoisted_67 = ["src"];
const _hoisted_68 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-[81px] h-11 px-6 py-3 rounded-[6px] border border-[#393E44] justify-center items-center gap-2 inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "cursor-pointer text-white text-sm font-['RobotoMedium'] leading-normal" }, " Preview ")
], -1));
const _hoisted_69 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Save", -1));
const _hoisted_70 = [
  _hoisted_69
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "editBotTab",
  props: {
    bot: {
      type: Object,
      required: true
    }
  },
  emits: ["createBotSuccess"],
  setup(__props, { emit }) {
    const props = __props;
    const authStore = useAuthStore();
    const BotStore = useBotStore();
    const showBasebotSetting = ref(false);
    const inviteEmail = ref("");
    const inviteEmailPermission = ref("3");
    const collaborators = ref([]);
    const defaultHeadImgTxt = () => {
      return authStore.getUserInfo.username.charAt(0).toUpperCase();
    };
    const filesToUpload = ref([]);
    const filesToRemove = ref([]);
    const avatarToUpload = ref(null);
    const previewImage = ref("");
    const SendInvitationEmail = () => {
      apiSendInvitationEmail({
        type: 0,
        id: props.bot.id,
        email: inviteEmail.value,
        permission: inviteEmailPermission.value
      }).then((res) => {
        ElMessage({ message: res.message, type: "success", duration: 3e3 });
      });
    };
    const CreateBotFormChange = (newVal) => {
      console.log(newVal);
      formData1.value.model_params = newVal;
    };
    const updateBot = () => {
      console.log("updateBot");
      console.log(formData1.value);
      apiBotUpdate({
        id: formData1.value.id,
        title: formData1.value.title,
        description: formData1.value.description,
        visibility: formData1.value.visibility,
        model_name: selectModel.value.name,
        model_vendor: selectModel.value.vendor,
        model_params: { ...formData1.value.model_params }
      }).then(async (res) => {
        console.log("updateBot", res);
        const uploadFiles = async () => {
          if (filesToUpload.value.length === 0)
            return;
          for (const file of filesToUpload.value) {
            try {
              const loading2 = ElLoading.service({
                lock: true,
                text: "Uploading " + file.name,
                background: "rgba(0, 0, 0, 0.7)"
              });
              const formData = new FormData();
              formData.append("file", file);
              const response = await apiBotFileAdd({
                formData,
                id: res.data.id
              });
              console.log(response);
              loading2.close();
            } catch (error) {
              console.error(error);
            }
          }
          if (avatarToUpload.value === null)
            return;
          try {
            const formData = new FormData();
            formData.append("file", avatarToUpload.value);
            const response = await apiBotUploadAvatar({
              formData,
              id: props.bot.id
            });
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        };
        const removeFile = async () => {
          if (filesToRemove.value.length === 0)
            return;
          for (const fileId of filesToRemove.value) {
            try {
              const response = await apiBotFileRemove({
                id: res.data.id,
                file_id: fileId
              });
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }
        };
        await uploadFiles();
        await removeFile();
        ElMessage({ message: "Save success", type: "success", duration: 3e3 });
        emit("createBotSuccess");
        updateBotList();
      });
    };
    const selectModel = ref(BotStore.getModelOptions[0]);
    const formData1 = ref({});
    if (props.bot.id) {
      formData1.value = { ...props.bot };
      console.log("bot", props.bot);
      selectModel.value = BotStore.getModelOptions.find((item) => item.name === props.bot.model_name);
    } else {
      formData1.value = {
        title: "",
        description: "",
        avatar: "",
        visibility: 1,
        model_name: BotStore.getModelOptions[0].name,
        model_vendor: BotStore.getModelOptions[0].vendor,
        documents: []
      };
    }
    const selectionChange = (val) => {
      selectModel.value = BotStore.getModelOptions.find((item) => item.name === val);
      console.log(selectModel.value);
    };
    const uploadFile = async (event) => {
      const files = event.target.files;
      if (!files)
        return;
      const file = files[0];
      console.log(file);
      if (file.size > 2e7) {
        ElMessage({ message: "File size is too large", type: "error", duration: 3e3 });
        return;
      }
      filesToUpload.value.push(file);
    };
    const removeUploadedBotFile = async (fileId) => {
      formData1.value.documents.splice(
        formData1.value.documents.findIndex((item) => item.id === fileId),
        1
      );
      filesToRemove.value.push(fileId);
    };
    const uploadAvatar = (event) => {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          previewImage.value = reader.result;
        };
        reader.readAsDataURL(file);
      }
      if (document.getElementById("Bot-avatar-upload")) {
        const input2 = document.getElementById("Bot-avatar-upload");
        input2.value = "";
      }
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(unref(M), { class: "flex flex-row h-full" }, {
        default: withCtx(() => [
          createVNode(unref(g), {
            "max-size": "70",
            "min-size": "50",
            style: { "overflow-y": "scroll", "background": "var(--window-bg) !important", "padding": "72px 48px" },
            class: "h-full promptBot panel"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                ref: "ruleFormRef1",
                model: formData1.value,
                "label-position": "top",
                style: { "width": "100%", "display": "flex", "flex-direction": "column", "justify-content": "center" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$9, [
                    createBaseVNode("input", {
                      id: "Bot-avatar-upload",
                      class: "hidden",
                      onChange: uploadAvatar,
                      type: "file",
                      accept: " .png, .jpg, .jpeg, .bmp, .gif, .svg,"
                    }, null, 32),
                    createBaseVNode("label", _hoisted_2$9, [
                      createBaseVNode("div", _hoisted_3$8, [
                        formData1.value.avatar == "" && previewImage.value == "" ? (openBlock(), createElementBlock("svg", _hoisted_4$8, _hoisted_6$6)) : (openBlock(), createElementBlock("img", {
                          key: 1,
                          class: "headimg-txt",
                          src: formData1.value.avatar || previewImage.value,
                          alt: ""
                        }, null, 8, _hoisted_7$6)),
                        _hoisted_8$6
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_9$6, [
                      createVNode(_component_el_form_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: formData1.value.title,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData1.value.title = $event),
                            class: "createBotInput",
                            placeholder: "Bot name (allow 2~32 word characters)"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            resize: "none",
                            type: "textarea",
                            modelValue: formData1.value.description,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData1.value.description = $event),
                            rows: 3,
                            placeholder: "Bot description"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _hoisted_10$5,
                  createBaseVNode("div", _hoisted_11$5, [
                    createVNode(_component_el_form_item, { class: "w-full flex-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: formData1.value.model_name,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData1.value.model_name = $event),
                          class: "w-full createBotInput",
                          onChange: selectionChange,
                          "suffix-icon": unref(arrow_down_bold_default)
                        }, {
                          prefix: withCtx(({}) => [
                            createBaseVNode("div", _hoisted_12$5, [
                              formData1.value.model_name ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                class: "rounded w-5 h-5 object-cover",
                                src: selectModel.value.avatar
                              }, null, 8, _hoisted_13$5)) : createCommentVNode("", true)
                            ])
                          ]),
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(BotStore).getModelOptions, (item) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item.name,
                                label: item.name,
                                value: item.name
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_14$5, [
                                    createBaseVNode("img", {
                                      class: "rounded w-5 h-5 object-cover",
                                      src: item.avatar
                                    }, null, 8, _hoisted_15$5),
                                    createBaseVNode("div", _hoisted_16$4, toDisplayString(item.name), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "suffix-icon"])
                      ]),
                      _: 1
                    }),
                    (openBlock(), createElementBlock("svg", {
                      class: "p-[14px] w-11 h-11 base-bot-setting cursor-pointer rounded-[6px]",
                      style: normalizeStyle({
                        background: showBasebotSetting.value ? "var(--el-color-primary)" : "transparent",
                        border: showBasebotSetting.value ? "none" : "1px solid #393E44",
                        padding: showBasebotSetting.value ? "13px" : "12px"
                      }),
                      onClick: _cache[3] || (_cache[3] = ($event) => showBasebotSetting.value = !showBasebotSetting.value)
                    }, _hoisted_18$3, 4))
                  ]),
                  createVNode(botParamForm, {
                    "initial-bot-params": formData1.value.model_params,
                    "show-basebot-setting": showBasebotSetting.value,
                    modelParams: selectModel.value,
                    onChange: CreateBotFormChange
                  }, null, 8, ["initial-bot-params", "show-basebot-setting", "modelParams"]),
                  _hoisted_19$3,
                  createBaseVNode("div", _hoisted_20$3, [
                    _hoisted_21$3,
                    formData1.value.documents.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_22$3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(formData1.value.documents, (file) => {
                        return openBlock(), createElementBlock("div", {
                          onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                          class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
                        }, [
                          createBaseVNode("div", _hoisted_24$3, [
                            _hoisted_25$3,
                            file.loading ? (openBlock(), createElementBlock("div", _hoisted_26$3)) : (openBlock(), createElementBlock("div", _hoisted_27$3, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                          ]),
                          createBaseVNode("div", _hoisted_28$3, [
                            createBaseVNode("div", _hoisted_29$3, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                            createBaseVNode("div", _hoisted_30$3, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                          ]),
                          createVNode(_component_el_dialog, {
                            modelValue: file.showContent,
                            "onUpdate:modelValue": ($event) => file.showContent = $event
                          }, {
                            header: withCtx(({}) => []),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_31$3, toDisplayString(file.content), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                          createBaseVNode("div", _hoisted_32$3, [
                            (openBlock(), createElementBlock("svg", {
                              onClick: withModifiers(($event) => removeUploadedBotFile(file.id), ["stop"]),
                              class: "h-5 w-5"
                            }, _hoisted_35$3, 8, _hoisted_33$3))
                          ])
                        ], 8, _hoisted_23$3);
                      }), 256))
                    ])) : filesToUpload.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_36$3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filesToUpload.value, (file) => {
                        return openBlock(), createElementBlock("div", {
                          onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                          class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
                        }, [
                          createBaseVNode("div", _hoisted_38$3, [
                            _hoisted_39$2,
                            file.loading ? (openBlock(), createElementBlock("div", _hoisted_40$2)) : (openBlock(), createElementBlock("div", _hoisted_41$2, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                          ]),
                          createBaseVNode("div", _hoisted_42$2, [
                            createBaseVNode("div", _hoisted_43$1, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                            createBaseVNode("div", _hoisted_44$1, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                          ]),
                          createVNode(_component_el_dialog, {
                            modelValue: file.showContent,
                            "onUpdate:modelValue": ($event) => file.showContent = $event
                          }, {
                            header: withCtx(({}) => []),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_45$1, toDisplayString(file.content), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                          createBaseVNode("div", _hoisted_46$1, [
                            (openBlock(), createElementBlock("svg", {
                              onClick: withModifiers(($event) => filesToUpload.value.splice(filesToUpload.value.indexOf(file), 1), ["stop"]),
                              class: "h-5 w-5"
                            }, _hoisted_49$1, 8, _hoisted_47$1))
                          ])
                        ], 8, _hoisted_37$3);
                      }), 256))
                    ])) : (openBlock(), createElementBlock("label", _hoisted_50$1, _hoisted_53$1))
                  ]),
                  createBaseVNode("input", {
                    id: "Bot-file-upload",
                    class: "hidden",
                    onChange: uploadFile,
                    type: "file",
                    accept: " .pdf, .docx, .html, .xlsx"
                  }, null, 32),
                  _hoisted_54,
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", _hoisted_56, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => inviteEmail.value = $event),
                        type: "text",
                        class: "w-full h-12 px-4 py-3 bg-[transparent] rounded-xl",
                        placeholder: "Email / Username"
                      }, null, 512), [
                        [vModelText, inviteEmail.value]
                      ]),
                      createVNode(_component_el_select, {
                        class: "readEditSelect w-[70px]",
                        modelValue: inviteEmailPermission.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => inviteEmailPermission.value = $event),
                        "suffix-icon": unref(arrow_down_bold_default)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_option, {
                            value: "3",
                            label: "read"
                          }, {
                            default: withCtx(() => [
                              _hoisted_57
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_option, {
                            value: "2",
                            label: "edit"
                          }, {
                            default: withCtx(() => [
                              _hoisted_58
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "suffix-icon"]),
                      createBaseVNode("div", {
                        onClick: SendInvitationEmail,
                        class: "cursor-pointer text-right text-indigo-400 text-base font-['RobotoRegular'] px-3 border-l-[1px] border-[#393E44]"
                      }, " Invite ")
                    ]),
                    createBaseVNode("div", _hoisted_59, [
                      createBaseVNode("div", _hoisted_60, [
                        createBaseVNode("div", _hoisted_61, [
                          unref(authStore).getUserInfo.avatar ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: unref(authStore).getUserInfo.avatar,
                            width: "72",
                            height: "72",
                            class: "h-8 w-8",
                            alt: ""
                          }, null, 8, _hoisted_62)) : (openBlock(), createElementBlock("div", _hoisted_63, toDisplayString(defaultHeadImgTxt()), 1)),
                          createBaseVNode("div", _hoisted_64, [
                            createBaseVNode("div", _hoisted_65, toDisplayString(unref(authStore).getUserInfo.username), 1)
                          ])
                        ]),
                        createVNode(_component_el_select, {
                          class: "readEditSelect w-[65px]",
                          disabled: "",
                          placeholder: "owner",
                          "suffix-icon": unref(arrow_down_bold_default)
                        }, null, 8, ["suffix-icon"])
                      ]),
                      collaborators.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_66, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(collaborators.value, (userInfo) => {
                          return openBlock(), createElementBlock("div", {
                            key: userInfo.name
                          }, [
                            createBaseVNode("img", {
                              src: userInfo.avatar,
                              alt: ""
                            }, null, 8, _hoisted_67),
                            createBaseVNode("div", null, toDisplayString(userInfo.name), 1),
                            createVNode(_component_el_select, {
                              class: "readEditSelect w-[70px]",
                              modelValue: inviteEmailPermission.value,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => inviteEmailPermission.value = $event),
                              "suffix-icon": unref(arrow_down_bold_default)
                            }, null, 8, ["modelValue", "suffix-icon"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["model"]),
              createBaseVNode("div", { class: "flex flex-row justify-end gap-4 relative" }, [
                _hoisted_68,
                createBaseVNode("div", {
                  onClick: updateBot,
                  class: "rounded cursor-pointer w-[143px] z-10 h-11 pl-3 pr-3 py-3 bg-[#5F44FF] justify-center items-center gap-2 inline-flex"
                }, _hoisted_70)
              ])
            ]),
            _: 1
          }),
          createVNode(unref(g), {
            "max-size": "50",
            "min-size": "30",
            style: { "height": "100%" }
          })
        ]),
        _: 1
      });
    };
  }
});
const editBotTab_vue_vue_type_style_index_0_scoped_0ca1e3c4_lang = "";
const editBotTab = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0ca1e3c4"]]);
const _hoisted_1$8 = /* @__PURE__ */ createBaseVNode("div", { class: "pointer-events-none w-1/2 h-1/2 flex justify-center items-center flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-4xl font-bold" }, "Welcome to"),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-6xl font-bold" }, "Benchyard"),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-2xl font-bold" }, "Drag and drop here")
], -1);
const _hoisted_2$8 = [
  _hoisted_1$8
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "welcome",
  props: {
    windowId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const botStore = useBotStore();
    const panelStore = usePanelStore();
    const authStore = useAuthStore();
    const privateChatStore = usePrivateChatStore();
    const backgroundColor = ref("var(--window-bg)");
    const dragenter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      backgroundColor.value = "var(--panel-bg)";
    };
    const dragleave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      backgroundColor.value = "var(--window-bg)";
    };
    const drop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop");
      backgroundColor.value = "var(--window-bg)";
      const data = e.dataTransfer?.getData("text/plain");
      if (data) {
        const tab = panelStore.getWindowCurrentTabById(props.windowId);
        const { type, id, name } = JSON.parse(data);
        if (!authStore.getUserInfo) {
          authStore.loginRef.showModal();
          return;
        }
        if (type === "bot") {
          const bot = botStore.getBotById(id);
          if (bot.chatId) {
            if (panelStore.openChatIfExistInTabs(bot.chatId))
              return;
            console.log(panelStore.openChatIfExistInTabs(bot.chatId));
            console.log("ChatWindow");
            tab.title = name;
            tab.type = "privateChat";
            tab.chatId = bot.chatId;
          } else {
            if (!bot.id || !bot.title || !bot.avatar)
              return;
            addPrivateChat({
              id: "",
              title: bot.title,
              members: [
                {
                  id: bot.id,
                  name: bot.title,
                  avatar: bot.avatar
                }
              ],
              messages: [
                {
                  id: (/* @__PURE__ */ new Date()).getTime().toString(),
                  username: "name",
                  content: "Welcome to Benchyard, I am " + bot.title,
                  avatar: bot.avatar,
                  cache: ""
                }
              ],
              sendTo: "",
              enableChatSend: false,
              files: []
            });
            const chat = privateChatStore.getPrivateChat.at(-1);
            if (!chat)
              return;
            const chatInstance = new SocketChat(bot.id, chat.id);
            chatInstance.connectToSocketIO(chat, () => {
              tab.title = name;
              tab.type = "privateChat";
              bot.chatId = chat.id;
              tab.chatId = bot.chatId;
              savePrivateChat();
            });
            chat.chatInstance = chatInstance;
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        onDragenter: dragenter,
        onDragleave: dragleave,
        onDrop: drop,
        onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent"])),
        style: normalizeStyle({ backgroundColor: backgroundColor.value }),
        class: "w-full h-full flex justify-center items-center"
      }, _hoisted_2$8, 36);
    };
  }
});
const _hoisted_1$7 = ["src"];
const _hoisted_2$7 = {
  key: 1,
  class: "avatar-stack",
  style: { width: 24 + 3 * 18 + "px" }
};
const _hoisted_3$7 = ["src"];
const _hoisted_4$7 = { class: "avatar text-center text-white" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "avatarStack",
  props: {
    avatarUrls: {
      type: Array,
      required: true
    }
    // 头像URL数组
  },
  setup(__props) {
    const getAvatarStyle = (index) => {
      return {
        transform: `translateX(+${index * 24}px)`,
        // 叠放效果
        zIndex: 10 + index,
        // 控制叠放顺序
        marginLeft: `${index * -6}px`
        // 控制叠放的偏移
      };
    };
    return (_ctx, _cache) => {
      return __props.avatarUrls.length <= 4 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "avatar-stack",
        style: normalizeStyle({ width: 24 + (__props.avatarUrls.length - 1) * 18 + "px" })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.avatarUrls, (url, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "avatar-container",
            style: normalizeStyle(getAvatarStyle(index))
          }, [
            createBaseVNode("img", {
              src: url,
              class: "avatar"
            }, null, 8, _hoisted_1$7)
          ], 4);
        }), 128))
      ], 4)) : (openBlock(), createElementBlock("div", _hoisted_2$7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.avatarUrls.slice(0, 3), (url, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "avatar-container",
            style: normalizeStyle(getAvatarStyle(index))
          }, [
            createBaseVNode("img", {
              src: url,
              class: "avatar"
            }, null, 8, _hoisted_3$7)
          ], 4);
        }), 128)),
        createBaseVNode("div", {
          class: "avatar-container bg-[#5F44FF]",
          style: normalizeStyle(getAvatarStyle(3))
        }, [
          createBaseVNode("div", _hoisted_4$7, toDisplayString(__props.avatarUrls.length - 3), 1)
        ], 4)
      ]));
    };
  }
});
const avatarStack_vue_vue_type_style_index_0_scoped_47edd9fd_lang = "";
const avatarStack = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-47edd9fd"]]);
const splitpanes = "";
const _withScopeId$5 = (n) => (pushScopeId("data-v-9718fa72"), n = n(), popScopeId(), n);
const _hoisted_1$6 = { style: { "height": "100%", "display": "flex", "flex-direction": "column" } };
const _hoisted_2$6 = { class: "tabs-panel" };
const _hoisted_3$6 = { class: "flex flex-row justify-start" };
const _hoisted_4$6 = ["id"];
const _hoisted_5$5 = ["onClick"];
const _hoisted_6$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "pl-4 text-white cursor-pointer" }, "Welcome", -1));
const _hoisted_7$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "tab-icon" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
], -1));
const _hoisted_8$5 = ["onClick"];
const _hoisted_9$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_10$4 = [
  _hoisted_9$5
];
const _hoisted_11$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "pl-4 text-white cursor-pointer" }, "Create Bot", -1));
const _hoisted_12$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "tab-icon" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
], -1));
const _hoisted_13$4 = ["onClick"];
const _hoisted_14$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_15$4 = [
  _hoisted_14$4
];
const _hoisted_16$3 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "pl-4 text-white cursor-pointer" }, "Edit Bot", -1));
const _hoisted_17$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "tab-icon" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
], -1));
const _hoisted_18$2 = ["onClick"];
const _hoisted_19$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_20$2 = [
  _hoisted_19$2
];
const _hoisted_21$2 = { class: "pl-4 text-white truncate" };
const _hoisted_22$2 = ["onClick"];
const _hoisted_23$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_24$2 = [
  _hoisted_23$2
];
const _hoisted_25$2 = { class: "pl-4 text-white truncate" };
const _hoisted_26$2 = ["onClick"];
const _hoisted_27$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_28$2 = [
  _hoisted_27$2
];
const _hoisted_29$2 = ["onClick"];
const _hoisted_30$2 = {
  style: { "width": "20px", "height": "20px" },
  class: "hover:stroke-white stroke-gray-500"
};
const _hoisted_31$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#add2" }, null, -1));
const _hoisted_32$2 = [
  _hoisted_31$2
];
const _hoisted_33$2 = { class: "flex flex-row items-center gap-4" };
const _hoisted_34$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#splitWindow" }, null, -1));
const _hoisted_35$2 = [
  _hoisted_34$2
];
const _hoisted_36$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-5 h-5 object-cover cursor-pointer mr-[19px] hover:fill-white fill-gray-500" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#..." })
], -1));
const _hoisted_37$2 = { class: "tabs-content" };
const _hoisted_38$2 = ["id"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "tabIndex",
  setup(__props) {
    const panelStore = usePanelStore();
    const privateChatStore = usePrivateChatStore();
    const chatGroupStore = useChatGroupStore();
    const IsShowBorder = (index, window2) => {
      if (window2.tabsId == window2.tabs[index].id) {
        return true;
      }
      if (index <= window2.tabs.length - 2) {
        if (window2.tabsId == window2.tabs[index + 1].id)
          return true;
      }
      return false;
    };
    const scrollToTab = (window2, tabId) => {
      window2.tabsId = tabId;
      console.log(tabId);
      const tab = document.getElementById(tabId);
      if (!tab)
        return;
      tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(M), null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(panelStore).getWindows, (window2) => {
            return openBlock(), createBlock(unref(g), {
              key: window2.id,
              onClick: ($event) => unref(panelStore).windowId = window2.id
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$6, [
                  createBaseVNode("div", _hoisted_2$6, [
                    createBaseVNode("div", _hoisted_3$6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(window2.tabs, (tab, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: tab.id,
                          id: tab.id
                        }, [
                          createBaseVNode("div", {
                            onClick: ($event) => scrollToTab(window2, tab.id),
                            class: "flex tabs-name",
                            style: normalizeStyle({
                              backgroundColor: tab.id == window2.tabsId ? "var(--window-bg)" : "transparent"
                            })
                          }, [
                            tab.type == "welcome" ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: "w-full flex flex-row items-center justify-between my-[9px] px-5 cursor-pointer",
                              style: normalizeStyle({
                                borderRight: IsShowBorder(index, window2) ? "solid 1px transparent" : "solid 1px #31363C"
                              })
                            }, [
                              _hoisted_6$5,
                              _hoisted_7$5,
                              (openBlock(), createElementBlock("svg", {
                                class: "tab-delete hover:fill-white fill-gray-500",
                                onClick: withModifiers(($event) => unref(removeTab)(window2.id, tab.id), ["stop"])
                              }, _hoisted_10$4, 8, _hoisted_8$5))
                            ], 4)) : tab.type == "createBot" ? (openBlock(), createElementBlock("div", {
                              key: 1,
                              style: normalizeStyle({
                                borderRight: IsShowBorder(index, window2) ? "solid 1px transparent" : "solid 1px #31363C"
                              }),
                              class: "w-full flex flex-row items-center justify-between my-[9px] px-5 cursor-pointer"
                            }, [
                              _hoisted_11$4,
                              _hoisted_12$4,
                              (openBlock(), createElementBlock("svg", {
                                class: "tab-delete hover:fill-white fill-gray-500",
                                onClick: withModifiers(($event) => unref(removeTab)(window2.id, tab.id), ["stop"])
                              }, _hoisted_15$4, 8, _hoisted_13$4))
                            ], 4)) : tab.type == "editBot" ? (openBlock(), createElementBlock("div", {
                              key: 2,
                              style: normalizeStyle({
                                borderRight: IsShowBorder(index, window2) ? "solid 1px transparent" : "solid 1px #31363C"
                              }),
                              class: "w-full flex flex-row items-center justify-between my-[9px] px-5 cursor-pointer"
                            }, [
                              _hoisted_16$3,
                              _hoisted_17$2,
                              (openBlock(), createElementBlock("svg", {
                                class: "tab-delete hover:fill-white fill-gray-500",
                                onClick: withModifiers(($event) => unref(removeTab)(window2.id, tab.id), ["stop"])
                              }, _hoisted_20$2, 8, _hoisted_18$2))
                            ], 4)) : tab.type == "privateChat" ? (openBlock(), createElementBlock("div", {
                              key: 3,
                              class: "w-full flex flex-row items-center justify-between my-[9px] px-5 cursor-pointer gap-2",
                              style: normalizeStyle({
                                borderRight: IsShowBorder(index, window2) ? "solid 1px transparent" : "solid 1px #31363C"
                              })
                            }, [
                              createBaseVNode("div", _hoisted_21$2, toDisplayString(tab.title), 1),
                              createVNode(avatarStack, {
                                class: "tab-icon",
                                "avatar-urls": unref(privateChatStore).getPrivateChatById(tab.chatId).members.map((m) => m.avatar)
                              }, null, 8, ["avatar-urls"]),
                              (openBlock(), createElementBlock("svg", {
                                class: "tab-delete hover:fill-white fill-gray-500",
                                onClick: withModifiers(($event) => unref(removeTab)(window2.id, tab.id), ["stop"])
                              }, _hoisted_24$2, 8, _hoisted_22$2))
                            ], 4)) : tab.type == "groupChat" ? (openBlock(), createElementBlock("div", {
                              key: 4,
                              class: "w-full flex flex-row items-center justify-between my-[9px] px-5 cursor-pointer gap-2",
                              style: normalizeStyle({
                                borderRight: IsShowBorder(index, window2) ? "solid 1px transparent" : "solid 1px #31363C"
                              })
                            }, [
                              createBaseVNode("div", _hoisted_25$2, toDisplayString(tab.title), 1),
                              createVNode(avatarStack, {
                                class: "tab-icon",
                                "avatar-urls": unref(chatGroupStore).getChatGroupById(tab.chatId || "").members.map((m) => m.avatar)
                              }, null, 8, ["avatar-urls"]),
                              (openBlock(), createElementBlock("svg", {
                                class: "tab-delete hover:fill-white fill-gray-500",
                                onClick: withModifiers(($event) => unref(removeTab)(window2.id, tab.id), ["stop"])
                              }, _hoisted_28$2, 8, _hoisted_26$2))
                            ], 4)) : createCommentVNode("", true)
                          ], 12, _hoisted_5$5)
                        ], 8, _hoisted_4$6);
                      }), 128)),
                      createBaseVNode("div", {
                        class: "cursor-pointer flex justify-center items-center px-5 py-3",
                        onClick: ($event) => unref(addTab)(window2.id)
                      }, [
                        (openBlock(), createElementBlock("svg", _hoisted_30$2, _hoisted_32$2))
                      ], 8, _hoisted_29$2)
                    ]),
                    createBaseVNode("div", _hoisted_33$2, [
                      (openBlock(), createElementBlock("svg", {
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(addWindow)()),
                        class: "w-4 h-4 object-cover min-h-[16px] cursor-pointer hover:stroke-white stroke-gray-500"
                      }, _hoisted_35$2)),
                      _hoisted_36$2
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_37$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(window2.tabs, (tab) => {
                      return openBlock(), createElementBlock("div", {
                        key: tab.id,
                        id: tab.id,
                        style: normalizeStyle({ display: tab.id == window2.tabsId ? "flex" : "none" }),
                        class: "w-full h-full flex justify-start flex-wrap no-scrollbar"
                      }, [
                        tab.type == "privateChat" ? (openBlock(), createBlock(privateChat, {
                          key: 0,
                          "window-id": window2.id,
                          "chat-id": tab.chatId || ""
                        }, null, 8, ["window-id", "chat-id"])) : tab.type == "groupChat" ? (openBlock(), createBlock(groupChat, {
                          key: 1,
                          "window-id": window2.id,
                          "chat-id": tab.chatId || ""
                        }, null, 8, ["window-id", "chat-id"])) : tab.type == "createBot" ? (openBlock(), createBlock(createBotTab, {
                          key: 2,
                          onCreateBotSuccess: ($event) => unref(removeTab)(window2.id, window2.tabsId),
                          "window-id": window2.id,
                          bot: tab.bot
                        }, null, 8, ["onCreateBotSuccess", "window-id", "bot"])) : tab.type == "editBot" ? (openBlock(), createBlock(editBotTab, {
                          key: 3,
                          onCreateBotSuccess: ($event) => unref(removeTab)(window2.id, window2.tabsId),
                          "window-id": window2.id,
                          bot: tab.bot || {}
                        }, null, 8, ["onCreateBotSuccess", "window-id", "bot"])) : tab.type == "welcome" ? (openBlock(), createBlock(_sfc_main$8, {
                          key: 4,
                          "window-id": window2.id
                        }, null, 8, ["window-id"])) : createCommentVNode("", true)
                      ], 12, _hoisted_38$2);
                    }), 128))
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
const tabIndex_vue_vue_type_style_index_0_scoped_9718fa72_lang = "";
const tabIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9718fa72"]]);
const _imports_0 = "" + new URL("notLogin-a655f18d.svg", import.meta.url).href;
const _withScopeId$4 = (n) => (pushScopeId("data-v-bb8674ca"), n = n(), popScopeId(), n);
const _hoisted_1$5 = /* @__PURE__ */ createStaticVNode('<div class="flex items-center gap-2 relative overflow-hidden" data-v-bb8674ca><div class="flex flex-col min-w-[39px]" data-v-bb8674ca><img src="' + _imports_0 + '" data-v-bb8674ca><svg class="w-9 h-9 object-cover grow min-h-[36px]" data-v-bb8674ca><use href="#notLogin" data-v-bb8674ca></use></svg></div><div class="flex flex-col min-w-[126px]" data-v-bb8674ca><div class="flex flex-col gap-y-1.5 grow relative" data-v-bb8674ca><div class="text-[14px] leading-none font-[RobotoMedium] text-white tracking-[-0.15px]" data-v-bb8674ca> Sign in </div><div class="text-[10px] leading-none font-[RobotoRegular] text-[rgb(124,135,142)] tracking-[-0.1px]" data-v-bb8674ca> Unlock the power of Al </div></div></div></div>', 1);
const _hoisted_2$5 = [
  _hoisted_1$5
];
const _hoisted_3$5 = {
  key: 1,
  class: "account"
};
const _hoisted_4$5 = { class: "account-content" };
const _hoisted_5$4 = ["src"];
const _hoisted_6$4 = {
  key: 1,
  class: "avatar-txt"
};
const _hoisted_7$4 = { class: "flex flex-col justify-start items-start gap-1.5" };
const _hoisted_8$4 = { class: "username" };
const _hoisted_9$4 = { class: "email" };
const _hoisted_10$3 = { class: "absolute left-0 account-menu w-full rounded-xl overflow-hidden" };
const _hoisted_11$3 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", { class: "menu-icon icon-color1" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#setting" })
], -1));
const _hoisted_12$3 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text1" }, "Setting", -1));
const _hoisted_13$3 = [
  _hoisted_11$3,
  _hoisted_12$3
];
const _hoisted_14$3 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", { class: "menu-icon icon-color2" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#logOut" })
], -1));
const _hoisted_15$3 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text2" }, "Log out", -1));
const _hoisted_16$2 = [
  _hoisted_14$3,
  _hoisted_15$3
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "account",
  emits: ["panelChange", "loginSuccess"],
  setup(__props, { expose: __expose, emit }) {
    const panelStore = usePanelStore();
    const authStore = useAuthStore();
    const route = useRoute();
    const refRegister = ref();
    const refLogin = ref();
    const refFindPassword = ref();
    const refResetPsd = ref();
    authStore.loginRef = refLogin;
    const defaultHeadImgTxt = () => {
      return authStore.getUserInfo.username.charAt(0).toUpperCase();
    };
    const handleRegister = () => {
      refRegister.value.showModal();
    };
    const handleLogin = () => {
      refLogin.value.showModal();
    };
    const handleFindPassword = () => {
      refFindPassword.value.showModal();
    };
    const handleLogout = () => {
      authStore.clear();
      console.log("logout");
      authStore.loginRef.showModal();
    };
    onMounted(() => {
      if (route.query.token) {
        console.log("token", route.query.token);
        setTimeout(() => {
          refLogin.value.hideModal();
        }, 500);
        refResetPsd.value.showModal();
      }
    });
    __expose({
      handleLogin
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(authStore).getUserInfo == null ? (openBlock(), createElementBlock("div", {
          key: 0,
          onClick: handleLogin,
          class: "partial-code px-3 py-5 flex flex-col hover:border-t-[#31363C] border-[transparent] border-t-[1px] relative"
        }, _hoisted_2$5)) : (openBlock(), createElementBlock("div", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$5, [
            unref(authStore).getUserInfo.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: unref(authStore).getUserInfo.avatar,
              width: "72",
              height: "72",
              class: "avatar",
              alt: ""
            }, null, 8, _hoisted_5$4)) : (openBlock(), createElementBlock("div", _hoisted_6$4, toDisplayString(defaultHeadImgTxt()), 1)),
            createBaseVNode("div", _hoisted_7$4, [
              createBaseVNode("div", _hoisted_8$4, toDisplayString(unref(authStore).getUserInfo.username), 1),
              createBaseVNode("div", _hoisted_9$4, toDisplayString(unref(authStore).getUserInfo.email), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_10$3, [
            createBaseVNode("div", {
              class: "menu-item",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(panelStore).setPanelId("-1"))
            }, _hoisted_13$3),
            createBaseVNode("div", {
              class: "menu-item",
              onClick: handleLogout
            }, _hoisted_16$2)
          ])
        ])),
        createVNode(CompRegister, {
          ref_key: "refRegister",
          ref: refRegister,
          onToLogin: handleLogin
        }, null, 512),
        createVNode(CompLogin, {
          ref_key: "refLogin",
          ref: refLogin,
          onToRegister: handleRegister,
          onToFindPassword: handleFindPassword
        }, null, 512),
        createVNode(CompFindPassword, {
          ref_key: "refFindPassword",
          ref: refFindPassword,
          onToLogin: handleLogin,
          onToRegister: handleRegister
        }, null, 512),
        createVNode(resetPsd, {
          ref_key: "refResetPsd",
          ref: refResetPsd,
          onToLogin: handleLogin
        }, null, 512),
        createVNode(botInvitation, { ref: "refBotInvitation" }, null, 512)
      ], 64);
    };
  }
});
const account_vue_vue_type_style_index_0_scoped_bb8674ca_lang = "";
const account = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-bb8674ca"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-3a0beed5"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("use", { href: "#shrink" }, null, -1));
const _hoisted_2$4 = [
  _hoisted_1$4
];
const _hoisted_3$4 = { style: { "padding": "0 8px", "height": "calc(100% - 260px)" } };
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "logo" }, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "logo-icon" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "logo-text" }, "Benchyard")
], -1));
const _hoisted_5$3 = { class: "panel" };
const _hoisted_6$3 = ["onClick"];
const _hoisted_7$3 = { key: 0 };
const _hoisted_8$3 = ["autofocus", "onUpdate:modelValue", "onBlur", "onKeydown"];
const _hoisted_9$3 = ["onClick"];
const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_11$2 = [
  _hoisted_10$2
];
const _hoisted_12$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("svg", { class: "menu-icon" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#add" })
], -1));
const _hoisted_13$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text" }, "Add panel", -1));
const _hoisted_14$2 = [
  _hoisted_12$2,
  _hoisted_13$2
];
const _hoisted_15$2 = { style: { "cursor": "pointer" } };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "menu",
  emits: ["update:panelId", "update:tabsId", "loginSuccess", "logOut"],
  setup(__props, { emit }) {
    const panelStore = usePanelStore();
    const accountRef = ref();
    const panelRenameRef = ref();
    const renamePanel = () => {
      const index = panelStore.panels.findIndex((panel) => panel.id == panelStore.panelId);
      panelStore.panels[index].editing = true;
      nextTick(() => {
        console.log(panelRenameRef.value);
        panelRenameRef.value[0].focus();
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "menu",
        style: normalizeStyle({ width: !unref(panelStore).pinMenu ? "200px" : "60px" })
      }, [
        createBaseVNode("div", {
          class: "shrink-icon",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(panelStore).pinMenu = !unref(panelStore).pinMenu)
        }, [
          (openBlock(), createElementBlock("svg", {
            class: "h-2 w-2",
            style: normalizeStyle({ transform: unref(panelStore).pinMenu ? "rotate(180deg)" : "" })
          }, _hoisted_2$4, 4))
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          _hoisted_4$4,
          createBaseVNode("div", _hoisted_5$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(panelStore).panels, (panel) => {
              return openBlock(), createElementBlock("div", {
                class: "menu-item",
                onDblclick: renamePanel,
                style: normalizeStyle({ backgroundColor: unref(panelStore).panelId == panel.id ? "var(--panel-bg)" : "" }),
                key: panel.id,
                onClick: ($event) => unref(panelStore).setPanelId(panel.id)
              }, [
                createBaseVNode("div", {
                  class: "menu-icon",
                  style: normalizeStyle({ backgroundColor: panel.color })
                }, null, 4),
                createBaseVNode("div", {
                  class: "menu-text",
                  style: normalizeStyle({ color: unref(panelStore).panelId == panel.id ? "#fff" : "" })
                }, [
                  !panel.editing ? (openBlock(), createElementBlock("div", _hoisted_7$3, toDisplayString(panel.title), 1)) : createCommentVNode("", true),
                  panel.editing ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    ref_for: true,
                    ref_key: "panelRenameRef",
                    ref: panelRenameRef,
                    autofocus: panel.editing,
                    class: "p-0 w-24 rounded border border-solid border-white bg-transparent",
                    "onUpdate:modelValue": ($event) => panel.title = $event,
                    onBlur: ($event) => panel.editing = false,
                    onKeydown: withKeys(($event) => panel.editing = false, ["enter"])
                  }, null, 40, _hoisted_8$3)), [
                    [vModelText, panel.title]
                  ]) : createCommentVNode("", true)
                ], 4),
                !unref(panelStore).pinMenu ? (openBlock(), createElementBlock("svg", {
                  key: 0,
                  class: "panel-delete",
                  onClick: withModifiers(($event) => unref(removePanel)(panel.id), ["stop"])
                }, _hoisted_11$2, 8, _hoisted_9$3)) : createCommentVNode("", true)
              ], 44, _hoisted_6$3);
            }), 128)),
            createBaseVNode("div", {
              class: "menu-item",
              onClick: _cache[1] || (_cache[1] = ($event) => unref(addPanel)())
            }, _hoisted_14$2)
          ])
        ]),
        createBaseVNode("div", _hoisted_15$2, [
          createVNode(account, {
            ref_key: "accountRef",
            ref: accountRef,
            onPanelChange: _cache[2] || (_cache[2] = ($event) => emit("update:panelId", -1))
          }, null, 512)
        ])
      ], 4);
    };
  }
});
const menu_vue_vue_type_style_index_0_scoped_3a0beed5_lang = "";
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3a0beed5"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-3cab504e"), n = n(), popScopeId(), n);
const _hoisted_1$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-5 h-5 object-cover min-h-[20px] m-[6px]" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#add" })
], -1));
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text1" }, "Install Bot", -1));
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text2" }, "Create Bot", -1));
const _hoisted_5$2 = [
  _hoisted_4$3
];
const _hoisted_6$2 = { class: "flex flex-row justify-between items-center mb-12" };
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-[32px] font-['RobotoMedium']" }, "Install Bot", -1));
const _hoisted_8$2 = {
  key: 1,
  class: "bot-file-uploader"
};
const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "botConfigFileUpload",
  style: { "position": "absolute", "inset": "0" }
}, null, -1));
const _hoisted_10$1 = {
  key: 0,
  class: "flex gap-1 flex-wrap items-center"
};
const _hoisted_11$1 = ["onClick"];
const _hoisted_12$1 = { class: "relative m-3" };
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_14$1 = {
  key: 0,
  class: "loader"
};
const _hoisted_15$1 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_16$1 = { class: "flex-col" };
const _hoisted_17$1 = { class: "truncate w-40" };
const _hoisted_18$1 = { class: "text-sm" };
const _hoisted_19$1 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_20$1 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_21$1 = ["onClick"];
const _hoisted_22$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_23$1 = [
  _hoisted_22$1
];
const _hoisted_24$1 = {
  key: 1,
  for: "botConfigFileUpload",
  class: "flex-col justify-start items-center gap-4 inline-flex"
};
const _hoisted_25$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 p-0.5 justify-center items-center inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_26$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-gray-500 text-sm font-normal font-['RobotoRegular'] leading-[14px]" }, " configuration file for bot ", -1));
const _hoisted_27$1 = [
  _hoisted_25$1,
  _hoisted_26$1
];
const _hoisted_28$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, "Search", -1));
const _hoisted_29$1 = [
  _hoisted_28$1
];
const _hoisted_30$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, "Create", -1));
const _hoisted_31$1 = [
  _hoisted_30$1
];
const _hoisted_32$1 = { class: "flex flex-row justify-between" };
const _hoisted_33$1 = { class: "flex flex-col items-center" };
const _hoisted_34$1 = ["src"];
const _hoisted_35$1 = { class: "w-[682px] h-[168px] flex-col justify-start items-start gap-6 inline-flex" };
const _hoisted_36$1 = { class: "self-stretch h-[168px] flex-col justify-start items-start gap-3 flex" };
const _hoisted_37$1 = { class: "self-stretch justify-between items-center inline-flex" };
const _hoisted_38$1 = { class: "text-white text-[32px] font-['RobotoMedium'] leading-[48px]" };
const _hoisted_39$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Install", -1));
const _hoisted_40$1 = [
  _hoisted_39$1
];
const _hoisted_41$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "justify-start items-center gap-2 inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "w-6 h-6 relative" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "w-6 h-6 left-0 top-0 absolute bg-zinc-800 rounded-[512px]" }),
    /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 left-0 top-0 absolute" }, [
      /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-500 text-sm font-medium font-['RobotoRegular'] leading-[14px]" }, " Benchyard ")
], -1));
const _hoisted_42$1 = { class: "w-[682px] text-white text-base font-medium font-['RobotoRegular'] leading-normal" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "createBot",
  setup(__props) {
    const authStore = useAuthStore();
    const panelStore = usePanelStore();
    const botStore = useBotStore();
    const InstallMethod = ref(0);
    const configFile = ref([]);
    const loadBot = ref();
    const formData2 = ref();
    const nameSplit2 = (name) => {
      const nameArr = name.match(/^(.*?)\.([^.]+)$/);
      return nameArr ? nameArr[2] : "";
    };
    const nameSplit1 = (name) => {
      const nameArr = name.match(/^(.*?)\.([^.]+)$/);
      return nameArr ? nameArr[1] : "";
    };
    const createBot2 = () => {
      if (authStore.getUserInfo == null) {
        authStore.loginRef.showModal();
      } else {
        addTab(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: "Create Bot",
          editing: false,
          type: "createBot",
          bot: formData2.value
        });
      }
    };
    const searchedBot = ref({
      title: "",
      description: "",
      avatar: "",
      visibility: 1,
      model_name: "",
      model_vendor: "",
      model_params: {
        system_prompt: "",
        params: {},
        ctx_length: 0
      },
      id: "",
      path: ""
    });
    const ShowSearchBot = ref(false);
    const ShowInstallBot = ref(false);
    const shareLink = ref("");
    const searchBot = () => {
      const path = shareLink.value;
      console.log("path:" + path);
      apiGetBotInfoFromCode(path).then((res) => {
        console.log(res);
        searchedBot.value = res.data;
        searchedBot.value.path = path;
        ShowSearchBot.value = true;
        shareLink.value = "";
      }).catch((err) => {
        console.log(err);
        shareLink.value = "";
        ElMessage({
          message: "Bot not found",
          type: "error"
        });
      });
    };
    const installBot = () => {
      if (authStore.getUserInfo == null) {
        authStore.loginRef.showModal();
        return;
      }
      console.log("installBot");
      ShowInstallBot.value = true;
    };
    const installSearchedBot = () => {
      apiAcceptInvitation({ code: searchedBot.value.path }).then((res) => {
        console.log(res);
        ShowSearchBot.value = false;
        ShowInstallBot.value = false;
        botStore.addBot(searchedBot.value);
      }).catch((err) => {
        console.log(err);
      });
    };
    const createBotFromFile = () => {
      console.log(loadBot.value);
      addTab(panelStore.windowId, {
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
        title: "Create Bot",
        editing: false,
        type: "createBot",
        bot: loadBot.value
      });
      ShowInstallBot.value = false;
    };
    const parseBotConfigFile = async (event) => {
      console.log("parseBotConfigFile");
      const files = event.target.files;
      const file = files ? files[0] : "";
      if (!file)
        return;
      console.log(file);
      if (file.size > 2e7) {
        return;
      }
      configFile.value.push({ name: file.name, size: file.size, content: "", loading: true });
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(e) {
        const theFile = configFile.value.find((item) => item.name === file.name);
        if (!theFile)
          return;
        if (e.target)
          theFile.content = e.target.result;
        theFile.loading = false;
        loadBot.value = JSON.parse(theFile.content);
      };
      reader.onerror = function(e) {
        if (e.target) {
          const theFile = configFile.value.find((item) => item.name === file.name);
          if (!theFile)
            return;
          theFile.loading = false;
          theFile.error = true;
          theFile.content = JSON.stringify(e.target.result);
        }
      };
      if (document.getElementById("botConfigFileUpload")) {
        const input = document.getElementById("botConfigFileUpload");
        input.value = "";
      }
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { class: "add-bot m-[10px] cursor-pointer" }, [
          _hoisted_1$3,
          createBaseVNode("div", { class: "absolute right-0 border-[1px] border-[#31363C] bg-[#292d32] account-menu w-full rounded-xl overflow-hidden" }, [
            createBaseVNode("div", {
              class: "menu-item",
              onClick: installBot
            }, _hoisted_3$3),
            createBaseVNode("div", {
              class: "menu-item",
              onClick: createBot2
            }, _hoisted_5$2)
          ])
        ]),
        createVNode(_component_el_dialog, {
          modelValue: ShowInstallBot.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ShowInstallBot.value = $event),
          "show-close": false,
          style: { "width": "700px", "background": "#292d32 !important", "padding": "48px" },
          class: "promptBot max-h-[80%] overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_6$2, [
              _hoisted_7$2,
              createVNode(switchMenu, {
                "show-info-icon": false,
                items: [
                  { label: "Bot Code", value: 0 },
                  { label: "Config File", value: 1 }
                ],
                modelValue: InstallMethod.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => InstallMethod.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            InstallMethod.value == 0 ? (openBlock(), createBlock(_component_el_input, {
              key: 0,
              modelValue: shareLink.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => shareLink.value = $event),
              class: "noPaddingIpt",
              placeholder: "Enter your Bot Code"
            }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_8$2, [
              _hoisted_9$2,
              configFile.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(configFile.value, (file) => {
                  return openBlock(), createElementBlock("div", {
                    onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                    key: file.name,
                    class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
                  }, [
                    createBaseVNode("div", _hoisted_12$1, [
                      _hoisted_13$1,
                      file.loading ? (openBlock(), createElementBlock("div", _hoisted_14$1)) : (openBlock(), createElementBlock("div", _hoisted_15$1, toDisplayString(nameSplit2(file.name)), 1))
                    ]),
                    createBaseVNode("div", _hoisted_16$1, [
                      createBaseVNode("div", _hoisted_17$1, toDisplayString(nameSplit1(file.name)), 1),
                      createBaseVNode("div", _hoisted_18$1, toDisplayString(Math.round(file.size / 100) / 10 + " kb"), 1)
                    ]),
                    createVNode(_component_el_dialog, {
                      modelValue: file.showContent,
                      "onUpdate:modelValue": ($event) => file.showContent = $event
                    }, {
                      header: withCtx(({}) => []),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_19$1, toDisplayString(file.content), 1)
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"]),
                    createBaseVNode("div", _hoisted_20$1, [
                      (openBlock(), createElementBlock("svg", {
                        onClick: withModifiers(($event) => configFile.value.splice(configFile.value.indexOf(file), 1), ["stop"]),
                        class: "h-5 w-5"
                      }, _hoisted_23$1, 8, _hoisted_21$1))
                    ])
                  ], 8, _hoisted_11$1);
                }), 128))
              ])) : (openBlock(), createElementBlock("label", _hoisted_24$1, _hoisted_27$1))
            ])),
            createBaseVNode("input", {
              id: "botConfigFileUpload",
              class: "hidden",
              onChange: parseBotConfigFile,
              type: "file",
              accept: " .botcfg"
            }, null, 32),
            InstallMethod.value == 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              onClick: searchBot,
              class: "mt-6 cursor-pointer w-full h-12 px-6 py-[17px] bg-indigo-600 rounded-[6px] justify-center items-center gap-2.5 inline-flex"
            }, _hoisted_29$1)) : (openBlock(), createElementBlock("div", {
              key: 3,
              onClick: createBotFromFile,
              class: "mt-6 cursor-pointer w-full h-12 px-6 py-[17px] bg-indigo-600 rounded-[6px] justify-center items-center gap-2.5 inline-flex"
            }, _hoisted_31$1))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_dialog, {
          modelValue: ShowSearchBot.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ShowSearchBot.value = $event),
          "show-close": true,
          style: { "width": "934px", "background": "#292d32 !important", "padding": "64px 48px" },
          class: "promptBot max-h-[80%] overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_32$1, [
              createBaseVNode("div", _hoisted_33$1, [
                createBaseVNode("img", {
                  class: "h-[120px] w-[120px]",
                  src: searchedBot.value.avatar,
                  alt: ""
                }, null, 8, _hoisted_34$1)
              ]),
              createBaseVNode("div", _hoisted_35$1, [
                createBaseVNode("div", _hoisted_36$1, [
                  createBaseVNode("div", _hoisted_37$1, [
                    createBaseVNode("div", _hoisted_38$1, toDisplayString(searchedBot.value.title), 1),
                    createBaseVNode("div", { class: "justify-start items-start gap-6 flex" }, [
                      createBaseVNode("div", {
                        onClick: installSearchedBot,
                        class: "cursor-pointer px-6 py-3 rounded-xl border-2 bg-[var(--el-color-primary)] justify-center items-center gap-2 flex"
                      }, _hoisted_40$1)
                    ])
                  ]),
                  _hoisted_41$1,
                  createBaseVNode("div", _hoisted_42$1, toDisplayString(searchedBot.value.description), 1)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const createBot_vue_vue_type_style_index_0_scoped_3cab504e_lang = "";
const createBot = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3cab504e"]]);
const _hoisted_1$2 = ["src"];
const _hoisted_2$2 = {
  key: 1,
  class: "avatar-stack",
  style: { width: 24 + 3 * 18 + "px" }
};
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = { class: "avatar text-center text-white" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "avatarStack2",
  props: {
    avatarUrls: {
      type: Array,
      required: true
    }
    // 头像URL数组
  },
  setup(__props) {
    const getAvatarStyle = (index) => {
      return {
        transform: `translateX(+${index * 24}px)`,
        // 叠放效果
        zIndex: 10 + index,
        // 控制叠放顺序
        marginLeft: `${index * -6}px`
        // 控制叠放的偏移
      };
    };
    return (_ctx, _cache) => {
      return __props.avatarUrls.length <= 4 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "avatar-stack",
        style: normalizeStyle({ width: 24 + (__props.avatarUrls.length - 1) * 18 + "px" })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.avatarUrls, (url, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "avatar-container",
            style: normalizeStyle(getAvatarStyle(index))
          }, [
            createBaseVNode("img", {
              src: url,
              class: "avatar"
            }, null, 8, _hoisted_1$2)
          ], 4);
        }), 128))
      ], 4)) : (openBlock(), createElementBlock("div", _hoisted_2$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.avatarUrls.slice(0, 3), (url, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "avatar-container",
            style: normalizeStyle(getAvatarStyle(index))
          }, [
            createBaseVNode("img", {
              src: url,
              class: "avatar"
            }, null, 8, _hoisted_3$2)
          ], 4);
        }), 128)),
        createBaseVNode("div", {
          class: "avatar-container bg-[#5F44FF]",
          style: normalizeStyle(getAvatarStyle(3))
        }, [
          createBaseVNode("div", _hoisted_4$2, toDisplayString(__props.avatarUrls.length - 3), 1)
        ], 4)
      ]));
    };
  }
});
const avatarStack2_vue_vue_type_style_index_0_scoped_f7bc0de3_lang = "";
const avatarStack2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f7bc0de3"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-3f05129e"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { style: { "cursor": "pointer" } };
const _hoisted_2$1 = ["href"];
const _hoisted_3$1 = { class: "w-[200px] flex-1 transition-all duration-500" };
const _hoisted_4$1 = { class: "flex flex-col relative h-full items-end" };
const _hoisted_5$1 = { class: "flex-1 w-full" };
const _hoisted_6$1 = {
  open: "",
  class: "overflow-scroll no-scrollbar flex-1 max-h-[50%]"
};
const _hoisted_7$1 = { class: "custom-summary sticky top-0" };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = ["onDragstart"];
const _hoisted_10 = { class: "flex flex-col min-w-[24px]" };
const _hoisted_11 = ["src"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#info" })
], -1));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = {
  open: "",
  class: "overflow-scroll no-scrollbar flex-1"
};
const _hoisted_16 = { class: "custom-summary" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "cursor-pointer flex items-center gap-2 mb-2 px-5 py-[2px] w-full text-[rgb(124,135,142)] hover:text-[#fff]" };
const _hoisted_19 = { class: "flex flex-col min-w-[21px]" };
const _hoisted_20 = { class: "flex flex-row justify-between" };
const _hoisted_21 = { class: "flex flex-col items-center" };
const _hoisted_22 = ["src"];
const _hoisted_23 = { class: "w-[550px] flex-col justify-start items-start gap-6 inline-flex" };
const _hoisted_24 = { class: "self-stretch flex-col justify-start items-start gap-3 flex" };
const _hoisted_25 = { class: "self-stretch justify-between items-center inline-flex" };
const _hoisted_26 = { class: "text-white text-[32px] font-['RobotoMedium'] leading-[48px] truncate" };
const _hoisted_27 = { class: "justify-start items-start gap-4 flex" };
const _hoisted_28 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Edit", -1));
const _hoisted_29 = [
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Clone", -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = { class: "add-bot cursor-pointer px-6 py-[10px] rounded-[6px] border border-[#676C72] justify-center items-center gap-2 flex" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Share", -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-5 h-5 pl-[2.50px] pr-[2.31px] py-[2.99px] justify-center items-center flex" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#share" })
], -1));
const _hoisted_35 = { class: "absolute left-0 bg-[#292d32] account-menu w-full rounded-[6px] overflow-hidden" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text2" }, "Copy Sharelink", -1));
const _hoisted_37 = [
  _hoisted_36
];
const _hoisted_38 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text2" }, "Download ConfigFile", -1));
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = { class: "add-bot px-[10px] py-[10px] rounded-[6px] border border-[#676C72] justify-center items-center gap-2 inline-flex cursor-pointer" };
const _hoisted_41 = {
  class: "w-5 h-5 object-cover",
  style: { "transform": "rotate(90deg)" }
};
const _hoisted_42 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#vdot" }, null, -1));
const _hoisted_43 = [
  _hoisted_42
];
const _hoisted_44 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text1" }, "Uninstall", -1));
const _hoisted_45 = [
  _hoisted_44
];
const _hoisted_46 = { class: "justify-start items-center gap-2 inline-flex" };
const _hoisted_47 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-6 h-6 relative" }, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 left-0 top-0 absolute" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
  ])
], -1));
const _hoisted_48 = { class: "text-gray-500 text-sm font-medium font-['RobotoRegular'] leading-[14px]" };
const _hoisted_49 = { class: "w-[682px] text-white text-base font-medium font-['RobotoRegular'] leading-normal" };
const _hoisted_50 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm" }, "Copy to BOT CODE clipboard:", -1));
const _hoisted_51 = { class: "flex flex-row items-center justify-center" };
const _hoisted_52 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#copy" }, null, -1));
const _hoisted_53 = [
  _hoisted_52
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "selectedBotCol",
  setup(__props) {
    const botStore = useBotStore();
    const panelStore = usePanelStore();
    const chatGroupStore = useChatGroupStore();
    const privateChatStore = usePrivateChatStore();
    const authStore = useAuthStore();
    const botInfo = ref({
      name: "",
      description: "",
      avatar: "",
      creator_name: "",
      creator_avatar: "",
      visibility: 1,
      model_name: "",
      model_vendor: "",
      model_params: {
        system_prompt: "",
        params: {},
        ctx_length: 0
      }
    });
    const ShowBotInfoFlag = ref(false);
    const copyBotCode = ref(false);
    const botCode = ref("");
    const ShowBotInfo = (bot) => {
      if (authStore.getUserInfo == null) {
        authStore.loginRef.showModal();
        return;
      }
      console.log(bot);
      botInfo.value = { ...bot };
      ShowBotInfoFlag.value = true;
    };
    const createBotBasedOnCurrentBot = () => {
      console.log("createBotBasedOnCurrentBot");
      const loading2 = ElLoading.service({
        lock: true,
        text: "Cloning Bot... Please wait",
        background: "rgba(0, 0, 0, 0.95)"
      });
      apiBotInfo(botInfo.value.id).then((res) => {
        console.log(res);
        botInfo.value = res.data;
        botInfo.value.visibility = 1;
        addTab(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: "Edit Bot",
          editing: false,
          type: "createBot",
          bot: botInfo.value
        });
        ShowBotInfoFlag.value = false;
        loading2.close();
      }).catch((err) => {
        console.log(err);
      });
    };
    const editCurrentBot = () => {
      console.log("editCurrentBot");
      apiBotInfo(botInfo.value.id).then((res) => {
        console.log(res);
        botInfo.value = res.data;
        botInfo.value.visibility = 1;
        addTab(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: "Edit Bot",
          editing: false,
          type: "editBot",
          bot: botInfo.value
        });
        ShowBotInfoFlag.value = false;
      }).catch((err) => {
        console.log(err);
      });
    };
    const dragStart = (ev, model) => {
      console.log(model);
      const data = JSON.stringify({
        type: "bot",
        id: model.id,
        avatar: model.avatar,
        name: model.title
      });
      ev.dataTransfer.clearData();
      ev?.dataTransfer?.setData("text/plain", data);
    };
    const shareBot = (id) => {
      apiShareCode({
        type: 0,
        id
      }).then((res) => {
        console.log(res.data.path);
        botCode.value = res.data.path.split("code=")[1];
        copyBotCode.value = true;
      }).catch((err) => {
        console.log(err);
      });
    };
    const downloadConfigFile = () => {
      apiBotInfo(botInfo.value.id).then((res) => {
        const dataStr = JSON.stringify(res.data);
        const dataBlob = new Blob([dataStr], { type: "text/plain" });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = botInfo.value.title + ".botcfg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    };
    const uninstallBot = () => {
      apiBotDelete({ id: botInfo.value.id }).then((res) => {
        console.log(res);
        ShowBotInfoFlag.value = false;
        botStore.deleteBot(botInfo.value.id);
        console.log(botInfo.value.chatId);
        removeTabByChatId(botInfo.value.chatId);
      }).catch((err) => {
        console.log(err);
      });
    };
    const openChatWindow = (bot) => {
      if (authStore.getUserInfo == null) {
        authStore.loginRef.showModal();
        return;
      }
      if (bot.chatId) {
        if (panelStore.openChatIfExistInTabs(bot.chatId))
          return;
        console.log(panelStore.openChatIfExistInTabs(bot.chatId));
        console.log("openChatWindow");
        const chat = privateChatStore.getPrivateChatById(bot.chatId);
        addTab(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: bot.title || "",
          editing: false,
          type: "privateChat",
          chatId: chat.id
        });
      } else {
        if (bot.id && bot.title && bot.avatar) {
          addPrivateChat({
            id: "",
            title: bot.title,
            members: [
              {
                id: bot.id,
                name: bot.title,
                avatar: bot.avatar
              }
            ],
            messages: [
              {
                id: (/* @__PURE__ */ new Date()).getTime().toString(),
                username: "name",
                content: "Welcome to Benchyard, I am " + bot.title,
                avatar: bot.avatar,
                cache: ""
              }
            ],
            sendTo: "",
            enableChatSend: false,
            files: []
          });
          const chat = privateChatStore.getPrivateChat.at(-1);
          if (!chat)
            return;
          const chatInstance = new SocketChat(bot.id, chat.id);
          const loading2 = ElLoading.service({
            lock: true,
            text: "Connecting to " + bot.title + " ...",
            background: "rgba(0, 0, 0, 0.95)"
          });
          chatInstance.connectToSocketIO(chat, () => {
            addTab(panelStore.windowId, {
              id: (/* @__PURE__ */ new Date()).getTime().toString(),
              title: bot.title || "",
              editing: false,
              type: "privateChat",
              chatId: chat.id
            });
            bot.chatId = chat.id;
            savePrivateChat();
            loading2.close();
          });
          chat.chatInstance = chatInstance;
        }
      }
    };
    const openGroupChatWindow = (group) => {
      if (panelStore.openChatIfExistInTabs(group.id))
        return;
      console.log(panelStore.openChatIfExistInTabs(group.id));
      console.log("openChatWindow");
      addTab(panelStore.windowId, {
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
        title: group.title,
        editing: false,
        type: "groupChat",
        chatId: group.id
      });
    };
    const fallbackCopyTextToClipboard = () => {
      const textArea = document.getElementById("botCode");
      textArea?.focus();
      textArea?.select();
      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
    };
    const copyTextToClipboard = (text) => {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard();
        return;
      }
      navigator.clipboard.writeText(text).then(
        function() {
          console.log("Async: Copying to clipboard was successful!");
          ElMessage({
            message: "Copied to clipboard",
            type: "success"
          });
        },
        function(err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    };
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", {
        class: "model-selection transition-all duration-500",
        style: normalizeStyle({ width: unref(panelStore).expandRightCol ? "200px" : "60px" })
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          (openBlock(), createElementBlock("svg", {
            style: { "height": "20px", "width": "20px", "margin": "14px 20px" },
            onClick: _cache[0] || (_cache[0] = ($event) => unref(panelStore).expandRightCol = !unref(panelStore).expandRightCol)
          }, [
            createBaseVNode("use", {
              href: unref(panelStore).expandRightCol ? "#expand" : "#expand2"
            }, null, 8, _hoisted_2$1)
          ]))
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("details", _hoisted_6$1, [
                createBaseVNode("summary", _hoisted_7$1, [
                  createVNode(_component_el_icon, {
                    class: "arrow m-1",
                    color: "#7C878E"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_bold_default))
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(panelStore).expandRightCol ? "Bots" : ""), 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(botStore).getBots, (bot) => {
                  return openBlock(), createElementBlock("div", {
                    key: bot.id,
                    onClick: ($event) => openChatWindow(bot),
                    class: "flex items-center relative justify-between"
                  }, [
                    createBaseVNode("div", {
                      draggable: "true",
                      onDragstart: ($event) => dragStart($event, bot),
                      class: "bot-item cursor-pointer flex items-center gap-2 mb-2 px-5 py-[2px] w-full text-[rgb(124,135,142)] hover:text-[#fff]"
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("img", {
                          class: "rounded-[12px] w-6 h-6 object-cover grow min-h-[24px]",
                          src: bot.avatar
                        }, null, 8, _hoisted_11)
                      ]),
                      createBaseVNode("div", {
                        style: normalizeStyle({ opacity: unref(panelStore).expandRightCol ? "" : "0" }),
                        class: "model-name truncate select-none font-[500] text-[14px] leading-none font-[RobotoMedium] text-[rgb(124,135,142)] tracking-[-0.15px] w-[120px] my-[11px]"
                      }, toDisplayString(bot.title), 5),
                      createBaseVNode("div", {
                        class: "info",
                        onClick: withModifiers(($event) => ShowBotInfo(bot), ["stop"])
                      }, _hoisted_14, 8, _hoisted_12)
                    ], 40, _hoisted_9$1)
                  ], 8, _hoisted_8$1);
                }), 128))
              ]),
              createBaseVNode("details", _hoisted_15, [
                createBaseVNode("summary", _hoisted_16, [
                  createVNode(_component_el_icon, {
                    class: "arrow m-1",
                    color: "#7C878E"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_bold_default))
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(panelStore).expandRightCol ? "Groups" : ""), 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(chatGroupStore).getChatGroup, (group) => {
                  return openBlock(), createElementBlock("div", {
                    key: group.id,
                    onClick: ($event) => openGroupChatWindow(group),
                    class: "flex items-center relative justify-between"
                  }, [
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        createVNode(avatarStack2, {
                          "avatar-urls": group.members.map((m) => m.avatar)
                        }, null, 8, ["avatar-urls"])
                      ]),
                      createBaseVNode("div", {
                        style: normalizeStyle({ opacity: unref(panelStore).expandRightCol ? "" : "0" }),
                        class: "model-name select-none font-[500] text-[14px] leading-none font-[RobotoMedium] text-[rgb(124,135,142)] tracking-[-0.15px] w-[120px] my-[11px]"
                      }, toDisplayString(group.title), 5)
                    ])
                  ], 8, _hoisted_17);
                }), 128))
              ])
            ]),
            createVNode(createBot)
          ])
        ]),
        createVNode(_component_el_dialog, {
          modelValue: ShowBotInfoFlag.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ShowBotInfoFlag.value = $event),
          "show-close": false,
          style: { "width": "800px", "background": "#292d32 !important", "padding": "48px" },
          class: "promptBot max-h-[80%] overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("img", {
                  class: "h-[120px] w-[120px]",
                  src: botInfo.value.avatar,
                  alt: ""
                }, null, 8, _hoisted_22)
              ]),
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, toDisplayString(botInfo.value.title), 1),
                    createBaseVNode("div", _hoisted_27, [
                      botInfo.value.user_permission.permission == 0 || botInfo.value.user_permission.permission == 1 ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        onClick: editCurrentBot,
                        class: "cursor-pointer px-6 py-[10px] rounded-[6px] border border-[#676C72] justify-center items-center gap-2 flex"
                      }, _hoisted_29)) : createCommentVNode("", true),
                      botInfo.value.user_permission.permission == 3 ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        onClick: createBotBasedOnCurrentBot,
                        class: "cursor-pointer px-6 py-[10px] rounded-[6px] border border-[#676C72] justify-center items-center gap-2 flex"
                      }, _hoisted_31)) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_32, [
                        _hoisted_33,
                        _hoisted_34,
                        createBaseVNode("div", _hoisted_35, [
                          createBaseVNode("div", {
                            class: "menu-item",
                            onClick: _cache[1] || (_cache[1] = ($event) => shareBot(botInfo.value.id))
                          }, _hoisted_37),
                          createBaseVNode("div", {
                            class: "menu-item",
                            onClick: downloadConfigFile
                          }, _hoisted_39)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_40, [
                        (openBlock(), createElementBlock("svg", _hoisted_41, _hoisted_43)),
                        createBaseVNode("div", { class: "absolute left-0 bg-[#292d32] account-menu w-full rounded-[6px] overflow-hidden" }, [
                          createBaseVNode("div", {
                            class: "menu-item",
                            onClick: uninstallBot
                          }, _hoisted_45)
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_46, [
                    _hoisted_47,
                    createBaseVNode("div", _hoisted_48, toDisplayString(botInfo.value.creator_name), 1)
                  ]),
                  createBaseVNode("div", _hoisted_49, toDisplayString(botInfo.value.description), 1)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_dialog, {
          modelValue: copyBotCode.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => copyBotCode.value = $event),
          "show-close": false,
          style: { "width": "800px", "background": "#292d32 !important" },
          class: "h-30 overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            _hoisted_50,
            createBaseVNode("div", _hoisted_51, [
              withDirectives(createBaseVNode("textarea", {
                class: "text-white text-lg bg-transparent resize-none",
                id: "botCode",
                rows: "1",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => botCode.value = $event)
              }, null, 512), [
                [vModelText, botCode.value]
              ]),
              (openBlock(), createElementBlock("svg", {
                class: "w-6 h-6",
                onClick: _cache[4] || (_cache[4] = ($event) => copyTextToClipboard(botCode.value))
              }, _hoisted_53))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
});
const selectedBotCol_vue_vue_type_style_index_0_scoped_3f05129e_lang = "";
const selectedBotCol = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3f05129e"]]);
const _withScopeId = (n) => (pushScopeId("data-v-04fa7590"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="absolute top-0 right-0 left-0 h-10 flex flex-row items-center justify-center bg-[#1D2126]" data-v-04fa7590><div class="w-[30%] h-full shrink-0 app-drag" data-v-04fa7590></div><div class="bg-[var(--panel-bg)] rounded w-[40%] h-[30px] flex flex-row items-center justify-between px-5 py-[11px]" data-v-04fa7590><div class="flex flex-row items-center gap-3 w-full" data-v-04fa7590><svg class="w-4 h-4 object-cover min-h-[16px] cursor-pointer" data-v-04fa7590><use href="#search" data-v-04fa7590></use></svg><input type="text" class="w-full h-full bg-transparent outline-none text-[rgb(124,135,142)] tracking-[-0.15px] font-[RobotoRegular] text-[14px] leading-none" placeholder="Search..." data-v-04fa7590></div></div><div class="w-[30%] h-full shrink-0 app-drag" data-v-04fa7590></div></div>', 1);
const _hoisted_3 = {
  key: 0,
  class: "main-view"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-full pt-8 flex justify-center text-4xl animate-pulse" }, " All in one API is coming soon ... ", -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  key: 1,
  class: "main-view"
};
const _hoisted_7 = {
  key: 2,
  class: "main-view"
};
const _hoisted_8 = {
  key: 3,
  class: "main-view"
};
const _hoisted_9 = {
  class: "flex-1 flex flex-row",
  style: { "height": "calc(100% - 48.5px)" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  setup(__props) {
    const panelStore = usePanelStore();
    const authStore = useAuthStore();
    const clearAllStorage = () => {
      apiUserInfoAttributeSet({ key: "panels", value: null });
      apiUserInfoAttributeSet({ key: "privateChat", value: null });
      apiUserInfoAttributeSet({ key: "bots", value: null });
    };
    onMounted(() => {
      if (authStore.getUserInfo == null) {
        authStore.loginRef.showModal();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("button", {
          class: "w-10 h-10",
          onClick: clearAllStorage
        }, "Clear All Storage"),
        _hoisted_2,
        createVNode(Menu),
        unref(panelStore).panelId == "-3" ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5)) : unref(panelStore).panelId == "-2" ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(subscription)
        ])) : unref(panelStore).panelId == "-1" ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createVNode(setting)
        ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("div", {
            class: "tabs transition-all duration-500",
            style: normalizeStyle({ width: unref(panelStore).expandRightCol ? "calc(100% - 200px)" : "calc(100% - 60px)" })
          }, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(tabIndex)
            ])
          ], 4),
          createVNode(selectedBotCol)
        ]))
      ]);
    };
  }
});
const home_vue_vue_type_style_index_0_scoped_04fa7590_lang = "";
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04fa7590"]]);
export {
  home as default
};
