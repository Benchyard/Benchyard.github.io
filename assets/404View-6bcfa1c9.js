import { _ as _imports_0 } from "./homeBackground-bf4b476d.js";
import { d as defineComponent, A as useRouter, c as createElementBlock, b as createBaseVNode, F as Fragment, o as openBlock, p as pushScopeId, g as popScopeId } from "./index-f728f539.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _imports_1 = "" + new URL("404-d394414f.png", import.meta.url).href;
const _withScopeId = (n) => (pushScopeId("data-v-a04c5c84"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col w-full h-[458px] absolute left-[0] bottom-[-384px]" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    draggable: "false",
    class: "w-full h-[658px] absolute left-0 top-0 hover:rotate-180 transition-transform duration-[30s] ease-linear",
    src: _imports_0,
    alt: "alt text"
  }),
  /* @__PURE__ */ createBaseVNode("svg", { class: "w-full h-[685px] absolute left-0 bottom-[-510px]" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#homePageShadow" })
  ])
], -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "w-11 h-11",
  alt: "alt text"
}, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "select-none flex items-center justify-center font-bold text-[20px] leading-none font-Inter text-white text-center my-3" }, " Benchyard ", -1));
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "wrap" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    width: "500",
    class: "img404",
    alt: ""
  })
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404View",
  setup(__props) {
    const router = useRouter();
    const toHome = () => {
      router.push({ name: "home" });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { class: "flex flex-col border-solid border-[rgba(49,54,60,0.6)] border-t-[0px] border-r-[0px] border-b-[1px] border-l-[0px] w-full relative" }, [
          _hoisted_1,
          createBaseVNode("div", { class: "flex justify-between gap-x-2.5 relative my-[15px] mx-6" }, [
            createBaseVNode("div", {
              onClick: toHome,
              class: "w-[157px] flex gap-x-2"
            }, _hoisted_4)
          ])
        ]),
        _hoisted_5
      ], 64);
    };
  }
});
const _404View_vue_vue_type_style_index_0_scoped_a04c5c84_lang = "";
const _404View = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a04c5c84"]]);
export {
  _404View as default
};
