#!/bin/bash

# Local deployment validation script
echo "🔍 Validating local build for deployment..."

# Check if .env file exists
if [ -f ".env" ]; then
    echo "✅ .env file found"
    
    # Check if required variables are set
    if grep -q "VITE_EMAILJS_SERVICE_ID" .env && grep -q "VITE_EMAILJS_TEMPLATE_ID" .env && grep -q "VITE_EMAILJS_PUBLIC_KEY" .env; then
        echo "✅ All required environment variables found in .env"
    else
        echo "❌ Missing environment variables in .env file"
        echo "Please ensure you have:"
        echo "  - VITE_EMAILJS_SERVICE_ID"
        echo "  - VITE_EMAILJS_TEMPLATE_ID" 
        echo "  - VITE_EMAILJS_PUBLIC_KEY"
        exit 1
    fi
else
    echo "⚠️  .env file not found (this is normal for production deployment)"
    echo "Make sure GitHub Secrets are configured properly"
fi

# Test build
echo "🔨 Running build test..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Your site is ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Make sure GitHub Secrets are configured"
    echo "3. Monitor the GitHub Actions deployment"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
