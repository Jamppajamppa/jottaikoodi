<?php
class Opiskelija {
    
    public string $nimi;
    public string $ryhma;
}
    //opiskelija 1, Jami
    $jami = new Opiskelija();
    $jami->nimi = "Jami";
    $jami->ryhma = "Ohjelmistokehittäjä";

    //opiskelija 2, Jere
    $jere = new Opiskelija();
    $jere->nimi = "Jere";
    $jere->ryhma = "IT-tukihenkilö";

    echo "Opiskelija 1: $jami->nimi, ryhmä: $jami->ryhma<br>";
    echo "Opiskelija 2: $jere->nimi, ryhmä: $jere->ryhma<br>";

?>