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

  oncreate(vnode) {
    super.oncreate(vnode);
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  handleClick() {
    this.votes ++

    //TODO: register votes on db
    if (app.current.matches(DiscussionPage)) {
      // Get the current discussion
      const discussion = app.current.get('discussion');
      const id = discussion.id();
      console.log(id)

      const userId = app.session.user.id()
      console.log(userId)


    }


  }

  view() {
    return (
      <div className="ButtonVoteFeatured">
        {this.votes}
        <Button className="ButtonVoteFeatured-button Button" onclick={() => this.handleClick()}>
          Vote featured
        </Button>
      </div>
    );
  }
}
