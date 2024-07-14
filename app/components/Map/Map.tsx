'use client';

import * as React from 'react';
import Head from 'next/head';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import './styles.css';
import { CITIES } from '@/app/content';

type TCity = (typeof CITIES)[0];

const minPopulation = CITIES.sort((city1, city2) => city1.CITY_POPULATION - city2.CITY_POPULATION)[0].CITY_POPULATION;
const maxPopulation = CITIES.sort((city1, city2) => city2.CITY_POPULATION - city1.CITY_POPULATION)[0].CITY_POPULATION;

const TriggerCitiesMap = () => {
  const mapRef = React.useRef(null);

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 1.5,
      }}
      style={{ width: '100%', height: 'calc(100% - 64px)', opacity: 0.95 }}
      mapStyle="map_style.json"
      scrollZoom={false}
    >
      {CITIES.map((city) => (
        <TriggerCityMarker key={city.CITY_ID} city={city} />
      ))}
      <NavigationControl position="top-right" showZoom={true} />
    </Map>
  );
};

type TriggerCityMarkerProps = {
  city: TCity;
};

const TriggerCityMarker: React.FC<TriggerCityMarkerProps> = ({ city }) => {
  const tierToClassName = {
    'Tier 1': 'tier1Marker',
    'Tier 2': 'tier2Marker',
    'Tier 3': 'tier3Marker',
    'Tier 4': 'tier4Marker',
  };
  const className = tierToClassName?.[city.TRIGGER_CITY_TIER as 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4'];
  const size = `${getMarkerSize(city.CITY_POPULATION)}px`;

  return (
    <Marker longitude={city.CITY_LNG} latitude={city.CITY_LAT} anchor="bottom">
      <div
        className={`rounded-full outline-white outline -outline-offset-4 ${className}`}
        style={{ outlineWidth: 'thin', height: size, width: size }}
      />
    </Marker>
  );
};

const getMarkerSize = (cityPopulation: number) => {
  const minSize = 16;
  const maxSize = 72;
  const ratio = (cityPopulation - minPopulation) / (maxPopulation - minPopulation);
  const size = ratio * (maxSize - minSize) + minSize;

  return Math.floor(size);
};

export default TriggerCitiesMap;
