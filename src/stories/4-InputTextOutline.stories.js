import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from "@storybook/addon-knobs"
import InputTextOutline from '../InputTextOutline/InputTextOutline'
import LinkCopyAndShare from '../Screens/LinkCopyAndShare'


export const stories=storiesOf("components",module);
stories.addDecorator(withKnobs);

stories.add("InputTextOutline",()=>{

  const name=text("name","https://KL.com/b/1enYggSV");

    return <InputTextOutline name={"name"} value={name} />

});

stories.add("link",()=>{
  return <LinkCopyAndShare />
});


