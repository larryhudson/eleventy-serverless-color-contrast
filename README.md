# eleventy-serverless-color-contrast

This is a quick colour contrast utility I made with [Eleventy's new Serverless functions](https://www.11ty.dev/docs/plugins/serverless/).

I made this after seeing [Ben Myer's great demo](https://www.youtube.com/watch?v=wneO9XKkGTA).

You can check out the utility here:
https://11ty-serverless-contrast-query-params.netlify.app/

The main difference in my approach is I used query parameters, rather than dynamic slugs, to set the two color variables.

This means that I can't use Netlify's [On Demand Builders](https://docs.netlify.com/configure-builds/on-demand-builders/), because Netlify strips away query parameters.

But I wanted to try the query parameters anyway, so that I could include a HTML form on the page that would 'just work' with a simple GET request.

