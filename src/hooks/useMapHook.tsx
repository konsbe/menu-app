import { useCallback, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { TROUTE } from "../routes";

const useMapHook = ({ selectedRoute }: { selectedRoute: TROUTE }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAP_API_KEY || "",
  });

  const [localMap, setLocalMap] = useState<google.maps.Map | null>(null);
  
  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      
      const bounds = new window.google.maps.LatLngBounds(
        selectedRoute.position
      );
      map.fitBounds(bounds);

      setLocalMap(map);
    },
    [selectedRoute.position]
  );

  const onUnmount = useCallback(function callback() {
    setLocalMap(null);
  }, []);

  return { isLoaded, onLoad, onUnmount, localMap };
};

export default useMapHook;
