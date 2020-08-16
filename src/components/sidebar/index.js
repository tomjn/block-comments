import { createSlotFill, Panel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	BlockInspector,
} from '@wordpress/block-editor';

function Sidebar() {
	return (
		<div
			className="be-sidebar"
			role="region"
			aria-label={ __( 'Editor advanced settings.' ) }
			tabIndex="-1"
		>
			<BlockInspector />
		</div>
	);
}

export default Sidebar;
