import { __ } from '@wordpress/i18n';
import { createSlotFill, DropdownMenu, Panel } from '@wordpress/components';
import {
	BlockInspector,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import HeaderToolbar from '../header-toolbar';
import Sidebar from 'components/sidebar';

function Header() {
	return (
		<div className="edit-post-header">
			<div className="edit-post-header__toolbar">
				<HeaderToolbar />
			</div>
			<div className="edit-post-header__settings">
				<DropdownMenu label="Block Inspector">
					{ ( { onClose } ) => (
						<Fragment>
							<Sidebar/>
							<Sidebar.InspectorFill>
								<BlockInspector />
							</Sidebar.InspectorFill>
						</Fragment>
					) }
				</DropdownMenu>
			</div>
		</div>
	);
}

export default Header;
