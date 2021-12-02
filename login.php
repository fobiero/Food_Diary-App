<?php

require 'connect.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="cs/register.css">
    <title>Login</title>
</head>
<body>

  <div class="container signIn">
<div class="card-header text-center ">
    <h1 id="h1">Login Form</h1>
</div>
<div class="card-body">
    <form action="confirmLogin.php" method="POST" autocomplete="">
<p class="loginResults"></p>

<div class="row">
    <div class="form-group">
    <div class="inner-addon left-addon">
    <i class="glyphicon glyphicon-envelope"></i>

      <input class="form-control" type="email" name="email" id="email" placeholder="Email Address" required>
      </div>
    </div>
</div>

<div class="row">
    <div class="form-group">
    <div class="inner-addon left-addon">
    <i class="glyphicon glyphicon-lock"></i>
     <input class="form-control" type="password" name="password" id="pass" placeholder="Password" required>   
</div>
    </div>
</div>

<div class="row">
    <div class="form-group">

        <button id="loginbtn" class="btn btn-success btn-lg" name="login" type="submit">Login</button>
   
    </div>
</div>

    </form>
</div>
</div>


</body>
</html>