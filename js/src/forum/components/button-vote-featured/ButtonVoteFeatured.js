import app from 'flarum/forum/app';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export default class ButtonVoteFeatured extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.discussionId = this.getDiscussionId();
  }

  async oncreate(vnode) {
    super.oncreate(vnode);
    const votesData = await this.getVotesByDiscussionId(this.discussionId);
    this.state.votes = votesData.length;
    m.redraw();
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  state = {
    votes: 0,
    loading: false,
  };
  view() {
    return (
      <div className="ButtonVoteFeatured">
        {this.state.votes}
        <Button className="ButtonVoteFeatured-button Button" type="submit" loading={this.state.loading} onclick={(e) => this.onclick(e)}>
          Vote featured
        </Button>
      </div>
    );
  }

  onclick(e) {
    e.preventDefault();
    this.state.loading = true;

    if (app.current.matches(DiscussionPage)) {
      const userId = app.session.user.id();

      const vote = app.store.createRecord('featured-projects-vote');
      vote
        .save({
          discussionId: this.discussionId,
          userId: userId,
        })
        .then(async (res) => {
          const votes = await this.getVotesByDiscussionId(this.discussionId);
          this.state.votes = votes.length;
          this.state.loading = false;
          m.redraw();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  getDiscussionId() {
    const discussion = app.current.get('discussion');
    const discussionId = discussion.id();

    return discussionId;
  }
  async getVotesByDiscussionId(discussionId) {
    const res = await app.store.find('featured-projects-vote', { discussionId: discussionId });
    return res.payload.data;
  }
}
