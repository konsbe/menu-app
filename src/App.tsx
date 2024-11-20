import "./App.css";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { routes, TROUTE } from "./routes";
import MenuDropdown from "./components/MenuDropdown";
import useGooglEXlsxHook from "./hooks/useGooglEXlsxHook";
import useMapHook from "./hooks/useMapHook";
import { convertMenuItemsToMenu } from "./utils";
import CircleDownIcon from "./components/CircleDownIcon";
import FacebookIcon from "./components/FacebookIcon";
import TelephoneIcon from "./components/TelephoneIcon";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

function App() {
  const [selectedRoute, setSelectedRoute] = useState<TROUTE>(routes[1]);
  const [scrollTop, setScrollTop] = useState<boolean>(false);

  const myRef = useRef<HTMLDivElement | null>(null);

  const { isLoaded, onLoad, onUnmount } = useMapHook({ selectedRoute });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const menuData = useGooglEXlsxHook();
  const menuD = convertMenuItemsToMenu(menuData.data);

  const executeScroll = () => {
    if (!myRef || !myRef.current) return;
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChangeRoute = (route: TROUTE) => {
    setSelectedRoute(route);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedRoute.logo})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, [selectedRoute.logo]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      document.body.getBoundingClientRect().top;
      setScrollTop(window.scrollY > 51); // Modify this condition based on your requirements
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`d-flex-row-arround ${
          scrollTop ? "nav-scroll-tabs" : "nav-tabs "
        }`}>
        {routes.map((route: TROUTE, index: number) => {
          return (
            <div
              className={`nav-tab d-flex-col-cent c-pointer ${
                scrollTop ? "scroll-top" : ""
              } ${
                selectedRoute.location === route.location ? "is-selected" : ""
              }`}
              key={index}
              onClick={() => {
                handleChangeRoute(route);
              }}>
              <span className="value-color label-fonts">{route.name}</span>
              <span className="value-color label-fonts">{route.location}</span>
            </div>
          );
        })}
      </div>
      <div className="selected-title first-title self-start">
        {selectedRoute.title}
      </div>
      <div className="main-body fade">
        <div className="main-area-container d-flex-col">
          <div className="image-map-container">
            <div className="d-flex-center w-100 container-style">
              <div className="description-container  value-color w-100">
                <div className="w-100 discription-title align-text-end">
                  <div className="">{selectedRoute.description}</div>
                </div>
                <div className="w-100 d-flex-b-space  ">
                  <div className="field-value value-color align-text-end">
                    {selectedRoute.telephone}
                  </div>
                </div>
                <div className="w-100 d-flex-b-space self-end">
                  <div className="field-value value-color">
                    {selectedRoute.location}
                  </div>
                </div>
              </div>
            </div>

            {isLoaded && (
              <div className="google-map-container">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={selectedRoute.position}
                  zoom={15}
                  onLoad={onLoad}
                  onUnmount={onUnmount}>
                  <Marker position={routes[0].position} />
                  <Marker position={routes[1].position} />
                  {/* <Marker position={routes[2].position} /> */}
                </GoogleMap>
              </div>
            )}
          </div>
          <div
            className="d-flex-col-cent c-pointer menu-button "
            onClick={() => executeScroll()}>
            <div className="d-flex-center menu-font-item">MENU</div>
            <div className="d-flex-center">
              <CircleDownIcon width={"52px"} height={"52px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex-center phone-img">
        <img src={selectedRoute.image} alt="Grill Shop" />
      </div>
      <div className="secondary-body fade">
        <div className="secondary-phase d-flex-col-cent">
          <div className="selected-title middle-title secondary-title self-start">
            {selectedRoute.title}
          </div>
          <div className="main-area-container d-flex-col">
            <div className="main-menu">
              <div className="d-flex-center container-dropdown" ref={myRef}>
                <MenuDropdown menu={menuD[selectedRoute.route]} />
              </div>
              <div className="d-flex-center">
                <img
                  className="img-rotate "
                  src={selectedRoute.image}
                  alt="Grill Shop"
                  width={window.innerWidth < 800 ? "400" : "500"}
                  height={window.innerWidth < 800 ? "350" : "500"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`d-flex-col-start ${
          scrollTop ? "footer-scrolled" : "footer"
        }`}>
        <div className="d-flex-start">
          <FacebookIcon width={"16px"} height={"16px"} />
          <div className="footer-values">
            Follow as on <a href="https://www.facebook.com">facebook</a>
          </div>
        </div>
        <div className="d-flex-start">
          <TelephoneIcon width={"16px"} height={"16px"} />
          <div className="footer-values">
            telephone: {selectedRoute.telephone}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
