<?php
header("Content-Type: text/plain");
$password = $_GET['password'];
$symbolArray = [];
$mark = 0;
$pasLen = strlen($password);
$numbers = 0;
$upperCase = 0;
$lowerCase = 0;
$curSym = '';
for ($i = 0; $i < $pasLen; $i++) {
    $curSym = $symbolArray[$password[$i]]; 
    if ($curSym) {
        $symbolArray[$password[$i]] = $symbolArray[$password[$i]] + 1; 
    } else {
        $symbolArray[$password[$i]] = 1;
    }
    if (ctype_upper($curSym)) {
        $upperCase += 1;
    }
    if (ctype_lower($curSym)) {
        $lowerCase += 1;
    }
}
foreach ($symbolArray as $value) {
    if ($value > 1) {
        $mark -= $value;
    }
}
if ($pasLen > 0) {
    $mark += $pasLen*4;
    $mark += $numbers*4;
    $mark += $upperCase > 0 ? ($pasLen - $upperCase)*2 : 0;
    $mark += $lowerCase > 0 ? ($pasLen - $lowerCase)*2 : 0;
    $mark -= $numbers === 0 ? $pasLen : 0;
    $mark -= ($upperCase + $lowerCase) === 0 ? $pasLen : 0;
}
echo 'Надежность пароля: ', $mark;