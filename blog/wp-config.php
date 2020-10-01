<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

define('FS_METHOD', 'direct');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bibleapp' );

/** MySQL database username */
define( 'DB_USER', 'bibleapp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'bibleapp' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '51Z,f#S#r#g~:RG~-t;5C:sr3M(Wc3]DTU}2YW3CHiQO_Be6Zs<_0t)45#*+4pO@' );
define( 'SECURE_AUTH_KEY',  'g #ncK%%[-%ri!Lw:TVZ9o~x}H3^}74C4~#}aP;xtYf^Th!Bbd|[sPMTy(.EN{`R' );
define( 'LOGGED_IN_KEY',    '`f[5aK1>aAo)QO?mdJ#Bw&5ITa+) g,><L-%tA.KsUer*g!3q;n1Oew2$_^maXp|' );
define( 'NONCE_KEY',        '$ukmKX|h_NY#x};2vXBt_~3E|.kx$$aUijX~F)gbc:aj?#,M8<V>d2s6i3<`Z==6' );
define( 'AUTH_SALT',        '/#6B@WPt+50!Z<uA=+(DchN5?qTK?t+j9Y/^oPy6cA^1bc}[#$S1Y66es{)Jo2!~' );
define( 'SECURE_AUTH_SALT', '2h:9p${C($WBp)Jl*9_&KmIUEJhu#zb.f(20fTB];jH{9}JmP]@9CyCwQi1p2:ky' );
define( 'LOGGED_IN_SALT',   'A]Jx{h`:gG`Hs?&-0v2^=4d=.a7Op}iz9lRCa~amhtug|o8i438T3y!]fuoM4~*.' );
define( 'NONCE_SALT',       '2&GCfho9t$F)=T6)Q+n)`X^@Xx41}fP/xm#>^P&r6Jw$d[3B86d)A8l=XYyBn)JT' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
