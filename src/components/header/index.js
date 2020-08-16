import { __ } from '@wordpress/i18n';
import { ToolbarButton, Popover } from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import HeaderToolbar from '../header-toolbar';
import Sidebar from 'components/sidebar';

// isPressed={ isVisible }
function Header() {
	const [ isVisible, setVisible ] = useState( false );
	const toggleInspector = () => {
		setVisible( !isVisible );
    };
	return (
		<div className="edit-post-header">
			<div className="edit-post-header__toolbar">
				<HeaderToolbar />
			</div>
			<div className="edit-post-header__settings">
				<ToolbarButton icon="admin-generic" onClick={ toggleInspector }>
					{ isVisible && (
						<Popover onFocusOutside={ toggleInspector } >
							<Fragment>
								<Sidebar/>
							</Fragment>
						</Popover>
					) }
				</ToolbarButton>
			</div>
		</div>
	);
}

export default Header;
