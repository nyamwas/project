/* @Author: nyamwas
 * @Date: 31 March 2024 15:26:00 EAT
 * @LastModifiedBy: nyamwas
 * @LastModifiedTime: 31 March 2024 15:26:00 EAT
 */
const body = document.querySelector("body")
body.innerHTML += `<img src="./res/logo.png" width="150" height"150" alt="logo"/>`

let login = `<form action="" method="_post" id="form_3" >
<h1>Log In</h1><br><hr><br>
<label for="item_username">Username</label><input type="text" id="item_username"/><br>
<label for="item_password">Password</label><input type="password" id="item_password"/><br>
<input type="submit"/><br>
<a href="">Forgot password</a><br>
<label>Don't have an account? Click </label><a href="signup.html">here</a>
</form>`

body.innerHTML += login