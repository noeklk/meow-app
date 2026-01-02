import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatButton, MatToolbar, MatIcon],
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
})
export class App {
    protected readonly title = signal('meow-app');
}
