function fix_the_nav() {
    if (window.location.hash) {
        var target = $(location.hash);
        $("body,html").scrollTop(target.offset().top - 100);
    }
}
function showWhichWrong() {
    var input_str
    var n
    var flag1
    flag1 = 1
    for (i = 0; i < 7; i++) {
        x = document.getElementById("q" + (i + 1));
        x.style.backgroundColor = "white"
    }
    for (var i = 0; i < 2; i++) {
        input_str = "ans" + (i + 1)
        n = $("input[name= " + input_str + "]:checked")
        if (n.length == 0) {
            flag1 = 0
            alert("请继续答题")
            break
        }
    }

    for (var i = 4; i < 7; i++) {
        input_str = "ans" + (i + 1)
        n = $("input[name= " + input_str + "]:checked")
        if (n.length == 0) {
            flag1 = 0
            alert("请继续答题")
            break
        }
    }
    if (flag1) {
        var core = 100
        var flag = 1
        var core_1 = 0
        core = 100
        for (i = 0; i < 2; i++) {
            var answer = document.getElementsByName("ans" + (i + 1));
            for (var j = 0; j < answer.length; j++) {
                if (answer[j].checked) {
                    if (answer[j].value * 1 == 0) {
                        x = document.getElementById("q" + (i + 1));
                        x.style.backgroundColor = "rgb(255,171,171)"
                        core = core - 20
                    }
                }
            }
        }

        for (i = 4; i < 7; i++) {
            var answer = document.getElementsByName("ans" + (i + 1));
            for (var j = 0; j < answer.length; j++) {
                if (answer[j].checked) {
                    if (answer[j].value * 1 == 0) {
                        x = document.getElementById("q" + (i + 1));
                        x.style.backgroundColor = "rgb(255,171,171)"
                        core = core - 20
                    }
                }
            }
        }

        var block = $(".block_ans")
        for (i = 0; i < block.length; i++)
            block[i].style.display = "block"
        if (core == 100) alert("得分：100分" + '\n' + "哇哦！你已经充分掌握了web的基础知识了，真是太厉害了，接下来可以进行高级部分的学习了哦")
        else if (core == 90) alert("得分：90分" + '\n' + "蛮不错的成绩，可惜差一点就能满分了！再加把劲努把力吧，相信自己加油(ง •_•)ง")
        else if (core <= 80 && core >= 60) alert("得分：" + core + "分" + '\n' + "看来你已经掌握了一部分知识了，但千万不要骄傲自满哦，前方还有很长的路要走")
        else if (core <= 50 && core >= 30) alert("得分：" + core + "分" + '\n' + "哎看来你的基础知识还不牢固啊，多看几遍网站里面的知识吧，最开始的路途总是艰辛的相信自己一定可以的")
        else alert("得分：" + core + "分" + '\n' + "同学你是没看网站还是没睡太醒啊，这个分数不应该啊，一定要好好反省哦，加油初学者，你还有很大的提升空间")
    }
}
