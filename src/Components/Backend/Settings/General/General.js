import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";


const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;



  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Purpose", "b-blocks")}
      initialOpen={false}
    >
      <SelectControl
        label={__("Purpose", "b-blocks")}
        labelPosition="left"
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) =>
          setAttributes({ purposeType: updateData(purposeType, v) })
        }
      />





    </PanelBody>
  );
};

export default General;
