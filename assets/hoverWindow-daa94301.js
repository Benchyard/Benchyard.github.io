import { d as defineComponent, q as usePanelStore, a as ref, u as useAuthStore, m as useBotStore, J as usePrivateChatStore, w as watch, D as onMounted, T as Tribute, h as resolveComponent, c as createElementBlock, i as withDirectives, v as vShow, e as createVNode, A as unref, k as createCommentVNode, b as createBaseVNode, G as withKeys, F as Fragment, j as renderList, n as normalizeStyle, E as ElMessage, o as openBlock, t as toDisplayString, y as withCtx, H as withModifiers, p as pushScopeId, g as popScopeId, I as apiFileAdd } from "./index-fb62e72d.js";
import { s as scrollMessage } from "./scrollMessage-55360828.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _withScopeId = (n) => (pushScopeId("data-v-8cb7a581"), n = n(), popScopeId(), n);
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
  /* @__PURE__ */ createBaseVNode("svg", { class: "h-8 w-8 p-[7px]" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#uploadFile" })
  ])
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#send" }, null, -1));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = {
  key: 0,
  class: "flex gap-1 flex-wrap items-center"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "relative m-3" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_12 = {
  key: 0,
  class: "loader"
};
const _hoisted_13 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_14 = { class: "flex-col" };
const _hoisted_15 = { class: "truncate w-40" };
const _hoisted_16 = { class: "text-sm" };
const _hoisted_17 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_18 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_21 = [
  _hoisted_20
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
      members: [],
      chatInstance: null
    });
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
      if (authStore.getUserInfo == null) {
        authStore.loginRef.showModal();
        return;
      }
      const sendToBotByName = async (name) => {
        const b = botStore.findBotByName(name);
        chatId.value = b.chatId || "";
        if (chat.value.files.length > 0) {
          for (const f of chat.value.files) {
            await apiFileAdd({ id: b.chatId, formData: f.formData });
          }
        }
        const c = privateChat.getPrivateChatById(b.chatId);
        c.chatInstance.sendMessage(sendTo.value);
      };
      if (matchedBots.value.length === 0) {
        sendToBotByName(panelStore.setting.defaultBot.name);
      } else if (matchedBots.value.length === 1) {
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
      const regex = /<span contenteditable="false"><a style="color:#7C82FF">@(.{1,20})<\/a><\/span>/g;
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
        if (matchedBots.value.length === 0) {
          showChat.value = false;
        } else {
          const b = botStore.findBotByName(matchedBots.value[0]);
          console.log(b);
          chatId.value = b.chatId || "";
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
          return '<span contenteditable="false" ><a style="color:#7C82FF">@' + item.original.value + "</a></span>";
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
    });
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
              onKeyup: addBrTolastChild
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
              class: "h-8 w-8 p-[7px] rounded-xl cursor-pointer"
            }, _hoisted_7))
          ]),
          chat.value.files.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(chat.value.files, (file) => {
              return openBlock(), createElementBlock("div", {
                onClick: ($event) => file.dialogVisible = true,
                key: file.name,
                class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
              }, [
                createBaseVNode("div", _hoisted_10, [
                  _hoisted_11,
                  file.loading ? (openBlock(), createElementBlock("div", _hoisted_12)) : (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                  createBaseVNode("div", _hoisted_16, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                ]),
                createVNode(_component_el_dialog, {
                  modelValue: file.dialogVisible,
                  "onUpdate:modelValue": ($event) => file.dialogVisible = $event
                }, {
                  header: withCtx(({}) => []),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_17, toDisplayString(file.content), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"]),
                createBaseVNode("div", _hoisted_18, [
                  (openBlock(), createElementBlock("svg", {
                    onClick: withModifiers(($event) => chat.value.files.splice(chat.value.files.indexOf(file), 1), ["stop"]),
                    class: "h-5 w-5"
                  }, _hoisted_21, 8, _hoisted_19))
                ])
              ], 8, _hoisted_9);
            }), 128))
          ])) : createCommentVNode("", true)
        ], 4)
      ]);
    };
  }
});
const hoverWindow_vue_vue_type_style_index_0_scoped_8cb7a581_lang = "";
const hoverWindow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cb7a581"]]);
export {
  hoverWindow as default
};
