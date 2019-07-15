const {
	BlockEditorProvider,
	BlockList,
	WritingFlow,
	ObserveTyping,
} = wp.blockEditor;
const {
	Popover,
	SlotFillProvider
} = wp.components;
const { serialize, parse } = wp.blocks;

function Editor ( { startingContent, inputName }) {
	const [ blocks, updateBlocks ] = React.useState( parse(startingContent) );
	return <React.Fragment>
		<BlockEditorProvider value={ blocks } onInput={ updateBlocks } onChange={ updateBlocks }>
			<SlotFillProvider>
				<WritingFlow>
					<ObserveTyping>
						<div className="editor-styles-wrapper">
							<BlockList />
						</div>
					</ObserveTyping>
				</WritingFlow>
				<Popover.Slot />
			</SlotFillProvider>
		</BlockEditorProvider>
		<input type="hidden" name={inputName} value={serialize(blocks)}/>
	</React.Fragment>
	;
}

export default Editor;

