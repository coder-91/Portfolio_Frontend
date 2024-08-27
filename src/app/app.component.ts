import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Theme} from "./models/theme";
import {ThemeService} from "./services/themeService/theme.service";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RouterOutlet} from "@angular/router";
import {SnackbarComponent} from "./shared/components/snackbar/snackbar.component";
import {Subscription} from "rxjs";
import {MessageService} from "./services/messageService/message.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, SnackbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Veysel Karaali | Fullstack Developer';
  currentTheme: Theme;
  @ViewChild('snackbar') snackbar: SnackbarComponent;
  private messageResultSubscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
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
  }
}
