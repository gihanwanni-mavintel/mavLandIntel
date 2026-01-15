'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  location: string;
  description: string;
  subscribe: boolean;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Request a Decision Review
          </h2>
          <p className="text-gray-600">
            Get data-backed intelligence for your land decision
          </p>
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-light-green focus:outline-none"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-accent-pink text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-light-green focus:outline-none"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-accent-pink text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone and Purpose */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-light-green focus:outline-none"
                  placeholder="+94 XX XXX XXXX"
                />
                {errors.phone && (
                  <p className="text-accent-pink text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="purpose" className="block text-white font-medium mb-2">
                  Purpose *
                </label>
                <select
                  id="purpose"
                  {...register('purpose', { required: 'Please select a purpose' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-light-green focus:outline-none"
                >
                  <option value="">Select purpose...</option>
                  <option value="sell">Selling Land</option>
                  <option value="buy">Buying Land</option>
                  <option value="hold">Hold Decision</option>
                  <option value="develop">Development Decision</option>
                  <option value="other">Other</option>
                </select>
                {errors.purpose && (
                  <p className="text-accent-pink text-sm mt-1">{errors.purpose.message}</p>
                )}
              </div>
            </div>

            {/* Land Location */}
            <div>
              <label htmlFor="location" className="block text-white font-medium mb-2">
                Land Location (Google Maps link or address) *
              </label>
              <input
                type="text"
                id="location"
                {...register('location', { required: 'Location is required' })}
                className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-light-green focus:outline-none"
                placeholder="Property address or Google Maps link"
              />
              {errors.location && (
                <p className="text-accent-pink text-sm mt-1">{errors.location.message}</p>
              )}
            </div>

            {/* Short Description */}
            <div>
              <label htmlFor="description" className="block text-white font-medium mb-2">
                Short Description *
              </label>
              <textarea
                id="description"
                {...register('description', { required: 'Description is required' })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-light-green focus:outline-none resize-none"
                placeholder="Tell us about your land and what decision you're trying to make..."
              />
              {errors.description && (
                <p className="text-accent-pink text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Subscribe Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="subscribe"
                {...register('subscribe')}
                className="mt-1 w-5 h-5 rounded border-2 border-white/30 focus:ring-light-green"
              />
              <label htmlFor="subscribe" className="text-white text-sm">
                I'd like to receive market updates and intelligence reports
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light-green hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-light-green text-white p-4 rounded-lg text-center">
                Thank you! We'll review your request and get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-accent-pink text-white p-4 rounded-lg text-center">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
