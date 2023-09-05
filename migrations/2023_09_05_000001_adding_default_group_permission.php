<?php

use Flarum\Group\Group;

return Migration::addPermissions([
    'discussion.vote_featured_projects' => Group::ADMINISTRATOR_ID
]);
