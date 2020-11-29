function disptime(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if(hour<10){
        hour = '0' + hour;
    }
    if(minute<10){
        minute = '0' + minute;
    }
    if(second<10){
        second = '0' + second;
    }
    var weekday = 0;
    switch(now.getDay()){
        case 0:
            weekday = "星期日";
            break;
        case 1:
            weekday = "星期一";
            break;
        case 2:
            weekday = "星期二";
            break; 
        case 3:
            weekday = "星期三";
            break; 
        case 4:
            weekday = "星期四";
            break;
        case 5:
            weekday = "星期五";
            break;
        case 6:
            weekday = "星期六";
            break;   
    }
    document.getElementById("myclock").innerHTML="<h2>"+year+"年"+month+"月"+date+"日&nbsp;&nbsp;"+weekday+"&nbsp;&nbsp;"+hour+':'+minute+':'+second+"</h2>";
}
var myClock = setInterval("disptime()",1000);