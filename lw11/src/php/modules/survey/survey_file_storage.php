<?php
class SurveyFileStorage 
{
    private const BASE = './data/';
    private const FILE_NAME = 'name';
    private const FILE_JOB = 'job';
    private const FILE_EMAIL = 'email';
    private const FILE_Agreement = 'agreement';
    private const FILE_EXTENSION = '.json';
    private const FILE_BASE = 'users';
    private const FILE_BASE_FIELD_NAME = 'emails';

    public function loadSurvey(string $email) : Survey 
    {
        $path = self::BASE . $email . self::FILE_EXTENSION;

        if  (file_exists($path)) 
        {
            $array = json_decode(file_get_contents($path), true);
            return new Survey($array[self::FILE_NAME], $array[self::FILE_EMAIL], $array[self::FILE_JOB]);
        }

        return new Survey();
    }

    public function saveSurvey(Survey $survey) : void
    {
        $email = $survey->getEmail();
        $basePath = self::FILE_BASE . self::FILE_EXTENSION;

        if (!is_dir(substr(self::BASE, 2, -1)))
        {
            mkdir(substr(self::BASE, 2, -1));
        }

        if (!file_exists($basePath))
        {
            $users = [
                self::FILE_BASE_FIELD_NAME => [],
            ];

            file_put_contents($basePath, json_encode($users));
        }

        if ($email !== '')
        {
            $users = json_decode(file_get_contents($basePath), true);
            $path = self::BASE . $email . self::FILE_EXTENSION;
            $prevSurvey = $this->loadSurvey($email);
            $values = $this->getParameters($survey, $prevSurvey);
            $users[self::FILE_BASE_FIELD_NAME][] = $values[self::FILE_EMAIL];
            file_put_contents($basePath, json_encode($users));
            file_put_contents($path, json_encode($values, JSON_UNESCAPED_UNICODE));
        }
    }

    public function loadAllUsers() : array
    {
        $emails = json_decode(file_get_contents(self::FILE_BASE . self::FILE_EXTENSION), true)[self::FILE_BASE_FIELD_NAME];
        $users = [];

        for ($i = 0; $i < count($emails); $i++)
        {
            $path = self::BASE . $emails[$i] . self::FILE_EXTENSION;
            if  (file_exists($path)) 
            {
                $array = json_decode(file_get_contents($path), true);
                $users[] = $array;
            }
        }

        return $users;
    }

    private function getParameters($survey, $prevSurvey) : array
    {
        return [
            self::FILE_NAME => $survey->getName() !== '' ? $survey->getName() : $prevSurvey->getName(),
            self::FILE_JOB => $survey->getJob() !== '' ? $survey->getJob() : $prevSurvey->getJob(),
            self::FILE_EMAIL => $survey->getEmail() !== '' ? $survey->getEmail() : $prevSurvey->getEmail(),
            self::FILE_Agreement => $survey->getAgreement() ? $survey->getAgreement() : $prevSurvey->getAgreement(),
        ];
    }
}