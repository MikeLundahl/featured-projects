

export default function sortVotes(votes) {

  let discussions = {}

  for(let i = 0; 0 < i; i++) {
    const vote = votes[i]
    const discussionId = vote.attributes.discussionId

    if(!discussions[discussionId]) {
      discussions[discussionId] = 1
    } else {
      discussions[discussionId] += 1
    }
  }

  return discussions
}
