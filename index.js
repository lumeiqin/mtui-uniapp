import mtBox from "./src/components/mt-box/mt-box";
import mtButton from "./src/components/mt-button/mt-button";
import mtCard from "./src/components/mt-card/mt-card";
import mtForm from "./src/components/mt-form/mt-form";
import itemClickLocation from "./src/components/mt-form/item-click-location/item-click-location";
import itemCode from "./src/components/mt-form/item-code/item-code";
import itemDate from "./src/components/mt-form/item-date/item-date";
import itemFile from "./src/components/mt-form/item-file/item-file";
import itemInput from "./src/components/mt-form/item-input/item-input";
import itemList from "./src/components/mt-form/item-list/item-list";
import itemMultiChoose from "./src/components/mt-form/item-multiChoose/item-multiChoose";
import itemMultiCustom from "./src/components/mt-form/item-multiCustom/item-multiCustom";
import itemMultiSelector from "./src/components/mt-form/item-multiSelector/item-multiSelector";
import itemRadio from "./src/components/mt-form/item-radio/item-radio";
import itemSelector from "./src/components/mt-form/item-selector/item-selector";
import itemTextarea from "./src/components/mt-form/item-textarea/item-textarea";

import simpleDate from "./src/components/mt-form/item-date/simple-date";
import simpleMultiChoose from "./src/components/mt-form/item-multiChoose/simple-multi-choose";
import simpleFormList from "./src/components/mt-form/item-list/simple-form-list";
import simpleMultiCustom from "./src/components/mt-form/item-multiCustom/simple-multi-custom";
import simpleMultiSelector from "./src/components/mt-form/item-multiSelector/simple-multi-selector";
import simpleSelector from "./src/components/mt-form/item-selector/simple-selector";

import mtGrid from "./src/components/mt-grid/mt-grid";
import mtModal from "./src/components/mt-modal/mt-modal";
import mtNavbar from "./src/components/mt-navbar/mt-navbar";
import mtPopup from "./src/components/mt-popup/mt-popup";
import mtPopupTransition from "./src/components/mt-popup/mt-popup-transition";
import mtRate from "./src/components/mt-rate/mt-rate";
import mtSearch from "./src/components/mt-search/mt-search";
import mtStep from "./src/components/mt-step/mt-step";
import mtTabbar from "./src/components/mt-tabbar/mt-tabbar";
import mtTabs from "./src/components/mt-tabs/mt-tabs";
import mtTag from "./src/components/mt-tag/mt-tag";
import mtCollapse from "./src/components/mt-collapse/mt-collapse";
import mtKeyboard from "./src/components/mt-keyboard/mt-keyboard";
import mtSwiper from "./src/components/mt-swiper/mt-swiper";
import mtSwiperItem from "./src/components/mt-swiper-item/mt-swiper-item";
import mtPagination from "./src/components/mt-pagination/mt-pagination";
import mtLoading from "./src/components/mt-loading/mt-loading";

let components = [
    mtBox,
    mtButton,
    mtCard,

    mtForm, itemClickLocation, itemCode, itemDate, itemFile, itemInput, itemList, itemMultiChoose, itemMultiCustom, itemMultiSelector, itemRadio, itemSelector, itemTextarea,

    simpleDate,
    simpleMultiChoose,
    simpleFormList,
    simpleMultiCustom,
    simpleMultiSelector,
    simpleSelector,

    mtGrid,
    mtModal,
    mtNavbar,
    mtPopup, mtPopupTransition,
    mtRate,
    mtSearch,
    mtStep,
    mtTabbar,
    mtTabs,
    mtTag,
    mtCollapse,
    mtKeyboard,
    mtSwiper,
    mtSwiperItem,
    mtPagination,
    mtLoading
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
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

    simpleDate,
    simpleMultiChoose,
    simpleFormList,
    simpleMultiCustom,
    simpleMultiSelector,
    simpleSelector,

    mtGrid,
    mtModal,
    mtNavbar,
    mtPopup,
    mtPopupTransition,
    mtRate,
    mtSearch,
    mtStep,
    mtTabbar,
    mtTabs,
    mtTag,
    mtCollapse,
    mtKeyboard,
    mtSwiper,
    mtSwiperItem,
    mtPagination,
    mtLoading
};
