<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang="en-US"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <!--<![endif]-->
<!--[if gte IE 9] <style type="text/css"> .gradient {filter: none;}</style><![endif]-->
<!--[if !IE]>
<html lang="en"><![endif]-->
<html lang="en-US" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Required meta tags for responsive (Bootstrap Framwork v4.1.0) -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <!-- Favicon and touch icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="assets/img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="">
    <meta name="twitter:site" content="@twitter_username">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <!-- Open Graph data -->
    <meta property="og:title" content=""/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
    <meta property="og:description" content=""/>
    <meta property="og:site_name" content="R"/>
    <meta property="fb:admins" content="Facebook numeric ID"/>
    <!-- Gmail verification -->
    <meta name="google-site-verification" content=""/>
    <!-- Website title -->
    <title>Demo</title>
    <!-- Third Party Plugins -->
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <!-- Bootstrap v4.1.0 CSS (frontend framwork) -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- Main CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- jQuery (necessary for JavaScript plugins) -->
    <script src="assets/js/jquery-3.2.1.min.js"></script>
</head>
<body>
<!-- Main Coding Start Here -->


<!-- Markup for main -->
<div id="main">
    <h4 class="title">tic tac toe</h4>
    <p class="subtitle"><span>Developed by : SC</span></p>
    <ul class="resultboard">
        <li><strong id="namePlayer1">Player 1 </strong> : <span id="winPlayer1" style="display: inline-block;"></span>
        </li>
        <li><strong id="namePlayer2">Player 2 </strong> : <span id="winPlayer2" style="display: inline-block;"></span>
        </li>
        <li id="turn" style="display: block;"><span style="font-weight: bold; color: mediumvioletred;">Start Game</span>
        </li>
    </ul>
    <div class="listitem">
        <ul id="game">
            <li id="one"></li>
            <li id="two"></li>
            <li id="three"></li>
            <li id="four"></li>
            <li id="five"></li>
            <li id="six"></li>
            <li id="seven"></li>
            <li id="eight"></li>
            <li id="nine"></li>
        </ul>
    </div>
    <button id="reset" class="btn btn-success">Restart</button>
</div>
<!--/ Markup for main -->


<!-- Main Coding End -->
<!-- Include all compiled plugins (below), or include individual files as needed -->
<!-- Bootstrap v4.1.0 (frontend framwork) -->
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<!-- Third Party Plugins -->
<script src="assets/js/html5shiv.min.js"></script>
<script src="assets/js/respond.min.js"></script>
<script src="assets/js/modernizr-2.8.3.min.js"></script>
<!-- Script JS -->
<script src="assets/js/script.js"></script>
</body>
</html>
