export default {
    data() {
        return {
            pagenav: {
                bg: "#f8f8f8",
                color: "#000"
            }
        }
    },
    onShow() {
        uni.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    methods: {
        backClick() {
            uni.redirectTo({
                url: "/pages/index/index"
            })
        },

        // form
        formValid() {
            if (this.$refs.mtForm.validate()) {
                console.log("表单校验成功")
            } else {
                console.log("表单校验失败")
            }
        },
        changeForm(obj) {
            console.log("表单提交内容：", obj)
        },
    }
}
