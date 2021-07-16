// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MLinkComponent } from 'angular-dsm'; './m-link.component';

export default {
  title: 'Demo/mlink',
  component: MLinkComponent,
  argTypes: {
   label: { control: 'text' },
   url: { control:'text'}
  },
} as Meta;

const Template: Story<MLinkComponent> = (args: MLinkComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  url: "http://google.com",
  label: 'google',
};

export const Secondary = Template.bind({});
Secondary.args = {
  url: "http://flipkart.com",
  label: 'flipkart',
};
