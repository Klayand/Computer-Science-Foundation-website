function backregister() { window.location.replace("register.html"); }
function backlogin() { window.location.replace("login.html"); }
function backindex() { window.location.replace("../frontpage.html"); }

function Init1() {
    if (localStorage.getItem("usernum") == null) localStorage.setItem("usernum", 0);
    if (sessionStorage.getItem("loginstate") == null) sessionStorage.setItem("loginstate", 0);
    if (sessionStorage.getItem("optbuttom") == null) sessionStorage.setItem("optbuttom", 0);
    if (sessionStorage.getItem("loginstate") == 1) {
        document.getElementById("log").innerHTML = sessionStorage.getItem("account");
        document.getElementById("log").href = "#";
        document.getElementById("reg").innerHTML = "登出";
        document.getElementById("reg").href = "#";
    }
    else {
        document.getElementById("log").innerHTML = "登录";
        document.getElementById("log").href = "./login.html";
        document.getElementById("reg").innerHTML = "注册";
        document.getElementById("reg").href = "./register.html";
    }
}



function Init() {
    if (localStorage.getItem("usernum") == null) localStorage.setItem("usernum", 0);
    if (sessionStorage.getItem("loginstate") == null) sessionStorage.setItem("loginstate", 0);
    if (sessionStorage.getItem("optbuttom") == null) sessionStorage.setItem("optbuttom", 0);
    if (sessionStorage.getItem("loginstate") == 1) {
        document.getElementById("log").innerHTML = sessionStorage.getItem("account");
        document.getElementById("log").href = "#";
        document.getElementById("reg").innerHTML = "登出";
        document.getElementById("reg").href = "#";
    }
    else {
        document.getElementById("log").innerHTML = "登录";
        document.getElementById("log").href = "./login.html";
        document.getElementById("reg").innerHTML = "注册";
        document.getElementById("reg").href = "./register.html";
    }
}

function logout() {
    if (sessionStorage.loginstate == 1) {
        sessionStorage.loginstate = 0;
        setTimeout("Init()", 20);
    }
}

function login() {
    if (sessionStorage.locked_bird_loginstate == 1) { alert("您已经登录了，请先退出当前账号"); return; }
    var inputname = document.getElementById("username").value;
    var inputpassword = document.getElementById("password").value;
    if (inputname == "") {
        alert("请输入您的用户名");
        return;
    }
    if (inputpassword == "") {
        alert("请输入您的密码");
        return;
    }
    var num = localStorage.getItem("usernum");
    for (var i=0; i<num;i++) {
        var prename = localStorage.getItem("username" + i);
        var prepassword = localStorage.getItem("userpassword" + i);
        if (inputname == prename) {
            if (inputpassword == prepassword) {
                alert("登录成功，即将返回首页");
                sessionStorage.loginstate = 1;
                sessionStorage.setItem("account", inputname);
                setTimeout("backindex()", 1000);
            }
            else {
                alert("密码错误，请重新输入");
                $("#password").val("");
            }
            return;
        }
    }
    alert("该用户还未注册，请重新输入");
    $("#password").val("");
    $("#username").val("");
}

function register() {
    var num = localStorage.getItem("usernum");
    var inputname = document.getElementById("name").value;
    var inputpassword = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (inputname == "") {
        alert("请输入您的用户名");
        return;
    }
    if (inputname.length > 12) {
        alert("您的名字太长啦!(请不要超过12个字符)");
        $("#name").val("");
        return;
    }
    if (inputpassword == "") {
        alert("请输入您的密码");
        return;
    }
    if (confirmpassword == "") {
        alert("请确认您的密码");
        return;
    }
    for (var i = 0; i < num; i++) {
        var prename = localStorage.getItem("username" + i);
        if (inputname == prename) {
            alert("此用户名已被注册，请重新输入");
            $("#name").val("");
            return;
        }
    }
    if (inputpassword.length < 6) {
        alert("您的密码长度应至少六位，请重新输入");
        $("#password").val("");
        $("#confirmpassword").val("");
        return;
    }
    if (inputpassword != confirmpassword) {
        alert("两次密码不一样！");
        $("#confirmpassword").val("");
        return;
    }
    localStorage.setItem("username" + localStorage.usernum, inputname);
    localStorage.setItem("userpassword" + localStorage.usernum, inputpassword);
    localStorage.usernum++;
    alert("注册成功，即将返回登录页面");
    setTimeout("backlogin()", 1000);
}