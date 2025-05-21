
const getRestaurants = async () => {
  const latitude = 37.7749; 
  const longitude = -122.4194;
  const radius = 1500;

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${googleApiKey}`;

  try {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; 
    const response = await fetch(proxyUrl + url);
    const data = await response.json();

    const cleanedData = data.results.map((place) => ({
      name: place.name,
      rating: place.rating,
      image_url:
        place.photos?.length > 0
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${googleApiKey}`
          : "https://via.placeholder.com/400x300.png?text=No+Image",
    }));

    return cleanedData;
  } catch (err) {
    console.error("Failed to fetch restaurants", err);
  }
};

