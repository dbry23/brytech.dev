<?php
date_default_timezone_set('America/New_York');
ignore_user_abort(true);
set_time_limit(0);

$repo          = '~/brytech.dev';
$branch        = 'main';
$output        = array();

// update github Repo
$output[] = date('Y-m-d, H:i:s', time()) . "\n";
$output[] = "GitHub Pull\n============================\n" . shell_exec('cd '.$repo.' && git pull origin '.$branch);

// redirect output to logs
file_put_contents(rtrim(getcwd(), '/').'/___github-log.txt', implode("\n", $output) . "\n----------------------------\n", FILE_APPEND);

// //update CSS Version
echo "Updating CSS version number...\r\n";
shell_exec('date +%s > '.$repo.'/user/themes/brytech/css/cssver');
echo (shell_exec('cat '.$repo.'/user/themes/brytech/css/cssver'));

//clear grav cache
echo "Clearing Grav cache...\r\n";
$grav_output = shell_exec('php-7.4 bin/grav cache --all');
echo $grav_output;

//clear cloudflare cache
echo "Clearing Cloudflare cache...\r\n";
shell_exec("curl -X POST \"https://api.cloudflare.com/client/v4/zones/a6766a7ec2c5e1d63d0a2a72ba9d2bb8/purge_cache\" -H \"Authorization: Bearer W5MG9TmK7Fxtx18xxwkBMHbbYpWF4SSeodqEUd4P\" -H \"Content-Type: application/json\" --data '{\"purge_everything\":true}'");
