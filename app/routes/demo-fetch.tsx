import { Link, Outlet } from "remix";

export default function DemoFetch() {
  return (
    <>
      <p>
        <code>app/routes/demo-fetch.tsx</code>
      </p>
      <h1>Demo - Fetch</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo-fetch">Demo - Fetch</Link>
        </li>
      </ul>

      <hr />

      <ul>
        <li>
          <Link to="/demo-fetch/tom-de-bruin">Demo - Fetch - Tom de Bruin</Link>
        </li>
        <li>
          <Link to="/demo-fetch/marty-mcfly">Demo - Fetch - Marty McFly</Link>
        </li>
        <li>
          <Link to="/demo-fetch/nobody">Demo - Fetch - Nobody</Link>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
}
