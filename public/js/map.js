
var myAPIKey = "47333297bdc64109aebdb0a15769989c";

var map = new maplibregl.Map({
    container: 'map',
    style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${myAPIKey}`,
    center: [100,20 ],
    zoom: 3
  });

  map.addControl(new maplibregl.NavigationControl());

  map.on('load', () => {
    map.setPaintProperty('highway-motorway', 'line-width', {
      base: 1.2,
      stops: [
        [6.5, 0],
        [7, 1.25],
        [20, 45],
      ],
    });
  });


