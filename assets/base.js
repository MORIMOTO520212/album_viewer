/*
    Author: MorimotoYuma.
    Create: 2021.05.29
    reference:
    https://developer.mozilla.org/ja/docs/Web/API/ElementCSSInlineStyle/style
    https://kats-eye.net/info/2019/02/22/drag_drop_01/
*/

function transForm(){ // カードの傾きの角度を返す
    // Type：String
    let degree = [-25, -10, 0, 10, 25];
    return degree[Math.floor(Math.random()*degree.length)].toString();
}

function pxRange(min, max){ // 最小～最大の範囲でランダムな値を返す
    // Type：String
    return Math.floor(Math.random()*(max-min)+15).toString();
}

/* GET Tweet data */
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
    /* card size */
    var img_wdt = 194; // card width
    var img_hgt = 172; // card height
    var card_elm = document.getElementsByClassName("card");
    for(var i=0; i< card_elm.length; i++){
        card_elm[i].style.cssText = "transform:rotate("+transForm()+"deg);"; // degree
        card_elm[i].style.top    = pxRange(40, 240)+"px"; // set card x-axis
        card_elm[i].style.left   = pxRange(32, 695)+"px"; // set card y-axis
        card_elm[i].style.width  = img_wdt+"px";
        card_elm[i].style.height = img_hgt+"px";
        card_elm[i].style.zIndex = z_idx_ini;
        card_elm[i].style.backgroundColor = "#"+tweet[i][5]; // Card Color
        card_elm[i].children[1].innerText = tweet[i][7]; // Tweet Contents
        card_elm[i].children[2].children[1].innerText = tweet[i][2];
        card_elm[i].children[2].children[0].children[0].setAttribute("src", tweet[i][4]); // Twitter user Profile Image
        console.log(tweet[i][4]);
    }

    /* MouseDown */
    window.onmousedown = function(event) {
        mv_fg = "true";
        tgt_id_no = event.target.id;
        console.log(tgt_id_no);
        z_idx_ini = z_idx_ini + 1;
        document.getElementById(tgt_id_no+"_1").style.zIndex = z_idx_ini;
        mvs_x = event.clientX - parseInt(document.getElementById(tgt_id_no+"_1").style.left.replace("px","")); // set cursor position
        mvs_y = event.clientY - parseInt(document.getElementById(tgt_id_no+"_1").style.top.replace("px",""));  // set cursor position
    }

    /* MouseMove */
    window.onmousemove = function(event) {
        /*
            移動制限
            top(y): 40-240px; left(x): 32-695px;
        */
        if(mv_fg == "true") {
            var cur_x = event.clientX - mvs_x; // set cursor position
            var cur_y = event.clientY - mvs_y; // set cursor position
            if((40 < cur_y && cur_y < 240) && (32 < cur_x && cur_x < 695)){
                document.getElementById(tgt_id_no+"_1").style.left = cur_x + "px";
                document.getElementById(tgt_id_no+"_1").style.top = cur_y + "px";
            }
        }
    }

    /* MouseUp */
    window.onmouseup = function() { 
        mv_fg = "false";
        tgt_id_no = "";
    }
}