import os

# Directory with your HTML files
directory = 'D:/2024/prontotitles-web-project/'

# Output file
output_file = 'combined_views.txt'

with open(output_file, 'w') as outfile:
    for filename in os.listdir(directory):
        if filename.endswith('.html'):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r') as infile:
                content = infile.read()
                # Write the filename and content to the output file
                outfile.write(f"### Filename: {filename}\n")
                outfile.write(content + "\n\n")
print(f"All HTML files have been bundled into {output_file}")
