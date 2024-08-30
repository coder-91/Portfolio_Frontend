import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Theme, ThemeService} from "./services/themeService/theme.service";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";
import {ContactFormService} from "./services/contactFormService/contact-form.service";
import {LoadingSpinnerService} from "./services/loadingSpinnerService/loading-spinner.service";
import {AsyncPipe} from "@angular/common";
import {SnackbarComponent} from "./components/shared/snackbar/snackbar.component";
import {LoadingSpinnerComponent} from "./components/shared/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, SnackbarComponent, LoadingSpinnerComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Veysel Karaali | Fullstack Developer';
  currentTheme: Theme;
  @ViewChild('snackbar') snackbar: SnackbarComponent;
  private contactFormResultSubscription: Subscription = new Subscription();
  private currentThemeSubscription: Subscription = new Subscription();
  isLoadingSpinnerVisible = this.loadingSpinnerService.isLoadingSpinnerVisible$;

  constructor(private themeService: ThemeService, private contactFormService: ContactFormService, private loadingSpinnerService: LoadingSpinnerService) {}

  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }

  ngAfterViewInit() {
    this.contactFormResultSubscription = this.contactFormService.contactFormResult$.subscribe(contactFormResult => {
      this.snackbar.show(contactFormResult.notification, contactFormResult.hasError);
    });
  }

  ngOnDestroy() {
    this.contactFormResultSubscription.unsubscribe();
    this.currentThemeSubscription.unsubscribe();
  }
}
