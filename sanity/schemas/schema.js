import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import content from "./documents/content";

import home from "./objects/home";
import videos from "./objects/video";
import shows from "./objects/shows";
import media from "./objects/media";
import social from "./objects/social";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([content, home, videos, shows, media, social]),
});
