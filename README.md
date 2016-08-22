# GET_IT
Get_it it's an easy chat
It uses only 2 functions as the core:   
`file_put_contents()` and `jQuery.Load()`  
To work properly it needs 2 client-sided files and 2 server-sided files
## How does it works?
1.When the index page loads JS prompt asks your nickname;  
2.Then AJAX loads chat.html, that contains all mesages;  
3.When you write text in field and click "send" button, AJAX sends nickname and text to the server.php, that inserts it in chat.html;  
*(AJAX loads chat.html every 10 secs.)*
##TO-DO
* make userlist
* add some chat functions like /clear
* this site needs some design, i think
