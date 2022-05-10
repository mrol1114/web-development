<?php
require_once('./../modules/survey/common.inc.php');

$fileStorage = new SurveyFileStorage();

$users = $fileStorage->loadAllUsers();

echo json_encode($users);