'use client';

import * as React from 'react';
import Head from 'next/head';
import Map, { NavigationControl } from 'react-map-gl/maplibre';
import './mapstyles.css';

const TriggerCitiesMap = () => {
  const mapRef = React.useRef(null);

  //   React.useEffect(() => {
  //     if (mapRef.current) {
  //       console.log(mapRef.current);
  //       window.global.map = mapRef.current;
  //     }
  //   }, [mapRef.current]);

  return (
    <>
      <Head>
        <link href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" rel="stylesheet" />
      </Head>
      <Map
        // onDrag={() => (window.map = mapRef.current)}
        ref={mapRef}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 2,
        }}
        style={{ width: '100%', height: 620 }}
        mapStyle="map_style.json"
        scrollZoom={false}
      >
        <NavigationControl position="top-right" showZoom={true} />
      </Map>
    </>
  );
};

export default TriggerCitiesMap;
