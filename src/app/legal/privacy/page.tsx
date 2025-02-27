import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Heading } from "@/components/text";

export const metadata = {
  title: "Privacy Policy - 5th Bridge",
  description: "Learn how 5th Bridge Data Technologies LLP handles your data and privacy.",
};

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container className="mt-58 mb-24">
        <Heading as="h2">Privacy Policy</Heading>
        <div className="mt-8 space-y-6 text-gray-700">
          <p>Effective Date: March 1, 2025</p>

          <h3 className="text-lg font-semibold">Introduction</h3>
          <p>
            Welcome to the privacy policy of 5th Bridge Data Technologies LLP, a software services company based in Hyderabad, India.
          </p>
          <p>
            5th Bridge Data Technologies LLP respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your personal data, as well as your privacy rights and how the law protects you.
          </p>

          <h3 className="text-lg font-semibold">1. Important Information and Who We Are</h3>
          <h4 className="font-semibold">Purpose of This Privacy Policy</h4>
          <p>
            This privacy policy provides information on how 5th Bridge Data Technologies LLP collects and processes your personal data, including any data you provide when you sign up for services, visit our website, or communicate with us.
          </p>
          <p>
            This policy applies to our software services and any related interactions with clients, partners, or users. It does not cover the use of data by third parties with whom we do not have a direct relationship.
          </p>
          <p>
            This website and our services are not intended for children, and we do not knowingly collect data related to minors.
          </p>
          <h4 className="font-semibold">Controller</h4>
          <p>
            5th Bridge Data Technologies LLP is responsible for processing your personal data. When we refer to “we,” “us,” or “our” in this policy, we mean 5th Bridge Data Technologies LLP, which operates from Hyderabad, India.
          </p>
          <p>
            For privacy-related inquiries, you can contact us at: <br />
            5th Bridge Data Technologies LLP<br />
            Hyderabad, Telangana, India<br />
            <a href="mailto:privacy@fifthbridgetech.com" className="text-blue-600">privacy@fifthbridgetech.com</a>
          </p>

          <h3 className="text-lg font-semibold">2. Data We Collect About You</h3>
          <p>We collect and process different types of personal data, which may include:</p>
          <ul className="list-disc pl-5">
            <li><strong>Identity Data:</strong> Name, job title, company name, etc.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, business address.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device identifiers.</li>
            <li><strong>Usage Data:</strong> Information about how you use our services and website.</li>
            <li><strong>Financial Data:</strong> Bank details, billing information (only for transaction processing).</li>
          </ul>
          <p>We do not collect sensitive personal data, such as racial or ethnic details, religious beliefs, or biometric data.</p>

          <h3 className="text-lg font-semibold">3. How We Collect Your Data</h3>
          <p>We collect data through:</p>
          <ul className="list-disc pl-5">
            <li>Direct interactions (when you contact us via phone, email, or forms).</li>
            <li>Automated tracking (cookies and website analytics).</li>
            <li>Business engagements (from customers, partners, or publicly available sources).</li>
          </ul>

          <h3 className="text-lg font-semibold">4. How We Use Your Data</h3>
          <p>We will only use your personal data when the law allows us to. We typically use your data for:</p>
          <ul className="list-disc pl-5">
            <li>Providing and managing our software services.</li>
            <li>Communicating with you regarding services, updates, or support.</li>
            <li>Improving our services through analytics and feedback.</li>
            <li>Complying with legal and regulatory obligations.</li>
          </ul>

          <h3 className="text-lg font-semibold">5. Data Security</h3>
          <p>We implement security measures to protect your personal data from unauthorized access, loss, or misuse. Our systems are protected using industry-standard encryption, firewalls, and access controls.</p>

          <h3 className="text-lg font-semibold">6. Data Retention</h3>
          <p>We retain your personal data only as long as necessary for service provision, legal compliance, and legitimate business needs.</p>

          <h3 className="text-lg font-semibold">7. Sharing Your Data</h3>
          <p>We do not sell or rent personal data. We may share your data with:</p>
          <ul className="list-disc pl-5">
            <li>Service providers assisting in IT, payment processing, or business operations.</li>
            <li>Legal or regulatory authorities when required by law.</li>
            <li>Business partners under confidentiality agreements for specific projects.</li>
          </ul>

          <h3 className="text-lg font-semibold">8. International Data Transfers</h3>
          <p>As an India-based company, we primarily store and process data within India. We do not currently service EU customers, and GDPR does not apply to our operations. However, if required, we ensure data transfers are compliant with applicable Indian data protection laws.</p>

          <h3 className="text-lg font-semibold">9. Your Rights</h3>
          <p>Under Indian data protection laws, you may:</p>
          <ul className="list-disc pl-5">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request corrections to any inaccurate data.</li>
            <li>Request deletion of your data when it is no longer required.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
          <p>To exercise your rights, contact us at <a href="mailto:privacy@fifthbridgetech.com" className="text-blue-600">privacy@fifthbridgetech.com</a>.</p>

          <h3 className="text-lg font-semibold">10. Changes to This Privacy Policy</h3>
          <p>We may update this policy periodically. The latest version will always be available on our website.</p>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
