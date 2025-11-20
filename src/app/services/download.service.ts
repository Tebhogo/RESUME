import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private cvPath = '/assets/cv/liynadah_hela_cv.pdf';

  constructor(private http: HttpClient) {}

  downloadCV(): void {
    // Fetch PDF as blob for reliable download across all browsers
    this.http.get(this.cvPath, { responseType: 'blob' }).subscribe({
      next: (blob: Blob) => {
        // Check if blob is valid
        if (blob.size === 0) {
          this.showError('CV file is empty. Please add your CV PDF to the assets folder.');
          return;
        }
        
        // Create object URL from blob
        const url = window.URL.createObjectURL(blob);
        
        // Create download link
        const link = document.createElement('a');
        link.href = url;
        link.download = 'liynadah_hela_cv.pdf';
        link.setAttribute('type', 'application/pdf');
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        // Show helpful error message
        this.showError('CV file not found. Please place your CV PDF at: src/assets/cv/liynadah_hela_cv.pdf');
        console.error('CV download error:', error);
      }
    });
  }

  private showError(message: string): void {
    const fullMessage = message + 
      '\n\n📁 File Location:\n' +
      'src/assets/cv/liynadah_hela_cv.pdf\n\n' +
      '📋 Instructions:\n' +
      '1. Copy your CV PDF file\n' +
      '2. Paste it in: src/assets/cv/\n' +
      '3. Rename to: liynadah_hela_cv.pdf\n' +
      '4. Restart the server (Ctrl+C, then npm start)';
    
    alert(fullMessage);
  }
}

