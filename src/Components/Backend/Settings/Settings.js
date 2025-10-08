
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { TabPanel, } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';


const Settings = ({ attributes, setAttributes, device }) => {

	return <>
		<InspectorControls>

			<TabPanel className='bPlTabPanel wp-block-ccd-carousel-card' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General {...{ attributes, setAttributes, device }} />}

						{'style' === tab.name && <Style  {...{ attributes, setAttributes }} device={device} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

		</BlockControls>
	</>;
};
export default Settings;