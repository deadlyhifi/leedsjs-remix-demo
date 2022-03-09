import {
  json,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLoaderData,
  useParams,
} from "remix";

type LoaderData = { person: { name: string; likes: string } };

const fakeApi = [
  { name: "Tom de Bruin", likes: "Bikes" },
  { name: "Marty McFly", likes: "Skateboards" },
];

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data?.person) {
    return {
      title: "Person not found",
      description: "Sorry, no person found",
    };
  }
  return {
    title: data.person.name,
    description: `Details about "${data.person.name}"`,
  };
};

// Comparable to getServerSideProps in Next.js
export const loader: LoaderFunction = async ({ params }) => {
  // Fetch is supported in loader - https://remix.run/docs/en/v1/other-api/fetch
  const person = fakeApi.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === params.name
  );

  // throw Error("This is an unexpected error, caught by the errorBoundary.");

  if (!person) {
    throw new Response("Not found", {
      status: 404,
    });
  }

  // json is a shortcut for creating application/json responses.
  // https://remix.run/docs/en/v1/api/remix#json
  return json({ person });
};

export default function DemoFetchPerson() {
  const { person } = useLoaderData<LoaderData>();

  return (
    <>
      <p>Name: {person.name}</p>
      <p>Likes: {person.likes}</p>
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();

  switch (caught.status) {
    case 404: {
      return (
        <div className="error-container">
          <h2>🤯 {caught.status}</h2>
          <p>{caught.statusText}</p>
          <p>Huh? What the heck kind of name is "{params.name}"?</p>
        </div>
      );
    }

    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <>
      <h2>oh no!</h2>
      <p>{error.message}</p>
    </>
  );
}
