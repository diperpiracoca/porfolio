import { Component, Inject, inject } from '@angular/core';
import {MatSnackBarRef} from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-snack',
  templateUrl: 'snack.component.html',
  styleUrls: ['snack.component.scss']
})
export class SnackComponent {
  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(Clipboard) private clipboard: Clipboard , private ngZone: NgZone ) {}

  copyToClipboard() {
    this.clipboard.copy('santy07piracoca@gmail.com');
    this.ngZone.run(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.snackBarRef.dismiss()
        });
      },200);
    });
  }
    
}
