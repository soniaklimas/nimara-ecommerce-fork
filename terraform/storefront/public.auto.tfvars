# GitHub repository for the Vercel project.
# Format: "owner/repo". Example: "mirumee/nimara-ecommerce".
github_repository = "soniaklimas/nimara-ecommerce-fork"

# Vercel project name. If not set, it will default to "nimara-ecommerce".
vercel_project_name = "nimara-ecommerce-fork"

# Optional. List of additional environments with their configurations.
additional_environments = []

# Map of public environment variables to be set in the Vercel project.
public_environment_variables = {
  "NEXT_PUBLIC_SALEOR_API_URL" = {
    comment = "Public Saleor API URL for the storefront"
    envs_values = [
      {
        value = "https://soniatest.saleor.cloud/graphql/"
        target = ["production", "preview"]
      }
    ]
  },
  "NEXT_PUBLIC_DEFAULT_CHANNEL" = {
    comment = "Default channel slug for the storefront"
    envs_values = [
      {
        value = "default-channel"
        target = ["production", "preview"]
      }]
  },
  "NEXT_PUBLIC_STOREFRONT_URL" = {
    comment = "Public URL of the storefront"
    envs_values = [
      {
        value = ""
        target = ["production", "preview"]
      }
    ]
  }
  "NEXT_PUBLIC_STRIPE_PUBLIC_KEY" = {
    comment = "Public Stripe key for the storefront"
    envs_values = [
      {
        value = "pk_test_51RWw3EPr5b5Swh5yf4RXHTGbPIkzEuIHsXmANUuLo7CIOEd6hDwfIPqstblCYzfDVYECsPhXi7MpAA0tx5SEASb400b24KZZZL"
        target = ["production", "preview"]
      }
    ]
  },
  "NEXT_PUBLIC_PAYMENT_APP_ID": {
    comment = "Public ID of the payment app for the storefront"
    envs_values = [
      {
        value = "global.nimara-stripe"
        target = ["production", "preview"]
      }
    ]
  }
}
