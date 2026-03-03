import type { LegalTranslations } from '../types';

export const legal: LegalTranslations = {
  privacy: {
    meta: {
      title: 'Privacy Policy — App Name — hi1 labs',
      description: 'Privacy Policy for App Name by hi1 labs. Learn how we handle your data.',
      ogTitle: 'Privacy Policy — hi1 labs',
      ogDescription: 'Learn how hi1 labs handles your data. We collect as little as possible and never sell your personal information.',
    },
    header: {
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 1, 2026',
    },
    contentHtml: `
  <h2>1. Introduction</h2>
  <p>This Privacy Policy describes how <strong>hi1 labs</strong> ("we", "us", "our") handles information in connection with <strong>App Name</strong> ("the App"). We are committed to protecting your privacy and being transparent about our data practices.</p>
  <p><strong>Our core principle:</strong> We collect as little data as possible and never sell your personal information.</p>

  <h2>2. Information We Collect</h2>
  <p>Here is a clear breakdown of our data practices:</p>

  <div class="table-wrapper">
    <table class="data-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Collected?</th>
          <th>Purpose</th>
          <th>Shared?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Crash logs</td>
          <td><span class="badge badge-yes">Yes</span></td>
          <td>Fix bugs and improve stability (via Firebase Crashlytics)</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Anonymous usage analytics</td>
          <td><span class="badge badge-yes">Yes</span></td>
          <td>Understand which features are used (via Firebase Analytics)</td>
          <td>No</td>
        </tr>
        <tr>
          <td>User-created content</td>
          <td><span class="badge badge-yes">Yes</span></td>
          <td>Stored locally on your device only</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Personal information</td>
          <td><span class="badge badge-no">No</span></td>
          <td>—</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Location data</td>
          <td><span class="badge badge-no">No</span></td>
          <td>—</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>3. Third-Party Services</h2>
  <p>The App uses the following third-party services that may collect data according to their own privacy policies:</p>
  <ul>
    <li><strong>Firebase Analytics</strong> (Google) — anonymous usage analytics. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Privacy policy</a></li>
    <li><strong>Firebase Crashlytics</strong> (Google) — crash reporting. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Privacy policy</a></li>
  </ul>

  <h2>4. Data Storage &amp; Security</h2>
  <ul>
    <li>All user-created content is stored <strong>locally on your device</strong></li>
    <li>Analytics data is processed by Firebase according to their security standards</li>
    <li>We do not maintain our own servers that store your personal data</li>
  </ul>

  <h2>5. Data Retention &amp; Deletion</h2>
  <ul>
    <li><strong>Firebase data</strong> is retained for up to 14 months, then automatically deleted</li>
    <li><strong>Local data</strong> is deleted when you uninstall the App or clear its data</li>
    <li>You can request deletion of analytics data by contacting us</li>
  </ul>

  <h2>6. Children's Privacy</h2>
  <p>The App is not intended for children under 13 years of age. We do not knowingly collect data from children. If you believe we have inadvertently collected data from a child, please contact us and we will promptly delete it.</p>

  <h2>7. Your Rights</h2>
  <p>Depending on your location, you may have the right to:</p>
  <ul>
    <li>Access the data we hold about you</li>
    <li>Request deletion of your data</li>
    <li>Opt out of analytics collection</li>
    <li>Request data portability</li>
  </ul>
  <p>To exercise any of these rights, please contact us using the details below.</p>

  <h2>8. Changes to This Policy</h2>
  <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date. Your continued use of the App after changes constitutes acceptance of the updated policy.</p>

  <h2>9. Contact Us</h2>
  <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
  <ul>
    <li>Email: <a href="mailto:privacy@hi1labs.com">privacy@hi1labs.com</a></li>
    <li>Website: <a href="https://hi1labs.com">hi1labs.com</a></li>
  </ul>`,
  },
  terms: {
    meta: {
      title: 'Terms of Service — App Name — hi1 labs',
      description: 'Terms of Service for App Name by hi1 labs.',
      ogTitle: 'Terms of Service — hi1 labs',
      ogDescription: 'Terms of Service for App Name by hi1 labs. Read our terms before using the app.',
    },
    header: {
      eyebrow: 'Legal',
      title: 'Terms of Service',
      lastUpdated: 'Last updated: March 1, 2026',
    },
    contentHtml: `
  <h2>1. Agreement to Terms</h2>
  <p>By downloading, installing, or using <strong>App Name</strong> ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>
  <p>The App is developed and maintained by <strong>hi1 labs</strong> ("we", "us", "our").</p>

  <h2>2. Use of the App</h2>
  <p>You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:</p>
  <ul>
    <li>Use the App in any way that violates applicable laws or regulations</li>
    <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
    <li>Use the App to transmit harmful, offensive, or illegal content</li>
    <li>Attempt to gain unauthorized access to any part of the App</li>
    <li>Use the App in any manner that could damage, disable, or impair its functionality</li>
  </ul>

  <h2>3. Intellectual Property</h2>
  <p>The App and its original content, features, and functionality are owned by hi1 labs and are protected by international copyright, trademark, and other intellectual property laws.</p>

  <h2>4. Disclaimer of Warranties</h2>
  <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

  <h2>5. Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, hi1 labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from:</p>
  <ul>
    <li>Your use of or inability to use the App</li>
    <li>Any unauthorized access to your data</li>
    <li>Any third-party content or services accessed through the App</li>
  </ul>

  <h2>6. Changes to These Terms</h2>
  <p>We may update these Terms from time to time. We will notify you of any material changes by updating the "Last updated" date. Your continued use of the App after changes constitutes acceptance of the updated Terms.</p>

  <h2>7. Governing Law</h2>
  <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>

  <h2>8. Contact Us</h2>
  <p>If you have any questions about these Terms, please contact us:</p>
  <ul>
    <li>Email: <a href="mailto:hello@hi1labs.com">hello@hi1labs.com</a></li>
    <li>Website: <a href="https://hi1labs.com">hi1labs.com</a></li>
  </ul>`,
  },
};
