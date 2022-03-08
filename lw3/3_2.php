<?php
header("Content-Type: text/plain");
$identifier = $_GET['identifier'];
$valid = true;
if ($identifier !== '') 
{
    if (!ctype_alpha($identifier[0])) 
    {
        echo 'Идентификатор должен начинаться с буквы';
        $valid = false;
    }
    for ($i = 0; $i < strlen($identifier); $i++) 
    {
        if ((!ctype_alpha($identifier[$i]) && !is_numeric($identifier[$i])) || $identifier[$i] === ' ') 
        {
            echo 'Символ должен быть буквой или цифрой, непознанный символ: ', $identifier[$i];
            $valid = false;
            break;
        }
    }
} 
else 
{
    echo 'Идентификатор должен содержать хотя бы один символ';
    $valid = false;
}
if ($valid) 
{
    echo 'Идентификатор валиден';
}