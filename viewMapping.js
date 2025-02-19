

const viewMapping = {
  ...viewMappingBuyerCompany,
  "view1-seller-company": "seller-company-property-address",

  "view1-seller-individual": "seller-individual-property-address",

  "view1-buyer-individual": "buyer-individual-property-address",

  // subviews

  "seller-company-property-address": "seller-company-property-type",
  "seller-company-property-type": "seller-company-property-use",
  "seller-company-property-use": "seller-company-information",
  "seller-company-information": "seller-company-type",
  "seller-company-type-corporation": "seller-company-type-corporation-tax-id",
  "seller-company-type-corporation-tax-id":
    "seller-company-type-corporation-president",
  "seller-company-type-corporation-president":
    "seller-company-type-corporation-vice-president",
  "seller-company-type-corporation-vice-president":
    "seller-company-operating-agreement",
  "seller-company-type-llc": "seller-company-type-llc",
  "seller-company-type-llc-single-us":
    "seller-company-type-llc-single-us-tax-id",
  "seller-company-type-llc-single-non-us":
    "seller-company-type-llc-single-non-us-tax-id",
  "seller-company-type-llc-single-non-us-tax-id":
    "seller-company-type-llc-manager",
  "seller-company-type-llc-single-us-tax-id": "seller-company-type-llc-manager",
  "seller-company-type-llc-multi-member":
    "seller-company-type-llc-multi-member-tax-id",
  "seller-company-type-llc-multi-member-tax-id":
    "seller-company-type-llc-manager",
  "seller-company-type-llc-manager": "seller-company-operating-agreement",
  "seller-company-operating-agreement-yes":
    "seller-company-operating-agreement-upload",
  "seller-company-operating-agreement-no": "seller-company-owners",
  "seller-company-operating-agreement-upload": "seller-company-owners",
  "seller-company-owners": "seller-company-attorney-representation",
  "seller-company-attorney-representation-yes":
    "seller-company-attorney-representation-details",
  "seller-company-attorney-representation-details":
    "seller-company-realtor-information",
  "seller-company-attorney-representation-no":
    "seller-company-realtor-information",
  "seller-company-realtor-information-yes":
    "seller-company-realtor-information-details",
  "seller-company-realtor-information-details": "terms-and-conditions",
  "seller-company-realtor-information-no": "terms-and-conditions",
  "terms-and-conditions": "submitted-form",

  // seller individual

  "seller-individual-property-address": "seller-individual-property-type",
  "seller-individual-property-type": "seller-individual-transaction-type",
  "seller-individual-transaction-type": "seller-individual-hoa-information",

  "seller-individual-hoa-information-yes": "seller-individual-hoa-information-details",
  "seller-individual-hoa-information-details": "seller-individual-property-tenant-occupied",
  "seller-individual-hoa-information-no":
    "seller-individual-property-tenant-occupied",

  "seller-individual-property-tenant-occupied-yes":
    "seller-individual-lease-contract",
  "seller-individual-lease-contract": "seller-individual-sellers",
  "seller-individual-property-tenant-occupied-no": "seller-individual-sellers",
  "seller-individual-sellers": "seller-individual-mortgage-information",
  "seller-individual-mortgage-information":
    "seller-individual-attorney-representation",

  "seller-individual-attorney-representation-yes":
    "seller-individual-attorney-representation-details",
  "seller-individual-attorney-representation-details":
    "seller-individual-realtor-information",
  "seller-individual-attorney-representation-no":
    "seller-individual-realtor-information",
  "seller-individual-realtor-information-yes":
    "seller-individual-realtor-information-details",
  "seller-individual-realtor-information-details": "terms-and-conditions",
  "seller-company-realtor-information-no": "terms-and-conditions",
  "terms-and-conditions": "submitted-form",




  // buyer individual
  "buyer-individual-property-address": "buyer-individual-transaction-type",
  "buyer-individual-transaction-type": "buyer-individual-property-type",
  "buyer-individual-property-type": "buyer-individual-property-use",
  "buyer-individual-property-use": "buyer-individual-buyers",

  "buyer-individual-buyers": "buyer-individual-title-information",
  "buyer-individual-title-information":"buyer-individual-attorney-represenation",
  "buyer-individual-attorney-representation-yes":
  "buyer-individual-attorney-representation-details",

  "buyer-individual-attorney-representation-details": "terms-and-conditions",
  "terms-and-conditions": "submitted-form",

};




