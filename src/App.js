import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <>
      <div className="App">
        {/* header */}
        <Header />
        {/* Items => snapping */}

        <div className="app__itemsContainer">
          <Item
            title="Model 3"
            desc="Order Online for "
            descLink="Touchless Delivery"
            backgroundImg={Model3}
            leftBtnLink=""
            leftBtnTxt="Custom Order"
            rightBtnLink=""
            rightBtnTxt="Existing Inventory"
            twoButtons="true"
            first
          />

          <Item
            title="Model S"
            desc="Order Online for "
            descLink="Touchless Delivery"
            backgroundImg={ModelS}
            leftBtnLink=""
            leftBtnTxt="Custom Order"
            rightBtnLink=""
            rightBtnTxt="Existing Inventory"
            twoButtons="true"
          />

          <Item
            title="Model Y"
            desc="Order Online for "
            descLink="Touchless Delivery"
            backgroundImg={ModelY}
            leftBtnLink=""
            leftBtnTxt="Custom Order"
            rightBtnLink=""
            rightBtnTxt="Existing Inventory"
            twoButtons="true"
          />

          <Item
            title="Model X"
            desc="Order Online for "
            descLink="Touchless Delivery"
            backgroundImg={ModelX}
            leftBtnLink=""
            leftBtnTxt="Custom Order"
            rightBtnLink=""
            rightBtnTxt="Existing Inventory"
            twoButtons="true"
          />

          <Item
            title="Solar Panels"
            desc="Lowest Cost Solar Panels in America"
            descLink=""
            backgroundImg={SolarPanels}
            leftBtnLink=""
            leftBtnTxt="Custom Order"
            rightBtnLink=""
            rightBtnTxt="Existing Inventory"
            twoButtons="true"
            first
          />

          <Item
            title="Solar Roof"
            desc="Produce Clean Energy From Your Roof"
            descLink=""
            backgroundImg={SolarRoof}
            leftBtnLink=""
            leftBtnTxt="Order Now"
            rightBtnLink=""
            rightBtnTxt="Learn More"
            twoButtons="true"
          />

          <Item
            title="Accessories"
            desc=""
            descLink=""
            backgroundImg={Accessories}
            leftBtnLink=""
            leftBtnTxt="Shop Now"
            rightBtnLink=""
            rightBtnTxt="LEARN MORE"
          />
        </div>
      </div>
    </>
  );
}

export default App;
