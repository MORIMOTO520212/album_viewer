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
            for($i=0; $i<$count; $i++){
            ?>
            <div class="card" id="<?php echo sprintf("%02d", $i); ?>_1" style="left:0px; top:0px; background-color:#fff;">
                <div class="draggable" id="<?php echo sprintf("%02d", $i); ?>"></div>
                <div class="contents font no-selection"></div>
                <div class="user">
                    <div class="icon"><img class="no-selection" src></div>
                    <div class="name font no-selection">Twitter</div>
                </div>
            </div>
            <?php
            }
            ?>
        <script src="assets/base.js"></script>
    </body>
</html>