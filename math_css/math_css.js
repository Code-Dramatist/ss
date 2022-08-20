
function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + newStr + soure.slice(start);
 }
let obj = $response.body
//var obj1 = obj.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Code-Dramatist/ss/main/math_css/math.css" type="text/css">')
let newStr = '<link rel="stylesheet" href="https://gd-cowtransfer.cdn.cowtransfer.com/cowtransfer/cowtransfer/97349/d9d094a73eab45cea454c4e3fcb3cd9e.css?response-content-disposition=attachment; filename=math%281%29.css;filename*=utf-8\'\'math%281%29.css&auth_key=1660992996-d427d85f700c4d1b838541a5e13320c5-0-eba48e4059c6fe23b3089e12fc68b850&user_id=1021095091821497300&biz_type=1&channel_code=COW_CN_WEB&business_code=COW_TRANSFER" type="text/css">'
var start = obj.search(/<script type="text\/javascript"/)
console.log(start)
var obj1 = insertStr(obj,start,newStr)
//console.log(obj1)
$done({body:obj1});

//$done({body: obj1});
