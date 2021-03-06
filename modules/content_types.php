<?php

/**
 * 为每个文章类型添加存档设置
 *
 * @param $type
 */
add_action( 'init', 'add_type_options' );
function add_type_options( $type ) {

	if ( function_exists( 'fm_register_submenu_page' ) ) {
		fm_register_submenu_page( $type . '_archive_settings', 'edit.php?post_type=' . $type, __( 'Archive Settings', 'wizhi' ) );
	}

	add_action( 'fm_submenu_' . $type . '_archive_settings', function ( $type ) {

		$fm = new Fieldmanager_Group( [
			'name'     => $type,
			'children' => [
                "title"       => new Fieldmanager_TextField(__('Archive Title', 'wizhi')),
				"banner"      => new Fieldmanager_Media( __( 'Cover image', 'wizhi' ) ),
				"template"    => new Fieldmanager_Select( __( 'Archive Template', 'wizhi' ), [
					'options' => wizhi_get_loop_template( 'wizhi/archive' ),
				] ),
				"per_page"    => new Fieldmanager_Textfield( __( 'Posts Per Page', 'wizhi' ) ),
				"description" => new Fieldmanager_RichTextArea( __( 'Archive Description', 'wizhi' ) ),
			],
		] );

		$fm->activate_submenu_page();

	} );

}


/**
 * 获取文章类型存档设置
 *
 * @param string $type 文章类型别名
 *
 * @return mixed
 */
function get_archive_option( $type ) {
	return get_option( $type . "_archive_settings" );
}


/**
 * 添加默认的自定义文章类型和分类法
 */
function add_default_content_type() {

	$types              = wizhi_post_types();
	$icons              = wizhi_post_types_icon();
	$enabled_post_types = get_option( 'wizhi_cms_settings', [] );

	if ( count( $enabled_post_types ) > 0 ) {
		// 添加默认的文章类型和分类方法
		foreach ( $enabled_post_types[ 'enabled_post_types' ] as $slug ) {
			wizhi_create_types( $slug, $types[ $slug ], [ 'title', 'editor', 'thumbnail' ], true, $icons[ $slug ] );
			wizhi_create_taxs( $slug . 'cat', $slug, $types[ $slug ] . __( 'Category', 'wizhi' ), true );

			add_type_options( $slug );
		}
	}

}

add_action( 'init', 'add_default_content_type' );