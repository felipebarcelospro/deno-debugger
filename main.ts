Deno.serve((req) => {
  const url = new URL(req.url);
  console.log(`(${req.method}) ${url.pathname} - ${req.headers.get("user-agent")}`);

  return new Response("Hello, world", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
});