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
            'userId' => $model->user_id,
            'discussionId' => $model->discussion_id,
            'createdAt' => $model->created_at,
            'updatedAt' => $model->updated_at
        ];
    }
}
