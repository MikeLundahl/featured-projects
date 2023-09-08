<?php

namespace Mbl\FeaturedProjects\Api\Serializers;
/*
use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
*/

use Flarum\Api\Serializer\AbstractSerializer;


class FeaturedProjectsVoteSerializer extends AbstractSerializer
{
    protected $type = 'featuredProjectsVote';

    /**
     * Get the default set of serialized attributes for a model.
     *
     * @param object|array $model
     *
     * @return array
     */

    protected function getDefaultAttributes($featuredProjectsVote): array
    {
        return [
            'userId' => $featuredProjectsVote->user_id,
            'discussionId' => $featuredProjectsVote->discussion_id,
            'createdAt' => $featuredProjectsVote->created_at,
            'updatedAt' => $featuredProjectsVote->updated_at
        ];
    }
}
