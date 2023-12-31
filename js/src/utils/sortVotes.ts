type discussionsType = {
  [key: string]: number;
};
export default function (votes: any) {
  let discussions: discussionsType = {};

  for (let i = 0; i < votes.length; i++) {
    const discussionId = votes[i].data.attributes.discussionId;

    if (typeof discussions[discussionId] === 'number') {
      discussions[discussionId] += 1;
      continue;
    }

    discussions[discussionId] = 0;
  }

  let sortableDiscussions = [];
  for (let discussion in discussions) {
    sortableDiscussions.push({ discussionId: discussion, votes: discussions[discussion] });
  }

  sortableDiscussions.sort(function (a, b) {
    return b.votes - a.votes;
  });

  const highestVotedDiscussions = sortableDiscussions.slice(0, 3);
  let highestVotedDiscussionIds = [];
  for (let i = 0; i < highestVotedDiscussions.length; i++) {
    highestVotedDiscussionIds.push(highestVotedDiscussions[i].discussionId);
  }

  return highestVotedDiscussionIds;
}
