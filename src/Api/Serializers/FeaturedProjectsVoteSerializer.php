<?php

namespace Mbl\FeaturedProjects\Api\Serializers;
/*
use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
*/

use Flarum\Api\Serializer\AbstractSerializer;


class FeaturedProjectsVoteSerializer extends AbstractSerializer
{
    protected $type = 'mbl_featured_projects_votes';

    /**
     * @ FeaturedProjectsVote $model
     * @param $model
     * @return array
     */

    protected function getDefaultAttributes($model): array
    {
        return [
            'user_id' => $model->user_id,
            'discussion_id' => $model->discussion_id,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
