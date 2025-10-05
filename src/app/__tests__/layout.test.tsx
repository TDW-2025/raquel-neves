import { render } from "@testing-library/react";
import RootLayout from "../layout";

test("RootLayout snapshot", () => {
  const { asFragment } = render(
    <RootLayout>
      <div>Test Content</div>
    </RootLayout>,
  );
  expect(asFragment()).toMatchSnapshot();
});
