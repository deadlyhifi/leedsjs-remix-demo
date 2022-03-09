import { Link } from "remix";

export default function DemoNoOutletDemo() {
  return (
    <>
      <p>
        <code>app/routes/demo-outlet.demo-4.tsx</code>
      </p>

      <h1>Demo - 4</h1>
      <p>
        This doesn’t render its parent content because it’s outside of the{" "}
        <code>{`<Outlet>`}</code>’s scope.
      </p>
      <p>
        <Link to="/demo-outlet">/demo-outlet</Link>
      </p>
    </>
  );
}
