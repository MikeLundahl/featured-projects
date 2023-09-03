import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend'
import IndexPage from 'flarum/forum/components/IndexPage'
import DiscussionPage from 'flarum/forum/components/DiscussionPage'
import DiscussionControls from 'flarum/forum/utils/DiscussionControls'
import CardsContainer from './components/cards-container/CardsContainer'
import ButtonVoteFeatured from "./components/button-vote-featured/ButtonVoteFeatured";

app.initializers.add('mbl/featured-projects', () => {
/*
  extend(DiscussionControls, 'userControls', function (items, discussion, context) {
    items.add('subscription', m('Button', "test"));
    }
  )
*/


  extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
    if(app.session.user) {
      //TODO: Check for user role


      //FIXME: What is the first argument of the add method?
      items.add('testing', m(ButtonVoteFeatured));
    }


    }
  )


  override(IndexPage.prototype, 'hero', function(original) {
    return [original(), m(CardsContainer)]
  })
});
