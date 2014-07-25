
var SysSecond;
var timer;

$(document).ready(function() {
    SysSecond = parseInt(300); //这里是倒计时的起始时间   自己定义的
    timer = window.setInterval(time, 1000); //间隔函数，1秒执行
    $('#gamePanel').click(function(){
        $('#Time').css('display','block');
    });
});

//将时间减去1秒，计算天、时、分、秒
function time() {
    if (SysSecond > 0) {
        SysSecond = SysSecond - 1;
        var second = Math.floor(SysSecond % 60);             // 计算秒
        var minite = Math.floor((SysSecond / 60) % 60);      //计算分
        var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
        var day = Math.floor((SysSecond / 3600) / 24);        //计算天

        $("#Time").html(hour + ":" + minite + ":" + second + "");
    } else {//剩余时间小于或等于0的时候，就停止间隔函数
        window.clearInterval(timer);
		alert("游戏时间到");
		//这里可以添加倒计时时间为0后需要执行的事件
    }
}
$(function(){
    time();
});




