import { useEffect, useState, Fragment } from '@wordpress/element';
import { serialize, parse } from '@wordpress/blocks';
import { getBlockTypes, unregisterBlockType } from '@wordpress/blocks';
import { registerCoreBlocks } from '@wordpress/block-library';

import BlockEditor from 'components/block-editor';

function TomjnEditor( { startingContent, id, inputName, inputClass } ) {
	useEffect( () => {
		registerCoreBlocks();
		const allowedBlocks = [
			'core/paragraph',
			'core/preformatted',
			'core/code',
			'core/quote',
			'core/list',
			'core/verse',
			'core/freeform',
			'core/spacer',
			'core/subhead',
			'core/pullquote',
			'core/heading',
			'core/separator',
			/*'core/image',
			'core/text-columns',
			'core/embed',
			'core-embed/youtube',
			'core-embed/twitter',
			'core-embed/vimeo'*/
		];
		getBlockTypes().forEach( function ( blockType ) {
			if ( allowedBlocks.indexOf( blockType.name ) === -1 ) {
				unregisterBlockType( blockType.name );
			}
		} );
	}, [] );
	const [ blocks, updateBlocks ] = useState( parse( startingContent ) );
	const settings = {
		hasFixedToolbar: true
	};

	return (
		<Fragment>
			<BlockEditor
				settings={ settings }
				blocks={ blocks }
				updateBlocks={ ( newblocks ) => updateBlocks( newblocks ) }
			/>
			<input
				type="hidden"
				id={ id }
				name={ inputName }
				className={ inputClass }
				value={ serialize( blocks ) }
			/>
		</Fragment>
	);
}

export default TomjnEditor;
