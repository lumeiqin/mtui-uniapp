class Utils {
    constructor(data = {}) {
        // debug模式
        this.debug = data.debug || false;
        // 当前环境
        this.serveMode = data.serveMode || 'formal';

        this.serveModeArr = data.serveModeArr || ['default']; // 模块接口前缀列表

        // 环境对象集
        this.serveModeObj = data.serveModeObj || {
            online: {
                defaultHost: 'http://172.30.200.92:6342/'
            },
            formal: {
                defaultHost: 'http://gz.gisocn.com:6342/'
            }
        };

        this.serveModeArr.forEach(item => {
            this[item + 'Host'] = this.serveModeObj[this.serveMode][item + 'Host'] || ""
        })

        // 接口集合
        this.urlData = data.urlData || {
            getFormData: '/api/common/getJsonFormByKey'
        };

        // 是否需要token
        this.hasToken = data.hasToken || false;
        // token的别名
        this.tokenName = data.tokenName || 'token';

        // 水印参数
        this.settings = data.settings || {
            textArr: ['mtui', 'uniapp'], // 需要展示的文字，多行就多个元素【必填】
            font: "15px '微软雅黑'", // 字体样式
            fillStyle: 'rgba(100,47,47,0.1)', // 描边样式
            maxWidth: 200, // 文字水平时最大宽度
            minWidth: 120, // 文字水平时最小宽度
            lineHeight: 24, // 文字行高
            deg: -30, // 旋转的角度 0至-90之间
            marginRight: 30, // 每个水印的右间隔
            marginBottom: 50, // 每个水印的下间隔
            left: 20, // 整体背景距左边的距离
            top: 20 // 整体背景距上边的距离
        };
    }

    setConsole(messages) {
        if (this.debug) {
            let result = messages.join(",")
            console.log(result)
        }
    }

    /**
     * 接口请求方法中的内部方法：处理url地址 + 添加固定头部
     * @param {String: url | Object: url + type} urlParams: 接口地址相关参数
     * @param {Object} obj: 接口参数
     * @param {String} name: 特定头部的名字（token）
     */
    _handleUrl(urlParams) {
        let _this = this, resultUrl = '';

        function completeUrl(url, type) {
            let judgeFrom = _this.urlData[url] || url;
            let judgeHost = _this[type + 'Host'] || _this.defaultHost;
            return judgeFrom.indexOf("http") != -1 ? judgeFrom : judgeHost + judgeFrom;
        }

        if (typeof (urlParams) === "string") {
            resultUrl = completeUrl(urlParams);
        } else if (typeof (urlParams) === "object") {
            resultUrl = completeUrl(urlParams.url, urlParams.type);
        } else {
            resultUrl = urlParams;
        }
        return resultUrl
    }

    _bindToken(obj, name) {
        if (!this.hasToken) {
            return obj;
        }
        name = name || 'token';
        if (obj.hasOwnProperty(name) && obj[name] == '') {
            delete obj[name];
            return obj;
        } else {
            return Object.assign(obj, {
                [name]: uni.getStorageSync("token") || ''
            })
        }
    }


    /**
     * @description 接口请求 [get | post | file]
     */
    get(urlParams, requestParams = {}, headerParams = {}) {
        uni.showLoading({
            title: "加载中"
        })
        this.setConsole(["----------get" +
        "接口请求地址：" + this._handleUrl(urlParams),
            "接口请求参数：" + JSON.stringify(this._bindToken(requestParams, this.tokenName)),
            "接口请求头部：" + JSON.stringify(this._bindToken(headerParams, this.tokenName))]);

        return new Promise((resolve, reject) => {
            uni.request({
                url: this._handleUrl(urlParams),
                data: this._bindToken(requestParams, this.tokenName),
                header: this._bindToken(headerParams, this.tokenName),
                success(res) {
                    resolve(res.data)
                },
                fail: reject,
                complete: () => uni.hideLoading()
            });
        })
    }

    post(urlParams, requestParams = {}, submitType = "json", headerParams = {}) {
        uni.showLoading({
            title: "加载中"
        })
        let submitHeader = {};
        switch (submitType) {
            case "form":
                submitHeader["content-type"] = "application/x-www-form-urlencoded";
                break;

            case "json":
                submitHeader["content-type"] = "application/json";
                break;

            default:
                submitHeader["content-type"] = "application/json";
                break;
        }
        this.setConsole(["=============post" +
        "接口请求地址：" + this._handleUrl(urlParams),
            "接口请求参数：" + JSON.stringify(this._bindToken(requestParams, this.tokenName)),
            "post请求方式：" + submitType,
            "接口请求头部：" + JSON.stringify({
                ...submitHeader, ...this._bindToken(headerParams, this.tokenName)
            })]);

        return new Promise((resolve, reject) => {
            uni.request({
                method: "POST",
                url: this._handleUrl(urlParams),
                data: this._bindToken(requestParams, this.tokenName),
                header: {
                    ...submitHeader, ...this._bindToken(headerParams, this.tokenName)
                },
                success(res) {
                    resolve(res.data)
                },
                fail: reject,
                complete: () => uni.hideLoading()
            });
        })
    }

    fileUpload(urlParams, fileName, requestParams = {}, headerParams = {}, nameKey = 'file', submitMethods = 'single') {
        uni.showLoading({
            title: "加载中"
        })

        this.setConsole(["+++++++++++++++fileUpload" +
        "接口请求地址：" + this._handleUrl(urlParams),
            "文件本体：" + fileName,
            "文件对应的key：" + nameKey,
            "附件提交方式：" + submitMethods,
            "接口请求参数：" + JSON.stringify(requestParams),
            "接口请求头部：" + JSON.stringify({
                'content-type': 'multipart/form-data',
                ...this._bindToken(headerParams, this.tokenName)
            })]);

        return new Promise((resolve, reject) => {
            if (submitMethods === "single") {
                uni.uploadFile({
                    url: this._handleUrl(urlParams),
                    filePath: fileName,
                    name: nameKey,
                    formData: requestParams,
                    header: {
                        'content-type': 'multipart/form-data', ...this._bindToken(headerParams, this.tokenName)
                    },
                    success(res) {
                        resolve(res.data)
                    },
                    fail: reject,
                    complete: () => uni.hideLoading()
                });
            } else {
                uni.uploadFile({
                    url: this._handleUrl(urlParams),
                    files: fileName,
                    formData: requestParams,
                    header: {
                        'content-type': 'multipart/form-data', ...this._bindToken(headerParams, this.tokenName)
                    },
                    success(res) {
                        resolve(res.data)
                    },
                    fail: reject,
                    complete: () => uni.hideLoading()
                })
            }
        })
    }


    /**
     * 附件地址完善
     * @param {String} type：接口前缀类型
     * @param {String} url：附件地址
     */
    prefixUrl(type, url) {
        return this[type + 'Host'] + url
    }

    /**
     * @description 判断值是否为空
     * @param {Null, Undefined, Number, Boolean, String, Array, Set, Map, File, Object} val: 需要判断的值
     */
    isEmpty(val) {
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

    /**
     * @description 格式化时间
     * @param {String} date: 默认当前时间
     * @param {String} format 默认'YYYY-MM-DD hh:mm:ss'
     */
    formatDate(date, format = "YYYY-MM-DD hh:mm:ss") {
        date = date ? new Date(date) : new Date();
        let rules = {
            year: {
                value: date.getFullYear(), type: "(Y+)", attr: "i"
            }, month: {
                value: date.getMonth() + 1, type: "(M+)"
            }, day: {
                value: date.getDate(), type: "(D+)", attr: "i"
            }, hour: {
                value: date.getHours(), type: "(h+)", attr: "i"
            }, minute: {
                value: date.getMinutes(), type: "(m+)"
            }, second: {
                value: date.getSeconds(), type: "(s+)", attr: "i"
            }
        }

        function _formatType(key, value, type, attr, fmt) {
            function _initFmt(val) {
                return ("00" + val).substr(String(val).length)
            }

            if (new RegExp(type, attr).test(fmt)) {
                const fmtDate = key === "year" ? String(value).substr(4 - RegExp.$1.length) : (RegExp.$1.length === 1) ? value : _initFmt(value);
                fmt = fmt.replace(RegExp.$1, fmtDate)
            }
            return fmt
        }

        for (const key in rules) {
            format = _formatType(key, rules[key].value, rules[key].type, rules[key].attr, format);
        }

        return format
    }

    /**
     * @description 判断值是否为指定的类型
     * @param {Null, Undefined, Number, Boolean, String, Array, Set, Map, File, Object} val: 需要判断的值
     * @param {String} type 指定的类型名称
     */
    judgeType(val, type) {
        let data = [{
            name: "array",
            condi: "[object Array]"
        }, {
            name: "null",
            condi: "[object Null]"
        }, {
            name: "undefined",
            condi: "[object Undefined]"
        }, {
            name: "number",
            condi: "[object Number]"
        }, {
            name: "boolean",
            condi: "[object Boolean]"
        }, {
            name: "string",
            condi: "[object String]"
        }, {
            name: "set",
            condi: "[object Set]"
        }, {
            name: "map",
            condi: "[object Map]"
        }, {
            name: "file",
            condi: "[object File]"
        }, {
            name: "object",
            condi: "[object Object]"
        }]

        let result = Object.prototype.toString.call(val);

        return type === this.objectGetItem(data, result, 'condi', 'name');
    }


    /**
     * @description 根据传入的值，到传入的数据中获取对应的其他值
     * @param {Array，Object} data: 传入的数据
     * @param {String} type 传入的值
     * @param {String} param Array: 传入的值属于哪个参数
     * @param {String} secondParam Array: 需要获取哪个参数
     */
    objectGetItem(data, val, param, secondParam) {
        if (this.isEmpty(data)) return;

        if (Object.prototype.toString.call(data) == '[object Array]') {
            let arrVal;
            data.map(v => {
                if (v[param] == val) {
                    arrVal = v[secondParam];
                }
            })
            return arrVal;
        }

        if (Object.prototype.toString.call(data) == '[object Object]') {
            let objVal;
            Object.keys(data).forEach(v => {
                if (val == v) {
                    objVal = data[v]
                } else if (val == data[v]) {
                    objVal = v
                }
            })
            return objVal
        }
    }

    // 水印背景
    waterMark(options) {
        var _this = this;
        _this.settings = Object.assign(_this.settings, options || {});
        _this.settings.minWidth = Math.min(_this.settings.maxWidth, _this.settings.minWidth); // 重置最小宽度
        var textArr = _this.settings.textArr;
        if (Object.prototype.toString.call(textArr) !== '[object Array]') {
            throw Error('水印文本必须放在数组中')
        }

        // 动态创建隐藏的canvas
        var c = _createCanvas();

        // 绘制canvas内容
        _draw(c, _this.settings);

        // 把canvas内容转为图片并绘制
        _convertCanvasToImage(c)

        function _createCanvas() {
            var c = document.createElement('canvas');
            c.style.display = 'none';
            document.body.appendChild(c);
            return c;
        }

        // 动态创建canvas
        function _draw(c, settings) {
            var ctx = c.getContext("2d");

            // 切割超过最大宽度的文本并获取最大宽度
            var textArr = settings.textArr || [];
            var wordBreakTextArr = [];
            var maxWidthArr = [];
            textArr.forEach(function (text) {
                var result = _breakLinesForCanvas(ctx, text + '', settings.maxWidth, settings.font);
                wordBreakTextArr = wordBreakTextArr.concat(result.textArr);
                maxWidthArr.push(result.maxWidth);
            })
            maxWidthArr.sort(function (a, b) {
                return b - a;
            });

            // 根据需要切割结果，动态改变canvas的宽和高
            var maxWidth = Math.max(maxWidthArr[0], _this.settings.minWidth);
            var lineHeight = settings.lineHeight;
            var height = wordBreakTextArr.length * lineHeight;
            var degToPI = Math.PI * settings.deg / 180;
            var absDeg = Math.abs(degToPI);
            // 根据旋转后的矩形计算最小画布的宽高
            var hSinDeg = height * Math.sin(absDeg);
            var hCosDeg = height * Math.cos(absDeg);
            var wSinDeg = maxWidth * Math.sin(absDeg);
            var wCosDeg = maxWidth * Math.cos(absDeg);

            c.width = parseInt(hSinDeg + wCosDeg + settings.marginRight);
            c.height = parseInt(wSinDeg + hCosDeg + settings.marginBottom);

            // 宽高重置后，样式也需重置
            ctx.font = settings.font;
            ctx.fillStyle = settings.fillStyle;
            ctx.textBaseline = 'hanging' // 默认是alphabetic,需改基准线为贴着线的方式

            // 移动并旋转画布
            ctx.translate(0, wSinDeg);
            ctx.rotate(degToPI);

            // 绘制文本
            wordBreakTextArr.forEach(function (text, index) {
                ctx.fillText(text, 0, lineHeight * index);
            });

            // 根据最大宽度切割文字
            function _breakLinesForCanvas(context, text, width, font) {
                var result = [];
                var maxWidth = 0; // 计算最大宽度
                if (font) {
                    context.font = font;
                }
                var breakPoint = _findBreakPoint(text, width, context);
                while (breakPoint !== -1) {
                    result.push(text.substr(0, breakPoint));
                    text = text.substr(breakPoint);
                    maxWidth = width;
                    breakPoint = _findBreakPoint(text, width, context);
                }

                if (text) {
                    result.push(text);
                    var lastTextWidth = context.measureText(text).width;
                    maxWidth = maxWidth !== 0 ? maxWidth : lastTextWidth;
                }

                return {
                    textArr: result, maxWidth: maxWidth
                };


                // 寻找切换断点
                function _findBreakPoint(text, width, context) {
                    var min = 0;
                    var max = text.length - 1;
                    while (min <= max) {
                        var middle = Math.floor((min + max) / 2);
                        var middleWidth = context.measureText(text.substr(0, middle)).width;
                        var oneCharWiderThanMiddleWidth = context.measureText(text.substr(0, middle + 1)).width;
                        if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
                            return middle;
                        }
                        if (middleWidth < width) {
                            min = middle + 1;
                        } else {
                            max = middle - 1;
                        }
                    }

                    return -1;
                }
            }
        }

        // 将绘制好的canvas转成图片
        function _convertCanvasToImage(canvas) {
            var imgData = canvas.toDataURL("image/png");

            var divMask = document.createElement('div');
            divMask.style.cssText = 'position:fixed; left:0; top:0; right:0; bottom:0; z-index:9999; pointer-events:none;'
            divMask.style.backgroundImage = 'url(' + imgData + ')';
            divMask.style.backgroundPosition = _this.settings.left + 'px ' + _this.settings.top + 'px';

            document.body.appendChild(divMask);
        }
    }
}

export default Utils;
