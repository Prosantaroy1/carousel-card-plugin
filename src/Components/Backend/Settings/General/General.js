import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch, updateData } from "../../../../utils/functions";


const General = ({ attributes, setAttributes }) => {
  const { theme } = attributes;



  return (
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
  );
};

export default General;
