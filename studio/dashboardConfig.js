export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624b0f5a89bba2156b3e32a4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-feajouqo',
                  apiId: '75572901-a329-4d89-a7da-ba011ba72942'
                },
                {
                  buildHookId: '624b0f5a322aeb083815640e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x4ppuwie',
                  apiId: 'f85feec0-b370-471e-9b86-d4c90ba21bb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bharat549sa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x4ppuwie.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
