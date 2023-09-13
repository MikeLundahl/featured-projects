export default class ButtonVoteFeatured extends Component<any, undefined> {
    constructor();
    oninit(vnode: any): void;
    discussionId: any;
    oncreate(vnode: any): Promise<void>;
    onupdate(vnode: any): void;
    state: {
        votes: number;
        loading: boolean;
    };
    view(): JSX.Element;
    onclick(e: any): void;
    getDiscussionId(): any;
    getVotesByDiscussionId(discussionId: any): Promise<import("flarum/common/Model").SavedModelData>;
}
import Component from "flarum/common/Component";
