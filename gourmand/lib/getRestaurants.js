// api.js or wherever getRestaurants is
const getRestaurants = async (city, activeTab) => {
  try {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`;
    const geocodeRes = await fetch(geocodeUrl);
    const geoData = await geocodeRes.json();
    const { lat, lng } = geoData.results[0].geometry.location;

    const radius = 1500;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results.map((place) => ({
      name: place.name,
      rating: place.rating,
      image_url: place.photos?.[0]
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${GOOGLE_API_KEY}`
        : "https://via.placeholder.com/400x300.png?text=No+Image",
    }));
  } catch (err) {
    console.error("Failed to fetch restaurants", err);
    return [];
  }
};
