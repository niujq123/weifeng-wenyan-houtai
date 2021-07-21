
export default {
    // 数字转中文
    toChinesNum(num) {
        let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'] //changeNum[0] = "零"
        let unit = ["", "十", "百", "千", "万"]
        num = parseInt(num)
        let getWan = (temp) => {
            let strArr = temp.toString().split("").reverse()
            let newNum = ""
            for (var i = 0; i < strArr.length; i++) {
                newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum
            }
            return newNum
        }
        let overWan = Math.floor(num / 10000)
        let noWan = num % 10000
        if (noWan.toString().length < 4) noWan = "0" + noWan
        return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num)
    },
    //时间格式化
    dateFormat  (date, format = 'yyyy/MM/dd'){
        if (!date) {
            return '-'
        }
        try {
            date = date.replace(/t/gi, ' ').replace(/-/gi, '/')
        } catch (e) {
            console.log(e)
        }
        let d = new Date(date)
    
        let o = {
            'M+': d.getMonth() + 1,
            // 月份
            'd+': d.getDate(),
            // 日
            'h+': d.getHours() % 12 == 0 ? 12 : d.getHours() % 12,
            // 小时
            'H+': d.getHours(),
            // 小时
            'm+': d.getMinutes(),
            // 分
            's+': d.getSeconds(),
            // 秒
            'q+': Math.floor((d.getMonth() + 3) / 3),
            // 季度
            'S': d.getMilliseconds()
                // 毫秒
        }
        let week = {
            '0': '\u65e5',
            '1': '\u4e00',
            '2': '\u4e8c',
            '3': '\u4e09',
            '4': '\u56db',
            '5': '\u4e94',
            '6': '\u516d'
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (d.getFullYear() + '')
                .substr(4 - RegExp.$1.length))
        }
        if (/(E+)/.test(format)) {
            format = format.replace(
                RegExp.$1,
                ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' :
                        '/u5468') :
                    '') + week[d.getDay() + ''])
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
                    (('00' + o[k]).substr(('' + o[k]).length)))
            }
        }
        return format
    }
}