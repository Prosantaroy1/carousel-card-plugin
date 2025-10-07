import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { withSelect } from "@wordpress/data";


const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} device={device} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <div>
          <h4>Editor Part</h4>
        </div>

      </div>
    </>
  );
};
// export default Edit;

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {

    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
