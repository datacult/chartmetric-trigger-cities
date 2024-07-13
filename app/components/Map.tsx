'use client';

import * as React from 'react';
import Head from 'next/head';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import './mapstyles.css';
import { CITIES } from '../content';

const TriggerCitiesMap = () => {
  const mapRef = React.useRef(null);

  return (
    <>
      <Head>
        <link href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" rel="stylesheet" />
      </Head>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: 1.5,
        }}
        style={{ width: '100%', height: 620 }}
        mapStyle="map_style.json"
        scrollZoom={false}
      >
        {CITIES.map((city) => (
          <TriggerCityMarker key={city.CITY_ID} city={city} />
        ))}
        <NavigationControl position="top-right" showZoom={true} />
      </Map>
    </>
  );
};

type TriggerCityMarkerProps = {
  city: (typeof CITIES)[0];
};

const TriggerCityMarker: React.FC<TriggerCityMarkerProps> = ({ city }) => {
  const tierToClassName = {
    'Tier 1': 'tier1Marker',
    'Tier 2': 'tier2Marker',
    'Tier 3': 'tier3Marker',
    'Tier 4': 'tier4Marker',
  };
  const className = tierToClassName?.[city.TRIGGER_CITY_TIER as 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4'];

  return (
    <Marker longitude={city.CITY_LNG} latitude={city.CITY_LAT} anchor="bottom">
      <div
        className={`rounded-full outline-white outline -outline-offset-4 h-12 w-12 ${className}`}
        style={{ outlineWidth: 'thin' }}
      ></div>
    </Marker>
  );
};

export default TriggerCitiesMap;
