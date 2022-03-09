import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import picoStyles from "~/styles/pico.css";
import globalStyles from "~/styles/global.css";

export function links() {
  return [
    { rel: "stylesheet", href: picoStyles },
    { rel: "stylesheet", href: globalStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Remix Demo" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {/* <Scripts /> */}
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}
