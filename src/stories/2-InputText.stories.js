import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonComponent from '../buttonComponent/ButtonComponent'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export const stories=storiesOf("components",module);

stories.addDecorator(withKnobs);

stories.add("button",()=>{

  const value=text("value","Generate Link");
  
  return <ButtonComponent value={value} type="submit"/>

});