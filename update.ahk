

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
RunWait szemeszter.bat
if varAndroid = true
{
	Run BatchRun.ffs_batch ; %destination%\BatchRun.ffs_batch
	RunWait BatchRunStuff.ffs_batch ; %destination%\BatchRunStuff.ffs_batch
}
if varUpdate = true
{
	RunWait update.bat
}
MsgBox done
ExitApp


