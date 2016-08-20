<?php
  $TEXT='<b>'.$_POST['name'].'</b>:  '.$_POST['text']. '<br>' ;
  switch ($_POST['text']) {
    case '':
      break;
    case '/cls':
      file_put_contents('txt.html', '<meta http-equiv="Cache-Control" content="no-store" />');
      break;
    default:
      file_put_contents('txt.html', $TEXT, FILE_APPEND);
      echo $TEXT;
      break;
  }


?>
