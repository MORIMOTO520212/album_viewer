<?php
if(isset($_GET['mode'])){
    if($_GET['mode'] == "tweet"){
        $tweet_filePath = "tweet.csv";
        $tweetCSV = new SplfileObject($tweet_filePath);
        $tweetCSV->setFlags(splFileObject::READ_CSV);
        foreach($tweetCSV as $line){
            if(0 < $line[0]){
                $tweet[] = $line;
            }
        }
        echo json_encode($tweet);
    }
}
?>