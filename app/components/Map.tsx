'use client';

import * as React from 'react';
import Head from 'next/head';
import Map from 'react-map-gl/maplibre';

const TriggerCitiesMap = () => {
  return (
    <>
      <Head>
        <link href="https://unpkg.com/maplibre-gl@4.5.0/dist/maplibre-gl.css" rel="stylesheet" />
      </Head>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 2,
        }}
        style={{ width: '100%', height: 720 }}
        mapStyle="https://raw.githubusercontent.com/openmaptiles/dark-matter-gl-style/master/style.json"
        scrollZoom={false}
      />
    </>
  );
};

export default TriggerCitiesMap;
