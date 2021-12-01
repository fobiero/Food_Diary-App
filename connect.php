

<?php

$servername="localhost";

$username="";

$password="";

$db="";

try{


$dsn="mysql:host=$servername;dbname=$db";

$conn=new PDO($dsn,$username,$password);

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);


}catch(PDOEception $e){

    echo 'Failed to connect'.$e->getMessage();
}

?>