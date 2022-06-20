import { Component, OnInit } from "@angular/core";
import { appointments } from "./appointments";

@Component({
  selector: "app-doctor-appointments",
  templateUrl: "./doctor-appointments.component.html",
  styleUrls: ["./doctor-appointments.component.scss"],
})
export class DoctorAppointmentsComponent implements OnInit {
  constructor() {}
  upcomingAppointments: any = [];
  previousAppointments: any = [];
  
  ngOnInit(): void {
    this.upcomingAppointments = appointments.filter(
      (appointment) => appointment.appointmentStatus === "UPCOMING"
    );
    this.previousAppointments = appointments.filter(
      (appointment) => appointment.appointmentStatus === "COMPLETED"
    );
  }
}
