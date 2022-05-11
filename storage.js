// <button id="button">Save</button>
const prefix = "ferhado-storage-prefix";
const sourceObject = JSON.parse(sessionStorage.getItem(prefix) || '{}');

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
      sessionStorage.setItem(prefix, JSON.stringify(sourceObject));
    }
    return true;
  },

  deleteProperty(target, property) {
    if (Reflect.deleteProperty(target, property)) {
      sessionStorage.setItem(prefix, JSON.stringify(sourceObject));
    }
    return true;
  }
}

const storage = new Proxy(sourceObject, handler);

button.addEventListener('click', function() {
  if (!storage.name) storage.name = {};
  if (!storage.name.counter) storage.name.counter = 0;
  storage.name.counter++;
})
