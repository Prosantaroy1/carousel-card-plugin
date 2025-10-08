import { TextareaControl, TextControl } from '@wordpress/components';
import { updateData } from '../../../../../bpl-tools/utils/functions';
import { InlineMediaUpload } from '../../../../../bpl-tools/Components';

const CarouselItemPanel = ({ attributes, setAttributes, index }) => {

    const { cardData = [] } = attributes || {};
    const { title, description, button } = cardData[index];
    const { text } = button;

    return (
        <div>
            <InlineMediaUpload
                label="Image"
                className="m20"
                value={cardData[index].image}

                onChange={(v) => {
                    setAttributes({
                        cardData: updateData(cardData, v, index, 'image')
                    })
                }}
            />
            <TextControl
                label='Title'
                value={title}
                onChange={(v) => setAttributes({
                    cardData: updateData(cardData, v, index, 'title')
                })}
                __nextHasNoMarginBottom={true}
            />
            <TextareaControl
                label='Description'
                value={description}
                onChange={(v) => setAttributes({
                    cardData: updateData(cardData, v, index, 'description')
                })}
                __nextHasNoMarginBottom={true}
            />
            <TextControl
                label='Button Text'
                value={text}
                onChange={(v) => setAttributes({
                    cardData: updateData(cardData, v, index, 'button', 'text')
                })}
                __nextHasNoMarginBottom={true}
            />
        </div>
    );
};

export default CarouselItemPanel;