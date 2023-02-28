import { Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Function to generate presigned URL
export async function generatePresignedUrl(key: string): Promise<string> {

    // Retrieve the user's credentials
    const credentials = await Auth.currentCredentials();
    const client = new S3Client({
        region: awsmobile.aws_project_region,
        credentials,
      });
    try {
        // Create an S3 request object
        const command = new GetObjectCommand({
            Bucket: awsmobile.aws_user_files_s3_bucket,
            Key: key,
        });

        console.log("Key:", key);
        console.log("Region:", awsmobile.aws_project_region);
        console.log("Credentials:", credentials);

        // Generate a presigned URL for the S3 object
        const signedUrl = await getSignedUrl(client, command, {
            expiresIn: 3600,
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

