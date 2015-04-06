/**
 * jQuery File:     tools.js
 * Type:            tools
 * Author:          Chris Humboldt
 * Last Edited:     5 April 2015
 */


// Table of contents
// ---------------------------------------------------------------------------------------
// Basic checks
// Dates
// Development
// DOM
// Forms
// Objects
// Strings
// URL
// Webplate


// Basic checks
// ---------------------------------------------------------------------------------------
var web_exists						= function($element)
{
	return (($element) && ($element.length > 0));
};

var web_has_white_space				= function($check)
{
	return /\s/.test($check);
};

var web_is_color					= function($color)
{
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test($color);
};

var web_is_date						= function($date)
{
	return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test($date);
};

var web_is_email					= function($email)
{
	return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test($email);
};

var web_is_ext						= function($file, $ar_allowed_types)
{
	var $allowed_types              = $ar_allowed_types || ['png', 'jpg', 'jpeg', 'gif', 'tif', 'tiff', 'bmp', 'doc', 'docx', 'xls', 'xlsx', 'pdf', 'txt', 'csv'];

	var $file_ext                   = $file.split('.').pop().toLowerCase();

	return $allowed_types[$file_ext];
};

var web_is_full_integer				= function($int)
{
	return /^[0-9]+$/.test($int);
};

var web_is_image					= function($file, $ar_allowed_types)
{
	var $allowed_types              = $ar_allowed_types || ['jpg', 'jpeg', 'gif', 'tif', 'tiff', 'bmp', 'png'];

	var $file_ext                   = $file.split('.').pop().toLowerCase();

	return (jQuery.inArray($file_ext, $allowed_types) != -1);
};

var web_is_integer 					= function($int)
{
	return /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test($int);
};

var web_is_password					= function($password)
{
	return /^[A-Za-z0-9]{6,}$/.test($password);
};


// Dates
// ---------------------------------------------------------------------------------------
var web_crt_db_date					= function()
{
	var $now                        = new Date();
	return $now.getFullYear() + '-' + ('0' + ($now.getMonth() + 1)).slice(-2) + '-' + ('0' + $now.getDate()).slice(-2);
};


// Development
// ---------------------------------------------------------------------------------------
var web_class_add 					= function($selector, $class) 
{
	var $crt_class 					= $selector.getAttribute('class');

	// Set the class
	$selector.setAttribute('class', $crt_class + ' ' + $class);
};

var web_class_remove				= function($selector, $class) 
{
	// Remove the class
	var $new_class 					= $selector.className.replace($class + ' ', '');
	$new_class 						= $new_class.replace(' ' + $class, '');
	$new_class 						= $new_class.replace($class, '');
	$selector.className 			= $new_class;
};

var web_has_class 					= function($element, $class)
{
    return (' ' + $element.className + ' ').indexOf(' ' + $class + ' ') > -1;
};

var web_id_add 						= function($selector, $id) 
{
	// Set the id
	$selector.setAttribute('id', $id);
};

var web_log							= function($text)
{
	if(window.console)
	{
		console.log($text);
	}
};


// // DOM
// // ---------------------------------------------------------------------------------------
// web_square						= function($selector, $multiplier)
// {
// 	// Variables
// 	if(typeof($multiplier) === 'undefined')
// 	{
// 		$multiplier                 = 1;
// 	}

// 	// 
// 	$($selector).each(function()
// 	{
// 		// Width
// 		var $square_dim				= Math.floor($(this).width() * $multiplier);

// 		// Set the dimensions
// 		$(this).height($square_dim);
// 	});
// };

// web_wallpaper						= function($selector) 
// {
// 	$($selector).each(function()
// 	{
// 		// Image
// 		var $this_wallpaper         = $(this);
// 		var $wallpaper_image        = $this_wallpaper.data('wallpaper');

// 		// Set the bacgkround image
// 		if ($wallpaper_image != undefined)
// 		{
// 			$this_wallpaper.addClass('wallpaper');
// 			$this_wallpaper.css(
// 			{
// 				'background-image': 'url(' + $wallpaper_image + ')'
// 			});
// 		}
// 	});
// };


// // Forms
// // ---------------------------------------------------------------------------------------
// web_input_mirror					= function($input, $output)
// {
// 	$($selector).keyup(function()
// 	{
// 		var $ref_input              = $(this).val();
// 		var $ref_value              = $ref_input.replace(/ /g,"_").toLowerCase();

// 		// Output the mirror
// 		$($output).text($ref_value);
// 	});
// };

// web_lock_submit					= function($element)
// {
// 	$($element).live('keypress', function($e)
// 	{
// 		if($e.keyCode == 13)
// 		{     
// 			return false;
// 		}
// 	});
// };


// // Objects
// // ---------------------------------------------------------------------------------------
// // As per Leon Revill
// // URL: http://www.revillweb.com/tutorials/super-useful-javascript-functions/
// web_search_objects				= function($obj, $key, $val)
// {
// 	var $objects 					= [];

// 	for(var $i in $obj)
// 	{
// 		if(typeof $obj[$i] == 'object')
// 		{
// 			objects = objects.concat(searchObjects($obj[$i], $key, $val));
// 		} 
// 		else if($i == $key && $obj[$key] == $val)
// 		{
// 			objects.push($obj);
// 		}
// 	}

// 	return objects;
// };


// Strings
// ---------------------------------------------------------------------------------------
var web_get_ext					= function($file)
{
	return $file.split('.').pop().toLowerCase();
};

var web_random_string			= function($string_length)
{
	var $chars					= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

	var $len 					= $string_length || 5;
	var $random_string			= '';

	for(var i = 0; i < $len; i++)
	{
		$r_num 					= Math.floor(Math.random() * $chars.length);
		$random_string 			+= $chars[$r_num];
	}

	return $random_string;
};

var web_uc_all					= function($string)
{
	return $string.toUpperCase();
};

var web_uc_first				= function($string)
{
	return $string.charAt(0).toUpperCase() + $string.slice(1);
};


// URL
// ---------------------------------------------------------------------------------------
var web_get_url 					= function()
{
	var $window_location            = window.location;
	var $full_path                  = $window_location.href;
	var $ar_path                    = $window_location.href.split('/');
	var $hash_split                 = $window_location.href.split('#');
	var $protocol                   = $ar_path[0];
	var $host                       = $ar_path[2];
	var $base_url                   = $protocol + '//' + $host;
	var $hash_url                   = $window_location.hash.substring(1);
	var $site_path                  = $hash_split[0];
	var $ar_return                  = [];
	
	// Set the return array
	$ar_return['hash']              = $hash_url;
	$ar_return['host']              = $host;
	$ar_return['base_url']          = $base_url;
	$ar_return['site_path']         = $site_path;
	$ar_return['full_path']         = $full_path;
	
	// Return
	return $ar_return;
}


// Webplate
// ---------------------------------------------------------------------------------------
// Variables
var $body_element 					= document.getElementsByTagName('body')[0];
var $html_element 					= document.getElementsByTagName('html')[0];
var $nav_end_position               = 0;
var $navigation_width;
var $nav_track_position;
var $navigation 					= document.getElementById('navigation');
var $navigation_trigger 			= document.getElementById('navigation-trigger');

// // Hash link
// web_hash_link 					= function()
// {
// 	// Based on: http://css-tricks.com/snippets/jquery/smooth-scrolling/
// 	$('a[href*=#]:not([href=#])').click(function()
// 	{
// 		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
// 		{
// 			var $target             = $(this.hash);
// 			$target                 = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');
// 			var $selector           = $target.selector;
// 			var $scroll_top;

// 			if($target.length)
// 			{
// 				$scroll_top         = Math.ceil($($selector).offset().top);
// 				$(window).scrollTop($scroll_top);
// 				window.location     = $selector;

// 				return false;
// 			}
// 		}
// 	});
// };

// web_hash_link_setup 				= function()
// {
// 	setTimeout(function()
// 	{
// 		var $crt_url                = web_get_url();
// 		var $crt_hash               = $crt_url['hash'];
// 		var $scroll_top;

// 		if($crt_hash.length)
// 		{
// 			$scroll_top             = Math.ceil($('#' + $crt_hash).offset().top);
// 			$(window).scrollTop($scroll_top);
// 		}
// 	}, 
// 	10);
// };

var web_nav_hide					= function()
{
	var $web_navigation 			= document.getElementById('web-navigation');

	Velocity($web_navigation,
	{ 
		left 						: 0
	}, 
	{
		duration					: 200,
		easing						: 'ease-out',
		complete					: function()
		{
			web_class_remove($html_element, 'web-nav-shown');
			web_class_add($html_element, 'web-nav-hidden');
		}
	});
	
	// Set nav end position
	$nav_end_position				= 0;

	// Hide overlay
	web_overlay_hide();
};

var web_nav_show					= function()
{
	// Variables
	var $web_navigation 			= document.getElementById('web-navigation');
	var $navigation_width 			= $web_navigation.offsetWidth;

	Velocity($web_navigation,
	{ 
		left                    	: $navigation_width
	}, 
	{
		duration               		: 200,
		easing                  	: 'ease-out',
		complete                	: function()
		{
			web_class_add($html_element, 'web-nav-shown');
			web_class_remove($html_element, 'web-nav-hidden');
		}
	});

	// Set nav end position
	$nav_end_position               = 260;

	// Show overlay
	web_overlay_show();
};

var web_navigation					= function()
{
	// Check
	if($navigation !== null)
	{
		// Variables
		var $navigation_clone 			= $navigation.cloneNode(true);

		// Duplicate navigation & change class name
		$navigation_clone.setAttribute('id', 'web-navigation');
		$body_element.appendChild($navigation_clone);

		// On click
		$navigation_trigger.onclick 	= function($ev)
		{
			$ev.preventDefault();

			// Check state
			if(web_has_class($html_element, 'web-nav-shown'))
			{
				web_nav_hide();
			}
			else
			{
				web_nav_show();
			}
		};
		
		// Close nav again
		var $web_overlay 				= document.getElementById('web-overlay');
		var $web_navigation 			= document.getElementById('web-navigation');
		var $web_navigation_links 		= $web_navigation.getElementsByTagName('a');

		$web_overlay.onclick 			= function()
		{
			web_nav_hide();
		};

		for($i = 0; $i < $web_navigation_links.length; $i++)
		{
			$web_navigation_links[$i].onclick 		= function($ev)
			{
				web_nav_hide();
			};
		};
	}
};

var web_overlay_hide 					= function()
{
	var $web_overlay 					= document.getElementById('web-overlay');

	Velocity($web_overlay,
	{
		opacity         : 0
	}, 
	{ 
		display         : 'none',
		duration        : 200
	});
};

var web_overlay_show					= function()
{
	var $web_overlay 					= document.getElementById('web-overlay');

	Velocity($web_overlay,
	{
		opacity         : 0.4
	}, 
	{ 
		display         : 'block',
		duration        : 200
	});
};

// web_scroll						= function()
// {
// 	// Some variables
// 	var $last_scroll                = 0;

// 	// Setup
// 	$('html').addClass('web-scroll-none');

// 	// On scroll or drag event
// 	if(Modernizr.touch)
// 	{
// 		$(window).on('drag', function($e)
// 		{
// 			if($e.orientation == 'vertical')
// 			{
// 				// Remove scroll none
// 				if($('html').hasClass('web-scroll-none') == true)
// 				{
// 					$('html').removeClass('web-scroll-none');
// 				}

// 				// Check direction and apply class
// 				if($e.direction == -1)
// 				{
// 					if($('html').hasClass('web-scroll-down') == false)
// 					{
// 						$('html').addClass('web-scroll-down');
// 						$('html').removeClass('web-scroll-up');
// 					}
// 				}
// 				else
// 				{
// 					if($('html').hasClass('web-scroll-down') == true)
// 					{
// 						$('html').removeClass('web-scroll-down');
// 						$('html').addClass('web-scroll-up');
// 					}
// 				}
// 			}
// 		});
// 	}
// 	else
// 	{
// 		$(window).scroll(function($e)
// 		{
// 			// Remove scroll nonw class
// 			if($('html').hasClass('web-scroll-none') == true)
// 			{
// 				$('html').removeClass('web-scroll-none');
// 			}

// 			// Sets the current scroll position
// 			var $scroll_top         = $(this).scrollTop();

// 			// Determine direction of scroll
// 			if($scroll_top > $last_scroll)
// 			{
// 				if($('html').hasClass('web-scroll-down') == false)
// 				{
// 					$('html').addClass('web-scroll-down');
// 					$('html').removeClass('web-scroll-up');
// 				}
// 			} 
// 			else 
// 			{
// 				if($('html').hasClass('web-scroll-down') == true)
// 				{
// 					$('html').removeClass('web-scroll-down');
// 					$('html').addClass('web-scroll-up');
// 				}
// 			}

// 			// Updates scroll position
// 			$last_scroll            = $scroll_top;
// 		});
// 	}
// }

// web_scroll_to 					= function()
// {
// 	$('.scroll-to').on('click', function($ev)
// 	{
// 		$ev.preventDefault();

// 		// Variables
// 		var $scroll_to 			= $(this).data('scroll-to');
// 		var $scroll_element		= $('[data-scroll-id='+ $scroll_to +']');

// 		// Scroll
// 		if($(window).width() < 700)
// 		{
// 			$scroll_element.velocity("scroll", { duration: 1200, easing: "easeOutCubic", offset: -75 });
// 		}
// 		else
// 		{
// 			$scroll_element.velocity("scroll", { duration: 1200, easing: "easeOutCubic", offset: -91 });
// 		}
// 	});	
// };

// web_window_type 					= function()
// {
// 	web_window_type_execute();
// 	$(window).resize(function()
// 	{
// 		web_window_type_execute();
// 	});
// };

// web_window_type_execute 			= function()
// {
// 	// Some variables
// 	if($(window).width() <= 700)
// 	{
// 		// Set the type variable
// 		$('html').addClass('web-small-view');
// 		$('html').removeClass('web-large-view');
// 	}
// 	else
// 	{
// 		// Set the type variable
// 		$('html').removeClass('web-small-view');
// 		$('html').addClass('web-large-view');
// 		if($('html').hasClass('web-show-nav'))
// 		{
// 			web_hide_nav();
// 		}
// 	}
// };
