# Grant IAM Permissions to GitHub Actions User

## Problem

The `github-actions-deploy` user doesn't have permissions to create IAM users and policies.

Error:

```
User: arn:aws:iam::703581221884:user/github-actions-deploy is not authorized to perform: iam:CreateUser
```

## Solution: Add IAM Permissions

### Step 1: Log into AWS Console

1. Go to https://console.aws.amazon.com/
2. Log in with your AWS account credentials

### Step 2: Navigate to IAM

1. In the AWS Console search bar, type "IAM"
2. Click on "IAM" (Identity and Access Management)

### Step 3: Find the github-actions-deploy User

1. Click "Users" in the left sidebar
2. Search for or click on `github-actions-deploy`

### Step 4: Attach IAM Management Policy

1. Click the "Permissions" tab
2. Click "Add permissions" → "Attach policies directly"
3. Search for and select: `IAMFullAccess` (or create a custom policy below)
4. Click "Next" → "Add permissions"

### Alternative: Create Custom Policy (More Secure)

If you prefer minimal permissions, create a custom policy instead:

1. Click "Policies" in the left sidebar
2. Click "Create policy"
3. Click "JSON" tab
4. Paste this policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ManageTeamMembers",
      "Effect": "Allow",
      "Action": [
        "iam:CreateUser",
        "iam:DeleteUser",
        "iam:GetUser",
        "iam:ListUsers",
        "iam:UpdateUser",
        "iam:TagUser",
        "iam:UntagUser",
        "iam:CreateLoginProfile",
        "iam:DeleteLoginProfile",
        "iam:GetLoginProfile",
        "iam:UpdateLoginProfile",
        "iam:CreatePolicy",
        "iam:DeletePolicy",
        "iam:GetPolicy",
        "iam:GetPolicyVersion",
        "iam:ListPolicies",
        "iam:ListPolicyVersions",
        "iam:AttachUserPolicy",
        "iam:DetachUserPolicy",
        "iam:ListAttachedUserPolicies",
        "iam:ListUserPolicies"
      ],
      "Resource": "*"
    }
  ]
}
```

5. Click "Next"
6. Name it: `GitHubActionsIAMManagement`
7. Click "Create policy"
8. Go back to Users → `github-actions-deploy` → Add permissions → Attach the new policy

### Step 5: Verify Permissions

1. Go back to GitHub Actions: https://github.com/MorningstarDeep/skill-pathways-guide/actions
2. Click "Re-run all jobs" on the failed workflow
3. The IAM user creation should now succeed

## What This Will Create

Once permissions are granted, Terraform will create:

1. **IAM User: krishna-jalan**

   - Username: `krishna-jalan`
   - Path: `/team/`
   - Console access enabled
   - Tags: Name, Email, Role

2. **IAM User: hathim-mohammed**

   - Username: `hathim-mohammed`
   - Path: `/team/`
   - Console access enabled
   - Tags: Name, Email, Role

3. **IAM Policy: skill-pathways-developer-access**

   - Full S3 access to the project bucket
   - CloudFront invalidation permissions
   - Read-only access to other S3 buckets and CloudFront distributions

4. **Policy Attachments**
   - Both users will get the developer access policy attached

## Retrieving Credentials After Creation

After the workflow succeeds:

1. Go to AWS Console → IAM → Users
2. Click on `krishna-jalan` or `hathim-mohammed`
3. Go to "Security credentials" tab
4. Under "Console sign-in", you'll see their console login link
5. Click "Enable console access" to set/reset their password
6. Share the credentials securely with your teammates

## Security Notes

- ✅ Users are created in `/team/` path for organization
- ✅ Users only have access to the specific project resources
- ✅ No programmatic access keys created (console access only)
- ✅ MFA can be enabled later for additional security
- ⚠️ Share passwords securely (not via email or Slack)
- 💡 Teammates should change their passwords on first login
