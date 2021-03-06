<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html <?php language_attributes(); ?> ng-app="wpAngularTheme">
<head>
  	<meta charset="<?php bloginfo( 'charset' ); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
  	<title><?php bloginfo('name'); ?></title>
  	<meta name="author" content="Austin Stewart">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/build/images/favicon.ico">
  	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/build/images/favicon.png">
   	<?php wp_head();?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />	
</head>
<body layout="row" <?php body_class(); ?>>
  <md-sidenav class="md-sidenav-left main-sidenav" md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')" layout="column">
    <header-menu layout="column" flex div-hover></header-menu>
  </md-sidenav>

  <div flex layout="column">
    <menu-toggle flex="none" hide-gt-sm></menu-toggle>
    <md-content class="content-container" flex>
  