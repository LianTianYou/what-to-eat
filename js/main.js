// 获取标签
let nametxt = document.getElementById('name');
let button = document.getElementById('button_text');
// 创建一个函数生成随机数字
function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min);
}
function clock() {
    // 通过获取一个随机的数组下标实现随机获取一个名字，并将这个名字赋值给变量random
    let random = uname[getrandom(0, uname.length - 1)];
    //将random塞到span里
    nametxt.innerHTML = random;
};
// 打印名字已经实现了，下一步让没点击按钮前名字一直刷新
// 设置不停止时名字的刷新速度为30毫秒
let time = self.setInterval("clock()", 30);
// 将开始与停止按钮绑定到按钮上，并通过按钮控制
let flag = false;
button.onclick = function () {
    // 当flag标志为false时，点击按钮让刷新停止；
    if (flag == false) {
        time = window.clearInterval(time);
        // 按钮文字从stop变为start；
        button.innerHTML = 'start';
        // 标志变更
        flag = true;
    } else {
        // 当flag标志为true时，开始刷新，文字变更
        time = self.setInterval("clock()", 30);
        button.innerHTML = 'stop';
        flag = false;
    }
}