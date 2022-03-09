import { Link, Outlet } from "remix";

import styles from "~/styles/demo.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function DemoOutlet() {
  return (
    <>
      <p>
        <code>app/routes/demo-outlet.tsx</code>
      </p>
      <h1>Hello Whirled.</h1>
      <p>
        This route parent content will be on every <code>/demo-outlet/*</code>
        page.
      </p>
      <p>
        <code>{`<Outlet />`}</code> renders the child content.
      </p>
      <p>
        <code>~/styles/demo.css</code> is loaded only within this{" "}
        <code>route/*</code>
      </p>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo-outlet">/demo-outlet</Link>
        </li>
        <li>
          <Link to="/demo-outlet/demo-1">/demo-outlet/demo-1</Link>
        </li>
        <li>
          <Link to="/demo-outlet/demo-1/demo-2">
            /demo-outlet/demo-1/demo-2
          </Link>
        </li>
        <li>
          <Link to="/demo-outlet/demo-1/demo-3">
            /demo-outlet/demo-1/demo-3
          </Link>
        </li>
        <li>
          <Link to="/demo-outlet/demo-4">/demo-outlet/demo-4 (w/o Outlet)</Link>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
}
