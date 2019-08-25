import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  success(successMsg) {
  // tslint:disable-next-line: no-string-literal
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(successMsg, '', this.config);
  }

  error(errorMsg) {
    this.snackBar.open(errorMsg, '', this.config);
  }
}
