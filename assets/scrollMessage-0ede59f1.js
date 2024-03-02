import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createElementBlock, p as pushScopeId, g as popScopeId, b as createBaseVNode, d as defineComponent, a as ref, k as watch, I as onMounted, h as resolveComponent, F as Fragment, m as renderList, n as normalizeStyle, q as createCommentVNode, e as createVNode, i as createBlock, t as toDisplayString, E as ElMessage } from "./index-f728f539.js";
const loadingAnimation_vue_vue_type_style_index_0_scoped_79fd0845_lang = "";
const _sfc_main$1 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-79fd0845"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "lds-ellipsis" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_6$1 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4$1,
  _hoisted_5$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_6$1);
}
const loading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-79fd0845"]]);
const _withScopeId = (n) => (pushScopeId("data-v-032e788b"), n = n(), popScopeId(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "absolute top-0 right-[-20px] cursor-pointer copy-icon"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#copy" }, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  key: 1,
  class: "absolute top-0 right-[-40px] cursor-pointer copy-icon"
};
const _hoisted_7 = {
  key: 2,
  class: "message-text"
};
const _hoisted_8 = {
  key: 3,
  class: "min-w-20"
};
const _hoisted_9 = {
  key: 0,
  style: { "display": "flex" }
};
const _hoisted_10 = { key: 1 };
const _hoisted_11 = ["id"];
const _hoisted_12 = {
  key: 1,
  class: "flex flex-start flex-col"
};
const _hoisted_13 = { class: "shadow p-1 rounded-xl bg-black flex items-center" };
const _hoisted_14 = { class: "relative m-3" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_16 = { class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]" };
const _hoisted_17 = { class: "flex-col" };
const _hoisted_18 = { class: "truncate w-40" };
const _hoisted_19 = {
  key: 2,
  class: "text-sm"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scrollMessage",
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const fallbackCopyTextToClipboard = () => {
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
    const scrollView = ref(null);
    const scrollToBottom = () => {
      if (scrollView.value) {
        scrollView.value.scrollTop = scrollView.value.scrollHeight;
      }
    };
    watch(() => props.chat.enableChatSend, () => {
      scrollToBottom();
      console.log("new message added");
      const msg = props.chat.messages.at(-1);
      addEventToMsg(msg, props.chat.messages.length - 1, props.chat.id);
    }, { deep: true });
    onMounted(() => {
      const chat = props.chat;
      chat.messages.forEach((msg, index) => {
        addEventToMsg(msg, index, props.chat.id);
      });
    });
    const addEventToMsg = (msg, index, id) => {
      if (msg.refs?.length > 0) {
        console.log(".id-" + index + "-" + id);
        var elements = document.querySelectorAll(".id-" + index + "-" + id);
        elements.forEach(function(element) {
          if (element.hasAttribute("data-click")) {
            return;
          }
          element.addEventListener("click", function() {
            if (msg.refsShow) {
              msg.refsShow = null;
              return;
            }
            var elementHtml = element.innerHTML;
            console.log(elementHtml);
            msg.refsShow = msg.refs[parseInt(elementHtml) - 1];
            console.log("click ref", msg.refsShow);
          });
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_v_md_preview = resolveComponent("v-md-preview");
      const _component_el_progress = resolveComponent("el-progress");
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
            }, null, 8, _hoisted_1)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: "flex flex-col w-full",
              style: normalizeStyle({ alignItems: msg.role === "user" ? "end" : "start" })
            }, [
              typeof msg.content === "string" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "message-content relative",
                style: normalizeStyle({ background: msg.role === "user" ? "transparent" : "" })
              }, [
                msg.role != "user" ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  (openBlock(), createElementBlock("svg", {
                    class: "w-4 h-4",
                    onClick: ($event) => copyTextToClipboard(msg.content)
                  }, _hoisted_5, 8, _hoisted_3))
                ])) : createCommentVNode("", true),
                msg.role != "user" ? (openBlock(), createElementBlock("div", _hoisted_6)) : createCommentVNode("", true),
                msg.role === "user" ? (openBlock(), createElementBlock("span", _hoisted_7, [
                  createVNode(_component_v_md_preview, {
                    style: normalizeStyle([{ "word-break": "normal", "background-color": "transparent !important" }, { textAlign: "left" }]),
                    text: msg.content
                  }, null, 8, ["text"])
                ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
                  typeof msg.content === "string" && msg.content.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                    createVNode(loading)
                  ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
                    !msg.error ? (openBlock(), createBlock(_component_v_md_preview, {
                      key: 0,
                      style: normalizeStyle([{ "word-break": "normal" }, { textAlign: "left", color: msg.error ? "var(--error-color)" : "var(--text-color)" }]),
                      text: msg.content
                    }, null, 8, ["style", "text"])) : (openBlock(), createElementBlock("div", {
                      key: 1,
                      style: normalizeStyle({ textAlign: "left", color: "var(--error-color)", fontWeight: 600 })
                    }, toDisplayString(msg.content), 5))
                  ]))
                ]))
              ], 4)) : createCommentVNode("", true),
              msg.refsShow ? (openBlock(), createElementBlock("div", {
                key: 1,
                id: index.toString(),
                class: "ref rounded"
              }, toDisplayString(msg.refsShow.page_content) + " ", 9, _hoisted_11)) : createCommentVNode("", true)
            ], 4),
            typeof msg.content === "object" ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  _hoisted_15,
                  createBaseVNode("div", _hoisted_16, toDisplayString(msg.content.name.match(/^(.*?)\.([^.]+)$/)[2]), 1)
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, toDisplayString(msg.content.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                  msg.uploadProgress < 100 ? (openBlock(), createBlock(_component_el_progress, {
                    key: 0,
                    class: "w-[155px]",
                    percentage: msg.uploadProgress,
                    format: (e) => e + "%"
                  }, null, 8, ["percentage", "format"])) : msg.loading ? (openBlock(), createBlock(_component_el_progress, {
                    key: 1,
                    class: "w-[155px]",
                    striped: "",
                    "striped-flow": "",
                    percentage: msg.uploadProgress,
                    format: () => "Parse..."
                  }, null, 8, ["percentage", "format"])) : (openBlock(), createElementBlock("div", _hoisted_19, toDisplayString(Math.round(msg.content.size / 1e3) + " kb"), 1))
                ])
              ]),
              msg.state ? (openBlock(), createElementBlock("div", {
                key: 0,
                style: normalizeStyle({ color: "var(--error-color)" }),
                class: ""
              }, toDisplayString(msg.state), 5)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ], 4);
        }), 128))
      ], 512);
    };
  }
});
const scrollMessage_vue_vue_type_style_index_0_scoped_032e788b_lang = "";
const scrollMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-032e788b"]]);
export {
  scrollMessage as s
};
