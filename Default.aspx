<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Project4.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="JavaScript.js"></script>
    <link href="StyleSheet1.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
         <div class="NewDiv">

             <!-- Tic-Tac-Toe Label  -->
            <asp:Label ID="lblTicTacToe" runat="server" Text="Tic-Tac-Toe"></asp:Label>
            <br />
             <asp:Label ID="lblInstructions" runat="server" Text="Player X starts and Player O is second"></asp:Label>
             <br />
             <asp:Label ID="lblturn" runat="server" Text="Player X's turn" Font-Bold="True" ForeColor="Red"></asp:Label>
             <br /><br />
            <!-- Tic-Tac-Toe 3*3 grid  -->
        <input type="text" id="txt1" onclick="box1(); Main();" readonly="readonly" />
   
        <input type="text" id="txt2" onclick="box2(); Main();" readonly="readonly" />
   
        <input type="text" id="txt3" onclick="box3(); Main();" readonly="readonly" />
        <br /><br />
   
        <input type="text" id="txt4" onclick="box4(); Main();" readonly="readonly" />
               
        <input type="text" id="txt5" onclick="box5(); Main();" readonly="readonly" />
   
        <input type="text" id="txt6" onclick="box6(); Main();" readonly="readonly" />
        <br /><br />
   
        <input type="text" id="txt7" onclick="box7(); Main();" readonly="readonly" />
   
        <input type="text" id="txt8" onclick="box8(); Main();" readonly="readonly" />
   
        <input type="text" id="txt9" onclick="box9(); Main();" readonly="readonly" />

        <br /><br /><br />
             <asp:Label ID="lblWin" runat="server" Text="" Font-Bold="True" ForeColor="Red"></asp:Label>
             <br /><br />
       <!-- Button to reset the game  -->
             <button id="btnReset" onclick="Reset()" style="border-style: groove; border-width: thin; color: #FFFFFF; font-weight: bold; font-style: normal; font-size: medium; background-color: #0099FF; text-align: center; white-space: normal; line-height: normal; width: 60px; height: 25px;">Reset</button>

        </div>
    </form>
</body>
</html>
