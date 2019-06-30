<?php
    try {
        $db = new PDO('mysql:host=localhost;dbname=cic_quiz', "cicquiz", "cicquiz");
        $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );//Error Handling
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
?>
