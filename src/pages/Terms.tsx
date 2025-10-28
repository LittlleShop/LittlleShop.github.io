import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
              <p>
                By accessing or using LittleShop's website and services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Use of Our Service</h2>
              <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Product Information</h2>
              <p>
                We strive to display product information accurately. However, we do not warrant that product descriptions, 
                prices, or other content is accurate, complete, or error-free. We reserve the right to correct errors and 
                update information at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be received before order processing</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Shipping and Delivery</h2>
              <p>
                We aim to process and ship orders promptly. Delivery times are estimates and not guaranteed. 
                Risk of loss passes to you upon delivery to the carrier.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Returns and Refunds</h2>
              <p>
                We accept returns within 30 days of purchase for most items in original condition. 
                Refunds will be processed to the original payment method. Some exclusions apply.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of LittleShop 
                or its content suppliers and is protected by copyright and trademark laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Disclaimer of Warranties</h2>
              <p>
                Our service is provided "as is" without warranties of any kind, either express or implied. 
                We do not warrant that our service will be uninterrupted or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, LittleShop shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of our service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Safety Warning</h2>
              <p>
                Many of our toys contain small parts and are not suitable for children under 3 years. 
                Always supervise children during play and follow age recommendations and safety instructions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
                Your continued use of our service constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">13. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: support@littleshop.toys</li>
                <li>Phone: 1-800-TOY-SHOP</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
