import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import{HomePage,GuardadosPage} from "../index.paginas";

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {

  tab1:any=HomePage;
  tab2:any=GuardadosPage;
  constructor(){

  }
}
