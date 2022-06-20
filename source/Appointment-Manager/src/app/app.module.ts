import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import {
  CollapseMenuDirective,
  ScrollSpyDirective,
  WindowscrollDirective,
} from "./directive";
import {
  AppBootstrapModule,
  AppMaterialModule,
  AppPluginsModule,
} from "./modules";
import { DoctorAppointmentsModule } from "./modules/doctor-appointments/doctor-appointments.module";
import { AppUtilServices } from "./services";
import { FetchDataPipe } from "./shared/pipes";

@NgModule({
  declarations: [
    AppComponent,
    WindowscrollDirective,
    CollapseMenuDirective,
    ScrollSpyDirective,
    FetchDataPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppPluginsModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    DoctorAppointmentsModule,
  ],
  providers: [AppUtilServices, FetchDataPipe],
  bootstrap: [AppComponent],
  exports: [CollapseMenuDirective],
})
export class AppModule {}
