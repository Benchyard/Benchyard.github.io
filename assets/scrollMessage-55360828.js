import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createElementBlock, p as pushScopeId, g as popScopeId, b as createBaseVNode, d as defineComponent, a as ref, h as resolveComponent, F as Fragment, j as renderList, n as normalizeStyle, k as createCommentVNode, e as createVNode, z as createBlock, y as withCtx, t as toDisplayString } from "./index-fb62e72d.js";
const loadingAnimation_vue_vue_type_style_index_0_scoped_ba575b6b_lang = "";
const _sfc_main$1 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-ba575b6b"), n = n(), popScopeId(), n);
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
const loading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-ba575b6b"]]);
const _withScopeId = (n) => (pushScopeId("data-v-f5c0c50e"), n = n(), popScopeId(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "message-text"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  style: { "display": "flex" }
};
const _hoisted_5 = ["id"];
const _hoisted_6 = { style: { "font-size": "11px", "height": "fit-content", "max-height": "100px", "overflow": "scroll" } };
const _hoisted_7 = { class: "flex flex-row gap-4 cursor-pointer" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "relative m-3" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_11 = { class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]" };
const _hoisted_12 = { class: "flex-col" };
const _hoisted_13 = { class: "truncate w-40" };
const _hoisted_14 = { class: "text-sm" };
const _hoisted_15 = { class: "m-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_el_popover = resolveComponent("el-popover");
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
            }, null, 8, _hoisted_1)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: "flex flex-col w-full",
              style: normalizeStyle({ alignItems: msg.role === "user" ? "end" : "start" })
            }, [
              typeof msg.content === "string" && msg.content.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "message-content",
                style: normalizeStyle({ background: msg.role === "user" ? "transparent" : "" })
              }, [
                msg.role === "user" ? (openBlock(), createElementBlock("span", _hoisted_2, [
                  createVNode(_component_v_md_preview, {
                    style: normalizeStyle([{ "word-break": "normal", "background-color": "transparent !important" }, { textAlign: "left" }]),
                    text: msg.content
                  }, null, 8, ["text"])
                ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
                  typeof msg.content === "string" && msg.content.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createVNode(loading)
                  ])) : (openBlock(), createBlock(_component_v_md_preview, {
                    key: 1,
                    style: normalizeStyle([{ "word-break": "normal" }, { textAlign: "left" }]),
                    text: msg.content
                  }, null, 8, ["text"]))
                ]))
              ], 4)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(msg.refs, (ref2, index2) => {
                return openBlock(), createElementBlock("div", {
                  id: msg.id,
                  class: "ref rounded"
                }, [
                  createVNode(_component_el_popover, {
                    placement: "top-start",
                    width: 500,
                    trigger: "hover"
                  }, {
                    reference: withCtx(() => [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", null, "[" + toDisplayString(index2 + 1) + "]", 1),
                        createBaseVNode("div", null, toDisplayString(ref2.filename), 1),
                        createBaseVNode("div", null, "Page:" + toDisplayString(ref2.page), 1),
                        createBaseVNode("div", null, "Position:" + toDisplayString(ref2.position), 1)
                      ])
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_6, toDisplayString(ref2.page_content), 1)
                    ]),
                    _: 2
                  }, 1024)
                ], 8, _hoisted_5);
              }), 256))
            ], 4),
            typeof msg.content === "object" ? (openBlock(), createElementBlock("div", {
              key: 1,
              onClick: ($event) => msg.dialogVisible = true,
              class: "shadow p-1 rounded-xl bg-black flex items-center"
            }, [
              createBaseVNode("div", _hoisted_9, [
                _hoisted_10,
                createBaseVNode("div", _hoisted_11, toDisplayString(msg.content.filename.match(/^(.*?)\.([^.]+)$/)[2]), 1)
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, toDisplayString(msg.content.filename.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                createBaseVNode("div", _hoisted_14, toDisplayString(msg.content.size), 1)
              ]),
              createVNode(_component_el_dialog, {
                modelValue: msg.dialogVisible,
                "onUpdate:modelValue": ($event) => msg.dialogVisible = $event
              }, {
                header: withCtx(({}) => []),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_15, toDisplayString(msg.content.content), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])
            ], 8, _hoisted_8)) : createCommentVNode("", true)
          ], 4);
        }), 128))
      ], 512);
    };
  }
});
const scrollMessage_vue_vue_type_style_index_0_scoped_f5c0c50e_lang = "";
const scrollMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5c0c50e"]]);
export {
  scrollMessage as s
};
