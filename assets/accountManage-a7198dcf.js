import { C as CompRegister, a as CompLogin, b as CompFindPassword, r as resetPsd, c as botInvitation } from "./botInvitation-e56b6d88.js";
import { d as defineComponent, u as useAuthStore, a5 as useRoute, a as ref, D as onMounted, c as createElementBlock, e as createVNode, F as Fragment, o as openBlock } from "./index-fb62e72d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accountManage",
  emits: ["panelChange", "loginSuccess"],
  setup(__props, { expose: __expose, emit }) {
    const authStore = useAuthStore();
    const route = useRoute();
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
    onMounted(() => {
      if (route.query.type === "register") {
        handleRegister();
      }
      if (route.query.type === "login") {
        handleLogin();
      }
    });
    __expose({
      handleLogin
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
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
const accountManage_vue_vue_type_style_index_0_scoped_813eb021_lang = "";
const accountManage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-813eb021"]]);
export {
  accountManage as default
};
