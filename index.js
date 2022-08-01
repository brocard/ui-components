import { join } from "path";

export default {
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "vu",
      });
    },
  },
};