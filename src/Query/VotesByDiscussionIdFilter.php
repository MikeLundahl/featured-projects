<?php

namespace Mbl\FeaturedProjects\Query;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;

class VotesByDiscussionIdFilter implements FilterInterface
{

    public function getFilterKey(): string
    {
        return 'discussionId';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate): void
    {
        $filterState
            ->getQuery()
            ->where('discussion_id', '=', $filterValue);
    }
}
