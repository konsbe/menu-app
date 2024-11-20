import { useState } from "react";
import "./MenuDropdown.css"; // Create this CSS file for styling
import { MENUDEVESIONENUM, TMENU, TMENUITEM } from "../routes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuDropdown = ({ menu }: { menu: TMENU | any }) => {
  const [expandedSections, setExpandedSections] = useState<
    Partial<{ [key in MENUDEVESIONENUM]: boolean }>
  >({});

  const toggleSection = (section: string) => {
    //   if (expandedSections === {}) {setExpandedSections()}
    //     Argument of type '{ [x: string]: boolean; }' is not assignable to parameter of type 'SetStateAction<{ starters: boolean; salads: boolean; main: boolean; meat: boolean; daily: boolean; drings: boolean; }>'.
    //   Type '{ [x: string]: boolean; }' is missing the following properties from type '{ starters: boolean; salads: boolean; main: boolean; meat: boolean; daily: boolean; drings: boolean; }': starters, salads, main, meat, and 2 more.ts(2345)
    // (parameter) section: string

    setExpandedSections({ [section]: true });
  };

  return (
    <div className="menu-dropdown">
      {menu &&
        Object.keys(menu).map((section) => {
          const sectionKey = section as MENUDEVESIONENUM;
          return (
            <div key={sectionKey}>
              <div
                className="menu-section"
                onClick={() => toggleSection(sectionKey)}>
                {section}
              </div>
              <div
                className={`menu-items ${
                  expandedSections[sectionKey] ? "expanded" : ""
                }`}
                style={{ height: expandedSections[sectionKey] ? "auto" : "0" }}>
                {menu[sectionKey].map((item: TMENUITEM, index: number) =>
                  item.name ? (
                    <div key={index} className="menu-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-dots"></span>
                      <span className="item-value">${item.value}</span>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuDropdown;
