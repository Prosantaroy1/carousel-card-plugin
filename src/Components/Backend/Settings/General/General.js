import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import CarouselItemPanel from '../../CarouselItemPanel/CarouselItemPanel';


const General = ({ attributes, setAttributes }) => {
  const { theme, activeIndex } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Theme Switch", "carousel-card")}
        initialOpen={false}
      >
        <SelectControl
          labelPosition="left"
          value={theme}
          options={themeOptions}
          onChange={(v) => setAttributes(themeSwitch(v, attributes))}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Carousel Content", "carousel-card")}
        initialOpen={false}
      >
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="cardData"
          activeIndex={activeIndex}
          newItem={{
            "id": 1,
            "title": "Updated Modern Web Development",
            "image": "https://i.ibb.co.com/C5f4pHnN/Add-a-subheading-13.png",
            "description": "সর্বশেষ প্রযুক্তি দিয়ে দ্রুত, নিরাপদ ও রেসপনসিভ ওয়েবসাইট তৈরি।",
            "button": {
              "text": "learn More",
              "url": "#"
            }
          }}
          ItemSettings={CarouselItemPanel}
          design="sortable"
          title='title'
        />
      </PanelBody>
    </>
  );
};

export default General;
