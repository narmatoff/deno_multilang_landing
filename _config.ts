import lume from "lume/mod.ts";
import pug from "lume/plugins/pug.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import svgo from "lume/plugins/svgo.ts";
import source_maps from "lume/plugins/source_maps.ts";

const site = lume();

site.use(pug());
site.use(multilanguage());
site.use(sass());
site.use(sitemap());
site.use(svgo());
site.use(source_maps());

export default site;
