const prefix = "ferhado-storage-prefix";
const sourceObject = JSON.parse(localStorage.getItem(prefix) || '{}');

const handler = {
  get(target, property, receiver) {
    try {
      return new Proxy(target[property], handler);
    } catch (err) {
      return Reflect.get(target, property, receiver);
    }
  },

  defineProperty(target, property, descriptor) {
    if (Reflect.defineProperty(target, property, descriptor)) {
      localStorage.setItem(prefix, JSON.stringify(sourceObject));
    }
    return true;
  },

  deleteProperty(target, property) {
    if (Reflect.deleteProperty(target, property)) {
      localStorage.setItem(prefix, JSON.stringify(sourceObject));
    }
    return true;
  }
}

const storage = new Proxy(sourceObject, handler);
