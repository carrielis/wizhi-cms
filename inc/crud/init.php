<?php

define('FILE_INI', dirname(__FILE__) . '/config/settings.ini');
define('FILE_INI_DEFAULT', dirname(__FILE__) . '/config/settings.ini.default');
define('FILE_CSS',  plugin_dir_url(__FILE__) . "/style/style-admin.css");
define('FILE_VIEW_LIST',  dirname(__FILE__) . "/view/list.tpl");
define('FILE_VIEW_SETTINGS',  dirname(__FILE__) . "/view/settings.tpl");
define('FILE_VIEW_EDIT',  dirname(__FILE__) . "/view/edit.tpl");
define('FILE_VIEW_ADD',  dirname(__FILE__) . "/view/add.tpl");
define('DELMITER', ',');
define('NEW_LINE', "\r\n");
define('NEW_ID_HINT', " - Edit new ID");

require_once("controller.php");
require_once("model.php");