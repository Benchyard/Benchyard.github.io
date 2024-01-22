import { _ as _imports_0 } from "./homeBackground-bf4b476d.js";
import { C as CompRegister, a as CompLogin, b as CompFindPassword, r as resetPsd, c as botInvitation } from "./botInvitation-424ef224.js";
import { d as defineComponent, u as useAuthStore, r as router, a as ref, c as createElementBlock, b as createBaseVNode, e as createVNode, F as Fragment, f as createStaticVNode, o as openBlock, p as pushScopeId, g as popScopeId } from "./index-86235965.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _withScopeId = (n) => (pushScopeId("data-v-8398da5f"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-7 w-full app-drag z-20" }, null, -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col w-full h-[458px] absolute left-[0] bottom-[-384px]" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    draggable: "false",
    class: "w-full h-[658px] absolute left-0 top-0 rotate",
    src: _imports_0,
    alt: "alt text"
  }),
  /* @__PURE__ */ createBaseVNode("svg", { class: "w-full h-[685px] absolute left-0 bottom-[-510px]" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#homePageShadow" })
  ])
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-[157px] flex gap-x-2" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "w-11 h-11",
    alt: "alt text"
  }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
  ]),
  /* @__PURE__ */ createBaseVNode("h3", { class: "select-none flex items-center justify-center font-bold text-[20px] leading-none font-Inter text-white text-center my-3" }, " Benchyard ")
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "cursor-pointer text-[14px] leading-none font-['RobotoMedium'] text-white tracking-[-0.15px] my-3 mx-auto" }, " Log in ", -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-full h-[130px] flex-col justify-start items-center gap-8 inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-gridient1 select-none" }, "Benchyard"),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-gridient2 select-none" }, "boost weapon for solo & collaboration")
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h5", { class: "text-[16px] leading-none font-['RobotoMedium'] text-white tracking-[-0.16px] my-[17px] mx-auto" }, " Get started ", -1));
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="flex mt-[140px] z-10 animate__animated animate__slideInUp" data-v-8398da5f><div class="flex flex-col bg-[rgb(42,39,61)] w-px" data-v-8398da5f><div class="bg-white min-h-[24px] mt-[62px] mb-[104px]" data-v-8398da5f></div></div><div class="bg-gridient transition bg-[center_center] bg-100% 100% bg-no-repeat w-[310px] pt-[22px] pr-[26px] pb-11 pl-[26px] flex flex-col gap-y-4" data-v-8398da5f><svg class="w-6 h-6" data-v-8398da5f><use href="#Panel" data-v-8398da5f></use></svg><h2 class="font-semibold text-[24px] leading-none font-[&#39;RobotoRegular&#39;] text-white tracking-[-0.24px]" data-v-8398da5f> Fast panel </h2><h5 class="font-normal text-[16px] leading-[1.37] font-[&#39;RobotoRegular&#39;] text-[rgb(124,135,142)] tracking-[-0.16px]" data-v-8398da5f> Instantaneous chat with any AI at your fingertips. </h5></div><div class="flex flex-col bg-[rgb(42,39,61)] w-px" data-v-8398da5f><div class="bg-white min-h-[24px] mt-[62px] mb-[104px]" data-v-8398da5f></div></div><div class="bg-gridient transition w-[310px] pt-[22px] pr-[26px] pb-11 pl-[26px] flex flex-col gap-y-4" data-v-8398da5f><svg class="w-6 h-6" data-v-8398da5f><use href="#group" data-v-8398da5f></use></svg><h2 class="font-semibold text-[24px] leading-none font-[&#39;RobotoRegular&#39;] text-white tracking-[-0.24px]" data-v-8398da5f> AI/human group </h2><h5 class="font-normal text-[16px] leading-[1.37] font-[&#39;RobotoRegular&#39;] text-[rgb(124,135,142)] tracking-[-0.16px]" data-v-8398da5f> Seamless integration of artificial intelligence and human expertise. </h5></div><div class="flex flex-col bg-[rgb(42,39,61)] w-px" data-v-8398da5f><div class="bg-white min-h-[24px] mt-[62px] mb-[104px]" data-v-8398da5f></div></div><div class="bg-gridient transition w-[310px] pt-[22px] pr-[26px] pb-11 pl-[26px] flex flex-col gap-y-4" data-v-8398da5f><svg class="w-6 h-6" data-v-8398da5f><use href="#Cooperative" data-v-8398da5f></use></svg><h2 class="font-semibold text-[24px] leading-none font-[&#39;RobotoRegular&#39;]" data-v-8398da5f> Cooperative bot </h2><h5 class="font-normal text-[16px] leading-[1.37] font-[&#39;RobotoRegular&#39;] text-[rgb(124,135,142)] tracking-[-0.16px]" data-v-8398da5f> Collaborative bot-building revolutionizing knowledge exchange and project management. </h5></div><div class="flex flex-col bg-[rgb(42,39,61)] w-px" data-v-8398da5f><div class="bg-white min-h-[24px] mt-[62px] mb-[104px]" data-v-8398da5f></div></div><div class="bg-gridient transition w-[310px] pt-[22px] pr-[26px] pb-11 pl-[26px] flex flex-col gap-y-4" data-v-8398da5f><svg class="w-6 h-6" data-v-8398da5f><use href="#botHub" data-v-8398da5f></use></svg><h2 class="font-semibold text-[24px] leading-none font-[&#39;RobotoRegular&#39;] text-white tracking-[-0.24px]" data-v-8398da5f> Bot hub </h2><h5 class="font-normal text-[16px] leading-[1.37] font-[&#39;RobotoRegular&#39;] text-[rgb(124,135,142)] tracking-[-0.16px]" data-v-8398da5f> Exploring and sharing powerful bots within a vibrant community. </h5></div><div class="bg-[rgb(42,39,61)] w-px min-h-[190px]" data-v-8398da5f></div></div><hr class="bg-[rgb(42,39,61)] w-auto h-px min-h-[1px] mb-[111px]" size="1" data-v-8398da5f>', 2);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "homePage",
  setup(__props) {
    const authStore = useAuthStore();
    if (authStore.getUserInfo) {
      router.push({ name: "app" });
      if (window.api) {
        window.api.hasLogin(true);
      }
    }
    const refRegister = ref();
    const refLogin = ref();
    const refFindPassword = ref();
    const refResetPsd = ref();
    authStore.loginRef = refLogin;
    const handleRegister = () => {
      refRegister.value.showModal();
    };
    const handleLogin = () => {
      refLogin.value.showModal();
    };
    const handleFindPassword = () => {
      refFindPassword.value.showModal();
    };
    const getStart = () => {
      handleRegister();
    };
    const login = () => {
      handleLogin();
    };
    const register = () => {
      handleRegister();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { class: "h-full overflow-scroll bg-black flex flex-col items-center" }, [
          _hoisted_1,
          createBaseVNode("div", { class: "flex flex-col border-solid border-[rgba(49,54,60,0.6)] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px] w-full relative" }, [
            _hoisted_2,
            createBaseVNode("div", { class: "flex justify-between gap-x-2.5 relative my-[5px] mx-6" }, [
              _hoisted_3,
              createBaseVNode("div", { class: "w-[197px] flex gap-x-4 my-[3px]" }, [
                createBaseVNode("div", {
                  onClick: login,
                  class: "transition hover:-translate-y-1 hover:scale-110 flex flex-col rounded-lg outline outline-[rgb(103,108,114)] outline-1 outline-offset-[-1px] w-[86px] overflow-hidden"
                }, _hoisted_5),
                createBaseVNode("div", { class: "transition hover:-translate-y-1 hover:scale-110 flex flex-col bg-[rgb(95,68,255)] rounded-lg outline outline-[rgb(95,68,255)] outline-1 outline-offset-[-1px] w-[95px] overflow-hidden" }, [
                  createBaseVNode("div", {
                    onClick: register,
                    class: "cursor-pointer text-[14px] leading-none font-['RobotoMedium'] text-white tracking-[-0.15px] my-3 mx-auto"
                  }, " Sign up ")
                ])
              ])
            ])
          ]),
          createBaseVNode("div", { class: "w-fit flex flex-col items-center mt-[126px] animate__animated animate__fadeInDown z-10" }, [
            _hoisted_6,
            createBaseVNode("div", {
              onClick: getStart,
              class: "transition hover:-translate-y-1 hover:scale-110 cursor-pointer flex flex-col bg-[rgb(95,68,255)] rounded-lg outline outline-[rgb(95,68,255)] outline-1 outline-offset-[-1px] w-[145px] overflow-hidden mt-9"
            }, _hoisted_8)
          ]),
          _hoisted_9
        ]),
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
const homePage_vue_vue_type_style_index_0_scoped_8398da5f_lang = "";
const homePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8398da5f"]]);
export {
  homePage as default
};
