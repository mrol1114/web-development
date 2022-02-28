<?php
$email = $_GET['email'];
function readf($path) {
    $elements = [];
    $text = '';
    $fp = fopen($path, 'r');
    if ($fp) {
        while (($buffer = fgets($fp, 4096)) !== false) {
            $elements[] = str_replace("\n", '', $buffer);
        }
    }
    fclose($fp);
    for ($i = 0; $i < count($elements) - 1; $i++) {
        $text .= $elements[$i] . '&';
        if ($i === (count($elements) - 2)) {
            $text .= $elements[$i + 1];
        }
    }
    return $text;
}
function formatArray($props) {
    return [
        'Email' => $props['Email'] ? $props['Email'] : '',
        'First Name' => $props['First Name'] ? $props['First Name'] : '',
        'Last Name' => $props['Last Name'] ? $props['Last Name'] : '',
        'Age' => $props['Age'] ? $props['Age'] : ''        
    ];
}
function parseString($text, $separator, $assignment) {
    $arr = explode($separator, $text);
    $parsedArr = [];
    foreach ($arr as $value) {
        $para = explode($assignment, $value);
        $parsedArr[$para[0]] = $para[1];
    } 
    return $parsedArr;
}
function makeString($props, $path, $separator, $assignment) {
    $resString = '';
    $keys = ['First Name', 'Last Name', 'Email', 'Age'];
    $curProps = formatArray($props);
    if (file_exists($path)) {
        $text = readf($path);
        $prevProps = formatArray(parseString($text, $separator, $assignment));
    } else {
        $prevProps = formatArray([]);
    }
    for ($i = 0; $i < count($curProps); $i++) {
        $value = $curProps[$keys[$i]] === '' ? $prevProps[$keys[$i]] : $curProps[$keys[$i]];
        $resString .= $keys[$i] . ': ' . $value . "\n";
    }
    return $resString;
}
if ($email != '') {
    $path = './data/' . $email . '.txt';
    $props = [
        'Email' => $email,
        'First Name' => $_GET['first_name'],
        'Last Name' => $_GET['second_name'],
        'Age' => $_GET['age']
    ];
    $str = makeString($props, $path, '&', ': ');
    file_put_contents($path, $str);
}