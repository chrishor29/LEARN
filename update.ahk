Run szemeszter.bat,,Min, szemPID

Gui, Add, CheckBox, vTelefon gF_Telefon, Telefon
Gui, Add, CheckBox, vWebPage gF_WebPage, WebPage
Gui, Add, Button, Default w80 gGuiClose, OK
Gui, Show
Return

F_Telefon:
Gui, Submit, NoHide
if ( Telefon == 1 ) {
	; MsgBox true
	varTelefon = true
} else {
	; MsgBox false
	varTelefon = false
}
Return

F_WebPage:
Gui, Submit, NoHide
if ( WebPage == 1 ) {
	; MsgBox true
	varWebPage = true
} else {
	; MsgBox false
	varWebPage = false
}
Return


GuiClose:
Gui, Cancel

Process,WaitClose,%szemPID% ;MsgBox szemeszter.bat closed.

if varTelefon = true
{
	; MsgBox Telefon update
	Run BatchRun.ffs_batch,,, andPID ; %destination%\BatchRun.ffs_batch
	Run BatchRunStuff.ffs_batch,,, andrPID ; %destination%\BatchRunStuff.ffs_batch
}
if varWebPage = true
{
	; MsgBox WebPage update
	Run update.bat,,Min, updPID
}
Process,WaitClose,%andPID%
Process,WaitClose,%andrPID%
Process,WaitClose,%updPID%
MsgBox done
ExitApp