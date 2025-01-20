const inputOnlyViews = ['seller-company-property-address', 'seller-company-information', 'seller-company-type-llc-multi-member-tax-id','seller-company-operating-agreement-upload','seller-company-type-llc-manager', 'seller-company-type-llc-single-us-tax-id', 'seller-company-type-llc-single-non-us-tax-id', 'seller-company-attorney-representation-details','seller-company-realtor-information-details','terms-and-conditions','seller-company-type-corporation-tax-id','seller-company-type-corporation-president','seller-company-type-corporation-vice-president','seller-company-owners'];
const nonConditionalViews = ['seller-company-property-type','seller-company-property-use' ];





let formData = {}; // Object to store selections/inputs across all views
let currentView = "view1"; // Initial view name


// Load the viewMapping.js file which contains the dictionary
$.getScript("viewMapping.js");
$.getScript("viewMappingBackward.js");

$(document).ready(function() {
    let selectedOption = null;
    let currentView = "view1"; // You can set this dynamically if needed

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

            console.log(viewMappingBackward[currentView])
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
        let key;

        key = currentView + (selectedOption? ("-" + selectedOption): "")
        if(nonConditionalViews.includes(currentView)) key = currentView
        const nextView = viewMapping[key];
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
