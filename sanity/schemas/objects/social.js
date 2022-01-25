import Instagram from "../previews/Instagram";

export default {
  name: "socialSection",
  title: "Social Section",
  type: "object",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "instagram",
      title: "Instagram Posts",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          name: "instagramPost",
          title: "Instagram Post",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: "image",
              title: "Post Image",
              type: "image",
              description: "Image of Instagram post",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "Post URL",
              type: "url",
              description:
                "Visit an Instagram post in a browser and copy the URL.",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              image: "image.asset._ref",
              url: "url",
            },
            component: Instagram,
          },
        },
      ],
    },
  ],
};
