export const formatResponse = (response) => {
  let data = response.data.replace('jsonFlickrFeed(', '');
  const slicedJson = data.slice(0, data.length - 1);

  return JSON.parse(slicedJson);
};
