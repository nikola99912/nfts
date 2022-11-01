import data from '../mocks/ryu_attributes.json';

export default () => {
  const newData = data.map((collection) => {
    const countItemsCollection = {};
    // get collection
    collection.map(collectionType => {
      // map collection items and group by type
      let groupItems = countItemsCollection[`${collectionType.trait_type}:${collectionType.value}`.toLocaleLowerCase()]
      if (groupItems) {
        groupItems += 1;
      } else {
        countItemsCollection[`${collectionType.trait_type}:${collectionType.value}`.toLocaleLowerCase()] = 1;
      }
    })
    return countItemsCollection;
  })
  console.log('newDAta', newData);
}
