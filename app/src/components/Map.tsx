import { MapContainer, FeatureGroup, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { Feature } from 'geojson';
import MapEditControls from './MapEditControls';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import { IBird } from '../Homepage';
import { v4 as uuidv4 } from 'uuid';

/*
  Get leaflet icons working
*/
//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow
});

function Map(props) {
  const [geometry, setGeometry] = useState(null);

  useEffect(() => {
    if (geometry) {
      props.setBird({ ...props.bird, location: geometry });
    }
  }, [geometry]);

  useEffect(() => {
    if (!props.bird.location) {
      setGeometry(null);
    }
  }, [props.bird]);

  return (
    <MapContainer style={{ height: '400px' }} center={[49.28, -123.12]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup>
        <MapEditControls
          position="topright"
          draw={{ circle: false }}
          edit={undefined}
          geometry={geometry}
          setGeometry={setGeometry}
        />
      </FeatureGroup>

      {props.selectedBird?.location && (
        <GeoJSON key={uuidv4()} data={props.selectedBird?.location}></GeoJSON>
      )}

      <LayersControl position="bottomright">
        <LayersControl.BaseLayer name="Esri Imagery">
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/en-us/arcgis/products/location-services/services/basemaps">ESRI Basemap</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}

export default Map;
