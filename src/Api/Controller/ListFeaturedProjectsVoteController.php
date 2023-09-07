<?php

namespace Mbl\FeaturedProjects\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Mbl\FeaturedProjects\Api\Serializers\FeaturedProjectsVoteSerializer;
use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListFeaturedProjectsVoteController extends AbstractListController
{
    public $serializer = FeaturedProjectsVoteSerializer::class;

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return FeaturedProjectsVoteModel::all();
    }
}
