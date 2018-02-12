import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';

import { IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [SearchComponent],
	imports: [FormsModule, IonicModule],
	exports: [SearchComponent]
})
export class ComponentsModule {}
