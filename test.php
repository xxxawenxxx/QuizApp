<?php
include "controller/config.php";
include "controller/question.php";

$question = (new Question($conn))->getAllQuestion();

$file_name = 'data/'.date('d-m-Y') . '.json';
if (file_put_contents($file_name, $question)) {
    echo $file_name . ' file created';
} else {
    echo "Error Occured";
}
?>