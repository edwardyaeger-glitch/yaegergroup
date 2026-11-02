// Sends the bare domain to the canonical www host; everything else is served from static assets.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "yaegergroup.com") {
      url.protocol = "https:";
      url.hostname = "www.yaegergroup.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
