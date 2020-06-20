Run szemeszter.bat,,Min, szemPID

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

Process,WaitClose,%szemPID% ;MsgBox szemeszter.bat closed.

if varAndroid = true
{
	Run BatchRun.ffs_batch,,, andPID ; %destination%\BatchRun.ffs_batch
	Run BatchRunStuff.ffs_batch,,, andrPID ; %destination%\BatchRunStuff.ffs_batch
}
if varUpdate = true
{
	Run update.bat,,, updPID
}
Process,WaitClose,%andPID%
Process,WaitClose,%andrPID%
Process,WaitClose,%updPID%
MsgBox done
ExitApp