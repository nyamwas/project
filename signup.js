/* @Author: nyamwas
 * @Date: 31 March 2024 15:35:00 EAT
 * @LastModifiedBy: nyamwas
 * @LastModifiedTime: 31 March 2024 15:35:00 EAT
 */
const body = document.querySelector("body")
body.innerHTML += `<img src="./res/logo.png" width="150" height"150" alt="logo"/>`

let signup = `<form action="" method="_post" id="form_3" >
<h1>Sign Up</h1><br><hr><br>
<label for="item_first_name">First Name</label><input type="text" id="item_first_name"/><br>
<label for="item_last_name">Last Name</label><input type="text" id="item_last_name"/><br>
<label for="item_username">Username</label><input type="text" id="item_username"/><br>
<label for="item_dob">When were you born?</label><input type="date" id="item_dob"/><br>
<label for="item_email">E-mail</label><input type="email" id="item_email"/><br>
<label for="item_password">Password</label><input type="password" id="item_password"/><br>
<label for="item_password_confirm">Confirm Password</label><input type="password" id="item_password_confirm"/><br>
<label for="item_username">How did you find out about us?</label><select><option>Online advertisement</option><option>TV advertisement</option><option>Friend</option></select><br>
<input type="submit"/><br>
</form>`

body.innerHTML += signup