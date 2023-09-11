import app from 'flarum/admin/app';

app.initializers.add('mbl/featured-projects', () => {
  console.log('[mbl/featured-projects] Hello, admin!');
  app.extensionData
    .for('mbl-featured-projects')
    .registerPermission(
    {
      icon: 'fas fa-rocket', // Font-Awesome Icon
      label: 'Vote featured projects', // Permission Label
      permission: 'discussion.vote_featured_projects', // Actual permission name stored in database (and used when checking permission).
      tagScoped: true, // Whether it be possible to apply this permission on tags, not just globally. Explained in the next paragraph.
    },
    'reply', // Category permission will be added to on the grid
    95 // Optional: Priority
    )
    .registerSetting({
        setting: 'mbl-featured-projects.tags_allowed_for_voting',
        label: 'Tags allowed for voting (separate by comma)',
        type: 'text',
    })
    .registerSetting({
    setting: 'mbl-featured-projects.default_image',
    label: 'Default image as fallback',
    type: 'text',
  })
});
