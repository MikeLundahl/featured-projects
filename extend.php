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
use Flarum\Discussion\Filter\DiscussionFilterer;
use Mbl\FeaturedProjects\Api\Controller\ListFeaturedProjectsVoteController;
use Mbl\FeaturedProjects\Api\Controller\CreateFeaturedProjectsVoteController;
use Mbl\FeaturedProjects\Query\FeaturedDiscussionsFilter;

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

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(FeaturedDiscussionsFilter::class),

    (new Extend\Settings())
        ->serializeToForum('mbl-featured-projects.tags', 'mbl-featured-projects.tags_allowed_for_voting', function($value) {
            return explode(',', $value);})
        ->serializeToForum('mbl-featured-projects.sponsor_is_active', 'mbl-featured-projects.sponsor_is_active')
        ->serializeToForum('mbl-featured-projects.sponsor_new_tab', 'mbl-featured-projects.sponsor_new_tab')
        ->serializeToForum('mbl-featured-projects.sponsor_title', 'mbl-featured-projects.sponsor_title')
        ->serializeToForum('mbl-featured-projects.sponsor_image_url', 'mbl-featured-projects.sponsor_image_url')
        ->serializeToForum('mbl-featured-projects.sponsor_url', 'mbl-featured-projects.sponsor_url')
        ->serializeToForum('mbl-featured-projects.sponsor_tracking_tag', 'mbl-featured-projects.plausible_sponsor_tracking_tag')
        ->serializeToForum('mbl-featured-projects.default_image', 'mbl-featured-projects.default_image')
        ->serializeToForum('mbl-featured-projects.image', 'mbl-featured-projects.default_image')
        ->serializeToForum('mbl-featured-projects.plausibleTag', 'mbl-featured-projects.plausible_tracking_tag')

];
