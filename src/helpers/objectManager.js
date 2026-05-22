import { extraction } from './extraction';
import { extractionRename } from './extractionRename';
import { readProperty } from './readProperty';
import { updateProperty } from './updateProperty';
import { deleteProperty } from './deleteProperty';

const objectManager = {
    extraction,
    extractionRename
};

const manipulateObject = {
    read: readProperty,
    update: updateProperty,
    delete: deleteProperty
};

export { objectManager, manipulateObject };
