import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "mosenith-portfolio";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle(
      "Mosenith Heang | Full Stack .NET Developer | Software Engineer"
    );
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          "C#, Full Stack .NET Developer , Software Engineer, Software Developer",
      },
      {
        name: "description",
        content:
          "With over 4 years of experience as a Full Stack .NET Developer, I have honed my expertise in developing distributed systems using C#, ASP.NET Core, Java, and Spring Boot. My portfolio showcases a diverse range of projects involving RESTful APIs, cloud platforms like AWS, DevOps tools such as Azure DevOps, and both SQL and NoSQL databases. Additionally, I have gained valuable experience working with Natural Language Processing and Machine Learning techniques.",
      },
    ]);

    AOS.init();
  }
}
