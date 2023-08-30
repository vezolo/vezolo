"use client";

const useStorage = {
  getItem: (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storage = localStorage.getItem(key);
      return storage;
    }
  },
  setItem: (key, value) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storage = localStorage.setItem(key, value);
      return storage;
    }
  },

  removeItem: (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storage = localStorage.removeItem(key);
      return storage;
    }
  },
};

export default useStorage;
