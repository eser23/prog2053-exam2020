import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  
  render() {
    return html`
    <head>
    </head>
    <form onsubmit="javascript: return false;" id=user" method="POST"
    <div>
      <label for="firstName">First name</label>
      <input id=firstName" name="firstName" type="text" value={this.user.firstName}">
      </div>
    <div>
    <label for="lastName"<Last name</label>
    <input id="lastName name="lastname" type="text" value="${this.user.lastName"}>
    </div>
    <div>
    <label for ="email"E-mail address</label>
    <input id ="uname" name="uname" type="text" value="${this.user.uname}>
    </div>
    <div>
    <label for ="password"<Password"</label>
    <input id="password" name="password" type="password" value="">
    <div>
    <input type="submit" @click=${this.updateUser} id="submit" name ="edituser" value="Submit"<>/input>
</form>
;
} 
}
    

  // din kode her
    updateUser(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
      method: 'POST',
      body: dataForm
    }).then(res=>res.json())
    .then(data=>{
      if (data.status=='success') {
        console.log("User updated");
      } else {
        console.log("User not updated");
      }
  })
  }
}

}
customElements.define('edit-user', EditUser);
