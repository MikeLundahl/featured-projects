import Extend from 'flarum/common/extenders'
import FeaturedProjectsVote from "./models/FeaturedProjectsVote";


export default [

    new Extend.Routes()
        .add('featured-projects-vote', '/featured-projects-vote', FeaturedProjectsVote),

    new Extend.Store()
        .add('mbl_featured_projects_votes', FeaturedProjectsVote),
]
