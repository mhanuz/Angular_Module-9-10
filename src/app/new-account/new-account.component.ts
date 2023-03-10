import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] //  obtain a value for dependency
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService){
    
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // const service  =  new LoggingService(); don't creat instantiate of service your own 
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
   this.loggingService.logStatusChange(accountStatus)
  }
}
