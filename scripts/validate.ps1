param (
    [switch]$Verbose
)

Write-Host "[VALIDATE] Form4Ever Template - Proje Dogrulama" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

$errors = 0
$warnings = 0
$passed = 0

function Check-Item {
    param (
        [string]$ItemPath,
        [string]$Desc,
        [switch]$IsFile
    )

    if ($IsFile) {
        $exists = Test-Path $ItemPath -PathType Leaf
    } else {
        $exists = Test-Path $ItemPath -PathType Container
    }

    if ($exists) {
        Write-Host "  [OK] $Desc" -ForegroundColor Green
        $script:passed++
    } else {
        Write-Host "  [FAIL] $Desc - Bulunamadi: $ItemPath" -ForegroundColor Red
        $script:errors++
    }
}

Write-Host "[Root Dosyalari]" -ForegroundColor Yellow
Check-Item -ItemPath ".\CLAUDE.md" -Desc "CLAUDE.md" -IsFile
Check-Item -ItemPath ".\README.md" -Desc "README.md" -IsFile
Check-Item -ItemPath ".\.gitignore" -Desc ".gitignore" -IsFile

Write-Host ""
Write-Host "[Agent Yapisi]" -ForegroundColor Yellow
Check-Item -ItemPath ".\.agent\workflows" -Desc "Workflows dizini"
Check-Item -ItemPath ".\.agent\skills" -Desc "Skills dizini"
Check-Item -ItemPath ".\.agent\workflows\setup.md" -Desc "Setup workflow" -IsFile
Check-Item -ItemPath ".\.agent\workflows\dev.md" -Desc "Dev workflow" -IsFile
Check-Item -ItemPath ".\.agent\workflows\test.md" -Desc "Test workflow" -IsFile
Check-Item -ItemPath ".\.agent\workflows\deploy.md" -Desc "Deploy workflow" -IsFile
Check-Item -ItemPath ".\.agent\workflows\review.md" -Desc "Review workflow" -IsFile

Write-Host ""
Write-Host "[Skills]" -ForegroundColor Yellow
$skills = @("planning", "analysis", "implementation", "testing", "documentation", "ccd")
foreach ($skill in $skills) {
    Check-Item -ItemPath ".\.agent\skills\$skill\SKILL.md" -Desc "$skill skill" -IsFile
}

Write-Host ""
Write-Host "[Instructions]" -ForegroundColor Yellow
Check-Item -ItemPath ".\.instructions\coding-standards.md" -Desc "Coding standards" -IsFile
Check-Item -ItemPath ".\.instructions\naming-conventions.md" -Desc "Naming conventions" -IsFile
Check-Item -ItemPath ".\.instructions\git-conventions.md" -Desc "Git conventions" -IsFile
Check-Item -ItemPath ".\.instructions\architecture-principles.md" -Desc "Architecture principles" -IsFile

Write-Host ""
Write-Host "[Documentation]" -ForegroundColor Yellow
Check-Item -ItemPath ".\docs\architecture\overview.md" -Desc "Architecture overview" -IsFile
Check-Item -ItemPath ".\docs\api\README.md" -Desc "API documentation" -IsFile
Check-Item -ItemPath ".\docs\guides\getting-started.md" -Desc "Getting started guide" -IsFile
Check-Item -ItemPath ".\docs\guides\contributing.md" -Desc "Contributing guide" -IsFile
Check-Item -ItemPath ".\docs\decisions\template.md" -Desc "ADR template" -IsFile
Check-Item -ItemPath ".\docs\changelog\CHANGELOG.md" -Desc "Changelog" -IsFile

Write-Host ""
Write-Host "[Plans]" -ForegroundColor Yellow
Check-Item -ItemPath ".\plans\implementation-plan.md" -Desc "Implementation plan" -IsFile
Check-Item -ItemPath ".\plans\backlog.md" -Desc "Backlog" -IsFile
Check-Item -ItemPath ".\plans\milestones.md" -Desc "Milestones" -IsFile

Write-Host ""
Write-Host "[Source Code]" -ForegroundColor Yellow
Check-Item -ItemPath ".\src\core" -Desc "Core dizini"
Check-Item -ItemPath ".\src\features" -Desc "Features dizini"
Check-Item -ItemPath ".\src\shared\utils" -Desc "Shared utils dizini"
Check-Item -ItemPath ".\src\shared\constants" -Desc "Shared constants dizini"
Check-Item -ItemPath ".\src\config" -Desc "Config dizini"

Write-Host ""
Write-Host "[Tests]" -ForegroundColor Yellow
Check-Item -ItemPath ".\tests\unit" -Desc "Unit tests dizini"
Check-Item -ItemPath ".\tests\integration" -Desc "Integration tests dizini"
Check-Item -ItemPath ".\tests\e2e" -Desc "E2E tests dizini"
Check-Item -ItemPath ".\tests\fixtures" -Desc "Test fixtures dizini"

Write-Host ""
Write-Host "[Collections]" -ForegroundColor Yellow
Check-Item -ItemPath ".\.collections\prompts" -Desc "Prompts dizini"
Check-Item -ItemPath ".\.collections\templates" -Desc "Templates dizini"

Write-Host ""
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "Sonuc:" -ForegroundColor Cyan
Write-Host "  Gecti: $passed" -ForegroundColor Green
Write-Host "  Hata:  $errors" -ForegroundColor Red
Write-Host ""

if ($errors -eq 0) {
    Write-Host "Tum kontroller basarili!" -ForegroundColor Green
} else {
    Write-Host "$errors hata bulundu. Lutfen duzeltin." -ForegroundColor Yellow
}
