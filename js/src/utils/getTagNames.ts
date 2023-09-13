type Tag = {
  data: {
    attributes: {
      name: string;
    };
  };
};

export default function (tags: Tag[]) {
  let tagNames = [];

  for (let i = 0; i < tags.length; i++) {
    tagNames.push(tags[i].data.attributes.name);
  }

  return tagNames;
}
