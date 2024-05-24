import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";
import emailjs from "emailjs-com";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  isSubmitted = false;

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    emailjs.init("RV2gkoBSVThZ7-wZF");
  }

  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      const { name, email, phone, subject, message } = contactForm.value;

      const templateParams = {
        from_name: name,
        from_email: email,
        to_email: "heangmosenith3@gmail.com",
        subject: subject,
        phone: phone,
        message: message,
      };

      emailjs.send("service_4q7gohc", "template_wcwbjbt", templateParams).then(
        () => {
          this.isSubmitted = true;
          this.analyticsService.sendAnalyticEvent(
            "click_send_mail",
            "contact",
            "email"
          );
        },
        (error) => {
          console.error("Failed to send email. Error:", error);
        }
      );
    }
  }
}
