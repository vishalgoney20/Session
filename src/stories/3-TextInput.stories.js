import React from 'react'
import  TextInput  from '../InputText/InputText';
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export const stories=storiesOf("components",module);

stories.addDecorator(withKnobs);

stories.add("TextInput",()=>{

  const name=text("name","Email");

  return <TextInput required={true} name={name}  />

});



// import React from 'react';
// import { action } from '@storybook/addon-actions';
// import InputText from '../InputText/InputText';
// import { withKnobs, text, boolean } from "@storybook/addon-knobs";

// export default {
//   title: 'Input Text',
//   component: InputText,
// };
// const name=text("name","Email");
// export const InputField = () => <InputText  name={name} onChange={action('Entered text')}></InputText>;
