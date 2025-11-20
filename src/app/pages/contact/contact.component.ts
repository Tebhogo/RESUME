import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-white py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-black mb-4">
            Get In <span class="text-orange-500">Touch</span>
          </h1>
          <div class="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p class="text-gray-600 text-lg">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contact Information -->
          <div class="bg-gray-50 rounded-lg p-8">
            <h2 class="text-2xl font-bold text-black mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 class="font-bold text-black mb-1">Email</h3>
                  <a href="mailto:liyandahhella12&#64;gmail.com" class="text-orange-500 hover:text-orange-600">
                    liyandahhella12&#64;gmail.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg class="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div>
                  <h3 class="font-bold text-black mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/liyandah-hela-b48481166" target="_blank" rel="noopener noreferrer" class="text-orange-500 hover:text-orange-600">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-black mb-6">Send a Message</h2>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="mb-6">
                <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                <p *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" 
                   class="text-red-500 text-sm mt-1">Name is required</p>
              </div>
              
              <div class="mb-6">
                <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                <p *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                   class="text-red-500 text-sm mt-1">
                  {{ contactForm.get('email')?.hasError('required') ? 'Email is required' : 'Please enter a valid email' }}
                </p>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
                <p *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                   class="text-red-500 text-sm mt-1">Message is required</p>
              </div>
              
              <div *ngIf="submitted && contactForm.valid" 
                   class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p class="font-semibold">✓ Message sent successfully!</p>
                <p class="text-sm mt-1">Thank you for your message. I'll get back to you soon.</p>
              </div>
              
              <button 
                type="submit" 
                [disabled]="contactForm.invalid"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.submitted = true;
      // Reset form after 3 seconds
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
      }, 3000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}

