import itemList from "../item-list/item-list";

itemList.install = function (Vue) {
    Vue.component(itemList.name, itemList);
}

export default itemList;
