import '@wordpress/editor'; // This shouldn't be necessary
import '@wordpress/format-library';
import {
	Popover,
	SlotFillProvider,
	DropZoneProvider,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import InterfaceSkeleton from 'components/interface-skeleton';
import Notices from 'components/notices';
import Header from 'components/header';

function BlockEditor( { settings, blocks, updateBlocks } ) {
	return (
		<SlotFillProvider>
			<DropZoneProvider>
				<BlockEditorProvider
						value={ blocks }
						onInput={ updateBlocks }
						onChange={ updateBlocks }
						settings={ settings }
					>
					<InterfaceSkeleton
						header={ <Header /> }
						content={
							<Fragment>
								<Notices />
								<div className="block-editor">
									<div className="editor-styles-wrapper">
										<Popover.Slot name="block-toolbar" />
										<BlockEditorKeyboardShortcuts />
										<WritingFlow>
											<ObserveTyping>
												<BlockList className="block-editor__block-list" />
											</ObserveTyping>
										</WritingFlow>
									</div>
									<Popover.Slot />
								</div>
							</Fragment>
						}
					/>
				</BlockEditorProvider>
			</DropZoneProvider>
		</SlotFillProvider>
	);
}

export default BlockEditor;
