import os


def rename_files(directory):
    # List all files in the specified directory
    for filename in os.listdir(directory):
        # Check if the filename starts with "buyer-company" and has the redundant "-company-company"
        if (
            filename.startswith('buyer-individual')
            and '-individual-individual' in filename
        ):
            # Create the new filename by replacing "-company-company" with "-company"
            new_filename = filename.replace('-individual-individual', '-individual')

            # Get full paths to the old and new filenames
            old_file = os.path.join(directory, filename)
            new_file = os.path.join(directory, new_filename)

            # Rename the file
            os.rename(old_file, new_file)
            print(f"Renamed: {filename} -> {new_filename}")


# Example usage
repo_path = r'D:\2024\prontotitles-web-project'
rename_files(repo_path)
