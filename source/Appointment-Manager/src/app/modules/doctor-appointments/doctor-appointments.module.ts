import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctorAppointmentsComponent } from "./doctor-appointments/doctor-appointments.component";
import { AppMaterialModule } from "../app-material.module";
import { PrescriptionComponent } from "./prescription/prescription.component";
import { AvatarModule } from "ngx-avatar";
import { DoctorAppointmentsRoutingModule } from "./doctor-appointment-routing.module";
import { AppointmentCardComponent } from "./doctor-appointments/appointment-card/appointment-card.component";
import { PreviousTreatmentComponent } from "./prescription/previous-treatment/previous-treatment.component";

@NgModule({
  declarations: [
    DoctorAppointmentsComponent,
    PrescriptionComponent,
    AppointmentCardComponent,
    PreviousTreatmentComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AvatarModule,
    DoctorAppointmentsRoutingModule,
  ],
  exports: [PrescriptionComponent],
})
export class DoctorAppointmentsModule {}
