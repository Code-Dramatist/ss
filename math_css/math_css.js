
function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + newStr + soure.slice(start);
 }
let obj = $response.body
//var obj1 = obj.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Code-Dramatist/ss/main/math_css/math.css" type="text/css">')
let newStr = '<link rel="stylesheet" href="https://gd-cowtransfer.static.cowtransfer.com/cowtransfer/cowtransfer/97349/50d1f177b02745acbc96d1de3e90a906.css?response-content-disposition=attachment; filename=math.css;filename*=utf-8\'\'math.css&auth_key=1660995944-6ddfe82cf16b48adb52f1f2731002719-0-9465a6aabcccf65132bc8427c536d149&channel_code=COW_CN_WEB&business_code=COW_TRANSFER&biz_type=1&user_id=1021095091821497349" type="text/css">'
var start = obj.search(/<script type="text\/javascript"/)
console.log(start)
var obj1 = insertStr(obj,start,newStr).replace(/<div id="popup">[\s\S]*?<div class="text">[\s\S]*?<\/div>[\s\S]*?<\/div>/)
$done({body:obj1});
