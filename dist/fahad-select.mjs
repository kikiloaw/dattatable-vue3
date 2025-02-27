import { ref as s, watch as y, onMounted as V, createElementBlock as M, openBlock as L, createVNode as S, unref as T, withCtx as d, createElementVNode as m, nextTick as x } from "vue";
import H from "axios";
import _ from "vue-multiselect";
import C from "lodash/debounce";
const k = ["innerHTML"], w = ["innerHTML"], B = ["innerHTML"], F = {
  __name: "FahadSelect",
  props: {
    modelValue: Object,
    searchRoute: {
      type: String,
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    param: {
      type: [Object, Boolean],
      default: !1
    },
    placeholder: {
      type: String,
      default: "Select an option"
    },
    label: {
      type: String,
      default: "name"
    }
  },
  emits: ["update:modelValue", "triggerChange", "reload"],
  setup(n, { expose: f, emit: g }) {
    const o = (e) => e.html || e[r.label], r = n, u = g, p = s([]), i = s(!1), a = s(r.modelValue);
    y(a, (e) => {
      u("update:modelValue", e), u("triggerChange", e);
    }), V(() => {
      c("");
    });
    const c = async (e) => {
      i.value = !0;
      try {
        const l = await H.get(route(r.searchRoute), {
          params: {
            query_: e,
            param: r.param
          }
        });
        p.value = l.data.results;
      } catch (l) {
        console.error(l);
      } finally {
        i.value = !1;
      }
    }, h = async () => {
      await x(), await c(""), a.value = null;
    };
    f({
      reload: h
    }), u("reload", h);
    const b = C((e) => {
      c(e);
    }, 300), v = (e) => {
      var l;
      ((l = a.value) == null ? void 0 : l.name) !== e && b(e);
    };
    return (e, l) => (L(), M("div", null, [
      S(T(_), {
        modelValue: a.value,
        "onUpdate:modelValue": l[0] || (l[0] = (t) => a.value = t),
        options: p.value,
        "track-by": "id",
        onSearchChange: v,
        label: n.label,
        placeholder: n.placeholder,
        loading: i.value,
        multiple: n.multiple,
        "custom-label": o
      }, {
        option: d(({ option: t }) => [
          m("div", {
            innerHTML: o(t)
          }, null, 8, k)
        ]),
        singleLabel: d(({ option: t }) => [
          m("span", {
            innerHTML: o(t)
          }, null, 8, w)
        ]),
        "multiple-label": d(({ option: t }) => [
          m("span", {
            innerHTML: o(t)
          }, null, 8, B)
        ]),
        _: 1
      }, 8, ["modelValue", "options", "label", "placeholder", "loading", "multiple"])
    ]));
  }
};
export {
  F as default
};
