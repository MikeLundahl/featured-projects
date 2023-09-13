import Model from 'flarum/common/Model';

// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models

export default class FeaturedProjectsVote extends Model {
  type() {
    return Model.attribute < string > 'type'.call(this);
  }

  discussionId() {
    return (Model.attribute < number) | (null > 'discussionId'.call(this));
  }

  userId() {
    return (Model.attribute < number) | (null > 'userId'.call(this));
  }

  createdAt() {
    return Model.attribute < Date > 'createdAt'.call(this);
  }

  /*
  discussionId = Model.attribute('discussionId');
  userId = Model.attribute('userId');

  user = Model.hasOne('user');
  discussion = Model.hasOne('discussion');
     */
}
