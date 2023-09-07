<?php

namespace Mbl\FeaturedProjects\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Support\Arr;
use Mbl\FeaturedProjects\Api\Serializers\FeaturedProjectsVoteSerializer;
//use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
use Mbl\FeaturedProjects\Model\FeaturedProjectsVoteModel;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class CreateFeaturedProjectsVoteController extends AbstractCreateController
{
    public $serializer = FeaturedProjectsVoteSerializer::class;

    protected function data(Request $request, Document $document)
    {
        /*
        $requestBody = $request->getParsedBody();
        $requestData = $requestBody['data']['attributes'];
        */

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes');

        /*
        $task = FeaturedProjectsVoteModel::create([
            $requestData['userId'],
            $requestData['discussionId']
        ]);
        */

        return FeaturedProjectsVoteModel::create([
            'user_id' => Arr::get($attributes, 'userId'),
            'discussion_id' => Arr::get($attributes, 'discussionId')
        ]);
    }

}
