export default {
  name: "mediaSection",
  title: "Media Section",
  type: "object",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "media",
      title: "Media",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "document",
          fields: [
            {
              name: "caption",
              title: "Media Caption",
              type: "string",
              description: "caption of media",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "publisher",
              title: "Media Publisher",
              type: "string",
              description: "publisher of media",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "Media Url",
              type: "url",
              description: "url of media",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
