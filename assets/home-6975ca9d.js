import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createElementBlock, f as createStaticVNode, d as defineComponent, a as ref, h as resolveComponent, i as createBlock, w as withCtx, p as pushScopeId, g as popScopeId, b as createBaseVNode, j as createTextVNode, e as createVNode, k as watch, n as normalizeStyle, l as withDirectives, v as vShow, F as Fragment, m as renderList, t as toDisplayString, q as createCommentVNode, s as renderSlot, x as useBotStore, y as usePanelStore, z as reactive, A as useRouter, B as unref, C as apiUserInfoAttributeSet, u as useAuthStore, D as resolveDirective, E as ElMessage, G as apiGetUserInfo, H as apiUpdateUserInfo, I as onMounted, T as Tribute, J as withKeys, K as withModifiers, L as usePrivateChatStore, M as apiFileAdd, N as ElLoading, O as addPrivateChat, P as nextTick, Q as arrow_left_bold_default, R as arrow_right_bold_default, S as vModelCheckbox, U as h, V as arrow_down_bold_default, W as apiBotCreate, X as UpdateBotAndSetPanel, Y as apiBotFileAdd, Z as apiBotUploadAvatar, _ as vModelText, $ as apiBotUpdate, a0 as apiBotFileRemove, a1 as removeTabAndSave, a2 as useRoute, a3 as addTabAndSave, a4 as apiGetBotInfoFromCode, a5 as apiAcceptInvitation, a6 as saveBots, a7 as apiBotInfo, a8 as apiShareCode, a9 as apiBotDelete, aa as removeTabByBotId } from "./index-f728f539.js";
import { s as scrollMessage } from "./scrollMessage-0ede59f1.js";
import { C as CompRegister, a as CompLogin, b as CompFindPassword, r as resetPsd, c as botInvitation } from "./botInvitation-2e165394.js";
const _sfc_main$k = {};
const _hoisted_1$k = { class: "partial-code main no-scrollbar" };
const _hoisted_2$i = /* @__PURE__ */ createStaticVNode('<section class="section1_1"><div class="flex_col"><h1 class="hero_title">Unlock the power of AI</h1><h4 class="highlights">Meet the synapse of our ai chat app revolutionizing conversations</h4></div><div class="box"><div class="box1"><div class="text">Monthly</div></div><div class="box1" style="background:transparent;"><div class="text">Anualy (-20%)</div></div></div><div class="flex_row"><div class="flex_row__cell"><div class="box2"><div class="flex_col1"><h1 class="title">Free</h1><h5 class="highlights1">Basic chat functionality</h5><div class="flex_row1"><div class="flex_row1__cell"><h1 class="title1">$</h1></div><div class="flex_row1__cell1"><h1 class="hero_title1">0</h1></div><div class="flex_row1__cell2"><h1 class="title11">/ mo</h1></div></div><div class="text11">Free forever</div></div><div class="box3"><div class="flex_row2"><div class="flex_row2__cell"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="text2">5 chatbots</div></div><div class="flex_row3"><div class="flex_row3__cell"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer"></div><div class="text2">Up to 1000 messages/mo</div></div><div class="flex_row3"><div class="flex_row3__cell1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer1"></div><div class="text2">Basic analytics</div></div><div class="flex_row3"><div class="flex_row3__cell2"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer2"></div><div class="text2">Basic analytics</div></div><div class="flex_row4"><div class="icon1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row4__spacer"></div><div class="text12">Custom chatbot</div></div><div class="flex_row41"><div class="icon1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row41__spacer"></div><div class="text12">No support</div></div><div class="box4"><div class="text21">Current plan</div></div></div></div></div><div class="flex_row__spacer"></div><div class="flex_row__cell"><div class="box5"><div class="flex_col1"><div class="flex_row5"><div class="flex_row5__cell"><h1 class="title2">Standard</h1></div><div class="flex_row5__spacer"></div><div class="flex_row5__cell1"><div class="box6"><div class="info">Popular</div></div></div></div><h5 class="highlights1">Advanced chat features</h5><div class="flex_row1"><div class="flex_row1__cell3"><h1 class="title1">$</h1></div><div class="flex_row1__cell4"><h1 class="hero_title11">29</h1></div><div class="flex_row1__cell5"><h1 class="title11">/ mo</h1></div></div><div class="text11">Per month, per team members</div></div><div class="box7"><div class="flex_row6"><div class="flex_row6__cell"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row6__spacer"></div><div class="text2">10 chatbots</div></div><div class="flex_row3"><div class="flex_row3__cell3"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer3"></div><div class="text2">Up to 5000 messages/mo</div></div><div class="flex_row3"><div class="flex_row3__cell4"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer4"></div><div class="text2">Basic analytics</div></div><div class="flex_row3"><div class="flex_row3__cell5"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer5"></div><div class="text2">Basic analytics</div></div><div class="flex_row3"><div class="flex_row3__cell6"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer6"></div><div class="text2">Custom chatbot</div></div><div class="flex_row3"><div class="flex_row3__cell7"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer7"></div><div class="text2">Email support</div></div><div class="box8"><div class="text22">Upgrade</div></div></div></div></div><div class="flex_row__spacer"></div><div class="flex_row__cell"><div class="box9"><h1 class="title3">Pro</h1><h5 class="highlights11">Custom chat solutions</h5><div class="flex_row14"><h1 class="title12">$</h1><div class="flex_row14__cell"><h1 class="hero_title12">49</h1></div><div class="flex_row14__cell1"><h1 class="title13">/ mo</h1></div></div><div class="text13">Per month, per team members</div><div class="box7"><div class="flex_row6"><div class="flex_row6__cell1"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row6__spacer1"></div><div class="text2">Unlimited chatbots</div></div><div class="flex_row3"><div class="flex_row3__cell8"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer8"></div><div class="text2">Unlimited messages</div></div><div class="flex_row3"><div class="flex_row3__cell9"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer9"></div><div class="text2">Custom analytics</div></div><div class="flex_row3"><div class="flex_row3__cell10"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer10"></div><div class="text2">Custom integrations</div></div><div class="flex_row3"><div class="flex_row3__cell11"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer11"></div><div class="text2">Custom chatbot</div></div><div class="flex_row3"><div class="flex_row3__cell12"><svg class="icon"><use href="#checkCircle"></use></svg></div><div class="flex_row3__spacer12"></div><div class="text2">Priority email and chat support</div></div><div class="box8"><div class="text22">Upgrade</div></div></div></div></div></div></section><section class="section2_1"><section class="section2"><div class="flex_col2"><h2 class="medium_title">Usage</h2><div class="flex_row7"><div class="flex_row7__cell" style="background-color:rgb(75, 171, 113);"></div><div class="flex_row7__cell1"><div class="text14">Used</div></div><div class="flex_row7__spacer"></div><div class="flex_row7__cell" style="background-color:#5F44FF;"></div><div class="flex_row7__cell2"><div class="text14">Left</div></div><div class="flex_row7__spacer"></div><div class="flex_row7__cell" style="background-color:#8364FF;"></div><div class="flex_row7__cell3"><div class="text14">Bonus</div></div></div><div class="flex_row8"><div class="group"><div class="group1"><div class="rect"></div><div class="rect1"></div></div><div class="rect2"></div></div><div class="flex_row8__spacer"></div><div class="text23">$0.20 / $18.00</div></div><div class="flex_col3"><h2 class="medium_title">Earn credits by inviting friends 🎉</h2><div class="text3">For every friend you invite, you&#39;ll earn 5 credits, and they&#39;ll get extra 5 credits.</div><div class="box10"><h5 class="highlights2">https://easy-peasy.ai/?from=7</h5></div></div></div></section></section><section class="section3_1"><section class="section3"><div class="flex_col4"><h2 class="medium_title1">Your referrals</h2><h5 class="highlights3_box"><span class="highlights3"><span class="highlights3_span0">Total Invite: </span><span class="highlights3_span1">4</span></span></h5><div class="text31">A list of all the users registered by your invite link.</div><div class="flex_col5"><div class="content_box"><div class="flex_row9"><div class="flex_row9__cell"><div class="text15">Referral</div></div><div class="flex_row9__spacer"></div><div class="flex_row9__cell1"><div class="text16">Updated at</div></div><div class="flex_row9__spacer1"></div><div class="flex_row9__cell2"><div class="text17">Status</div></div></div></div><div class="flex_row10"><div class="flex_row10__cell"><div class="flex_row11"><div class="flex_row11__cell"></div><div class="flex_row11__cell1"><div class="flex_col6"><h5 class="highlights12">Tran Mau Tri Tam</h5><div class="info1">qi.sun@gmail.com</div></div></div></div></div><div class="flex_row10__spacer"></div><div class="flex_row10__cell1"><h5 class="highlights13">17/05/2023</h5></div><div class="flex_row10__spacer1"></div><div class="flex_row10__cell2"><h5 class="highlights14">Registered</h5></div></div></div></div></section></section>', 3);
const _hoisted_5$f = [
  _hoisted_2$i
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("main", _hoisted_1$k, _hoisted_5$f);
}
const subscription = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$2]]);
const _withScopeId$e = (n) => (pushScopeId("data-v-1765a2b8"), n = n(), popScopeId(), n);
const _hoisted_1$j = {
  class: "logo",
  style: { "width": "70px", "height": "70px" }
};
const _hoisted_2$h = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" }, null, -1));
const _hoisted_3$g = [
  _hoisted_2$h
];
const _hoisted_4$f = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("h4", null, "Private Policy", -1));
const _hoisted_5$e = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("div", { class: "page-body overflow-scroll h-[400px] text-justify" }, [
  /* @__PURE__ */ createBaseVNode("p", {
    id: "ecc04db0-a6e6-4990-8f0b-d6ce95dfcdb1",
    class: ""
  }, "Last revised: January 12, 2024"),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "53cae3ae-b6b2-4e8d-9a44-181c78cd7d45",
    class: "numbered-list",
    start: "1"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Introduction"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("Please carefully read this Privacy Policy before using Benchyard’s Services, including the Website, Mobile Application, and Cloud Storage (collectively, the “Service”). This Privacy Policy outlines the types of information we collect, and our practices for using, sharing, and safeguarding this information. Your access to and use of the Service are conditioned upon your acceptance of and compliance with our Terms of Service, available at: "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("a", { href: "https://www.benchyard.com/terms" }, "https://www.benchyard.com/terms"),
      /* @__PURE__ */ createTextVNode(" (“Terms of Service”), which incorporate this Privacy Policy. Benchyard (“Company”) is responsible for operating the Service. By using the Service, you consent to the collection, use, and sharing of your data in accordance with this policy. Terms used in this Privacy Policy have the same meanings as in our Terms of Service, unless otherwise defined here. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "552fc5f2-e8e5-4ff1-93a2-caf7774295f1",
    class: "numbered-list",
    start: "2"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Definitions")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "6523099d-4d3e-43c2-a80b-08ef1f2c9ff9",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Application"),
      /* @__PURE__ */ createTextVNode(" refers to the Benchyard mobile application. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "71589809-3a34-4a39-91c0-b2656ac0d59a",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Cookies"),
      /* @__PURE__ */ createTextVNode(" are small pieces of data stored on your device. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "3c9f95a9-cc22-4d8f-9f08-8d2f9c94c40a",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Device"),
      /* @__PURE__ */ createTextVNode(" refers to any device that can access the Service, such as a computer or a mobile phone. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "60e926b5-819a-4ef5-b177-0377a21dfe84",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Data Controller"),
      /* @__PURE__ */ createTextVNode(" is the entity that decides how and why personal data is processed. In this case, we are the Data Controller of your data. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "2ae5535b-aa17-43cc-b3ab-2f82b4be5a12",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Data Processors (or Service Providers)"),
      /* @__PURE__ */ createTextVNode(" are any natural or legal persons who process data on behalf of the Data Controller. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "aff7d455-0ed8-4647-aa06-4a259dc65b4f",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Data Subject"),
      /* @__PURE__ */ createTextVNode(" is any living individual who is using our Service and is the subject of Personal Data. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "3585a294-bae8-4b49-aaa3-2137a35514e4",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Personal Data"),
      /* @__PURE__ */ createTextVNode(" is any information that relates to an identified or identifiable individual. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "e4020190-ea58-4084-894f-b9863a6b1939",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Service"),
      /* @__PURE__ */ createTextVNode(" collectively refers to the Website, Mobile Application, and Cloud Storage provided to the user. ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ul", {
    id: "fb2c1fbe-7f0f-49f3-9fdd-0f27f233b030",
    class: "bulleted-list"
  }, [
    /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Usage Data"),
      /* @__PURE__ */ createTextVNode(" is data collected automatically, generated either by the use of the Service or from the Service infrastructure itself (e.g., duration of a page visit). ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "eb24fd4f-110c-4ab9-9a0f-8f94b342dbcf",
    class: "numbered-list",
    start: "1"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Data Controller"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("Benchyard is the controller of your Personal Data."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "ff2649d9-e624-4cf9-bf77-41a6ef670ab8",
    class: "numbered-list",
    start: "2"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Information Collection and Use"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("We collect various types of information for multiple purposes to provide and enhance our Service to you."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "cd401a53-50c8-4705-ad19-b4349b6db558",
    class: "numbered-list",
    start: "3"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Types of Data Collected"),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "a45d1919-c194-4dae-ab71-6a1b205f3854",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
          /* @__PURE__ */ createBaseVNode("strong", null, "Personal Data"),
          /* @__PURE__ */ createTextVNode(": This may include, but is not limited to, email address, first name, last name, Cookies, and Usage Data. ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "d1976b75-f224-420e-951f-625534642ecc",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
          /* @__PURE__ */ createBaseVNode("strong", null, "Usage Data"),
          /* @__PURE__ */ createTextVNode(": Information such as your device's IP address, browser type and version, pages visited, time and date of your visit, time spent on those pages, unique device identifiers, and other diagnostic data. ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "0ba63e84-390d-4d58-8ded-8320e6283c2e",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
          /* @__PURE__ */ createBaseVNode("strong", null, "Tracking & Cookies Data"),
          /* @__PURE__ */ createTextVNode(": We use cookies and similar tracking technologies to monitor activity on our Service and hold certain information. ")
        ])
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "6fa543d4-e88c-44de-8d60-fcbf4dbbcd76",
    class: "numbered-list",
    start: "4"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Use of Data"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("Benchyard uses the collected data for various purposes:"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "ba2e4ef1-de07-4966-838c-2910e3aaab26",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "To provide and maintain our Service")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "4b1506ed-020e-46ea-9e6b-5a205a731ad1",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "To notify you about changes to our Service")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "52245edb-d0a2-46a4-9c9e-a6dab94dbc02",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, " To allow you to participate in interactive features of our Service when you choose to do so ")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "2159d90c-4f05-4412-9dd6-56d506bbffa1",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "To provide customer support")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "b32b0fb9-1de5-449c-bce3-90bf3df8134b",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, " To gather valuable information so we can improve our Service ")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "e4d10097-a94d-42a5-b91a-045d390dd8d6",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "To monitor the usage of our Service")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "957055d8-3765-4615-8e37-0580178910ae",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "To detect, prevent, and address technical issues")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "97231f6c-f33c-42d5-897c-c99ad4930564",
    class: "numbered-list",
    start: "5"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Retention of Data"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("We retain your Personal Data only as long as necessary for the purposes set out in this Privacy Policy."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "4c25b541-5330-4dea-a3f5-88da44c63961",
    class: "numbered-list",
    start: "6"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Transfer of Data"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("Your information may be transferred to computers located outside of your state, country, or other governmental jurisdiction where data protection laws may differ."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "39d24c66-9259-43d1-9c7a-c85b411266dc",
    class: "numbered-list",
    start: "7"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Disclosure of Data"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("We may disclose your Personal Data under certain circumstances, such as to comply with legal obligations or protect the rights of the Company."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "3557b1a8-6391-4ee1-af9e-10630268ade2",
    class: "numbered-list",
    start: "8"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Security of Data"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("The security of your data is important to us, but no method of transmission over the Internet or electronic storage is 100% secure."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "b1fc52bf-46a4-4870-8bf1-df42c2c28352",
    class: "numbered-list",
    start: "9"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Your Data Protection Rights"),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "1e4873b1-eb33-4a77-8198-217fc5efbb60",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, " Right to access, update, or delete the information we have on you. ")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "37d05b80-6e22-46bd-a32f-025463d4b074",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "Right to rectification.")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "22b4b72d-f040-454c-83b5-e597031e61ce",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "Right to object.")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "f422d408-7839-4d14-a04e-42d1d4eeba96",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "Right to data portability.")
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "3d51d5bd-da6b-4415-837c-1dfb35bf1cf7",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, "Right to withdraw consent.")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "d2747a39-0a9d-48c3-add8-71b0c600b5eb",
    class: "numbered-list",
    start: "10"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "California Residents"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("If you are a resident of California, you have additional privacy rights and protections under the California Consumer Privacy Act (CCPA)."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "1453fd30-912c-4fd9-bcec-2ae39c58aacc",
    class: "numbered-list",
    start: "11"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Service Providers"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("We may employ third-party companies and individuals to facilitate our Service, perform Service-related services, or assist us in analyzing how our Service is used."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "5853aed0-0fac-4191-9738-df1512f66333",
    class: "numbered-list",
    start: "12"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Links to Other Sites"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("Our Service may contain links to other sites not operated by us. If you click on a third-party link, you will be directed to that third party's site."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "c52861b9-06a8-4671-80e1-490e6b49624a",
    class: "numbered-list",
    start: "13"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Children's Privacy"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("Our Service does not address anyone under the age of 13."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "449ef50c-342c-4384-8bb3-4036b68841a3",
    class: "numbered-list",
    start: "14"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Changes to This Privacy Policy"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("We may update our Privacy Policy from time to time and will notify you of any changes by posting the new Privacy Policy on this page."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "fee0ee10-3809-4a82-9bc8-44d7574c93f2",
    class: "numbered-list",
    start: "15"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Contact Us"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("If you have any questions about this Privacy Policy, please contact us at "),
      /* @__PURE__ */ createBaseVNode("a", { href: "mailto:support@benchyard.com" }, "support@benchyard.com"),
      /* @__PURE__ */ createTextVNode(". ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "9cb72ebb-3331-40ba-88d9-4b8f1c7c8b03",
    class: "numbered-list",
    start: "16"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "International Users")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("p", {
    id: "42a53a9b-0848-43c3-8a63-241a4a413c73",
    class: ""
  }, " We adhere to the principles of the EU-U.S. and Swiss-U.S. Privacy Shield frameworks. "),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "e29e2eea-c594-4f55-bd32-9f4fc10106e0",
    class: "numbered-list",
    start: "1"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Privacy Policy Addendum for Specific Regions"),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "f43107ea-e2e7-4258-ab59-342d2b22a8d8",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
          /* @__PURE__ */ createBaseVNode("strong", null, "EU Users"),
          /* @__PURE__ */ createTextVNode(": Additional rights under the General Data Protection Regulation (GDPR). ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "d28dbd03-aec0-47a0-8757-c8eff8931239",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
          /* @__PURE__ */ createBaseVNode("strong", null, "Canadian Users"),
          /* @__PURE__ */ createTextVNode(": We comply with Canadian federal and provincial privacy laws. ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("ul", {
        id: "32d4fd58-5061-4e04-b684-47b189bcb4f2",
        class: "bulleted-list"
      }, [
        /* @__PURE__ */ createBaseVNode("li", { style: { "list-style-type": "disc" } }, [
          /* @__PURE__ */ createBaseVNode("strong", null, "Australian Users"),
          /* @__PURE__ */ createTextVNode(": We adhere to the Australian Privacy Principles (APPs). ")
        ])
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("ol", {
    type: "1",
    id: "87cf6dc7-f41b-449e-8d78-9bcfe5a86485",
    class: "numbered-list",
    start: "2"
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Effective Date"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("This Privacy Policy is effective as of January 12, 2024, and will remain in effect except with respect to any changes in its provisions in the future."),
      /* @__PURE__ */ createBaseVNode("br")
    ])
  ])
], -1));
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "privatePolicy",
  setup(__props, { expose: __expose }) {
    const dialogVisible = ref(false);
    const showModal = () => {
      dialogVisible.value = true;
    };
    const hideModal = () => {
      dialogVisible.value = false;
    };
    __expose({
      showModal,
      hideModal
    });
    return (_ctx, _cache) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event),
        width: "800",
        class: "benchyard-dialog"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$g)),
          _hoisted_4$f,
          _hoisted_5$e
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const privatePolicy_vue_vue_type_style_index_0_scoped_1765a2b8_lang = "";
const privatePolicy = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-1765a2b8"]]);
const management_vue_vue_type_style_index_0_scoped_6d972efe_lang = "";
const _sfc_main$i = {};
const _hoisted_1$i = /* @__PURE__ */ createStaticVNode('<div class="w-96 h-40 flex-col justify-center items-start gap-16 inline-flex" data-v-6d972efe><div class="w-96 justify-between items-center gap-8 inline-flex" data-v-6d972efe><div class="flex-col justify-start items-center gap-4 inline-flex" data-v-6d972efe><div class="text-center text-white text-xl font-medium leading-tight" data-v-6d972efe>Deactivate account</div><div class="text-center text-gray-500 text-sm font-normal leading-none" data-v-6d972efe>Hide your Pins and profile</div></div><div class="h-12 px-6 py-4 bg-zinc-700 rounded-xl justify-center items-center gap-2.5 flex" data-v-6d972efe><div class="text-white text-sm font-medium leading-none" data-v-6d972efe>Deactivate account</div></div></div><div class="w-96 h-40 flex-col justify-center items-start gap-16 inline-flex" data-v-6d972efe><div class="flex-col justify-start items-center gap-4 inline-flex" data-v-6d972efe><div class="text-center text-white text-xl font-medium leading-tight" data-v-6d972efe>Delete your data and account</div><div class="text-center text-gray-500 text-sm font-normal leading-none" data-v-6d972efe>Delete your account and account data</div></div><div class="h-12 px-6 py-4 bg-red-500 rounded-xl justify-center items-center gap-2.5 flex" data-v-6d972efe><div class="text-white text-sm font-medium leading-none" data-v-6d972efe>Delete account</div></div></div></div><div class="partial-code root" data-v-6d972efe><div class="flex_col" data-v-6d972efe><div class="flex_col__cell" data-v-6d972efe><div class="flex_col1" data-v-6d972efe><div class="flex_col1__cell" data-v-6d972efe><h3 class="subtitle" data-v-6d972efe>Deactivate account</h3></div><div class="flex_col1__cell" data-v-6d972efe><div class="text" data-v-6d972efe>Hide your Pins and profile</div></div><div class="flex_col1__cell" data-v-6d972efe><div class="box" data-v-6d972efe><div class="text1" data-v-6d972efe>Deactivate account</div></div></div></div></div><div class="flex_col__cell" data-v-6d972efe><div class="flex_col1" data-v-6d972efe><div class="flex_col1__cell1" data-v-6d972efe><h3 class="subtitle1" data-v-6d972efe>Delete your data and account</h3></div><div class="flex_col1__cell1" data-v-6d972efe><div class="text" data-v-6d972efe>Delete your account and account data</div></div><div class="flex_col1__cell1" data-v-6d972efe><div class="box" data-v-6d972efe><div class="text11" data-v-6d972efe>Delete account</div></div></div></div></div></div></div>', 2);
function _sfc_render$1(_ctx, _cache) {
  return _hoisted_1$i;
}
const management = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$1], ["__scopeId", "data-v-6d972efe"]]);
const _hoisted_1$h = { class: "flex flex-col gap-y-[23px] relative mr-[33px]" };
const _hoisted_2$g = { class: "flex items-center gap-x-2 relative" };
const _hoisted_3$f = /* @__PURE__ */ createStaticVNode('<div class="shrink-0 basis-[811px]"><span class="font-normal text-sm font-Roboto text-black"><span class="text-white">Allow </span><span class="font-bold text-white">Benchyard</span><span class="text-white"> to use your data for better user experience, based on</span><span class="text-[rgb(124,135,142)]"></span><span class="text-[rgb(124,130,255)]"> Benchyard Privacy Policy</span></span></div>', 1);
const _hoisted_4$e = /* @__PURE__ */ createStaticVNode('<div class="flex items-center relative"><div class="flex justify-center font-normal text-[14px] leading-none font-Roboto text-white text-center shrink-0 basis-[102px] mt-[9px] mb-2"> Delete your data</div><div class="basis-[54px]"></div><div class="grid bg-[rgb(241,77,77)] rounded-xl shrink-0 basis-[118px] relative cursor-pointer"><div class="flex items-center font-medium text-[14px] leading-none font-Roboto text-white grow mt-[9px] mx-[23px] mb-2"> Delete data</div></div></div><div class="flex items-center relative"><p class="basis-[313px] min-h-[33px]"><span class="font-normal text-[14px] leading-none font-Roboto text-black"><span class="text-white">Download your data<br></span><span class="text-[rgb(124,135,142)]">You can request a download of your data</span></span></p><div class="cursor-pointer grid bg-[rgb(57,62,68)] rounded-xl shrink-0 basis-[118px] relative"><div class="flex justify-center items-center font-medium text-[14px] leading-none font-Roboto text-white grow h-8"> Request data</div></div></div>', 2);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  setup(__props) {
    const privacy = ref(true);
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createBaseVNode("div", _hoisted_2$g, [
          createVNode(_component_el_checkbox, {
            modelValue: privacy.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => privacy.value = $event),
            size: "large",
            style: { "scale": "1.4" }
          }, null, 8, ["modelValue"]),
          _hoisted_3$f
        ]),
        _hoisted_4$e
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
const _withScopeId$d = (n) => (pushScopeId("data-v-04087243"), n = n(), popScopeId(), n);
const _hoisted_1$g = { class: "relative w-[300px]" };
const _hoisted_2$f = {
  class: "tooltips absolute z-10 bg-[var(--dialog-bg)] rounded-[6px] px-3 py-2 text-[var(--text-color)] text-sm shadow-md",
  style: { top: `${-80}px`, left: 0, right: 0, margin: "auto" }
};
const _hoisted_3$e = { class: "flex flex-row gap-1 justify-center" };
const _hoisted_4$d = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-400" }, "e.g.", -1));
const _hoisted_5$d = { class: "rounded bg-gray-300 w-6 h-6 leading-6 text-gray-400 text-center flex items-center justify-center shadow-lg" };
const _hoisted_6$d = { class: "bg-gray-300 text-center" };
const _hoisted_7$c = { class: "rounded bg-gray-300 w-6 h-6 leading-6 text-gray-400 text-center flex items-center justify-center shadow-lg" };
const _hoisted_8$c = { class: "bg-gray-300 text-center" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
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
        createBaseVNode("div", _hoisted_1$g, [
          withDirectives(createBaseVNode("div", _hoisted_2$f, [
            createBaseVNode("div", _hoisted_3$e, [
              shortcut.value.length == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _hoisted_4$d,
                (openBlock(), createElementBlock(Fragment, null, renderList(["⌘", "⇧", "A"], (key) => {
                  return createBaseVNode("div", _hoisted_5$d, [
                    createBaseVNode("span", _hoisted_6$d, toDisplayString(key), 1)
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
const shortCut = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-04087243"]]);
const _withScopeId$c = (n) => (pushScopeId("data-v-6b8dcea4"), n = n(), popScopeId(), n);
const _hoisted_1$f = { class: "setting" };
const _hoisted_2$e = { class: "setting-content" };
const _hoisted_3$d = {
  key: 0,
  class: "form"
};
const _hoisted_4$c = { class: "flex flex-col gap-6" };
const _hoisted_5$c = { class: "flex flex-row items-center gap-2" };
const _hoisted_6$c = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-left text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " Startup ", -1));
const _hoisted_7$b = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, " Launch Benchyard at Login ", -1));
const _hoisted_8$b = { class: "flex flex-row items-center gap-2" };
const _hoisted_9$b = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-left text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " FastPanel ", -1));
const _hoisted_10$b = { class: "w-[294px] h-9 px-[120px] py-2 bg-[#292D32] rounded-lg flex-col justify-center items-center gap-2 inline-flex" };
const _hoisted_11$b = { class: "text-white text-center text-sm font-['RobotoMedium'] leading-[14px] cursor-pointer w-[100px]" };
const _hoisted_12$a = { class: "flex flex-row items-center gap-2" };
const _hoisted_13$a = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-left text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " Menu bar icon ", -1));
const _hoisted_14$9 = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, " Show Benchyard in menu bar ", -1));
const _hoisted_15$9 = { class: "flex flex-row items-center gap-2" };
const _hoisted_16$8 = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-left text-gray-500 text-sm font-['RobotoMedium'] leading-[14px] w-[100px] mr-11" }, " Default bot ", -1));
const _hoisted_17$8 = { class: "flex flex-row mr-[5px] ml-[5px]" };
const _hoisted_18$7 = ["src"];
const _hoisted_19$6 = { class: "flex flex-row ml-3 my-2" };
const _hoisted_20$6 = ["src"];
const _hoisted_21$5 = { class: "font-medium text-[14px] leading-[20px] font-Roboto text-[rgb(124,135,142)] pl-[14px]" };
const _hoisted_22$5 = {
  key: 1,
  class: "form"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "settings",
  setup(__props) {
    const form = ref("FastPanel");
    const privatePolicyRef = ref();
    const botStore = useBotStore();
    const panels = usePanelStore();
    const selectionChange = (val) => {
      const bot = botStore.bots.find((item) => item.name === val);
      if (!bot)
        return;
      appSetting.defaultBot.avatar = bot.avatar || "";
    };
    const appSetting = reactive({
      ...panels.setting
    });
    watch(
      () => appSetting,
      (newProp) => {
        console.log(newProp);
        window.api?.appSetting(JSON.stringify(newProp));
        panels.setting = newProp;
      },
      { deep: true }
    );
    const router = useRouter();
    const goToHoverPage = () => {
      router.push({ name: "hoverWindow" });
    };
    const clearAllStorage = () => {
      apiUserInfoAttributeSet({ key: "panels", value: null });
      apiUserInfoAttributeSet({ key: "privateChat", value: null });
      apiUserInfoAttributeSet({ key: "bots", value: null });
    };
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$f, [
          createBaseVNode("div", _hoisted_2$e, [
            form.value === "FastPanel" ? (openBlock(), createElementBlock("div", _hoisted_3$d, [
              createBaseVNode("div", _hoisted_4$c, [
                createBaseVNode("div", _hoisted_5$c, [
                  _hoisted_6$c,
                  createVNode(_component_el_checkbox, {
                    modelValue: appSetting.lunchAtlogin,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appSetting.lunchAtlogin = $event),
                    size: "large",
                    style: { "zoom": "1.4" }
                  }, null, 8, ["modelValue"]),
                  _hoisted_7$b
                ]),
                createBaseVNode("div", _hoisted_8$b, [
                  _hoisted_9$b,
                  createVNode(shortCut, {
                    shortcut: appSetting.shortCutKey,
                    "onUpdate:shortcut": _cache[1] || (_cache[1] = ($event) => appSetting.shortCutKey = $event)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_10$b, [
                        createBaseVNode("div", _hoisted_11$b, toDisplayString(appSetting.shortCutKey), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["shortcut"])
                ]),
                createBaseVNode("div", _hoisted_12$a, [
                  _hoisted_13$a,
                  createVNode(_component_el_checkbox, {
                    modelValue: appSetting.showTray,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appSetting.showTray = $event),
                    size: "large",
                    style: { "zoom": "1.4" }
                  }, null, 8, ["modelValue"]),
                  _hoisted_14$9
                ]),
                createBaseVNode("div", _hoisted_15$9, [
                  _hoisted_16$8,
                  createVNode(_component_el_select, {
                    modelValue: appSetting.defaultBot.name,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => appSetting.defaultBot.name = $event),
                    onChange: selectionChange,
                    class: "w-[300px] createBotInput"
                  }, {
                    prefix: withCtx(({}) => [
                      createBaseVNode("div", _hoisted_17$8, [
                        appSetting.defaultBot.name ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          class: "rounded w-5 h-5 object-cover",
                          src: appSetting.defaultBot.avatar
                        }, null, 8, _hoisted_18$7)) : createCommentVNode("", true)
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(botStore).bots, (item) => {
                        return openBlock(), createBlock(_component_el_option, {
                          key: item.title,
                          label: item.title,
                          value: item.title
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_19$6, [
                              createBaseVNode("img", {
                                class: "rounded w-5 h-5 object-cover",
                                src: item.avatar
                              }, null, 8, _hoisted_20$6),
                              createBaseVNode("div", _hoisted_21$5, toDisplayString(item.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["label", "value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])
              ]),
              createBaseVNode("button", {
                class: "w-[212px] px-6 py-3 rounded-lg border justify-start items-center gap-2 inline-flex",
                onClick: clearAllStorage
              }, " Clear All Storage "),
              createBaseVNode("button", {
                class: "w-[212px] px-6 py-3 rounded-lg border justify-start items-center gap-2 inline-flex",
                onClick: goToHoverPage
              }, " go HoverPage ")
            ])) : createCommentVNode("", true),
            form.value === "Management" || form.value === "Privacy" ? (openBlock(), createElementBlock("div", _hoisted_22$5, [
              form.value === "Management" ? (openBlock(), createBlock(management, { key: 0 })) : createCommentVNode("", true),
              form.value === "Privacy" ? (openBlock(), createBlock(_sfc_main$h, { key: 1 })) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(privatePolicy, {
          ref_key: "privatePolicyRef",
          ref: privatePolicyRef
        }, null, 512)
      ], 64);
    };
  }
});
const settings_vue_vue_type_style_index_0_scoped_6b8dcea4_lang = "";
const setting = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-6b8dcea4"]]);
const baseUrl = "https://api-test.benchyard.com";
const _withScopeId$b = (n) => (pushScopeId("data-v-9b2d571a"), n = n(), popScopeId(), n);
const _hoisted_1$e = { class: "setting" };
const _hoisted_2$d = { class: "setting-content" };
const _hoisted_3$c = { class: "form" };
const _hoisted_4$b = { style: { "position": "relative" } };
const _hoisted_5$b = ["src"];
const _hoisted_6$b = {
  key: 1,
  class: "headimg-txt"
};
const _hoisted_7$a = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("svg", { class: "img-edit" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#edit" })
], -1));
const _hoisted_8$a = { class: "flex items-center gap-x-2 relative" };
const _hoisted_9$a = { class: "shrink-0 basis-[400px]" };
const _hoisted_10$a = { class: "font-normal text-[12px] font-[RobotoRegular] text-black" };
const _hoisted_11$a = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-white" }, "Allow ", -1));
const _hoisted_12$9 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-white font-[RobotoRegular]" }, "Benchyard", -1));
const _hoisted_13$9 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-white font-[RobotoRegular]" }, " to use your data for better user experience, based on", -1));
const _hoisted_14$8 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-[rgb(124,135,142)]" }, null, -1));
const _hoisted_15$8 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("div", { style: { "width": "320px", "display": "flex", "flex-direction": "row", "justify-content": "space-between" } }, [
  /* @__PURE__ */ createBaseVNode("div", null, "English"),
  /* @__PURE__ */ createBaseVNode("div", { style: { "font-size": "30px" } }, "🇺🇸")
], -1));
const _hoisted_16$7 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("div", { style: { "width": "320px", "display": "flex", "flex-direction": "row", "justify-content": "space-between" } }, [
  /* @__PURE__ */ createBaseVNode("div", null, "Chinese"),
  /* @__PURE__ */ createBaseVNode("div", { style: { "font-size": "30px" } }, "🇨🇳")
], -1));
const _hoisted_17$7 = {
  key: 0,
  class: "form"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "profile",
  setup(__props) {
    const uploadUrl = baseUrl + "/api/user/info/avatar";
    const ruleFormRef = ref();
    const form = ref("Profile");
    const language = ref("1");
    const privatePolicyRef = ref();
    const authStore = useAuthStore();
    const panels = usePanelStore();
    const imgloading = ref(false);
    const formData1 = reactive({
      username: authStore.getUserInfo.username,
      email: authStore.getUserInfo.email,
      about: "Hi, there! I am using Vue3 Admin.",
      privacy: authStore.getUserInfo.search_privacy
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
      apiGetUserInfo().then((res) => {
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
      apiUpdateUserInfo({ username: formData1.username, search_privacy: formData1.privacy }).then(
        (res) => {
          authStore.setLogin(res.data);
          ElMessage({ message: "Save success", type: "success", duration: 3e3 });
        }
      );
    };
    const appSetting = reactive({
      ...panels.setting
    });
    watch(
      () => appSetting,
      (newProp) => {
        console.log(newProp);
        window.api?.appSetting(JSON.stringify(newProp));
        panels.setting = newProp;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_button = resolveComponent("el-button");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$e, [
          createBaseVNode("div", _hoisted_2$d, [
            createBaseVNode("div", _hoisted_3$c, [
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
                      createBaseVNode("div", _hoisted_4$b, [
                        unref(authStore).getUserInfo.avatar ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: unref(authStore).getUserInfo.avatar,
                          width: "72",
                          height: "72",
                          class: "headImg",
                          alt: ""
                        }, null, 8, _hoisted_5$b)) : (openBlock(), createElementBlock("div", _hoisted_6$b, toDisplayString(defaultHeadImgTxt()), 1)),
                        _hoisted_7$a
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
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData1.username = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "Email" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        disabled: "",
                        modelValue: formData1.email,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData1.email = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_8$a, [
                    createVNode(_component_el_checkbox, {
                      modelValue: formData1.privacy,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData1.privacy = $event),
                      size: "large",
                      style: { "zoom": "1.4" }
                    }, null, 8, ["modelValue"]),
                    createBaseVNode("div", _hoisted_9$a, [
                      createBaseVNode("span", _hoisted_10$a, [
                        _hoisted_11$a,
                        _hoisted_12$9,
                        _hoisted_13$9,
                        _hoisted_14$8,
                        createBaseVNode("span", {
                          onClick: _cache[3] || (_cache[3] = ($event) => privatePolicyRef.value.showModal()),
                          class: "text-[rgb(124,130,255)] font-[RobotoRegular] cursor-pointer"
                        }, " Benchyard Privacy Policy")
                      ])
                    ])
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
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData2.pass = $event),
                        "show-password": ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "New password" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: formData2.newPass,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData2.newPass = $event),
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
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData2.checkPass = $event),
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
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => language.value = $event)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio, {
                            label: "1",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              _hoisted_15$8
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: "2",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              _hoisted_16$7
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
                style: { "width": "400px", "padding": "13px 16px", "border-radius": "8px", "height": "40px" },
                onClick: submitSettings
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save changes ")
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            form.value === "Management" || form.value === "Privacy" ? (openBlock(), createElementBlock("div", _hoisted_17$7, [
              form.value === "Management" ? (openBlock(), createBlock(management, { key: 0 })) : createCommentVNode("", true),
              form.value === "Privacy" ? (openBlock(), createBlock(_sfc_main$h, { key: 1 })) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(privatePolicy, {
          ref_key: "privatePolicyRef",
          ref: privatePolicyRef
        }, null, 512)
      ], 64);
    };
  }
});
const profile_vue_vue_type_style_index_0_scoped_9b2d571a_lang = "";
const profile = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-9b2d571a"]]);
const _withScopeId$a = (n) => (pushScopeId("data-v-750ad056"), n = n(), popScopeId(), n);
const _hoisted_1$d = ["id"];
const _hoisted_2$c = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("div", { class: "m-auto text-white text-sm font-normal font-['RobotoRegular'] leading-[14px]" }, "Reset Chat ", -1));
const _hoisted_3$b = [
  _hoisted_2$c
];
const _hoisted_4$a = { class: "flex flex-row justify-between items-end" };
const _hoisted_5$a = ["onKeydown"];
const _hoisted_6$a = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-8 w-8 p-[7px] rounded cursor-pointer hover:bg-[#292D32]" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#uploadFile" })
], -1));
const _hoisted_7$9 = [
  _hoisted_6$a
];
const _hoisted_8$9 = ["stroke"];
const _hoisted_9$9 = {
  key: 0,
  class: "flex gap-1 flex-wrap items-center"
};
const _hoisted_10$9 = ["onClick"];
const _hoisted_11$9 = { class: "relative m-3" };
const _hoisted_12$8 = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_13$8 = {
  key: 0,
  class: "loader"
};
const _hoisted_14$7 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_15$7 = { class: "flex-col" };
const _hoisted_16$6 = { class: "truncate w-40" };
const _hoisted_17$6 = { class: "text-sm" };
const _hoisted_18$6 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_19$5 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_20$5 = ["onClick"];
const _hoisted_21$4 = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_22$4 = [
  _hoisted_21$4
];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "inputArea",
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  emits: ["resetChat"],
  setup(__props, { emit }) {
    const props = __props;
    const filesToUpload = ref([]);
    const filesToUploadCopy = ref([]);
    const sendTo = ref("");
    const authStore = useAuthStore();
    const textareaId = "myTextarea" + props.chat.id;
    const fileUploadId = "file-upload" + props.chat.id;
    const inputAllChange = (e) => {
      innerHTML2SendTo(e.target.innerHTML);
      textareaAutoHeight();
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
    const sendMessage = async () => {
      const chat = props.chat;
      if (sendTo.value.length === 0 && filesToUpload.value.length === 0) {
        showInputMessage("Please input something");
        return;
      }
      filesToUpload.value = [];
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      textarea.style.height = "5px";
      textarea.innerHTML = "";
      const uploadFiles = async () => {
        for (const file of filesToUploadCopy.value) {
          const fileMsg = {
            id: (/* @__PURE__ */ new Date()).getTime().toString(),
            username: authStore.getUserInfo?.username,
            avatar: authStore.getUserInfo?.avatar,
            role: "user",
            content: {
              name: file.name,
              size: file.size,
              content: ""
            },
            cache: "",
            loading: true,
            uploadProgress: 0
          };
          chat.messages.push(fileMsg);
          const formData = new FormData();
          formData.append("file", file.content);
          const uploadProgress = (p) => {
            chat.messages.at(-1).uploadProgress = Math.round(p.loaded * 100 / p.total);
          };
          try {
            await apiFileAdd({
              formData,
              id: chat.id
            }, uploadProgress);
            chat.messages.at(-1).loading = false;
          } catch (error) {
            console.error(error.response.data);
            chat.messages.at(-1).loading = false;
            chat.messages.at(-1).state = error.response.data.message;
          }
        }
      };
      await uploadFiles();
      filesToUploadCopy.value = [];
      if (sendTo.value.length === 0)
        return;
      const privateChatStore = usePrivateChatStore();
      privateChatStore.sio.sendMessage(chat.id, sendTo.value);
      chat.messages.push({
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
        username: authStore.getUserInfo?.username,
        avatar: authStore.getUserInfo?.avatar,
        role: "user",
        content: sendTo.value,
        cache: "",
        createTime: (/* @__PURE__ */ new Date()).getTime()
      });
      chat.messages.push({
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
        username: chat.members[0].name,
        role: "assistant",
        avatar: chat.members[0].avatar,
        content: "",
        cache: "",
        refs: [],
        createTime: (/* @__PURE__ */ new Date()).getTime()
      });
      sendTo.value = "";
    };
    const uploadFile = async (event) => {
      const files = event.target.files;
      if (!files)
        return;
      const file = files[0];
      if (file.size > 1e7) {
        ElMessage({ message: "File size is too large, > 10M  allowed", type: "error", duration: 3e3 });
        return;
      }
      filesToUpload.value.push({ name: file.name, size: file.size, content: file });
      filesToUploadCopy.value.push({ name: file.name, size: file.size, content: file });
      console.log("upload file", filesToUpload);
      const input = document.getElementById("file-upload");
      if (input == null)
        return;
      input.value = "";
    };
    const showInputMessage = (string) => {
      const textarea = document.getElementById("input" + textareaId);
      if (textarea == null)
        return;
      ElMessage({
        message: string,
        type: "info",
        offset: -50,
        duration: 3e3,
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
        const value = [{ key: "All", value: "All", icon: "/favicon.ico" }];
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
        textareaAutoHeight();
        moveCaretToVisible();
      });
    });
    const textareaAutoHeight = () => {
      const textarea = document.getElementById(textareaId);
      if (textarea == null)
        return;
      textarea.style.height = "5px";
      textarea.style.height = textarea.scrollHeight + "px";
    };
    const resetChat = () => {
      emit("resetChat");
    };
    return (_ctx, _cache) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", {
        id: "input" + textareaId,
        class: "input-area",
        style: {}
      }, [
        createBaseVNode("div", {
          onClick: resetChat,
          style: { "background-color": "var(--window-bg)" },
          class: "cursor-pointer w-[84px] h-8 absolute -top-[50px] right-[20px] rounded-md border-[#393E44] border flex justify-center items-center"
        }, _hoisted_3$b),
        createBaseVNode("div", _hoisted_4$a, [
          createBaseVNode("p", {
            id: textareaId,
            contenteditable: "",
            class: "text-area",
            placeholder: "send to all bot, or use @ to send to specific bot",
            onInput: inputAllChange,
            onKeydown: withKeys(enterToSend, ["enter"]),
            onKeyup: addBrTolastChild
          }, null, 40, _hoisted_5$a),
          createBaseVNode("label", {
            for: fileUploadId,
            class: "rounded-xl cursor-pointer mr-3"
          }, _hoisted_7$9),
          createBaseVNode("input", {
            id: fileUploadId,
            class: "hidden",
            onChange: uploadFile,
            type: "file",
            accept: " .pdf, .docx, .html, .xlsx"
          }, null, 32),
          (openBlock(), createElementBlock("svg", {
            onClick: sendMessage,
            class: "h-8 w-8 p-[7px] rounded cursor-pointer hover:bg-[#292D32]"
          }, [
            createBaseVNode("use", {
              href: "#send",
              stroke: sendTo.value.length == 0 ? "#7C878E" : "white"
            }, null, 8, _hoisted_8$9)
          ]))
        ]),
        filesToUpload.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9$9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filesToUpload.value, (file) => {
            return openBlock(), createElementBlock("div", {
              onClick: ($event) => file.dialogVisible = true,
              key: file.name,
              class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
            }, [
              createBaseVNode("div", _hoisted_11$9, [
                _hoisted_12$8,
                file.loading ? (openBlock(), createElementBlock("div", _hoisted_13$8)) : (openBlock(), createElementBlock("div", _hoisted_14$7, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
              ]),
              createBaseVNode("div", _hoisted_15$7, [
                createBaseVNode("div", _hoisted_16$6, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                createBaseVNode("div", _hoisted_17$6, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
              ]),
              createVNode(_component_el_dialog, {
                modelValue: file.dialogVisible,
                "onUpdate:modelValue": ($event) => file.dialogVisible = $event
              }, {
                header: withCtx(({}) => []),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_18$6, toDisplayString(file.content), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"]),
              createBaseVNode("div", _hoisted_19$5, [
                (openBlock(), createElementBlock("svg", {
                  onClick: withModifiers(($event) => filesToUpload.value.splice(filesToUpload.value.indexOf(file), 1), ["stop"]),
                  class: "h-5 w-5"
                }, _hoisted_22$4, 8, _hoisted_20$5))
              ])
            ], 8, _hoisted_10$9);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1$d);
    };
  }
});
const inputArea_vue_vue_type_style_index_0_scoped_750ad056_lang = "";
const inputArea = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-750ad056"]]);
const _withScopeId$9 = (n) => (pushScopeId("data-v-41e225d7"), n = n(), popScopeId(), n);
const _hoisted_1$c = { class: "w-full flex flex-row h-full" };
const _hoisted_2$b = { class: "w-full h-[38px] px-5 py-[9px] justify-between items-center inline-flex" };
const _hoisted_3$a = { class: "justify-start items-center gap-2 flex" };
const _hoisted_4$9 = { class: "justify-start items-start gap-1 flex" };
const _hoisted_5$9 = ["src"];
const _hoisted_6$9 = { class: "text-white text-sm font-medium font-[RobotoMedium] leading-[14px]" };
const _hoisted_7$8 = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-5 h-5 relative" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#chatHistory" })
], -1));
const _hoisted_8$8 = [
  _hoisted_7$8
];
const _hoisted_9$8 = { class: "px-5 py-[9px] flex flex-row justify-between border-b border-[var(--panel-bg)]" };
const _hoisted_10$8 = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("div", { class: "font-[RobotoMedium]" }, "Chat History", -1));
const _hoisted_11$8 = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_12$7 = [
  _hoisted_11$8
];
const _hoisted_13$7 = ["onClick"];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
    botId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const privateChatStore = usePrivateChatStore();
    const botStore = useBotStore();
    const chatHistory = ref();
    const currentBot = ref(botStore.getBotById(props.botId));
    const currentChat = ref(privateChatStore.getPrivateChatById(currentBot.value.chatIds.at(-1)));
    watch(() => props.botId, (newProp) => {
      console.log(newProp);
      currentBot.value = botStore.getBotById(newProp);
      currentChat.value = privateChatStore.getPrivateChatById(currentBot.value.chatIds.at(-1));
    });
    const resetChat = async () => {
      console.log("reset Chat");
      const loading = ElLoading.service({ fullscreen: true });
      const chatId = await privateChatStore.initChat(props.botId);
      if (!currentBot.value.title || !currentBot.value.id || !currentBot.value.avatar) {
        console.log("bot has no title , id or avatar");
        return;
      }
      const chat = {
        id: chatId,
        title: currentBot.value.title,
        members: [
          {
            id: currentBot.value.id,
            name: currentBot.value.title,
            avatar: currentBot.value.avatar
          }
        ],
        messages: [
          {
            id: (/* @__PURE__ */ new Date()).getTime().toString(),
            username: currentBot.value.title,
            content: "Welcome to Benchyard, I am " + currentBot.value.title,
            avatar: currentBot.value.avatar,
            cache: "",
            createTime: (/* @__PURE__ */ new Date()).getTime()
          }
        ],
        sendTo: "",
        enableChatSend: false,
        files: [],
        createTime: (/* @__PURE__ */ new Date()).getTime()
      };
      if (!chatId) {
        console.log("init bot chat failed");
        return;
      }
      addPrivateChat(chat);
      loading.close();
      currentBot.value.chatIds.push(chatId);
      currentChat.value = privateChatStore.getPrivateChatById(chatId);
    };
    const showChatHistory = () => {
      if (chatHistory.value.style.width === "0px") {
        chatHistory.value.style.width = "200px";
        return;
      }
      chatHistory.value.style.width = "0px";
    };
    const changeChat = (chatId) => {
      currentChat.value = privateChatStore.getPrivateChatById(chatId);
    };
    const backgroundColor = ref("var(--window-bg)");
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("div", {
          class: "chat-room chat-room-origin",
          style: normalizeStyle({ backgroundColor: backgroundColor.value }),
          onDragenter: dragenter,
          onDragleave: dragleave,
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"]))
        }, [
          createBaseVNode("div", _hoisted_2$b, [
            createBaseVNode("div", _hoisted_3$a, [
              createBaseVNode("div", _hoisted_4$9, [
                createBaseVNode("img", {
                  class: "w-[18px] h-[18px]",
                  src: currentBot.value.avatar
                }, null, 8, _hoisted_5$9)
              ]),
              createBaseVNode("div", _hoisted_6$9, toDisplayString(currentBot.value.title), 1)
            ]),
            createBaseVNode("div", {
              class: "h-5 justify-end items-center gap-5 flex cursor-pointer",
              onClick: showChatHistory
            }, _hoisted_8$8)
          ]),
          createVNode(scrollMessage, { chat: currentChat.value }, null, 8, ["chat"]),
          createVNode(inputArea, {
            chat: currentChat.value,
            onResetChat: resetChat
          }, null, 8, ["chat"])
        ], 36),
        createBaseVNode("div", {
          class: "w-[0px] flex-shrink-0 bg-[#1D212680] flex flex-col gap-2",
          ref_key: "chatHistory",
          ref: chatHistory
        }, [
          createBaseVNode("div", _hoisted_9$8, [
            _hoisted_10$8,
            (openBlock(), createElementBlock("svg", {
              class: "w-5 h-5 relative cursor-pointer",
              onClick: showChatHistory
            }, _hoisted_12$7))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(currentBot.value.chatIds, (chatId) => {
            return openBlock(), createElementBlock("div", {
              onClick: ($event) => changeChat(chatId),
              class: "hover:bg-[#25282C] rounded mx-2 px-3 py-[9px] flex flex-row justify-between cursor-pointer"
            }, toDisplayString(new Date(unref(privateChatStore).getPrivateChatById(chatId).createTime).toLocaleString()), 9, _hoisted_13$7);
          }), 256))
        ], 512)
      ]);
    };
  }
});
const privateChat_vue_vue_type_style_index_0_scoped_41e225d7_lang = "";
const privateChat = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-41e225d7"]]);
const _sfc_main$b = defineComponent({
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
    const timeStamp = (/* @__PURE__ */ new Date()).getTime();
    props.items.forEach((item, index) => {
      if (item.value == props.modelValue) {
        selectedIndex.value = index;
      }
    });
    onMounted(() => {
      getRect(selectedIndex.value);
    });
    const selectItem = (index) => {
      selectedIndex.value = index;
      emit("update:modelValue", props.items[index].value);
      nextTick(() => {
        getRect(selectedIndex.value);
      });
    };
    const getRect = (index) => {
      const selectedDOM = document.getElementById(timeStamp + props.items[index].label);
      selectedMask.value.style.top = selectedDOM?.offsetTop + "px";
      selectedMask.value.style.left = selectedDOM?.offsetLeft + "px";
      selectedMask.value.style.width = selectedDOM?.offsetWidth + "px";
      selectedMask.value.style.height = selectedDOM?.offsetHeight + "px";
    };
    watch(() => props.items, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      getRect(selectedIndex.value);
    });
    return {
      selectedIndex,
      selectItem,
      selectedMask,
      timeStamp
    };
  }
});
const switchMenu_vue_vue_type_style_index_0_scoped_44651da5_lang = "";
const _withScopeId$8 = (n) => (pushScopeId("data-v-44651da5"), n = n(), popScopeId(), n);
const _hoisted_1$b = { class: "menu" };
const _hoisted_2$a = ["id", "onClick"];
const _hoisted_3$9 = {
  key: 0,
  style: { "height": "16px", "width": "16px", "margin-right": "10px" }
};
const _hoisted_4$8 = ["href"];
const _hoisted_5$8 = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-4 h-4 object-cover min-h-[16px] cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#info" })
], -1));
const _hoisted_6$8 = {
  ref: "selectedMask",
  class: "selected-mask"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("ul", _hoisted_1$b, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
      return openBlock(), createElementBlock("li", {
        id: _ctx.timeStamp + item.label,
        class: "icon",
        key: index,
        onClick: ($event) => _ctx.selectItem(index)
      }, [
        _ctx.modelValue == item.value && item.icon ? (openBlock(), createElementBlock("svg", _hoisted_3$9, [
          createBaseVNode("use", {
            href: item.icon
          }, null, 8, _hoisted_4$8)
        ])) : createCommentVNode("", true),
        createBaseVNode("span", {
          style: normalizeStyle({ color: _ctx.modelValue == item.value ? "#FFF" : "#7C878E" })
        }, toDisplayString(item.label), 5),
        _ctx.showInfoIcon ? (openBlock(), createBlock(_component_el_tooltip, {
          key: 1,
          effect: "dark",
          content: item.label,
          placement: "top-start"
        }, {
          default: withCtx(() => [
            _hoisted_5$8
          ]),
          _: 2
        }, 1032, ["content"])) : createCommentVNode("", true)
      ], 8, _hoisted_2$a);
    }), 128)),
    createBaseVNode("div", _hoisted_6$8, null, 512)
  ]);
}
const switchMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render], ["__scopeId", "data-v-44651da5"]]);
const _hoisted_1$a = { class: "flex flex-row items-center w-[103px] justify-between" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
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
const _withScopeId$7 = (n) => (pushScopeId("data-v-9b32e693"), n = n(), popScopeId(), n);
const _hoisted_1$9 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Model context length ", -1));
const _hoisted_2$9 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { style: { "height": "20px" } }, null, -1));
const _hoisted_3$8 = { key: 0 };
const _hoisted_4$7 = { key: 1 };
const _hoisted_5$7 = { class: "flex flex-row w-full justify-between items-end" };
const _hoisted_6$7 = { class: "flex flex-row w-fit items-center gap-1" };
const _hoisted_7$7 = { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" };
const _hoisted_8$7 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-4 h-4 object-cover min-h-[16px] cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#info" })
], -1));
const _hoisted_9$7 = { key: 2 };
const _hoisted_10$7 = ["onUpdate:modelValue"];
const _hoisted_11$7 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " System Prompt ", -1));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
      }
    );
    watch(
      () => system_prompt,
      () => {
        emitChange();
        console.log("system_prompt changed");
      }
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
      console.log("init", items.value);
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
          style: normalizeStyle({ height: __props.showBasebotSetting ? "auto" : 0, border: __props.showBasebotSetting ? "1px solid #5F44FF" : "none", padding: __props.showBasebotSetting ? "24px" : "0px", marginBottom: "24px" })
        }, [
          _hoisted_1$9,
          createVNode(switchMenu, {
            "show-info-icon": false,
            items: items.value,
            modelValue: ctx_length.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ctx_length.value = $event)
          }, null, 8, ["items", "modelValue"]),
          _hoisted_2$9,
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.modelParams.param_schema.properties, (property, propName) => {
            return openBlock(), createElementBlock("div", { key: propName }, [
              property.type === "integer" ? (openBlock(), createElementBlock("div", _hoisted_3$8)) : property.type === "number" ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
                createBaseVNode("div", _hoisted_5$7, [
                  createBaseVNode("div", _hoisted_6$7, [
                    createBaseVNode("div", _hoisted_7$7, toDisplayString(property.title), 1),
                    createVNode(_component_el_tooltip, {
                      effect: "dark",
                      content: property.description,
                      placement: "top-start"
                    }, {
                      default: withCtx(() => [
                        _hoisted_8$7
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  createVNode(_sfc_main$a, {
                    value: formData.value[propName],
                    "onUpdate:value": ($event) => formData.value[propName] = $event,
                    min: property.exclusiveMinimum || property.minimum,
                    max: property.maximum || property.exclusiveMaximum,
                    step: 0.01
                  }, null, 8, ["value", "onUpdate:value", "min", "max"])
                ]),
                createVNode(_component_el_slider, {
                  "tooltip-class": "tooltip-class",
                  class: "overflow-hidden",
                  max: property.maximum || property.exclusiveMaximum,
                  min: property.exclusiveMinimum || property.minimum,
                  step: 0.01,
                  modelValue: formData.value[propName],
                  "onUpdate:modelValue": ($event) => formData.value[propName] = $event
                }, null, 8, ["max", "min", "modelValue", "onUpdate:modelValue"])
              ])) : property.type === "boolean" ? (openBlock(), createElementBlock("div", _hoisted_9$7, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => formData.value[propName] = $event,
                  type: "checkbox"
                }, null, 8, _hoisted_10$7), [
                  [vModelCheckbox, formData.value[propName]]
                ])
              ])) : createCommentVNode("", true)
            ]);
          }), 128)),
          createBaseVNode("div", { class: "cursor-pointer w-[142px] h-11 px-5 py-3 bg-[var(--dialog-bg)] rounded-[6px] justify-center items-center flex" }, [
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
const botParamForm_vue_vue_type_style_index_0_scoped_9b32e693_lang = "";
const botParamForm = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-9b32e693"]]);
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
const _withScopeId$6 = (n) => (pushScopeId("data-v-abeff48b"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "absolute top-2 right-4" };
const _hoisted_2$8 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_3$7 = [
  _hoisted_2$8
];
const _hoisted_4$6 = {
  class: "flex-row flex gap-6",
  style: { "height": "170px" }
};
const _hoisted_5$6 = { style: { "position": "relative" } };
const _hoisted_6$6 = {
  key: 0,
  class: "headimg-txt"
};
const _hoisted_7$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#emptyLogo" }, null, -1));
const _hoisted_8$6 = [
  _hoisted_7$6
];
const _hoisted_9$6 = ["src"];
const _hoisted_10$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "img-edit" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#emptyAvatar" })
], -1));
const _hoisted_11$6 = { class: "flex flex-col w-full" };
const _hoisted_12$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Base Bot ", -1));
const _hoisted_13$6 = { class: "w-full gap-3 flex flex-row" };
const _hoisted_14$6 = { class: "flex flex-row mr-[5px] ml-[5px]" };
const _hoisted_15$6 = ["src"];
const _hoisted_16$5 = { class: "flex flex-row ml-3 my-2" };
const _hoisted_17$5 = ["src"];
const _hoisted_18$5 = { class: "font-medium text-[14px] leading-[20px] font-Roboto text-[rgb(124,135,142)] pl-[14px]" };
const _hoisted_19$4 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#modelSetting" }, null, -1));
const _hoisted_20$4 = [
  _hoisted_19$4
];
const _hoisted_21$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Upload files ", -1));
const _hoisted_22$3 = { class: "bot-file-uploader" };
const _hoisted_23$3 = {
  key: 0,
  class: "flex gap-1 flex-row items-center overflow-scroll"
};
const _hoisted_24$3 = ["onClick"];
const _hoisted_25$3 = { class: "relative ml-6 mr-3 my-6" };
const _hoisted_26$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_27$3 = {
  key: 0,
  class: "loader"
};
const _hoisted_28$3 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_29$3 = { class: "flex-col" };
const _hoisted_30$3 = { class: "truncate w-40 pr-5" };
const _hoisted_31$3 = { class: "text-sm" };
const _hoisted_32$3 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_33$3 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_34$3 = ["onClick"];
const _hoisted_35$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_36$3 = [
  _hoisted_35$3
];
const _hoisted_37$2 = ["for"];
const _hoisted_38$2 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-12 h-6 cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_39$1 = [
  _hoisted_38$2
];
const _hoisted_40$1 = {
  key: 1,
  class: "w-full h-full flex flex-row justify-center items-center"
};
const _hoisted_41$1 = ["for"];
const _hoisted_42$1 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 p-0.5 justify-center items-center inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_43$1 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-gray-500 text-[14px] font-['RobotoRegular'] leading-[14px]" }, " DOC, EXE, HTML or PDF files less than 10MB allowed ", -1));
const _hoisted_44$1 = [
  _hoisted_42$1,
  _hoisted_43$1
];
const _hoisted_45$1 = ["id"];
const _hoisted_46$1 = { class: "flex flex-row justify-end gap-4 relative" };
const _hoisted_47$1 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, " Create bot ", -1));
const _hoisted_48$1 = [
  _hoisted_47$1
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
    const ruleFormRef1 = ref();
    const filesToUpload = ref([]);
    const BotFileUploadId = (/* @__PURE__ */ new Date()).getTime().toString();
    const avatarToUpload = ref(null);
    const previewImage = ref("");
    const BotAvatarUploadId = (/* @__PURE__ */ new Date()).getTime().toString() + "avatar";
    const validateUsername = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the Botname"));
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
      title: [
        { required: true, message: "Please input Botname", trigger: "blur" },
        { min: 3, max: 18, message: "Length should be 3 to 18", trigger: "blur" },
        { validator: validateUsername, trigger: "blur" }
      ]
    });
    const CreateBotFormChange = (newVal) => {
      console.log(newVal);
      formData1.value.model_params = newVal;
    };
    const handleSubmit = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          createBot2();
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const createBot2 = () => {
      console.log("createBot");
      for (const key in formData1.value.model_params.params) {
        if (formData1.value.model_params.params[key] === null) {
          delete formData1.value.model_params.params[key];
        }
      }
      const loading = ElLoading.service({
        lock: true,
        text: "Creating Bot",
        background: "rgba(0, 0, 0, 0.7)"
      });
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
          let loading2;
          for (const file of filesToUpload.value) {
            try {
              loading2 = ElLoading.service({
                lock: true,
                text: "Uploading " + file.name,
                background: "rgba(0, 0, 0, 0.7)"
              });
              const formData = new FormData();
              formData.append("file", file);
              const onUploadProgress = (progressEvent) => {
                console.log("progressEvent", progressEvent.load / progressEvent.total);
              };
              const response = await apiBotFileAdd({
                formData,
                id: res.data.id
              }, onUploadProgress);
              console.log(response);
              loading2.close();
            } catch (error) {
              console.error(error);
              loading2.close();
            }
          }
          if (avatarToUpload.value === null)
            return;
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
        emit("createBotSuccess");
        UpdateBotAndSetPanel();
        loading.close();
      }).catch((error) => {
        console.error(error);
        loading.close();
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
      selectModel.value = BotStore.getModelOptions.find(
        (item) => item.name === props.bot?.model_name
      );
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
      if (file.size > 1e7) {
        ElMessage({ message: "File size is too large, > 10M  allowed", type: "error", duration: 3e3 });
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
            size: "100",
            style: { "overflow-y": "scroll", "background": "var(--window-bg) !important", "padding": "72px 48px" },
            class: "h-full promptBot panel"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$8, [
                (openBlock(), createElementBlock("svg", {
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("createBotSuccess")),
                  class: "h-6 w-6 cursor-pointer"
                }, _hoisted_3$7))
              ]),
              createVNode(_component_el_form, {
                ref_key: "ruleFormRef1",
                ref: ruleFormRef1,
                model: formData1.value,
                rules,
                "label-position": "top",
                "scroll-to-error": "",
                style: { "width": "100%", "display": "flex", "flex-direction": "column", "justify-content": "center" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$6, [
                    createBaseVNode("input", {
                      id: BotAvatarUploadId,
                      class: "hidden",
                      onChange: uploadAvatar,
                      type: "file",
                      accept: " .png, .jpg, .jpeg, .bmp, .gif, .svg,"
                    }, null, 32),
                    createBaseVNode("label", {
                      for: BotAvatarUploadId,
                      class: "avatar-uploader"
                    }, [
                      createBaseVNode("div", _hoisted_5$6, [
                        formData1.value.avatar == "" && previewImage.value == "" ? (openBlock(), createElementBlock("svg", _hoisted_6$6, _hoisted_8$6)) : (openBlock(), createElementBlock("img", {
                          key: 1,
                          class: "headimg-txt",
                          src: formData1.value.avatar || previewImage.value,
                          alt: ""
                        }, null, 8, _hoisted_9$6)),
                        _hoisted_10$6
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11$6, [
                      createVNode(_component_el_form_item, { prop: "title" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: formData1.value.title,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData1.value.title = $event),
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
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData1.value.description = $event),
                            rows: 3,
                            placeholder: "Bot description"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _hoisted_12$6,
                  createBaseVNode("div", _hoisted_13$6, [
                    createVNode(_component_el_form_item, {
                      class: "w-full flex-1",
                      style: { "margin-bottom": "0 !important" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: formData1.value.model_name,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData1.value.model_name = $event),
                          class: "w-full createBotInput",
                          onChange: selectionChange,
                          "suffix-icon": unref(arrow_down_bold_default)
                        }, {
                          prefix: withCtx(({}) => [
                            createBaseVNode("div", _hoisted_14$6, [
                              formData1.value.model_name ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                class: "rounded w-5 h-5 object-cover",
                                src: selectModel.value.avatar
                              }, null, 8, _hoisted_15$6)) : createCommentVNode("", true)
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
                                  createBaseVNode("div", _hoisted_16$5, [
                                    createBaseVNode("img", {
                                      class: "rounded w-5 h-5 object-cover",
                                      src: item.avatar
                                    }, null, 8, _hoisted_17$5),
                                    createBaseVNode("div", _hoisted_18$5, toDisplayString(item.name), 1)
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
                        borderRadius: showBasebotSetting.value ? "6px 6px 0px 0px" : "6px",
                        padding: showBasebotSetting.value ? "13px" : "12px"
                      }),
                      onClick: _cache[4] || (_cache[4] = ($event) => showBasebotSetting.value = !showBasebotSetting.value)
                    }, _hoisted_20$4, 4))
                  ]),
                  createVNode(botParamForm, {
                    "initial-bot-params": formData1.value.model_params,
                    "show-basebot-setting": showBasebotSetting.value,
                    modelParams: selectModel.value,
                    onChange: CreateBotFormChange
                  }, null, 8, ["initial-bot-params", "show-basebot-setting", "modelParams"]),
                  _hoisted_21$3,
                  createBaseVNode("div", _hoisted_22$3, [
                    filesToUpload.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23$3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filesToUpload.value, (file) => {
                        return openBlock(), createElementBlock("div", {
                          onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                          class: "relative shadow rounded-[6px] bg-black flex items-center w-60"
                        }, [
                          createBaseVNode("div", _hoisted_25$3, [
                            _hoisted_26$3,
                            file.loading ? (openBlock(), createElementBlock("div", _hoisted_27$3)) : (openBlock(), createElementBlock("div", _hoisted_28$3, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                          ]),
                          createBaseVNode("div", _hoisted_29$3, [
                            createBaseVNode("div", _hoisted_30$3, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                            createBaseVNode("div", _hoisted_31$3, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                          ]),
                          createVNode(_component_el_dialog, {
                            modelValue: file.showContent,
                            "onUpdate:modelValue": ($event) => file.showContent = $event
                          }, {
                            header: withCtx(({}) => []),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_32$3, toDisplayString(file.content), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                          createBaseVNode("div", _hoisted_33$3, [
                            (openBlock(), createElementBlock("svg", {
                              onClick: withModifiers(($event) => filesToUpload.value.splice(filesToUpload.value.indexOf(file), 1), ["stop"]),
                              class: "h-5 w-5"
                            }, _hoisted_36$3, 8, _hoisted_34$3))
                          ])
                        ], 8, _hoisted_24$3);
                      }), 256)),
                      createBaseVNode("label", {
                        for: unref(BotFileUploadId),
                        class: "relative shadow rounded-[6px]flex items-center w-60"
                      }, _hoisted_39$1, 8, _hoisted_37$2)
                    ])) : (openBlock(), createElementBlock("div", _hoisted_40$1, [
                      createBaseVNode("label", {
                        for: unref(BotFileUploadId),
                        class: "w-[432.22px] h-[54px] left-[183.47px] top-[32px] flex-col justify-start items-center gap-4 inline-flex cursor-pointer"
                      }, _hoisted_44$1, 8, _hoisted_41$1)
                    ]))
                  ]),
                  createBaseVNode("input", {
                    id: unref(BotFileUploadId),
                    class: "hidden",
                    onChange: uploadFile,
                    type: "file",
                    accept: " .pdf, .docx, .html, .xlsx"
                  }, null, 40, _hoisted_45$1)
                ]),
                _: 1
              }, 8, ["model", "rules"]),
              createBaseVNode("div", _hoisted_46$1, [
                createBaseVNode("div", {
                  onClick: _cache[5] || (_cache[5] = ($event) => handleSubmit(ruleFormRef1.value)),
                  class: "cursor-pointer w-[100px] z-10 h-11 pl-3 pr-3 py-3 bg-[#5F44FF] rounded-[6px] justify-center items-center gap-2 inline-flex"
                }, _hoisted_48$1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const createBotTab_vue_vue_type_style_index_0_scoped_abeff48b_lang = "";
const createBotTab = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-abeff48b"]]);
const _withScopeId$5 = (n) => (pushScopeId("data-v-d09d50a6"), n = n(), popScopeId(), n);
const _hoisted_1$7 = { class: "absolute top-2 right-4" };
const _hoisted_2$7 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_3$6 = [
  _hoisted_2$7
];
const _hoisted_4$5 = {
  class: "flex-row flex gap-6",
  style: { "height": "170px" }
};
const _hoisted_5$5 = { style: { "position": "relative" } };
const _hoisted_6$5 = {
  key: 0,
  class: "headimg-txt"
};
const _hoisted_7$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#emptyAvatar" }, null, -1));
const _hoisted_8$5 = [
  _hoisted_7$5
];
const _hoisted_9$5 = ["src"];
const _hoisted_10$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "img-edit" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "" })
], -1));
const _hoisted_11$5 = { class: "flex flex-col w-full" };
const _hoisted_12$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Base Bot ", -1));
const _hoisted_13$5 = { class: "w-full gap-3 flex flex-row" };
const _hoisted_14$5 = { class: "flex flex-row mr-[5px] ml-[5px]" };
const _hoisted_15$5 = ["src"];
const _hoisted_16$4 = { class: "flex flex-row ml-3 my-2" };
const _hoisted_17$4 = ["src"];
const _hoisted_18$4 = { class: "font-medium text-[14px] leading-[20px] font-Roboto text-[rgb(124,135,142)] pl-[14px]" };
const _hoisted_19$3 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#modelSetting" }, null, -1));
const _hoisted_20$3 = [
  _hoisted_19$3
];
const _hoisted_21$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Upload files ", -1));
const _hoisted_22$2 = { class: "bot-file-uploader" };
const _hoisted_23$2 = {
  key: 0,
  class: "flex gap-1 flex-row items-center overflow-scroll"
};
const _hoisted_24$2 = ["onClick"];
const _hoisted_25$2 = { class: "relative m-3" };
const _hoisted_26$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_27$2 = {
  key: 0,
  class: "loader"
};
const _hoisted_28$2 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_29$2 = { class: "flex-col" };
const _hoisted_30$2 = { class: "truncate w-40 pr-5" };
const _hoisted_31$2 = { class: "text-sm" };
const _hoisted_32$2 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_33$2 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_34$2 = ["onClick"];
const _hoisted_35$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_36$2 = [
  _hoisted_35$2
];
const _hoisted_37$1 = ["onClick"];
const _hoisted_38$1 = { class: "relative m-3" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_40 = {
  key: 0,
  class: "loader"
};
const _hoisted_41 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_42 = { class: "flex-col" };
const _hoisted_43 = { class: "truncate w-40 pr-5" };
const _hoisted_44 = { class: "text-sm" };
const _hoisted_45 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_46 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_47 = ["onClick"];
const _hoisted_48 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_49 = [
  _hoisted_48
];
const _hoisted_50 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-12 h-6 cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_51 = [
  _hoisted_50
];
const _hoisted_52 = {
  key: 1,
  class: "w-full h-full flex flex-row justify-center items-center"
};
const _hoisted_53 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 p-0.5 justify-center items-center inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
], -1));
const _hoisted_54 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-gray-500 text-[14px] font-['RobotoRegular'] leading-[14px]" }, " DOC, EXE, HTML or PDF files less than 10MB allowed ", -1));
const _hoisted_55 = [
  _hoisted_53,
  _hoisted_54
];
const _hoisted_56 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-normal pb-2" }, " Collaborators ", -1));
const _hoisted_57 = { class: "border rounded-[8px] w-full border-[var(--second-border-color)] mb-12" };
const _hoisted_58 = { class: "flex flex-row items-center" };
const _hoisted_59 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row p-2 items-center text-[rgb(124,135,142)] hover:text-white" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-[14px] leading-[20px] font-['RobotoRegular']" }, "read")
], -1));
const _hoisted_60 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row p-2 items-center text-[rgb(124,135,142)] hover:text-white" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-[14px] leading-[20px] font-['RobotoRegular']" }, "edit")
], -1));
const _hoisted_61 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "cursor-pointer text-right text-indigo-400 text-base font-['RobotoRegular'] px-3 border-l-[1px] border-[#393E44]" }, " Invite ", -1));
const _hoisted_62 = { class: "border-t border-[#393E44] w-full" };
const _hoisted_63 = { class: "p-4 flex flex-row items-center justify-between" };
const _hoisted_64 = { class: "flex flex-row items-center gap-3" };
const _hoisted_65 = ["src"];
const _hoisted_66 = {
  key: 1,
  class: "h-8 w-8 bg-green-500 rounded-[50%] text-white text-center leading-8"
};
const _hoisted_67 = { class: "flex flex-col justify-start items-start gap-1.5" };
const _hoisted_68 = { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-[14px]" };
const _hoisted_69 = { key: 0 };
const _hoisted_70 = ["src"];
const _hoisted_71 = { class: "flex flex-row justify-end gap-4 relative" };
const _hoisted_72 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Save", -1));
const _hoisted_73 = [
  _hoisted_72
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
    const ruleFormRef1 = ref();
    const collaborators = ref([]);
    const defaultHeadImgTxt = () => {
      return authStore.getUserInfo.username.charAt(0).toUpperCase();
    };
    const filesToUpload = ref([]);
    const filesToRemove = ref([]);
    const avatarToUpload = ref(null);
    const previewImage = ref("");
    const BotAvatarUploadId = "Bot-avatar-upload" + props.bot.id;
    const BotFileUploadId = "Bot-file-upload" + props.bot.id;
    const CreateBotFormChange = (newVal) => {
      console.log(newVal);
      formData1.value.model_params = newVal;
    };
    const validateUsername = (rule, value, callback) => {
      console.log(rule);
      if (value === "") {
        callback(new Error("Please input the Botname"));
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
      title: [
        { required: true, message: "Please input Botname", trigger: "blur" },
        { min: 3, max: 18, message: "Length should be 3 to 18", trigger: "blur" },
        { validator: validateUsername, trigger: "blur" }
      ]
    });
    const handleSubmit = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          updateBot();
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const updateBot = () => {
      console.log("updateBot", formData1.value);
      let loading;
      loading = ElLoading.service({
        lock: true,
        text: "Saving bot",
        background: "rgba(0, 0, 0, 0.7)"
      });
      apiBotUpdate({
        id: formData1.value.id,
        name: formData1.value.title,
        description: formData1.value.description,
        visibility: formData1.value.visibility,
        model_name: selectModel.value.name,
        model_vendor: selectModel.value.vendor,
        model_params: { ...formData1.value.model_params }
      }).then(async (res) => {
        console.log("updateBot", res);
        const uploadFiles = async () => {
          if (filesToUpload.value.length > 0) {
            for (const file of filesToUpload.value) {
              try {
                loading.text = "Uploading " + file.name;
                const formData = new FormData();
                formData.append("file", file);
                const onUploadProgress = (progressEvent) => {
                  console.log("progressEvent", progressEvent.load / progressEvent.total);
                };
                const response = await apiBotFileAdd({
                  formData,
                  id: res.data.id
                }, onUploadProgress);
                console.log("response", response);
                loading.close();
              } catch (error) {
                console.log("error", error);
                loading.close();
              }
            }
          }
          console.log("avatarToUpload", avatarToUpload.value);
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
        await removeFile();
        await uploadFiles();
        ElMessage({ message: "Save success", type: "success", duration: 3e3 });
        emit("createBotSuccess");
        UpdateBotAndSetPanel();
      });
    };
    const selectModel = ref(BotStore.getModelOptions[0]);
    const formData1 = ref({});
    if (props.bot.id) {
      formData1.value = { ...props.bot };
      formData1.value.title = props.bot.name;
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
      if (file.size > 2e7) {
        ElMessage({ message: "File size is too large", type: "error", duration: 3e3 });
        return;
      }
      filesToUpload.value.push(file);
      console.log(filesToUpload.value.length);
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
        avatarToUpload.value = file;
        const reader = new FileReader();
        reader.onload = () => {
          previewImage.value = reader.result;
          console.log(previewImage.value);
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
            size: "100",
            style: { "overflow-y": "scroll", "background": "var(--window-bg) !important", "padding": "72px 48px" },
            class: "h-full promptBot panel"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$7, [
                (openBlock(), createElementBlock("svg", {
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("createBotSuccess")),
                  class: "h-6 w-6 cursor-pointer"
                }, _hoisted_3$6))
              ]),
              createVNode(_component_el_form, {
                ref_key: "ruleFormRef1",
                ref: ruleFormRef1,
                model: formData1.value,
                rules,
                "label-position": "top",
                "scroll-to-error": "",
                style: { "width": "100%", "display": "flex", "flex-direction": "column", "justify-content": "center" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$5, [
                    createBaseVNode("input", {
                      id: BotAvatarUploadId,
                      class: "hidden",
                      onChange: uploadAvatar,
                      type: "file",
                      accept: " .png, .jpg, .jpeg, .bmp, .gif, .svg,"
                    }, null, 32),
                    createBaseVNode("label", {
                      for: BotAvatarUploadId,
                      class: "avatar-uploader"
                    }, [
                      createBaseVNode("div", _hoisted_5$5, [
                        formData1.value.avatar == "" && previewImage.value == "" ? (openBlock(), createElementBlock("svg", _hoisted_6$5, _hoisted_8$5)) : (openBlock(), createElementBlock("img", {
                          key: 1,
                          class: "headimg-txt",
                          src: previewImage.value == "" ? formData1.value.avatar : previewImage.value,
                          alt: ""
                        }, null, 8, _hoisted_9$5)),
                        _hoisted_10$5
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11$5, [
                      createVNode(_component_el_form_item, { prop: "title" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: formData1.value.title,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData1.value.title = $event),
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
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData1.value.description = $event),
                            rows: 3,
                            placeholder: "Bot description"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _hoisted_12$5,
                  createBaseVNode("div", _hoisted_13$5, [
                    createVNode(_component_el_form_item, { class: "w-full flex-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: formData1.value.model_name,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData1.value.model_name = $event),
                          class: "w-full createBotInput",
                          onChange: selectionChange,
                          "suffix-icon": unref(arrow_down_bold_default)
                        }, {
                          prefix: withCtx(({}) => [
                            createBaseVNode("div", _hoisted_14$5, [
                              formData1.value.model_name ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                class: "rounded w-5 h-5 object-cover",
                                src: selectModel.value.avatar
                              }, null, 8, _hoisted_15$5)) : createCommentVNode("", true)
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
                                  createBaseVNode("div", _hoisted_16$4, [
                                    createBaseVNode("img", {
                                      class: "rounded w-5 h-5 object-cover",
                                      src: item.avatar
                                    }, null, 8, _hoisted_17$4),
                                    createBaseVNode("div", _hoisted_18$4, toDisplayString(item.name), 1)
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
                      onClick: _cache[4] || (_cache[4] = ($event) => showBasebotSetting.value = !showBasebotSetting.value)
                    }, _hoisted_20$3, 4))
                  ]),
                  createVNode(botParamForm, {
                    "initial-bot-params": formData1.value.model_params,
                    "show-basebot-setting": showBasebotSetting.value,
                    modelParams: selectModel.value,
                    onChange: CreateBotFormChange
                  }, null, 8, ["initial-bot-params", "show-basebot-setting", "modelParams"]),
                  _hoisted_21$2,
                  createBaseVNode("div", _hoisted_22$2, [
                    formData1.value.documents.length > 0 || filesToUpload.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23$2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(formData1.value.documents, (file) => {
                        return openBlock(), createElementBlock("div", {
                          onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                          class: "relative shadow p-1 rounded-[6px] bg-black flex items-center w-60"
                        }, [
                          createBaseVNode("div", _hoisted_25$2, [
                            _hoisted_26$2,
                            file.loading ? (openBlock(), createElementBlock("div", _hoisted_27$2)) : (openBlock(), createElementBlock("div", _hoisted_28$2, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                          ]),
                          createBaseVNode("div", _hoisted_29$2, [
                            createBaseVNode("div", _hoisted_30$2, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                            createBaseVNode("div", _hoisted_31$2, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                          ]),
                          createVNode(_component_el_dialog, {
                            modelValue: file.showContent,
                            "onUpdate:modelValue": ($event) => file.showContent = $event
                          }, {
                            header: withCtx(({}) => []),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_32$2, toDisplayString(file.content), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                          createBaseVNode("div", _hoisted_33$2, [
                            (openBlock(), createElementBlock("svg", {
                              onClick: withModifiers(($event) => removeUploadedBotFile(file.id), ["stop"]),
                              class: "h-5 w-5"
                            }, _hoisted_36$2, 8, _hoisted_34$2))
                          ])
                        ], 8, _hoisted_24$2);
                      }), 256)),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filesToUpload.value, (file) => {
                        return openBlock(), createElementBlock("div", {
                          onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                          class: "relative shadow p-1 rounded-[6px] bg-black flex items-center w-60"
                        }, [
                          createBaseVNode("div", _hoisted_38$1, [
                            _hoisted_39,
                            file.loading ? (openBlock(), createElementBlock("div", _hoisted_40)) : (openBlock(), createElementBlock("div", _hoisted_41, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[2]), 1))
                          ]),
                          createBaseVNode("div", _hoisted_42, [
                            createBaseVNode("div", _hoisted_43, toDisplayString(file.name.match(/^(.*?)\.([^.]+)$/)[1]), 1),
                            createBaseVNode("div", _hoisted_44, toDisplayString(Math.round(file.size / 1e3) + " kb"), 1)
                          ]),
                          createVNode(_component_el_dialog, {
                            modelValue: file.showContent,
                            "onUpdate:modelValue": ($event) => file.showContent = $event
                          }, {
                            header: withCtx(({}) => []),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_45, toDisplayString(file.content), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                          createBaseVNode("div", _hoisted_46, [
                            (openBlock(), createElementBlock("svg", {
                              onClick: withModifiers(($event) => filesToUpload.value.splice(filesToUpload.value.indexOf(file), 1), ["stop"]),
                              class: "h-5 w-5"
                            }, _hoisted_49, 8, _hoisted_47))
                          ])
                        ], 8, _hoisted_37$1);
                      }), 256)),
                      createBaseVNode("label", {
                        for: BotFileUploadId,
                        class: "relative shadow rounded-[6px]flex items-center w-60"
                      }, _hoisted_51)
                    ])) : (openBlock(), createElementBlock("div", _hoisted_52, [
                      createBaseVNode("label", {
                        for: BotFileUploadId,
                        class: "w-[432.22px] h-[54px] left-[183.47px] top-[32px] flex-col justify-start items-center gap-4 inline-flex"
                      }, _hoisted_55)
                    ]))
                  ]),
                  createBaseVNode("input", {
                    id: BotFileUploadId,
                    class: "hidden",
                    onChange: uploadFile,
                    type: "file",
                    accept: " .pdf, .docx, .html, .xlsx"
                  }, null, 32),
                  _hoisted_56,
                  createBaseVNode("div", _hoisted_57, [
                    createBaseVNode("div", _hoisted_58, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => inviteEmail.value = $event),
                        type: "text",
                        class: "w-full h-12 px-4 py-3 bg-[transparent] rounded-xl",
                        placeholder: "Email / Username"
                      }, null, 512), [
                        [vModelText, inviteEmail.value]
                      ]),
                      createVNode(_component_el_select, {
                        class: "readEditSelect w-[70px]",
                        modelValue: inviteEmailPermission.value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => inviteEmailPermission.value = $event),
                        "suffix-icon": unref(arrow_down_bold_default)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_option, {
                            value: "3",
                            label: "read"
                          }, {
                            default: withCtx(() => [
                              _hoisted_59
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_option, {
                            value: "2",
                            label: "edit"
                          }, {
                            default: withCtx(() => [
                              _hoisted_60
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "suffix-icon"]),
                      _hoisted_61
                    ]),
                    createBaseVNode("div", _hoisted_62, [
                      createBaseVNode("div", _hoisted_63, [
                        createBaseVNode("div", _hoisted_64, [
                          unref(authStore).getUserInfo.avatar ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: unref(authStore).getUserInfo.avatar,
                            width: "72",
                            height: "72",
                            class: "h-8 w-8",
                            alt: ""
                          }, null, 8, _hoisted_65)) : (openBlock(), createElementBlock("div", _hoisted_66, toDisplayString(defaultHeadImgTxt()), 1)),
                          createBaseVNode("div", _hoisted_67, [
                            createBaseVNode("div", _hoisted_68, toDisplayString(unref(authStore).getUserInfo.username), 1)
                          ])
                        ]),
                        createVNode(_component_el_select, {
                          class: "readEditSelect w-[65px]",
                          disabled: "",
                          placeholder: "owner",
                          "suffix-icon": unref(arrow_down_bold_default)
                        }, null, 8, ["suffix-icon"])
                      ]),
                      collaborators.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_69, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(collaborators.value, (userInfo) => {
                          return openBlock(), createElementBlock("div", {
                            key: userInfo.name
                          }, [
                            createBaseVNode("img", {
                              src: userInfo.avatar,
                              alt: ""
                            }, null, 8, _hoisted_70),
                            createBaseVNode("div", null, toDisplayString(userInfo.name), 1),
                            createVNode(_component_el_select, {
                              class: "readEditSelect w-[70px]",
                              modelValue: inviteEmailPermission.value,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => inviteEmailPermission.value = $event),
                              "suffix-icon": unref(arrow_down_bold_default)
                            }, null, 8, ["modelValue", "suffix-icon"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["model", "rules"]),
              createBaseVNode("div", _hoisted_71, [
                createBaseVNode("div", {
                  onClick: _cache[8] || (_cache[8] = ($event) => handleSubmit(ruleFormRef1.value)),
                  class: "rounded cursor-pointer w-[143px] z-10 h-11 pl-3 pr-3 py-3 bg-[#5F44FF] justify-center items-center gap-2 inline-flex"
                }, _hoisted_73)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const editBotTab_vue_vue_type_style_index_0_scoped_d09d50a6_lang = "";
const editBotTab = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d09d50a6"]]);
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("div", { class: "pointer-events-none w-1/2 h-1/2 flex justify-center items-center flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-4xl font-bold" }, "Welcome to"),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-6xl font-bold" }, "Benchyard"),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-2xl font-bold" }, "Drag and drop here")
], -1);
const _hoisted_2$6 = [
  _hoisted_1$6
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
        if (type === "bot") {
          const bot = botStore.getBotById(id);
          if (bot.chatIds.length > 0) {
            if (panelStore.openChatIfExistInTabs(bot.id || ""))
              return;
            console.log("ChatWindow");
            tab.title = name;
            tab.type = "privateChat";
            tab.botId = bot.id;
            tab.editing = false;
          } else {
            console.log("bot.chatId is empty!");
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
      }, _hoisted_2$6, 36);
    };
  }
});
const splitpanes = "";
const _hoisted_1$5 = { style: { "height": "100%", "display": "flex", "flex-direction": "column" } };
const _hoisted_2$5 = { class: "tabs-content" };
const _hoisted_3$5 = ["id"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "tabIndex",
  setup(__props) {
    const panelStore = usePanelStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(M), null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(panelStore).getWindows, (window2) => {
            return openBlock(), createBlock(unref(g), {
              key: window2.id,
              onClick: ($event) => unref(panelStore).windowId = window2.id
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$5, [
                  createBaseVNode("div", _hoisted_2$5, [
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
                          "bot-id": tab.botId?.toString() || ""
                        }, null, 8, ["window-id", "bot-id"])) : tab.type == "createBot" ? (openBlock(), createBlock(createBotTab, {
                          key: 1,
                          onCreateBotSuccess: ($event) => unref(removeTabAndSave)(window2.id, window2.tabsId),
                          "window-id": window2.id,
                          bot: tab.bot
                        }, null, 8, ["onCreateBotSuccess", "window-id", "bot"])) : tab.type == "editBot" ? (openBlock(), createBlock(editBotTab, {
                          key: 2,
                          onCreateBotSuccess: ($event) => unref(removeTabAndSave)(window2.id, window2.tabsId),
                          "window-id": window2.id,
                          bot: tab.bot || {}
                        }, null, 8, ["onCreateBotSuccess", "window-id", "bot"])) : tab.type == "welcome" ? (openBlock(), createBlock(_sfc_main$6, {
                          key: 3,
                          "window-id": window2.id
                        }, null, 8, ["window-id"])) : createCommentVNode("", true)
                      ], 12, _hoisted_3$5);
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
const tabIndex_vue_vue_type_style_index_0_scoped_2395ea56_lang = "";
const tabIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2395ea56"]]);
const _imports_0 = "" + new URL("notLogin-a655f18d.svg", import.meta.url).href;
const _withScopeId$4 = (n) => (pushScopeId("data-v-f908c534"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ createStaticVNode('<div class="flex items-center gap-2 relative overflow-hidden" data-v-f908c534><div class="flex flex-col min-w-[39px]" data-v-f908c534><img src="' + _imports_0 + '" data-v-f908c534></div><div class="flex flex-col min-w-[126px]" data-v-f908c534><div class="flex flex-col gap-y-1.5 grow relative" data-v-f908c534><div class="text-[14px] leading-none font-[RobotoMedium] text-white tracking-[-0.15px]" data-v-f908c534> Sign in </div><div class="text-[10px] leading-none font-[RobotoRegular] text-[rgb(124,135,142)] tracking-[-0.1px]" data-v-f908c534> Unlock the power of Al </div></div></div></div>', 1);
const _hoisted_2$4 = [
  _hoisted_1$4
];
const _hoisted_3$4 = {
  key: 1,
  class: "account"
};
const _hoisted_4$4 = ["src"];
const _hoisted_5$4 = {
  key: 1,
  class: "avatar-txt"
};
const _hoisted_6$4 = { class: "flex flex-col justify-start items-start gap-1.5" };
const _hoisted_7$4 = { class: "username" };
const _hoisted_8$4 = { class: "email" };
const _hoisted_9$4 = { class: "absolute left-0 account-menu w-full rounded-xl overflow-hidden" };
const _hoisted_10$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", { class: "menu-icon icon-color1" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#setting" })
], -1));
const _hoisted_11$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text1" }, "Setting", -1));
const _hoisted_12$4 = [
  _hoisted_10$4,
  _hoisted_11$4
];
const _hoisted_13$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", { class: "menu-icon icon-color2" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#logOut" })
], -1));
const _hoisted_14$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu-text2" }, "Log out", -1));
const _hoisted_15$4 = [
  _hoisted_13$4,
  _hoisted_14$4
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "account",
  setup(__props, { expose: __expose }) {
    const router = useRouter();
    const panelStore = usePanelStore();
    const privateChatStore = usePrivateChatStore();
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
      privateChatStore.closeSocket();
      authStore.clear();
      router.push({ path: "/" });
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
        }, _hoisted_2$4)) : (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createBaseVNode("div", {
            class: "account-content",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(panelStore).setPanelId("-3"))
          }, [
            unref(authStore).getUserInfo.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: unref(authStore).getUserInfo.avatar,
              width: "72",
              height: "72",
              class: "avatar",
              alt: ""
            }, null, 8, _hoisted_4$4)) : (openBlock(), createElementBlock("div", _hoisted_5$4, toDisplayString(defaultHeadImgTxt()), 1)),
            createBaseVNode("div", _hoisted_6$4, [
              createBaseVNode("div", _hoisted_7$4, toDisplayString(unref(authStore).getUserInfo.username), 1),
              createBaseVNode("div", _hoisted_8$4, toDisplayString(unref(authStore).getUserInfo.email), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_9$4, [
            createBaseVNode("div", {
              class: "menu-item",
              onClick: _cache[1] || (_cache[1] = ($event) => unref(panelStore).setPanelId("-1"))
            }, _hoisted_12$4),
            createBaseVNode("div", {
              class: "menu-item",
              onClick: handleLogout
            }, _hoisted_15$4)
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
const account_vue_vue_type_style_index_0_scoped_f908c534_lang = "";
const account = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f908c534"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-8298c9bd"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { style: { "height": "calc(100% - 260px)" } };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "logo" }, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "logo-icon" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "logo-text" }, "Benchyard")
], -1));
const _hoisted_3$3 = { class: "panel" };
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$3 = {
  key: 0,
  class: "w-full h-14 px-[14px] py-3 justify-start gap-[14px] flex items-center"
};
const _hoisted_6$3 = { class: "w-8 h-8 relative" };
const _hoisted_7$3 = ["src"];
const _hoisted_8$3 = { class: "flex-col justify-start items-start gap-[7px] inline-flex" };
const _hoisted_9$3 = { class: "w-[120px] justify-between items-center inline-flex" };
const _hoisted_10$3 = { class: "w-[70px] text-white text-sm font-medium font-['RobotoMedium'] leading-[14px] truncate" };
const _hoisted_11$3 = { class: "text-right text-gray-600 text-[11px] font-['RobotoRegular'] leading-[11px]" };
const _hoisted_12$3 = { class: "w-[120px] text-gray-500 text-[11px] font-normal font-['RobotoRegular'] leading-[11px] truncate" };
const _hoisted_13$3 = {
  key: 1,
  class: "w-full h-14 px-[14px] py-3 justify-start gap-[14px] flex items-center"
};
const _hoisted_14$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-8 h-8 relative" }, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "w-8 h-8 rounded-full" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
  ])
], -1));
const _hoisted_15$3 = { class: "flex-col justify-start items-start gap-[7px] inline-flex" };
const _hoisted_16$3 = { class: "w-[120px] justify-between items-center inline-flex" };
const _hoisted_17$3 = { class: "text-white text-sm font-medium font-['RobotoMedium'] leading-[14px] truncate" };
const _hoisted_18$3 = /* @__PURE__ */ createStaticVNode('<div class="w-full h-14 px-[14px] py-3 justify-start gap-[14px] flex items-center" data-v-8298c9bd><div class="w-8 h-8 relative" data-v-8298c9bd><svg class="w-8 h-8 rounded-full" data-v-8298c9bd><use href="#newChat" data-v-8298c9bd></use></svg></div><div class="menu-text" data-v-8298c9bd>New Chat</div></div>', 1);
const _hoisted_19$2 = [
  _hoisted_18$3
];
const _hoisted_20$2 = { style: { "cursor": "pointer" } };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "menu",
  setup(__props) {
    const botStore = useBotStore();
    const panelStore = usePanelStore();
    const accountRef = ref();
    const convertTimestampToTime = (timestamp) => {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours > 12 ? hours - 12 : hours;
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    const convertMsgToHint = (msg) => {
      return msg.username + ":" + msg.content;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "menu",
        style: normalizeStyle({ width: !unref(panelStore).pinMenu ? "200px" : "60px" })
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          _hoisted_2$3,
          createBaseVNode("div", _hoisted_3$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(panelStore).panels[0].windows[0].tabs, (tab) => {
              return openBlock(), createElementBlock("div", null, [
                createBaseVNode("div", {
                  class: "menu-item",
                  onClick: ($event) => {
                    unref(panelStore).panelId = 1;
                    unref(panelStore).panels[0].windows[0].tabsId = tab.id;
                  },
                  style: normalizeStyle({ backgroundColor: unref(panelStore).panels[0].windows[0].tabsId == tab.id ? "var(--panel-bg)" : "" })
                }, [
                  tab.type == "privateChat" ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
                    createBaseVNode("div", _hoisted_6$3, [
                      createBaseVNode("img", {
                        src: unref(botStore).getBotById(tab.botId || "").avatar,
                        class: "w-8 h-8 rounded-full"
                      }, null, 8, _hoisted_7$3)
                    ]),
                    createBaseVNode("div", _hoisted_8$3, [
                      createBaseVNode("div", _hoisted_9$3, [
                        createBaseVNode("div", _hoisted_10$3, toDisplayString(tab.title), 1),
                        createBaseVNode("div", _hoisted_11$3, toDisplayString(convertTimestampToTime(unref(botStore).getBotLatestChatMsg(tab.botId || "")?.createTime)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_12$3, toDisplayString(convertMsgToHint(unref(botStore).getBotLatestChatMsg(tab.botId || ""))), 1)
                    ])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_13$3, [
                    _hoisted_14$3,
                    createBaseVNode("div", _hoisted_15$3, [
                      createBaseVNode("div", _hoisted_16$3, [
                        createBaseVNode("div", _hoisted_17$3, toDisplayString(tab.title), 1)
                      ])
                    ])
                  ]))
                ], 12, _hoisted_4$3)
              ]);
            }), 256)),
            createBaseVNode("div", null, [
              createBaseVNode("div", {
                class: "menu-item",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(addTabAndSave)(unref(panelStore).windowId))
              }, _hoisted_19$2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_20$2, [
          createVNode(account, {
            ref_key: "accountRef",
            ref: accountRef
          }, null, 512)
        ])
      ], 4);
    };
  }
});
const menu_vue_vue_type_style_index_0_scoped_8298c9bd_lang = "";
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8298c9bd"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-42c226de"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-[28px] h-[28px] object-cover min-h-[20px] m-[6px]" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#Bot" })
], -1));
const _hoisted_2$2 = [
  _hoisted_1$2
];
const _hoisted_3$2 = { class: "flex flex-row justify-between items-center mb-12" };
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-[32px] font-['RobotoMedium']" }, "Install Bot", -1));
const _hoisted_5$2 = {
  key: 1,
  class: "bot-file-uploader"
};
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "botConfigFileUpload",
  style: { "position": "absolute", "inset": "0" }
}, null, -1));
const _hoisted_7$2 = {
  key: 0,
  class: "flex gap-1 flex-wrap items-center"
};
const _hoisted_8$2 = ["onClick"];
const _hoisted_9$2 = { class: "relative m-3" };
const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", { class: "h-10 w-8" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#fileIcon" })
], -1));
const _hoisted_11$2 = {
  key: 0,
  class: "loader"
};
const _hoisted_12$2 = {
  key: 1,
  class: "top-0 text-[10px] text-center bottom-0 right-0 left-0 absolute leading-[40px]"
};
const _hoisted_13$2 = { class: "flex-col" };
const _hoisted_14$2 = { class: "truncate w-40" };
const _hoisted_15$2 = { class: "text-sm" };
const _hoisted_16$2 = { class: "max-h-80 overflow-scroll m-3" };
const _hoisted_17$2 = { class: "absolute top-2 right-2 cursor-pointer" };
const _hoisted_18$2 = ["onClick"];
const _hoisted_19$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete" }, null, -1));
const _hoisted_20$1 = [
  _hoisted_19$1
];
const _hoisted_21$1 = {
  key: 1,
  class: "h-full w-full flex flex-row justify-center items-center"
};
const _hoisted_22$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "botConfigFileUpload",
  class: "flex-col justify-start items-center gap-4 inline-flex"
}, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 p-0.5 justify-center items-center inline-flex" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#addFile" })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-gray-500 text-sm font-normal font-['RobotoRegular'] leading-[14px]" }, " configuration file for bot ")
], -1));
const _hoisted_23$1 = [
  _hoisted_22$1
];
const _hoisted_24$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, "Search", -1));
const _hoisted_25$1 = [
  _hoisted_24$1
];
const _hoisted_26$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-[14px]" }, "Create", -1));
const _hoisted_27$1 = [
  _hoisted_26$1
];
const _hoisted_28$1 = { class: "flex flex-row justify-between" };
const _hoisted_29$1 = { class: "flex flex-col items-center" };
const _hoisted_30$1 = ["src"];
const _hoisted_31$1 = { class: "w-[682px] h-[168px] flex-col justify-start items-start gap-6 inline-flex" };
const _hoisted_32$1 = { class: "self-stretch h-[168px] flex-col justify-start items-start gap-3 flex" };
const _hoisted_33$1 = { class: "self-stretch justify-between items-center inline-flex" };
const _hoisted_34$1 = { class: "text-white text-[32px] font-['RobotoMedium'] leading-[48px]" };
const _hoisted_35$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm font-['RobotoMedium'] leading-normal" }, "Install", -1));
const _hoisted_36$1 = [
  _hoisted_35$1
];
const _hoisted_37 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "justify-start items-center gap-2 inline-flex" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "w-6 h-6 relative" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "w-6 h-6 left-0 top-0 absolute bg-zinc-800 rounded-[512px]" }),
    /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 left-0 top-0 absolute" }, [
      /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-500 text-sm font-medium font-['RobotoRegular'] leading-[14px]" }, " Benchyard ")
], -1));
const _hoisted_38 = { class: "w-[682px] text-white text-base font-medium font-['RobotoRegular'] leading-normal" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "createBot",
  setup(__props) {
    const authStore = useAuthStore();
    const panelStore = usePanelStore();
    const botStore = useBotStore();
    const InstallMethod = ref(0);
    const privateChatStore = usePrivateChatStore();
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
      if (authStore.checkLogin()) {
        if (panelStore.openCreateBotIfExistInTabs())
          return;
        addTabAndSave(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: "Create Bot",
          editing: false,
          type: "createBot",
          bot: formData2.value
        });
      }
    };
    const searchedBot = ref({
      name: "",
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
      path: "",
      chatIds: []
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
    const installSearchedBot = () => {
      apiAcceptInvitation({ code: searchedBot.value.path }).then(async (res) => {
        console.log(res);
        ShowSearchBot.value = false;
        ShowInstallBot.value = false;
        const bot = searchedBot.value;
        if (bot.chatIds.length === 0) {
          if (!bot.id || !bot.name || !bot.avatar)
            return;
          const chat = {
            id: "",
            title: bot.name,
            members: [
              {
                id: bot.id,
                name: bot.name,
                avatar: bot.avatar
              }
            ],
            messages: [
              {
                id: (/* @__PURE__ */ new Date()).getTime().toString(),
                username: bot.name,
                content: "Welcome to Benchyard, I am " + bot.name,
                avatar: bot.avatar,
                cache: "",
                createTime: (/* @__PURE__ */ new Date()).getTime()
              }
            ],
            sendTo: "",
            enableChatSend: false,
            files: [],
            createTime: (/* @__PURE__ */ new Date()).getTime()
          };
          const chatId = await privateChatStore.initChat(bot.id);
          if (!chatId) {
            console.log("init bot chat failed");
            return;
          }
          bot.chatIds.push(chatId);
          chat.id = chatId;
          saveBots();
          addPrivateChat(chat);
        }
        botStore.addBot(searchedBot.value);
      }).catch((err) => {
        console.log(err);
      });
    };
    const createBotFromFile = () => {
      console.log(loadBot.value);
      addTabAndSave(panelStore.windowId, {
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
        createBaseVNode("div", {
          class: "add-bot m-[10px] cursor-pointer",
          onClick: createBot2
        }, _hoisted_2$2),
        createVNode(_component_el_dialog, {
          modelValue: ShowInstallBot.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ShowInstallBot.value = $event),
          "show-close": false,
          style: { "width": "700px", "background": "#292d32 !important", "padding": "48px" },
          class: "promptBot max-h-[80%] overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$2, [
              _hoisted_4$2,
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
            }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_5$2, [
              _hoisted_6$2,
              configFile.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(configFile.value, (file) => {
                  return openBlock(), createElementBlock("div", {
                    onClick: withModifiers(($event) => file.showContent = true, ["stop"]),
                    key: file.name,
                    class: "relative shadow p-1 rounded-xl bg-black flex items-center w-60"
                  }, [
                    createBaseVNode("div", _hoisted_9$2, [
                      _hoisted_10$2,
                      file.loading ? (openBlock(), createElementBlock("div", _hoisted_11$2)) : (openBlock(), createElementBlock("div", _hoisted_12$2, toDisplayString(nameSplit2(file.name)), 1))
                    ]),
                    createBaseVNode("div", _hoisted_13$2, [
                      createBaseVNode("div", _hoisted_14$2, toDisplayString(nameSplit1(file.name)), 1),
                      createBaseVNode("div", _hoisted_15$2, toDisplayString(Math.round(file.size / 100) / 10 + " kb"), 1)
                    ]),
                    createVNode(_component_el_dialog, {
                      modelValue: file.showContent,
                      "onUpdate:modelValue": ($event) => file.showContent = $event
                    }, {
                      header: withCtx(({}) => []),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_16$2, toDisplayString(file.content), 1)
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"]),
                    createBaseVNode("div", _hoisted_17$2, [
                      (openBlock(), createElementBlock("svg", {
                        onClick: withModifiers(($event) => configFile.value.splice(configFile.value.indexOf(file), 1), ["stop"]),
                        class: "h-5 w-5"
                      }, _hoisted_20$1, 8, _hoisted_18$2))
                    ])
                  ], 8, _hoisted_8$2);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_21$1, _hoisted_23$1))
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
            }, _hoisted_25$1)) : (openBlock(), createElementBlock("div", {
              key: 3,
              onClick: createBotFromFile,
              class: "mt-6 cursor-pointer w-full h-12 px-6 py-[17px] bg-indigo-600 rounded-[6px] justify-center items-center gap-2.5 inline-flex"
            }, _hoisted_27$1))
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
            createBaseVNode("div", _hoisted_28$1, [
              createBaseVNode("div", _hoisted_29$1, [
                createBaseVNode("img", {
                  class: "h-[120px] w-[120px]",
                  src: searchedBot.value.avatar,
                  alt: ""
                }, null, 8, _hoisted_30$1)
              ]),
              createBaseVNode("div", _hoisted_31$1, [
                createBaseVNode("div", _hoisted_32$1, [
                  createBaseVNode("div", _hoisted_33$1, [
                    createBaseVNode("div", _hoisted_34$1, toDisplayString(searchedBot.value.name), 1),
                    createBaseVNode("div", { class: "justify-start items-start gap-6 flex" }, [
                      createBaseVNode("div", {
                        onClick: installSearchedBot,
                        class: "cursor-pointer px-6 py-3 rounded-xl border-2 bg-[var(--el-color-primary)] justify-center items-center gap-2 flex"
                      }, _hoisted_36$1)
                    ])
                  ]),
                  _hoisted_37,
                  createBaseVNode("div", _hoisted_38, toDisplayString(searchedBot.value.description), 1)
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
const createBot_vue_vue_type_style_index_0_scoped_42c226de_lang = "";
const createBot = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-42c226de"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-75266493"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "w-[200px] flex-1 transition-all duration-500" };
const _hoisted_2$1 = { class: "flex flex-col relative h-full items-end" };
const _hoisted_3$1 = { class: "flex-1 w-full" };
const _hoisted_4$1 = {
  open: "",
  class: "overflow-scroll no-scrollbar flex-1 max-h-[50%]"
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-4 w-4" }, null, -1));
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = ["onDragstart"];
const _hoisted_8$1 = { class: "flex flex-col min-w-[24px]" };
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = ["onClick"];
const _hoisted_11$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6" }, [
  /* @__PURE__ */ createBaseVNode("use", { href: "#info" })
], -1));
const _hoisted_12$1 = [
  _hoisted_11$1
];
const _hoisted_13$1 = { class: "flex flex-row justify-between" };
const _hoisted_14$1 = { class: "flex flex-col items-center" };
const _hoisted_15$1 = ["src"];
const _hoisted_16$1 = { class: "w-[576px] flex-col justify-start items-start gap-6 inline-flex" };
const _hoisted_17$1 = { class: "self-stretch flex-col justify-start items-start gap-3 flex" };
const _hoisted_18$1 = { class: "self-stretch justify-between items-center inline-flex" };
const _hoisted_19 = { class: "text-white text-[32px] font-['RobotoMedium'] leading-[48px] truncate" };
const _hoisted_20 = { class: "justify-start items-start gap-4 flex" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#edit" }, null, -1));
const _hoisted_22 = [
  _hoisted_21
];
const _hoisted_23 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#copy" }, null, -1));
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#share" }, null, -1));
const _hoisted_26 = [
  _hoisted_25
];
const _hoisted_27 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#delete2" }, null, -1));
const _hoisted_28 = [
  _hoisted_27
];
const _hoisted_29 = { class: "justify-start items-center gap-2 inline-flex" };
const _hoisted_30 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-6 h-6 relative" }, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "w-6 h-6 left-0 top-0 absolute" }, [
    /* @__PURE__ */ createBaseVNode("use", { href: "#BYlogo" })
  ])
], -1));
const _hoisted_31 = { class: "text-gray-500 text-sm font-medium font-['RobotoRegular'] leading-[14px]" };
const _hoisted_32 = { class: "w-[682px] text-white text-base font-medium font-['RobotoRegular'] leading-normal" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-sm" }, "Copy to BOT CODE clipboard:", -1));
const _hoisted_34 = { class: "flex flex-row items-center justify-center" };
const _hoisted_35 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("use", { href: "#copy" }, null, -1));
const _hoisted_36 = [
  _hoisted_35
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "selectedBotCol",
  setup(__props) {
    const botStore = useBotStore();
    const panelStore = usePanelStore();
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
      if (authStore.checkLogin()) {
        botInfo.value = { ...bot };
        ShowBotInfoFlag.value = true;
      }
    };
    const createBotBasedOnCurrentBot = () => {
      if (panelStore.openCreateBotIfExistInTabs()) {
        ElMessage({
          message: "Please finish exist Create Bot tab or close it",
          type: "warning"
        });
        return;
      }
      console.log("createBotBasedOnCurrentBot");
      const loading = ElLoading.service({
        lock: true,
        text: "Cloning Bot... Please wait",
        background: "rgba(0, 0, 0, 0.95)"
      });
      apiBotInfo(botInfo.value.id).then((res) => {
        botInfo.value = res.data;
        botInfo.value.visibility = 1;
        addTabAndSave(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: "Create Bot",
          editing: false,
          type: "createBot",
          bot: botInfo.value
        });
        ShowBotInfoFlag.value = false;
        loading.close();
      }).catch((err) => {
        console.log(err);
      });
    };
    const editCurrentBot = () => {
      if (panelStore.openEditBotIfExistInTabs()) {
        ElMessage({
          message: "Please finish exist Edit Bot tab or close it",
          type: "warning"
        });
        return;
      }
      console.log("editCurrentBot");
      const loading = ElLoading.service({
        lock: true,
        text: "Get bot info... Please wait",
        background: "rgba(0, 0, 0, 0.95)"
      });
      apiBotInfo(botInfo.value.id).then((res) => {
        botInfo.value = res.data;
        botInfo.value.visibility = 1;
        addTabAndSave(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: "Edit Bot",
          editing: false,
          type: "editBot",
          bot: botInfo.value
        });
        ShowBotInfoFlag.value = false;
        loading.close();
      }).catch((err) => {
        console.log(err);
        loading.close();
      });
    };
    const dragStart = (ev, model) => {
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
      const loading = ElLoading.service({
        lock: true,
        text: "Generating Share Code... Please wait",
        background: "rgba(0, 0, 0, 0.95)"
      });
      apiShareCode({ type: 0, id }).then((res) => {
        loading.close();
        console.log(res.data.path);
        botCode.value = res.data.path.split("code=")[1];
        copyBotCode.value = true;
      }).catch((err) => {
        loading.close();
        console.log(err);
      });
    };
    const uninstallBot = () => {
      apiBotDelete({ id: botInfo.value.id }).then(() => {
        ShowBotInfoFlag.value = false;
        botStore.deleteBot(botInfo.value.id);
        removeTabByBotId(botInfo.value.id);
      }).catch((err) => {
        console.log(err);
      });
    };
    const openChatWindow = (bot) => {
      if (bot.chatIds.length > 0) {
        if (panelStore.openChatIfExistInTabs(bot.id || ""))
          return;
        addTabAndSave(panelStore.windowId, {
          id: (/* @__PURE__ */ new Date()).getTime().toString(),
          title: bot.title || "",
          editing: false,
          type: "privateChat",
          botId: bot.id
        });
        console.log(panelStore.getCurrentTab);
      } else {
        console.log("bot.chatId is empty");
      }
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
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("details", _hoisted_4$1, [
                createBaseVNode("summary", {
                  class: "custom-summary sticky top-0",
                  style: normalizeStyle({ backgroundColor: unref(panelStore).expandRightCol ? "var(--panel-bg)" : "" })
                }, [
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
                ], 4),
                _hoisted_5$1,
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
                      createBaseVNode("div", _hoisted_8$1, [
                        createBaseVNode("img", {
                          class: "rounded-[12px] w-6 h-6 object-cover grow min-h-[24px]",
                          src: bot.avatar
                        }, null, 8, _hoisted_9$1)
                      ]),
                      createBaseVNode("div", {
                        style: normalizeStyle({ opacity: unref(panelStore).expandRightCol ? "" : "0" }),
                        class: "model-name truncate select-none font-[500] text-[14px] leading-none font-[RobotoMedium] text-[rgb(124,135,142)] tracking-[-0.15px] w-[120px] my-[11px]"
                      }, toDisplayString(bot.title), 5),
                      createBaseVNode("div", {
                        class: "info",
                        onClick: withModifiers(($event) => ShowBotInfo(bot), ["stop"])
                      }, _hoisted_12$1, 8, _hoisted_10$1)
                    ], 40, _hoisted_7$1)
                  ], 8, _hoisted_6$1);
                }), 128))
              ])
            ]),
            createVNode(createBot)
          ])
        ]),
        createVNode(_component_el_dialog, {
          modelValue: ShowBotInfoFlag.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ShowBotInfoFlag.value = $event),
          "show-close": false,
          style: { "width": "800px", "background": "#292d32 !important", "padding": "48px" },
          class: "promptBot max-h-[80%] overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_13$1, [
              createBaseVNode("div", _hoisted_14$1, [
                createBaseVNode("img", {
                  class: "h-[96px] w-[96px]",
                  src: botInfo.value.avatar,
                  alt: ""
                }, null, 8, _hoisted_15$1)
              ]),
              createBaseVNode("div", _hoisted_16$1, [
                createBaseVNode("div", _hoisted_17$1, [
                  createBaseVNode("div", _hoisted_18$1, [
                    createBaseVNode("div", _hoisted_19, toDisplayString(botInfo.value.title), 1),
                    createBaseVNode("div", _hoisted_20, [
                      botInfo.value.user_permission.permission == 1 || botInfo.value.user_permission.permission == 0 ? (openBlock(), createElementBlock("svg", {
                        key: 0,
                        onClick: editCurrentBot,
                        class: "cursor-pointer w-12 h-12 p-3 rounded-md justify-center items-center gap-2 inline-flex"
                      }, _hoisted_22)) : createCommentVNode("", true),
                      (openBlock(), createElementBlock("svg", {
                        onClick: createBotBasedOnCurrentBot,
                        class: "cursor-pointer w-12 h-12 p-3 rounded-md justify-center items-center gap-2 inline-flex"
                      }, _hoisted_24)),
                      (openBlock(), createElementBlock("svg", {
                        onClick: _cache[0] || (_cache[0] = ($event) => shareBot(botInfo.value.id)),
                        class: "cursor-pointer w-12 h-12 p-3 rounded-md justify-center items-center gap-2 inline-flex"
                      }, _hoisted_26)),
                      botInfo.value.user_permission.permission == 0 ? (openBlock(), createElementBlock("svg", {
                        key: 1,
                        onClick: uninstallBot,
                        class: "cursor-pointer w-12 h-12 p-3 rounded-md justify-center items-center gap-2 inline-flex"
                      }, _hoisted_28)) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    _hoisted_30,
                    createBaseVNode("div", _hoisted_31, toDisplayString(botInfo.value.creator_name), 1)
                  ]),
                  createBaseVNode("div", _hoisted_32, toDisplayString(botInfo.value.description), 1)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_dialog, {
          modelValue: copyBotCode.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => copyBotCode.value = $event),
          "show-close": false,
          style: { "width": "800px", "background": "#292d32 !important" },
          class: "h-30 overflow-scroll"
        }, {
          header: withCtx(({}) => []),
          default: withCtx(() => [
            _hoisted_33,
            createBaseVNode("div", _hoisted_34, [
              withDirectives(createBaseVNode("textarea", {
                class: "text-white text-lg bg-transparent resize-none",
                id: "botCode",
                rows: "1",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => botCode.value = $event)
              }, null, 512), [
                [vModelText, botCode.value]
              ]),
              (openBlock(), createElementBlock("svg", {
                class: "w-6 h-6 cursor-pointer",
                onClick: _cache[3] || (_cache[3] = ($event) => copyTextToClipboard(botCode.value))
              }, _hoisted_36))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
});
const selectedBotCol_vue_vue_type_style_index_0_scoped_75266493_lang = "";
const selectedBotCol = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-75266493"]]);
const _withScopeId = (n) => (pushScopeId("data-v-aadc1e5a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "absolute top-0 right-0 left-0 h-10 flex flex-row items-center justify-center bg-[#1D2126] border-b border-[var(--panel-bg)]" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "w-[30%] h-full shrink-0 app-drag" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "app-drag rounded w-[50%] h-[30px] flex flex-row items-center justify-between px-5 py-[11px]" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row items-center gap-3 w-full" })
], -1));
const _hoisted_5 = { class: "w-[20%] h-full shrink-0 flex flex-row justify-end gap-2 p-2" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#leftPanelClose" }, null, -1));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#leftPanelOpen" }, null, -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#rightPanelClose" }, null, -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("use", { href: "#rightPanelOpen" }, null, -1));
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = {
  key: 0,
  class: "main-view"
};
const _hoisted_15 = {
  key: 1,
  class: "main-view"
};
const _hoisted_16 = {
  key: 2,
  class: "main-view"
};
const _hoisted_17 = {
  key: 3,
  class: "main-view"
};
const _hoisted_18 = {
  class: "flex-1 flex flex-row",
  style: { "height": "calc(100% - 48.5px)" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  setup(__props) {
    const panelStore = usePanelStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            unref(panelStore).pinMenu ? (openBlock(), createElementBlock("svg", {
              key: 0,
              class: "h-5 w-5 cursor-pointer",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(panelStore).pinMenu = !unref(panelStore).pinMenu)
            }, _hoisted_7)) : (openBlock(), createElementBlock("svg", {
              key: 1,
              class: "h-5 w-5 cursor-pointer",
              onClick: _cache[1] || (_cache[1] = ($event) => unref(panelStore).pinMenu = !unref(panelStore).pinMenu)
            }, _hoisted_9)),
            !unref(panelStore).expandRightCol ? (openBlock(), createElementBlock("svg", {
              key: 2,
              class: "h-5 w-5 cursor-pointer",
              onClick: _cache[2] || (_cache[2] = ($event) => unref(panelStore).expandRightCol = !unref(panelStore).expandRightCol)
            }, _hoisted_11)) : (openBlock(), createElementBlock("svg", {
              key: 3,
              class: "h-5 w-5 cursor-pointer",
              onClick: _cache[3] || (_cache[3] = ($event) => unref(panelStore).expandRightCol = !unref(panelStore).expandRightCol)
            }, _hoisted_13))
          ])
        ]),
        createVNode(Menu),
        unref(panelStore).panelId == "-2" ? (openBlock(), createElementBlock("div", _hoisted_14, [
          createVNode(subscription)
        ])) : unref(panelStore).panelId == "-3" ? (openBlock(), createElementBlock("div", _hoisted_15, [
          createVNode(profile)
        ])) : unref(panelStore).panelId == "-1" ? (openBlock(), createElementBlock("div", _hoisted_16, [
          createVNode(setting)
        ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
          createBaseVNode("div", {
            class: "tabs transition-all duration-500",
            style: normalizeStyle({ width: unref(panelStore).expandRightCol ? "calc(100% - 200px)" : "calc(100% - 60px)" })
          }, [
            createBaseVNode("div", _hoisted_18, [
              createVNode(tabIndex)
            ])
          ], 4),
          createVNode(selectedBotCol)
        ]))
      ]);
    };
  }
});
const home_vue_vue_type_style_index_0_scoped_aadc1e5a_lang = "";
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aadc1e5a"]]);
export {
  home as default
};
