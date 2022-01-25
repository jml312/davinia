export default {
  name: "videoSection",
  title: "Video Section",
  type: "object",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "videos",
      title: "Videos",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          name: "video",
          title: "Video",
          fields: [
            {
              name: "image",
              title: "Video Image",
              description: "Get image at http://www.get-youtube-thumbnail.com/",
              type: "image",
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              title: "Video Title",
              type: "string",
              description: "title of video",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "Video Url",
              type: "url",
              description:
                "url of video. Must be in the form: src=https://www.youtube.com/embed/{id}",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
