import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend'
import IndexPage from 'flarum/forum/components/IndexPage'
import DiscussionPage from 'flarum/forum/components/DiscussionPage'
import FeaturedProjectsVote  from "./models/FeaturedProjectsVote";
import CardsContainer from './components/cards-container/CardsContainer'
import ButtonVoteFeatured from "./components/button-vote-featured/ButtonVoteFeatured";

app.initializers.add('mbl/featured-projects', () => {
  app.store.models['featured-projects-vote'] = FeaturedProjectsVote;

  extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
    const canVote = app.forum.attribute("canVoteFeaturedProjects")
    if(canVote) {
      //FIXME: What is the first argument of the add method?
      items.add('mblButtonVoteFeatured', m(ButtonVoteFeatured));
    }
  })

  override(IndexPage.prototype, 'hero', function(original) {
    return [original(), m(CardsContainer)]
  })
});
