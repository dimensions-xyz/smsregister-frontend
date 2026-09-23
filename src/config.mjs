export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.dimensions.smsregister";

export const SUPPORT_EMAIL = "support@byteflowy.com";
export const SITE_URL = "https://smsregister.byteflowy.com";

export const SITE = {
  name: "SMSRegister",
  origin: SITE_URL,
  description:
    "Order a virtual number, receive verification codes, and manage your SRCoin balance from one focused Android app.",
  googlePlayUrl: GOOGLE_PLAY_URL,
  supportEmail: SUPPORT_EMAIL,
  lastUpdated: "September 23, 2026",
};

export const ROUTES = [
  { key: "home", label: "Home", href: "" },
  { key: "faq", label: "FAQ", href: "faq/" },
  { key: "support", label: "Support", href: "support/" },
  {
    key: "privacy",
    label: "Privacy Policy",
    href: "privacy-policy/",
  },
  {
    key: "terms",
    label: "Terms & Conditions",
    href: "terms-and-conditions/",
  },
];
