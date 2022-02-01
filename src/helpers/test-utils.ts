export const findByTestAttr = (component: any, attr: any) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
  };