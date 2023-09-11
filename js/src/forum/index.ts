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

  extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
    const canVote = app.forum.attribute("canVoteFeaturedProjects")
    const tagsToFeature: string[] | null = app.forum.attribute('mbl-featured-projects.tags')

    //FIXME: accessing discussions tag with "this.discussion.tags()" might not be best practice?
    const isValidTag = tagsToFeature && tagsToFeature.includes(this.discussion.tags()[0].data.attributes.name)



    if(canVote && isValidTag) {
      items.add('mblButtonVoteFeatured', m(ButtonVoteFeatured));
    }
  })

  override(IndexPage.prototype, 'hero', function(original) {
    return [original(), m(CardsContainer)]
  })

});
