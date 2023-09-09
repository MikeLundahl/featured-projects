<?php

namespace Mbl\FeaturedProjects\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Query\QueryCriteria;
use Flarum\User\Filter\UserFilterer;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Mbl\FeaturedProjects\Api\Serializers\FeaturedProjectsVoteSerializer;
use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListFeaturedProjectsVoteController extends AbstractListController
{
    public $serializer = FeaturedProjectsVoteSerializer::class;

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'discussionId');

        if($id) {
            return FeaturedProjectsVoteModel::where('discussion_id', $id)->orderBy('created_at', 'desc')->get();
        } else {
            return FeaturedProjectsVoteModel::orderBy('created_at', 'desc')->get();
        }

    }
}
