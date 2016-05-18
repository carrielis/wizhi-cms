<?php

if ( ! function_exists( 'wizhi_get_template_part' ) ) {
	/**
	 * 自定义模板加载器, 优先加载主题中的模板, 如果主题中的模板不存在, 就加载插件中的
	 *
	 * @param mixed  $slug 模板名称的前缀, 模板名称的后缀
	 * @param string $name (default: '')
	 *
	 * @package template
	 */

	function wizhi_get_template_part( $slug, $name = '' ) {
		$template = '';

		// 先查找主题中指定的模板yourtheme/slug-name.php 和 yourtheme/wzcms/slug-name.php
		if ( $name ) {
			$template = locate_template( [ "{$slug}-{$name}.php", "template-parts/{$slug}-{$name}.php" ] );
		}

		// 如果主题中的模板不存在, 获取插件中指定的模板 slug-name.php
		if ( ! $template && $name && file_exists( WIZHI_CMS . "template-parts/{$slug}-{$name}.php" ) ) {
			$template = WIZHI_CMS . "template-parts/{$slug}-{$name}.php";
		}

		// 如果模板文件还不存在, 获取主题中默认的模板, 查找 yourtheme/slug.php 和 yourtheme/template-parts/slug.php
		if ( ! $template ) {
			$template = locate_template( [ "{$slug}.php", "template-parts/{$slug}.php" ] );
		}

		// 允许第三方插件过滤模板文件
		$template = apply_filters( 'wz_get_template_part', $template, $slug, $name );

		if ( $template ) {
			load_template( $template, false );
		}
	}
}


if ( ! function_exists( 'wizhi_load_template_part' ) ) {

	/**
	 * 获取模板为变量, 而不是直接显示
	 *
	 * @param  string $slug 模板名称前缀
	 * @param string  $name 模板名称
	 *
	 * @return string
	 */
	function wizhi_load_template_part( $slug, $name = '' ) {
		ob_start();
		wizhi_get_template_part( $slug, $name );
		$html = ob_get_contents();
		ob_end_clean();

		return $html;
	}
}