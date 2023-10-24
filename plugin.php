<?php
/*
Plugin Name: Protein Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/protein-calculator/
Description: Relying on certain statistics and recommendations, this free protein calculator predicts how much protein a person needs each day to be healthy.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_protein_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Protein Calculator by Calculator.iO";

function display_ci_protein_calculator(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/protein-calculator/" target="_blank"><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48"></a> Protein Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_protein_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_protein_calculator', 'display_ci_protein_calculator' );