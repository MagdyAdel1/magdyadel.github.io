import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profile';
import { Toast } from '../common/Toast';
import { 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  FileDown, 
  Send,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setToastVisible(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setToastVisible(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setToastVisible(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setToastVisible(false), 3000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/40 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="07. Get In Touch"
          title="Contact & Professional Inquiries"
          description="Interested in discussing a backend engineering position, microservices architecture, or technical collaboration? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                  Direct Communication
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  I typically respond promptly to technical opportunities and professional messages.
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="block font-mono text-xs text-slate-400">
                  PRIMARY EMAIL
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-mono text-sm text-emerald-600 dark:text-emerald-400 hover:underline break-all"
                  >
                    {profileData.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">LOCATION</span>
                  <span className="font-medium">{profileData.location}</span>
                </div>
              </div>

              {/* Social Placeholders */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="block font-mono text-xs text-slate-400">
                  DEVELOPER PROFILES
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300 transition-all text-xs font-mono"
                  >
                    <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300 transition-all text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-sky-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Download CV CTA */}
              <div className="pt-2">
                <a
                  href={profileData.cvUrl}
                  download="Magdy_Adel_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold font-mono text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base mb-2">
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Send a Direct Message</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-600 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-600 dark:text-slate-400">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-600 dark:text-slate-400">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Backend Developer Role / Interview Opportunity"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-600 dark:text-slate-400">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Magdy, I reviewed your portfolio and would like to discuss..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email Client</span>
              </button>
            </form>
          </div>

        </div>
      </div>

      <Toast message="Email address copied to clipboard!" isVisible={toastVisible} />
    </section>
  );
};
