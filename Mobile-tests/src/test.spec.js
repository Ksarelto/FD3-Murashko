import React from "react";
import { Events } from "./modules/events";
import Mainstore from "./modules/MainStore";

const personArr = require('./items.json')
const setUp = () => mount(<Mainstore shopName={'Mobile'} items={personArr}/>);

describe("Posts component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should render MainStore component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should click row ", () => {
    component.find({code: 1}).simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should create new clint", () => {
    const btn = component.find('.new-btn');
    btn.simulate('click');
    const nodes = component.find('input').forEach((node) => {
      if(node.props().type === 'text'){
        node.instance().value = 'test';
        node.simulate('change', {target: {value: 'test'}});
      }
    })
    expect(component).toMatchSnapshot();


    const input = component.find('.message__input_save')
    console.log(input.props());
    input.simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should cancel creating new clint' ", () => {
    component.find('.new-btn').simulate('click')
    expect(component).toMatchSnapshot();

    component.find('.message__input_cancel').simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should edit client' ", () => {
    const row = component.find('.ishop-content_edit').at(1).simulate('click');
    expect(component).toMatchSnapshot();

    const form = component.find('.message__form')
    const input = form.find('input').at(1);
    input.instance().value = 'test';
    input.simulate('change', {target: {value: 'test'}});
    expect(component).toMatchSnapshot();


    component.find('.message__input_save').simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should sort clients ", () => {
    component.find('.ishop-form__input_all').simulate('click');
    expect(component).toMatchSnapshot();

    component.find('.ishop-form__input_active').simulate('click');
    expect(component).toMatchSnapshot();

    component.find('.ishop-form__input_blocked').simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should check clicked company ", () => {
    component.find('.ishop-form__input_velcome').simulate('click');
    expect(component).toMatchSnapshot();

    component.find('.ishop-form__input_mts').simulate('click');
    expect(component).toMatchSnapshot();
  });

  it("should delete client ", () => {
    component.find('.ishop-content_delete').at(3).simulate('click');
    expect(component).toMatchSnapshot();
  });

});
