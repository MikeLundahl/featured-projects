import app from 'flarum/forum/app';
import Link from 'flarum/common/components/Link';
import Component from 'flarum/common/Component';
import FeaturedCard from '../featured-card/FeaturedCard';
import getPostImage from '../../helpers/getPostImage';
import sortVotes from '../../../utils/sortVotes';

export default class CardsContainer extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.cardPrev = [];
    this.loading = true;
  }

  async oncreate(vnode) {
    super.oncreate(vnode);

    const amountOfFeaturedItems = 3;
    const res = await app.store.find('featured-projects-vote');

    if (res.length === 0) {
      this.loading = false;
      m.redraw();
      return;
    }

    const discussionsToFeature = sortVotes(res);

    if (discussionsToFeature.length === amountOfFeaturedItems) {
      app.store
        .find('discussions', {
          filter: { id: discussionsToFeature },
          include: 'firstPost,user,tags',
        })
        .then((results) => {
          for (let i = 0; i < results.length; i++) {
            const image = getPostImage(results[i].firstPost());
            this.cardPrev.push(
              <Link className="FeaturedCardLink" href={app.route.discussion(results[i])}>
                <FeaturedCard title={results[i].title()} image={image} />
              </Link>
            );
          }

          this.loading = false;
          m.redraw();
        });
    }

    this.loading = false;
    m.redraw();
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
      <div className="FeaturedCardsContainer">
        {this.cardPrev.length > 0 && <h3 className="FeaturedTitle">Featured projects</h3>}
        <div className="CardsContainer">
          {this.cardPrev.map((card) => {
            return card;
          })}
        </div>
        {this.cardPrev.length > 0 && (
          <div className="FeaturedCardsAboutLink">
            <Link href="/p/featured-projects">About featured projects</Link>
          </div>
        )}
      </div>
    );
  }
}
