import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { withSelect } from "@wordpress/data";
import ThemeOne from '../Common/Themes/ThemeOne';
import ThemeTwo from '../Common/Themes/ThemeTwo';


const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} device={device} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <div className='carousel-card-wrapper'>
          <ThemeOne {...{ attributes, setAttributes }} />
          <ThemeTwo {...{ attributes, setAttributes }} />
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
