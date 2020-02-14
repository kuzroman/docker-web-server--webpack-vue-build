<html>
    <head>
        <title>Hello...</title>
        <meta charset="utf-8">
<!--  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
<!--  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->

        <script src="./dist/main.js"></script>
</head>
<body>
<?php
$conn = mysqli_connect('db', 'user', 'test', "myDb");
$query = 'SELECT * From Person';
$result = mysqli_query($conn, $query);

while ($value = $result->fetch_array(MYSQLI_ASSOC)) {
 foreach ($value as $element) {
     echo $element;
 }
}

$result->close();
mysqli_close($conn);

?>
</body>
</html>
