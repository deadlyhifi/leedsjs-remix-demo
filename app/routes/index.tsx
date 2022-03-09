import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <p>
        <code>app/routes/index.tsx</code>
      </p>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/demo-outlet">Demo - Outlet</Link>
        </li>
        <li>
          <Link to="/demo-fetch">Demo - Fetch</Link>
        </li>
        <li>
          <Link to="/demo-form">Demo - Form</Link>
        </li>
      </ul>
    </div>
  );
}
