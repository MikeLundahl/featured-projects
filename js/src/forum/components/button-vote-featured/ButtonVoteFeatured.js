import Component from 'flarum/common/Component';

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
    //user voted
    //discussion id
  }

  view() {
    return (
      <div className="ButtonVoteFeatured">
        {this.votes}
        <button className="ButtonVoteFeatured-button" onclick={() => this.handleClick()}>
          Vote to be featured
        </button>
      </div>
    );
  }
}
