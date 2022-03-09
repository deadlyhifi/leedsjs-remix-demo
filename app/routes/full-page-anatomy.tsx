import {
  HeadersFunction,
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "remix";

// Set Headers for this route
export const headers: HeadersFunction =
  (/*{ loaderHeaders, parentHeaders }*/) => {
    return {
      "Cache-Control": "max-age=300, s-maxage=3600",
    };
  };

export const links: LinksFunction = () => {
  return [
    /*{ rel: "stylesheet", href: styles }*/
  ];
};

// Set Meta for this route
export const meta: MetaFunction = (/*{ data }*/) => {
  return {
    title: "Some title",
  };
};

// Load data, server side, for this route
export const loader: LoaderFunction =
  async (/*{ params, request, context }*/) => {
    return json({ OK: "totally" });
  };

// Your page content
export default function Index() {
  return <h1>Hello Whirled</h1>;
}

// A CatchBoundary is a React component that renders whenever an action or loader throws a Response.
export function CatchBoundary() {
  return <p>You did an error</p>;
}

// An ErrorBoundary is a React component that renders whenever there is an error anywhere on the route, either during rendering or during data loading.
// Note: We use the word "error" to mean an uncaught exception; something you didn't anticipate happening. This is different from other types of "errors" that you are able to recover from easily, for example a 404 error where you can still show something in the user interface to indicate you weren't able to find some data.
export function ErrorBoundary(/*{ error }*/) {
  return <p>You did an error</p>;
}
