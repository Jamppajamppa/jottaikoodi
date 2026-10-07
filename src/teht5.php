<?php

class Kirja {
    public string $nimi;
    public string $kirjailija;
    public int $sivumaara;
}

$kirja = new Kirja();
$kirja->nimi = "Kaaos";
$kirja->kirjailija = "Ilkka Remes";
$kirja->sivumaara = 464;

echo "Nimi: {$kirja->nimi}<br>";
echo "Kirjailija: {$kirja->kirjailija}<br>";
echo "Sivumäärä: {$kirja->sivumaara}<br>";

?>
