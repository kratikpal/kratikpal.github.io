# Local deployment validation script for Windows
Write-Host "🔍 Validating local build for deployment..." -ForegroundColor Cyan

# Check if .env file exists
if (Test-Path ".env") {
    Write-Host "✅ .env file found" -ForegroundColor Green
    
    # Check if required variables are set
    $envContent = Get-Content ".env" -Raw
    if ($envContent -match "VITE_EMAILJS_SERVICE_ID" -and 
        $envContent -match "VITE_EMAILJS_TEMPLATE_ID" -and 
        $envContent -match "VITE_EMAILJS_PUBLIC_KEY") {
        Write-Host "✅ All required environment variables found in .env" -ForegroundColor Green
    } else {
        Write-Host "❌ Missing environment variables in .env file" -ForegroundColor Red
        Write-Host "Please ensure you have:" -ForegroundColor Yellow
        Write-Host "  - VITE_EMAILJS_SERVICE_ID" -ForegroundColor Yellow
        Write-Host "  - VITE_EMAILJS_TEMPLATE_ID" -ForegroundColor Yellow
        Write-Host "  - VITE_EMAILJS_PUBLIC_KEY" -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host "Warning: .env file not found (this is normal for production deployment)" -ForegroundColor Yellow
    Write-Host "Make sure GitHub Secrets are configured properly" -ForegroundColor Yellow
}

# Test build
Write-Host "🔨 Running build test..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    Write-Host "Your site is ready for deployment!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Push your code to GitHub" -ForegroundColor White
    Write-Host "2. Make sure GitHub Secrets are configured" -ForegroundColor White
    Write-Host "3. Monitor the GitHub Actions deployment" -ForegroundColor White
} else {
    Write-Host "Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}
