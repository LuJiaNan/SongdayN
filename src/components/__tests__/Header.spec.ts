import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Songday";
    const wrapper = shallowMount(Header, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
