import data from './data';

const keys = ["city", "latitude", "longitude"];
const dataObject = data.map(array => {
    const object = {};

    keys.forEach((key, i) => object[key] = array[i]);

    return dataObject;
});

export default dataObject;