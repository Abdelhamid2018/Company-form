import os
import shutil

# Dictionary of keys and values
views = {
    'seller-individual-property-address': 'seller-individual-property-type',
    'seller-individual-property-type': 'seller-individual-transaction-type',
    'seller-individual-transaction-type': 'seller-individual-hoa-information',
    'seller-individual-hoa-information-yes': 'seller-individual-hoa-information-details',
    'seller-individual-hoa-information-details': 'seller-individual-property-tenant-occupied',
    'seller-individual-hoa-information-no': 'seller-individual-property-tenant-occupied',
    'seller-individual-property-tenant-occupied-yes': 'seller-individual-lease-contract',
    'seller-individual-lease-contract': 'seller-individual-sellers',
    'seller-individual-property-tenant-occupied-no': 'seller-individual-sellers',
    'seller-individual-sellers': 'seller-individual-mortgage-information',
    'seller-individual-mortgage-information': 'seller-individual-attorney-representation',
    'seller-individual-attorney-representation-yes': 'seller-individual-attorney-representation-details',
    'seller-individual-attorney-representation-details': 'seller-individual-realtor-information',
    'seller-individual-attorney-representation-no': 'seller-individual-realtor-information',
    'seller-individual-realtor-information-yes': 'seller-individual-realtor-information-details',
    'seller-individual-realtor-information-details': 'terms-and-conditions'
}


# Function to check if file exists and duplicate it
def process_views(repo_path):
    for key, value in views.items():
        # Skip if the key starts with 'buyer-company'
        if key.startswith('buyer-individual'):
            continue
        # Check if the HTML file exists in the repo
        original_filename = f"{key}.html"
        original_filepath = os.path.join(repo_path, original_filename)

        if os.path.exists(original_filepath):
            # Create the new file name by replacing the first part with 'buyer-company'
            new_filename = (
                key.replace(key.split('-')[0], 'buyer-individual', 1) + '.html'
            )
            new_filepath = os.path.join(repo_path, new_filename)

            # Duplicate the file
            shutil.copyfile(original_filepath, new_filepath)
            print(f"Duplicated {original_filename} as {new_filename}")
        else:
            print(f"File {original_filename} not found, skipping...")


# Example usage
repo_path = r'D:\2024\prontotitles-web-project'  # Replace with the path to your repo
process_views(repo_path)
