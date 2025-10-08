import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { Background, BoxControl, ColorsControl, Device, Label, Typography } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';

const Style = ({ attributes, setAttributes, device }) => {

  const { Styles = {}, column } = attributes || {};
  const { cardBody } = Styles;
  const { title, description, button } = cardBody;

  console.log(Styles?.card?.height)

  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('GridLayout', 'carousel-card')} initialOpen={false}>
        <PanelRow><Label className=''>Column</Label> <Device /> </PanelRow>
        <RangeControl
          max={12}
          min={1}
          value={column?.[device]}
          onChange={v => setAttributes({ column: updateData(column, v, device) })}
        />
        <UnitControl
          label={__("GridLayout Gap")}
          value={column?.gap}
          onChange={(v) => setAttributes({
            column: updateData(column, v, 'gap')
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Card', 'carousel-card')} initialOpen={false}>
        <Background
          label="Background-Color"
          value={Styles?.container?.bg}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'container', 'bg')
          })}
        />
        <UnitControl
          label={__("Height")}
          value={Styles?.container?.card?.height}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'container', 'card', 'height')
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Title', 'carousel-card')} initialOpen={false}>
        <Typography
          label='Typography'
          value={title?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'title', 'typo')
          })}
        />
        <ColorsControl
          label='Color'
          value={title?.colors}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'title', 'colors')
          })}
        />
        <PanelRow><Label>Padding</Label> <Device /> </PanelRow>
        <BoxControl
          values={cardBody?.title?.padding?.[device]}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'title', 'padding', device)
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Description', 'carousel-card')} initialOpen={false}>
        <Typography
          label='Typography'
          value={description?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'description', 'typo')
          })}
        />
        <ColorsControl
          label='Color'
          value={description?.colors}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'description', 'colors')
          })}
        />
        <PanelRow><Label>Padding</Label> <Device /> </PanelRow>
        <BoxControl
          values={cardBody?.description?.padding?.[device]}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'description', 'padding', device)
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Button', 'carousel-card')} initialOpen={false}>
        <Typography
          label='Typography'
          value={button?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'button', 'typo')
          })}
        />
        <ColorsControl
          label='Color'
          value={button?.colors}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'button', 'colors')
          })}
        />
        <PanelRow><Label>Padding</Label> <Device /> </PanelRow>
        <BoxControl
          values={cardBody?.button?.padding?.[device]}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardBody', 'button', 'padding', device)
          })}
        />
      </PanelBody>
    </>
  )
}

export default Style