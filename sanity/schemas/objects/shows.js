export default {
  name: "showsSection",
  title: "Shows Section",
  type: "object",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "shows",
      title: "Shows",
      type: "array",
      validation: (Rule) => Rule.required(),

      of: [
        {
          name: "show",
          title: "Show",
          type: "object",
          fields: [
            {
              name: "datetime",
              title: "Show Date",
              type: "datetime",
              description: "date and time of show",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "venue",
              title: "Show Venue",
              type: "string",
              description: "venue of show",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
