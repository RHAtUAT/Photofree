import { Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Function to generate presigned URL
export async function generatePresignedUrl(privateUrl: string): Promise<string> {

    // Retrieve the user's credentials
    const credentials = await Auth.currentCredentials();
    const client = new S3Client({
        region: awsmobile.aws_project_region,
        credentials: credentials
      });

      console.log("Url:", privateUrl);

    // Get the file "folder" (S3 doesn't actually contain folders https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html)
    // Also don't know why the key doesn't have a prefix as the docs says it should.
    const start = privateUrl.indexOf(".com") + 5; // + 5 excludes "".com/"", so elements are added after
    const end = privateUrl.indexOf("?");
    let filePath: string;
    if (start > -1 && end > -1) {
    filePath = privateUrl.substring(start, end);
    console.log(filePath);
    } else {
    throw new Error("URL is invalid");
    }
      
    try {
        // Create an S3 request object
        const command = new GetObjectCommand({
            Bucket: awsmobile.aws_user_files_s3_bucket,
            Key: filePath
        });

        console.log("Key:", filePath);
        console.log("Region:", awsmobile.aws_project_region);
        console.log("Credentials:", credentials);

        // Generate a presigned URL for the S3 object
        const signedUrl = await getSignedUrl(client, command, {
            expiresIn: 39600,
            signingRegion: awsmobile.aws_project_region,
        });
        console.log("URL:", signedUrl);
        return signedUrl;
    }
    catch (error) {
        console.error("Error generating presigned URL:", error);
        throw error;
    }
}