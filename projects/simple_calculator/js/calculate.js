/**
 * Created by Ruphi on 2017/5/9.
 */

var num=0,
    result=0,
    num_show="0",
    operate=0,//判断输入状态
    flag=0,//判断计算状态
    quit=0,//防止重复按键
    screen=document.getElementById("screen");


function command(num) {
    var str=String(screen.value);
    str=(str!=="0")?((operate===0)?str:""):"";//如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值；
    str=str+String(num);
    screen.value=str;
    operate=0;
    quit=0;
}

function double_zero() {
    var str=String(screen.value);
    str=(str!=="0")?((operate===0)?str+"00":"0"):"0";
    screen.value=str;
    operate=0;
}

function dot() {
    var str=String(screen.value);
    str=(str!=="0")?((operate===0)?str:"0"):"0";
    for(var i=0;i<=str.length;i++){
        if (str.substr(i,1)==="·")
            return false
    }
    str=str+".";
    screen.value=str;
    operate=0;
}

function Backspace() {
    var str=String(screen.value);
    str=(str!=="0")?str:"";
    str=str.substr(0,str.length-1);
    str=(str!=="")?str:"0";
    screen.value=str;
}

function clear() {
    screen.value="0";
    num=0;
    result=0;
    num_show=0
}

function plus() {
    calculate();
    operate=1;
    flag=1;
}
function minus() {
    calculate();
    operate=1;
    flag=2;
}
function times() {
    calculate();
    operate=1;
    flag=3;
}
function div() {
    calculate();
    operate=1;
    flag=4;
}
function percent() {
    calculate();
    operate=1;
    flag=5;
}
function equal() {
    calculate();
    operate=1;
    num=0;
    result=0;
    num_show="0";
}

function calculate() {
    num_show=Number(screen.value);
    if (num!==0&&quit!==1){
        switch (flag){
            case 1:result=num+num_show;break;
            case 2:result=num-num_show;break;
            case 3:result=num*num_show;break;
            case 4:if (num_show!==0){
                result=num/num_show;
            }else {
                alert("被除数不能为0！");
            }
            break;
            case 5:result=num%num_show;break;
            default:
                break;
        }
        quit=1;
    }
    else {
        result=num_show;
    }
    num_show=String(result);
    screen.value=num_show;
    num=result;
}



$(document).ready(function () {
    screen.value=0;
    $(".key").click(function (e) {
       switch(e.target.textContent){
           case "0":command(0);break;
           case "00":double_zero();break;
           case "1":command(1);break;
           case "2":command(2);break;
           case "3":command(3);break;
           case "4":command(4);break;
           case "5":command(5);break;
           case "6":command(6);break;
           case "7":command(7);break;
           case "8":command(8);break;
           case "9":command(9);break;
           case "·":dot();break;
           case "C":clear();break;
           case "Back":Backspace();break;
           case "＋":plus();break;
           case "－":minus();break;
           case "×":times();break;
           case "÷":div();break;
           case "％":percent();break;
           case "＝":equal();break;
           default:
               break;
       }
   })
});
