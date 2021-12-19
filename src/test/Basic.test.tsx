import { HomePage } from "../pages/HomePage/HomePage";
// @ts-ignore
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Before i only test backend so i have no experience about testing in frontend
configure({ adapter: new Adapter() });
test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

it("does render", async () => {
  const mockedPage = shallow(<HomePage />);
  expect(mockedPage).toMatchSnapshot();
});
