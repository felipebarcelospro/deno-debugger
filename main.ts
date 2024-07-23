import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (context) => {
    context.response.status = 200;
    context.response.headers.set("content-type", "text/plain; charset=utf-8");
    context.response.body = "Hello, world";
  })
  .get("/ping", (context) => {
    context.response.status = 200;
    context.response.headers.set("content-type", "application/json; charset=utf-8");
    context.response.body = { message: "pong" };
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is running on http://localhost:8000");
await app.listen({ port: 8000 });