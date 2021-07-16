// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MCheckboxComponent } from 'angular-dsm'; './m-checkbox.component';

export default {
  title: 'Demo/mcheckbox',
  component: MCheckboxComponent,
  argTypes: {
   label: { control: 'text' },
   id: { control: 'text' },
   name: { control: 'text' },
   disabled: { control: 'boolean' },
   required: { control: 'boolean' },
   checked: { control: 'boolean' },
   ngModelData: { control: 'text' },
   checkboxvalue: { control:''}
  },
} as Meta;

const Template: Story<MCheckboxComponent> = (args: MCheckboxComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: "",
  id: '',
  name: '',
  disabled: '',
  required: '',
  checked: '',
  ngModelData: '',
  checkboxvalue: '',
};
