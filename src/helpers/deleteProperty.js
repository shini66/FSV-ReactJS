export function deleteProperty(object, key) {
  delete object[key];
  console.log("Objeto después de eliminar la propiedad:", object);
}
