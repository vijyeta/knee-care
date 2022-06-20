import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-previous-treatment",
  templateUrl: "./previous-treatment.component.html",
  styleUrls: ["./previous-treatment.component.scss"],
})
export class PreviousTreatmentComponent implements OnInit {
  @Input() prevTreatment;
  constructor() {}

  ngOnInit(): void {}
}
