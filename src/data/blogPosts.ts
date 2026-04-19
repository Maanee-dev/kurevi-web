export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How to Integrate Bank of Maldives (BML) Payment Gateway into Your Website (Complete Technical Guide 2025)",
    slug: "bml-payment-gateway-integration-guide",
    date: "April 20, 2026",
    author: "Kurevi Team",
    category: "Web Design",
    image: "https://www.bankofmaldives.com.mv/storage/card/540/7855/1711950185.17119501852680.png",
    content: `Integrating the **Bank of Maldives (BML) payment gateway** allows businesses to accept payments via credit/debit cards, digital wallets (BML Pay, Apple Pay, Google Pay, WeChat Pay, AliPay, Union Pay), and bank transfers. This guide covers the technical integration process for developers and 2025.

### Overview: BML Connect API

BML provides the **BML Connect API** for direct integration into websites and applications. The API supports:

| Payment Method | Integration Type | Supported Currencies |
|----------------|-------------------|-------------------|
| Visa/Mastercard/Amex | Direct card processing | MVR, USD  |
| BML Pay | Digital wallet | MVR |
| Apple Pay | Digital wallet | MVR, USD  |
| Google Pay | Digital wallet | MVR, USD  |
| WeChat Pay | Digital wallet | MVR, USD  |
| AliPay | Digital wallet | MVR, USD  |
| Union Pay | Card/Wallet hybrid | MVR, USD  |

### Prerequisites for Integration

Before coding, ensure you have:

1. **BML Merchant Account** (approved and active)
2. **API Credentials:**
   - BML Application ID
   - BML API Key (Public Key)
   - Private Key (for server-side operations) 
3. **SSL Certificate** (valid and active on your domain)
4. **Server with PHP 7.0+** (or equivalent environment)

### Step 1: Obtain API Credentials

**For New Merchants:**
1. Submit Merchant Application form via [bankofmaldives.com.mv](https://www.bankofmaldives.com.mv) 
2. Provide business registration documents
3. Upon approval, receive access credentials via email

**For Existing BML Merchants:**
- Submit Merchant Application form with authorization letter
- Board resolution (for companies) 
- Access codes emailed within 1-2 business days

### Step 2: Choose Integration Method

BML offers three primary integration approaches:

| Method | Best For | Technical Level | User Experience |
|--------|-----------|-------------------|------------------|
| **API Integration** | Custom websites, web apps | High | Fully branded checkout |
| **BML Merchant Portal** | SMEs, invoice-based businesses | Low | Redirect to BML-hosted page |
| **BML mPOS App** | In-person retail, restaurants | Low | QR code scanning |

### Step 3: API Integration (For Custom Websites)

BML provides official API clients libraries:

**PHP Integration (Recommended):**

\`\`\`php
// Installation via Composer
composer require bankofmaldives/bml-connect-php

// Initialize client
use BMLConnect\\Client;

$client = new Client('your_api_key', 'your_app_id', 'sandbox'); // Use 'sandbox' for testing

// Create transaction
$transaction = $client->transactions->create([
    'provider' => 'card', // or 'alipay', 'bml_pay', etc.
    'Currency' => 'MVR',
    'Amount' => 1000, // 10.00 MVR (amount in cents/laaari)
    'RedirectUrl' => 'https://yourdomain.com/payment/complete'
]);

// Redirect customer to payment page
header('Location: ' . $transaction['url']);
\`\`\`

**Key Parameters:**
- \`Provider\`: Payment method (\`card\`, \`bml_pay\`, \`alipay\`, \`wechat_pay\`, \`union_pay\`, \`apple_pay\`, \`google_pay\`)
- \`Currency\`: \`MVR\` or \`USD\`
- \`Amount\`: Integer value in smallest currency unit (1 MVR = 100 laari)
- \`RedirectUrl\`: Where customer returns after payment 

### Step 4: Handle Payment Response

After payment completion, BML redirects to your \`RedirectUrl\` with transaction reference:

\`\`\`php
// Capture response at your redirect endpoint
$transactionRef = $_GET['transaction_ref'] ?? null;
$status = $_GET['status'] ?? null; // 'success', 'failed', 'cancelled'

// Verify transaction status via API
$transactionDetails = $client->transactions->get($transactionRef);

if ($transactionDetails['status'] === 'success') {
    // Process order fulfillment
    // Update database record
}
\`\`\`

### Step 5: Security & Compliance Requirements

**Mandatory Security Measures:**

1. **PCI DSS Compliance**: If storing, processing, or transmitting card data, full PCI DSS compliance required 
2. **3D Secure Authentication**: BML supports 3D Secure MPI for card transactions cardholder verification 
3. **TLS 1.2+**: Minimum encryption standard for all API communications
4. **Server-Side Processing**: Never expose API keys in client-side code 

**Data Protection:**
- Store API keys in environment variables, never in code repositories
- Implement webhook signature verification for transaction notifications
- Use BML's sandbox environment for all testing 

### Step 6: Testing & Go-Live

**Sandbox Testing:**
- Test card numbers available in BML Merchant Portal
- Simulate success/failure scenarios
- Test amount limits: MVR 1.00 - MVR 999,999.99 

**Pre-Launch Checklist:**
- [ ] SSL certificate active and valid
- [ ] API keys rotated and secured
- [ ] Error handling implemented for failed transactions cancellation handling
- [ ] Webhook endpoints configured for async notifications
- [ ] Refund process documented and tested



### Support & Resources

**Technical Documentation:**
- Official API Docs: [bankofmaldives.stoplight.io](https://bankofmaldives.stoplight.io) 
- GitHub Repository: [github.com/bankofmaldives/bml-connect](https://github.com/bankofmaldives/bml-connect) 
- PHP Client: [github.com/bankofmaldives/bml-connect-php](https://github.com/bankofmaldives/bml-connect-php) 

**Merchant Support:**
- Email: [merchant@bml.com.mv](mailto:merchant@bml.com.mv)
- Phone: 3330200 (24/7 merchant support) 
- Portal: [merchants.bankofmaldives.com.mv](https://dashboard.merchants.bankofmaldives.com.mv)

### Cost Structure

**Setup Costs:**
- Merchant Account Registration: **Free** (no upfront fee) 
- Integration Development: Variable (developer time/resources)

**Transaction Fees:**
- Card transactions: **2.5-4.5%** per transaction (varies by merchant category and volume) 
- Digital wallets: Similar range, specific rates provided upon approval
- No monthly maintenance fees for standard accounts 

**Important:** BML does not charge separate gateway fees—costs are bundled into per-transaction rates.

---

**Key Success Factors for BML Integration:**

1. **Start with Sandbox**: Always test thoroughly before production deployment
2. **Implement Webhooks**: Don't rely solely on redirect URLs; use async notifications for reliability
3. **Mobile-First Design**: Significant traffic in Maldives is mobile; ensure responsive payment pages
4. **Local Currency Support**: Display amounts in MVR for local customer trust
5. **Multi-Channel Ready**: Consider integrating BML mPOS for in-person sales alongside online payments

For complex implementations or enterprise requirements, consider engaging BML's technical integration team early in the process via [merchant@bml.com.mv](mailto:merchant@bml.com.mv).`
  },
  {
    title: "How to Register a Company in Maldives (Complete 2025 Guide)",
    slug: "how-to-register-company-maldives-2025",
    date: "April 19, 2026",
    author: "Kurevi Team",
    category: "Guides",
    image: "https://corporatemaldives.com/wp-content/uploads/2023/09/Corp-Feature-Photo-1-3.png",
    content: `Setting up a company in the Maldives requires navigating specific legal frameworks depending on your nationality and business structure. This guide covers all pathways: local sole proprietorships, private limited companies, and foreign investment routes.

### Option 1: Sole Proprietorship 
**Eligibility:** Maldivian citizens only (aged 18+) 

**Process:**
- **Name Reservation:** Check uniqueness via Business Registry (OneGov portal) - no fee
- **Document Preparation:**
  - National ID copy
  - Completed Business Registration Application
  - Proof of address
- **Submission:** Online via OneGov or in-person at Ministry of Economic Development & Trade (4th floor, Ameer Ahmed Magu, Malé)
- **Payment:** MVR 500 for 5-year registration 
- **Processing:** 1-2 business days
- **Post-Registration:** If monthly revenue exceeds MVR 40,000, register with Maldives Inland Revenue Authority (MIRA) within 60 days 

**Total Cost:** MVR 500 (registration only, excludes tax compliance costs)

### Option 2: Private Limited Company (Local or Foreign)
#### For Maldivian Citizens:
- **Minimum 2 shareholders**
- **Minimum capital:** MVR 2,000 (~$130 USD)
- **Registration fee:** Sliding scale based on authorized capital (MVR 1,000-MVR 10,000+) 
- **Annual fee:** MVR 2,000 (private companies) 

#### For Foreign Investors:
Foreign investors must obtain **Foreign Investment Approval** before company registration.

**Step-by-Step Foreign Investment Process:**

**Step 1: Foreign Investment Approval Application**
- Submit completed application form to: \`proposals@trade.gov.mv\`
- Include: Business plan, financial credibility letter, passport copies, constitutional documents 
- Processing fee: USD 5,000 (non-refundable) to Maldives Inland Revenue Authority 

**Step 2: No Objection Letter (NOL)**
- Issued by Ministry of Economic Development & Trade after review
- Timeline: Minimum 5-14 working days, maximum 30 days 

**Step 3: Company Registration**
- Reserve company name (free via OneGov)
- Submit incorporation documents:
  - Memorandum & Articles of Association (2 copies each)
  - Director/Secretary acceptance letters
  - Shareholder ID copies (passport data pages)
  - Board resolution (for corporate shareholders) 
- Pay registration fees (sliding scale: MVR 1,000+ depending on capital) 
- Stamp duty: MVR 500 

**Step 4: Tax Registration**
- Submit Form 1015 to MIRA for Tax Identification Number (TIN)

**Step 5: Seal Registration**
- Create company seal and register with Registrar of Companies (can be done online via Business Portal, ~24 hours) 

**Step 6: Foreign Investment Agreement**
- Sign formal agreement with Ministry of Economic Development & Trade
        
**Total Costs for Foreign Company:**
- Foreign investment fee: USD 5,000
- Company registration: MVR 1,000-MVR 10,000+
- Legal/professional fees: USD 1,500-5,000 (if using consultants)
- **Minimum total:** ~USD 7,500-12,000

### Key Regulatory Bodies

| Authority | Purpose | Contact |
|-----------|---------|---------|
| Ministry of Economic Development & Trade | Foreign investment approval, company registration | business@trade.gov.mv |
| Registrar of Companies | Business entity incorporation | Within Ministry (4th floor) |
| Maldives Inland Revenue Authority (MIRA) | Tax registration, GST compliance | 1415@mira.gov.mv |
| Maldives Pension Administration Office (MPAO) | Employee pension registration | - |
`
  },
  {
    title: "How to Register a .mv Domain in Maldives (The Complete Guide)",
    slug: "how-to-register-mv-domain",
    date: "April 19, 2026",
    author: "Kurevi Team",
    category: "Guides",
    image: "https://corporatemaldives.com/wp-content/uploads/2023/10/Corp-Feature-Photo-2023-10-01T143650.469.png",
    content: `**Registering a .mv domain** is your first step toward establishing a credible online presence in the Maldives.

### What is a .mv Domain?
The **.mv domain** is the country code top-level domain (ccTLD) for the Maldives, managed exclusively by **Dhiraagu Pvt. Ltd.** (DHIVEHINET) since 1996. Unlike generic domains like .com or .net, .mv instantly identifies your business as locally operated in the Maldives.

### Who Can Register a .mv Domain?
According to registry requirements, **both individuals and businesses can register** .mv domains. However, for **.com.mv** domains, the owner must be a company with local presence in the Maldives.

### Step-by-Step Registration Process

**Step 1: Check Availability**
- Visit Dhiraagu's MyAccount portal or use their online domain check tool
- Enter your desired domain name (3-63 characters, alphanumeric with hyphens)
- Avoid starting/ending with hyphens or placing hyphens in 3rd/4th positions

**Step 2: Application Submission**
1. Log into **Dhiraagu MyAccount** (requires existing Dhiraagu customer status)
2. Navigate to: Apply for Service → Applications
3. Select "Web Hosting & Domain Names" → "New Domain Names"
4. Enter primary and secondary domain choices
5. Submit application with tracking number

**Step 3: Approval & Payment**
- If approved: Pay **MVR 250 registration fee** plus **MVR 50/month** ongoing fees
- Annual option available: **MVR 600/year** for .com.mv domains

**Important Note:** The system availability checker is **buggy** and often shows available domains as taken. Always verify through alternative means if your initial check shows availability.

### Registration Costs (2025 Rates)

| Domain Type | Registration | Annual Renewal |
|-------------|--------------|----------------|
| .mv (via Dhiraagu) | MVR 250 + MVR 50/month | MVR 50/month |
| .com.mv | MVR 600/year | MVR 600/year |
| International registrars | $265.99-$454.80/year | $318.99/year  |

### Required Documentation
For business domains (.com.mv):
- Business registration certificate from Ministry of Economic Development
- If domain matches reserved business name, forward certificate to 123@dhiraagu.com.mv

### Alternative: International Registrars
If you lack local presence, international registrars like **101domain**, **INWX**, or **Gandi** can register on your behalf using local representatives, typically at **$265.99-$454.80 annually**.`
  },
  {
    title: "How Much Does a .mv Domain Cost in Maldives? (2025 Pricing Breakdown)",
    slug: "mv-domain-cost-pricing",
    date: "April 18, 2026",
    author: "Kurevi Team",
    category: "Pricing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyNHGmSu6nZ4yqw33TnrNiZh2PDGldX_YTg&s",
    content: `Understanding **true .mv domain costs** requires looking beyond headline prices at the complete pricing structure.

### Official Dhiraagu Pricing (Direct Registry)

**Initial Costs:**
- **Registration Fee:** MVR 250 (one-time)
- **Monthly Fee:** MVR 50 per month (MVR 600/year equivalent) 

**Total First-Year Cost:** MVR 850 (Registration + 12 months)
**Annual Renewal:** MVR 600/year

### International Registrar Pricing Comparison

| Registrar | 1-Year Registration | Annual Renewal | Transfer Fee |
|-----------|---------------------|------------------|--------------|
| INWX | $454.80 | $454.80 | $454.80  |
| 101domain | $265.99 | $318.99 | $265.99  |
| Gandi | $575.98 | $575.98 | N/A  |
| AsiaRegister | ¥2,990 (~$410) | ¥2,990 | ¥2,990  |
| Marcaria | $265.99 | $318.99 | $265.99  |

### Hidden Costs to Consider

**1. Trustee/Local Agent Fees:** International registrars often include local representation in their pricing, but verify if this is included or additional.

**2. Payment Method Fees:**
- Credit card processing fees (typically 2-3%)
- Bank transfer fees for international payments
- Currency conversion spreads 

**3. Premium Domain Pricing:** Short, generic, or dictionary-word domains may command premium pricing through Dhiraagu's allocation system or aftermarket sales.

**4. Redemption/Grace Period Fees:** If domain expires, recovery fees applies (typically 30-day grace period, then redemption period at higher cost).

### Cost-Saving Strategies

**Multi-Year Registration:** Some registrars offer slight discounts for 2-year commitments.

**Bundle with Hosting:** Dhiraagu offers combined domain + hosting packages starting at **MVR 90/month** for basic shared hosting.

**Compare International vs. Local:**
- **Dhiraagu Direct:** MVR 600/year (~$39 USD at current rates)
- **International Registrars:** $265.99-$454.80/year

**Recommendation:** For businesses primarily serving Maldivian customers, the Dhiraagu route offers better local support and DNS management. For international businesses, international registrars may offer better integration with existing infrastructure.`
  },
  {
    title: "Who Provides .mv Domain Registration in Maldives?",
    slug: "who-provides-mv-domain",
    date: "April 17, 2026",
    author: "Kurevi Team",
    category: "Guides",
    image: "https://s1.mihaaru.com/photos/2019/04/15/233395_3_6d9b6255916045beb2f5b35aa759f8ea62015b36_medium.jpg",
    content: `The **.mv domain registry** operates under a **monopoly structure** with specific authorized providers.

### The Registry: Dhiraagu Pvt. Ltd.

**Dhiraagu** (formerly Dhivehi Raajjeyge Gulhun) has been the **sole authorized registry operator** for .mv domains since 1996. They maintain the master database and policy enforcement for all .mv domains.

### Registration Channels

**Channel 1: Direct Through Dhiraagu**
- **Requirement:** Must be an existing Dhiraagu customer (broadband/mobile)
- **Portal:** MyAccount online services
- **Best For:** Businesses already using Dhiraagu services 

**Channel 2: International Accredited Registrars**
These companies are accredited by Dhiraagu to sell .mv domains globally:

| Registrar | Accreditation Status | Local Agent Service |
|-----------|---------------------|---------------------|
| 101domain | ICANN Accredited | Included  |
| INWX | ICANN Accredited | Included  |
| Gandi | ICANN Accredited | Corporate services only  |
| Marcaria | ICANN Accredited | Included  |
| AsiaRegister | ICANN Accredited | Included  |

### How to Verify Legitimate Providers

**Check ICANN Accreditation:**
Visit lookup.icann.org and verify the registrar's accreditation status.

**Check Dhiraagu Partnership:**
Contact Dhiraagu business services directly to confirm if a provider is authorized: **business@dhiraagu.com.mv** or **123@dhiraagu.com.mv**

### Avoiding Scams

**Red Flags:**
- Prices significantly below MVR 250 registration fee (unless part of hosting bundle)
- "Lifetime domain" offers (registry requires annual renewal)
- Registration without proper documentation for .com.mv business domains`
  },
  {
    title: "Creating a Professional Business Website in Maldives (Complete Guide)",
    slug: "creating-professional-website-maldives",
    date: "April 16, 2026",
    author: "Kurevi Team",
    category: "Web Design",
    image: "https://corporatemaldives.com/wp-content/uploads/2021/10/Corp-Feature-Photo-2021-10-07T112203.168.png",
    content: `Building a **professional business website** in the Maldives requires understanding local market conditions, technical requirements, and cost structures.

### Phase 1: Planning & Requirements (Week 1-2)

**Domain Strategy:**
- Secure **.mv or .com.mv domain** through Dhiraagu or accredited registrar
- Consider **.com** parallel registration for international credibility

**Technical Requirements:**
- **Local Hosting:** Improves latency for Maldivian visitors (server location in Malé)
- **SSL Certificate:** Essential for e-commerce and data protection
- **Business Email:** @yourdomain.mv addresses increase credibility vs. Gmail/Yahoo 

### Phase 2: Design & Development (Week 3-6)

**Local Market Considerations:**

The Maldives has **unique connectivity challenges**:
- Island geography affects internet infrastructure
- Mobile-first audience (high smartphone penetration)
- Dhivehi language support may be relevant for local customer segments

**Recommended Platforms:**

| Business Type | Platform | Local Hosting Integration |
|---------------|----------|---------------------------|
| Basic Brochure | WordPress | Dhiraagu shared hosting (MVR 90-480/month)  |
| E-commerce | Shopify/WooCommerce | Dedicated server recommended |
| Corporate Portal | Custom ASP.NET/PHP | Dhiraagu VPS or Dedicated  |
| Tourism/Hospitality | WordPress/Custom | Essential: High bandwidth + CDN |

### Phase 3: Content & Localization

**Essential Pages for Maldivian Business Websites:**
1. **Homepage** with value proposition (English/Dhivehi if local-focused)
2. **About Us** with local business registration details
3. **Services/Products** clearly categorized
4. **Contact Page** with:
   - Physical address in Malé or atoll
   - Local phone number (+960)
   - Dhiraagu business customers: Include customer service portal 
5. **Terms & Privacy Policy** (compliant with Maldivian data protection norms)

### Phase 4: Launch & Marketing (Week 7-8)

**Local SEO Essentials:**
- Register with **Google My Business** for Maldives
- Submit to local directories: **business.gov.mv** if applicable
- Social media integration: Facebook/Instagram widely used in Maldives`
  },
  {
    title: "Website Development Costs in Maldives (2025 Complete Budget Guide)",
    slug: "website-development-costs-maldives",
    date: "April 15, 2026",
    author: "Kurevi Team",
    category: "Pricing",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Male-total.jpg/1280px-Male-total.jpg",
    content: `Understanding **real website development costs** in the Maldives requires breaking down components from domain to deployment.

### Cost Component Breakdown

| Component | Budget Option | Professional | Enterprise |
|-----------|-------------|---------------|------------|
| **Domain** (.mv) | MVR 600/year | MVR 600/year | MVR 600/year |
| **Hosting** | Shared: MVR 90-250/mo  | VPS: MVR 2k-2.5k/year | Dedicated: MVR 3k+/year |
| **Design** | Template: Free-$50 | Custom: $500-2,000 | Agency: $2,000-10,000 |
| **Development** | DIY: Free | Freelancer: $1k-5k | Agency: $5k-50k |
| **Content** | Self-written: Free | Copywriter: $500-2k | Content Agency: $2k-10k |
| **Maintenance** | Self-managed: Free | Retainer: MVR 5k-15k/mo | Full team: MVR 20k+/mo |

### Dhiraagu Web Hosting Packages (Business Grade)

**Shared Hosting Tiers:**
- **Starter:** MVR 90/month - 1 GB space, 1 GB bandwidth 
- **Standard:** MVR 200/month - 5 GB space, 100 GB bandwidth 
- **Pro:** MVR 280/month - 10 GB space, unlimited bandwidth 
- **Pro Plus:** MVR 430/month - 20 GB space, unlimited 

**Business Fibre Bundles (if office required):**
- **Biz Limitehneh 30M:** MVR 1,490/month (30 Mbps down/15 Mbps up) 
- **Biz Limitehneh 50M:** MVR 2,490/month (50 Mbps symmetrical) 
- **Biz Limitehneh 100M:** MVR 3,490/month (100 Mbps symmetrical) 
- **Biz Limitehneh 1G:** MVR 6,490/month (1 Gbps, 20TB allowance) 

**Setup Fees:** MVR 1,000 (new connection) or MVR 250 (existing fibre) 

### Total Project Budget Estimates

| Website Type | DIY Cost | Professional Agency | Notes |
|-------------|---------|---------------------|-------|
| Basic 5-page Brochure | MVR 15k-25k | MVR 50k-150k | Domain + Hosting + Template |
| E-commerce (Small) | MVR 25k-40k | MVR 150k-400k | Includes payment integration |
| Corporate Portal | MVR 40k+ | MVR 400k-1.5M+ | Custom functionality, database |
| Tourism Booking Platform | MVR 35k-60k | MVR 300k-800k | Multi-language, booking engine |

### Cost Optimization Strategies

**1. Phased Approach:**
Start with landing page (MVR 15,000-30,000), expand based on customer acquisition.

**2. Hybrid Development:**
Use international freelancers for development (Upwork/Fiverr) with local project management.

**3. Government Support:**
Check **SME Grant schemes** through Ministry of Economic Development for digital transformation subsidies.

**4. Open Source Solutions:**
WordPress + WooCommerce reduces e-commerce costs by 60-70% vs. custom development.

---

### Summary: Key Providers for Maldives Web Services

| Service | Primary Provider | Alternative | Contact |
|---------|-----------------|-------------|---------|
| **Domain Registration** | Dhiraagu | 101domain, INWX | business@dhiraagu.com.mv |
| **Web Hosting** | Dhiraagu | Web Host Maldives | sales@dhiraagu.com.mv |
| **Fibre Internet** | Dhiraagu Biz Limitehneh | Ooredoo | biz@dhiraagu.com.mv |
| **Web Development** | Local Agencies | Freelancers | Varies by project scope |

**Critical Success Factor:** For Maldivian businesses, prioritize **.mv domain + local hosting** for search engine visibility and customer trust, with international CDN for global performance.`
  }
];
