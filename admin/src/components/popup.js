// COMPONENT

// Imports
import "../css/components/popup.css";
import { Users } from "../js/core";

// Variables
let currentuser = Users.getCurrentLoggedUser();
console.log("lulw: ", currentuser); //! undefined
export class Popup extends HTMLElement {
  constructor(type, content) {
    super();

    this.type = type;
    this.title = currentuser;
    this.content = `
      <button class="fancy-btn" id="userLogout" onclick="userLogout()">Logout</button>
      `;
    this.classList.add("user-popup");

    this.isSpawned = false;
    this.isVisible = false;
  }
  connectedCallback() {
    this.innerHTML = `
    <div> 
      <img src="#" id="profilePic" alt="">
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    </div>
    `;
    this.toggleView();
  }
  spawn() {
    document.body.appendChild(this);
    this.isSpawned = true;
  }
  toggleView() {
    if (this.style.display == "none") {
      this.style.display = "flex";
      this.isVisible = true;
    } else {
      this.style.display = "none";
      this.isVisible = false;
    }
  }
  despawn() {
    document.body.removeChild(this);
    this.isSpawned = false;
  }
}

// Global functions
window.userLogout = () => {
  Users.logout();
  console.log("Should be logged out!");
};

customElements.define("pop-up", Popup);
