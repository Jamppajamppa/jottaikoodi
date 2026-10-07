<?php

class Opiskelija {
    public string $nimi;
    public string $ryhma;

    public function esittele(): void {
        echo "Opiskelija: {$this->nimi}, ryhmä: {$this->ryhma}<br>";
    }
}

$opiskelija = new Opiskelija();
$opiskelija->nimi = "Jami";
$opiskelija->ryhma = "Ohjelmistokehittäjä";

$opiskelija->esittele();

?>
