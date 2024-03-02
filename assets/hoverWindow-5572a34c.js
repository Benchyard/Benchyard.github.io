import { d as defineComponent, y as usePanelStore, a as ref, u as useAuthStore, x as useBotStore, L as usePrivateChatStore, k as watch, I as onMounted, T as Tribute, h as resolveComponent, c as createElementBlock, l as withDirectives, v as vShow, e as createVNode, B as unref, q as createCommentVNode, b as createBaseVNode, J as withKeys, F as Fragment, m as renderList, n as normalizeStyle, E as ElMessage, o as openBlock, t as toDisplayString, w as withCtx, K as withModifiers, p as pushScopeId, g as popScopeId } from "./index-f728f539.js";
import { s as scrollMessage } from "./scrollMessage-0ede59f1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _withScopeId = (n) => (pushScopeId("data-v-dbd252da"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "w-full h-full flex flex-col items-center justify-start" };
const _hoisted_2 = {
  key: 0,
  class: "chat-room chat-room-origin"
};
const _hoisted_3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_4 = ["onKeydown"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "file-upload",
  class: "rounded-xl cursor-pointer mr-3"
}, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "h-8 w-8 p-[7px] rounded cursor-pointer hover:bg-[#292D32]" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#uploadFile" })
  ])
], -1));
const _hoisted_6 = ["stroke"];
const _hoisted_7 = {
  key: 0,
  class: "flex gap-1 flex-wrap items-center"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "relative m-3" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_11 = {
  key: 0,
  class: "loader"
};
const _hoisted_12 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_13 = { class: "flex-col" };
const _hoisted_14 = { class: "truncate w-40" };
const _hoisted_15 = { class: "text-sm" };
const _hoisted_16 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_17 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_20 = [
  _hoisted_19
];
const textareaId = "myTextarea-fast-panel";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hoverWindow",
  setup(__props) {
    const panelStore = usePanelStore();
    const sendTo = ref("");
    const authStore = useAuthStore();
    const botStore = useBotStore();
    const privateChat = usePrivateChatStore();
    const chatId = ref("");
    const showChat = ref(false);
    const matchedBots = ref([]);
    const chat = ref({
      files: [],
      members: []
    });
    const lastBotName = ref(panelStore.setting.defaultBot.name);
    const inputAllChange = (e) => {
      console.log(e);
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
          if (textarea == null)
            return;
          var selection = window.getSelection();
          var range = selection?.getRangeAt(0);
          if (range == null)
            return;
          if (selection == null)
            return;
          var br = document.createElement("br");
          range?.deleteContents();
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
    const sendMessage = async () => {
      if (sendTo.value.length === 0) {
        showInputMessage("Please input something,ok?");
        return;
      }
      if (!authStore.checkLogin()) {
        return;
      }
      const sendToBotByName = async (name) => {
        const b = botStore.findBotByName(name);
        chatId.value = b.chatIds.at(-1) || "";
        const c = privateChat.getPrivateChatById(chatId.value);
        showChat.value = true;
        privateChat.sio.sendMessage(c.id, sendTo.value);
        c.messages.push({
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          username: authStore.getUserInfo?.username,
          avatar: authStore.getUserInfo?.avatar,
          role: "user",
          content: sendTo.value,
          cache: "",
          createTime: (/* @__PURE__ */ new Date()).getTime()
        });
        c.messages.push({
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          username: authStore.getUserInfo?.username,
          role: "assistant",
          avatar: c.members[0].avatar,
          content: "",
          cache: "",
          refs: [],
          createTime: (/* @__PURE__ */ new Date()).getTime()
        });
      };
      if (matchedBots.value.length === 0) {
        sendToBotByName(lastBotName.value);
      } else if (matchedBots.value.length === 1) {
        lastBotName.value = matchedBots.value[0];
        sendToBotByName(matchedBots.value[0]);
      } else {
        showInputMessage("Only one @bot to allowed");
        matchedBots.value = [];
        return;
      }
      chat.value.files = [];
      sendTo.value = "";
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      textarea.style.height = "5px";
      textarea.innerHTML = "";
    };
    const uploadFile = async (event) => {
      console.log("upload file", event);
      showInputMessage("Coming soon");
      return;
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
      sendTo.value = innerHTML;
      const regex = /<span contenteditable="false"><a style="color:#7C82FF">(.{1,20})<\/a><\/span>/g;
      let match;
      matchedBots.value = [];
      while ((match = regex.exec(sendTo.value)) !== null) {
        const value = match[1];
        matchedBots.value.push(value);
      }
      console.log(matchedBots);
    };
    watch(
      () => matchedBots.value,
      (newProp) => {
        console.log(newProp);
        if (matchedBots.value.length === 0)
          ;
        else {
          const b = botStore.findBotByName(matchedBots.value[0]);
          console.log(b);
          chatId.value = b.chatIds.at(-1) || "";
          showChat.value = true;
        }
      },
      { deep: true }
    );
    onMounted(() => {
      const Search = (text, cb) => {
        const value = [];
        botStore.getBots.forEach((b) => {
          value.push({ key: b.title, value: b.title, icon: b.avatar });
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
          return '<span contenteditable="false" ><a style="color:#7C82FF">' + item.original.value + "</a></span>";
        }
      });
      const textarea = document.getElementById(textareaId);
      textarea?.focus();
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
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          console.log("escape");
          hideWindow();
        }
      });
    });
    const hideWindow = () => {
      console.log("hideWindow");
      if (window.api) {
        window.api.escape();
      }
    };
    return (_ctx, _cache) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        chatId.value !== "" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(scrollMessage, {
            chat: unref(privateChat).getPrivateChatById(chatId.value)
          }, null, 8, ["chat"])
        ], 512)), [
          [vShow, showChat.value]
        ]) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "input-area rounded-[10px]",
          style: normalizeStyle({ bottom: chatId.value == "" ? "300px" : 0 })
        }, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("p", {
              id: textareaId,
              contenteditable: "",
              class: "text-area",
              placeholder: "send to all bot, or use @ to send to specific bot",
              onInput: inputAllChange,
              onKeydown: withKeys(enterToSend, ["enter"]),
              onKeyup: addBrTolastChild,
              onBlur: hideWindow
            }, null, 40, _hoisted_4),
            _hoisted_5,
            createBaseVNode("input", {
              id: "file-upload",
              class: "hidden",
              onChange: uploadFile,
              type: "file",
              accept: " .pdf, .docx, .html, .xlsx"
            }, null, 32),
            (openBlock(), createElementBlock("svg", {
              onClick: sendMessage,
              class: "h-8 w-8 p-[7px] rounded-xl cursor-pointer hover:bg-[#292D32]"
            }, [
              createBaseVNode("use", {
                href: "#send",
                stroke: sendTo.value.length == 0 ? "#7C878E" : "white"
              }, null, 8, _hoisted_6)
            ]))
          ]),
          chat.value.files.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(chat.value.files, (file) => {
              return openBlock(), createElementBlock("div", {
                onClick: ($event) => file.dialogVisible = true,
                key: file.name,
                class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
              }, [
                createBaseVNode("div", _hoisted_9, [
                  _hoisted_10,
                  file.loading ? (openBlock(), createElementBlock("div", _hoisted_11)) : (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                  createBaseVNode("div", _hoisted_15, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                ]),
                createVNode(_component_el_dialog, {
                  modelValue: file.dialogVisible,
                  "onUpdate:modelValue": ($event) => file.dialogVisible = $event
                }, {
                  header: withCtx(({}) => []),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_16, toDisplayString(file.content), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"]),
                createBaseVNode("div", _hoisted_17, [
                  (openBlock(), createElementBlock("svg", {
                    onClick: withModifiers(($event) => chat.value.files.splice(chat.value.files.indexOf(file), 1), ["stop"]),
                    class: "h-5 w-5"
                  }, _hoisted_20, 8, _hoisted_18))
                ])
              ], 8, _hoisted_8);
            }), 128))
          ])) : createCommentVNode("", true)
        ], 4)
      ]);
    };
  }
});
const hoverWindow_vue_vue_type_style_index_0_scoped_dbd252da_lang = "";
const hoverWindow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dbd252da"]]);
export {
  hoverWindow as default
};
