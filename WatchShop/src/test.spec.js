import React from "react";
import { HashRouter } from 'react-router-dom';
import { RouterDOM } from './modules/routing/router';

const setUp = () => mount(
<HashRouter>
  <RouterDOM></RouterDOM>
</HashRouter>);

describe("Posts component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should render Main component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should click 'В магазин' ", () => {
    component.find('.slide_content .btn').at(1).simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should click button to go to contacts", () => {
    component.find('.nav_menu .nav_img__link').at(3).simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should fill form  contacts", () => {
    component.find('.go-to-contacts').at().simulate('click');
    expect(component).toMatchSnapshot();
    const form = component.find('.contacts-form-inputs').forEach((node) => {
      if(node.props().type === 'text'){
        node.props().defaultValue = 'test';
      }
    })

    expect(component).toMatchSnapshot();
    component.find('.contacts-submit-btn').simulate('click');
    expect(component).toMatchSnapshot();
  });



  // it("should create new clint", () => {
  //   const btn = component.find('.new-btn');
  //   btn.simulate('click');
  //   const nodes = component.find('input').forEach((node) => {
  //     if(node.props().type === 'text'){
  //       node.props().defaultValue = 'test';
  //     }
  //   })
  //   expect(component).toMatchSnapshot();

  //   component.find('.message__input_save').simulate('click');
  //   expect(component).toMatchSnapshot();
  // });

  // it("should cancel creating new clint' ", () => {
  //   component.find('.new-btn').simulate('click')
  //   expect(component).toMatchSnapshot();

  //   component.find('.message__input_cancel').simulate('click');
  //   expect(component).toMatchSnapshot();
  // });

  // it("should edit client' ", () => {
  //   const row = component.find('.ishop-content_edit').at(1).simulate('click');
  //   expect(component).toMatchSnapshot();

  //   const input = component.find('input').at(2);
  //   input.props().defaultValue = '';
  //   expect(component).toMatchSnapshot();

  //   input.props().defaultValue = 'test';
  //   expect(component).toMatchSnapshot();

  //   component.find('.message__input_save').simulate('click');
  //   expect(component).toMatchSnapshot();
  // });

});
