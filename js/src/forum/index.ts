import app from 'flarum/forum/app';
import { override } from 'flarum/common/extend'
import IndexPage from 'flarum/forum/components/IndexPage'
import CardsContainer from './components/cards-container/CardsContainer'

app.initializers.add('mbl/featured-projects', () => {
  override(IndexPage.prototype, 'hero', function(original) {
    return [original(), m(CardsContainer)]
  })
});
