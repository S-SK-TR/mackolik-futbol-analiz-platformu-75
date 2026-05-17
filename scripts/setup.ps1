param (
    [Parameter(Mandatory=$true)]
    [string]$ProjectName,

    [Parameter(Mandatory=$false)]
    [string]$ProjectDescription = "A new project built with Form4Ever template",

    [Parameter(Mandatory=$false)]
    [string]$TechStack = "HTML, CSS, JavaScript",

    [Parameter(Mandatory=$false)]
    [string]$TargetPath = ""
)

# ============================================
# Form4Ever Template - Project Setup Script
# ============================================
#
# KULLANIM:
#
#   1) Yeni dizine kopyalayarak kur:
#      powershell scripts\setup.ps1 -ProjectName "MyApp" -TargetPath "C:\Projects\MyApp"
#
#   2) Mevcut dizinde kur (icerideysen):
#      powershell scripts\setup.ps1 -ProjectName "MyApp"
#
# ============================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Form4Ever Template - Proje Kurulumu" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Proje Adi   : $ProjectName" -ForegroundColor White
Write-Host "  Aciklama    : $ProjectDescription" -ForegroundColor White
Write-Host "  Tech Stack  : $TechStack" -ForegroundColor White

# ---- Hedef dizin belirleme ----
$templateDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

if ($TargetPath -ne "") {
    # Yeni dizine kopyala
    Write-Host "  Hedef Dizin : $TargetPath" -ForegroundColor White
    Write-Host ""

    if (Test-Path $TargetPath) {
        $items = Get-ChildItem $TargetPath
        if ($items.Count -gt 0) {
            Write-Host "[UYARI] Hedef dizin bos degil: $TargetPath" -ForegroundColor Yellow
            $confirm = Read-Host "Devam etmek istiyor musunuz? (e/h)"
            if ($confirm -ne "e") {
                Write-Host "Iptal edildi." -ForegroundColor Red
                exit 1
            }
        }
    } else {
        New-Item -ItemType Directory -Path $TargetPath -Force | Out-Null
        Write-Host "[OK] Hedef dizin olusturuldu: $TargetPath" -ForegroundColor Green
    }

    # Template icerigini kopyala (scripts ve .git haric)
    Write-Host "[...] Template dosyalari kopyalaniyor..." -ForegroundColor Yellow

    $excludeDirs = @(".git")
    
    Get-ChildItem -Path $templateDir -Force | ForEach-Object {
        $skip = $false
        foreach ($exc in $excludeDirs) {
            if ($_.Name -eq $exc) { $skip = $true; break }
        }
        if (-not $skip) {
            Copy-Item -Path $_.FullName -Destination $TargetPath -Recurse -Force
        }
    }

    Write-Host "[OK] Dosyalar kopyalandi." -ForegroundColor Green
    $workDir = $TargetPath
} else {
    # Mevcut dizinde calis
    Write-Host "  Hedef Dizin : (mevcut dizin)" -ForegroundColor White
    Write-Host ""
    $workDir = $templateDir
}

# ---- Placeholder degistirme ----
Write-Host ""
Write-Host "[...] Placeholder degerleri guncelleniyor..." -ForegroundColor Yellow

$today = Get-Date -Format "yyyy-MM-dd"

$filesToUpdate = @(
    "CLAUDE.md",
    "README.md",
    "src\core\index.js",
    "src\shared\constants\index.js",
    "docs\guides\getting-started.md",
    ".env.example"
)

foreach ($file in $filesToUpdate) {
    $fullPath = Join-Path $workDir $file
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw -Encoding UTF8
        $content = $content -replace '\[PROJECT_NAME\]', $ProjectName
        $content = $content -replace '\[PROJECT_DESCRIPTION\]', $ProjectDescription
        $content = $content -replace '\[TECH_STACK\]', $TechStack
        $content = $content -replace '\[START_DATE\]', $today
        $content = $content -replace '\[TARIH\]', $today
        [System.IO.File]::WriteAllText($fullPath, $content)
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [ATLA] $file bulunamadi" -ForegroundColor DarkGray
    }
}

# ---- Sonuc ----
Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Kurulum tamamlandi!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Sonraki adimlar:" -ForegroundColor White
Write-Host "    1. cd $workDir" -ForegroundColor Gray
Write-Host "    2. CLAUDE.md dosyasini gozden gecirin" -ForegroundColor Gray
Write-Host "    3. git init" -ForegroundColor Gray
Write-Host "    4. git add ." -ForegroundColor Gray
Write-Host '    5. git commit -m "feat: initial project setup"' -ForegroundColor Gray
Write-Host "    6. npm init -y  (gerekiyorsa)" -ForegroundColor Gray
Write-Host ""
