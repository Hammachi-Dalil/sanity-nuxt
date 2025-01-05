import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'homepage',
  type: 'document',
  options: {
    singleton: true
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
        type: 'object',
        name: 'hero',
        fields: [
            {type: 'string',name: 'title'},
            {type: 'string', name: 'text'},
            {
                name: 'stats',
                type: 'array',
                title: 'stats for hero',
                of: [
                    defineArrayMember({
                        type: 'object',
                        name: 'stat',
                        fields: [
                            {type: 'string', name: 'value'},
                            {type: 'string', name: 'text'},
                        ]
                    })
                ]
            }
        ]
    }),

    defineField({
      name: 'image',
      type: 'image',
    }),

    defineField({
      type: 'object',
      name: 'fonctionnalitees',
      fields: [
          {type: 'string',name: 'title'},
          {type: 'string', name: 'text'},
          {
              name: 'fonctionnalite',
              type: 'array',
              title: 'fonctionnalite for appli',
              of: [
                  defineArrayMember({
                      type: 'object',
                      name: 'fonctionnalite',
                      fields: [
                          {type: 'string', name: 'title'},
                          {type: 'string', name: 'text'},
                          {type: 'string', name: 'variant', options: {list: ['Green', 'Yellow', 'Blue']}}
                      ]
                  })
              ]
          }
      ]
  }),

  defineField({
    type: 'object',
    name: 'section_formule',
    fields: [
        {type: 'string',name: 'title'},
        {type: 'string', name: 'description'},
        {
            name: 'formules',
            type: 'array',
            title: 'formules pour notre appli',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'formule',
                    fields: [
                        {type: 'string', name: 'title'},
                        {type: 'string', name: 'text'},
                        
                    ]
                })
            ]
        },]
    }),
  ]
})