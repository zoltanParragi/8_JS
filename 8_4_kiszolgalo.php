<?php

//json string-kén érkezik az adat:
//$inputs = file_get_contents("php://input");

//php változóvá konvertáljuk:
$inputs = json_decode(file_get_contents("php://input"));

print json_encode($inputs); //json formátumban kell viszaküldeni, az van megadva a fetch-ben

//most már így is lehetne:
//print $inputs->name;
//exit;
