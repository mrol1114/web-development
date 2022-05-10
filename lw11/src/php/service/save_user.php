<?php
require_once('./../modules/survey/common.inc.php');

$request = new RequestSurveyLoader();
$fileStorage = new SurveyFileStorage();

$survey = $request->makeSurveyFromParametrs();
$fileStorage->saveSurvey($survey);