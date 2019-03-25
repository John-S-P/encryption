### OBJECTIVE
Encrypt the variables stored in '<input>' tags.

You'll need a PHP-based encryption function. Note that there may be a better way to do this - sending html from the server with encrypted variables is a more secure approach, rather than providing static pre-encrypted variables. Because someone could just google PHP encryption functions and try as many as they can until they find one that returns 'DEGREE_CDE' (see example below).

### PHP
The PHP file is used in a PHP function to deliver (return) HTML from the site's server. Simply treat it as HTML.
<input type="checkbox" name="DEGREE_CDE" value="MS">
	- 'name' is the database column
	- 'value' is one of the many values possible in the respective column
	- Both the name and the value must be encrypted

	The client will 'scoop up' the relevant name and value 'values' and package them into a JSON to be sent to the server. The server then needs to decrypt the encrypted variables into meaningful ones.

	For instance: 'DEGREE_CDE' in the above example may look like 'a339xd' in the HTML. After it's passed through the server's (PHP) encryption function, it should be decrypted into 'DEGREE_CDE,' so that the server can use that information to fetch relevant data from the database. The same encryption needs to be applied to 'MS' in the above example, which is one of many potential values stored under the 'DEGREE_CDE' column in the database.

### variable.js
The dictionary/repository for all variables and global variables on the database and on the website, respectively. This is bad practice - to store globals in general, and database information saved to a file on the website's root directory. But it's only temporary, and for dev purposes. The website isn't deployed or exposed to the internet yet.