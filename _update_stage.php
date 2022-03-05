<?php
date_default_timezone_set('America/New_York');
ignore_user_abort(true);
set_time_limit(0);

$repo          = '~/dev.brytech.dev';
$branch        = 'main';
$output        = array();

// update github Repo
$output[] = date('Y-m-d, H:i:s', time()) . "\n";
$output[] = "GitHub Pull\n============================\n" . shell_exec('cd '.$repo.' && git pull origin '.$branch);

// redirect output to logs
file_put_contents(rtrim(getcwd(), '/').'/___github-log.txt', implode("\n", $output) . "\n----------------------------\n", FILE_APPEND);

// //update CSS Version
// shell_exec('sed -i \'s/css_version: [0-9]*/css_version: \'$(date +%s)\'/\' user/config/site.yaml');
// on macos:
// shell_exec('sed -i \'\' \'s/css_version: [0-9]*/css_version: \'$(date +%s)\'/\' user/config/site.yaml');

//clear grav cache
echo "Clearing Grav cache...\r\n";
$grav_output = shell_exec('php-7.4 bin/grav cache --all');
echo $grav_output;
