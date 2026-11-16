/*
  Donation configuration. Add the foundation’s verified UPI ID later.
  Until then, Donate Now opens a generic UPI payment intent without a recipient.
  Payments cannot be completed until the official UPI ID is added here.
*/
window.SITE_CONFIG = {
  upiId: "",
  payeeName: "Mustafai Organization of India Foundation",
  donationNote: "Donation to Mustafai Organization of India Foundation"
};
