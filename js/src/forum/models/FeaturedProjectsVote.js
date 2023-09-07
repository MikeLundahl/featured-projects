import Model from 'flarum/common/Model';

// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models

export default class FeaturedProjectsVote extends Model {
  discussionId = Model.attribute('discussionId');
  userId = Model.attribute('userId');

  user = Model.hasOne('user');
  discussion = Model.hasOne('discussion');
}
