import mtModal from "../mt-modal";

mtModal.install = function(Vue) {
    Vue.component(mtModal.name, mtModal);
};

export default mtModal;
