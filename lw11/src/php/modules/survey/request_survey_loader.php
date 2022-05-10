<?php
class RequestSurveyLoader
{
    public function makeSurveyFromParametrs() : Survey
    {
        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, true); 

        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $job = $input['job'] ?? '';
        $agreement = $input['agreement'] ?? false;
        return new Survey($name, $email, $job, $agreement);
    }
}