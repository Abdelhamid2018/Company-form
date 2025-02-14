// Dictionary that maps current view + choice to the next view
const viewMapping = {
  "view1-seller-company": "seller-company-property-address",
  "view1-buyer-individual": "",
  "view1-buyer-company": "",
  "view1-seller-individual": "",
  // level 2
  "seller-company-property-address":"seller-company-property-type",
  "seller-company-property-type": "seller-company-property-use",
  "seller-company-property-use": "seller-company-information",
  "seller-company-information":"seller-company-type",

  "seller-company-type-corporation": "seller-company-type-corporation-tax-id",
  "seller-company-type-corporation-tax-id": "seller-company-type-corporation-president",
  "seller-company-type-corporation-president": "seller-company-type-corporation-vice-president",
  "seller-company-type-corporation-vice-president": "seller-company-operating-agreement",
  "seller-company-type-llc": "seller-company-type-llc",
  "seller-company-type-llc-single-us":"seller-company-type-llc-single-us-tax-id",
  "seller-company-type-llc-single-non-us":"seller-company-type-llc-single-non-us-tax-id",
  "seller-company-type-llc-single-non-us-tax-id":"seller-company-type-llc-manager",
  "seller-company-type-llc-single-us-tax-id":"seller-company-type-llc-manager",
  "seller-company-type-llc-multi-member":"seller-company-type-llc-multi-member-tax-id",
  "seller-company-type-llc-multi-member-tax-id":"seller-company-type-llc-manager",
  "seller-company-type-llc-manager": "seller-company-operating-agreement",
  "seller-company-operating-agreement-yes":"seller-company-operating-agreement-upload",
  "seller-company-operating-agreement-no":"seller-company-owners",
  "seller-company-operating-agreement-upload": "seller-company-owners",
  "seller-company-owners":"seller-company-attorney-representation",
  "seller-company-attorney-representation-yes": "seller-company-attorney-representation-details",
  "seller-company-attorney-representation-details":"seller-company-realtor-information",
  "seller-company-attorney-representation-no": "seller-company-realtor-information",
  "seller-company-realtor-information-yes": "seller-company-realtor-information-details",
  "seller-company-realtor-information-details": "terms-and-conditions",
  "seller-company-realtor-information-no": "terms-and-conditions",
  "terms-and-conditions": "submitted-form",
};