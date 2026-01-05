import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Mail } from '../interfaces/mail.interface';

@Injectable({
    providedIn: 'root',
})
export class MailService {
    http = inject(HttpClient);

    sendMail = (input: Mail) =>
        lastValueFrom(this.http.post<any>(environment.apiUrl + '/send-mail', input));
}
