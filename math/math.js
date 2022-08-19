let obj = $response.body;
var null_string = "";
var obj1 = obj.replace(/<div id="popup">[\s\S]*?<div class="text">[\s\S]*?<\/div>[\s\S]*?<\/div>/).replace(/<div id="carousel"[\s\S]*?<div class="banner[\s\S]*?<\/div>/,null_string).replace(/<a target="_blank"[\s\S]*?<\/a>/g,null_string)
$done({body: obj1});
