import TomjnEditor from './editor';
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

domReady( function () {
	tomjn_wp_editor( "comment", "comment" );
} );

function tomjn_wp_editor_el( original, id, inputName, content, inputClass ) {
	// make the content and inputName parameters optional
	if ( id === undefined ) {
		id = original.id;
	}
	if ( inputName === undefined ) {
		inputName = original.name;
	}
	if ( content === undefined ) {
		content = original.value;
	}
	if ( inputClass === undefined ) {
		inputClass = original.className;
	}

	// Now we can create and swap out the element, this is to give React a nice div node to work with
	const element = document.createElement( 'div' );
	element.setAttribute(
		'class',
		'tomjn_editor_container block-editor gutenberg__editor block-editor__container wp-embed-responsive'
	);
	element.setAttribute( 'id', id );
	original.replaceWith( element );

	// tada!
	render(
		<TomjnEditor
			id={ id }
			startingContent={ content }
			inputName={ inputName }
			inputClass={ inputClass }
		/>,
		element
	);
}

/**
 * Takes a target input element via ID and turns it into a block editor
 *
 * @param  {string} id        The html ID of the input to be transformed
 * @param  {string} inputName The input name to use for when the form gets submitted
 * @param  {string} content   Starting content to fill the editor with, leave blank to use the value of the target element
 * @return {void}             This function returns no values
 */
function tomjn_wp_editor( id, inputName, content ) {
	// find our element and swap it out for a div container
	const original = document.getElementById( id );
	if ( original ) {
		window.tomjn_wp_editor_el( original, id, inputName, content );
	}
}

window.tomjn_wp_editor = tomjn_wp_editor;
window.tomjn_wp_editor_el = tomjn_wp_editor_el;
