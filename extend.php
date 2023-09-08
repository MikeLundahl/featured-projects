<?php

/*
 * This file is part of mbl/featured-projects.
 *
 * Copyright (c) 2023 Mike Lundahl.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Mbl\FeaturedProjects;


use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
use Mbl\FeaturedProjects\Query\VotesByDiscussionIdFilter;
use Mbl\FeaturedProjects\FeaturedProjectsSettings;
use Mbl\FeaturedProjects\Api\Controller\ListFeaturedProjectsVoteController;
use Mbl\FeaturedProjects\Api\Controller\CreateFeaturedProjectsVoteController;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('canVoteFeaturedProjects', function (ForumSerializer $serializer): bool {
            return $serializer->getActor()->can('discussion.vote_featured_projects');
        })
        ->attribute('canTagVoteFeaturedProjects', function (ForumSerializer $serializer): bool {

            return $serializer->getActor()->can('mbl-feature-projects.vote_featured_projects');
        }),

    (new Extend\Routes('api'))
        ->post('/featured-projects-vote', 'mbl-featured-projects.create', CreateFeaturedProjectsVoteController::class)
        ->get('/featured-projects-vote', 'mbl-featured-projects.index', ListFeaturedProjectsVoteController::class),

    (new Extend\Settings())
        ->serializeToForum('mbl-featured-projects.tags', 'mbl-featured-projects.tags_allowed_for_voting', function($value) {
            return explode(',', $value);
        })

];
