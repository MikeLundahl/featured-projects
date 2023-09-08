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

    /*
    public function __construct(VotesFilterer $filterer)
    {
        $this->filterer = $filterer;
    }
    */

    protected function data(ServerRequestInterface $request, Document $document)
    {
        //$filterer = resolve('flarum.filterer.mbl-featured-projects-votes');

        //$filters = $this->extractFilter($request);
        $id = Arr::get($request->getQueryParams(), 'discussionId');


/*
        $queryParams = $request->getQueryParams();
        $filterState = $filterer->forFiltering($queryParams);

        $criteria = new QueryCriteria($filters);
        $results = $this->filterer->filter($criteria);
        $results = $results->getResults();
*/
        if($id) {
            return FeaturedProjectsVoteModel::where('discussion_id', $id)->orderBy('created_at', 'desc')->get();
        } else {
            return FeaturedProjectsVoteModel::orderBy('created_at', 'desc')->get();
        }

    }
}
