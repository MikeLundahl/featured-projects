<?php

namespace Mbl\FeaturedProjects\Model;

use flarum\database\AbstractModel;
use Carbon\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property int $discussion_id
 * @Carbon\Carbon $created_at
 * @Carbon\Carbon $updated_at
 */

class FeaturedProjectsVoteModel extends AbstractModel
{

    protected $table = 'mbl_featured_projects_votes';

    protected $fillable = [
        'user_id',
        'discussion_id'
    ];

    public $timestamps = true;

    public function discussion()
    {
        return $this->belongsTo('Flarum\Discussion\Discussion');
    }

    public function user()
    {
        return $this->belongsTo('Flarum\User\User');
    }
}
