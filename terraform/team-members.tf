# IAM Users for team collaboration

# Krishna Jalan
resource "aws_iam_user" "krishna_jalan" {
  name = "krishna-jalan"
  path = "/team/"

  tags = {
    Name        = "Krishna Jalan"
    Email       = "krishna.jalan@example.com"  # Update with real email
    Project     = "SkillPathways"
    Role        = "Administrator"
    Environment = var.environment
  }
}

resource "aws_iam_user_login_profile" "krishna_jalan" {
  user = aws_iam_user.krishna_jalan.name
}

# Hathim Mohammed
resource "aws_iam_user" "hathim_mohammed" {
  name = "hathim-mohammed"
  path = "/team/"

  tags = {
    Name        = "Hathim Mohammed"
    Email       = "hathim.mohammed@example.com"  # Update with real email
    Project     = "SkillPathways"
    Role        = "Administrator"
    Environment = var.environment
  }
}

resource "aws_iam_user_login_profile" "hathim_mohammed" {
  user = aws_iam_user.hathim_mohammed.name
}

# Full Administrator Access for team members
# Grants complete access to all AWS services and resources

# Attach AdministratorAccess policy to Krishna
resource "aws_iam_user_policy_attachment" "krishna_admin" {
  user       = aws_iam_user.krishna_jalan.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

# Attach AdministratorAccess policy to Hathim
resource "aws_iam_user_policy_attachment" "hathim_admin" {
  user       = aws_iam_user.hathim_mohammed.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

# Outputs for team member credentials
output "krishna_jalan_username" {
  value       = aws_iam_user.krishna_jalan.name
  description = "IAM username for Krishna Jalan"
}

output "hathim_mohammed_username" {
  value       = aws_iam_user.hathim_mohammed.name
  description = "IAM username for Hathim Mohammed"
}

output "console_login_url" {
  value       = "https://console.aws.amazon.com/"
  description = "AWS Console login URL for team members"
}
