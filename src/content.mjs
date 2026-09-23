export const faqItems = [
  {
    question: "What is SMSRegister?",
    answer:
      "SMSRegister is an Android app for ordering temporary virtual phone numbers and receiving verification codes for supported services. Available services, countries, numbers, and prices come from external SMS providers and can change over time.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Yes. Ordering numbers, viewing order history, managing SRCoins, receiving account-linked notifications, and requesting eligible refunds require an account. SMSRegister currently uses Google Sign-In through Firebase Authentication.",
  },
  {
    question: "How do I order a number?",
    answer:
      "Sign in, choose a supported service and country, review the SRCoin price, and confirm the order. If your balance is sufficient and a number is available, the app creates the order, shows the number, and deducts the displayed SRCoin amount.",
  },
  {
    question: "How long does a number remain active?",
    answer:
      "A new order is created with a 30-minute active window. The My Numbers screen shows the remaining time. Availability and delivery still depend on the selected service, country, and external SMS provider.",
  },
  {
    question: "How will I know when the SMS arrives?",
    answer:
      "When the provider delivers a valid verification code, the order is marked Completed and the code appears in My Numbers. If you grant notification permission, SMSRegister also sends a push notification through OneSignal containing the service name and code.",
  },
  {
    question: "What do Pending, Completed, Expired, and Refunded mean?",
    answer:
      "Pending means the order is still waiting for a code. Completed means a code was received. Expired is the app's display state for a Pending order whose 30-minute window has ended. Refunded means an eligible order was refunded and its spent SRCoins were returned.",
  },
  {
    question: "What happens if I do not receive an SMS?",
    answer:
      "After the 30-minute window ends, a Pending order with no SMS code becomes eligible for a refund request. The refund is not automatic: request it from My Numbers. If the request succeeds, the SRCoins spent on that order are returned to your balance.",
  },
  {
    question: "When is an order not refundable?",
    answer:
      "An order cannot be refunded before it expires, after an SMS code has arrived, after it has already been refunded, or when it is not yours. Temporary payment-service or network errors can also delay a refund request; in that case, try again or contact support.",
  },
  {
    question: "How do SRCoins work?",
    answer:
      "SRCoins are SMSRegister's in-app balance. SRCoin packs are offered through Google Play and handled by RevenueCat. Each number shows its SRCoin price before confirmation; that amount is deducted when the order is created. Wallet shows purchase, spend, refund, and related balance activity.",
  },
  {
    question: "Are all services and countries always available?",
    answer:
      "No. The catalog and prices are synchronized from external SMS providers, and a listed option can become unavailable before an order is completed. If no number is available, choose another country or service, or try again later.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Open Profile, choose Delete Account, and confirm. The app then signs you out. The backend deactivates the account using soft deletion rather than immediately erasing every stored record; see the Privacy Policy for what this means for account, order, and transaction records.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Use Contact Support in the app's Profile screen or email support@byteflowy.com. The app can include your user ID and user-agent information in the draft email so the support team can investigate technical issues.",
  },
];

export const privacySections = [
  {
    id: "overview",
    title: "1. Overview",
    body: [
      "This Privacy Policy explains how SMSRegister processes information when you use the Android app and its supporting API. It is based on the current app and backend behavior as of the date shown above.",
      "SMSRegister is an account-based service. Some information is supplied by you or your Google account, while other information is created when you sign in, order a number, receive an SMS, purchase SRCoins, request a refund, or contact support.",
    ],
  },
  {
    id: "account-data",
    title: "2. Account and authentication data",
    body: [
      "SMSRegister uses Google Sign-In and Firebase Authentication. After sign-in, the backend may store your Firebase identifier, email address, display name, phone number if present on the Firebase account, profile image URL, authentication provider, internal user ID, account role, active status, and account timestamps.",
      "The backend issues its own access and refresh tokens for authenticated API requests. These tokens identify your account and session; the app stores them locally so you can remain signed in.",
    ],
  },
  {
    id: "usage-data",
    title: "3. Orders, SRCoins, and service activity",
    body: [
      "For virtual-number orders, SMSRegister stores information such as the selected service and country, assigned phone number, provider and activation identifiers, order status, verification code when received, SRCoin amount spent, provider cost, creation and update times, and the order expiry time.",
      "SRCoin and purchase records may include balance changes, transaction type and amount, product and store information, RevenueCat or store transaction identifiers, event timestamps, environment, and refund-related events. This information supports balances, order history, refunds, reconciliation, fraud prevention, and support.",
    ],
  },
  {
    id: "technical-data",
    title: "4. Device, request, and diagnostic data",
    body: [
      "The API processes IP address and user-agent information. The account attributes record stores the latest login IP address, user agent, and last-login time. Individual number orders also store the IP address and user agent associated with the order. Requests may include app version and language information, which the service uses for compatibility and localized responses.",
      "When the service is behind Cloudflare, the API may receive a country-code header during login. The current backend uses it for registration operations but does not persist that country value in the account attributes record.",
      "Firebase Crashlytics is used for crash and diagnostic reporting. Firebase Analytics is included in the Android app to measure app usage and performance. These services may process app instance, device, interaction, and diagnostic information according to Google's applicable terms and settings.",
    ],
  },
  {
    id: "notifications",
    title: "5. Notifications",
    body: [
      "SMSRegister uses OneSignal for push notifications. After sign-in, the app links your internal SMSRegister user ID to OneSignal and may attach a sign-in-method tag. If you grant Android notification permission, OneSignal can deliver notifications such as a received verification code. Notification payloads may include the service name, activation identifier, and verification code.",
      "You can manage notification permission in Android settings. Turning notifications off does not prevent a received code from appearing in My Numbers.",
    ],
  },
  {
    id: "third-parties",
    title: "6. Service providers",
    body: [
      "SMSRegister relies on service providers to operate: Google and Firebase for sign-in, analytics, and crash reporting; Google Play for in-app purchases; RevenueCat for in-app SRCoin pack purchases, purchase status, and SRCoin balance management; and OneSignal for push notifications.",
      "These providers process information under their own terms and privacy practices. SMSRegister sends only information needed for the relevant function, such as an internal user ID for billing or notifications and purchase details for reconciliation.",
    ],
  },
  {
    id: "purposes",
    title: "7. Why information is used",
    body: [
      "Information is used to authenticate users, operate accounts, supply virtual numbers, receive and display codes, maintain SRCoin balances and transaction history, process eligible refunds, send requested notifications, provide support, prevent duplicate or abusive orders, secure the API, diagnose failures, and improve reliability.",
    ],
  },
  {
    id: "retention",
    title: "8. Retention and account deletion",
    body: [
      "You can request account deletion from Profile. The current backend performs a soft deletion: it marks the account as deleted and inactive instead of immediately removing the database row. This prevents the deleted account from authenticating and helps preserve account-limit, order, transaction, refund, security, and audit relationships.",
      "A single Google identity or email address may be used to create no more than three SMSRegister accounts over its lifetime. Soft-deleted accounts continue to count toward this limit. Once the limit has been reached, deleting an account does not make it possible to create another account with the same Google identity or email address.",
      "Because deletion is a soft deletion, account, order, SRCoin transaction, and related operational records may remain after you delete the account. SMSRegister does not represent the in-app deletion action as immediate erasure of every record. Third-party providers may also retain information under their own legal and operational requirements.",
      "Where applicable law gives you additional access, correction, or deletion rights, contact support. Requests are evaluated against security, fraud-prevention, transaction-record, and legal obligations.",
    ],
  },
  {
    id: "security",
    title: "9. Security",
    body: [
      "SMSRegister uses authenticated API requests, Firebase token verification, request throttling, webhook verification, idempotency controls, and operational monitoring. No system can guarantee absolute security, but these controls are intended to protect accounts, orders, balances, and service infrastructure.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact",
    body: [
      "For privacy questions or requests, email support@byteflowy.com. Providing your SMSRegister user ID can help locate the correct account, but do not send passwords, access tokens, or verification codes by email.",
    ],
  },
];

export const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of these terms",
    body: [
      "By signing in to SMSRegister, ordering a virtual number, or purchasing SRCoins, you agree to these Terms & Conditions and the Privacy Policy. If you do not agree, do not use the service.",
    ],
  },
  {
    id: "service",
    title: "2. The service",
    body: [
      "SMSRegister is an Android application that lets authenticated users spend SRCoins to order temporary virtual phone numbers for supported services and receive verification codes. SMSRegister is not a mobile carrier and does not provide a permanent phone line.",
      "Services, countries, number inventory, prices, and delivery depend on external SMS providers and may change or become unavailable without notice. A displayed option is not a guarantee that a number can still be allocated when you confirm an order.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts",
    body: [
      "You must sign in with Google to use account features. You are responsible for maintaining control of your Google account, device, and active SMSRegister session. Do not share access tokens, verification codes, or account access with others.",
      "The service limits repeated account creation associated with the same identity. Deleting an account does not reset that lifetime account-creation limit. SMSRegister may restrict or deactivate access when needed to protect users, providers, balances, or service infrastructure from abuse.",
    ],
  },
  {
    id: "orders",
    title: "4. Virtual-number orders",
    body: [
      "Before ordering, the app shows the selected service, country, and SRCoin cost. When an order succeeds, the displayed SRCoin amount is deducted and the number is placed in My Numbers. New orders have a 30-minute active window.",
      "Use a number only for the selected service and lawful verification purpose. You must not use SMSRegister for fraud, harassment, impersonation, spam, unauthorized account access, evasion of platform rules, or any activity that violates law or a third party's terms.",
      "A number may have been recycled or controlled by an external provider. Do not use a temporary number for accounts or communications that require long-term access, recovery, confidentiality, or emergency use.",
    ],
  },
  {
    id: "delivery",
    title: "5. SMS delivery and availability",
    body: [
      "SMS delivery is not guaranteed. Delivery can fail or be delayed because of the selected platform, sender restrictions, country routing, provider inventory, connectivity, misuse controls, or third-party outages.",
      "When a valid code is delivered, the order is marked Completed and the code is shown in the app. Push notification delivery additionally depends on OneSignal, Android settings, network access, and your notification permission.",
    ],
  },
  {
    id: "coins",
    title: "6. SRCoins and purchases",
    body: [
      "SRCoins are a closed-loop in-app balance used only for SMSRegister orders. They are not money, are not transferable between users, and cannot be withdrawn for cash. SRCoin packs are purchased through Google Play and processed with RevenueCat; store pricing, taxes, payment authorization, and purchase remedies are also subject to Google Play's applicable terms.",
      "Purchase, refund, reversal, and system-adjustment events may change your balance. Do not attempt to exploit duplicate requests, payment reversals, provider errors, or technical faults to obtain numbers or SRCoins without valid payment.",
    ],
  },
  {
    id: "refunds",
    title: "7. Order refunds",
    body: [
      "If no SMS code arrives, an order is refundable only after its 30-minute window has expired, while it remains Pending, and only if no SMS code is recorded. Refunds are requested from My Numbers; they are not automatically issued when the timer ends.",
      "A successful eligible refund returns the exact SRCoin amount spent on that order and marks it Refunded. An order cannot be refunded before expiry, after code delivery, more than once, or by another user. Temporary RevenueCat, provider, network, or service errors may require you to retry or contact support.",
      "Refunds of Google Play SRCoin-pack purchases are distinct from order-level SRCoin refunds and are governed by the store's purchase and refund process. A store refund or reversal may be reflected in your SMSRegister balance and transaction history.",
    ],
  },
  {
    id: "suspension",
    title: "8. Suspension and termination",
    body: [
      "SMSRegister may suspend, limit, or terminate access when reasonably necessary to investigate abuse, protect the service or providers, respond to legal requirements, or prevent unauthorized balance and ordering activity.",
      "You may delete your account from Profile. Deletion deactivates and soft-deletes the backend account and signs you out; it does not immediately erase every order, transaction, security, or operational record. See the Privacy Policy for details.",
    ],
  },
  {
    id: "availability",
    title: "9. Service availability and changes",
    body: [
      "SMSRegister may update its catalog, prices, providers, app, API, SRCoin offerings, or supported features. Maintenance, security incidents, provider failures, or events outside reasonable control may interrupt the service. We do not promise uninterrupted access or availability of a particular service, country, number, or sender.",
    ],
  },
  {
    id: "liability",
    title: "10. Disclaimers and limitation of liability",
    body: [
      "To the extent permitted by applicable law, SMSRegister is provided on an as-available basis. SMSRegister is not responsible for a third party refusing a virtual number, delayed or missing SMS delivery, loss of access to an account created with a temporary number, or actions taken by Google Play, RevenueCat, OneSignal, an SMS provider, or the destination service.",
      "Nothing in these terms excludes rights or liability that cannot legally be excluded. Otherwise, liability is limited to the direct, foreseeable loss arising from SMSRegister's own failure to provide the service with reasonable care.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to these terms",
    body: [
      "These terms may be updated when the product, providers, or legal requirements change. The current version and its last-updated date will be published on this page. Continued use after an update means you accept the revised terms where permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    body: [
      "Questions about these terms or an order can be sent to support@byteflowy.com. Include your user ID and relevant order details, but never email your password, access token, or verification code.",
    ],
  },
];
