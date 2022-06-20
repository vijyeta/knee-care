import { Location } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { appointments } from "../doctor-appointments/appointments";

@Component({
  selector: "app-prescription",
  templateUrl: "./prescription.component.html",
  styleUrls: ["./prescription.component.scss"],
})
export class PrescriptionComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private _snackbar: MatSnackBar
  ) {}
  patient: any = {};
  prevAppointments: Array<any> = [];

  @ViewChild("fileUpload", { static: false })
  fileUpload: ElementRef;
  files: Array<any> = [];

  ngOnInit(): void {
    const appointmentId = this.activatedRoute.snapshot.params["id"];
    if (appointmentId) {
      this.patient = appointments.find(
        (appointment) => appointment.id == appointmentId
      );
      this.prevAppointments = appointments.filter(
        (appointment) =>
          appointment.userId == this.patient.userId &&
          appointment.appointmentStatus === "COMPLETED" &&
          appointment.id != parseInt(appointmentId)
      );
    } else {
      this.location.back();
    }
  }

  handleSubmit = () => {
    this._snackbar.open("Submitted successfully!", "Dismiss", {
      duration: 3000,
      panelClass: "success-snackbar",
    });
    this.location.back();
  };

  goToPrevPage = () => {
    this.location.back();
  };

  handleAttachFiles() {
    if (this.fileUpload) this.fileUpload.nativeElement.click();
  }

  onFileSelected(event) {
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      this.files.push(file);
    }
  }

  removeFile(file) {
    let ix;
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1);
      this.fileUpload.nativeElement.value = "";
    }
  }
}
