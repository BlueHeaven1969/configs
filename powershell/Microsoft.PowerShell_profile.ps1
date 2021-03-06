Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Rick
$sl = $global:ThemeSettings
$sl.Options.ConsoleTitle = $false
$sl.Options.OriginSymbols = $true

#$env:PSModulePath+=';C:\Users\RSt.Pie\OneDrive - Rockwell Automation, Inc-\Documents\WindowsPowerShell\Modules'

Import-Module PSReadLine

# Set colors for PSReadLine
Set-PSReadLineOption -Colors @{
"ContinuationPrompt" = [ConsoleColor]:: Gray
"Emphasis"           = [ConsoleColor]:: White    
"Error"              = [ConsoleColor]:: Red
"Default"            = [ConsoleColor]:: Gray
"Comment"            = [ConsoleColor]:: DarkGreen
"Keyword"            = [ConsoleColor]:: Green
"String"             = [ConsoleColor]:: DarkBlue
"Operator"           = [ConsoleColor]:: DarkCyan
"Variable"           = [ConsoleColor]:: Yellow
"Command"            = [ConsoleColor]:: Cyan
"Parameter"          = [ConsoleColor]:: Magenta
"Type"               = [ConsoleColor]:: DarkYellow
"Number"             = [ConsoleColor]:: Blue
"Member"             = [ConsoleColor]:: DarkMagenta
}

Import-Module ZLocation

$env:PATHEXT += ";.py"

