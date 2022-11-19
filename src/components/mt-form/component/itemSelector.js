import itemSelector from "../item-selector/item-selector";

itemSelector.install = function (Vue) {
    Vue.component(itemSelector.name, itemSelector);
}

export default itemSelector;
