import * as api from '@/api/'
import Vue from 'vue'
// import {
//     dateFormat,
//     transFileUrl,
//     passPortValid
// } from './../filters'
const ServerMixin = {
    Event: new Vue()
}

ServerMixin.install = function (v) {
    //混入
    v.prototype.$mixinToggle = {
        data() {
            return {
                show: false
            }
        },
        methods: {
            show() {
                this.show = true;
            },
            close() {
                this.show = false;
            }
        },
    }
    // 接口请求
    v.prototype.$api = api.api
    v.prototype.$$message = (options) => {
        let opts = {
            showClass: true,
            type: 'warning'
        }
        return v.prototype.$message({ ...opts, ...options })
    }

    v.prototype.$$notify = (options) => {
        let opts = {
            title: '提示',
            type: 'success'
        }
        return v.prototype.$notify({ ...opts, ...options })
    }

    v.prototype.$$confirm = (options) => {
        let opts = {
            title: '提示',
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }
        let o = { ...opts, ...options }
        return v.prototype.$confirm(o.message, o.title, o)
    }

    v.prototype.$$alert = (options) => {
        let opts = {
            title: '提示',
            confirmButtonText: '确定'
        }
        let o = { ...opts, ...options }
        return v.prototype.$alert(o.message, o.title, o)
    }

    v.prototype.$updateArray = (arr, fieldName, fieldValue, newRow) => {
        // 先查找是否有同样的主键（key），如果有，说明是修改。这里主键暂时不支持复合主键
        for (let i in arr) {
            if (arr[i][fieldName] == fieldValue) {
                for (let j in arr[i]) {
                    v.prototype.$set(arr[i], j, newRow[j])
                }
                break
            }
        }
    }

}
export default ServerMixin
