<?php
/**
 * Plugin Name: Block Comments
 * Description: Replaces the comment form with a block editor
 * Author: Tom J Nowell
 * Version: 1.1
 */


add_action( 'wp_enqueue_scripts', 'tomjn_block_assets' );
add_action( 'admin_enqueue_scripts', 'tomjn_block_assets' );
/**
 * Register our assets and do any work needed to make the block editor work
 *
 * @return void
 */
function tomjn_block_assets() {

	/*if ( !is_singular() || !comments_open() ) {
		return;
	}*/

	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'tomjn_gb_js',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_script( 'wp-format-library' );
	wp_enqueue_style( 'wp-format-library' );

	wp_enqueue_style(
		'tomjn_gb_css',
		plugins_url( 'editor.css', __FILE__ ),
		[
			'media',
			'l10n',
			'buttons',
			'wp-editor',
			'wp-edit-blocks',
		],
		filemtime( __DIR__.'/editor.css'),
		'all'
	);

	if ( !is_admin() ) {
		global $wp_scripts;
		// TEMPORARY: Core does not (yet) provide persistence migration from the
		// introduction of the block editor and still calls the data plugins.
		// We unset the existing inline scripts first.
		//
		// If we don't do this, any core blocks will break on the frontend when added
		/*$wp_scripts->registered['wp-data']->extra['after'] = array();
		wp_add_inline_script(
			'wp-data',
			implode(
				"\n",
				array(
					'( function() {',
					'   var userId = ' . intval( get_current_user_ID() ) . ';',
					'   var storageKey = "WP_DATA_USER_" + userId;',
					'   wp.data',
					'       .use( wp.data.plugins.persistence, { storageKey: storageKey } );',
					'   wp.data.plugins.persistence.__unstableMigrate( { storageKey: storageKey } );',
					'   wp.data.use( wp.data.plugins.controls );',
					'} )();',
				)
			)
		);*/
	}
}

/**
 * Creates a basic Block Editor instance with an associated input for form handling
 *
 * @param  string $content The initial content
 * @param  string $name    The name of the input
 * @return void
 */
function wp_block_editor( $content, $name ) {
	wp_enqueue_script('tomjn_gb_js');
	wp_enqueue_style('tomjn_gb_css');
	?>
	<input name="<?php echo esc_attr( $name ); ?>" id="<?php echo esc_attr( $name ); ?>" type="hidden" />
	<script>
	document.addEventListener('DOMContentLoaded', function(event) {
		tomjn_wp_editor(
			'<?php echo esc_js( $name ); ?>',
			'<?php echo esc_js( $name ); ?>',
			'<?php echo esc_js( $content ); ?>'
		);
	});
	</script>
	<?php
}
