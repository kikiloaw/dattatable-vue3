import { createElementBlock as c, openBlock as f, withKeys as b, normalizeClass as k, withModifiers as a, renderSlot as p, createElementVNode as o, createVNode as H, createCommentVNode as y, withDirectives as S, Fragment as A, renderList as P, toDisplayString as v, vShow as O, Transition as F, withCtx as V, normalizeStyle as T, createTextVNode as w, ref as D, watch as q, onMounted as z, unref as j, nextTick as I } from "vue";
import U from "axios";
import { debounce as J } from "lodash";
function M(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function Q(e) {
  return (...t) => !e(...t);
}
function W(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function X(e) {
  return e.filter((t) => !t.$isLabel);
}
function E(e, t) {
  return (i) => i.reduce((l, r) => r[e] && r[e].length ? (l.push({
    $groupLabel: r[t],
    $isLabel: !0
  }), l.concat(r[e])) : l, []);
}
const G = (...e) => (t) => e.reduce((i, l) => l(i), t);
var Y = {
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
        return M(e) ? "" : t ? e[t] : e;
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
      return this.internalSearch ? i = this.groupValues ? this.filterAndFlat(i, t, this.label) : this.filterOptions(i, t, this.label, this.customLabel) : i = this.groupValues ? E(this.groupValues, this.groupLabel)(i) : i, i = this.hideSelected ? i.filter(Q(this.isSelected)) : i, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? i.push({ isTag: !0, label: e }) : i.unshift({ isTag: !0, label: e })), i.slice(0, this.optionsLimit);
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
      return G(
        this.filterGroups(t, i, this.groupValues, this.groupLabel, this.customLabel),
        E(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return G(
        E(this.groupValues, this.groupLabel),
        X
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
      if (M(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return M(t) ? "" : t;
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
          const i = this.trackBy ? t[this.groupValues].map((r) => r[this.trackBy]) : t[this.groupValues], l = this.internalValue.filter(
            (r) => i.indexOf(this.trackBy ? r[this.trackBy] : r) === -1
          );
          this.$emit("update:modelValue", l);
        } else {
          const i = t[this.groupValues].filter(
            (l) => !(this.isOptionDisabled(l) || this.isSelected(l))
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
        const l = this.internalValue.slice(0, i).concat(this.internalValue.slice(i + 1));
        this.$emit("update:modelValue", l);
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
    filterOptions(e, t, i, l) {
      return t ? e.filter((r) => W(l(r, i), t)).sort((r, n) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(r, n) : l(r, i).length - l(n, i).length) : e;
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
    filterGroups(e, t, i, l, r) {
      return (n) => n.map((s) => {
        if (!s[i])
          return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
        const h = this.filterOptions(s[i], e, t, r);
        return h.length ? {
          [l]: s[l],
          [i]: h
        } : [];
      });
    }
  }
}, Z = {
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
      const i = this.options.find((l) => l[this.groupLabel] === t.$groupLabel);
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
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
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
}, K = {
  name: "vue-multiselect",
  mixins: [Y, Z],
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
    }
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
  }
};
const x = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], _ = {
  ref: "tags",
  class: "multiselect__tags"
}, ee = { class: "multiselect__tags-wrap" }, te = ["textContent"], ie = ["onKeypress", "onMousedown"], se = ["textContent"], le = { class: "multiselect__spinner" }, ne = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], re = ["id", "aria-multiselectable"], ae = { key: 0 }, oe = { class: "multiselect__option" }, ue = ["aria-selected", "id", "role"], he = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], de = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], pe = { class: "multiselect__option" }, ce = { class: "multiselect__option" };
function fe(e, t, i, l, r, n) {
  return f(), c("div", {
    tabindex: e.searchable ? -1 : i.tabindex,
    class: k([{ "multiselect--active": e.isOpen, "multiselect--disabled": i.disabled, "multiselect--above": n.isAbove, "multiselect--has-options-group": n.hasOptionGroup }, "multiselect"]),
    onFocus: t[14] || (t[14] = (s) => e.activate()),
    onBlur: t[15] || (t[15] = (s) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = b(a((s) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = b(a((s) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = b(a((s) => e.addPointerElement(s), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = b((s) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    p(e.$slots, "caret", { toggle: e.toggle }, () => [
      o(
        "div",
        {
          onMousedown: t[0] || (t[0] = a((s) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    p(e.$slots, "clear", { search: e.search }),
    o(
      "div",
      _,
      [
        p(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: n.visibleValues,
          isOpen: e.isOpen
        }, () => [
          S(o(
            "div",
            ee,
            [
              (f(!0), c(
                A,
                null,
                P(n.visibleValues, (s, h) => p(e.$slots, "tag", {
                  option: s,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (f(), c(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: h,
                      onMousedown: t[1] || (t[1] = a(() => {
                      }, ["prevent"]))
                    },
                    [
                      o("span", {
                        textContent: v(e.getOptionLabel(s))
                      }, null, 8, te),
                      o("i", {
                        tabindex: "1",
                        onKeypress: b(a((g) => e.removeElement(s), ["prevent"]), ["enter"]),
                        onMousedown: a((g) => e.removeElement(s), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, ie)
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
            [O, n.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > i.limit ? p(e.$slots, "limit", { key: 0 }, () => [
            o("strong", {
              class: "multiselect__strong",
              textContent: v(i.limitText(e.internalValue.length - i.limit))
            }, null, 8, se)
          ]) : y("v-if", !0)
        ]),
        H(F, { name: "multiselect__loading" }, {
          default: V(() => [
            p(e.$slots, "loading", {}, () => [
              S(o(
                "div",
                le,
                null,
                512
                /* NEED_PATCH */
              ), [
                [O, i.loading]
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
          required: n.isRequired,
          style: T(n.inputStyle),
          value: e.search,
          disabled: i.disabled,
          tabindex: i.tabindex,
          "aria-label": i.name + "-searchbox",
          onInput: t[2] || (t[2] = (s) => e.updateSearch(s.target.value)),
          onFocus: t[3] || (t[3] = a((s) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = a((s) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = b((s) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = b(a((s) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = b(a((s) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[9] || (t[9] = b(a((s) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: t[8] || (t[8] = b(a((s) => e.addPointerElement(s), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, ne)) : y("v-if", !0),
        n.isSingleLabelVisible ? (f(), c(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = a((...s) => e.toggle && e.toggle(...s), ["prevent"]))
          },
          [
            p(e.$slots, "singleLabel", { option: n.singleValue }, () => [
              w(
                v(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : y("v-if", !0),
        n.isPlaceholderVisible ? (f(), c(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = a((...s) => e.toggle && e.toggle(...s), ["prevent"]))
          },
          [
            p(e.$slots, "placeholder", {}, () => [
              w(
                v(e.placeholder),
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
    H(F, {
      name: "multiselect",
      persisted: ""
    }, {
      default: V(() => [
        S(o(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: t[12] || (t[12] = (...s) => e.activate && e.activate(...s)),
            tabindex: "-1",
            onMousedown: t[13] || (t[13] = a(() => {
            }, ["prevent"])),
            style: T({ maxHeight: e.optimizedHeight + "px" }),
            ref: "list"
          },
          [
            o("ul", {
              class: "multiselect__content",
              style: T(n.contentStyle),
              role: "listbox",
              id: "listbox-" + e.id,
              "aria-multiselectable": e.multiple
            }, [
              p(e.$slots, "beforeList"),
              e.multiple && e.max === e.internalValue.length ? (f(), c("li", ae, [
                o("span", oe, [
                  p(e.$slots, "maxElements", {}, () => [
                    w(
                      "Maximum of " + v(e.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : y("v-if", !0),
              !e.max || e.internalValue.length < e.max ? (f(!0), c(
                A,
                { key: 1 },
                P(e.filteredOptions, (s, h) => (f(), c("li", {
                  class: "multiselect__element",
                  key: h,
                  "aria-selected": e.isSelected(s),
                  id: e.id + "-" + h,
                  role: s && (s.$isLabel || s.$isDisabled) ? null : "option"
                }, [
                  s && (s.$isLabel || s.$isDisabled) ? y("v-if", !0) : (f(), c("span", {
                    key: 0,
                    class: k([e.optionHighlight(h, s), "multiselect__option"]),
                    onClick: a((g) => e.select(s), ["stop"]),
                    onMouseenter: a((g) => e.pointerSet(h), ["self"]),
                    "data-select": s && s.isTag ? e.tagPlaceholder : n.selectLabelText,
                    "data-selected": n.selectedLabelText,
                    "data-deselect": n.deselectLabelText
                  }, [
                    p(e.$slots, "option", {
                      option: s,
                      search: e.search,
                      index: h
                    }, () => [
                      o(
                        "span",
                        null,
                        v(e.getOptionLabel(s)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, he)),
                  s && (s.$isLabel || s.$isDisabled) ? (f(), c("span", {
                    key: 1,
                    "data-select": e.groupSelect && n.selectGroupLabelText,
                    "data-deselect": e.groupSelect && n.deselectGroupLabelText,
                    class: k([e.groupHighlight(h, s), "multiselect__option"]),
                    onMouseenter: a((g) => e.groupSelect && e.pointerSet(h), ["self"]),
                    onMousedown: a((g) => e.selectGroup(s), ["prevent"])
                  }, [
                    p(e.$slots, "option", {
                      option: s,
                      search: e.search,
                      index: h
                    }, () => [
                      o(
                        "span",
                        null,
                        v(e.getOptionLabel(s)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, de)) : y("v-if", !0)
                ], 8, ue))),
                128
                /* KEYED_FRAGMENT */
              )) : y("v-if", !0),
              S(o(
                "li",
                null,
                [
                  o("span", pe, [
                    p(e.$slots, "noResult", { search: e.search }, () => [
                      t[20] || (t[20] = w("No elements found. Consider changing the search query."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [O, i.showNoResults && e.filteredOptions.length === 0 && e.search && !i.loading]
              ]),
              S(o(
                "li",
                null,
                [
                  o("span", ce, [
                    p(e.$slots, "noOptions", {}, () => [
                      t[21] || (t[21] = w("List is empty."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [O, i.showNoOptions && (e.options.length === 0 || n.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !i.loading]
              ]),
              p(e.$slots, "afterList")
            ], 12, re)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ), [
          [O, e.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, x);
}
K.render = fe;
const ge = ["innerHTML"], me = ["innerHTML"], be = {
  key: 0,
  class: "multiselect__selection"
}, ye = ["innerHTML"], ve = { class: "multiselect__tag" }, Ve = ["innerHTML"], Se = ["onMousedown"], $e = {
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
  setup(e, { expose: t, emit: i }) {
    const l = (u) => (console.log("Rendering option:", {
      option: u,
      html: u.html,
      label: u[r.label],
      result: u.html || `<span>${u[r.label]}</span>`
    }), u.html || `<span>${u[r.label]}</span>`), r = e, n = i, s = D([]), h = D(!1), g = D(r.modelValue || []);
    q(g, (u) => {
      n("update:modelValue", u), n("triggerChange", u);
    }), z(() => {
      $("");
    });
    const $ = async (u) => {
      h.value = !0;
      try {
        const m = await U.get(route(r.searchRoute), {
          params: {
            query_: u,
            param: r.param
          }
        });
        s.value = m.data.results.map((d) => ({
          id: d.id,
          html: d.html || `<span>${d[r.label]}</span>`
          // Fallback to plain text in <span>
        }));
      } catch (m) {
        console.error(m);
      } finally {
        h.value = !1;
      }
    }, C = async () => {
      await I(), await $(""), g.value = null;
    };
    t({
      reload: C
    }), n("reload", C);
    const N = J((u) => {
      $(u);
    }, 300), R = (u) => {
      var m;
      ((m = g.value) == null ? void 0 : m.name) !== u && N(u);
    };
    return (u, m) => (f(), c("div", null, [
      H(j(K), {
        modelValue: g.value,
        "onUpdate:modelValue": m[1] || (m[1] = (d) => g.value = d),
        options: s.value,
        "track-by": "id",
        onSearchChange: R,
        label: e.label,
        placeholder: e.placeholder,
        loading: h.value,
        multiple: e.multiple,
        "custom-label": l
      }, {
        option: V(({ option: d }) => [
          o("div", {
            innerHTML: l(d)
          }, null, 8, ge)
        ]),
        singleLabel: V(({ option: d }) => [
          o("span", {
            innerHTML: l(d)
          }, null, 8, me)
        ]),
        selection: V(({ values: d, isOpen: B }) => [
          d.length && !B ? (f(), c("span", be, [
            (f(!0), c(A, null, P(d, (L) => (f(), c("span", {
              key: L.id,
              innerHTML: l(L),
              class: "multiselect__tag"
            }, null, 8, ye))), 128))
          ])) : y("", !0)
        ]),
        tag: V(({ option: d, remove: B }) => [
          o("div", ve, [
            o("span", {
              innerHTML: l(d)
            }, null, 8, Ve),
            o("i", {
              class: "multiselect__tag-icon",
              onClick: m[0] || (m[0] = a(() => {
              }, ["prevent"])),
              onMousedown: a((L) => B(d, L), ["prevent", "stop"])
            }, null, 40, Se)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "options", "label", "placeholder", "loading", "multiple"])
    ]));
  }
};
export {
  $e as default
};
