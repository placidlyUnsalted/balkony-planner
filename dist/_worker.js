// Password gate for the RUNNEN planner: HTTP Basic Auth, password from the
// SITE_PASSWORD Pages secret (user name is ignored).
export default {
  async fetch(request, env) {
    const header = request.headers.get("Authorization") || "";
    const ok = (() => {
      if (!header.startsWith("Basic ")) return false;
      try {
        const decoded = atob(header.slice(6));
        const pass = decoded.slice(decoded.indexOf(":") + 1);
        return env.SITE_PASSWORD && pass === env.SITE_PASSWORD;
      } catch {
        return false;
      }
    })();
    if (!ok) {
      return new Response("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="RUNNEN Planner"' },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
