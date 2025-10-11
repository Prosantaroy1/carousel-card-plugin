
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { TabPanel, } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import AboutProModal from '../../../../../bpl-tools/ProControls/AboutProModal/AboutProModal';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { useState } from 'react';


const Settings = ({ attributes, setAttributes, device, isPremium }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const premiumProps = {
		isPremium,
		setIsModalOpen
	}

	return <>
		<InspectorControls>

			<TabPanel className='bPlTabPanel wp-block-ccd-carousel-card' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General {...{ attributes, setAttributes, device, }} />}

						{'style' === tab.name && <Style  {...{ attributes, setAttributes, premiumProps }} device={device} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<AboutProModal link={'https://tanin-rahman-portfolio.netlify.app'} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}> lorasdfjaslkdjflkasdjlkfa </AboutProModal>


		<BlockControls>

		</BlockControls>

	</>;
};
export default Settings;
