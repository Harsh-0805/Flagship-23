import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carroussel from "./carousel";
// import  Carousel  from "./Carousel";S

import { styles } from "../styles";

function Glimpses() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  return (
    <>
    <div className="items-center text-center">
          <h2 className={styles.sectionHeadText}>
            GLIMPSES
          </h2>
        </div>
    <div className="flex justify-center items-center h-full px-20 font-sans">
      <Carroussel
        cards={cards}
        height="500px"
        width="100%"
        margin="20px auto"
        padding="50px 20px"
        offset={2}
        showArrows={true}
      />
    </div>
    </>
  );
}

export default Glimpses;
