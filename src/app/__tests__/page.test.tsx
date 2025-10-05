import { render } from "@testing-library/react";
import Home from "../page";

test("Home component snapshot", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
