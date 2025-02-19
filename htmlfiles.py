import os

# Directory path to the repository (replace this with your repo's path)
repo_path = r'D:\2024\prontotitles-web-project'

# The specific style to search for and replace
old_style = 'style="width:100%;min-width:400px; height: 400px; object-fit: cover; object-position: top;"'
new_style = 'style="width:100%; min-width:400px; height: auto; aspect-ratio: 1/1; object-fit: cover; object-position: top;"'

# Loop through the files in the repo
for root, dirs, files in os.walk(repo_path):
    for file in files:
        # Process only HTML files
        if file.endswith('.html'):
            file_path = os.path.join(root, file)

            # Read the file content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            # Check if the old style exists and replace it with the new style
            if old_style in content:
                content = content.replace(old_style, new_style)

                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated style in: {file_path}")
            else:
                print(f"No matching style found in: {file_path}")
print('Style replacement complete.')
