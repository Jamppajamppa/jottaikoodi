<?php
class auto{

    public string $merkki;
    public string $malli;

    public function Tulosta(): string{
        return "auto: $this->merkki $this->malli";
    }
}
    $auto = new auto();
    $auto->merkki = "Toyota";
    $auto->malli = "Corolla";
    echo $auto->Tulosta();

?>