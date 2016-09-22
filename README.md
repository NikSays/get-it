# GET_IT
Get_it is an easy chat
It uses only 2 functions as the core:   
`file_put_contents()` and `jQuery.Ajax()`  
To work properly it needs 2 client-sided files and 2 server-sided files
## How does it works?
1.When the index page loads JS prompt asks your nickname;  
2.Then AJAX loads chat.html, that contains all mesages;  
3.When you write text in field and click "send" button, AJAX sends nickname and text to the server.php, that inserts it in chat.html;  
*(AJAX loads chat.html every 2 secs.)*
##What's new
* Added /cls function that clears chat file
* Little more easy
* Now chat.html loads only if changed  
##TO-DO
* make userlist
* Rebase of whole project:
  It'll split on light version that stops to be developed now, and version using DB and accounds 
* this site needs some design, i think
