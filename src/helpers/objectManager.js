
const objectManager = {
    extraction : function(object) {
        let {nombre, edad} = object;
        console.log(`El nombre es ${nombre} y la edad es ${edad}`);
    },
    extractionRename : function(object) {
        let {nombre: responsable, tarea: tarea} = object;
        console.log(`El responsable es ${responsable} y la tarea es ${tarea}`);
    }
}

const manipulateObject = {
    read : function(object, key) {
        let value = object[key];
        console.log(`Valor de la propiedad ${key}: ${value}`);
    },
    update : function(object, key, newValue) {
        object[key] = newValue;
        console.log('Objeto actualizado:', object);
    },
    delete : function(object, key) {
        delete object[key];
        console.log('Objeto después de eliminar la propiedad:', object);
    }
}

export  {objectManager, manipulateObject};