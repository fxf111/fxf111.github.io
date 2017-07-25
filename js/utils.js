/**
 * Created by hasee on 2017/7/25.
 */
function getNowTime() {
    var nowYear =new Date().getFullYear();
    var nowMonth =new Date().getMonth()+1;
    var nowDay =new Date().getDate();
    var nowHours=new Date().getHours();
    var nowMinutes=new Date().getMinutes();
    var nowSeconds=new Date().getSeconds();
    var nowMilliSeconds=new Date().getMilliseconds();
    var nowTime="当前时间是："+nowYear+"年"+nowMonth+"月"+nowDay+"日"+nowHours+"时"+nowMinutes+"分"+nowSeconds+"秒";
    return nowTime;
}