import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Theme, ThemeService} from "./services/themeService/theme.service";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";
import {MessageService} from "./services/messageService/message.service";
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
  private messageResultSubscription: Subscription = new Subscription();
  private currentThemeSubscription: Subscription = new Subscription();
  isLoadingSpinnerVisible = this.loadingSpinnerService.isLoadingSpinnerVisible$;

  constructor(private themeService: ThemeService, private messageService: MessageService, private loadingSpinnerService: LoadingSpinnerService) {}

  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }

  ngAfterViewInit() {
    this.messageResultSubscription = this.messageService.messageResult$.subscribe(messageResult => {
      this.snackbar.show(messageResult.message, messageResult.hasError);
    });
  }

  ngOnDestroy() {
    this.messageResultSubscription.unsubscribe();
    this.currentThemeSubscription.unsubscribe();
  }
}
