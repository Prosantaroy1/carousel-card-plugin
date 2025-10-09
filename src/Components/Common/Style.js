//import { deskBreakpoint, mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS'

const Style = ({ attributes, id, device }) => {

	const { Styles = {} } = attributes || {};
	const { cardBody, container } = Styles;

	const { title, description, button } = cardBody;

	const mainSl = `#${id}`;
	const sectionWrapper = `${mainSl} .cardThemeWrapper`
	const carouselSectionSl = `${sectionWrapper} .carousel-card-section`
	const cardRowSl = `${carouselSectionSl} .card-row`
	const cardSl = `${cardRowSl} .card`
	//const imageSl = `${cardSl} .card-image`
	const cardContentSl = `${cardSl} .card-content`
	const TitleSl = `${cardContentSl} .title`
	const DescriptionSl = `${cardContentSl} .description`
	const btnSl = `${cardContentSl} .btn`



	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS("", cardBody?.title?.typo).googleFontLink}  
		${getTypoCSS("", cardBody?.description?.typo).googleFontLink}  
		${getTypoCSS("", cardBody?.button?.typo).googleFontLink}  

		${getTypoCSS(TitleSl, cardBody?.title?.typo).styles}  
		${getTypoCSS(DescriptionSl, cardBody?.description?.typo).styles}  
		${getTypoCSS(btnSl, cardBody?.button?.typo).styles}  

		${cardSl}{
		  ${getBackgroundCSS(container?.bg)}
		  height: ${container?.card?.height}
		}

		${TitleSl}{
		   ${getColorsCSS(title?.colors)}
		   padding: ${getBoxCSS(title?.padding?.[device])};
		}
		${DescriptionSl}{
		   ${getColorsCSS(description?.colors)}
		   padding: ${getBoxCSS(description?.padding?.[device])};
		}
		${btnSl}{
		   ${getColorsCSS(button?.colors)}
		   padding: ${getBoxCSS(button?.padding?.[device])};
		}




	`}} />;
}
export default Style;


