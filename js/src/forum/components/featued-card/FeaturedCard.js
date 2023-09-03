import Component from 'flarum/common/Component';

export default class FeaturedCard extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.title = vnode.attrs.title
    this.image = vnode.attrs.image
  }

  oncreate(vnode) {
    super.oncreate(vnode);
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
        <div className="FeaturedCard" style={{backgroundImage: `url(${this.image})`}}>
          <div className="FeatureCardTitle">
            {this.title}
          </div>
        </div>
    );
  }
}
