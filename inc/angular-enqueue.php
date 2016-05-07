<?php

class angular_enqueue {
	
	function init() {
		
		add_action( 'wp_enqueue_scripts', array( $this, 'angular_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'angular_styles' ) );
		
	}
	
	function angular_scripts() {
		
		wp_enqueue_script( 'angular_core', get_template_directory_uri().'/build/js/angular.min.js', array( 'jquery' ), null, false );
		wp_enqueue_script( 'material-js', get_template_directory_uri().'/build/js/material.js', array( 'jquery' ), null, false );
		
		wp_enqueue_script( 'angular_theme', get_template_directory_uri().'/build/js/scripts.js', array( 'angular_core' ), null, false );
		//wp_enqueue_script( 'angular_theme', get_template_directory_uri().'/assets/js/angular-app.js', array( 'angular_core' ), null, false );

		$url = rest_get_url_prefix();
		// $url = 'http://austinthedeveloper.com/wp-json';
		wp_localize_script( 'angular_theme', 'ajaxInfo',
			array(
				
				'api_url'			 => $url . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')
				
			)
		);
		
	}
	
	function angular_styles() {
		
		wp_enqueue_style( 'angularStyles', get_template_directory_uri().'/build/css/styles.css', array(), null, 'all' );
		
	}
	
}	
	
	
?>