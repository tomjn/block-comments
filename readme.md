## Block Comments Prototype

This plugin swaps out the comment form for a block editor based input! It has no settings, and it does whitelist the blocks to a small subset of text based and embed blocks.

This repository also contains helper methods for swapping `input` and `textarea` elements with block based editors.

This will function with the built in block editor, but for optimal results please install and activate the Gutenberg editor.

This plugin doesn't provide a block sidebar panel.

### Known Issues

 - Theme styling can interrupt the block editor UX. Improvements to this plugins stylesheet, and to the Gutenberg stylesheets to avoid this are welcome :)
 - The classic editor plugin strips out and removes the block editor hooks and styles. As a result, the block editor looks broken and editor styles don't take effect properly. I would advise against using this plugin with the classic editor plugin for those reasons.
 - When first loaded, the default block adder button appears outside the input prior to selection, this should be fixed in Gutenberg proper