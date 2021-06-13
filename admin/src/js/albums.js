// IMPORTS
import "../css/albums.css";
import { Collections } from "../js/core";
import "regenerator-runtime";

// Components
import { albumListItem } from "../components/albumListItem";

// DOM Variables
const albumList = document.querySelector(".album-list");
const newAlbumInput = document.querySelector(".new-album-popup");

// Variables
let globalCollectionList = [];

async function loadExistingCollections() {
  albumList.innerHTML = "";
  try {
    globalCollectionList = await Collections.getDetailedCollectionList();
  } catch (err) {
    console.log(err);
  }
  if (globalCollectionList.length != 0) {
    console.log(globalCollectionList);
    globalCollectionList.forEach((album) => {
      // Let's create and then append album to the DOM
      // console.log(album);
      let albumDOM = new albumListItem(
        album.albumName,
        album.connectedImages,
        album.numOfImages,
        album.docID
      );
      albumList.appendChild(albumDOM);
    });
  } else {
    albumList.innerHTML = `<div><p>There are no collections yet. You can create one though.</p></div>`;
  }
}

// Event for loading albums from Firestore
document.addEventListener("DOMContentLoaded", async () => {
  await loadExistingCollections();
});

//!  Global (Window scope) event functions
window.showNewAlbumInput = () => {
  // Toggle new album in put pop up
  if (newAlbumInput.style.display == "block") {
    newAlbumInput.style.display = "none";
  } else {
    newAlbumInput.style.display = "block";
  }
};
window.createNewAlbum = async () => {
  let input = document.querySelector(".new-album-input");
  if (input.value != "") {
    await Collections.updateColectionList(input.value);
    //! Show success status!
    
    await loadExistingCollections();
    newAlbumInput.style.display = "none";
  } else {
    alert("Name cannot be empty!");
  }
};