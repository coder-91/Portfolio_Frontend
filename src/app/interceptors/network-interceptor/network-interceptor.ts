import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {LoadingSpinnerService} from "../../services/loadingSpinnerService/loading-spinner.service";
import {finalize} from "rxjs";

export const networkInterceptorFn: HttpInterceptorFn = (req, next) => {
  let totalRequests = 0;
  let requestsCompleted = 0;

  const loadingService = inject(LoadingSpinnerService);

  loadingService.show();
  totalRequests++;

  return next(req).pipe(
    finalize(() => {
      requestsCompleted++;

      if (requestsCompleted === totalRequests) {
        loadingService.hide();
        totalRequests = 0;
        requestsCompleted = 0;
      }
    })
  );
};
