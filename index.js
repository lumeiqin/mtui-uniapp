import mtBox from "./src/components/mt-box/component/index";
import mtButton from "./src/components/mt-button/component/index";
import mtCard from "./src/components/mt-card/component/index";

import mtForm from "./src/components/mt-form/component/index";
import itemClickLocation from "./src/components/mt-form/component/itemClickLocation";
import itemCode from "./src/components/mt-form/component/itemCode";
import itemDate from "./src/components/mt-form/component/itemDate";
import itemFile from "./src/components/mt-form/component/itemFile";
import itemInput from "./src/components/mt-form/component/itemInput";
import itemList from "./src/components/mt-form/component/itemList";
import itemMultiChoose from "./src/components/mt-form/component/itemMultiChoose";
import itemMultiCustom from "./src/components/mt-form/component/itemMultiCustom";
import itemMultiSelector from "./src/components/mt-form/component/itemMultiSelector";
import itemRadio from "./src/components/mt-form/component/itemRadio";
import itemSelector from "./src/components/mt-form/component/itemSelector";
import itemTextarea from "./src/components/mt-form/component/itemTextarea";

import mtGrid from "./src/components/mt-grid/component/index";
import mtModal from "./src/components/mt-modal/component/index";
import mtNavbar from "./src/components/mt-navbar/component/index";
import mtPopup from "./src/components/mt-popup/mt-popup";
import mtRate from "./src/components/mt-rate/component/index";
import mtSearch from "./src/components/mt-search/component/index";
import mtStep from "./src/components/mt-step/component/index";
import mtTabbar from "./src/components/mt-tabbar/mt-tabbar";
import mtTabs from "./src/components/mt-tabs/component/index";
import mtTag from "./src/components/mt-tag/component/index";

import mtUtils from "./src/common/mt-utils/index";

const components = [
    mtBox,
    mtButton,
    mtCard,

    mtForm,
    itemClickLocation,
    itemCode,
    itemDate,
    itemFile,
    itemInput,
    itemList,
    itemMultiChoose,
    itemMultiCustom,
    itemMultiSelector,
    itemRadio,
    itemSelector,
    itemTextarea,

    mtGrid,
    mtModal,
    mtNavbar,
    mtPopup,
    mtRate,
    mtSearch,
    mtStep,
    mtTabbar,
    mtTabs,
    mtTag,
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$mt = new mtUtils();
};


export default {
    install,

    mtBox,
    mtButton,
    mtCard,

    mtForm,
    itemClickLocation,
    itemCode,
    itemDate,
    itemFile,
    itemInput,
    itemList,
    itemMultiChoose,
    itemMultiCustom,
    itemMultiSelector,
    itemRadio,
    itemSelector,
    itemTextarea,

    mtGrid,
    mtModal,
    mtNavbar,
    mtPopup,
    mtRate,
    mtSearch,
    mtStep,
    mtTabbar,
    mtTabs,
    mtTag
};
