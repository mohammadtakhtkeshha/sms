export function storeItem(key, object) {
    localStorage.setItem(key, object);
}

export function retrieveItem(key) {
    return localStorage.getItem(key);
}

export function removeItem(key) {
    return localStorage.removeItem(key);
}

const Item = {
    storeItem: storeItem,
    retrieveItem: retrieveItem,
    removeItem: removeItem,
  };
  
  export default Item;