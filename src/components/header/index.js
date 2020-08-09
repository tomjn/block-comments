import { __ } from '@wordpress/i18n';
import HeaderToolbar from '../header-toolbar';

function Header() {
	return (
		<div className="edit-post-header">
			<div className="edit-post-header__toolbar">
				<HeaderToolbar />
			</div>
		</div>
	);
}

export default Header;
