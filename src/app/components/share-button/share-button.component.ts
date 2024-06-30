import { Component } from '@angular/core';

@Component({
  selector: 'app-share-button',
  standalone: true,
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent {

  copyLink(): void {
    const currentUrl = window.location.href;

    // Create a temporary textarea element to copy the URL
    const textarea = document.createElement('textarea');
    textarea.value = currentUrl;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px'; // Move outside the screen to avoid visual disruption
    document.body.appendChild(textarea);

    // Select and copy the URL from the textarea
    textarea.select();
    document.execCommand('copy');

    // Clean up
    document.body.removeChild(textarea);

    // Optionally, provide feedback to the user
    alert('Link copied to clipboard!');
  }
}
