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
	return <div className="editor-styles-wrapper">
		<BlockEditorProvider value={ blocks } onInput={ updateBlocks } onChange={ updateBlocks }>
			<WritingFlow>
				<ObserveTyping>
					<BlockList />
				</ObserveTyping>
			</WritingFlow>
			<Popover.Slot />
		</BlockEditorProvider>
		<input type="hidden" name={inputName} value={serialize(blocks)}/>
	</div>;
}

export default Editor;

