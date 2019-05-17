export class AppStorage {
  constructor(storage) {
    this.storage = storage || window.localStorage;

    /** Is storage is supported or not */
    if (!this.isSupported()) {
      throw new Error('localStorage is not supported by browser!');
    }
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  isSupported() {
    let supported = true;

    if (!this.storage) {
      supported = false;
    }

    return supported;
  }
}

const storage = new AppStorage();

export { storage };
