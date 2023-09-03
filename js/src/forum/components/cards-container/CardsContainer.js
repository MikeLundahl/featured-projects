import app from 'flarum/forum/app';
import Link from 'flarum/common/components/Link';
import Component from 'flarum/common/Component';
import FeaturedCard from '../featued-card/FeaturedCard'
import getPostImage from '../../helpers/getPostImage'

export default class CardsContainer extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.cardPrev = []
    this.loading = true
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    const MaxCards = 3

    app.store
      .find('discussions', {
        filter: {q: 'tag:Projects'},
        sort: '-commentCount',
        page: { limit: MaxCards },
        include: 'firstPost,user,tags',
      })
      .then((results) => {
        //this.discPreview = results;
        for(let i = 0; i < results.length; i++){
          const image = getPostImage(results[i].firstPost())
          this.cardPrev.push(
              <Link className="FeaturedCardLink" href={app.route.discussion(results[i])}>
                <FeaturedCard
                  title={results[i].title()}
                  image={image}
                />
              </Link>
          )
        }

        this.loading = false;
        m.redraw();
      });


    this.loading = false
    m.redraw()
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
      <div className="FeaturedCardsContainer">
        <h3 className="FeaturedTitle">Featured projects</h3>
        <div className="CardsContainer">
          { this.cardPrev.map((card) => { return card }) }
        </div>
      </div>
    );
  }
}
