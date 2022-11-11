import localDic from "./dic.js";
import Vue from 'vue';

export default class FormUtils {
    constructor() {
        this.placeholderStyle = "color:#A7A7A7;fontWeight:300;fontSize:28rpx;"
        this.reg = ""
    }

    checkItem(item) {
        switch (item.type) {
            case 'ID':
                if (this._validateIdCard(item.valueShow)) {
                    item[item.value + '_sex'] = this._getsex(item.valueShow);
                    item[item.value + '_birth'] = this._getBirthday(item.valueShow);
                    return false;
                } else {
                    return true;
                }
                break;
            case 'tel':
                this.reg = /^1[0-9]{10,10}$/;
                return !this.reg.test(item.valueShow);
                break;
            case 'password': // 长度6-18位  字符串类型：数字 英文 特殊符号且必须包含数字及英文
                this.reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/;
                return !this.reg.test(item.valueShow);
                break;
            case 'code':
                return !(item.valueShow && item.valueShow.length == 6);
                break;
            default:
                return this._isEmpty(item.valueShow);
                break;
        }
    }

    validItem(_this, item) {
        let check = item.validate ? this.checkItem(item) : false;
        _this.$set(item, "check", check)
        return item;
    }

    _isEmpty(val) {
        switch (Object.prototype.toString.call(val)) {
            case "[object Null]":
            case "[object Undefined]":
                return true;

            case "[object Number]":
                return !val;

            case "[object Boolean]":
                return false;

            case "[object String]":
            case "[object Array]":
                return !val.length;

            case "[object Set]":
            case "[object Map]":
            case "[object File]":
                return !val.size;

            case "[object Object]":
                return !Object.keys(val).length;

            default:
                return false;
        }
    }

    _isArray(val) {
        return Object.prototype.toString.call(val) == "[object Array]"
    }

    _validateIdCard(idCard) {
        //15位和18位身份证号码的正则表达式
        var regIdCard =
            /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
        //如果通过该验证，说明身份证格式正确，但准确性还需计算
        if (regIdCard.test(idCard)) {
            if (idCard.length == 18) {
                var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
                var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
                for (var i = 0; i < 17; i++) {
                    idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
                }
                var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
                var idCardLast = idCard.substring(17); //得到最后一位身份证号码
                //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                if (idCardMod == 2) {
                    if (idCardLast == "X" || idCardLast == "x") {
                    } else {
                        // alert("身份证号码错误！");
                        return false;
                    }
                } else {
                    //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                    if (idCardLast == idCardY[idCardMod]) {
                    } else {
                        // alert("身份证号码错误！");
                        return false;
                    }
                }
            } else {
                return false
            }
        } else {
            //alert("身份证格式不正确!");
            return false;
        }
        return true;
    }

    _getsex(idNum) {
        var sexno, sex;
        if (idNum.length == 18) {
            sexno = idNum.substring(16, 17)
        } else if (idNum.length == 15) {
            sexno = idNum.substring(14, 15)
        } else {
            return false
        }
        var tempid = sexno % 2;
        if (tempid == 0) {
            sex = '女'
        } else {
            sex = '男'
        }
        return sex
    }

    _getBirthday(idNum) {
        var birthdayno, birthdaytemp;
        if (idNum.length == 18) {
            birthdayno = idNum.substring(6, 14)
        } else if (idNum.length == 15) {
            birthdaytemp = idNum.substring(6, 12)
            birthdayno = "19" + birthdaytemp
        } else {
            return false
        }
        var birthday = birthdayno.substring(0, 4) + "-" + birthdayno.substring(4, 6) + "-" + birthdayno.substring(6,
            8)
        return birthday
    }

    addDictionary(formData) {
        let _this = this; // 为了局部函数中的this
        uni.showLoading({
            title: '数据字典配置中'
        });

        let hasDic = uni.getStorageSync("dicArr") && JSON.parse(uni.getStorageSync("dicArr")) || {},
            getDicValue = {},
            onlineArr = [];

        // 判断当前表单是否有字典，有则加入getDicValue（判断是否存在于缓存中，存在为false，不存在为true），无则停止加载
        formData.property.forEach(v => {
            if (v.dictionary) {
                getDicValue[v.dictionary] = this._isEmpty(hasDic) ? true : this._isEmpty(hasDic[v
                    .dictionary])
            }
        })
        if (this._isEmpty(getDicValue)) {
            uni.hideLoading();
            return
        }

        for (let k in getDicValue) {
            if (getDicValue[k]) {
                if (!this._isEmpty(localDic[k])) {
                    hasDic[k] = localDic[k]
                    uni.setStorageSync("dicArr", JSON.stringify(hasDic))
                } else {
                    onlineArr.push(k)
                }
            }
        }
        if (!this._isEmpty(onlineArr)) {
            _getOnline(onlineArr).then(res => {
                if (!this._isEmpty(res)) {
                    for (let k in res) {
                        hasDic[k] = res[k]
                    }
                    uni.setStorageSync("dicArr", JSON.stringify(hasDic))
                }
            }).catch(err => {
                console.log("form.js中的_getOnline方法错误", err)
            })
        }

        _dicToOptions();
        uni.hideLoading();

        function _getOnline(arr) {
            return new Promise((reslove, reject) => {
                if (_this._isEmpty(arr)) reject(false);

                let dics = arr.join(",");
                uni.request({
                    url: "http://120.220.3.184:18080/data/api/common/getDictByStrArray",
                    data: {
                        dictArrayStr: dics
                    },
                    success(res) {
                        if (res.data.code == 0) {
                            reslove(res.data.data)
                        } else {
                            reject(false)
                        }
                    },
                    fail: reject
                });
            })
        }

        function _dicToOptions() {
            formData.property.forEach(item => {
                if (item.dictionary) {
                    if (!_this._isEmpty(hasDic[item.dictionary])) {
                        item.options = hasDic[item.dictionary]
                    } else {
                        console.log("form.js中的_dicToOptions方法错误", "震惊！！！有dictionary无值")
                    }
                }
            })
        }
    }

    initFiles(fileList, host) {
        let _this = this,
            tips = '',
            newArr = [];
        fileList.forEach((el, index) => {
            if (el.indexOf('jpg') != -1 || el.indexOf('png') != -1 || el.indexOf('jpeg') != -1) {
                tips = 'pic'
            } else if (el.indexOf('mp4') != -1) {
                tips = 'video'
            } else {
                tips = 'other'
            }
            el = el.indexOf("http") != -1 ? el : Vue.prototype.$utils.filePreviewHost + el;
            newArr.push(_this.fillObj(tips, el));
        })
        return newArr
    }

    fillObj(type, url) {
        let coverArr = {
            video: "https://img1.baidu.com/it/u=1337369128,3496455861&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            audio: "https://img2.baidu.com/it/u=741033515,2657178330&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            other: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00278-205.jpg",
            pic: url
        };
        return {
            type: type,
            cover: coverArr[type],
            path: url
        }
    }
}
