import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Favorite, Room } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";

function Footer(props) {
  const [navValue, setNavValue] = useState("/");
  const history = useHistory();
  const arrURL = props.url;
  const arrIcons = [
    <Home />,
    <Favorite />,
    <Room />
  ];

  function createBottomNavigation(data) {
    return data.map((url, idx) => {
      return (
        <BottomNavigationAction
          className="bottomNav item"
          label={url.label}
          value={url.url}
          icon={arrIcons[idx]}
        />
      )
    })
  }

  return (
    <BottomNavigation
      value={navValue}
      onChange={(evnet, newValue) => {
        history.push(`${newValue}`);
        setNavValue(newValue);
      }}
      showLabels
      className="bottomNav" >

      { createBottomNavigation(arrURL)}
    </BottomNavigation>
  )
}

export default Footer;