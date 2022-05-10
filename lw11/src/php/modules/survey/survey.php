<?php
class Survey
{
    private string $name;
    private string $job;
    private string $email;
    private string $agreement;

    function __construct(string $name = '', string $email = '', string $job = '', bool $agreement = false)
    {
        $this->name = $name;
        $this->job = $job;
        $this->email = $email;
        $this->agreement = $agreement;
    }

    public function getName() : string 
    {
        return $this->name;
    }

    public function getJob() : string 
    {
        return $this->job;
    }

    public function getEmail() : string 
    {
        return $this->email;
    }

    public function getAgreement() : bool 
    {
        return $this->agreement;
    }
}