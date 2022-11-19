import itemFile from "../item-file/item-file";

itemFile.install = function (Vue) {
    Vue.component(itemFile.name, itemFile);
}

export default itemFile;
