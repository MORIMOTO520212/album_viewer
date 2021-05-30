<!DOCTYPE html>
<html lang="ja">
    <head>
        <title>album viewer</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="assets/style.css">
    </head>
    <body>
        <!-- **********************
            Author: MorimotoYuma.
            Create: 2021.05.29
            名前、が溢れたらwrapをかける。
            カードの配色はコンセプトカラー。
        ********************** -->
        <div id="album" class="album">
            <?php
            $count = 6; // カード表示数
            ?>
            <div class="card" id="000001_1" style="left:0px; top:0px; background-color:#000;">
                <div class="draggable" id="000001"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src="https://pbs.twimg.com/profile_images/1367713475477180421/rVsC3Z54_normal.jpg"></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
            <div class="card" id="000002_1" style="left:0px; top:0px; background-color:#000;">
                <div class="draggable" id="000002"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src="assets/TwitterLogoWhite.svg"></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
            <div class="card" id="000003_1" style="left:0px; top:0px; background-color:#000;">
                <div class="draggable" id="000003"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src="assets/TwitterLogoWhite.svg"></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
            <div class="card" id="000004_1" style="left:0px; top:0px; background-color:#000;">
                <div class="draggable" id="000004"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src="assets/TwitterLogoWhite.svg"></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
            <div class="card" id="000005_1" style="left:0px; top:0px; background-color:#000;">
                <div class="draggable" id="000005"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src="assets/TwitterLogoWhite.svg"></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
            <div class="card" id="000006_1" style="left:0px; top:0px; background-color:#000;">
                <div class="draggable" id="000006"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src="assets/TwitterLogoWhite.svg"></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
        </div>
        <script src="assets/base.js"></script>
    </body>
</html>