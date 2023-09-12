import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend'
import IndexPage from 'flarum/forum/components/IndexPage'
import DiscussionPage from 'flarum/forum/components/DiscussionPage'
import FeaturedProjectsVote  from "./models/FeaturedProjectsVote";
import CardsContainer from './components/cards-container/CardsContainer'
import ButtonVoteFeatured from "./components/button-vote-featured/ButtonVoteFeatured";

export { default as extend } from './extend';

app.initializers.add('mbl/featured-projects', () => {
  app.store.models.featuredProjectsVote = FeaturedProjectsVote;

  extend(DiscussionPage.prototype, 'sidebarItems', async function (items) {
    const canVote = app.forum.attribute("canVoteFeaturedProjects")
    const tagsToFeature: string[] | null = app.forum.attribute('mbl-featured-projects.tags')
    const tagsOfCurrentDiscussion = app.current.data.discussion.tags()
    const tagNamesOfCurrentDiscussion: string[] = tagsOfCurrentDiscussion.map((tag: any) => tag.data.attributes.name)
    let matchingTags: string[] = []

    if (tagsToFeature !== null) {
      matchingTags = tagNamesOfCurrentDiscussion.filter((tagName: string) => tagsToFeature.includes(tagName))
    }

    const isValidTag = tagsToFeature && matchingTags.length > 0

    if(canVote && isValidTag) {
      items.add('mblButtonVoteFeatured', m(ButtonVoteFeatured));
    }
  })

  override(IndexPage.prototype, 'hero', function(original) {
    return [original(), m(CardsContainer)]
  })

});
