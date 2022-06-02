export function store(key, object) {
  localStorage.setItem(key, object);
}

export function retrieve(key) {
  return localStorage.getItem(key);
}

export function remove(key) {
  return localStorage.removeItem(key);
}
const LocalStorageService = {
  store,
  retrieve,
  remove,
};
export default LocalStorageService;
