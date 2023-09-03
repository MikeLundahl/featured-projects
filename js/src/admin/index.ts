import app from 'flarum/admin/app';

app.initializers.add('mbl/featured-projects', () => {
  console.log('[mbl/featured-projects] Hello, admin!');
  app.extensionData
    .for('mbl-featured-projects')
    .registerPermission(
      {
        icon: 'fas fa-rocket', // Font-Awesome Icon
        label: app.translator.trans('View featured projects'), // Permission Label
        permission: 'discussion.view_featured_projects', // Actual permission name stored in database (and used when checking permission).
        //tagScoped: true, // Whether it be possible to apply this permission on tags, not just globally. Explained in the next paragraph.
      },
      'view', // Category permission will be added to on the grid
      95 // Optional: Priority
    ).registerPermission(
    {
      icon: 'fas fa-rocket', // Font-Awesome Icon
      label: app.translator.trans('Vote featured projects'), // Permission Label
      permission: 'discussion.vote_featured_projects', // Actual permission name stored in database (and used when checking permission).
      //tagScoped: true, // Whether it be possible to apply this permission on tags, not just globally. Explained in the next paragraph.
    },
    'moderate', // Category permission will be added to on the grid
    95 // Optional: Priority
  );
});
