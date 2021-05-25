@echo off

echo Installing/updating bot dependencies.
call npm i --loglevel=warn >NUL
echo.
echo Done installing dependencies. Now run start.bat
timeout 3 > nul

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)