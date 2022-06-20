import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorAppointmentsComponent } from "./doctor-appointments/doctor-appointments.component";
import { PrescriptionComponent } from "./prescription/prescription.component";

const innerPageRoutes: Routes = [
  {
    path: "",
    redirectTo: "appointments",
  },
  {
    path: "appointments",
    component: DoctorAppointmentsComponent,
  },
  {
    path: "appointment-details/:id",
    component: PrescriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(innerPageRoutes)],
  exports: [RouterModule],
})
export class DoctorAppointmentsRoutingModule {}
