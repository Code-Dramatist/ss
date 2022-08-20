
function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + newStr + soure.slice(start);
 }
let obj = $response.body
//var obj1 = obj.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Code-Dramatist/ss/main/math_css/math.css" type="text/css">')
let newStr = '<link rel="stylesheet" href="https://raw.githubusercontent.com/Code-Dramatist/ss/main/math_css/math.css" type="text/css">'
var start = obj.search(/<script type="text\/javascript"/)
console.log(start)
var obj1 = insertStr(obj,start,newStr)
console.log(obj1)
$done({body:obj1});

//$done({body: obj1});
