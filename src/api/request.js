import axios from 'axios'
import qs from 'qs'
import ServerMixin from '@/mixin/ServerMixin'
import { getUserInfo } from '@/utils/auth'

let isLoginTip = false

export const doExec = (url, params, contentType, methods) => {
    let pstr = qs.stringify(params, {
        arrayFormat: 'brackets'
    })
    contentType = (contentType || 'json').toUpperCase()
    //console.log(contentType,url);
    methods = (methods || 'POST').toUpperCase()

    const pstrMethods = ['GET', 'DELETE']

    url = pstrMethods.indexOf(methods) === -1 ? url : `${url}?${pstr}`
    url = url.indexOf('?') == -1 ? `${url}?t=${new Date().getTime()}` : `${url}&t=${new Date().getTime()}`
    return axios({
        url,
        params: null,
        data: contentType == 'JSON' ? params : qs.stringify(params),
        // data: qs.stringify(params),
        method: methods,
        headers: {
            Authorization: getUserInfo().token
        },
    }).then(res => {
        //无登录信息
        if (res.data.code == 4000) {
            ServerMixin.Event.$emit('login', res.data.data)
            return {}
        } else {
            return res.data
        }
    }).catch(res => {
        if(res.response.status == 403 && !isLoginTip) {
            isLoginTip = true
            ServerMixin.Event.$$alert({
                message: '登录超时，请重新登录。',
                showClose: false,
                type: 'warning',
            }).then(() => {
                ServerMixin.Event.$emit('login', res.response.data)
            })
        }
    })
}
