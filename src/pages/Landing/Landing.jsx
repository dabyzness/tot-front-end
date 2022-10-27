import TTRow from "../../components/TTRow/TTRow";
import LandingResRow from "../../components/LandingResRow/LandingResRow";

import Map, { Marker, Popup, FullscreenControl } from "react-map-gl";
import { useState, useMemo, useRef, useCallback } from "react";

import tot from "../../assets/tot.png";
import styles from "./Landing.module.css";

const Landing = ({ user, restaurants, ttreviews, handleAddToWishlist }) => {
  const [popupViewState, setPopupViewState] = useState(null);
  // const [mapSize, setMapSize] = useState({ width: "90vw", minHeight: "40vw" });
  const [viewState, setViewState] = useState({
    longitude: -73.99130137,
    latitude: 40.7012968,
    zoom: 15,
  });

  const mapRef = useRef();

  const markers = useMemo(() =>
    restaurants.map((restaurant, i) => (
      <Marker
        key={`marker-${i}`}
        {...restaurant.location}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupViewState(restaurant);
        }}
      >
        <p style={{ marginBottom: "-5px", color: "white" }}>
          {restaurant.name}
        </p>
        <img src={tot} alt="" style={{ height: "30px" }} />
      </Marker>
    ))
  );

  const handleResize = useCallback(() => {
    mapRef.current.resize();
  }, []);

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : "Tot"}</h1>
      <div
        className={styles.mapContainer}
        style={{ 
        width: "90vw", 
        minHeight: "400px" }}
      >
        <Map
          ref={mapRef}
          initialViewState={viewState}
          {...viewState}
          style={{ width: "100%", height: "100%", borderRadius:"10px" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onMove={(e) => setViewState(e.viewState)}
        >
          <FullscreenControl />

          {markers}

          {popupViewState && (
            <Popup
              longitude={Number(popupViewState.location.longitude)}
              latitude={Number(popupViewState.location.latitude)}
              anchor="top"
              onClose={() => setPopupViewState(null)}
            >
              <div>
                <h3>{popupViewState.name}</h3>
                <p>Address: {popupViewState.cuisineType[0]}</p>
                <p>Phone: {popupViewState.tags[0]}</p>
                <a href={popupViewState.website}>{popupViewState.website}</a>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <h3>Tastes of TikTok</h3>
      <TTRow
        ttreviews={ttreviews}
        handleAddToWishlist={handleAddToWishlist}
        user={user}
      />
      <h3>ToT Restaurants</h3>
      <LandingResRow restaurants={restaurants} />
    </main>
  );
};

export default Landing;
