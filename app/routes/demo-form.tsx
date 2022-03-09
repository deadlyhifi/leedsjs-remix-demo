import { Link, Outlet } from "remix";

export default function DemoForm() {
  return (
    <>
      <p>
        <code>app/routes/demo-form.tsx</code>
      </p>
      <h1>Demo - Form</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo-form">Demo - Form</Link>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
}
