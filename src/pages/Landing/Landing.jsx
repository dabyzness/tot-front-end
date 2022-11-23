import TTRow from "../../components/TTRow/TTRow";
import LandingResRow from "../../components/LandingResRow/LandingResRow";

import Map, { Marker, Popup } from "react-map-gl";
import { useState, useMemo, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import tot from "../../assets/tot.png";
import styles from "./Landing.module.css";

const Landing = ({ profile, restaurants, ttreviews, handleAddToWishlist }) => {
  const [popupViewState, setPopupViewState] = useState(null);
  // const [mapSize, setMapSize] = useState({ width: "90vw", minHeight: "40vw" });
  const [viewState, setViewState] = useState({
    longitude: -73.99130137,
    latitude: 40.7012968,
    zoom: 15,
  });

  const navigate = useNavigate();

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
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
      <h1>Hello, {profile ? profile.name : "Tot"}</h1>
      <div
        className={styles.mapContainer}
        style={{
          width: "90%",
          minHeight: "350px",
        }}
      >
        <Map
          ref={mapRef}
          initialViewState={viewState}
          {...viewState}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onMove={(e) => setViewState(e.viewState)}
        >
          {markers}

          {popupViewState && (
            <Popup
              longitude={Number(popupViewState.location.longitude)}
              latitude={Number(popupViewState.location.latitude)}
              anchor="top"
              onClose={() => setPopupViewState(null)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "1.1rem" }}>{popupViewState.name}</p>
                <button
                  style={{ transform: "scale(75%)" }}
                  onClick={() => navigate(`/restaurant/${popupViewState._id}`)}
                >
                  Go to page
                </button>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <h3>Tastes of TikTok</h3>
      <TTRow
        ttreviews={ttreviews}
        handleAddToWishlist={handleAddToWishlist}
        profile={profile}
      />
      <h3>ToT Restaurants</h3>
      <LandingResRow restaurants={restaurants} />
    </main>
  );
};

export default Landing;
