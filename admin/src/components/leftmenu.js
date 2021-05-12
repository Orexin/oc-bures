// COMPONENT

import "../css/components/leftmenu.css";
class Leftmenu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = 
    `<div class="top-panel">
    <img src="https://raw.githubusercontent.com/Orexin/orexin-web/master/src/img/logos/logo-white-sm.png" alt="">
  </div>
  <div class="menu-area" id="main-menu">
    <span>HLAVNÍ</span>
    <a href="/dashboard.html"class="action">
      <span class="typcn typcn-home"></span>
      <p>Dashboard</p>
    </a>
    <a href="/photos/upload.html"class="action">
      <span class="typcn typcn-camera"></span>
      <p>Upload</p>
    </a>
    <a href="/photos/collections.html" class="action">
      <span class="typcn typcn-image"></span>
      <p>Collections</p>
    </a>
    <a href="/analytics.html" class="action">
      <span class="typcn typcn-chart-bar"></span>
      <p>Analytics</p>
    </a>
    <a href="/users" class="action">
      <span class="typcn typcn-group"></span>
      <p>Users</p>
    </a>
    <a href="/about.html" class="action">
      <span class="typcn typcn-info"></span>
      <p>About</p>
    </a>
  </div>
  <div class="bottom-area">
    <span id="toggleWidth" class="typcn typcn-arrow-left-thick"></span>
  </div>
    `;

    const lmenu = document.querySelector('leftmenu-wrapper');
    const toggler = document.querySelector('.bottom-area');
    const page = document.querySelector('.page');
    toggler.addEventListener('click', () => {
        lmenu.classList.toggle('smol');
        if(lmenu.classList.contains('smol')) {
          page.style.gridTemplateColumns = "80px 1fr 1fr 1fr"; 
        } else {
          page.style.gridTemplateColumns = "200px 1fr 1fr 1fr";
        }
    })
  }
}

customElements.define("leftmenu-wrapper", Leftmenu);