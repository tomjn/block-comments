import { __, _x } from '@wordpress/i18n';
import {
	Inserter,
	BlockToolbar,
	NavigableToolbar,
	BlockNavigationDropdown,
} from '@wordpress/block-editor';
import {
	EditorHistoryRedo,
	EditorHistoryUndo,
} from '@wordpress/editor';

function HeaderToolbar() {
	const showInserter = true;
	const displayBlockToolbar = true;
	const toolbarAriaLabel = displayBlockToolbar
		? /* translators: accessibility text for the editor toolbar when Top Toolbar is on */
		  __( 'Document and block tools' )
		: /* translators: accessibility text for the editor toolbar when Top Toolbar is off */
		  __( 'Document tools' );

	return (
		<NavigableToolbar
			className="edit-post-header-toolbar"
			aria-label={ toolbarAriaLabel }
		>
			<Inserter
				disabled={ ! showInserter }
				position="bottom right"
				showInserterHelpPanel
			/>
			<EditorHistoryUndo />
			<EditorHistoryRedo />
			<BlockNavigationDropdown isDisabled={ false } />
			<div className="edit-post-header-toolbar__block-toolbar">
				<BlockToolbar />
			</div>
		</NavigableToolbar>
	);
}

export default HeaderToolbar;
