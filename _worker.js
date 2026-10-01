export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/data.json') {
      const baseRes = await env.ASSETS.fetch(request);
      if (!baseRes.ok) return baseRes;

      const extraUrl = new URL('/data-extra.json', url);
      const extraRes = await env.ASSETS.fetch(new Request(extraUrl.toString(), request));
      if (!extraRes.ok) return baseRes;

      const [base, extra] = await Promise.all([baseRes.json(), extraRes.json()]);
      const merged = {
        ...base,
        lesson: 'Lesson 5 + 6',
        words: [...(base.words || []), ...(extra.words || [])]
      };

      return new Response(JSON.stringify(merged), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store'
        }
      });
    }

    if (url.pathname === '/textbook.json') {
      const baseRes = await env.ASSETS.fetch(request);
      if (!baseRes.ok) return baseRes;

      const extraUrl = new URL('/textbook-extra.json', url);
      const extraRes = await env.ASSETS.fetch(new Request(extraUrl.toString(), request));
      if (!extraRes.ok) return baseRes;

      const [base, extra] = await Promise.all([baseRes.json(), extraRes.json()]);
      const merged = {
        ...base,
        lessons: [...(extra.lessons || []), ...(base.lessons || [])]
      };

      return new Response(JSON.stringify(merged), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store'
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};