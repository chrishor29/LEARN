Run szemeszter.bat,,Min, NewPID
Process,Wait,%NewPID%
;Sleep 1000
WinActivate 

Gui, Add, CheckBox, gfunAndroid, Android ON
Gui, Add, CheckBox, gfunUpdate, Update ON
Gui, Add, Button, Default w80 gGuiClose, OK
Gui, Show
Return

funAndroid:
varAndroid = true
Return

funUpdate:
varUpdate = true
Return

GuiClose:
Gui, Cancel

Process,WaitClose,%NewPID%
;MsgBox szemeszter.bat closed.

if varAndroid = true
{
	MsgBox, Android

}
if varUpdate = "true"
{
	MsgBox Update
}
;MsgBox done
ExitApp