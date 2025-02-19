const viewMappingBuyerCompany = {

    "view1-buyer-company": "buyer-company-property-address",

    "buyer-company-property-address": "buyer-company-property-type",

    "buyer-company-property-type": "buyer-company-transaction-type",

    "buyer-company-transaction-type": "buyer-company-information",

    "buyer-company-information": "buyer-company-type",

    "buyer-company-type-corporation": "buyer-company-type-corporation-tax-id",

    "buyer-company-type-corporation-tax-id":
      "buyer-company-type-corporation-president",

      "buyer-company-type-corporation-president":
      "buyer-company-type-corporation-vice-president",

      "buyer-company-type-corporation-vice-president":
      "buyer-company-operating-agreement",

      "buyer-company-type-llc": "buyer-company-type-llc",
    "buyer-company-type-llc-single-us": "buyer-company-type-llc-single-us-tax-id",

    "buyer-company-type-llc-single-non-us":
      "buyer-company-type-llc-single-non-us-tax-id",

      "buyer-company-type-llc-single-non-us-tax-id":
      "buyer-company-type-llc-manager",

      "buyer-company-type-llc-single-us-tax-id": "buyer-company-type-llc-manager",

      "buyer-company-type-llc-multi-member":
      "buyer-company-type-llc-multi-member-tax-id",

      "buyer-company-type-llc-multi-member-tax-id":
      "buyer-company-type-llc-manager",

      "buyer-company-type-llc-manager": "buyer-company-operating-agreement",

      "buyer-company-operating-agreement-yes":
      "buyer-company-operating-agreement-upload",

      "buyer-company-operating-agreement-no": "buyer-company-owners",

      "buyer-company-operating-agreement-upload": "buyer-company-owners",

      "buyer-company-owners": "buyer-company-attorney-representation",

      "buyer-company-attorney-representation-yes":
      "buyer-company-attorney-representation-details",

      "buyer-company-attorney-representation-details":
      "buyer-company-realtor-information",

    "buyer-company-attorney-representation-no":
      "buyer-company-realtor-information",

    "buyer-company-realtor-information-yes":
      "buyer-company-realtor-information-details",

    "buyer-company-realtor-information-details": "terms-and-conditions",

    "buyer-company-realtor-information-no": "terms-and-conditions",

    "terms-and-conditions": "submitted-form",


  };



const sellerCompanyForm = ['seller-company-property-address', 'seller-company-information', 'seller-company-type-llc-multi-member-tax-id','seller-company-operating-agreement-upload','seller-company-type-llc-manager', 'seller-company-type-llc-single-us-tax-id', 'seller-company-type-llc-single-non-us-tax-id', 'seller-company-attorney-representation-details','seller-company-realtor-information-details','terms-and-conditions','seller-company-type-corporation-tax-id','seller-company-type-corporation-president','seller-company-type-corporation-vice-president','seller-company-owners'];

const sellerIndividualForm = ['seller-individual-property-address','seller-individual-transaction-type', 'seller-individual-property-use', 'seller-individual-hoa-information-details', 'seller-individual-lease-contract','seller-individual-sellers', 'seller-individual-mortgage-information','seller-individual-attorney-representation-details','seller-individual-realtor-information-details' ]


const buyerCompanyForm = ['buyer-company-property-address', 'buyer-company-information', 'buyer-company-type-llc-multi-member-tax-id', 'buyer-company-operating-agreement-upload', 'buyer-company-type-llc-manager', 'buyer-company-type-llc-single-us-tax-id', 'buyer-company-type-llc-single-non-us-tax-id', 'buyer-company-attorney-representation-details', 'buyer-company-realtor-information-details', 'terms-and-conditions', 'buyer-company-type-corporation-tax-id', 'buyer-company-type-corporation-president', 'buyer-company-type-corporation-vice-president', 'buyer-company-owners'];


const buyerIndividualForm = ['buyer-individual-property-address', 'buyer-individual-transaction-type', 'buyer-individual-property-use', , 'buyer-individual-buyers', 'buyer-individual-mortgage-information', 'buyer-individual-attorney-representation-details', 'buyer-individual-realtor-information-details']

let inputOnlyViews = [...sellerCompanyForm, ...sellerIndividualForm, ...buyerCompanyForm, ...buyerIndividualForm]

const nonConditionalViews = ['seller-company-property-type','seller-individual-property-type', 'seller-company-property-use','seller-individual-transaction-type','buyer-company-property-type','buyer-company-transaction-type', 'buyer-individual-transaction-type','buyer-individual-property-type','buyer-individual-property-use','buyer-individual-title-information' ];





let formData = {}; // Object to store selections/inputs across all views
let currentView = "view1"; // Initial view name


// Load the viewMapping.js file which contains the dictionary
$.getScript("viewMappingBuyerCompany.js");

$.getScript("viewMappingBackward.js");

$(document).ready(function() {
    let selectedOption = null;
    let currentView = "view1"; // You can set this dynamically if needed
    let viewMap = {}
    $.when(
        $.getScript("viewMapping.js"),

    ).done(function() {
        viewMap = viewMapping
    })

    let formType = ""
    // Load the initial view (view1.html)
    $('#form-container').load(currentView + '.html', function() {
        attachOptionClickEvents();
    });
    // Function to attach event listeners for the option click
    function attachOptionClickEvents() {
        $(".option").click(function() {
            $(".option").removeClass("selected");
            $(this).addClass("selected");
            selectedOption = $(this).data("value");
        });

        // Next button functionality
        $("#next-btn").click(function() {
            // Check if the current view belongs to the input-only views
            if (inputOnlyViews.includes(currentView)) {
                if (validateInputs()) {
                    moveToNextView();
                } else {
                    alert("Please fill in the required fields.");
                }
            } else {
                // If not in input-only views, check for selected option
                if (selectedOption) {
                    moveToNextView();
                } else {
                    alert("Please select an option.");
                }
            }
        });

        // Previous button functionality
        $("#previous-btn").click(function() {

            let key;

            key = currentView
            console.log(currentView, ":going back to:", viewMappingBackward[currentView])
            //if(nonConditionalViews.includes(currentView)) key = currentView
            const previousView = viewMappingBackward[key];
            if (previousView) {
                $('#form-container').load(previousView+".html", function() {

                    currentView = previousView.split('.')[0]; // Update current view
                    selectedOption = null; // Reset the selected option for the new view
                    attachOptionClickEvents(); // Reattach event listeners for new view
                });
            } else {
                alert("No view mapped for the selected option.");
            }
        });
    }

    // Function to move to the next view
    function moveToNextView() {
        console.log(viewMap);

        let key;
        if(currentView==="view1" && selectedOption==="buyer-company") {
            console.log("we're going to replace viewMap")
            formType = "buyer-company";
            viewMap = viewMappingBuyerCompany
        }

        key = currentView + (selectedOption? ("-" + selectedOption): "")
        if(nonConditionalViews.includes(currentView)) key = currentView
        console.log(key, viewMap[key])

        const nextView = viewMap[key];
        if (nextView) {
            $('#form-container').load(nextView+".html", function() {
                currentView = nextView.split('.')[0]; // Update current view
                selectedOption = null; // Reset the selected option for the new view
                attachOptionClickEvents(); // Reattach event listeners for new view
            });
        } else {
            alert("No view mapped for the selected option.");
        }
    }

    // Function to validate inputs for input-only views
    function validateInputs() {
        let allValid = true;
        // Check if each input in the current view is filled
        $('#form-container input[required]').each(function() {
            if ($(this).val().trim() === "") {
                allValid = false;
            }
        });
        return allValid;
    }
});
