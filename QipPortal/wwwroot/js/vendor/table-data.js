$(document).ready(function () {
    // Banking
    //====================== Functional Checklist =====================================
    var BankingDataBFC = [
        { sno: 1, module: "CIF", Function: 18, subFun: 50 },
        { sno: 2, module: "CASA", Function: 18, subFun: 56 },
        { sno: 3, module: "Overdraft", Function: 1, subFun: 25 },
        { sno: 4, module: "TermDeposit", Function: 19, subFun: 58 },
        { sno: 5, module: "Corporate Loans", Function: 15, subFun: 34 },
        { sno: 6, module: "FX", Function: 8, subFun: 18 },
        { sno: 7, module: "Money Market", Function: 6, subFun: 24 },
        { sno: 8, module: "Liquidity management", Function: 8, subFun: 8 },
        { sno: 9, module: "Limit and Collaterals", Function: 10, subFun: 24 },
        { sno: 10, module: "PDC", Function: 6, subFun: 18 },
        { sno: 11, module: "Clearing", Function: 9, subFun: 27 },
        { sno: 12, module: "Cheque & Cash Collection", Function: 19, subFun: 19 },
        { sno: 13, module: "Teller", Function: 13, subFun: 54 },
        { sno: 14, module: "Cheque", Function: 10, subFun: 22 },
        { sno: 15, module: "Locker", Function: 19, subFun: 25 },
        { sno: 16, module: "RetailLoans", Function: 13, subFun: 32 },
        { sno: 17, module: "Syndicate Loans", Function: 11, subFun: 41 },
        { sno: 18, module: "NACH", Function: 5, subFun: 14 },
        { sno: 19, module: "Contract financing", Function: 9, subFun: 16 },
        { sno: 20, module: "Securitization", Function: 14, subFun: 37 },
        { sno: 21, module: "Export LC", Function: 14, subFun: 56 },
        { sno: 22, module: "Imports LC ", Function: 13, subFun: 48 },
        { sno: 23, module: "TF Guarantee", Function: 10, subFun: 37 },
        { sno: 24, module: "Local Bill Discounting", Function: 4, subFun: 18 },
        { sno: 25, module: "Bills & Collections", Function: 17, subFun: 71 },
        { sno: 26, module: "IB Remittance", Function: 9, subFun: 51 },
        { sno: 27, module: "MB Remittance", Function: 5, subFun: 71 },
        { sno: 28, module: "NEFT", Function: 1, subFun: 11 },
        { sno: 29, module: "RTGS", Function: 1, subFun: 9 },
        { sno: 30, module: "InventoryManagement", Function: 4, subFun: 13 },
        { sno: 31, module: "IMPS", Function: 7, subFun: 9 },
        { sno: 32, module: "Standing Order", Function: 10, subFun: 27 },
        { sno: 33, module: "Fixed Assets", Function: 5, subFun: 39 },
        { sno: 34, module: "ATM", Function: 10, subFun: 23 },
        { sno: 35, module: "Internet Banking", Function: 16, subFun: 57 },
        { sno: 36, module: "Mobile Banking", Function: 7, subFun: 27 },
        { sno: 37, module: "User Role - Security Management", Function: 3, subFun: 10 },
        { sno: 38, module: "IVR", Function: 4, subFun: 4 },
        { sno: 39, module: "Audit Trail", Function: 2, subFun: 9 },
        { sno: 40, module: "GL", Function: 2, subFun: 17 },
    ]

    BankingDataBFC.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-4";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));

        // Append Table Row in Table
        let table = document.getElementById("bankingTable-BFC");
        if (table != null) {
            table.appendChild(trCreate);
        }

    });


    //================================ Functional Checklist ============================================
    var BankingDataBGR = [
        { sno: 1, module: "CIF", Function: 18, subFun: 50, Condition: 106 },
        { sno: 2, module: "CASA", Function: 18, subFun: 56, Condition: 186 },
        { sno: 3, module: "Overdraft", Function: 1, subFun: 25, Condition: 96 },
        { sno: 4, module: "TermDeposit", Function: 19, subFun: 58, Condition: 203 },
        { sno: 5, module: "Corporate Loans", Function: 15, subFun: 34, Condition: 194 },
        { sno: 6, module: "FX", Function: 8, subFun: 18, Condition: 30 },
        { sno: 7, module: "Money Market", Function: 6, subFun: 24, Condition: 38 },
        { sno: 8, module: "Liquidity management", Function: 8, subFun: 8, Condition: 24 },
        { sno: 9, module: "Limit and Collaterals", Function: 10, subFun: 24, Condition: 113 },
        { sno: 10, module: "PDC", Function: 6, subFun: 18, Condition: 35 },
        { sno: 11, module: "Clearing", Function: 9, subFun: 27, Condition: 151 },
        { sno: 12, module: "Cheque & Cash Collection", Function: 19, subFun: 19, Condition: 32 },
        { sno: 13, module: "Teller", Function: 13, subFun: 54, Condition: 130 },
        { sno: 14, module: "Cheque", Function: 10, subFun: 22, Condition: 43 },
        { sno: 15, module: "Locker", Function: 19, subFun: 25, Condition: 51 },
        { sno: 16, module: "RetailLoans", Function: 13, subFun: 32, Condition: 194 },
        { sno: 17, module: "Syndicate Loans", Function: 11, subFun: 41, Condition: 173 },
        { sno: 18, module: "NACH", Function: 5, subFun: 14, Condition: 87 },
        { sno: 19, module: "Contract financing", Function: 9, subFun: 16, Condition: 18 },
        { sno: 20, module: "Securitization", Function: 14, subFun: 37, Condition: 37 },
        { sno: 21, module: "Export LC", Function: 14, subFun: 56, Condition: 110 },
        { sno: 22, module: "Imports LC ", Function: 13, subFun: 48, Condition: 120 },
        { sno: 23, module: "TF Guarantee", Function: 10, subFun: 37, Condition: 109 },
        { sno: 24, module: "Local Bill Discounting", Function: 4, subFun: 18, Condition: 80 },
        { sno: 25, module: "Bills & Collections", Function: 17, subFun: 71, Condition: 154 },
        { sno: 26, module: "IB Remittance", Function: 9, subFun: 51, Condition: 187 },
        { sno: 27, module: "MB Remittance", Function: 5, subFun: 71, Condition: 123 },
        { sno: 28, module: "NEFT", Function: 1, subFun: 11, Condition: 31 },
        { sno: 29, module: "RTGS", Function: 1, subFun: 9, Condition: 27 },
        { sno: 30, module: "InventoryManagement", Function: 4, subFun: 13, Condition: 34 },
        { sno: 31, module: "IMPS", Function: 7, subFun: 9, Condition: 30 },
        { sno: 32, module: "Standing Order", Function: 10, subFun: 27, Condition: 62 },
        { sno: 33, module: "Fixed Assets", Function: 5, subFun: 39, Condition: 41 },
        { sno: 34, module: "ATM", Function: 10, subFun: 23, Condition: 44 },
        { sno: 35, module: "Internet Banking", Function: 16, subFun: 57, Condition: 226 },
        { sno: 36, module: "Mobile Banking", Function: 7, subFun: 27, Condition: 69 },
        { sno: 37, module: "User Role - Security Management", Function: 3, subFun: 10, Condition: 19 },
        { sno: 38, module: "IVR", Function: 4, subFun: 4, Condition: 12 },
        { sno: 39, module: "Audit Trail", Function: 2, subFun: 9, Condition: 91 },
        { sno: 40, module: "GL", Function: 2, subFun: 17, Condition: 119 },
    ]

    BankingDataBGR.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-4";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.Condition));

        // Append Table Row in Table
        let table = document.getElementById("bankingTable-BGR");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });


    //========================================= Application Repositories ====================================

    var bankingTableBARTable = document.getElementById("bankingTable-BAR-Table");
    var bankingTableBARTableFI = document.getElementById("bankingTable-BAR-Table-FI");
    var bankingTableBARTableFL = document.getElementById("bankingTable-BAR-Table-FL");
    var bankingTableBARTableT2 = document.getElementById("bankingTable-BAR-Table-T2");
    var bankingTableBARTableFIN = document.getElementById("bankingTable-BAR-Table-FIN");
    var bankingTableBARTableICM = document.getElementById("bankingTable-BAR-Table-ICM");
    if (bankingTableBARTable != null) {
        bankingTableBARTable.addEventListener("change", function () {
            if (bankingTableBARTableFI.selected === true) {
                document.getElementById("bankingTable-BAR-FI").style.display = "block";
                document.getElementById("bankingTable-BAR-FL").style.display = "none";
                document.getElementById("bankingTable-BAR-T2").style.display = "none";
                document.getElementById("bankingTable-BAR-FIN").style.display = "none";
                document.getElementById("bankingTable-BAR-ICM").style.display = "none";
            } else if (bankingTableBARTableFL.selected === true) {
                document.getElementById("bankingTable-BAR-FI").style.display = "none";
                document.getElementById("bankingTable-BAR-FL").style.display = "block";
                document.getElementById("bankingTable-BAR-T2").style.display = "none";
                document.getElementById("bankingTable-BAR-FIN").style.display = "none";
                document.getElementById("bankingTable-BAR-ICM").style.display = "none";
            } else if (bankingTableBARTableT2.selected === true) {
                document.getElementById("bankingTable-BAR-FI").style.display = "none";
                document.getElementById("bankingTable-BAR-FL").style.display = "none";
                document.getElementById("bankingTable-BAR-T2").style.display = "block";
                document.getElementById("bankingTable-BAR-FIN").style.display = "none";
                document.getElementById("bankingTable-BAR-ICM").style.display = "none";
            } else if (bankingTableBARTableFIN.selected === true) {
                document.getElementById("bankingTable-BAR-FI").style.display = "none";
                document.getElementById("bankingTable-BAR-FL").style.display = "none";
                document.getElementById("bankingTable-BAR-T2").style.display = "none";
                document.getElementById("bankingTable-BAR-FIN").style.display = "block";
                document.getElementById("bankingTable-BAR-ICM").style.display = "none";
            } else if (bankingTableBARTableICM.selected === true) {
                document.getElementById("bankingTable-BAR-FI").style.display = "none";
                document.getElementById("bankingTable-BAR-FL").style.display = "none";
                document.getElementById("bankingTable-BAR-T2").style.display = "none";
                document.getElementById("bankingTable-BAR-FIN").style.display = "none";
                document.getElementById("bankingTable-BAR-ICM").style.display = "block";
            }
        })
    }


    //========================== Finacle ===================================

    var BankingDataBARFI = [
        { sno: 1, module: "CASA", Function: 19, subFun: 110, Condition: 476, testCase: 2306 },
        { sno: 2, module: "Cheque", Function: 11, subFun: 21, Condition: 45, testCase: 261 },
        { sno: 3, module: "CIF", Function: 22, subFun: 68, Condition: 114, testCase: 1205 },
        { sno: 4, module: "Clearing", Function: 11, subFun: 34, Condition: 157, testCase: 814 },
        { sno: 5, module: "Teller", Function: 11, subFun: 53, Condition: 123, testCase: 1365 },
        { sno: 6, module: "Retail Loans", Function: 15, subFun: 19, Condition: 96, testCase: 1124 },
        { sno: 7, module: "Corporate Loans", Function: 13, subFun: 22, Condition: 125, testCase: 1077 },
        { sno: 8, module: "Syndicate Loans", Function: 11, subFun: 69, Condition: 71, testCase: 721 },
        { sno: 9, module: "Remittance", Function: 12, subFun: 18, Condition: 73, testCase: 721 },
        { sno: 10, module: "Funds Transfer", Function: 6, subFun: 45, Condition: 68, testCase: 269 },
        { sno: 11, module: "RTGS & NEFT", Function: 1, subFun: 9, Condition: 22, testCase: 114 },
        { sno: 12, module: "Term Deposit", Function: 22, subFun: 134, Condition: 268, testCase: 1164 },
        { sno: 13, module: "Standing Order", Function: 11, subFun: 32, Condition: 43, testCase: 310 },
        { sno: 14, module: "Overdraft", Function: 9, subFun: 32, Condition: 101, testCase: 543 },
        { sno: 15, module: "Postdated cheque", Function: 4, subFun: 32, Condition: 96, testCase: 975 },
        { sno: 16, module: "Bills Discounting", Function: 5, subFun: 44, Condition: 158, testCase: 815 },
        { sno: 17, module: "Import LC", Function: 10, subFun: 40, Condition: 128, testCase: 471 },
        { sno: 18, module: "Export LC", Function: 8, subFun: 32, Condition: 82, testCase: 525 },
        { sno: 19, module: "Guarantee", Function: 11, subFun: 48, Condition: 159, testCase: 949 },
        { sno: 20, module: "Bills & Collection", Function: 14, subFun: 88, Condition: 208, testCase: 918 },
        { sno: 21, module: "Locker", Function: 17, subFun: 19, Condition: 46, testCase: 300 },
        { sno: 22, module: "Inventory", Function: 5, subFun: 17, Condition: 17, testCase: 138 }

    ]

    BankingDataBARFI.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);
        let appendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"
        appendtdSix.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.Condition));
        appendtdSix.appendChild(document.createTextNode(el.testCase));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableBARFI");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });


    //========================== Flexcube ===================================

    var BankingDataBARFL = [
        { sno: 1, module: "Inventory", Function: 2, subFun: 10, Condition: 17, testCase: 159 },
        { sno: 2, module: "LBD", Function: 24, subFun: 42, Condition: 24, testCase: 321 },
        { sno: 3, module: "Syndicate Loans", Function: 22, subFun: 63, Condition: 271, testCase: 594 },
        { sno: 4, module: "CASA", Function: 28, subFun: 58, Condition: 232, testCase: 733 },
        { sno: 5, module: "Cheque", Function: 8, subFun: 22, Condition: 99, testCase: 401 },
        { sno: 6, module: "CIF", Function: 15, subFun: 52, Condition: 88, testCase: 386 },
        { sno: 7, module: "Clearing", Function: 17, subFun: 44, Condition: 80, testCase: 114 },
        { sno: 8, module: "Corporate Loans", Function: 26, subFun: 70, Condition: 341, testCase: 681 },
        { sno: 9, module: "Letter of Credit - Export", Function: 24, subFun: 45, Condition: 342, testCase: 897 },
        { sno: 10, module: "Funds Transfer", Function: 9, subFun: 49, Condition: 65, testCase: 296 },
        { sno: 11, module: "Guarantee", Function: 18, subFun: 33, Condition: 174, testCase: 407 },
        { sno: 12, module: "Import LC", Function: 18, subFun: 91, Condition: 902, testCase: 1749 },
        { sno: 13, module: "LC Reimbursement", Function: 3, subFun: 9, Condition: 34, testCase: 116 },
        { sno: 14, module: "OD", Function: 10, subFun: 40, Condition: 284, testCase: 664 },
        { sno: 15, module: "PDC", Function: 9, subFun: 33, Condition: 111, testCase: 306 },
        { sno: 16, module: "Corp CIF", Function: 11, subFun: 18, Condition: 27, testCase: 156 },
        { sno: 17, module: "Limits & Collaterals", Function: 11, subFun: 30, Condition: 88, testCase: 225 },
        { sno: 18, module: "Money market", Function: 7, subFun: 31, Condition: 83, testCase: 260 },
        { sno: 19, module: "Remittance", Function: 14, subFun: 26, Condition: 127, testCase: 314 },
        { sno: 20, module: "Liquidity Management", Function: 8, subFun: 14, Condition: 24, testCase: 83 },
        { sno: 21, module: "standing Order", Function: 8, subFun: 27, Condition: 174, testCase: 494 },
        { sno: 22, module: "Term Deposits", Function: 12, subFun: 41, Condition: 132, testCase: 320 },
        { sno: 23, module: "Forex", Function: 6, subFun: 23, Condition: 39, testCase: 192 },
        { sno: 24, module: "Retail Mortgage Loans", Function: 18, subFun: 68, Condition: 301, testCase: 622 },
        { sno: 25, module: "Retail Staff Loans", Function: 18, subFun: 64, Condition: 230, testCase: 403 },
        { sno: 26, module: "Retail - Personal Loans", Function: 18, subFun: 65, Condition: 341, testCase: 860 },
        { sno: 27, module: "Teller", Function: 22, subFun: 66, Condition: 156, testCase: 814 },
        { sno: 28, module: "Contract Financing", Function: 9, subFun: 17, Condition: 60, testCase: 104 }


    ]

    BankingDataBARFL.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);
        let appendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"
        appendtdSix.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.Condition));
        appendtdSix.appendChild(document.createTextNode(el.testCase));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableBARFL");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });


    //========================== T24 ===================================

    var BankingDataBART2 = [
        { sno: 1, module: "Issue of DD", Function: 4, subFun: 36, Condition: 73, testCase: 104 },
        { sno: 2, module: "Issue PO", Function: 5, subFun: 39, Condition: 76, testCase: 121 },
        { sno: 3, module: "Collaterals and Limits", Function: 6, subFun: 38, Condition: 94, testCase: 261 },
        { sno: 4, module: "LC Musharaka", Function: 1, subFun: 1, Condition: 3, testCase: 166 },
        { sno: 5, module: "Mudaraba", Function: 8, subFun: 30, Condition: 85, testCase: 389 },
        { sno: 6, module: "Murabaha Finance", Function: 8, subFun: 17, Condition: 49, testCase: 207 },
        { sno: 7, module: "Inward Clearing", Function: 5, subFun: 32, Condition: 42, testCase: 76 },
        { sno: 8, module: "Corporate Loans", Function: 11, subFun: 74, Condition: 136, testCase: 549 },
        { sno: 9, module: "Musharaka", Function: 9, subFun: 21, Condition: 52, testCase: 343 },
        { sno: 10, module: "Funds Transfer", Function: 5, subFun: 77, Condition: 129, testCase: 268 },
        { sno: 11, module: "Guarantee", Function: 5, subFun: 46, Condition: 93, testCase: 544 },
        { sno: 12, module: "Mutual Funds", Function: 11, subFun: 40, Condition: 88, testCase: 435 },
        { sno: 13, module: "Nostro Reconciliation", Function: 3, subFun: 16, Condition: 52, testCase: 102 },
        { sno: 14, module: "Outward Clearing", Function: 9, subFun: 63, Condition: 89, testCase: 206 },
        { sno: 15, module: "Planned Bills", Function: 10, subFun: 27, Condition: 75, testCase: 462 },
        { sno: 16, module: "Remittance", Function: 4, subFun: 48, Condition: 95, testCase: 232 },
        { sno: 17, module: "Reverse Murabaha", Function: 5, subFun: 17, Condition: 27, testCase: 131 },
        { sno: 18, module: "Securities-Equity", Function: 16, subFun: 78, Condition: 322, testCase: 1782 },
        { sno: 19, module: "Securities-Bonds", Function: 17, subFun: 84, Condition: 275, testCase: 1321 },
        { sno: 20, module: "Syndicate Loan - Participant", Function: 15, subFun: 55, Condition: 257, testCase: 910 },
        { sno: 21, module: "Syndicate Loan Agent ", Function: 15, subFun: 62, Condition: 278, testCase: 940 },
        { sno: 22, module: "Term Deposits", Function: 7, subFun: 77, Condition: 198, testCase: 459 },
        { sno: 23, module: "Commodity Murabaha", Function: 8, subFun: 15, Condition: 49, testCase: 201 },
        { sno: 24, module: "Current account", Function: 1, subFun: 3, Condition: 17, testCase: 276 },
        { sno: 25, module: "Customer and Accounts", Function: 24, subFun: 139, Condition: 474, testCase: 1165 },
        { sno: 26, module: "Financial Ijara", Function: 7, subFun: 15, Condition: 60, testCase: 232 },
        { sno: 27, module: "Forward Ijara", Function: 11, subFun: 29, Condition: 104, testCase: 479 },
        { sno: 28, module: "Standing orders", Function: 6, subFun: 78, Condition: 272, testCase: 712 },
        { sno: 29, module: "Sukuk-Book Runner", Function: 7, subFun: 9, Condition: 13, testCase: 46 },
        { sno: 30, module: "Sukuk-Issuer", Function: 16, subFun: 22, Condition: 68, testCase: 225 },
        { sno: 31, module: "Sweeps", Function: 3, subFun: 31, Condition: 55, testCase: 153 },
        { sno: 32, module: "Teller", Function: 15, subFun: 163, Condition: 420, testCase: 962 },
        { sno: 33, module: "Trade Finance", Function: 21, subFun: 172, Condition: 351, testCase: 1263 },
        { sno: 34, module: "Treasury-Forex", Function: 11, subFun: 29, Condition: 85, testCase: 289 },
        { sno: 35, module: "Treasury-FRA ", Function: 12, subFun: 30, Condition: 78, testCase: 261 },
        { sno: 36, module: "Treasury-FX Swap", Function: 10, subFun: 30, Condition: 74, testCase: 230 },
        { sno: 37, module: "Treasury-IRS&CIRS", Function: 14, subFun: 39, Condition: 96, testCase: 315 },
        { sno: 38, module: "Treasury-MM", Function: 15, subFun: 54, Condition: 128, testCase: 424 },
        { sno: 39, module: "Treasury-Repo", Function: 8, subFun: 26, Condition: 66, testCase: 185 },
        { sno: 40, module: "Un-Planned Bills", Function: 10, subFun: 27, Condition: 76, testCase: 458 },
        { sno: 41, module: "Wakala", Function: 6, subFun: 10, Condition: 36, testCase: 130 },
        { sno: 42, module: "Retail Loan", Function: 18, subFun: 94, Condition: 210, testCase: 725 }
    ]

    BankingDataBART2.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);
        let appendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"
        appendtdSix.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.Condition));
        appendtdSix.appendChild(document.createTextNode(el.testCase));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableBART2");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });


    //========================== FIN ===================================

    var BankingDataBARFIN = [
        { sno: 1, module: "CAS", Function: 17, subFun: 39, Condition: 177, testCase: 1430 },
        { sno: 2, module: "CMS", Function: 10, subFun: 18, Condition: 50, testCase: 325 },
        { sno: 3, module: "LMS", Function: 15, subFun: 58, Condition: 126, testCase: 1235 }
    ]

    BankingDataBARFIN.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);
        let appendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"
        appendtdSix.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.Condition));
        appendtdSix.appendChild(document.createTextNode(el.testCase));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableBARFIN");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });


    //========================== ICM ===================================

    var BankingDataBARICM = [
        { sno: 1, module: "Core Services", Function: 30, subFun: 160, Condition: 206, testCase: 1527 },
        { sno: 2, module: "Liquidity Management", Function: 14, subFun: 66, Condition: 400, testCase: 1915 },
        { sno: 3, module: "Payments", Function: 14, subFun: 76, Condition: 151, testCase: 1717 },
        { sno: 4, module: "Collections & Receivables", Function: 17, subFun: 225, Condition: 443, testCase: 3179 },
        { sno: 5, module: "Trade Finance -Imports only", Function: 16, subFun: 75, Condition: 170, testCase: 2075 }
    ]

    BankingDataBARICM.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);
        let appendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"
        appendtdSix.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.Condition));
        appendtdSix.appendChild(document.createTextNode(el.testCase));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableBARICM");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });

    //========================================= Calculator ========================================
    var BankingDataBC = [
        { sno: 1, module: "Deposits", CalName: "Fixed Deposit- Simple Interest ", Description: "-" },
        { sno: 2, module: "Deposits", CalName: "Fixed Deposit- Cummulative Interest", Description: "-" },
        { sno: 3, module: "Deposits", CalName: "Recurring Deposit ", Description: "-" },
        { sno: 4, module: "Loans", CalName: "Simple EMI schedule generator", Description: "Monthly (PMT-Method) with holiday period calculations. And Pre-EMI to be collected separately" },
        { sno: 5, module: "Loans", CalName: "Simple EMI schedule generator with holiday period calculations. ", Description: "holiday period calculations. And Pre-EMI to be added in Principal" },
        { sno: 6, module: "Loans", CalName: "EMI Schedule Generation on the basis of Present value method with holiday period calculation. ", Description: "Present value method with holiday period calculation. Provision to capture Multiple Disbursement" },
        { sno: 7, module: "Loans", CalName: `EMI Schedule Generation - Option to select the EMI schedule frequency option as "End of Month or Actual". `, Description: `Option to select the EMI schedule frequency option as "End of Month or Actual"-And Provision to selection Number of Days for interest application as "360 or 365".` },
        { sno: 8, module: "Loans", CalName: "EMI Schedule Generation on the basis of PMT with Holiday period calculations", Description: "Provision capture of Interest Rate Change (Both Increase & Decrease). Interest Rate change will have impact in Tenor (EMI varant). Interest rate can be changed in any date during the repayment period and accordingly the broken interest is calculated and automatically adjusted in Principle/Interest. " },
        { sno: 9, module: "Loans", CalName: "EMI Schedule Generation on the basis of PMT with Holiday period calculations", Description: "Provision capture of Interest Rate Change (Both Increase & Decrease). Interest Rate change will have impact in EMI Amount (Tenor is Constant). Interest rate can be changed in any date during the repayment period and accordingly the broken interest is calculated and automatically adjusted in Principle/Interest." },
        { sno: 10, module: "Loans", CalName: "EMI Schedule Generator having with flexibility to change the EMI", Description: "Frequency ie Yearly, Half Yearly, Quarterly or Monthly." },
        { sno: 11, module: "Loans", CalName: "Featured to record change in interest rate and effect there upon in Tenor of the repayment", Description: "(Extension in case of Increase in ROI or Reduction in case of Decrease in ROI). Both The decrease and increase can be handled in same repayment schedule" },
        { sno: 12, module: "Loans", CalName: "Featured to record change in interest rate and effect there upon in EMI Amount of the repayment", Description: "(Additional EMI in case of Increase in ROI or deduction in EMI in case of Decrease in ROI). In both case the tenor will be constant will not change." },
        { sno: 13, module: "Loans", CalName: "Monthly EMI Schedule Generator with having provision to capture the Interest Change and Balloon Repayments during the repayment period.", Description: "The Balloon repayments are adjusted in Principal. In case of Bulk payment received during mid of the Month will be adjusted along with forthcoming EMI." },
    ]

    BankingDataBC.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-2";
        appdendtdThree.className = "col-4";
        appdendtdFour.className = "col-5";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.CalName));
        appdendtdFour.appendChild(document.createTextNode(el.Description));

        // Append Table Row in Table
        let table = document.getElementById("bankingTable-BC");
        if (table != null) {
            table.appendChild(trCreate);
        }

    });



    //==================================== Training Materials ====================================
    var BankingDataBTM = [
        { sno: 1, module: "AML", Function: "This presentation is about overview of AML, Regulations across globe, Applications, Sample Rules", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 2, module: "Banking Channels", Function: "This presentation covers an insight about Banking Channels through which customer can contact and transact with the bank. This presentation has covered the Electronic channels like Internet banking, Mobile banking, ATM, Kiosk and Cash Deposit Machine", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 3, module: "Retail Banking", Function: "Life cycle of CIF, CASA,Clearing,Teller, Tterm Deposit ", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 4, module: "Cash Management", Function: "This presentation covers the overview of CMS, CMS Architecture, Service oferred in CMS, Cash Collection, Pricing.", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 5, module: "FATCA", Function: "This presentation is about overview of FATCA, Phases, Regulations, Modules", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 6, module: "Lending", Function: "This presentation is about the overview of loan, life cycle of a loan, each stage in loan origination, loan servicing and closure. This also gives gist of different types of loans provided in the market", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 7, module: "Micro Finance", Function: "This presentation is about overview of Microfinance, Products, Methodology, Challenges", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 8, module: "Payments - Training Material", Function: "This presentation is about overview of Payments, Types of Payments", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 9, module: "Trade Finance - General and Finastra", Function: "This presentation is about overview of Trade finance, methods of Trade finance and its detail, INCO terms and modes of Transport Training material specific to Finastra application", subFun: "Training Material", subFun2: "Powerpoint" },
        { sno: 10, module: "Expleo_AML Model Validation", Function: "AML Model Validation Training,", subFun: "Training Material", subFun2: "Powerpoint" },
    ]

    BankingDataBTM.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appendtdFive = trCreate.appendChild(tdCreateFive);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-4";
        appdendtdFour.className = "col-2";
        appendtdFive.className = "col-2"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appendtdFive.appendChild(document.createTextNode(el.subFun2));

        // Append Table Row in Table
        let table = document.getElementById("bankingTable-BTM");
        if (table != null) {
            table.appendChild(trCreate);
        }

    });



    // TCM
    //====================== Functional Checklist =====================================
    var BankingDataTCMFC = [
        { sno: 1, module: "Treasury Bills", Function: 43, subFun: 107 },
        { sno: 2, module: "Commercial Paper", Function: 43, subFun: 111 },
        { sno: 3, module: "Certificate of Deposit", Function: 44, subFun: 112 },
        { sno: 4, module: "Zero Coupon Bond", Function: 44, subFun: 110 },
        { sno: 5, module: "Convertible Bond", Function: 45, subFun: 116 },
        { sno: 6, module: "Sovereign Bond", Function: 45, subFun: 114 },
        { sno: 7, module: "Corporate Bond", Function: 45, subFun: 114 },
        { sno: 8, module: "Equity", Function: 38, subFun: 117 },
        { sno: 9, module: "Open Ended", Function: 38, subFun: 102 },
        { sno: 10, module: "FX Cash", Function: 27, subFun: 104 },
        { sno: 11, module: "FX Tom", Function: 27, subFun: 104 },
        { sno: 12, module: "FX Spot", Function: 27, subFun: 103 },
        { sno: 13, module: "FX Swap", Function: 29, subFun: 117 },
        { sno: 14, module: "FX Forward", Function: 29, subFun: 115 },
        { sno: 15, module: "FX Multi Rate Options", Function: 31, subFun: 128 },
        { sno: 16, module: "FX Non-Deliverable Forward", Function: 32, subFun: 128 },
        { sno: 17, module: "Equity options ", Function: 47, subFun: 153 },
        { sno: 18, module: "Interest Rate Swaps", Function: 54, subFun: 142 },
        { sno: 19, module: "Repo", Function: 40, subFun: 98 },
        { sno: 20, module: "Reverse Repo", Function: 41, subFun: 99 },
        { sno: 21, module: "Deposits", Function: 31, subFun: 81 },
        { sno: 22, module: "Call Deposits", Function: 29, subFun: 79 },
        { sno: 23, module: "Notice Deposits", Function: 29, subFun: 81 },
        { sno: 24, module: "Loans", Function: 29, subFun: 78 },
        { sno: 25, module: "Call Loans", Function: 29, subFun: 79 },
        { sno: 26, module: "Notice Loans", Function: 29, subFun: 79 },
        { sno: 27, module: "Derivatives Activity", Function: 2, subFun: 9 },
        { sno: 28, module: "FATCA Form ", Function: 3, subFun: 9 },
        { sno: 29, module: "Foregin Currency Form", Function: 2, subFun: 6 },
        { sno: 30, module: "Liquidity Monitoring", Function: 2, subFun: 6 },
        { sno: 31, module: "TIC D Report", Function: 2, subFun: 6 },
        { sno: 32, module: "Cash and Liquidity Management ", Function: 30, subFun: 108 },
        { sno: 33, module: "Credit-Risk Management", Function: 10, subFun: 39 },
        { sno: 34, module: "Liquidity Risk", Function: 30, subFun: 98 },
        { sno: 35, module: "Market Risk", Function: 15, subFun: 163 },
        { sno: 36, module: "Hedge Accounting IRS", Function: 33, subFun: 61 },
        { sno: 37, module: "Common Functions", Function: 14, subFun: 34 }
    ]

    BankingDataTCMFC.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-4";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-TCMFC");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    //====================== Generic Repository =====================================
    var BankingDataTCMGR = [
        { sno: 1, module: "Treasury Bills", Function: 43, subFun: 107, Condition: 320 },
        { sno: 2, module: "Commercial Paper", Function: 43, subFun: 111, Condition: 323 },
        { sno: 3, module: "Certificate of Deposit", Function: 44, subFun: 112, Condition: 342 },
        { sno: 4, module: "Zero Coupon Bond", Function: 44, subFun: 110, Condition: 324 },
        { sno: 5, module: "Convertible Bond", Function: 45, subFun: 116, Condition: 352 },
        { sno: 6, module: "Sovereign Bond", Function: 45, subFun: 114, Condition: 346 },
        { sno: 7, module: "Corporate Bond", Function: 45, subFun: 114, Condition: 348 },
        { sno: 8, module: "Equity", Function: 38, subFun: 117, Condition: 259 },
        { sno: 9, module: "Open Ended", Function: 38, subFun: 102, Condition: 226 },
        { sno: 10, module: "FX Cash", Function: 27, subFun: 104, Condition: 284 },
        { sno: 11, module: "FX Tom", Function: 27, subFun: 104, Condition: 284 },
        { sno: 12, module: "FX Spot", Function: 27, subFun: 103, Condition: 284 },
        { sno: 13, module: "FX Swap", Function: 29, subFun: 117, Condition: 334 },
        { sno: 14, module: "FX Forward", Function: 29, subFun: 115, Condition: 334 },
        { sno: 15, module: "FX Multi Rate Options", Function: 31, subFun: 128, Condition: 348 },
        { sno: 16, module: "FX Non-Deliverable Forward", Function: 32, subFun: 128, Condition: 313 },
        { sno: 17, module: "Equity options ", Function: 47, subFun: 153, Condition: 274 },
        { sno: 18, module: "Interest Rate Swaps", Function: 54, subFun: 142, Condition: 237 },
        { sno: 19, module: "Repo", Function: 40, subFun: 98, Condition: 274 },
        { sno: 20, module: "Reverse Repo", Function: 41, subFun: 99, Condition: 275 },
        { sno: 21, module: "Deposits", Function: 31, subFun: 81, Condition: 281 },
        { sno: 22, module: "Call Deposits", Function: 29, subFun: 79, Condition: 271 },
        { sno: 23, module: "Notice Deposits", Function: 29, subFun: 81, Condition: 273 },
        { sno: 24, module: "Loans", Function: 29, subFun: 78, Condition: 268 },
        { sno: 25, module: "Call Loans", Function: 29, subFun: 79, Condition: 270 },
        { sno: 26, module: "Notice Loans", Function: 29, subFun: 79, Condition: 272 },
        { sno: 27, module: "Derivatives Activity", Function: 2, subFun: 9, Condition: 35 },
        { sno: 28, module: "FATCA Form ", Function: 3, subFun: 9, Condition: 31 },
        { sno: 29, module: "Foregin Currency Form", Function: 2, subFun: 6, Condition: 23 },
        { sno: 30, module: "Liquidity Monitoring", Function: 2, subFun: 6, Condition: 29 },
        { sno: 31, module: "TIC D Report", Function: 2, subFun: 6, Condition: 22 },
        { sno: 32, module: "Cash and Liquidity Management ", Function: 30, subFun: 108, Condition: 108 },
        { sno: 33, module: "Credit-Risk Management", Function: 10, subFun: 39, Condition: 241 },
        { sno: 34, module: "Liquidity Risk", Function: 30, subFun: 98, Condition: 98 },
        { sno: 35, module: "Market Risk", Function: 15, subFun: 163, Condition: 163 },
        { sno: 36, module: "Hedge Accounting IRS", Function: 33, subFun: 61, Condition: 205 },
        { sno: 37, module: "Common Functions", Function: 14, subFun: 34, Condition: 34 }
    ]

    BankingDataTCMGR.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-4";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appdendtdFive.className = "col-2";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));
        appdendtdFive.appendChild(document.createTextNode(el.Condition));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-TCMGR");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });



    //====================== Calculator =====================================
    var BankingDataICMC = [
        { sno: 1, module: "Bond", calculator: "Coupon Paying Bond - Pricing", description: "It calculates the pricing of the coupon paying bond" },
        { sno: 2, module: "IRS", calculator: "IRS  Floor Cashflow Calculator", description: "It calculates the interest rate swap's cash flow for FLOOR" },
        { sno: 3, module: "IRS", calculator: "IRS Cap Cashflow Calculator", description: "It calculates the interest rate swap's cash flow for CAP" },
        { sno: 4, module: "IRS", calculator: "IRS Cashflow calculator", description: "It calculates the interest rate swap's cash flow for fixed and floating legs" },
        { sno: 5, module: "Amortiation", calculator: `"Linear - Intrapolation Formula", description: "It calculates the amoritization of type "linear" in the case of IRS Swaps and bonds"` },
        { sno: 6, module: "Swap", calculator: "Swap Calculator", description: "It calculates the Swap cashflows" },
        { sno: 7, module: "Generic", calculator: "Value at Risk Calculator", description: "It calculates the VaR value for FX asset classes based on 99% confidence level using log normal distribution method" },
        { sno: 8, module: "Bond", calculator: "Bond Cashflow calculator v2.0", description: "It calculates the cashflow of a bond based on different frequencies and different maturity period" },
        { sno: 9, module: "Bond", calculator: "Bond Duration and Modified Duration Calculator", description: "It calculates the Bond duration and modified duration functionality" },
        { sno: 10, module: "T-Bill", calculator: "Bond Pricing - Treasury Bills", description: "It calculates the Pricing of a Treasury Bills" },
        { sno: 11, module: "Bond", calculator: "BOND PRICING AND CASHFLOWS CALCULATOR v1.0", description: "It calculates the pricing and cashflow of a bond based on different frequencies and different maturity period" },
        { sno: 12, module: "Bond", calculator: "Bond Pricing -Floating Rate", description: "It calculates the Pricing of a Floating rate bond" },
        { sno: 13, module: "Bond", calculator: "Bond Pricing of a zero coupon Bond", description: "It calculates the Pricing of a Zero Coupone bond" }
    ]

    BankingDataICMC.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-2";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-5";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.calculator));
        appdendtdFour.appendChild(document.createTextNode(el.description));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-ICMC");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });


    //====================== Business Process Flows =====================================
    var BankingDataTCMBPF = [
        { sno: 1, name: "Exchange Traded Futures", description: "Business Process Mapping of Exchange Traded derivatives (Futures) from Order capture, Trade execution till Expiry", type: "Powerpoint" },
        { sno: 2, name: "Options", description: "Business Process Mapping of Exchange Traded derivatives (Option) from Order capture, Trade execution till Expiry", type: "Powerpoint" },
        { sno: 3, name: "Mutual Funds", description: "Business Process Mapping of Mutual funds from Order capture, Trade execution, Post Trade events etc", type: "Powerpoint" },
        { sno: 4, name: "T-Bills", description: "Business Process Mapping of T-Bills from Order capture, Trade execution, Post Trade settlements events", type: "Powerpoint" },
        { sno: 5, name: "Bonds - Investment", description: "Business Process Mapping of Bonds from Pre-trade, Order capture, Trade execution, Post Trade settlements events & Accounting", type: "Powerpoint" },
        { sno: 6, name: "FX", description: "Business Process Mapping of FX Cash, Spot, Tom ", type: "Powerpoint" },
        { sno: 7, name: "FX Swap", description: "Business Process Mapping of FX Swap", type: "Powerpoint" },
        { sno: 8, name: "IRS", description: "Business Process Mapping of IRS", type: "Powerpoint" },
        { sno: 9, name: "Money Markets", description: "Business Process Mapping of MM", type: "Powerpoint" }
    ]

    BankingDataTCMBPF.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-2";
        appdendtdThree.className = "col-5";
        appdendtdFour.className = "col-4";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.name));
        appdendtdThree.appendChild(document.createTextNode(el.description));
        appdendtdFour.appendChild(document.createTextNode(el.type));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-TCMBPF");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });


    //====================== Business Process Flows =====================================
    var BankingDataTCMTM = [
        { sno: 1, module: "Equities Training Material" },
        { sno: 2, module: "Domain-Equity -Secondary Market Overview Training document" },
        { sno: 3, module: "Capital Markets - An Overview V1.2" },
        { sno: 4, module: "Securities Market(Basic)-Training PPT V0.1" },
        { sno: 5, module: "Capital Market in India v 1.1" },
        { sno: 6, module: "NCFM Training materials - Equity" },

        { sno: 7, module: "NCFM Training materials - Option" },
        { sno: 8, module: "NCFM Training materials - Derivatives" },
        { sno: 9, module: "Forex - An Introduction ver 2.0" },
        { sno: 10, module: "Treasury - Money Markets Training document" },
        { sno: 11, module: "Fund Accounting training document" },
        { sno: 12, module: "Hedge Funds training document" },

        { sno: 13, module: "Mutual Fund Training Document" },
        { sno: 14, module: "Mutual Funds & TA training document" },
        { sno: 15, module: "Mutual Funds Transfer Agency System Training document" },
        { sno: 16, module: "Treasury - Introduction Training Document" },
        { sno: 17, module: "Securities Markets-Traning Material" },
        { sno: 18, module: "Trade life Cycle -Training document" },
    ]

    BankingDataTCMTM.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-10";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-TCMTM");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });




    // Insurance
    //====================== Functional Checklist =====================================
    var BankingDataIFC = [
        { sno: 1, module: "Agency Broker Management", Function: 10, subFun: 37 },
        { sno: 2, module: "Bancassurance", Function: 1, subFun: 9 },
        { sno: 3, module: "Billing & Receipts", Function: 4, subFun: 25 },
        { sno: 4, module: "Billing/Accounts Receivable", Function: 1, subFun: 7 },
        { sno: 5, module: "Claims", Function: 11, subFun: 42 },
        { sno: 6, module: "Coinsurance", Function: 2, subFun: 8 },
        { sno: 7, module: "Direct Marketing", Function: 6, subFun: 15 },
        { sno: 8, module: "Finance and Company Accounts", Function: 4, subFun: 20 },
        { sno: 9, module: "Interfaces", Function: 10, subFun: "-" },
        { sno: 10, module: "New Business  - Common Processes", Function: 4, subFun: 13 },
        { sno: 11, module: "New Business Management", Function: 4, subFun: 23 },
        { sno: 12, module: "Policy Administration", Function: 3, subFun: 24 },
        { sno: 13, module: "Product Configurator/Plan Wizard", Function: 2, subFun: 7 },
        { sno: 14, module: "Quote / Proposal Management", Function: 4, subFun: 21 },
        { sno: 15, module: "Reinsurance", Function: 11, subFun: 51 },
        { sno: 16, module: "Renewal Management", Function: 1, subFun: 6 },
        { sno: 17, module: "Security Management", Function: 1, subFun: 1 },
        { sno: 18, module: "Third party/Outsourced Service Providers OSP", Function: 2, subFun: "-" }

    ]

    BankingDataIFC.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-4";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.module));
        appdendtdThree.appendChild(document.createTextNode(el.Function));
        appdendtdFour.appendChild(document.createTextNode(el.subFun));

        // Append Table Row in Table

        var table = document.getElementById("bankingTable-IFC");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });


    //====================== Generic Repository =====================================
    var BankingDataIGR = [
        { sno: 1, lineofbusiness: "Motor", subFun: 309, testCase: 1860 },
        { sno: 2, lineofbusiness: "Marine", subFun: 278, testCase: 1716 },
        { sno: 3, lineofbusiness: "Property", subFun: 481, testCase: 2092 },
        { sno: 4, lineofbusiness: "Engineering", subFun: 283, testCase: 1691 },
        { sno: 5, lineofbusiness: "Product Liability", subFun: 293, testCase: 1488 },
        { sno: 6, lineofbusiness: "Health", subFun: 287, testCase: 1478 },
        { sno: 7, lineofbusiness: "Travel", subFun: 271, testCase: 1602 },
        { sno: 8, lineofbusiness: "Personal Accident", subFun: 272, testCase: 1532 }

    ]

    BankingDataIGR.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-4";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.lineofbusiness));
        appdendtdThree.appendChild(document.createTextNode(el.subFun));
        appdendtdFour.appendChild(document.createTextNode(el.testCase));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-IGR");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });


    //====================== Application Repositories =====================================
    var BankingDataIAR = [
        { sno: 1, function: "Account movement", testCondition: 3 },
        { sno: 2, function: "Activity", testCondition: 2 },
        { sno: 3, function: "Backdated effective date", testCondition: 1 },
        { sno: 4, function: "Bind & Issue (Manual)", testCondition: 1 },
        { sno: 5, function: "Bulk Payments", testCondition: 3 },
        { sno: 6, function: "Bulk Receipting/Group Receipting", testCondition: 3 },
        { sno: 7, function: "Cancellation", testCondition: 4 },
        { sno: 8, function: "Channel Creation & Maintenance", testCondition: 19 },
        { sno: 9, function: "Charge reversal", testCondition: 1 },
        { sno: 10, function: "Claim Closure", testCondition: 3 },
        { sno: 11, function: "Claim Intimation(FNOL)", testCondition: 4 },
        { sno: 12, function: "Claim Processing", testCondition: 16 },
        { sno: 13, function: "Claim Recovery", testCondition: 4 },
        { sno: 14, function: "Claim Recovery Reversal", testCondition: 1 },
        { sno: 15, function: "Claims Registration", testCondition: 6 },
        { sno: 16, function: "Claims Settlement", testCondition: 9 },
        { sno: 17, function: "Clone Quote", testCondition: 1 },
        { sno: 18, function: "Collateral funds", testCondition: 5 },
        { sno: 19, function: "Create Payment", testCondition: 6 },
        { sno: 20, function: "Customer Creation", testCondition: 6 },
        { sno: 21, function: "Customer Modification", testCondition: 4 },
        { sno: 22, function: "Customer Search", testCondition: 5 },
        { sno: 23, function: "Delinquency", testCondition: 4 },
        { sno: 24, function: "Endorsement  - Bind & Issue", testCondition: 1 },
        { sno: 25, function: "Endorsement Underwriting", testCondition: 5 },
        { sno: 26, function: "Financial Endorsements", testCondition: 17 },
        { sno: 27, function: "Full application", testCondition: 12 },
        { sno: 28, function: "Future dated effective date", testCondition: 1 },
        { sno: 29, function: "General charge", testCondition: 1 },
        { sno: 30, function: "Installment processing", testCondition: 3 },
        { sno: 31, function: "Intermediary Advances & Recovery", testCondition: 2 },
        { sno: 32, function: "Intermediary Benefits", testCondition: 3 },
        { sno: 33, function: "Issue Receipts ", testCondition: 11 },
        { sno: 34, function: "Modify Payment", testCondition: 1 },
        { sno: 35, function: "Negative Write Offs", testCondition: 1 },
        { sno: 36, function: "Negative Write Offs Reversal", testCondition: 1 },
        { sno: 37, function: "New Business Underwriting ", testCondition: 5 },
        { sno: 38, function: "Non-Financial Endorsements - Policy Level", testCondition: 9 },
        { sno: 39, function: "Out of Sequence", testCondition: 2 },
        { sno: 40, function: "Payment Method", testCondition: 1 },
        { sno: 41, function: "Payment Mode", testCondition: 1 },
        { sno: 42, function: "Payment Reversal", testCondition: 2 },
        { sno: 43, function: "Policy Search", testCondition: 7 },
        { sno: 44, function: "Premium Audits", testCondition: 1 },
        { sno: 45, function: "Pre-renewal direction", testCondition: 2 },
        { sno: 46, function: "Quick Quote Creation", testCondition: 6 },
        { sno: 47, function: "Quote Modification", testCondition: 8 },
        { sno: 48, function: "Quote Search", testCondition: 6 },
        { sno: 49, function: "Reinstatement", testCondition: 3 },
        { sno: 50, function: "Renewal  - Bind & Issue (Manual)", testCondition: 1 },
        { sno: 51, function: "Renewal Quote Generation (By Manual) ", testCondition: 1 },
        { sno: 52, function: "Renewal Underwriting", testCondition: 5 },
        { sno: 53, function: "Reserve Management", testCondition: 4 },
        { sno: 54, function: "Rewrite", testCondition: 4 },
        { sno: 55, function: "Search Payment", testCondition: 4 },
        { sno: 56, function: "Search Receipts", testCondition: 4 },
        { sno: 57, function: "Short/Excess Receipts ", testCondition: 1 },
        { sno: 58, function: "Spin-off policy", testCondition: 3 },
        { sno: 59, function: "Split policy into two", testCondition: 3 },
        { sno: 60, function: "Task list - BillingCenter", testCondition: 8 },
        { sno: 61, function: "Task list - ClaimCenter", testCondition: 9 },
        { sno: 62, function: "Task list - PolicyCenter", testCondition: 6 },
        { sno: 63, function: "Transfer of Fund reversal", testCondition: 1 },
        { sno: 64, function: "Transfer of Funds (TOF)", testCondition: 7 },
        { sno: 65, function: "Trouble ticket", testCondition: 3 },
        { sno: 66, function: "Write Offs / Offset", testCondition: 2 },
        { sno: 67, function: "Write Offs Reversal", testCondition: 1 }

    ]

    BankingDataIAR.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-5";
        appdendtdThree.className = "col-5";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(index + 1));
        appdendtdtwo.appendChild(document.createTextNode(el.function));
        appdendtdThree.appendChild(document.createTextNode(el.testCondition));

        // Append Table Row in Table
        var table = document.getElementById("bankingTable-IAR");
        if (table != null) {
            table.appendChild(trCreate);
        };

    });


    // Card & Payments
    //========================================= Application Repositories ====================================

    var bankingTableBARTable = document.getElementById("bankingTable-CBAR-Table");
    var bankingTableCBARTableCSel = document.getElementById("bankingTable-CBAR-Table-C");
    var bankingTableCBARTablePSel = document.getElementById("bankingTable-CBAR-Table-P");
    if (bankingTableBARTable != null) {
        bankingTableBARTable.addEventListener("change", function () {
            if (bankingTableCBARTableCSel.selected === true) {
                document.getElementById("bankingTableCBARTableC").style.display = "block";
                document.getElementById("bankingTableCBARTableP").style.display = "none";
            } else if (bankingTableCBARTablePSel.selected === true) {
                document.getElementById("bankingTableCBARTableC").style.display = "none";
                document.getElementById("bankingTableCBARTableP").style.display = "block";
            }
        })
    }

    // Cards Issues
    var bankingTableCBARTableTwo = document.getElementById("bankingTableCBARTableTwo");
    var bankingTableCBARTableISSel = document.getElementById("bankingTable-CBAR-Table-IS");
    var bankingTableCBARTableACSel = document.getElementById("bankingTable-CBAR-Table-AC");
    if (bankingTableCBARTableTwo != null) {
        bankingTableCBARTableTwo.addEventListener("change", function () {
            if (bankingTableCBARTableISSel.selected === true) {
                document.getElementById("CardCBARTableIS").style.display = "block";
                document.getElementById("CardCBARTableAC").style.display = "none";
            } else if (bankingTableCBARTableACSel.selected === true) {
                document.getElementById("CardCBARTableIS").style.display = "none";
                document.getElementById("CardCBARTableAC").style.display = "block";
            }
        })
    }


    // Cards Issues
    var bankingTableCBARTablePTwo = document.getElementById("bankingTableCBARTablePTwo");
    var bankingTableCBARTablePCBI = document.getElementById("bankingTable-CBAR-Table-PCBI");
    var bankingTableCBARTablePCBPO = document.getElementById("bankingTable-CBAR-Table-PCBPO");
    var bankingTableCBARTablePDDI = document.getElementById("bankingTable-CBAR-Table-PDDI");
    var bankingTableCBARTablePDDO = document.getElementById("bankingTable-CBAR-Table-PDDO");
    var bankingTableCBARTablePDTI = document.getElementById("bankingTable-CBAR-Table-PDTI");
    var bankingTableCBARTableDTO = document.getElementById("bankingTable-CBAR-Table-DTO");
    var bankingTableCBARTableCTI = document.getElementById("bankingTable-CBAR-Table-CTI");
    var bankingTableCBARTableCTO = document.getElementById("bankingTable-CBAR-Table-CTO");
    if (bankingTableCBARTablePTwo != null) {
        bankingTableCBARTablePTwo.addEventListener("change", function () {
            if (bankingTableCBARTablePCBI.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "block";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTablePCBPO.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "block";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTablePDDI.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "block";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTablePDDO.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "block";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTablePDTI.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "block";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTableDTO.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "block";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTableCTI.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "block";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "none";
            } else if (bankingTableCBARTableCTO.selected === true) {
                document.getElementById("bankingTableCBARTablePCBISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePCBPOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDISel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDDOSel").style.display = "none";
                document.getElementById("bankingTableCBARTablePDTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableDTOSel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTISel").style.display = "none";
                document.getElementById("bankingTableCBARTableCTOSel").style.display = "block";
            }
        })
    }

    //========================== Issuing ===================================

    var CardCBARTableISData = [
        { sno: 1, lobissuing: "Originations", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 2, lobissuing: "Authorization", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 3, lobissuing: "Personalization", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 4, lobissuing: "Transaction Processing", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 5, lobissuing: "Statement Processing", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 6, lobissuing: "Fees & Charges", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 7, lobissuing: "Interest", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 8, lobissuing: "Rewards and Marketing", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 9, lobissuing: "Installment Processing", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 10, lobissuing: "Fraud Processing", visionPlus: "Y", prime: "Y", powerCard: "N", maps: "-" },
        { sno: 11, lobissuing: "Customer Service", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 12, lobissuing: "Disputes & Chargebacks", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 13, lobissuing: "Collection", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 14, lobissuing: "Payment Processing", visionPlus: "Y", prime: "Y", powerCard: "Y", maps: "-" },
        { sno: 15, lobissuing: "Insurance Processing", visionPlus: "Y", prime: "Y", powerCard: "N", maps: "-" }

    ]

    CardCBARTableISData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);

        // Adding class Name
        appdendtdOne.className = "col-4";
        appdendtdtwo.className = "col-2";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appdendtdFive.className = "col-2";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.lobissuing));
        appdendtdtwo.appendChild(document.createTextNode(el.visionPlus));
        appdendtdThree.appendChild(document.createTextNode(el.prime));
        appdendtdFour.appendChild(document.createTextNode(el.powerCard));
        appdendtdFive.appendChild(document.createTextNode(el.maps));

        // Append Table Row in Table
        var table = document.getElementById("CardCBARTableISData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });

    // =================================== Acquiring ====================================

    var CardCBARTableACData = [
        { sno: 1, lobissuing: "Merchant Originations", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 2, lobissuing: "Terminal Management", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 3, lobissuing: "Transaction Processing", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 4, lobissuing: "Commission & Charges", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 5, lobissuing: "Merchant Statement", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 6, lobissuing: "Merchant Settlement", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 7, lobissuing: "Disputes & Chargebacks", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
        { sno: 8, lobissuing: "Merchant Management", visionPlus: "-", prime: "Y", powerCard: "Y", maps: "Y" },
    ]

    CardCBARTableACData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);

        // Adding class Name
        appdendtdOne.className = "col-4";
        appdendtdtwo.className = "col-2";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-2";
        appdendtdFive.className = "col-2";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.lobissuing));
        appdendtdtwo.appendChild(document.createTextNode(el.visionPlus));
        appdendtdThree.appendChild(document.createTextNode(el.prime));
        appdendtdFour.appendChild(document.createTextNode(el.powerCard));
        appdendtdFive.appendChild(document.createTextNode(el.maps));

        // Append Table Row in Table
        var table = document.getElementById("CardCBARTableACData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== payments ====================================

    var bankingTableCBARTablePHead = [
        { sno: "1", lob: "Cross Border Payments - Incoming", reposType: "ScriptGenie-WEB/Excel Repository", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "2", lob: "Cross Border Payments - Outgoing", reposType: "ScriptGenie-WEB/Excel Repository", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "3", lob: "Direct Debit (Inbound)", reposType: "ScriptGenie-WEB/Excel Repository", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "4", lob: "Direct Debit (Outbound)", reposType: "ScriptGenie-WEB/Excel Repository", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "5", lob: "Domestic Transfers (Incoming)", reposType: "Excel Repository", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "6", lob: "Domestic Transfers (Outgoing)", reposType: "Excel Repository", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "7", lob: "Credit Transfers (Incoming)", reposType: "Excel Repository", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "8", lob: "Credit Transfers (Outgoing)", reposType: "Excel Repository", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" }
    ]

    bankingTableCBARTablePHead.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");
        let tdCreateSeven = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);
        let appdendtdSeven = trCreate.appendChild(tdCreateSeven);

        // Adding class Name
        appdendtdOne.className = "col-3";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-1";
        appdendtdFive.className = "col-1";
        appdendtdSix.className = "col-1";
        appdendtdSeven.className = "col-1";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.lob));
        appdendtdtwo.appendChild(document.createTextNode(el.reposType));
        appdendtdThree.appendChild(document.createTextNode(el.GPP));
        appdendtdFour.appendChild(document.createTextNode(el.OPF));
        appdendtdFive.appendChild(document.createTextNode(el.TPX));
        appdendtdSix.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSeven.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTablePHead");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Cross Border Payments- Incoming ====================================

    var bankingTableCBARTablePCBIData = [
        { sno: "1", LOB: "Static Setups", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "2", LOB: "Payment Initiation", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "3", LOB: "Payment Processing", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "4", LOB: "Batch Processing", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "5", LOB: "Forex", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "6", LOB: "Payment Completion", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "7", LOB: "Investigation", GPP: "Y", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
    ]

    bankingTableCBARTablePCBIData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTablePCBIData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Cross Border Payments - Outgoin ====================================

    var bankingTableCBARTablePCBPOData = [
        { sno: "-", LOB: "Cross Border Payments - Outgoing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Static Setups", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Batch Processing", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Payment Initiation", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Processing", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Forex", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Investigation", GPP: "Y", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
    ]

    bankingTableCBARTablePCBPOData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTablePCBPOData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Cross Border Payments - Outgoin ====================================

    var bankingTableCBARTablePDDIData = [
        { sno: "-", LOB: "Direct Debit (Inbound)", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Agreement Processing", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Batch Processing", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Initiation", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "Y", Generic: "Y" },
        { sno: "-", LOB: "Payment Processing", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },
    ]

    bankingTableCBARTablePDDIData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTablePDDIData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Cross Border Payments - Outgoin ====================================

    var bankingTableCBARTablePDDOData = [
        { sno: "-", LOB: "Direct Debit (Outgoing)", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Static Setups", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Agreement Processing", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "-", LOB: "Batch Processing", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Payment Processing", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "Y", Generic: "Y" },
        { sno: "-", LOB: "Payment Initiation", GPP: "Y", OPF: "Y", TPX: "Y", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "Y", OPF: "Y", TPX: "-", TPXGUI: "-", Generic: "Y" },

    ]

    bankingTableCBARTablePDDOData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTablePDDOData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Cross Border Payments - Outgoin ====================================

    var bankingTableCBARTablePDTIData = [
        { sno: "-", LOB: "Domestic Transfers (Incoming)", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Payment Initiation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Agreement Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Warehousing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Investigation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },

    ]

    bankingTableCBARTablePDTIData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTablePDTIData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Cross Border Payments - Outgoin ====================================

    var bankingTableCBARTableDTOData = [
        { sno: "-", LOB: "Domestic Transfers (Outgoing)", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Agreement Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Initiation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Warehousing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Investigation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },

    ]

    bankingTableCBARTableDTOData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTableDTOData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Cross Border Payments - Outgoin ====================================

    var bankingTableCBARTableCTIData = [
        { sno: "-", LOB: "Credit Transfers (Incoming)", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Payment Initiation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Batch Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Agreement Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Warehousing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Investigation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },

    ]

    bankingTableCBARTableCTIData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTableCTIData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Credit Transfers (Outgoing) ====================================

    var bankingTableCBARTableCTOData = [
        { sno: "-", LOB: "Credit Transfers (Outgoing)", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "-" },
        { sno: "-", LOB: "Payment Initiation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Agreement Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Processing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Payment Completion", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Warehousing", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" },
        { sno: "-", LOB: "Investigation", GPP: "-", OPF: "-", TPX: "-", TPXGUI: "-", Generic: "Y" }

    ]

    bankingTableCBARTableCTOData.map((el) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);

        // Adding class Name
        appdendtdOne.className = "col-5";
        appdendtdtwo.className = "col-3 px-0";
        appdendtdThree.className = "col-1 px-0";
        appdendtdFour.className = "col-1 px-0";
        appdendtdFive.className = "col-1 px-0";
        appdendtdSix.className = "col-1 px-0";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.LOB));
        appdendtdtwo.appendChild(document.createTextNode(el.GPP));
        appdendtdThree.appendChild(document.createTextNode(el.OPF));
        appdendtdFour.appendChild(document.createTextNode(el.TPX));
        appdendtdFive.appendChild(document.createTextNode(el.TPXGUI));
        appdendtdSix.appendChild(document.createTextNode(el.Generic));

        // Append Table Row in Table
        var table = document.getElementById("bankingTableCBARTableCTOData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    //========================================= Training Materials ====================================

    var bankingTableCPTMTableSel = document.getElementById("bankingTable-CBTM-Table");
    var bankingTableCPTMTableCSel = document.getElementById("bankingTable-CBTM-Table-C");
    var bankingTableCPTMTablePSel = document.getElementById("bankingTable-CBTM-Table-P");
    if (bankingTableCPTMTableSel != null) {
        bankingTableCPTMTableSel.addEventListener("change", function () {
            if (bankingTableCPTMTableCSel.selected === true) {
                document.getElementById("bankingTableCBTMableC").style.display = "block";
                document.getElementById("bankingTableCBTMTableP").style.display = "none";
            } else if (bankingTableCPTMTablePSel.selected === true) {
                document.getElementById("bankingTableCBTMableC").style.display = "none";
                document.getElementById("bankingTableCBTMTableP").style.display = "block";
            }
        })
    }

    // Cards Issues
    var bankingTableCBTMTableTwo = document.getElementById("bankingTableCBTMTableTwo");
    var bankingTableCBTMTableISSel = document.getElementById("bankingTable-CBTM-Table-IS");
    var bankingTableCBTMTableACSel = document.getElementById("bankingTable-CBTM-Table-AC");
    if (bankingTableCBTMTableTwo != null) {
        bankingTableCBTMTableTwo.addEventListener("change", function () {
            if (bankingTableCBTMTableISSel.selected === true) {
                document.getElementById("CardCBTMTableIS").style.display = "block";
                document.getElementById("CardCBTMTableAC").style.display = "none";
            } else if (bankingTableCBTMTableACSel.selected === true) {
                document.getElementById("CardCBTMTableIS").style.display = "none";
                document.getElementById("CardCBTMTableAC").style.display = "block";
            }
        })
    }


    //========================== Issuing ===================================

    var CardCBTMTableISData = [
        { cards: "Cards Overview - Session 1_Introduction", visionplus: "CDM Module ", prime: "TSYS Training - Application Boarding v2.0" },
        { cards: "Cards Overview - Session 2_Originations", visionplus: "OMS Module", prime: "TSYS Training - Card Personalization-v0.2" },
        { cards: "Cards Overview - Session 3_Account Management", visionplus: "LMS Module", prime: "TSYS Training - Issuer Account Closure V 0.2" },
        { cards: "Cards Overview - Session 5_Collections", visionplus: "FAS Module", prime: "TSYS Training - Issuer Customer Services- v0.2" },
        { cards: "Cards Overview - Session 6_Rewards", visionplus: "ASM Module", prime: "TSYS Training - Issuer Disputes v0.2" },
        { cards: "Cards Overview - Session 7_Disputes & Chargebacks", visionplus: "LTS Module", prime: "TSYS Training - ISSUER REWARDS - v0.1" },
        { cards: "Cards Overview - Session 8_Authorizations", visionplus: "CMS Module ", prime: "TSYS Training - Issuer-Interest V0.1" },
        { cards: "-", visionplus: "ITS Module ", prime: "TSYS Training - Issuer-Statement Processing V0.2" },
        { cards: "-", visionplus: "MBS Module ", prime: "TSYS Training - Payment Allocation - v0.2" },
        { cards: "-", visionplus: "TRAMS Module", prime: "TSYS Training - TSYS Application - v0.2-1h 30mins" },
        { cards: "-", visionplus: "Vision Plus 10 - CMS Module V1.0 - June 2017", prime: "TSYS Training -Collections- v0.2" },
        { cards: "-", visionplus: "-", prime: "Tsys_Online Issuer Training Material_V 0.1" },
        { cards: "-", visionplus: "-", prime: "TSYS-Training-Issuer Transaction Processing-v 0.2-20mins" },
        { cards: "-", visionplus: "-", prime: "TSYS-Training-TSYS Client-v 0.2-30mins" },
        { cards: "-", visionplus: "-", prime: "ONLINE ADMINISTRATION v 1.0" },
        { cards: "-", visionplus: "-", prime: "ONLINE ISSUER  v1.0" },
        { cards: "-", visionplus: "-", prime: "PRIME 101- PRIME Issuer & Acquirer Concepts & Functionality.v1.03" }

    ]

    CardCBTMTableISData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-3";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-3"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.cards));
        appdendtdtwo.appendChild(document.createTextNode(el.visionplus));
        appdendtdThree.appendChild(document.createTextNode(el.prime));
        appdendtdFour.appendChild(document.createTextNode("-"));

        // Append Table Row in Table
        var table = document.getElementById("CardCBTMTableISData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });

    // =================================== Acquiring ====================================

    var CardCBTMTableACData = [
        { genericcards: "Cards Overview - Session 4_Acquiring", prime: "TSYS Training - Merchant Closure - v0.3", powercard: "Merchant Creation" },
        { genericcards: "-", prime: "TSYS Training - Merchant creation - v5.0", powercard: "Merchant Commission and fees" },
        { genericcards: "-", prime: "TSYS-Training-Acquirer Fees-v 0.2-60mins", powercard: "Merchant Management" },
        { genericcards: "-", prime: "ONLINE ACQUIRER v 1.0", powercard: "Merchant Settlement" }
    ]

    CardCBTMTableACData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);

        // Adding class Name
        appdendtdOne.className = "col-3";
        appdendtdtwo.className = "col-3";
        appdendtdThree.className = "col-3";
        appdendtdFour.className = "col-3"

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.genericcards));
        appdendtdtwo.appendChild(document.createTextNode("-"));
        appdendtdThree.appendChild(document.createTextNode(el.prime));
        appdendtdFour.appendChild(document.createTextNode(el.powercard));

        // Append Table Row in Table
        var table = document.getElementById("CardCBTMTableACData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });

    // iGaming =======================================================================
    var igamingIGARTableSel = document.getElementById("igaming-IGAR-Table");
    var igamingIGARTableRESel = document.getElementById("igaming-IGAR-Table-RE");
    var igamingIGARTableRRSel = document.getElementById("igaming-IGAR-Table-RR");
    var igamingIGARTableBLSel = document.getElementById("igaming-IGAR-Table-BL");
    var igamingIGARTableFRSel = document.getElementById("igaming-IGAR-Table-FR");
    var igamingIGARTableHLSel = document.getElementById("igaming-IGAR-Table-HL");
    var igamingIGARTableKISel = document.getElementById("igaming-IGAR-Table-KI");
    var igamingIGARTableSLSel = document.getElementById("igaming-IGAR-Table-SL");
    var igamingIGARTableSPSel = document.getElementById("igaming-IGAR-Table-SP");
    var igamingIGARTableTCSel = document.getElementById("igaming-IGAR-Table-TC");
    var igamingIGARTableVPSel = document.getElementById("igaming-IGAR-Table-VP");
    var igamingIGARTableXSSel = document.getElementById("igaming-IGAR-Table-XS");
    var igamingIGARTableBASel = document.getElementById("igaming-IGAR-Table-BA");
    var igamingIGARTableGBSel = document.getElementById("igaming-IGAR-Table-GB");
    if (igamingIGARTableSel != null) {
        igamingIGARTableSel.addEventListener("change", function () {
            if (igamingIGARTableRESel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "block";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableRRSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "block";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableBLSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "block";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableFRSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "block";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableHLSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "block";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableKISel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "block";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableSLSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "block";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableSPSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "block";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableTCSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "block";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableVPSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "block";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableXSSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "block";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableBASel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "block";
                document.getElementById("igamingIGARTableGB").style.display = "none";
            } else if (igamingIGARTableGBSel.selected === true) {
                document.getElementById("igamingIGARTableRE").style.display = "none";
                document.getElementById("igamingIGARTableRR").style.display = "none";
                document.getElementById("igamingIGARTableBL").style.display = "none";
                document.getElementById("igamingIGARTableFR").style.display = "none";
                document.getElementById("igamingIGARTableHL").style.display = "none";
                document.getElementById("igamingIGARTableKI").style.display = "none";
                document.getElementById("igamingIGARTableSL").style.display = "none";
                document.getElementById("igamingIGARTableSp").style.display = "none";
                document.getElementById("igamingIGARTableTC").style.display = "none";
                document.getElementById("igamingIGARTableVP").style.display = "none";
                document.getElementById("igamingIGARTableXS").style.display = "none";
                document.getElementById("igamingIGARTableBA").style.display = "none";
                document.getElementById("igamingIGARTableGB").style.display = "block";
            }
        })
    }
    // =================================== Reactor ====================================

    var igamingIGARTableREData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 183 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 95 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 157 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 128 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 60 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 11 },
        { sno: 7, jurisdiction: "Compliance Testing - IOM", nooftestcases: 13 },
        { sno: 8, jurisdiction: "Compliance Testing - DEN", nooftestcases: 59 },
        { sno: 9, jurisdiction: "Compliance Testing - ITLN", nooftestcases: 31 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 172 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 109 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 68 },
        { sno: 14, jurisdiction: "Game Specific ", nooftestcases: "-" },
        { sno: 15, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 16, jurisdiction: "Mobile Testing", nooftestcases: 14 },
    ]

    igamingIGARTableREData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableREData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Region Reactor ====================================

    var igamingIGARTableRRData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 217 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 113 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 204 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 129 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 78 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 7, jurisdiction: "Compliance - IOM", nooftestcases: 11 },
        { sno: 8, jurisdiction: "Compliance - DEN", nooftestcases: 54 },
        { sno: 9, jurisdiction: "Functional Testing", nooftestcases: 205 },
        { sno: 10, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 11, jurisdiction: "Extended Smoke testing", nooftestcases: 131 },
        { sno: 12, jurisdiction: "Smoke testing", nooftestcases: 69 },
        { sno: 13, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 14, jurisdiction: "Mobile Testing", nooftestcases: 14 },
    ]

    igamingIGARTableRRData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableRRData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== BlackJack ====================================

    var igamingIGARTableBLData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 154 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 95 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 148 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 109 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 68 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 5 },
        { sno: 7, jurisdiction: "Compliance Testing - IOM", nooftestcases: 11 },
        { sno: 8, jurisdiction: "Compliance Testing - Italian", nooftestcases: 56 },
        { sno: 9, jurisdiction: "Compliance Testing - DEN", nooftestcases: 54 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 226 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 93 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 67 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Mobile Testing", nooftestcases: 14 },
        { sno: 16, jurisdiction: "Live Games Testing", nooftestcases: 21 },
    ]

    igamingIGARTableBLData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableBLData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Freactors ====================================

    var igamingIGARTableFRData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 193 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 106 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 180 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 124 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 81 },
        { sno: 6, jurisdiction: "Compliance Testing - ITLN", nooftestcases: 37 },
        { sno: 7, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 8, jurisdiction: "Compliance - IOM", nooftestcases: 8 },
        { sno: 9, jurisdiction: "Compliance- DEN", nooftestcases: 25 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 172 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 113 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 83 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Mobile Testing", nooftestcases: 14 },
    ]

    igamingIGARTableFRData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableFRData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Hi Lo ====================================

    var igamingIGARTableHLData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 131 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 65 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 126 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 94 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 64 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 7, jurisdiction: "Compliance - IOM", nooftestcases: 8 },
        { sno: 8, jurisdiction: "Compliance-DEN", nooftestcases: 31 },
        { sno: 9, jurisdiction: "Compliance-ITLN", nooftestcases: 31 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 149 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 78 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 119 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 79 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Mobile Testing", nooftestcases: 14 },
    ]

    igamingIGARTableHLData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableHLData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Kino ====================================

    var igamingIGARTableKIData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 139 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 87 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 133 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 91 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 67 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 7, jurisdiction: "Compliance - IOM", nooftestcases: 8 },
        { sno: 8, jurisdiction: "Compliance - DEN", nooftestcases: 55 },
        { sno: 9, jurisdiction: "Compliance-ITLN", nooftestcases: 57 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 169 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 111 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 74 },
        { sno: 14, jurisdiction: "Mobile Testing", nooftestcases: 14 },
        { sno: 15, jurisdiction: "Product Testing", nooftestcases: 586 },

    ]

    igamingIGARTableKIData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableKIData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Slot ====================================

    var igamingIGARTableSLData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 259 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 118 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 244 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 140 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 57 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 7, jurisdiction: "Compliance Testing - IOM", nooftestcases: 9 },
        { sno: 8, jurisdiction: "Compliance Testing - Denmark", nooftestcases: 66 },
        { sno: 9, jurisdiction: "Compliance Testing - Latvia", nooftestcases: 3 },
        { sno: 10, jurisdiction: "Compliance Testing - ITLN", nooftestcases: 65 },
        { sno: 11, jurisdiction: "Functional Testing", nooftestcases: 316 },
        { sno: 12, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 13, jurisdiction: "Extended Smoke testing", nooftestcases: 167 },
        { sno: 14, jurisdiction: "Smoke testing", nooftestcases: 85 },
        { sno: 15, jurisdiction: "Product Testing", nooftestcases: 837 },
        { sno: 16, jurisdiction: "Mobile Testing", nooftestcases: 20 },
        { sno: 17, jurisdiction: "API Testing", nooftestcases: 56 },
        { sno: 18, jurisdiction: "Other testing", nooftestcases: 628 },
    ]

    igamingIGARTableSLData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableSLData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== SPoker ====================================

    var igamingIGARTableSPData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 179 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 81 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 170 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 136 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 73 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 9 },
        { sno: 7, jurisdiction: "Compliance Testing - Italian", nooftestcases: 62 },
        { sno: 8, jurisdiction: "Compliance Testing - DEN", nooftestcases: 77 },
        { sno: 9, jurisdiction: "Compliance - IOM", nooftestcases: 8 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 147 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 78 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 114 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 68 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Mobile Testing", nooftestcases: 14 },

    ]

    igamingIGARTableSPData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableSPData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });



    // =================================== Texas Choosem ====================================

    var igamingIGARTableTCData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 130 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 63 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 125 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 93 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 63 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 7, jurisdiction: "Compliance - IOM", nooftestcases: 7 },
        { sno: 8, jurisdiction: "Compliance - DEN", nooftestcases: 43 },
        { sno: 9, jurisdiction: "Functional Testing", nooftestcases: 137 },
        { sno: 10, jurisdiction: "UAT Testing", nooftestcases: 78 },
        { sno: 11, jurisdiction: "Extended Smoke testing", nooftestcases: 107 },
        { sno: 12, jurisdiction: "Smoke testing", nooftestcases: 75 },
        { sno: 13, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 14, jurisdiction: "Mobile Testing", nooftestcases: 14 },


    ]

    igamingIGARTableTCData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableTCData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== VPoker ====================================

    var igamingIGARTableVPData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 164 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 65 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 157 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 111 },
        { sno: 5, jurisdiction: "Compliance - DEN", nooftestcases: 40 },
        { sno: 6, jurisdiction: "Compliance Testing - ITLY", nooftestcases: 35 },
        { sno: 7, jurisdiction: "Compliance Testing - GIB", nooftestcases: 63 },
        { sno: 8, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 9, jurisdiction: "Compliance - IOM", nooftestcases: 7 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 148 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 98 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 71 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
    ]

    igamingIGARTableVPData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableVPData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== XSlot ====================================

    var igamingIGARTableXSData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 176 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 100 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 165 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 95 },
        { sno: 5, jurisdiction: "Compliance Testing -DEN", nooftestcases: 52 },
        { sno: 6, jurisdiction: "Compliance Testing - GIB", nooftestcases: 63 },
        { sno: 7, jurisdiction: "Compliance Testing - MGA", nooftestcases: 5 },
        { sno: 8, jurisdiction: "Compliance Testing - IOM", nooftestcases: 14 },
        { sno: 9, jurisdiction: "Compliance Testing - ITLN", nooftestcases: 79 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 159 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 114 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 89 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Mobile Testing", nooftestcases: 14 },
    ]

    igamingIGARTableXSData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableXSData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Baccarat ====================================

    var igamingIGARTableBAData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 131 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 67 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 126 },
        { sno: 4, jurisdiction: "Compliance Testing - DEN", nooftestcases: 37 },
        { sno: 5, jurisdiction: "Compliance Testing - LQ", nooftestcases: 95 },
        { sno: 6, jurisdiction: "Compliance Testing - ITLN", nooftestcases: 38 },
        { sno: 7, jurisdiction: "Compliance Testing - GIB", nooftestcases: 70 },
        { sno: 8, jurisdiction: "Compliance Testing - MGA", nooftestcases: 8 },
        { sno: 9, jurisdiction: "Compliance - IOM", nooftestcases: 9 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 181 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 78 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 110 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 72 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Live Games Testing", nooftestcases: 21 },
        { sno: 16, jurisdiction: "Mobile Testing", nooftestcases: 14 },

    ]

    igamingIGARTableBAData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableBAData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== GBet ====================================

    var igamingIGARTableGBData = [
        { sno: 1, jurisdiction: "Compliance Testing - AGCC", nooftestcases: 192 },
        { sno: 2, jurisdiction: "Compliance Testing - UKGC", nooftestcases: 103 },
        { sno: 3, jurisdiction: "Compliance Testing - TGS5", nooftestcases: 179 },
        { sno: 4, jurisdiction: "Compliance Testing - LQ", nooftestcases: 106 },
        { sno: 5, jurisdiction: "Compliance Testing - GIB", nooftestcases: 72 },
        { sno: 6, jurisdiction: "Compliance Testing - MGA", nooftestcases: 7 },
        { sno: 7, jurisdiction: "Compliance Testing - IOM", nooftestcases: 13 },
        { sno: 8, jurisdiction: "Compliance Testing - DEN", nooftestcases: 41 },
        { sno: 9, jurisdiction: "Compliance Testing - ITLN", nooftestcases: 43 },
        { sno: 10, jurisdiction: "Functional Testing", nooftestcases: 187 },
        { sno: 11, jurisdiction: "UAT Testing", nooftestcases: 79 },
        { sno: 12, jurisdiction: "Extended Smoke testing", nooftestcases: 104 },
        { sno: 13, jurisdiction: "Smoke testing", nooftestcases: 72 },
        { sno: 14, jurisdiction: "Product Testing", nooftestcases: 586 },
        { sno: 15, jurisdiction: "Live Games Testing", nooftestcases: 21 },
        { sno: 16, jurisdiction: "Mobile Testing", nooftestcases: 14 },
    ]

    igamingIGARTableGBData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.jurisdiction));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("igamingIGARTableGBData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // Video Gaming =======================================================================
    var vgamingVGDRTableSel = document.getElementById("vgaming-VGDR-Table");
    var vgamingVGDRTableISOSel = document.getElementById("vgaming-VGDR-Table-ISO");
    var vgamingVGDRTableANSel = document.getElementById("vgaming-VGDR-Table-AN");
    if (vgamingVGDRTableSel != null) {
        vgamingVGDRTableSel.addEventListener("change", function () {
            if (vgamingVGDRTableISOSel.selected === true) {
                document.getElementById("vgamingVGDRTableISO").style.display = "block";
                document.getElementById("vgamingVGDRTableAN").style.display = "none";
            } else if (vgamingVGDRTableANSel.selected === true) {
                document.getElementById("vgamingVGDRTableISO").style.display = "none";
                document.getElementById("vgamingVGDRTableAN").style.display = "block";
            }
        });
    }
    // =================================== ISO ====================================

    var vgamingVGDRTableISOData = [
        { sno: 1, iosfeature: "iPhone-iPad specifics", nooftestcases: 82 },
        { sno: 2, iosfeature: "SaveLoad", nooftestcases: 12 },
        { sno: 3, iosfeature: "Sound", nooftestcases: 17 },
        { sno: 4, iosfeature: "Payment&DLC", nooftestcases: 22 },
        { sno: 5, iosfeature: "Social Networking", nooftestcases: 13 },
        { sno: 6, iosfeature: "Menu Checks", nooftestcases: 58 },
        { sno: 7, iosfeature: "MP & Gamecenter", nooftestcases: 86 },
        { sno: 8, iosfeature: "Interruptions", nooftestcases: 961 },
        { sno: 9, iosfeature: "Compatibility ", nooftestcases: 7 },
        { sno: 10, iosfeature: "Rejection Criterias", nooftestcases: 114 },
        { sno: 11, iosfeature: "Submission Criteria", nooftestcases: 6 },
        { sno: 12, iosfeature: "Post Validation", nooftestcases: 1 }

    ]

    vgamingVGDRTableISOData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.iosfeature));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("vgamingVGDRTableISOData");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


    // =================================== Android ====================================

    var vgamingVGDRTableANData = [
        { sno: 1, iosfeature: "Core App Quality", nooftestcases: 79 },
        { sno: 2, iosfeature: "Install Launch", nooftestcases: 2 },
        { sno: 3, iosfeature: "Connectivity", nooftestcases: 17 },
        { sno: 4, iosfeature: "Event Handling", nooftestcases: 5 },
        { sno: 5, iosfeature: "UI & Memory Handling", nooftestcases: 20 },
        { sno: 6, iosfeature: "Language & Media", nooftestcases: 9 },
        { sno: 7, iosfeature: "Functionality & Performance", nooftestcases: 7 },
        { sno: 8, iosfeature: "Interrupts", nooftestcases: 608 },
    ]

    vgamingVGDRTableANData.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);

        // Adding class Name
        appdendtdOne.className = "col-2";
        appdendtdtwo.className = "col-7";
        appdendtdThree.className = "col-3";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.iosfeature));
        appdendtdThree.appendChild(document.createTextNode(el.nooftestcases));

        // Append Table Row in Table
        var table = document.getElementById("vgamingVGDRTableANData");
        if (table != null) {
            table.appendChild(trCreate);
        }
    });


    // =================================== Global QA Assets catalogue ====================================

    var GQAACatalogue = [
        { sno: 1, expleo_region: "INDIA", assetname: "DIARY(Dynamic Integrated and Automated Reporting for You)", category: "Reporting", domain: "All", summarydesc: "Test Reporting", emailName: "Gurumoorthi Ganesan", emailid: "Gurumoorthi.Ganesan@expleogroup.com" },
        { sno: 2, expleo_region: "INDIA", assetname: "File comparison utility", category: "File utilities", domain: "Cards", summarydesc: "Compare two files of different formats", emailName: "Rajasundaram Subramanian", emailid: "Rajasundaram.Subramanian@expleogroup.com" },
        { sno: 3, expleo_region: "INDIA", assetname: "FuseJ", category: "Performance Testing", domain: "All", summarydesc: "Framework validates PT test scripts built using JMETER", emailName: "Yoganand Lakshmanan", emailid: "Yoganand.Lakshmanan@expleogroup.com" },
        { sno: 4, expleo_region: "INDIA", assetname: "MetriQ", category: "Data Analytics", domain: "All", summarydesc: "Test Reporting", emailName: "Manikandan Kandengath", emailid: "Manikandan.Kandengath@expleogroup.com" },
        { sno: 5, expleo_region: "INDIA", assetname: "PAVE", category: "Configuration management", domain: "Cards", summarydesc: "Parameter Verification framework for V+ and TSYS prime applications", emailName: "Manikandan Kandengath", emailid: "Manikandan.Kandengath@expleogroup.com" },
        { sno: 6, expleo_region: "INDIA", assetname: "Rapid Development framework ", category: "Development", domain: "All", summarydesc: "RAD framework", emailName: "Badrinarayanan Viswanathan", emailid: "Badrinarayanan.Viswanathan@expleogroup.com" },
        { sno: 7, expleo_region: "INDIA", assetname: "Rator", category: "Automation", domain: "Insurance", summarydesc: "Insurance Premium calculation based on varying input parameters", emailName: "Nagarajan Ramu", emailid: "Nagarajan.Ramu@expleogroup.com" },
        { sno: 8, expleo_region: "INDIA", assetname: "RPA framework", category: "RPA", domain: "All", summarydesc: "Wrapper around RPA tools for greater ease of use", emailName: "Balakrishnan Meleveetil", emailid: "Balakrishnan.Meleveetil@expleogroup.com" },
        { sno: 9, expleo_region: "INDIA", assetname: "SWIFTest", category: "Message simulation", domain: "Payments", summarydesc: "An excel based Swift messages generator for MT series ", emailName: "Pushpavaneswaran Venkatraman", emailid: "Pushpavaneswaran.Venkatraman@expleogroup.com" },
        { sno: 10, expleo_region: "INDIA", assetname: "Talend DI Framework", category: "Data Management", domain: "All", summarydesc: "A Talend based framework for Data reconciliation", emailName: "Rajasundaram Subramanian", emailid: "Rajasundaram.Subramanian@expleogroup.com" },
        { sno: 11, expleo_region: "INDIA", assetname: "TripleDES Tools", category: "Cryptography", domain: "Cards", summarydesc: "Excel VBA implementation of 3DES", emailName: "Srinivasa Sundar.B", emailid: "Srinivasasundar.Bandepalli@expleogroup.com" },
        { sno: 12, expleo_region: "INDIA", assetname: "VISA Base II file generator", category: "File utilities", domain: "Cards", summarydesc: "Scheme file generator for VISA scheme", emailName: "Srinivasa Sundar.B", emailid: "Srinivasasundar.Bandepalli@expleogroup.com" },
        { sno: 13, expleo_region: "INDIA", assetname: "AEGNS file generator", category: "File utilities", domain: "Cards", summarydesc: "Scheme file generator for AMEX scheme", emailName: "Srinivasa Sundar.B", emailid: "Srinivasasundar.Bandepalli@expleogroup.com" },
        { sno: 14, expleo_region: "INDIA", assetname: "DFIT", category: "Data Management", domain: "All", summarydesc: "Data Management tool", emailName: "-", emailid: "-" },
        { sno: 15, expleo_region: "INDIA", assetname: "IPM file generator", category: "File utilities", domain: "Cards", summarydesc: "Scheme file generator for MasterCard scheme", emailName: "Srinivasa Sundar.B", emailid: "Srinivasasundar.Bandepalli@expleogroup.com" },
        { sno: 16, expleo_region: "INDIA", assetname: "TAG", category: "Test Design", domain: "All", summarydesc: "All pairs approach to test design", emailName: "Nagarajan Ramu", emailid: "Nagarajan.Ramu@expleogroup.com" },
        { sno: 17, expleo_region: "INDIA", assetname: "UPI file generator", category: "File utilities", domain: "Cards", summarydesc: "Scheme file generator for UPI/CUP scheme", emailName: "Srinivasa Sundar.B", emailid: "Srinivasasundar.Bandepalli@expleogroup.com" },
        { sno: 18, expleo_region: "INDIA", assetname: "VISA VSS reports generator", category: "File utilities", domain: "Cards", summarydesc: "VSS reports validator for VISA scheme", emailName: "Srinivasa Sundar.B", emailid: "Srinivasasundar.Bandepalli@expleogroup.com" },
        { sno: 19, expleo_region: "INDIA", assetname: "DevOps assessment PHP app", category: "Assessment", domain: "All", summarydesc: "DevOps maturity assessment framework", emailName: "Ragavendira Rajathirumalai", emailid: "Ragavendira.Rajathirumalai@expleogroup.com" },
        { sno: 20, expleo_region: "INDIA", assetname: "TcAQUA", category: "Automation", domain: "PLM", summarydesc: "Teamcenter automated quality assurance framework. ", emailName: "Sunny Ruparel", emailid: "Sunny.Ruparel@expleogroup.com" },
        { sno: 21, expleo_region: "INDIA", assetname: "SUPERBOT", category: "Automation", domain: "All", summarydesc: "Test automation\End user experiance monitoring Framework", emailName: "Sunny Ruparel", emailid: "Sunny.Ruparel@expleogroup.com" },
        { sno: 22, expleo_region: "INDIA", assetname: "Access / Security Validation", category: "Automation", domain: "PLM", summarydesc: "Test automation Framework for validating complex security matrix", emailName: "Sunny Ruparel", emailid: "Sunny.Ruparel@expleogroup.com" },
        { sno: 23, expleo_region: "INDIA", assetname: "SAP S4HANA Automation Pack", category: "Automation", domain: "ERP", summarydesc: "Test automation Framework", emailName: "Sunny Ruparel", emailid: "Sunny.Ruparel@expleogroup.com" },
        { sno: 24, expleo_region: "INDIA", assetname: "Heat Map", category: "Business Consulting", domain: "All", summarydesc: "Business consulting tool. Heat map is a Visual Interpretation of Impact Analysis due to changes in Teamcenter.", emailName: "Charuchandra Pandit", emailid: "Charuchandra.Pandit@expleogroup.com" },
        { sno: 25, expleo_region: "INDIA", assetname: "Automation Results Dashboard", category: "Automation", domain: "All", summarydesc: "Web application developed  using MEAN stack.", emailName: "Hemchandra Ujjainkar", emailid: "Hemchandra.Ujjainkar@expleogroup.com" },
        { sno: 26, expleo_region: "INDIA", assetname: "ArasINNOVATOR automation pack", category: "Automation", domain: "PLM", summarydesc: "Test automation Framework", emailName: "Sunny Ruparel", emailid: "Sunny.Ruparel@expleogroup.com" },
        { sno: 27, expleo_region: "INDIA", assetname: "AutoRally Connector", category: "Automation", domain: "All", summarydesc: "Automation and test management tool connector", emailName: "Pritam Shikare", emailid: "Pritam.Shikare@expleogroup.com" },
        { sno: 28, expleo_region: "INDIA", assetname: "CADx Compatibility Matrix", category: "Business Consulting", domain: "PLM", summarydesc: "Business consulting tool", emailName: "Charuchandra Pandit", emailid: "Charuchandra.Pandit@expleogroup.com" },
        { sno: 29, expleo_region: "INDIA", assetname: "GIZMO", category: "Random Number Evaluation", domain: "Gambling", summarydesc: "Proprietary Random Number Evaluation tool", emailName: "Pankaj Yadav", emailid: "Pankaj.Yadav@expleogroup.com" },
        { sno: 30, expleo_region: "INDIA", assetname: "Elixer Robot ", category: "File utilities", domain: "All", summarydesc: "To extract PDF data to excel for eg. Invoices", emailName: "Prashant Mali", emailid: "Prashant.Mali@expleogroup.com" },
        { sno: 31, expleo_region: "INDIA", assetname: "Reporting utility", category: "Reporting", domain: "All", summarydesc: "To send daily report via automated utility for Allianz account", emailName: "Pradeep Chauhan", emailid: "Pradeep.Chauhan@expleogroup.com" },
        { sno: 32, expleo_region: "INDIA", assetname: "Playbook for Docker", category: "DevOps", domain: "All", summarydesc: "To install Docker on Linux Operating System", emailName: "Ragavendira Rajathirumalai", emailid: "Ragavendira.Rajathirumalai@expleogroup.com" },
        { sno: 33, expleo_region: "INDIA", assetname: "Playbook for Gitea", category: "DevOps", domain: "All", summarydesc: "To install Gitea on Linux Operating System", emailName: "Ragavendira Rajathirumalai", emailid: "Ragavendira.Rajathirumalai@expleogroup.com" },
        { sno: 34, expleo_region: "INDIA", assetname: "Playbook for Hygieia", category: "DevOps", domain: "All", summarydesc: "To install Hygieia on Linux Operating System", emailName: "Ragavendira Rajathirumalai", emailid: "Ragavendira.Rajathirumalai@expleogroup.com" },
        { sno: 35, expleo_region: "INDIA", assetname: "Playbook for Jenkins", category: "DevOps", domain: "All", summarydesc: "To install and configure Jenkins on Linux Operating System", emailName: "Ragavendira Rajathirumalai", emailid: "Ragavendira.Rajathirumalai@expleogroup.com" },
        { sno: 36, expleo_region: "DACH", assetname: "COMO", category: "Software Analysis", domain: "-", summarydesc: "-", emailName: "Michael Schmidt", emailid: "michael.schmidt@expleogroup.com" },
        { sno: 37, expleo_region: "DACH", assetname: "Expleo TEST / Professional", category: "Test Management", domain: "-", summarydesc: "-Test Planning -Test Design -Manual Test Execution -Requirements (Coverage) - Test Process Automation)", emailName: "Michael Timpe", emailid: "Michael.Timpe@expleogroup.com" },
        { sno: 38, expleo_region: "DACH", assetname: "Expleo TEST Test Case Specification (TCS)", category: "Test Design based on equivalence classes", domain: "-", summarydesc: "-", emailName: "Michael Timpe", emailid: "Michael.Timpe@expleogroup.com" },
        { sno: 39, expleo_region: "DACH", assetname: "MERAN", category: "Requirements Management", domain: "-", summarydesc: "-", emailName: "Jirka Nasarek", emailid: "-" },
        { sno: 40, expleo_region: "DACH", assetname: "MERAN-DXL", category: "Specification / Test Sepcification / Variant Management / Modelling", domain: "-", summarydesc: "-", emailName: "Joachim Wegener", emailid: "joachim.wegener@expleogroup.com" },
        { sno: 41, expleo_region: "DACH", assetname: "MESSINA", category: "Test Automation", domain: "-", summarydesc: "-", emailName: "Jorg Reiner", emailid: "-" },
        { sno: 42, expleo_region: "DACH", assetname: "MESSINA-HiL / Modular-HiL", category: "Test Automation", domain: "-", summarydesc: "-", emailName: "Ulrich Alsmann", emailid: "ulrich.alsmann@expleogroup.com" },
        { sno: 43, expleo_region: "DACH", assetname: "MODENA", category: "Test Design", domain: "-", summarydesc: "-", emailName: "Markus Freudsmiedl", emailid: "-" },
        { sno: 44, expleo_region: "DACH", assetname: "MODICA", category: "Test Design", domain: "-", summarydesc: "-", emailName: "Jorg Reiner", emailid: "-" },
        { sno: 45, expleo_region: "DACH", assetname: "QALLISTO", category: "Test Management", domain: "-", summarydesc: "- Test Planning- Test Design - Manual Test Execution - Defect Management - Dashboard", emailName: "Michael Timpe", emailid: "Michael.Timpe@expleogroup.com" },
        { sno: 46, expleo_region: "DACH", assetname: "SPNTG", category: "Test Design / Generation", domain: "-", summarydesc: "-", emailName: "Michael Timpe", emailid: "Michael.Timpe@expleogroup.com" },
        { sno: 47, expleo_region: "DACH", assetname: "TESTONA", category: "Test Design", domain: "-", summarydesc: "-", emailName: "Peter M. Kruse", emailid: "peter.kruse@expleogroup.com" },
        { sno: 48, expleo_region: "DACH", assetname: "TRENTINO", category: "Test Optimization", domain: "-", summarydesc: "-", emailName: "Dimitrij Gester", emailid: "dimitrij.gester@expleogroup.com" },
        { sno: 49, expleo_region: "DACH", assetname: "UFT Framework", category: "Test Automation", domain: "-", summarydesc: "- Framework to support test scripting and report generation", emailName: "Martin Hennecke", emailid: "-" },
        { sno: 50, expleo_region: "DACH", assetname: "AutoQ Portable", category: "Test Automation", domain: "-", summarydesc: "Framework for test scripts written in Excel using a DSL suitable for functional dept. members", emailName: "Roland Ruiken", emailid: "Roland.Ruiken@expleogroup.com" },
        { sno: 51, expleo_region: "DACH", assetname: "Test Data Finder", category: "Data Management", domain: "Insurance (and more)", summarydesc: "Tool to search for - possibly generated - suitable test data in a test data repository", emailName: "Rafael Hauser", emailid: "Rafael.Hauser@expleogroup.com" },
        { sno: 52, expleo_region: "DACH", assetname: "BDT Testing with ALM (QC / Octane)", category: "Test Automation", domain: "-", summarydesc: "Framework for test scripts written in spoken language by functional dept. members", emailName: "Martin Hennecke", emailid: "-" },
        { sno: 53, expleo_region: "DACH", assetname: "MobiQ Mobile Testlab", category: "Mobile Test Cloud", domain: "-", summarydesc: "Internal cloud of mobile phones combined with a cloud for desktop web testing", emailName: "Bert Kleinikel", emailid: "Bert.Kleinikel@expleogroup.com" },
        { sno: 54, expleo_region: "DACH", assetname: "ROI Analysis / Component-based Test Automation", category: "Test Automation", domain: "-", summarydesc: "ROI analysis for component-based test automation", emailName: "Jens Calame", emailid: "Jens.Calame@expleogroup.com" },
        { sno: 55, expleo_region: "DACH", assetname: "Quality Benchmark Repository", category: "Code Analysis", domain: "-", summarydesc: "Collected Code Quality Management results from many years of project experience", emailName: "Mathias Herkt", emailid: "-" },
        { sno: 56, expleo_region: "DACH", assetname: "Expleo Connect", category: "Mobile App", domain: "-", summarydesc: "Expleo Company App for Customers and Employees", emailName: "Markus Hlebajna", emailid: "Markus.Hlebajna@expleogroup.com" },
        { sno: 57, expleo_region: "DACH", assetname: "Omnichannel Test Framework (OCTF)", category: "Test Automation", domain: "-", summarydesc: "YAML-based Selenium framework", emailName: "Robert Willemsen", emailid: "Robert.Willemsen@expleogroup.com" },
        { sno: 58, expleo_region: "DACH", assetname: "TOSCA Testpack for SAP S4/HANA", category: "Test Automation", domain: "-", summarydesc: "-", emailName: "Bolko Snurawa-Moll", emailid: "Bolko.Snurawa-Moll@expleogroup.com" },
        { sno: 59, expleo_region: "DACH", assetname: "Newton", category: "Test Automation", domain: "-", summarydesc: "Test Automation framework for Ranorex + SQS-Test", emailName: "Rafael Kania", emailid: "Rafael.Kania@expleogroup.com" },
        { sno: 60, expleo_region: "DACH", assetname: "Performance JMeter Framework", category: "Performance Test", domain: "-", summarydesc: "-", emailName: "Henning Rath", emailid: "Henning.Rath@expleogroup.com" },
        { sno: 61, expleo_region: "DACH", assetname: "Performance Selenium Framework", category: "Performance Test", domain: "-", summarydesc: "client-side performance extension", emailName: "Henning Rath", emailid: "Henning.Rath@expleogroup.com" },
        { sno: 62, expleo_region: "DACH", assetname: "Profile Generator", category: "Administration", domain: "-", summarydesc: "Management & Generation of employee profiles", emailName: "Diana Michold", emailid: "Diana.Michold@expleogroup.com" },
        { sno: 63, expleo_region: "DACH", assetname: "Reservierungssystem-Mobi-Q", category: "Mobile Test Cloud", domain: "-", summarydesc: "Internal reservation system for MobiQ", emailName: "Bert Kleinikel", emailid: "Bert.Kleinikel@expleogroup.com" },
        { sno: 64, expleo_region: "DACH", assetname: "AVP - Automated Valet Parking", category: "Autonomous Driving Prototype", domain: "Automotive", summarydesc: "-", emailName: "Alireza Ferdowsizadeh Naeeni", emailid: "alireza.ferdowsizadeh-naeeni@expleogroup.com" },
        { sno: 65, expleo_region: "DACH", assetname: "BERGAMO", category: "AUTOSAR Memory Mapping", domain: "Automotive", summarydesc: "-", emailName: "Peter Schenke", emailid: "peter.schenke@expleogroup.com" },
        { sno: 66, expleo_region: "DACH", assetname: "SAVONA", category: "Architecture Modelling and Verification", domain: "-", summarydesc: "-", emailName: "Peter M. Kruse", emailid: "peter.kruse@expleogroup.com" },
        { sno: 67, expleo_region: "DACH", assetname: "TDA - Test Drive Assistant", category: "Vehicle Testing", domain: "-", summarydesc: "-", emailName: "Alexander Kasmale", emailid: "alexander.kasmale@expleogroup.com" },
        { sno: 68, expleo_region: "DACH", assetname: "OTA Client", category: "Connection Test Management Tool", domain: "-", summarydesc: "-", emailName: "Paul Zantow", emailid: "Paul.Zantow@expleogroup.com" },
        { sno: 69, expleo_region: "DACH", assetname: "Automatic Mail Dispatch by Touch of a Button", category: "Administration Support", domain: "Generic", summarydesc: "Send email to the user from a specific ALM project field", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 70, expleo_region: "DACH", assetname: "Evaluate RoboCopy Log", category: "Administration Support", domain: "Generic", summarydesc: "Evaluate duration and size in Robocopy log", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 71, expleo_region: "DACH", assetname: "OTA_AddUsersToGroup_SQS", category: "Administration Support", domain: "Generic", summarydesc: "Assign user group to ALM users", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 72, expleo_region: "DACH", assetname: "OTA_ReadUserInfoFromProject_SQS", category: "Administration Support", domain: "Generic", summarydesc: "Read information of ALM users", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 73, expleo_region: "DACH", assetname: "OTA_RemoveUsersFromProject_SQS", category: "Administration Support", domain: "Generic", summarydesc: "Remove users from ALM project", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 74, expleo_region: "DACH", assetname: "ALM_Migration_11.00_12.50_v1.0_prod", category: "Administration Support", domain: "Generic", summarydesc: "Migration of ALM projects from 11.00 to 12.20 to 12.50", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 75, expleo_region: "DACH", assetname: "ImportProjektFromQCPFile", category: "Administration Support", domain: "Generic", summarydesc: "Import a ALM project from a qcp file", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 76, expleo_region: "DACH", assetname: "Project Copy", category: "Administration Support", domain: "Generic", summarydesc: "Copy a ALM project", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 77, expleo_region: "DACH", assetname: "Script Passwort Change", category: "Administration Support", domain: "Generic", summarydesc: "Change passwords for ALM projects (Oracle database)", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 78, expleo_region: "DACH", assetname: "Script Read and Update User", category: "Administration Support", domain: "Generic", summarydesc: "Read information of ALM users and change information", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 79, expleo_region: "DACH", assetname: "Create SQL Queries to Deactivate Inactive Users", category: "Administration Support", domain: "Generic", summarydesc: "Create sql queries to deactivate inactive users in ALM", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 80, expleo_region: "DACH", assetname: "User Creation", category: "Administration Support", domain: "Generic", summarydesc: "Create users in ALM", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 81, expleo_region: "DACH", assetname: "Read Users from Projects", category: "Administration Support", domain: "Generic", summarydesc: "Read users from ALM projects", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 82, expleo_region: "DACH", assetname: "Change_DBID_XML", category: "Administration Support", domain: "Generic", summarydesc: "Change values in the dbid.xml", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 83, expleo_region: "DACH", assetname: "Read Cost Centers", category: "Administration Support", domain: "Generic", summarydesc: "Read cost centers in distinguished names", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 84, expleo_region: "DACH", assetname: "Send Mails from Excel via Outlook", category: "Administration Support", domain: "Generic", summarydesc: "Sending emails to different users via Outlook", emailName: "Thomas Klampke", emailid: "Thomas.Klampke@expleogroup.com" },
        { sno: 85, expleo_region: "DACH", assetname: "Automatic LoadRunner Test from Swagger", category: "Performance Test", domain: "Generic", summarydesc: "Automatic test runs for specific interfaces based on a sketch of the test case", emailName: "Paul Zantow", emailid: "Paul.Zantow@expleogroup.com" },
        { sno: 86, expleo_region: "DACH", assetname: "TOSCA Testpack for SAP ECC 6.0", category: "Test Automation", domain: "Generic", summarydesc: "-", emailName: "Bolko Snurawa-Moll", emailid: "Bolko.Snurawa-Moll@expleogroup.com" },
        { sno: 87, expleo_region: "DACH", assetname: "TOSCA Testpack for Guidewire", category: "Test Automation", domain: "Generic", summarydesc: "-", emailName: "Bolko Snurawa-Moll", emailid: "Bolko.Snurawa-Moll@expleogroup.com" },
        { sno: 88, expleo_region: "UK", assetname: "Adrenaline ", category: "DevOps", domain: "All", summarydesc: "AWS hosted CICD Experiementation, Demonstration and Training platform", emailName: "Miren Sookdeo", emailid: "Miren.Sookdeo@expleogroup.com" },
        { sno: 89, expleo_region: "UK", assetname: "SauceLabs Java / C# Frameworks", category: "Test Automation", domain: "All", summarydesc: "To be completed by Jaimt Patel", emailName: "Jaimit Patel", emailid: "Jaimit.Patel@expleogroup.com" },
        { sno: 90, expleo_region: "UK", assetname: "Playwright Performance Test Framework", category: "Performance Testing", domain: "All", summarydesc: "A test framework that extends the Playwright test automation tool to deliver load and performance test capability", emailName: "Bryden Isbister", emailid: "Bryden.Isbister@expleogroup.com" },
        { sno: 91, expleo_region: "UK", assetname: "Loadrunner Citrix Function library", category: "Performance Testing", domain: "All", summarydesc: "A comprehensive library of portable Loadrunner C functions, that accelerate Citrix protocol performance test scripting  and ensure scripts are fault tolerant", emailName: "Bryden Isbister", emailid: "Bryden.Isbister@expleogroup.com" },
        { sno: 92, expleo_region: "INDIA", assetname: "JPOSFramework for JMETER ", category: "Message simulation", domain: "Cards & Payments", summarydesc: "This provides a JMETER set up and configuration files for VISA, MasterCard and QPAY schemes which can be leveraged for functional and performance testing", emailName: "Sebastian Valarian", emailid: "Sebastian.Valarian@expleogroup.com" },
        { sno: 93, expleo_region: "EGYPT", assetname: "Blockchain Tool", category: "Distributed Ledgers", domain: "Generic", summarydesc: "Blockchain based documents distribution system - PoC.", emailName: "Sherif Othman", emailid: "Sherif.Othman@expleogroup.com" },
        { sno: 94, expleo_region: "EGYPT", assetname: "Selenium Automation Tool", category: "Automation", domain: "All", summarydesc: "A Java native Automation Testing creation/execution Tool utilizing Selenium Web Driver built using Eclipse for an IDE, Scene Builder, JavaFX, CSS and JS for the UI. Tool is version controlled and currently hosted in a local repository in the Expleo EG network.", emailName: "Mahmoud Abdelwahab", emailid: "-" },
        { sno: 95, expleo_region: "EGYPT", assetname: "SF vs SAP Entries Comparison (RPA Framework)", category: "RPA (Ui-Path)", domain: "All", summarydesc: "Data Comparison and Reporting.", emailName: "Shehab Soltan", emailid: "Shehab.Soltan@expleogroup.com" },
        { sno: 96, expleo_region: "EGYPT", assetname: "On-Boarding Invites (RPA Framework)", category: "RPA (Ui-Path)", domain: "All", summarydesc: "Sending invitations to employees based on the availability of each one, to deliver the orientation sessions for new joiners. ", emailName: "Shehab Soltan", emailid: "Shehab.Soltan@expleogroup.com" },
        { sno: 97, expleo_region: "EGYPT", assetname: "Generating HR Letters (RPA Framework)", category: "RPA (Blue Prism)", domain: "All", summarydesc: "Generating HR Letters for employees.", emailName: "Shehab Soltan", emailid: "Shehab.Soltan@expleogroup.com" },
        { sno: 98, expleo_region: "EGYPT", assetname: "Updating Excel Reports from Jira", category: "Data & Reporting Management", domain: "All", summarydesc: "Updating Records in Excel from Jira using Excel VBA.", emailName: "George Atallah", emailid: "-" },
        { sno: 99, expleo_region: "EGYPT", assetname: "Manor XML Generator", category: "Data Management", domain: "TCM", summarydesc: "Generating XML file for Manor Project.", emailName: "-", emailid: "-" },
        { sno: 100, expleo_region: "EGYPT", assetname: "Reporting Utility (Power BI)", category: "Dashboards and Reporting", domain: "All", summarydesc: "Power BI Dashboards are used to represent data using tables, charts and graphs.", emailName: "Hisham Shalaby", emailid: "Hisham.Shalaby@expleogroup.com" },
        { sno: 101, expleo_region: "SOUTH AFRICA", assetname: "QNode", category: "Automation Orchestration Engine", domain: "All", summarydesc: "Cross platform, tool agnostic automation orchistration engine with modular action and tool external repository, that manages entire automation execution lifecycle.", emailName: "Wayne Vera", emailid: "Wayne.Vera@expleogroup.com" },
        { sno: 102, expleo_region: "USA", assetname: "TSDM", category: "Automation", domain: "All", summarydesc: "Toolset that implements the Test Scenario Design Model, to help write effective automated test cases from acceptance criteia", emailName: "Robert Gormley", emailid: "Robert.Gormley@Trissential.com" },
        { sno: 103, expleo_region: "USA", assetname: "Report Central", category: "Data Analytics", domain: "Internal", summarydesc: "Internal Reporting", emailName: "Julie Calboutin", emailid: "Julie.Calboutin@Trissential.com" },
        { sno: 104, expleo_region: "DACH", assetname: "Click2Automate (C2A)", category: "Test Automation", domain: "-", summarydesc: "Test case definition based on an object repository and generation of automation code. ", emailName: "Uwe Peitsch", emailid: "Uwe.Peitsch@expleogroup.com" },
        { sno: 105, expleo_region: "INDIA", assetname: "DMask", category: "Data Management", domain: "All", summarydesc: "Data Masking Utility", emailName: "Rajasundaram Subramanian", emailid: "Rajasundaram.Subramanian@expleogroup.com" },

    ]

    GQAACatalogue.map((el, index) => {

        // Creating table row and table data
        let trCreate = document.createElement("tr");
        let tdCreate = document.createElement("td");
        let tdCreateTwo = document.createElement("td");
        let tdCreateThree = document.createElement("td");
        let tdCreateFour = document.createElement("td");
        let tdCreateFive = document.createElement("td");
        let tdCreateSix = document.createElement("td");
        let tdCreateSeven = document.createElement("td");

        // Appending created elements
        let appdendtdOne = trCreate.appendChild(tdCreate);
        let appdendtdtwo = trCreate.appendChild(tdCreateTwo);
        let appdendtdThree = trCreate.appendChild(tdCreateThree);
        let appdendtdFour = trCreate.appendChild(tdCreateFour);
        let appdendtdFive = trCreate.appendChild(tdCreateFive);
        let appdendtdSix = trCreate.appendChild(tdCreateSix);
        let appdendtdSeven = trCreate.appendChild(tdCreateSeven);

        // Adding class Name
        appdendtdOne.className = "col-1";
        appdendtdtwo.className = "col-1";
        appdendtdThree.className = "col-2";
        appdendtdFour.className = "col-1";
        appdendtdFive.className = "col-1";
        appdendtdSix.className = "col-2";
        appdendtdSeven.className = "col-4";

        // Append Input Values 
        appdendtdOne.appendChild(document.createTextNode(el.sno));
        appdendtdtwo.appendChild(document.createTextNode(el.expleo_region));
        appdendtdThree.appendChild(document.createTextNode(el.assetname));
        appdendtdFour.appendChild(document.createTextNode(el.category));
        appdendtdFive.appendChild(document.createTextNode(el.domain));
        appdendtdSix.appendChild(document.createTextNode(el.summarydesc));
        if (el.emailName === "-") {
            tdCreateSeven.insertAdjacentHTML('afterbegin', `-`);
        } else if (el.emailid === "-" && el.emailName !== "-") {
            tdCreateSeven.insertAdjacentHTML('afterbegin', `${el.emailName}`);
        } else {
            tdCreateSeven.insertAdjacentHTML('afterbegin', `${el.emailName} -- <a href="mailto:${el.emailid}">${el.emailid}</a>`);
        }

        // Append Table Row in Table
        var table = document.getElementById("GQAACatalogue");
        if (table != null) {
            table.appendChild(trCreate);
        };
    });


});
