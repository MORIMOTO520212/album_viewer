/*
    Author: MorimotoYuma.
    Create: 2021.05.29
    reference:
    https://developer.mozilla.org/ja/docs/Web/API/ElementCSSInlineStyle/style
    https://kats-eye.net/info/2019/02/22/drag_drop_01/
*/

function transform(){ // カードの傾き
    let degree = [-25, -10, 0, 10, 25];
    return degree[Math.floor(Math.random()*degree.length)].toString();
}

var tweet;
$.post("assets/getData.php?mode=tweet", {}, function(data){
    console.log("get tweet data");
    tweet = JSON.parse(data);
    main();
});

function main() {
    var mv_fg = "";
    var mvs_x = 0;
    var mvs_y = 0;
    var tgt_id_no;
    var z_idx_ini = 100;
    var X_STT_P = 0;
    var Y_STT_P = 100;
    var img_wdt = 194;
    var img_hgt = 172;
    var sW = window.innerWidth;
    var sH = window.innerHeight;
    var elm_div = document.getElementById("album");
    var rect = elm_div.getBoundingClientRect();
    X_STT_P = Math.ceil(rect.left / 10) + 20; // x-axis init
    Y_STT_P = Math.ceil(rect.top / 10) + 20;  // y-axis init

    var card_elm = document.getElementsByClassName("card");
    for(var i=0; i< card_elm.length; i++){
        card_elm[i].style.cssText = "transform:rotate("+transform()+"deg)";
        card_elm[i].style.top    = Y_STT_P+"px";
        card_elm[i].style.left   = X_STT_P+i * img_wdt+"px";
        card_elm[i].style.width  = img_wdt+"px";
        card_elm[i].style.height = img_hgt+"px";
        card_elm[i].style.zIndex = z_idx_ini;
        card_elm[i].style.backgroundColor = "#"+tweet[i][5]; // Card Color
        //card_elm[i].innerText = tweet[i][7]; // tweet contents
        card_elm[i].children[1].innerText = tweet[i][7]; // Tweet Contents
    }

    // MouseDown
    window.onmousedown = function(event) {
        mv_fg = "true";
        tgt_id_no = event.target.id;
        console.log(tgt_id_no);
        z_idx_ini = z_idx_ini + 1;
        document.getElementById(tgt_id_no+"_1").style.zIndex = z_idx_ini;
        mvs_x = event.clientX - parseInt(document.getElementById(tgt_id_no+"_1").style.left.replace("px","")); // set cursor position
        mvs_y = event.clientY - parseInt(document.getElementById(tgt_id_no+"_1").style.top.replace("px",""));  // set cursor position
    }

    // MouseMove
    window.onmousemove = function(event) {
        if(mv_fg == "true") {
            var cur_x = event.clientX - mvs_x; // set cursor position
            var cur_y = event.clientY - mvs_y; // set cursor position
            document.getElementById(tgt_id_no+"_1").style.left = cur_x + "px";
            document.getElementById(tgt_id_no+"_1").style.top = cur_y + "px";
        }
    }

    // MouseUp
    window.onmouseup = function() { 
        mv_fg = "false";
        tgt_id_no = "";
    }
}