import { Outlet } from "remix";

export default function DemoOutletIndex() {
  return (
    <>
      <p>
        <code>app/routes/demo-outlet/index.tsx</code>
      </p>
      <p>Content only for the route index.</p>

      <Outlet />
    </>
  );
}
