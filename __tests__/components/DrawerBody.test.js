import "react-native";
import React from "react";
import DrawerBody from "../../src/components/DrawerBody";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("renders correctly", () => {
  renderer.create(<DrawerBody />);
});

describe("DrawerBody contents", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DrawerBody />);
  });

  it("DrawerBody Contains 3 DrawerElement components", () => {
    expect(
      wrapper
        .find("DrawerElement")
        .at(0)
        .text()
    ).toBe("<DrawerElement />");
    expect(
      wrapper
        .find("DrawerElement")
        .at(1)
        .text()
    ).toBe("<DrawerElement />");
    expect(
      wrapper
        .find("DrawerElement")
        .at(2)
        .text()
    ).toBe("<DrawerElement />");
  });

  it("Drawer forEach test", () => {
    wrapper.find("DrawerElement").forEach(node => {
      expect(node.text()).toBe("<DrawerElement />");
    });
  });

  it("Test", () => {
    wrapper.find({ backgroundColor: "#CED0CE" }).forEach(node => {
      expect(node.text()).toBe("<View />");
    });
  });
});
