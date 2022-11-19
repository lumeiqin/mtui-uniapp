import itemCode from "../item-code/item-code";

itemCode.install = function (Vue) {
    Vue.component(itemCode.name, itemCode);
}

export default itemCode;
