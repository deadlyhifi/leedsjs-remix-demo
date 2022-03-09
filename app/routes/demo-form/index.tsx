import {
  ActionFunction,
  Form,
  json,
  redirect,
  useActionData,
  useTransition,
} from "remix";

function validate(content: string) {
  if (content.length < 3) {
    return `Minimum of 3 characters required.`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    name: string | undefined;
    likes: string | undefined;
  };
  fields?: {
    name: string;
    likes: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 }); // 400 Bad Request

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const likes = form.get("likes");

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("continue"));
    }, 5000);
  });

  if (typeof name !== "string" || typeof likes !== "string") {
    return badRequest({
      formError: `Please fill in the form properly.`,
    });
  }

  const fieldErrors = {
    name: validate(name),
    likes: validate(likes),
  };
  const fields = { name, likes };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  // Write to Storage
  // return id
  // redirect to success page

  return redirect("/demo-form/success");
};

export default function DemoFormIndex() {
  const actionData = useActionData<ActionData>();
  // const transition = useTransition();

  // console.log({ actionData });
  // console.log(transition);
  // const disabled = transition.state === "submitting";
  const disabled = false;

  return (
    <Form method="post">
      <fieldset disabled={disabled}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              defaultValue={actionData?.fields?.name}
              name="name"
              aria-invalid={Boolean(actionData?.fieldErrors?.name) || undefined}
              aria-describedby={
                actionData?.fieldErrors?.name ? "name-error" : undefined
              }
            />
          </label>
          {actionData?.fieldErrors?.name ? (
            <p className="form-validation-error" role="alert" id="name-error">
              {actionData.fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label>
            Likes:{" "}
            <input
              type="text"
              defaultValue={actionData?.fields?.likes}
              name="likes"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.likes) || undefined
              }
              aria-describedby={
                actionData?.fieldErrors?.likes ? "likes-error" : undefined
              }
            />
          </label>
          {actionData?.fieldErrors?.likes ? (
            <p className="form-validation-error" role="alert" id="likes-error">
              {actionData.fieldErrors.likes}
            </p>
          ) : null}
          {actionData?.formError ? (
            <p className="form-validation-error" role="alert">
              {actionData.formError}
            </p>
          ) : null}
        </div>
        <div>
          <button type="submit" disabled={disabled}>
            Add
          </button>
        </div>
      </fieldset>
    </Form>
  );
}
