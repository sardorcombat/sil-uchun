@echo off
chcp 65001 >nul
title Singapore International Lyceum - sil.uz
cd /d "%~dp0"

echo ============================================================
echo   Singapore International Lyceum  (sil.uz)
echo   Sayt ishga tushmoqda...
echo ------------------------------------------------------------
echo   Brauzer avtomatik ochiladi.
echo   Saytni TO'XTATISH uchun shu oynani yoping.
echo ============================================================
echo.

rem --- Python topamiz (avval "python", bo'lmasa "py") ---
set "PY="
where python >nul 2>nul && set "PY=python"
if not defined PY where py >nul 2>nul && set "PY=py"

if not defined PY (
    echo [XATO] Python topilmadi.
    echo Iltimos https://www.python.org dan Python o'rnating,
    echo yoki saytni hosting'ga ^(Netlify^) yuklang.
    echo.
    pause
    exit /b 1
)

rem --- Server alohida oynada, keyin brauzer ochiladi ---
start "SIL server" cmd /c "%PY% -m http.server 8000"
timeout /t 1 /nobreak >nul
start "" http://localhost:8000/index.html

echo Sayt manzili:  http://localhost:8000
echo.
echo (Agar sahifa darrov ochilmasa, brauzerda F5 bosib yangilang.)
echo.
pause
