import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MailService } from '../services/mail.service';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mail } from '../interfaces/mail.interface';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatButton,
        MatToolbar,
        MatIcon,
        CommonModule,
        MatInput,
        MatFormField,
        ReactiveFormsModule,
        MatFormField,
    ],
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
})
export class App {
    private readonly mailService = inject(MailService);
    private readonly toastrService = inject(ToastrService);

    protected readonly title = signal('meow-app');

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        subject: new FormControl(null),
        text: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });

    sendMail() {
        if (!this.form.valid) {
            return;
        }

        const form = this.form.controls;
        const mailInput: Mail = {
            email: form.email.value!,
            subject: form.subject.value ?? '',
            text: form.text.value!,
        };

        this.mailService.sendMail(mailInput).then(() => {
            this.toastrService.success(' Thank you for messaing me, I will contact you later ❤');
        });
    }
}
