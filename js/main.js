import Editor from './editor';

// register the core blocks, whitelist them, then convert the comment forms
document.addEventListener('DOMContentLoaded', (event) => {
	wp.blockLibrary.registerCoreBlocks();
	var allowedBlocks = [
	    'core/paragraph',
	    'core/image',
	    'core/verse',
	    'core/freeform',
	    'core/spacer',
	    'core/subhead',
	    'core/pullquote',
	    'core/preformatted',
	    'core/freeform',
	    'core/code',
	    'core/quote',
	    'core/list',
	    'core/heading',
	    'core/separator',
	    'core/text-columns',
	    'core/embed',
	    'core-embed/youtube',
	    'core-embed/twitter',
	    'core-embed/vimeo'
	];

	wp.blocks.getBlockTypes().forEach( function( blockType ) {
	    if ( allowedBlocks.indexOf( blockType.name ) === -1 ) {
	        wp.blocks.unregisterBlockType( blockType.name );
	    }
	});
	tomjn_wp_editor( "comment", "comment" );
});

/**
 * Takes a target input element via ID and turns it into a block editor
 * 
 * @param  {string} id        The html ID of the input to be transformed
 * @param  {string} inputName The input name to use for when the form gets submitted
 * @param  {string} content   Starting content to fill the editor with, leave blank to use the value of the target element
 * @return {void}             This function returns no values
 */
window.tomjn_wp_editor = function( id, inputName, content ) {
	// find our element and swap it out for a div container
	const original = document.getElementById( id );
	
	// make the content parameter optional, if it's not present we can use the value of the target element
	if ( content == undefined ) {
		content = original.value;
	}

	// Now we can create and swap out the element, this is to give React a nice div node to work with
	const element = document.createElement( 'div' );
	element.setAttribute( 'class', 'tomjn_editor_container block-editor gutenberg__editor block-editor__container wp-embed-responsive' );
	element.setAttribute( 'id', id );
	original.replaceWith(element);

	// tada!
	ReactDOM.render(
	  <Editor startingContent={content} inputName={inputName} />,
	  element
	);
}

