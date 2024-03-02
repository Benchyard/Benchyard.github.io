import { d as defineComponent, a as ref, z as reactive, h as resolveComponent, o as openBlock, i as createBlock, w as withCtx, c as createElementBlock, e as createVNode, J as withKeys, j as createTextVNode, b as createBaseVNode, ab as apiRegister, E as ElMessage, p as pushScopeId, g as popScopeId, A as useRouter, u as useAuthStore, N as ElLoading, ac as apiLogin, G as apiGetUserInfo, X as UpdateBotAndSetPanel, K as withModifiers, ad as apiSendResetPasswordEmail, a2 as useRoute, ae as apiResetPassword, I as onMounted, a4 as apiGetBotInfoFromCode, t as toDisplayString, a5 as apiAcceptInvitation } from "./index-f728f539.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _withScopeId$4 = (n) => (pushScopeId("data-v-228575cd"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  class: "logo",
  style: { "width": "68px", "height": "68px" }
};
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" }, null, -1));
const _hoisted_3$4 = [
  _hoisted_2$4
];
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("h4", null, "Create your account", -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "register",
  props: {
    fromId: {
      // 推荐人ID
      type: String,
      default: ""
    }
  },
  emits: ["toLogin"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const dialogVisible = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
      username: "",
      email: "",
      password: "",
      checkPass: "",
      fromId: props.fromId
    });
    const validatePass = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (ruleForm.checkPass !== "") {
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
      } else if (value !== ruleForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const validateUsername = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the username"));
      } else {
        const reg = /^[a-zA-Z0-9_.-]*$/;
        if (!reg.test(value)) {
          callback(new Error("Only letters, numbers, underscores, dots and dashes are allowed"));
        } else {
          callback();
        }
      }
    };
    const rules = reactive({
      username: [
        { required: true, message: "Please input Username", trigger: "blur" },
        { min: 3, max: 18, message: "Length should be 3 to 18", trigger: "blur" },
        { validator: validateUsername, trigger: "blur" }
      ],
      email: [
        { required: true, message: "Please input email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
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
    const showModal = () => {
      dialogVisible.value = true;
    };
    const toLogIn = () => {
      dialogVisible.value = false;
      setTimeout(() => {
        emit("toLogin");
      }, 250);
    };
    const handleSave = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          apiRegister({
            name: ruleForm.username,
            username: ruleForm.username,
            email: ruleForm.email,
            password: ruleForm.password
          }).then((res) => {
            console.log(res);
            ElMessage({
              message: "resigster is successfully",
              type: "success",
              duration: 3e3
            });
            toLogIn();
          });
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    __expose({
      showModal
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialogVisible.value = $event),
        "close-on-click-modal": false,
        width: "536",
        class: "benchyard-dialog"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4)),
          _hoisted_4$4,
          createVNode(_component_el_form, {
            ref_key: "ruleFormRef",
            ref: ruleFormRef,
            model: ruleForm,
            rules,
            class: "demo-ruleForm",
            "label-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "Username",
                prop: "username"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.username,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.username = $event),
                    class: "noPaddingIpt",
                    placeholder: "Enter your name",
                    autocomplete: "off"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Email",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.email,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.email = $event),
                    class: "noPaddingIpt",
                    placeholder: "Enter your email",
                    autocomplete: "off"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Password",
                prop: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.password,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ruleForm.password = $event),
                    class: "noPaddingIpt",
                    placeholder: "Must have 8-32 characters",
                    type: "password",
                    autocomplete: "off",
                    "show-password": true
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Password again",
                prop: "checkPass"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.checkPass,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ruleForm.checkPass = $event),
                    class: "noPaddingIpt",
                    placeholder: "Same as above",
                    type: "password",
                    autocomplete: "off",
                    "show-password": true,
                    onKeyup: _cache[4] || (_cache[4] = withKeys(($event) => handleSave(ruleFormRef.value), ["enter"]))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                class: "submit",
                size: "large",
                onClick: _cache[5] || (_cache[5] = ($event) => handleSave(ruleFormRef.value))
              }, {
                default: withCtx(() => [
                  createTextVNode("Sign up")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"]),
          createBaseVNode("p", { class: "tips" }, [
            createTextVNode(" Already have an account? "),
            createBaseVNode("a", {
              href: "javascript:;",
              onClick: toLogIn,
              title: "Log in"
            }, "Log in")
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const register_vue_vue_type_style_index_0_scoped_228575cd_lang = "";
const CompRegister = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-228575cd"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-496d4c46"), n = n(), popScopeId(), n);
const _hoisted_1$3 = {
  class: "logo",
  style: { "width": "70px", "height": "70px" }
};
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" }, null, -1));
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h4", null, "Log in", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { style: { "flex": "1" } }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "or" }, null, -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "login",
  emits: ["toRegister", "toFindPassword", "loginSuccess"],
  setup(__props, { expose: __expose, emit }) {
    const router = useRouter();
    const authStore = useAuthStore();
    const dialogVisible = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
      email: "",
      password: ""
    });
    const rules = reactive({
      email: [
        { required: true, message: "Please input email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: true, message: "Please input password", trigger: "blur" },
        { min: 8, max: 32, message: "Length should be 8 to 32", trigger: "blur" }
      ]
    });
    const showModal = () => {
      dialogVisible.value = true;
      ruleForm.email = "";
      ruleForm.password = "";
    };
    const hideModal = () => {
      dialogVisible.value = false;
    };
    const toRegister = () => {
      dialogVisible.value = false;
      setTimeout(() => {
        emit("toRegister");
      }, 250);
    };
    const toFindPassword = () => {
      dialogVisible.value = false;
      setTimeout(() => {
        emit("toFindPassword");
      }, 250);
    };
    const handleLogin = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate(async (valid, fields) => {
        if (valid) {
          const loading = ElLoading.service({
            lock: true,
            text: "Loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              loading.close();
              console.log("escape");
            }
          });
          try {
            await apiLogin({ identifier: ruleForm.email, password: ruleForm.password });
            const res = await apiGetUserInfo();
            authStore.setLogin(res.data);
            await UpdateBotAndSetPanel();
            dialogVisible.value = false;
            router.push({ path: "/app" });
          } catch (err) {
            ElMessage({ message: err.response.data.message, type: "error", duration: 3e3 });
          }
          loading.close();
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const keyDown = (e) => {
      if (e.keyCode == 13 || e.keyCode == 100) {
        handleLogin(ruleFormRef.value);
      }
    };
    __expose({
      showModal,
      hideModal
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialogVisible.value = $event),
        "close-on-click-modal": false,
        width: "536",
        class: "benchyard-dialog"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3)),
          _hoisted_4$3,
          createVNode(_component_el_form, {
            ref_key: "ruleFormRef",
            ref: ruleFormRef,
            model: ruleForm,
            rules,
            class: "ruleForm",
            "label-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "Email",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.email,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.email = $event),
                    class: "noPaddingIpt",
                    placeholder: "Enter your email"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { prop: "password" }, {
                label: withCtx(() => [
                  createBaseVNode("div", { class: "form-item-label" }, [
                    createTextVNode(" Password "),
                    _hoisted_5,
                    createBaseVNode("a", {
                      onClick: toFindPassword,
                      class: "forgotpwd"
                    }, "Forgot password?")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.password,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.password = $event),
                    class: "noPaddingIpt",
                    placeholder: "Enter your password",
                    onKeyup: withKeys(keyDown, ["enter"]),
                    type: "password",
                    "show-password": true
                  }, null, 8, ["modelValue", "onKeyup"])
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                class: "submit",
                size: "large",
                onClick: _cache[2] || (_cache[2] = ($event) => handleLogin(ruleFormRef.value))
              }, {
                default: withCtx(() => [
                  createTextVNode("Sign in")
                ]),
                _: 1
              }),
              _hoisted_6,
              createBaseVNode("div", { class: "register-wrap" }, [
                createBaseVNode("a", {
                  href: "javascript:;",
                  onClick: toRegister,
                  title: "Create new accout"
                }, "Create new accout")
              ])
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const login_vue_vue_type_style_index_0_scoped_496d4c46_lang = "";
const CompLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-496d4c46"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-04d94de2"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  class: "logo",
  style: { "width": "68px", "height": "68px" }
};
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" }, null, -1));
const _hoisted_3$2 = [
  _hoisted_2$2
];
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h4", null, "Find your password", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "findPassword",
  emits: ["toRegister", "toLogin"],
  setup(__props, { expose: __expose, emit }) {
    const dialogVisible = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
      email: "",
      password: ""
    });
    const rules = reactive({
      email: [
        { required: true, message: "Please input email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ]
    });
    const showModal = () => {
      dialogVisible.value = true;
    };
    const toRegister = () => {
      dialogVisible.value = false;
      setTimeout(() => {
        emit("toRegister");
      }, 250);
    };
    const toLogin = () => {
      dialogVisible.value = false;
      setTimeout(() => {
        emit("toLogin");
      }, 250);
    };
    const onSubmit = () => {
      ruleFormRef.value.validate((valid) => {
        if (!valid) {
          return false;
        } else {
          apiSendResetPasswordEmail({ email: ruleForm.email }).then((res) => {
            console.log(res);
            ElMessage({
              message: "Check your email to reset the password.",
              type: "success",
              duration: 3e3,
              onClose: () => {
                dialogVisible.value = false;
              }
            });
          }).catch((err) => {
            console.log(err);
          });
          return true;
        }
      });
    };
    __expose({
      showModal
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialogVisible.value = $event),
        "close-on-click-modal": false,
        width: "536",
        class: "benchyard-dialog"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2)),
          _hoisted_4$2,
          createVNode(_component_el_form, {
            onSubmit: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"])),
            ref_key: "ruleFormRef",
            ref: ruleFormRef,
            model: ruleForm,
            rules,
            class: "ruleForm",
            "label-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "Email",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    onKeyup: withKeys(onSubmit, ["enter"]),
                    modelValue: ruleForm.email,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.email = $event),
                    class: "noPaddingIpt",
                    placeholder: "Enter your email",
                    autocomplete: "off"
                  }, null, 8, ["onKeyup", "modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                class: "submit",
                size: "large",
                onClick: onSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode("Enter")
                ]),
                _: 1
              }),
              createBaseVNode("div", { class: "register-wrap" }, [
                createBaseVNode("a", {
                  href: "javascript:;",
                  onClick: toLogin,
                  title: "Log in"
                }, "Log in"),
                createTextVNode(" / "),
                createBaseVNode("a", {
                  href: "javascript:;",
                  onClick: toRegister,
                  title: "Sign up"
                }, "Sign up")
              ])
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const findPassword_vue_vue_type_style_index_0_scoped_04d94de2_lang = "";
const CompFindPassword = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-04d94de2"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-9da50a3d"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  class: "logo",
  style: { "width": "68px", "height": "68px" }
};
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" }, null, -1));
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h4", null, "Reset Password", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "resetPsd",
  props: {
    fromId: {
      // 推荐人ID
      type: String,
      default: ""
    }
  },
  emits: ["toLogin"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const route = useRoute();
    const dialogVisible = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
      password: "",
      checkPass: "",
      fromId: props.fromId
    });
    const validatePass = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (ruleForm.checkPass !== "") {
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
      } else if (value !== ruleForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const rules = reactive({
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
    const showModal = () => {
      dialogVisible.value = true;
    };
    const toLogIn = () => {
      dialogVisible.value = false;
      setTimeout(() => {
        emit("toLogin");
      }, 250);
    };
    const handleReset = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          apiResetPassword({
            "token": route.query.token,
            "password": ruleForm.password
          }).then((res) => {
            console.log(res);
            ElMessage({
              message: "reset password is successfully",
              type: "success",
              duration: 3e3
            });
            toLogIn();
          });
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    __expose({
      showModal
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => dialogVisible.value = $event),
        "close-on-click-modal": false,
        width: "536",
        class: "benchyard-dialog"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1)),
          _hoisted_4$1,
          createVNode(_component_el_form, {
            ref_key: "ruleFormRef",
            ref: ruleFormRef,
            model: ruleForm,
            rules,
            class: "demo-ruleForm",
            "label-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "Password",
                prop: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.password,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.password = $event),
                    class: "noPaddingIpt",
                    placeholder: "Must have 8-32 characters",
                    type: "password",
                    autocomplete: "off",
                    "show-password": true
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Password again",
                prop: "checkPass"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.checkPass,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.checkPass = $event),
                    class: "noPaddingIpt",
                    placeholder: "Same as above",
                    type: "password",
                    autocomplete: "off",
                    "show-password": true,
                    onKeyup: _cache[2] || (_cache[2] = withKeys(($event) => handleReset(ruleFormRef.value), ["enter"]))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                class: "submit",
                size: "large",
                onClick: _cache[3] || (_cache[3] = ($event) => handleReset(ruleFormRef.value))
              }, {
                default: withCtx(() => [
                  createTextVNode("Reset")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"]),
          createBaseVNode("p", { class: "tips" }, [
            createTextVNode("Already have an account? "),
            createBaseVNode("a", {
              href: "javascript:;",
              onClick: toLogIn,
              title: "Log in"
            }, "Log in")
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const resetPsd_vue_vue_type_style_index_0_scoped_9da50a3d_lang = "";
const resetPsd = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9da50a3d"]]);
const _withScopeId = (n) => (pushScopeId("data-v-da7be994"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "logo",
  style: { "width": "68px", "height": "68px" }
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" }, null, -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", null, "Bot Invitation", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "botInvitation",
  setup(__props) {
    const route = useRoute();
    const dialogVisible = ref(false);
    const searchBotInfo = ref();
    onMounted(() => {
      if (route.query.code) {
        console.log("code", route.query.code);
        apiGetBotInfoFromCode(route.query.code).then((res) => {
          console.log(res.data);
          searchBotInfo.value = res.data;
          dialogVisible.value = true;
        });
        dialogVisible.value = true;
      }
    });
    const acceptInvitation = () => {
      apiAcceptInvitation({ code: route.query.code }).then(() => {
        console.log("acceptInvitation");
        dialogVisible.value = false;
      });
    };
    const rejectInvitation = () => {
      console.log("rejectInvitation");
      dialogVisible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event),
        "close-on-click-modal": false,
        width: "536",
        class: "benchyard-dialog"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3)),
          _hoisted_4,
          createTextVNode(" " + toDisplayString(searchBotInfo.value.name) + " " + toDisplayString(searchBotInfo.value.description) + " ", 1),
          createVNode(_component_el_button, {
            type: "primary",
            class: "submit",
            size: "large",
            onClick: acceptInvitation
          }, {
            default: withCtx(() => [
              createTextVNode("Reset")
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            class: "submit",
            size: "large",
            onClick: rejectInvitation
          }, {
            default: withCtx(() => [
              createTextVNode("Reset")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const botInvitation_vue_vue_type_style_index_0_scoped_da7be994_lang = "";
const botInvitation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da7be994"]]);
export {
  CompRegister as C,
  CompLogin as a,
  CompFindPassword as b,
  botInvitation as c,
  resetPsd as r
};
