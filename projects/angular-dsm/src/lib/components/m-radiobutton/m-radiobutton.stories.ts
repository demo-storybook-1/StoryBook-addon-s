// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MRadiobuttonComponent } from 'angular-dsm'; './m-radiobutton.component';

export default {
  title: 'Demo/mradiobutton',
  component: MRadiobuttonComponent,
  argTypes: {
   label: { control: 'text' },
   id: { control: 'text' },
   disabled: { control: 'boolean' },
   checked: { control: 'boolean' }
  },
} as Meta;

const Template: Story<MRadiobuttonComponent> = (args: MRadiobuttonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: "",
  id: '',
  disabled: '',
  checked: '',
};
