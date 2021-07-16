import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDsmComponent } from './angular-dsm.component';
import { MButtonComponent } from './components/m-button/m-button.component';
import { MSearchComponent } from './components/m-search/m-search.component';
import { MDropdownComponent } from './components/m-dropdown/m-dropdown.component';
import { MTextareaComponent } from './components/m-textarea/m-textarea.component';
import { MTextboxComponent } from './components/m-textbox/m-textbox.component';
import { MCheckboxComponent } from './components/m-checkbox/m-checkbox.component';
import { MToggleComponent } from './components/m-toggle/m-toggle.component';
import { MChipComponent, MLinkComponent, MRadiobuttonComponent, MRadiogroupComponent, MSliderComponent } from './components';


@NgModule({
  declarations: [AngularDsmComponent, MButtonComponent, MSearchComponent, MDropdownComponent, MTextareaComponent, MTextboxComponent, MCheckboxComponent, MToggleComponent, MLinkComponent, MSliderComponent, MChipComponent,MRadiobuttonComponent, MRadiogroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AngularDsmComponent, MButtonComponent, MSearchComponent, MDropdownComponent, MTextareaComponent, MTextboxComponent, MCheckboxComponent, MToggleComponent, MLinkComponent, MSliderComponent, MChipComponent, MRadiobuttonComponent, MRadiogroupComponent]
})
export class AngularDsmModule { }
