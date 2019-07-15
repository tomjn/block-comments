const {
	BlockEditorProvider,
	BlockList,
	WritingFlow,
	ObserveTyping,
} = wp.blockEditor;
const { Popover } = wp.components;
const { serialize, parse } = wp.blocks;

function Editor ( { startingContent, inputName }) {
	const [ blocks, updateBlocks ] = React.useState( parse(startingContent) );
	return <React.Fragment>
		<BlockEditorProvider value={ blocks } onInput={ updateBlocks } onChange={ updateBlocks }>
			<WritingFlow>
				<ObserveTyping>
					<div className="editor-styles-wrapper">
						<BlockList />
					</div>
				</ObserveTyping>
			</WritingFlow>
			<Popover.Slot />
		</BlockEditorProvider>
		<input type="hidden" name={inputName} value={serialize(blocks)}/>
	</React.Fragment>
	;
}

export default Editor;

