import app from 'flarum/forum/app';
import Link from 'flarum/common/components/Link';
import Component from 'flarum/common/Component';
import FeaturedCard from '../featured-card/FeaturedCard';
import getPostImage from '../../helpers/getPostImage';
import sortVotes from '../../../utils/sortVotes';

export default class CardsContainer extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.defaultImage = app.forum.attribute('mbl-featured-projects.default_image');
    this.cardPrevLoading = [];
    this.cardPrev = [];
    this.loading = true;
    this.clickTag = app.forum.attribute('mbl-featured-projects.plausibleTag');
    this.clickTagSponsor = app.forum.attribute('mbl-featured-projects.sponsor_tracking_tag');
    this.sponsorImg = app.forum.attribute('mbl-featured-projects.sponsor_image_url');
    this.sponsorUrl = app.forum.attribute('mbl-featured-projects.sponsor_url');
    this.sponsorTitle = app.forum.attribute('mbl-featured-projects.sponsor_title');
    this.sponsorIsActive = app.forum.attribute('mbl-featured-projects.sponsor_is_active');
    this.sponsorNewTab = app.forum.attribute('mbl-featured-projects.sponsor_new_tab')
    this.sponsorTarget = '_self'

    this.classesSponsor = `FeaturedCardLink ${this.clickTagSponsor}`

    for (let i = 0; i < 3; i++) {
      this.cardPrevLoading.push(
          <FeaturedCard title="Loading..." image={this.defaultImage} />
      );
    }
  }

  async oncreate(vnode) {
    super.oncreate(vnode);

    if ( parseInt(this.sponsorNewTab) ) {
      this.sponsorTarget = "_blank"
    }

    const amountOfFeaturedItems = 3;
    const res = await app.store.find('featured-projects-vote');
    if (res.length === 0) {
      this.loading = false;
      m.redraw();
      return;
    }

    const discussionsToFeature = sortVotes(res);

    if (discussionsToFeature.length === amountOfFeaturedItems) {
      await app.store
        .find('discussions', {
          filter: { id: discussionsToFeature },
          include: 'firstPost,user,tags',
        })
        .then((results) => {
          this.cardPrev = [];
          console.log("length is ", this.cardPrev.length)
          for (let i = 0; i < results.length; i++) {
            const image = getPostImage(results[i].firstPost());
            const classes = `FeaturedCardLink ${this.clickTag}`
            //this.cardPrev.pop()

            this.cardPrev.push(
              <Link className={classes} href={app.route.discussion(results[i])}>
                <FeaturedCard title={results[i].title()} image={image} />
              </Link>)
            ;
          }

          this.loading = false;
          m.redraw();
        });
    }
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
        <div className="FeaturedCardsContainer">
          {this.cardPrev.length > 0 && <h3 className="FeaturedTitle">Featured projects</h3>}
          <div className="CardsContainer">
            {this.sponsorIsActive > 0 && (
              <a className={this.classesSponsor} href={this.sponsorUrl} target={this.sponsorTarget}>
                <FeaturedCard title={this.sponsorTitle} image={this.sponsorImg} />
              </a>
            )}
            {
              this.cardPrev.length > 0 ? this.cardPrev.map((card) => {
                return card;
              })
            :
              this.cardPrevLoading.map((card) => {
                return card;
              })
            }
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
