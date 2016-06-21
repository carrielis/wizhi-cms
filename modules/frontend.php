<?php

// 获取插件设置值
$is_enable_static = get_option( 'is_enable_static' );
$is_enable_font   = get_option( 'is_enable_font' );


// 加载 FontAwesome
if ( $is_enable_font ) {
	add_action( 'wp_enqueue_scripts', 'wizhi_ui_font' );
}


if ( $is_enable_static ) {
	//加载 CSS 和 JS
	if ( ! is_admin() ) {
		add_action( 'wp_enqueue_scripts', 'wizhi_ui_scripts' );
		add_action( 'wp_enqueue_scripts', 'wizhi_ui_style' );
	}
}


/**
 * 加载CSS
 *
 * @package front
 */
function wizhi_ui_style() {
	wp_register_style( 'wizhi-style', plugins_url( '../front/dist/styles/main.css', __FILE__ ) );
	wp_enqueue_style( 'wizhi-style' );
}


/**
 * 加载 FontAwesome 子图图标
 *
 * @package front
 */
function wizhi_ui_font() {
	wp_register_style( 'wizhi-font', plugins_url( '../front/dist/styles/font.css', __FILE__ ) );
	wp_enqueue_style( 'wizhi-font' );
}


/**
 * 加载 JavaScript
 *
 * @package front
 */
function wizhi_ui_scripts() {
	wp_register_script( 'wizhi-script', plugins_url( '../front/dist/scripts/main.js', __FILE__ ), [ 'jquery' ], '1.1', true );
	wp_enqueue_script( 'wizhi-script' );
}


