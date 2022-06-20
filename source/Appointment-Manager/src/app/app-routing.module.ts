import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/doctor-appointments/doctor-appointments.module").then(
        (m) => m.DoctorAppointmentsModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [],
})
export class AppRoutingModule {}
