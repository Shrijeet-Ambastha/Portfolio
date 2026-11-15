import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '49320e99-98e6-4f1c-83e0-1e8af432588b',
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error('Web3Forms error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              I&apos;m currently open to software engineering roles, full-stack opportunities, and interesting project collaborations. Feel free to reach out directly or drop a message.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:ambasthashrijeet@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-red-300 shadow-sm transition-colors group"
              >
                <div className="p-3 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-medium text-slate-900">ambasthashrijeet@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Shrijeet-Ambastha"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-red-300 shadow-sm transition-colors group"
              >
                <div className="p-3 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="font-medium text-slate-900">github.com/Shrijeet-Ambastha</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/shrijeet-ambastha"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-red-300 shadow-sm transition-colors group"
              >
                <div className="p-3 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="font-medium text-slate-900">linkedin.com/in/shrijeet-ambastha</p>
                </div>
              </a>

              <div className="flex items-center gap-2 text-sm text-slate-500 pt-2 pl-1">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Jamshedpur, Jharkhand, India</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we work together?"
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 px-6 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'sent' ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-600 text-center">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;