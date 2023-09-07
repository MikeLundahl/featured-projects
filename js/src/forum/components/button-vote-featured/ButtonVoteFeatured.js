import app from 'flarum/forum/app';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button'

export default class ButtonVoteFeatured extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    //TODO: get votes from DB
    this.votes = 0
  }

  async oncreate(vnode) {
    super.oncreate(vnode);
    const votes = await this.getVotes()

      console.log(votes)
      console.log(votes.length)
    this.votes = votes.length

  }

  onupdate(vnode) {
    super.onupdate(vnode);
    m.redraw()
  }
  view() {
    return (
      <div className="ButtonVoteFeatured">
        {this.votes}
        <Button className="ButtonVoteFeatured-button Button" onclick={(e) => this.handleClick(e)}>
          Vote featured
        </Button>
      </div>
    );
  }

  async handleClick(e) {
    const button = e.target
    button.disabled = true

        //TODO: register votes on db
        if (app.current.matches(DiscussionPage)) {
            // Get the current discussion
            const discussion = app.current.get('discussion');
            const discussionId = discussion.id();

            const userId = app.session.user.id()
            console.log(userId)

            const vote = app.store.createRecord('featured-projects-vote')
            vote.save({
                discussionId: discussionId,
                userId: userId
            }).then((res) => {
                console.log('Vote saved')
                console.log(res)
            }).catch((e) => {
                console.error(e)
            })
        }
        const votes = await this.getVotes()
        this.votes = votes.length
        button.disabled = false
  }

  getVotes() {
    return app.store.find('featured-projects-vote').then((res) => {
      return res.payload.data
    })
  }
}
