import { Outlet } from "remix";

export default function Demo1() {
  return (
    <>
      <p>
        <code>app/routes/demo-outlet/demo-1.tsx</code>
      </p>

      <hr />

      <Outlet />
    </>
  );
}
