sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/m/Dialog",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/Button",
    "sap/m/VBox"
], function (
    ControllerExtension,
    Dialog,
    Label,
    Input,
    Button,
    VBox
) {
    "use strict";

    return ControllerExtension.extend(
        "com.zfi.gl.zuigldocreportv4.ext.controller.PopUpForInitialLoad", {
            override: {
                onInit: function () {

                    var oCompanyCode = new Input({
                        placeholder: "Enter Company Code",
                        maxLength: 4
                    });

                    var oDocument = new Input({
                        placeholder: "Enter Clearing Document",
                        maxLength: 10
                    });

                    var oFiscalYear = new Input({
                        placeholder: "Enter Fiscal Year",
                        maxLength: 4
                    });

					// var oKeyDate = new DatePicker({
                    //     displayFormat: "MM/dd/yyyy",
                    //     valueFormat: "yyyy-MM-dd"
                    // });

                    var oDialog = new Dialog({
                        title: "GL Document Report - Selection",
                        contentWidth: "400px",

                        content: new VBox({
                            items: [
                                new Label({ text: "Company Code" }),
                                oCompanyCode,

                                new Label({ text: "Clearing Document" }),
                                oDocument,

                                new Label({ text: "Fiscal Year" }),
                                oFiscalYear

								// new Label({ text: "Key Date" }),
                                // oKeyDate
                            ]
                        }),

                        beginButton: new Button({
                            text: "Execute",
                            type: "Emphasized",
                            press: function () {

                                var sCompanyCode = oCompanyCode.getValue();
                                var sDocument = oDocument.getValue();
                                var sFiscalYear = oFiscalYear.getValue();
								// var sKeyDate = oKeyDate.getValue();

                                console.log("Company Code:", sCompanyCode);
                                console.log("Clearing Document:", sDocument);
                                console.log("Fiscal Year:", sFiscalYear);
								// console.log("Key Date:", sKeyDate);

                                oDialog.close();
                            }
                        }),

                        endButton: new Button({
                            text: "Cancel",
                            press: function () {
                                oDialog.close();
                            }
                        })
                    });

                    this.base.getView().addDependent(oDialog);
                    oDialog.open();
                },

                onExit: function () {
                    // Dialog is destroyed with its parent view.
                }
            }
        }
    );
});