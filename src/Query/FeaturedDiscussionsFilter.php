<?php

namespace Mbl\FeaturedProjects\Query;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Filter\ValidateFilterTrait;

class FeaturedDiscussionsFilter implements FilterInterface
{
    use ValidateFilterTrait;

    public function getFilterKey(): string
    {
        return 'id';
    }

    public function filter(FilterState $filterState, $filterValue, bool $negate)
    {
        $ids = $this->asIntArray($filterValue);

        $filterState->getQuery()->whereIn('discussions.id', $ids, 'and', $negate);
    }
}
