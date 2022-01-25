export default {
  type: "object",
  name: "homeSection",
  title: "Home Section",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "image",
      title: "Home Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Home Bio",
      type: "text",
    }
  ],
};
