
var body = $response.body.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Code-Dramatist/ss/main/math_css/math.css" type="text/css">');

$done({body});

//$done({body: obj1});
