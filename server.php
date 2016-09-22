<?php
  //Configuring text inserted in chat.html as <boldNick:msgText.newline>
  $TEXT="<b>".$_POST['name']."</b>:  ".$_POST['text']. "</div><br>" ;
  switch ($_POST['text']) {
    //If msgText is emptu reject it
    case "":
      break;
    //That command allows you to clear chat
    case "/cls":
      file_put_contents("chat.html", "");
      break;
    //File_append is like >>. It writes text to the end of file instead of rewriting whole file
    default:
      file_put_contents("chat.html", $TEXT, FILE_APPEND);
      break;
  }
?>
