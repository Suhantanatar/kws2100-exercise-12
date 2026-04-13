import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();
app.get("/api/grunnskole", (c) => c.json({ grunnskoler: true }));
// `serveStatic` makes Hono serve the output from `vite build`
app.get("*", serveStatic({ root: "../dist" }));
serve(app);
