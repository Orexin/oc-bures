// Helper functions for manipulation with localStorage data
export const Storage = {
  clear: () => {
    localStorage.clear();
  },
  Images: {
    clear: () => localStorage.removeItem("Images"),
    get: () => {
      return JSON.parse(localStorage.getItem("Images"));
    },
    getSpecific: (id) => {
      return Storage.Images.get().find((obj) => obj.id === id);
    },
    set: (imageList) => {
      localStorage.setItem("Images", JSON.stringify(imageList));
    },
  },
  Collections: {
    clear: () => localStorage.removeItem("Collections"),
    get: () => {
      return JSON.parse(localStorage.getItem("Collections"));
    },
    getSpecific: (id) => {
      return Storage.Collections.get().find((obj) => obj.id === id);
      
    },
    set: (collectionList) => {
      localStorage.setItem("Collections", JSON.stringify(collectionList));
    },
  },
  Analytics: {
    clear: () => localStorage.removeItem("Analytics"),
    get: () => {
      return JSON.parse(localStorage.getItem("Analytics"));
    },
    set: (analyticsObject) => {
      localStorage.setItem("Analytics", JSON.stringify(analyticsObject));
    },
  },
};
