import { createElementBlock as c, openBlock as f, withKeys as b, normalizeClass as M, withModifiers as o, renderSlot as g, createElementVNode as p, createBlock as j, createVNode as C, createCommentVNode as y, withDirectives as $, Fragment as P, renderList as F, toDisplayString as S, vShow as B, Transition as N, withCtx as w, normalizeStyle as D, createTextVNode as L, Teleport as U, ref as k, watch as A, onMounted as I, unref as X, nextTick as Y } from "vue";
import J from "axios";
import { debounce as Q } from "lodash";
function E(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function W(e) {
  return (...t) => !e(...t);
}
function Z(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function x(e) {
  return e.filter((t) => !t.$isLabel);
}
function H(e, t) {
  return (i) => i.reduce((n, r) => r[e] && r[e].length ? (n.push({
    $groupLabel: r[t],
    $isLabel: !0
  }), n.concat(r[e])) : n, []);
}
const K = (...e) => (t) => e.reduce((i, n) => n(i), t);
var _ = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(e, t) {
        return E(e) ? "" : t ? e[t] : e;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
      type: Function,
      default: null
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let i = this.options.concat();
      return this.internalSearch ? i = this.groupValues ? this.filterAndFlat(i, t, this.label) : this.filterOptions(i, t, this.label, this.customLabel) : i = this.groupValues ? H(this.groupValues, this.groupLabel)(i) : i, i = this.hideSelected ? i.filter(W(this.isSelected)) : i, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? i.push({ isTag: !0, label: e }) : i.unshift({ isTag: !0, label: e })), i.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
      },
      deep: !0
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(e, t, i) {
      return K(
        this.filterGroups(t, i, this.groupValues, this.groupLabel, this.customLabel),
        H(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return K(
        H(this.groupValues, this.groupLabel),
        x
      )(e);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(e) {
      this.search = e;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(e) {
      if (E(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return E(t) ? "" : t;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.$emit("select", e, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(e) {
      const t = this.options.find((i) => i[this.groupLabel] === e.$groupLabel);
      if (t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const i = this.trackBy ? t[this.groupValues].map((r) => r[this.trackBy]) : t[this.groupValues], n = this.internalValue.filter(
            (r) => i.indexOf(this.trackBy ? r[this.trackBy] : r) === -1
          );
          this.$emit("update:modelValue", n);
        } else {
          const i = t[this.groupValues].filter(
            (n) => !(this.isOptionDisabled(n) || this.isSelected(n))
          );
          this.max && i.splice(this.max - this.internalValue.length), this.$emit("select", i, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(i)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const i = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.multiple) {
        const n = this.internalValue.slice(0, i).concat(this.internalValue.slice(i + 1));
        this.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", e, this.id), this.closeOnSelect && t && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u") return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions(e, t, i, n) {
      return t ? e.filter((r) => Z(n(r, i), t)).sort((r, a) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(r, a) : n(r, i).length - n(a, i).length) : e;
    },
    /**
     *
     * @param {String} search
     * @param {String} label
     * @param {String} values
     * @param {String} groupLabel
     * @param {function} customLabel
     * @returns {function(*): *}
     */
    filterGroups(e, t, i, n, r) {
      return (a) => a.map((s) => {
        if (!s[i])
          return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
        const d = this.filterOptions(s[i], e, t, r);
        return d.length ? {
          [n]: s[n],
          [i]: d
        } : [];
      });
    }
  }
}, ee = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const i = this.options.find((n) => n[this.groupLabel] === t.$groupLabel);
      return i && !this.wholeGroupDisabled(i) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(i) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      var e;
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, ((e = this.$refs.list) == null ? void 0 : e.scrollTop) <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      var e;
      this.pointer > 0 ? (this.pointer--, ((e = this.$refs.list) == null ? void 0 : e.scrollTop) >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, R = {
  name: "vue-multiselect",
  mixins: [_, ee],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: !1
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the body element
     * @default false
     * @type {Boolean}
     */
    useTeleport: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      dropdownStyles: {},
      ready: !1
    };
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    },
    isRequired() {
      return this.required === !1 ? !1 : this.internalValue.length <= 0;
    }
  },
  watch: {
    isOpen(e) {
      e && (this.useTeleport ? (this.ready = !1, this.$nextTick(() => {
        const t = this.$el.getBoundingClientRect();
        this.dropdownStyles = {
          position: "absolute",
          top: `${t.bottom + window.scrollY}px`,
          left: `${t.left + window.scrollX}px`,
          width: `${t.width}px`,
          zIndex: 9999
        }, this.ready = !0;
      })) : this.ready = !0);
    }
  }
};
const te = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], ie = {
  ref: "tags",
  class: "multiselect__tags"
}, se = { class: "multiselect__tags-wrap" }, le = ["textContent"], re = ["onKeypress", "onMousedown"], ne = ["textContent"], ae = { class: "multiselect__spinner" }, oe = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], ue = ["id", "aria-multiselectable"], he = { key: 0 }, de = { class: "multiselect__option" }, pe = ["aria-selected", "id", "role"], fe = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], ce = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], ge = { class: "multiselect__option" }, me = { class: "multiselect__option" };
function be(e, t, i, n, r, a) {
  return f(), c("div", {
    tabindex: e.searchable ? -1 : i.tabindex,
    class: M([{ "multiselect--active": e.isOpen, "multiselect--disabled": i.disabled, "multiselect--above": a.isAbove, "multiselect--has-options-group": a.hasOptionGroup }, "multiselect"]),
    onFocus: t[14] || (t[14] = (s) => e.activate()),
    onBlur: t[15] || (t[15] = (s) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = b(o((s) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = b(o((s) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = b(o((s) => e.addPointerElement(s), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = b((s) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    g(e.$slots, "caret", { toggle: e.toggle }, () => [
      p(
        "div",
        {
          onMousedown: t[0] || (t[0] = o((s) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    g(e.$slots, "clear", { search: e.search }),
    p(
      "div",
      ie,
      [
        g(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: a.visibleValues,
          isOpen: e.isOpen
        }, () => [
          $(p(
            "div",
            se,
            [
              (f(!0), c(
                P,
                null,
                F(a.visibleValues, (s, d) => g(e.$slots, "tag", {
                  option: s,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (f(), c(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: d,
                      onMousedown: t[1] || (t[1] = o(() => {
                      }, ["prevent"]))
                    },
                    [
                      p("span", {
                        textContent: S(e.getOptionLabel(s))
                      }, null, 8, le),
                      p("i", {
                        tabindex: "1",
                        onKeypress: b(o((v) => e.removeElement(s), ["prevent"]), ["enter"]),
                        onMousedown: o((v) => e.removeElement(s), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, re)
                    ],
                    32
                    /* NEED_HYDRATION */
                  ))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [B, a.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > i.limit ? g(e.$slots, "limit", { key: 0 }, () => [
            p("strong", {
              class: "multiselect__strong",
              textContent: S(i.limitText(e.internalValue.length - i.limit))
            }, null, 8, ne)
          ]) : y("v-if", !0)
        ]),
        C(N, { name: "multiselect__loading" }, {
          default: w(() => [
            g(e.$slots, "loading", {}, () => [
              $(p(
                "div",
                ae,
                null,
                512
                /* NEED_PATCH */
              ), [
                [B, i.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? (f(), c("input", {
          key: 0,
          ref: "search",
          name: i.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: i.spellcheck,
          placeholder: e.placeholder,
          required: a.isRequired,
          style: D(a.inputStyle),
          value: e.search,
          disabled: i.disabled,
          tabindex: i.tabindex,
          "aria-label": i.name + "-searchbox",
          onInput: t[2] || (t[2] = (s) => e.updateSearch(s.target.value)),
          onFocus: t[3] || (t[3] = o((s) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = o((s) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = b((s) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = b(o((s) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = b(o((s) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[9] || (t[9] = b(o((s) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: t[8] || (t[8] = b(o((s) => e.addPointerElement(s), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, oe)) : y("v-if", !0),
        a.isSingleLabelVisible ? (f(), c(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = o((...s) => e.toggle && e.toggle(...s), ["prevent"]))
          },
          [
            g(e.$slots, "singleLabel", { option: a.singleValue }, () => [
              L(
                S(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : y("v-if", !0),
        a.isPlaceholderVisible ? (f(), c(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = o((...s) => e.toggle && e.toggle(...s), ["prevent"]))
          },
          [
            g(e.$slots, "placeholder", {}, () => [
              L(
                S(e.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : y("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    (f(), j(U, {
      to: "body",
      disabled: !i.useTeleport
    }, [
      C(N, { name: "multiselect" }, {
        default: w(() => [
          e.isOpen && r.ready ? (f(), c(
            "div",
            {
              key: 0,
              class: "multiselect__content-wrapper",
              onFocus: t[12] || (t[12] = (...s) => e.activate && e.activate(...s)),
              tabindex: "-1",
              onMousedown: t[13] || (t[13] = o(() => {
              }, ["prevent"])),
              style: D([r.dropdownStyles, { maxHeight: e.optimizedHeight + "px" }]),
              ref: "list"
            },
            [
              p("ul", {
                class: "multiselect__content",
                style: D(a.contentStyle),
                role: "listbox",
                id: "listbox-" + e.id,
                "aria-multiselectable": e.multiple
              }, [
                g(e.$slots, "beforeList"),
                e.multiple && e.max === e.internalValue.length ? (f(), c("li", he, [
                  p("span", de, [
                    g(e.$slots, "maxElements", {}, () => [
                      L(
                        "Maximum of " + S(e.max) + " options selected. First remove a selected option to select another.",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])) : y("v-if", !0),
                !e.max || e.internalValue.length < e.max ? (f(!0), c(
                  P,
                  { key: 1 },
                  F(e.filteredOptions, (s, d) => (f(), c("li", {
                    class: "multiselect__element",
                    key: d,
                    "aria-selected": e.isSelected(s),
                    id: e.id + "-" + d,
                    role: s && (s.$isLabel || s.$isDisabled) ? null : "option"
                  }, [
                    s && (s.$isLabel || s.$isDisabled) ? y("v-if", !0) : (f(), c("span", {
                      key: 0,
                      class: M([e.optionHighlight(d, s), "multiselect__option"]),
                      onClick: o((v) => e.select(s), ["stop"]),
                      onMouseenter: o((v) => e.pointerSet(d), ["self"]),
                      "data-select": s && s.isTag ? e.tagPlaceholder : a.selectLabelText,
                      "data-selected": a.selectedLabelText,
                      "data-deselect": a.deselectLabelText
                    }, [
                      g(e.$slots, "option", {
                        option: s,
                        search: e.search,
                        index: d
                      }, () => [
                        p(
                          "span",
                          null,
                          S(e.getOptionLabel(s)),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 42, fe)),
                    s && (s.$isLabel || s.$isDisabled) ? (f(), c("span", {
                      key: 1,
                      "data-select": e.groupSelect && a.selectGroupLabelText,
                      "data-deselect": e.groupSelect && a.deselectGroupLabelText,
                      class: M([e.groupHighlight(d, s), "multiselect__option"]),
                      onMouseenter: o((v) => e.groupSelect && e.pointerSet(d), ["self"]),
                      onMousedown: o((v) => e.selectGroup(s), ["prevent"])
                    }, [
                      g(e.$slots, "option", {
                        option: s,
                        search: e.search,
                        index: d
                      }, () => [
                        p(
                          "span",
                          null,
                          S(e.getOptionLabel(s)),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 42, ce)) : y("v-if", !0)
                  ], 8, pe))),
                  128
                  /* KEYED_FRAGMENT */
                )) : y("v-if", !0),
                $(p(
                  "li",
                  null,
                  [
                    p("span", ge, [
                      g(e.$slots, "noResult", { search: e.search }, () => [
                        t[20] || (t[20] = L("No elements found. Consider changing the search query."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [B, i.showNoResults && e.filteredOptions.length === 0 && e.search && !i.loading]
                ]),
                $(p(
                  "li",
                  null,
                  [
                    p("span", me, [
                      g(e.$slots, "noOptions", {}, () => [
                        t[21] || (t[21] = L("List is empty."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [B, i.showNoOptions && (e.options.length === 0 || a.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !i.loading]
                ]),
                g(e.$slots, "afterList")
              ], 12, ue)
            ],
            36
            /* STYLE, NEED_HYDRATION */
          )) : y("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      })
    ], 8, ["disabled"]))
  ], 42, te);
}
R.render = be;
const ye = ["selectable"], ve = ["innerHTML", "selectable"], Se = ["innerHTML"], Ve = {
  key: 0,
  class: "multiselect__selection"
}, Oe = ["innerHTML"], we = { class: "multiselect__tag" }, Le = ["innerHTML"], $e = ["onMousedown"], Me = {
  __name: "FahadSelect",
  props: {
    modelValue: {
      type: [Object, Boolean, String, Array, Number],
      default: !1
    },
    searchRoute: {
      type: String,
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    param: {
      type: [Object, Boolean, String, Array, Number],
      default: !1
    },
    placeholder: {
      type: String,
      default: "Select an option"
    },
    label: {
      type: String,
      default: "label"
    }
  },
  emits: ["update:modelValue", "triggerChange", "reload"],
  setup(e, { expose: t, emit: i }) {
    const n = (u) => u.label || `<span>${u[r.label]}</span>`, r = e, a = i, s = k(!1), d = k([]), v = k(!1), V = k(r.modelValue || []);
    A(V, (u) => {
      a("update:modelValue", u), a("triggerChange", u);
    }), A(() => r.modelValue, (u) => {
      if (u)
        if (r.multiple) {
          if (!Array.isArray(u)) return;
          u.forEach((h) => {
            d.value.some((m) => m.id === h.id) || d.value.push(h);
          }), V.value = u;
        } else
          d.value.some((l) => l.id === u.id) || d.value.push(u), V.value = u;
    }, { immediate: !0 }), I(() => {
      T("");
    });
    const T = async (u) => {
      v.value = !0;
      try {
        const h = await J.get(route(r.searchRoute), {
          params: {
            query_: u,
            param: r.param
          }
        });
        d.value = h.data.results.flatMap((l) => {
          if (l.group)
            return s.value = !0, Array.isArray(l.data) ? [{ group: l.group, data: l.data }] : l.data ? [{ group: l.group, data: [l.data] }] : [];
          {
            s.value = !1;
            const m = r.label && l[r.label] ? l[r.label] : l.label || "No Label";
            return {
              ...l,
              id: l.id,
              label: m
            };
          }
        }).map((l) => l.group && Array.isArray(l.data) ? {
          group: l.group,
          data: l.data.map((m) => {
            const O = r.label && m[r.label] ? m[r.label] : m.label;
            return {
              ...m,
              // Include ALL properties of the original 'innerItem'
              label: O,
              category: l.group
            };
          })
        } : l);
      } catch (h) {
        console.error("Error fetching data:", h);
      } finally {
        v.value = !1;
      }
    };
    A(d, (u) => {
      s.value = u.some((h) => h.group);
    }, { deep: !0, immediate: !0 });
    const G = async () => {
      await Y(), await T(""), V.value = r.multiple ? [] : null;
    };
    t({
      reload: G
    }), a("reload", G);
    const q = Q((u) => {
      T(u);
    }, 300), z = (u) => {
      var h;
      ((h = V.value) == null ? void 0 : h.name) !== u && q(u);
    };
    return (u, h) => (f(), c("div", null, [
      C(X(R), {
        modelValue: V.value,
        "onUpdate:modelValue": h[4] || (h[4] = (l) => V.value = l),
        options: d.value,
        "track-by": "id",
        onSearchChange: z,
        label: e.label,
        placeholder: e.placeholder,
        loading: v.value,
        multiple: e.multiple,
        "custom-label": n,
        class: "custom-multiselect",
        "internal-search": !1,
        "group-values": s.value ? "data" : void 0,
        "group-label": s.value ? "group" : void 0,
        "group-select": s.value ? e.multiple : !1
      }, {
        option: w(({ option: l, selectable: m }) => [
          l.$isLabel ? (f(), c("div", {
            key: 0,
            class: "multiselect__option--group",
            selectable: s.value,
            onMousedown: h[0] || (h[0] = o(() => {
            }, ["prevent"])),
            onMouseup: h[1] || (h[1] = o(() => {
            }, ["prevent"])),
            onClick: h[2] || (h[2] = o(() => {
            }, ["prevent"]))
          }, S(l.$groupLabel), 41, ye)) : (f(), c("div", {
            key: 1,
            innerHTML: n(l),
            selectable: s.value
          }, null, 8, ve))
        ]),
        singleLabel: w(({ option: l, remove: m }) => [
          p("span", {
            innerHTML: n(l)
          }, null, 8, Se)
        ]),
        selection: w(({ values: l, isOpen: m }) => [
          l.length && !m ? (f(), c("span", Ve, [
            (f(!0), c(P, null, F(l, (O) => (f(), c("span", {
              key: O.id,
              innerHTML: n(O),
              class: "multiselect__tag"
            }, null, 8, Oe))), 128))
          ])) : y("", !0)
        ]),
        tag: w(({ option: l, remove: m }) => [
          p("div", we, [
            p("span", {
              innerHTML: n(l)
            }, null, 8, Le),
            p("i", {
              class: "multiselect__tag-icon",
              onClick: h[3] || (h[3] = o(() => {
              }, ["prevent"])),
              onMousedown: o((O) => m(l, O), ["prevent", "stop"])
            }, null, 40, $e)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "options", "label", "placeholder", "loading", "multiple", "group-values", "group-label", "group-select"])
    ]));
  }
};
export {
  Me as default
};
