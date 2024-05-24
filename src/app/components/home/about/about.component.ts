import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".about-img-container .slide"
    );
    let currentIndex = 0;

    function showSlide(index: number): void {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    function nextSlide(): void {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 5000); // Change image every 5 seconds
  }
}
